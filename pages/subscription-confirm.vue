<template>
  <div>
    <h1 class="text-3xl">Subscription Confirmed</h1>
    <pre class="mx-auto my-4 text-left w-1/2 whitespace-pre-wrap break-words">
<h2 class="text-xl">Repsonse Data</h2>
<code class="text-sm">
{{ confirmInfo }}
</code>
    </pre>
    <NuxtLink
      to="/check-regKey"
      class="hover:opacity-50"
    >
      Check regKey
    </NuxtLink>
    |
    <NuxtLink
      to="/expire-regKey"
      class="hover:opacity-50"
    >
      Expire regKey
    </NuxtLink>
    |
    <NuxtLink
      to="/preapproved"
      class="hover:opacity-50"
    >
      Pay Preapproved →
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'single'
})

const confirmInfo = useCookie('subscription-confirm')
</script>

<style scoped></style>
