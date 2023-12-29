<script setup>
const { dir } = defineProps({
  dir: String,
})

const { data } = await useAsyncData(dir, () => {
  return queryContent(dir).sort({ date: -1 }).find()
})

const listByYearSorted = getPostListByYearSorted(data.value)
console.log('🚀 ~ file: index.vue:10 ~ newData:', listByYearSorted)
</script>

<template>
  <template v-if="listByYearSorted.length">
    <div v-for="(list, idx) in listByYearSorted" :key="idx" class="py-8">
      <div class="text-8 font-600">
        {{ formatDate(list[0].date, 'YYYY') }}
      </div>
      <ul>
        <li v-for="article in list" :key="article._id" class="py-5 flex items-center">
          <h3 class="text-5 opacity-70 hover:opacity-100">
            <NuxtLink :to="article._path">
              {{ article.title }}
            </NuxtLink>
          </h3>
          <div class="text-gray-400 ml-5">
            {{ formatDate(article.date, 'MMM DD') }}
          </div>
        </li>
      </ul>
    </div>
  </template>
  <template v-else>
    <div class="text-5 opacity-70">
      很遗憾，还没有内容。
    </div>
  </template>
</template>
