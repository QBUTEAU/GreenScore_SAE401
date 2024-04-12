<template>
  <Header :language="language" @toggleLanguage="toggleLanguage" />
  <main class="results">
    <div class="results__level">
      <p>{{ $json.NoviceVert.level[language].text }}</p>
      <span class="results-level__span greenLight">{{
        $json.NoviceVert.level[language].title
      }}</span>
    </div>
    <div class="results__advices">
      <div class="results-advices__texte">
        <p>{{ $json.NoviceVert.advice1[language].text }}</p>
        <p>{{ $json.NoviceVert.advice2[language].text }}</p>
        <ul>
          <li>{{ $json.NoviceVert.advice3[language].text }}</li>
          <li>{{ $json.NoviceVert.advice4[language].text }}</li>
          <li>{{ $json.NoviceVert.advice5[language].text }}</li>
        </ul>
        <p>{{ $json.NoviceVert.advice6[language].text }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>

      <div class="results__button">
        <a v-if="language === 'fr'" :href="downloadLink('fr')" download
          ><button class="button">Résultats (FR)</button></a
        >
        <a v-if="language === 'en'" :href="downloadLink('en')" download
          ><button class="button">Results (EN)</button></a
        >
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

const downloadLink = (lang) => {
  return lang === "fr"
    ? "/path/vers/le/fichier_fr.pdf"
    : "/path/vers/le/fichier_en.pdf";
};
</script>
