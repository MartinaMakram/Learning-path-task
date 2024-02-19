<template>
  <!--Navbar-->
  <header class="top-0 bg-white w-[323px] h-[98px] lg:w-[1250px] lg:h-[70px]">
    <nav class="flex justify-center items-center pt-5 lg:pt-5">
      <NuxtLink
        class="font-lato font-bold text-xl leading-7 ml-[18px] lg:ml-[50px]"
        to="/"
        >LOGO</NuxtLink
      >
      <DefaultSearchbar class="hidden lg:flex" />
      <ul
        class="flex flex-1 justify-end items-center lg:gap-[22px] gap-[10px] mr-3"
      >
        <div class="flex items-center gap-[4px]">
          <li><img src="../assets/img/user.png" alt="user-icon" /></li>
          <NuxtLink
            v-if="!isAccountPage"
            to="/auth/login"
            class="hidden lg:block"
            >Sign In</NuxtLink
          >
          <NuxtLink v-else to="/account/accountdetails" class="hidden lg:block"
            >Account</NuxtLink
          >
        </div>

        <div class="flex items-center gap-[4px]">
          <li><img src="../assets/img/favorite.png" alt="favorite-icon" /></li>
          <li class="hidden lg:block">WishList</li>
        </div>

        <div class="flex items-center gap-[4px]">
          <li><img src="../assets/img/cart.png" alt="cart-icon" /></li>
          <li class="hidden lg:block">Cart</li>
        </div>
      </ul>
    </nav>
    <div class="flex mr-3">
      <button class="lg:hidden px-5">
        <img src="../assets/img/menu.png" alt="menu-button" />
      </button>
      <DefaultSearchbar class="lg:hidden" />
    </div>
  </header>

  <!--Category List-->
  <div
    class="hidden lg:flex items-center justify-center w-[full] h-[45px] bg-[#FBFBFB]"
  >
    <DefaultCategoryList />
  </div>

  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isAccountPage = computed(() => {
  return route.path.startsWith('/account')
})
</script>

<style scoped></style>
