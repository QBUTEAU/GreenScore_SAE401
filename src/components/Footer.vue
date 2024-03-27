<template>
  <footer class="footer">
    <p class="footer__copy">&copy; 2024 GreenScore - Tous droits réservés</p>
    <ul class="footer__liens">
      <li>
        <router-link to="/" @click="scrollToTop">Accueil</router-link>
      </li>
      <li>
        <router-link to="/questionnaire" @click="scrollToTop">Questionnaire</router-link>
      </li>
      <li>
        <router-link to="/notice" @click="scrollToTop">Mentions légales</router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0); // Défilement jusqu'au début de la page
    }
  }
}
</script>