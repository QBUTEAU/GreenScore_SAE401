<template>
  <Header :language="language" @toggleLanguage="toggleLanguage" />
  <main class="results">
    <div class="results__level">
      <p>{{ $json.DefenseurVert.level[language].text }}</p>
      <span class="results-level__span green">{{
        $json.DefenseurVert.level[language].title
      }}</span>
      <img class="results__illus" src="@/assets/img/DefenseurVert.svg" alt="DefenseurVert" />
    </div>
    <div class="results__advices">
      <div class="results-advices__texte">
        <p>{{ $json.DefenseurVert.advice1[language].text }}</p>
        <p>{{ $json.DefenseurVert.advice2[language].text }}</p>
        <ul>
          <li>{{ $json.DefenseurVert.advice3[language].text }}</li>
          <li>{{ $json.DefenseurVert.advice4[language].text }}</li>
          <li>{{ $json.DefenseurVert.advice5[language].text }}</li>
        </ul>
        <p>{{ $json.DefenseurVert.advice6[language].text }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>

      <div class="results__button">
        <a v-if="language === 'fr'" :href="downloadLink('fr')" download="DefenseurVertFR.jpg">
          <button class="button">Télécharger</button>
        </a>
        <a v-if="language === 'en'" :href="downloadLink('en')" download="GreenDefenderEN.jpg">
          <button class="button">Download</button>
        </a>
      </div>
    </div>
  </main>
  <Footer :language="language" @toggleLanguage="toggleLanguage" />
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import translationData from "@/assets/js/resultat.json";

const language = ref(localStorage.getItem("language") || "fr");
const $json = translationData;

const toggleLanguage = () => {
  language.value = language.value === "fr" ? "en" : "fr";
};

// Importer les images directement ici
import DefenseurVertFR from "@/assets/img/DefenseurVertFR.jpg";
import GreenDefenderEN from "@/assets/img/GreenDefenderEN.jpg";

const downloadLink = (lang) => {
  return lang === "fr" ? DefenseurVertFR : GreenDefenderEN;
};
</script>
