<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">Swap</h5>
            <div class="card-text">
                <p>Current TNT price: <strong>{{ price }} USDC</strong></p>
                <div class="form-group">
                    <label for="from">From</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><strong>{{ fromCurrency }}</strong></div>
                        </div>
                        <input v-model="amount" class="form-control inline" id="from"/>
                        <div class="input-group-append">
                            <button @click="max" class="btn btn-secondary" style="width: 100px;">Max</button>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="from">To</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><strong>{{ toCurrency }}</strong></div>
                        </div>
                        <input v-model="receive" class="form-control" id="from" disabled/>
                        <div class="input-group-append">
                            <button @click="switchCurrencies" class="btn btn-secondary" style="width: 100px;">^</button>
                        </div>
                    </div>
                </div>
                <button @click="swap" class="btn btn-lg btn-primary btn-block mt-4">Swap</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    setup () {
        const price = .1;
        const usdcBalance = 1201.9812;
        const tntBalance = 320.0000;
        const loading = ref(false);
        const fromCurrency = ref('USDC');
        const toCurrency = ref('TNT');
        const amount = ref(0);

        const receive = computed(() => {
            if (fromCurrency.value == 'USDC') {
                return amount.value / price;
            }
            if (fromCurrency.value == 'TNT') {
                return amount.value * price;
            }
            return 0;
        });

        const max = () => {
            if (fromCurrency.value == 'USDC') {
                amount.value = usdcBalance;
            }
            if (fromCurrency.value == 'TNT') {
                amount.value = tntBalance;
            }
        }

        const switchCurrencies = () => {
            const temp = fromCurrency.value;
            fromCurrency.value = toCurrency.value;
            toCurrency.value = temp;
            amount.value = 0;
        }

        const swap = () => {
            alert("Coming soon!");
        }

        return {
            price,
            usdcBalance,
            tntBalance,
            loading,
            fromCurrency,
            toCurrency,
            amount,
            receive,
            max,
            switchCurrencies,
            swap,
        }
    }
}
</script>
