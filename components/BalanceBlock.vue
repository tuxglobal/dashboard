<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-3">Account Balances</h5>
            <table class="table card-text mb-0">
                <tbody>
                    <tr>
                        <th class="ps-0 py-3" scope="row">ETH</th>
                        <td class="pr-0 py-3 text-end">{{ useNumberFormat(ethBalance, 18) }}</td>
                    </tr>
                    <tr>
                        <th class="ps-0 py-3" scope="row">USDC</th>
                        <td class="pr-0 py-3 text-end">{{ useNumberFormat(usdcBalance, usdcDecimals) }}</td>
                    </tr>
                    <tr>
                        <th class="ps-0 py-3" scope="row">TUX</th>
                        <td class="pr-0 py-3 text-end">{{ useNumberFormat(tuxBalance, 18) }}</td>
                    </tr>
                    <tr>
                        <th class="ps-0 py-3 border-0" scope="row">Collateral Vault</th>
                        <td class="pr-0 py-3 border-0 text-end">{{ useNumberFormat(collateralBalance, usdcDecimals) }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="need-help">
                <div class="row">
                    <div class="col-8">
                        <p class="text-black fs-6 mb-0">
                            <strong>Need Help?</strong><br />
                            Get a step by step How to of our Tux global ecosystem
                        </p>
                    </div>
                    <div class="col-4">
                        <div class="video-play-button p-4 text-center rounded">PLAY</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const ethBalance = useState('ethBalance', () => 0);
    const usdcBalance = useState('usdcBalance', () => 0);
    const tuxBalance = useState('tuxBalance', () => 0);
    const collateralBalance = useState('collateralBalance', () => 0);
    const usdcDecimals = useState('usdcDecimals', () => 0);
    const tuxDecimals = useState('tuxDecimals', () => 0);
</script>
