<script setup>
import { headerNavList, siteTitle } from '@/site.config'
</script>

<template>
  <header class="w-full h-25 px-10 flex items-center justify-between">
    <h1 class="text-6 font-800">
      <NuxtLink to="/">
        {{ siteTitle }}
      </NuxtLink>
    </h1>
    <div class="flex justify-center items-center">
      <nav class="mr-4">
        <ul class="flex items-center">
          <li v-for="nav in headerNavList" :key="nav.path" class="mx-2">
            <NuxtLink :to="nav.path">
              {{ nav.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <DarkToggle />
    </div>
  </header>
</template>
