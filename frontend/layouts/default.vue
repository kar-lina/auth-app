<template>
  <div class="flex flex-col justify-between h-[100vh] w-full">
    <Header />
    <div class="xl:container xl:mx-auto p-4 h-full flex-1 pt-[68px] ">
      <slot />
    </div>
    <Footer />
  </div>
</template>

