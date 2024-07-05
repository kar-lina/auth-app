<template>
  <footer
    class="footer bg-gradient-to-r from-purple-200 to-violet-300 text-neutral items-center p-4"
  >
    <aside class="grid-flow-col items-center">
      <IconsLogo />
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a>
        <IconsTelegram />
      </a>
      <a>
        <IconsEmail width="24" height="24" />
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          ></path>
        </svg>
      </a>
    </nav>
  </footer>
</template>
