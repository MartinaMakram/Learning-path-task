<template>
  <div class="flex gap-2 px-6 border-t">
    <p>Home</p>
    <p>/</p>
    <p class="text-gray-400">Change Password</p>
  </div>
  <div class="flex flex-wrap">
    <Sidebar class="hidden lg:block" />
    <ChangePasswordLargeScreen />
    <ChangePasswordForMobile />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account',
})
</script>
