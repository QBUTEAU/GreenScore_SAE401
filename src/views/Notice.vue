<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const language = ref(localStorage.getItem("language") || "fr");

const toggleLanguage = () => {
  language.value = language.value === "fr" ? "en" : "fr";
  var languageSpan = document.getElementById("language-span");
  if (languageSpan.innerHTML === "EN") {
    languageSpan.innerHTML = "FR";
    localStorage.setItem("language", "fr");
  } else {
    languageSpan.innerHTML = "EN";
    localStorage.setItem("language", "en");
  }
};

import translationData from "@/assets/js/notice.json";
const $json = translationData;
</script>

<template>
  <Header :language="language" @toggleLanguage="toggleLanguage" />

  <main class="mentions">
    <h2>{{ $json.generalInformation[language].title }}</h2>
    <div class="mentions__bloc">
      <h3>{{ $json.generalInformation[language].subtitle }}</h3>
      <div class="mentions-bloc__texte">
        <p>{{ $json.generalInformation[language].text1 }}</p>
        <p>{{ $json.generalInformation[language].text2 }}</p>
        <p>{{ $json.generalInformation[language].text3 }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
    <div class="mentions__bloc">
      <h3>{{ $json.credits[language].title }}</h3>
      <div class="mentions-bloc__texte">
        <p>{{ $json.credits[language].text }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
    <div class="mentions__bloc">
      <h3>{{ $json.intellectualProperty[language].title }}</h3>
      <div class="mentions-bloc__texte">
        <p>{{ $json.intellectualProperty[language].text1 }}</p>
        <p>{{ $json.intellectualProperty[language].text2 }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
    <div class="mentions__bloc">
      <h3>{{ $json.privacyPolicy[language].title }}</h3>
      <div class="mentions-bloc__texte">
        <p>{{ $json.privacyPolicy[language].text1 }}</p>
        <p>{{ $json.privacyPolicy[language].text2 }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
    <div class="mentions__bloc">
      <h3>{{ $json.responsibility[language].title }}</h3>
      <div class="mentions-bloc__texte">
        <p>{{ $json.responsibility[language].text }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
    <div class="mentions__bloc">
      <h3>{{ $json.siteUpdates[language].title }}</h3>
      <div class="mentions-bloc__texte">
        <p>{{ $json.siteUpdates[language].text }}</p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
  </main>

  <Footer :language="language" @toggleLanguage="toggleLanguage" />
</template>
