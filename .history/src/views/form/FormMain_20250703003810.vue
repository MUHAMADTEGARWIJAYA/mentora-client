<template>
  <div class="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
    <div class=" w-full space-y-8   rounded-2xl">
      <div class="flex w-full justify-center  bg-slate-400">
        <img src="/logo.png" class="h-20 w-20" alt="">
        <h1 class="text-2xl font-bold text-[#222831]">Mentora</h1>
      </div>

      <div class="flex flex-col space-y-8 py-12 px-4 sm:px-6 lg:px-48">
        <div class="text-center">
          <h2 class="mt-6 text-2xl font-bold text-[#222831]">Sign in mentora</h2>
          <p class="mt-2 text-sm text-gray-600">Hey, Enter your details to get sign in to your account</p>
        </div>

        <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
          <div class="rounded-md shadow-sm space-y-4">
            <div>
              <label for="email" class="text-gray-600">Email</label>
              <input id="email" name="email" type="text" required
                class="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition duration-200"
                placeholder="Enter Email" v-model="loginData.username" />
            </div>
            <div>
              <label for="postcode" class="text-gray-600">Password</label>
              <input id="password" name="password" type="text" required
                class="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition duration-200"
                placeholder="Password" v-model="loginData.postcode" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <a href="#" class="text-sm text-blue-600 hover:text-blue-800 transition duration-200">Help</a>
            </div>
            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-800 transition duration-200">Having trouble
                in
                sign in?</a>
            </div>
          </div>

          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#3674B5] transition duration-200">
              Sign in
            </button>
          </div>
        </form>

        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">Or sign in with</span>
          </div>
        </div>

        <div class="flex justify-center w-full">
          <button type="button"
            class="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4" />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853" />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05" />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335" />
            </svg>
            Google
          </button>
          <!-- <button type="button"
          class="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200">
          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Apple
        </button> -->
          <!-- <button type="button"
          class="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200">
          <svg class="w-5 h-5 mr-2 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
          Facebook
        </button> -->
        </div>

        <div class="text-center text-sm">
          <p class="text-gray-600">
            Don't have an account?
            <a href="#" class="font-medium text-blue-600 hover:text-blue-800 transition duration-200">Request Now</a>
          </p>
        </div>
      </div>

    </div>
    <div class="text-center text-sm text-gray-600 w-full h-screen bg-black">

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const loginData = ref({
      username: '',
      postcode: ''
    });

    const handleLogin = () => {
      console.log('Login data:', loginData.value);
      // Add your login logic here
    };

    return {
      loginData,
      handleLogin
    };
  }
};
</script>

<style scoped>
/* Smooth transitions for interactive elements */
button,
a,
input {
  transition: all 0.2s ease-in-out;
}
</style>
