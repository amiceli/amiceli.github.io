import { useStore } from '@nanostores/vue'
import { CalculetteStore } from '@/calculette/CalculetteStore'

export function useCalculette() {
    const store = CalculetteStore.getInstance()

    return {
        buttons: useStore(store.buttons),
        screen: useStore(store.screen),
        currentRule: useStore(store.currentRule),
        store,
    }
}
