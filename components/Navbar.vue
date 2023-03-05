<template>

    <div class="color-highlight-bg" style="padding-bottom: 10px;">
        <div class="p-2 text-end">
            Analytics | Docs | App
        </div>

        <header class="color-main-bg p-3">
            <div class="row">
                <div class="col-md-2">
                    <NuxtLink href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" style="padding-left: 25px;">
                        <nuxt-img src="/images/tnt-swap-logo.jpg" />
                    </NuxtLink>
                </div>
                <div class="col-md-8">
                    <ul class="nav mb-2 justify-content-center mb-md-0">
                        <li><NuxtLink to="/dashboard" class="nav-link px-2">Dashboard</NuxtLink></li>
                        <li><a href="https://faucetlink.to/sepolia" class="nav-link px-2">Sepolia Faucets</a></li>
                        <li><a href="#" class="nav-link px-2">ETH Faucet</a></li>
                        <li><a href="#" class="nav-link px-2">USDC Faucet</a></li>
                        <li><a href="#" class="nav-link px-2">Buy</a></li>
                        <li><a href="#" class="nav-link px-2">Sell</a></li>
                        <li><a href="#" class="nav-link px-2">Stake</a></li>
                        <li><a href="#" class="nav-link px-2">Marketplace</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <div style="padding-right: 25px;">
                        <button v-show="connected" @click="mintUsdc" type="button" class="btn btn-outline-primary me-2">Mint USDC</button>
                        <button v-show="!connected" @click="connect" type="button" class="btn btn-primary color-highlight-border color-highlight-bg">Connect Wallet</button>
                    </div>
                </div>
            </div>
        </header>
    </div>

</template>

<script setup>
const { connect } = useWallet();
const connected = useState('connected');

const mintUsdc = async () => {
    useUsdc().mint();
}
</script>
