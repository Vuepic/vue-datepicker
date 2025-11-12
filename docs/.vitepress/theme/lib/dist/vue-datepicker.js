import { h as Ve, reactive as Nt, ref as de, computed as j, watch as st, provide as sn, readonly as un, inject as cn, nextTick as Ge, onMounted as Ne, onUnmounted as $t, defineComponent as We, useTemplateRef as Re, createElementBlock as K, openBlock as O, renderSlot as se, createCommentVNode as U, unref as t, createElementVNode as Pe, normalizeClass as be, createBlock as Se, withModifiers as Wt, createVNode as tt, normalizeProps as Je, mergeProps as et, Fragment as ke, normalizeStyle as Xe, createTextVNode as ct, toDisplayString as Ke, onBeforeUpdate as dn, withDirectives as Zt, renderList as Ye, vShow as ea, withCtx as we, withKeys as vn, Transition as St, createSlots as Le, useSlots as ht, resolveDynamicComponent as wa, guardReactiveProps as ot, mergeDefaults as Oa, toValue as fn, toRef as Ma, Teleport as mn } from "vue";
import { unrefElement as Qe, useSwipe as pn, onClickOutside as hn } from "@vueuse/core";
import { useFloating as gn, autoUpdate as yn, offset as bn, flip as kn, shift as wn, arrow as _a } from "@floating-ui/vue";
import { set as _e, setYear as lt, parse as ka, getYear as ye, getMonth as Te, getSeconds as pt, getMinutes as dt, getHours as ut, isValid as ta, addMonths as Dt, subMonths as Lt, differenceInCalendarDays as Dn, eachDayOfInterval as xa, getDay as Mn, isBefore as Tt, isAfter as _t, isEqual as At, format as Ze, subDays as _n, addDays as mt, startOfWeek as Da, endOfWeek as Ba, startOfMonth as An, setMonth as Pn, isDate as Tn, endOfYear as Ia, startOfYear as Et, addYears as Va, subYears as Ea, differenceInYears as $n, add as Fa, sub as Sn, setMilliseconds as Rn, setSeconds as Cn, getWeek as Yn, getISOWeek as On, roundToNearestMinutes as xn, isSameQuarter as Aa, eachQuarterOfInterval as Bn, startOfQuarter as In, endOfQuarter as Pa, getQuarter as Ta } from "date-fns";
import { TZDate as Vn } from "@date-fns/tz";
import { TZDate as so } from "@date-fns/tz";
function Ht() {
  return Ve(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Ve("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Ve("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ve("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ve("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function En() {
  return Ve(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Ve("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Ve("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function Na() {
  return Ve(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Ve("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Wa() {
  return Ve(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Ve("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function La() {
  return Ve(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Ve("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Ve("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Ha() {
  return Ve(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Ve("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Ka() {
  return Ve(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Ve("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const Oe = Nt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), pa = de(null), Jt = de(!1), ha = de(!1), ga = de(!1), ya = de(!1), He = de(0), Ie = de(0), gt = () => {
  const e = j(() => Jt.value ? [...Oe.selectionGrid, Oe.actionRow].filter((v) => v.length) : ha.value ? [
    ...Oe.timePicker[0],
    ...Oe.timePicker[1],
    ya.value ? [] : [pa.value],
    Oe.actionRow
  ].filter((v) => v.length) : ga.value ? [...Oe.monthPicker, Oe.actionRow] : [Oe.monthYear, ...Oe.calendar, Oe.time, Oe.actionRow].filter((v) => v.length)), k = (v) => {
    He.value = v ? He.value + 1 : He.value - 1;
    let Y = null;
    e.value[Ie.value] && (Y = e.value[Ie.value][He.value]), !Y && e.value[Ie.value + (v ? 1 : -1)] ? (Ie.value = Ie.value + (v ? 1 : -1), He.value = v ? 0 : e.value[Ie.value].length - 1) : Y || (He.value = v ? He.value - 1 : He.value + 1);
  }, p = (v) => {
    if (Ie.value === 0 && !v || Ie.value === e.value.length && v) return;
    Ie.value = v ? Ie.value + 1 : Ie.value - 1, e.value[Ie.value] ? e.value[Ie.value] && !e.value[Ie.value][He.value] && He.value !== 0 && (He.value = e.value[Ie.value].length - 1) : Ie.value = v ? Ie.value - 1 : Ie.value + 1;
  }, r = (v) => {
    let Y = null;
    e.value[Ie.value] && (Y = e.value[Ie.value][He.value]), Y ? Y.focus({ preventScroll: !Jt.value }) : He.value = v ? He.value - 1 : He.value + 1;
  }, o = () => {
    k(!0), r(!0);
  }, s = () => {
    k(!1), r(!1);
  }, n = () => {
    p(!1), r(!0);
  }, l = () => {
    p(!0), r(!0);
  }, d = (v, Y) => {
    Oe[Y] = v;
  }, B = (v, Y) => {
    Oe[Y] = v;
  }, A = () => {
    He.value = 0, Ie.value = 0;
  };
  return {
    buildMatrix: d,
    buildMultiLevelMatrix: B,
    setTimePickerBackRef: (v) => {
      pa.value = v;
    },
    setSelectionGrid: (v) => {
      Jt.value = v, A(), v || (Oe.selectionGrid = []);
    },
    setTimePicker: (v, Y = !1) => {
      ha.value = v, ya.value = Y, A(), v || (Oe.timePicker[0] = [], Oe.timePicker[1] = []);
    },
    setTimePickerElements: (v, Y = 0) => {
      Oe.timePicker[Y] = v;
    },
    arrowRight: o,
    arrowLeft: s,
    arrowUp: n,
    arrowDown: l,
    clearArrowNav: () => {
      Oe.monthYear = [], Oe.calendar = [], Oe.time = [], Oe.actionRow = [], Oe.selectionGrid = [], Oe.timePicker[0] = [], Oe.timePicker[1] = [], Jt.value = !1, ha.value = !1, ya.value = !1, ga.value = !1, A(), pa.value = null;
    },
    setMonthPicker: (v) => {
      ga.value = v, A();
    },
    refSets: Oe
    // exposed for testing
  };
};
var rt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(rt || {}), Mt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Mt || {}), qe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(qe || {});
const Fn = ["timestamp", "date", "iso"];
var Ue = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Ue || {}), xe = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(xe || {}), Pt = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Pt || {});
const Nn = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: k, isValidDate: p } = at(), { convertType: r, errorMapper: o } = Ee(), {
    getDate: s,
    rootEmit: n,
    state: l,
    rootProps: d,
    inputValue: B,
    defaults: { textInput: A, range: I, multiDates: b, timeConfig: i, formats: M },
    modelValue: c,
    updateTime: T
  } = $e(), { setTime: v, getWeekFromDate: Y } = je(), { formatSelectedDate: V, formatForTextInput: P } = bt();
  st(
    c,
    (y, $) => {
      n("internal-model-change", c.value), JSON.stringify($ ?? {}) !== JSON.stringify(y ?? {}) && T();
    },
    { deep: !0 }
  ), st(I, (y, $) => {
    y.enabled !== $.enabled && (c.value = null);
  }), st(
    () => M.value.input,
    () => {
      ee();
    }
  );
  const F = (y) => y ? d.modelType ? ge(y) : {
    hours: ut(y),
    minutes: dt(y),
    seconds: i.value.enableSeconds ? pt(y) : 0
  } : null, q = (y) => d.modelType ? ge(y) : { month: Te(y), year: ye(y) }, R = (y) => Array.isArray(y) ? b.value.enabled ? y.map(($) => w($, lt(s(), $))) : k(
    () => [
      lt(s(), y[0]),
      y[1] ? lt(s(), y[1]) : e(I.value.partialRange)
    ],
    I.value.enabled
  ) : lt(s(), +y), w = (y, $) => (typeof y == "string" || typeof y == "number") && d.modelType ? fe(y) : $, u = (y) => Array.isArray(y) ? [
    w(y[0], v(y[0])),
    w(y[1], v(y[1]))
  ] : w(y, v(y)), D = (y) => {
    const $ = _e(s(), { date: 1 });
    return Array.isArray(y) ? b.value.enabled ? y.map(
      (ie) => w(ie, _e($, { month: +ie.month, year: +ie.year }))
    ) : k(
      () => [
        w(y[0], _e($, { month: +y[0].month, year: +y[0].year })),
        w(
          y[1],
          y[1] ? _e($, { month: +y[1].month, year: +y[1].year }) : e(I.value.partialRange)
        )
      ],
      I.value.enabled
    ) : w(y, _e($, { month: +y.month, year: +y.year }));
  }, N = (y) => {
    if (Array.isArray(y))
      return y.map(($) => fe($));
    throw new Error(o.dateArr("multi-dates"));
  }, Q = (y) => {
    if (Array.isArray(y) && I.value.enabled) {
      const $ = y[0], ie = y[1];
      return [
        s(Array.isArray($) ? $[0] : null),
        Array.isArray(ie) && ie.length ? s(ie[0]) : null
      ];
    }
    return s(y[0]);
  }, ae = (y) => d.modelAuto ? Array.isArray(y) ? [fe(y[0]), fe(y[1])] : d.autoApply ? [fe(y)] : [fe(y), null] : Array.isArray(y) ? k(
    () => y[1] ? [
      fe(y[0]),
      y[1] ? fe(y[1]) : e(I.value.partialRange)
    ] : [fe(y[0])],
    I.value.enabled
  ) : fe(y), Z = () => {
    Array.isArray(c.value) && I.value.enabled && c.value.length === 1 && c.value.push(e(I.value.partialRange));
  }, ve = () => {
    const y = c.value;
    return [
      ge(y[0]),
      y[1] ? ge(y[1]) : e(I.value.partialRange)
    ];
  }, he = () => Array.isArray(c.value) ? c.value[1] ? ve() : ge(r(c.value[0])) : [], L = () => (c.value || []).map((y) => ge(y)), J = (y = !1) => (y || Z(), d.modelAuto ? he() : b.value.enabled ? L() : Array.isArray(c.value) ? k(() => ve(), I.value.enabled) : ge(r(c.value))), W = (y) => !y || Array.isArray(y) && !y.length ? null : d.timePicker ? u(r(y)) : d.monthPicker ? D(r(y)) : d.yearPicker ? R(r(y)) : b.value.enabled ? N(r(y)) : d.weekPicker ? Q(r(y)) : ae(r(y)), oe = (y) => {
    if (l.isTextInputDate) return;
    const $ = W(y);
    p(r($)) ? (c.value = r($), ee()) : (c.value = null, B.value = "");
  }, z = () => c.value ? b.value.enabled ? c.value.map((y) => V(y)).join("; ") : A.value.enabled ? P() : V(c.value) : "", ee = () => {
    B.value = z();
  }, fe = (y) => d.modelType ? Fn.includes(d.modelType) ? s(y) : d.modelType === "format" && typeof M.value.input == "string" ? ka(y, M.value.input, s(), { locale: d.locale }) : ka(y, d.modelType, s(), { locale: d.locale }) : s(y), ge = (y) => y ? d.modelType ? d.modelType === "timestamp" ? +y : d.modelType === "iso" ? y.toISOString() : d.modelType === "format" && typeof M.value.input == "string" ? V(y) : V(y, d.modelType) : y : null, De = (y) => {
    n("update:model-value", y);
  }, Ae = (y) => Array.isArray(c.value) ? b.value.enabled ? c.value.map(($) => y($)) : [y(c.value[0]), c.value[1] ? y(c.value[1]) : null] : y(r(c.value)), re = () => {
    if (Array.isArray(c.value)) {
      const y = Y(c.value[0], d.weekStart), $ = c.value[1] ? Y(c.value[1], d.weekStart) : [];
      return [y.map((ie) => s(ie)), $.map((ie) => s(ie))];
    }
    return Y(c.value, d.weekStart).map((y) => s(y));
  }, H = (y) => De(r(Ae(y))), E = () => n("update:model-value", re());
  return {
    checkBeforeEmit: () => c.value ? I.value.enabled ? I.value.partialRange ? c.value.length >= 1 : c.value.length === 2 : !!c.value : !1,
    parseExternalModelValue: oe,
    formatInputValue: ee,
    emitModelValue: () => (ee(), d.monthPicker ? H(q) : d.timePicker ? H(F) : d.yearPicker ? H(ye) : d.weekPicker ? E() : De(J()))
  };
}, it = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] },
  { name: "menu-header", use: ["menu"] }
], $a = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Wn = {
  all: () => it,
  root: () => it.concat($a),
  monthYear: () => it.filter((e) => e.use.includes("month-year")),
  input: () => $a,
  timePicker: () => it.filter((e) => e.use.includes("time")),
  action: () => it.filter((e) => e.use.includes("action")),
  calendar: () => it.filter((e) => e.use.includes("calendar")),
  menu: () => it.filter((e) => e.use.includes("menu")),
  shared: () => it.filter((e) => e.use.includes("shared")),
  yearMode: () => it.filter((e) => e.use.includes("year-mode"))
}, yt = () => ({
  mapSlots: (k, p, r) => {
    const o = [];
    for (const s of Wn[p]())
      k[s.name] && o.push(s.name);
    if (r?.length)
      for (const s of r)
        s.slot && o.push(s.slot);
    return o;
  }
}), ja = Symbol("ContextKey"), Ln = (e, k) => {
  const { setTimeModelValue: p } = Ee(), r = Yr(e), o = de(null), s = Nt({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1
  }), n = r.getDate(/* @__PURE__ */ new Date()), l = de(""), d = de([{ month: Te(n), year: ye(n) }]), B = Nt({ hours: 0, minutes: 0, seconds: 0 });
  p(B, null, n, r.range.value.enabled);
  const A = j({
    get: () => o.value,
    set: (c) => {
      o.value = c;
    }
  }), I = j(
    () => (c) => d.value[c] ? d.value[c].month : 0
  ), b = j(
    () => (c) => d.value[c] ? d.value[c].year : 0
  ), i = (c, T) => {
    s[c] = T;
  }, M = () => {
    p(B, A.value, n, r.range.value.enabled);
  };
  sn(ja, {
    rootProps: e,
    defaults: r,
    modelValue: A,
    state: un(s),
    rootEmit: k,
    calendars: d,
    month: I,
    year: b,
    time: B,
    today: n,
    inputValue: l,
    setState: i,
    updateTime: M,
    getDate: r.getDate
  });
}, $e = () => {
  const e = cn(ja);
  if (!e)
    throw new Error("Can't use context");
  return e;
}, Kt = () => {
  const {
    defaults: { transitions: e }
  } = $e(), k = j(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), p = j(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: k, showTransition: !!e.value, menuTransition: p };
}, jt = (e) => {
  const {
    today: k,
    time: p,
    modelValue: r,
    defaults: { range: o }
  } = $e(), { setTimeModelValue: s } = Ee();
  st(
    o,
    (n, l) => {
      n.enabled !== l.enabled && s(p, r.value, k, o.value.enabled);
    },
    { deep: !0 }
  ), st(
    r,
    (n, l) => {
      e && JSON.stringify(n ?? {}) !== JSON.stringify(l ?? {}) && e();
    },
    { deep: !0 }
  );
}, at = () => {
  const {
    defaults: { safeDates: e, range: k, multiDates: p, filters: r, timeConfig: o },
    rootProps: s,
    getDate: n
  } = $e(), { getMapKeyType: l, getMapDate: d, errorMapper: B, convertType: A } = Ee(), { isDateBefore: I, isDateAfter: b, isDateEqual: i, resetDate: M, getDaysInBetween: c, setTimeValue: T, getTimeObj: v, setTime: Y } = je(), V = (m) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(n(m)) : !!d(m, e.value.disabledDates) : !1, P = (m) => e.value.maxDate ? s.yearPicker ? ye(m) > ye(e.value.maxDate) : b(m, e.value.maxDate) : !1, F = (m) => e.value.minDate ? s.yearPicker ? ye(m) < ye(e.value.minDate) : I(m, e.value.minDate) : !1, q = (m) => {
    if (!m) return !1;
    const x = P(m), g = F(m), C = V(m), a = r.value.months.map((Ce) => +Ce).includes(Te(m)), f = r.value.weekDays?.length ? r.value.weekDays.some((Ce) => +Ce === Mn(m)) : !1, S = N(m), te = ye(m), ne = te < +s.yearRange[0] || te > +s.yearRange[1];
    return !(x || g || C || a || ne || f || S);
  }, R = (m, x) => I(...E(e.value.minDate, m, x)) || i(...E(e.value.minDate, m, x)), w = (m, x) => b(...E(e.value.maxDate, m, x)) || i(...E(e.value.maxDate, m, x)), u = (m, x, g) => {
    let C = !1;
    return e.value.maxDate && g && w(m, x) && (C = !0), e.value.minDate && !g && R(m, x) && (C = !0), C;
  }, D = (m, x, g, C) => {
    let G = !1;
    return C && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? G = u(m, x, g) : (e.value.minDate && R(m, x) || e.value.maxDate && w(m, x)) && (G = !0) : G = !0, G;
  }, N = (m) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !d(
    m,
    e.value.allowedDates,
    l(s.monthPicker, s.yearPicker)
  ) : !1, Q = (m) => !q(m), ae = (m) => k.value.noDisabledRange ? !xa({ start: m[0], end: m[1] }).some((g) => Q(g)) : !0, Z = (m) => {
    if (m) {
      const x = ye(m);
      return x >= +s.yearRange[0] && x <= s.yearRange[1];
    }
    return !0;
  }, ve = (m, x) => !!(Array.isArray(m) && m[x] && (k.value.maxRange || k.value.minRange) && Z(m[x])), he = (m, x, g = 0) => {
    if (ve(x, g) && Z(m)) {
      const C = Dn(m, x[g]), G = c(x[g], m), a = G.length === 1 ? 0 : G.filter((S) => Q(S)).length, f = Math.abs(C) - (k.value.minMaxRawRange ? 0 : a);
      if (k.value.minRange && k.value.maxRange)
        return f >= +k.value.minRange && f <= +k.value.maxRange;
      if (k.value.minRange) return f >= +k.value.minRange;
      if (k.value.maxRange) return f <= +k.value.maxRange;
    }
    return !0;
  }, L = () => !o.value.enableTimePicker || s.monthPicker || s.yearPicker || o.value.ignoreTimeValidation, J = (m) => Array.isArray(m) ? [m[0] ? T(m[0]) : null, m[1] ? T(m[1]) : null] : T(m), W = (m, x, g) => x ? m.find(
    (C) => +C.hours === ut(x) && C.minutes === "*" ? !0 : +C.minutes === dt(x) && +C.hours === ut(x)
  ) && g : !1, oe = (m, x, g) => {
    const [C, G] = m, [a, f] = x;
    return !W(C, a, g) && !W(G, f, g) && g;
  }, z = (m, x) => {
    const g = Array.isArray(x) ? x : [x];
    return Array.isArray(s.disabledTimes) ? Array.isArray(s.disabledTimes[0]) ? oe(s.disabledTimes, g, m) : !g.some((C) => W(s.disabledTimes, C, m)) : m;
  }, ee = (m, x) => {
    const g = Array.isArray(x) ? [v(x[0]), x[1] ? v(x[1]) : void 0] : v(x), C = !s.disabledTimes(g);
    return m && C;
  }, fe = (m, x) => s.disabledTimes ? Array.isArray(s.disabledTimes) ? z(x, m) : ee(x, m) : x, ge = (m) => {
    let x = !0;
    if (!m || L()) return !0;
    const g = !e.value.minDate && !e.value.maxDate ? J(m) : m;
    return (s.maxTime || e.value.maxDate) && (x = ue(
      s.maxTime,
      e.value.maxDate,
      "max",
      A(g),
      x
    )), (s.minTime || e.value.minDate) && (x = ue(
      s.minTime,
      e.value.minDate,
      "min",
      A(g),
      x
    )), fe(m, x);
  }, De = (m) => {
    if (!s.monthPicker) return !0;
    let x = !0;
    const g = n(M(m));
    if (e.value.minDate && e.value.maxDate) {
      const C = n(M(e.value.minDate)), G = n(M(e.value.maxDate));
      return b(g, C) && I(g, G) || i(g, C) || i(g, G);
    }
    if (e.value.minDate) {
      const C = n(M(e.value.minDate));
      x = b(g, C) || i(g, C);
    }
    if (e.value.maxDate) {
      const C = n(M(e.value.maxDate));
      x = I(g, C) || i(g, C);
    }
    return x;
  }, Ae = j(() => (m) => !o.value.enableTimePicker || o.value.ignoreTimeValidation ? !0 : ge(m)), re = j(() => (m) => s.monthPicker ? Array.isArray(m) && (k.value.enabled || p.value.enabled) ? !m.filter((g) => !De(g)).length : De(m) : !0), H = (m, x, g) => {
    if (!x || g && !e.value.maxDate || !g && !e.value.minDate) return !1;
    const C = g ? Dt(m, 1) : Lt(m, 1), G = [Te(C), ye(C)];
    return g ? !w(...G) : !R(...G);
  }, E = (m, x, g) => [_e(n(m), { date: 1 }), _e(n(), { month: x, year: g, date: 1 })], ce = (m, x, g, C) => {
    if (!m) return !0;
    if (C) {
      const G = g === "max" ? Tt(m, x) : _t(m, x), a = { seconds: 0, milliseconds: 0 };
      return G || At(_e(m, a), _e(x, a));
    }
    return g === "max" ? m.getTime() <= x.getTime() : m.getTime() >= x.getTime();
  }, ue = (m, x, g, C, G) => {
    if (Array.isArray(C)) {
      const f = y(m, C[0], x), S = y(m, C[1], x);
      return ce(C[0], f, g, !!x) && ce(C[1], S, g, !!x) && G;
    }
    const a = y(m, C, x);
    return ce(C, a, g, !!x) && G;
  }, y = (m, x, g) => m ? Y(m, x) : n(g ?? x);
  return {
    isDisabled: Q,
    validateDate: q,
    validateMonthYearInRange: D,
    isDateRangeAllowed: ae,
    checkMinMaxRange: he,
    isValidTime: ge,
    validateMonthYear: H,
    validateMinDate: R,
    validateMaxDate: w,
    isValidDate: (m) => Array.isArray(m) ? ta(m[0]) && (m[1] ? ta(m[1]) : !0) : m ? ta(m) : !1,
    checkPartialRangeValue: (m) => {
      if (m) return null;
      throw new Error(B.prop("partial-range"));
    },
    checkRangeEnabled: (m, x) => {
      if (x) return m();
      throw new Error(B.prop("range"));
    },
    checkMinMaxValue: (m, x, g) => {
      const C = g != null, G = x != null;
      if (!C && !G) return !1;
      const a = +g, f = +x;
      return C && G ? +m > a || +m < f : C ? +m > a : G ? +m < f : !1;
    },
    isTimeValid: Ae,
    isMonthValid: re
  };
}, Hn = (e) => {
  const {
    rootEmit: k,
    rootProps: p,
    defaults: { timeConfig: r, flow: o }
  } = $e(), s = de(0), n = Nt({
    [Mt.timePicker]: !r.value.enableTimePicker || p.timePicker || p.monthPicker,
    [Mt.calendar]: !1,
    [Mt.header]: !1
  }), l = j(() => p.monthPicker || p.timePicker), d = (i) => {
    if (o.value?.steps?.length) {
      if (!i && l.value) return b();
      n[i] = !0, Object.keys(n).filter((M) => !n[M]).length || b();
    }
  }, B = () => {
    o.value?.steps?.length && s.value !== -1 && (s.value += 1, k("flow-step", s.value), b()), o.value?.steps?.length === s.value && Ge().then(() => A());
  }, A = () => {
    s.value = -1;
  }, I = (i, M, ...c) => {
    o.value?.steps[s.value] === i && e.value && e.value[M]?.(...c);
  }, b = (i = 0) => {
    i && (s.value += i), I(qe.month, "toggleMonthPicker", !0), I(qe.year, "toggleYearPicker", !0), I(qe.calendar, "toggleTimePicker", !1, !0), I(qe.time, "toggleTimePicker", !0, !0);
    const M = o.value?.steps[s.value];
    (M === qe.hours || M === qe.minutes || M === qe.seconds) && I(M, "toggleTimePicker", !0, !0, M);
  };
  return { childMount: d, updateFlowStep: B, resetFlow: A, handleFlow: b, flowStep: s };
};
function ba(e) {
  return (k = {}) => {
    const p = k.width ? String(k.width) : e.defaultWidth;
    return e.formats[p] || e.formats[e.defaultWidth];
  };
}
function It(e) {
  return (k, p) => {
    const r = p?.context ? String(p.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const n = e.defaultFormattingWidth || e.defaultWidth, l = p?.width ? String(p.width) : n;
      o = e.formattingValues[l] || e.formattingValues[n];
    } else {
      const n = e.defaultWidth, l = p?.width ? String(p.width) : e.defaultWidth;
      o = e.values[l] || e.values[n];
    }
    const s = e.argumentCallback ? e.argumentCallback(k) : k;
    return o[s];
  };
}
function Vt(e) {
  return (k, p = {}) => {
    const r = p.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = k.match(o);
    if (!s)
      return null;
    const n = s[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(l) ? jn(l, (I) => I.test(n)) : (
      // [TODO] -- I challenge you to fix the type
      Kn(l, (I) => I.test(n))
    );
    let B;
    B = e.valueCallback ? e.valueCallback(d) : d, B = p.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      p.valueCallback(B)
    ) : B;
    const A = k.slice(n.length);
    return { value: B, rest: A };
  };
}
function Kn(e, k) {
  for (const p in e)
    if (Object.prototype.hasOwnProperty.call(e, p) && k(e[p]))
      return p;
}
function jn(e, k) {
  for (let p = 0; p < e.length; p++)
    if (k(e[p]))
      return p;
}
function zn(e) {
  return (k, p = {}) => {
    const r = k.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = k.match(e.parsePattern);
    if (!s) return null;
    let n = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    n = p.valueCallback ? p.valueCallback(n) : n;
    const l = k.slice(o.length);
    return { value: n, rest: l };
  };
}
const Un = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, qn = (e, k, p) => {
  let r;
  const o = Un[e];
  return typeof o == "string" ? r = o : k === 1 ? r = o.one : r = o.other.replace("{{count}}", k.toString()), p?.addSuffix ? p.comparison && p.comparison > 0 ? "in " + r : r + " ago" : r;
}, Qn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Gn = (e, k, p, r) => Qn[e], Jn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Xn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Zn = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, er = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, tr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ar = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, nr = (e, k) => {
  const p = Number(e), r = p % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return p + "st";
      case 2:
        return p + "nd";
      case 3:
        return p + "rd";
    }
  return p + "th";
}, rr = {
  ordinalNumber: nr,
  era: It({
    values: Jn,
    defaultWidth: "wide"
  }),
  quarter: It({
    values: Xn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: It({
    values: Zn,
    defaultWidth: "wide"
  }),
  day: It({
    values: er,
    defaultWidth: "wide"
  }),
  dayPeriod: It({
    values: tr,
    defaultWidth: "wide",
    formattingValues: ar,
    defaultFormattingWidth: "wide"
  })
}, lr = /^(\d+)(th|st|nd|rd)?/i, or = /\d+/i, sr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ur = {
  any: [/^b/i, /^(a|c)/i]
}, ir = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, cr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, dr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, vr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, fr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, mr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, pr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, hr = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, gr = {
  ordinalNumber: zn({
    matchPattern: lr,
    parsePattern: or,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Vt({
    matchPatterns: sr,
    defaultMatchWidth: "wide",
    parsePatterns: ur,
    defaultParseWidth: "any"
  }),
  quarter: Vt({
    matchPatterns: ir,
    defaultMatchWidth: "wide",
    parsePatterns: cr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Vt({
    matchPatterns: dr,
    defaultMatchWidth: "wide",
    parsePatterns: vr,
    defaultParseWidth: "any"
  }),
  day: Vt({
    matchPatterns: fr,
    defaultMatchWidth: "wide",
    parsePatterns: mr,
    defaultParseWidth: "any"
  }),
  dayPeriod: Vt({
    matchPatterns: pr,
    defaultMatchWidth: "any",
    parsePatterns: hr,
    defaultParseWidth: "any"
  })
}, yr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, br = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, kr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, wr = {
  date: ba({
    formats: yr,
    defaultWidth: "full"
  }),
  time: ba({
    formats: br,
    defaultWidth: "full"
  }),
  dateTime: ba({
    formats: kr,
    defaultWidth: "full"
  })
}, Dr = {
  code: "en-US",
  formatDistance: qn,
  formatLong: wr,
  formatRelative: Gn,
  localize: rr,
  match: gr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Sa = {
  noDisabledRange: !1,
  showLastInRange: !0,
  minMaxRawRange: !1,
  partialRange: !0,
  disableTimeRangeValidation: !1,
  maxRange: void 0,
  minRange: void 0,
  autoRange: void 0,
  fixedStart: !1,
  fixedEnd: !1
}, Mr = {
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0,
  arrowLeft: void 0,
  keepViewOnOffsetClick: !1,
  timeArrowHoldThreshold: 0,
  shadowDom: !1,
  mobileBreakpoint: 600,
  setDateOnMenuClose: !1,
  escClose: !0,
  spaceConfirm: !0,
  monthChangeOnArrows: !0,
  monthChangeOnScroll: !0
}, Ra = {
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: "open",
  selectOnFocus: !1,
  rangeSeparator: " - ",
  escClose: !0,
  format: void 0,
  maskFormat: void 0
}, _r = {
  dates: [],
  years: [],
  months: [],
  quarters: [],
  weeks: [],
  weekdays: [],
  options: { highlightDisabled: !1 }
}, Ar = {
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  selectBtnLabel: "Select",
  cancelBtnLabel: "Cancel",
  nowBtnLabel: "Now",
  nowBtnRound: void 0
}, Pr = {
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (e) => `Increment ${e}`,
  decrementValue: (e) => `Decrement ${e}`,
  openTpOverlay: (e) => `Open ${e} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  clearInput: "Clear value",
  calendarIcon: "Calendar icon",
  timePicker: "Time picker",
  monthPicker: (e) => `Month picker${e ? " overlay" : ""}`,
  yearPicker: (e) => `Year picker${e ? " overlay" : ""}`,
  timeOverlay: (e) => `${e} overlay`
}, Ca = {
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down"
}, Tr = {
  weekDays: [],
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] }
}, $r = {
  month: "LLL",
  year: "yyyy",
  weekDay: "EEEEEE",
  quarter: "MMMM",
  day: "d",
  input: void 0,
  preview: void 0
}, Sr = {
  enableTimePicker: !0,
  ignoreTimeValidation: !1,
  enableSeconds: !1,
  enableMinutes: !0,
  is24: !0,
  noHoursOverlay: !1,
  noMinutesOverlay: !1,
  noSecondsOverlay: !1,
  hoursGridIncrement: 1,
  minutesGridIncrement: 5,
  secondsGridIncrement: 5,
  hoursIncrement: 1,
  minutesIncrement: 1,
  secondsIncrement: 1,
  timePickerInline: !1,
  startTime: void 0
}, Rr = {
  flowStep: 0,
  menuWrapRef: null,
  collapse: !1
}, Cr = {
  weekStart: 1,
  yearRange: () => [1900, 2100],
  ui: () => ({}),
  locale: () => Dr,
  dark: !1,
  transitions: !0,
  hideNavigation: () => [],
  vertical: !1,
  hideMonthYearSelect: !1,
  disableYearSelect: !1,
  autoApply: !1,
  disabledDates: () => [],
  hideOffsetDates: !1,
  noToday: !1,
  markers: () => [],
  presetDates: () => [],
  preventMinMaxNavigation: !1,
  reverseYears: !1,
  weekPicker: !1,
  arrowNavigation: !1,
  monthPicker: !1,
  yearPicker: !1,
  quarterPicker: !1,
  timePicker: !1,
  modelAuto: !1,
  multiDates: !1,
  range: !1,
  inline: !1,
  sixWeeks: !1,
  focusStartDate: !1,
  yearFirst: !1,
  loading: !1,
  centered: !1
}, Ya = {
  name: void 0,
  required: !1,
  autocomplete: "off",
  state: void 0,
  clearable: !0,
  alwaysClearable: !1,
  hideInputIcon: !1,
  id: void 0,
  inputmode: "none"
}, Xt = {
  type: "local",
  hideOnOffsetDates: !1,
  label: "W"
}, Yr = (e) => {
  const { getMapKey: k, getMapKeyType: p, getTimeObjFromCurrent: r } = Ee();
  function o(L, J) {
    let W;
    return e.timezone ? W = new Vn(L ?? /* @__PURE__ */ new Date(), e.timezone) : W = L ? new Date(L) : /* @__PURE__ */ new Date(), J ? _e(W, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : W;
  }
  const s = () => {
    const L = ae.value.enableSeconds ? ":ss" : "", J = ae.value.enableMinutes ? ":mm" : "";
    return ae.value.is24 ? `HH${J}${L}` : `hh${J}${L} aa`;
  }, n = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${q.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : ae.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (L) => r(o(), L, ae.value.enableSeconds), d = () => u.value.enabled ? ae.value.startTime && Array.isArray(ae.value.startTime) ? [l(ae.value.startTime[0]), l(ae.value.startTime[1])] : null : ae.value.startTime && !Array.isArray(ae.value.startTime) ? l(ae.value.startTime) : null, B = (L) => L ? typeof L == "boolean" ? L ? 2 : 0 : Math.max(+L, 2) : 0, A = (L) => {
    const J = p(e.monthPicker, e.yearPicker);
    return new Map(
      L.map((W) => {
        const oe = o(W, I.value);
        return [k(oe, J), oe];
      })
    );
  }, I = j(() => e.monthPicker || e.yearPicker || e.quarterPicker), b = j(() => {
    const L = typeof e.multiCalendars == "object" && e.multiCalendars, J = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...J, count: B(!1) };
    const W = L ? e.multiCalendars : {}, oe = L ? W.count ?? !0 : e.multiCalendars, z = B(oe);
    return Object.assign(J, W, { count: z });
  }), i = j(() => d()), M = j(() => ({ ...Pr, ...e.ariaLabels })), c = j(() => ({ ...Tr, ...e.filters })), T = j(() => typeof e.transitions == "boolean" ? e.transitions ? Ca : !1 : { ...Ca, ...e.transitions }), v = j(() => ({ ...Ar, ...e.actionRow })), Y = j(() => typeof e.textInput == "object" ? {
    ...Ra,
    ...e.textInput,
    format: typeof e.textInput.format == "string" ? e.textInput.format : N.value.input,
    pattern: e.textInput.format ?? N.value.input,
    enabled: !0
  } : {
    ...Ra,
    format: N.value.input,
    pattern: N.value.input,
    enabled: e.textInput
  }), V = j(() => {
    const L = { input: !1 };
    return typeof e.inline == "object" ? { ...L, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...L
    };
  }), P = j(() => ({ ...Mr, ...e.config })), F = j(() => typeof e.highlight == "function" ? e.highlight : {
    ..._r,
    ...e.highlight
  }), q = j(() => typeof e.weekNumbers == "object" ? {
    type: e.weekNumbers?.type ?? Xt.type,
    hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Xt.hideOnOffsetDates,
    label: e.weekNumbers.label ?? Xt.label
  } : e.weekNumbers ? Xt : void 0), R = j(() => typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
    enabled: !!e.multiDates,
    limit: e.multiDates?.limit ? +e.multiDates.limit : null,
    dragSelect: e.multiDates?.dragSelect ?? !0
  }), w = j(() => ({
    minDate: e.minDate ? o(e.minDate) : null,
    maxDate: e.maxDate ? o(e.maxDate) : null,
    disabledDates: Array.isArray(e.disabledDates) ? A(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? A(e.allowedDates) : null,
    highlight: typeof F.value == "object" && Array.isArray(F.value.dates) ? A(F.value.dates) : F.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((L) => {
        const J = o(L.date);
        return [k(J, Pt.DATE), L];
      })
    ) : null
  })), u = j(() => typeof e.range == "object" ? { enabled: !0, ...Sa, ...e.range } : {
    enabled: e.range,
    ...Sa
  }), D = j(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((J) => {
        const W = J, oe = e.ui[W];
        if (W === "dayClass") return [W, e.ui[W]];
        const z = typeof e.ui[W] == "string" ? { [oe]: !0 } : Object.fromEntries(oe.map((ee) => [ee, !0]));
        return [J, z];
      })
    )
  })), N = j(() => ({
    ...$r,
    ...e.formats,
    input: e.formats?.input ?? n(),
    preview: e.formats?.preview ?? n()
  })), Q = j(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), ae = j(() => ({ ...Sr, ...e.timeConfig })), Z = j(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), ve = j(() => {
    const L = Y.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Ya, inputmode: L, ...e.inputAttrs } : { ...Ya, inputmode: L };
  }), he = j(() => ({
    offset: e.floating?.offset ?? 10,
    arrow: e.floating?.arrow ?? !0,
    strategy: e.floating?.strategy ?? void 0,
    placement: e.floating?.placement ?? void 0
  }));
  return {
    transitions: T,
    multiCalendars: b,
    startTime: i,
    ariaLabels: M,
    filters: c,
    actionRow: v,
    textInput: Y,
    inline: V,
    config: P,
    highlight: F,
    weekNumbers: q,
    range: u,
    safeDates: w,
    multiDates: R,
    ui: D,
    formats: N,
    teleport: Q,
    timeConfig: ae,
    flow: Z,
    inputAttrs: ve,
    floatingConfig: he,
    getDate: o
  };
}, Ee = () => {
  const e = (P, F) => Ze(P, F ?? Pt.DATE), k = (P, F) => P ? Pt.MONTH_AND_YEAR : F ? Pt.YEAR : Pt.DATE, p = (P, F, q) => F.get(e(P, q)), r = (P) => P, o = (P) => P === 0 ? P : !P || Number.isNaN(+P) ? null : +P, s = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), n = (P, F) => {
    let q = [...document.querySelectorAll(s())];
    q = q.filter((w) => !P.contains(w) || "datepicker-instance" in w.dataset);
    const R = q.indexOf(P);
    if (R >= 0 && (F ? R - 1 >= 0 : R + 1 <= q.length))
      return q[R + (F ? -1 : 1)];
  }, l = (P) => String(P).padStart(2, "0"), d = (P, F) => P?.querySelector(`[data-dp-element="${F}"]`), B = (P, F, q = !1) => {
    P && F.allowStopPropagation && (q && P.stopImmediatePropagation(), P.stopPropagation());
  }, A = (P, F, q = !1, R) => {
    if (P.key === xe.enter || P.key === xe.space)
      return q && P.preventDefault(), F();
    if (R) return R(P);
  }, I = (P, F) => {
    F.allowStopPropagation && P.stopPropagation(), F.allowPreventDefault && P.preventDefault();
  }, b = (P) => {
    if (P)
      return [...P.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, i = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, M = (P) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][P], c = (P) => {
    const F = [], q = (R) => R.filter((w) => !!w);
    for (let R = 0; R < P.length; R += 3) {
      const w = [P[R], P[R + 1], P[R + 2]];
      F.push(q(w));
    }
    return F;
  }, T = {
    prop: (P) => `"${P}" prop must be enabled!`,
    dateArr: (P) => `You need to use array as "model-value" binding in order to support "${P}"`
  }, v = (P, F, q, R, w) => {
    const u = {
      hours: ut,
      minutes: dt,
      seconds: pt
    };
    if (!F) return R ? [u[P](q), u[P](q)] : u[P](q);
    if (Array.isArray(F) && R) {
      const D = F[0] ?? q, N = F[1];
      return [u[P](D), N ? u[P](N) : w[P][1] ?? u[P](q)];
    }
    return u[P](F);
  };
  return {
    getMapKey: e,
    getMapKeyType: k,
    getMapDate: p,
    convertType: r,
    getNumVal: o,
    findNextFocusableElement: n,
    padZero: l,
    getElWithin: d,
    checkStopPropagation: B,
    checkKeyDown: A,
    handleEventPropagation: I,
    findFocusableEl: b,
    isTouchDevice: i,
    hoursToAmPmHours: M,
    getGroupedList: c,
    setTimeModelValue: (P, F, q, R) => {
      P.hours = v("hours", F, q, R, P), P.minutes = v("minutes", F, q, R, P), P.seconds = v("seconds", F, q, R, P);
    },
    getTimeObjFromCurrent: (P, F, q) => {
      const R = {
        hours: ut(P),
        minutes: dt(P),
        seconds: q ? pt(P) : 0
      };
      return Object.assign(R, F);
    },
    errorMapper: T
  };
}, je = () => {
  const { getDate: e } = $e(), { getMapDate: k, getGroupedList: p } = Ee(), r = (u, D) => {
    if (!u) return e();
    const N = e(u), Q = _e(N, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return D ? An(Q) : Q;
  }, o = (u, D) => {
    const N = e(D);
    return _e(N, {
      hours: +(u.hours ?? ut(N)),
      minutes: +(u.minutes ?? dt(N)),
      seconds: +(u.seconds ?? pt(N)),
      milliseconds: 0
    });
  }, s = (u, D) => {
    const N = Da(u, { weekStartsOn: +D }), Q = Ba(u, { weekStartsOn: +D });
    return [N, Q];
  }, n = (u, D) => !u || !D ? !1 : Tt(r(u), r(D)), l = (u, D) => !u || !D ? !1 : At(r(u), r(D)), d = (u, D) => !u || !D ? !1 : _t(r(u), r(D)), B = (u, D, N) => u?.[0] && u?.[1] ? d(N, u[0]) && n(N, u[1]) : u?.[0] && D ? d(N, u[0]) && n(N, D) || n(N, u[0]) && d(N, D) : !1, A = (u, D) => {
    const N = d(u, D) ? D : u, Q = d(D, u) ? D : u;
    return xa({ start: N, end: Q });
  }, I = (u) => `dp-${Ze(u, "yyyy-MM-dd")}`, b = (u) => r(_e(e(u), { date: 1 })), i = (u, D) => {
    if (D) {
      const N = ye(e(D));
      if (N > u) return 12;
      if (N === u) return Te(e(D));
    }
  }, M = (u, D) => {
    if (D) {
      const N = ye(e(D));
      return N < u ? -1 : N === u ? Te(e(D)) : void 0;
    }
  }, c = (u) => {
    if (u) return ye(e(u));
  }, T = (u) => ({
    hours: ut(u),
    minutes: dt(u),
    seconds: pt(u)
  });
  return {
    resetDateTime: r,
    groupListAndMap: (u, D) => p(u).map((N) => N.map((Q) => {
      const { active: ae, disabled: Z, isBetween: ve, highlighted: he } = D(Q);
      return {
        ...Q,
        active: ae,
        disabled: Z,
        className: {
          dp__overlay_cell_active: ae,
          dp__overlay_cell: !ae,
          dp__overlay_cell_disabled: Z,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: Z && ae,
          dp__cell_in_between: ve,
          "dp--highlighted": he
        }
      };
    })),
    setTime: o,
    getWeekFromDate: s,
    isDateAfter: d,
    isDateBefore: n,
    isDateBetween: B,
    isDateEqual: l,
    getDaysInBetween: A,
    getCellId: I,
    resetDate: b,
    getMinMonth: i,
    getMaxMonth: M,
    getYearFromDate: c,
    getTimeObj: T,
    setTimeValue: (u) => _e(e(), T(u)),
    sanitizeTime: (u, D, N) => D && (N || N === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((Q) => Q === D ? [Q, N] : [Q, Number.isNaN(+u[Q]) ? void 0 : +u[Q]])
    ) : {
      hours: Number.isNaN(+u.hours) ? void 0 : +u.hours,
      minutes: Number.isNaN(+u.minutes) ? void 0 : +u.minutes,
      seconds: Number.isNaN(+(u.seconds ?? "")) ? void 0 : +u.seconds
    },
    getBeforeAndAfterInRange: (u, D) => {
      const N = _n(r(D), u), Q = mt(r(D), u);
      return { before: N, after: Q };
    },
    isModelAuto: (u) => Array.isArray(u) ? !!u[0] && !!u[1] : !1,
    matchDate: (u, D) => u ? D ? D instanceof Map ? !!k(u, D) : D(e(u)) : !1 : !0,
    checkHighlightMonth: (u, D, N) => typeof u == "function" ? u({ month: D, year: N }) : u.months.some((Q) => Q.month === D && Q.year === N),
    checkHighlightYear: (u, D) => typeof u == "function" ? u(D) : u.years.includes(D)
  };
}, aa = () => {
  const {
    defaults: { config: e }
  } = $e(), k = de(0);
  Ne(() => {
    p(), globalThis.addEventListener("resize", p, { passive: !0 });
  }), $t(() => {
    globalThis.removeEventListener("resize", p);
  });
  const p = () => {
    k.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: j(() => k.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, bt = () => {
  const {
    getDate: e,
    state: k,
    modelValue: p,
    rootProps: r,
    defaults: { formats: o, textInput: s }
  } = $e(), n = (T) => Ze(lt(e(), T), o.value.year, { locale: r.locale }), l = (T) => Ze(Pn(e(), T), o.value.month, { locale: r.locale }), d = (T) => Ze(e(`2017-01-0${T}T00:00:00+00:00`), o.value.weekDay, { locale: r.locale }), B = (T) => Ze(T, o.value.quarter, { locale: r.locale }), A = (T, v) => [T, v].map((Y) => B(Y)).join("-"), I = (T) => Ze(T, o.value.day, { locale: r.locale }), b = (T, v, Y) => {
    const V = Y ? o.value.preview : o.value.input;
    if (!T) return "";
    if (typeof V == "function") return V(T);
    const P = v ?? V, F = { locale: r.locale };
    return Array.isArray(T) ? `${Ze(T[0], P, F)}${r.modelAuto && !T[1] ? "" : s.value.rangeSeparator}${T[1] ? Ze(T[1], P, F) : ""}` : Ze(T, P, F);
  }, i = () => {
    const T = (v) => Ze(v, s.value.format);
    return Array.isArray(p.value) ? `${T(p.value[0])} ${s.value.rangeSeparator} ${p.value[1] ? T(p.value[1]) : ""}` : "";
  };
  return {
    formatYear: n,
    formatMonth: l,
    formatWeekDay: d,
    formatQuarter: B,
    formatSelectedDate: b,
    formatForTextInput: () => k.isInputFocused && p.value ? Array.isArray(p.value) ? i() : Ze(p.value, s.value.format) : b(p.value),
    formatPreview: (T) => b(T, void 0, !0),
    formatQuarterText: A,
    formatDay: I
  };
}, na = () => {
  const { rootProps: e } = $e(), { formatYear: k, formatMonth: p } = bt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => ({
      text: p(n),
      value: n
    })),
    getYears: () => {
      const n = [];
      for (let l = +e.yearRange[0]; l <= +e.yearRange[1]; l++)
        n.push({ value: +l, text: k(l) });
      return e.reverseYears ? n.reverse() : n;
    },
    isOutOfYearRange: (n) => n < +e.yearRange[0] || n > +e.yearRange[1]
  };
}, Or = (e) => ({
  openMenu: () => e.value?.openMenu(),
  closeMenu: () => e.value?.closeMenu(),
  selectDate: () => e.value?.selectDate(),
  clearValue: () => e.value?.clearValue(),
  formatInputValue: () => e.value?.formatInputValue(),
  updateInternalModelValue: (b) => e.value?.updateInternalModelValue(b),
  setMonthYear: (b, i) => e.value?.setMonthYear(b, i),
  parseModel: () => e.value?.parseModel(),
  switchView: (b, i) => e.value?.switchView(b, i),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu()
}), xr = () => {
  const {
    getDate: e,
    rootProps: k,
    defaults: { textInput: p, startTime: r, timeConfig: o }
  } = $e(), { getTimeObjFromCurrent: s } = Ee(), n = de(!1), l = j(
    () => Array.isArray(r.value) ? r.value[0] : r.value ?? s(e(), {}, o.value.enableSeconds)
  ), d = (b, i, M) => {
    const c = ka(b, i.slice(0, b.length), e(), { locale: k.locale });
    return ta(c) && Tn(c) ? M || n.value ? c : _e(c, {
      hours: +l.value.hours,
      minutes: +l.value.minutes,
      seconds: +(l.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: n,
    parseFreeInput: (b, i) => {
      if (typeof p.value.pattern == "string")
        return d(b, p.value.pattern, i);
      if (Array.isArray(p.value.pattern)) {
        let M = null;
        for (const c of p.value.pattern)
          if (M = d(b, c, i), M)
            break;
        return M;
      }
      return typeof p.value.pattern == "function" ? p.value.pattern(b) : null;
    },
    applyMaxValues: (b, i) => {
      const M = {
        MM: 12,
        DD: 31,
        hh: 23,
        mm: 59,
        ss: 59
      };
      let c = "", T = 0;
      for (let v = 0; v < i.length; v++) {
        const Y = i[v], V = Y.length, P = b.slice(T, T + V);
        if (!P) break;
        if (P.length < V)
          c += P;
        else {
          let F = Number.parseInt(P, 10);
          M[Y] && F > M[Y] && (F = M[Y]), c += F.toString().padStart(V, "0").slice(0, V);
        }
        T += V;
      }
      return c;
    },
    createMaskedValue: (b, i) => {
      const M = /(YYYY|MM|DD|hh|mm|ss)/g, c = [...i.matchAll(M)].map((P) => P[0]), T = i.replace(M, "|").split("|").filter(Boolean), v = c.map((P) => P.length);
      let Y = "", V = 0;
      for (let P = 0; P < c.length; P++) {
        const F = v[P], q = b.slice(V, V + F);
        if (!q) break;
        Y += q, q.length === F && T[P] && (Y += T[P]), V += F;
      }
      return Y;
    }
  };
}, Br = {
  key: 1,
  class: "dp__input_wrap"
}, Ir = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Vr = {
  key: 2,
  class: "dp--clear-btn"
}, Er = ["aria-label"], Fr = /* @__PURE__ */ We({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 }
  },
  emits: ["clear", "open", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus", "blur", "real-blur"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, {
      rootEmit: s,
      inputValue: n,
      rootProps: l,
      defaults: { textInput: d, ariaLabels: B, inline: A, config: I, range: b, multiDates: i, ui: M, inputAttrs: c }
    } = $e(), { checkMinMaxRange: T, isValidDate: v } = at(), { parseFreeInput: Y, textPasted: V, createMaskedValue: P, applyMaxValues: F } = xr(), { checkKeyDown: q, checkStopPropagation: R } = Ee(), w = Re("dp-input"), u = de(null), D = de(!1), N = j(
      () => ({
        dp__pointer: !l.disabled && !l.readonly && !d.value.enabled,
        dp__disabled: l.disabled,
        dp__input_readonly: !d.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !c.value.clearable,
        dp__input_icon_pad: !c.value.hideInputIcon,
        dp__input_valid: typeof c.value.state == "boolean" ? c.value.state : !1,
        dp__input_invalid: typeof c.value.state == "boolean" ? !c.value.state : !1,
        dp__input_focus: D.value || o.isMenuOpen,
        dp__input_reg: !d.value.enabled,
        ...M.value.input
      })
    ), Q = () => {
      r("set-input-date", null), c && l.autoApply && (r("set-empty-date"), u.value = null);
    }, ae = (H) => {
      const { rangeSeparator: E } = d.value, [ce, ue] = H.split(`${E}`);
      if (ce) {
        const y = Y(ce.trim(), n.value), $ = ue ? Y(ue.trim(), n.value) : void 0;
        if (_t(y, $)) return;
        const ie = y && $ ? [y, $] : [y];
        T($, ie, 0) && (u.value = y ? ie : null);
      }
    }, Z = () => {
      V.value = !0;
    }, ve = (H) => {
      if (b.value.enabled)
        ae(H);
      else if (i.value.enabled) {
        const E = H.split(";");
        u.value = E.map((ce) => Y(ce.trim())).filter((ce) => !!ce);
      } else
        u.value = Y(H, n.value);
    }, he = (H) => {
      const E = typeof H == "string" ? H : H.target?.value, ce = d?.value?.maskFormat;
      let ue = E;
      if (typeof ce == "string") {
        const y = /(YYYY|MM|DD|hh|mm|ss)/g, ie = [...ce.matchAll(y)].map((m) => m[0]), le = E.replace(/\D/g, ""), h = F(le, ie);
        ue = P(h, ce);
      }
      ue === "" ? Q() : (d.value.openMenu && !o.isMenuOpen && r("open"), ve(ue), r("set-input-date", u.value)), V.value = !1, n.value = ue, s("text-input", H, u.value);
    }, L = (H) => {
      d.value.enabled ? (ve(H.target.value), d.value.enterSubmit && v(u.value) && n.value !== "" ? (r("set-input-date", u.value, !0), u.value = null) : d.value.enterSubmit && n.value === "" && (u.value = null, r("clear"))) : oe(H);
    }, J = (H, E) => {
      d.value.enabled && d.value.tabSubmit && !E && ve(H.target.value), d.value.tabSubmit && v(u.value) && n.value !== "" ? (r("set-input-date", u.value, !0, !0), u.value = null) : d.value.tabSubmit && n.value === "" && (u.value = null, r("clear"));
    }, W = () => {
      D.value = !0, r("focus"), Ge().then(() => {
        d.value.enabled && d.value.selectOnFocus && w.value?.select();
      });
    }, oe = (H) => {
      if (R(H, I.value, !0), d.value.enabled && d.value.openMenu && !A.value.input) {
        if (d.value.openMenu === "open" && !o.isMenuOpen) return r("open");
        if (d.value.openMenu === "toggle") return r("toggle");
      } else d.value.enabled || r("toggle");
    }, z = () => {
      r("real-blur"), D.value = !1, (!o.isMenuOpen || A.value.enabled && A.value.input) && r("blur"), l.autoApply && d.value.enabled && u.value && !o.isMenuOpen && (r("set-input-date", u.value), r("select-date"), u.value = null);
    }, ee = (H) => {
      R(H, I.value, !0), r("clear");
    }, fe = () => {
      r("close");
    }, ge = (H) => {
      if (H.key === "Tab" && J(H), H.key === "Enter" && L(H), H.key === "Escape" && d.value.escClose && fe(), !d.value.enabled) {
        if (H.code === "Tab") return;
        H.preventDefault();
      }
    }, De = () => {
      w.value?.focus({ preventScroll: !0 });
    }, Ae = (H) => {
      u.value = H;
    }, re = (H) => {
      H.key === xe.tab && J(H, !0);
    };
    return k({
      focusInput: De,
      setParsedDate: Ae
    }), (H, E) => (O(), K("div", { onClick: oe }, [
      H.$slots.trigger && !H.$slots["dp-input"] && !t(A).enabled ? se(H.$slots, "trigger", { key: 0 }) : U("", !0),
      !H.$slots.trigger && (!t(A).enabled || t(A).input) ? (O(), K("div", Br, [
        H.$slots["dp-input"] && !H.$slots.trigger && (!t(A).enabled || t(A).enabled && t(A).input) ? se(H.$slots, "dp-input", {
          key: 0,
          value: t(n),
          isMenuOpen: e.isMenuOpen,
          onInput: he,
          onEnter: L,
          onTab: J,
          onClear: ee,
          onBlur: z,
          onKeypress: ge,
          onPaste: Z,
          onFocus: W,
          openMenu: () => H.$emit("open"),
          closeMenu: () => H.$emit("close"),
          toggleMenu: () => H.$emit("toggle")
        }) : U("", !0),
        H.$slots["dp-input"] ? U("", !0) : (O(), K("input", {
          key: 1,
          id: t(c).id,
          ref: "dp-input",
          "data-test-id": "dp-input",
          name: t(c).name,
          class: be(N.value),
          inputmode: t(c).inputmode,
          placeholder: t(l).placeholder,
          disabled: t(l).disabled,
          readonly: t(l).readonly,
          required: t(c).required,
          value: t(n),
          autocomplete: t(c).autocomplete,
          "aria-label": t(B).input,
          "aria-disabled": t(l).disabled || void 0,
          "aria-invalid": t(c).state === !1 ? !0 : void 0,
          onInput: he,
          onBlur: z,
          onFocus: W,
          onKeypress: ge,
          onKeydown: E[0] || (E[0] = (ce) => ge(ce)),
          onPaste: Z,
          onInvalid: E[1] || (E[1] = (ce) => t(s)("invalid", ce))
        }, null, 42, Ir)),
        Pe("div", {
          onClick: E[4] || (E[4] = (ce) => r("toggle"))
        }, [
          H.$slots["input-icon"] && !t(c).hideInputIcon ? (O(), K("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: E[2] || (E[2] = (ce) => r("toggle"))
          }, [
            se(H.$slots, "input-icon")
          ])) : U("", !0),
          !H.$slots["input-icon"] && !t(c).hideInputIcon && !H.$slots["dp-input"] ? (O(), Se(t(Ht), {
            key: 1,
            "aria-label": t(B)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: E[3] || (E[3] = (ce) => r("toggle"))
          }, null, 8, ["aria-label"])) : U("", !0)
        ]),
        H.$slots["clear-icon"] && (t(c).alwaysClearable || t(n) && t(c).clearable && !t(l).disabled && !t(l).readonly) ? (O(), K("span", Vr, [
          se(H.$slots, "clear-icon", { clear: ee })
        ])) : U("", !0),
        !H.$slots["clear-icon"] && (t(c).alwaysClearable || t(c).clearable && t(n) && !t(l).disabled && !t(l).readonly) ? (O(), K("button", {
          key: 3,
          "aria-label": t(B)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: E[5] || (E[5] = (ce) => t(q)(ce, () => ee(ce), !0, re)),
          onClick: E[6] || (E[6] = Wt((ce) => ee(ce), ["prevent"]))
        }, [
          tt(t(En), { class: "dp__input_icons" })
        ], 40, Er)) : U("", !0)
      ])) : U("", !0)
    ]));
  }
}), Nr = {
  ref: "action-row",
  class: "dp__action_row"
}, Wr = ["title"], Lr = {
  ref: "action-buttons-container",
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, Hr = ["disabled"], Kr = /* @__PURE__ */ We({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { default: 0 }
  },
  emits: ["close-picker", "select-date", "select-now"],
  setup(e, { emit: k }) {
    const p = k, r = e, {
      rootEmit: o,
      rootProps: s,
      modelValue: n,
      defaults: { actionRow: l, multiCalendars: d, inline: B, range: A, multiDates: I, formats: b }
    } = $e(), { isTimeValid: i, isMonthValid: M } = at(), { buildMatrix: c } = gt(), { formatPreview: T } = bt(), { checkKeyDown: v, convertType: Y } = Ee(), V = Re("cancel-btn"), P = Re("select-btn"), F = Re("action-buttons-container"), q = Re("action-row"), R = de(!1), w = de({});
    Ne(() => {
      s.arrowNavigation && c([Qe(V), Qe(P)], "actionRow"), u(), globalThis.addEventListener("resize", u);
    }), $t(() => {
      globalThis.removeEventListener("resize", u);
    });
    const u = () => {
      R.value = !1, setTimeout(() => {
        const J = F.value?.getBoundingClientRect(), W = q.value?.getBoundingClientRect();
        J && W && (w.value.maxWidth = `${W.width - J.width - 20}px`), R.value = !0;
      }, 0);
    }, D = j(() => A.value.enabled && !A.value.partialRange && n.value ? n.value.length === 2 : !0), N = j(
      () => !i.value(n.value) || !M.value(n.value) || !D.value
    ), Q = () => {
      const J = b.value.preview;
      return s.timePicker || s.monthPicker, J(Y(n.value));
    }, ae = () => {
      const J = n.value;
      return d.value.count > 0 ? `${T(J[0])} - ${T(J[1])}` : [T(J[0]), T(J[1])];
    }, Z = j(() => !n.value || !r.menuMount ? "" : typeof b.value.preview == "string" ? Array.isArray(n.value) ? n.value.length === 2 && n.value[1] ? ae() : I.value.enabled ? n.value.map((J) => `${T(J)}`) : s.modelAuto ? `${T(n.value[0])}` : `${T(n.value[0])} -` : T(n.value) : Q()), ve = () => I.value.enabled ? "; " : " - ", he = j(
      () => Array.isArray(Z.value) ? Z.value.join(ve()) : Z.value
    ), L = () => {
      i.value(n.value) && M.value(n.value) && D.value ? p("select-date") : o("invalid-select");
    };
    return (J, W) => (O(), K("div", Nr, [
      J.$slots["action-row"] ? se(J.$slots, "action-row", Je(et({ key: 0 }, {
        modelValue: t(n),
        disabled: N.value,
        selectDate: () => J.$emit("select-date"),
        closePicker: () => J.$emit("close-picker")
      }))) : (O(), K(ke, { key: 1 }, [
        t(l).showPreview ? (O(), K("div", {
          key: 0,
          class: "dp__selection_preview",
          title: he.value,
          style: Xe(w.value)
        }, [
          J.$slots["action-preview"] && R.value ? se(J.$slots, "action-preview", {
            key: 0,
            value: t(n)
          }) : U("", !0),
          !J.$slots["action-preview"] && R.value ? (O(), K(ke, { key: 1 }, [
            ct(Ke(he.value), 1)
          ], 64)) : U("", !0)
        ], 12, Wr)) : U("", !0),
        Pe("div", Lr, [
          J.$slots["action-buttons"] ? se(J.$slots, "action-buttons", {
            key: 0,
            value: t(n)
          }) : U("", !0),
          J.$slots["action-buttons"] ? U("", !0) : (O(), K(ke, { key: 1 }, [
            !t(B).enabled && t(l).showCancel ? (O(), K("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: W[0] || (W[0] = (oe) => J.$emit("close-picker")),
              onKeydown: W[1] || (W[1] = (oe) => t(v)(oe, () => J.$emit("close-picker")))
            }, Ke(t(l).cancelBtnLabel), 545)) : U("", !0),
            t(l).showNow ? (O(), K("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: W[2] || (W[2] = (oe) => J.$emit("select-now")),
              onKeydown: W[3] || (W[3] = (oe) => t(v)(oe, () => J.$emit("select-now")))
            }, Ke(t(l).nowBtnLabel), 33)) : U("", !0),
            t(l).showSelect ? (O(), K("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: N.value,
              "data-test-id": "select-button",
              onKeydown: W[4] || (W[4] = (oe) => t(v)(oe, () => L())),
              onClick: L
            }, Ke(t(l).selectBtnLabel), 41, Hr)) : U("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), ra = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: k }
  } = $e(), p = j(() => (s) => e.hideNavigation?.includes(s)), r = j(() => (s) => k.value.count ? k.value.solo ? !0 : s === 0 : !0), o = j(() => (s) => k.value.count ? k.value.solo ? !0 : s === k.value.count - 1 : !0);
  return { hideNavigationButtons: p, showLeftIcon: r, showRightIcon: o };
}, jr = ["role", "aria-label", "tabindex"], zr = { class: "dp__selection_grid_header" }, Ur = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], qr = ["aria-label"], zt = /* @__PURE__ */ We({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    useRelative: { type: Boolean },
    height: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    overlayLabel: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: k, emit: p }) {
    const { setSelectionGrid: r, buildMultiLevelMatrix: o, setMonthPicker: s } = gt(), n = p, l = e, {
      rootProps: d,
      defaults: { ariaLabels: B, textInput: A, config: I }
    } = $e(), { hideNavigationButtons: b } = ra(), { handleEventPropagation: i, convertType: M, checkKeyDown: c, checkStopPropagation: T, getElWithin: v, findFocusableEl: Y } = Ee(), V = Re("toggle-button"), P = Re("overlay-container"), F = Re("grid-wrap"), q = de(!1), R = de(null), w = de([]), u = de(), D = de(0);
    dn(() => {
      R.value = null;
    }), Ne(() => {
      Ge().then(() => J()), l.noOverlayFocus || Q(), N(!0);
    }), $t(() => N(!1));
    const N = (E) => {
      d.arrowNavigation && (l.headerRefs?.length ? s(E) : r(E));
    }, Q = () => {
      const E = Qe(F);
      E && (A.value.enabled || (R.value ? R.value?.focus({ preventScroll: !0 }) : E.focus({ preventScroll: !0 })), q.value = E.clientHeight < E.scrollHeight);
    }, ae = j(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !l.useRelative,
        "dp--overlay-relative": l.useRelative
      })
    ), Z = j(
      () => l.useRelative ? { height: `${l.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), ve = j(() => ({
      dp__overlay_col: !0
    })), he = j(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: q.value,
        dp__button_bottom: l.isLast
      })
    ), L = j(() => ({
      dp__overlay_container: !0,
      dp__container_flex: l.items?.length <= 6,
      dp__container_block: l.items?.length > 6
    }));
    st(
      () => l.items,
      () => J(!1),
      { deep: !0 }
    );
    const J = (E = !0) => {
      Ge().then(() => {
        const ce = Qe(R), ue = Qe(F), y = Qe(V), $ = Qe(P), ie = y ? y.getBoundingClientRect().height : 0;
        ue && (ue.getBoundingClientRect().height ? D.value = ue.getBoundingClientRect().height - ie : D.value = I.value.modeHeight - ie), ce && $ && E && ($.scrollTop = ce.offsetTop - $.offsetTop - (D.value / 2 - ce.getBoundingClientRect().height) - ie);
      });
    }, W = (E) => {
      E.disabled || n("selected", E.value);
    }, oe = () => {
      n("toggle"), n("reset-flow");
    }, z = (E) => {
      I.value.escClose && (oe(), i(E, I.value));
    }, ee = (E, ce, ue, y) => {
      E && ((ce.active || ce.value === l.focusValue) && (R.value = E), d.arrowNavigation && (Array.isArray(w.value[ue]) ? w.value[ue][y] = E : w.value[ue] = [E], fe()));
    }, fe = () => {
      const E = l.headerRefs?.length ? [l.headerRefs].concat(w.value) : w.value.concat([l.skipButtonRef ? [] : [V.value]]);
      o(M(E), l.headerRefs?.length ? "monthPicker" : "selectionGrid");
    }, ge = (E) => {
      d.arrowNavigation || T(E, I.value, !0);
    }, De = (E) => {
      u.value = E, n("hover-value", E);
    }, Ae = () => {
      if (oe(), !l.isLast) {
        const E = v(l.menuWrapRef ?? null, "action-row");
        E && Y(E)?.focus();
      }
    }, re = (E) => {
      switch (E.key) {
        case xe.esc:
          return z(E);
        case xe.arrowLeft:
          return ge(E);
        case xe.arrowRight:
          return ge(E);
        case xe.arrowUp:
          return ge(E);
        case xe.arrowDown:
          return ge(E);
        default:
          return;
      }
    }, H = (E) => {
      if (E.key === xe.enter) return oe();
      if (E.key === xe.tab) return Ae();
    };
    return k({ focusGrid: Q }), (E, ce) => (O(), K("div", {
      ref: "grid-wrap",
      class: be(ae.value),
      style: Xe(Z.value),
      role: e.useRelative ? void 0 : "dialog",
      "aria-label": e.overlayLabel,
      tabindex: e.useRelative ? void 0 : "0",
      onKeydown: re,
      onClick: ce[0] || (ce[0] = Wt(() => {
      }, ["prevent"]))
    }, [
      Pe("div", {
        ref: "overlay-container",
        class: be(L.value),
        style: Xe({ "--dp-overlay-height": `${D.value}px` }),
        role: "grid"
      }, [
        Pe("div", zr, [
          se(E.$slots, "header")
        ]),
        E.$slots.overlay ? se(E.$slots, "overlay", { key: 0 }) : (O(!0), K(ke, { key: 1 }, Ye(e.items, (ue, y) => (O(), K("div", {
          key: y,
          class: be(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
          role: "row"
        }, [
          (O(!0), K(ke, null, Ye(ue, ($, ie) => (O(), K("div", {
            key: $.value,
            ref_for: !0,
            ref: (le) => ee(le, $, y, ie),
            role: "gridcell",
            class: be(ve.value),
            "aria-selected": $.active || void 0,
            "aria-disabled": $.disabled || void 0,
            tabindex: "0",
            "data-test-id": $.text,
            onClick: Wt((le) => W($), ["prevent"]),
            onKeydown: (le) => t(c)(le, () => W($), !0),
            onMouseover: (le) => De($.value)
          }, [
            Pe("div", {
              class: be($.className)
            }, [
              E.$slots.item ? se(E.$slots, "item", {
                key: 0,
                item: $
              }) : U("", !0),
              E.$slots.item ? U("", !0) : (O(), K(ke, { key: 1 }, [
                ct(Ke($.text), 1)
              ], 64))
            ], 2)
          ], 42, Ur))), 128))
        ], 2))), 128))
      ], 6),
      E.$slots["button-icon"] ? Zt((O(), K("button", {
        key: 0,
        ref: "toggle-button",
        type: "button",
        "aria-label": t(B)?.toggleOverlay,
        class: be(he.value),
        tabindex: "0",
        onClick: oe,
        onKeydown: H
      }, [
        se(E.$slots, "button-icon")
      ], 42, qr)), [
        [ea, !t(b)(e.type)]
      ]) : U("", !0)
    ], 46, jr));
  }
}), Qr = ["data-dp-mobile"], la = /* @__PURE__ */ We({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: k }
    } = $e(), { isMobile: p } = aa(), r = j(
      () => k.value.count > 0 ? [...new Array(k.value.count).keys()] : [0]
    );
    return (o, s) => (O(), K("div", {
      class: be({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: t(k).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": t(p)
    }, [
      se(o.$slots, "default", {
        instances: r.value,
        wrapClass: { dp__instance_calendar: t(k).count > 0 }
      })
    ], 10, Qr));
  }
}), Gr = ["data-dp-element", "aria-label", "aria-disabled"], Ft = /* @__PURE__ */ We({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: k }) {
    const { checkKeyDown: p } = Ee(), r = k, o = Re("arrow-btn");
    return Ne(() => r("set-ref", o)), (s, n) => (O(), K("button", {
      ref: "arrow-btn",
      type: "button",
      "data-dp-element": e.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled || void 0,
      onClick: n[0] || (n[0] = (l) => r("activate")),
      onKeydown: n[1] || (n[1] = (l) => t(p)(l, () => r("activate"), !0))
    }, [
      Pe("span", {
        class: be(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        se(s.$slots, "default")
      ], 2)
    ], 40, Gr));
  }
}), Jr = ["aria-label", "data-test-id"], za = /* @__PURE__ */ We({
  __name: "YearModePicker",
  props: {
    items: {},
    instance: {},
    year: {},
    showYearPicker: { type: Boolean, default: !1 },
    isDisabled: {}
  },
  emits: ["handle-year", "year-select", "toggle-year-picker"],
  setup(e, { emit: k }) {
    const p = k, r = e, { showRightIcon: o, showLeftIcon: s } = ra(), {
      rootProps: n,
      defaults: { config: l, ariaLabels: d, ui: B }
    } = $e(), { showTransition: A, transitionName: I } = Kt(), { formatYear: b } = bt(), i = de(!1), M = j(() => b(r.year)), c = (Y = !1, V) => {
      i.value = !i.value, p("toggle-year-picker", { flow: Y, show: V });
    }, T = (Y) => {
      i.value = !1, p("year-select", Y);
    }, v = (Y = !1) => {
      p("handle-year", Y);
    };
    return (Y, V) => (O(), K(ke, null, [
      Pe("div", {
        class: be(["dp--year-mode-picker", { "dp--hidden-el": i.value }])
      }, [
        t(s)(e.instance) ? (O(), Se(Ft, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(d)?.prevYear,
          disabled: e.isDisabled(!1),
          class: be(t(B)?.navBtnPrev),
          onActivate: V[0] || (V[0] = (P) => v(!1))
        }, {
          default: we(() => [
            Y.$slots["arrow-left"] ? se(Y.$slots, "arrow-left", { key: 0 }) : U("", !0),
            Y.$slots["arrow-left"] ? U("", !0) : (O(), Se(t(Na), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : U("", !0),
        Pe("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": `${e.year}-${t(d)?.openYearsOverlay}`,
          "data-test-id": `year-mode-btn-${e.instance}`,
          onClick: V[1] || (V[1] = () => c(!1)),
          onKeydown: V[2] || (V[2] = vn(() => c(!1), ["enter"]))
        }, [
          Y.$slots.year ? se(Y.$slots, "year", {
            key: 0,
            text: M.value,
            value: e.year
          }) : U("", !0),
          Y.$slots.year ? U("", !0) : (O(), K(ke, { key: 1 }, [
            ct(Ke(e.year), 1)
          ], 64))
        ], 40, Jr),
        t(o)(e.instance) ? (O(), Se(Ft, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(d)?.nextYear,
          disabled: e.isDisabled(!0),
          class: be(t(B)?.navBtnNext),
          onActivate: V[3] || (V[3] = (P) => v(!0))
        }, {
          default: we(() => [
            Y.$slots["arrow-right"] ? se(Y.$slots, "arrow-right", { key: 0 }) : U("", !0),
            Y.$slots["arrow-right"] ? U("", !0) : (O(), Se(t(Wa), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : U("", !0)
      ], 2),
      tt(St, {
        name: t(I)(e.showYearPicker),
        css: t(A)
      }, {
        default: we(() => [
          e.showYearPicker ? (O(), Se(zt, {
            key: 0,
            items: e.items,
            config: t(l),
            "is-last": t(n).autoApply && !t(l).keepActionRow,
            "overlay-label": t(d)?.yearPicker?.(!0),
            type: "year",
            onToggle: c,
            onSelected: V[4] || (V[4] = (P) => T(P))
          }, Le({
            "button-icon": we(() => [
              Y.$slots["calendar-icon"] ? se(Y.$slots, "calendar-icon", { key: 0 }) : U("", !0),
              Y.$slots["calendar-icon"] ? U("", !0) : (O(), Se(t(Ht), { key: 1 }))
            ]),
            _: 2
          }, [
            Y.$slots["year-overlay-value"] ? {
              name: "item",
              fn: we(({ item: P }) => [
                se(Y.$slots, "year-overlay-value", {
                  text: P.text,
                  value: P.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "config", "is-last", "overlay-label"])) : U("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Ua = (e) => {
  const {
    getDate: k,
    rootEmit: p,
    state: r,
    month: o,
    year: s,
    modelValue: n,
    calendars: l,
    rootProps: d,
    defaults: { multiCalendars: B, range: A, safeDates: I, filters: b, highlight: i }
  } = $e(), { resetDate: M, getYearFromDate: c, checkHighlightYear: T, groupListAndMap: v } = je(), { getYears: Y } = na(), { validateMonthYear: V, checkMinMaxValue: P } = at(), F = de([!1]), q = j(() => Y()), R = j(() => (z, ee) => {
    const fe = _e(M(k()), {
      month: o.value(z),
      year: s.value(z)
    }), ge = ee ? Ia(fe) : Et(fe);
    return V(ge, d.preventMinMaxNavigation, ee);
  }), w = () => Array.isArray(n.value) && B.value.solo && n.value[1], u = () => {
    for (let z = 0; z < B.value.count; z++)
      if (z === 0)
        l.value[z] = l.value[0];
      else if (z === B.value.count - 1 && w())
        l.value[z] = {
          month: Te(n.value[1]),
          year: ye(n.value[1])
        };
      else {
        const ee = _e(k(), l.value[z - 1]);
        l.value[z] = { month: Te(ee), year: ye(Va(ee, 1)) };
      }
  }, D = (z) => {
    if (!z) return u();
    const ee = _e(k(), l.value[z]);
    return l.value[0].year = ye(Ea(ee, B.value.count - 1)), u();
  }, N = (z, ee) => {
    const fe = $n(ee, z);
    return A.value.showLastInRange && fe > 1 ? ee : z;
  }, Q = (z) => d.focusStartDate || B.value.solo ? z[0] : z[1] ? N(z[0], z[1]) : z[0], ae = () => {
    if (n.value) {
      const z = Array.isArray(n.value) ? Q(n.value) : n.value;
      l.value[0] = { month: Te(z), year: ye(z) };
    }
  }, Z = () => {
    ae(), B.value.count && u();
  };
  st(n, (z, ee) => {
    r.isTextInputDate && JSON.stringify(z ?? {}) !== JSON.stringify(ee ?? {}) && Z();
  }), Ne(() => {
    Z();
  });
  const ve = (z, ee) => {
    l.value[ee].year = z, p("update-month-year", { instance: ee, year: z, month: l.value[ee].month }), B.value.count && !B.value.solo && D(ee);
  }, he = j(() => (z) => v(q.value, (ee) => {
    const fe = s.value(z) === ee.value, ge = P(
      ee.value,
      c(I.value.minDate),
      c(I.value.maxDate)
    ) || b.value.years?.includes(s.value(z)), De = T(i.value, ee.value);
    return { active: fe, disabled: ge, highlighted: De };
  })), L = (z, ee) => {
    ve(z, ee), W(ee);
  }, J = (z, ee = !1) => {
    if (!R.value(z, ee)) {
      const fe = ee ? s.value(z) + 1 : s.value(z) - 1;
      ve(fe, z);
    }
  }, W = (z, ee = !1, fe) => {
    ee || e("reset-flow"), fe === void 0 ? F.value[z] = !F.value[z] : F.value[z] = fe, F.value[z] ? p("overlay-toggle", { open: !0, overlay: qe.year }) : p("overlay-toggle", { open: !1, overlay: qe.year });
  };
  return {
    isDisabled: R,
    groupedYears: he,
    showYearPicker: F,
    selectYear: ve,
    setStartDate: () => {
      d.startDate && (n.value && d.focusStartDate || !n.value) && ve(ye(k(d.startDate)), 0);
    },
    toggleYearPicker: W,
    handleYearSelect: L,
    handleYear: J
  };
}, oa = () => {
  const { isDateAfter: e, isDateBefore: k, isDateEqual: p } = je(), {
    getDate: r,
    rootEmit: o,
    rootProps: s,
    modelValue: n,
    defaults: { range: l }
  } = $e();
  return {
    getRangeWithFixedDate: (i) => Array.isArray(n.value) && (n.value.length === 2 || n.value.length === 1 && l.value.partialRange) ? l.value.fixedStart && (e(i, n.value[0]) || p(i, n.value[0])) ? [n.value[0], i] : l.value.fixedEnd && (k(i, n.value[1]) || p(i, n.value[1])) ? [i, n.value[1]] : (o("invalid-fixed-range", i), n.value) : [],
    setPresetDate: (i) => {
      Array.isArray(i.value) && i.value.length <= 2 && l.value.enabled ? n.value = i.value.map((M) => r(M)) : Array.isArray(i.value) || (n.value = r(i.value));
    },
    checkRangeAutoApply: (i, M, c) => {
      l && (i[0] && i[1] && s.autoApply && M("auto-apply", c), i[0] && !i[1] && (s.modelAuto || l.value.partialRange) && s.autoApply && M("auto-apply", c));
    },
    setMonthOrYearRange: (i) => {
      let M = n.value ? n.value.slice() : [];
      return M.length === 2 && M[1] !== null && (M = []), M.length ? (k(i, M[0]) ? M.unshift(i) : M[1] = i, o("range-end", i)) : (M = [i], o("range-start", i)), M;
    },
    handleMultiDatesSelect: (i, M) => {
      if (n.value && Array.isArray(n.value))
        if (n.value.some((c) => p(i, c))) {
          const c = n.value.filter((T) => !p(T, i));
          n.value = c.length ? c : null;
        } else (M && +M > n.value.length || !M) && n.value.push(i);
      else
        n.value = [i];
    }
  };
}, Xr = (e, k) => {
  const {
    getDate: p,
    rootEmit: r,
    state: o,
    calendars: s,
    year: n,
    modelValue: l,
    rootProps: d,
    defaults: { range: B, highlight: A, safeDates: I, filters: b, multiDates: i }
  } = $e();
  jt(() => {
    o.isTextInputDate && L(ye(p(d.startDate)), 0);
  });
  const { checkMinMaxRange: M, checkMinMaxValue: c } = at(), { isDateBetween: T, resetDateTime: v, resetDate: Y, getMinMonth: V, getMaxMonth: P, checkHighlightMonth: F, groupListAndMap: q } = je(), { checkRangeAutoApply: R, getRangeWithFixedDate: w, handleMultiDatesSelect: u, setMonthOrYearRange: D, setPresetDate: N } = oa(), { padZero: Q } = Ee(), { getMonths: ae, isOutOfYearRange: Z } = na(), ve = j(() => ae()), he = de(null), {
    selectYear: L,
    groupedYears: J,
    showYearPicker: W,
    toggleYearPicker: oe,
    handleYearSelect: z,
    handleYear: ee,
    isDisabled: fe,
    setStartDate: ge
  } = Ua(k);
  Ne(() => {
    ge();
  });
  const De = (a) => a ? { month: Te(a), year: ye(a) } : { month: null, year: null }, Ae = () => l.value ? Array.isArray(l.value) ? l.value.map((a) => De(a)) : De(l.value) : De(), re = (a, f) => {
    const S = s.value[a], te = Ae();
    return Array.isArray(te) ? te.some((ne) => ne.year === S?.year && ne.month === f) : S?.year === te.year && f === te.month;
  }, H = (a, f, S) => {
    const te = Ae();
    return Array.isArray(te) ? n.value(f) === te[S]?.year && a === te[S]?.month : !1;
  }, E = (a, f) => {
    if (B.value.enabled) {
      const S = Ae();
      if (Array.isArray(l.value) && Array.isArray(S)) {
        const te = H(a, f, 0) || H(a, f, 1), ne = _e(Y(p()), { month: a, year: n.value(f) });
        return T(l.value, he.value, ne) && !te;
      }
      return !1;
    }
    return !1;
  }, ce = j(() => (a) => q(ve.value, (f) => {
    const S = re(a, f.value), te = c(
      f.value,
      V(n.value(a), I.value.minDate),
      P(n.value(a), I.value.maxDate)
    ) || C(I.value.disabledDates, n.value(a), f.value) || b.value.months?.includes(f.value) || !G(I.value.allowedDates, n.value(a), f.value) || Z(n.value(a)), ne = E(f.value, a), Ce = F(A.value, f.value, n.value(a));
    return { active: S, disabled: te, isBetween: ne, highlighted: Ce };
  })), ue = (a, f) => _e(Y(p()), { month: a, year: n.value(f) }), y = (a, f) => {
    const S = l.value ? l.value : Y(p());
    l.value = _e(S, { month: a, year: n.value(f) }), k("auto-apply"), k("update-flow-step");
  }, $ = (a, f) => {
    const S = ue(a, f);
    B.value.fixedEnd || B.value.fixedStart ? l.value = w(S) : l.value ? M(S, l.value) && (l.value = D(ue(a, f))) : l.value = [ue(a, f)], Ge().then(() => {
      R(l.value, k, l.value.length < 2);
    });
  }, ie = (a, f) => {
    u(ue(a, f), i.value.limit), k("auto-apply", !0);
  }, le = (a, f) => (s.value[f].month = a, m(f, s.value[f].year, a), i.value.enabled ? ie(a, f) : B.value.enabled ? $(a, f) : y(a, f)), h = (a, f) => {
    L(a, f), m(f, a, null);
  }, m = (a, f, S) => {
    let te = S;
    if (!te && te !== 0) {
      const ne = Ae();
      te = Array.isArray(ne) ? ne[a].month : ne.month;
    }
    r("update-month-year", { instance: a, year: f, month: te });
  }, x = (a, f) => {
    he.value = ue(a, f);
  }, g = (a) => {
    N({
      value: a
    }), k("auto-apply");
  }, C = (a, f, S) => {
    if (a instanceof Map) {
      const te = `${Q(S + 1)}-${f}`;
      return a.size ? a.has(te) : !1;
    }
    return typeof a == "function" ? a(v(_e(p(), { month: S, year: f }), !0)) : !1;
  }, G = (a, f, S) => {
    if (a instanceof Map) {
      const te = `${Q(S + 1)}-${f}`;
      return a.size ? a.has(te) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: ce,
    groupedYears: J,
    year: n,
    isDisabled: fe,
    showYearPicker: W,
    modelValue: l,
    toggleYearPicker: oe,
    handleYearSelect: z,
    handleYear: ee,
    presetDate: g,
    setHoverDate: x,
    selectMonth: le,
    selectYear: h,
    getModelMonthYear: Ae
  };
}, Zr = /* @__PURE__ */ We({
  __name: "MonthPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply", "update-flow-step", "mount"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, s = ht(), { mapSlots: n } = yt(), {
      rootProps: l,
      defaults: { config: d }
    } = $e(), B = n(s, "yearMode");
    Ne(() => {
      r("mount");
    });
    const {
      groupedMonths: A,
      groupedYears: I,
      year: b,
      isDisabled: i,
      showYearPicker: M,
      modelValue: c,
      presetDate: T,
      setHoverDate: v,
      selectMonth: Y,
      selectYear: V,
      toggleYearPicker: P,
      handleYearSelect: F,
      handleYear: q,
      getModelMonthYear: R
    } = Xr(o, r);
    return k({ getSidebarProps: () => ({
      modelValue: c,
      year: b,
      getModelMonthYear: R,
      selectMonth: Y,
      selectYear: V,
      handleYear: q
    }), presetDate: T, toggleYearPicker: (u) => P(0, u) }), (u, D) => (O(), Se(la, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: we(({ instances: N, wrapClass: Q }) => [
        (O(!0), K(ke, null, Ye(N, (ae) => (O(), K("div", {
          key: ae,
          class: be(Q)
        }, [
          u.$slots["top-extra"] ? se(u.$slots, "top-extra", {
            key: 0,
            value: t(c)
          }) : U("", !0),
          u.$slots["month-year"] ? se(u.$slots, "month-year", et({
            key: 1,
            ref_for: !0
          }, {
            year: t(b),
            months: t(A)(ae),
            years: t(I)(ae),
            selectMonth: t(Y),
            selectYear: t(V),
            instance: ae
          })) : (O(), Se(zt, {
            key: 2,
            items: t(A)(ae),
            "is-last": t(l).autoApply && !t(d).keepActionRow,
            height: t(d).modeHeight,
            "no-overlay-focus": !!(e.noOverlayFocus || t(l).textInput),
            "use-relative": "",
            type: "month",
            onSelected: (Z) => t(Y)(Z, ae),
            onHoverValue: (Z) => t(v)(Z, ae)
          }, Le({
            header: we(() => [
              tt(za, {
                items: t(I)(ae),
                instance: ae,
                "show-year-picker": t(M)[ae],
                year: t(b)(ae),
                "is-disabled": (Z) => t(i)(ae, Z),
                onHandleYear: (Z) => t(q)(ae, Z),
                onYearSelect: (Z) => t(F)(Z, ae),
                onToggleYearPicker: (Z) => t(P)(ae, Z?.flow, Z?.show)
              }, Le({ _: 2 }, [
                Ye(t(B), (Z, ve) => ({
                  name: Z,
                  fn: we((he) => [
                    se(u.$slots, Z, et({ ref_for: !0 }, he))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            u.$slots["month-overlay-value"] ? {
              name: "item",
              fn: we(({ item: Z }) => [
                se(u.$slots, "month-overlay-value", {
                  text: Z.text,
                  value: Z.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "onSelected", "onHoverValue"]))
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), el = (e, k) => {
  const {
    rootEmit: p,
    getDate: r,
    state: o,
    modelValue: s,
    rootProps: n,
    defaults: { highlight: l, multiDates: d, filters: B, range: A, safeDates: I }
  } = $e(), { getYears: b } = na(), { isDateBetween: i, resetDate: M, resetDateTime: c, getYearFromDate: T, checkHighlightYear: v, groupListAndMap: Y } = je(), { checkRangeAutoApply: V, setMonthOrYearRange: P } = oa(), { checkMinMaxValue: F, checkMinMaxRange: q } = at();
  jt(() => {
    o.isTextInputDate && (w.value = ye(r(n.startDate)));
  });
  const R = de(null), w = de();
  Ne(() => {
    n.startDate && (s.value && n.focusStartDate || !s.value) && (w.value = ye(r(n.startDate)));
  });
  const u = (L) => Array.isArray(s.value) ? s.value.some((J) => ye(J) === L) : s.value ? ye(s.value) === L : !1, D = (L) => A.value.enabled && Array.isArray(s.value) ? i(s.value, R.value, Z(L)) : !1, N = (L) => I.value.allowedDates?.size ? I.value.allowedDates.has(`${L}`) : !0, Q = (L) => I.value.disabledDates instanceof Map ? I.value.disabledDates.size ? I.value.disabledDates.has(`${L}`) : !1 : typeof I.value.disabledDates == "function" ? I.value.disabledDates(lt(c(Et(r())), L)) : !0, ae = j(() => Y(b(), (L) => {
    const J = u(L.value), W = F(
      L.value,
      T(I.value.minDate),
      T(I.value.maxDate)
    ) || B.value.years.includes(L.value) || !N(L.value) || Q(L.value), oe = D(L.value) && !J, z = v(l.value, L.value);
    return { active: J, disabled: W, isBetween: oe, highlighted: z };
  })), Z = (L) => lt(M(Et(r())), L);
  return {
    groupedYears: ae,
    focusYear: w,
    setHoverValue: (L) => {
      R.value = lt(M(r()), L);
    },
    selectYear: (L) => {
      if (p("update-month-year", { instance: 0, year: L, month: Number.NaN }), d.value.enabled)
        return s.value ? Array.isArray(s.value) && ((s.value?.map((W) => ye(W))).includes(L) ? s.value = s.value.filter((W) => ye(W) !== L) : s.value.push(lt(c(r()), L))) : s.value = [lt(c(Et(r())), L)], k("auto-apply", !0);
      A.value.enabled ? q(Z(L), s.value) && (s.value = P(Z(L)), Ge().then(() => {
        V(s.value, k, s.value.length < 2);
      })) : (s.value = Z(L), k("auto-apply"));
    }
  };
}, tl = /* @__PURE__ */ We({
  __name: "YearPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, {
      modelValue: s,
      defaults: { config: n },
      rootProps: l
    } = $e(), { groupedYears: d, focusYear: B, selectYear: A, setHoverValue: I } = el(o, r);
    return k({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: A
    }) }), (i, M) => (O(), K("div", null, [
      i.$slots["top-extra"] ? se(i.$slots, "top-extra", {
        key: 0,
        value: t(s)
      }) : U("", !0),
      i.$slots["month-year"] ? se(i.$slots, "month-year", Je(et({ key: 1 }, {
        years: t(d),
        selectYear: t(A)
      }))) : (O(), Se(zt, {
        key: 2,
        items: t(d),
        "is-last": t(l).autoApply && !t(n).keepActionRow,
        height: t(n).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || t(l).textInput),
        "focus-value": t(B),
        type: "year",
        "use-relative": "",
        onSelected: t(A),
        onHoverValue: t(I)
      }, Le({ _: 2 }, [
        i.$slots["year-overlay-value"] ? {
          name: "item",
          fn: we(({ item: c }) => [
            se(i.$slots, "year-overlay-value", {
              text: c.text,
              value: c.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), al = {
  key: 0,
  class: "dp__time_input"
}, nl = ["data-compact", "data-collapsed"], rl = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], ll = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], ol = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], sl = { key: 0 }, ul = ["aria-label", "data-compact"], il = /* @__PURE__ */ We({
  __name: "TimeInput",
  props: {
    hours: {},
    minutes: {},
    seconds: {},
    order: {},
    closeTimePickerBtn: {},
    disabledTimesConfig: {},
    validateTime: {}
  },
  emits: ["update:hours", "update:minutes", "update:seconds", "overlay-opened", "overlay-closed", "set-hours", "set-minutes", "reset-flow", "mounted"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, { setTimePickerElements: s, setTimePickerBackRef: n } = gt(), {
      getDate: l,
      rootEmit: d,
      rootProps: B,
      defaults: { ariaLabels: A, filters: I, config: b, range: i, multiCalendars: M, timeConfig: c }
    } = $e(), { checkKeyDown: T, hoursToAmPmHours: v } = Ee(), { sanitizeTime: Y, groupListAndMap: V } = je(), { transitionName: P, showTransition: F } = Kt(), q = Nt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), R = de("AM"), w = de(null), u = de([]), D = de(), N = de(!1);
    Ne(() => {
      r("mounted");
    });
    const Q = (a) => _e(l(), {
      hours: a.hours,
      minutes: a.minutes,
      seconds: c.value.enableSeconds ? a.seconds : 0,
      milliseconds: 0
    }), ae = j(
      () => (a) => Ae(a, o[a]) || ve(a, o[a])
    ), Z = j(() => ({ hours: o.hours, minutes: o.minutes, seconds: o.seconds })), ve = (a, f) => i.value.enabled && !i.value.disableTimeRangeValidation ? !o.validateTime(a, f) : !1, he = (a, f) => {
      if (i.value.enabled && !i.value.disableTimeRangeValidation) {
        const S = f ? +c.value[`${a}Increment`] : -+c.value[`${a}Increment`], te = o[a] + S;
        return !o.validateTime(a, te);
      }
      return !1;
    }, L = j(() => (a) => !ue(+o[a] + +c.value[`${a}Increment`], a) || he(a, !0)), J = j(() => (a) => !ue(+o[a] - +c.value[`${a}Increment`], a) || he(a, !1)), W = (a, f) => Fa(_e(l(), a), f), oe = (a, f) => Sn(_e(l(), a), f), z = j(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !c.value.timePickerInline,
        dp__time_col_reg_block: !c.value.enableSeconds && c.value.is24 && !c.value.timePickerInline,
        dp__time_col_reg_inline: !c.value.enableSeconds && c.value.is24 && c.value.timePickerInline,
        dp__time_col_reg_with_button: !c.value.enableSeconds && !c.value.is24,
        dp__time_col_sec: c.value.enableSeconds && c.value.is24,
        dp__time_col_sec_with_button: c.value.enableSeconds && !c.value.is24
      })
    ), ee = j(
      () => c.value.timePickerInline && i.value.enabled && !M.value.count
    ), fe = j(() => {
      const a = [{ type: "hours" }];
      return c.value.enableMinutes && a.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), c.value.enableSeconds && a.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), a;
    }), ge = j(() => fe.value.filter((a) => !a.separator)), De = j(() => (a) => {
      if (a === "hours") {
        const f = m(+o.hours);
        return { text: f < 10 ? `0${f}` : `${f}`, value: f };
      }
      return { text: o[a] < 10 ? `0${o[a]}` : `${o[a]}`, value: o[a] };
    }), Ae = (a, f) => {
      if (!o.disabledTimesConfig) return !1;
      const S = o.disabledTimesConfig(o.order, a === "hours" ? f : void 0);
      return S[a] ? !!S[a]?.includes(f) : !0;
    }, re = (a, f) => f !== "hours" || R.value === "AM" ? a : a + 12, H = (a) => {
      const f = c.value.is24 ? 24 : 12, S = a === "hours" ? f : 60, te = +c.value[`${a}GridIncrement`], ne = a === "hours" && !c.value.is24 ? te : 0, Ce = [];
      for (let Fe = ne; Fe < S; Fe += te)
        Ce.push({
          value: c.value.is24 ? Fe : re(Fe, a),
          text: Fe < 10 ? `0${Fe}` : `${Fe}`
        });
      return a === "hours" && !c.value.is24 && Ce.unshift({ value: R.value === "PM" ? 12 : 0, text: "12" }), V(Ce, (Fe) => ({ active: !1, disabled: I.value.times[a].includes(Fe.value) || !ue(Fe.value, a) || Ae(a, Fe.value) || ve(a, Fe.value) }));
    }, E = (a) => a >= 0 ? a : 59, ce = (a) => a >= 0 ? a : 23, ue = (a, f) => {
      const S = B.minTime ? Q(Y(B.minTime)) : null, te = B.maxTime ? Q(Y(B.maxTime)) : null, ne = Q(
        Y(
          Z.value,
          f,
          f === "minutes" || f === "seconds" ? E(a) : ce(a)
        )
      );
      return S && te ? (Tt(ne, te) || At(ne, te)) && (_t(ne, S) || At(ne, S)) : S ? _t(ne, S) || At(ne, S) : te ? Tt(ne, te) || At(ne, te) : !0;
    }, y = (a) => c.value[`no${a[0].toUpperCase() + a.slice(1)}Overlay`], $ = (a) => {
      y(a) || (q[a] = !q[a], q[a] ? (N.value = !0, r("overlay-opened", a)) : (N.value = !1, r("overlay-closed", a)));
    }, ie = (a) => a === "hours" ? ut : a === "minutes" ? dt : pt, le = () => {
      D.value && clearTimeout(D.value);
    }, h = (a, f = !0, S) => {
      const te = f ? W : oe, ne = f ? +c.value[`${a}Increment`] : -+c.value[`${a}Increment`];
      ue(+o[a] + ne, a) && r(
        `update:${a}`,
        ie(a)(
          te({ [a]: +o[a] }, { [a]: +c.value[`${a}Increment`] })
        )
      ), !S?.keyboard && b.value.timeArrowHoldThreshold && (D.value = setTimeout(() => {
        h(a, f);
      }, b.value.timeArrowHoldThreshold));
    }, m = (a) => c.value.is24 ? a : (a >= 12 ? R.value = "PM" : R.value = "AM", v(a)), x = () => {
      R.value === "PM" ? (R.value = "AM", r("update:hours", o.hours - 12)) : (R.value = "PM", r("update:hours", o.hours + 12)), d("am-pm-change", R.value);
    }, g = (a) => {
      q[a] = !0;
    }, C = (a, f, S) => {
      if (a && B.arrowNavigation) {
        Array.isArray(u.value[f]) ? u.value[f][S] = a : u.value[f] = [a];
        const te = u.value.reduce(
          (ne, Ce) => Ce.map((Fe, kt) => [...ne[kt] || [], Ce[kt]]),
          []
        );
        n(o.closeTimePickerBtn), w.value && (te[1] = te[1].concat(w.value)), s(te, o.order);
      }
    }, G = (a, f) => ($(a), r(`update:${a}`, f));
    return k({ openChildCmp: g }), (a, f) => t(B).disabled ? U("", !0) : (O(), K("div", al, [
      (O(!0), K(ke, null, Ye(fe.value, (S, te) => (O(), K("div", {
        key: te,
        class: be(z.value),
        "data-compact": ee.value && !t(c).enableSeconds,
        "data-collapsed": ee.value && t(c).enableSeconds
      }, [
        S.separator ? (O(), K(ke, { key: 0 }, [
          N.value ? U("", !0) : (O(), K(ke, { key: 0 }, [
            ct(":")
          ], 64))
        ], 64)) : (O(), K(ke, { key: 1 }, [
          Pe("button", {
            ref_for: !0,
            ref: (ne) => C(ne, te, 0),
            type: "button",
            class: be({
              dp__btn: !0,
              dp__inc_dec_button: !t(c).timePickerInline,
              dp__inc_dec_button_inline: t(c).timePickerInline,
              dp__tp_inline_btn_top: t(c).timePickerInline,
              dp__inc_dec_button_disabled: L.value(S.type),
              "dp--hidden-el": N.value
            }),
            "data-test-id": `${S.type}-time-inc-btn-${o.order}`,
            "aria-label": t(A)?.incrementValue(S.type),
            tabindex: "0",
            onKeydown: (ne) => t(T)(ne, () => h(S.type, !0, { keyboard: !0 }), !0),
            onClick: (ne) => t(b).timeArrowHoldThreshold ? void 0 : h(S.type, !0),
            onMousedown: (ne) => t(b).timeArrowHoldThreshold ? h(S.type, !0) : void 0,
            onMouseup: le
          }, [
            t(c).timePickerInline ? (O(), K(ke, { key: 1 }, [
              a.$slots["tp-inline-arrow-up"] ? se(a.$slots, "tp-inline-arrow-up", { key: 0 }) : (O(), K(ke, { key: 1 }, [
                f[2] || (f[2] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                f[3] || (f[3] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (O(), K(ke, { key: 0 }, [
              a.$slots["arrow-up"] ? se(a.$slots, "arrow-up", { key: 0 }) : U("", !0),
              a.$slots["arrow-up"] ? U("", !0) : (O(), Se(t(Ha), { key: 1 }))
            ], 64))
          ], 42, rl),
          Pe("button", {
            ref_for: !0,
            ref: (ne) => C(ne, te, 1),
            type: "button",
            "aria-label": `${De.value(S.type).text}-${t(A)?.openTpOverlay(S.type)}`,
            class: be({
              dp__time_display: !0,
              dp__time_display_block: !t(c).timePickerInline,
              dp__time_display_inline: t(c).timePickerInline,
              "dp--time-invalid": ae.value(S.type),
              "dp--time-overlay-btn": !ae.value(S.type),
              "dp--hidden-el": N.value
            }),
            disabled: y(S.type),
            tabindex: "0",
            "data-test-id": `${S.type}-toggle-overlay-btn-${o.order}`,
            onKeydown: (ne) => t(T)(ne, () => $(S.type), !0),
            onClick: (ne) => $(S.type)
          }, [
            a.$slots[S.type] ? se(a.$slots, S.type, {
              key: 0,
              text: De.value(S.type).text,
              value: De.value(S.type).value
            }) : U("", !0),
            a.$slots[S.type] ? U("", !0) : (O(), K(ke, { key: 1 }, [
              ct(Ke(De.value(S.type).text), 1)
            ], 64))
          ], 42, ll),
          Pe("button", {
            ref_for: !0,
            ref: (ne) => C(ne, te, 2),
            type: "button",
            class: be({
              dp__btn: !0,
              dp__inc_dec_button: !t(c).timePickerInline,
              dp__inc_dec_button_inline: t(c).timePickerInline,
              dp__tp_inline_btn_bottom: t(c).timePickerInline,
              dp__inc_dec_button_disabled: J.value(S.type),
              "dp--hidden-el": N.value
            }),
            "data-test-id": `${S.type}-time-dec-btn-${o.order}`,
            "aria-label": t(A)?.decrementValue(S.type),
            tabindex: "0",
            onKeydown: (ne) => t(T)(ne, () => h(S.type, !1, { keyboard: !0 }), !0),
            onClick: (ne) => t(b).timeArrowHoldThreshold ? void 0 : h(S.type, !1),
            onMousedown: (ne) => t(b).timeArrowHoldThreshold ? h(S.type, !1) : void 0,
            onMouseup: le
          }, [
            t(c).timePickerInline ? (O(), K(ke, { key: 1 }, [
              a.$slots["tp-inline-arrow-down"] ? se(a.$slots, "tp-inline-arrow-down", { key: 0 }) : (O(), K(ke, { key: 1 }, [
                f[4] || (f[4] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                f[5] || (f[5] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (O(), K(ke, { key: 0 }, [
              a.$slots["arrow-down"] ? se(a.$slots, "arrow-down", { key: 0 }) : U("", !0),
              a.$slots["arrow-down"] ? U("", !0) : (O(), Se(t(Ka), { key: 1 }))
            ], 64))
          ], 42, ol)
        ], 64))
      ], 10, nl))), 128)),
      t(c).is24 ? U("", !0) : (O(), K("div", sl, [
        a.$slots["am-pm-button"] ? se(a.$slots, "am-pm-button", {
          key: 0,
          toggle: x,
          value: R.value
        }) : U("", !0),
        a.$slots["am-pm-button"] ? U("", !0) : (O(), K("button", {
          key: 1,
          ref_key: "amPmButton",
          ref: w,
          type: "button",
          class: "dp__pm_am_button",
          role: "button",
          "aria-label": t(A)?.amPmButton,
          tabindex: "0",
          "data-compact": ee.value,
          onClick: x,
          onKeydown: f[0] || (f[0] = (S) => t(T)(S, () => x(), !0))
        }, Ke(R.value), 41, ul))
      ])),
      (O(!0), K(ke, null, Ye(ge.value, (S, te) => (O(), Se(St, {
        key: te,
        name: t(P)(q[S.type]),
        css: t(F)
      }, {
        default: we(() => [
          q[S.type] ? (O(), Se(zt, {
            key: 0,
            items: H(S.type),
            "is-last": t(B).autoApply && !t(b).keepActionRow,
            type: S.type,
            "aria-labels": t(A),
            "overlay-label": t(A).timeOverlay?.(S.type),
            onSelected: (ne) => G(S.type, ne),
            onToggle: (ne) => $(S.type),
            onResetFlow: f[1] || (f[1] = (ne) => a.$emit("reset-flow"))
          }, Le({
            "button-icon": we(() => [
              a.$slots["clock-icon"] ? se(a.$slots, "clock-icon", { key: 0 }) : U("", !0),
              a.$slots["clock-icon"] ? U("", !0) : (O(), Se(wa(t(c).timePickerInline ? t(Ht) : t(La)), { key: 1 }))
            ]),
            _: 2
          }, [
            a.$slots[`${S.type}-overlay-value`] ? {
              name: "item",
              fn: we(({ item: ne }) => [
                se(a.$slots, `${S.type}-overlay-value`, {
                  text: ne.text,
                  value: ne.value
                })
              ]),
              key: "0"
            } : void 0,
            a.$slots[`${S.type}-overlay-header`] ? {
              name: "header",
              fn: we(() => [
                se(a.$slots, `${S.type}-overlay-header`, {
                  toggle: () => $(S.type)
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["items", "is-last", "type", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : U("", !0)
        ]),
        _: 2
      }, 1032, ["name", "css"]))), 128))
    ]));
  }
}), cl = ["data-dp-mobile"], dl = ["aria-label", "tabindex"], vl = ["role", "aria-label", "tabindex"], fl = ["aria-label"], qa = /* @__PURE__ */ We({
  __name: "TimePicker",
  props: {
    hours: {},
    minutes: {},
    seconds: {},
    disabledTimesConfig: { type: [Function, null] },
    noOverlayFocus: { type: Boolean },
    validateTime: { type: Function }
  },
  emits: ["update:hours", "update:minutes", "update:seconds", "mount", "reset-flow"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, {
      rootEmit: s,
      modelValue: n,
      rootProps: l,
      defaults: { ariaLabels: d, textInput: B, config: A, range: I, timeConfig: b }
    } = $e(), { isModelAuto: i } = je(), { checkKeyDown: M, findFocusableEl: c } = Ee(), { buildMatrix: T, setTimePicker: v } = gt(), { transitionName: Y, showTransition: V } = Kt(), { hideNavigationButtons: P } = ra(), { mapSlots: F } = yt(), { isMobile: q } = aa(), R = ht(), w = Re("overlay"), u = Re("open-tp-btn"), D = Re("close-tp-btn"), N = Re("tp-input"), Q = de(!1);
    Ne(() => {
      r("mount"), !l.timePicker && l.arrowNavigation ? T([Qe(u.value)], "time") : v(!0, l.timePicker);
    });
    const ae = j(() => I.value.enabled && l.modelAuto ? i(n.value) : !0), Z = de(!1), ve = (re) => ({
      hours: Array.isArray(o.hours) ? o.hours[re] : o.hours,
      minutes: Array.isArray(o.minutes) ? o.minutes[re] : o.minutes,
      seconds: Array.isArray(o.seconds) ? o.seconds[re] : o.seconds
    }), he = j(() => {
      const re = [];
      if (I.value.enabled)
        for (let H = 0; H < 2; H++)
          re.push(ve(H));
      else
        re.push(ve(0));
      return re;
    }), L = (re, H = !1, E = "") => {
      H || r("reset-flow"), Z.value = re, s("overlay-toggle", { open: re, overlay: qe.time }), l.arrowNavigation && v(re), Ge(() => {
        E !== "" && N.value?.[0] && N.value[0].openChildCmp(E);
      });
    }, J = j(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: l.autoApply && !A.value.keepActionRow
    })), W = F(R, "timePicker"), oe = (re, H, E) => I.value.enabled ? H === 0 ? [re, he.value[1][E]] : [he.value[0][E], re] : re, z = (re) => {
      r("update:hours", re);
    }, ee = (re) => {
      r("update:minutes", re);
    }, fe = (re) => {
      r("update:seconds", re);
    }, ge = () => {
      if (w.value && !B.value.enabled && !o.noOverlayFocus) {
        const re = c(w.value);
        re && re.focus({ preventScroll: !0 });
      }
    }, De = (re) => {
      Q.value = !1, s("overlay-toggle", { open: !1, overlay: re });
    }, Ae = (re) => {
      Q.value = !0, s("overlay-toggle", { open: !0, overlay: re });
    };
    return k({ toggleTimePicker: L }), (re, H) => (O(), K("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(q)
    }, [
      !t(l).timePicker && !t(b).timePickerInline ? Zt((O(), K("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        class: be({ ...J.value, "dp--hidden-el": Z.value }),
        "aria-label": t(d)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: H[0] || (H[0] = (E) => t(M)(E, () => L(!0))),
        onClick: H[1] || (H[1] = (E) => L(!0))
      }, [
        re.$slots["clock-icon"] ? se(re.$slots, "clock-icon", { key: 0 }) : U("", !0),
        re.$slots["clock-icon"] ? U("", !0) : (O(), Se(t(La), { key: 1 }))
      ], 42, dl)), [
        [ea, !t(P)("time")]
      ]) : U("", !0),
      tt(St, {
        name: t(Y)(Z.value),
        css: t(V) && !t(b).timePickerInline
      }, {
        default: we(() => [
          Z.value || t(l).timePicker || t(b).timePickerInline ? (O(), K("div", {
            key: 0,
            ref: "overlay",
            role: t(b).timePickerInline ? void 0 : "dialog",
            class: be({
              dp__overlay: !t(b).timePickerInline,
              "dp--overlay-absolute": !t(l).timePicker && !t(b).timePickerInline,
              "dp--overlay-relative": t(l).timePicker
            }),
            style: Xe(t(l).timePicker ? { height: `${t(A).modeHeight}px` } : void 0),
            "aria-label": t(d)?.timePicker,
            tabindex: t(b).timePickerInline ? void 0 : 0
          }, [
            Pe("div", {
              class: be(
                t(b).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
              ),
              style: { display: "flex" }
            }, [
              re.$slots["time-picker-overlay"] ? se(re.$slots, "time-picker-overlay", {
                key: 0,
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: z,
                setMinutes: ee,
                setSeconds: fe
              }) : U("", !0),
              re.$slots["time-picker-overlay"] ? U("", !0) : (O(), K("div", {
                key: 1,
                class: be(t(b).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
              }, [
                (O(!0), K(ke, null, Ye(he.value, (E, ce) => Zt((O(), Se(il, et({ key: ce }, { ref_for: !0 }, {
                  order: ce,
                  hours: E.hours,
                  minutes: E.minutes,
                  seconds: E.seconds,
                  closeTimePickerBtn: D.value,
                  disabledTimesConfig: e.disabledTimesConfig,
                  disabled: ce === 0 ? t(I).fixedStart : t(I).fixedEnd
                }, {
                  ref_for: !0,
                  ref: "tp-input",
                  "validate-time": (ue, y) => e.validateTime(ue, oe(y, ce, ue)),
                  "onUpdate:hours": (ue) => z(oe(ue, ce, "hours")),
                  "onUpdate:minutes": (ue) => ee(oe(ue, ce, "minutes")),
                  "onUpdate:seconds": (ue) => fe(oe(ue, ce, "seconds")),
                  onMounted: ge,
                  onOverlayClosed: De,
                  onOverlayOpened: Ae
                }), Le({ _: 2 }, [
                  Ye(t(W), (ue, y) => ({
                    name: ue,
                    fn: we(($) => [
                      se(re.$slots, ue, et({ ref_for: !0 }, $))
                    ])
                  }))
                ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [ea, ce === 0 ? !0 : ae.value]
                ])), 128))
              ], 2)),
              !t(l).timePicker && !t(b).timePickerInline ? Zt((O(), K("button", {
                key: 2,
                ref: "close-tp-btn",
                type: "button",
                class: be({ ...J.value, "dp--hidden-el": Q.value }),
                "aria-label": t(d)?.closeTimePicker,
                tabindex: "0",
                onKeydown: H[2] || (H[2] = (E) => t(M)(E, () => L(!1))),
                onClick: H[3] || (H[3] = (E) => L(!1))
              }, [
                re.$slots["calendar-icon"] ? se(re.$slots, "calendar-icon", { key: 0 }) : U("", !0),
                re.$slots["calendar-icon"] ? U("", !0) : (O(), Se(t(Ht), { key: 1 }))
              ], 42, fl)), [
                [ea, !t(P)("time")]
              ]) : U("", !0)
            ], 2)
          ], 14, vl)) : U("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 8, cl));
  }
}), Qa = (e) => {
  const {
    getDate: k,
    modelValue: p,
    time: r,
    rootProps: o,
    defaults: { range: s, timeConfig: n }
  } = $e(), { isDateEqual: l, setTime: d } = je(), B = (R, w) => Array.isArray(r[R]) ? r[R][w] : r[R], A = (R) => n.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[R] : r.seconds : 0, I = (R, w) => R ? d(
    w !== void 0 ? { hours: B("hours", w), minutes: B("minutes", w), seconds: A(w) } : { hours: r.hours, minutes: r.minutes, seconds: A() },
    R
  ) : Cn(k(), A(w)), b = (R, w) => {
    r[R] = w;
  }, i = j(() => o.modelAuto && s.value.enabled ? Array.isArray(p.value) ? p.value.length > 1 : !1 : s.value.enabled), M = (R, w) => {
    const u = Object.fromEntries(
      Object.keys(r).map((D) => D === R ? [D, w] : [D, r[D]].slice())
    );
    if (i.value && !s.value.disableTimeRangeValidation) {
      const D = (Q) => p.value ? d(
        {
          hours: u.hours[Q],
          minutes: u.minutes[Q],
          seconds: u.seconds[Q]
        },
        p.value[Q]
      ) : null, N = (Q) => Rn(p.value[Q], 0);
      return !(l(D(0), D(1)) && (_t(D(0), N(1)) || Tt(D(1), N(0))));
    }
    return !0;
  }, c = (R, w) => {
    M(R, w) && (b(R, w), e && e());
  }, T = (R) => {
    c("hours", R);
  }, v = (R) => {
    c("minutes", R);
  }, Y = (R) => {
    c("seconds", R);
  }, V = (R, w) => {
    T(R.hours), v(R.minutes), Y(R.seconds), p.value && w(p.value);
  }, P = (R) => {
    if (R) {
      const w = Array.isArray(R), u = w ? [+R[0].hours, +R[1].hours] : +R.hours, D = w ? [+R[0].minutes, +R[1].minutes] : +R.minutes, N = w ? [+(R[0].seconds ?? 0), +(R[1].seconds ?? 0)] : +(R.seconds ?? 0);
      b("hours", u), b("minutes", D), n.value.enableSeconds && b("seconds", N);
    }
  }, F = (R, w) => {
    const u = {
      hours: Array.isArray(r.hours) ? r.hours[R] : r.hours,
      disabledArr: []
    };
    return (w || w === 0) && (u.hours = w), Array.isArray(o.disabledTimes) && (u.disabledArr = s.value.enabled && Array.isArray(o.disabledTimes[R]) ? o.disabledTimes[R] : o.disabledTimes), u;
  }, q = j(() => (R, w) => {
    if (Array.isArray(o.disabledTimes)) {
      const { disabledArr: u, hours: D } = F(R, w), N = u.filter((Q) => +Q.hours === D);
      return N[0]?.minutes === "*" ? { hours: [D], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: N?.map((Q) => +Q.minutes) ?? [],
        seconds: N?.map((Q) => Q.seconds ? +Q.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: b,
    updateHours: T,
    updateMinutes: v,
    updateSeconds: Y,
    getSetDateTime: I,
    updateTimeValues: V,
    getSecondsValue: A,
    assignStartTime: P,
    validateTime: M,
    disabledTimesConfig: q
  };
}, ml = (e) => {
  const {
    getDate: k,
    time: p,
    modelValue: r,
    state: o,
    defaults: { startTime: s, range: n, timeConfig: l }
  } = $e(), { getTimeObj: d } = je();
  jt(() => {
    o.isTextInputDate && F();
  });
  const { updateTimeValues: B, getSetDateTime: A, assignTime: I, assignStartTime: b, disabledTimesConfig: i, validateTime: M } = Qa(c);
  function c() {
    e("update-flow-step");
  }
  const T = (w) => {
    const { hours: u, minutes: D, seconds: N } = w;
    return { hours: +u, minutes: +D, seconds: N ? +N : 0 };
  }, v = () => {
    if (l.value.startTime) {
      if (Array.isArray(l.value.startTime)) {
        const u = T(l.value.startTime[0]), D = T(l.value.startTime[1]);
        return [_e(k(), u), _e(k(), D)];
      }
      const w = T(l.value.startTime);
      return _e(k(), w);
    }
    return n.value.enabled ? [null, null] : null;
  }, Y = () => {
    if (n.value.enabled) {
      const [w, u] = v();
      r.value = [A(w, 0), A(u, 1)];
    } else
      r.value = A(v());
  }, V = (w) => Array.isArray(w) ? [d(k(w[0])), d(k(w[1]))] : [d(w ?? k())], P = (w, u, D) => {
    I("hours", w), I("minutes", u), I("seconds", l.value.enableSeconds ? D : 0);
  }, F = () => {
    const [w, u] = V(r.value);
    return n.value.enabled ? P(
      [w.hours, u.hours],
      [w.minutes, u.minutes],
      [w.seconds, u.seconds]
    ) : P(w.hours, w.minutes, w.seconds);
  };
  Ne(() => (b(s.value), r.value ? F() : Y()));
  const q = () => {
    Array.isArray(r.value) ? r.value = r.value.map((w, u) => w && A(w, u)) : r.value = A(r.value), e("time-update");
  };
  return {
    modelValue: r,
    time: p,
    disabledTimesConfig: i,
    validateTime: M,
    updateTime: (w) => {
      B(w, q);
    }
  };
}, pl = /* @__PURE__ */ We({
  __name: "TimePickerSolo",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["time-update", "mount", "reset-flow", "update-flow-step"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = ht(), { mapSlots: s } = yt(), n = s(o, "timePicker"), l = Re("time-input"), { time: d, modelValue: B, disabledTimesConfig: A, updateTime: I, validateTime: b } = ml(r);
    return Ne(() => {
      r("mount");
    }), k({ getSidebarProps: () => ({
      modelValue: B,
      time: d,
      updateTime: I
    }), toggleTimePicker: (c, T = !1, v = "") => {
      l.value?.toggleTimePicker(c, T, v);
    } }), (c, T) => (O(), Se(la, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: we(({ wrapClass: v }) => [
        Pe("div", {
          class: be(v)
        }, [
          tt(qa, et({ ref: "time-input" }, c.$props, {
            hours: t(d).hours,
            minutes: t(d).minutes,
            seconds: t(d).seconds,
            "disabled-times-config": t(A),
            "validate-time": t(b),
            "onUpdate:hours": T[0] || (T[0] = (Y) => t(I)({ hours: Y, minutes: t(d).minutes, seconds: t(d).seconds })),
            "onUpdate:minutes": T[1] || (T[1] = (Y) => t(I)({ hours: t(d).hours, minutes: Y, seconds: t(d).seconds })),
            "onUpdate:seconds": T[2] || (T[2] = (Y) => t(I)({ hours: t(d).hours, minutes: t(d).minutes, seconds: Y })),
            onResetFlow: T[3] || (T[3] = (Y) => c.$emit("reset-flow"))
          }), Le({ _: 2 }, [
            Ye(t(n), (Y, V) => ({
              name: Y,
              fn: we((P) => [
                se(c.$slots, Y, Je(ot(P)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), hl = (e, k) => {
  const {
    getDate: p,
    rootProps: r,
    defaults: { filters: o }
  } = $e(), { validateMonthYearInRange: s, validateMonthYear: n } = at(), l = (b, i) => {
    let M = b;
    return o.value.months.includes(Te(M)) ? (M = i ? Dt(b, 1) : Lt(b, 1), l(M, i)) : M;
  }, d = (b, i) => {
    let M = b;
    return o.value.years.includes(ye(M)) ? (M = i ? Va(b, 1) : Ea(b, 1), d(M, i)) : M;
  }, B = (b, i = !1) => {
    const M = _e(p(), { month: e.month, year: e.year });
    let c = b ? Dt(M, 1) : Lt(M, 1);
    r.disableYearSelect && (c = lt(c, e.year));
    let T = Te(c), v = ye(c);
    o.value.months.includes(T) && (c = l(c, b), T = Te(c), v = ye(c)), o.value.years.includes(v) && (c = d(c, b), v = ye(c)), s(T, v, b, r.preventMinMaxNavigation) && A(T, v, i);
  }, A = (b, i, M) => {
    k("update-month-year", { month: b, year: i, fromNav: M });
  }, I = j(() => (b) => n(
    _e(p(), { month: e.month, year: e.year }),
    r.preventMinMaxNavigation,
    b
  ));
  return { handleMonthYearChange: B, isDisabled: I, updateMonthYear: A };
}, gl = { class: "dp--header-wrap" }, yl = {
  key: 0,
  class: "dp__month_year_wrap"
}, bl = { key: 0 }, kl = { class: "dp__month_year_wrap" }, wl = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], Dl = /* @__PURE__ */ We({
  __name: "DpHeader",
  props: {
    month: {},
    year: {},
    instance: {},
    years: {},
    months: {},
    menuWrapRef: {}
  },
  emits: ["mount", "reset-flow", "update-month-year"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, {
      rootEmit: s,
      rootProps: n,
      modelValue: l,
      defaults: { ariaLabels: d, filters: B, config: A, highlight: I, safeDates: b, ui: i }
    } = $e(), { transitionName: M, showTransition: c } = Kt(), { showLeftIcon: T, showRightIcon: v } = ra(), { buildMatrix: Y } = gt(), { handleMonthYearChange: V, isDisabled: P, updateMonthYear: F } = hl(o, r), { getMaxMonth: q, getMinMonth: R, getYearFromDate: w, groupListAndMap: u, checkHighlightYear: D, checkHighlightMonth: N } = je(), { checkKeyDown: Q } = Ee(), { formatYear: ae } = bt(), { checkMinMaxValue: Z } = at(), ve = de(!1), he = de(!1), L = de(!1), J = de([null, null, null, null]);
    Ne(() => {
      r("mount");
    });
    const W = ($) => ({
      get: () => o[$],
      set: (ie) => {
        const le = $ === rt.month ? rt.year : rt.month;
        r("update-month-year", { [$]: ie, [le]: o[le] }), $ === rt.month ? re(!0) : H(!0);
      }
    }), oe = j(W(rt.month)), z = j(W(rt.year)), ee = j(() => ($) => ({
      month: o.month,
      year: o.year,
      items: $ === rt.month ? o.months : o.years,
      instance: o.instance,
      updateMonthYear: F,
      toggle: $ === rt.month ? re : H
    })), fe = j(() => {
      const $ = o.months.find((ie) => ie.value === o.month);
      return $ || { text: "", value: 0 };
    }), ge = j(() => u(o.months, ($) => {
      const ie = o.month === $.value, le = Z(
        $.value,
        R(o.year, b.value.minDate),
        q(o.year, b.value.maxDate)
      ) || B.value.months.includes($.value), h = N(I.value, $.value, o.year);
      return { active: ie, disabled: le, highlighted: h };
    })), De = j(() => u(o.years, ($) => {
      const ie = o.year === $.value, le = Z(
        $.value,
        w(b.value.minDate),
        w(b.value.maxDate)
      ) || B.value.years.includes($.value), h = D(I.value, $.value);
      return { active: ie, disabled: le, highlighted: h };
    })), Ae = ($, ie, le) => {
      le === void 0 ? $.value = !$.value : $.value = le, $.value ? (L.value = !0, s("overlay-toggle", { open: !0, overlay: ie })) : (L.value = !1, s("overlay-toggle", { open: !1, overlay: ie }));
    }, re = ($ = !1, ie) => {
      E($), Ae(ve, qe.month, ie);
    }, H = ($ = !1, ie) => {
      E($), Ae(he, qe.year, ie);
    }, E = ($) => {
      $ || r("reset-flow");
    }, ce = ($, ie) => {
      n.arrowNavigation && (J.value[ie] = Qe($), Y(J.value, "monthYear"));
    }, ue = j(() => [
      {
        type: rt.month,
        index: 1,
        toggle: re,
        modelValue: oe.value,
        updateModelValue: ($) => oe.value = $,
        text: fe.value.text,
        showSelectionGrid: ve.value,
        items: ge.value,
        ariaLabel: d.value?.openMonthsOverlay,
        overlayLabel: d.value.monthPicker?.(!0) ?? void 0
      },
      {
        type: rt.year,
        index: 2,
        toggle: H,
        modelValue: z.value,
        updateModelValue: ($) => z.value = $,
        text: ae(o.year),
        showSelectionGrid: he.value,
        items: De.value,
        ariaLabel: d.value?.openYearsOverlay,
        overlayLabel: d.value.yearPicker?.(!0) ?? void 0
      }
    ]), y = j(() => n.disableYearSelect ? [ue.value[0]] : n.yearFirst ? [...ue.value].reverse() : ue.value);
    return k({
      toggleMonthPicker: re,
      toggleYearPicker: H,
      handleMonthYearChange: V
    }), ($, ie) => (O(), K("div", gl, [
      $.$slots["month-year"] ? (O(), K("div", yl, [
        se($.$slots, "month-year", Je(ot({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(F),
          handleMonthYearChange: t(V),
          instance: e.instance,
          isDisabled: t(P)
        })))
      ])) : (O(), K(ke, { key: 1 }, [
        $.$slots["top-extra"] ? (O(), K("div", bl, [
          se($.$slots, "top-extra", { value: t(l) })
        ])) : U("", !0),
        Pe("div", kl, [
          t(T)(e.instance) && !t(n).vertical ? (O(), Se(Ft, {
            key: 0,
            "aria-label": t(d)?.prevMonth,
            disabled: t(P)(!1),
            class: be(t(i)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: ie[0] || (ie[0] = (le) => t(V)(!1, !0)),
            onSetRef: ie[1] || (ie[1] = (le) => ce(le, 0))
          }, {
            default: we(() => [
              $.$slots["arrow-left"] ? se($.$slots, "arrow-left", { key: 0 }) : U("", !0),
              $.$slots["arrow-left"] ? U("", !0) : (O(), Se(t(Na), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : U("", !0),
          Pe("div", {
            class: be(["dp__month_year_wrap", {
              dp__year_disable_select: t(n).disableYearSelect
            }])
          }, [
            (O(!0), K(ke, null, Ye(y.value, (le, h) => (O(), K(ke, {
              key: le.type
            }, [
              Pe("button", {
                ref_for: !0,
                ref: (m) => ce(m, h + 1),
                type: "button",
                "data-dp-element": `overlay-${le.type}`,
                class: be(["dp__btn dp__month_year_select", { "dp--hidden-el": L.value }]),
                "aria-label": `${le.text}-${le.ariaLabel}`,
                "data-test-id": `${le.type}-toggle-overlay-${e.instance}`,
                onClick: (m) => le.toggle(!1),
                onKeydown: (m) => t(Q)(m, () => le.toggle(), !0)
              }, [
                $.$slots[le.type] ? se($.$slots, le.type, {
                  key: 0,
                  text: le.text,
                  value: o[le.type]
                }) : U("", !0),
                $.$slots[le.type] ? U("", !0) : (O(), K(ke, { key: 1 }, [
                  ct(Ke(le.text), 1)
                ], 64))
              ], 42, wl),
              tt(St, {
                name: t(M)(le.showSelectionGrid),
                css: t(c)
              }, {
                default: we(() => [
                  le.showSelectionGrid ? (O(), Se(zt, {
                    key: 0,
                    items: le.items,
                    "is-last": t(n).autoApply && !t(A).keepActionRow,
                    "skip-button-ref": !1,
                    type: le.type,
                    "header-refs": [],
                    "menu-wrap-ref": e.menuWrapRef,
                    "overlay-label": le.overlayLabel,
                    onSelected: le.updateModelValue,
                    onToggle: le.toggle
                  }, Le({
                    "button-icon": we(() => [
                      $.$slots["calendar-icon"] ? se($.$slots, "calendar-icon", { key: 0 }) : U("", !0),
                      $.$slots["calendar-icon"] ? U("", !0) : (O(), Se(t(Ht), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    $.$slots[`${le.type}-overlay-value`] ? {
                      name: "item",
                      fn: we(({ item: m }) => [
                        se($.$slots, `${le.type}-overlay-value`, {
                          text: m.text,
                          value: m.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    $.$slots[`${le.type}-overlay`] ? {
                      name: "overlay",
                      fn: we(() => [
                        se($.$slots, `${le.type}-overlay`, et({ ref_for: !0 }, ee.value(le.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    $.$slots[`${le.type}-overlay-header`] ? {
                      name: "header",
                      fn: we(() => [
                        se($.$slots, `${le.type}-overlay-header`, {
                          toggle: le.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "is-last", "type", "menu-wrap-ref", "overlay-label", "onSelected", "onToggle"])) : U("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          t(T)(e.instance) && t(n).vertical ? (O(), Se(Ft, {
            key: 1,
            "aria-label": t(d)?.prevMonth,
            "el-name": "action-prev",
            disabled: t(P)(!1),
            class: be(t(i)?.navBtnPrev),
            onActivate: ie[2] || (ie[2] = (le) => t(V)(!1, !0))
          }, {
            default: we(() => [
              $.$slots["arrow-up"] ? se($.$slots, "arrow-up", { key: 0 }) : U("", !0),
              $.$slots["arrow-up"] ? U("", !0) : (O(), Se(t(Ha), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : U("", !0),
          t(v)(e.instance) ? (O(), Se(Ft, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t(P)(!0),
            "aria-label": t(d)?.nextMonth,
            class: be(t(i)?.navBtnNext),
            onActivate: ie[3] || (ie[3] = (le) => t(V)(!0, !0)),
            onSetRef: ie[4] || (ie[4] = (le) => ce(le, t(n).disableYearSelect ? 2 : 3))
          }, {
            default: we(() => [
              $.$slots[t(n).vertical ? "arrow-down" : "arrow-right"] ? se($.$slots, t(n).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : U("", !0),
              $.$slots[t(n).vertical ? "arrow-down" : "arrow-right"] ? U("", !0) : (O(), Se(wa(t(n).vertical ? t(Ka) : t(Wa)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label", "class"])) : U("", !0)
        ])
      ], 64))
    ]));
  }
}), Ml = {
  class: "dp__calendar_header",
  role: "row"
}, _l = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Al = ["aria-label"], Pl = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, Tl = { class: "dp__cell_inner" }, $l = ["id", "aria-selected", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Sl = /* @__PURE__ */ We({
  __name: "DpCalendar",
  props: {
    instance: {},
    mappedDates: {},
    month: {},
    year: {}
  },
  emits: ["mount", "select-date", "set-hover-date", "handle-scroll", "handle-swipe"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, {
      getDate: s,
      rootEmit: n,
      rootProps: l,
      defaults: { transitions: d, config: B, ariaLabels: A, multiCalendars: I, weekNumbers: b, multiDates: i, ui: M }
    } = $e(), { buildMultiLevelMatrix: c } = gt(), { isDateAfter: T, isDateEqual: v, resetDateTime: Y, getCellId: V } = je(), { checkKeyDown: P, checkStopPropagation: F, isTouchDevice: q } = Ee(), { formatWeekDay: R } = bt(), w = Re("calendar-wrap"), u = Re("active-tooltip"), D = de([]), N = de(null), Q = de(!0), ae = de(!1), Z = de(""), ve = de({
      bottom: "",
      left: "",
      transform: ""
    }), he = de({ left: "50%" });
    pn(w, {
      onSwipeEnd: (g, C) => {
        B.value.noSwipe || (l.vertical ? (C === "up" || C === "down") && r("handle-swipe", C === "up" ? "left" : "right") : (C === "left" || C === "right") && r("handle-swipe", C === "right" ? "left" : "right"));
      }
    });
    const L = j(() => l.calendar ? l.calendar(o.mappedDates) : o.mappedDates), J = j(() => l.dayNames ? Array.isArray(l.dayNames) ? l.dayNames : l.dayNames() : x());
    Ne(() => {
      r("mount", { cmp: "calendar", dayRefs: D.value }), B.value.monthChangeOnScroll && w.value && w.value.addEventListener("wheel", y, { passive: !1 });
    }), $t(() => {
      B.value.monthChangeOnScroll && w.value && w.value.removeEventListener("wheel", y);
    });
    const W = (g) => g ? l.vertical ? "vNext" : "next" : l.vertical ? "vPrevious" : "previous", oe = (g, C) => {
      if (l.transitions) {
        const G = Y(_e(s(), { month: o.month, year: o.year }));
        Z.value = T(Y(_e(s(), { month: g, year: C })), G) ? d.value[W(!0)] : d.value[W(!1)], Q.value = !1, Ge(() => {
          Q.value = !0;
        });
      }
    }, z = j(
      () => ({
        ...M.value.calendar
      })
    ), ee = (g) => ({ type: "dot", ...g }), fe = j(() => (g) => {
      const C = ee(g);
      return {
        dp__marker_dot: C.type === "dot",
        dp__marker_line: C.type === "line"
      };
    }), ge = j(() => (g) => v(g, N.value)), De = j(() => ({
      dp__calendar: !0,
      dp__calendar_next: I.value.count > 0 && o.instance !== 0
    })), Ae = j(() => (g) => l.hideOffsetDates ? g.current : !0), re = async (g, C) => {
      const { width: G, height: a } = g.getBoundingClientRect();
      N.value = C.value;
      let f = { left: `${G / 2}px` }, S = -50;
      if (await Ge(), u.value?.[0]) {
        const { left: te, width: ne } = u.value[0].getBoundingClientRect();
        te < 0 && (f = { left: "0" }, S = 0, he.value.left = `${G / 2}px`), globalThis.innerWidth < te + ne && (f = { right: "0" }, S = 0, he.value.left = `${ne - G / 2}px`);
      }
      ve.value = {
        bottom: `${a}px`,
        ...f,
        transform: `translateX(${S}%)`
      };
    }, H = async (g, C, G) => {
      const a = Qe(D.value?.[C]?.[G]);
      a && (g.marker?.customPosition && g.marker?.tooltip?.length ? ve.value = g.marker.customPosition(a) : await re(a, g), n("tooltip-open", g.marker));
    }, E = async (g, C, G) => {
      if (ae.value && i.value.enabled && i.value.dragSelect)
        return r("select-date", g);
      if (r("set-hover-date", g), g.marker?.tooltip?.length) {
        if (l.hideOffsetDates && !g.current) return;
        await H(g, C, G);
      }
    }, ce = (g) => {
      N.value && (N.value = null, ve.value = structuredClone({ bottom: "", left: "", transform: "" }), n("tooltip-close", g.marker));
    }, ue = (g, C, G) => {
      g && (Array.isArray(D.value[C]) ? D.value[C][G] = g : D.value[C] = [g]), l.arrowNavigation && c(D.value, "calendar");
    }, y = (g) => {
      B.value.monthChangeOnScroll && (g.preventDefault(), r("handle-scroll", g));
    }, $ = (g) => b.value ? b.value.type === "local" ? Yn(g.value, {
      weekStartsOn: +l.weekStart,
      locale: l.locale
    }) : b.value.type === "iso" ? On(g.value) : typeof b.value.type == "function" ? b.value.type(g.value) : "" : "", ie = (g) => {
      const C = g[0];
      return b.value?.hideOnOffsetDates ? g.some((G) => G.current) ? $(C) : "" : $(C);
    }, le = (g, C, G = !0) => {
      !G && q() || (!i.value.enabled || B.value.allowPreventDefault) && (F(g, B.value), r("select-date", C));
    }, h = (g) => {
      F(g, B.value);
    }, m = (g) => {
      i.value.enabled && i.value.dragSelect ? (ae.value = !0, r("select-date", g)) : i.value.enabled && r("select-date", g);
    }, x = () => {
      const C = [1, 2, 3, 4, 5, 6, 7].map((f) => R(f)), G = C.slice(0, +l.weekStart), a = C.slice(+l.weekStart + 1, C.length);
      return [C[+l.weekStart]].concat(...a).concat(...G);
    };
    return k({ triggerTransition: oe }), (g, C) => (O(), K("div", {
      class: be(De.value)
    }, [
      Pe("div", {
        ref: "calendar-wrap",
        class: be(z.value),
        role: "grid"
      }, [
        Pe("div", Ml, [
          t(b) ? (O(), K("div", _l, Ke(t(b).label), 1)) : U("", !0),
          (O(!0), K(ke, null, Ye(J.value, (G, a) => (O(), K("div", {
            key: a,
            class: "dp__calendar_header_item",
            role: "gridcell",
            "data-test-id": "calendar-header",
            "aria-label": t(A)?.weekDay?.(a)
          }, [
            g.$slots["calendar-header"] ? se(g.$slots, "calendar-header", {
              key: 0,
              day: G,
              index: a
            }) : U("", !0),
            g.$slots["calendar-header"] ? U("", !0) : (O(), K(ke, { key: 1 }, [
              ct(Ke(G), 1)
            ], 64))
          ], 8, Al))), 128))
        ]),
        C[2] || (C[2] = Pe("div", { class: "dp__calendar_header_separator" }, null, -1)),
        tt(St, {
          name: Z.value,
          css: !!t(d)
        }, {
          default: we(() => [
            Q.value ? (O(), K("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: C[1] || (C[1] = (G) => ae.value = !1)
            }, [
              (O(!0), K(ke, null, Ye(L.value, (G, a) => (O(), K("div", {
                key: a,
                class: "dp__calendar_row",
                role: "row"
              }, [
                t(b) ? (O(), K("div", Pl, [
                  Pe("div", Tl, Ke(ie(G.days)), 1)
                ])) : U("", !0),
                (O(!0), K(ke, null, Ye(G.days, (f, S) => (O(), K("div", {
                  id: t(V)(f.value),
                  ref_for: !0,
                  ref: (te) => ue(te, a, S),
                  key: S + a,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (f.classData.dp__active_date || f.classData.dp__range_start || f.classData.dp__range_end) ?? void 0,
                  "aria-disabled": f.classData.dp__cell_disabled || void 0,
                  "aria-label": t(A)?.day?.(f),
                  tabindex: !f.current && t(l).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(V)(f.value),
                  onClick: Wt((te) => le(te, f), ["prevent"]),
                  onTouchend: (te) => le(te, f, !1),
                  onKeydown: (te) => t(P)(te, () => g.$emit("select-date", f)),
                  onMouseenter: (te) => E(f, a, S),
                  onMouseleave: (te) => ce(f),
                  onMousedown: (te) => m(f),
                  onMouseup: C[0] || (C[0] = (te) => ae.value = !1)
                }, [
                  Pe("div", {
                    class: be(["dp__cell_inner", f.classData])
                  }, [
                    g.$slots.day && Ae.value(f) ? se(g.$slots, "day", {
                      key: 0,
                      day: +f.text,
                      date: f.value
                    }) : U("", !0),
                    g.$slots.day ? U("", !0) : (O(), K(ke, { key: 1 }, [
                      ct(Ke(f.text), 1)
                    ], 64)),
                    f.marker && Ae.value(f) ? (O(), K(ke, { key: 2 }, [
                      g.$slots.marker ? se(g.$slots, "marker", {
                        key: 0,
                        marker: f.marker,
                        day: +f.text,
                        date: f.value
                      }) : (O(), K("div", {
                        key: 1,
                        class: be(fe.value(f.marker)),
                        style: Xe(f.marker.color ? { backgroundColor: f.marker.color } : {})
                      }, null, 6))
                    ], 64)) : U("", !0),
                    ge.value(f.value) ? (O(), K("div", {
                      key: 3,
                      ref_for: !0,
                      ref: "active-tooltip",
                      class: "dp__marker_tooltip",
                      style: Xe(ve.value)
                    }, [
                      f.marker?.tooltip ? (O(), K("div", {
                        key: 0,
                        class: "dp__tooltip_content",
                        onClick: h
                      }, [
                        (O(!0), K(ke, null, Ye(f.marker.tooltip, (te, ne) => (O(), K("div", {
                          key: ne,
                          class: "dp__tooltip_text"
                        }, [
                          g.$slots["marker-tooltip"] ? se(g.$slots, "marker-tooltip", {
                            key: 0,
                            tooltip: te,
                            day: f.value
                          }) : U("", !0),
                          g.$slots["marker-tooltip"] ? U("", !0) : (O(), K(ke, { key: 1 }, [
                            Pe("div", {
                              class: "dp__tooltip_mark",
                              style: Xe(te.color ? { backgroundColor: te.color } : {})
                            }, null, 4),
                            Pe("div", null, Ke(te.text), 1)
                          ], 64))
                        ]))), 128)),
                        Pe("div", {
                          class: "dp__arrow_bottom_tp",
                          style: Xe(he.value)
                        }, null, 4)
                      ])) : U("", !0)
                    ], 4)) : U("", !0)
                  ], 2)
                ], 40, $l))), 128))
              ]))), 128))
            ], 32)) : U("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Rl = (e, k, p, r) => {
  const o = de([]), s = de(/* @__PURE__ */ new Date()), n = de(), {
    getDate: l,
    rootEmit: d,
    calendars: B,
    month: A,
    year: I,
    time: b,
    modelValue: i,
    rootProps: M,
    today: c,
    state: T,
    defaults: { multiCalendars: v, startTime: Y, range: V, config: P, safeDates: F, multiDates: q, timeConfig: R, flow: w }
  } = $e(), { validateMonthYearInRange: u, isDisabled: D, isDateRangeAllowed: N, checkMinMaxRange: Q } = at(), { updateTimeValues: ae, getSetDateTime: Z, assignTime: ve, assignStartTime: he, validateTime: L, disabledTimesConfig: J } = Qa(r), { formatDay: W } = bt(), { resetDateTime: oe, setTime: z, isDateBefore: ee, isDateEqual: fe, getDaysInBetween: ge } = je(), { checkRangeAutoApply: De, getRangeWithFixedDate: Ae, handleMultiDatesSelect: re, setPresetDate: H } = oa(), { getMapDate: E } = Ee();
  jt(() => h(T.isTextInputDate));
  const ce = (_) => !P.value.keepViewOnOffsetClick || _ ? !0 : !n.value, ue = (_, X, pe, Me = !1) => {
    ce(Me) && (B.value[_] ??= B.value[_] = { month: 0, year: 0 }, B.value[_].month = X ?? B.value[_]?.month, B.value[_].year = pe ?? B.value[_]?.year);
  }, y = () => {
    M.autoApply && k("select-date");
  }, $ = () => {
    Y.value && he(Y.value);
  };
  Ne(() => {
    i.value || (Fe(), $()), h(!0), M.focusStartDate && M.startDate && Fe();
  });
  const ie = j(() => w.value?.steps?.length && !w.value?.partial ? e.flowStep === w.value.steps.length : !0), le = () => {
    M.autoApply && ie.value && k("auto-apply", w.value?.partial ? e.flowStep !== w.value?.steps?.length : !1);
  }, h = (_ = !1) => {
    if (i.value)
      return Array.isArray(i.value) ? (o.value = i.value, S(_)) : C(i.value, _);
    if (v.value.count && _ && !M.startDate)
      return g(l(), _);
  }, m = () => Array.isArray(i.value) && V.value.enabled ? Te(i.value[0]) === Te(i.value[1] ?? i.value[0]) : !1, x = (_) => {
    const X = Dt(_, 1);
    return { month: Te(X), year: ye(X) };
  }, g = (_ = l(), X = !1) => {
    if ((!v.value.count || !v.value.static || X) && ue(0, Te(_), ye(_)), v.value.count && (!i.value || m() || !v.value.solo) && (!v.value.solo || X))
      for (let pe = 1; pe < v.value.count; pe++) {
        const Me = _e(l(), { month: A.value(pe - 1), year: I.value(pe - 1) }), Be = Fa(Me, { months: 1 });
        B.value[pe] = { month: Te(Be), year: ye(Be) };
      }
  }, C = (_, X) => {
    g(_), ve("hours", ut(_)), ve("minutes", dt(_)), ve("seconds", pt(_)), v.value.count && X && Ce();
  }, G = (_) => {
    if (v.value.count) {
      if (v.value.solo) return 0;
      const X = Te(_[0]), pe = Te(_[1]);
      return Math.abs(pe - X) < v.value.count ? 0 : 1;
    }
    return 1;
  }, a = (_, X) => {
    _[1] && V.value.showLastInRange ? g(_[G(_)], X) : g(_[0], X);
    const pe = (Me, Be) => [
      Me(_[0]),
      _?.[1] ? Me(_[1]) : b[Be][1]
    ];
    ve("hours", pe(ut, "hours")), ve("minutes", pe(dt, "minutes")), ve("seconds", pe(pt, "seconds"));
  }, f = (_, X) => {
    if ((V.value.enabled || M.weekPicker) && !q.value.enabled)
      return a(_, X);
    if (q.value.enabled && X) {
      const pe = _[_.length - 1];
      return C(pe, X);
    }
  }, S = (_) => {
    const X = i.value;
    f(X, _), v.value.count && v.value.solo && Ce();
  }, te = (_, X) => {
    const pe = _e(l(), { month: A.value(X), year: I.value(X) }), Me = _ < 0 ? Dt(pe, 1) : Lt(pe, 1);
    u(Te(Me), ye(Me), _ < 0, M.preventMinMaxNavigation) && (ue(X, Te(Me), ye(Me)), d("update-month-year", { instance: X, month: Te(Me), year: ye(Me) }), v.value.count && !v.value.solo && ne(X), p());
  }, ne = (_) => {
    for (let X = _ - 1; X >= 0; X--) {
      const pe = Lt(_e(l(), { month: A.value(X + 1), year: I.value(X + 1) }), 1);
      ue(X, Te(pe), ye(pe));
    }
    for (let X = _ + 1; X <= v.value.count - 1; X++) {
      const pe = Dt(_e(l(), { month: A.value(X - 1), year: I.value(X - 1) }), 1);
      ue(X, Te(pe), ye(pe));
    }
  }, Ce = () => {
    if (Array.isArray(i.value) && i.value.length === 2) {
      const _ = l(l(i.value[1] ?? Dt(i.value[0], 1))), [X, pe] = [Te(i.value[0]), ye(i.value[0])], [Me, Be] = [Te(i.value[1]), ye(i.value[1])];
      (X !== Me || X === Me && pe !== Be) && v.value.solo && ue(1, Te(_), ye(_));
    } else i.value && !Array.isArray(i.value) && (ue(0, Te(i.value), ye(i.value)), g(l()));
  }, Fe = () => {
    M.startDate && (ue(0, Te(l(M.startDate)), ye(l(M.startDate))), v.value.count && ne(0));
  }, kt = (_, X) => {
    if (P.value.monthChangeOnScroll) {
      const pe = Date.now() - s.value.getTime(), Me = Math.abs(_.deltaY);
      let Be = 500;
      Me > 1 && (Be = 100), Me > 100 && (Be = 0), pe > Be && (s.value = /* @__PURE__ */ new Date(), te(
        P.value.monthChangeOnScroll === "inverse" ? _.deltaY : -_.deltaY,
        X
      ));
    }
  }, Rt = (_, X, pe = !1) => {
    P.value.monthChangeOnArrows && M.vertical === pe && Ut(_, X);
  }, Ut = (_, X) => {
    te(_ === "right" ? -1 : 1, X);
  }, sa = (_) => {
    if (F.value.markers)
      return E(_.value, F.value.markers);
  }, ua = (_, X) => {
    switch (M.sixWeeks === !0 ? "append" : M.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [_ == 0, !0];
      case "fair":
        return [_ == 0 || X > _, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, ia = (_, X, pe, Me) => {
    if (M.sixWeeks && _.length < 6) {
      const Be = 6 - _.length, ft = (X.getDay() + 7 - Me) % 7, Qt = 6 - (pe.getDay() + 7 - Me) % 7, [Bt, fa] = ua(ft, Qt);
      for (let wt = 1; wt <= Be; wt++)
        if (fa ? !!(wt % 2) == Bt : Bt) {
          const Gt = _[0].days[0], ma = Ct(mt(Gt.value, -7), Te(X));
          _.unshift({ days: ma });
        } else {
          const Gt = _[_.length - 1], ma = Gt.days[Gt.days.length - 1], on = Ct(mt(ma.value, 1), Te(X));
          _.push({ days: on });
        }
    }
    return _;
  }, Ct = (_, X) => {
    const pe = l(_), Me = [];
    for (let Be = 0; Be < 7; Be++) {
      const ft = mt(pe, Be), xt = Te(ft) !== X;
      Me.push({
        text: M.hideOffsetDates && xt ? "" : W(ft),
        value: ft,
        current: !xt,
        classData: {}
      });
    }
    return Me;
  }, ca = (_, X) => {
    const pe = [], Me = l(new Date(X, _)), Be = l(new Date(X, _ + 1, 0)), ft = M.weekStart, xt = Da(Me, { weekStartsOn: ft }), Qt = (Bt) => {
      const fa = Ct(Bt, _);
      if (pe.push({ days: fa }), !pe[pe.length - 1].days.some((wt) => fe(l(wt.value), oe(Be)))) {
        const wt = mt(Bt, 7);
        Qt(wt);
      }
    };
    return Qt(xt), ia(pe, Me, Be, ft);
  }, da = (_) => {
    const X = z(
      { hours: b.hours, minutes: b.minutes, seconds: vt() },
      l(_.value)
    );
    d("date-click", X), q.value.enabled ? re(X, q.value.limit) : i.value = X, r(), Ge().then(() => {
      le();
    });
  }, qt = (_) => V.value.noDisabledRange ? ge(o.value[0], _).some((pe) => D(pe)) : !1, va = () => {
    o.value = i.value ? i.value.slice().filter((_) => !!_) : [], o.value.length === 2 && !(V.value.fixedStart || V.value.fixedEnd) && (o.value = []);
  }, me = (_, X) => {
    const pe = [l(_.value), mt(l(_.value), +V.value.autoRange)];
    N(pe) ? (X && ze(_.value), o.value = pe) : d("invalid-date", _.value);
  }, ze = (_) => {
    const X = Te(l(_)), pe = ye(l(_));
    if (ue(0, X, pe), v.value.count > 0)
      for (let Me = 1; Me < v.value.count; Me++) {
        const Be = x(
          _e(l(_), { year: I.value(Me - 1), month: A.value(Me - 1) })
        );
        ue(Me, Be.month, Be.year);
      }
  }, nt = (_) => {
    if (qt(_.value) || !Q(_.value, i.value, V.value.fixedStart ? 0 : 1))
      return d("invalid-date", _.value);
    o.value = Ae(l(_.value));
  }, Yt = (_, X) => {
    if (va(), V.value.autoRange) return me(_, X);
    if (V.value.fixedStart || V.value.fixedEnd) return nt(_);
    o.value[0] ? Q(l(_.value), i.value) && !qt(_.value) ? ee(l(_.value), l(o.value[0])) ? (o.value.unshift(l(_.value)), d("range-end", o.value[0])) : (o.value[1] = l(_.value), d("range-end", o.value[1])) : d("invalid-date", _.value) : (o.value[0] = l(_.value), d("range-start", o.value[0]));
  }, vt = (_ = !0) => R.value.enableSeconds ? Array.isArray(b.seconds) ? _ ? b.seconds[0] : b.seconds[1] : b.seconds : 0, Ot = (_) => {
    o.value[_] = z(
      {
        hours: b.hours[_],
        minutes: b.minutes[_],
        seconds: vt(_ !== 1)
      },
      o.value[_]
    );
  }, Ga = () => {
    o.value[0] && o.value[1] && +o.value?.[0] > +o.value?.[1] && (o.value.reverse(), d("range-start", o.value[0]), d("range-end", o.value[1]));
  }, Ja = () => {
    o.value.length && (o.value[0] && !o.value[1] ? Ot(0) : (Ot(0), Ot(1), r()), Ga(), i.value = o.value.slice(), De(
      o.value,
      k,
      o.value.length < 2 || w.value?.steps.length ? e.flowStep !== w.value?.steps?.length : !1
    ));
  }, Xa = (_, X = !1) => {
    if (D(_.value) || !_.current && M.hideOffsetDates)
      return d("invalid-date", _.value);
    if (n.value = structuredClone(_), !V.value.enabled) return da(_);
    Array.isArray(b.hours) && Array.isArray(b.minutes) && !q.value.enabled && (Yt(_, X), Ja());
  }, Za = (_, X) => {
    ue(_, X.month, X.year, !0), v.value.count && !v.value.solo && ne(_), d("update-month-year", { instance: _, month: X.month, year: X.year }), p(v.value.solo ? _ : void 0);
    const pe = w.value?.steps?.length ? w.value.steps[e.flowStep] : void 0;
    !X.fromNav && (pe === qe.month || pe === qe.year) && r();
  }, en = (_) => {
    H({
      value: _
    }), y(), M.multiCalendars && Ge().then(() => h(!0));
  }, tn = () => {
    let _ = l();
    return M.actionRow?.nowBtnRound && (_ = xn(_, {
      roundingMethod: M.actionRow.nowBtnRound.rounding ?? "ceil",
      nearestTo: M.actionRow.nowBtnRound.roundTo ?? 15
    })), _;
  }, an = () => {
    const _ = tn();
    !V.value.enabled && !q.value.enabled ? i.value = _ : i.value && Array.isArray(i.value) && i.value[0] ? q.value.enabled ? i.value = [...i.value, _] : i.value = ee(_, i.value[0]) ? [_, i.value[0]] : [i.value[0], _] : i.value = [_], y();
  }, nn = () => {
    if (Array.isArray(i.value))
      if (q.value.enabled) {
        const _ = rn();
        i.value[i.value.length - 1] = Z(_);
      } else
        i.value = i.value.map((_, X) => _ && Z(_, X));
    else
      i.value = Z(i.value);
    k("time-update");
  }, rn = () => Array.isArray(i.value) && i.value.length ? i.value[i.value.length - 1] : null, ln = (_) => {
    let X = "";
    if (V.value.enabled && Array.isArray(i.value))
      for (const pe of Object.keys(_)) {
        const Me = _[pe];
        Array.isArray(Me) && (b[pe][0] !== Me[0] && (X = "range-start"), b[pe][1] !== Me[1] && (X = "range-start"));
      }
    return X;
  };
  return {
    calendars: B,
    modelValue: i,
    month: A,
    year: I,
    time: b,
    disabledTimesConfig: J,
    today: c,
    validateTime: L,
    getCalendarDays: ca,
    getMarker: sa,
    handleScroll: kt,
    handleSwipe: Ut,
    handleArrow: Rt,
    selectDate: Xa,
    updateMonthYear: Za,
    presetDate: en,
    selectCurrentDate: an,
    updateTime: (_) => {
      const X = ln(_);
      ae(_, nn), X && d(X, i.value[X === "range-start" ? 0 : 1]);
    },
    assignMonthAndYear: g,
    setStartTime: $
  };
}, Cl = () => {
  const {
    isModelAuto: e,
    matchDate: k,
    isDateAfter: p,
    isDateBefore: r,
    isDateBetween: o,
    isDateEqual: s,
    getWeekFromDate: n,
    getBeforeAndAfterInRange: l
  } = je(), {
    getDate: d,
    today: B,
    rootProps: A,
    defaults: { multiCalendars: I, multiDates: b, ui: i, highlight: M, safeDates: c, range: T },
    modelValue: v
  } = $e(), { isDisabled: Y } = at(), V = de(null), P = (h) => {
    !h.current && A.hideOffsetDates || (V.value = h.value);
  }, F = () => {
    V.value = null;
  }, q = (h) => Array.isArray(v.value) && T.value.enabled && v.value[0] && V.value ? h ? p(V.value, v.value[0]) : r(V.value, v.value[0]) : !0, R = (h, m) => {
    const x = () => v.value ? m ? v.value[0] || null : v.value[1] : null, g = v.value && Array.isArray(v.value) ? x() : null;
    return s(d(h.value), g);
  }, w = (h) => {
    const m = Array.isArray(v.value) ? v.value[0] : null;
    return h ? !r(V.value, m) : !0;
  }, u = (h, m = !0) => (T.value.enabled || A.weekPicker) && Array.isArray(v.value) && v.value.length === 2 ? A.hideOffsetDates && !h.current ? !1 : s(d(h.value), v.value[m ? 0 : 1]) : T.value.enabled ? R(h, m) && w(m) || s(h.value, Array.isArray(v.value) ? v.value[0] : null) && q(m) : !1, D = (h, m) => {
    if (Array.isArray(v.value) && v.value[0] && v.value.length === 1) {
      const x = s(h.value, V.value);
      return m ? p(v.value[0], h.value) && x : r(v.value[0], h.value) && x;
    }
    return !1;
  }, N = (h) => !v.value || A.hideOffsetDates && !h.current ? !1 : T.value.enabled ? A.modelAuto && Array.isArray(v.value) ? s(h.value, v.value[0] ?? B) : !1 : b.value.enabled && Array.isArray(v.value) ? v.value.some((m) => s(m, h.value)) : s(h.value, v.value ? v.value : B), Q = (h) => {
    if (T.value.autoRange || A.weekPicker) {
      if (V.value) {
        if (A.hideOffsetDates && !h.current) return !1;
        const m = mt(V.value, +T.value.autoRange), x = n(d(V.value), A.weekStart);
        return A.weekPicker ? s(x[1], d(h.value)) : s(m, d(h.value));
      }
      return !1;
    }
    return !1;
  }, ae = (h) => {
    if (T.value.autoRange || A.weekPicker) {
      if (V.value) {
        const m = mt(V.value, +T.value.autoRange);
        if (A.hideOffsetDates && !h.current) return !1;
        const x = n(d(V.value), A.weekStart);
        return A.weekPicker ? p(h.value, x[0]) && r(h.value, x[1]) : p(h.value, V.value) && r(h.value, m);
      }
      return !1;
    }
    return !1;
  }, Z = (h) => {
    if (T.value.autoRange || A.weekPicker) {
      if (V.value) {
        if (A.hideOffsetDates && !h.current) return !1;
        const m = n(d(V.value), A.weekStart);
        return A.weekPicker ? s(m[0], h.value) : s(V.value, h.value);
      }
      return !1;
    }
    return !1;
  }, ve = (h) => o(v.value, V.value, h.value), he = () => A.modelAuto && Array.isArray(v.value) ? !!v.value[0] : !1, L = () => A.modelAuto ? e(v.value) : !0, J = (h) => {
    if (A.weekPicker) return !1;
    const m = T.value.enabled ? !u(h) && !u(h, !1) : !0;
    return !Y(h.value) && !N(h) && !(!h.current && A.hideOffsetDates) && m;
  }, W = (h) => T.value.enabled ? A.modelAuto ? he() && N(h) : !1 : N(h), oe = (h) => M.value ? k(h.value, c.value.highlight) : !1, z = (h) => {
    const m = Y(h.value);
    return m && (typeof M.value == "function" ? !M.value(h.value, m) : !M.value.options.highlightDisabled);
  }, ee = (h) => typeof M.value == "function" ? M.value(h.value) : M.value.weekdays?.includes(h.value.getDay()), fe = (h) => (T.value.enabled || A.weekPicker) && (!(I.value.count > 0) || h.current) && L() && !(!h.current && A.hideOffsetDates) && !N(h) ? ve(h) : !1, ge = (h) => {
    if (Array.isArray(v.value) && v.value.length === 1) {
      const { before: m, after: x } = l(+T.value.maxRange, v.value[0]);
      return Tt(h.value, m) || _t(h.value, x);
    }
    return !1;
  }, De = (h) => {
    if (Array.isArray(v.value) && v.value.length === 1) {
      const { before: m, after: x } = l(+T.value.minRange, v.value[0]);
      return o([m, x], v.value[0], h.value);
    }
    return !1;
  }, Ae = (h) => T.value.enabled && (T.value.maxRange || T.value.minRange) ? T.value.maxRange && T.value.minRange ? ge(h) || De(h) : T.value.maxRange ? ge(h) : De(h) : !1, re = (h) => {
    const { isRangeStart: m, isRangeEnd: x } = ue(h), g = T.value.enabled ? m || x : !1;
    return {
      dp__cell_offset: !h.current,
      dp__pointer: !A.disabled && !(!h.current && A.hideOffsetDates) && !Y(h.value) && !Ae(h),
      dp__cell_disabled: Y(h.value) || Ae(h),
      dp__cell_highlight: !z(h) && (oe(h) || ee(h)) && !W(h) && !g && !Z(h) && !(fe(h) && A.weekPicker) && !x,
      dp__cell_highlight_active: !z(h) && (oe(h) || ee(h)) && W(h),
      dp__today: !A.noToday && s(h.value, B) && h.current,
      "dp--past": r(h.value, B),
      "dp--future": p(h.value, B)
    };
  }, H = (h) => ({
    dp__active_date: W(h),
    dp__date_hover: J(h)
  }), E = (h) => {
    if (v.value && !Array.isArray(v.value)) {
      const m = n(v.value, A.weekStart);
      return {
        ...$(h),
        dp__range_start: s(m[0], h.value),
        dp__range_end: s(m[1], h.value),
        dp__range_between_week: p(h.value, m[0]) && r(h.value, m[1])
      };
    }
    return {
      ...$(h)
    };
  }, ce = (h) => {
    if (v.value && Array.isArray(v.value)) {
      const m = n(v.value[0], A.weekStart), x = v.value[1] ? n(v.value[1], A.weekStart) : [];
      return {
        ...$(h),
        dp__range_start: s(m[0], h.value) || s(x[0], h.value),
        dp__range_end: s(m[1], h.value) || s(x[1], h.value),
        dp__range_between_week: p(h.value, m[0]) && r(h.value, m[1]) || p(h.value, x[0]) && r(h.value, x[1]),
        dp__range_between: p(h.value, m[1]) && r(h.value, x[0])
      };
    }
    return {
      ...$(h)
    };
  }, ue = (h) => {
    const m = I.value.count > 0 ? h.current && u(h) && L() : u(h) && L(), x = I.value.count > 0 ? h.current && u(h, !1) && L() : u(h, !1) && L();
    return { isRangeStart: m, isRangeEnd: x };
  }, y = (h) => {
    const { isRangeStart: m, isRangeEnd: x } = ue(h);
    return {
      dp__range_start: m,
      dp__range_end: x,
      dp__range_between: fe(h),
      dp__date_hover: s(h.value, V.value) && !m && !x && !A.weekPicker,
      dp__date_hover_start: D(h, !0),
      dp__date_hover_end: D(h, !1)
    };
  }, $ = (h) => ({
    ...y(h),
    dp__cell_auto_range: ae(h),
    dp__cell_auto_range_start: Z(h),
    dp__cell_auto_range_end: Q(h)
  }), ie = (h) => T.value.enabled ? T.value.autoRange ? $(h) : A.modelAuto ? { ...H(h), ...y(h) } : A.weekPicker ? ce(h) : y(h) : A.weekPicker ? E(h) : H(h);
  return {
    setHoverDate: P,
    clearHoverDate: F,
    getDayClassData: (h) => A.hideOffsetDates && !h.current ? {} : {
      ...re(h),
      ...ie(h),
      [i.value.dayClass ? i.value.dayClass(h.value, v.value) : ""]: !0,
      ...i.value.calendarCell
    }
  };
}, Yl = { key: 0 }, Ol = /* @__PURE__ */ We({
  __name: "DatePicker",
  props: /* @__PURE__ */ Oa({
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  }, Rr),
  emits: ["mount", "update-flow-step", "reset-flow", "focus-menu", "select-date", "time-update", "auto-apply"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, {
      month: s,
      year: n,
      modelValue: l,
      time: d,
      disabledTimesConfig: B,
      today: A,
      validateTime: I,
      getCalendarDays: b,
      getMarker: i,
      handleArrow: M,
      handleScroll: c,
      handleSwipe: T,
      selectDate: v,
      updateMonthYear: Y,
      presetDate: V,
      selectCurrentDate: P,
      updateTime: F,
      assignMonthAndYear: q,
      setStartTime: R
    } = Rl(o, r, E, ce), w = ht(), { setHoverDate: u, getDayClassData: D, clearHoverDate: N } = Cl(), {
      getDate: Q,
      rootEmit: ae,
      rootProps: Z,
      defaults: { multiCalendars: ve, timeConfig: he }
    } = $e(), { getYears: L, getMonths: J } = na(), { getCellId: W } = je(), { mapSlots: oe } = yt(), z = Re("calendar-header"), ee = Re("calendar"), fe = Re("time-picker"), ge = oe(w, "calendar"), De = oe(w, "monthYear"), Ae = oe(w, "timePicker"), re = (g) => {
      r("mount", g);
    };
    st(
      ve,
      (g, C) => {
        g.count - C.count > 0 && q();
      },
      { deep: !0 }
    );
    const H = j(() => (g) => b(s.value(g), n.value(g)).map((C) => ({
      ...C,
      days: C.days.map((G) => (G.marker = i(G), G.classData = D(G), G))
    })));
    function E(g) {
      g || g === 0 ? ee.value?.[g]?.triggerTransition(s.value(g), n.value(g)) : ee.value?.forEach((C, G) => C?.triggerTransition(s.value(G), n.value(G)));
    }
    function ce() {
      r("update-flow-step");
    }
    const ue = (g, C, G = 0) => {
      z.value?.[G]?.toggleMonthPicker(g, C);
    }, y = (g, C, G = 0) => {
      z.value?.[G]?.toggleYearPicker(g, C);
    }, $ = (g, C, G) => {
      fe.value?.toggleTimePicker(g, C, G);
    }, ie = (g, C) => {
      if (!Z.range) {
        const G = l.value ? l.value : A, a = C ? Q(C) : G, f = g ? Da(a, { weekStartsOn: 1 }) : Ba(a, { weekStartsOn: 1 });
        v({
          value: f,
          current: Te(a) === s.value(0),
          text: "",
          classData: {}
        }), document.getElementById(W(f))?.focus();
      }
    }, le = (g) => {
      z.value?.[0]?.handleMonthYearChange(g, !0);
    }, h = (g) => {
      Y(0, { month: s.value(0), year: n.value(0) + (g ? 1 : -1), fromNav: !0 });
    }, m = (g) => {
      ae("overlay-toggle", { open: !1, overlay: g }), r("focus-menu");
    };
    return k({
      clearHoverDate: N,
      presetDate: V,
      selectCurrentDate: P,
      handleArrow: M,
      updateMonthYear: Y,
      setStartTime: R,
      toggleMonthPicker: ue,
      toggleYearPicker: y,
      toggleTimePicker: $,
      getSidebarProps: () => ({
        modelValue: l,
        month: s,
        year: n,
        time: d,
        updateTime: F,
        updateMonthYear: Y,
        selectDate: v,
        presetDate: V
      }),
      changeMonth: le,
      changeYear: h,
      selectWeekDate: ie
    }), (g, C) => (O(), K(ke, null, [
      tt(la, { collapse: e.collapse }, {
        default: we(({ instances: G, wrapClass: a }) => [
          (O(!0), K(ke, null, Ye(G, (f) => (O(), K("div", {
            key: f,
            class: be(a)
          }, [
            t(Z).hideMonthYearSelect ? U("", !0) : (O(), Se(Dl, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(J)(),
              years: t(L)(),
              month: t(s)(f),
              year: t(n)(f),
              instance: f,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: C[0] || (C[0] = (S) => re(t(Mt).header)),
              onResetFlow: C[1] || (C[1] = (S) => g.$emit("reset-flow")),
              onUpdateMonthYear: (S) => t(Y)(f, S),
              onOverlayClosed: m
            }, Le({ _: 2 }, [
              Ye(t(De), (S, te) => ({
                name: S,
                fn: we((ne) => [
                  se(g.$slots, S, et({ ref_for: !0 }, ne))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            tt(Sl, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": H.value(f),
              instance: f,
              month: t(s)(f),
              year: t(n)(f),
              onSelectDate: (S) => t(v)(S, f !== 1),
              onSetHoverDate: C[2] || (C[2] = (S) => t(u)(S)),
              onHandleScroll: (S) => t(c)(S, f),
              onHandleSwipe: (S) => t(T)(S, f),
              onMount: C[3] || (C[3] = (S) => re(t(Mt).calendar))
            }, Le({ _: 2 }, [
              Ye(t(ge), (S, te) => ({
                name: S,
                fn: we((ne) => [
                  se(g.$slots, S, et({ ref_for: !0 }, { ...ne }))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(he).enableTimePicker ? (O(), K("div", Yl, [
        g.$slots["time-picker"] ? se(g.$slots, "time-picker", Je(et({ key: 0 }, { time: t(d), updateTime: t(F) }))) : (O(), Se(qa, {
          key: 1,
          ref: "time-picker",
          hours: t(d).hours,
          minutes: t(d).minutes,
          seconds: t(d).seconds,
          "disabled-times-config": t(B),
          "validate-time": t(I),
          "no-overlay-focus": e.noOverlayFocus,
          onMount: C[4] || (C[4] = (G) => re(t(Mt).timePicker)),
          "onUpdate:hours": C[5] || (C[5] = (G) => t(F)({ hours: G, minutes: t(d).minutes, seconds: t(d).seconds })),
          "onUpdate:minutes": C[6] || (C[6] = (G) => t(F)({ hours: t(d).hours, minutes: G, seconds: t(d).seconds })),
          "onUpdate:seconds": C[7] || (C[7] = (G) => t(F)({ hours: t(d).hours, minutes: t(d).minutes, seconds: G })),
          onResetFlow: C[8] || (C[8] = (G) => g.$emit("reset-flow"))
        }, Le({ _: 2 }, [
          Ye(t(Ae), (G, a) => ({
            name: G,
            fn: we((f) => [
              se(g.$slots, G, Je(ot(f)))
            ])
          }))
        ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"]))
      ])) : U("", !0)
    ], 64));
  }
}), xl = (e, k) => {
  const {
    getDate: p,
    modelValue: r,
    year: o,
    calendars: s,
    defaults: { highlight: n, range: l, multiDates: d }
  } = $e(), { isDateBetween: B, isDateEqual: A } = je(), { checkRangeAutoApply: I, handleMultiDatesSelect: b, setMonthOrYearRange: i } = oa();
  jt();
  const { isDisabled: M } = at(), { formatQuarterText: c } = bt(), {
    selectYear: T,
    groupedYears: v,
    showYearPicker: Y,
    isDisabled: V,
    toggleYearPicker: P,
    handleYearSelect: F,
    handleYear: q,
    setStartDate: R
  } = Ua(k), w = de();
  Ne(() => {
    R();
  });
  const u = j(() => (W) => r.value ? Array.isArray(r.value) ? r.value.some((oe) => Aa(W, oe)) : Aa(r.value, W) : !1), D = (W) => {
    if (l.value.enabled) {
      if (Array.isArray(r.value)) {
        const oe = A(W, r.value[0]) || A(W, r.value[1]);
        return B(r.value, w.value, W) && !oe;
      }
      return !1;
    }
    return !1;
  }, N = (W, oe) => W.quarter === Ta(oe) && W.year === ye(oe), Q = (W) => typeof n.value == "function" ? n.value({ quarter: Ta(W), year: ye(W) }) : n.value.quarters.some((oe) => N(oe, W)), ae = j(() => (W) => {
    const oe = _e(p(), { year: o.value(W) });
    return Bn({
      start: Et(oe),
      end: Ia(oe)
    }).map((z) => {
      const ee = In(z), fe = Pa(z), ge = M(z), De = D(ee), Ae = Q(ee);
      return {
        text: c(ee, fe),
        value: ee,
        active: u.value(ee),
        highlighted: Ae,
        disabled: ge,
        isBetween: De
      };
    });
  }), Z = (W) => {
    b(W, d.value.limit), k("auto-apply", !0);
  }, ve = (W) => {
    r.value = i(W), I(r.value, k, r.value.length < 2);
  }, he = (W) => {
    r.value = W, k("auto-apply");
  };
  return {
    groupedYears: v,
    year: o,
    isDisabled: V,
    quarters: ae,
    showYearPicker: Y,
    modelValue: r,
    selectYear: T,
    toggleYearPicker: P,
    handleYearSelect: F,
    handleYear: q,
    setHoverDate: (W) => {
      w.value = W;
    },
    selectQuarter: (W, oe, z) => {
      if (!z)
        return s.value[oe].month = Te(Pa(W)), d.value.enabled ? Z(W) : l.value.enabled ? ve(W) : he(W);
    }
  };
}, Bl = { class: "dp--quarter-items" }, Il = ["data-test-id", "disabled", "onClick", "onMouseover"], Vl = /* @__PURE__ */ We({
  __name: "QuarterPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e, {
      defaults: { config: s }
    } = $e(), n = ht(), { mapSlots: l } = yt(), d = l(n, "yearMode"), {
      groupedYears: B,
      year: A,
      isDisabled: I,
      quarters: b,
      modelValue: i,
      showYearPicker: M,
      setHoverDate: c,
      selectQuarter: T,
      toggleYearPicker: v,
      handleYearSelect: Y,
      handleYear: V
    } = xl(o, r);
    return k({ getSidebarProps: () => ({
      modelValue: i,
      year: A,
      selectQuarter: T,
      handleYearSelect: Y,
      handleYear: V
    }) }), (F, q) => (O(), Se(la, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: we(({ instances: R, wrapClass: w }) => [
        (O(!0), K(ke, null, Ye(R, (u) => (O(), K("div", {
          key: u,
          class: be(w)
        }, [
          Pe("div", {
            class: "dp-quarter-picker-wrap",
            style: Xe({ minHeight: `${t(s).modeHeight}px` })
          }, [
            F.$slots["top-extra"] ? se(F.$slots, "top-extra", {
              key: 0,
              value: t(i)
            }) : U("", !0),
            Pe("div", null, [
              tt(za, {
                items: t(B)(u),
                instance: u,
                "show-year-picker": t(M)[u],
                year: t(A)(u),
                "is-disabled": (D) => t(I)(u, D),
                onHandleYear: (D) => t(V)(u, D),
                onYearSelect: (D) => t(Y)(D, u),
                onToggleYearPicker: (D) => t(v)(u, D?.flow, D?.show)
              }, Le({ _: 2 }, [
                Ye(t(d), (D, N) => ({
                  name: D,
                  fn: we((Q) => [
                    se(F.$slots, D, et({ ref_for: !0 }, Q))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            Pe("div", Bl, [
              (O(!0), K(ke, null, Ye(t(b)(u), (D, N) => (O(), K("div", { key: N }, [
                Pe("button", {
                  type: "button",
                  class: be(["dp--qr-btn", {
                    "dp--qr-btn-active": D.active,
                    "dp--qr-btn-between": D.isBetween,
                    "dp--qr-btn-disabled": D.disabled,
                    "dp--highlighted": D.highlighted
                  }]),
                  "data-test-id": D.value,
                  disabled: D.disabled,
                  onClick: (Q) => t(T)(D.value, u, D.disabled),
                  onMouseover: (Q) => t(c)(D.value)
                }, [
                  F.$slots.quarter ? se(F.$slots, "quarter", {
                    key: 0,
                    value: D.value,
                    text: D.text
                  }) : (O(), K(ke, { key: 1 }, [
                    ct(Ke(D.text), 1)
                  ], 64))
                ], 42, Il)
              ]))), 128))
            ])
          ], 4)
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), El = ["id", "tabindex", "role", "aria-label"], Fl = {
  key: 0,
  class: "dp--menu-load-container"
}, Nl = {
  key: 1,
  class: "dp--menu-header"
}, Wl = ["data-dp-mobile"], Ll = {
  key: 0,
  class: "dp__sidebar_left"
}, Hl = ["data-dp-mobile"], Kl = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], jl = { class: "dp__instance_calendar" }, zl = {
  key: 2,
  class: "dp__sidebar_right"
}, Ul = {
  key: 3,
  class: "dp__action_extra"
}, ql = /* @__PURE__ */ We({
  __name: "DatepickerMenu",
  props: {
    collapse: { type: Boolean },
    noOverlayFocus: { type: Boolean },
    getInputRect: { type: Function }
  },
  emits: ["close-picker", "select-date", "auto-apply", "time-update", "menu-blur"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = ht(), {
      state: s,
      rootProps: n,
      defaults: { textInput: l, inline: d, config: B, ui: A, ariaLabels: I },
      setState: b
    } = $e(), { isMobile: i } = aa(), { mapSlots: M } = yt(), { handleEventPropagation: c, getElWithin: T, checkStopPropagation: v, checkKeyDown: Y } = Ee(), { arrowRight: V, arrowLeft: P, arrowDown: F, arrowUp: q } = gt(), R = Re("inner-menu"), w = Re("dp-menu"), u = Re("dyn-cmp"), D = de(0), N = de(!1), Q = de(!1), { flowStep: ae, updateFlowStep: Z, childMount: ve, resetFlow: he, handleFlow: L } = Hn(u), J = (a) => {
      Q.value = !0, B.value.allowPreventDefault && a.preventDefault(), v(a, B.value, !0);
    };
    Ne(() => {
      N.value = !0, W(), globalThis.addEventListener("resize", W);
      const a = Qe(w);
      a && !l.value.enabled && !d.value.enabled && (b("menuFocused", !0), z()), a && (a.addEventListener("pointerdown", J), a.addEventListener("mousedown", J)), document.addEventListener("mousedown", C);
    }), $t(() => {
      globalThis.removeEventListener("resize", W), document.removeEventListener("mousedown", C);
      const a = Qe(w);
      a && (a.removeEventListener("pointerdown", J), a.removeEventListener("mousedown", J));
    });
    const W = () => {
      const a = Qe(R);
      a && (D.value = a.getBoundingClientRect().width);
    }, oe = j(() => n.monthPicker ? Zr : n.yearPicker ? tl : n.timePicker ? pl : n.quarterPicker ? Vl : Ol), z = () => {
      const a = Qe(w);
      a && a.focus({ preventScroll: !0 });
    }, ee = j(() => u.value?.getSidebarProps() || {}), fe = M(o, "action"), ge = j(() => n.monthPicker || n.yearPicker ? M(o, "monthYear") : n.timePicker ? M(o, "timePicker") : M(o, "shared")), De = j(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), Ae = j(
      () => ({
        dp__menu: !0,
        dp__menu_index: !d.value.enabled,
        dp__relative: d.value.enabled,
        ...A.value.menu
      })
    ), re = (a) => {
      v(a, B.value, !0);
    }, H = (a) => {
      B.value.escClose && (r("close-picker"), c(a, B.value));
    }, E = (a) => {
      if (n.arrowNavigation) {
        if (a === Ue.up) return q();
        if (a === Ue.down) return F();
        if (a === Ue.left) return P();
        if (a === Ue.right) return V();
      } else a === Ue.left || a === Ue.up ? $("handleArrow", Ue.left, 0, a === Ue.up) : $("handleArrow", Ue.right, 0, a === Ue.down);
    }, ce = (a) => {
      b("shiftKeyInMenu", a.shiftKey), !n.hideMonthYearSelect && a.code === xe.tab && a.target.classList.contains("dp__menu") && s.shiftKeyInMenu && (a.preventDefault(), v(a, B.value, !0), r("close-picker"));
    }, ue = (a) => {
      u.value?.toggleTimePicker(!1, !1), u.value?.toggleMonthPicker(!1, !1, a), u.value?.toggleYearPicker(!1, !1, a);
    }, y = (a, f = 0) => a === "month" ? u.value?.toggleMonthPicker(!1, !0, f) : a === "year" ? u.value?.toggleYearPicker(!1, !0, f) : a === "time" ? u.value?.toggleTimePicker(!0, !1) : ue(f), $ = (a, ...f) => {
      u.value?.[a] && u.value?.[a](...f);
    }, ie = () => {
      $("selectCurrentDate");
    }, le = (a) => {
      $("presetDate", fn(a));
    }, h = () => {
      $("clearHoverDate");
    }, m = (a, f) => {
      $("updateMonthYear", a, f);
    }, x = (a, f) => {
      a.preventDefault(), E(f);
    }, g = (a) => {
      if (ce(a), a.key === xe.home || a.key === xe.end)
        return $(
          "selectWeekDate",
          a.key === xe.home,
          a.target.getAttribute("id")
        );
      switch ((a.key === xe.pageUp || a.key === xe.pageDown) && (a.shiftKey ? ($("changeYear", a.key === xe.pageUp), T(w.value, "overlay-year")?.focus()) : ($("changeMonth", a.key === xe.pageUp), T(w.value, a.key === xe.pageUp ? "action-prev" : "action-next")?.focus()), a.target.getAttribute("id") && w.value?.focus({ preventScroll: !0 })), a.key) {
        case xe.esc:
          return H(a);
        case xe.arrowLeft:
          return x(a, Ue.left);
        case xe.arrowRight:
          return x(a, Ue.right);
        case xe.arrowUp:
          return x(a, Ue.up);
        case xe.arrowDown:
          return x(a, Ue.down);
        default:
          return;
      }
    }, C = (a) => {
      d.value.enabled && !d.value.input && !w.value?.contains(a.target) && Q.value && (Q.value = !1, r("menu-blur"));
    };
    return k({
      updateMonthYear: m,
      switchView: y,
      onValueCleared: () => {
        u.value?.setStartTime?.();
      },
      handleFlow: L
    }), (a, f) => (O(), K("div", {
      id: t(n).menuId,
      ref: "dp-menu",
      tabindex: t(d).enabled ? void 0 : "0",
      role: t(d).enabled ? void 0 : "dialog",
      "aria-label": t(I)?.menu,
      class: be(Ae.value),
      onMouseleave: h,
      onClick: re,
      onKeydown: g
    }, [
      (t(n).disabled || t(n).readonly) && t(d).enabled || t(n).loading ? (O(), K("div", {
        key: 0,
        class: be(De.value)
      }, [
        t(n).loading ? (O(), K("div", Fl, [...f[5] || (f[5] = [
          Pe("span", { class: "dp--menu-loader" }, null, -1)
        ])])) : U("", !0)
      ], 2)) : U("", !0),
      a.$slots["menu-header"] ? (O(), K("div", Nl, [
        se(a.$slots, "menu-header")
      ])) : U("", !0),
      se(a.$slots, "arrow"),
      Pe("div", {
        ref: "inner-menu",
        class: be({
          dp__menu_content_wrapper: t(n).presetDates?.length || !!a.$slots["left-sidebar"] || !!a.$slots["right-sidebar"],
          "dp--menu-content-wrapper-collapsed": e.collapse && (t(n).presetDates?.length || !!a.$slots["left-sidebar"] || !!a.$slots["right-sidebar"])
        }),
        "data-dp-mobile": t(i),
        style: Xe({ "--dp-menu-width": `${D.value}px` })
      }, [
        a.$slots["left-sidebar"] ? (O(), K("div", Ll, [
          se(a.$slots, "left-sidebar", Je(ot(ee.value)))
        ])) : U("", !0),
        t(n).presetDates.length ? (O(), K("div", {
          key: 1,
          class: be({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(i)
        }, [
          (O(!0), K(ke, null, Ye(t(n).presetDates, (S, te) => (O(), K(ke, { key: te }, [
            S.slot ? se(a.$slots, S.slot, {
              key: 0,
              presetDate: le,
              label: S.label,
              value: S.value
            }) : (O(), K("button", {
              key: 1,
              type: "button",
              style: Xe(S.style || {}),
              class: be(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
              "data-test-id": S.testId ?? void 0,
              "data-dp-mobile": t(i),
              onClick: Wt((ne) => le(S.value), ["prevent"]),
              onKeydown: (ne) => t(Y)(ne, () => le(S.value), !0)
            }, Ke(S.label), 47, Kl))
          ], 64))), 128))
        ], 10, Hl)) : U("", !0),
        Pe("div", jl, [
          (O(), Se(wa(oe.value), {
            ref: "dyn-cmp",
            "flow-step": t(ae),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": w.value,
            onMount: t(ve),
            onUpdateFlowStep: t(Z),
            onResetFlow: t(he),
            onFocusMenu: z,
            onSelectDate: f[0] || (f[0] = (S) => a.$emit("select-date")),
            onAutoApply: f[1] || (f[1] = (S) => a.$emit("auto-apply", S)),
            onTimeUpdate: f[2] || (f[2] = (S) => a.$emit("time-update"))
          }, Le({ _: 2 }, [
            Ye(ge.value, (S, te) => ({
              name: S,
              fn: we((ne) => [
                se(a.$slots, S, Je(ot({ ...ne })))
              ])
            }))
          ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
        ]),
        a.$slots["right-sidebar"] ? (O(), K("div", zl, [
          se(a.$slots, "right-sidebar", Je(ot(ee.value)))
        ])) : U("", !0),
        a.$slots["action-extra"] ? (O(), K("div", Ul, [
          a.$slots["action-extra"] ? se(a.$slots, "action-extra", {
            key: 0,
            selectCurrentDate: ie
          }) : U("", !0)
        ])) : U("", !0)
      ], 14, Wl),
      !t(n).autoApply || t(B).keepActionRow ? (O(), Se(Kr, {
        key: 2,
        "menu-mount": N.value,
        "calendar-width": D.value,
        onClosePicker: f[3] || (f[3] = (S) => a.$emit("close-picker")),
        onSelectDate: f[4] || (f[4] = (S) => a.$emit("select-date")),
        onSelectNow: ie
      }, Le({ _: 2 }, [
        Ye(t(fe), (S, te) => ({
          name: S,
          fn: we((ne) => [
            se(a.$slots, S, Je(ot({ ...ne })))
          ])
        }))
      ]), 1032, ["menu-mount", "calendar-width"])) : U("", !0)
    ], 42, El));
  }
}), Ql = ["data-dp-mobile"], Gl = /* @__PURE__ */ We({
  __name: "VueDatePicker",
  setup(e, { expose: k }) {
    const {
      rootEmit: p,
      setState: r,
      inputValue: o,
      modelValue: s,
      rootProps: n,
      defaults: { inline: l, config: d, textInput: B, range: A, multiDates: I, teleport: b, floatingConfig: i }
    } = $e(), { clearArrowNav: M } = gt(), { validateDate: c, isValidTime: T } = at(), { menuTransition: v, showTransition: Y } = Kt(), { isMobile: V } = aa(), { mapSlots: P } = yt(), { findNextFocusableElement: F, getNumVal: q } = Ee(), R = ht(), w = de(!1), u = de(l.value.enabled), D = Ma(n, "modelValue"), N = Ma(n, "timezone"), Q = Re("dp-menu-wrap"), ae = Re("dp-menu"), Z = Re("input-cmp"), ve = Re("picker-wrapper"), he = Re("menu-arrow"), L = de(!1), J = de(!1), W = de(!1), oe = (me) => (i.value.arrow && (i.value.arrow === !0 ? me.push(_a({ element: he })) : me.push(_a({ element: i.value.arrow }))), me), { floatingStyles: z, middlewareData: ee, placement: fe, y: ge } = gn(
      Z,
      Q,
      {
        strategy: i.value.strategy,
        placement: i.value.placement,
        middleware: oe([bn(i.value.offset), kn(), wn()]),
        whileElementsMounted: yn
      }
    );
    Ne(() => {
      re(n.modelValue), Ge().then(() => {
        l.value.enabled || globalThis.addEventListener("resize", h);
      }), l.value.enabled && (w.value = !0), globalThis.addEventListener("keyup", m), globalThis.addEventListener("keydown", x);
    }), $t(() => {
      l.value.enabled || globalThis.removeEventListener("resize", h), globalThis.removeEventListener("keyup", m), globalThis.removeEventListener("keydown", x);
    });
    const De = P(R, "all", n.presetDates), Ae = P(R, "input");
    st(
      [D, N],
      () => {
        re(D.value);
      },
      { deep: !0 }
    ), st([fe, ge], () => {
      !l.value.enabled && !n.centered && (u.value = !1, Ge().then(() => {
        u.value = !0;
      }));
    });
    const { parseExternalModelValue: re, emitModelValue: H, formatInputValue: E, checkBeforeEmit: ce } = Nn(), ue = j(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: l.value.enabled,
        "dp--flex-display-collapsed": W.value,
        dp__flex_display_with_input: l.value.input
      })
    ), y = j(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), $ = j(() => l.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), ie = () => Z.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, le = () => {
      w.value && d.value.closeOnScroll && Ce();
    }, h = () => {
      const me = ae.value?.$el.getBoundingClientRect().width ?? 0;
      W.value = document.body.offsetWidth <= me;
    }, m = (me) => {
      me.key === "Tab" && !l.value.enabled && !n.teleport && d.value.tabOutClosesMenu && (ve.value.contains(document.activeElement) || Ce()), J.value = me.shiftKey;
    }, x = (me) => {
      J.value = me.shiftKey;
    }, g = () => {
      !n.disabled && !n.readonly && (w.value = !0, w.value && p("open"), w.value || ne(), re(n.modelValue));
    }, C = () => {
      o.value = "", ne(), ae.value?.onValueCleared(), Z.value?.setParsedDate(null), p("update:model-value", null), p("cleared"), d.value.closeOnClearValue && Ce();
    }, G = () => {
      const me = s.value;
      return !me || !Array.isArray(me) && c(me) ? !0 : Array.isArray(me) ? I.value.enabled || me.length === 2 && c(me[0]) && c(me[1]) ? !0 : A.value.partialRange && !n.timePicker ? c(me[0]) : !1 : !1;
    }, a = () => {
      ce() && G() ? (H(), Ce()) : p("invalid-select");
    }, f = (me) => {
      S(), H(), d.value.closeOnAutoApply && !me && Ce();
    }, S = () => {
      Z.value && B.value.enabled && Z.value.setParsedDate(s.value);
    }, te = (me = !1) => {
      n.autoApply && T(s.value) && G() && (A.value.enabled && Array.isArray(s.value) ? (A.value.partialRange || s.value.length === 2) && f(me) : f(me));
    }, ne = () => {
      B.value.enabled || (s.value = null);
    }, Ce = (me = !1) => {
      me && s.value && d.value.setDateOnMenuClose && a(), l.value.enabled || (w.value && (w.value = !1, r("menuFocused", !1), r("shiftKeyInMenu", !1), M(), p("closed"), o.value && re(D.value)), ne(), p("blur"));
    }, Fe = (me, ze, nt = !1) => {
      if (!me) {
        s.value = null;
        return;
      }
      const Yt = Array.isArray(me) ? !me.some((Ot) => !c(Ot)) : c(me), vt = T(me);
      Yt && vt ? (r("isTextInputDate", !0), s.value = me, ze ? (L.value = nt, a(), p("text-submit")) : n.autoApply && te(!0), Ge().then(() => {
        r("isTextInputDate", !1);
      })) : p("invalid-date", me);
    }, kt = () => {
      n.autoApply && T(s.value) && H(), S();
    }, Rt = () => w.value ? Ce() : g(), Ut = (me) => {
      s.value = me;
    }, sa = () => {
      B.value.enabled && (r("isInputFocused", !0), E()), p("focus");
    }, ua = () => {
      B.value.enabled && (r("isInputFocused", !1), re(n.modelValue), L.value && F(ve.value, J.value)?.focus()), p("blur");
    }, ia = (me, ze) => {
      ae.value && ae.value.updateMonthYear(ze ?? 0, {
        month: q(me.month),
        year: q(me.year)
      });
    }, Ct = (me) => {
      re(me ?? n.modelValue);
    }, ca = (me, ze) => {
      ae.value?.switchView(me, ze);
    }, da = (me, ze) => {
      if (w.value)
        return d.value.onClickOutside ? d.value.onClickOutside(me, ze) : Ce(!0);
    }, qt = (me = 0) => {
      ae.value?.handleFlow(me);
    }, va = () => Q;
    return hn(Q, (me) => da(G, me), {
      ignore: [Z]
    }), k({
      closeMenu: Ce,
      selectDate: a,
      clearValue: C,
      openMenu: g,
      onScroll: le,
      formatInputValue: E,
      // exposed for testing purposes
      updateInternalModelValue: Ut,
      // modify internal modelValue
      setMonthYear: ia,
      parseModel: Ct,
      switchView: ca,
      toggleMenu: Rt,
      handleFlow: qt,
      getDpWrapMenuRef: va
    }), (me, ze) => (O(), K("div", {
      ref: "picker-wrapper",
      class: be(ue.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": t(V)
    }, [
      tt(Fr, {
        ref: "input-cmp",
        "is-menu-open": w.value,
        onClear: C,
        onOpen: g,
        onSetInputDate: Fe,
        onSetEmptyDate: t(H),
        onSelectDate: a,
        onToggle: Rt,
        onClose: Ce,
        onFocus: sa,
        onBlur: ua,
        onRealBlur: ze[0] || (ze[0] = (nt) => t(r)("isInputFocused", !1))
      }, Le({ _: 2 }, [
        Ye(t(Ae), (nt, Yt) => ({
          name: nt,
          fn: we((vt) => [
            se(me.$slots, nt, Je(ot(vt)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      (O(), Se(mn, {
        to: t(b),
        disabled: !t(b)
      }, [
        Pe("div", {
          ref: "dp-menu-wrap",
          class: be({
            "dp--menu-wrapper": !t(l).enabled,
            dp__outer_menu_wrap: !0,
            "dp--centered": t(n).centered
          }),
          style: Xe(!t(l).enabled && !t(n).centered ? t(z) : void 0)
        }, [
          tt(St, {
            name: t(v)(t(fe).startsWith("top")),
            css: t(Y) && !t(l).enabled && !t(n).centered && u.value
          }, {
            default: we(() => [
              w.value && u.value ? (O(), Se(ql, {
                key: 0,
                ref: "dp-menu",
                class: be({ [y.value]: !0 }),
                "no-overlay-focus": $.value,
                collapse: W.value,
                "get-input-rect": ie,
                onClosePicker: Ce,
                onSelectDate: a,
                onAutoApply: te,
                onTimeUpdate: kt,
                onMenuBlur: ze[1] || (ze[1] = (nt) => t(p)("blur"))
              }, Le({ _: 2 }, [
                Ye(t(De), (nt, Yt) => ({
                  name: nt,
                  fn: we((vt) => [
                    se(me.$slots, nt, Je(ot({ ...vt })))
                  ])
                })),
                !t(l).enabled && !t(n).centered && t(i).arrow === !0 ? {
                  name: "arrow",
                  fn: we(() => [
                    Pe("div", {
                      ref: "menu-arrow",
                      class: be({
                        dp__arrow_top: t(fe) === "bottom",
                        dp__arrow_bottom: t(fe) === "top"
                      }),
                      style: Xe({
                        left: t(ee).arrow?.x != null ? `${t(ee).arrow.x}px` : "",
                        top: t(ee).arrow?.y != null ? `${t(ee).arrow.y}px` : ""
                      })
                    }, null, 6)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["class", "no-overlay-focus", "collapse"])) : U("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ], 6)
      ], 8, ["to", "disabled"]))
    ], 10, Ql));
  }
}), ro = /* @__PURE__ */ We({
  __name: "VueDatePickerRoot",
  props: /* @__PURE__ */ Oa({
    multiCalendars: { type: [Boolean, Number, String, Object] },
    modelValue: {},
    modelType: {},
    dark: { type: Boolean },
    transitions: { type: [Boolean, Object] },
    ariaLabels: {},
    hideNavigation: {},
    timezone: {},
    vertical: { type: Boolean },
    hideMonthYearSelect: { type: Boolean },
    disableYearSelect: { type: Boolean },
    yearRange: {},
    autoApply: { type: Boolean },
    disabledDates: { type: [Array, Function] },
    startDate: {},
    hideOffsetDates: { type: Boolean },
    noToday: { type: Boolean },
    allowedDates: {},
    markers: {},
    presetDates: {},
    flow: {},
    preventMinMaxNavigation: { type: Boolean },
    reverseYears: { type: Boolean },
    weekPicker: { type: Boolean },
    filters: {},
    arrowNavigation: { type: Boolean },
    highlight: { type: [Function, Object] },
    teleport: { type: [String, Boolean] },
    centered: { type: Boolean },
    locale: {},
    weekStart: {},
    weekNumbers: { type: [Boolean, Object] },
    dayNames: { type: [Function, Array] },
    monthPicker: { type: Boolean },
    yearPicker: { type: Boolean },
    modelAuto: { type: Boolean },
    formats: {},
    multiDates: { type: [Boolean, Object] },
    minDate: {},
    maxDate: {},
    minTime: {},
    maxTime: {},
    inputAttrs: {},
    timeConfig: {},
    placeholder: {},
    timePicker: { type: Boolean },
    range: { type: [Boolean, Object] },
    menuId: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    inline: { type: [Boolean, Object] },
    textInput: { type: [Boolean, Object] },
    sixWeeks: { type: [Boolean, String] },
    actionRow: {},
    focusStartDate: { type: Boolean },
    disabledTimes: { type: [Function, Array] },
    calendar: { type: Function },
    config: {},
    quarterPicker: { type: Boolean },
    yearFirst: { type: Boolean },
    loading: { type: Boolean },
    ui: {},
    floating: {}
  }, Cr),
  emits: ["update:model-value", "internal-model-change", "text-submit", "text-input", "open", "closed", "focus", "blur", "cleared", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "invalid-date", "tooltip-open", "tooltip-close", "am-pm-change", "range-start", "range-end", "date-click", "overlay-toggle", "invalid"],
  setup(e, { expose: k, emit: p }) {
    const r = p, o = e;
    Ln(o, r);
    const s = ht(), { mapSlots: n } = yt(), l = n(s, "root", o.presetDates), d = Re("date-picker");
    return k(Or(d)), (B, A) => (O(), Se(Gl, { ref: "date-picker" }, Le({ _: 2 }, [
      Ye(t(l), (I, b) => ({
        name: I,
        fn: we((i) => [
          se(B.$slots, I, Je(ot(i)))
        ])
      }))
    ]), 1536));
  }
});
export {
  so as TZDate,
  ro as VueDatePicker
};
