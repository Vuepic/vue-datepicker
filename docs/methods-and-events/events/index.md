---
lang: en-US
title: Events
description: List of emitted events from the datepicker
---

# Events

List of available events that are emitted on a specific action


## @update:model-value

This event is emitted when the value is selected. This is a `v-model` binding event

- Type: `(modelValue: ModelValue) => void`

:::info
For more information about `ModelValue` type, please refer to the [`model-value`](/props/general-configuration/#model-value) prop
:::


## @text-submit

When [`text-input`](/props/modes/#text-input) prop is set to `true` and `enterSubmit` is set to `true` in [`text-input-options`](/props/modes-configuration/#text-input-options), when
enter button is pressed, this event will be emitted

- Type: `() => void`

## @open

Emitted when the datepicker menu is opened

- Type: `() => void`

## @closed

Emitted when the datepicker menu is closed

- Type: `() => void`

## @cleared

Emitted when the value is cleared on the clear button

- Type: `() => void`

## @focus

Emitted when the input is focused

- Type: `() => void`

:::info
This is not a native event. This event is handled internally in the component
:::

## @blur

Emitted when the input is blurred

- Type: `() => void`

:::info
This is not a native event. This event is handled internally in the component
:::



## @internal-model-change

Emitted when the internal `model-value` is changed before selecting this date that will be set to `v-model`

- Type: `(internalModelValue: Date | Date[] | null | (Date | null)[], modelValue: ModelValue) => void`

:::info
- Internally, the library works with dates, for example, if you are using `month-picker`, the first value will be a `Date` object
- The second parameter is the internal value converted to [`model-value`](/props/general-configuration/#model-value) value
:::

## @flow-step

Emitted when the flow step is triggered

- Type: `(step: number) => void`

:::info

- Current logic will not emit an event on the first flow step
- Flow step will keep emitting even tho there are no more steps and just keep incrementing

Both of these will be handled in one of the upcoming releases
:::

## @update-month-year

Emitted when the month or year is changed

- Type: `(value: { instance: number, month: number, year: number }) => void`

## @invalid-select

Emitted when the selected value is not valid

- Type: `(value: Date | Date[]) => void`

## @invalid-fixed-range

Emitted when the clicked day in the `range` mode with `fixed-start` or `fixed-end` is not a valid date for selection

- Type: `(date: Date) => void`

## @tooltip-open

Emitted when marker tooltip is opened

Will have one param

- Type: `(marker: Marker) => void`

## @tooltip-close

Emitted when the marker tooltip is closed

- Type: `(marker: Marker) => void`

## @am-pm-change

Emitted when the `am / pm` button is clicked in time picker

- Type: `(value: 'AM' | 'PM') => void`

## @range-start

Emitted when the first date is selected in `range` mode

- Type: `(date: Date) => void`

## @range-end

Emitted when the second date is selected in `range` mode

- Type: `(date: Date) => void`

## @update:model-timezone-value

Emits a date or date range value in a given timezone

Emitted when `@update:model-value` is emitted if the [`timezone`](/props/modes/#timezone) `emitTimezone` prop is provided

Will have one param

- `Date | Date[]`: `v-model` value in a given timezone

## @date-update

Emits a date value when date is clicked on the calendar

## @invalid-date

Emits an event whenever an invalid date is clicked, such as disabled date, out of min or max range, etc.

- Type: `(date: Date) => void`

## @overlay-toggle

Emits an event whenever some overlay is opened

- Type: `(value: { open: boolean, overlay: PickerSection }) => void`

```ts
type PickerSection = 'month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds'
```

## @text-input

Emits when [`text-input`](/props/modes/#text-input) prop is enabled and input value is changed

- Type: `(event: Event, parsedDate: Date | null) => void`

:::info
- `event` - Propagated value from the `@input` event
- `parsedDate` - Result of a parsed date (returns `null` if unable to parse)
:::

## @invalid

Propagated `oninvalid` event from the input field

- Type: `(event: Event) => void`

:::info
- `event` - Propagated value from the `@invalid` event
  :::
