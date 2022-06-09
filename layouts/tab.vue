<template>
  <div class="text-center">
    <h1 class="text-3xl">Payment Flow Demo</h1>
    <!-- navbar -->
    <div class="inline-block mx-auto my-2 text-base">
      <NuxtLink
        to="/"
        class="hover:opacity-50"
      >
        Home
      </NuxtLink>
      |
      <NuxtLink
        to="/linepay"
        class="hover:opacity-50"
      >
        LINE Pay
      </NuxtLink>
      |
      <NuxtLink
        to="/subscription"
        class="hover:opacity-50"
      >
        LINE Pay (Subscription)
      </NuxtLink>
      |
      <NuxtLink
        to="/refund"
        class="hover:opacity-50"
      >
        Refund
      </NuxtLink>
    </div>
    <!-- router-view -->
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
