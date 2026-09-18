export enum Actions {
    EQUAL = '=',
    ADD = '+',
    LESS = '-',
    DIVIDE = '/',
    MULTIPLY = 'x',
    DOT = '.',
    CLEAR = 'CE',
}

export enum Languages {
    JAVASCRIPT = 'javascript',
    PHP = 'php',
    TYPESCRIPT = 'typescript',
}

export enum Frameworks {
    VUE = 'vue',
    LARAVEL = 'laravel',
    DOCKER = 'docker',
    STENCIL = 'stencil',
}

export enum Awesome {
    GITLAB = 'gitlab',
    GHERKIN = 'gherkin',
    ZERO = '0',
}

// Binary power system: each element = 2^n
export const valueMap = {
    [Languages.JAVASCRIPT]: 1, // 2^0
    [Languages.PHP]: 2, // 2^1
    [Languages.TYPESCRIPT]: 4, // 2^2
    [Frameworks.VUE]: 8, // 2^3
    [Frameworks.LARAVEL]: 16, // 2^4
    [Frameworks.DOCKER]: 32, // 2^5
    [Frameworks.STENCIL]: 64, // 2^6
    [Awesome.GITLAB]: 128, // 2^7
    [Awesome.GHERKIN]: 256, // 2^8
    [Awesome.ZERO]: 512, // 2^9
}

export type RuleEntry = {
    name: string
    repository?: string
    website?: string
}

const preums: RuleEntry = {
    name: 'Preums',
    website: 'https://preums.miceli.click/',
    repository: 'https://github.com/amiceli/preums',
}

const vitestCucumber: RuleEntry = {
    name: 'vitest-cucumber',
    repository: 'https://github.com/amiceli/vitest-cucumber',
    website: 'https://amiceli.github.io/vitest-cucumber-docs/',
}

const papierjs: RuleEntry = {
    name: 'PapierJS',
    repository: 'https://github.com/amiceli/papierjs',
    website: 'https://amiceli.github.io/papierjs/',
}

export const rules: Record<number, RuleEntry> = {
    // Preums
    [valueMap[Languages.PHP] + valueMap[Frameworks.LARAVEL]]: preums,
    [valueMap[Frameworks.VUE] + valueMap[Languages.PHP]]: preums,

    // nuova-casa
    [valueMap[Frameworks.VUE] + valueMap[Frameworks.LARAVEL]]: {
        name: 'nuova-casa',
        repository: 'https://github.com/piccoli-occhi/nuova-casa',
    },

    // papierjs
    [valueMap[Frameworks.STENCIL] + valueMap[Languages.TYPESCRIPT]]: papierjs,

    // vitest-cucumber
    [valueMap[Awesome.GHERKIN] + valueMap[Languages.TYPESCRIPT]]:
        vitestCucumber,
    [valueMap[Awesome.GHERKIN] + valueMap[Languages.JAVASCRIPT]]:
        vitestCucumber,

    // Histoire
    [valueMap[Frameworks.VUE] + valueMap[Frameworks.STENCIL]]: {
        name: 'Histoire ❤️',
        website: 'https://histoire.dev/',
        repository: 'https://github.com/histoire-dev/histoire',
    },

    // Idées
    [valueMap[Awesome.GHERKIN] +
        valueMap[Awesome.GITLAB] +
        valueMap[Languages.JAVASCRIPT] +
        valueMap[Frameworks.DOCKER]]: {
        name: 'Behavior Driven Development',
    },
    [valueMap[Frameworks.STENCIL] +
        valueMap[Frameworks.VUE] +
        valueMap[Languages.TYPESCRIPT]]: {
        name: 'Component Driven Development',
    },

    // Blagues
    0: {
        name: 'walou',
    },
    [valueMap[Awesome.ZERO] + valueMap[Awesome.ZERO]]: {
        name: 'La tete a Toto',
    },
    [valueMap[Frameworks.VUE] + valueMap[Frameworks.VUE]]: {
        name: 'Deja Vue',
    },
    [valueMap[Frameworks.VUE] * 3]: {
        name: 'Vuezela',
    },
    [valueMap[Frameworks.DOCKER] + valueMap[Awesome.GHERKIN]]: {
        name: 'Cocombre',
    },
    [valueMap[Frameworks.DOCKER] + valueMap[Frameworks.DOCKER]]: {
        name: 'Doublecker',
    },
    [valueMap[Frameworks.DOCKER] + valueMap[Awesome.GITLAB]]: {
        name: 'GitLabeur',
    },
    [valueMap[Frameworks.STENCIL] + valueMap[Frameworks.DOCKER]]: {
        name: 'Fada !',
    },
    [valueMap[Languages.PHP] + valueMap[Languages.TYPESCRIPT]]: {
        name: '❤️',
    },
    [valueMap[Languages.JAVASCRIPT] + valueMap[Languages.TYPESCRIPT]]: {
        name: 'PreniumJS',
    },
}
