import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", () => {
  const toastMessage = ref<string | undefined>(undefined);
  const toastType = ref<string | undefined>(undefined);
  const toastDate = ref<Date | undefined>(undefined);

  const alert = (message: string, type: "info" | "success" | "error" = "success") => {
    toastMessage.value = message;
    toastType.value = type;
    toastDate.value = new Date();
  };

  return {
    alert,
    toastMessage,
    toastType,
    toastDate,
  };
});
