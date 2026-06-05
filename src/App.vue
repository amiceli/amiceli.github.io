<template>
    <DarkMode />
    <div class="app__welcome">
        <img src="/bienvenue.png" alt="bienvenue" />
        <Calculette />
    </div>
    <DevCode />
    <DevProjects />
    <DevFooter />
</template>

<script
    setup
    lang="ts"
>
import 'doodle.css/doodle.css'

import Calculette from '@/calculette/Calculette.vue'
import DevCode from '@/components/DevCode.vue'
import DevProjects from '@/components/DevProjects.vue'
import DarkMode from './components/DarkMode.vue'
import DevFooter from './components/DevFooter.vue'
</script>

<style>
@font-face {
    font-family: 'Digital_7';
    src: url('/digital_7/digital-7 (italic).ttf') format('truetype'),
        url('/digital_7/digital-7 (mono italic).ttf') format('truetype'),
        url('/digital_7/digital-7.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

html,
body {
    padding: 0 0 40px 0;
    margin: 0;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Short+Stack&display=swap');

.doodle--text {
    font-family: 'Short Stack', cursive;
}
</style>

<style scoped>
.app__welcome {
    display: grid;
    grid-template-columns: auto auto;
    gap: 100px;
    justify-content: center;
    align-items: center;
}

@media (pointer:none), (pointer:coarse) {
    .app__welcome {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        justify-content: center;
        align-items: center;
        gap: 0;
    }
    .app__welcome img {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
}

.app__welcome img {
    max-width: 600px;
}
</style>
