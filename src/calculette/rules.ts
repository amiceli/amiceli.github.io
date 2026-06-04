export enum Actions {
    EQUAL = '=',
    ADD = '+',
    LESS = '-',
    DIVIDE = '/',
    MULTIPLY = 'x',
    DOT = '.',
    ZERO = '0',
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
}

export type RuleEntry = {
    name: string
    repository?: string
    website?: string
}

export const rules: Record<number, RuleEntry> = {
    [valueMap[Languages.PHP] + valueMap[Frameworks.LARAVEL]]: {
        name: 'la base !',
    },
    [valueMap[Frameworks.VUE] + valueMap[Frameworks.VUE]]: {
        name: 'Lunette',
    },
    [valueMap[Frameworks.DOCKER] + valueMap[Awesome.GHERKIN]]: {
        name: 'Cocombre',
    },
    [valueMap[Frameworks.DOCKER] + valueMap[Awesome.GITLAB]]: {
        name: 'Labeur ?',
    },
    // laravel (16) + vue (8) = 24
    24: {
        name: 'nuova-casa',
        repository: 'https://github.com/piccoli-occhi/nuova-casa',
    },
    // gitlab (128) / laravel (16) = 8
    8: {
        name: '😱',
    },
    // typescript (4) + gherkin (256) = 260
    260: {
        name: 'vitest-cucumber',
        repository: 'https://github.com/amiceli/vitest-cucumber',
        website: 'https://vitest-cucumber.miceli.click/',
    },
    // docker (32) + stencil (64) = 96
    96: {
        name: 'Fada !',
    },
    // typescript (4) + stencil (64) = 68
    68: {
        name: 'PapierJS',
        repository: 'https://github.com/amiceli/papierjs',
        website: 'https://papier.miceli.click/',
    },
    // stencil (64) + vue (8) = 72
    72: {
        name: 'Histoire ❤️',
        website: 'https://histoire.dev/',
        repository: 'https://github.com/histoire-dev/histoire',
    },
    // javascript (1) + gherkin (256) = 257
    257: {
        name: 'vitest-cucumber',
        repository: 'https://github.com/amiceli/vitest-cucumber',
        website: 'https://vitest-cucumber.miceli.click/',
    },
    // php (2) + javascript (1) = 3
    3: {
        name: '❤️',
    },
}
