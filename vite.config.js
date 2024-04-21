import { URL, fileURLToPath } from "node:url"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        {
            name: `html-inject-nonce-into-script-tag`,
            enforce: `post`,
            transformIndexHtml(html) {
                const script = `<script async type="application/javascript" src="https://plausible.volpe.xyz/script.js" data-website-id="b8875c72-2935-418c-8464-215526912cf7" data-domains="miceli.click"></script>`

                return html.replace(`<!-- production -->`, script)
            },
        },
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @mixin onlyMobile () {
                        @media (pointer:none),
                        (pointer:coarse) {
                            @content;
                        }
                    }
                `,
            },
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL(`./src`, import.meta.url)),
        },
    },
})
