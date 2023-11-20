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
            src="@/assets/img/profile.png"
            alt="moi"
        >
    </div>
</template>

<script setup lang="ts">
    import TattooLogo from './TattooLogo.vue'
</script>

<style scoped lang="scss">
    .AppHeader {
        display: flex;
        // background: red;
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

                p {
                    opacity: 0.4;
                }

                img {
                    display: inline-block;
                    vertical-align: middle;
                    width: 46px;
                }
            }
        }
    }
</style>
