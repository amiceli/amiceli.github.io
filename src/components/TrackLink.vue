<template>
    <a @click="trackClickLink()" class="doodle--text">
            <slot></slot>
        </a>
</template>

<script
    setup
    lang="ts"
>
import { trackLink } from '@/umami'

const props = defineProps<{
    link: string
}>()

function trackClickLink() {
    trackLink(props.link)
}
</script>

<style scoped>
a {
    cursor: pointer;
    text-decoration: underline;
}
</style>
