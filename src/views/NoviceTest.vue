<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header />
    <main class="results">
        <div class="results__level">
            <p>Suite à vos réponses, vous obtenez le titre de :</p>
            <span class="results-level__span greenLight">Novice Vert</span>
            <img class="results__illus" src="@/assets/img/NoviceVert.svg" alt="EcoLeader">
        </div>
        <div class="results__advices">
            <div class="results-advices__texte">
                <p>Bravo pour vos premiers pas vers un mode de vie plus respectueux de l'environnement ! Vous avez déjà
                    franchi le pas en adoptant des pratiques telles que le recyclage et la réduction de votre
                    consommation
                    d'énergie, ce qui est un excellent début. Bien que vous soyez encore aux débuts de votre voyage
                    écologique, vous êtes sur la bonne voie pour devenir un éco-citoyen exemplaire.
                </p>
                <p>Voici quelques conseils supplémentaires pour vous aider à progresser dans votre engagement écologique
                    :
                </p>
                <ul>
                    <li>Continuez à explorer de nouvelles façons de réduire votre empreinte carbone, comme l'utilisation
                        d'ampoules à économie d'énergie ou le covoiturage. Chaque petit geste compte pour préserver
                        notre
                        planète.</li>
                    <li>Engagez-vous à apprendre davantage sur les enjeux environnementaux et les solutions durables. En
                        vous éduquant et en partageant vos connaissances avec d'autres, vous pouvez amplifier l'impact
                        de
                        vos actions.</li>
                    <li>Impliquez-vous dans des initiatives locales qui visent à protéger l'environnement et à
                        promouvoir la
                        durabilité. Que ce soit en participant à des événements de nettoyage ou en soutenant des projets
                        de
                        conservation, votre contribution est précieuse.
                    </li>
                </ul>
                <p>Continuez à avancer pas à pas dans votre voyage vers un mode de vie plus écologique. Chaque petit
                    effort
                    compte et contribue à créer un monde plus durable pour les générations futures.</p>
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