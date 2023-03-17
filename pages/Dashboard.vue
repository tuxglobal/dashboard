<template>
    <div>
       <h1>Dashboard</h1>
        <div class="py-5">
            <div v-show="connected" class="row gx-5">
                <div class="col-md-6 mb-4">
                    <BalanceBlock />
                </div>
                <div class="col-md-6 mb-4">
                    <SwapBlock />
                </div>
                <div class="col-md-12 mb-4">
                    <WhiteCarpetBlock />
                </div>
                <div v-show="rcnfts.length" class="col-md-12 mb-4">
                    <RedCarpetBlock />
                </div>
                <div class="col-md-6 mb-4">
                    <ValidateNftBlock />
                </div>
                <div class="col-md-6 mb-4">
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
