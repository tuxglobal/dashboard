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
                <div v-show="nfts.length" class="mb-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">NFT</th>
                                <th scope="col">Value</th>
                                <th scope="col">Actions</th>
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
            </div>
        </div>
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
        await useErc20().approve('Tux', await useAddressBook('Staking'), BigInt(amount.value * 10 ** 18));
        useStaking().stake(BigInt(amount.value * 10 ** 18));
    }

    const unstake = async (id) => {
        useStaking().unstake(id);
    }
</script>
