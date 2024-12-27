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
                const script = `<script async type="application/javascript" src="https://plausible.volpe.xyz/script.js" data-website-id="543caf2e-8305-4ac5-b569-4f65ea62b67b" data-domains="miceli.click"></script>`

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
