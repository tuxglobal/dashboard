<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">Red Carpet Staking</h5>
            <div class="card-text">
                <div class="mb-3">
                    <h6>Current Red Carpet NFTs</h6>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Value</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">72</th>
                                <td>750</td>
                                <td>&nbsp;</td>
                                <td><button @click="comingSoon" class="btn btn-sm btn-block btn-success">Redeem</button></td>
                            </tr>
                            <tr>
                                <th scope="row">1299</th>
                                <td>500</td>
                                <td>2023-1-31</td>
                                <td><button @click="comingSoon" class="btn btn-sm btn-block btn-danger">Sell</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2174</th>
                                <td>1500</td>
                                <td>2023-6-16</td>
                                <td><button @click="comingSoon" class="btn btn-sm btn-block btn-danger">Sell</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="text-center card-footer">
            <h6>Currently Serving <small class="text-muted">1104</small></h6>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        const comingSoon = () => {
            alert('Coming soon!');
        }

        return {
            comingSoon,
        }
    }
}
</script>
