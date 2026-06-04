<template>
    <button @click="$emit('handle')">
        <div 
            v-if="imageSrc !== null"
            v-html="imageSrc"
            :style="{ '--hover-color': hoverColor }"
        ></div>
        <span 
            v-else 
            :class="{ 'is--small': props.small }"
        >
            {{ props.value }}
        </span>
    </button>
</template>

<script
    setup
    lang="ts"
>
import { computed, onMounted, ref } from 'vue'
import { Actions, Awesome, Frameworks, Languages } from '@/calculette/rules'

const props = defineProps<{
    value: string
    small?: boolean
}>()

const imageSrc = ref(null)

onMounted(async () => {
    if (Object.values(Actions).includes(props.value)) {
        return
    }

    imageSrc.value = await fetch(`/assets/${props.value}.svg`).then((r) =>
        r.text(),
    )
})
const hoverColor = computed(() => {
    return (
        {
            [Frameworks.VUE]: '#4FC08D',
            [Frameworks.LARAVEL]: '#FF2D20',
            [Languages.PHP]: '#777BB4',
            [Languages.JAVASCRIPT]: '#F7DF1E',
            [Languages.TYPESCRIPT]: '#3178C6',
            [Awesome.GITLAB]: '#FC6D26',
            [Frameworks.STENCIL]: '#5530FF',
            [Frameworks.DOCKER]: '#2496ED',
            [Awesome.GHERKIN]: '#23D96C',
        }[props.value] ?? null
    )
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

button div:hover :deep(path) {
    fill: var(--hover-color);
}

button span:not(.is--small) {
    font-size: 40px;
}

button span.is--small {
    font-size: 30px;
}
</style>
