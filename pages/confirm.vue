<template>
  <div>
    <h1 class="text-3xl">Payment Confirmed</h1>
      <pre class="mx-auto my-4 text-left w-1/2 whitespace-pre-wrap break-words">
<h2 class="text-xl">Repsonse Data</h2>
<code class="text-xs">
{{ confirmInfo }}
</code>
  </pre>
    <NuxtLink
      to="/check-payment"
      class="hover:opacity-50"
    >
      Check Payment Status
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'single'
})

const confirmInfo = useCookie('confirm')

</script>

<style scoped></style>
