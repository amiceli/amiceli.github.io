import vue from "@astrojs/vue"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    vite: {
        preview: {
            allowedHosts: ["miceli.click"],
        },
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
    base: "/",
    integrations: [vue()],
})
