<template>
    <div class="dev-formula">
        <img src="/assets/steack.png" alt="fous-le-steack">
    </div>
    <div class="dev-code doodle doodle--text">
        <fieldset>
            <legend>
                front end
            </legend>
            <ul>
                <li>
                    <b>VueJS</b> : le framework que je connais le mieux.
                </li>
                <li>
                    <b>Astro</b> : Le saint graal pour les dev front ❤️.
                </li>
                <li>
                    <b>Stencil</b> : idéal pour créer un
                    <a href="https://github.com/amiceli/papierjs" target="_blank">
                        design-system
                    </a>
                </li>
                <li>
                    <a href="https://vitest-cucumber.miceli.click/" target="_blank">
                        <b>vitest-cucumber</b>
                    </a>
                    : qualité et respect des specs
                </li>
            </ul>
        </fieldset>
        <div>
            <img src="/assets/rose-desert.png" alt="computer icon" />
        </div>
        <fieldset>
            <legend>
                back-end
            </legend>
            <ul>
                <li>
                    <b>NestJS</b>: express en mode <i>OOP</i>.
                </li>
                <li>
                    <b>Laravel</b>: devant et derrière la <i>façade</i>.
                </li>
            </ul>
            <blockquote>
                Ça se voit pas avec ma tête de front end mais le <b>PHP</b>, reste
                mon language préféré 🤘 !
            </blockquote>
        </fieldset>
    </div>
</template>

<script
    setup
    lang="ts"
></script>

<style scoped>
.dev-formula {
    width: 50%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

@media (pointer:none), (pointer:coarse) {
    .dev-formula {
        width: 100%;
    }
}

.dev-formula img {
    width: 100%;
}

.dev-code {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background: white;
    display: grid;
    grid-template-columns: 1fr 70px 1fr;
    grid-auto-rows: 1fr;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

@media (pointer:none), (pointer:coarse) { 
    .dev-code {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 70px 1fr;
    }
    .dev-code img {
        width: 70px;
    }
    fieldset + div {
        text-align: center;
    }
}

fieldset {
    font-size: 20px;
    height: 100%;
}

fieldset legend {
    font-size: 30px;
}

fieldset li {
    margin-bottom: 10px;
}

fieldset+div img {
    border: none;
}
</style>