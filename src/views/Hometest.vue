<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const language = ref("fr");
const toggleLanguage = () => {
  language.value = language.value === "fr" ? "en" : "fr";
};

import translationData from "@/assets/js/acceuil.json";
const $json = translationData;
</script>

<template>
  <Header :language="language" @toggleLanguage="toggleLanguage" />

  <main class="hero-header">
    <img src="@/assets/img/logo_dark.svg" alt="hero" />
    <p>{{ $json.heroHeader[language.value] }}</p>
    <a href="#presentation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!-- SVG code -->
      </svg>
    </a>
  </main>

  <section class="presentation" id="presentation">
    <!-- Presentation content -->
    <h2>{{ $json.presentation[language.value].title }}</h2>
    <div class="presentation-texte__p">
      <p v-for="paragraph in $json.presentation[language.value].text">
        {{ paragraph }}
      </p>
    </div>
  </section>

  <section class="ecologie">
    <!-- Ecologie content -->
    <h2>{{ $json.ecologie[language.value].title }}</h2>
    <div class="ecologie-texte__p">
      <p v-for="paragraph in $json.ecologie[language.value].text">
        {{ paragraph }}
      </p>
    </div>
  </section>

  <div class="presentation__button">
    <RouterLink to="/questionnaire">
      <button class="button">
        <span>{{ $json.buttonText[language.value] }}</span>
      </button>
    </RouterLink>
  </div>

  <Footer />
</template>

<style scoped>
/* Add your styles here */
</style>
