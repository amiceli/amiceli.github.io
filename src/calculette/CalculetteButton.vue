<template>
    <div class="doodle">
        <button
            :disabled="isDisabled"
            @click="handleClick"
        >
            <div
                v-if="imageSrc"
                v-html="imageSrc"
            ></div>
            <span
                v-else
                :class="{ 'is--small': props.small }"
            >
                {{ props.value }}
            </span>
        </button>
    </div>
</template>

<script
    setup
    lang="ts"
>
import { useCalculetteButton } from '@/calculette/composable'
import type {
    Actions,
    Awesome,
    Frameworks,
    Languages,
} from '@/calculette/rules'

const props = defineProps<{
    value: Actions | Awesome | Languages | Frameworks
    small?: boolean
}>()

const emit = defineEmits<(event: 'handle') => void>()

const { hoverColor, imageSrc, isDisabled } = useCalculetteButton(props.value)

function handleClick() {
    if (!isDisabled.value) {
        emit('handle')
    }
}
</script>

<style scoped>
button {
    width: 100%;
    height: 100%;

    &:hover {
        cursor: pointer;
    }

    span:not(.is--small) {
        font-size: 40px;
    }

    span.is--small {
        font-size: 30px;
    }
}

/* button {
    background: yellow;
    box-sizing: none;
    height: 45px;
    border-radius: 15px;
    border-color : var(--border-color) !important;
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
} */
</style>
