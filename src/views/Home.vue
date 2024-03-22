<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed, onMounted } from "vue";
import router from "../router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />

  <main class="hero-header">
    <img src="@/assets/img/logo_dark.svg" alt="hero" />
    <p>Explorez votre empreinte, changez votre impact !</p>
    <div class="home-button hero-header_button">
      <RouterLink to="/questionnaire">
        <button class="button">
          <span>Commencer le questionnaire</span>
        </button>
      </RouterLink>
    </div>
    <a href="#presentation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!-- !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License 
          - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
          <path fill="#f1f1f1" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>
    </a>
  </main>

  <section class="presentation" id="presentation">
    <div class="presentation__texte">
      <h2>Qu'est-ce que GreenScore ?</h2>
      <div class="presentation-texte__p">
        <p>
          GreenScore est une application web basée sur un questionnaire en ligne
          engageant, sur la thématique de l'écologie. Inspiré des tests de pureté
          et de personnalité, GreenScore met en avant 20 questions sur des
          situations en lien avec le mode de vie écologique. En utilisant une
          approche ludique et instructive, nous avons pour but de sensibiliser
          chaque utilisateur à l'impact de leurs choix quotidiens sur
          l'environnement.
        </p>
        <p>
          Chaque question est soigneusement élaborée de sorte à ce que chaque
          utilisateur s'identifie à la situation, le tout dans divers aspects de
          la vie quotidienne, tels que la consommation d'énergie, la gestion des
          déchets ou les modes de transport. L'objectif est de fournir une
          évaluation holistique de l'empreinte écologique de chacun.
        </p>
        <p>
          GreenScore n'est pas simplement un questionnaire en ligne, c'est une
          exploration interactive de l'impact de chacun sur la planète, une
          invitation à la prise de conscience et à l'engagement vers un avenir et
          un monde plus vert !
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
      <h2>Comment mesure-t-on votre empreinte écologique ?</h2>
      <div class="ecologie-texte__p">
        <p>
          🌿 <strong>Explorez votre impact :</strong> Répondez à notre
          questionnaire interactif pour découvrir comment vos choix quotidiens
          influent sur l'environnement. De la manière dont vous consommez
          l'énergie à vos habitudes de consommation, ou par l'utilisation de
          produits pouvant impacter l'environnement.
        </p>
        <p>
          🌍 <strong>Conscience écologique :</strong> Nous sommes là pour vous
          aider à prendre conscience de vos habitudes et à identifier des moyens
          pratiques d'adopter un mode de vie plus respectueux de l'environnement.
        </p>
        <p>
          🌱 <strong>Des résultats personnalisés :</strong> À la fin du
          questionnaire, recevez des résultats personnalisés, des conseils
          écologiques et des suggestions pour amplifier votre impact positif.
        </p>
        <p>
          Rejoignez-nous dans cette aventure écologique et explorons ensemble
          notre potentiel de changement afin d'œuvrer pour un monde plus vert ! 🌳
        </p>
        <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
        <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
      </div>
    </div>
  </section>

  <section class="levels">
    <div class="levels__texte">
      <h2>Quels sont les niveaux de GreenScore ?</h2>
      <div class="levels-texte__p">
        <p>
          <strong>Éco-Héros :</strong> Vous incarnez l'excellence en matière d'écologie,
          avec des habitudes presque irréprochables et un impact environnemental remarquablement
          positif. Continuez à explorer et à vous informer pour maintenir ce niveau d'excellence.
        </p>
        <p>
          <strong>Défenseur Vert :</strong> Vous avez atteint un bon niveau d'engagement
          écologique, avec des habitudes respectueuses de l'environnement. Continuez sur
          cette voie pour renforcer vos actions et votre impact positif.
        </p>
        <p>
          <strong>Acteur Vert :</strong> Vous commencez à prendre conscience de
          l'importance de votre impact sur l'environnement et avez déjà commencé à
          adopter certaines habitudes respectueuses. Continuez à explorer et à apprendre
          pour approfondir votre engagement écologique.
        </p>
        <p>
          <strong>Débutant Vert :</strong> Vous êtes aux prémices de votre engagement
          pour un mode de vie plus respectueux de l'environnement. Continuez à persévérer
          malgré les défis et à chercher des moyens d'améliorer progressivement vos habitudes
          écologiques.
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
        <span>Commencer le questionnaire</span>
      </button>
    </RouterLink>
  </div>

  <Footer />
</template>
