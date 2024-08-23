import { defineConfig } from "astro/config"

import vue from "@astrojs/vue"

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
    integrations: [vue()],
})
