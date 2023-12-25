import {
    fileURLToPath, URL,
} from 'node:url'
import fs from 'fs/promises'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins : [
        vue(),
        {
            name : `index-html-build-replacement`,
            apply : `build`,
            async transformIndexHtml () {
                return fs.readFile(`./index.prod.html`, `utf8`)
            },
        },
    ],
    resolve : {
        alias : {
            '@' : fileURLToPath(new URL(`./src`, import.meta.url)),
        },
    },
})
