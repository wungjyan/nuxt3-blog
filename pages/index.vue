<script setup lang="ts">
const { data: postList } = await useAsyncData('home', () => {
  return queryContent().sort({ date: -1 }).find()
})
console.log('🚀 ~ file: index.vue:8 ~ data ~ data:', postList)
</script>

<template>
  <ul>
    <li v-for="item in postList" :key="item._id" class="mb-12">
      <NuxtLink :to="item._path" class="text-6 font-700">
        {{ item.title }}
      </NuxtLink>
      <div class="mt-2 text-4">{{ item.description }}</div>
      <div class="mt-3 text-3">
        {{ formatDate(item.date, 'DD MMM, YYYY') }}
      </div>
    </li>
  </ul>
</template>

