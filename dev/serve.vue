<template>
    <div class="bg-neutral-900 w-full h-full">
        <div class="flex items-top justify-center h-full w-full p-8">
            <div class="p-8 w-[500px]">
                <DatePicker></DatePicker>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import DatePicker from './DatePicker/DatePicker.vue';
</script>

<style lang="scss">
    .wrapper {
        padding: 200px;
    }
</style>
