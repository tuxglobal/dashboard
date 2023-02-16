<template>
    <div>
        <Navbar />
        <div v-show="!loading" class="container py-5">
            <slot />
        </div>
        <div v-show="loading" class="text-center my-5 py-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-show="!loading && !connected" class="container py-5 d-grid gap-2">
            <button v-show="!connected" @click="connect" type="button" class="btn btn-lg btn-info">Connect Wallet</button>
        </div>
        <Footer />
    </div>
</template>

<script setup>
    const loading = useState('loading');
    const connected = useState('connected');
    const { connect } = useWallet();
</script>
