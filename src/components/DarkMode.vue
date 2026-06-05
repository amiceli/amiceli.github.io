<template>
    <div class="doodle dark-mode">
        <button
            class="doodle--text"
            @click="next()"
        >
            <img src="/assets/lumen.svg" alt="lumen logo">
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

    button:hover {
        cursor: pointer;
    }

    img {
        height: 20px;
        vertical-align: middle;
        border : none;
        margin-right: 10px;
    }
}
</style>

<style>
/* Variables and common style */
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

body {
    background: var(--background);
}
</style>

<!-- html.dark -->
<style>
html.dark {

    h2,
    h1 {
        color: white;
    }

    .dev-footer img {
        filter: invert(1);
    }

    .dev-footer .doodle--text,
    .dev-project .doodle--text {
        color: white;
    }

    a {
        color: #7077A1;
    }

    .dev-formula {
        filter: invert(1);
    }

    .doodle fieldset {
        filter: invert(1);
    }

    .doodle .for--icon {
        filter: invert(12);
    }
}
</style>