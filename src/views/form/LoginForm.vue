<template>
  <FormMain>
    <div
      class="flex flex-col justify-center p-6 sm:p-16 rounded-xl backdrop-blur-[2px] bg-white/55 w-[90%] max-w-[500px] h-auto sm:h-[600px] xl:mx-auto xl:absolute xl:top-1/2 xl:left-3/4 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2"
    >
      <div class="flex items-center justify-start">
        <img src="/logo1.png" class="w-10 h-10 rounded-full object-cover" alt="Mentora Logo" />
        <h2 class="text-black font-bold text-lg ml-2">Login Mentora</h2>
      </div>

      <p class="text-zinc-600 text-sm mt-2 md:mt-8">Haloo selamat datang di Mentora</p>

      <form class="mt-8">
        <div>
          <label for="email" class="block text-zinc-600 text-sm border-[#3F3F46]">Email</label>
          <input
            type="email"
            placeholder="Email"
            class="block w-full bg-rose-50 border border-rose-50 rounded text-black px-2 py-1 placeholder:text-zinc-600 text-sm mt-1"
          />
        </div>

        <div class="mt-6">
          <div class="flex items-end justify-between">
            <label for="password" class="block text-zinc-600 text-sm border-[#3F3F46]"
              >Password</label
            >
            <router-link to="/forgot-password" class="text-zinc-600 hover:text-primary text-sm">
              Lupa Password?</router-link
            >
          </div>

          <input
            type="password"
            placeholder="Password"
            class="block w-full bg-rose-50 border border-rose-50 rounded text-black px-2 py-1 placeholder:text-zinc-600 text-sm mt-1"
          />
        </div>

        <button
          class="mt-8 w-full bg-[#3674B5] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition"
          type="submit"
        >
          Login
        </button>

        <div class="flex items-center my-6">
          <div class="flex-1 border-t border-gray-300"></div>
          <span class="px-3 text-zinc-600 text-sm">atau</span>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          class="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-50 transition"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" class="w-4 h-4" />
          Login dengan Google
        </button>

        <p class="text-zinc-600 text-sm mt-6 text-center">
          Tidak punya akun?
          <router-link to="/register" class="text-[#3674B5] hover:text-opacity-80"
            >Daftar</router-link
          >
        </p>
      </form>
    </div>
  </FormMain>
</template>

<script setup>
import FormMain from './FormMain.vue'
</script>
