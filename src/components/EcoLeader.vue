<template>
  <Header :language="language" @toggleLanguage="toggleLanguage" />
  <main class="results">
    <div class="results__level">
      <p>{{ $json.EcoLeader.level[language].text }}</p>
      <span class="results-level__span greenDarker">{{
        $json.EcoLeader.level[language].title
      }}</span>
      <img class="results__illus" src="@/assets/img/EcoLeader.svg" alt="EcoLeader" />
    </div>
    <div class="results__advices">
      <div class="results-advices__texte">
        <p>{{ $json.EcoLeader.advice1[language].text }}</p>
        <p>{{ $json.EcoLeader.advice2[language].text }}</p>
        <ul>
          <li>{{ $json.EcoLeader.advice3[language].text }}</li>
          <li>{{ $json.EcoLeader.advice4[language].text }}</li>
          <li>{{ $json.EcoLeader.advice5[language].text }}</li>
        </ul>
        <p>{{ $json.EcoLeader.advice6[language].text }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>

      <div class="results__button">
        <a v-if="language === 'fr'" :href="downloadLink('fr')" download="EcoLeaderFR.jpg">
          <button class="button">Télécharger</button>
        </a>
        <a v-if="language === 'en'" :href="downloadLink('en')" download="EcoLeaderEN.jpg">
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
import EcoLeaderFR from "@/assets/img/EcoLeaderFR.jpg";
import EcoLeaderEN from "@/assets/img/EcoLeaderEN.jpg";

const downloadLink = (lang) => {
  return lang === "fr" ? EcoLeaderFR : EcoLeaderEN;
};
</script>
