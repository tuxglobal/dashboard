<template>
    <div class="heading-text">Red Carpet Staking</div>
    <hr />
    <p>You currently do not have any red carpet NFTs</p>
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
