<template>
  <div>
    <h1 class="text-3xl">Expire regKey</h1>
    <pre class="mx-auto my-4 text-left w-1/2 whitespace-pre-wrap break-words">
<h2 class="text-xl">Repsonse Data</h2>
<code class="text-sm">
{{ responseInfo }}
</code>
    </pre>
    <NuxtLink
      to="/subscription-confirm"
      class="hover:opacity-50"
    >
      ← Subscription Confirmed Response
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { ConfirmResponseBody } from 'line-pay-merchant'
import { resetReactiveObject } from '../utils/helpers'

definePageMeta({
  layout: 'single'
})

let responseInfo = reactive({})
const confirmInfo = useCookie<ConfirmResponseBody>('subscription-confirm')

onMounted(async () => {
  const confirmVal = confirmInfo.value
  const result = await $fetch('/api/expire-regkey', { method: 'POST', body: { regKey: confirmVal?.info?.regKey } })

  responseInfo = resetReactiveObject(responseInfo)
  responseInfo = Object.assign(responseInfo, result)
})
</script>

<style scoped></style>
