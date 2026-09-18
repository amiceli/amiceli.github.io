import { readFileSync } from 'node:fs'

const nvmrcMajor = Number(
    readFileSync(new URL('.nvmrc', import.meta.url), 'utf8')
        .trim()
        .replace(/^v/, '')
        .split('.')
        .at(0),
)

const majorOf = (semver) => {
    return Number(semver?.at(0)?.major)
}

export default {
    upgrade: true,
    root: true,
    filter: (name) => {
        return (
            name === '@types/node' ||
            (name.includes('jest') === false &&
                name.includes('@type') === false)
        )
    },
    target: (name, semver) => {
        if (name !== '@types/node') {
            return 'latest'
        }
        return majorOf(semver) === nvmrcMajor ? 'minor' : 'latest'
    },
}
