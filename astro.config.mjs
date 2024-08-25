import mdx from "@astrojs/mdx"
import vue from "@astrojs/vue"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    vite: {
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
    },
    integrations: [vue(), mdx()],
})
