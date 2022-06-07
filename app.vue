<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Payment Flow Test'
})
</script>

<style>
.router-link-exact-active {
  @apply font-bold;
}
</style>