<template>
  <div class="text-center">
    <slot />
    <div class="inline-block mx-auto my-4 text-base">
      <NuxtLink
        to="/"
        class="hover:opacity-50"
      >
        Go back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
