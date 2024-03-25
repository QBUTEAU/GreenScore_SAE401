<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const language = ref("fr");
const toggleLanguage = () => {
  language.value = language.value === "fr" ? "en" : "fr";
  var languageSpan = document.getElementById("language-span");
  if (languageSpan.innerHTML === "EN") {
    languageSpan.innerHTML = "FR";
    // Ajoutez ici le code pour changer la langue en français
  } else {
    languageSpan.innerHTML = "EN";
    // Ajoutez ici le code pour changer la langue en anglais
  }
};

import translationData from "@/assets/js/accueil.json";
const $json = translationData;
</script>

<template>
  <Header :language="language" @toggleLanguage="toggleLanguage" />

  <main class="hero-header">
    <img src="@/assets/img/logo_dark.svg" alt="hero" />
    <p>{{ $json.heroHeader[language] }}</p>
    <div class="home-button hero-header_button">
      <RouterLink to="/questionnaire">
        <button class="button">
          <span>{{ $json.buttonText[language] }}</span>
        </button>
      </RouterLink>
    </div>
    <a href="#presentation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!-- !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License 
          - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
        <path
          fill="#f1f1f1"
          d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
        />
      </svg>
    </a>
  </main>

  <section class="presentation" id="presentation">
    <div class="presentation__texte">
      <h2>{{ $json.presentation[language].title }}</h2>
      <div class="presentation-texte__p">
        <p
          v-for="paragraph in $json.presentation[language].text"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
    <div class="presentation__img">
      <img src="@/assets/img/greenscore-blanc.svg" alt="planet" />
    </div>
  </section>

  <section class="ecologie">
    <div class="ecologie__planet">
      <img src="@/assets/img/planisphere.svg" alt="planet" />
      <img src="@/assets/img/planisphere.svg" alt="planet" />
    </div>
    <div class="ecologie__axes">
      <h2>{{ $json.ecologie[language].title }}</h2>
      <div class="ecologie-texte__p">
        <p v-for="paragraph in $json.ecologie[language].text" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>

  <section class="levels">
    <div class="levels__texte">
      <h2>{{ $json.levels[language].title }}</h2>
      <div class="levels-texte__p">
        <p v-for="paragraph in $json.levels[language].text" :key="paragraph">
          {{ paragraph }}
        </p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
    <div class="levels__img">
      <img class="emojis" src="@/assets/img/emojis.svg" alt="greenscore" />
    </div>
  </section>

  <div class="presentation__button">
    <RouterLink to="/questionnaire">
      <button class="button">
        <span>{{ $json.buttonText[language] }}</span>
      </button>
    </RouterLink>
  </div>

  <Footer />
</template>
