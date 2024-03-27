<script setup>
    import { ref } from "vue";
    import { RouterLink } from "vue-router";
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
</script>

<template>

    <Header />

    <main class="mentions">
        <h2>Mentions Légales</h2>
        <div class="mentions__bloc">
            <h3>Informations générales</h3>
            <div class="mentions-bloc__texte">
                <p>Le site GreenScore est la propriété des étudiants qui l'ont développé dans le cadre de la SAE 401
                    de la deuxième année du BUT Métiers du Multimédia et de l'Internet
                    de l'IUT de Troyes, quel que soit sa présence sur les liens suivants :</p>
                <p>https://mmi22c03.sae401.ovh - https://mmi22g05.sae401.ovh - https://mmi22g07.sae401.ovh -
                    https://mmi22g11.sae401.ovh</p>
                <p>Siège social : IUT de Troyes - 9 Rue Québec - 10430 Rosières-prés-Troyes - FRANCE</p>
                <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
                <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
            </div>
        </div>
        <div class="mentions__bloc">
            <h3>Crédits</h3>
            <div class="mentions-bloc__texte">
                <p>Quentin Buteau et Jathushan Selvarajah pour le développement et l'intégration,
                    Axel Tribondeau et Okesse Smith pour l'infographie, le rédactionnel et les traductions,
                    fontawesome.com pour quelques icônes et l'ensembles des membres pour la rédaction des
                    questions et des réponses.
                </p>
                <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
                <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
            </div>
        </div>
        <div class="mentions__bloc">
            <h3>Propriétés intellectuelles</h3>
            <div class="mentions-bloc__texte">
                <p>
                    L'ensemble des éléments figurant sur le site GreenScore, notamment les textes, images, graphismes,
                    logos, icônes, ainsi que leur mise en forme sont la propriété exclusive des développeurs et
                    rédacteurs du site.
                </p>
                <p>
                    Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même
                    partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de
                    chaque membre du groupe. Cette représentation ou reproduction, par quelque procédé que ce soit,
                    constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété
                    intellectuelle.
                </p>
                <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
                <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
            </div>
        </div>
        <div class="mentions__bloc">
            <h3>Politique de confidentialité et données personnelles</h3>
            <div class="mentions-bloc__texte">
                <p>GreenScore se réserve le droit de mettre à jour ou de modifier sa politique de confidentialité à tout
                    moment et sans préavis. Nous vous encourageons à consulter régulièrement cette page pour rester
                    informé des éventuelles modifications.
                </p>
                <p>
                    GreenScore s'engage à respecter votre vie privée et à protéger toute information que vous pourriez
                    fournir tout en utilisant notre service en ligne. Le site ne collecte aucune donnée personnelle
                    identifiable lorsque vous utilisez notre service en ligne. Aucune information personnelle, telle que
                    votre nom, adresse e-mail ou numéro de téléphone, n'est demandée ni enregistrée. Le site n'utilise
                    également pas de cookies pour suivre votre activité en ligne.
                </p>
                <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
                <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
            </div>
        </div>
        <div class="mentions__bloc">
            <h3>Responsabilité</h3>
            <div class="mentions-bloc__texte">
                <p>
                    L'utilisation du site GreenScore sur l'ensemble des liens auquel le site est présent et sous la
                    seule et entière responsabilité de l'utilisateur. L'ensemble ne pourra être tenu pour responsable
                    des dommages, qu'ils soient directs ou indirects, tels que la perte de données et le préjudice
                    matériel.
                </p>
                <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
                <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
            </div>
        </div>
        <div class="mentions__bloc">
            <h3>Mises à jour du site</h3>
            <div class="mentions-bloc__texte">
                <p>
                    Les développeurs de GreenScore se réservent le droit de modifier ou de supprimer tous les éléments
                    présents sur le site et d'en ajouter. Il est de la responsabilité des utilisateurs de consulter le
                    site régulièrement.
                </p>
                <img class="feuille1" src="@/assets/img/feuille1.svg" alt="planet" />
                <img class="feuille2" src="@/assets/img/feuille2.svg" alt="planet" />
            </div>
        </div>
    </main>

    <Footer />

</template>