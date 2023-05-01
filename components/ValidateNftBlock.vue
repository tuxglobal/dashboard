<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-3">Validate Certificate</h5>
            <div class="card-text">

                <div class="mb-3">
                    <div class="input-group">
                        <div class="input-group-text p-3 bright-red-bg fs-3 text-white">#</div>
                        <input type="number" v-model="id" class="form-control p-3 inline" id="id"/>
                    </div>
                </div>
                <button @click="validate" class="btn btn-primary mt-3 mb-3">Validate</button>
                <div v-show="nft.id != null">
                    <StakingNft
                        :id="nft.id"
                        :stakeType="nft.stakeType"
                        :stakeTypeString="nft.stakeTypeString"
                        :stakeAmount="nft.stakeAmount"
                        :stakeStart="nft.stakeStart"
                        :stakePrice="nft.stakePrice"
                        :startingStakeAmount="nft.startingStakeAmount"
                        :availableDividends="nft.availableDividends"
                        :dividendsCompounded="nft.dividendsCompounded"
                        :dividendsClaimed="nft.dividendsClaimed"
                        :dividendDebt="nft.dividendDebt"
                        :tuxRefundAvailable="nft.tuxRefundAvailable"
                        :rcValue="nft.rcValue"
                        :rcRewardAvailable="nft.rcRewardAvailable"
                        :meta="nft.meta"
                        :owned=false
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const id = ref(null);
    const nft = ref({
        id: null,
        stakeType: null,
        stakeTypeString: null,
        stakeAmount: null,
        stakeStart: null,
        stakePrice: null,
        startingStakeAmount: null,
        availableDividends: null,
        dividendsCompounded: null,
        dividendsClaimed: null,
        dividendDebt: null,
        tuxRefundAvailable: null,
        rcValue: null,
        rcRewardAvailable: null,
        meta: {
            name: null,
            image: null,
        },
    });
    const stakeTypeString = ref('');

    const validate = async () => {
        nft.value = await useStaking().getNft(id.value);
    }
</script>
