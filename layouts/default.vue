<template>
    <div>
        <Navbar />
        <div v-show="!loading" class="container py-5">
            <slot />
        </div>
        <div v-show="loading" class="text-center my-5 py-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
    const loading = useState('loading');
</script>
