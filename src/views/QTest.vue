<template>
  <div>
    <!-- En-tête -->
    <Header />

    <main class="questionnaire">
      <!-- Barre de progression -->
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

      <!-- Bouton pour changer de langue -->
      <button class="language-button" @click="toggleLanguage">
        Changer de langue
      </button>

      <!-- Affichage des questions -->
      <fieldset v-if="currentQuestion !== null">
        <legend class="question">
          {{ getQuestionIndicator }} - {{ currentQuestionText }}
        </legend>
        <ul class="propositions" role="radiogroup">
          <li v-for="(answer, aIndex) in currentQuestionAnswers" :key="aIndex">
            <input
              type="radio"
              :name="'q' + currentQuestion"
              :value="answer.points"
              v-model="selectedAnswers[currentQuestion]"
            />
            <label :for="'q' + currentQuestion + 'a' + aIndex"
              ><span class="answers">{{ answer.text[language] }}</span></label
            >
          </li>
          <!-- Bouton pour passer à la question suivante -->
          <button
            class="button buttonQuestionnaire"
            @click="nextQuestion"
            :disabled="!selectedAnswers[currentQuestion]"
          >
            <span>Question suivante</span>
          </button>
        </ul>
      </fieldset>

      <!-- Affichage du résultat final -->
      <div v-else>
        <p>
          Fin du questionnaire. Votre score total est de
          {{ totalScore }} points. Vous êtes dans la catégorie
          {{ getCategory }}.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { ref, computed } from "vue";

export default {
  components: {
    Header,
  },
  setup() {
    const questions = [
      {
        text: {
          fr: "Question 1 : Comment préférez-vous vous déplacer au quotidien ?",
          en: "Question 1: How do you prefer to travel on a daily basis?",
        },
        answers: [
          { text: { fr: "En voiture", en: "By car" }, points: 1 },
          { text: { fr: "En vélo", en: "By bike" }, points: 2 },
          {
            text: { fr: "En transport en commun", en: "By public transport" },
            points: 3,
          },
          { text: { fr: "À pied", en: "On foot" }, points: 4 },
        ],
      },
      {
        text: {
          fr: "Question 2 : Comment gérez-vous vos achats de vêtements ?",
          en: "Question 2: How do you manage your clothing purchases?",
        },
        answers: [
          {
            text: {
              fr: "Sans trop me soucier de leur origine",
              en: "Without worrying too much about their origin",
            },
            points: 1,
          },
          {
            text: {
              fr: "En privilégiant les marques éthiques",
              en: "By favoring ethical brands",
            },
            points: 2,
          },
          {
            text: { fr: "En achetant d'occasion", en: "By buying second-hand" },
            points: 3,
          },
          {
            text: {
              fr: "En privilégiant les vêtements à bas prix",
              en: "By favoring low-priced clothing",
            },
            points: 4,
          },
        ],
      },
    ];

    const currentQuestion = ref(0);
    const selectedAnswers = ref(Array.from({ length: 4 }, () => null));
    const totalScore = ref(0);
    const language = ref("fr"); // Défaut : français

    const progressPercentage = computed(
      () => ((currentQuestion.value + 1) / questions.length) * 100
    );
    const getQuestionIndicator = computed(
      () => `Question ${currentQuestion.value + 1}`
    );
    const currentQuestionText = computed(
      () => questions[currentQuestion.value].text[language]
    );
    const currentQuestionAnswers = computed(
      () => questions[currentQuestion.value].answers
    );

    const getCategory = computed(() => {
      // ... (votre logique de catégorie)
    });

    const nextQuestion = () => {
      totalScore.value += selectedAnswers.value[currentQuestion.value];

      if (currentQuestion.value < questions.length - 1) {
        currentQuestion.value++;
      } else {
        currentQuestion.value = null;
      }
    };

    const toggleLanguage = () => {
      // Changer la langue entre "fr" (français) et "en" (anglais), par exemple
      language.value = language.value === "fr" ? "en" : "fr";
    };

    return {
      questions,
      currentQuestion,
      selectedAnswers,
      totalScore,
      language,
      progressPercentage,
      getQuestionIndicator,
      currentQuestionText,
      currentQuestionAnswers,
      getCategory,
      nextQuestion,
      toggleLanguage,
    };
  },
};
</script>

<style scoped>
/* Ajoutez votre CSS ici */
.language-button {
  margin-bottom: 10px;
}
</style>
