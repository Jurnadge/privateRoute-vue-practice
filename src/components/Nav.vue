<script>
export default {
  name: "Nav",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<template>
  <nav class="w-full bg-sky-700">
    <div class="flex justify-between items-center px-10 py-3">
      <div>Logo</div>
      <!-- Large device -->
      <div class="hidden lg:block md:block xl:block">
        <ul class="flex gap-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Dropdown</a>
          </li>
        </ul>
      </div>

      <!-- Mobile Device -->
      <button
        v-if="!showMenu"
        class="lg:hidden md:hidden xl:hidden z-40"
        @click="toggleNav"
      >
        <i class="fas fa-bars"></i>
      </button>
      <button
        v-else
        class="lg:hidden md:hidden xl:hidden z-40"
        @click="toggleNav"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </nav>

  <div
    v-bind:class="{ 'scale-0': !showMenu, 'scale-100': showMenu }"
    class="fixed flex top-0 justify-center w-full h-full bg-white transition-all ease-in-out duration-200 shadow-black shadow-md"
  >
    <ul class="flex flex-col gap-2 text-center mt-10 pl-6 py-5">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="#">Service</a>
      </li>
      <li>
        <a href="#">Dropdown</a>
      </li>
    </ul>
  </div>
</template>
