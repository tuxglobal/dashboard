<template>
    
    <div class="gray-bg-padding">
        <h5 class="heading-text">Balances</h5>
        <hr />
        <div style="height: 240px;">[[ graph will go here ]]</div>
    </div>

    <div class="color-main-bg p-2">
        <div class="row">
            <div class="col-6">
                Account Overview
            </div>
            <div class="col-6 text-end">
                Your Wallet
            </div>
        </div>
    </div>
    <div class="color-highlight-bg color-highlight-bg with-border-radius-bottom p-3 pb-1">
        <table class="table table-sm table-striped table-borderless">
            <tbody>
                <tr>
                    <th scope="row">ETH</th>
                    <td>{{ useNumberFormat(ethBalance) }}</td>
                </tr>
                <tr>
                    <th scope="row">USDC</th>
                    <td>{{ useNumberFormat(usdcBalance) }}</td>
                </tr>
                <tr>
                    <th scope="row">TUX</th>
                    <td>{{ useNumberFormat(tuxBalance) }}</td>
                </tr>
                <tr>
                    <th scope="row">White Carpet</th>
                    <td>{{ useNumberFormat(wcBalance) }}</td>
                </tr>
                <tr>
                    <th scope="row">Red Carpet</th>
                    <td>{{ useNumberFormat(rcBalance) }}</td>
                </tr>
                <tr>
                    <th scope="row">Collateral Vault</th>
                    <td>{{ useNumberFormat(collateralBalance) }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script setup>
    const ethBalance = useState('ethBalance', () => 0);
    const usdcBalance = useState('usdcBalance', () => 0);
    const tuxBalance = useState('tuxBalance', () => 0);
    const wcBalance = useState('wcBalance', () => 0);
    const rcBalance = useState('rcBalance', () => 0);
    const collateralBalance = useState('collateralBalance', () => 0);
</script>
