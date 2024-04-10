<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const language = ref("fr");
const toggleLanguage = () => {
  language.value = language.value === "fr" ? "en" : "fr";
};

import translationData from "@/assets/js/resultat.json";
const $json = translationData;
</script>

<template>
  <Header :language="language" @toggleLanguage="toggleLanguage" />
  <main class="results">
    <div class="results__level">
      <p>{{ $json.DefenseurVert.level[language].text }}</p>
      <span class="results-level__span green">{{
        $json.DefenseurVert.level[language].title
      }}</span>
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
        <a href="" download><button class="button">Résultats (FR)</button></a>
        <a href="" download><button class="button">Results (EN)</button></a>
      </div>
    </div>
  </main>
  <Footer />
</template>
