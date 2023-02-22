<template>
    <div class="card h-100">
        <div class="card-body">
            <div class="card-text">
                <div class="d-grid gap-2 mt-4">
                    <button @click="mint" class="btn btn-lg btn-primary">Mint USDC</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const mint = async () => {
        useUsdc().mint();
    }
</script>
