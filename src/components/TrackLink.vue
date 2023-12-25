<template>
    <a @click="trackClickLink()">
        <slot></slot>
    </a>
</template>

<script setup>
    import { trackLink } from '@/umami/umami'

    const props = defineProps([`link`])

    function trackClickLink () {
        trackLink(props.link)
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>
