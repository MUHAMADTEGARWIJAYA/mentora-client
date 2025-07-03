<template>
  <div class="flex h-screen bg-[#3674B5]">
    <SidebarMain />
    <RouterView />
  </div>
</template>

<script setup>
import SidebarMain from '@/components/SidebarMain.vue'
</script>
