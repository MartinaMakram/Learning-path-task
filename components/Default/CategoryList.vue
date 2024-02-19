<template>
  <ul class="flex justify-center items-center gap-[29px] w-[1136px]">
    <li v-for="category in categories" :key="category" class="leading-7">
      {{ category }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const categories = [
  'Groceries',
  'Electronics',
  'Clothing',
  'Furniture',
  'Toys & Video games',
  'Baby',
  'Beauty',
  'Personal Care',
  'Pets',
  'Sports',
  'Stationary',
  'Brands',
]
</script>
