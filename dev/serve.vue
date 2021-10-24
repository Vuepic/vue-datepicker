<template>
    <div class="wrapper">
        <vue3-date-picker v-model="selectedDate" placeholder="Select Date" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import Vue3DatePicker from '@/Vue3DatePicker/Vue3DatePicker.vue';

    export default defineComponent({
        name: 'ServeDev',
        components: {
            Vue3DatePicker,
        },
        setup() {
            const selectedDate = ref();

            return {
                selectedDate,
            };
        },
    });
</script>

<style lang="scss">
    @import 'src/Vue3DatePicker/style/main';
    .wrapper {
        padding: 200px;
    }
</style>
