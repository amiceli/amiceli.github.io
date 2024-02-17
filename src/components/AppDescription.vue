<template>
    <div class="AppDescription">
        <h1>
            Choisissez un travail que vous aimez et vous
            n'aurez pas à travailler un seul jour de votre vie.
        </h1>
        <b>Confucius</b>
    </div>
</template>

<style scoped lang="scss">
    .AppDescription {
        width: 876px;
        margin: auto;

        h1 {
            color : #D8DEE9;
            font-size: 40px;
            text-align: center;
            margin-top: 150px;
            font-weight: 300;
        }
        b {
            color : #5E81AC;
            font-size: 40px;
            display: block;
            text-align: right;
        }

        @include onlyMobile () {
            width: 100%;

            h1 {
                margin-top : 50px;
            }
        }
    }
</style>
