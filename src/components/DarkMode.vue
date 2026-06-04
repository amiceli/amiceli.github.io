<template>
    <div class="doodle dark-mode">
        <button
            class="doodle--text"
            @click="next()"
        >
            Thème : <u>{{ mode }}</u>
        </button>
    </div>
</template>

<script
    setup
    lang="ts"
>
import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue'

const mode = useColorMode({
    emitAuto: true,
    modes: {
        pastel: 'pastel',
    },
})

const { state, next } = useCycleList(
    [
        'dark',
        'light',
        'pastel',
        'auto',
    ] as const,
    {
        initialValue: mode,
    },
)

watchEffect(() => (mode.value = state.value))
</script>

<style scoped>
.dark-mode {
    position: fixed;
    top: 20px;
    right: 20px;
}

.dark-mode button:hover {
    cursor: pointer;
}
</style>

<style>
:root {
    --background-color: white;
    --svg-fill: dark;
    --border-color: #000;
    --border-color-2: #000;
    --svg-fill: #000;
}

html.dark {
    --background: #35374B;
    --border-color: #FAF7F3;
    --svg-fill: #fff;
    /* nok */
    --border-color-2: #000;
}

html.pastel {
    --background: #DCC5B2;
    --border-color: #FAF7F3;
    --svg-fill: #FAF7F3;
    /* nok */
    --border-color-2: #000;
}

html.dark h2,
h1 {
    color: white;
}

html.dark .dev-footer img {
    filter: invert(1);
}

html.dark .dev-footer .doodle--text,
html.dark .dev-project .doodle--text {
    color: white;
}

html.dark a {
    color: #7077A1;
}


body {
    background: var(--background);
}

html.dark .dev-formula {
    filter: invert(1);
}

html.dark .doodle fieldset {
    filter: invert(1);
}

html.dark .doodle .for--icon {
    filter: invert(12);
}
</style>