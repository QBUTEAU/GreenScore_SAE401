<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed, onMounted } from "vue";
import router from "../router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />

  <section class="presentation">
    <div class="presentation__planet">
      <img src="@/assets/img/planisphere.svg" alt="planet" />
      <img src="@/assets/img/planisphere.svg" alt="planet" />
    </div>
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
      </div>
    </div>
  </section>

  <section class="ecologie">
    <div class="ecologie__axes">
      <p>
        Nous pensons que tout le monde a une empreinte écologique unique et le
        pouvoir d'apporter des changements positifs au sein de notre planète.
        GreenScore est une expérience engageante conçue pour vous aider à
        découvrir et à comprendre votre empreinte écologique personnelle et à
        vous donner les moyens de la réduire.
      </p>
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
    </div>
    <div class="ecologie__img">
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
