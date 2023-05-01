<template>
    <div class="card certificate">
        <div class="row g-0">
            <div class="col-md-4">
                <!-- <img :src="image" class="img-fluid rounded-start" :alt="stakeTypeString + ' #' + id"> -->
                <img src="https://cloudflare-ipfs.com/ipfs/QmQpWARKF1soQ3FLdNzuguYJ3eAdrKhEV6MmHC5cvXa85p/wc5000.png" class="img-fluid rounded-start" :alt="stakeTypeString + ' #' + id">
            </div>
            <div class="col-md-8">
                <div class="card-body ps-0 pe-0 pt-0">
                    <h6 class="card-title ps-4 text-dark fs-5 fw-bold letter-spacing-sm">{{ stakeTypeString }} #{{ id }}</h6>
                    <table class="table table-striped" v-show="stakeType == 1">
                        <tbody>
                            <tr>
                                <th class="ps-4" scope="row">Stake Amount</th>
                                <td class="pe-4 text-end">{{ useNumberFormat(stakeAmount, tuxDecimals) }}</td>
                            </tr>
                            <tr>
                                <th class="ps-4" scope="row">Stake Age</th>
                                <td class="pe-4 text-end">{{ ago }}</td>
                            </tr>
                            <tr>
                                <th class="ps-4" scope="row">Entry Price</th>
                                <td class="pe-4 text-end">{{ useNumberFormat(stakePrice, usdcDecimals) }}</td>
                            </tr>
                            <tr>
                                <th class="ps-4" scope="row">Available Rewards</th>
                                <td class="pe-4 text-end">{{ useNumberFormat(availableDividends, tuxDecimals) }}</td>
                            </tr>
                            <tr>
                                <th class="ps-4" scope="row">USDC Value</th>
                                <td class="pe-4 text-end">{{ useNumberFormat(rcValue, usdcDecimals) }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table table-striped" v-show="stakeType == 2">
                        <tbody>
                            <tr>
                                <th class="ps-4" scope="row">Stake Age</th>
                                <td class="pe-4 text-end">{{ ago }}</td>
                            </tr>
                            <tr>
                                <th class="ps-4" scope="row">TUX Refund</th>
                                <td class="pe-4 text-end">{{ useNumberFormat(tuxRefundAvailable, tuxDecimals) }}</td>
                            </tr>
                            <tr>
                                <th class="ps-4" scope="row">USDC Value</th>
                                <td class="pe-4 text-end">{{ useNumberFormat(rcValue, usdcDecimals) }}</td>
                            </tr>
                            <tr>
                                <th class="ps-4" scope="row">USDC Available</th>
                                <td class="pe-4 text-end">{{ useNumberFormat(rcRewardAvailable, usdcDecimals) }}</td>
                            </tr>
                            <tr>
                                <th class="ps-4" scope="row">&nbsp;</th>
                                <td class="pe-4 text-end">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div v-show="owned" class="row">
            <div class="col-4 ps-4">
                <button v-show="stakeType == 1" @click="unstake" class="btn btn-sm btn-danger">Unstake</button>
            </div>
            <div class="col-8 pe-4 text-end">
                <button v-show="stakeType == 2 && tuxRefundAvailable > 0" @click="claim" class="btn btn-sm btn-info ms-3">Refund</button>
                <button v-show="stakeType == 2 && rcRewardAvailable > 0" @click="claim" class="btn btn-sm btn-primary ms-3">Claim</button>
                <button v-show="stakeType == 1 && availableDividends > 0" @click="compound" class="btn btn-sm btn-primary ms-3">Compound</button>
                <button v-show="stakeType == 1 && availableDividends > 0" @click="claim" class="btn btn-sm btn-secondary ms-3">Claim</button>
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

    const usdcDecimals = useState('usdcDecimals', () => 0);
    const tuxDecimals = useState('tuxDecimals', () => 0);

    const ago = computed(() => {
        return format(props.stakeStart * 1000);
    });

    const image = computed(() => {
        if(props.meta.image) {
            return props.meta.image.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/');
        }
    });

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
