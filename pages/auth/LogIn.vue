<template>
  <div class="flex items-center justify-center h-[500px] lg:h-[700px]">
    <div
      class="flex-col justify-center items-center mt-4 lg:w-[529px] lg:mx-auto lg:h-[554px]"
    >
      <h1 class="font-lato font-bold text-2xl text-center leading-6">
        Sign In
      </h1>

      <div class="flex flex-col px-5 mt-4">
        <FormInput
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
          :value="emailInput"
          @input="emailInput = $event.target.value"
        />
        <p v-if="emailError" class="text-red-700">{{ emailError }}</p>
      </div>

      <div class="flex px-5 mt-4">
        <FormInput
          label="Password"
          type="password"
          id="password"
          placeholder="Enter your password"
          :value="passwordInput"
          @input="passwordInput = $event.target.value"
        />
      </div>

      <NuxtLink to="#" class="text-[#00ABEB] flex justify-end px-5 py-2"
        >Forgot Password?</NuxtLink
      >
      <p
        v-if="errorMessage"
        class="text-red-700 mt-4 text-center text-sm lg:text-lg"
      >
        {{ errorMessage }}
      </p>
      <div class="px-5">
        <button
          @click="submitLoginForm"
          id="sign-in-btn"
          class="flex justify-center items-center bg-[#00ABEB] text-white p-2 w-full h-[45px] rounded-md"
        >
          Sign In
        </button>
      </div>

      <p class="px-2 mt-[12px] text-[13px] text-[#666] text-center lg:p-6">
        By continuing you agree to our
        <span class="underline text-black font-bold">T&C</span> and
        <span class="underline text-black font-bold">Privacy Policy</span>
      </p>

      <hr class="flex justify-center items-center mx-5 mt-8 text-3xl" />

      <div class="flex mt-5 justify-center items-center font-bold gap-4">
        <h2>Don't Have Account?</h2>
        <NuxtLink to="#" class="text-[#00ABEB]">Register</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/store/auth'

definePageMeta({
  middleware: 'auth',
})

const { login, isAuthenticated } = useAuth()
const router = useRouter()
const emailInput = ref('')
const passwordInput = ref('')
const errorMessage = ref('')
const emailError = ref('')

const submitLoginForm = async () => {
  validateEmail()
  if (!emailInput.value || !passwordInput.value) {
    errorMessage.value = 'All inputs are required.'
    return
  }
  try {
    await login(emailInput.value, passwordInput.value)
    console.log('The isAuthenticated value:', isAuthenticated.value)
    if (isAuthenticated.value) {
      console.log('Redirecting to /account/accountdetails')
      router.push('/account/accountdetails')
    } else {
      errorMessage.value = 'Invalid email or password. Please try again.'
    }
  } catch (error: any) {
    errorMessage.value = 'Invalid email or password. Please try again.'
  }
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailInput.value.match(emailRegex)) {
    emailError.value = 'Please enter a valid email.'
  } else {
    emailError.value = ''
  }
}
</script>
