<template>
    <div class="wrapper">
        <Datepicker v-model="selectedDate" placeholder="Select Date" />
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import Datepicker from '../src/Vue3DatePicker/Vue3DatePicker.vue';

    const selectedDate = ref();
</script>

<style lang="scss">
    @import 'src/Vue3DatePicker/style/main';
    .wrapper {
        padding: 200px;
    }
</style>
