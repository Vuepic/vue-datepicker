---
lang: en-US
title: Props - Timezone
description: Datepicker timezone configuration
---

# Timezone

Configure the timezone of the datepicker

Under the hood, the datepicker uses the `TZDate` object, which is timezone-aware `Date` object from the `@date-fns/tz` library

:::info
The timezone is only available in datepicker mode
:::

## timezone

Display the dates in a given timezone. Datepicker always work in the clients `timezone`, but when the `timezone` prop is provided,
the `Date` object will adjust offset in the hours, remaining in the client timezone

:::tip
Providing props that rely on the `Date` object such as `min-date`, `max-date`, `disabled-dates` and so on, will be converted to a provided timezone.
:::

- Type: `string | TimeZoneConfig`
- Default: 
```ts
{
  timezone: undefined,
  exactMatch: false,
  dateInTz: undefined,
  emitTimezone: undefined,
  convertModel: true
}
```

```ts
interface TimezoneConfig {
  timezone?: string;
  exactMatch?: boolean;
  dateInTz?: string;
  emitTimezone?: string;
  convertModel?: boolean;
}
```

:::info
`timezone` property is the same as `timezone` string prop type, define a timezone for the datepicker
:::

### `exactMatch`

When enabled, it will not convert date to the given `timezone`. If you are providing the `Date` object, it will remain as is, while `UTC` string, will be converted to the local `timezone`

- Default: `false`

### `dateInTz`

This property is checked only if `exactMatch` is set to `true`, meaning that if you provide the date from some other `timezone` other than local, and want that date to be the same,
you'll need to provide the original date timezone

- Default: `undefined`

### `emitTimezone`

Enables the [`@update:model-timezone-value`](/methods-and-events/events/#update-model-timezone-value) event that will dispatch a `v-model` value in a given timezone


### `convertModel`

Used to explicitly enable or disable `v-model` value conversion in a given timezone