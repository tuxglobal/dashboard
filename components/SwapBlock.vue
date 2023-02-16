<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">Swap</h5>
            <div class="card-text">
                <p>Current TUX price: <strong>{{ useNumberFormat(price) }} USDC</strong></p>
                <div class="mb-3">
                    <label for="from" class="form-label">From</label>
                    <div class="input-group">
                        <div class="input-group-text"><strong>{{ fromCurrency }}</strong></div>
                        <input v-model="amount" class="form-control inline" id="from"/>
                        <button @click="max" class="btn btn-secondary" style="width: 100px;">Max</button>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="from" class="form-label">To</label>
                    <div class="input-group">
                        <div class="input-group-text"><strong>{{ toCurrency }}</strong></div>
                        <input v-model="receive" class="form-control inline" id="from" disabled/>
                        <button @click="switchCurrencies" class="btn btn-secondary" style="width: 100px;">^</button>
                    </div>
                </div>
                <div class="d-grid gap-2 mt-4">
                    <button @click="swap" class="btn btn-lg btn-primary">Swap</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const ethBalance = useState('ethBalance', () => 0);
    const usdcBalance = useState('usdcBalance', () => 0);
    const tuxBalance = useState('tuxBalance', () => 0);
    const price = useState('price', () => 0);
    const fromCurrency = ref('USDC');
    const toCurrency = ref('TUX');
    const amount = ref(0);

    const max = () => {
        if (fromCurrency.value === 'USDC') amount.value = usdcBalance.value;
        if (fromCurrency.value === 'ETH') amount.value = ethBalance.value;
        if (fromCurrency.value === 'TUX') amount.value = tuxBalance.value;
        amount.value = useNumberFormat(amount.value);
    }

    const switchCurrencies = () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        amount.value = 0;
    }

    const receive = computed(() => {
        if (fromCurrency.value === 'USDC') return Math.round(((amount.value / useNumberFormat(price.value)) * .95) * 1000) / 1000;
        if (fromCurrency.value === 'TUX') return Math.round((amount.value * .95) * useNumberFormat(price.value) * 1000) / 1000;
    });

    const swap = async () => {
        useUniswap().swap(fromCurrency.value.toLowerCase(), toCurrency.value.toLowerCase(), BigInt(amount.value * 10 ** 18));
    }
</script>
