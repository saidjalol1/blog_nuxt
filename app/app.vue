<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
const loader = ref(false);
</script>
<template>
  <Analytics />
    <NuxtLayout />
    <div v-if="loader">
        <Loader :loader="loader" />
    </div>
    <div v-else>
      <Header />
        <NuxtPage />
      <Footer />
    </div>
    <NuxtLayout />
</template>