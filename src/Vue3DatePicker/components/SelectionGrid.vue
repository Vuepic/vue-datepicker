<template>
    <div class="dp__overlay" :id="id">
        <div class="dp__overlay_container">
            <div class="dp__overlay_row" v-for="(row, i) in items" :key="useKey(i)">
                <div
                    class="dp__overlay_col"
                    v-for="col in row"
                    :key="col.value"
                    @click="onClick(col.value)"
                    :id="col.value === modelValue ? 'selection-active' : null"
                    :class="col.value === modelValue ? 'dp__overlay_cell_active' : 'dp__overlay_cell'"
                >
                    {{ col.text }}
                </div>
            </div>
            <div :class="actionButtonClass" @click="$emit('toggle')"><slot name="button-icon" /></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
    import { SelectionGridProps, IDefaultSelect, DynamicClass } from '../interfaces';
    import { useScrollPosition, useKey } from '../utils/hooks';

    export default defineComponent({
        name: 'SelectionGrid',
        emits: ['update:modelValue', 'selected', 'toggle'],
        props: {
            items: { type: Array as PropType<IDefaultSelect[][]>, default: () => [] },
            modelValue: { type: [String, Number] as PropType<string | number>, default: null },
            id: { type: String as PropType<string>, default: 'dp__overlay' },
        },
        setup(props: SelectionGridProps, { emit }) {
            const scrollable = ref(false);
            const onClick = (val: string | number): void => {
                emit('update:modelValue', val);
                emit('selected');
            };

            onMounted(() => {
                useScrollPosition(props.id, 'selection-active');
                const elm = document.getElementById(props.id);
                if (elm) {
                    scrollable.value = elm.clientHeight < elm.scrollHeight;
                }
            });

            const actionButtonClass = computed(
                (): DynamicClass => ({
                    dp__button: true,
                    dp__overlay_action: true,
                    dp__over_action_scroll: scrollable.value,
                }),
            );

            return {
                useKey,
                onClick,
                actionButtonClass,
            };
        },
    });
</script>
