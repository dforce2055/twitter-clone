<template>
  <section class="h-full bg-white">
    <main class="container mx-auto px-4 content-center min-h-screen mt-10">
      <slot />
    </main>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CleanLayout',
  mounted() {
    const html = document.querySelector('html')
    const body = document.querySelector('body')
    html?.setAttribute('class', 'h-full bg-white')
    body?.setAttribute('class', 'h-full')
  }
})

</script>
