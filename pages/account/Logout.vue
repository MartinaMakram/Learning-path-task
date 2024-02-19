<template>
  <div
    class="hidden lg:flex flex-col justify-center items-center gap-4 h-[155px] mt-[120px]"
  >
    <h1 class="text-2xl text-[#1B1C1E]">You've been Signed out</h1>
    <p class="text-lg text-[#1B1C1E] w-[620px]">
      You are signed out on this device and this browser only. If your account
      is open in a different web or mobile browser, or another device, you will
      need to sign out separately.
    </p>
    <NuxtLink to="/auth/login" class="text-[#00ABEB] text-xl"
      >Sign In back</NuxtLink
    >
  </div>
  <div
    class="lg:hidden flex flex-col gap-4 justify-center items-center mt-[70px]"
  >
    <h1 class="text-2xl text-[#1B1C1E]">You've been signed out.</h1>
    <p
      class="text-sm text-[#1B1C1E] flex justify-center items-center px-[20px] w-[319px]"
    >
      You are signed out on this device and this browser only. If your account
      is open in a different web or mobile browser, or another device, you will
      need to sign out separately.
    </p>
    <NuxtLink to="/auth/login" class="text-[#00ABEB] text-xl"
      >Sign In back</NuxtLink
    >
  </div>
</template>
