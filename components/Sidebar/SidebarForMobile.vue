
<template>
  <div
    v-if="isSidebarVisible"
      class="w-full md:w-1/6 md:py-12 sm:h-screen lg:hidden"
    >
      <div class="py-4 px-6 flex flex-col gap-4 ">
          <div class="flex items-center gap-4 justify-between border-b py-4">
            <div class="flex gap-4">
              <img src="../../assets/img/bag.png" alt="bag-icon">
          <NuxtLink
          to="/account/myorders"
          class="h-[23px] text-[#1B1C1E]-400  hover:text-gray-300"
          >My Orders</NuxtLink
        >
            </div>
  
         <img class="w-4 h-4" src="../../assets/img/plus.png" alt="plus-icon">
  
        </div>
        <div class="flex items-center gap-4 justify-between border-b py-4">
            <div class="flex gap-4">
              <img class="w-5 h-5" src="../../assets/img/another-user.png" alt="user-icon">
          <NuxtLink
          to="/account/accountdetails"
          class="text-[#1B1C1E]-400 hover:text-gray-300"
          @click="hideSidebarAndShowForm"
          >Account Details</NuxtLink
        >
            </div>
        </div>
        <div class="flex items-center gap-4 justify-between border-b py-4">
            <div class="flex gap-4">
              <img class="w-5 h-5" src="../../assets/img/locker.png" alt="locker-icon">
          <NuxtLink
          to="/account/changepassword"
          class="text-[#1B1C1E]-400 hover:text-gray-300"
          @click="hideSidebarAndShowForm"
          >Change Password</NuxtLink
        >
            </div>
        </div>
  
        <div class="flex items-center gap-4 justify-between border-b py-4" >
            <div class="flex gap-4">
              <img class="w-5 h-5" src="../../assets/img/location.png" alt="location-icon">
          <NuxtLink
          class="text-[#1B1C1E]-400 hover:text-gray-300"
          >My Address</NuxtLink
        >
            </div>
        </div>
  
        <div class="flex items-center gap-4 justify-between border-b py-4">
            <div class="flex gap-4">
              <img class="w-5 h-5" src="../../assets/img/logout.png" alt="logout-icon">
          <NuxtLink
          id="logout"
          @click="handleLogout"
          to="/account/logout"
          class="text-[#1B1C1E]-400 hover:text-gray-300"
          >Logout</NuxtLink
        >
            </div>
        </div>
        <div class="flex items-center ">
          <img class="w-[24px] h-[24px]" src="../../assets/img/delete.png" alt="delete-icon">
          <button
            
            class="px-3 py-2 text-sm text-[#C40024] font-medium  hover:text-gray-300"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import useAuth from '~/store/auth'
  
  const { logout } = useAuth()
  const isSidebarVisible = ref(true)
  
  
  const hideSidebarAndShowForm = () => {
    isSidebarVisible.value =false
  }
  
  const handleLogout = async () => {
    try {
      let token = localStorage.getItem('token')
      localStorage.clear()
      await logout(token as string)
  
    } catch(error) {
        console.log('Error Logging out from Sidebar component:', error)
    }
  }
  </script>
  