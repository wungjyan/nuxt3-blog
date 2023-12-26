<script setup lang="ts">
const color = useColorMode()
let isDark: boolean

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#000000' : '#ffffff',
  }],
  bodyAttrs: {
    'data-theme': () => color.value,
  },
})

function toggleViewTransition(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
  ]
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggleDark()
  })

  transition.ready.then(() => {
    console.log('biubihubuihihu', color.value)
    document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}

function toggleDark() {
  isDark = color.value === 'dark'
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

function toggleTheme(event: MouseEvent) {
  // @ts-expect-error: Transition API
  const isSupport = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isSupport) {
    toggleDark()
    return
  }
  toggleViewTransition(event)
}
</script>

<template>
  <button class="!outline-none" @click="toggleTheme">
    <div class="i-carbon-sun dark:i-carbon-moon t-color" />
  </button>
</template>
