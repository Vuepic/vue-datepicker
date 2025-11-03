<template>
    <ClientOnly>
        <div>
            <VueDatePicker v-model="modelBind" :dark="isDark" placeholder="Select Date" timezone="utc" />
            <div class="flex gapped" style="margin-top: 1rem">
                <button class="theme-btn" type="button" @click="getDate">Get date</button>
                <button class="theme-btn" type="button" @click="getDateInTimeZone">Get date in the timezone</button>
            </div>
        </div>
    </ClientOnly>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { useData } from 'vitepress';
    import { VueDatePicker } from '../lib';

    const { isDark } = useData();

    const modelBind = ref();

    const getDate = () => {
        console.log(modelBind.value ? modelBind.value : 'No date selected');
    };

    const getDateInTimeZone = () => {
        console.log(modelBind.value ? modelBind.value.toString() : 'No date selected');
    };
</script>
