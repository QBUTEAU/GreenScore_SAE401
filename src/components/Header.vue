<template>
  <header class="header">
    <RouterLink to="/">
      <img src="@/assets/img/header.png" alt="GreenScore" />
    </RouterLink>
    <button class="language-button" @click="toggleLanguage">
      Changer de langue
    </button>
  </header>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const { language } = defineProps(["language"]);
const emit = defineEmits();

const toggleLanguage = () => {
  emit("toggleLanguage");
};
</script>

<style scoped></style>
