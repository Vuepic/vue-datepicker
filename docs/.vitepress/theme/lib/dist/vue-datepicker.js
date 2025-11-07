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
  ].filter((v) => v.length) : ga.value ? [...Oe.monthPicker, Oe.actionRow] : [Oe.monthYear, ...Oe.calendar, Oe.time, Oe.actionRow].filter((v) => v.length)), w = (v) => {
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
    w(!0), r(!0);
  }, s = () => {
    w(!1), r(!1);
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
  const { checkPartialRangeValue: e, checkRangeEnabled: w, isValidDate: p } = at(), { convertType: r, errorMapper: o } = Ee(), {
    getDate: s,
    rootEmit: n,
    state: l,
    rootProps: d,
    inputValue: B,
    defaults: { textInput: A, range: I, multiDates: k, timeConfig: u, formats: M },
    modelValue: i,
    updateTime: P
  } = $e(), { setTime: v, getWeekFromDate: Y } = je(), { formatSelectedDate: V, formatForTextInput: $ } = bt();
  st(
    i,
    (b, T) => {
      n("internal-model-change", i.value), JSON.stringify(T ?? {}) !== JSON.stringify(b ?? {}) && P();
    },
    { deep: !0 }
  ), st(I, (b, T) => {
    b.enabled !== T.enabled && (i.value = null);
  }), st(
    () => M.value.input,
    () => {
      ee();
    }
  );
  const F = (b) => b ? d.modelType ? ge(b) : {
    hours: ut(b),
    minutes: dt(b),
    seconds: u.value.enableSeconds ? pt(b) : 0
  } : null, q = (b) => d.modelType ? ge(b) : { month: Te(b), year: ye(b) }, R = (b) => Array.isArray(b) ? k.value.enabled ? b.map((T) => y(T, lt(s(), T))) : w(
    () => [
      lt(s(), b[0]),
      b[1] ? lt(s(), b[1]) : e(I.value.partialRange)
    ],
    I.value.enabled
  ) : lt(s(), +b), y = (b, T) => (typeof b == "string" || typeof b == "number") && d.modelType ? fe(b) : T, c = (b) => Array.isArray(b) ? [
    y(b[0], v(b[0])),
    y(b[1], v(b[1]))
  ] : y(b, v(b)), D = (b) => {
    const T = _e(s(), { date: 1 });
    return Array.isArray(b) ? k.value.enabled ? b.map(
      (ie) => y(ie, _e(T, { month: +ie.month, year: +ie.year }))
    ) : w(
      () => [
        y(b[0], _e(T, { month: +b[0].month, year: +b[0].year })),
        y(
          b[1],
          b[1] ? _e(T, { month: +b[1].month, year: +b[1].year }) : e(I.value.partialRange)
        )
      ],
      I.value.enabled
    ) : y(b, _e(T, { month: +b.month, year: +b.year }));
  }, N = (b) => {
    if (Array.isArray(b))
      return b.map((T) => fe(T));
    throw new Error(o.dateArr("multi-dates"));
  }, Q = (b) => {
    if (Array.isArray(b) && I.value.enabled) {
      const T = b[0], ie = b[1];
      return [
        s(Array.isArray(T) ? T[0] : null),
        Array.isArray(ie) && ie.length ? s(ie[0]) : null
      ];
    }
    return s(b[0]);
  }, ae = (b) => d.modelAuto ? Array.isArray(b) ? [fe(b[0]), fe(b[1])] : d.autoApply ? [fe(b)] : [fe(b), null] : Array.isArray(b) ? w(
    () => b[1] ? [
      fe(b[0]),
      b[1] ? fe(b[1]) : e(I.value.partialRange)
    ] : [fe(b[0])],
    I.value.enabled
  ) : fe(b), Z = () => {
    Array.isArray(i.value) && I.value.enabled && i.value.length === 1 && i.value.push(e(I.value.partialRange));
  }, ve = () => {
    const b = i.value;
    return [
      ge(b[0]),
      b[1] ? ge(b[1]) : e(I.value.partialRange)
    ];
  }, he = () => Array.isArray(i.value) ? i.value[1] ? ve() : ge(r(i.value[0])) : [], L = () => (i.value || []).map((b) => ge(b)), J = (b = !1) => (b || Z(), d.modelAuto ? he() : k.value.enabled ? L() : Array.isArray(i.value) ? w(() => ve(), I.value.enabled) : ge(r(i.value))), W = (b) => !b || Array.isArray(b) && !b.length ? null : d.timePicker ? c(r(b)) : d.monthPicker ? D(r(b)) : d.yearPicker ? R(r(b)) : k.value.enabled ? N(r(b)) : d.weekPicker ? Q(r(b)) : ae(r(b)), oe = (b) => {
    if (l.isTextInputDate) return;
    const T = W(b);
    p(r(T)) ? (i.value = r(T), ee()) : (i.value = null, B.value = "");
  }, z = () => i.value ? k.value.enabled ? i.value.map((b) => V(b)).join("; ") : A.value.enabled ? $() : V(i.value) : "", ee = () => {
    B.value = z();
  }, fe = (b) => d.modelType ? Fn.includes(d.modelType) ? s(b) : d.modelType === "format" && typeof M.value.input == "string" ? ka(b, M.value.input, s(), { locale: d.locale }) : ka(b, d.modelType, s(), { locale: d.locale }) : s(b), ge = (b) => b ? d.modelType ? d.modelType === "timestamp" ? +b : d.modelType === "iso" ? b.toISOString() : d.modelType === "format" && typeof M.value.input == "string" ? V(b) : V(b, d.modelType) : b : "", De = (b) => {
    n("update:model-value", b);
  }, Ae = (b) => Array.isArray(i.value) ? k.value.enabled ? i.value.map((T) => b(T)) : [b(i.value[0]), i.value[1] ? b(i.value[1]) : null] : b(r(i.value)), re = () => {
    if (Array.isArray(i.value)) {
      const b = Y(i.value[0], d.weekStart), T = i.value[1] ? Y(i.value[1], d.weekStart) : [];
      return [b.map((ie) => s(ie)), T.map((ie) => s(ie))];
    }
    return Y(i.value, d.weekStart).map((b) => s(b));
  }, H = (b) => De(r(Ae(b))), E = () => n("update:model-value", re());
  return {
    checkBeforeEmit: () => i.value ? I.value.enabled ? I.value.partialRange ? i.value.length >= 1 : i.value.length === 2 : !!i.value : !1,
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
  mapSlots: (w, p, r) => {
    const o = [];
    for (const s of Wn[p]())
      w[s.name] && o.push(s.name);
    if (r?.length)
      for (const s of r)
        s.slot && o.push(s.slot);
    return o;
  }
}), ja = Symbol("ContextKey"), Ln = (e, w) => {
  const { setTimeModelValue: p } = Ee(), r = Yr(e), o = de(null), s = Nt({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1
  }), n = r.getDate(/* @__PURE__ */ new Date()), l = de(""), d = de([{ month: Te(n), year: ye(n) }]), B = Nt({ hours: 0, minutes: 0, seconds: 0 });
  p(B, null, n, r.range.value.enabled);
  const A = j({
    get: () => o.value,
    set: (i) => {
      o.value = i;
    }
  }), I = j(
    () => (i) => d.value[i] ? d.value[i].month : 0
  ), k = j(
    () => (i) => d.value[i] ? d.value[i].year : 0
  ), u = (i, P) => {
    s[i] = P;
  }, M = () => {
    p(B, A.value, n, r.range.value.enabled);
  };
  sn(ja, {
    rootProps: e,
    defaults: r,
    modelValue: A,
    state: un(s),
    rootEmit: w,
    calendars: d,
    month: I,
    year: k,
    time: B,
    today: n,
    inputValue: l,
    setState: u,
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
  } = $e(), w = j(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), p = j(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: w, showTransition: !!e.value, menuTransition: p };
}, jt = (e) => {
  const {
    today: w,
    time: p,
    modelValue: r,
    defaults: { range: o }
  } = $e(), { setTimeModelValue: s } = Ee();
  st(
    o,
    (n, l) => {
      n.enabled !== l.enabled && s(p, r.value, w, o.value.enabled);
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
    defaults: { safeDates: e, range: w, multiDates: p, filters: r, timeConfig: o },
    rootProps: s,
    getDate: n
  } = $e(), { getMapKeyType: l, getMapDate: d, errorMapper: B, convertType: A } = Ee(), { isDateBefore: I, isDateAfter: k, isDateEqual: u, resetDate: M, getDaysInBetween: i, setTimeValue: P, getTimeObj: v, setTime: Y } = je(), V = (m) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(n(m)) : !!d(m, e.value.disabledDates) : !1, $ = (m) => e.value.maxDate ? s.yearPicker ? ye(m) > ye(e.value.maxDate) : k(m, e.value.maxDate) : !1, F = (m) => e.value.minDate ? s.yearPicker ? ye(m) < ye(e.value.minDate) : I(m, e.value.minDate) : !1, q = (m) => {
    if (!m) return !1;
    const x = $(m), g = F(m), C = V(m), a = r.value.months.map((Ce) => +Ce).includes(Te(m)), f = r.value.weekDays?.length ? r.value.weekDays.some((Ce) => +Ce === Mn(m)) : !1, S = N(m), te = ye(m), ne = te < +s.yearRange[0] || te > +s.yearRange[1];
    return !(x || g || C || a || ne || f || S);
  }, R = (m, x) => I(...E(e.value.minDate, m, x)) || u(...E(e.value.minDate, m, x)), y = (m, x) => k(...E(e.value.maxDate, m, x)) || u(...E(e.value.maxDate, m, x)), c = (m, x, g) => {
    let C = !1;
    return e.value.maxDate && g && y(m, x) && (C = !0), e.value.minDate && !g && R(m, x) && (C = !0), C;
  }, D = (m, x, g, C) => {
    let G = !1;
    return C && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? G = c(m, x, g) : (e.value.minDate && R(m, x) || e.value.maxDate && y(m, x)) && (G = !0) : G = !0, G;
  }, N = (m) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !d(
    m,
    e.value.allowedDates,
    l(s.monthPicker, s.yearPicker)
  ) : !1, Q = (m) => !q(m), ae = (m) => w.value.noDisabledRange ? !xa({ start: m[0], end: m[1] }).some((g) => Q(g)) : !0, Z = (m) => {
    if (m) {
      const x = ye(m);
      return x >= +s.yearRange[0] && x <= s.yearRange[1];
    }
    return !0;
  }, ve = (m, x) => !!(Array.isArray(m) && m[x] && (w.value.maxRange || w.value.minRange) && Z(m[x])), he = (m, x, g = 0) => {
    if (ve(x, g) && Z(m)) {
      const C = Dn(m, x[g]), G = i(x[g], m), a = G.length === 1 ? 0 : G.filter((S) => Q(S)).length, f = Math.abs(C) - (w.value.minMaxRawRange ? 0 : a);
      if (w.value.minRange && w.value.maxRange)
        return f >= +w.value.minRange && f <= +w.value.maxRange;
      if (w.value.minRange) return f >= +w.value.minRange;
      if (w.value.maxRange) return f <= +w.value.maxRange;
    }
    return !0;
  }, L = () => !o.value.enableTimePicker || s.monthPicker || s.yearPicker || o.value.ignoreTimeValidation, J = (m) => Array.isArray(m) ? [m[0] ? P(m[0]) : null, m[1] ? P(m[1]) : null] : P(m), W = (m, x, g) => x ? m.find(
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
      return k(g, C) && I(g, G) || u(g, C) || u(g, G);
    }
    if (e.value.minDate) {
      const C = n(M(e.value.minDate));
      x = k(g, C) || u(g, C);
    }
    if (e.value.maxDate) {
      const C = n(M(e.value.maxDate));
      x = I(g, C) || u(g, C);
    }
    return x;
  }, Ae = j(() => (m) => !o.value.enableTimePicker || o.value.ignoreTimeValidation ? !0 : ge(m)), re = j(() => (m) => s.monthPicker ? Array.isArray(m) && (w.value.enabled || p.value.enabled) ? !m.filter((g) => !De(g)).length : De(m) : !0), H = (m, x, g) => {
    if (!x || g && !e.value.maxDate || !g && !e.value.minDate) return !1;
    const C = g ? Dt(m, 1) : Lt(m, 1), G = [Te(C), ye(C)];
    return g ? !y(...G) : !R(...G);
  }, E = (m, x, g) => [_e(n(m), { date: 1 }), _e(n(), { month: x, year: g, date: 1 })], ce = (m, x, g, C) => {
    if (!m) return !0;
    if (C) {
      const G = g === "max" ? Tt(m, x) : _t(m, x), a = { seconds: 0, milliseconds: 0 };
      return G || At(_e(m, a), _e(x, a));
    }
    return g === "max" ? m.getTime() <= x.getTime() : m.getTime() >= x.getTime();
  }, ue = (m, x, g, C, G) => {
    if (Array.isArray(C)) {
      const f = b(m, C[0], x), S = b(m, C[1], x);
      return ce(C[0], f, g, !!x) && ce(C[1], S, g, !!x) && G;
    }
    const a = b(m, C, x);
    return ce(C, a, g, !!x) && G;
  }, b = (m, x, g) => m ? Y(m, x) : n(g ?? x);
  return {
    isDisabled: Q,
    validateDate: q,
    validateMonthYearInRange: D,
    isDateRangeAllowed: ae,
    checkMinMaxRange: he,
    isValidTime: ge,
    validateMonthYear: H,
    validateMinDate: R,
    validateMaxDate: y,
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
    rootEmit: w,
    rootProps: p,
    defaults: { timeConfig: r, flow: o }
  } = $e(), s = de(0), n = Nt({
    [Mt.timePicker]: !r.value.enableTimePicker || p.timePicker || p.monthPicker,
    [Mt.calendar]: !1,
    [Mt.header]: !1
  }), l = j(() => p.monthPicker || p.timePicker), d = (u) => {
    if (o.value?.steps?.length) {
      if (!u && l.value) return k();
      n[u] = !0, Object.keys(n).filter((M) => !n[M]).length || k();
    }
  }, B = () => {
    o.value?.steps?.length && s.value !== -1 && (s.value += 1, w("flow-step", s.value), k()), o.value?.steps?.length === s.value && Ge().then(() => A());
  }, A = () => {
    s.value = -1;
  }, I = (u, M, ...i) => {
    o.value?.steps[s.value] === u && e.value && e.value[M]?.(...i);
  }, k = (u = 0) => {
    u && (s.value += u), I(qe.month, "toggleMonthPicker", !0), I(qe.year, "toggleYearPicker", !0), I(qe.calendar, "toggleTimePicker", !1, !0), I(qe.time, "toggleTimePicker", !0, !0);
    const M = o.value?.steps[s.value];
    (M === qe.hours || M === qe.minutes || M === qe.seconds) && I(M, "toggleTimePicker", !0, !0, M);
  };
  return { childMount: d, updateFlowStep: B, resetFlow: A, handleFlow: k, flowStep: s };
};
function ba(e) {
  return (w = {}) => {
    const p = w.width ? String(w.width) : e.defaultWidth;
    return e.formats[p] || e.formats[e.defaultWidth];
  };
}
function It(e) {
  return (w, p) => {
    const r = p?.context ? String(p.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const n = e.defaultFormattingWidth || e.defaultWidth, l = p?.width ? String(p.width) : n;
      o = e.formattingValues[l] || e.formattingValues[n];
    } else {
      const n = e.defaultWidth, l = p?.width ? String(p.width) : e.defaultWidth;
      o = e.values[l] || e.values[n];
    }
    const s = e.argumentCallback ? e.argumentCallback(w) : w;
    return o[s];
  };
}
function Vt(e) {
  return (w, p = {}) => {
    const r = p.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = w.match(o);
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
    const A = w.slice(n.length);
    return { value: B, rest: A };
  };
}
function Kn(e, w) {
  for (const p in e)
    if (Object.prototype.hasOwnProperty.call(e, p) && w(e[p]))
      return p;
}
function jn(e, w) {
  for (let p = 0; p < e.length; p++)
    if (w(e[p]))
      return p;
}
function zn(e) {
  return (w, p = {}) => {
    const r = w.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = w.match(e.parsePattern);
    if (!s) return null;
    let n = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    n = p.valueCallback ? p.valueCallback(n) : n;
    const l = w.slice(o.length);
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
}, qn = (e, w, p) => {
  let r;
  const o = Un[e];
  return typeof o == "string" ? r = o : w === 1 ? r = o.one : r = o.other.replace("{{count}}", w.toString()), p?.addSuffix ? p.comparison && p.comparison > 0 ? "in " + r : r + " ago" : r;
}, Qn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Gn = (e, w, p, r) => Qn[e], Jn = {
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
}, nr = (e, w) => {
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
  const { getMapKey: w, getMapKeyType: p, getTimeObjFromCurrent: r } = Ee();
  function o(L, J) {
    let W;
    return e.timezone ? W = new Vn(L ?? /* @__PURE__ */ new Date(), e.timezone) : W = L ? new Date(L) : /* @__PURE__ */ new Date(), J ? _e(W, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : W;
  }
  const s = () => {
    const L = ae.value.enableSeconds ? ":ss" : "", J = ae.value.enableMinutes ? ":mm" : "";
    return ae.value.is24 ? `HH${J}${L}` : `hh${J}${L} aa`;
  }, n = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${q.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : ae.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (L) => r(o(), L, ae.value.enableSeconds), d = () => c.value.enabled ? ae.value.startTime && Array.isArray(ae.value.startTime) ? [l(ae.value.startTime[0]), l(ae.value.startTime[1])] : null : ae.value.startTime && !Array.isArray(ae.value.startTime) ? l(ae.value.startTime) : null, B = (L) => L ? typeof L == "boolean" ? L ? 2 : 0 : Math.max(+L, 2) : 0, A = (L) => {
    const J = p(e.monthPicker, e.yearPicker);
    return new Map(
      L.map((W) => {
        const oe = o(W, I.value);
        return [w(oe, J), oe];
      })
    );
  }, I = j(() => e.monthPicker || e.yearPicker || e.quarterPicker), k = j(() => {
    const L = typeof e.multiCalendars == "object" && e.multiCalendars, J = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...J, count: B(!1) };
    const W = L ? e.multiCalendars : {}, oe = L ? W.count ?? !0 : e.multiCalendars, z = B(oe);
    return Object.assign(J, W, { count: z });
  }), u = j(() => d()), M = j(() => ({ ...Pr, ...e.ariaLabels })), i = j(() => ({ ...Tr, ...e.filters })), P = j(() => typeof e.transitions == "boolean" ? e.transitions ? Ca : !1 : { ...Ca, ...e.transitions }), v = j(() => ({ ...Ar, ...e.actionRow })), Y = j(() => typeof e.textInput == "object" ? {
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
  }), $ = j(() => ({ ...Mr, ...e.config })), F = j(() => typeof e.highlight == "function" ? e.highlight : {
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
  }), y = j(() => ({
    minDate: e.minDate ? o(e.minDate) : null,
    maxDate: e.maxDate ? o(e.maxDate) : null,
    disabledDates: Array.isArray(e.disabledDates) ? A(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? A(e.allowedDates) : null,
    highlight: typeof F.value == "object" && Array.isArray(F.value.dates) ? A(F.value.dates) : F.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((L) => {
        const J = o(L.date);
        return [w(J, Pt.DATE), L];
      })
    ) : null
  })), c = j(() => typeof e.range == "object" ? { enabled: !0, ...Sa, ...e.range } : {
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
    transitions: P,
    multiCalendars: k,
    startTime: u,
    ariaLabels: M,
    filters: i,
    actionRow: v,
    textInput: Y,
    inline: V,
    config: $,
    highlight: F,
    weekNumbers: q,
    range: c,
    safeDates: y,
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
  const e = ($, F) => Ze($, F ?? Pt.DATE), w = ($, F) => $ ? Pt.MONTH_AND_YEAR : F ? Pt.YEAR : Pt.DATE, p = ($, F, q) => F.get(e($, q)), r = ($) => $, o = ($) => $ === 0 ? $ : !$ || Number.isNaN(+$) ? null : +$, s = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), n = ($, F) => {
    let q = [...document.querySelectorAll(s())];
    q = q.filter((y) => !$.contains(y) || "datepicker-instance" in y.dataset);
    const R = q.indexOf($);
    if (R >= 0 && (F ? R - 1 >= 0 : R + 1 <= q.length))
      return q[R + (F ? -1 : 1)];
  }, l = ($) => String($).padStart(2, "0"), d = ($, F) => $?.querySelector(`[data-dp-element="${F}"]`), B = ($, F, q = !1) => {
    $ && F.allowStopPropagation && (q && $.stopImmediatePropagation(), $.stopPropagation());
  }, A = ($, F, q = !1, R) => {
    if ($.key === xe.enter || $.key === xe.space)
      return q && $.preventDefault(), F();
    if (R) return R($);
  }, I = ($, F) => {
    F.allowStopPropagation && $.stopPropagation(), F.allowPreventDefault && $.preventDefault();
  }, k = ($) => {
    if ($)
      return [...$.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, u = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, M = ($) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][$], i = ($) => {
    const F = [], q = (R) => R.filter((y) => !!y);
    for (let R = 0; R < $.length; R += 3) {
      const y = [$[R], $[R + 1], $[R + 2]];
      F.push(q(y));
    }
    return F;
  }, P = {
    prop: ($) => `"${$}" prop must be enabled!`,
    dateArr: ($) => `You need to use array as "model-value" binding in order to support "${$}"`
  }, v = ($, F, q, R) => {
    const y = {
      hours: ut,
      minutes: dt,
      seconds: pt
    };
    if (!F) return R ? [y[$](q), y[$](q)] : y[$](q);
    if (Array.isArray(F) && R) {
      const c = F[0] ?? q, D = F[1] ?? q;
      return [y[$](c), y[$](D)];
    }
    return y[$](F);
  };
  return {
    getMapKey: e,
    getMapKeyType: w,
    getMapDate: p,
    convertType: r,
    getNumVal: o,
    findNextFocusableElement: n,
    padZero: l,
    getElWithin: d,
    checkStopPropagation: B,
    checkKeyDown: A,
    handleEventPropagation: I,
    findFocusableEl: k,
    isTouchDevice: u,
    hoursToAmPmHours: M,
    getGroupedList: i,
    setTimeModelValue: ($, F, q, R) => {
      $.hours = v("hours", F, q, R), $.minutes = v("minutes", F, q, R), $.seconds = v("seconds", F, q, R);
    },
    getTimeObjFromCurrent: ($, F, q) => {
      const R = {
        hours: ut($),
        minutes: dt($),
        seconds: q ? pt($) : 0
      };
      return Object.assign(R, F);
    },
    errorMapper: P
  };
}, je = () => {
  const { getDate: e } = $e(), { getMapDate: w, getGroupedList: p } = Ee(), r = (c, D) => {
    if (!c) return e();
    const N = e(c), Q = _e(N, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return D ? An(Q) : Q;
  }, o = (c, D) => {
    const N = e(D);
    return _e(N, {
      hours: +(c.hours ?? ut(N)),
      minutes: +(c.minutes ?? dt(N)),
      seconds: +(c.seconds ?? pt(N)),
      milliseconds: 0
    });
  }, s = (c, D) => {
    const N = Da(c, { weekStartsOn: +D }), Q = Ba(c, { weekStartsOn: +D });
    return [N, Q];
  }, n = (c, D) => !c || !D ? !1 : Tt(r(c), r(D)), l = (c, D) => !c || !D ? !1 : At(r(c), r(D)), d = (c, D) => !c || !D ? !1 : _t(r(c), r(D)), B = (c, D, N) => c?.[0] && c?.[1] ? d(N, c[0]) && n(N, c[1]) : c?.[0] && D ? d(N, c[0]) && n(N, D) || n(N, c[0]) && d(N, D) : !1, A = (c, D) => {
    const N = d(c, D) ? D : c, Q = d(D, c) ? D : c;
    return xa({ start: N, end: Q });
  }, I = (c) => `dp-${Ze(c, "yyyy-MM-dd")}`, k = (c) => r(_e(e(c), { date: 1 })), u = (c, D) => {
    if (D) {
      const N = ye(e(D));
      if (N > c) return 12;
      if (N === c) return Te(e(D));
    }
  }, M = (c, D) => {
    if (D) {
      const N = ye(e(D));
      return N < c ? -1 : N === c ? Te(e(D)) : void 0;
    }
  }, i = (c) => {
    if (c) return ye(e(c));
  }, P = (c) => ({
    hours: ut(c),
    minutes: dt(c),
    seconds: pt(c)
  });
  return {
    resetDateTime: r,
    groupListAndMap: (c, D) => p(c).map((N) => N.map((Q) => {
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
    resetDate: k,
    getMinMonth: u,
    getMaxMonth: M,
    getYearFromDate: i,
    getTimeObj: P,
    setTimeValue: (c) => _e(e(), P(c)),
    sanitizeTime: (c, D, N) => D && (N || N === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((Q) => Q === D ? [Q, N] : [Q, Number.isNaN(+c[Q]) ? void 0 : +c[Q]])
    ) : {
      hours: Number.isNaN(+c.hours) ? void 0 : +c.hours,
      minutes: Number.isNaN(+c.minutes) ? void 0 : +c.minutes,
      seconds: Number.isNaN(+(c.seconds ?? "")) ? void 0 : +c.seconds
    },
    getBeforeAndAfterInRange: (c, D) => {
      const N = _n(r(D), c), Q = mt(r(D), c);
      return { before: N, after: Q };
    },
    isModelAuto: (c) => Array.isArray(c) ? !!c[0] && !!c[1] : !1,
    matchDate: (c, D) => c ? D ? D instanceof Map ? !!w(c, D) : D(e(c)) : !1 : !0,
    checkHighlightMonth: (c, D, N) => typeof c == "function" ? c({ month: D, year: N }) : c.months.some((Q) => Q.month === D && Q.year === N),
    checkHighlightYear: (c, D) => typeof c == "function" ? c(D) : c.years.includes(D)
  };
}, aa = () => {
  const {
    defaults: { config: e }
  } = $e(), w = de(0);
  Ne(() => {
    p(), globalThis.addEventListener("resize", p, { passive: !0 });
  }), $t(() => {
    globalThis.removeEventListener("resize", p);
  });
  const p = () => {
    w.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: j(() => w.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, bt = () => {
  const {
    getDate: e,
    state: w,
    modelValue: p,
    rootProps: r,
    defaults: { formats: o, textInput: s }
  } = $e(), n = (P) => Ze(lt(e(), P), o.value.year, { locale: r.locale }), l = (P) => Ze(Pn(e(), P), o.value.month, { locale: r.locale }), d = (P) => Ze(e(`2017-01-0${P}T00:00:00+00:00`), o.value.weekDay, { locale: r.locale }), B = (P) => Ze(P, o.value.quarter, { locale: r.locale }), A = (P, v) => [P, v].map((Y) => B(Y)).join("-"), I = (P) => Ze(P, o.value.day, { locale: r.locale }), k = (P, v, Y) => {
    const V = Y ? o.value.preview : o.value.input;
    if (!P) return "";
    if (typeof V == "function") return V(P);
    const $ = v ?? V, F = { locale: r.locale };
    return Array.isArray(P) ? `${Ze(P[0], $, F)}${r.modelAuto && !P[1] ? "" : s.value.rangeSeparator}${P[1] ? Ze(P[1], $, F) : ""}` : Ze(P, $, F);
  }, u = () => {
    const P = (v) => Ze(v, s.value.format);
    return Array.isArray(p.value) ? `${P(p.value[0])} ${s.value.rangeSeparator} ${p.value[1] ? P(p.value[1]) : ""}` : "";
  };
  return {
    formatYear: n,
    formatMonth: l,
    formatWeekDay: d,
    formatQuarter: B,
    formatSelectedDate: k,
    formatForTextInput: () => w.isInputFocused && p.value ? Array.isArray(p.value) ? u() : Ze(p.value, s.value.format) : k(p.value),
    formatPreview: (P) => k(P, void 0, !0),
    formatQuarterText: A,
    formatDay: I
  };
}, na = () => {
  const { rootProps: e } = $e(), { formatYear: w, formatMonth: p } = bt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => ({
      text: p(n),
      value: n
    })),
    getYears: () => {
      const n = [];
      for (let l = +e.yearRange[0]; l <= +e.yearRange[1]; l++)
        n.push({ value: +l, text: w(l) });
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
  updateInternalModelValue: (k) => e.value?.updateInternalModelValue(k),
  setMonthYear: (k, u) => e.value?.setMonthYear(k, u),
  parseModel: () => e.value?.parseModel(),
  switchView: (k, u) => e.value?.switchView(k, u),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu()
}), xr = () => {
  const {
    getDate: e,
    rootProps: w,
    defaults: { textInput: p, startTime: r, timeConfig: o }
  } = $e(), { getTimeObjFromCurrent: s } = Ee(), n = de(!1), l = j(
    () => Array.isArray(r.value) ? r.value[0] : r.value ?? s(e(), {}, o.value.enableSeconds)
  ), d = (k, u, M) => {
    const i = ka(k, u.slice(0, k.length), e(), { locale: w.locale });
    return ta(i) && Tn(i) ? M || n.value ? i : _e(i, {
      hours: +l.value.hours,
      minutes: +l.value.minutes,
      seconds: +(l.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: n,
    parseFreeInput: (k, u) => {
      if (typeof p.value.pattern == "string")
        return d(k, p.value.pattern, u);
      if (Array.isArray(p.value.pattern)) {
        let M = null;
        for (const i of p.value.pattern)
          if (M = d(k, i, u), M)
            break;
        return M;
      }
      return typeof p.value.pattern == "function" ? p.value.pattern(k) : null;
    },
    applyMaxValues: (k, u) => {
      const M = {
        MM: 12,
        DD: 31,
        hh: 23,
        mm: 59,
        ss: 59
      };
      let i = "", P = 0;
      for (let v = 0; v < u.length; v++) {
        const Y = u[v], V = Y.length, $ = k.slice(P, P + V);
        if (!$) break;
        if ($.length < V)
          i += $;
        else {
          let F = Number.parseInt($, 10);
          M[Y] && F > M[Y] && (F = M[Y]), i += F.toString().padStart(V, "0").slice(0, V);
        }
        P += V;
      }
      return i;
    },
    createMaskedValue: (k, u) => {
      const M = /(YYYY|MM|DD|hh|mm|ss)/g, i = [...u.matchAll(M)].map(($) => $[0]), P = u.replace(M, "|").split("|").filter(Boolean), v = i.map(($) => $.length);
      let Y = "", V = 0;
      for (let $ = 0; $ < i.length; $++) {
        const F = v[$], q = k.slice(V, V + F);
        if (!q) break;
        Y += q, q.length === F && P[$] && (Y += P[$]), V += F;
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, {
      rootEmit: s,
      inputValue: n,
      rootProps: l,
      defaults: { textInput: d, ariaLabels: B, inline: A, config: I, range: k, multiDates: u, ui: M, inputAttrs: i }
    } = $e(), { checkMinMaxRange: P, isValidDate: v } = at(), { parseFreeInput: Y, textPasted: V, createMaskedValue: $, applyMaxValues: F } = xr(), { checkKeyDown: q, checkStopPropagation: R } = Ee(), y = Re("dp-input"), c = de(null), D = de(!1), N = j(
      () => ({
        dp__pointer: !l.disabled && !l.readonly && !d.value.enabled,
        dp__disabled: l.disabled,
        dp__input_readonly: !d.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !i.value.clearable,
        dp__input_icon_pad: !i.value.hideInputIcon,
        dp__input_valid: typeof i.value.state == "boolean" ? i.value.state : !1,
        dp__input_invalid: typeof i.value.state == "boolean" ? !i.value.state : !1,
        dp__input_focus: D.value || o.isMenuOpen,
        dp__input_reg: !d.value.enabled,
        ...M.value.input
      })
    ), Q = () => {
      r("set-input-date", null), i && l.autoApply && (r("set-empty-date"), c.value = null);
    }, ae = (H) => {
      const { rangeSeparator: E } = d.value, [ce, ue] = H.split(`${E}`);
      if (ce) {
        const b = Y(ce.trim(), n.value), T = ue ? Y(ue.trim(), n.value) : void 0;
        if (_t(b, T)) return;
        const ie = b && T ? [b, T] : [b];
        P(T, ie, 0) && (c.value = b ? ie : null);
      }
    }, Z = () => {
      V.value = !0;
    }, ve = (H) => {
      if (k.value.enabled)
        ae(H);
      else if (u.value.enabled) {
        const E = H.split(";");
        c.value = E.map((ce) => Y(ce.trim())).filter((ce) => !!ce);
      } else
        c.value = Y(H, n.value);
    }, he = (H) => {
      const E = typeof H == "string" ? H : H.target?.value, ce = d?.value?.maskFormat;
      let ue = E;
      if (typeof ce == "string") {
        const b = /(YYYY|MM|DD|hh|mm|ss)/g, ie = [...ce.matchAll(b)].map((m) => m[0]), le = E.replace(/\D/g, ""), h = F(le, ie);
        ue = $(h, ce);
      }
      ue === "" ? Q() : (d.value.openMenu && !o.isMenuOpen && r("open"), ve(ue), r("set-input-date", c.value)), V.value = !1, n.value = ue, s("text-input", H, c.value);
    }, L = (H) => {
      d.value.enabled ? (ve(H.target.value), d.value.enterSubmit && v(c.value) && n.value !== "" ? (r("set-input-date", c.value, !0), c.value = null) : d.value.enterSubmit && n.value === "" && (c.value = null, r("clear"))) : oe(H);
    }, J = (H, E) => {
      d.value.enabled && d.value.tabSubmit && !E && ve(H.target.value), d.value.tabSubmit && v(c.value) && n.value !== "" ? (r("set-input-date", c.value, !0, !0), c.value = null) : d.value.tabSubmit && n.value === "" && (c.value = null, r("clear"));
    }, W = () => {
      D.value = !0, r("focus"), Ge().then(() => {
        d.value.enabled && d.value.selectOnFocus && y.value?.select();
      });
    }, oe = (H) => {
      if (R(H, I.value, !0), d.value.enabled && d.value.openMenu && !A.value.input) {
        if (d.value.openMenu === "open" && !o.isMenuOpen) return r("open");
        if (d.value.openMenu === "toggle") return r("toggle");
      } else d.value.enabled || r("toggle");
    }, z = () => {
      r("real-blur"), D.value = !1, (!o.isMenuOpen || A.value.enabled && A.value.input) && r("blur"), l.autoApply && d.value.enabled && c.value && !o.isMenuOpen && (r("set-input-date", c.value), r("select-date"), c.value = null);
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
      y.value?.focus({ preventScroll: !0 });
    }, Ae = (H) => {
      c.value = H;
    }, re = (H) => {
      H.key === xe.tab && J(H, !0);
    };
    return w({
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
          id: t(i).id,
          ref: "dp-input",
          "data-test-id": "dp-input",
          name: t(i).name,
          class: be(N.value),
          inputmode: t(i).inputmode,
          placeholder: t(l).placeholder,
          disabled: t(l).disabled,
          readonly: t(l).readonly,
          required: t(i).required,
          value: t(n),
          autocomplete: t(i).autocomplete,
          "aria-label": t(B).input,
          "aria-disabled": t(l).disabled || void 0,
          "aria-invalid": t(i).state === !1 ? !0 : void 0,
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
          H.$slots["input-icon"] && !t(i).hideInputIcon ? (O(), K("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: E[2] || (E[2] = (ce) => r("toggle"))
          }, [
            se(H.$slots, "input-icon")
          ])) : U("", !0),
          !H.$slots["input-icon"] && !t(i).hideInputIcon && !H.$slots["dp-input"] ? (O(), Se(t(Ht), {
            key: 1,
            "aria-label": t(B)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: E[3] || (E[3] = (ce) => r("toggle"))
          }, null, 8, ["aria-label"])) : U("", !0)
        ]),
        H.$slots["clear-icon"] && (t(i).alwaysClearable || t(n) && t(i).clearable && !t(l).disabled && !t(l).readonly) ? (O(), K("span", Vr, [
          se(H.$slots, "clear-icon", { clear: ee })
        ])) : U("", !0),
        !H.$slots["clear-icon"] && (t(i).alwaysClearable || t(i).clearable && t(n) && !t(l).disabled && !t(l).readonly) ? (O(), K("button", {
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
  setup(e, { emit: w }) {
    const p = w, r = e, {
      rootEmit: o,
      rootProps: s,
      modelValue: n,
      defaults: { actionRow: l, multiCalendars: d, inline: B, range: A, multiDates: I, formats: k }
    } = $e(), { isTimeValid: u, isMonthValid: M } = at(), { buildMatrix: i } = gt(), { formatPreview: P } = bt(), { checkKeyDown: v, convertType: Y } = Ee(), V = Re("cancel-btn"), $ = Re("select-btn"), F = Re("action-buttons-container"), q = Re("action-row"), R = de(!1), y = de({});
    Ne(() => {
      s.arrowNavigation && i([Qe(V), Qe($)], "actionRow"), c(), globalThis.addEventListener("resize", c);
    }), $t(() => {
      globalThis.removeEventListener("resize", c);
    });
    const c = () => {
      R.value = !1, setTimeout(() => {
        const J = F.value?.getBoundingClientRect(), W = q.value?.getBoundingClientRect();
        J && W && (y.value.maxWidth = `${W.width - J.width - 20}px`), R.value = !0;
      }, 0);
    }, D = j(() => A.value.enabled && !A.value.partialRange && n.value ? n.value.length === 2 : !0), N = j(
      () => !u.value(n.value) || !M.value(n.value) || !D.value
    ), Q = () => {
      const J = k.value.preview;
      return s.timePicker || s.monthPicker, J(Y(n.value));
    }, ae = () => {
      const J = n.value;
      return d.value.count > 0 ? `${P(J[0])} - ${P(J[1])}` : [P(J[0]), P(J[1])];
    }, Z = j(() => !n.value || !r.menuMount ? "" : typeof k.value.preview == "string" ? Array.isArray(n.value) ? n.value.length === 2 && n.value[1] ? ae() : I.value.enabled ? n.value.map((J) => `${P(J)}`) : s.modelAuto ? `${P(n.value[0])}` : `${P(n.value[0])} -` : P(n.value) : Q()), ve = () => I.value.enabled ? "; " : " - ", he = j(
      () => Array.isArray(Z.value) ? Z.value.join(ve()) : Z.value
    ), L = () => {
      u.value(n.value) && M.value(n.value) && D.value ? p("select-date") : o("invalid-select");
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
          style: Xe(y.value)
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
    defaults: { multiCalendars: w }
  } = $e(), p = j(() => (s) => e.hideNavigation?.includes(s)), r = j(() => (s) => w.value.count ? w.value.solo ? !0 : s === 0 : !0), o = j(() => (s) => w.value.count ? w.value.solo ? !0 : s === w.value.count - 1 : !0);
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
  setup(e, { expose: w, emit: p }) {
    const { setSelectionGrid: r, buildMultiLevelMatrix: o, setMonthPicker: s } = gt(), n = p, l = e, {
      rootProps: d,
      defaults: { ariaLabels: B, textInput: A, config: I }
    } = $e(), { hideNavigationButtons: k } = ra(), { handleEventPropagation: u, convertType: M, checkKeyDown: i, checkStopPropagation: P, getElWithin: v, findFocusableEl: Y } = Ee(), V = Re("toggle-button"), $ = Re("overlay-container"), F = Re("grid-wrap"), q = de(!1), R = de(null), y = de([]), c = de(), D = de(0);
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
        const ce = Qe(R), ue = Qe(F), b = Qe(V), T = Qe($), ie = b ? b.getBoundingClientRect().height : 0;
        ue && (ue.getBoundingClientRect().height ? D.value = ue.getBoundingClientRect().height - ie : D.value = I.value.modeHeight - ie), ce && T && E && (T.scrollTop = ce.offsetTop - T.offsetTop - (D.value / 2 - ce.getBoundingClientRect().height) - ie);
      });
    }, W = (E) => {
      E.disabled || n("selected", E.value);
    }, oe = () => {
      n("toggle"), n("reset-flow");
    }, z = (E) => {
      I.value.escClose && (oe(), u(E, I.value));
    }, ee = (E, ce, ue, b) => {
      E && ((ce.active || ce.value === l.focusValue) && (R.value = E), d.arrowNavigation && (Array.isArray(y.value[ue]) ? y.value[ue][b] = E : y.value[ue] = [E], fe()));
    }, fe = () => {
      const E = l.headerRefs?.length ? [l.headerRefs].concat(y.value) : y.value.concat([l.skipButtonRef ? [] : [V.value]]);
      o(M(E), l.headerRefs?.length ? "monthPicker" : "selectionGrid");
    }, ge = (E) => {
      d.arrowNavigation || P(E, I.value, !0);
    }, De = (E) => {
      c.value = E, n("hover-value", E);
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
    return w({ focusGrid: Q }), (E, ce) => (O(), K("div", {
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
        E.$slots.overlay ? se(E.$slots, "overlay", { key: 0 }) : (O(!0), K(ke, { key: 1 }, Ye(e.items, (ue, b) => (O(), K("div", {
          key: b,
          class: be(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
          role: "row"
        }, [
          (O(!0), K(ke, null, Ye(ue, (T, ie) => (O(), K("div", {
            key: T.value,
            ref_for: !0,
            ref: (le) => ee(le, T, b, ie),
            role: "gridcell",
            class: be(ve.value),
            "aria-selected": T.active || void 0,
            "aria-disabled": T.disabled || void 0,
            tabindex: "0",
            "data-test-id": T.text,
            onClick: Wt((le) => W(T), ["prevent"]),
            onKeydown: (le) => t(i)(le, () => W(T), !0),
            onMouseover: (le) => De(T.value)
          }, [
            Pe("div", {
              class: be(T.className)
            }, [
              E.$slots.item ? se(E.$slots, "item", {
                key: 0,
                item: T
              }) : U("", !0),
              E.$slots.item ? U("", !0) : (O(), K(ke, { key: 1 }, [
                ct(Ke(T.text), 1)
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
        [ea, !t(k)(e.type)]
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
      defaults: { multiCalendars: w }
    } = $e(), { isMobile: p } = aa(), r = j(
      () => w.value.count > 0 ? [...new Array(w.value.count).keys()] : [0]
    );
    return (o, s) => (O(), K("div", {
      class: be({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: t(w).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": t(p)
    }, [
      se(o.$slots, "default", {
        instances: r.value,
        wrapClass: { dp__instance_calendar: t(w).count > 0 }
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
  setup(e, { emit: w }) {
    const { checkKeyDown: p } = Ee(), r = w, o = Re("arrow-btn");
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
  setup(e, { emit: w }) {
    const p = w, r = e, { showRightIcon: o, showLeftIcon: s } = ra(), {
      rootProps: n,
      defaults: { config: l, ariaLabels: d, ui: B }
    } = $e(), { showTransition: A, transitionName: I } = Kt(), { formatYear: k } = bt(), u = de(!1), M = j(() => k(r.year)), i = (Y = !1, V) => {
      u.value = !u.value, p("toggle-year-picker", { flow: Y, show: V });
    }, P = (Y) => {
      u.value = !1, p("year-select", Y);
    }, v = (Y = !1) => {
      p("handle-year", Y);
    };
    return (Y, V) => (O(), K(ke, null, [
      Pe("div", {
        class: be(["dp--year-mode-picker", { "dp--hidden-el": u.value }])
      }, [
        t(s)(e.instance) ? (O(), Se(Ft, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(d)?.prevYear,
          disabled: e.isDisabled(!1),
          class: be(t(B)?.navBtnPrev),
          onActivate: V[0] || (V[0] = ($) => v(!1))
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
          onClick: V[1] || (V[1] = () => i(!1)),
          onKeydown: V[2] || (V[2] = vn(() => i(!1), ["enter"]))
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
          onActivate: V[3] || (V[3] = ($) => v(!0))
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
            onToggle: i,
            onSelected: V[4] || (V[4] = ($) => P($))
          }, Le({
            "button-icon": we(() => [
              Y.$slots["calendar-icon"] ? se(Y.$slots, "calendar-icon", { key: 0 }) : U("", !0),
              Y.$slots["calendar-icon"] ? U("", !0) : (O(), Se(t(Ht), { key: 1 }))
            ]),
            _: 2
          }, [
            Y.$slots["year-overlay-value"] ? {
              name: "item",
              fn: we(({ item: $ }) => [
                se(Y.$slots, "year-overlay-value", {
                  text: $.text,
                  value: $.value
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
    getDate: w,
    rootEmit: p,
    state: r,
    month: o,
    year: s,
    modelValue: n,
    calendars: l,
    rootProps: d,
    defaults: { multiCalendars: B, range: A, safeDates: I, filters: k, highlight: u }
  } = $e(), { resetDate: M, getYearFromDate: i, checkHighlightYear: P, groupListAndMap: v } = je(), { getYears: Y } = na(), { validateMonthYear: V, checkMinMaxValue: $ } = at(), F = de([!1]), q = j(() => Y()), R = j(() => (z, ee) => {
    const fe = _e(M(w()), {
      month: o.value(z),
      year: s.value(z)
    }), ge = ee ? Ia(fe) : Et(fe);
    return V(ge, d.preventMinMaxNavigation, ee);
  }), y = () => Array.isArray(n.value) && B.value.solo && n.value[1], c = () => {
    for (let z = 0; z < B.value.count; z++)
      if (z === 0)
        l.value[z] = l.value[0];
      else if (z === B.value.count - 1 && y())
        l.value[z] = {
          month: Te(n.value[1]),
          year: ye(n.value[1])
        };
      else {
        const ee = _e(w(), l.value[z - 1]);
        l.value[z] = { month: Te(ee), year: ye(Va(ee, 1)) };
      }
  }, D = (z) => {
    if (!z) return c();
    const ee = _e(w(), l.value[z]);
    return l.value[0].year = ye(Ea(ee, B.value.count - 1)), c();
  }, N = (z, ee) => {
    const fe = $n(ee, z);
    return A.value.showLastInRange && fe > 1 ? ee : z;
  }, Q = (z) => d.focusStartDate || B.value.solo ? z[0] : z[1] ? N(z[0], z[1]) : z[0], ae = () => {
    if (n.value) {
      const z = Array.isArray(n.value) ? Q(n.value) : n.value;
      l.value[0] = { month: Te(z), year: ye(z) };
    }
  }, Z = () => {
    ae(), B.value.count && c();
  };
  st(n, (z, ee) => {
    r.isTextInputDate && JSON.stringify(z ?? {}) !== JSON.stringify(ee ?? {}) && Z();
  }), Ne(() => {
    Z();
  });
  const ve = (z, ee) => {
    l.value[ee].year = z, p("update-month-year", { instance: ee, year: z, month: l.value[ee].month }), B.value.count && !B.value.solo && D(ee);
  }, he = j(() => (z) => v(q.value, (ee) => {
    const fe = s.value(z) === ee.value, ge = $(
      ee.value,
      i(I.value.minDate),
      i(I.value.maxDate)
    ) || k.value.years?.includes(s.value(z)), De = P(u.value, ee.value);
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
      d.startDate && (n.value && d.focusStartDate || !n.value) && ve(ye(w(d.startDate)), 0);
    },
    toggleYearPicker: W,
    handleYearSelect: L,
    handleYear: J
  };
}, oa = () => {
  const { isDateAfter: e, isDateBefore: w, isDateEqual: p } = je(), {
    getDate: r,
    rootEmit: o,
    rootProps: s,
    modelValue: n,
    defaults: { range: l }
  } = $e();
  return {
    getRangeWithFixedDate: (u) => Array.isArray(n.value) && (n.value.length === 2 || n.value.length === 1 && l.value.partialRange) ? l.value.fixedStart && (e(u, n.value[0]) || p(u, n.value[0])) ? [n.value[0], u] : l.value.fixedEnd && (w(u, n.value[1]) || p(u, n.value[1])) ? [u, n.value[1]] : (o("invalid-fixed-range", u), n.value) : [],
    setPresetDate: (u) => {
      Array.isArray(u.value) && u.value.length <= 2 && l.value.enabled ? n.value = u.value.map((M) => r(M)) : Array.isArray(u.value) || (n.value = r(u.value));
    },
    checkRangeAutoApply: (u, M, i) => {
      l && (u[0] && u[1] && s.autoApply && M("auto-apply", i), u[0] && !u[1] && (s.modelAuto || l.value.partialRange) && s.autoApply && M("auto-apply", i));
    },
    setMonthOrYearRange: (u) => {
      let M = n.value ? n.value.slice() : [];
      return M.length === 2 && M[1] !== null && (M = []), M.length ? (w(u, M[0]) ? M.unshift(u) : M[1] = u, o("range-end", u)) : (M = [u], o("range-start", u)), M;
    },
    handleMultiDatesSelect: (u, M) => {
      if (n.value && Array.isArray(n.value))
        if (n.value.some((i) => p(u, i))) {
          const i = n.value.filter((P) => !p(P, u));
          n.value = i.length ? i : null;
        } else (M && +M > n.value.length || !M) && n.value.push(u);
      else
        n.value = [u];
    }
  };
}, Xr = (e, w) => {
  const {
    getDate: p,
    rootEmit: r,
    state: o,
    calendars: s,
    year: n,
    modelValue: l,
    rootProps: d,
    defaults: { range: B, highlight: A, safeDates: I, filters: k, multiDates: u }
  } = $e();
  jt(() => {
    o.isTextInputDate && L(ye(p(d.startDate)), 0);
  });
  const { checkMinMaxRange: M, checkMinMaxValue: i } = at(), { isDateBetween: P, resetDateTime: v, resetDate: Y, getMinMonth: V, getMaxMonth: $, checkHighlightMonth: F, groupListAndMap: q } = je(), { checkRangeAutoApply: R, getRangeWithFixedDate: y, handleMultiDatesSelect: c, setMonthOrYearRange: D, setPresetDate: N } = oa(), { padZero: Q } = Ee(), { getMonths: ae, isOutOfYearRange: Z } = na(), ve = j(() => ae()), he = de(null), {
    selectYear: L,
    groupedYears: J,
    showYearPicker: W,
    toggleYearPicker: oe,
    handleYearSelect: z,
    handleYear: ee,
    isDisabled: fe,
    setStartDate: ge
  } = Ua(w);
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
        return P(l.value, he.value, ne) && !te;
      }
      return !1;
    }
    return !1;
  }, ce = j(() => (a) => q(ve.value, (f) => {
    const S = re(a, f.value), te = i(
      f.value,
      V(n.value(a), I.value.minDate),
      $(n.value(a), I.value.maxDate)
    ) || C(I.value.disabledDates, n.value(a), f.value) || k.value.months?.includes(f.value) || !G(I.value.allowedDates, n.value(a), f.value) || Z(n.value(a)), ne = E(f.value, a), Ce = F(A.value, f.value, n.value(a));
    return { active: S, disabled: te, isBetween: ne, highlighted: Ce };
  })), ue = (a, f) => _e(Y(p()), { month: a, year: n.value(f) }), b = (a, f) => {
    const S = l.value ? l.value : Y(p());
    l.value = _e(S, { month: a, year: n.value(f) }), w("auto-apply"), w("update-flow-step");
  }, T = (a, f) => {
    const S = ue(a, f);
    B.value.fixedEnd || B.value.fixedStart ? l.value = y(S) : l.value ? M(S, l.value) && (l.value = D(ue(a, f))) : l.value = [ue(a, f)], Ge().then(() => {
      R(l.value, w, l.value.length < 2);
    });
  }, ie = (a, f) => {
    c(ue(a, f), u.value.limit), w("auto-apply", !0);
  }, le = (a, f) => (s.value[f].month = a, m(f, s.value[f].year, a), u.value.enabled ? ie(a, f) : B.value.enabled ? T(a, f) : b(a, f)), h = (a, f) => {
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
    }), w("auto-apply");
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
  setup(e, { expose: w, emit: p }) {
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
      year: k,
      isDisabled: u,
      showYearPicker: M,
      modelValue: i,
      presetDate: P,
      setHoverDate: v,
      selectMonth: Y,
      selectYear: V,
      toggleYearPicker: $,
      handleYearSelect: F,
      handleYear: q,
      getModelMonthYear: R
    } = Xr(o, r);
    return w({ getSidebarProps: () => ({
      modelValue: i,
      year: k,
      getModelMonthYear: R,
      selectMonth: Y,
      selectYear: V,
      handleYear: q
    }), presetDate: P, toggleYearPicker: (c) => $(0, c) }), (c, D) => (O(), Se(la, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: we(({ instances: N, wrapClass: Q }) => [
        (O(!0), K(ke, null, Ye(N, (ae) => (O(), K("div", {
          key: ae,
          class: be(Q)
        }, [
          c.$slots["top-extra"] ? se(c.$slots, "top-extra", {
            key: 0,
            value: t(i)
          }) : U("", !0),
          c.$slots["month-year"] ? se(c.$slots, "month-year", et({
            key: 1,
            ref_for: !0
          }, {
            year: t(k),
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
                year: t(k)(ae),
                "is-disabled": (Z) => t(u)(ae, Z),
                onHandleYear: (Z) => t(q)(ae, Z),
                onYearSelect: (Z) => t(F)(Z, ae),
                onToggleYearPicker: (Z) => t($)(ae, Z?.flow, Z?.show)
              }, Le({ _: 2 }, [
                Ye(t(B), (Z, ve) => ({
                  name: Z,
                  fn: we((he) => [
                    se(c.$slots, Z, et({ ref_for: !0 }, he))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            c.$slots["month-overlay-value"] ? {
              name: "item",
              fn: we(({ item: Z }) => [
                se(c.$slots, "month-overlay-value", {
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
}), el = (e, w) => {
  const {
    rootEmit: p,
    getDate: r,
    state: o,
    modelValue: s,
    rootProps: n,
    defaults: { highlight: l, multiDates: d, filters: B, range: A, safeDates: I }
  } = $e(), { getYears: k } = na(), { isDateBetween: u, resetDate: M, resetDateTime: i, getYearFromDate: P, checkHighlightYear: v, groupListAndMap: Y } = je(), { checkRangeAutoApply: V, setMonthOrYearRange: $ } = oa(), { checkMinMaxValue: F, checkMinMaxRange: q } = at();
  jt(() => {
    o.isTextInputDate && (y.value = ye(r(n.startDate)));
  });
  const R = de(null), y = de();
  Ne(() => {
    n.startDate && (s.value && n.focusStartDate || !s.value) && (y.value = ye(r(n.startDate)));
  });
  const c = (L) => Array.isArray(s.value) ? s.value.some((J) => ye(J) === L) : s.value ? ye(s.value) === L : !1, D = (L) => A.value.enabled && Array.isArray(s.value) ? u(s.value, R.value, Z(L)) : !1, N = (L) => I.value.allowedDates?.size ? I.value.allowedDates.has(`${L}`) : !0, Q = (L) => I.value.disabledDates instanceof Map ? I.value.disabledDates.size ? I.value.disabledDates.has(`${L}`) : !1 : typeof I.value.disabledDates == "function" ? I.value.disabledDates(lt(i(Et(r())), L)) : !0, ae = j(() => Y(k(), (L) => {
    const J = c(L.value), W = F(
      L.value,
      P(I.value.minDate),
      P(I.value.maxDate)
    ) || B.value.years.includes(L.value) || !N(L.value) || Q(L.value), oe = D(L.value) && !J, z = v(l.value, L.value);
    return { active: J, disabled: W, isBetween: oe, highlighted: z };
  })), Z = (L) => lt(M(Et(r())), L);
  return {
    groupedYears: ae,
    focusYear: y,
    setHoverValue: (L) => {
      R.value = lt(M(r()), L);
    },
    selectYear: (L) => {
      if (p("update-month-year", { instance: 0, year: L, month: Number.NaN }), d.value.enabled)
        return s.value ? Array.isArray(s.value) && ((s.value?.map((W) => ye(W))).includes(L) ? s.value = s.value.filter((W) => ye(W) !== L) : s.value.push(lt(i(r()), L))) : s.value = [lt(i(Et(r())), L)], w("auto-apply", !0);
      A.value.enabled ? q(Z(L), s.value) && (s.value = $(Z(L)), Ge().then(() => {
        V(s.value, w, s.value.length < 2);
      })) : (s.value = Z(L), w("auto-apply"));
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, {
      modelValue: s,
      defaults: { config: n },
      rootProps: l
    } = $e(), { groupedYears: d, focusYear: B, selectYear: A, setHoverValue: I } = el(o, r);
    return w({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: A
    }) }), (u, M) => (O(), K("div", null, [
      u.$slots["top-extra"] ? se(u.$slots, "top-extra", {
        key: 0,
        value: t(s)
      }) : U("", !0),
      u.$slots["month-year"] ? se(u.$slots, "month-year", Je(et({ key: 1 }, {
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
        u.$slots["year-overlay-value"] ? {
          name: "item",
          fn: we(({ item: i }) => [
            se(u.$slots, "year-overlay-value", {
              text: i.text,
              value: i.value
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, { setTimePickerElements: s, setTimePickerBackRef: n } = gt(), {
      getDate: l,
      rootEmit: d,
      rootProps: B,
      defaults: { ariaLabels: A, filters: I, config: k, range: u, multiCalendars: M, timeConfig: i }
    } = $e(), { checkKeyDown: P, hoursToAmPmHours: v } = Ee(), { sanitizeTime: Y, groupListAndMap: V } = je(), { transitionName: $, showTransition: F } = Kt(), q = Nt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), R = de("AM"), y = de(null), c = de([]), D = de(), N = de(!1);
    Ne(() => {
      r("mounted");
    });
    const Q = (a) => _e(l(), {
      hours: a.hours,
      minutes: a.minutes,
      seconds: i.value.enableSeconds ? a.seconds : 0,
      milliseconds: 0
    }), ae = j(
      () => (a) => Ae(a, o[a]) || ve(a, o[a])
    ), Z = j(() => ({ hours: o.hours, minutes: o.minutes, seconds: o.seconds })), ve = (a, f) => u.value.enabled && !u.value.disableTimeRangeValidation ? !o.validateTime(a, f) : !1, he = (a, f) => {
      if (u.value.enabled && !u.value.disableTimeRangeValidation) {
        const S = f ? +i.value[`${a}Increment`] : -+i.value[`${a}Increment`], te = o[a] + S;
        return !o.validateTime(a, te);
      }
      return !1;
    }, L = j(() => (a) => !ue(+o[a] + +i.value[`${a}Increment`], a) || he(a, !0)), J = j(() => (a) => !ue(+o[a] - +i.value[`${a}Increment`], a) || he(a, !1)), W = (a, f) => Fa(_e(l(), a), f), oe = (a, f) => Sn(_e(l(), a), f), z = j(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !i.value.timePickerInline,
        dp__time_col_reg_block: !i.value.enableSeconds && i.value.is24 && !i.value.timePickerInline,
        dp__time_col_reg_inline: !i.value.enableSeconds && i.value.is24 && i.value.timePickerInline,
        dp__time_col_reg_with_button: !i.value.enableSeconds && !i.value.is24,
        dp__time_col_sec: i.value.enableSeconds && i.value.is24,
        dp__time_col_sec_with_button: i.value.enableSeconds && !i.value.is24
      })
    ), ee = j(
      () => i.value.timePickerInline && u.value.enabled && !M.value.count
    ), fe = j(() => {
      const a = [{ type: "hours" }];
      return i.value.enableMinutes && a.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), i.value.enableSeconds && a.push({ type: "", separator: !0 }, {
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
      const f = i.value.is24 ? 24 : 12, S = a === "hours" ? f : 60, te = +i.value[`${a}GridIncrement`], ne = a === "hours" && !i.value.is24 ? te : 0, Ce = [];
      for (let Fe = ne; Fe < S; Fe += te)
        Ce.push({
          value: i.value.is24 ? Fe : re(Fe, a),
          text: Fe < 10 ? `0${Fe}` : `${Fe}`
        });
      return a === "hours" && !i.value.is24 && Ce.unshift({ value: R.value === "PM" ? 12 : 0, text: "12" }), V(Ce, (Fe) => ({ active: !1, disabled: I.value.times[a].includes(Fe.value) || !ue(Fe.value, a) || Ae(a, Fe.value) || ve(a, Fe.value) }));
    }, E = (a) => a >= 0 ? a : 59, ce = (a) => a >= 0 ? a : 23, ue = (a, f) => {
      const S = B.minTime ? Q(Y(B.minTime)) : null, te = B.maxTime ? Q(Y(B.maxTime)) : null, ne = Q(
        Y(
          Z.value,
          f,
          f === "minutes" || f === "seconds" ? E(a) : ce(a)
        )
      );
      return S && te ? (Tt(ne, te) || At(ne, te)) && (_t(ne, S) || At(ne, S)) : S ? _t(ne, S) || At(ne, S) : te ? Tt(ne, te) || At(ne, te) : !0;
    }, b = (a) => i.value[`no${a[0].toUpperCase() + a.slice(1)}Overlay`], T = (a) => {
      b(a) || (q[a] = !q[a], q[a] ? (N.value = !0, r("overlay-opened", a)) : (N.value = !1, r("overlay-closed", a)));
    }, ie = (a) => a === "hours" ? ut : a === "minutes" ? dt : pt, le = () => {
      D.value && clearTimeout(D.value);
    }, h = (a, f = !0, S) => {
      const te = f ? W : oe, ne = f ? +i.value[`${a}Increment`] : -+i.value[`${a}Increment`];
      ue(+o[a] + ne, a) && r(
        `update:${a}`,
        ie(a)(
          te({ [a]: +o[a] }, { [a]: +i.value[`${a}Increment`] })
        )
      ), !S?.keyboard && k.value.timeArrowHoldThreshold && (D.value = setTimeout(() => {
        h(a, f);
      }, k.value.timeArrowHoldThreshold));
    }, m = (a) => i.value.is24 ? a : (a >= 12 ? R.value = "PM" : R.value = "AM", v(a)), x = () => {
      R.value === "PM" ? (R.value = "AM", r("update:hours", o.hours - 12)) : (R.value = "PM", r("update:hours", o.hours + 12)), d("am-pm-change", R.value);
    }, g = (a) => {
      q[a] = !0;
    }, C = (a, f, S) => {
      if (a && B.arrowNavigation) {
        Array.isArray(c.value[f]) ? c.value[f][S] = a : c.value[f] = [a];
        const te = c.value.reduce(
          (ne, Ce) => Ce.map((Fe, kt) => [...ne[kt] || [], Ce[kt]]),
          []
        );
        n(o.closeTimePickerBtn), y.value && (te[1] = te[1].concat(y.value)), s(te, o.order);
      }
    }, G = (a, f) => (T(a), r(`update:${a}`, f));
    return w({ openChildCmp: g }), (a, f) => t(B).disabled ? U("", !0) : (O(), K("div", al, [
      (O(!0), K(ke, null, Ye(fe.value, (S, te) => (O(), K("div", {
        key: te,
        class: be(z.value),
        "data-compact": ee.value && !t(i).enableSeconds,
        "data-collapsed": ee.value && t(i).enableSeconds
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
              dp__inc_dec_button: !t(i).timePickerInline,
              dp__inc_dec_button_inline: t(i).timePickerInline,
              dp__tp_inline_btn_top: t(i).timePickerInline,
              dp__inc_dec_button_disabled: L.value(S.type),
              "dp--hidden-el": N.value
            }),
            "data-test-id": `${S.type}-time-inc-btn-${o.order}`,
            "aria-label": t(A)?.incrementValue(S.type),
            tabindex: "0",
            onKeydown: (ne) => t(P)(ne, () => h(S.type, !0, { keyboard: !0 }), !0),
            onClick: (ne) => t(k).timeArrowHoldThreshold ? void 0 : h(S.type, !0),
            onMousedown: (ne) => t(k).timeArrowHoldThreshold ? h(S.type, !0) : void 0,
            onMouseup: le
          }, [
            t(i).timePickerInline ? (O(), K(ke, { key: 1 }, [
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
              dp__time_display_block: !t(i).timePickerInline,
              dp__time_display_inline: t(i).timePickerInline,
              "dp--time-invalid": ae.value(S.type),
              "dp--time-overlay-btn": !ae.value(S.type),
              "dp--hidden-el": N.value
            }),
            disabled: b(S.type),
            tabindex: "0",
            "data-test-id": `${S.type}-toggle-overlay-btn-${o.order}`,
            onKeydown: (ne) => t(P)(ne, () => T(S.type), !0),
            onClick: (ne) => T(S.type)
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
              dp__inc_dec_button: !t(i).timePickerInline,
              dp__inc_dec_button_inline: t(i).timePickerInline,
              dp__tp_inline_btn_bottom: t(i).timePickerInline,
              dp__inc_dec_button_disabled: J.value(S.type),
              "dp--hidden-el": N.value
            }),
            "data-test-id": `${S.type}-time-dec-btn-${o.order}`,
            "aria-label": t(A)?.decrementValue(S.type),
            tabindex: "0",
            onKeydown: (ne) => t(P)(ne, () => h(S.type, !1, { keyboard: !0 }), !0),
            onClick: (ne) => t(k).timeArrowHoldThreshold ? void 0 : h(S.type, !1),
            onMousedown: (ne) => t(k).timeArrowHoldThreshold ? h(S.type, !1) : void 0,
            onMouseup: le
          }, [
            t(i).timePickerInline ? (O(), K(ke, { key: 1 }, [
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
      t(i).is24 ? U("", !0) : (O(), K("div", sl, [
        a.$slots["am-pm-button"] ? se(a.$slots, "am-pm-button", {
          key: 0,
          toggle: x,
          value: R.value
        }) : U("", !0),
        a.$slots["am-pm-button"] ? U("", !0) : (O(), K("button", {
          key: 1,
          ref_key: "amPmButton",
          ref: y,
          type: "button",
          class: "dp__pm_am_button",
          role: "button",
          "aria-label": t(A)?.amPmButton,
          tabindex: "0",
          "data-compact": ee.value,
          onClick: x,
          onKeydown: f[0] || (f[0] = (S) => t(P)(S, () => x(), !0))
        }, Ke(R.value), 41, ul))
      ])),
      (O(!0), K(ke, null, Ye(ge.value, (S, te) => (O(), Se(St, {
        key: te,
        name: t($)(q[S.type]),
        css: t(F)
      }, {
        default: we(() => [
          q[S.type] ? (O(), Se(zt, {
            key: 0,
            items: H(S.type),
            "is-last": t(B).autoApply && !t(k).keepActionRow,
            type: S.type,
            "aria-labels": t(A),
            "overlay-label": t(A).timeOverlay?.(S.type),
            onSelected: (ne) => G(S.type, ne),
            onToggle: (ne) => T(S.type),
            onResetFlow: f[1] || (f[1] = (ne) => a.$emit("reset-flow"))
          }, Le({
            "button-icon": we(() => [
              a.$slots["clock-icon"] ? se(a.$slots, "clock-icon", { key: 0 }) : U("", !0),
              a.$slots["clock-icon"] ? U("", !0) : (O(), Se(wa(t(i).timePickerInline ? t(Ht) : t(La)), { key: 1 }))
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
                  toggle: () => T(S.type)
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, {
      rootEmit: s,
      modelValue: n,
      rootProps: l,
      defaults: { ariaLabels: d, textInput: B, config: A, range: I, timeConfig: k }
    } = $e(), { isModelAuto: u } = je(), { checkKeyDown: M, findFocusableEl: i } = Ee(), { buildMatrix: P, setTimePicker: v } = gt(), { transitionName: Y, showTransition: V } = Kt(), { hideNavigationButtons: $ } = ra(), { mapSlots: F } = yt(), { isMobile: q } = aa(), R = ht(), y = Re("overlay"), c = Re("open-tp-btn"), D = Re("close-tp-btn"), N = Re("tp-input"), Q = de(!1);
    Ne(() => {
      r("mount"), !l.timePicker && l.arrowNavigation ? P([Qe(c.value)], "time") : v(!0, l.timePicker);
    });
    const ae = j(() => I.value.enabled && l.modelAuto ? u(n.value) : !0), Z = de(!1), ve = (re) => ({
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
      if (y.value && !B.value.enabled && !o.noOverlayFocus) {
        const re = i(y.value);
        re && re.focus({ preventScroll: !0 });
      }
    }, De = (re) => {
      Q.value = !1, s("overlay-toggle", { open: !1, overlay: re });
    }, Ae = (re) => {
      Q.value = !0, s("overlay-toggle", { open: !0, overlay: re });
    };
    return w({ toggleTimePicker: L }), (re, H) => (O(), K("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(q)
    }, [
      !t(l).timePicker && !t(k).timePickerInline ? Zt((O(), K("button", {
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
        [ea, !t($)("time")]
      ]) : U("", !0),
      tt(St, {
        name: t(Y)(Z.value),
        css: t(V) && !t(k).timePickerInline
      }, {
        default: we(() => [
          Z.value || t(l).timePicker || t(k).timePickerInline ? (O(), K("div", {
            key: 0,
            ref: "overlay",
            role: t(k).timePickerInline ? void 0 : "dialog",
            class: be({
              dp__overlay: !t(k).timePickerInline,
              "dp--overlay-absolute": !t(l).timePicker && !t(k).timePickerInline,
              "dp--overlay-relative": t(l).timePicker
            }),
            style: Xe(t(l).timePicker ? { height: `${t(A).modeHeight}px` } : void 0),
            "aria-label": t(d)?.timePicker,
            tabindex: t(k).timePickerInline ? void 0 : 0
          }, [
            Pe("div", {
              class: be(
                t(k).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
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
                class: be(t(k).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
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
                  "validate-time": (ue, b) => e.validateTime(ue, oe(b, ce, ue)),
                  "onUpdate:hours": (ue) => z(oe(ue, ce, "hours")),
                  "onUpdate:minutes": (ue) => ee(oe(ue, ce, "minutes")),
                  "onUpdate:seconds": (ue) => fe(oe(ue, ce, "seconds")),
                  onMounted: ge,
                  onOverlayClosed: De,
                  onOverlayOpened: Ae
                }), Le({ _: 2 }, [
                  Ye(t(W), (ue, b) => ({
                    name: ue,
                    fn: we((T) => [
                      se(re.$slots, ue, et({ ref_for: !0 }, T))
                    ])
                  }))
                ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [ea, ce === 0 ? !0 : ae.value]
                ])), 128))
              ], 2)),
              !t(l).timePicker && !t(k).timePickerInline ? Zt((O(), K("button", {
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
                [ea, !t($)("time")]
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
    getDate: w,
    modelValue: p,
    time: r,
    rootProps: o,
    defaults: { range: s, timeConfig: n }
  } = $e(), { isDateEqual: l, setTime: d } = je(), B = (R, y) => Array.isArray(r[R]) ? r[R][y] : r[R], A = (R) => n.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[R] : r.seconds : 0, I = (R, y) => R ? d(
    y !== void 0 ? { hours: B("hours", y), minutes: B("minutes", y), seconds: A(y) } : { hours: r.hours, minutes: r.minutes, seconds: A() },
    R
  ) : Cn(w(), A(y)), k = (R, y) => {
    r[R] = y;
  }, u = j(() => o.modelAuto && s.value.enabled ? Array.isArray(p.value) ? p.value.length > 1 : !1 : s.value.enabled), M = (R, y) => {
    const c = Object.fromEntries(
      Object.keys(r).map((D) => D === R ? [D, y] : [D, r[D]].slice())
    );
    if (u.value && !s.value.disableTimeRangeValidation) {
      const D = (Q) => p.value ? d(
        {
          hours: c.hours[Q],
          minutes: c.minutes[Q],
          seconds: c.seconds[Q]
        },
        p.value[Q]
      ) : null, N = (Q) => Rn(p.value[Q], 0);
      return !(l(D(0), D(1)) && (_t(D(0), N(1)) || Tt(D(1), N(0))));
    }
    return !0;
  }, i = (R, y) => {
    M(R, y) && (k(R, y), e && e());
  }, P = (R) => {
    i("hours", R);
  }, v = (R) => {
    i("minutes", R);
  }, Y = (R) => {
    i("seconds", R);
  }, V = (R, y) => {
    P(R.hours), v(R.minutes), Y(R.seconds), p.value && y(p.value);
  }, $ = (R) => {
    if (R) {
      const y = Array.isArray(R), c = y ? [+R[0].hours, +R[1].hours] : +R.hours, D = y ? [+R[0].minutes, +R[1].minutes] : +R.minutes, N = y ? [+(R[0].seconds ?? 0), +(R[1].seconds ?? 0)] : +(R.seconds ?? 0);
      k("hours", c), k("minutes", D), n.value.enableSeconds && k("seconds", N);
    }
  }, F = (R, y) => {
    const c = {
      hours: Array.isArray(r.hours) ? r.hours[R] : r.hours,
      disabledArr: []
    };
    return (y || y === 0) && (c.hours = y), Array.isArray(o.disabledTimes) && (c.disabledArr = s.value.enabled && Array.isArray(o.disabledTimes[R]) ? o.disabledTimes[R] : o.disabledTimes), c;
  }, q = j(() => (R, y) => {
    if (Array.isArray(o.disabledTimes)) {
      const { disabledArr: c, hours: D } = F(R, y), N = c.filter((Q) => +Q.hours === D);
      return N[0]?.minutes === "*" ? { hours: [D], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: N?.map((Q) => +Q.minutes) ?? [],
        seconds: N?.map((Q) => Q.seconds ? +Q.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: k,
    updateHours: P,
    updateMinutes: v,
    updateSeconds: Y,
    getSetDateTime: I,
    updateTimeValues: V,
    getSecondsValue: A,
    assignStartTime: $,
    validateTime: M,
    disabledTimesConfig: q
  };
}, ml = (e) => {
  const {
    getDate: w,
    time: p,
    modelValue: r,
    state: o,
    defaults: { startTime: s, range: n, timeConfig: l }
  } = $e(), { getTimeObj: d } = je();
  jt(() => {
    o.isTextInputDate && F();
  });
  const { updateTimeValues: B, getSetDateTime: A, assignTime: I, assignStartTime: k, disabledTimesConfig: u, validateTime: M } = Qa(i);
  function i() {
    e("update-flow-step");
  }
  const P = (y) => {
    const { hours: c, minutes: D, seconds: N } = y;
    return { hours: +c, minutes: +D, seconds: N ? +N : 0 };
  }, v = () => {
    if (l.value.startTime) {
      if (Array.isArray(l.value.startTime)) {
        const c = P(l.value.startTime[0]), D = P(l.value.startTime[1]);
        return [_e(w(), c), _e(w(), D)];
      }
      const y = P(l.value.startTime);
      return _e(w(), y);
    }
    return n.value.enabled ? [null, null] : null;
  }, Y = () => {
    if (n.value.enabled) {
      const [y, c] = v();
      r.value = [A(y, 0), A(c, 1)];
    } else
      r.value = A(v());
  }, V = (y) => Array.isArray(y) ? [d(w(y[0])), d(w(y[1]))] : [d(y ?? w())], $ = (y, c, D) => {
    I("hours", y), I("minutes", c), I("seconds", l.value.enableSeconds ? D : 0);
  }, F = () => {
    const [y, c] = V(r.value);
    return n.value.enabled ? $(
      [y.hours, c.hours],
      [y.minutes, c.minutes],
      [y.seconds, c.seconds]
    ) : $(y.hours, y.minutes, y.seconds);
  };
  Ne(() => (k(s.value), r.value ? F() : Y()));
  const q = () => {
    Array.isArray(r.value) ? r.value = r.value.map((y, c) => y && A(y, c)) : r.value = A(r.value), e("time-update");
  };
  return {
    modelValue: r,
    time: p,
    disabledTimesConfig: u,
    validateTime: M,
    updateTime: (y) => {
      B(y, q);
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = ht(), { mapSlots: s } = yt(), n = s(o, "timePicker"), l = Re("time-input"), { time: d, modelValue: B, disabledTimesConfig: A, updateTime: I, validateTime: k } = ml(r);
    return Ne(() => {
      r("mount");
    }), w({ getSidebarProps: () => ({
      modelValue: B,
      time: d,
      updateTime: I
    }), toggleTimePicker: (i, P = !1, v = "") => {
      l.value?.toggleTimePicker(i, P, v);
    } }), (i, P) => (O(), Se(la, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: we(({ wrapClass: v }) => [
        Pe("div", {
          class: be(v)
        }, [
          tt(qa, et({ ref: "time-input" }, i.$props, {
            hours: t(d).hours,
            minutes: t(d).minutes,
            seconds: t(d).seconds,
            "disabled-times-config": t(A),
            "validate-time": t(k),
            "onUpdate:hours": P[0] || (P[0] = (Y) => t(I)({ hours: Y, minutes: t(d).minutes, seconds: t(d).seconds })),
            "onUpdate:minutes": P[1] || (P[1] = (Y) => t(I)({ hours: t(d).hours, minutes: Y, seconds: t(d).seconds })),
            "onUpdate:seconds": P[2] || (P[2] = (Y) => t(I)({ hours: t(d).hours, minutes: t(d).minutes, seconds: Y })),
            onResetFlow: P[3] || (P[3] = (Y) => i.$emit("reset-flow"))
          }), Le({ _: 2 }, [
            Ye(t(n), (Y, V) => ({
              name: Y,
              fn: we(($) => [
                se(i.$slots, Y, Je(ot($)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), hl = (e, w) => {
  const {
    getDate: p,
    rootProps: r,
    defaults: { filters: o }
  } = $e(), { validateMonthYearInRange: s, validateMonthYear: n } = at(), l = (k, u) => {
    let M = k;
    return o.value.months.includes(Te(M)) ? (M = u ? Dt(k, 1) : Lt(k, 1), l(M, u)) : M;
  }, d = (k, u) => {
    let M = k;
    return o.value.years.includes(ye(M)) ? (M = u ? Va(k, 1) : Ea(k, 1), d(M, u)) : M;
  }, B = (k, u = !1) => {
    const M = _e(p(), { month: e.month, year: e.year });
    let i = k ? Dt(M, 1) : Lt(M, 1);
    r.disableYearSelect && (i = lt(i, e.year));
    let P = Te(i), v = ye(i);
    o.value.months.includes(P) && (i = l(i, k), P = Te(i), v = ye(i)), o.value.years.includes(v) && (i = d(i, k), v = ye(i)), s(P, v, k, r.preventMinMaxNavigation) && A(P, v, u);
  }, A = (k, u, M) => {
    w("update-month-year", { month: k, year: u, fromNav: M });
  }, I = j(() => (k) => n(
    _e(p(), { month: e.month, year: e.year }),
    r.preventMinMaxNavigation,
    k
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, {
      rootEmit: s,
      rootProps: n,
      modelValue: l,
      defaults: { ariaLabels: d, filters: B, config: A, highlight: I, safeDates: k, ui: u }
    } = $e(), { transitionName: M, showTransition: i } = Kt(), { showLeftIcon: P, showRightIcon: v } = ra(), { buildMatrix: Y } = gt(), { handleMonthYearChange: V, isDisabled: $, updateMonthYear: F } = hl(o, r), { getMaxMonth: q, getMinMonth: R, getYearFromDate: y, groupListAndMap: c, checkHighlightYear: D, checkHighlightMonth: N } = je(), { checkKeyDown: Q } = Ee(), { formatYear: ae } = bt(), { checkMinMaxValue: Z } = at(), ve = de(!1), he = de(!1), L = de(!1), J = de([null, null, null, null]);
    Ne(() => {
      r("mount");
    });
    const W = (T) => ({
      get: () => o[T],
      set: (ie) => {
        const le = T === rt.month ? rt.year : rt.month;
        r("update-month-year", { [T]: ie, [le]: o[le] }), T === rt.month ? re(!0) : H(!0);
      }
    }), oe = j(W(rt.month)), z = j(W(rt.year)), ee = j(() => (T) => ({
      month: o.month,
      year: o.year,
      items: T === rt.month ? o.months : o.years,
      instance: o.instance,
      updateMonthYear: F,
      toggle: T === rt.month ? re : H
    })), fe = j(() => {
      const T = o.months.find((ie) => ie.value === o.month);
      return T || { text: "", value: 0 };
    }), ge = j(() => c(o.months, (T) => {
      const ie = o.month === T.value, le = Z(
        T.value,
        R(o.year, k.value.minDate),
        q(o.year, k.value.maxDate)
      ) || B.value.months.includes(T.value), h = N(I.value, T.value, o.year);
      return { active: ie, disabled: le, highlighted: h };
    })), De = j(() => c(o.years, (T) => {
      const ie = o.year === T.value, le = Z(
        T.value,
        y(k.value.minDate),
        y(k.value.maxDate)
      ) || B.value.years.includes(T.value), h = D(I.value, T.value);
      return { active: ie, disabled: le, highlighted: h };
    })), Ae = (T, ie, le) => {
      le === void 0 ? T.value = !T.value : T.value = le, T.value ? (L.value = !0, s("overlay-toggle", { open: !0, overlay: ie })) : (L.value = !1, s("overlay-toggle", { open: !1, overlay: ie }));
    }, re = (T = !1, ie) => {
      E(T), Ae(ve, qe.month, ie);
    }, H = (T = !1, ie) => {
      E(T), Ae(he, qe.year, ie);
    }, E = (T) => {
      T || r("reset-flow");
    }, ce = (T, ie) => {
      n.arrowNavigation && (J.value[ie] = Qe(T), Y(J.value, "monthYear"));
    }, ue = j(() => [
      {
        type: rt.month,
        index: 1,
        toggle: re,
        modelValue: oe.value,
        updateModelValue: (T) => oe.value = T,
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
        updateModelValue: (T) => z.value = T,
        text: ae(o.year),
        showSelectionGrid: he.value,
        items: De.value,
        ariaLabel: d.value?.openYearsOverlay,
        overlayLabel: d.value.yearPicker?.(!0) ?? void 0
      }
    ]), b = j(() => n.disableYearSelect ? [ue.value[0]] : n.yearFirst ? [...ue.value].reverse() : ue.value);
    return w({
      toggleMonthPicker: re,
      toggleYearPicker: H,
      handleMonthYearChange: V
    }), (T, ie) => (O(), K("div", gl, [
      T.$slots["month-year"] ? (O(), K("div", yl, [
        se(T.$slots, "month-year", Je(ot({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(F),
          handleMonthYearChange: t(V),
          instance: e.instance,
          isDisabled: t($)
        })))
      ])) : (O(), K(ke, { key: 1 }, [
        T.$slots["top-extra"] ? (O(), K("div", bl, [
          se(T.$slots, "top-extra", { value: t(l) })
        ])) : U("", !0),
        Pe("div", kl, [
          t(P)(e.instance) && !t(n).vertical ? (O(), Se(Ft, {
            key: 0,
            "aria-label": t(d)?.prevMonth,
            disabled: t($)(!1),
            class: be(t(u)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: ie[0] || (ie[0] = (le) => t(V)(!1, !0)),
            onSetRef: ie[1] || (ie[1] = (le) => ce(le, 0))
          }, {
            default: we(() => [
              T.$slots["arrow-left"] ? se(T.$slots, "arrow-left", { key: 0 }) : U("", !0),
              T.$slots["arrow-left"] ? U("", !0) : (O(), Se(t(Na), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : U("", !0),
          Pe("div", {
            class: be(["dp__month_year_wrap", {
              dp__year_disable_select: t(n).disableYearSelect
            }])
          }, [
            (O(!0), K(ke, null, Ye(b.value, (le, h) => (O(), K(ke, {
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
                T.$slots[le.type] ? se(T.$slots, le.type, {
                  key: 0,
                  text: le.text,
                  value: o[le.type]
                }) : U("", !0),
                T.$slots[le.type] ? U("", !0) : (O(), K(ke, { key: 1 }, [
                  ct(Ke(le.text), 1)
                ], 64))
              ], 42, wl),
              tt(St, {
                name: t(M)(le.showSelectionGrid),
                css: t(i)
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
                      T.$slots["calendar-icon"] ? se(T.$slots, "calendar-icon", { key: 0 }) : U("", !0),
                      T.$slots["calendar-icon"] ? U("", !0) : (O(), Se(t(Ht), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    T.$slots[`${le.type}-overlay-value`] ? {
                      name: "item",
                      fn: we(({ item: m }) => [
                        se(T.$slots, `${le.type}-overlay-value`, {
                          text: m.text,
                          value: m.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    T.$slots[`${le.type}-overlay`] ? {
                      name: "overlay",
                      fn: we(() => [
                        se(T.$slots, `${le.type}-overlay`, et({ ref_for: !0 }, ee.value(le.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    T.$slots[`${le.type}-overlay-header`] ? {
                      name: "header",
                      fn: we(() => [
                        se(T.$slots, `${le.type}-overlay-header`, {
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
          t(P)(e.instance) && t(n).vertical ? (O(), Se(Ft, {
            key: 1,
            "aria-label": t(d)?.prevMonth,
            "el-name": "action-prev",
            disabled: t($)(!1),
            class: be(t(u)?.navBtnPrev),
            onActivate: ie[2] || (ie[2] = (le) => t(V)(!1, !0))
          }, {
            default: we(() => [
              T.$slots["arrow-up"] ? se(T.$slots, "arrow-up", { key: 0 }) : U("", !0),
              T.$slots["arrow-up"] ? U("", !0) : (O(), Se(t(Ha), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : U("", !0),
          t(v)(e.instance) ? (O(), Se(Ft, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t($)(!0),
            "aria-label": t(d)?.nextMonth,
            class: be(t(u)?.navBtnNext),
            onActivate: ie[3] || (ie[3] = (le) => t(V)(!0, !0)),
            onSetRef: ie[4] || (ie[4] = (le) => ce(le, t(n).disableYearSelect ? 2 : 3))
          }, {
            default: we(() => [
              T.$slots[t(n).vertical ? "arrow-down" : "arrow-right"] ? se(T.$slots, t(n).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : U("", !0),
              T.$slots[t(n).vertical ? "arrow-down" : "arrow-right"] ? U("", !0) : (O(), Se(wa(t(n).vertical ? t(Ka) : t(Wa)), { key: 1 }))
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, {
      getDate: s,
      rootEmit: n,
      rootProps: l,
      defaults: { transitions: d, config: B, ariaLabels: A, multiCalendars: I, weekNumbers: k, multiDates: u, ui: M }
    } = $e(), { buildMultiLevelMatrix: i } = gt(), { isDateAfter: P, isDateEqual: v, resetDateTime: Y, getCellId: V } = je(), { checkKeyDown: $, checkStopPropagation: F, isTouchDevice: q } = Ee(), { formatWeekDay: R } = bt(), y = Re("calendar-wrap"), c = Re("active-tooltip"), D = de([]), N = de(null), Q = de(!0), ae = de(!1), Z = de(""), ve = de({
      bottom: "",
      left: "",
      transform: ""
    }), he = de({ left: "50%" });
    pn(y, {
      onSwipeEnd: (g, C) => {
        B.value.noSwipe || (l.vertical ? (C === "up" || C === "down") && r("handle-swipe", C === "up" ? "left" : "right") : (C === "left" || C === "right") && r("handle-swipe", C === "right" ? "left" : "right"));
      }
    });
    const L = j(() => l.calendar ? l.calendar(o.mappedDates) : o.mappedDates), J = j(() => l.dayNames ? Array.isArray(l.dayNames) ? l.dayNames : l.dayNames() : x());
    Ne(() => {
      r("mount", { cmp: "calendar", dayRefs: D.value }), B.value.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", b, { passive: !1 });
    }), $t(() => {
      B.value.monthChangeOnScroll && y.value && y.value.removeEventListener("wheel", b);
    });
    const W = (g) => g ? l.vertical ? "vNext" : "next" : l.vertical ? "vPrevious" : "previous", oe = (g, C) => {
      if (l.transitions) {
        const G = Y(_e(s(), { month: o.month, year: o.year }));
        Z.value = P(Y(_e(s(), { month: g, year: C })), G) ? d.value[W(!0)] : d.value[W(!1)], Q.value = !1, Ge(() => {
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
      if (await Ge(), c.value?.[0]) {
        const { left: te, width: ne } = c.value[0].getBoundingClientRect();
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
      if (ae.value && u.value.enabled && u.value.dragSelect)
        return r("select-date", g);
      if (r("set-hover-date", g), g.marker?.tooltip?.length) {
        if (l.hideOffsetDates && !g.current) return;
        await H(g, C, G);
      }
    }, ce = (g) => {
      N.value && (N.value = null, ve.value = structuredClone({ bottom: "", left: "", transform: "" }), n("tooltip-close", g.marker));
    }, ue = (g, C, G) => {
      g && (Array.isArray(D.value[C]) ? D.value[C][G] = g : D.value[C] = [g]), l.arrowNavigation && i(D.value, "calendar");
    }, b = (g) => {
      B.value.monthChangeOnScroll && (g.preventDefault(), r("handle-scroll", g));
    }, T = (g) => k.value ? k.value.type === "local" ? Yn(g.value, {
      weekStartsOn: +l.weekStart,
      locale: l.locale
    }) : k.value.type === "iso" ? On(g.value) : typeof k.value.type == "function" ? k.value.type(g.value) : "" : "", ie = (g) => {
      const C = g[0];
      return k.value?.hideOnOffsetDates ? g.some((G) => G.current) ? T(C) : "" : T(C);
    }, le = (g, C, G = !0) => {
      !G && q() || (!u.value.enabled || B.value.allowPreventDefault) && (F(g, B.value), r("select-date", C));
    }, h = (g) => {
      F(g, B.value);
    }, m = (g) => {
      u.value.enabled && u.value.dragSelect ? (ae.value = !0, r("select-date", g)) : u.value.enabled && r("select-date", g);
    }, x = () => {
      const C = [1, 2, 3, 4, 5, 6, 7].map((f) => R(f)), G = C.slice(0, +l.weekStart), a = C.slice(+l.weekStart + 1, C.length);
      return [C[+l.weekStart]].concat(...a).concat(...G);
    };
    return w({ triggerTransition: oe }), (g, C) => (O(), K("div", {
      class: be(De.value)
    }, [
      Pe("div", {
        ref: "calendar-wrap",
        class: be(z.value),
        role: "grid"
      }, [
        Pe("div", Ml, [
          t(k) ? (O(), K("div", _l, Ke(t(k).label), 1)) : U("", !0),
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
                t(k) ? (O(), K("div", Pl, [
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
                  onKeydown: (te) => t($)(te, () => g.$emit("select-date", f)),
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
}), Rl = (e, w, p, r) => {
  const o = de([]), s = de(/* @__PURE__ */ new Date()), n = de(), {
    getDate: l,
    rootEmit: d,
    calendars: B,
    month: A,
    year: I,
    time: k,
    modelValue: u,
    rootProps: M,
    today: i,
    state: P,
    defaults: { multiCalendars: v, startTime: Y, range: V, config: $, safeDates: F, multiDates: q, timeConfig: R, flow: y }
  } = $e(), { validateMonthYearInRange: c, isDisabled: D, isDateRangeAllowed: N, checkMinMaxRange: Q } = at(), { updateTimeValues: ae, getSetDateTime: Z, assignTime: ve, assignStartTime: he, validateTime: L, disabledTimesConfig: J } = Qa(r), { formatDay: W } = bt(), { resetDateTime: oe, setTime: z, isDateBefore: ee, isDateEqual: fe, getDaysInBetween: ge } = je(), { checkRangeAutoApply: De, getRangeWithFixedDate: Ae, handleMultiDatesSelect: re, setPresetDate: H } = oa(), { getMapDate: E } = Ee();
  jt(() => h(P.isTextInputDate));
  const ce = (_) => !$.value.keepViewOnOffsetClick || _ ? !0 : !n.value, ue = (_, X, pe, Me = !1) => {
    ce(Me) && (B.value[_] ??= B.value[_] = { month: 0, year: 0 }, B.value[_].month = X ?? B.value[_]?.month, B.value[_].year = pe ?? B.value[_]?.year);
  }, b = () => {
    M.autoApply && w("select-date");
  }, T = () => {
    Y.value && he(Y.value);
  };
  Ne(() => {
    u.value || (Fe(), T()), h(!0), M.focusStartDate && M.startDate && Fe();
  });
  const ie = j(() => y.value?.steps?.length && !y.value?.partial ? e.flowStep === y.value.steps.length : !0), le = () => {
    M.autoApply && ie.value && w("auto-apply", y.value?.partial ? e.flowStep !== y.value?.steps?.length : !1);
  }, h = (_ = !1) => {
    if (u.value)
      return Array.isArray(u.value) ? (o.value = u.value, S(_)) : C(u.value, _);
    if (v.value.count && _ && !M.startDate)
      return g(l(), _);
  }, m = () => Array.isArray(u.value) && V.value.enabled ? Te(u.value[0]) === Te(u.value[1] ?? u.value[0]) : !1, x = (_) => {
    const X = Dt(_, 1);
    return { month: Te(X), year: ye(X) };
  }, g = (_ = l(), X = !1) => {
    if ((!v.value.count || !v.value.static || X) && ue(0, Te(_), ye(_)), v.value.count && (!u.value || m() || !v.value.solo) && (!v.value.solo || X))
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
      _?.[1] ? Me(_[1]) : k[Be][1]
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
    const X = u.value;
    f(X, _), v.value.count && v.value.solo && Ce();
  }, te = (_, X) => {
    const pe = _e(l(), { month: A.value(X), year: I.value(X) }), Me = _ < 0 ? Dt(pe, 1) : Lt(pe, 1);
    c(Te(Me), ye(Me), _ < 0, M.preventMinMaxNavigation) && (ue(X, Te(Me), ye(Me)), d("update-month-year", { instance: X, month: Te(Me), year: ye(Me) }), v.value.count && !v.value.solo && ne(X), p());
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
    if (Array.isArray(u.value) && u.value.length === 2) {
      const _ = l(l(u.value[1] ?? Dt(u.value[0], 1))), [X, pe] = [Te(u.value[0]), ye(u.value[0])], [Me, Be] = [Te(u.value[1]), ye(u.value[1])];
      (X !== Me || X === Me && pe !== Be) && v.value.solo && ue(1, Te(_), ye(_));
    } else u.value && !Array.isArray(u.value) && (ue(0, Te(u.value), ye(u.value)), g(l()));
  }, Fe = () => {
    M.startDate && (ue(0, Te(l(M.startDate)), ye(l(M.startDate))), v.value.count && ne(0));
  }, kt = (_, X) => {
    if ($.value.monthChangeOnScroll) {
      const pe = Date.now() - s.value.getTime(), Me = Math.abs(_.deltaY);
      let Be = 500;
      Me > 1 && (Be = 100), Me > 100 && (Be = 0), pe > Be && (s.value = /* @__PURE__ */ new Date(), te(
        $.value.monthChangeOnScroll === "inverse" ? _.deltaY : -_.deltaY,
        X
      ));
    }
  }, Rt = (_, X, pe = !1) => {
    $.value.monthChangeOnArrows && M.vertical === pe && Ut(_, X);
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
      { hours: k.hours, minutes: k.minutes, seconds: vt() },
      l(_.value)
    );
    d("date-click", X), q.value.enabled ? re(X, q.value.limit) : u.value = X, r(), Ge().then(() => {
      le();
    });
  }, qt = (_) => V.value.noDisabledRange ? ge(o.value[0], _).some((pe) => D(pe)) : !1, va = () => {
    o.value = u.value ? u.value.slice().filter((_) => !!_) : [], o.value.length === 2 && !(V.value.fixedStart || V.value.fixedEnd) && (o.value = []);
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
    if (qt(_.value) || !Q(_.value, u.value, V.value.fixedStart ? 0 : 1))
      return d("invalid-date", _.value);
    o.value = Ae(l(_.value));
  }, Yt = (_, X) => {
    if (va(), V.value.autoRange) return me(_, X);
    if (V.value.fixedStart || V.value.fixedEnd) return nt(_);
    o.value[0] ? Q(l(_.value), u.value) && !qt(_.value) ? ee(l(_.value), l(o.value[0])) ? (o.value.unshift(l(_.value)), d("range-end", o.value[0])) : (o.value[1] = l(_.value), d("range-end", o.value[1])) : d("invalid-date", _.value) : (o.value[0] = l(_.value), d("range-start", o.value[0]));
  }, vt = (_ = !0) => R.value.enableSeconds ? Array.isArray(k.seconds) ? _ ? k.seconds[0] : k.seconds[1] : k.seconds : 0, Ot = (_) => {
    o.value[_] = z(
      {
        hours: k.hours[_],
        minutes: k.minutes[_],
        seconds: vt(_ !== 1)
      },
      o.value[_]
    );
  }, Ga = () => {
    o.value[0] && o.value[1] && +o.value?.[0] > +o.value?.[1] && (o.value.reverse(), d("range-start", o.value[0]), d("range-end", o.value[1]));
  }, Ja = () => {
    o.value.length && (o.value[0] && !o.value[1] ? Ot(0) : (Ot(0), Ot(1), r()), Ga(), u.value = o.value.slice(), De(
      o.value,
      w,
      o.value.length < 2 || e.flowStep !== y.value?.steps?.length
    ));
  }, Xa = (_, X = !1) => {
    if (D(_.value) || !_.current && M.hideOffsetDates)
      return d("invalid-date", _.value);
    if (n.value = structuredClone(_), !V.value.enabled) return da(_);
    Array.isArray(k.hours) && Array.isArray(k.minutes) && !q.value.enabled && (Yt(_, X), Ja());
  }, Za = (_, X) => {
    ue(_, X.month, X.year, !0), v.value.count && !v.value.solo && ne(_), d("update-month-year", { instance: _, month: X.month, year: X.year }), p(v.value.solo ? _ : void 0);
    const pe = y.value?.steps?.length ? y.value.steps[e.flowStep] : void 0;
    !X.fromNav && (pe === qe.month || pe === qe.year) && r();
  }, en = (_) => {
    H({
      value: _
    }), b(), M.multiCalendars && Ge().then(() => h(!0));
  }, tn = () => {
    let _ = l();
    return M.actionRow?.nowBtnRound && (_ = xn(_, {
      roundingMethod: M.actionRow.nowBtnRound.rounding ?? "ceil",
      nearestTo: M.actionRow.nowBtnRound.roundTo ?? 15
    })), _;
  }, an = () => {
    const _ = tn();
    !V.value.enabled && !q.value.enabled ? u.value = _ : u.value && Array.isArray(u.value) && u.value[0] ? q.value.enabled ? u.value = [...u.value, _] : u.value = ee(_, u.value[0]) ? [_, u.value[0]] : [u.value[0], _] : u.value = [_], b();
  }, nn = () => {
    if (Array.isArray(u.value))
      if (q.value.enabled) {
        const _ = rn();
        u.value[u.value.length - 1] = Z(_);
      } else
        u.value = u.value.map((_, X) => _ && Z(_, X));
    else
      u.value = Z(u.value);
    w("time-update");
  }, rn = () => Array.isArray(u.value) && u.value.length ? u.value[u.value.length - 1] : null, ln = (_) => {
    let X = "";
    if (V.value.enabled && Array.isArray(u.value))
      for (const pe of Object.keys(_)) {
        const Me = _[pe];
        Array.isArray(Me) && (k[pe][0] !== Me[0] && (X = "range-start"), k[pe][1] !== Me[1] && (X = "range-start"));
      }
    return X;
  };
  return {
    calendars: B,
    modelValue: u,
    month: A,
    year: I,
    time: k,
    disabledTimesConfig: J,
    today: i,
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
      ae(_, nn), X && d(X, u.value[X === "range-start" ? 0 : 1]);
    },
    assignMonthAndYear: g,
    setStartTime: T
  };
}, Cl = () => {
  const {
    isModelAuto: e,
    matchDate: w,
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
    defaults: { multiCalendars: I, multiDates: k, ui: u, highlight: M, safeDates: i, range: P },
    modelValue: v
  } = $e(), { isDisabled: Y } = at(), V = de(null), $ = (h) => {
    !h.current && A.hideOffsetDates || (V.value = h.value);
  }, F = () => {
    V.value = null;
  }, q = (h) => Array.isArray(v.value) && P.value.enabled && v.value[0] && V.value ? h ? p(V.value, v.value[0]) : r(V.value, v.value[0]) : !0, R = (h, m) => {
    const x = () => v.value ? m ? v.value[0] || null : v.value[1] : null, g = v.value && Array.isArray(v.value) ? x() : null;
    return s(d(h.value), g);
  }, y = (h) => {
    const m = Array.isArray(v.value) ? v.value[0] : null;
    return h ? !r(V.value, m) : !0;
  }, c = (h, m = !0) => (P.value.enabled || A.weekPicker) && Array.isArray(v.value) && v.value.length === 2 ? A.hideOffsetDates && !h.current ? !1 : s(d(h.value), v.value[m ? 0 : 1]) : P.value.enabled ? R(h, m) && y(m) || s(h.value, Array.isArray(v.value) ? v.value[0] : null) && q(m) : !1, D = (h, m) => {
    if (Array.isArray(v.value) && v.value[0] && v.value.length === 1) {
      const x = s(h.value, V.value);
      return m ? p(v.value[0], h.value) && x : r(v.value[0], h.value) && x;
    }
    return !1;
  }, N = (h) => !v.value || A.hideOffsetDates && !h.current ? !1 : P.value.enabled ? A.modelAuto && Array.isArray(v.value) ? s(h.value, v.value[0] ?? B) : !1 : k.value.enabled && Array.isArray(v.value) ? v.value.some((m) => s(m, h.value)) : s(h.value, v.value ? v.value : B), Q = (h) => {
    if (P.value.autoRange || A.weekPicker) {
      if (V.value) {
        if (A.hideOffsetDates && !h.current) return !1;
        const m = mt(V.value, +P.value.autoRange), x = n(d(V.value), A.weekStart);
        return A.weekPicker ? s(x[1], d(h.value)) : s(m, d(h.value));
      }
      return !1;
    }
    return !1;
  }, ae = (h) => {
    if (P.value.autoRange || A.weekPicker) {
      if (V.value) {
        const m = mt(V.value, +P.value.autoRange);
        if (A.hideOffsetDates && !h.current) return !1;
        const x = n(d(V.value), A.weekStart);
        return A.weekPicker ? p(h.value, x[0]) && r(h.value, x[1]) : p(h.value, V.value) && r(h.value, m);
      }
      return !1;
    }
    return !1;
  }, Z = (h) => {
    if (P.value.autoRange || A.weekPicker) {
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
    const m = P.value.enabled ? !c(h) && !c(h, !1) : !0;
    return !Y(h.value) && !N(h) && !(!h.current && A.hideOffsetDates) && m;
  }, W = (h) => P.value.enabled ? A.modelAuto ? he() && N(h) : !1 : N(h), oe = (h) => M.value ? w(h.value, i.value.highlight) : !1, z = (h) => {
    const m = Y(h.value);
    return m && (typeof M.value == "function" ? !M.value(h.value, m) : !M.value.options.highlightDisabled);
  }, ee = (h) => typeof M.value == "function" ? M.value(h.value) : M.value.weekdays?.includes(h.value.getDay()), fe = (h) => (P.value.enabled || A.weekPicker) && (!(I.value.count > 0) || h.current) && L() && !(!h.current && A.hideOffsetDates) && !N(h) ? ve(h) : !1, ge = (h) => {
    if (Array.isArray(v.value) && v.value.length === 1) {
      const { before: m, after: x } = l(+P.value.maxRange, v.value[0]);
      return Tt(h.value, m) || _t(h.value, x);
    }
    return !1;
  }, De = (h) => {
    if (Array.isArray(v.value) && v.value.length === 1) {
      const { before: m, after: x } = l(+P.value.minRange, v.value[0]);
      return o([m, x], v.value[0], h.value);
    }
    return !1;
  }, Ae = (h) => P.value.enabled && (P.value.maxRange || P.value.minRange) ? P.value.maxRange && P.value.minRange ? ge(h) || De(h) : P.value.maxRange ? ge(h) : De(h) : !1, re = (h) => {
    const { isRangeStart: m, isRangeEnd: x } = ue(h), g = P.value.enabled ? m || x : !1;
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
        ...T(h),
        dp__range_start: s(m[0], h.value),
        dp__range_end: s(m[1], h.value),
        dp__range_between_week: p(h.value, m[0]) && r(h.value, m[1])
      };
    }
    return {
      ...T(h)
    };
  }, ce = (h) => {
    if (v.value && Array.isArray(v.value)) {
      const m = n(v.value[0], A.weekStart), x = v.value[1] ? n(v.value[1], A.weekStart) : [];
      return {
        ...T(h),
        dp__range_start: s(m[0], h.value) || s(x[0], h.value),
        dp__range_end: s(m[1], h.value) || s(x[1], h.value),
        dp__range_between_week: p(h.value, m[0]) && r(h.value, m[1]) || p(h.value, x[0]) && r(h.value, x[1]),
        dp__range_between: p(h.value, m[1]) && r(h.value, x[0])
      };
    }
    return {
      ...T(h)
    };
  }, ue = (h) => {
    const m = I.value.count > 0 ? h.current && c(h) && L() : c(h) && L(), x = I.value.count > 0 ? h.current && c(h, !1) && L() : c(h, !1) && L();
    return { isRangeStart: m, isRangeEnd: x };
  }, b = (h) => {
    const { isRangeStart: m, isRangeEnd: x } = ue(h);
    return {
      dp__range_start: m,
      dp__range_end: x,
      dp__range_between: fe(h),
      dp__date_hover: s(h.value, V.value) && !m && !x && !A.weekPicker,
      dp__date_hover_start: D(h, !0),
      dp__date_hover_end: D(h, !1)
    };
  }, T = (h) => ({
    ...b(h),
    dp__cell_auto_range: ae(h),
    dp__cell_auto_range_start: Z(h),
    dp__cell_auto_range_end: Q(h)
  }), ie = (h) => P.value.enabled ? P.value.autoRange ? T(h) : A.modelAuto ? { ...H(h), ...b(h) } : A.weekPicker ? ce(h) : b(h) : A.weekPicker ? E(h) : H(h);
  return {
    setHoverDate: $,
    clearHoverDate: F,
    getDayClassData: (h) => A.hideOffsetDates && !h.current ? {} : {
      ...re(h),
      ...ie(h),
      [u.value.dayClass ? u.value.dayClass(h.value, v.value) : ""]: !0,
      ...u.value.calendarCell
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, {
      month: s,
      year: n,
      modelValue: l,
      time: d,
      disabledTimesConfig: B,
      today: A,
      validateTime: I,
      getCalendarDays: k,
      getMarker: u,
      handleArrow: M,
      handleScroll: i,
      handleSwipe: P,
      selectDate: v,
      updateMonthYear: Y,
      presetDate: V,
      selectCurrentDate: $,
      updateTime: F,
      assignMonthAndYear: q,
      setStartTime: R
    } = Rl(o, r, E, ce), y = ht(), { setHoverDate: c, getDayClassData: D, clearHoverDate: N } = Cl(), {
      getDate: Q,
      rootEmit: ae,
      rootProps: Z,
      defaults: { multiCalendars: ve, timeConfig: he }
    } = $e(), { getYears: L, getMonths: J } = na(), { getCellId: W } = je(), { mapSlots: oe } = yt(), z = Re("calendar-header"), ee = Re("calendar"), fe = Re("time-picker"), ge = oe(y, "calendar"), De = oe(y, "monthYear"), Ae = oe(y, "timePicker"), re = (g) => {
      r("mount", g);
    };
    st(
      ve,
      (g, C) => {
        g.count - C.count > 0 && q();
      },
      { deep: !0 }
    );
    const H = j(() => (g) => k(s.value(g), n.value(g)).map((C) => ({
      ...C,
      days: C.days.map((G) => (G.marker = u(G), G.classData = D(G), G))
    })));
    function E(g) {
      g || g === 0 ? ee.value?.[g]?.triggerTransition(s.value(g), n.value(g)) : ee.value?.forEach((C, G) => C?.triggerTransition(s.value(G), n.value(G)));
    }
    function ce() {
      r("update-flow-step");
    }
    const ue = (g, C, G = 0) => {
      z.value?.[G]?.toggleMonthPicker(g, C);
    }, b = (g, C, G = 0) => {
      z.value?.[G]?.toggleYearPicker(g, C);
    }, T = (g, C, G) => {
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
    return w({
      clearHoverDate: N,
      presetDate: V,
      selectCurrentDate: $,
      handleArrow: M,
      updateMonthYear: Y,
      setStartTime: R,
      toggleMonthPicker: ue,
      toggleYearPicker: b,
      toggleTimePicker: T,
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
              onSetHoverDate: C[2] || (C[2] = (S) => t(c)(S)),
              onHandleScroll: (S) => t(i)(S, f),
              onHandleSwipe: (S) => t(P)(S, f),
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
}), xl = (e, w) => {
  const {
    getDate: p,
    modelValue: r,
    year: o,
    calendars: s,
    defaults: { highlight: n, range: l, multiDates: d }
  } = $e(), { isDateBetween: B, isDateEqual: A } = je(), { checkRangeAutoApply: I, handleMultiDatesSelect: k, setMonthOrYearRange: u } = oa();
  jt();
  const { isDisabled: M } = at(), { formatQuarterText: i } = bt(), {
    selectYear: P,
    groupedYears: v,
    showYearPicker: Y,
    isDisabled: V,
    toggleYearPicker: $,
    handleYearSelect: F,
    handleYear: q,
    setStartDate: R
  } = Ua(w), y = de();
  Ne(() => {
    R();
  });
  const c = j(() => (W) => r.value ? Array.isArray(r.value) ? r.value.some((oe) => Aa(W, oe)) : Aa(r.value, W) : !1), D = (W) => {
    if (l.value.enabled) {
      if (Array.isArray(r.value)) {
        const oe = A(W, r.value[0]) || A(W, r.value[1]);
        return B(r.value, y.value, W) && !oe;
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
        text: i(ee, fe),
        value: ee,
        active: c.value(ee),
        highlighted: Ae,
        disabled: ge,
        isBetween: De
      };
    });
  }), Z = (W) => {
    k(W, d.value.limit), w("auto-apply", !0);
  }, ve = (W) => {
    r.value = u(W), I(r.value, w, r.value.length < 2);
  }, he = (W) => {
    r.value = W, w("auto-apply");
  };
  return {
    groupedYears: v,
    year: o,
    isDisabled: V,
    quarters: ae,
    showYearPicker: Y,
    modelValue: r,
    selectYear: P,
    toggleYearPicker: $,
    handleYearSelect: F,
    handleYear: q,
    setHoverDate: (W) => {
      y.value = W;
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, {
      defaults: { config: s }
    } = $e(), n = ht(), { mapSlots: l } = yt(), d = l(n, "yearMode"), {
      groupedYears: B,
      year: A,
      isDisabled: I,
      quarters: k,
      modelValue: u,
      showYearPicker: M,
      setHoverDate: i,
      selectQuarter: P,
      toggleYearPicker: v,
      handleYearSelect: Y,
      handleYear: V
    } = xl(o, r);
    return w({ getSidebarProps: () => ({
      modelValue: u,
      year: A,
      selectQuarter: P,
      handleYearSelect: Y,
      handleYear: V
    }) }), (F, q) => (O(), Se(la, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: we(({ instances: R, wrapClass: y }) => [
        (O(!0), K(ke, null, Ye(R, (c) => (O(), K("div", {
          key: c,
          class: be(y)
        }, [
          Pe("div", {
            class: "dp-quarter-picker-wrap",
            style: Xe({ minHeight: `${t(s).modeHeight}px` })
          }, [
            F.$slots["top-extra"] ? se(F.$slots, "top-extra", {
              key: 0,
              value: t(u)
            }) : U("", !0),
            Pe("div", null, [
              tt(za, {
                items: t(B)(c),
                instance: c,
                "show-year-picker": t(M)[c],
                year: t(A)(c),
                "is-disabled": (D) => t(I)(c, D),
                onHandleYear: (D) => t(V)(c, D),
                onYearSelect: (D) => t(Y)(D, c),
                onToggleYearPicker: (D) => t(v)(c, D?.flow, D?.show)
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
              (O(!0), K(ke, null, Ye(t(k)(c), (D, N) => (O(), K("div", { key: N }, [
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
                  onClick: (Q) => t(P)(D.value, c, D.disabled),
                  onMouseover: (Q) => t(i)(D.value)
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = ht(), {
      state: s,
      rootProps: n,
      defaults: { textInput: l, inline: d, config: B, ui: A, ariaLabels: I },
      setState: k
    } = $e(), { isMobile: u } = aa(), { mapSlots: M } = yt(), { handleEventPropagation: i, getElWithin: P, checkStopPropagation: v, checkKeyDown: Y } = Ee(), { arrowRight: V, arrowLeft: $, arrowDown: F, arrowUp: q } = gt(), R = Re("inner-menu"), y = Re("dp-menu"), c = Re("dyn-cmp"), D = de(0), N = de(!1), Q = de(!1), { flowStep: ae, updateFlowStep: Z, childMount: ve, resetFlow: he, handleFlow: L } = Hn(c), J = (a) => {
      Q.value = !0, B.value.allowPreventDefault && a.preventDefault(), v(a, B.value, !0);
    };
    Ne(() => {
      N.value = !0, W(), globalThis.addEventListener("resize", W);
      const a = Qe(y);
      a && !l.value.enabled && !d.value.enabled && (k("menuFocused", !0), z()), a && (a.addEventListener("pointerdown", J), a.addEventListener("mousedown", J)), document.addEventListener("mousedown", C);
    }), $t(() => {
      globalThis.removeEventListener("resize", W), document.removeEventListener("mousedown", C);
      const a = Qe(y);
      a && (a.removeEventListener("pointerdown", J), a.removeEventListener("mousedown", J));
    });
    const W = () => {
      const a = Qe(R);
      a && (D.value = a.getBoundingClientRect().width);
    }, oe = j(() => n.monthPicker ? Zr : n.yearPicker ? tl : n.timePicker ? pl : n.quarterPicker ? Vl : Ol), z = () => {
      const a = Qe(y);
      a && a.focus({ preventScroll: !0 });
    }, ee = j(() => c.value?.getSidebarProps() || {}), fe = M(o, "action"), ge = j(() => n.monthPicker || n.yearPicker ? M(o, "monthYear") : n.timePicker ? M(o, "timePicker") : M(o, "shared")), De = j(() => ({
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
      B.value.escClose && (r("close-picker"), i(a, B.value));
    }, E = (a) => {
      if (n.arrowNavigation) {
        if (a === Ue.up) return q();
        if (a === Ue.down) return F();
        if (a === Ue.left) return $();
        if (a === Ue.right) return V();
      } else a === Ue.left || a === Ue.up ? T("handleArrow", Ue.left, 0, a === Ue.up) : T("handleArrow", Ue.right, 0, a === Ue.down);
    }, ce = (a) => {
      k("shiftKeyInMenu", a.shiftKey), !n.hideMonthYearSelect && a.code === xe.tab && a.target.classList.contains("dp__menu") && s.shiftKeyInMenu && (a.preventDefault(), v(a, B.value, !0), r("close-picker"));
    }, ue = (a) => {
      c.value?.toggleTimePicker(!1, !1), c.value?.toggleMonthPicker(!1, !1, a), c.value?.toggleYearPicker(!1, !1, a);
    }, b = (a, f = 0) => a === "month" ? c.value?.toggleMonthPicker(!1, !0, f) : a === "year" ? c.value?.toggleYearPicker(!1, !0, f) : a === "time" ? c.value?.toggleTimePicker(!0, !1) : ue(f), T = (a, ...f) => {
      c.value?.[a] && c.value?.[a](...f);
    }, ie = () => {
      T("selectCurrentDate");
    }, le = (a) => {
      T("presetDate", fn(a));
    }, h = () => {
      T("clearHoverDate");
    }, m = (a, f) => {
      T("updateMonthYear", a, f);
    }, x = (a, f) => {
      a.preventDefault(), E(f);
    }, g = (a) => {
      if (ce(a), a.key === xe.home || a.key === xe.end)
        return T(
          "selectWeekDate",
          a.key === xe.home,
          a.target.getAttribute("id")
        );
      switch ((a.key === xe.pageUp || a.key === xe.pageDown) && (a.shiftKey ? (T("changeYear", a.key === xe.pageUp), P(y.value, "overlay-year")?.focus()) : (T("changeMonth", a.key === xe.pageUp), P(y.value, a.key === xe.pageUp ? "action-prev" : "action-next")?.focus()), a.target.getAttribute("id") && y.value?.focus({ preventScroll: !0 })), a.key) {
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
      d.value.enabled && !d.value.input && !y.value?.contains(a.target) && Q.value && (Q.value = !1, r("menu-blur"));
    };
    return w({
      updateMonthYear: m,
      switchView: b,
      onValueCleared: () => {
        c.value?.setStartTime?.();
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
        "data-dp-mobile": t(u),
        style: Xe({ "--dp-menu-width": `${D.value}px` })
      }, [
        a.$slots["left-sidebar"] ? (O(), K("div", Ll, [
          se(a.$slots, "left-sidebar", Je(ot(ee.value)))
        ])) : U("", !0),
        t(n).presetDates.length ? (O(), K("div", {
          key: 1,
          class: be({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(u)
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
              "data-dp-mobile": t(u),
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
            "menu-wrap-ref": y.value,
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
  setup(e, { expose: w }) {
    const {
      rootEmit: p,
      setState: r,
      inputValue: o,
      modelValue: s,
      rootProps: n,
      defaults: { inline: l, config: d, textInput: B, range: A, multiDates: I, teleport: k, floatingConfig: u }
    } = $e(), { clearArrowNav: M } = gt(), { validateDate: i, isValidTime: P } = at(), { menuTransition: v, showTransition: Y } = Kt(), { isMobile: V } = aa(), { mapSlots: $ } = yt(), { findNextFocusableElement: F, getNumVal: q } = Ee(), R = ht(), y = de(!1), c = de(!1), D = Ma(n, "modelValue"), N = Ma(n, "timezone"), Q = Re("dp-menu-wrap"), ae = Re("dp-menu"), Z = Re("input-cmp"), ve = Re("picker-wrapper"), he = Re("menu-arrow"), L = de(!1), J = de(!1), W = de(!1), oe = (me) => (u.value.arrow && (u.value.arrow === !0 ? me.push(_a({ element: he })) : me.push(_a({ element: u.value.arrow }))), me), { floatingStyles: z, middlewareData: ee, placement: fe, y: ge } = gn(
      Z,
      Q,
      {
        strategy: u.value.strategy,
        placement: u.value.placement,
        middleware: oe([bn(u.value.offset), kn(), wn()]),
        whileElementsMounted: yn
      }
    );
    Ne(() => {
      re(n.modelValue), Ge().then(() => {
        l.value.enabled || globalThis.addEventListener("resize", h);
      }), l.value.enabled && (y.value = !0), globalThis.addEventListener("keyup", m), globalThis.addEventListener("keydown", x);
    }), $t(() => {
      l.value.enabled || globalThis.removeEventListener("resize", h), globalThis.removeEventListener("keyup", m), globalThis.removeEventListener("keydown", x);
    });
    const De = $(R, "all", n.presetDates), Ae = $(R, "input");
    st(
      [D, N],
      () => {
        re(D.value);
      },
      { deep: !0 }
    ), st([fe, ge], () => {
      c.value = !1, Ge().then(() => {
        c.value = !0;
      });
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
    ), b = j(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), T = j(() => l.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), ie = () => Z.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, le = () => {
      y.value && d.value.closeOnScroll && Ce();
    }, h = () => {
      const me = ae.value?.$el.getBoundingClientRect().width ?? 0;
      W.value = document.body.offsetWidth <= me;
    }, m = (me) => {
      me.key === "Tab" && !l.value.enabled && !n.teleport && d.value.tabOutClosesMenu && (ve.value.contains(document.activeElement) || Ce()), J.value = me.shiftKey;
    }, x = (me) => {
      J.value = me.shiftKey;
    }, g = () => {
      !n.disabled && !n.readonly && (y.value = !0, y.value && p("open"), y.value || ne(), re(n.modelValue));
    }, C = () => {
      o.value = "", ne(), ae.value?.onValueCleared(), Z.value?.setParsedDate(null), p("update:model-value", null), p("cleared"), d.value.closeOnClearValue && Ce();
    }, G = () => {
      const me = s.value;
      return !me || !Array.isArray(me) && i(me) ? !0 : Array.isArray(me) ? I.value.enabled || me.length === 2 && i(me[0]) && i(me[1]) ? !0 : A.value.partialRange && !n.timePicker ? i(me[0]) : !1 : !1;
    }, a = () => {
      ce() && G() ? (H(), Ce()) : p("invalid-select");
    }, f = (me) => {
      S(), H(), d.value.closeOnAutoApply && !me && Ce();
    }, S = () => {
      Z.value && B.value.enabled && Z.value.setParsedDate(s.value);
    }, te = (me = !1) => {
      n.autoApply && P(s.value) && G() && (A.value.enabled && Array.isArray(s.value) ? (A.value.partialRange || s.value.length === 2) && f(me) : f(me));
    }, ne = () => {
      B.value.enabled || (s.value = null);
    }, Ce = (me = !1) => {
      me && s.value && d.value.setDateOnMenuClose && a(), l.value.enabled || (y.value && (y.value = !1, r("menuFocused", !1), r("shiftKeyInMenu", !1), M(), p("closed"), o.value && re(D.value)), ne(), p("blur"));
    }, Fe = (me, ze, nt = !1) => {
      if (!me) {
        s.value = null;
        return;
      }
      const Yt = Array.isArray(me) ? !me.some((Ot) => !i(Ot)) : i(me), vt = P(me);
      Yt && vt ? (r("isTextInputDate", !0), s.value = me, ze ? (L.value = nt, a(), p("text-submit")) : n.autoApply && te(!0), Ge().then(() => {
        r("isTextInputDate", !1);
      })) : p("invalid-date", me);
    }, kt = () => {
      n.autoApply && P(s.value) && H(), S();
    }, Rt = () => y.value ? Ce() : g(), Ut = (me) => {
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
    }, da = (me, ze) => d.value.onClickOutside ? d.value.onClickOutside(me, ze) : Ce(!0), qt = (me = 0) => {
      ae.value?.handleFlow(me);
    }, va = () => Q;
    return hn(Q, (me) => da(G, me), {
      ignore: [Z]
    }), w({
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
        "is-menu-open": y.value,
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
        to: t(k),
        disabled: !t(k)
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
            css: t(Y) && !t(l).enabled && !t(n).centered && c.value
          }, {
            default: we(() => [
              y.value && c.value ? (O(), Se(ql, {
                key: 0,
                ref: "dp-menu",
                class: be({ [b.value]: !0 }),
                "no-overlay-focus": T.value,
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
                !t(l).enabled && !t(n).centered && t(u).arrow === !0 ? {
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
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e;
    Ln(o, r);
    const s = ht(), { mapSlots: n } = yt(), l = n(s, "root", o.presetDates), d = Re("date-picker");
    return w(Or(d)), (B, A) => (O(), Se(Gl, { ref: "date-picker" }, Le({ _: 2 }, [
      Ye(t(l), (I, k) => ({
        name: I,
        fn: we((u) => [
          se(B.$slots, I, Je(ot(u)))
        ])
      }))
    ]), 1536));
  }
});
export {
  so as TZDate,
  ro as VueDatePicker
};
