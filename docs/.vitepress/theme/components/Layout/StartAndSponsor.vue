<template>
    <div class="star-and-sponsor">
        <p>
            ⭐ If you like the component, give it a star on
            <a class="home-link" href="https://github.com/Vuepic/vue-datepicker" target="_blank">GitHub</a>
            and consider
            <a class="home-link" href="https://github.com/sponsors/Vuepic" target="_blank">sponsoring</a>
            its development! ⭐
        </p>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
    .star-and-sponsor {
        display: flex;
        justify-content: center;
        margin: 2rem;
    }

    .home-link {
        color: var(--vp-c-brand);
    }
</style>
