<template>
  <div>
    <h1 class="text-3xl">Pay Preapproved</h1>
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
    <button
      class="my-4 p-2 border-2 rounded-md bg-[#00b700] text-white hover:bg-[#005700] disabled:opacity-25 disabled:cursor-not-allowed"
      @click.stop.prevent="callPayPreapproved"
      :disabled="isProcessing"
    >
      Request Payment
    </button>
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

const confirmInfo = useCookie<ConfirmResponseBody>('subscription-confirm')
const regKey = confirmInfo.value?.info?.regKey
const isProcessing = ref(false)
const amount = ref(1)
let responseInfo = reactive({})

async function callPayPreapproved() {
  try {
    isProcessing.value = true
    const result = await $fetch('/api/preapproved', { method: 'POST', body: { regKey, amount: amount.value } })

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
