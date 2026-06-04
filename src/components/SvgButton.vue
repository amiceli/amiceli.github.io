<template>
    <button @click="$emit('handle')">
        <div 
            v-if="imageSrc"
            v-html="imageSrc"
            :style="{ '--hover-color': props.color }"
        ></div>
    </button>
</template>

<script
    setup
    lang="ts"
>
import { onMounted, ref } from 'vue'

const props = defineProps<{
    src: string
    color: string
}>()
const imageSrc = ref<string | null>(null)

onMounted(async () => {
    const response = await fetch(`/assets/${props.src}.svg`)
    imageSrc.value = await response.text()
})
</script>

<style scoped>
button {
    background: transparent;
    box-sizing: none;
    height: 45px;
    border-radius: 15px;
    border: 3px #000009 solid;
    display: grid;
    grid-template-columns: 90%;
    align-items: center;
    justify-content: center;
}

button :deep(svg), button div {
    height: 30px;
}

button div:hover :deep(path) {
    fill: var(--hover-color);
}
</style>
