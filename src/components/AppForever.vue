<template>
    <div class="AppForever">
        <div class="AppForever__projects">
            <h1>
                { Dev le jour, dev la nuit }
            </h1>

            <h2 class="for--rod">
                <TrackLink link="https://github.com/amiceli/vitest-cucumber">
                    <img src="https://vitest-cucumber.miceli.click/logo.png" />
                    vitest-cucumber
                </TrackLink>
            </h2>

            <p>
                Les test Gherkin y a que ça de vrai !
                <br>
                Je ne trouvais pas d'outils pour créer des tests unitaires Gherkin avec <b>Vitest</b>.
                <br>
                Alors je me suis lançais sur le projet ;).
            </p>

            <h2 class="for--rod for--tic">
                <TrackLink link="https://ticandretro.com">
                    <img src="/img/ticandretro.png"  />
                    ticandretro.com
                </TrackLink>
            </h2>

            <p>
                Mon pote Jéjé tiens une boutique qui est le paradis du jeu vidéo !
                <br>
                Je me régale sur ce projet => Vue, Astro et Nest <3.
            </p>

            <h2 class="for--rod">
                <TrackLink link="https://poke.volpe.xyz/">
                    poke.volpe.xyz
                </TrackLink>
            </h2>

            <p>
                Un projet pour tester Astro. J'utilise plusieurs frameworks pour voir comment ils <i>cohabitent</i>.
                <br>
                Je me suis amusé avec Astro et les pokémons ;).
            </p>

            <h2 class="for--rod">
                Et c’est pas tout
            </h2>

            <p>
                Si t’as le temps, jette un oeil sur mon
                <TrackLink link="https://github.com/amiceli">
                    github
                </TrackLink>.
                Y a des outils en ligne de commande pour les dev, le terminal y a que ça de vrai !
            </p>
        </div>
        <div class="AppForever__line for--rod">
            <div>
                <b>FR</b> <br>
                Langue maternelle, trop facile
            </div>
            <div>
                <b>IT</b> <br>
                Se non parliamo di lavoro, va bene
            </div>
            <div>
                <b>EN</b> <br>
                If we speak technical, no problem
            </div>
        </div>
    </div>
</template>

<script setup>
import TrackLink from "./TrackLink.vue"
</script>

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

            @include onlyMobile () {
                display: unset;
                margin-bottom: 0;

                div {
                    margin-bottom: 20px;
                    b {
                        display: block;
                        text-align: center;
                    }
                    br {
                        display: none;
                    }
                }
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

        .for--rod {
            img {
                width: 40px;
                vertical-align: middle;
                margin-right: 10px;
            }
        }
    }
</style>
