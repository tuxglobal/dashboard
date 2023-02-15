<template>
    <div>
        <Navbar />
        <div v-show="!loading" class="container py-5">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
    const loading = useState('loading');
</script>
