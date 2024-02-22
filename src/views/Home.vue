<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import router from "../router";
import Presentation from "./Presentation.vue";

const showLogo = ref(false);
const showButton = ref(false);

// Delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

onMounted(async () => {
  await delay(1000);
  showLogo.value = true;
  await delay(1000);
  showButton.value = true;
});
</script>

<template>
  <section class="home">
    <img :class="{ 'fade-in': showLogo }" class="logo" src="@/assets/img/logo.png" alt="greenscore">
    <RouterLink to="/presentation">
      <button :class="{ 'fade-in': showButton }" class="button">
        <span>Entrer</span>
      </button>
    </RouterLink>
  </section>
</template>

<style scoped>
.logo,
.button {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.logo.fade-in, .button.fade-in  {
  transition-delay: 0s;
}

.fade-in {
  opacity: 1;
}
</style>
