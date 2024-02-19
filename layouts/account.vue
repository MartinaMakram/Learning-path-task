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

  <!--MobileFooter-->
  <footer class="lg:hidden w-[323px] h-[600px] bg-[#F8F8F8]">
    <div class="p-[43px]">
      <h1
        class="font-lato font-bold text-2xl lg:text-3xl leading-7 lg:leading-9"
      >
        LOGO
      </h1>
    </div>
    <div
      class="flex flex-col items-center justify-center px-[43px] h-[130px] gap-5"
    >
      <div class="flex items-center justify-between border-b w-full pb-5">
        <p>Quick Links</p>
        <img src="../assets/img/arrow.png" alt="arrow-icon" />
      </div>
      <div class="flex items-center justify-between border-b w-full pb-5">
        <p>Help</p>
        <img src="../assets/img/arrow.png" alt="arrow-icon" />
      </div>
      <div class="flex items-center justify-between w-full">
        <p>About</p>
        <img src="../assets/img/arrow.png" alt="arrow-icon" />
      </div>
    </div>
    <div class="flex items-center mt-10 gap-1 px-[43px]">
      <img
        class="w-[14px] h-[14px]"
        src="../assets/img/earth.png"
        alt="earth-icon"
      />
      <p>English</p>
      <img src="../assets/img/arrow.png" alt="arrow-icon" />
    </div>

    <div class="flex items-center justify-center mt-10 gap-3 h-[30px]">
      <div class="border-2 rounded-[50%] p-2 flex items-center justify-center">
        <img
          class="[8px]"
          src="../assets/img/facebook.png"
          alt="facebook-icon"
        />
      </div>
      <div class="border-2 rounded-[50%] p-2 flex items-center justify-center">
        <img
          class="[8px]"
          src="../assets/img/instgram.png"
          alt="instgram-icon"
        />
      </div>
      <div class="border-2 rounded-[50%] p-2 flex items-center justify-center">
        <img class="[8px]" src="../assets/img/twitter.png" alt="twitter-icon" />
      </div>
    </div>
    <div class="flex flex-col gap-8 px-[43px] mt-10 bg-[#F0F0F0] pt-5">
      <p>Tax Registration ID : 123456789</p>
      <p>© Brand Name. All Rights Reserved .</p>
      <div class="flex items-center gap-2">
        <p>© Powered by</p>
        <img
          class="w-[30px] h-[12px]"
          src="../assets/img/hbm.png"
          alt="hbm-icon"
        />
      </div>
    </div>
  </footer>

  <!--large screen Footer-->
  <footer
    class="hidden lg:w-[1270px] bg-[#F8F8F8] lg:flex items-center gap-[100px] h-[230px] justify-center"
  >
    <h1 class="font-lato font-bold text-2xl leading-7">LOGO</h1>
    <div class="flex gap-[120px] h-[130px]">
      <div class="flex flex-col h-[150px]">
        <h2>Quick Links</h2>
        <div class="flex flex-col gap-1 mt-3">
          <p>Home</p>
          <p>Cart</p>
          <p>Account</p>
          <p>Wishlist</p>
        </div>
      </div>
      <div class="flex flex-col">
        <h2>Help</h2>
        <div class="flex flex-col gap-1 mt-3">
          <p>Contact us</p>
          <p>Payment & Refund Policy</p>
          <p>Delivery & Return Policy</p>
        </div>
      </div>
      <div class="flex flex-col">
        <h2>About</h2>
        <div class="flex flex-col gap-1 mt-3">
          <p>About us</p>
          <p>Find Us</p>
          <p>Our Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center justify-end gap-1">
        <img
          class="w-[14px] h-[14px]"
          src="../assets/img/earth.png"
          alt="earth-icon"
        />
        <p>English</p>
        <img src="../assets/img/arrow.png" alt="arrow-icon" />
      </div>
      <div class="flex items-center justify-center mt-5 gap-3 h-[30px]">
        <div
          class="border-2 rounded-[50%] p-2 flex items-center justify-center"
        >
          <img
            class="[8px]"
            src="../assets/img/facebook.png"
            alt="facebook-icon"
          />
        </div>
        <div
          class="border-2 rounded-[50%] p-2 flex items-center justify-center"
        >
          <img
            class="[8px]"
            src="../assets/img/instgram.png"
            alt="instgram-icon"
          />
        </div>
        <div
          class="border-2 rounded-[50%] p-2 flex items-center justify-center"
        >
          <img
            class="[8px]"
            src="../assets/img/twitter.png"
            alt="twitter-icon"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute()

const isAccountPage = computed(() => {
  return route.path.startsWith('/account')
})
</script>
