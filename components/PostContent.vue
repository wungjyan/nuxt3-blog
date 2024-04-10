<script setup>
const { post } = defineProps({
  post: {},
})
</script>

<template>
  <article v-viewer>
    <h1 class="text-8 font-600 relative">
      {{ post.title }}
      <div @click="$router.back()" class="w-8 h-8 bg-gray-200 absolute left--15 top-2 flex items-center justify-center cursor-pointer"><div class="i-carbon:arrow-left text-5"></div></div>
    </h1>
    <div class="text-gray-500 mt-2">
      {{ formatDate(post.date, 'YYYY-MM-DD') }}
    </div>
    <div class="py-10">
      <ContentRenderer class="markdown-body" :value="post" />
    </div>
  </article>
</template>
