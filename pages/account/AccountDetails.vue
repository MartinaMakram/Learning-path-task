<template>
  <div class="flex gap-2 px-6 border-t">
    <p>Home</p>
    <p>/</p>
    <p class="text-gray-400">Account Details</p>
  </div>

  <div class="flex flex-wrap">
    <Sidebar v-if="isSidebarVisible" class="hidden lg:block" />
    <AccountDetailsLargeScreens />
    <AccountDetailsForMobile />
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/store/auth'
import type { UserData, EditMode } from '~/types'

const isSidebarOpen = ref(true)

const isSidebarVisible = computed(() => {
  return isSidebarOpen.value
})

definePageMeta({
  layout: 'account',
  middleware: 'auth',
})

const { showAccountDetails } = useAuth()

let userData: Ref<UserData> = ref({
  first_name: '',
  last_name: '',
  email: '',
  mobile: '',
} as UserData)

const editMode: Ref<EditMode> = ref({
  first_name: false,
  last_name: false,
  email: false,
  mobile: false,
} as EditMode)

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')

    if (token) {
      const response = await showAccountDetails(token)
      if (response) {
        userData.value = response
      }
    }
  } catch (error) {
    console.log('Error from account/accountdetails showing the data', error)
  }
})
</script>
