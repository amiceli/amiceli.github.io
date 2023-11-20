<template>
    <div class="App">
        <AppHeader />
        <AppDescription />
        <AppDetails />
        <AppDev />
        <AppLavori />
        <AppJobs />
        <AppForever />
        <AppFooter />
    </div>
</template>

<script setup>
    import AppDescription from './components/AppDescription.vue'
    import AppHeader from './components/AppHeader.vue'
    import AppDetails from './components/AppDetails.vue'
    import AppDev from './components/AppDev.vue'
    import AppLavori from './components/AppLavori.vue'
    import AppJobs from './components/AppJobs.vue'
    import AppForever from './components/AppForever.vue'
    import AppFooter from './components/AppFooter.vue'
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600&display=swap');

    @font-face {
        font-family: 'Kbanavoxlost';
        src: url('../src/assets/font/Kbanavoxlost-gajq.ttf') format('woff');
    }

    html,
    body {
        font-family: 'Exo 2', sans-serif;
        color: #d8dee9;
        background: #2E3440;
    }

    .for--rod {
        font-family: 'Kbanavoxlost';
        font-weight: 800;
    }
</style>

<style lang="scss" scoped>
    .App {
        width: 90%;
        margin: auto;
        padding-top: 100px;
        padding-bottom: 100px;
    }
</style>
