<template>
  <div ref="otpCont">
    <input
      v-for="(el, ind) in digits"
      :key="el ? el + ind : ind"
      v-model="digits[ind]"
      type="text"
      :class="['digit-box', small ? '_small' : '']"
      :autofocus="ind === 0"
      :placeholder="String(ind + 1)"
      maxlength="1"
      @keydown="handleKeyDown($event, ind)"
    />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  digitCount: {
    type: Number,
    required: true,
  },
  small: {
    type: Boolean,
    required: false,
  },
});

const digits: Array<null | string> = reactive([]);
for (let i = 0; i < props.digitCount; i++) {
  digits[i] = null;
}
// if (props.default && props.default.length === props.digitCount) {
//   for (let i = 0; i < props.digitCount; i++) {
//     digits[i] = props.default.charAt(i);
//   }
// } else {

// }
const otpCont = ref<HTMLDivElement | null>(null);
// const otpContChildren = ref< HTMLInputElement[]>(otpCont.value?.children);
const emit = defineEmits(["update:otp"]);

const isDigitsFull = function () {
  for (const elem of digits) {
    if (elem == null || elem == undefined) {
      return false;
    }
  }

  return true;
};
const handleKeyDown = function (event: KeyboardEvent, index: number) {
  if (event.key !== "Tab" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
    event.preventDefault();
  }

  if (event.key === "Backspace") {
    digits[index] = null;

    if (index != 0) {
      otpCont?.value?.children[index - 1].focus() as HTMLInputElement;
    }

    return;
  }

  if (new RegExp("^([0-9])$").test(event.key)) {
    digits[index] = event.key;

    if (index != props.digitCount - 1) {
      otpCont?.value?.children[index + 1].focus();
    }
  }
  if (isDigitsFull()) {
    emit("update:otp", digits.join(""));
  }
};
</script>
<style scoped>
.digit-box {
  height: 4rem;
  width: 4rem;
  border: 1px solid #eca9cf;
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  font-size: 2rem;
}

.digit-box._small {
  height: 2rem;
  width: 2rem;
  border: 1px solid #eca9cf;
  display: inline-block;
  border-radius: 5px;
  padding: 8px;
  margin: 2px;
  font-size: 1rem;
}

.digit-box:focus {
  outline: 1px solid #ea96c5;
}
</style>
