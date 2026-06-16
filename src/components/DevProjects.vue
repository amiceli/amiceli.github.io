<template>
    <div class="dev-project doodle">
        <h1 class="doodle--text">
            { Bidouilles homologuées }
        </h1>

        <div class="dev-project__item doodle--text">
            <h2 class="with--link">
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
                Alors je me suis
                <span
                    class="hint--bottom hint--medium"
                    aria-label="Pour les casse-couilles qui ne
                    remontent que les fautes d’orthographe."
                >
                    <span
                        class="brouillon"
                    >
                        lançais
                    </span>
                </span>
                <span>
                    lancé
                </span>
                sur le projet ;).
            </p>
        </div>

        <div class="dev-project__item doodle--text">
            <h2 class="with--link">
                <TrackLink link="https://ticandretro.com">
                    <img src="/assets/ticandretro.png" />
                    ticandretro.com
                </TrackLink>
            </h2>

            <p>
                Mon pote Jéjé tiens une boutique qui est le paradis du jeu vidéo !
                <br>
                Je me régale sur ce projet => Vue, Astro et Nest ❤️.
            </p>
        </div>

        <div class="dev-project__item doodle--text">
            <h2 class="with--link">
                <TrackLink link="https://papier.miceli.click">
                    <img src="/assets/papierjs.webp" />
                    PapierJS
                </TrackLink>
            </h2>

            J'aime le framework <a href="https://www.getpapercss.com/">PaperCSS</a>, ça change de
            Bootstrap, Fondation, etc. Toujours la même chose.
            <br />
                On prend PaperCSS, on rajoute Stencil et <b>Histoire</b> et BAM ! PapierJS est né.
        </div>

        <div class="dev-project__item doodle--text">
            <h2 class="with--link">
                <TrackLink link="https://preums.miceli.click/">
                    <img src="https://preums.miceli.click/logo.png" />
                    Preums
                </TrackLink>
            </h2>

            <p>
                Preums rappelle aux dev ques coder c'est chercher, découvrir, créer et refaire <br>
                Et pas utiliser l'IA pour chaque action.
            </p>

            <p>
                Dans le projet on peut voir l'histoire des langages ets projets qui
                nous font réver ;).
            </p>
        </div>

        <div class="dev-project__item doodle--text">
            <h2>
                <img src="/assets/algues.png" />
                Et c’est pas tout
            </h2>

            <p>
                Si t’as le temps, jette un oeil sur mon
                <TrackLink link="https://github.com/amiceli">
                    github
                </TrackLink>
                ou
                <TrackLink link="https://dev.to/amiceli">
                    dev.to
                </TrackLink>.
            </p>
        </div>

        <div class="dev-project__lang doodle--text">
            <div>
                <b>🇫🇷</b> <br>
                Langue maternelle, trop facile
            </div>
            <div>
                <b>🇮🇹</b> <br>
                Se non parliamo di lavoro, va bene
            </div>
            <div>
                <b>🏴󠁧󠁢󠁥󠁮󠁧󠁿</b> <br>
                If we speak technical, no problem
            </div>
        </div>

    </div>
</template>

<script
    setup
    lang="ts"
>
import TrackLink from '@/components/TrackLink.vue'
import 'hint.css/hint.css'
</script>

<style scoped>
.dev-project {
    background: transparent;
}

.dev-project h1 {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 40px;
}

.dev-project__item {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

@media (pointer:none),
(pointer:coarse) {
    .dev-project__item {
        width: 90%;
    }
}

.dev-project__item h2 {
    font-size: 30px;
}

.dev-project__item p {
    font-size: 20px;
}

.dev-project__item h2,
.dev-project__item h2.with--link a {
    display: grid;
    grid-template-columns: 50px auto;
    align-items: center;
    gap: 20px;
}

.dev-project__item h2 img {
    border: none;
}

.dev-project__lang {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    font-size: 20px;
    gap: 30px;
}

@media (pointer:none),
(pointer:coarse) {
    .dev-project__lang {
        grid-template-rows: auto auto auto;
        grid-template-columns: unset;
    }

    .dev-project__lang div {
        padding-left: 10px;
        padding-right: 10px;
    }
}

.dev-project__lang div {
    text-align: center;
}

.hint--bottom:after {
    font-family: 'Short Stack', cursive;
}

.brouillon {
    position: relative;
    display: inline-block;
}

.brouillon {
    position: relative;
    display: inline-block;
}

.brouillon {
    position: relative;
    display: inline-block;
}

.brouillon::after {
    content: "";
    position: absolute;
    left: -2%;
    right: -2%;
    top: 30%;
    height: 10px;

    background:
        repeating-linear-gradient(-10deg,
            transparent 0px,
            transparent 2px,
            var(--strike-color) 2px,
            var(--strike-color) 3px),
        repeating-linear-gradient(8deg,
            transparent 0px,
            transparent 3px,
            rgba(220, 30, 30, 0.55) 3px,
            rgba(220, 30, 30, 0.55) 4px),
        repeating-linear-gradient(-3deg,
            transparent 0px,
            transparent 1px,
            rgba(220, 30, 30, 0.65) 1px,
            rgba(220, 30, 30, 0.65) 2px);

    transform: rotate(-2.5deg);
    opacity: 1;
    pointer-events: none;
    filter: blur(0.25px);
}

span[data-tooltip] {
    position: relative;
}

span[data-tooltip]:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    bottom: 120%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
}
</style>
