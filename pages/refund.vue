<template>
  <div>
    <h1 class="text-3xl">Refund</h1>
    <span>
      <label class="font-bold">
        Amount:
      </label>
      <input
        v-model="amount"
        type="number"
        name="amount"
        class="text-base border-2 rounded-md mx-2 p-1.5"
      >
    </span>
    <span>
      <label class="font-bold">
        TransactionID:
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
      @click.stop.prevent="callRefund"
      :disabled="isProcessing"
    >
      Refund
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
import { resetReactiveObject } from '../utils/helpers'

definePageMeta({
  layout: 'tab'
})

const isProcessing = ref(false)
const amount = ref(1)
const transactionId = ref('')
let responseInfo = reactive({})

async function callRefund() {
  try {
    isProcessing.value = true
    const result = await $fetch(
      '/api/refund',
      {
        method: 'POST',
        body: {
          refundAmount: amount.value,
          transactionId: transactionId.value
        }
      }
    )

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
