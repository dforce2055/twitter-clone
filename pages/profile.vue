<template>
  <section>
    <h1 class="4xl">Profile Page</h1>
  </section>
</template>
<script setup lang="ts">
  definePageMeta({
    middleware: ['auth']
  })
</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfilePage',
  data: () => ({

  })
})

</script>
<style lang="scss" scoped>
</style>