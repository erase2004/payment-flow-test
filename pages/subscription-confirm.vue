<template>
  <h1 class="text-3xl">Subscription Confirmed</h1>
  <div>
    <button
      class="my-4 p-2 border-2 rounded-md bg-[#00b700] text-white hover:bg-[#005700] disabled:opacity-25 disabled:cursor-not-allowed"
      @click.stop.prevent="callPayment"
      :disabled="isProcessing"
    >
      Request Next Payment
    </button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'single'
})

const regKey = useCookie('regKey')
const isProcessing = ref(false)

async function callPayment() {
  try {
    isProcessing.value = true
    const result = await $fetch('/api/preapproved', { method: 'POST', body: { regKey: regKey.value} })

    const result = await $fetch('/api/preapproved', { method: 'POST', body: query })

    alert(JSON.stringify(result))
  } catch (error) {
    console.error(error)
  } finally {
    isProcessing.value = false
  }
}

</script>

<style scoped></style>
