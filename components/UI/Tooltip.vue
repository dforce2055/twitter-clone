<template>
  <section class="inline group">
    <slot />

    <span 
      class="relative
      overflow-hidden 
      cursor-pointer 
      group 
      md:hover:overflow-visible 
      md:focus-visible:outline-none
    " 
      aria-describedby="tooltip-01"
    >
      <!-- End Tooltip trigger -->
      <span
        role="tooltip" 
        id="tooltip-01" 
        class="invisible
        md:absolute
        -top-28
        z-10 
        mb-2 
        w-48 
        -translate-x-1
        rounded 
        bg-slate-700 
        p-4 
        text-sm 
        text-white 
        opacity-0 
        transition-all 
        before:invisible 
        before:absolute 
        before:left-1/2 
        before:top-full 
        before:z-10 before:mb-2 
        before:-ml-2 
        before:border-x-8 
        before:border-t-8 
        before:border-x-transparent 
        before:border-t-slate-700 
        before:opacity-0 
        before:transition-all 
        before:content-[''] 
        md:group-hover:visible 
        md:group-hover:block 
        md:group-hover:opacity-100 
        md:group-hover:before:visible 
        md:group-hover:before:opacity-100"
      >
        {{ text }}
      </span>
    </span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: true
    }
  },
})

</script>
