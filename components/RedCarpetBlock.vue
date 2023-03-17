<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">Red Carpet Staking</h5>
            <div class="card-text">
                <div v-show="rcnfts.length" class="row g-3">
                    <div v-for="rcnft in rcnfts" :key="rcnft.id" class="col-sm-6">
                        <StakingNft
                            :id="rcnft.id"
                            :stakeType="rcnft.stakeType"
                            :stakeTypeString="rcnft.stakeTypeString"
                            :stakeAmount="rcnft.stakeAmount"
                            :stakeAge="rcnft.stakeAge"
                            :stakeStart="rcnft.stakeStart"
                            :stakePrice="rcnft.stakePrice"
                            :startingStakeAmount="rcnft.startingStakeAmount"
                            :availableDividends="rcnft.availableDividends"
                            :dividendsCompounded="rcnft.dividendsCompounded"
                            :dividendsClaimed="rcnft.dividendsClaimed"
                            :dividendDebt="rcnft.dividendDebt"
                            :tuxRefundAvailable="rcnft.tuxRefundAvailable"
                            :rcValue="rcnft.rcValue"
                            :rcRewardAvailable="rcnft.rcRewardAvailable"
                            :meta="rcnft.meta"
                            :owned=true
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const rcnfts = useState('rcnfts', () => []);
</script>
