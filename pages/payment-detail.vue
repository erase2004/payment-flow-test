<template>
  <div>
    <h1 class="text-3xl">Payment Details</h1>
    <span>
      <label class="font-bold">
        transactionIds (seperated by comma):
      </label>
      <input
        v-model="transactionIds"
        type="text"
        name="transactionIds"
        class="text-base border-2 rounded-md mx-2 p-1.5"
      >
    </span>
    <button
      class="my-4 p-2 border-2 rounded-md bg-[#00b700] text-white hover:bg-[#005700] disabled:opacity-25 disabled:cursor-not-allowed"
      @click.stop.prevent="callPaymentDetail"
      :disabled="isProcessing"
    >
      Payment Detail
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
const transactionIds = ref('')
let responseInfo = reactive({})

async function callPaymentDetail() {
  try {
    isProcessing.value = true
    const result = await $fetch(
      '/api/payment-detail',
      {
        method: 'POST',
        body: {
          transactionId: transactionIds.value.split(',')
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
