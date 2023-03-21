<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">White Carpet Staking</h5>
            <div class="card-text">
                <div class="mb-3">
                    <label for="amount" class="form-label">Stake TUX</label>
                    <div class="input-group">
                        <input v-model="amount" class="form-control inline" id="from"/>
                        <button @click="max" class="btn btn-secondary" style="width: 100px;">Max</button>
                        <button @click="stake" class="btn btn-primary" style="width: 100px;">Stake</button>
                    </div>
                </div>
                <div v-show="wcnfts.length" class="row g-3">
                    <div v-for="wcnft in wcnfts" :key="wcnft.id" class="col-sm-6">
                        <StakingNft
                            :id="wcnft.id"
                            :stakeType="wcnft.stakeType"
                            :stakeTypeString="wcnft.stakeTypeString"
                            :stakeAmount="wcnft.stakeAmount"
                            :stakeAge="wcnft.stakeAge"
                            :stakeStart="wcnft.stakeStart"
                            :stakePrice="wcnft.stakePrice"
                            :startingStakeAmount="wcnft.startingStakeAmount"
                            :availableDividends="wcnft.availableDividends"
                            :dividendsCompounded="wcnft.dividendsCompounded"
                            :dividendsClaimed="wcnft.dividendsClaimed"
                            :dividendDebt="wcnft.dividendDebt"
                            :tuxRefundAvailable="wcnft.tuxRefundAvailable"
                            :rcValue="wcnft.rcValue"
                            :rcRewardAvailable="wcnft.rcRewardAvailable"
                            :meta="wcnft.meta"
                            :owned=true
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const amount = ref(0);
    const tuxBalance = useState('tuxBalance', () => 0);
    const tuxDecimals = useState('tuxDecimals', () => 0);
    const wcnfts = useState('wcnfts', () => []);

    const max = () => {
        amount.value = useNumberFormat(tuxBalance.value, tuxDecimals.value);
    }

    const stake = async () => {
        await useStaking().stake(BigInt(amount.value * 10 ** 18));
    }
</script>
