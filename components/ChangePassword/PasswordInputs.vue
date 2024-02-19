<template>
  <!--Current-->
  <div class="flex flex-col px-5 mt-4 lg:block lg:mt-10">
    <label>Current Password</label>
    <input
      type="password"
      placeholder="Enter your current password"
      class="pl-2 w-[275px] h-[40px] flex items-center rounded-sm bg-[#F5F5F5] lg:pl-2 w-full h-[40px] flex items-center"
    />
  </div>
  <div class="flex flex-col px-5 mt-4 lg:block">
    <label>New Password</label>
    <input
      type="password"
      placeholder="Enter your new password"
      class="pl-2 w-[275px] h-[40px] flex items-center rounded-sm bg-[#F5F5F5] lg:pl-2 w-full h-[40px] flex items-center"
    />
  </div>
  <div class="flex flex-col px-5 mt-4 w-[full] lg:block">
    <label>Repeat New Password</label>
    <input
      type="password"
      placeholder="Repeat your new password"
      class="pl-2 w-[275px] h-[40px] rounded-sm bg-[#F5F5F5] lg:pl-2 w-full h-[40px] flex items-center"
    />
  </div>
</template>
