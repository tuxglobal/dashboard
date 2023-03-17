<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <NuxtLink to="/" class="navbar-brand">TUX</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink to="/dashboard" class="nav-link">Dashboard</NuxtLink>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <a href="https://faucetlink.to/sepolia" target="_new" class="btn btn-lg btn-info me-1">Sepolia Faucets</a>
                        <button v-show="!connected" @click="connect" type="button" class="btn btn-lg btn-info">Connect Wallet</button>
                        <button v-show="connected" @click="mintUsdc" type="button" class="btn btn-lg btn-info">Mint USDC</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
    const { connect } = useWallet();
    const connected = useState('connected');

    const mintUsdc = async () => {
        useUsdc().mint();
    }
</script>
