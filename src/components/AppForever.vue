<template>
    <div class="AppForever">
        <div class="AppForever__projects">
            <h1>
                { Dev le jour, dev la nuit }
            </h1>
            <h2 class="for--rod">
                <a
                    href="https://poke.volpe.xyz/"
                    target="_blank"
                >
                    poke.volpe.xyz
                </a>
            </h2>

            <p>
                Un projet pour tester Astro. J'utilise plusieurs frameworks pour voir comment ils <i>cohabitent</i>.
                <br>
                Je me suis amusé avec Astro et les pokémons ;).
            </p>

            <h2 class="for--rod">
                <a
                    href="https://beat-time.netlify.app/"
                    target="_blank"
                >
                    beat-time.netlify.app
                </a>
            </h2>

            <p>
                Ce site propose une horloge assez particulière, elle repose sur le
                <a
                    href="https://www.wikiwand.com/fr/Heure_Internet"
                    target="_blank"
                >
                    temps internet
                </a> . <br>
                En gros, 1 jour vaut 1000 beats.
            </p>

            <h2 class="for--rod">
                <a
                    href="https://github.com/amiceli/mailparser"
                    target="_blank"
                >mailparser</a>
            </h2>

            <p>
                Un outil qui permet de récupérer la signature d’un mail depuis un fichier EML. <br>
                D’ailleurs si tu veux des signature hyper classes pour tes mails, viens chez <a
                    href="https://letsignit.com/fr/"
                    target="_blank"
                >Letsignit</a>.
                Y a pas mieux !
            </p>

            <h2 class="for--rod">
                Et c’est pas tout
            </h2>

            <p>
                Si t’as le temps, jette un oeil sur mon
                <a
                    href="https://github.com/amiceli"
                    target="_blank"
                >github</a> .
                Y a des outils en ligne de commande pour les dev, le terminal y a que ça de vrai !
            </p>
        </div>
        <div class="AppForever__line for--rod">
            <div>
                <b>FR</b> Langue maternelle, trop facile
            </div>
            <div>
                <b>IT</b> se non parliamo di lavoro, va bene
            </div>
            <div>
                <b>EN</b> If we speak technical, no problem
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .AppForever {
        &__line {
            display: flex;
            align-items: center;
            margin-top: 30px;
            margin-bottom: 30px;

            div {
                flex: 1;
                text-align: center;
                font-size: 30px;
            }
        }

        &__projects {
            margin-bottom: 70px;

            h1 {
                text-align: center;
                font-size: 50px;
            }
            a {
                color : #5E81AC !important;
                text-decoration: none;
            }
            p {
                font-size: 25px;
            }
            h2 {
                color : #5E81AC;
                font-size: 40px;
            }
        }
    }
</style>
