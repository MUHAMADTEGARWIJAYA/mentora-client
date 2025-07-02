<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Agent Login</h2>
        <p class="mt-2 text-sm text-gray-600">Hey, Enter your details to get sign in to your account</p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="email" class="sr-only">Email or Phone No</label>
            <input id="email" name="email" type="text" required
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Enter Email / Phone No" v-model="loginData.username" />
          </div>
          <div>
            <label for="postcode" class="sr-only">Postcode</label>
            <input id="postcode" name="postcode" type="text" required
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Postcode" v-model="loginData.postcode" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <a href="#" class="text-sm text-blue-600 hover:text-blue-500">Help</a>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Having trouble in sign in?</a>
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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

      <div class="grid grid-cols-3 gap-3">
        <button type="button"
          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Sign in with Google</span>
          Google
        </button>
        <button type="button"
          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Sign in with Apple ID</span>
          Apple ID
        </button>
        <button type="button"
          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Sign in with Facebook</span>
          Facebook
        </button>
      </div>

      <div class="text-center text-sm">
        <p class="text-gray-600">
          Don't have an account?
          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Request Now</a>
        </p>
      </div>
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
/* Additional custom styles if needed */
</style>
