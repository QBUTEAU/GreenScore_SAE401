<script setup>
import { RouterLink,RouterView } from "vue-router";
</script>

<template>
    <header class="header">
        <RouterLink to="/presentation">
            <img src="@/assets/img/header.png" alt="GreenScore">
        </RouterLink>
        <RouterView />
    </header>
</template>

<style scoped>
</style>