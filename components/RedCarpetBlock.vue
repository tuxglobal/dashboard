<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title mb-5">Red Carpet Staking</h5>
            <div class="card-text">
                <div class="mb-3">
                    <p>You currently do not have any red carpet NFTs</p>
                </div>
            </div>
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
