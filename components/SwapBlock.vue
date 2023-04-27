<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-4">Swap for Tux Tokens</h5>
            <div class="card-text">
                <p class="fs-5 letter-spacing-sm">Current TUX price: <strong>{{ useNumberFormat(price, usdcDecimals) }} USDC</strong></p>
                <hr />
                <div class="mb-3">
                    <label for="from" class="form-label">Swap</label>
                    <div class="input-group">
                        <div class="input-group-text p-3"><strong>{{ fromCurrency }}</strong></div>
                        <input v-model="amount" class="form-control p-3 inline" id="from"/>
                        <button @click="max" class="btn btn-secondary p-3" style="width: 100px;">Max</button>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="from" class="form-label">To</label>
                    <div class="input-group">
                        <div class="input-group-text p-3"><strong>{{ toCurrency }}</strong></div>
                        <input v-model="receive" class="form-control inline p-3" id="from" disabled />
                        <button @click="switchCurrencies" class="btn btn-secondary p-3" style="width: 100px;">^</button>
                    </div>
                </div>
                <div class="d-grid gap-2 mt-4">
                    <button @click="swap" class="btn btn-lg btn-primary pt-3 pb-3">Swap Now</button>
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
    const receive = ref(0);
    const usdcDecimals = useState('usdcDecimals', () => 0);
    const tuxDecimals = useState('tuxDecimals', () => 0);

    watch(amount, async () => {
        if(amount.value <= 0) return 0;
        let from;
        let to;
        let decimals;
        let realAmount;
        if (fromCurrency.value.toLowerCase() == 'tux') {
            from = 'Tux';
            to = 'Usdc';
            realAmount = BigInt(amount.value * (10 ** tuxDecimals.value));
            decimals = usdcDecimals.value;
        }
        if (fromCurrency.value.toLowerCase() == 'usdc') {
            from = 'Usdc';
            to = 'Tux';
            realAmount = BigInt(amount.value * (10 ** usdcDecimals.value));
            decimals = tuxDecimals.value;
        }
        const result = await useUniswap().output(from, to, realAmount);

        receive.value = useNumberFormat(result.toString(), decimals);
    })

    const max = () => {
        let decimals = 0;
        if (fromCurrency.value === 'USDC') {
            amount.value = usdcBalance.value;
            decimals = usdcDecimals.value;
        }
        if (fromCurrency.value === 'ETH') {
            amount.value = ethBalance.value;
            decimals = 18;
        }
        if (fromCurrency.value === 'TUX') {
            amount.value = tuxBalance.value;
            decimals = tuxDecimals.value;
        }
        amount.value = useNumberFormat(amount.value, decimals);
    }

    const switchCurrencies = () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        amount.value = 0;
        receive.value = 0;
    }


    const swap = async () => {
        let from = 'Usdc';
        let to = 'Tux';
        let decimals = usdcDecimals.value;
        if(fromCurrency.value.toLowerCase() == 'tux')
        {
            from = 'Tux';
            to = 'Usdc';
            decimals = tuxDecimals.value;
        }
        const swapAmount = BigInt(amount.value * (10 ** decimals));
        useUniswap().swap(from, to, swapAmount);
        amount.value = 0;
        receive.value = 0;
    }
</script>
