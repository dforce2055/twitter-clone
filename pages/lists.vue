<template>
  <section>
    <UnderConstruction />
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
  name: 'ListsPage',
  data: () => ({

  })
})

</script>
<style lang="scss" scoped>
</style>