<template>
  <section class="border-l border-white-200 dark:border-gray-700">
      <!--
        This example requires updating your template:
    
        ```
        <html class="h-full">
        <body class="h-full">
        ```
      -->
      <div class="min-h-full bg-white dark:bg-gray-700 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="mx-auto max-w-max">
          <main class="sm:flex">
            <p class="text-4xl font-bold tracking-tight text-dim-600 sm:text-5xl">{{ errorCode }}</p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">{{ errorTitle }}</h1>
                <p class="mt-1 text-base text-gray-500 dark:text-gray-300">{{ errorMessage }}</p>
              </div>
              <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <NuxtLink
                  to="/" 
                  class="inline-flex items-center rounded-md border border-transparent bg-dim-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-dim-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Go back home
                </NuxtLink>
                <!-- <a href="#" class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Contact support</a> -->
              </div>
            </div>
          </main>
        </div>
      </div>
  </section>
</template>
<script setup language="ts">
const errorCode = ref(503)
const errorTitle = ref('We are so sorry, this page under construction')
const errorMessage = ref('Please come back later.')
</script>
