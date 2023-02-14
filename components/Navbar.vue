<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <NuxtLink to="/" class="navbar-brand">TNT</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/dashboard" class="nav-link">Dashboard</NuxtLink>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <Wallet />
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
