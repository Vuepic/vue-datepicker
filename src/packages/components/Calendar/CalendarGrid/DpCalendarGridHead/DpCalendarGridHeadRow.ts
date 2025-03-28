import { computed, defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';
import { useContext } from '@packages/composables/useContext.ts';
import { DpRootKey } from '@packages/components/DpRoot';

const props = {
    as: { type: String as PropType<string>, default: 'tr' },
};

export type DpCalendarHeadRowProps = ExtractPropTypes<typeof props>;

export const DpCalendarGridHeadRow = defineComponent({
    props,
    setup(props: DpCalendarHeadRowProps, { attrs, slots }) {
        const { props: injectedProps } = useContext(DpRootKey);

        const dayNameIntlMapper = (day: number) => {
            const index = day - 1;
            const formattedDate = new Intl.DateTimeFormat(injectedProps.locale, {
                weekday: 'long',
                timeZone: 'UTC',
            }).format(new Date(`2017-01-0${day}T00:00:00+00:00`));

            // Arabic locale requires different slice indexes to get correct abbreviation
            return injectedProps.locale === 'ar'
                ? { label: formattedDate.slice(2, 5), index, name: formattedDate }
                : { label: formattedDate.slice(0, 2), index, name: formattedDate };
        };

        const getDayNames = () => {
            const daysArray = [1, 2, 3, 4, 5, 6, 7];
            const days = daysArray.map(dayNameIntlMapper);

            const beforeWeekStart = days.slice(0, +injectedProps.weekStart);
            const afterWeekStart = days.slice(+injectedProps.weekStart + 1, days.length);

            return [days[+injectedProps.weekStart]].concat(...afterWeekStart).concat(...beforeWeekStart);
        };

        const weekDays = computed(() => getDayNames());

        return () => h(props.as, { ...attrs }, slots.default?.({ days: weekDays.value }));
    },
});
