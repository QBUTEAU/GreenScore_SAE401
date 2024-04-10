<template>
  <div>
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
          <div
            v-for="(category, index) in $json.ecologie[language].categorie"
            :key="index"
          >
            <p>
              <strong>{{ category }}</strong>
              {{ $json.ecologie[language].text[index] }}
            </p>
          </div>
          <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
          <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
        </div>
      </div>
    </section>

    <section class="levels">
      <div class="levels__texte">
        <h2>{{ $json.levels[language].title }}</h2>
        <div class="levels-texte__p">
          <template
            v-for="(category, index) in $json.levels[language].categories"
            :key="index"
          >
            <p>
              <strong>{{ category }}</strong>
              {{ $json.levels[language].text[index] }}
            </p>
          </template>
          <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
          <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
        </div>
      </div>
      <div class="levels__img">
        <img class="emojis" src="@/assets/img/emojis.svg" alt="greenscore" />
      </div>
    </section>

    <div class="presentation__button">
      <RouterLink to="/questionnaire" @click="scrollToTop">
        <button class="button">
          <span>{{ $json.buttonText[language] }}</span>
        </button>
      </RouterLink>
    </div>

    <Footer :language="language" @toggleLanguage="toggleLanguage" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const language = ref(localStorage.getItem("language") || "fr");

const toggleLanguage = () => {
  language.value = language.value === "fr" ? "en" : "fr";
  localStorage.setItem("language", language.value);
};

import translationData from "@/assets/js/accueil.json";
const $json = translationData;

onMounted(() => {
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    language.value = storedLanguage;
  }
});
</script>
