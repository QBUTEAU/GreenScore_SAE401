<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header />
    <main class="results">
        <div class="results__level">
            <p>Suite à vos réponses, vous obtenez le titre de :</p>
            <span class="results-level__span green">Acteur Vert</span>
        </div>
        <div class="results__advices">
            <div class="results-advices__texte">
                <p>Félicitations pour votre engagement envers l'écologie ! Votre volonté de prendre des mesures pour
                    protéger notre planète est un premier pas important vers un mode de vie plus durable. Bien que vous
                    n'ayez pas encore atteint le statut d'Éco Leader, vous avez déjà pris des mesures significatives
                    pour réduire votre empreinte environnementale.
                </p>
                <p>Voici quelques conseils supplémentaires pour vous aider à progresser vers le niveau d'Éco Leader et à
                    maximiser votre impact écologique :
                </p>
                <ul>
                    <li>Poursuivez vos efforts pour réduire votre consommation d'énergie en utilisant des ampoules à
                        économie d'énergie et en éteignant les appareils électroniques inutilisés. En adoptant de
                        simples habitudes quotidiennes, vous pouvez contribuer à réduire votre empreinte carbone.
                    </li>
                    <li>Engagez-vous à apprendre davantage sur les enjeux environnementaux et les solutions durables. En
                        vous éduquant et en partageant vos connaissances avec d'autres, vous pouvez amplifier l'impact
                        de vos actions.
                    </li>
                    <li>
                        Explorez des moyens de réduire votre dépendance aux combustibles fossiles en optant pour des
                        modes de transport durables. En privilégiant les transports en commun, le vélo ou la marche,
                        vous pouvez réduire les émissions de gaz à effet de serre associées à vos déplacements.
                    </li>
                </ul>
                <p>Continuez à faire de petits changements positifs dans votre vie quotidienne et à inspirer ceux qui
                    vous entourent à faire de même. En travaillant ensemble, nous pouvons tous avoir un impact
                    significatif sur la santé de notre planète.
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