<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { ref, computed } from "vue";
  import router from "../router";
  import Presentation from "./Presentation.vue";
</script>

<template>
  <section>
    <img class="logo" src="@/assets/img/logo.png" alt="greenscore">
    <RouterLink to="/presentation"><button class="button"><span>Entrer</span></button></RouterLink>
  </section>
</template>

<style scoped></style>
