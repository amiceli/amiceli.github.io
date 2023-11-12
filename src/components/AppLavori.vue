<template>
    <div class="AppDev">
        <div>
            <img
                src="@/assets/lavori.png"
                alt="code"
            >
        </div>
        <div class="for--rod">
            <b>CI</b>
            <span>Gitlab Page, MR, Cr, Renovate</span>
            <b>Equipe</b>
            <span>Meilleurs equipes de dev front !</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .AppDev {
        display: grid;
        align-items: center;
        grid-template-columns: 769px 1fr;
        grid-gap : 20px;
        margin-top: 130px;

        img {
            width: 100%;
        }

        div {
            flex: 1;

            b {
                display: block;
                font-size: 40px;
                color: #3BE2A0;
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
