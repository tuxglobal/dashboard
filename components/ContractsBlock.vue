<template>
    
    <div class="heading-text">Contract Addresses</div>
    <hr />
    <table class="table table-sm table-striped table-borderless">
        <thead>
            <tr>
                <th scope="col" class="color-highlight-text">NAME</th>
                <th scope="col" class="color-highlight-text">ADDRESS</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, propertyName) in addresses" :key="propertyName">
                <th scope="row">{{ propertyName }}</th>
                <td><a :href="url(value)" target="_new">{{ value }}</a></td>
            </tr>
        </tbody>
    </table>
        
</template>

<script setup>
    import { useWalletStore } from '~~/store/useWalletStore';
    import { storeToRefs } from 'pinia';
    const walletStore = useWalletStore();
    const { addresses } = storeToRefs(walletStore);
    const config = useRuntimeConfig();
    const blockexplorer = config.blockexplorer;
    const url = (address) => `${blockexplorer}/address/${address}`;
</script>
