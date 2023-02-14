<template>
    <div>
        <button v-show="wallet.isConnected" @click="wallet.connect" type="button" class="btn btn-lg btn-success">Connect</button>
    </div>
</template>

<script setup>
    const wallet = useWallet();
</script>
