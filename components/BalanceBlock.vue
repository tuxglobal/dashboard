<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">Balances</h5>
            <table class="table card-text">
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
                        <th scope="row">TNT</th>
                        <td>320.0000</td>
                    </tr>
                    <tr>
                        <th scope="row">White Carpet</th>
                        <td>14232.1107</td>
                    </tr>
                    <tr>
                        <th scope="row">Red Carpet</th>
                        <td>2000.0000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    const ethBalance = useState('ethBalance', () => 0);
    const usdcBalance = useState('usdcBalance', () => 0);
</script>
