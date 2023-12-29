<script setup lang="ts">
const { data: postList } = await useAsyncData('home', () => {
  return queryContent().sort({ date: -1 }).find()
})
console.log('🚀 ~ file: index.vue:8 ~ data ~ data:', postList)
</script>

<template>
  <ul>
    <li v-for="item in postList" :key="item._id" class="flex items-center justify-between mb-5">
      <NuxtLink :to="item._path" class="opacity-70 hover:opacity-100">
        {{ item.title }}
      </NuxtLink>
      <div class="text-gray-400">
        {{ formatDate(item.date, 'MM-DD，YYYY') }}
      </div>
    </li>
  </ul>
</template>
