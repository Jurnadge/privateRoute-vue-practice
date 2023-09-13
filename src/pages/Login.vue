<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="border rounded-md shadow-md shadow-black lg:w-1/4 bg-white">
      <h1 class="text-center mt-3">Login</h1>
      <form class="flex flex-col gap-3 px-5 py-5">
        <div class="relative">
          <input
            type="text"
            id="email"
            class="block px-2 pb-2 pt-3 w-full text-sm text-gray-900 bg-slate-200 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="email"
            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Email</label
          >
        </div>

        <div class="relative">
          <input
            type="password"
            id="password"
            class="block px-2 pb-2 pt-3 w-full text-sm text-gray-900 bg-slate-200 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="password"
            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Password</label
          >
        </div>
        <button type="submit" class="px-2 py-1 bg-red-600 text-white">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
