<template>
    <div class="AppFooter">
        <div class="for--rod">
            Si tu aimes les posts de dev
        </div>
        <TrackLink link="https://dev.to/amiceli">
            <img
                src="@/assets/img/dev.svg"
                alt="dev.to"
            >
        </TrackLink>
        <TrackLink link="https://github.com/amiceli">
            <img
                src="@/assets/img/github.svg"
                alt="Github"
            >
        </TrackLink>
        <div class="for--rod">
            Si tu aimes le code
        </div>
    </div>
</template>

<script setup>
import TrackLink from "@/components/TrackLink.vue"
</script>

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

        @include onlyMobile () {
            grid-template-columns: 1fr 1fr;
            margin-top: 60px;
            margin-bottom: 50px;

            .for--rod {
                display: none;
            }
        }
    }
</style>
