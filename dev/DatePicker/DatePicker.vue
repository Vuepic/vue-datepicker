<template>
    <DpRoot v-model="selectedDate" class="relative">
        <DpTrigger v-slot="{ clearValue, inputValue }" class="relative">
            <DpInput
                class="w-full border border-neutral-500 px-2 py-1 rounded-sm focus:outline-none cursor-pointer bg-neutral-800 text-neutral-300"
                placeholder="Select date"
            />
            <button
                v-if="inputValue"
                class="absolute top-2/4 right-1 -translate-y-2/4 cursor-pointer"
                @click="clearValue"
            >
                <CancelIcon class="size-4 text-neutral-400" />
            </button>
        </DpTrigger>
        <DpMenu class="bg-neutral-800 border border-neutral-500 rounded-sm text-neutral-300">
            <DpInstance>
                <DpCalendar v-slot="{ month, year, nextMonth, prevMonth }">
                    <div class="flex items-center w-full p-0.5">
                        <button
                            class="rounded-full p-1 hover:bg-neutral-700 cursor-pointer transition-colors"
                            @click="prevMonth"
                        >
                            <ChevronLeftIcon class="size-4" />
                        </button>
                        <button
                            class="py-1 px-1 hover:bg-neutral-700 rounded-sm cursor-pointer w-full transition-colors"
                        >
                            {{ month.label }}
                        </button>
                        <button
                            class="py-1 px-1 hover:bg-neutral-700 rounded-sm cursor-pointer w-full transition-colors"
                        >
                            {{ year }}
                        </button>
                        <button
                            class="rounded-full p-1 hover:bg-neutral-700 cursor-pointer transition-colors"
                            @click="nextMonth"
                        >
                            <ChevronRightIcon class="size-4" />
                        </button>
                    </div>
                    <DpCalendarGrid class="w-full table-fixed max-w-[250px] border-collapse">
                        <DpCalendarGridHead>
                            <DpCalendarGridHeadRow v-slot="{ days }">
                                <DpCalendarGridHeadCell
                                    v-for="(day, i) in days"
                                    :key="i"
                                    class="border-b border-b-neutral-500"
                                >
                                    {{ day.label }}
                                </DpCalendarGridHeadCell>
                            </DpCalendarGridHeadRow>
                        </DpCalendarGridHead>
                        <DpCalendarGridBody v-slot="{ weeks }">
                            <DpCalendarGridRow v-for="(week, i) in weeks" :key="i">
                                <DpCalendarCell
                                    v-for="(day, j) in week.days"
                                    :key="j"
                                    v-slot="{ isToday }"
                                    :day="day.value"
                                    class="text-center h-[35px]"
                                >
                                    <DPCalendarCellTrigger
                                        class="text-center cursor-pointer hover:bg-neutral-700 h-full w-full transition-colors rounded-sm relative"
                                        :class="{
                                            'text-neutral-700': !day.current,
                                        }"
                                    >
                                        <span
                                            v-if="isToday"
                                            class="w-1 h-1 absolute top-1 right-1 bg-blue-500 rounded-full"
                                        ></span>
                                        {{ day.label }}
                                    </DPCalendarCellTrigger>
                                </DpCalendarCell>
                            </DpCalendarGridRow>
                        </DpCalendarGridBody>
                    </DpCalendarGrid>
                </DpCalendar>
            </DpInstance>
        </DpMenu>
    </DpRoot>
</template>

<script lang="ts" setup>
    import {
        DpRoot,
        DpTrigger,
        DpInput,
        DpMenu,
        DpCalendar,
        DpInstance,
        DpCalendarGrid,
        DpCalendarGridRow,
        DpCalendarCell,
        DpCalendarGridHeadRow,
        DpCalendarGridHead,
        DpCalendarGridHeadCell,
        DpCalendarGridBody,
        DPCalendarCellTrigger,
    } from '@packages/index.ts';
    import { CancelIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons';
    import { ref } from 'vue';

    const selectedDate = ref(new Date());
</script>
