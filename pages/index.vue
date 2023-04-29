<template>
    <div>
        <h1 class="mb-4 mt-0 pt-0 pb-0">Dashboard</h1>
        <div>
            <div v-show="connected" class="row gx-5">
                <div class="col-md-6 mb-5">
                    <BalanceBlock />
                </div>
                <div class="col-md-6 mb-5">
                    <SwapBlock />
                </div>
                <div class="col-md-12 mb-5">
                    <WhiteCarpetBlock />
                </div>
                <div v-show="rcnfts.length" class="col-md-12 mb-5">
                    <RedCarpetBlock />
                </div>
                <div class="col-md-6 mb-5">
                    <MyListingsBlock />
                </div>
                <div class="col-md-6 mb-5">
                    <AllListingsBlock />
                </div>
                <div class="col-md-6 mb-5">
                    <ValidateNftBlock />
                </div>
                <div class="col-md-6 mb-5">
                    <ContractsBlock />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'Dashboard',
    });
    const connected = useState('connected');
    const rcnfts = useState('rcnfts', () => []);
</script>
