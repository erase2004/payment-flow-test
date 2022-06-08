<template>
  <div>
    <h1 class="text-3xl">Check Payment</h1>
    <button
      class="my-4 p-2 border-2 rounded-md bg-[#00b700] text-white hover:bg-[#005700] disabled:opacity-25 disabled:cursor-not-allowed"
      @click.stop.prevent="checkPaymentStatus"
      :disabled="isProcessing"
    >
      Check Payment Status
    </button>
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

definePageMeta({
  layout: 'single'
})

const isProcessing = ref(false)
let responseInfo = reactive({})
const confirmInfo = useCookie<ConfirmResponseBody>('confirm')

async function checkPaymentStatus() {
  try {
    isProcessing.value = true
    const confirmVal = confirmInfo.value

    const result = await $fetch('/api/check-payment', { method: 'POST', body: { transactionId: confirmVal?.info?.transactionId } })

    responseInfo = Object.assign(responseInfo, result)
  } catch (error) {
    console.error(error)
  } finally {
    isProcessing.value = false
  }
}

</script>

<style scoped></style>
