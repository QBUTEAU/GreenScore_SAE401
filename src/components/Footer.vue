<script setup>
import { ref, defineProps, defineEmits } from "vue";

const { language } = defineProps(["language"]);
const emit = defineEmits();

const toggleLanguage = () => {
  emit("toggleLanguage");
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Définir les traductions pour le footer
const translations = {
  fr: {
    text: "© 2024 GreenScore - Tous droits réservés",
    Accueil: "Accueil",
    MLegales: "Mentions Légales",
    Questionnaire: "Questionnaire",
  },
  en: {
    text: "© 2024 GreenScore - All rights reserved",
    Accueil: "Home",
    MLegales: "Legal Notice",
    Questionnaire: "Questionnaire",
  },
};
</script>

<template>
  <footer class="footer">
    <p class="footer__copy">{{ translations[language].text }}</p>
    <ul class="footer__liens">
      <li>
        <router-link to="/" @click="scrollToTop">{{
          translations[language].Accueil
        }}</router-link>
      </li>
      <li>
        <router-link to="/questionnaire" @click="scrollToTop">{{
          translations[language].Questionnaire
        }}</router-link>
      </li>
      <li>
        <router-link to="/notice" @click="scrollToTop">{{
          translations[language].MLegales
        }}</router-link>
      </li>
    </ul>
  </footer>
</template>
