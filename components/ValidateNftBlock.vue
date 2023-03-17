<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">Validate NFT</h5>
            <div class="card-text">
                <div class="mb-3">
                    <label for="id" class="form-label">NFT Id</label>
                    <input type="number" v-model="id" class="form-control" id="id"/>
                </div>
                <button @click="validate" class="btn btn-primary mt-3">Validate</button>
                <div v-show="id != null">
                    <StakingNft :stakeTypeString="stakeTypeString"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const id = ref(null);
    const stakeTypeString = ref('');

    const validate = async () => {
        const nft = await useStaking().getNft(id.value);
        stakeTypeString.value = nft.stakeTypeString;
    }
</script>
