<!-- Questionnaire.vue -->

<script setup>
import { ref, computed, onMounted } from "vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />

  <main class="questionnaire">
    <div class="progress-bar">
      <div
        class="progress-bar__fill"
        :style="{ width: progressPercentage + '%' }"
      >
        <span class="progress-bar__percentage"
          >{{ progressPercentage.toFixed(0) }}%</span
        >
      </div>
    </div>

    <fieldset v-if="currentQuestion !== null">
      <legend class="question">
        {{ getQuestionIndicator }} -
        {{ questions[currentQuestion].text }}
      </legend>
      <ul class="propositions" role="radiogroup">
        <li
          v-for="(answer, aIndex) in questions[currentQuestion].answers"
          :key="aIndex"
        >
          <input
            type="radio"
            :name="'q' + currentQuestion"
            :value="answer.points"
            v-model="selectedAnswers[currentQuestion]"
          />
          <label :for="'q' + currentQuestion + 'a' + aIndex"
            ><span class="answers">{{ answer.text }}</span></label
          >
        </li>
      </ul>
      <button
        class="button buttonQuestionnaire"
        @click="nextQuestion"
        :disabled="!selectedAnswers[currentQuestion]"
      >
        <span>Question suivante</span>
      </button>
    </fieldset>

    <div v-else>
      <p>
        Fin du questionnaire. Votre score total est de {{ totalScore }} points.
        Vous êtes dans la catégorie {{ getCategory }}.
      </p>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      questions: [
        {
          text: "Comment préférez-vous vous déplacer au quotidien ?",
          answers: [
            { text: "En voiture diesel ou essence", points: 1 },
            { text: "En voiture électrique ou hybride", points: 2 },
            { text: "Les transports en commun", points: 3 },
            { text: "La marche à pied ou le vélo", points: 4 },
          ],
        },
        {
          text: "Comment gérez-vous vos achats de vêtements ?",
          answers: [
            {
              text: "J'achète des vêtements sans trop me soucier de leur origine.",
              points: 1,
            },
            {
              text: "Je privilégie les vêtements à bas prix, peu importe leur impact écologique.",
              points: 2,
            },
            {
              text: "Je privilégie les marques éthiques et durables.",
              points: 3,
            },
            { text: "J'achète des vêtements d'occasion.", points: 4 },
          ],
        },
        {
          text: "Quelle est votre habitude face à l'utilisation des produits jetables ?",
          answers: [
            {
              text: "J'essaye de réduire ma consommation de produits jetables.",
              points: 3,
            },
            {
              text: "J'utilise fréquemment sans trop m'en soucier.",
              points: 2,
            },
            {
              text: "Je préfère les produits jetables pour leur praticité.",
              points: 1,
            },
            { text: "J'utilise des ressources réutilisables.", points: 4 },
          ],
        },
        {
          text: "Quelle est votre attitude envers la consommation d'énergie à la maison ?",
          answers: [
            {
              text: "J'utilise des ampoules LED et éteins les lumières inutiles.",
              points: 4,
            },
            {
              text: "J'ai installé des panneaux solaires sur ma maison.",
              points: 3,
            },
            {
              text: "Je chauffe ou je refroidis la maison de manière excessive.",
              points: 1,
            },
            {
              text: "Je laisse souvent les lumières allumées sans trop me soucier de ma consommation électrique.",
              points: 2,
            },
          ],
        },
        {
          text: "Comment choisissez-vous vos produits alimentaires au quotidien ?",
          answers: [
            {
              text: "Je privilégie les produits transformés et emballés.",
              points: 2,
            },
            {
              text: "J'achète des produits locaux et/ou de saison.",
              points: 4,
            },
            {
              text: "Je fais mes courses sans faire attention à l'origine ou à la saison.",
              points: 1,
            },
            { text: "Je privilégie les produits biologiques.", points: 3 },
          ],
        },
        {
          text: "Comment gérez-vous votre consommation d'eau à la maison ?",
          answers: [
            {
              text: "Je prends des douches longues et laisse parfois le robinet ouvert.",
              points: 2,
            },
            {
              text: "J'utilise des pommeaux de douches et des robinets à faible débit.",
              points: 3,
            },
            {
              text: "J'utilise le lave-vaisselle et la machine à laver avec de petites charges.",
              points: 1,
            },
            {
              text: "J'adopte des pratiques économes pour optimiser l'utilisation de l'eau.",
              points: 4,
            },
          ],
        },
        {
          text: "Comment choisissez-vous vos vacances pour minimiser votre impact environnemental ?",
          answers: [
            {
              text: "Je préfère les endroits proches de chez moi et j’utilise le moins possible mon véhicule.",
              points: 4,
            },
            {
              text: "Je ne tiens pas compte de mon impact lors de la planification de mes vacances.",
              points: 1,
            },
            {
              text: "Je choisis souvent des destinations lointaines, et j'utilise mon véhicule.",
              points: 2,
            },
            {
              text: "J'essaie de limiter mes déplacements et de choisir des options respectueuses de l'environnement.",
              points: 3,
            },
          ],
        },
        {
          text: "Comment triez-vous vos déchets ménagers au quotidien ?",
          answers: [
            {
              text: "Je recycle activement et je composte mes déchets organiques.",
              points: 4,
            },
            { text: "Je recycle certains déchets.", points: 3 },
            {
              text: "Je mets l'ensemble de mes déchets dans la même poubelle.",
              points: 2,
            },
            { text: "Je ne trie pas du tout mes déchets.", points: 1 },
          ],
        },
        {
          text: "Comment réagissez-vous lorsque vous trouvez une canette de soda par terre dans la rue ?",
          answers: [
            {
              text: "Je la laisse par terre, considérant que ce n'est pas ma responsabilité.",
              points: 2,
            },
            {
              text: "Je la ramasse et la jette dans la première poubelle que je trouve.",
              points: 3,
            },
            {
              text: "Je la ramasse et la jette dans une poubelle de recyclage.",
              points: 4,
            },
            { text: "Je passe à côté sans m'en soucier.", points: 1 },
          ],
        },
        {
          text: "Comment minimisez-vous votre utilisation de feuilles de papier ?",
          answers: [
            {
              text: "Je limite l'impression et favorise les échanges numériques.",
              points: 3,
            },
            {
              text: "J'imprime occasionnellement des documents mais privilégie les versions numériques.",
              points: 2,
            },
            {
              text: "Je n'imprime jamais de documents, favorisant une approche entièrement numérique.",
              points: 4,
            },
            {
              text: "J'imprime régulièrement tous les documents, même si je peux les avoir en version numérique.",
              points: 1,
            },
          ],
        },
        {
          text: "Vous souhaitez commander un repas auprès d’un fast-food situé à 10min à pied de chez vous ? Que faîtes-vous ?",
          answers: [
            {
              text: "Je commande régulièrement via des applications de livraison comme Uber Eats, même si le fast-food est proche.",
              points: 1,
            },
            {
              text: "Je préfère me rendre à pied au fast-food pour éviter les frais de livraison.",
              points: 4,
            },
            {
              text: "J'utilise occasionnellement des services de livraison, mais je vais souvent directement au fast-food.",
              points: 3,
            },
            {
              text: "Je privilégie une approche entièrement numérique en commandant exclusivement en ligne et en me faisant livrer.",
              points: 2,
            },
          ],
        },
        {
          text: "Vous organisez une fête chez vous. Qu’utilisez-vous comme récipient pour servir ?",
          answers: [
            { text: "Des verres réutilisables.", points: 3 },
            { text: "Utiliser des verres en plastique jetables.", points: 2 },
            { text: "Utiliser des gobelets en carton.", points: 4 },
            { text: "Je fais boire les invités au goulot.", points: 1 },
          ],
        },
        {
          text: "Lorsque vous faites des achats de vêtements en ligne, quelle option privilégiez-vous pour minimiser votre impact environnemental et favoriser une approche durable ?",
          answers: [
            {
              text: "Opter pour la livraison à domicile, même si cela implique des emballages supplémentaires.",
              points: 3,
            },
            {
              text: "Choisir l'option de retrait en magasin pour éviter les émissions liées à la livraison.",
              points: 4,
            },
            {
              text: "Sélectionner des articles avec une expédition rapide, même si cela peut augmenter l'empreinte carbone.",
              points: 1,
            },
            {
              text: "Faire du Click and Collect pour limiter les émissions de CO2.",
              points: 2,
            },
          ],
        },
        {
          text: "Comment vous vous débarrassez de vos vieux vêtements ?",
          answers: [
            {
              text: "Les donner à des associations caritatives ou les vendre dans des friperies.",
              points: 4,
            },
            { text: "Les réutiliser en chiffon.", points: 3 },
            { text: "Les jeter à la poubelle.", points: 2 },
            { text: "Les brûler dans votre jardin.", points: 1 },
          ],
        },
        {
          text: "Lorsque vous achetez des produits électroniques, comment éliminez-vous les anciens appareils que vous remplacez ?",
          answers: [
            { text: "Je les jette simplement à la poubelle.", points: 1 },
            {
              text: "Je les recycle dans les points de collecte appropriés.",
              points: 4,
            },
            { text: "Je les garde en tant que pièces de rechange.", points: 3 },
            {
              text: "Je les donne à des organisations qui recyclent ou réutilisent les appareils électroniques.",
              points: 2,
            },
          ],
        },
        {
          text: "Utilisez-vous régulièrement l'application Too Good To Go pour acheter des paniers repas provenant de commerces locaux et comportant des produits proches de la date de péremption ?",
          answers: [
            {
              text: "Je ne suis pas utilisateur de Too Good To Go.",
              points: 1,
            },
            {
              text: "J'utilise l'application occasionnellement, en fonction des opportunités.",
              points: 2,
            },
            {
              text: "J'utilise fréquemment Too Good To Go pour réduire le gaspillage alimentaire et soutenir les commerces locaux.",
              points: 3,
            },
            {
              text: "J'ai intégré Too Good To Go dans ma routine d'achat pour contribuer activement à la lutte contre le gaspillage alimentaire.",
              points: 4,
            },
          ],
        },
        {
          text: "Que faites-vous de vos déchets alimentaires ?",
          answers: [
            {
              text: "Je les mets dans mon compost ou le compost mis à disposition dans ma ville.",
              points: 4,
            },
            { text: "Je les jette à la poubelle.", points: 2 },
            {
              text: "Je les donne à des fermes pour nourrir les animaux.",
              points: 3,
            },
            { text: "Je les laisse pourrir chez moi.", points: 1 },
          ],
        },
        {
          text: "Quelle est votre attitude envers la promotion de l'agriculture locale et la consommation de produits locaux ?",
          answers: [
            {
              text: "Je ne prends pas en compte l'origine des produits dans mes choix d'achat.",
              points: 1,
            },
            {
              text: "J'essaie parfois de privilégier les produits locaux, mais ce n'est pas une priorité.",
              points: 2,
            },
            {
              text: "Je favorise activement les produits locaux pour soutenir l'économie locale et réduire l'empreinte carbone.",
              points: 3,
            },
            {
              text: "J'adopte une approche exclusivement axée sur les produits locaux pour minimiser l'impact environnemental.",
              points: 4,
            },
          ],
        },
        {
          text: "Comment contribuez-vous ou envisagez-vous de contribuer aux associations environnementales ou de conservation ?",
          answers: [
            {
              text: "Je ne suis pas impliqué(e) dans des associations environnementales. ",
              points: 1,
            },
            {
              text: "J'apprécie les actions des associations environnementales, mais je ne suis pas actuellement impliqué(e).",
              points: 2,
            },
            {
              text: "J'ai déjà participé à des actions ponctuelles ou fait des dons à des associations environnementales.",
              points: 3,
            },
            {
              text: "Je suis activement membre d'associations environnementales ou de conservation, contribuant régulièrement à des initiatives et des projets.",
              points: 4,
            },
          ],
        },
        {
          text: "Considérez-vous les problèmes environnementaux comme une priorité dans votre vie quotidienne ?",
          answers: [
            {
              text: "Ils ne sont pas une propriété, mais j'y pense de temps en temps.",
              points: 2,
            },
            {
              text: "Absolument, ils sont une de mes priorités et je vis activement de manière durable.",
              points: 4,
            },
            {
              text: "Oui, je les considère comme une de mes priorités et je prends des mesures conscientes.",
              points: 3,
            },
            {
              text: "Non, ils ne sont pas une priorité dans ma vie quotidienne.",
              points: 1,
            },
          ],
        },
      ],
      currentQuestion: 0,
      selectedAnswers: Array.from({ length: 4 }, () => null),
      totalScore: 0,
      progressPercentage: 0,
    };
  },
  computed: {
    getQuestionIndicator() {
      return `Question ${this.currentQuestion + 1}`;
    },
    getCategory() {
      if (this.totalScore >= 61 && this.totalScore <= 80) {
        return 1;
      } else if (this.totalScore >= 41 && this.totalScore <= 60) {
        return 2;
      } else if (this.totalScore >= 21 && this.totalScore <= 40) {
        return 3;
      } else if (this.totalScore >= 1 && this.totalScore <= 20) {
        return 4;
      } else {
        return null;
      }
    },
  },
  methods: {
    nextQuestion() {
      // Add the score of the current question to the total
      this.totalScore += this.selectedAnswers[this.currentQuestion];

      // Move to the next question (if available)
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        // Update progress bar
        this.progressPercentage =
          ((this.currentQuestion + 1) / this.questions.length) * 100;
      } else {
        // If all questions have been answered, display the final result
        this.currentQuestion = null;
      }
    },
  },
};
</script>

<style scoped>
button {
  text-align: center;
  gap: 30px;
}
</style>
