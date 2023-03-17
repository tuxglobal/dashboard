<template>
    <div>
        {{ stakeTypeString }}
    </div>
</template>

<script setup>
    const props = defineProps([
        'id',
        'stakeType',
        'stakeTypeString',
        'stakeAmount',
        'stakeStart',
        'stakePrice',
        'startingStakeAmount',
        'availableDividends',
        'dividendsCompounded',
        'dividendsClaimed',
        'dividendDebt',
        'tuxRefundAvailable',
        'rcValue',
        'rcRewardAvailable',
        'meta',
    ]);
    console.log(props);
</script>
