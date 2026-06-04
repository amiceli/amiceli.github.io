<template>
    <div class="app__welcome">
        <img src="/bienvenue.png" alt="bienvenue" />
        <Calculette />
    </div>
    <DevCode />
    <DevProjects />
</template>

<script
    setup
    lang="ts"
>
import 'doodle.css/doodle.css'

import Calculette from '@/calculette/Calculette.vue'
import DevCode from '@/components/DevCode.vue'
import DevProjects from '@/components/DevProjects.vue'
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

/* @media (prefers-color-scheme: dark) {
    body {
        background: #171A1A;
    }
} */

@media (prefers-color-scheme: light) {
    body {
        background: white;
    }
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

.app__welcome img {
    max-width: 600px;
}
</style>
