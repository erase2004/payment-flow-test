<template>
  <div>
    <h1 class="text-3xl">Subscription Confirmed</h1>
    <button
      class="my-4 p-2 border-2 rounded-md bg-[#00b700] text-white hover:bg-[#005700] disabled:opacity-25 disabled:cursor-not-allowed"
      @click.stop.prevent="callPayment"
      :disabled="isProcessing"
    >
      Request Next Payment
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
definePageMeta({
  layout: 'single'
})

const regKey = useCookie('regKey')
const isProcessing = ref(false)
let responseInfo = reactive({})

async function callPayment() {
  try {
    isProcessing.value = true
    const result = await $fetch('/api/preapproved', { method: 'POST', body: { regKey: regKey.value} })

    responseInfo = Object.assign(responseInfo, result)
  } catch (error) {
    console.error(error)
  } finally {
    isProcessing.value = false
  }
}

</script>

<style scoped></style>
