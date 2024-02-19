<template>
  <div class="lg:hidden flex flex-col gap-4">
    <div
      @click="editField('first_name')"
      class="flex flex-col px-5 mt-4 w-[full]"
    >
      <label>First Name</label>
      <template v-if="!editMode.first_name">
        <div class="pl-2 h-[40px] flex items-center rounded-sm bg-[#F5F5F5]">
          {{ userData.first_name }}
        </div>
      </template>
      <template v-else>
        <input
          v-model="userData.first_name"
          class="pl-2 w-full h-[40px] flex items-center rounded-sm bg-[#F5F5F5]"
        />
      </template>
    </div>
    <div
      @click="editField('last_name')"
      class="flex flex-col px-5 mt-4 w-[full]"
    >
      <label>Last Name</label>
      <template v-if="!editMode.last_name">
        <div class="pl-2 h-[40px] flex items-center rounded-sm bg-[#F5F5F5]">
          {{ userData.last_name }}
        </div>
      </template>
      <template v-else>
        <input
          v-model="userData.last_name"
          class="pl-2 w-full h-[40px] flex items-center rounded-sm bg-[#F5F5F5]"
        />
      </template>
    </div>
    <div @click="editField('email')" class="flex flex-col px-5 mt-4 w-[full]">
      <label>Email</label>
      <template v-if="!editMode.email">
        <div class="pl-2 h-[40px] flex items-center rounded-sm bg-[#F5F5F5]">
          {{ userData.email }}
        </div>
      </template>
      <template v-else>
        <input
          v-model="userData.email"
          class="pl-2 w-full h-[40px] flex items-center rounded-sm bg-[#F5F5F5]"
        />
      </template>
    </div>
    <div @click="editField('mobile')" class="flex flex-col px-5 mt-4 w-[full]">
      <label>Phone Number</label>
      <template v-if="!editMode.mobile">
        <div class="pl-2 h-[40px] flex items-center rounded-sm bg-[#F5F5F5]">
          {{ userData.mobile }}
        </div>
      </template>
      <template v-else>
        <input
          v-model="userData.mobile"
          class="pl-2 w-full h-[40px] flex items-center rounded-sm bg-[#F5F5F5]"
        />
      </template>
    </div>
    <button
      @click="handleUpdateAccountDetails"
      class="w-[275px] h-[40px] mx-5 text-white bg-[#00ABEB] rounded-sm mt-5"
    >
      Save Changes
    </button>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/store/auth'
import type { UserData, EditMode } from '~/types'

const { showAccountDetails, updateAccountDetails } = useAuth()

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
      } else {
        console.log('showACcountDetails undefined')
      }
    }
  } catch (error) {
    console.log('Error from account/accountdetails showing the data', error)
  }
})

const editField = (field: keyof UserData) => {
  for (const key in editMode.value) {
    if (Object.prototype.hasOwnProperty.call(editMode.value, key)) {
      editMode.value[key as keyof EditMode] = key === field
    }
  }
}

const handleUpdateAccountDetails = async () => {
  try {
    const token = localStorage.getItem('token')
    await updateAccountDetails(userData.value, token as string)
  } catch (error) {
    console.log('Error Updating the Account Details', error)
  }
}
</script>
