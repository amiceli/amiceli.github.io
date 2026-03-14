<template>
    <div class="m-nav">
        <TrackLink link="https://dev.to/amiceli">
            <img
                src="/img/dev.png"
                alt="dev.to"
            >
        </TrackLink>
        <TrackLink link="https://github.com/amiceli">
            <img
                src="/img/github.png"
                alt="Github"
            >
        </TrackLink>
    </div>
</template>

<script setup>
import TrackLink from "./TrackLink.vue"
</script>

<style scoped>
.m-nav {
    display: grid;
    grid-template-columns: 40px 40px;
    grid-gap: 10px;
    align-items: center;
    margin-bottom: 100px;

    img {
        width: 40px;
    }
}
</style>
