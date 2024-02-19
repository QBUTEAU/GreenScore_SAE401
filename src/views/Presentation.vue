<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";
import router from "../router";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <section>
    <div class="presentation">
      
      <div class="presentation__img">
        <img class="logo" src="@/assets/img/logo.png" alt="greenscore"/>
      </div>

      <div class="presentation__texte">
          <h2>Qu'est-ce que GreenScore ?</h2>
          <p>
            GreenScore est une application web basée sur un questionnaire en ligne 
            engageant, sur la thématique de l'écologie. Inspiré des tests de pureté 
            et de personnalité, GreenScore met en avant 20 questions sur des situations 
            en lien avec le mode de vie écologique. En utilisant une approche ludique 
            et instructive, nous avons pour but de sensibiliser chaque utilisateur à 
            l'impact de leurs choix quotidiens sur l'environnement.
          </p>
          <p>
            Chaque question est soigneusement élaborée de sorte à ce que chaque utilisateur 
            s'identifie à la situation, le tout dans divers aspects de la vie quotidienne, 
            tels que la consommation d'énergie, la gestion des déchets ou les modes de transport. 
            L'objectif est de fournir une évaluation holistique de l'empreinte écologique de chacun.
          </p>
          <p>
            GreenScore n'est pas simplement un questionnaire en ligne, c'est une exploration 
            interactive de l'impact de chacun sur la planète, une invitation à la prise de 
            conscience et à l'engagement vers un avenir et un monde plus vert !
          </p>
      </div>
    </div>
  </section>

  <Footer />

</template>

