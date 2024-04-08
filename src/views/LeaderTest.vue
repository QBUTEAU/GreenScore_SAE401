<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header />
    <main class="results">
        <div class="results__level">
            <p>Suite à vos réponses, vous obtenez le titre de :</p>
            <span class="results-level__span greenDarker">Éco Leader</span>
        </div>
        <div class="results__advices">
            <div class="results-advices__texte">
                <p>Félicitations, vous êtes un véritable modèle en matière d'engagement écologique ! Vos actions
                    exemplaires, telles que le tri des déchets et l'utilisation de compost, vous hissent au rang des
                    Éco Leader. Vous incarnez l'excellence en matière de durabilité, et votre dévouement est une source
                    d'inspiration pour nous tous.</p>
                <p>Cependant, même les Éco Leader peuvent continuer à progresser et à avoir un impact encore plus
                    important
                    sur l'environnement. Voici quelques conseils :</p>
                <ul>
                    <li>Poursuivez vos efforts en matière de réduction des déchets et d'utilisation de ressources
                        durables.
                        Vous pouvez encore améliorer votre impact en encourageant d'autres personnes à adopter des
                        pratiques
                        similaires.</li>
                    <li>Explorez de nouvelles façons d'intégrer des pratiques écologiques dans votre vie quotidienne et
                        votre communauté. Que ce soit en participant à des initiatives locales ou en soutenant des
                        entreprises durables, vous pouvez contribuer à faire progresser la cause de la durabilité.
                    </li>
                    <li>Continuez à vous informer sur les problèmes environnementaux et à partager vos connaissances
                        avec
                        votre entourage. En sensibilisant les autres aux enjeux environnementaux, vous pouvez inspirer
                        de
                        nouvelles actions et amplifier votre impact.
                    </li>
                </ul>
                <p>Votre engagement en faveur de l'écologie est une force motrice pour le changement, et nous vous
                    encourageons à continuer sur cette voie. Ensemble, nous pouvons créer un avenir plus durable pour
                    tous.
                </p>
                <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
                <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
            </div>

            <div class="results__button">
                <a href="" download><button class="button">
                        Résultats (FR)</button></a>
                <a href="" download><button class="button">Results (EN)</button></a>
            </div>
        </div>
    </main>
    <Footer />
</template>
