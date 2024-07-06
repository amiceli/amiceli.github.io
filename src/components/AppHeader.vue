<template>
    <div class="AppHeader">
        <div class="AppHeader__tattoo">
            <TattooLogo />
            <div class="tattoo__text">
                <img
                    src="../assets/img/cocafe.png"
                    alt="cafe"
                >
                <p class="for--rod">
                    Un café si tu veux savoir à quoi ça correspond ;)
                </p>
            </div>
        </div>
        <img
            src="@/assets/img/profile.jpeg"
            alt="moi"
        >
    </div>
</template>

<script setup lang="ts">
import TattooLogo from "./TattooLogo.vue"
</script>

<style scoped lang="scss">
    .AppHeader {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;

        &__tattoo {
            position: relative;

            &+img {
                margin-left: 200px;
            }

            .tattoo__text {
                position: absolute;
                left: 0;
                bottom: -70px;
                display: grid;
                grid-template-columns: max-content max-content;
                grid-gap: 20px;
                align-items: center;

                @include onlyMobile () {
                    display: unset;
                    position : unset;
                    text-align: center;
                }

                p {
                    opacity: 0.4;
                }

                img {
                    display: inline-block;
                    vertical-align: middle;
                    width: 46px;
                }
            }

            & + img {
                width: 150px;
                border-radius : 150px;
                box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
            }
        }

        @include onlyMobile () {
            display: block;
            svg {
                width: 100%;
            }

            img {
                margin: auto;
            }
        }
    }
</style>
