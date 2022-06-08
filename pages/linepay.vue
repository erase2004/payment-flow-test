<template>
  <div>
    <button
      class="my-4 p-2 border-2 rounded-md bg-[#00b700] text-white hover:bg-[#005700] disabled:opacity-25 disabled:cursor-not-allowed"
      @click.stop.prevent="callPayment"
      :disabled="isProcessing"
    >
      Pay with LINE Pay
    </button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'tab'
})

const isProcessing = ref(false)

async function callPayment() {
  try {
    isProcessing.value = true

    const result = await $fetch('/api/linepay', { method: 'POST' })
    const targetUrl = result?.info?.paymentUrl?.web

    // redirect to payment page
    window.location.href = targetUrl
  } catch (error) {
    console.error(error)
  } finally {
    isProcessing.value = false
  }
}

</script>
<style scoped></style>
