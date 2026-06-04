import { useStore } from '@nanostores/vue'
import { computed } from 'nanostores'
import { type ButtonValue, CalculetteStore } from '@/calculette/CalculetteStore'

export function useCalculette() {
    const store = CalculetteStore.getInstance()

    return {
        buttons: useStore(store.buttons),
        screen: useStore(store.screen),
        currentRule: useStore(store.currentRule),
        store,
    }
}

export function useCalculetteButton(value: ButtonValue) {
    const store = CalculetteStore.getInstance()
    const imageSrcStore = store.getImageSrc(value)

    return {
        hoverColor: useStore(store.getHoverColor(value)),
        imageSrc: useStore(
            computed(imageSrcStore, (state) =>
                state.state === 'ready' ? state.value : null,
            ),
        ),
        isDisabled: useStore(store.getIsDisabled(value)),
    }
}
