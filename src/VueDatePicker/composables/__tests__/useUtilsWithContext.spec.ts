import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useUtilsWithContext } from '@/composables/useUtilsWithContext';

// Mock the dependencies
vi.mock('@/composables/useContext.ts', () => {
    const rootProps: any = {
        yearRange: [2020, 2025],
        reverseYears: false,
    };

    return {
        useContext: () => ({
            rootProps,
        }),
    };
});

vi.mock('@/composables/useFormatter.ts', () => {
    return {
        useFormatter: () => ({
            formatMonth: (month: number) => {
                const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ];
                return months[month] || '';
            },
            formatYear: (year: number) => year.toString(),
        }),
    };
});

describe('useUtilsWithContext', () => {
    let utils: ReturnType<typeof useUtilsWithContext>;

    beforeEach(() => {
        utils = useUtilsWithContext();
    });

    describe('getMonths', () => {
        it('should return array of 12 months', () => {
            const months = utils.getMonths();

            expect(months).toHaveLength(12);
        });

        it('should return months with text and value properties', () => {
            const months = utils.getMonths();

            months.forEach((month, index) => {
                expect(month).toHaveProperty('text');
                expect(month).toHaveProperty('value');
                expect(month.value).toBe(index);
            });
        });

        it('should format month names correctly', () => {
            const months = utils.getMonths();

            expect(months[0]!.text).toBe('January');
            expect(months[0]!.value).toBe(0);
            expect(months[5]!.text).toBe('June');
            expect(months[5]!.value).toBe(5);
            expect(months[11]!.text).toBe('December');
            expect(months[11]!.value).toBe(11);
        });

        it('should have correct value range 0-11', () => {
            const months = utils.getMonths();
            const values = months.map((m) => m.value);

            expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        });

        it('should return all month names', () => {
            const months = utils.getMonths();
            const expectedMonths = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ];

            months.forEach((month, index) => {
                expect(month.text).toBe(expectedMonths[index]);
            });
        });
    });

    describe('getYears', () => {
        it('should return years based on yearRange prop', async () => {
            const years = utils.getYears();

            expect(years).toHaveLength(6); // 2020 to 2025 inclusive
        });

        it('should return years with text and value properties', () => {
            const years = utils.getYears();

            years.forEach((year) => {
                expect(year).toHaveProperty('text');
                expect(year).toHaveProperty('value');
                expect(typeof year.value).toBe('number');
            });
        });

        it('should include start year', () => {
            const years = utils.getYears();

            expect(years[0]!.value).toBe(2020);
            expect(years[0]!.text).toBe('2020');
        });

        it('should include end year', () => {
            const years = utils.getYears();

            expect(years[years.length - 1]!.value).toBe(2025);
            expect(years[years.length - 1]!.text).toBe('2025');
        });

        it('should include all years in range', () => {
            const years = utils.getYears();
            const values = years.map((y) => y.value);

            expect(values).toEqual([2020, 2021, 2022, 2023, 2024, 2025]);
        });

        it('should format years as strings', () => {
            const years = utils.getYears();

            years.forEach((year) => {
                expect(year.text).toBe(year.value.toString());
            });
        });
    });

    describe('getYears - reversed', () => {
        beforeEach(async () => {
            // Re-mock with reversed years
            vi.resetModules();
            vi.doMock('@/composables/useContext.ts', () => {
                const rootProps: any = {
                    yearRange: [2020, 2025],
                    reverseYears: true,
                };

                return {
                    useContext: () => ({
                        rootProps,
                    }),
                };
            });
        });

        it('should return reversed years when reverseYears is true', async () => {
            // Need to re-import to get the new mock
            const { useUtilsWithContext: useUtilsWithContextNew } = await import(
                '@/composables/useUtilsWithContext'
            );
            const utilsReversed = useUtilsWithContextNew();
            const years = utilsReversed.getYears();

            const values = years.map((y) => y.value);
            expect(values).toEqual([2025, 2024, 2023, 2022, 2021, 2020]);
        });
    });

    describe('getYears - different ranges', () => {
        it('should handle single year range', async () => {
            vi.resetModules();
            vi.doMock('@/composables/useContext.ts', () => {
                const rootProps: any = {
                    yearRange: [2024, 2024],
                    reverseYears: false,
                };

                return {
                    useContext: () => ({
                        rootProps,
                    }),
                };
            });

            const { useUtilsWithContext: useUtilsWithContextNew } = await import(
                '@/composables/useUtilsWithContext'
            );
            const utilsSingle = useUtilsWithContextNew();
            const years = utilsSingle.getYears();

            expect(years).toHaveLength(1);
            expect(years[0]!.value).toBe(2024);
        });

        it('should handle large year range', async () => {
            vi.resetModules();
            vi.doMock('@/composables/useContext.ts', () => {
                const rootProps: any = {
                    yearRange: [2000, 2050],
                    reverseYears: false,
                };

                return {
                    useContext: () => ({
                        rootProps,
                    }),
                };
            });

            const { useUtilsWithContext: useUtilsWithContextNew } = await import(
                '@/composables/useUtilsWithContext'
            );
            const utilsLarge = useUtilsWithContextNew();
            const years = utilsLarge.getYears();

            expect(years).toHaveLength(51); // 2000 to 2050 inclusive
            expect(years[0]!.value).toBe(2000);
            expect(years[50]!.value).toBe(2050);
        });
    });

    describe('Integration tests', () => {
        it('should work with getMonths and getYears together', () => {
            const months = utils.getMonths();
            const years = utils.getYears();

            expect(months).toHaveLength(12);
            expect(years.length).toBeGreaterThan(0);

            // Verify they can be used together
            const firstMonth = months[0];
            const firstYear = years[0];

            expect(firstMonth).toBeDefined();
            expect(firstYear).toBeDefined();
            expect(typeof firstMonth!.value).toBe('number');
            expect(typeof firstYear!.value).toBe('number');
        });

        it('should return consistent results on multiple calls', () => {
            const months1 = utils.getMonths();
            const months2 = utils.getMonths();

            expect(months1).toEqual(months2);

            const years1 = utils.getYears();
            const years2 = utils.getYears();

            expect(years1).toEqual(years2);
        });

        it('should have unique values', () => {
            const months = utils.getMonths();
            const monthValues = new Set(months.map((m) => m.value));

            expect(monthValues.size).toBe(12); // All unique

            const years = utils.getYears();
            const yearValues = new Set(years.map((y) => y.value));

            expect(yearValues.size).toBe(years.length); // All unique
        });

        it('should provide SelectItem interface', () => {
            const months = utils.getMonths();
            const years = utils.getYears();

            // Test that items conform to SelectItem interface
            [...months, ...years].forEach((item) => {
                expect(item).toHaveProperty('text');
                expect(item).toHaveProperty('value');
                expect(typeof item.text).toBe('string');
                expect(typeof item.value).toBe('number');
            });
        });
    });
});
