<script setup>
const { post } = defineProps({
  post: {},
})
</script>

<template>
  <article v-viewer>
    <h1 class="text-8 font-600">
      {{ post.title }}
    </h1>
    <div class="text-gray-400 mt-2">
      {{ formatDate(post.date, 'YYYY-MM-DD') }}
    </div>
    <div class="py-10">
      <ContentRenderer class="markdown-body" :value="post" />
    </div>
  </article>
</template>
