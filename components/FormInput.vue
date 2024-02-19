<template>
  <div>
    <label :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="p-2 bg-[#F5F5F5] rounded-md w-full lg:w-[490px]"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  type: string
  placeholder: string
  value: string
  id?: string
}>()

const inputId = props.id ?? `input-${Math.random().toString(36).substring(7)}`
const inputValue = ref(props.value)
</script>
