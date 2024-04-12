<template>
  <Header :language="language" @toggleLanguage="toggleLanguage" />
  <main class="results">
    <div class="results__level">
      <p>{{ $json.ActeurVert.level[language].text }}</p>
      <span class="results-level__span greenLighter">{{
        $json.ActeurVert.level[language].title
      }}</span>
      <img
        class="results__illus"
        src="@/assets/img/ActeurVert.svg"
        alt="ActeurVert"
      />
    </div>
    <div class="results__advices">
      <div class="results-advices__texte">
        <p>{{ $json.ActeurVert.advice1[language].text }}</p>
        <p>{{ $json.ActeurVert.advice2[language].text }}</p>
        <ul>
          <li>{{ $json.ActeurVert.advice3[language].text }}</li>
          <li>{{ $json.ActeurVert.advice4[language].text }}</li>
          <li>{{ $json.ActeurVert.advice5[language].text }}</li>
        </ul>
        <p>{{ $json.ActeurVert.advice6[language].text }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>

      <div class="results__button">
        <a
          v-if="language === 'fr'"
          :href="downloadLink('fr')"
          download="ActeurVertFR.jpg"
        >
          <button class="button">Résultats (FR)</button>
        </a>
        <a
          v-if="language === 'en'"
          :href="downloadLink('en')"
          download="GreenActorEN.jpg"
        >
          <button class="button">Results (EN)</button>
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
import ActeurVertFR from "@/assets/img/ActeurVertFR.jpg";
import GreenActorEN from "@/assets/img/GreenActorEN.jpg";

const downloadLink = (lang) => {
  return lang === "fr" ? ActeurVertFR : GreenActorEN;
};
</script>
