<script>
import { ref, computed, onMounted, watch } from "vue";
import Header from "@/components/Header.vue";
import questionsData from "@/assets/js/text.json";

export default {
  components: {
    Header,
  },
  setup() {
    const questions = ref(questionsData);
    const currentQuestion = ref(0);
    const selectedAnswers = ref(Array.from({ length: 4 }, () => null));
    const totalScore = ref(0);
    const language = ref("fr");

    const progressPercentage = computed(
      () => ((currentQuestion.value + 1) / questions.value.length) * 100
    );

    const getQuestionIndicator = computed(
      () => `Question ${currentQuestion.value + 1}`
    );

    const currentQuestionText = ref("");

    onMounted(() => {
      updateCurrentQuestionText();
    });

    watch([currentQuestion, language], () => {
      updateCurrentQuestionText();
    });

    const updateCurrentQuestionText = () => {
      const question = questions.value[currentQuestion.value];

      if (question) {
        const textObject = question.text;
        const languageText =
          language.value === "fr" ? textObject.fr : textObject.en;

        if (languageText) {
          currentQuestionText.value = languageText;
        } else {
          console.error("Error: Unable to retrieve language-specific text.");
          currentQuestionText.value =
            "Error: Unable to retrieve language-specific text.";
        }
      } else {
        console.error("Error: Unable to retrieve question object.");
        currentQuestionText.value =
          "Error: Unable to retrieve question object.";
      }
    };

    const getCurrentQuestionData = computed(
      () => questions.value[currentQuestion.value]
    );
    const getCurrentQuestionAnswers = computed(() =>
      getCurrentQuestionData.value ? getCurrentQuestionData.value.answers : []
    );

    const currentQuestionNextButtonText = computed(() => {
      const question = getCurrentQuestionData.value;

      if (question && question.nextButtonText) {
        const buttonTextObject = question.nextButtonText;
        const languageButtonText =
          language.value === "fr" ? buttonTextObject.fr : buttonTextObject.en;

        if (languageButtonText) {
          return languageButtonText;
        } else {
          console.error(
            "Error: Unable to retrieve language-specific button text."
          );
          return "Error: Unable to retrieve language-specific button text.";
        }
      } else {
        console.error(
          "Error: Unable to retrieve question object or button text."
        );
        return "Error: Unable to retrieve question object or button text.";
      }
    });

    const getCategory = computed(() => {
      // ... (votre logique de catégorie)
    });

    const nextQuestion = () => {
      totalScore.value += selectedAnswers.value[currentQuestion.value];

      if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++;
      } else {
        currentQuestion.value = null;
      }
    };

    const toggleLanguage = () => {
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
      getCurrentQuestionData,
      getCurrentQuestionAnswers,
      currentQuestionNextButtonText,
      getCategory,
      nextQuestion,
      toggleLanguage,
    };
  },
};
</script>

<template>
  <div>
    <Header :language="language" @toggleLanguage="toggleLanguage" />
    <!-- En-tête -->

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

      <!-- Affichage des questions -->
      <fieldset v-if="currentQuestion !== null">
        <legend class="question">
          {{ getQuestionIndicator }} - {{ currentQuestionText }}
        </legend>
        <ul class="propositions" role="radiogroup">
          <li
            v-for="(answer, aIndex) in getCurrentQuestionAnswers"
            :key="aIndex"
          >
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
            <span>{{ currentQuestionNextButtonText }}</span>
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

<style scoped>
button {
  text-align: center;
  gap: 30px;
}
</style>
