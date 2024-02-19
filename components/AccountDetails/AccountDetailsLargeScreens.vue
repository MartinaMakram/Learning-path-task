<template>
  <!-- Desktop Account Details Form -->
  <div class="hidden lg:block mt-10 ml-20">
    <h1 class="text-2xl text-black-700 w-[177px]">Account Details</h1>
    <div class="w-[528px] h-[485px] flex flex-col gap-[5px]">
      <!-- First Name -->
      <div class="mt-10" @click="editField('first_name')">
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

      <!-- Last Name -->
      <div @click="editField('last_name')">
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

      <!-- Email -->
      <div @click="editField('email')">
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

      <!-- Phone Number -->
      <div @click="editField('mobile')">
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
        class="w-[528px] h-[40px] text-white bg-[#00ABEB] rounded-sm mt-5"
      >
        Save Changes
      </button>
      <div v-if="updateStatus" class="text-green-600 mt-2">
        Data updated successfully!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/store/auth'
import type { UserData, EditMode } from '~/types'

const { showAccountDetails, updateAccountDetails } = useAuth()
let updateStatus: Ref<boolean> = ref(false)

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
    if (token) {
      const response = await updateAccountDetails(
        userData.value,
        token as string,
      )
      if (response) {
        updateStatus.value = true
      }
    }
  } catch (error) {
    console.log('Error Updating the Account Details', error)
  }
}
</script>
