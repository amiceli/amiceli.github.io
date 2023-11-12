<template>
    <div class="AppJob">
        <div>
            <div class="for--rod">
                <div>2015</div>
                <div>2013</div>
            </div>
        </div>
        <div class="AppJob__svg">
            <img
                src="@/assets/ns.svg"
                alt="logo"
            >
            <img
                src="@/assets/lsi.svg"
                alt="logo"
            >
        </div>
        <div>
            <div class="for--rod is--last">
                <div>2023 et c'est pas fini !</div>
                <div>2015</div>
            </div>
        </div>
    </div>
    <div class="AppJobDescription for--rod">
        <div>
            <h2>Natural Solution</h2>
            <p>
                2 ans d’alternance que j’oublirais jamais !<br>
                Découverte du front avec
                backbone et de l’UX &lt;3
            </p>
        </div>
        <div>
            <h2>Letsignit</h2>
            <p>
                8 ans de paradis, et c’est pas fini !<br>
                Arrivé comme dev front et devenir Lead, puis Manager !<br>
                Et sans super bonbon ^^
            </p>
        </div>
    </div>
    <div class="AppJobDetails for--rod">
        <img
            src="@/assets/bonbon.png"
            alt="bonbon"
        >
        <div>
            <img
                src="@/assets/rock.png"
                alt="rock"
            >
            <p>
                Un petit cailloux pour les<br>
                expériences qui ont pas ce niveau ^^
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .AppJob {
        display: grid;
        grid-template-columns: 1fr 594px 1fr;
        margin-top: 170px;
        margin-bottom: 170px;
        height: 354px;

        &>div:nth-child(1) {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            background-image: url('../assets/img/ns.png');
            background-repeat: no-repeat;
            background-position: center;
            background-position-y: 150px;
        }

        &>div:nth-child(3) {
            display: flex;
            align-items: flex-end;
            background-image: url('../assets/img/lsi.png');
            background-repeat: no-repeat;
            background-position: center;
        }

        .for--rod {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &.is--last {
                height: 100%;
                border-left: 1px white solid;
                padding-left: 20px;
            }

            &:not(.is--last) {
                height: 264px;
                border-right: 1px white solid;
                text-align: right;
                padding-right: 20px;
            }
        }

        &__svg {
            position: relative;

            img {
                position: absolute;

                &:first-of-type {
                    width: 350px;
                    top: calc(470px - 350px - 30px);
                    left: 0;
                }

                &:last-of-type {
                    top: 0;
                    right: 0;
                    width: 470px;
                }
            }
        }
    }

    .AppJobDescription {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;

        h2 {
            font-size: 40px;
        }

        p {
            font-size: 30px;
        }

        div:first-of-type {
            text-align: right;
        }
    }

    .AppJobDetails {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        [alt="bonbon"] {
            position: absolute;
            right: 0;
            top: -50px;
        }

        img,
        p {
            display: inline-block;
            vertical-align: middle;
        }

        p {
            font-size: 30px;
        margin-left: 50px;
    }
}</style>
