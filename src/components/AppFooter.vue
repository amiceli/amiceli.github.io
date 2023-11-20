<template>
    <div class="AppFooter">
        <div class="for--rod">
            Si tu aimes les posts de dev
        </div>
        <a
            href="https://dev.to/amiceli"
            target="_blank"
        >
            <img
                src="@/assets/img/dev.svg"
                alt="dev.to"
            >
        </a>
        <a
            href="https://github.com/amiceli"
            target="_blank"
        >
            <img
                src="@/assets/img/github.svg"
                alt="Github"
            >
        </a>
        <div class="for--rod">
            Si tu aimes le code
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .AppFooter {
        margin-top: 200px;
        display: grid;
        grid-template-columns: 1fr 150px 150px 1fr;
        grid-gap: 50px;
        align-items: center;

        .for--rod {
            font-size: 30px;

            &:first-of-type {
                text-align: right;
            }
        }
    }
</style>
