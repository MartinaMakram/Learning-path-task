<template>
  <div>
    <button
      @click="saveChanges"
      class="w-[275px] h-[40px] mx-5 text-white bg-[#00ABEB] rounded-sm mt-5 lg:w-[490px] h-[40px]"
    >
      Save Changes
    </button>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/store/auth'
import { type UserChangePasswordData } from '~/types/index'
const { changePassword } = useAuth()

const userChangePasswordData = ref<UserChangePasswordData>({
  old_password: '',
  password: '',
  password_confirmation: '',
})

const saveChanges = async () => {
  try {
    const token = localStorage.getItem('token')
    console.log('Logging the Token from the changepassword function', token)
    const response = await changePassword(
      userChangePasswordData.value,
      token as string,
    )
    console.log('The response after changing password', response)
  } catch (error) {
    console.error('Error changing the password', error)
  }
}
</script>
