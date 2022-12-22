<template>
  <section>
    <h1 class="4xl">Bookmarks Page</h1>
  </section>
</template>
<script setup lang="ts">
  definePageMeta({
    // protect auth client side
    middleware: ['auth']
  })
</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BookmarksPage',
  data: () => ({

  })
})

</script>
<style lang="scss" scoped>
</style>