<template>
    <div class="wrapper">
        <VueDatePicker v-model="selectedDate" placeholder="Select Date" />
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { VueDatePicker } from '../src';

    const selectedDate = ref();
</script>

<style lang="scss">
    .wrapper {
        padding: 200px;
    }
</style>
