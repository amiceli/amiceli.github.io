<template>
    <div class="AppDev">
        <div>
            <img
                src="@/assets/code.png"
                alt="code"
            >
        </div>
        <div class="for--rod">
            <b>VueJS</b>
            <span>Un régale ce framework !</span>
            <b>Astro</b>
            <span>Le saint graal pour les dev front &lt;3</span>
            <b>Stencil + Storybook</b>
            <span>
                Un bon design system avec une belle doc !
                <br>
                Motié dev, moitié UX ^^
            </span>
            <b>Typescript</b>
            <span>Je me demande comment j’ai pu faire du dev sans O.o</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .AppDev {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        grid-gap : 20px;

        img {
            width: 100%;
        }

        div {
            flex : 1;
            b {
                display: block;
                font-size: 40px;
                color : #3BE2A0;
            }
            span {
                display: block;
                font-size: 30px;
                margin-bottom: 28px;
                margin-top: 28px;
            }
        }
    }
</style>
