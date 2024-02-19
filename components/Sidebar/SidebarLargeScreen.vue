<template>
  <div>
    <!--Large Screen sidebar-->
    <div
      class="hidden lg:block flex-col gap-2 mt-10 border-2-black mx-5 p-5 w-[300px] h-[380px] rounded-sm bg-[#F5F5F5]"
    >
      <div class="flex items-center gap-4 pb-4 border-b border-gray">
        <div class="bg-black text-white p-3 rounded-[50%]">MN</div>
        <p>
          Hi, <br />
          Mai Negm
        </p>
      </div>
      <!--My Orders-->
      <div
        class="flex items-center justify-between gap-4 pt-4 pb-4 border-b border-gray"
      >
        <div class="flex gap-4">
          <img src="../../assets/img/bag.png" alt="bag-icon" />
          <NuxtLink
            to="/account/myorders"
            class="h-[23px] text-[#1B1C1E]-400 hover:text-gray-300"
            >My Orders</NuxtLink
          >
        </div>

        <img
          class="w-4 h-4 mr-3"
          src="../../assets/img/plus.png"
          alt="plus-icon"
        />
      </div>
      <div>
        <!-- Account Details -->
        <div
          :class="{
            'active-route': $route.path.includes('/account/accountdetails'),
          }"
          class="flex items-center gap-4 pt-4 pb-4 border-b"
        >
          <img
            class="w-5 h-5"
            src="../../assets/img/another-user.png"
            alt="user-icon"
          />
          <NuxtLink
            to="/account/accountdetails"
            class="text-[#1B1C1E]-400 hover:text-gray-300"
            >Account Details</NuxtLink
          >
        </div>

        <!-- Change Password -->
        <div
          :class="{
            'active-route': $route.path.includes('/account/changepassword'),
          }"
          class="flex items-center gap-4 pt-4 pb-4 border-b"
        >
          <img
            class="w-5 h-5"
            src="../../assets/img/locker.png"
            alt="locker-icon"
          />
          <NuxtLink
            to="/account/changepassword"
            class="text-[#1B1C1E]-400 hover:text-gray-300"
            >Change Password</NuxtLink
          >
        </div>
      </div>
      <!--Location-->
      <div class="flex items-center gap-4 pt-4 pb-4 border-b border-gray">
        <img
          class="w-5 h-5"
          src="../../assets/img/location.png"
          alt="location-icon"
        />
        <NuxtLink class="text-[#1B1C1E]-400 hover:text-gray-300"
          >My Address</NuxtLink
        >
      </div>
      <!--Logout---->
      <div @click="handleLogout" class="flex items-center gap-4 pt-4 pb-4">
        <img
          class="w-5 h-5"
          src="../../assets/img/logout.png"
          alt="logout-icon"
        />
        <NuxtLink
          id="logout"
          @click="handleLogout"
          to="/account/logout"
          class="text-[#1B1C1E]-400 hover:text-gray-300"
          >Logout</NuxtLink
        >
      </div>
    </div>
    <button
      class="hidden lg:block text-[#C40024] bg-[#F5F5F5] w-[300px] h-[49px] p-4 mt-4 mx-5 rounded-sm"
    >
      Delete Account
    </button>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/store/auth'

const { logout } = useAuth()

const handleLogout = async () => {
  try {
    let token = localStorage.getItem('token')
    localStorage.clear()
    await logout(token as string)
  } catch (error) {
    console.log('Error Logging out from Sidebar component:', error)
  }
}
</script>

<style scoped>
.active-route {
  border-color: #00abeb;
}
</style>
