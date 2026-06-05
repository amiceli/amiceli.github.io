<template>
    <div class="wrapper">
        <div class="calculette">
            <div
                class="calculette__screen"
                ref="screen"
            >
                {{ screen }}
            </div>
            <div class="calculette__input">
                <div>
                    <SvgButton
                        src="firefox"
                        color="#FF7139"
                        v-if="currentRule?.website"
                        @click="store.openWebsite()"
                    />
                    <SvgButton
                        src="github"
                        color="#181717"
                        v-if="currentRule?.repository"
                        @click="store.openRepository()"
                    />
                </div>
                <CalculetteButton
                    @handle="store.clearValue()"
                    :value="Actions.CLEAR"
                    small
                />
            </div>
            <div class="calculette__buttons">
                <CalculetteButton
                    v-for="btn in buttons"
                    :key="`btn-${btn}`"
                    @handle="updateScreen(btn)"
                    :value="btn"
                />
            </div>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
>
import { useTemplateRef } from 'vue'
import CalculetteButton from '@/calculette/CalculetteButton.vue'
import { useCalculette } from '@/calculette/composable'
import { Actions } from '@/calculette/rules'
import SvgButton from '@/components/SvgButton.vue'

const screenEl = useTemplateRef('screen')
const { screen, buttons, store, currentRule } = useCalculette()

function updateScreen(value: string) {
    store.addValue(value)

    if (screenEl.value !== null) {
        const el = screenEl.value

        requestAnimationFrame(() => {
            el.scrollLeft = el.scrollWidth - el.clientWidth
        })
    }
}
</script>

<style scoped>
@media (pointer:none), (pointer:coarse) {
    .calculette {
        transform: scale(80%);
    }
}

.wrapper {
    display: flex;
    justify-content: center;
}

.calculette {
    display: inline-block;
    width: 472px;
    height: 664px;
    border: 3px var(--border-color) solid;
    box-sizing: border-box;
    padding: 38px 21px;
    border-radius: 20px;
}

.calculette button:hover {
    cursor: pointer;
}

.calculette__screen {
    font-family: "Digital_7";
    background: #EDF4EB;
    height: 107px;
    line-height: 107px;
    width: 100%;
    border: 3px var(--border-color-2) solid;
    border-radius: 20px;
    font-size: 90px;
    font-weight: 200;
    text-transform: uppercase;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    user-select: none;

    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
    text-align: right;
}

.calculette__screen::-webkit-scrollbar {
    display: none;
}

.calculette__input {
    display: grid;
    grid-template-columns: 1fr 90px;
    justify-content: space-between;
    margin-top: 15px;
}

.calculette__input div {
    display: grid;
    grid-template-columns: 90px 90px;
    gap: 16px;
}

.calculette__input button {
    background: transparent;
    box-sizing: none;
    height: 45px;
    border-radius: 15px;
    border: 3px #000009 solid;
}

.calculette__buttons {
    width: 100%;
    display: grid;
    grid-template-columns: 90px 90px 90px 90px;
    justify-content: space-between;
    gap: 16px;
    margin-top: 15px;
}

.calculette__buttons button {
    background: transparent;
    box-sizing: none;
    height: 90px;
    border-radius: 15px;
    border: 3px #000009 solid;
}
</style>
