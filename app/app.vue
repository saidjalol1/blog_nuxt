<script setup>
import { Analytics } from '@vercel/analytics/nuxt'

</script>
<template>
  <div>
    <Analytics />
    <Header />
    <NuxtLayout />
      <NuxtPage />
    <NuxtLayout />
    <Footer />
  </div>
</template>
