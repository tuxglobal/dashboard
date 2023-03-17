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
                <div v-show="wcnfts.length" class="mb-3">
                    <div v-for="wcnft in wcnfts" :key="wcnft.id" class="card mb-3">
                        <div class="row g-0">
                            <div class="col-sm-2">
                                <img :src="wcnft.meta.image" class="img-fluid rounded-start" :alt="wcnft.meta.name">
                            </div>
                            <div class="col-sm-10">
                                <div class="card-body">
                                    <h5 class="card-title">{{ wcnft.stakeTypeString }} #{{ wcnft.id }}</h5>
                                    <div class="card-text">
                                        <div v-show="show == wcnft.id">
                                            Details
                                        </div>
                                        <ul class="nav justify-content-end">
                                            <li v-show="wcnft.availableDividends > 0" class="nav-item ms-1">
                                                <button @click="compound(wcnft.id)" class="btn btn-primary">
                                                    Compound {{ useNumberFormat(wcnft.availableDividends) }} TUX
                                                </button>
                                            </li>
                                            <li v-show="wcnft.availableDividends > 0" class="nav-item ms-1">
                                                <button @click="claim(wcnft.id)" class="btn btn-secondary">
                                                    Claim {{ useNumberFormat(wcnft.availableDividends) }} TUX
                                                </button>
                                            </li>
                                            <li class="nav-item ms-1">
                                                <button @click="unstake(wcnft.id)" class="btn btn-danger">
                                                    Unstake
                                                </button>
                                            </li>
                                            <li class="nav-item ms-1">
                                                <button @click="showDetails(wcnft.id)" class="btn btn-info">
                                                    Details
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="text-end mt-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const amount = ref(0);
    const tuxBalance = useState('tuxBalance', () => 0);
    const wcnfts = useState('wcnfts', () => []);
    const show = ref(0);

    const max = () => {
        amount.value = useNumberFormat(tuxBalance.value);
    }

    const stake = async () => {
        await useStaking().stake(BigInt(amount.value * 10 ** 18));
    }

    const showDetails = (id) => {
        if(show.value == id) {
            show.value = 0;
            return;
        }
        show.value = id;
    }

    const unstake = async (id) => {
        useStaking().unstake(id);
    }
</script>
