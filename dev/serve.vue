<template>
    <div id="app">
        <div class="wrapper">
            <vue3-date-picker placeholder="select" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Vue3DatePicker from '@/Vue3DatePicker/Vue3DatePicker.vue';

    export default defineComponent({
        name: 'ServeDev',
        components: {
            Vue3DatePicker,
        },
    });
</script>

<style lang="scss">
    @import 'src/Vue3DatePicker/style/main';
    .wrapper {
        padding: 200px;
    }
</style>
