<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">White Carpet Staking</h5>
            <div class="card-text">
                <div class="mb-5">
                    <h6>Stake TNT</h6>
                    <div class="input-group mb-2">
                        <input v-model="stakeAmount" type="number" class="form-control inline" id="stakeAmount"/>
                        <div class="input-group-append">
                            <button @click="stakeMax" class="btn btn-secondary">Max</button>
                        </div>
                        <div class="input-group-append">
                            <button @click="comingSoon" class="btn btn-primary" style="width: 100px;">Stake</button>
                        </div>
                    </div>
                    <h6>Unstake TNT</h6>
                    <div class="input-group">
                        <input v-model="unstakeAmount" type="number" class="form-control inline" id="unstakeAmount"/>
                        <div class="input-group-append">
                            <button @click="unstakeMax" class="btn btn-secondary">Max</button>
                        </div>
                        <div class="input-group-append">
                            <button @click="comingSoon" class="btn btn-danger" style="width: 100px;">Unstake</button>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col text-center">
                            <h6>Staked TNT <small class="text-muted">{{ stakedAmount }}</small></h6>
                        </div>
                        <div class="col text-center">
                            <h6>Available Rewards <small class="text-muted">21.3</small></h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button @click="comingSoon" class="btn btn-info btn-block">Claim</button>
                        </div>
                        <div class="col">
                            <button @click="comingSoon" class="btn btn-success btn-block">Compound</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center card-footer">
            <h6>White Carpet Line Position <small class="text-muted">112</small></h6>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const tntBalance = ref(320.0000);
        const stakeAmount = ref(0);
        const stakedAmount = ref(14232.1107);
        const unstakeAmount = ref(0);

        const stakeMax = () => {
            stakeAmount.value = tntBalance.value;
        }

        const unstakeMax = () => {
            unstakeAmount.value = stakedAmount.value;
        }

        const comingSoon = () => {
            alert('Coming soon!');
        }

        return {
            tntBalance,
            stakeAmount,
            stakedAmount,
            unstakeAmount,
            stakeMax,
            unstakeMax,
            comingSoon,
        }
    }
}
</script>
