<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-3">Contract Addresses</h5>
            <table class="table card-text">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col" class="text-end">Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, propertyName) in addresses" :key="propertyName">
                        <th scope="row">{{ propertyName }}</th>
                        <td><a :href="url(value)" target="_new">{{ value }}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
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
