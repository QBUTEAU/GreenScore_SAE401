<template>
  <div>
    <Header :language="language" @toggleLanguage="toggleLanguage" />

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
          <button
            class="button buttonQuestionnaire"
            @click="nextQuestion"
            :style="{ opacity: selectedAnswers[currentQuestion] ? 1 : 0 }"
            :disabled="!selectedAnswers[currentQuestion]"
          >
            <span>{{ currentQuestionNextButtonText }}</span>
          </button>
        </ul>
      </fieldset>

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

    const toggleLanguage = () => {
      language.value = language.value === "fr" ? "en" : "fr";
      var languageSpan = document.getElementById('language-span');
        if (languageSpan.innerHTML === 'EN') {
            languageSpan.innerHTML = 'FR';
            // Ajoutez ici le code pour changer la langue en français
        } else {
            languageSpan.innerHTML = 'EN';
            // Ajoutez ici le code pour changer la langue en anglais
        }
    };

    const progressPercentage = computed(() => {
      if (currentQuestion.value === null) {
        return 100; // Si le questionnaire est terminé, la barre reste à 100%
      }
      return (currentQuestion.value / (questions.value.length - 1)) * 100;
    });
    const getQuestionIndicator = computed(
      () => `Question ${currentQuestion.value + 1}`
    );
    const currentQuestionText = computed(() => {
      const question = questions.value[currentQuestion.value];

      if (question) {
        const textObject = question.text;
        const languageText =
          language.value === "fr" ? textObject.fr : textObject.en;

        if (languageText) {
          return languageText;
        } else {
          console.error("Error: Unable to retrieve language-specific text.");
          return "Error: Unable to retrieve language-specific text.";
        }
      } else {
        console.error("Error: Unable to retrieve question object.");
        return "Error: Unable to retrieve question object.";
      }
    });

    const currentQuestionAnswers = computed(
      () => questions.value[currentQuestion.value].answers
    );

    const currentQuestionNextButtonText = computed(() => {
      const question = questions.value[currentQuestion.value];

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
      const score = totalScore.value;

      if (score >= 61 && score <= 80) {
        return 1;
      } else if (score >= 41 && score <= 60) {
        return 2;
      } else if (score >= 21 && score <= 40) {
        return 3;
      } else if (score >= 1 && score <= 20) {
        return 4;
      } else {
        console.error("Error: Invalid score range.");
        return "Error: Invalid score range.";
      }
    });

    const nextQuestion = () => {
      totalScore.value += selectedAnswers.value[currentQuestion.value];

      if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++;
      } else {
        currentQuestion.value = null;
      }
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
      currentQuestionNextButtonText,
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
