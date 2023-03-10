<template>
  <!-- 
    class="flex justify-center text-white bg-blue-400 rounded-full hover:bg-blue-500 font-sm disabled:bg-blue-300 disabled:cursor-not-allowed"
    :disabled="props.disabled" 
    :class="classes" 
  -->
  <button 
    v-if="!loading"
    type="button"
    :disabled="disabled"
    :class="classes"
    class="justify-center sm:rounded-md border border-transparent 
      focus:ring-offset-2 focus:outline-none focus:ring-2 
      py-2 px-4 text-sm font-medium
      rounded-full"
    @click="handleClick"
  >

    <span :class="textFontSize">
      {{ text }}
      <slot />
    </span>
  </button>
  <button
    v-if="loading"
    disabled 
    type="button"
    :class="classes"
    class="justify-center rounded-md border border-transparent 
    shadow-sm cursor-not-allowed  font-medium text-sm px-x py-2"
  >
      <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
      </svg>
      Loading...
  </button>
</template>
<script setup>
const emits = defineEmits(['click'])

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  actionColor: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    deafault: 'md'
  },
  block: {
    type: Boolean,
    deafault: true
  },
  liquid: {
    type: Boolean,
    deafult: false
  }
})

const actionColorClasses = computed(() => {
  switch (props.actionColor) {
    case 'primary':
      return 'bg-dim-600 text-white shadow-sm hover:bg-dim-700 focus:ring-dim-500'
    case 'secondary':
      return 'bg-sky-100 text-dim-600 shadow-sm hover:bg-sky-200 focus:ring-sky-200'
    default:
      return 'bg-dim-600 text-white shadow-sm hover:bg-dim-700 focus:ring-dim-500'
  }
})
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'py-2 px-3'
    case 'lg':
      return 'px-4 py-3'
    case 'block':
      return 'flex w-full'
    default:
      return 'px-3 py-3'
  }
})
const styleClasses = computed(() => {
  switch (props.disabled) {
    case true:
      return 'cursor-not-allowed bg-slate-300'
    default:
      return ''
  }
})
const paddingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'py-2 px-3'
    case 'lg':
      return 'px-4 py-3'
    default:
      return 'px-3 py-3'
  }
})

const textFontSize = computed(() => {
  switch (props.size) {
    case 'lg':
      return 'text-md'
    default:
      return 'text-sm'
  }
})

const defaultWidth = computed(() => {
  switch (props.size) {
    default:
      return 'w-min'
  }
})

// const classes = computed(() => `${sizeClasses.value} ${paddingClasses.value} ${props.liquid ? 'w-full' : defaultWidth.value}`)
const classes = computed(() => `${actionColorClasses.value} ${sizeClasses.value} ${styleClasses.value}`)

function handleClick(event) {
  emits('click', event)
}

</script>