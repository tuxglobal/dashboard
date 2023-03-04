<template>

    <div class="heading-text">White Carpet Staking</div>
    <hr />
    <div class="mb-3">
        <p>Stake TUX</p>
        <div class="input-group">
            <input v-model="amount" class="form-control inline" id="from"/>
            <button @click="max" class="btn btn-secondary" style="width: 100px;">Max</button>
            <button @click="stake" class="btn btn-primary-red" style="width: 100px;">Stake</button>
        </div>
    </div>
    <div v-show="nfts.length" class="mb-3">
        <table class="table table-sm table-striped table-borderless">
            <thead>
                <tr>
                    <th scope="col" class="color-highlight-text">NFT</th>
                    <th scope="col" class="color-highlight-text">Value</th>
                    <th scope="col" class="color-highlight-text">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="nft in nfts" :key="nft.id">
                    <td><img :src="nft.image" width="100" height="100" /></td>
                    <td>{{ useNumberFormat(nft.value) }} TNT</td>
                    <td class="d-grid">
                        <button class="btn btn-primary btn-sm mb-1">Compound</button>
                        <button class="btn btn-secondary btn-sm mb-1">Claim</button>
                        <button @click="unstake(nft.id)" class="btn btn-danger btn-sm mb-1">Unstake</button>
                    </td>
                </tr>
            </tbody>
        </table>
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
        await useStaking().stake(BigInt(amount.value * 10 ** 18));
    }

    const unstake = async (id) => {
        useStaking().unstake(id);
    }
</script>
