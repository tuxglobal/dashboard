<template>
    <div class="card">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="meta.image" class="img-fluid rounded-start" :alt="stakeTypeString + ' #' + id">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ stakeTypeString }} #{{ id }}</h5>
                    <table class="table table-striped">
                        <tbody>
                            <tr v-show="stakeType == 1">
                                <th scope="row">Stake Amount</th>
                                <td>{{ useNumberFormat(stakeAmount) }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Stake Age</th>
                                <td>{{ ago }}</td>
                            </tr>
                            <tr v-show="stakeType == 1">
                                <th scope="row">Entry Price</th>
                                <td>{{ useNumberFormat(stakePrice) }}</td>
                            </tr>
                            <tr v-show="stakeType == 1">
                                <th scope="row">Starting Stake Amount</th>
                                <td>{{ useNumberFormat(startingStakeAmount) }}</td>
                            </tr>
                            <tr v-show="stakeType == 1">
                                <th scope="row">Available Dividends</th>
                                <td>{{ useNumberFormat(availableDividends) }}</td>
                            </tr>
                            <tr v-show="stakeType == 2">
                                <th scope="row">TUX Refund Available</th>
                                <td>{{ useNumberFormat(tuxRefundAvailable) }}</td>
                            </tr>
                            <tr>
                                <th scope="row">RC Value</th>
                                <td>{{ useNumberFormat(rcValue) }}</td>
                            </tr>
                            <tr v-show="stakeType == 2">
                                <th scope="row">RC Reward Available</th>
                                <td>{{ useNumberFormat(rcRewardAvailable) }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-show="owned" class="d-flex justify-content-end">
                        <button v-show="stakeType == 2 && tuxRefundAvailable > 0" @click="claim" class="btn btn-sm btn-info ms-1">Refund</button>
                        <button v-show="stakeType == 2 && rcRewardAvailable > 0" @click="claim" class="btn btn-sm btn-primary ms-1">Claim</button>
                        <button v-show="stakeType == 1 && availableDividends > 0" @click="compound" class="btn btn-sm btn-primary ms-1">Compound</button>
                        <button v-show="stakeType == 1 && availableDividends > 0" @click="claim" class="btn btn-sm btn-secondary ms-1">Claim</button>
                        <button v-show="stakeType == 1" @click="unstake" class="btn btn-sm btn-danger ms-1">Unstake</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { format } from 'timeago.js';

    const props = defineProps([
        'id',
        'stakeType',
        'stakeTypeString',
        'stakeAmount',
        'stakeAge',
        'stakeStart',
        'stakePrice',
        'startingStakeAmount',
        'availableDividends',
        'dividendsCompounded',
        'dividendsClaimed',
        'dividendDebt',
        'tuxRefundAvailable',
        'rcValue',
        'rcRewardAvailable',
        'meta',
        'owned',
    ]);

    const ago = computed(() => {
        return format(props.stakeStart * 1000);
    });

    const details = ref(false);

    const toggleDetails = () => {
        details.value = !details.value;
    }

    const claim = async () => {
        await useStaking().claim(props.id);
    }

    const compound = async () => {
        await useStaking().compound(props.id);
    }

    const unstake = async () => {
        await useStaking().unstake(props.id);
    }
</script>
