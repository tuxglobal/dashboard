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
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    const ethBalance = useState('ethBalance', () => 0);
    const usdcBalance = useState('usdcBalance', () => 0);
    const tuxBalance = useState('tuxBalance', () => 0);
    const wcBalance = useState('wcBalance', () => 0);
    const rcBalance = useState('rcBalance', () => 0);
</script>
