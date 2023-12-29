<script setup>
const post = await useQueryPost('coding')
console.log('🚀 ~ file: [...slug].vue:7 ~ post:', post)
</script>

<template>
  <PostContent :post="post" />
</template>
