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

    public readonly values = atom<string[]>([])

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

    public static getInstance(): CalculetteStore {
        if (CalculetteStore.instance === null) {
            CalculetteStore.instance = new CalculetteStore()
        }

        return CalculetteStore.instance
    }

    public clearValue(): void {
        this.screen.set(ScreenMessage.DEFAULT_VALUE)
        this.values.set([])
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
        const isAction = Object.values(Actions).includes(val)

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
                this.values.set([
                    currentValue,
                ])
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
