<template>
  <div>
    <h1 class="text-3xl">Check Payment Status</h1>
    <span>
      <label class="font-bold">
        transactionId:
      </label>
      <input
        v-model="transactionId"
        type="text"
        name="transactionId"
        class="text-base border-2 rounded-md mx-2 p-1.5"
      >
    </span>
    <button
      class="my-4 p-2 border-2 rounded-md bg-[#00b700] text-white hover:bg-[#005700] disabled:opacity-25 disabled:cursor-not-allowed"
      @click.stop.prevent="callCheckPayment"
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
import { resetReactiveObject } from '../utils/helpers'

definePageMeta({
  layout: 'single'
})

let responseInfo = reactive({})
const confirmInfo = useCookie<ConfirmResponseBody>('confirm')
const isProcessing = ref(false)
const transactionId = ref('')

onMounted(async () => {
  const confirmVal = confirmInfo.value
  if (!confirmVal) return

  const result = await $fetch('/api/check-payment', { method: 'POST', body: { transactionId: confirmVal?.info?.transactionId } })
  responseInfo = resetReactiveObject(responseInfo)
  responseInfo = Object.assign(responseInfo, result)
})

async function callCheckPayment() {
  try {
    isProcessing.value = true
    const result = await $fetch('/api/check-payment', { method: 'POST', body: { transactionId: transactionId.value } })

    responseInfo = resetReactiveObject(responseInfo)
    responseInfo = Object.assign(responseInfo, result)
  } catch (error) {
    console.error(error)
  } finally {
    isProcessing.value = false
  }
}
</script>

<style scoped></style>
