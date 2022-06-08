<template>
  <div>
    <h1 class="text-3xl">Check Payment</h1>
    <pre class="mx-auto my-4 text-left w-1/2 whitespace-pre-wrap break-words">
<h2 class="text-xl">Repsonse Data</h2>
<code class="text-sm">
{{ responseInfo }}
</code>
    </pre>
  </div>
</template>

<script lang="ts" setup>
import type { ConfirmResponseBody } from 'line-pay-merchant'
import { resetReactiveObject } from '../utils/helpers'

definePageMeta({
  layout: 'single'
})

let responseInfo = reactive({})
const confirmInfo = useCookie<ConfirmResponseBody>('confirm')

onMounted(async () => {
  const confirmVal = confirmInfo.value
  const result = await $fetch('/api/check-payment', { method: 'POST', body: { transactionId: confirmVal?.info?.transactionId } })

  responseInfo = resetReactiveObject(responseInfo)
  responseInfo = Object.assign(responseInfo, result)
})
</script>

<style scoped></style>
