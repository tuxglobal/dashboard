<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">White Carpet Staking</h5>
            <div class="card-text">
                <div class="mb-3">
                    <label for="amount" class="form-label">Stake TNT</label>
                    <div class="input-group">
                        <input v-model="amount" class="form-control inline" id="from"/>
                        <button @click="max" class="btn btn-secondary" style="width: 100px;">Max</button>
                        <button @click="stake" class="btn btn-primary" style="width: 100px;">Stake</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const amount = ref(0);
    const tuxBalance = useState('tuxBalance', () => 0);
    const nfts = useState('nfts', () => []);

    const max = () => {
        amount.value = useNumberFormat(tuxBalance.value);
        console.log(nfts);
    }

    const stake = async () => {
        useStaking().stake(BigInt(amount.value * 10 ** 18));
    }
</script>
