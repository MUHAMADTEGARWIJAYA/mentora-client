<template>
  <div
    class="bg-gradient-to-b from-[#3674B5] to-[#90D1CA] flex h-screen justify-center items-center"
  >
    <slot></slot>

    <div class="hidden md:block w-full">
      <WelcomeForm />
    </div>
  </div>
</template>

<script setup>
import WelcomeForm from './WelcomeForm.vue'
</script>
