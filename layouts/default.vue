<template>
    <div class="tnt-default" style="min-height: 100%;">
        <div class="color-main-bg">
    
            <div class="main-padding" id="home">
                <div class="main-border color-main-border">
    
                    <Navbar />
                    <div v-show="!loading" class="">
                        <slot />
                    </div>
                    <div v-show="loading" class="text-center my-5 py-5">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <Footer />
    
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script setup>
        const loading = useState('loading');
    </script>
    