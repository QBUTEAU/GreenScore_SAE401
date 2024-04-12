<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header />
    <main class="results">
        <div class="results__level">
            <p>Suite à vos réponses, vous obtenez le titre de :</p>
            <span class="results-level__span green">Défenseur Vert</span>
            <img class="results__illus" src="@/assets/img/ActeurVert.svg" alt="ActeurVert">
        </div>
        <div class="results__advices">
            <div class="results-advices__texte">
                <p>Bravo pour votre engagement en faveur de l'écologie ! Votre détermination à protéger notre planète
                    est
                    admirable et vous met sur la voie pour devenir un véritable héros de l'environnement.
                    Vos actions, telles que le tri des déchets et l'utilisation de compost, démontrent un engagement
                    louable
                    envers la durabilité.
                </p>
                <p>Pour aller encore plus loin dans votre démarche écologique, voici quelques conseils supplémentaires :
                </p>
                <ul>
                    <li>Continuez à utiliser des ampoules à économie d'énergie ou des LED pour réduire votre
                        consommation
                        d'électricité. Ces petites actions peuvent avoir un impact significatif sur votre empreinte
                        carbone.
                    </li>
                    <li>Cherchez des moyens d'intégrer des pratiques écologiques dans votre travail et votre vie
                        quotidienne. Par exemple, vous pourriez encourager votre employeur à mettre en place des
                        initiatives
                        de durabilité sur le lieu de travail, comme le recyclage ou l'utilisation d'énergie
                        renouvelable.
                    </li>
                    <li>
                        Continuez à vous informer sur les problèmes environnementaux et à sensibiliser votre entourage à
                        ces
                        questions. En partageant vos connaissances et en encourageant les autres à agir, vous pouvez
                        multiplier l'impact de vos actions écologiques.
                    </li>
                </ul>
                <p>En suivant ces conseils, vous pouvez continuer à faire progresser votre engagement pour l'écologie et
                    inspirer les autres autour de vous. Votre détermination à protéger notre planète est une source
                    d'inspiration, et nous vous encourageons à poursuivre vos efforts pour un avenir plus durable.
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