import { computedAsync } from '@nanostores/async'
import { atom, computed } from 'nanostores'
import {
    Actions,
    Awesome,
    Frameworks,
    Languages,
    type RuleEntry,
    rules as ruleMap,
    valueMap,
} from '@/calculette/rules'

export type ButtonValue = Actions | Awesome | Languages | Frameworks

enum ScreenMessage {
    DEFAULT_VALUE = 'front-end',
    ERROR = 'Error !',
}

export class CalculetteStore {
    private static instance: CalculetteStore | null = null

    public readonly currentRule = atom<RuleEntry | null>(null)

    public readonly buttons = atom([
        // line
        Frameworks.VUE,
        Languages.JAVASCRIPT,
        Languages.PHP,
        Actions.DIVIDE,
        // line
        Frameworks.LARAVEL,
        Languages.TYPESCRIPT,
        Frameworks.DOCKER,
        Actions.MULTIPLY,

        // line
        Frameworks.STENCIL,
        Awesome.GITLAB,
        Awesome.GHERKIN,
        Actions.LESS,

        // line
        Awesome.ZERO,
        Actions.DOT,
        Actions.EQUAL,
        Actions.ADD,
    ])

    public readonly finished = atom(false)

    public readonly screen = atom<string>(ScreenMessage.DEFAULT_VALUE)

    private readonly isInit = computed(
        this.screen,
        (val) => val === ScreenMessage.DEFAULT_VALUE,
    )

    public readonly endsWithAction = computed(
        this.screen,
        (val) => val.endsWith(Actions.ADD) || val.endsWith(Actions.LESS),
    )

    public readonly onError = computed(
        this.screen,
        (val) => val === ScreenMessage.ERROR,
    )

    public readonly hoverColors = atom<Record<string, string>>({
        [Frameworks.VUE]: '#4FC08D',
        [Frameworks.LARAVEL]: '#FF2D20',
        [Languages.PHP]: '#777BB4',
        [Languages.JAVASCRIPT]: '#F7DF1E',
        [Languages.TYPESCRIPT]: '#3178C6',
        [Awesome.GITLAB]: '#FC6D26',
        [Frameworks.STENCIL]: '#5530FF',
        [Frameworks.DOCKER]: '#2496ED',
        [Awesome.GHERKIN]: '#23D96C',
    })

    public getHoverColor(button: ButtonValue) {
        return computed(this.hoverColors, (colors) => {
            return colors[button] ?? null
        })
    }

    public getImageSrc(button: ButtonValue) {
        return computedAsync([], async () => {
            const isAction = Object.values(Actions).includes(button as Actions)
            const isZero = button === Awesome.ZERO

            if (isAction || isZero) {
                return null
            }

            const response = await fetch(`/assets/${button}.svg`)

            if (!response.ok) {
                return null
            }

            return await response.text()
        })
    }

    public getIsDisabled(button: ButtonValue) {
        return computed(this.screen, (screenValue) => {
            if (button === Actions.MULTIPLY) {
                return true
            }

            return false
        })
    }

    public static getInstance(): CalculetteStore {
        if (CalculetteStore.instance === null) {
            CalculetteStore.instance = new CalculetteStore()
        }

        return CalculetteStore.instance
    }

    public clearValue(): void {
        this.screen.set(ScreenMessage.DEFAULT_VALUE)
        this.finished.set(false)
        this.currentRule.set(null)
    }

    public openRepository() {
        const url = this.currentRule.get()?.repository

        if (url) {
            window.open(url, '_blank')
        }
    }

    public openWebsite() {
        const url = this.currentRule.get()?.website

        if (url) {
            window.open(url, '_blank')
        }
    }

    private evalValue(): RuleEntry | null {
        let expr = this.screen.get()
        for (const [name, power] of Object.entries(valueMap)) {
            expr = expr.replaceAll(name, String(power))
        }

        // biome-ignore lint/security/noGlobalEval: Rien a foutre
        const result = Math.max(0, eval(expr))
        const rule = ruleMap[result]

        return rule ?? null
    }

    public addValue(val: string): void {
        const currentValue = this.screen.get()
        const isAction = Object.values(Actions).includes(val as Actions)

        if (this.finished.get() && !isAction) {
            this.clearValue()
            this.screen.set(val)

            return
        }

        if (this.isInit.get()) {
            if (!isAction) {
                this.screen.set(val)
            }

            return
        }

        if (val === Actions.ADD || val === Actions.LESS) {
            if (!this.endsWithAction.get()) {
                this.screen.set(`${currentValue}${val}`)
            }

            return
        }

        if (val === Actions.EQUAL) {
            try {
                const rule = this.evalValue()

                this.currentRule.set(rule)
                this.screen.set(rule?.name ?? ScreenMessage.ERROR)
                this.finished.set(true)
            } catch {
                this.screen.set(ScreenMessage.ERROR)
            }

            return
        }

        if (!currentValue.endsWith('+') && !currentValue.endsWith('-')) {
            return
        }

        this.screen.set(`${currentValue}${val}`)
    }
}
