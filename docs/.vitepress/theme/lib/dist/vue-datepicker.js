import { h as Ee, reactive as Ft, ref as de, computed as j, watch as st, provide as sn, readonly as un, inject as cn, nextTick as Ge, onMounted as Ne, onUnmounted as St, defineComponent as We, useTemplateRef as Re, createElementBlock as K, openBlock as O, renderSlot as oe, createCommentVNode as U, unref as t, createElementVNode as Pe, normalizeClass as be, createBlock as Se, withModifiers as Nt, createVNode as tt, normalizeProps as Je, mergeProps as et, Fragment as ke, normalizeStyle as Xe, createTextVNode as dt, toDisplayString as Ke, onBeforeUpdate as dn, withDirectives as Xt, renderList as Ye, vShow as Zt, withCtx as we, withKeys as vn, Transition as Rt, createSlots as Le, useSlots as ht, resolveDynamicComponent as Da, guardReactiveProps as ot, mergeDefaults as xa, toValue as fn, toRef as _a, Teleport as mn } from "vue";
import { unrefElement as Qe, useSwipe as pn, onClickOutside as hn } from "@vueuse/core";
import { useFloating as gn, autoUpdate as yn, offset as bn, flip as kn, shift as wn, arrow as Aa } from "@floating-ui/vue";
import { set as _e, setYear as lt, parse as wa, getYear as ye, getMonth as Te, getSeconds as pt, getMinutes as vt, getHours as ut, isValid as ea, addMonths as Dt, subMonths as Wt, differenceInCalendarDays as Dn, eachDayOfInterval as Ba, getDay as Mn, isBefore as $t, isAfter as _t, isEqual as Pt, format as Ze, subDays as _n, addDays as mt, startOfWeek as Ma, endOfWeek as Ia, startOfMonth as An, setMonth as Pn, isDate as Tn, endOfYear as Va, startOfYear as Vt, addYears as Ea, subYears as Fa, differenceInYears as $n, add as Na, sub as Sn, setMilliseconds as Rn, setSeconds as Cn, getWeek as Yn, getISOWeek as On, roundToNearestMinutes as xn, isSameQuarter as Pa, eachQuarterOfInterval as Bn, startOfQuarter as In, endOfQuarter as Ta, getQuarter as $a } from "date-fns";
import { TZDate as Vn } from "@date-fns/tz";
import { TZDate as so } from "@date-fns/tz";
function Lt() {
  return Ee(
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
      Ee("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Ee("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ee("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ee("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function En() {
  return Ee(
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
      Ee("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Ee("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function Wa() {
  return Ee(
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
      Ee("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function La() {
  return Ee(
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
      Ee("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function Ha() {
  return Ee(
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
      Ee("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Ee("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Ka() {
  return Ee(
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
      Ee("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function ja() {
  return Ee(
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
      Ee("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const Oe = Ft({
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
}), ha = de(null), Gt = de(!1), ga = de(!1), ya = de(!1), ba = de(!1), He = de(0), Ie = de(0), gt = () => {
  const e = j(() => Gt.value ? [...Oe.selectionGrid, Oe.actionRow].filter((f) => f.length) : ga.value ? [
    ...Oe.timePicker[0],
    ...Oe.timePicker[1],
    ba.value ? [] : [ha.value],
    Oe.actionRow
  ].filter((f) => f.length) : ya.value ? [...Oe.monthPicker, Oe.actionRow] : [Oe.monthYear, ...Oe.calendar, Oe.time, Oe.actionRow].filter((f) => f.length)), w = (f) => {
    He.value = f ? He.value + 1 : He.value - 1;
    let Y = null;
    e.value[Ie.value] && (Y = e.value[Ie.value][He.value]), !Y && e.value[Ie.value + (f ? 1 : -1)] ? (Ie.value = Ie.value + (f ? 1 : -1), He.value = f ? 0 : e.value[Ie.value].length - 1) : Y || (He.value = f ? He.value - 1 : He.value + 1);
  }, p = (f) => {
    if (Ie.value === 0 && !f || Ie.value === e.value.length && f) return;
    Ie.value = f ? Ie.value + 1 : Ie.value - 1, e.value[Ie.value] ? e.value[Ie.value] && !e.value[Ie.value][He.value] && He.value !== 0 && (He.value = e.value[Ie.value].length - 1) : Ie.value = f ? Ie.value - 1 : Ie.value + 1;
  }, r = (f) => {
    let Y = null;
    e.value[Ie.value] && (Y = e.value[Ie.value][He.value]), Y ? Y.focus({ preventScroll: !Gt.value }) : He.value = f ? He.value - 1 : He.value + 1;
  }, o = () => {
    w(!0), r(!0);
  }, s = () => {
    w(!1), r(!1);
  }, n = () => {
    p(!1), r(!0);
  }, l = () => {
    p(!0), r(!0);
  }, d = (f, Y) => {
    Oe[Y] = f;
  }, B = (f, Y) => {
    Oe[Y] = f;
  }, A = () => {
    He.value = 0, Ie.value = 0;
  };
  return {
    buildMatrix: d,
    buildMultiLevelMatrix: B,
    setTimePickerBackRef: (f) => {
      ha.value = f;
    },
    setSelectionGrid: (f) => {
      Gt.value = f, A(), f || (Oe.selectionGrid = []);
    },
    setTimePicker: (f, Y = !1) => {
      ga.value = f, ba.value = Y, A(), f || (Oe.timePicker[0] = [], Oe.timePicker[1] = []);
    },
    setTimePickerElements: (f, Y = 0) => {
      Oe.timePicker[Y] = f;
    },
    arrowRight: o,
    arrowLeft: s,
    arrowUp: n,
    arrowDown: l,
    clearArrowNav: () => {
      Oe.monthYear = [], Oe.calendar = [], Oe.time = [], Oe.actionRow = [], Oe.selectionGrid = [], Oe.timePicker[0] = [], Oe.timePicker[1] = [], Gt.value = !1, ga.value = !1, ba.value = !1, ya.value = !1, A(), ha.value = null;
    },
    setMonthPicker: (f) => {
      ya.value = f, A();
    },
    refSets: Oe
    // exposed for testing
  };
};
var rt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(rt || {}), Mt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Mt || {}), qe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(qe || {});
const Fn = ["timestamp", "date", "iso"];
var Ue = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Ue || {}), xe = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(xe || {}), Tt = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Tt || {});
const Nn = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: w, isValidDate: p } = at(), { convertType: r, errorMapper: o } = Fe(), {
    getDate: s,
    rootEmit: n,
    state: l,
    rootProps: d,
    inputValue: B,
    defaults: { textInput: A, range: I, multiDates: k, timeConfig: u, formats: M },
    modelValue: i,
    updateTime: P
  } = $e(), { setTime: f, getWeekFromDate: Y } = je(), { formatSelectedDate: V, formatForTextInput: $ } = bt();
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
      ae();
    }
  );
  const F = (b) => b ? d.modelType ? ge(b) : {
    hours: ut(b),
    minutes: vt(b),
    seconds: u.value.enableSeconds ? pt(b) : 0
  } : null, q = (b) => d.modelType ? ge(b) : { month: Te(b), year: ye(b) }, C = (b) => Array.isArray(b) ? k.value.enabled ? b.map((T) => y(T, lt(s(), T))) : w(
    () => [
      lt(s(), b[0]),
      b[1] ? lt(s(), b[1]) : e(I.value.partialRange)
    ],
    I.value.enabled
  ) : lt(s(), +b), y = (b, T) => (typeof b == "string" || typeof b == "number") && d.modelType ? fe(b) : T, c = (b) => Array.isArray(b) ? [
    y(b[0], f(b[0])),
    y(b[1], f(b[1]))
  ] : y(b, f(b)), D = (b) => {
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
  }, L = (b) => {
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
  }, te = (b) => d.modelAuto ? Array.isArray(b) ? [fe(b[0]), fe(b[1])] : d.autoApply ? [fe(b)] : [fe(b), null] : Array.isArray(b) ? w(
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
  }, he = () => Array.isArray(i.value) ? i.value[1] ? ve() : ge(r(i.value[0])) : [], N = () => (i.value || []).map((b) => ge(b)), J = (b = !1) => (b || Z(), d.modelAuto ? he() : k.value.enabled ? N() : Array.isArray(i.value) ? w(() => ve(), I.value.enabled) : ge(r(i.value))), W = (b) => !b || Array.isArray(b) && !b.length ? null : d.timePicker ? c(r(b)) : d.monthPicker ? D(r(b)) : d.yearPicker ? C(r(b)) : k.value.enabled ? L(r(b)) : d.weekPicker ? Q(r(b)) : te(r(b)), re = (b) => {
    if (l.isTextInputDate) return;
    const T = W(b);
    p(r(T)) ? (i.value = r(T), ae()) : (i.value = null, B.value = "");
  }, z = () => i.value ? k.value.enabled ? i.value.map((b) => V(b)).join("; ") : A.value.enabled ? $() : V(i.value) : "", ae = () => {
    B.value = z();
  }, fe = (b) => d.modelType ? Fn.includes(d.modelType) ? s(b) : d.modelType === "format" && typeof M.value.input == "string" ? wa(b, M.value.input, s(), { locale: d.locale }) : wa(b, d.modelType, s(), { locale: d.locale }) : s(b), ge = (b) => b ? d.modelType ? d.modelType === "timestamp" ? +b : d.modelType === "iso" ? b.toISOString() : d.modelType === "format" && typeof M.value.input == "string" ? V(b) : V(b, d.modelType) : b : "", De = (b) => {
    n("update:model-value", b);
  }, Ae = (b) => Array.isArray(i.value) ? k.value.enabled ? i.value.map((T) => b(T)) : [b(i.value[0]), i.value[1] ? b(i.value[1]) : null] : b(r(i.value)), se = () => {
    if (Array.isArray(i.value)) {
      const b = Y(i.value[0], d.weekStart), T = i.value[1] ? Y(i.value[1], d.weekStart) : [];
      return [b.map((ie) => s(ie)), T.map((ie) => s(ie))];
    }
    return Y(i.value, d.weekStart).map((b) => s(b));
  }, H = (b) => De(r(Ae(b))), E = () => n("update:model-value", se());
  return {
    checkBeforeEmit: () => i.value ? I.value.enabled ? I.value.partialRange ? i.value.length >= 1 : i.value.length === 2 : !!i.value : !1,
    parseExternalModelValue: re,
    formatInputValue: ae,
    emitModelValue: () => (ae(), d.monthPicker ? H(q) : d.timePicker ? H(F) : d.yearPicker ? H(ye) : d.weekPicker ? E() : De(J()))
  };
}, ct = [
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
], Sa = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Wn = {
  all: () => ct,
  root: () => ct.concat(Sa),
  monthYear: () => ct.filter((e) => e.use.includes("month-year")),
  input: () => Sa,
  timePicker: () => ct.filter((e) => e.use.includes("time")),
  action: () => ct.filter((e) => e.use.includes("action")),
  calendar: () => ct.filter((e) => e.use.includes("calendar")),
  menu: () => ct.filter((e) => e.use.includes("menu")),
  shared: () => ct.filter((e) => e.use.includes("shared")),
  yearMode: () => ct.filter((e) => e.use.includes("year-mode"))
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
}), za = Symbol("ContextKey"), Ln = (e, w) => {
  const { setTimeModelValue: p } = Fe(), r = Yr(e), o = de(null), s = Ft({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1
  }), n = r.getDate(/* @__PURE__ */ new Date()), l = de(""), d = de([{ month: Te(n), year: ye(n) }]), B = Ft({ hours: 0, minutes: 0, seconds: 0 });
  p(B, null, n, r.range.value.enabled);
  const A = j({
    get: () => o.value,
    set: (i) => {
      !e.readonly && !e.disabled && (o.value = i);
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
  sn(za, {
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
  const e = cn(za);
  if (!e)
    throw new Error("Can't use context");
  return e;
}, Ht = () => {
  const {
    defaults: { transitions: e }
  } = $e(), w = j(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), p = j(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: w, showTransition: !!e.value, menuTransition: p };
}, Kt = (e) => {
  const {
    today: w,
    time: p,
    modelValue: r,
    defaults: { range: o }
  } = $e(), { setTimeModelValue: s } = Fe();
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
  } = $e(), { getMapKeyType: l, getMapDate: d, errorMapper: B, convertType: A } = Fe(), { isDateBefore: I, isDateAfter: k, isDateEqual: u, resetDate: M, getDaysInBetween: i, setTimeValue: P, getTimeObj: f, setTime: Y } = je(), V = (m) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(n(m)) : !!d(m, e.value.disabledDates) : !1, $ = (m) => e.value.maxDate ? s.yearPicker ? ye(m) > ye(e.value.maxDate) : k(m, e.value.maxDate) : !1, F = (m) => e.value.minDate ? s.yearPicker ? ye(m) < ye(e.value.minDate) : I(m, e.value.minDate) : !1, q = (m) => {
    if (!m) return !1;
    const x = $(m), g = F(m), R = V(m), a = r.value.months.map((Ve) => +Ve).includes(Te(m)), v = r.value.weekDays?.length ? r.value.weekDays.some((Ve) => +Ve === Mn(m)) : !1, S = L(m), ee = ye(m), ne = ee < +s.yearRange[0] || ee > +s.yearRange[1];
    return !(x || g || R || a || ne || v || S);
  }, C = (m, x) => I(...E(e.value.minDate, m, x)) || u(...E(e.value.minDate, m, x)), y = (m, x) => k(...E(e.value.maxDate, m, x)) || u(...E(e.value.maxDate, m, x)), c = (m, x, g) => {
    let R = !1;
    return e.value.maxDate && g && y(m, x) && (R = !0), e.value.minDate && !g && C(m, x) && (R = !0), R;
  }, D = (m, x, g, R) => {
    let G = !1;
    return R && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? G = c(m, x, g) : (e.value.minDate && C(m, x) || e.value.maxDate && y(m, x)) && (G = !0) : G = !0, G;
  }, L = (m) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !d(
    m,
    e.value.allowedDates,
    l(s.monthPicker, s.yearPicker)
  ) : !1, Q = (m) => !q(m), te = (m) => w.value.noDisabledRange ? !Ba({ start: m[0], end: m[1] }).some((g) => Q(g)) : !0, Z = (m) => {
    if (m) {
      const x = ye(m);
      return x >= +s.yearRange[0] && x <= s.yearRange[1];
    }
    return !0;
  }, ve = (m, x) => !!(Array.isArray(m) && m[x] && (w.value.maxRange || w.value.minRange) && Z(m[x])), he = (m, x, g = 0) => {
    if (ve(x, g) && Z(m)) {
      const R = Dn(m, x[g]), G = i(x[g], m), a = G.length === 1 ? 0 : G.filter((S) => Q(S)).length, v = Math.abs(R) - (w.value.minMaxRawRange ? 0 : a);
      if (w.value.minRange && w.value.maxRange)
        return v >= +w.value.minRange && v <= +w.value.maxRange;
      if (w.value.minRange) return v >= +w.value.minRange;
      if (w.value.maxRange) return v <= +w.value.maxRange;
    }
    return !0;
  }, N = () => !o.value.enableTimePicker || s.monthPicker || s.yearPicker || o.value.ignoreTimeValidation, J = (m) => Array.isArray(m) ? [m[0] ? P(m[0]) : null, m[1] ? P(m[1]) : null] : P(m), W = (m, x, g) => x ? m.find(
    (R) => +R.hours === ut(x) && R.minutes === "*" ? !0 : +R.minutes === vt(x) && +R.hours === ut(x)
  ) && g : !1, re = (m, x, g) => {
    const [R, G] = m, [a, v] = x;
    return !W(R, a, g) && !W(G, v, g) && g;
  }, z = (m, x) => {
    const g = Array.isArray(x) ? x : [x];
    return Array.isArray(s.disabledTimes) ? Array.isArray(s.disabledTimes[0]) ? re(s.disabledTimes, g, m) : !g.some((R) => W(s.disabledTimes, R, m)) : m;
  }, ae = (m, x) => {
    const g = Array.isArray(x) ? [f(x[0]), x[1] ? f(x[1]) : void 0] : f(x), R = !s.disabledTimes(g);
    return m && R;
  }, fe = (m, x) => s.disabledTimes ? Array.isArray(s.disabledTimes) ? z(x, m) : ae(x, m) : x, ge = (m) => {
    let x = !0;
    if (!m || N()) return !0;
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
      const R = n(M(e.value.minDate)), G = n(M(e.value.maxDate));
      return k(g, R) && I(g, G) || u(g, R) || u(g, G);
    }
    if (e.value.minDate) {
      const R = n(M(e.value.minDate));
      x = k(g, R) || u(g, R);
    }
    if (e.value.maxDate) {
      const R = n(M(e.value.maxDate));
      x = I(g, R) || u(g, R);
    }
    return x;
  }, Ae = j(() => (m) => !o.value.enableTimePicker || o.value.ignoreTimeValidation ? !0 : ge(m)), se = j(() => (m) => s.monthPicker ? Array.isArray(m) && (w.value.enabled || p.value.enabled) ? !m.filter((g) => !De(g)).length : De(m) : !0), H = (m, x, g) => {
    if (!x || g && !e.value.maxDate || !g && !e.value.minDate) return !1;
    const R = g ? Dt(m, 1) : Wt(m, 1), G = [Te(R), ye(R)];
    return g ? !y(...G) : !C(...G);
  }, E = (m, x, g) => [_e(n(m), { date: 1 }), _e(n(), { month: x, year: g, date: 1 })], ce = (m, x, g, R) => {
    if (!m) return !0;
    if (R) {
      const G = g === "max" ? $t(m, x) : _t(m, x), a = { seconds: 0, milliseconds: 0 };
      return G || Pt(_e(m, a), _e(x, a));
    }
    return g === "max" ? m.getTime() <= x.getTime() : m.getTime() >= x.getTime();
  }, ue = (m, x, g, R, G) => {
    if (Array.isArray(R)) {
      const v = b(m, R[0], x), S = b(m, R[1], x);
      return ce(R[0], v, g, !!x) && ce(R[1], S, g, !!x) && G;
    }
    const a = b(m, R, x);
    return ce(R, a, g, !!x) && G;
  }, b = (m, x, g) => m ? Y(m, x) : n(g ?? x);
  return {
    isDisabled: Q,
    validateDate: q,
    validateMonthYearInRange: D,
    isDateRangeAllowed: te,
    checkMinMaxRange: he,
    isValidTime: ge,
    validateMonthYear: H,
    validateMinDate: C,
    validateMaxDate: y,
    isValidDate: (m) => Array.isArray(m) ? ea(m[0]) && (m[1] ? ea(m[1]) : !0) : m ? ea(m) : !1,
    checkPartialRangeValue: (m) => {
      if (m) return null;
      throw new Error(B.prop("partial-range"));
    },
    checkRangeEnabled: (m, x) => {
      if (x) return m();
      throw new Error(B.prop("range"));
    },
    checkMinMaxValue: (m, x, g) => {
      const R = g != null, G = x != null;
      if (!R && !G) return !1;
      const a = +g, v = +x;
      return R && G ? +m > a || +m < v : R ? +m > a : G ? +m < v : !1;
    },
    isTimeValid: Ae,
    isMonthValid: se
  };
}, Hn = (e) => {
  const {
    rootEmit: w,
    rootProps: p,
    defaults: { timeConfig: r, flow: o }
  } = $e(), s = de(0), n = Ft({
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
function ka(e) {
  return (w = {}) => {
    const p = w.width ? String(w.width) : e.defaultWidth;
    return e.formats[p] || e.formats[e.defaultWidth];
  };
}
function Bt(e) {
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
function It(e) {
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
  era: Bt({
    values: Jn,
    defaultWidth: "wide"
  }),
  quarter: Bt({
    values: Xn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Bt({
    values: Zn,
    defaultWidth: "wide"
  }),
  day: Bt({
    values: er,
    defaultWidth: "wide"
  }),
  dayPeriod: Bt({
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
  era: It({
    matchPatterns: sr,
    defaultMatchWidth: "wide",
    parsePatterns: ur,
    defaultParseWidth: "any"
  }),
  quarter: It({
    matchPatterns: ir,
    defaultMatchWidth: "wide",
    parsePatterns: cr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: It({
    matchPatterns: dr,
    defaultMatchWidth: "wide",
    parsePatterns: vr,
    defaultParseWidth: "any"
  }),
  day: It({
    matchPatterns: fr,
    defaultMatchWidth: "wide",
    parsePatterns: mr,
    defaultParseWidth: "any"
  }),
  dayPeriod: It({
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
  date: ka({
    formats: yr,
    defaultWidth: "full"
  }),
  time: ka({
    formats: br,
    defaultWidth: "full"
  }),
  dateTime: ka({
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
}, Ra = {
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
}, Ca = {
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
}, Ya = {
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
}, Oa = {
  name: void 0,
  required: !1,
  autocomplete: "off",
  state: void 0,
  clearable: !0,
  alwaysClearable: !1,
  hideInputIcon: !1,
  id: void 0,
  inputmode: "none"
}, Jt = {
  type: "local",
  hideOnOffsetDates: !1,
  label: "W"
}, Yr = (e) => {
  const { getMapKey: w, getMapKeyType: p, getTimeObjFromCurrent: r } = Fe();
  function o(N, J) {
    let W;
    return e.timezone ? W = new Vn(N ?? /* @__PURE__ */ new Date(), e.timezone) : W = N ? new Date(N) : /* @__PURE__ */ new Date(), J ? _e(W, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : W;
  }
  const s = () => {
    const N = te.value.enableSeconds ? ":ss" : "", J = te.value.enableMinutes ? ":mm" : "";
    return te.value.is24 ? `HH${J}${N}` : `hh${J}${N} aa`;
  }, n = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${q.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : te.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (N) => r(o(), N, te.value.enableSeconds), d = () => c.value.enabled ? te.value.startTime && Array.isArray(te.value.startTime) ? [l(te.value.startTime[0]), l(te.value.startTime[1])] : null : te.value.startTime && !Array.isArray(te.value.startTime) ? l(te.value.startTime) : null, B = (N) => N ? typeof N == "boolean" ? N ? 2 : 0 : Math.max(+N, 2) : 0, A = (N) => {
    const J = p(e.monthPicker, e.yearPicker);
    return new Map(
      N.map((W) => {
        const re = o(W, I.value);
        return [w(re, J), re];
      })
    );
  }, I = j(() => e.monthPicker || e.yearPicker || e.quarterPicker), k = j(() => {
    const N = typeof e.multiCalendars == "object" && e.multiCalendars, J = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...J, count: B(!1) };
    const W = N ? e.multiCalendars : {}, re = N ? W.count ?? !0 : e.multiCalendars, z = B(re);
    return Object.assign(J, W, { count: z });
  }), u = j(() => d()), M = j(() => ({ ...Pr, ...e.ariaLabels })), i = j(() => ({ ...Tr, ...e.filters })), P = j(() => typeof e.transitions == "boolean" ? e.transitions ? Ya : !1 : { ...Ya, ...e.transitions }), f = j(() => ({ ...Ar, ...e.actionRow })), Y = j(() => typeof e.textInput == "object" ? {
    ...Ca,
    format: n(),
    pattern: n(),
    ...e.textInput,
    enabled: !0
  } : {
    ...Ca,
    format: n(),
    pattern: n(),
    enabled: e.textInput
  }), V = j(() => {
    const N = { input: !1 };
    return typeof e.inline == "object" ? { ...N, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...N
    };
  }), $ = j(() => ({ ...Mr, ...e.config })), F = j(() => typeof e.highlight == "function" ? e.highlight : {
    ..._r,
    ...e.highlight
  }), q = j(() => typeof e.weekNumbers == "object" ? {
    type: e.weekNumbers?.type ?? Jt.type,
    hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Jt.hideOnOffsetDates,
    label: e.weekNumbers.label ?? Jt.label
  } : e.weekNumbers ? Jt : void 0), C = j(() => typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
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
      e.markers.map((N) => {
        const J = o(N.date);
        return [w(J, Tt.DATE), N];
      })
    ) : null
  })), c = j(() => typeof e.range == "object" ? { enabled: !0, ...Ra, ...e.range } : {
    enabled: e.range,
    ...Ra
  }), D = j(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((J) => {
        const W = J, re = e.ui[W];
        if (W === "dayClass") return [W, e.ui[W]];
        const z = typeof e.ui[W] == "string" ? { [re]: !0 } : Object.fromEntries(re.map((ae) => [ae, !0]));
        return [J, z];
      })
    )
  })), L = j(() => ({
    ...$r,
    ...e.formats,
    input: e.formats?.input ?? n(),
    preview: e.formats?.preview ?? n()
  })), Q = j(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), te = j(() => ({ ...Sr, ...e.timeConfig })), Z = j(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), ve = j(() => {
    const N = Y.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Oa, inputmode: N, ...e.inputAttrs } : { ...Oa, inputmode: N };
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
    actionRow: f,
    textInput: Y,
    inline: V,
    config: $,
    highlight: F,
    weekNumbers: q,
    range: c,
    safeDates: y,
    multiDates: C,
    ui: D,
    formats: L,
    teleport: Q,
    timeConfig: te,
    flow: Z,
    inputAttrs: ve,
    floatingConfig: he,
    getDate: o
  };
}, Fe = () => {
  const e = ($, F) => Ze($, F ?? Tt.DATE), w = ($, F) => $ ? Tt.MONTH_AND_YEAR : F ? Tt.YEAR : Tt.DATE, p = ($, F, q) => F.get(e($, q)), r = ($) => $, o = ($) => $ === 0 ? $ : !$ || Number.isNaN(+$) ? null : +$, s = () => [
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
    const C = q.indexOf($);
    if (C >= 0 && (F ? C - 1 >= 0 : C + 1 <= q.length))
      return q[C + (F ? -1 : 1)];
  }, l = ($) => String($).padStart(2, "0"), d = ($, F) => $?.querySelector(`[data-dp-element="${F}"]`), B = ($, F, q = !1) => {
    $ && F.allowStopPropagation && (q && $.stopImmediatePropagation(), $.stopPropagation());
  }, A = ($, F, q = !1, C) => {
    if ($.key === xe.enter || $.key === xe.space)
      return q && $.preventDefault(), F();
    if (C) return C($);
  }, I = ($, F) => {
    F.allowStopPropagation && $.stopPropagation(), F.allowPreventDefault && $.preventDefault();
  }, k = ($) => {
    if ($)
      return [...$.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, u = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, M = ($) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][$], i = ($) => {
    const F = [], q = (C) => C.filter((y) => !!y);
    for (let C = 0; C < $.length; C += 3) {
      const y = [$[C], $[C + 1], $[C + 2]];
      F.push(q(y));
    }
    return F;
  }, P = {
    prop: ($) => `"${$}" prop must be enabled!`,
    dateArr: ($) => `You need to use array as "model-value" binding in order to support "${$}"`
  }, f = ($, F, q, C) => {
    const y = {
      hours: ut,
      minutes: vt,
      seconds: pt
    };
    if (!F) return C ? [y[$](q), y[$](q)] : y[$](q);
    if (Array.isArray(F)) {
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
    setTimeModelValue: ($, F, q, C) => {
      $.hours = f("hours", F, q, C), $.minutes = f("minutes", F, q, C), $.seconds = f("seconds", F, q, C);
    },
    getTimeObjFromCurrent: ($, F, q) => {
      const C = {
        hours: ut($),
        minutes: vt($),
        seconds: q ? pt($) : 0
      };
      return Object.assign(C, F);
    },
    errorMapper: P
  };
}, je = () => {
  const { getDate: e } = $e(), { getMapDate: w, getGroupedList: p } = Fe(), r = (c, D) => {
    if (!c) return e();
    const L = e(c), Q = _e(L, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return D ? An(Q) : Q;
  }, o = (c, D) => {
    const L = e(D);
    return _e(L, {
      hours: +(c.hours ?? ut(L)),
      minutes: +(c.minutes ?? vt(L)),
      seconds: +(c.seconds ?? pt(L)),
      milliseconds: 0
    });
  }, s = (c, D) => {
    const L = Ma(c, { weekStartsOn: +D }), Q = Ia(c, { weekStartsOn: +D });
    return [L, Q];
  }, n = (c, D) => !c || !D ? !1 : $t(r(c), r(D)), l = (c, D) => !c || !D ? !1 : Pt(r(c), r(D)), d = (c, D) => !c || !D ? !1 : _t(r(c), r(D)), B = (c, D, L) => c?.[0] && c?.[1] ? d(L, c[0]) && n(L, c[1]) : c?.[0] && D ? d(L, c[0]) && n(L, D) || n(L, c[0]) && d(L, D) : !1, A = (c, D) => {
    const L = d(c, D) ? D : c, Q = d(D, c) ? D : c;
    return Ba({ start: L, end: Q });
  }, I = (c) => `dp-${Ze(c, "yyyy-MM-dd")}`, k = (c) => r(_e(e(c), { date: 1 })), u = (c, D) => {
    if (D) {
      const L = ye(e(D));
      if (L > c) return 12;
      if (L === c) return Te(e(D));
    }
  }, M = (c, D) => {
    if (D) {
      const L = ye(e(D));
      return L < c ? -1 : L === c ? Te(e(D)) : void 0;
    }
  }, i = (c) => {
    if (c) return ye(e(c));
  }, P = (c) => ({
    hours: ut(c),
    minutes: vt(c),
    seconds: pt(c)
  });
  return {
    resetDateTime: r,
    groupListAndMap: (c, D) => p(c).map((L) => L.map((Q) => {
      const { active: te, disabled: Z, isBetween: ve, highlighted: he } = D(Q);
      return {
        ...Q,
        active: te,
        disabled: Z,
        className: {
          dp__overlay_cell_active: te,
          dp__overlay_cell: !te,
          dp__overlay_cell_disabled: Z,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: Z && te,
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
    sanitizeTime: (c, D, L) => D && (L || L === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((Q) => Q === D ? [Q, L] : [Q, Number.isNaN(+c[Q]) ? void 0 : +c[Q]])
    ) : {
      hours: Number.isNaN(+c.hours) ? void 0 : +c.hours,
      minutes: Number.isNaN(+c.minutes) ? void 0 : +c.minutes,
      seconds: Number.isNaN(+(c.seconds ?? "")) ? void 0 : +c.seconds
    },
    getBeforeAndAfterInRange: (c, D) => {
      const L = _n(r(D), c), Q = mt(r(D), c);
      return { before: L, after: Q };
    },
    isModelAuto: (c) => Array.isArray(c) ? !!c[0] && !!c[1] : !1,
    matchDate: (c, D) => c ? D ? D instanceof Map ? !!w(c, D) : D(e(c)) : !1 : !0,
    checkHighlightMonth: (c, D, L) => typeof c == "function" ? c({ month: D, year: L }) : c.months.some((Q) => Q.month === D && Q.year === L),
    checkHighlightYear: (c, D) => typeof c == "function" ? c(D) : c.years.includes(D)
  };
}, ta = () => {
  const {
    defaults: { config: e }
  } = $e(), w = de(0);
  Ne(() => {
    p(), globalThis.addEventListener("resize", p, { passive: !0 });
  }), St(() => {
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
  } = $e(), n = (P) => Ze(lt(e(), P), o.value.year, { locale: r.locale }), l = (P) => Ze(Pn(e(), P), o.value.month, { locale: r.locale }), d = (P) => Ze(e(`2017-01-0${P}T00:00:00+00:00`), o.value.weekDay, { locale: r.locale }), B = (P) => Ze(P, o.value.quarter, { locale: r.locale }), A = (P, f) => [P, f].map((Y) => B(Y)).join("-"), I = (P) => Ze(P, o.value.day, { locale: r.locale }), k = (P, f, Y) => {
    const V = Y ? o.value.preview : o.value.input;
    if (!P) return "";
    if (typeof V == "function") return V(P);
    const $ = f ?? V, F = { locale: r.locale };
    return Array.isArray(P) ? `${Ze(P[0], $, F)}${r.modelAuto && !P[1] ? "" : s.value.rangeSeparator}${P[1] ? Ze(P[1], $, F) : ""}` : Ze(P, $, F);
  }, u = () => {
    const P = (f) => Ze(f, s.value.format);
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
}, aa = () => {
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
  } = $e(), { getTimeObjFromCurrent: s } = Fe(), n = de(!1), l = j(
    () => Array.isArray(r.value) ? r.value[0] : r.value ?? s(e(), {}, o.value.enableSeconds)
  ), d = (k, u, M) => {
    const i = wa(k, u.slice(0, k.length), e(), { locale: w.locale });
    return ea(i) && Tn(i) ? M || n.value ? i : _e(i, {
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
      for (let f = 0; f < u.length; f++) {
        const Y = u[f], V = Y.length, $ = k.slice(P, P + V);
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
      const M = /(YYYY|MM|DD|hh|mm|ss)/g, i = [...u.matchAll(M)].map(($) => $[0]), P = u.replace(M, "|").split("|").filter(Boolean), f = i.map(($) => $.length);
      let Y = "", V = 0;
      for (let $ = 0; $ < i.length; $++) {
        const F = f[$], q = k.slice(V, V + F);
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
    } = $e(), { checkMinMaxRange: P, isValidDate: f } = at(), { parseFreeInput: Y, textPasted: V, createMaskedValue: $, applyMaxValues: F } = xr(), { checkKeyDown: q, checkStopPropagation: C } = Fe(), y = Re("dp-input"), c = de(null), D = de(!1), L = j(
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
    }, te = (H) => {
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
        te(H);
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
    }, N = (H) => {
      d.value.enabled ? (ve(H.target.value), d.value.enterSubmit && f(c.value) && n.value !== "" ? (r("set-input-date", c.value, !0), c.value = null) : d.value.enterSubmit && n.value === "" && (c.value = null, r("clear"))) : re(H);
    }, J = (H, E) => {
      d.value.enabled && d.value.tabSubmit && !E && ve(H.target.value), d.value.tabSubmit && f(c.value) && n.value !== "" ? (r("set-input-date", c.value, !0, !0), c.value = null) : d.value.tabSubmit && n.value === "" && (c.value = null, r("clear"));
    }, W = () => {
      D.value = !0, r("focus"), Ge().then(() => {
        d.value.enabled && d.value.selectOnFocus && y.value?.select();
      });
    }, re = (H) => {
      if (C(H, I.value, !0), d.value.enabled && d.value.openMenu && !A.value.input) {
        if (d.value.openMenu === "open" && !o.isMenuOpen) return r("open");
        if (d.value.openMenu === "toggle") return r("toggle");
      } else d.value.enabled || r("toggle");
    }, z = () => {
      r("real-blur"), D.value = !1, (!o.isMenuOpen || A.value.enabled && A.value.input) && r("blur"), l.autoApply && d.value.enabled && c.value && !o.isMenuOpen && (r("set-input-date", c.value), r("select-date"), c.value = null);
    }, ae = (H) => {
      C(H, I.value, !0), r("clear");
    }, fe = () => {
      r("close");
    }, ge = (H) => {
      if (H.key === "Tab" && J(H), H.key === "Enter" && N(H), H.key === "Escape" && d.value.escClose && fe(), !d.value.enabled) {
        if (H.code === "Tab") return;
        H.preventDefault();
      }
    }, De = () => {
      y.value?.focus({ preventScroll: !0 });
    }, Ae = (H) => {
      c.value = H;
    }, se = (H) => {
      H.key === xe.tab && J(H, !0);
    };
    return w({
      focusInput: De,
      setParsedDate: Ae
    }), (H, E) => (O(), K("div", { onClick: re }, [
      H.$slots.trigger && !H.$slots["dp-input"] && !t(A).enabled ? oe(H.$slots, "trigger", { key: 0 }) : U("", !0),
      !H.$slots.trigger && (!t(A).enabled || t(A).input) ? (O(), K("div", Br, [
        H.$slots["dp-input"] && !H.$slots.trigger && (!t(A).enabled || t(A).enabled && t(A).input) ? oe(H.$slots, "dp-input", {
          key: 0,
          value: t(n),
          isMenuOpen: e.isMenuOpen,
          onInput: he,
          onEnter: N,
          onTab: J,
          onClear: ae,
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
          class: be(L.value),
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
            oe(H.$slots, "input-icon")
          ])) : U("", !0),
          !H.$slots["input-icon"] && !t(i).hideInputIcon && !H.$slots["dp-input"] ? (O(), Se(t(Lt), {
            key: 1,
            "aria-label": t(B)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: E[3] || (E[3] = (ce) => r("toggle"))
          }, null, 8, ["aria-label"])) : U("", !0)
        ]),
        H.$slots["clear-icon"] && (t(i).alwaysClearable || t(n) && t(i).clearable && !t(l).disabled && !t(l).readonly) ? (O(), K("span", Vr, [
          oe(H.$slots, "clear-icon", { clear: ae })
        ])) : U("", !0),
        !H.$slots["clear-icon"] && (t(i).alwaysClearable || t(i).clearable && t(n) && !t(l).disabled && !t(l).readonly) ? (O(), K("button", {
          key: 3,
          "aria-label": t(B)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: E[5] || (E[5] = (ce) => t(q)(ce, () => ae(ce), !0, se)),
          onClick: E[6] || (E[6] = Nt((ce) => ae(ce), ["prevent"]))
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
    } = $e(), { isTimeValid: u, isMonthValid: M } = at(), { buildMatrix: i } = gt(), { formatPreview: P } = bt(), { checkKeyDown: f, convertType: Y } = Fe(), V = Re("cancel-btn"), $ = Re("select-btn"), F = Re("action-buttons-container"), q = Re("action-row"), C = de(!1), y = de({});
    Ne(() => {
      s.arrowNavigation && i([Qe(V), Qe($)], "actionRow"), c(), globalThis.addEventListener("resize", c);
    }), St(() => {
      globalThis.removeEventListener("resize", c);
    });
    const c = () => {
      C.value = !1, setTimeout(() => {
        const J = F.value?.getBoundingClientRect(), W = q.value?.getBoundingClientRect();
        J && W && (y.value.maxWidth = `${W.width - J.width - 20}px`), C.value = !0;
      }, 0);
    }, D = j(() => A.value.enabled && !A.value.partialRange && n.value ? n.value.length === 2 : !0), L = j(
      () => !u.value(n.value) || !M.value(n.value) || !D.value
    ), Q = () => {
      const J = k.value.preview;
      return s.timePicker || s.monthPicker, J(Y(n.value));
    }, te = () => {
      const J = n.value;
      return d.value.count > 0 ? `${P(J[0])} - ${P(J[1])}` : [P(J[0]), P(J[1])];
    }, Z = j(() => !n.value || !r.menuMount ? "" : typeof k.value.preview == "string" ? Array.isArray(n.value) ? n.value.length === 2 && n.value[1] ? te() : I.value.enabled ? n.value.map((J) => `${P(J)}`) : s.modelAuto ? `${P(n.value[0])}` : `${P(n.value[0])} -` : P(n.value) : Q()), ve = () => I.value.enabled ? "; " : " - ", he = j(
      () => Array.isArray(Z.value) ? Z.value.join(ve()) : Z.value
    ), N = () => {
      u.value(n.value) && M.value(n.value) && D.value ? p("select-date") : o("invalid-select");
    };
    return (J, W) => (O(), K("div", Nr, [
      J.$slots["action-row"] ? oe(J.$slots, "action-row", Je(et({ key: 0 }, {
        modelValue: t(n),
        disabled: L.value,
        selectDate: () => J.$emit("select-date"),
        closePicker: () => J.$emit("close-picker")
      }))) : (O(), K(ke, { key: 1 }, [
        t(l).showPreview ? (O(), K("div", {
          key: 0,
          class: "dp__selection_preview",
          title: he.value,
          style: Xe(y.value)
        }, [
          J.$slots["action-preview"] && C.value ? oe(J.$slots, "action-preview", {
            key: 0,
            value: t(n)
          }) : U("", !0),
          !J.$slots["action-preview"] && C.value ? (O(), K(ke, { key: 1 }, [
            dt(Ke(he.value), 1)
          ], 64)) : U("", !0)
        ], 12, Wr)) : U("", !0),
        Pe("div", Lr, [
          J.$slots["action-buttons"] ? oe(J.$slots, "action-buttons", {
            key: 0,
            value: t(n)
          }) : U("", !0),
          J.$slots["action-buttons"] ? U("", !0) : (O(), K(ke, { key: 1 }, [
            !t(B).enabled && t(l).showCancel ? (O(), K("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: W[0] || (W[0] = (re) => J.$emit("close-picker")),
              onKeydown: W[1] || (W[1] = (re) => t(f)(re, () => J.$emit("close-picker")))
            }, Ke(t(l).cancelBtnLabel), 545)) : U("", !0),
            t(l).showNow ? (O(), K("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: W[2] || (W[2] = (re) => J.$emit("select-now")),
              onKeydown: W[3] || (W[3] = (re) => t(f)(re, () => J.$emit("select-now")))
            }, Ke(t(l).nowBtnLabel), 33)) : U("", !0),
            t(l).showSelect ? (O(), K("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: L.value,
              "data-test-id": "select-button",
              onKeydown: W[4] || (W[4] = (re) => t(f)(re, () => N())),
              onClick: N
            }, Ke(t(l).selectBtnLabel), 41, Hr)) : U("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), na = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: w }
  } = $e(), p = j(() => (s) => e.hideNavigation?.includes(s)), r = j(() => (s) => w.value.count ? w.value.solo ? !0 : s === 0 : !0), o = j(() => (s) => w.value.count ? w.value.solo ? !0 : s === w.value.count - 1 : !0);
  return { hideNavigationButtons: p, showLeftIcon: r, showRightIcon: o };
}, jr = ["role", "aria-label", "tabindex"], zr = { class: "dp__selection_grid_header" }, Ur = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], qr = ["aria-label"], jt = /* @__PURE__ */ We({
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
    } = $e(), { hideNavigationButtons: k } = na(), { handleEventPropagation: u, convertType: M, checkKeyDown: i, checkStopPropagation: P, getElWithin: f, findFocusableEl: Y } = Fe(), V = Re("toggle-button"), $ = Re("overlay-container"), F = Re("grid-wrap"), q = de(!1), C = de(null), y = de([]), c = de(), D = de(0);
    dn(() => {
      C.value = null;
    }), Ne(() => {
      Ge().then(() => J()), l.noOverlayFocus || Q(), L(!0);
    }), St(() => L(!1));
    const L = (E) => {
      d.arrowNavigation && (l.headerRefs?.length ? s(E) : r(E));
    }, Q = () => {
      const E = Qe(F);
      E && (A.value.enabled || (C.value ? C.value?.focus({ preventScroll: !0 }) : E.focus({ preventScroll: !0 })), q.value = E.clientHeight < E.scrollHeight);
    }, te = j(
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
    ), N = j(() => ({
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
        const ce = Qe(C), ue = Qe(F), b = Qe(V), T = Qe($), ie = b ? b.getBoundingClientRect().height : 0;
        ue && (ue.getBoundingClientRect().height ? D.value = ue.getBoundingClientRect().height - ie : D.value = I.value.modeHeight - ie), ce && T && E && (T.scrollTop = ce.offsetTop - T.offsetTop - (D.value / 2 - ce.getBoundingClientRect().height) - ie);
      });
    }, W = (E) => {
      E.disabled || n("selected", E.value);
    }, re = () => {
      n("toggle"), n("reset-flow");
    }, z = (E) => {
      I.value.escClose && (re(), u(E, I.value));
    }, ae = (E, ce, ue, b) => {
      E && ((ce.active || ce.value === l.focusValue) && (C.value = E), d.arrowNavigation && (Array.isArray(y.value[ue]) ? y.value[ue][b] = E : y.value[ue] = [E], fe()));
    }, fe = () => {
      const E = l.headerRefs?.length ? [l.headerRefs].concat(y.value) : y.value.concat([l.skipButtonRef ? [] : [V.value]]);
      o(M(E), l.headerRefs?.length ? "monthPicker" : "selectionGrid");
    }, ge = (E) => {
      d.arrowNavigation || P(E, I.value, !0);
    }, De = (E) => {
      c.value = E, n("hover-value", E);
    }, Ae = () => {
      if (re(), !l.isLast) {
        const E = f(l.menuWrapRef ?? null, "action-row");
        E && Y(E)?.focus();
      }
    }, se = (E) => {
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
      if (E.key === xe.enter) return re();
      if (E.key === xe.tab) return Ae();
    };
    return w({ focusGrid: Q }), (E, ce) => (O(), K("div", {
      ref: "grid-wrap",
      class: be(te.value),
      style: Xe(Z.value),
      role: e.useRelative ? void 0 : "dialog",
      "aria-label": e.overlayLabel,
      tabindex: e.useRelative ? void 0 : "0",
      onKeydown: se,
      onClick: ce[0] || (ce[0] = Nt(() => {
      }, ["prevent"]))
    }, [
      Pe("div", {
        ref: "overlay-container",
        class: be(N.value),
        style: Xe({ "--dp-overlay-height": `${D.value}px` }),
        role: "grid"
      }, [
        Pe("div", zr, [
          oe(E.$slots, "header")
        ]),
        E.$slots.overlay ? oe(E.$slots, "overlay", { key: 0 }) : (O(!0), K(ke, { key: 1 }, Ye(e.items, (ue, b) => (O(), K("div", {
          key: b,
          class: be(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
          role: "row"
        }, [
          (O(!0), K(ke, null, Ye(ue, (T, ie) => (O(), K("div", {
            key: T.value,
            ref_for: !0,
            ref: (le) => ae(le, T, b, ie),
            role: "gridcell",
            class: be(ve.value),
            "aria-selected": T.active || void 0,
            "aria-disabled": T.disabled || void 0,
            tabindex: "0",
            "data-test-id": T.text,
            onClick: Nt((le) => W(T), ["prevent"]),
            onKeydown: (le) => t(i)(le, () => W(T), !0),
            onMouseover: (le) => De(T.value)
          }, [
            Pe("div", {
              class: be(T.className)
            }, [
              E.$slots.item ? oe(E.$slots, "item", {
                key: 0,
                item: T
              }) : U("", !0),
              E.$slots.item ? U("", !0) : (O(), K(ke, { key: 1 }, [
                dt(Ke(T.text), 1)
              ], 64))
            ], 2)
          ], 42, Ur))), 128))
        ], 2))), 128))
      ], 6),
      E.$slots["button-icon"] ? Xt((O(), K("button", {
        key: 0,
        ref: "toggle-button",
        type: "button",
        "aria-label": t(B)?.toggleOverlay,
        class: be(he.value),
        tabindex: "0",
        onClick: re,
        onKeydown: H
      }, [
        oe(E.$slots, "button-icon")
      ], 42, qr)), [
        [Zt, !t(k)(e.type)]
      ]) : U("", !0)
    ], 46, jr));
  }
}), Qr = ["data-dp-mobile"], ra = /* @__PURE__ */ We({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: w }
    } = $e(), { isMobile: p } = ta(), r = j(
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
      oe(o.$slots, "default", {
        instances: r.value,
        wrapClass: { dp__instance_calendar: t(w).count > 0 }
      })
    ], 10, Qr));
  }
}), Gr = ["data-dp-element", "aria-label", "aria-disabled"], Et = /* @__PURE__ */ We({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: w }) {
    const { checkKeyDown: p } = Fe(), r = w, o = Re("arrow-btn");
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
        oe(s.$slots, "default")
      ], 2)
    ], 40, Gr));
  }
}), Jr = ["aria-label", "data-test-id"], Ua = /* @__PURE__ */ We({
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
    const p = w, r = e, { showRightIcon: o, showLeftIcon: s } = na(), {
      rootProps: n,
      defaults: { config: l, ariaLabels: d, ui: B }
    } = $e(), { showTransition: A, transitionName: I } = Ht(), { formatYear: k } = bt(), u = de(!1), M = j(() => k(r.year)), i = (Y = !1, V) => {
      u.value = !u.value, p("toggle-year-picker", { flow: Y, show: V });
    }, P = (Y) => {
      u.value = !1, p("year-select", Y);
    }, f = (Y = !1) => {
      p("handle-year", Y);
    };
    return (Y, V) => (O(), K(ke, null, [
      Pe("div", {
        class: be(["dp--year-mode-picker", { "dp--hidden-el": u.value }])
      }, [
        t(s)(e.instance) ? (O(), Se(Et, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(d)?.prevYear,
          disabled: e.isDisabled(!1),
          class: be(t(B)?.navBtnPrev),
          onActivate: V[0] || (V[0] = ($) => f(!1))
        }, {
          default: we(() => [
            Y.$slots["arrow-left"] ? oe(Y.$slots, "arrow-left", { key: 0 }) : U("", !0),
            Y.$slots["arrow-left"] ? U("", !0) : (O(), Se(t(Wa), { key: 1 }))
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
          Y.$slots.year ? oe(Y.$slots, "year", {
            key: 0,
            text: M.value,
            value: e.year
          }) : U("", !0),
          Y.$slots.year ? U("", !0) : (O(), K(ke, { key: 1 }, [
            dt(Ke(e.year), 1)
          ], 64))
        ], 40, Jr),
        t(o)(e.instance) ? (O(), Se(Et, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(d)?.nextYear,
          disabled: e.isDisabled(!0),
          class: be(t(B)?.navBtnNext),
          onActivate: V[3] || (V[3] = ($) => f(!0))
        }, {
          default: we(() => [
            Y.$slots["arrow-right"] ? oe(Y.$slots, "arrow-right", { key: 0 }) : U("", !0),
            Y.$slots["arrow-right"] ? U("", !0) : (O(), Se(t(La), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : U("", !0)
      ], 2),
      tt(Rt, {
        name: t(I)(e.showYearPicker),
        css: t(A)
      }, {
        default: we(() => [
          e.showYearPicker ? (O(), Se(jt, {
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
              Y.$slots["calendar-icon"] ? oe(Y.$slots, "calendar-icon", { key: 0 }) : U("", !0),
              Y.$slots["calendar-icon"] ? U("", !0) : (O(), Se(t(Lt), { key: 1 }))
            ]),
            _: 2
          }, [
            Y.$slots["year-overlay-value"] ? {
              name: "item",
              fn: we(({ item: $ }) => [
                oe(Y.$slots, "year-overlay-value", {
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
}), qa = (e) => {
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
  } = $e(), { resetDate: M, getYearFromDate: i, checkHighlightYear: P, groupListAndMap: f } = je(), { getYears: Y } = aa(), { validateMonthYear: V, checkMinMaxValue: $ } = at(), F = de([!1]), q = j(() => Y()), C = j(() => (z, ae) => {
    const fe = _e(M(w()), {
      month: o.value(z),
      year: s.value(z)
    }), ge = ae ? Va(fe) : Vt(fe);
    return V(ge, d.preventMinMaxNavigation, ae);
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
        const ae = _e(w(), l.value[z - 1]);
        l.value[z] = { month: Te(ae), year: ye(Ea(ae, 1)) };
      }
  }, D = (z) => {
    if (!z) return c();
    const ae = _e(w(), l.value[z]);
    return l.value[0].year = ye(Fa(ae, B.value.count - 1)), c();
  }, L = (z, ae) => {
    const fe = $n(ae, z);
    return A.value.showLastInRange && fe > 1 ? ae : z;
  }, Q = (z) => d.focusStartDate || B.value.solo ? z[0] : z[1] ? L(z[0], z[1]) : z[0], te = () => {
    if (n.value) {
      const z = Array.isArray(n.value) ? Q(n.value) : n.value;
      l.value[0] = { month: Te(z), year: ye(z) };
    }
  }, Z = () => {
    te(), B.value.count && c();
  };
  st(n, (z, ae) => {
    r.isTextInputDate && JSON.stringify(z ?? {}) !== JSON.stringify(ae ?? {}) && Z();
  }), Ne(() => {
    Z();
  });
  const ve = (z, ae) => {
    l.value[ae].year = z, p("update-month-year", { instance: ae, year: z, month: l.value[ae].month }), B.value.count && !B.value.solo && D(ae);
  }, he = j(() => (z) => f(q.value, (ae) => {
    const fe = s.value(z) === ae.value, ge = $(
      ae.value,
      i(I.value.minDate),
      i(I.value.maxDate)
    ) || k.value.years?.includes(s.value(z)), De = P(u.value, ae.value);
    return { active: fe, disabled: ge, highlighted: De };
  })), N = (z, ae) => {
    ve(z, ae), W(ae);
  }, J = (z, ae = !1) => {
    if (!C.value(z, ae)) {
      const fe = ae ? s.value(z) + 1 : s.value(z) - 1;
      ve(fe, z);
    }
  }, W = (z, ae = !1, fe) => {
    ae || e("reset-flow"), fe === void 0 ? F.value[z] = !F.value[z] : F.value[z] = fe, F.value[z] ? p("overlay-toggle", { open: !0, overlay: qe.year }) : p("overlay-toggle", { open: !1, overlay: qe.year });
  };
  return {
    isDisabled: C,
    groupedYears: he,
    showYearPicker: F,
    selectYear: ve,
    setStartDate: () => {
      d.startDate && (n.value && d.focusStartDate || !n.value) && ve(ye(w(d.startDate)), 0);
    },
    toggleYearPicker: W,
    handleYearSelect: N,
    handleYear: J
  };
}, la = () => {
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
  Kt(() => {
    o.isTextInputDate && N(ye(p(d.startDate)), 0);
  });
  const { checkMinMaxRange: M, checkMinMaxValue: i } = at(), { isDateBetween: P, resetDateTime: f, resetDate: Y, getMinMonth: V, getMaxMonth: $, checkHighlightMonth: F, groupListAndMap: q } = je(), { checkRangeAutoApply: C, getRangeWithFixedDate: y, handleMultiDatesSelect: c, setMonthOrYearRange: D, setPresetDate: L } = la(), { padZero: Q } = Fe(), { getMonths: te, isOutOfYearRange: Z } = aa(), ve = j(() => te()), he = de(null), {
    selectYear: N,
    groupedYears: J,
    showYearPicker: W,
    toggleYearPicker: re,
    handleYearSelect: z,
    handleYear: ae,
    isDisabled: fe,
    setStartDate: ge
  } = qa(w);
  Ne(() => {
    ge();
  });
  const De = (a) => a ? { month: Te(a), year: ye(a) } : { month: null, year: null }, Ae = () => l.value ? Array.isArray(l.value) ? l.value.map((a) => De(a)) : De(l.value) : De(), se = (a, v) => {
    const S = s.value[a], ee = Ae();
    return Array.isArray(ee) ? ee.some((ne) => ne.year === S?.year && ne.month === v) : S?.year === ee.year && v === ee.month;
  }, H = (a, v, S) => {
    const ee = Ae();
    return Array.isArray(ee) ? n.value(v) === ee[S]?.year && a === ee[S]?.month : !1;
  }, E = (a, v) => {
    if (B.value.enabled) {
      const S = Ae();
      if (Array.isArray(l.value) && Array.isArray(S)) {
        const ee = H(a, v, 0) || H(a, v, 1), ne = _e(Y(p()), { month: a, year: n.value(v) });
        return P(l.value, he.value, ne) && !ee;
      }
      return !1;
    }
    return !1;
  }, ce = j(() => (a) => q(ve.value, (v) => {
    const S = se(a, v.value), ee = i(
      v.value,
      V(n.value(a), I.value.minDate),
      $(n.value(a), I.value.maxDate)
    ) || R(I.value.disabledDates, n.value(a), v.value) || k.value.months?.includes(v.value) || !G(I.value.allowedDates, n.value(a), v.value) || Z(n.value(a)), ne = E(v.value, a), Ve = F(A.value, v.value, n.value(a));
    return { active: S, disabled: ee, isBetween: ne, highlighted: Ve };
  })), ue = (a, v) => _e(Y(p()), { month: a, year: n.value(v) }), b = (a, v) => {
    const S = l.value ? l.value : Y(p());
    l.value = _e(S, { month: a, year: n.value(v) }), w("auto-apply"), w("update-flow-step");
  }, T = (a, v) => {
    const S = ue(a, v);
    B.value.fixedEnd || B.value.fixedStart ? l.value = y(S) : l.value ? M(S, l.value) && (l.value = D(ue(a, v))) : l.value = [ue(a, v)], Ge().then(() => {
      C(l.value, w, l.value.length < 2);
    });
  }, ie = (a, v) => {
    c(ue(a, v), u.value.limit), w("auto-apply", !0);
  }, le = (a, v) => (s.value[v].month = a, m(v, s.value[v].year, a), u.value.enabled ? ie(a, v) : B.value.enabled ? T(a, v) : b(a, v)), h = (a, v) => {
    N(a, v), m(v, a, null);
  }, m = (a, v, S) => {
    let ee = S;
    if (!ee && ee !== 0) {
      const ne = Ae();
      ee = Array.isArray(ne) ? ne[a].month : ne.month;
    }
    r("update-month-year", { instance: a, year: v, month: ee });
  }, x = (a, v) => {
    he.value = ue(a, v);
  }, g = (a) => {
    L({
      value: a
    }), w("auto-apply");
  }, R = (a, v, S) => {
    if (a instanceof Map) {
      const ee = `${Q(S + 1)}-${v}`;
      return a.size ? a.has(ee) : !1;
    }
    return typeof a == "function" ? a(f(_e(p(), { month: S, year: v }), !0)) : !1;
  }, G = (a, v, S) => {
    if (a instanceof Map) {
      const ee = `${Q(S + 1)}-${v}`;
      return a.size ? a.has(ee) : !0;
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
    toggleYearPicker: re,
    handleYearSelect: z,
    handleYear: ae,
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
      setHoverDate: f,
      selectMonth: Y,
      selectYear: V,
      toggleYearPicker: $,
      handleYearSelect: F,
      handleYear: q,
      getModelMonthYear: C
    } = Xr(o, r);
    return w({ getSidebarProps: () => ({
      modelValue: i,
      year: k,
      getModelMonthYear: C,
      selectMonth: Y,
      selectYear: V,
      handleYear: q
    }), presetDate: P, toggleYearPicker: (c) => $(0, c) }), (c, D) => (O(), Se(ra, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: we(({ instances: L, wrapClass: Q }) => [
        (O(!0), K(ke, null, Ye(L, (te) => (O(), K("div", {
          key: te,
          class: be(Q)
        }, [
          c.$slots["top-extra"] ? oe(c.$slots, "top-extra", {
            key: 0,
            value: t(i)
          }) : U("", !0),
          c.$slots["month-year"] ? oe(c.$slots, "month-year", et({
            key: 1,
            ref_for: !0
          }, {
            year: t(k),
            months: t(A)(te),
            years: t(I)(te),
            selectMonth: t(Y),
            selectYear: t(V),
            instance: te
          })) : (O(), Se(jt, {
            key: 2,
            items: t(A)(te),
            "is-last": t(l).autoApply && !t(d).keepActionRow,
            height: t(d).modeHeight,
            "no-overlay-focus": !!(e.noOverlayFocus || t(l).textInput),
            "use-relative": "",
            type: "month",
            onSelected: (Z) => t(Y)(Z, te),
            onHoverValue: (Z) => t(f)(Z, te)
          }, Le({
            header: we(() => [
              tt(Ua, {
                items: t(I)(te),
                instance: te,
                "show-year-picker": t(M)[te],
                year: t(k)(te),
                "is-disabled": (Z) => t(u)(te, Z),
                onHandleYear: (Z) => t(q)(te, Z),
                onYearSelect: (Z) => t(F)(Z, te),
                onToggleYearPicker: (Z) => t($)(te, Z?.flow, Z?.show)
              }, Le({ _: 2 }, [
                Ye(t(B), (Z, ve) => ({
                  name: Z,
                  fn: we((he) => [
                    oe(c.$slots, Z, et({ ref_for: !0 }, he))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            c.$slots["month-overlay-value"] ? {
              name: "item",
              fn: we(({ item: Z }) => [
                oe(c.$slots, "month-overlay-value", {
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
  } = $e(), { getYears: k } = aa(), { isDateBetween: u, resetDate: M, resetDateTime: i, getYearFromDate: P, checkHighlightYear: f, groupListAndMap: Y } = je(), { checkRangeAutoApply: V, setMonthOrYearRange: $ } = la(), { checkMinMaxValue: F, checkMinMaxRange: q } = at();
  Kt(() => {
    o.isTextInputDate && (y.value = ye(r(n.startDate)));
  });
  const C = de(null), y = de();
  Ne(() => {
    n.startDate && (s.value && n.focusStartDate || !s.value) && (y.value = ye(r(n.startDate)));
  });
  const c = (N) => Array.isArray(s.value) ? s.value.some((J) => ye(J) === N) : s.value ? ye(s.value) === N : !1, D = (N) => A.value.enabled && Array.isArray(s.value) ? u(s.value, C.value, Z(N)) : !1, L = (N) => I.value.allowedDates?.size ? I.value.allowedDates.has(`${N}`) : !0, Q = (N) => I.value.disabledDates instanceof Map ? I.value.disabledDates.size ? I.value.disabledDates.has(`${N}`) : !1 : typeof I.value.disabledDates == "function" ? I.value.disabledDates(lt(i(Vt(r())), N)) : !0, te = j(() => Y(k(), (N) => {
    const J = c(N.value), W = F(
      N.value,
      P(I.value.minDate),
      P(I.value.maxDate)
    ) || B.value.years.includes(N.value) || !L(N.value) || Q(N.value), re = D(N.value) && !J, z = f(l.value, N.value);
    return { active: J, disabled: W, isBetween: re, highlighted: z };
  })), Z = (N) => lt(M(Vt(r())), N);
  return {
    groupedYears: te,
    focusYear: y,
    setHoverValue: (N) => {
      C.value = lt(M(r()), N);
    },
    selectYear: (N) => {
      if (p("update-month-year", { instance: 0, year: N, month: Number.NaN }), d.value.enabled)
        return s.value ? Array.isArray(s.value) && ((s.value?.map((W) => ye(W))).includes(N) ? s.value = s.value.filter((W) => ye(W) !== N) : s.value.push(lt(i(r()), N))) : s.value = [lt(i(Vt(r())), N)], w("auto-apply", !0);
      A.value.enabled ? q(Z(N), s.value) && (s.value = $(Z(N)), Ge().then(() => {
        V(s.value, w, s.value.length < 2);
      })) : (s.value = Z(N), w("auto-apply"));
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
      u.$slots["top-extra"] ? oe(u.$slots, "top-extra", {
        key: 0,
        value: t(s)
      }) : U("", !0),
      u.$slots["month-year"] ? oe(u.$slots, "month-year", Je(et({ key: 1 }, {
        years: t(d),
        selectYear: t(A)
      }))) : (O(), Se(jt, {
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
            oe(u.$slots, "year-overlay-value", {
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
    } = $e(), { checkKeyDown: P, hoursToAmPmHours: f } = Fe(), { sanitizeTime: Y, groupListAndMap: V } = je(), { transitionName: $, showTransition: F } = Ht(), q = Ft({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), C = de("AM"), y = de(null), c = de([]), D = de(), L = de(!1);
    Ne(() => {
      r("mounted");
    });
    const Q = (a) => _e(l(), {
      hours: a.hours,
      minutes: a.minutes,
      seconds: i.value.enableSeconds ? a.seconds : 0,
      milliseconds: 0
    }), te = j(
      () => (a) => Ae(a, o[a]) || ve(a, o[a])
    ), Z = j(() => ({ hours: o.hours, minutes: o.minutes, seconds: o.seconds })), ve = (a, v) => u.value.enabled && !u.value.disableTimeRangeValidation ? !o.validateTime(a, v) : !1, he = (a, v) => {
      if (u.value.enabled && !u.value.disableTimeRangeValidation) {
        const S = v ? +i.value[`${a}Increment`] : -+i.value[`${a}Increment`], ee = o[a] + S;
        return !o.validateTime(a, ee);
      }
      return !1;
    }, N = j(() => (a) => !ue(+o[a] + +i.value[`${a}Increment`], a) || he(a, !0)), J = j(() => (a) => !ue(+o[a] - +i.value[`${a}Increment`], a) || he(a, !1)), W = (a, v) => Na(_e(l(), a), v), re = (a, v) => Sn(_e(l(), a), v), z = j(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !i.value.timePickerInline,
        dp__time_col_reg_block: !i.value.enableSeconds && i.value.is24 && !i.value.timePickerInline,
        dp__time_col_reg_inline: !i.value.enableSeconds && i.value.is24 && i.value.timePickerInline,
        dp__time_col_reg_with_button: !i.value.enableSeconds && !i.value.is24,
        dp__time_col_sec: i.value.enableSeconds && i.value.is24,
        dp__time_col_sec_with_button: i.value.enableSeconds && !i.value.is24
      })
    ), ae = j(
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
        const v = m(+o.hours);
        return { text: v < 10 ? `0${v}` : `${v}`, value: v };
      }
      return { text: o[a] < 10 ? `0${o[a]}` : `${o[a]}`, value: o[a] };
    }), Ae = (a, v) => {
      if (!o.disabledTimesConfig) return !1;
      const S = o.disabledTimesConfig(o.order, a === "hours" ? v : void 0);
      return S[a] ? !!S[a]?.includes(v) : !0;
    }, se = (a, v) => v !== "hours" || C.value === "AM" ? a : a + 12, H = (a) => {
      const v = i.value.is24 ? 24 : 12, S = a === "hours" ? v : 60, ee = +i.value[`${a}GridIncrement`], ne = a === "hours" && !i.value.is24 ? ee : 0, Ve = [];
      for (let Ce = ne; Ce < S; Ce += ee)
        Ve.push({
          value: i.value.is24 ? Ce : se(Ce, a),
          text: Ce < 10 ? `0${Ce}` : `${Ce}`
        });
      return a === "hours" && !i.value.is24 && Ve.unshift({ value: C.value === "PM" ? 12 : 0, text: "12" }), V(Ve, (Ce) => ({ active: !1, disabled: I.value.times[a].includes(Ce.value) || !ue(Ce.value, a) || Ae(a, Ce.value) || ve(a, Ce.value) }));
    }, E = (a) => a >= 0 ? a : 59, ce = (a) => a >= 0 ? a : 23, ue = (a, v) => {
      const S = B.minTime ? Q(Y(B.minTime)) : null, ee = B.maxTime ? Q(Y(B.maxTime)) : null, ne = Q(
        Y(
          Z.value,
          v,
          v === "minutes" || v === "seconds" ? E(a) : ce(a)
        )
      );
      return S && ee ? ($t(ne, ee) || Pt(ne, ee)) && (_t(ne, S) || Pt(ne, S)) : S ? _t(ne, S) || Pt(ne, S) : ee ? $t(ne, ee) || Pt(ne, ee) : !0;
    }, b = (a) => i.value[`no${a[0].toUpperCase() + a.slice(1)}Overlay`], T = (a) => {
      b(a) || (q[a] = !q[a], q[a] ? (L.value = !0, r("overlay-opened", a)) : (L.value = !1, r("overlay-closed", a)));
    }, ie = (a) => a === "hours" ? ut : a === "minutes" ? vt : pt, le = () => {
      D.value && clearTimeout(D.value);
    }, h = (a, v = !0, S) => {
      const ee = v ? W : re, ne = v ? +i.value[`${a}Increment`] : -+i.value[`${a}Increment`];
      ue(+o[a] + ne, a) && r(
        `update:${a}`,
        ie(a)(
          ee({ [a]: +o[a] }, { [a]: +i.value[`${a}Increment`] })
        )
      ), !S?.keyboard && k.value.timeArrowHoldThreshold && (D.value = setTimeout(() => {
        h(a, v);
      }, k.value.timeArrowHoldThreshold));
    }, m = (a) => i.value.is24 ? a : (a >= 12 ? C.value = "PM" : C.value = "AM", f(a)), x = () => {
      C.value === "PM" ? (C.value = "AM", r("update:hours", o.hours - 12)) : (C.value = "PM", r("update:hours", o.hours + 12)), d("am-pm-change", C.value);
    }, g = (a) => {
      q[a] = !0;
    }, R = (a, v, S) => {
      if (a && B.arrowNavigation) {
        Array.isArray(c.value[v]) ? c.value[v][S] = a : c.value[v] = [a];
        const ee = c.value.reduce(
          (ne, Ve) => Ve.map((Ce, kt) => [...ne[kt] || [], Ve[kt]]),
          []
        );
        n(o.closeTimePickerBtn), y.value && (ee[1] = ee[1].concat(y.value)), s(ee, o.order);
      }
    }, G = (a, v) => (T(a), r(`update:${a}`, v));
    return w({ openChildCmp: g }), (a, v) => t(B).disabled ? U("", !0) : (O(), K("div", al, [
      (O(!0), K(ke, null, Ye(fe.value, (S, ee) => (O(), K("div", {
        key: ee,
        class: be(z.value),
        "data-compact": ae.value && !t(i).enableSeconds,
        "data-collapsed": ae.value && t(i).enableSeconds
      }, [
        S.separator ? (O(), K(ke, { key: 0 }, [
          L.value ? U("", !0) : (O(), K(ke, { key: 0 }, [
            dt(":")
          ], 64))
        ], 64)) : (O(), K(ke, { key: 1 }, [
          Pe("button", {
            ref_for: !0,
            ref: (ne) => R(ne, ee, 0),
            type: "button",
            class: be({
              dp__btn: !0,
              dp__inc_dec_button: !t(i).timePickerInline,
              dp__inc_dec_button_inline: t(i).timePickerInline,
              dp__tp_inline_btn_top: t(i).timePickerInline,
              dp__inc_dec_button_disabled: N.value(S.type),
              "dp--hidden-el": L.value
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
              a.$slots["tp-inline-arrow-up"] ? oe(a.$slots, "tp-inline-arrow-up", { key: 0 }) : (O(), K(ke, { key: 1 }, [
                v[2] || (v[2] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                v[3] || (v[3] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (O(), K(ke, { key: 0 }, [
              a.$slots["arrow-up"] ? oe(a.$slots, "arrow-up", { key: 0 }) : U("", !0),
              a.$slots["arrow-up"] ? U("", !0) : (O(), Se(t(Ka), { key: 1 }))
            ], 64))
          ], 42, rl),
          Pe("button", {
            ref_for: !0,
            ref: (ne) => R(ne, ee, 1),
            type: "button",
            "aria-label": `${De.value(S.type).text}-${t(A)?.openTpOverlay(S.type)}`,
            class: be({
              dp__time_display: !0,
              dp__time_display_block: !t(i).timePickerInline,
              dp__time_display_inline: t(i).timePickerInline,
              "dp--time-invalid": te.value(S.type),
              "dp--time-overlay-btn": !te.value(S.type),
              "dp--hidden-el": L.value
            }),
            disabled: b(S.type),
            tabindex: "0",
            "data-test-id": `${S.type}-toggle-overlay-btn-${o.order}`,
            onKeydown: (ne) => t(P)(ne, () => T(S.type), !0),
            onClick: (ne) => T(S.type)
          }, [
            a.$slots[S.type] ? oe(a.$slots, S.type, {
              key: 0,
              text: De.value(S.type).text,
              value: De.value(S.type).value
            }) : U("", !0),
            a.$slots[S.type] ? U("", !0) : (O(), K(ke, { key: 1 }, [
              dt(Ke(De.value(S.type).text), 1)
            ], 64))
          ], 42, ll),
          Pe("button", {
            ref_for: !0,
            ref: (ne) => R(ne, ee, 2),
            type: "button",
            class: be({
              dp__btn: !0,
              dp__inc_dec_button: !t(i).timePickerInline,
              dp__inc_dec_button_inline: t(i).timePickerInline,
              dp__tp_inline_btn_bottom: t(i).timePickerInline,
              dp__inc_dec_button_disabled: J.value(S.type),
              "dp--hidden-el": L.value
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
              a.$slots["tp-inline-arrow-down"] ? oe(a.$slots, "tp-inline-arrow-down", { key: 0 }) : (O(), K(ke, { key: 1 }, [
                v[4] || (v[4] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                v[5] || (v[5] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (O(), K(ke, { key: 0 }, [
              a.$slots["arrow-down"] ? oe(a.$slots, "arrow-down", { key: 0 }) : U("", !0),
              a.$slots["arrow-down"] ? U("", !0) : (O(), Se(t(ja), { key: 1 }))
            ], 64))
          ], 42, ol)
        ], 64))
      ], 10, nl))), 128)),
      t(i).is24 ? U("", !0) : (O(), K("div", sl, [
        a.$slots["am-pm-button"] ? oe(a.$slots, "am-pm-button", {
          key: 0,
          toggle: x,
          value: C.value
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
          "data-compact": ae.value,
          onClick: x,
          onKeydown: v[0] || (v[0] = (S) => t(P)(S, () => x(), !0))
        }, Ke(C.value), 41, ul))
      ])),
      (O(!0), K(ke, null, Ye(ge.value, (S, ee) => (O(), Se(Rt, {
        key: ee,
        name: t($)(q[S.type]),
        css: t(F)
      }, {
        default: we(() => [
          q[S.type] ? (O(), Se(jt, {
            key: 0,
            items: H(S.type),
            "is-last": t(B).autoApply && !t(k).keepActionRow,
            type: S.type,
            "aria-labels": t(A),
            "overlay-label": t(A).timeOverlay?.(S.type),
            onSelected: (ne) => G(S.type, ne),
            onToggle: (ne) => T(S.type),
            onResetFlow: v[1] || (v[1] = (ne) => a.$emit("reset-flow"))
          }, Le({
            "button-icon": we(() => [
              a.$slots["clock-icon"] ? oe(a.$slots, "clock-icon", { key: 0 }) : U("", !0),
              a.$slots["clock-icon"] ? U("", !0) : (O(), Se(Da(t(i).timePickerInline ? t(Lt) : t(Ha)), { key: 1 }))
            ]),
            _: 2
          }, [
            a.$slots[`${S.type}-overlay-value`] ? {
              name: "item",
              fn: we(({ item: ne }) => [
                oe(a.$slots, `${S.type}-overlay-value`, {
                  text: ne.text,
                  value: ne.value
                })
              ]),
              key: "0"
            } : void 0,
            a.$slots[`${S.type}-overlay-header`] ? {
              name: "header",
              fn: we(() => [
                oe(a.$slots, `${S.type}-overlay-header`, {
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
}), cl = ["data-dp-mobile"], dl = ["aria-label", "tabindex"], vl = ["role", "aria-label", "tabindex"], fl = ["aria-label"], Qa = /* @__PURE__ */ We({
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
    } = $e(), { isModelAuto: u } = je(), { checkKeyDown: M, findFocusableEl: i } = Fe(), { buildMatrix: P, setTimePicker: f } = gt(), { transitionName: Y, showTransition: V } = Ht(), { hideNavigationButtons: $ } = na(), { mapSlots: F } = yt(), { isMobile: q } = ta(), C = ht(), y = Re("overlay"), c = Re("open-tp-btn"), D = Re("close-tp-btn"), L = Re("tp-input"), Q = de(!1);
    Ne(() => {
      r("mount"), !l.timePicker && l.arrowNavigation ? P([Qe(c.value)], "time") : f(!0, l.timePicker);
    });
    const te = j(() => I.value.enabled && l.modelAuto ? u(n.value) : !0), Z = de(!1), ve = (se) => ({
      hours: Array.isArray(o.hours) ? o.hours[se] : o.hours,
      minutes: Array.isArray(o.minutes) ? o.minutes[se] : o.minutes,
      seconds: Array.isArray(o.seconds) ? o.seconds[se] : o.seconds
    }), he = j(() => {
      const se = [];
      if (I.value.enabled)
        for (let H = 0; H < 2; H++)
          se.push(ve(H));
      else
        se.push(ve(0));
      return se;
    }), N = (se, H = !1, E = "") => {
      H || r("reset-flow"), Z.value = se, s("overlay-toggle", { open: se, overlay: qe.time }), l.arrowNavigation && f(se), Ge(() => {
        E !== "" && L.value?.[0] && L.value[0].openChildCmp(E);
      });
    }, J = j(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: l.autoApply && !A.value.keepActionRow
    })), W = F(C, "timePicker"), re = (se, H, E) => I.value.enabled ? H === 0 ? [se, he.value[1][E]] : [he.value[0][E], se] : se, z = (se) => {
      r("update:hours", se);
    }, ae = (se) => {
      r("update:minutes", se);
    }, fe = (se) => {
      r("update:seconds", se);
    }, ge = () => {
      if (y.value && !B.value.enabled && !o.noOverlayFocus) {
        const se = i(y.value);
        se && se.focus({ preventScroll: !0 });
      }
    }, De = (se) => {
      Q.value = !1, s("overlay-toggle", { open: !1, overlay: se });
    }, Ae = (se) => {
      Q.value = !0, s("overlay-toggle", { open: !0, overlay: se });
    };
    return w({ toggleTimePicker: N }), (se, H) => (O(), K("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(q)
    }, [
      !t(l).timePicker && !t(k).timePickerInline ? Xt((O(), K("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        class: be({ ...J.value, "dp--hidden-el": Z.value }),
        "aria-label": t(d)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: H[0] || (H[0] = (E) => t(M)(E, () => N(!0))),
        onClick: H[1] || (H[1] = (E) => N(!0))
      }, [
        se.$slots["clock-icon"] ? oe(se.$slots, "clock-icon", { key: 0 }) : U("", !0),
        se.$slots["clock-icon"] ? U("", !0) : (O(), Se(t(Ha), { key: 1 }))
      ], 42, dl)), [
        [Zt, !t($)("time")]
      ]) : U("", !0),
      tt(Rt, {
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
              se.$slots["time-picker-overlay"] ? oe(se.$slots, "time-picker-overlay", {
                key: 0,
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: z,
                setMinutes: ae,
                setSeconds: fe
              }) : U("", !0),
              se.$slots["time-picker-overlay"] ? U("", !0) : (O(), K("div", {
                key: 1,
                class: be(t(k).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
              }, [
                (O(!0), K(ke, null, Ye(he.value, (E, ce) => Xt((O(), Se(il, et({ key: ce }, { ref_for: !0 }, {
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
                  "validate-time": (ue, b) => e.validateTime(ue, re(b, ce, ue)),
                  "onUpdate:hours": (ue) => z(re(ue, ce, "hours")),
                  "onUpdate:minutes": (ue) => ae(re(ue, ce, "minutes")),
                  "onUpdate:seconds": (ue) => fe(re(ue, ce, "seconds")),
                  onMounted: ge,
                  onOverlayClosed: De,
                  onOverlayOpened: Ae
                }), Le({ _: 2 }, [
                  Ye(t(W), (ue, b) => ({
                    name: ue,
                    fn: we((T) => [
                      oe(se.$slots, ue, et({ ref_for: !0 }, T))
                    ])
                  }))
                ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [Zt, ce === 0 ? !0 : te.value]
                ])), 128))
              ], 2)),
              !t(l).timePicker && !t(k).timePickerInline ? Xt((O(), K("button", {
                key: 2,
                ref: "close-tp-btn",
                type: "button",
                class: be({ ...J.value, "dp--hidden-el": Q.value }),
                "aria-label": t(d)?.closeTimePicker,
                tabindex: "0",
                onKeydown: H[2] || (H[2] = (E) => t(M)(E, () => N(!1))),
                onClick: H[3] || (H[3] = (E) => N(!1))
              }, [
                se.$slots["calendar-icon"] ? oe(se.$slots, "calendar-icon", { key: 0 }) : U("", !0),
                se.$slots["calendar-icon"] ? U("", !0) : (O(), Se(t(Lt), { key: 1 }))
              ], 42, fl)), [
                [Zt, !t($)("time")]
              ]) : U("", !0)
            ], 2)
          ], 14, vl)) : U("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 8, cl));
  }
}), Ga = (e) => {
  const {
    getDate: w,
    modelValue: p,
    time: r,
    rootProps: o,
    defaults: { range: s, timeConfig: n }
  } = $e(), { isDateEqual: l, setTime: d } = je(), B = (C, y) => Array.isArray(r[C]) ? r[C][y] : r[C], A = (C) => n.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[C] : r.seconds : 0, I = (C, y) => C ? d(
    y !== void 0 ? { hours: B("hours", y), minutes: B("minutes", y), seconds: A(y) } : { hours: r.hours, minutes: r.minutes, seconds: A() },
    C
  ) : Cn(w(), A(y)), k = (C, y) => {
    r[C] = y;
  }, u = j(() => o.modelAuto && s.value.enabled ? Array.isArray(p.value) ? p.value.length > 1 : !1 : s.value.enabled), M = (C, y) => {
    const c = Object.fromEntries(
      Object.keys(r).map((D) => D === C ? [D, y] : [D, r[D]].slice())
    );
    if (u.value && !s.value.disableTimeRangeValidation) {
      const D = (Q) => p.value ? d(
        {
          hours: c.hours[Q],
          minutes: c.minutes[Q],
          seconds: c.seconds[Q]
        },
        p.value[Q]
      ) : null, L = (Q) => Rn(p.value[Q], 0);
      return !(l(D(0), D(1)) && (_t(D(0), L(1)) || $t(D(1), L(0))));
    }
    return !0;
  }, i = (C, y) => {
    M(C, y) && (k(C, y), e && e());
  }, P = (C) => {
    i("hours", C);
  }, f = (C) => {
    i("minutes", C);
  }, Y = (C) => {
    i("seconds", C);
  }, V = (C, y) => {
    P(C.hours), f(C.minutes), Y(C.seconds), p.value && y(p.value);
  }, $ = (C) => {
    if (C) {
      const y = Array.isArray(C), c = y ? [+C[0].hours, +C[1].hours] : +C.hours, D = y ? [+C[0].minutes, +C[1].minutes] : +C.minutes, L = y ? [+(C[0].seconds ?? 0), +(C[1].seconds ?? 0)] : +(C.seconds ?? 0);
      k("hours", c), k("minutes", D), n.value.enableSeconds && k("seconds", L);
    }
  }, F = (C, y) => {
    const c = {
      hours: Array.isArray(r.hours) ? r.hours[C] : r.hours,
      disabledArr: []
    };
    return (y || y === 0) && (c.hours = y), Array.isArray(o.disabledTimes) && (c.disabledArr = s.value.enabled && Array.isArray(o.disabledTimes[C]) ? o.disabledTimes[C] : o.disabledTimes), c;
  }, q = j(() => (C, y) => {
    if (Array.isArray(o.disabledTimes)) {
      const { disabledArr: c, hours: D } = F(C, y), L = c.filter((Q) => +Q.hours === D);
      return L[0]?.minutes === "*" ? { hours: [D], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: L?.map((Q) => +Q.minutes) ?? [],
        seconds: L?.map((Q) => Q.seconds ? +Q.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: k,
    updateHours: P,
    updateMinutes: f,
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
  Kt(() => {
    o.isTextInputDate && F();
  });
  const { updateTimeValues: B, getSetDateTime: A, assignTime: I, assignStartTime: k, disabledTimesConfig: u, validateTime: M } = Ga(i);
  function i() {
    e("update-flow-step");
  }
  const P = (y) => {
    const { hours: c, minutes: D, seconds: L } = y;
    return { hours: +c, minutes: +D, seconds: L ? +L : 0 };
  }, f = () => {
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
      const [y, c] = f();
      r.value = [A(y, 0), A(c, 1)];
    } else
      r.value = A(f());
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
    }), toggleTimePicker: (i, P = !1, f = "") => {
      l.value?.toggleTimePicker(i, P, f);
    } }), (i, P) => (O(), Se(ra, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: we(({ wrapClass: f }) => [
        Pe("div", {
          class: be(f)
        }, [
          tt(Qa, et({ ref: "time-input" }, i.$props, {
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
                oe(i.$slots, Y, Je(ot($)))
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
    return o.value.months.includes(Te(M)) ? (M = u ? Dt(k, 1) : Wt(k, 1), l(M, u)) : M;
  }, d = (k, u) => {
    let M = k;
    return o.value.years.includes(ye(M)) ? (M = u ? Ea(k, 1) : Fa(k, 1), d(M, u)) : M;
  }, B = (k, u = !1) => {
    const M = _e(p(), { month: e.month, year: e.year });
    let i = k ? Dt(M, 1) : Wt(M, 1);
    r.disableYearSelect && (i = lt(i, e.year));
    let P = Te(i), f = ye(i);
    o.value.months.includes(P) && (i = l(i, k), P = Te(i), f = ye(i)), o.value.years.includes(f) && (i = d(i, k), f = ye(i)), s(P, f, k, r.preventMinMaxNavigation) && A(P, f, u);
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
  emits: ["mount", "reset-flow", "update-month-year", "overlay-opened"],
  setup(e, { expose: w, emit: p }) {
    const r = p, o = e, {
      rootEmit: s,
      rootProps: n,
      modelValue: l,
      defaults: { ariaLabels: d, filters: B, config: A, highlight: I, safeDates: k, ui: u }
    } = $e(), { transitionName: M, showTransition: i } = Ht(), { showLeftIcon: P, showRightIcon: f } = na(), { buildMatrix: Y } = gt(), { handleMonthYearChange: V, isDisabled: $, updateMonthYear: F } = hl(o, r), { getMaxMonth: q, getMinMonth: C, getYearFromDate: y, groupListAndMap: c, checkHighlightYear: D, checkHighlightMonth: L } = je(), { checkKeyDown: Q } = Fe(), { formatYear: te } = bt(), { checkMinMaxValue: Z } = at(), ve = de(!1), he = de(!1), N = de(!1), J = de([null, null, null, null]);
    Ne(() => {
      r("mount");
    });
    const W = (T) => ({
      get: () => o[T],
      set: (ie) => {
        const le = T === rt.month ? rt.year : rt.month;
        r("update-month-year", { [T]: ie, [le]: o[le] }), T === rt.month ? se(!0) : H(!0);
      }
    }), re = j(W(rt.month)), z = j(W(rt.year)), ae = j(() => (T) => ({
      month: o.month,
      year: o.year,
      items: T === rt.month ? o.months : o.years,
      instance: o.instance,
      updateMonthYear: F,
      toggle: T === rt.month ? se : H
    })), fe = j(() => {
      const T = o.months.find((ie) => ie.value === o.month);
      return T || { text: "", value: 0 };
    }), ge = j(() => c(o.months, (T) => {
      const ie = o.month === T.value, le = Z(
        T.value,
        C(o.year, k.value.minDate),
        q(o.year, k.value.maxDate)
      ) || B.value.months.includes(T.value), h = L(I.value, T.value, o.year);
      return { active: ie, disabled: le, highlighted: h };
    })), De = j(() => c(o.years, (T) => {
      const ie = o.year === T.value, le = Z(
        T.value,
        y(k.value.minDate),
        y(k.value.maxDate)
      ) || B.value.years.includes(T.value), h = D(I.value, T.value);
      return { active: ie, disabled: le, highlighted: h };
    })), Ae = (T, ie, le) => {
      le === void 0 ? T.value = !T.value : T.value = le, T.value ? (N.value = !0, r("overlay-opened", ie)) : (N.value = !1, s("overlay-toggle", { open: !1, overlay: ie }));
    }, se = (T = !1, ie) => {
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
        toggle: se,
        modelValue: re.value,
        updateModelValue: (T) => re.value = T,
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
        text: te(o.year),
        showSelectionGrid: he.value,
        items: De.value,
        ariaLabel: d.value?.openYearsOverlay,
        overlayLabel: d.value.yearPicker?.(!0) ?? void 0
      }
    ]), b = j(() => n.disableYearSelect ? [ue.value[0]] : n.yearFirst ? [...ue.value].reverse() : ue.value);
    return w({
      toggleMonthPicker: se,
      toggleYearPicker: H,
      handleMonthYearChange: V
    }), (T, ie) => (O(), K("div", gl, [
      T.$slots["month-year"] ? (O(), K("div", yl, [
        oe(T.$slots, "month-year", Je(ot({
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
          oe(T.$slots, "top-extra", { value: t(l) })
        ])) : U("", !0),
        Pe("div", kl, [
          t(P)(e.instance) && !t(n).vertical ? (O(), Se(Et, {
            key: 0,
            "aria-label": t(d)?.prevMonth,
            disabled: t($)(!1),
            class: be(t(u)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: ie[0] || (ie[0] = (le) => t(V)(!1, !0)),
            onSetRef: ie[1] || (ie[1] = (le) => ce(le, 0))
          }, {
            default: we(() => [
              T.$slots["arrow-left"] ? oe(T.$slots, "arrow-left", { key: 0 }) : U("", !0),
              T.$slots["arrow-left"] ? U("", !0) : (O(), Se(t(Wa), { key: 1 }))
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
                class: be(["dp__btn dp__month_year_select", { "dp--hidden-el": N.value }]),
                "aria-label": `${le.text}-${le.ariaLabel}`,
                "data-test-id": `${le.type}-toggle-overlay-${e.instance}`,
                onClick: (m) => le.toggle(!1),
                onKeydown: (m) => t(Q)(m, () => le.toggle(), !0)
              }, [
                T.$slots[le.type] ? oe(T.$slots, le.type, {
                  key: 0,
                  text: le.text,
                  value: o[le.type]
                }) : U("", !0),
                T.$slots[le.type] ? U("", !0) : (O(), K(ke, { key: 1 }, [
                  dt(Ke(le.text), 1)
                ], 64))
              ], 42, wl),
              tt(Rt, {
                name: t(M)(le.showSelectionGrid),
                css: t(i)
              }, {
                default: we(() => [
                  le.showSelectionGrid ? (O(), Se(jt, {
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
                      T.$slots["calendar-icon"] ? oe(T.$slots, "calendar-icon", { key: 0 }) : U("", !0),
                      T.$slots["calendar-icon"] ? U("", !0) : (O(), Se(t(Lt), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    T.$slots[`${le.type}-overlay-value`] ? {
                      name: "item",
                      fn: we(({ item: m }) => [
                        oe(T.$slots, `${le.type}-overlay-value`, {
                          text: m.text,
                          value: m.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    T.$slots[`${le.type}-overlay`] ? {
                      name: "overlay",
                      fn: we(() => [
                        oe(T.$slots, `${le.type}-overlay`, et({ ref_for: !0 }, ae.value(le.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    T.$slots[`${le.type}-overlay-header`] ? {
                      name: "header",
                      fn: we(() => [
                        oe(T.$slots, `${le.type}-overlay-header`, {
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
          t(P)(e.instance) && t(n).vertical ? (O(), Se(Et, {
            key: 1,
            "aria-label": t(d)?.prevMonth,
            "el-name": "action-prev",
            disabled: t($)(!1),
            class: be(t(u)?.navBtnPrev),
            onActivate: ie[2] || (ie[2] = (le) => t(V)(!1, !0))
          }, {
            default: we(() => [
              T.$slots["arrow-up"] ? oe(T.$slots, "arrow-up", { key: 0 }) : U("", !0),
              T.$slots["arrow-up"] ? U("", !0) : (O(), Se(t(Ka), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : U("", !0),
          t(f)(e.instance) ? (O(), Se(Et, {
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
              T.$slots[t(n).vertical ? "arrow-down" : "arrow-right"] ? oe(T.$slots, t(n).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : U("", !0),
              T.$slots[t(n).vertical ? "arrow-down" : "arrow-right"] ? U("", !0) : (O(), Se(Da(t(n).vertical ? t(ja) : t(La)), { key: 1 }))
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
    } = $e(), { buildMultiLevelMatrix: i } = gt(), { isDateAfter: P, isDateEqual: f, resetDateTime: Y, getCellId: V } = je(), { checkKeyDown: $, checkStopPropagation: F, isTouchDevice: q } = Fe(), { formatWeekDay: C } = bt(), y = Re("calendar-wrap"), c = Re("active-tooltip"), D = de([]), L = de(null), Q = de(!0), te = de(!1), Z = de(""), ve = de({
      bottom: "",
      left: "",
      transform: ""
    }), he = de({ left: "50%" });
    pn(y, {
      onSwipeEnd: (g, R) => {
        B.value.noSwipe || (l.vertical ? (R === "up" || R === "down") && r("handle-swipe", R === "up" ? "left" : "right") : (R === "left" || R === "right") && r("handle-swipe", R === "right" ? "left" : "right"));
      }
    });
    const N = j(() => l.calendar ? l.calendar(o.mappedDates) : o.mappedDates), J = j(() => l.dayNames ? Array.isArray(l.dayNames) ? l.dayNames : l.dayNames() : x());
    Ne(() => {
      r("mount", { cmp: "calendar", dayRefs: D.value }), B.value.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", b, { passive: !1 });
    }), St(() => {
      B.value.monthChangeOnScroll && y.value && y.value.removeEventListener("wheel", b);
    });
    const W = (g) => g ? l.vertical ? "vNext" : "next" : l.vertical ? "vPrevious" : "previous", re = (g, R) => {
      if (l.transitions) {
        const G = Y(_e(s(), { month: o.month, year: o.year }));
        Z.value = P(Y(_e(s(), { month: g, year: R })), G) ? d.value[W(!0)] : d.value[W(!1)], Q.value = !1, Ge(() => {
          Q.value = !0;
        });
      }
    }, z = j(
      () => ({
        ...M.value.calendar
      })
    ), ae = (g) => ({ type: "dot", ...g }), fe = j(() => (g) => {
      const R = ae(g);
      return {
        dp__marker_dot: R.type === "dot",
        dp__marker_line: R.type === "line"
      };
    }), ge = j(() => (g) => f(g, L.value)), De = j(() => ({
      dp__calendar: !0,
      dp__calendar_next: I.value.count > 0 && o.instance !== 0
    })), Ae = j(() => (g) => l.hideOffsetDates ? g.current : !0), se = async (g, R) => {
      const { width: G, height: a } = g.getBoundingClientRect();
      L.value = R.value;
      let v = { left: `${G / 2}px` }, S = -50;
      if (await Ge(), c.value?.[0]) {
        const { left: ee, width: ne } = c.value[0].getBoundingClientRect();
        ee < 0 && (v = { left: "0" }, S = 0, he.value.left = `${G / 2}px`), globalThis.innerWidth < ee + ne && (v = { right: "0" }, S = 0, he.value.left = `${ne - G / 2}px`);
      }
      ve.value = {
        bottom: `${a}px`,
        ...v,
        transform: `translateX(${S}%)`
      };
    }, H = async (g, R, G) => {
      const a = Qe(D.value?.[R]?.[G]);
      a && (g.marker?.customPosition && g.marker?.tooltip?.length ? ve.value = g.marker.customPosition(a) : await se(a, g), n("tooltip-open", g.marker));
    }, E = async (g, R, G) => {
      if (te.value && u.value.enabled && u.value.dragSelect)
        return r("select-date", g);
      if (r("set-hover-date", g), g.marker?.tooltip?.length) {
        if (l.hideOffsetDates && !g.current) return;
        await H(g, R, G);
      }
    }, ce = (g) => {
      L.value && (L.value = null, ve.value = structuredClone({ bottom: "", left: "", transform: "" }), n("tooltip-close", g.marker));
    }, ue = (g, R, G) => {
      g && (Array.isArray(D.value[R]) ? D.value[R][G] = g : D.value[R] = [g]), l.arrowNavigation && i(D.value, "calendar");
    }, b = (g) => {
      B.value.monthChangeOnScroll && (g.preventDefault(), r("handle-scroll", g));
    }, T = (g) => k.value ? k.value.type === "local" ? Yn(g.value, {
      weekStartsOn: +l.weekStart,
      locale: l.locale
    }) : k.value.type === "iso" ? On(g.value) : typeof k.value.type == "function" ? k.value.type(g.value) : "" : "", ie = (g) => {
      const R = g[0];
      return k.value?.hideOnOffsetDates ? g.some((G) => G.current) ? T(R) : "" : T(R);
    }, le = (g, R, G = !0) => {
      !G && q() || (!u.value.enabled || B.value.allowPreventDefault) && (F(g, B.value), r("select-date", R));
    }, h = (g) => {
      F(g, B.value);
    }, m = (g) => {
      u.value.enabled && u.value.dragSelect ? (te.value = !0, r("select-date", g)) : u.value.enabled && r("select-date", g);
    }, x = () => {
      const R = [1, 2, 3, 4, 5, 6, 7].map((v) => C(v)), G = R.slice(0, +l.weekStart), a = R.slice(+l.weekStart + 1, R.length);
      return [R[+l.weekStart]].concat(...a).concat(...G);
    };
    return w({ triggerTransition: re }), (g, R) => (O(), K("div", {
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
            g.$slots["calendar-header"] ? oe(g.$slots, "calendar-header", {
              key: 0,
              day: G,
              index: a
            }) : U("", !0),
            g.$slots["calendar-header"] ? U("", !0) : (O(), K(ke, { key: 1 }, [
              dt(Ke(G), 1)
            ], 64))
          ], 8, Al))), 128))
        ]),
        R[2] || (R[2] = Pe("div", { class: "dp__calendar_header_separator" }, null, -1)),
        tt(Rt, {
          name: Z.value,
          css: !!t(d)
        }, {
          default: we(() => [
            Q.value ? (O(), K("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: R[1] || (R[1] = (G) => te.value = !1)
            }, [
              (O(!0), K(ke, null, Ye(N.value, (G, a) => (O(), K("div", {
                key: a,
                class: "dp__calendar_row",
                role: "row"
              }, [
                t(k) ? (O(), K("div", Pl, [
                  Pe("div", Tl, Ke(ie(G.days)), 1)
                ])) : U("", !0),
                (O(!0), K(ke, null, Ye(G.days, (v, S) => (O(), K("div", {
                  id: t(V)(v.value),
                  ref_for: !0,
                  ref: (ee) => ue(ee, a, S),
                  key: S + a,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (v.classData.dp__active_date || v.classData.dp__range_start || v.classData.dp__range_end) ?? void 0,
                  "aria-disabled": v.classData.dp__cell_disabled || void 0,
                  "aria-label": t(A)?.day?.(v),
                  tabindex: !v.current && t(l).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(V)(v.value),
                  onClick: Nt((ee) => le(ee, v), ["prevent"]),
                  onTouchend: (ee) => le(ee, v, !1),
                  onKeydown: (ee) => t($)(ee, () => g.$emit("select-date", v)),
                  onMouseenter: (ee) => E(v, a, S),
                  onMouseleave: (ee) => ce(v),
                  onMousedown: (ee) => m(v),
                  onMouseup: R[0] || (R[0] = (ee) => te.value = !1)
                }, [
                  Pe("div", {
                    class: be(["dp__cell_inner", v.classData])
                  }, [
                    g.$slots.day && Ae.value(v) ? oe(g.$slots, "day", {
                      key: 0,
                      day: +v.text,
                      date: v.value
                    }) : U("", !0),
                    g.$slots.day ? U("", !0) : (O(), K(ke, { key: 1 }, [
                      dt(Ke(v.text), 1)
                    ], 64)),
                    v.marker && Ae.value(v) ? (O(), K(ke, { key: 2 }, [
                      g.$slots.marker ? oe(g.$slots, "marker", {
                        key: 0,
                        marker: v.marker,
                        day: +v.text,
                        date: v.value
                      }) : (O(), K("div", {
                        key: 1,
                        class: be(fe.value(v.marker)),
                        style: Xe(v.marker.color ? { backgroundColor: v.marker.color } : {})
                      }, null, 6))
                    ], 64)) : U("", !0),
                    ge.value(v.value) ? (O(), K("div", {
                      key: 3,
                      ref_for: !0,
                      ref: "active-tooltip",
                      class: "dp__marker_tooltip",
                      style: Xe(ve.value)
                    }, [
                      v.marker?.tooltip ? (O(), K("div", {
                        key: 0,
                        class: "dp__tooltip_content",
                        onClick: h
                      }, [
                        (O(!0), K(ke, null, Ye(v.marker.tooltip, (ee, ne) => (O(), K("div", {
                          key: ne,
                          class: "dp__tooltip_text"
                        }, [
                          g.$slots["marker-tooltip"] ? oe(g.$slots, "marker-tooltip", {
                            key: 0,
                            tooltip: ee,
                            day: v.value
                          }) : U("", !0),
                          g.$slots["marker-tooltip"] ? U("", !0) : (O(), K(ke, { key: 1 }, [
                            Pe("div", {
                              class: "dp__tooltip_mark",
                              style: Xe(ee.color ? { backgroundColor: ee.color } : {})
                            }, null, 4),
                            Pe("div", null, Ke(ee.text), 1)
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
    defaults: { multiCalendars: f, startTime: Y, range: V, config: $, safeDates: F, multiDates: q, timeConfig: C, flow: y }
  } = $e(), { validateMonthYearInRange: c, isDisabled: D, isDateRangeAllowed: L, checkMinMaxRange: Q } = at(), { updateTimeValues: te, getSetDateTime: Z, assignTime: ve, assignStartTime: he, validateTime: N, disabledTimesConfig: J } = Ga(r), { formatDay: W } = bt(), { resetDateTime: re, setTime: z, isDateBefore: ae, isDateEqual: fe, getDaysInBetween: ge } = je(), { checkRangeAutoApply: De, getRangeWithFixedDate: Ae, handleMultiDatesSelect: se, setPresetDate: H } = la(), { getMapDate: E } = Fe();
  Kt(() => h(P.isTextInputDate));
  const ce = (_) => !$.value.keepViewOnOffsetClick || _ ? !0 : !n.value, ue = (_, X, pe, Me = !1) => {
    ce(Me) && (B.value[_] ??= B.value[_] = { month: 0, year: 0 }, B.value[_].month = X ?? B.value[_]?.month, B.value[_].year = pe ?? B.value[_]?.year);
  }, b = () => {
    M.autoApply && w("select-date");
  }, T = () => {
    Y.value && he(Y.value);
  };
  Ne(() => {
    u.value || (Ce(), T()), h(!0), M.focusStartDate && M.startDate && Ce();
  });
  const ie = j(() => y.value?.steps?.length && !y.value?.partial ? e.flowStep === y.value.steps.length : !0), le = () => {
    M.autoApply && ie.value && w("auto-apply", y.value?.partial ? e.flowStep !== y.value?.steps?.length : !1);
  }, h = (_ = !1) => {
    if (u.value)
      return Array.isArray(u.value) ? (o.value = u.value, S(_)) : R(u.value, _);
    if (f.value.count && _ && !M.startDate)
      return g(l(), _);
  }, m = () => Array.isArray(u.value) && V.value.enabled ? Te(u.value[0]) === Te(u.value[1] ?? u.value[0]) : !1, x = (_) => {
    const X = Dt(_, 1);
    return { month: Te(X), year: ye(X) };
  }, g = (_ = l(), X = !1) => {
    if ((!f.value.count || !f.value.static || X) && ue(0, Te(_), ye(_)), f.value.count && (!u.value || m() || !f.value.solo) && (!f.value.solo || X))
      for (let pe = 1; pe < f.value.count; pe++) {
        const Me = _e(l(), { month: A.value(pe - 1), year: I.value(pe - 1) }), Be = Na(Me, { months: 1 });
        B.value[pe] = { month: Te(Be), year: ye(Be) };
      }
  }, R = (_, X) => {
    g(_), ve("hours", ut(_)), ve("minutes", vt(_)), ve("seconds", pt(_)), f.value.count && X && Ve();
  }, G = (_) => {
    if (f.value.count) {
      if (f.value.solo) return 0;
      const X = Te(_[0]), pe = Te(_[1]);
      return Math.abs(pe - X) < f.value.count ? 0 : 1;
    }
    return 1;
  }, a = (_, X) => {
    _[1] && V.value.showLastInRange ? g(_[G(_)], X) : g(_[0], X);
    const pe = (Me, Be) => [
      Me(_[0]),
      _?.[1] ? Me(_[1]) : k[Be][1]
    ];
    ve("hours", pe(ut, "hours")), ve("minutes", pe(vt, "minutes")), ve("seconds", pe(pt, "seconds"));
  }, v = (_, X) => {
    if ((V.value.enabled || M.weekPicker) && !q.value.enabled)
      return a(_, X);
    if (q.value.enabled && X) {
      const pe = _[_.length - 1];
      return R(pe, X);
    }
  }, S = (_) => {
    const X = u.value;
    v(X, _), f.value.count && f.value.solo && Ve();
  }, ee = (_, X) => {
    const pe = _e(l(), { month: A.value(X), year: I.value(X) }), Me = _ < 0 ? Dt(pe, 1) : Wt(pe, 1);
    c(Te(Me), ye(Me), _ < 0, M.preventMinMaxNavigation) && (ue(X, Te(Me), ye(Me)), d("update-month-year", { instance: X, month: Te(Me), year: ye(Me) }), f.value.count && !f.value.solo && ne(X), p());
  }, ne = (_) => {
    for (let X = _ - 1; X >= 0; X--) {
      const pe = Wt(_e(l(), { month: A.value(X + 1), year: I.value(X + 1) }), 1);
      ue(X, Te(pe), ye(pe));
    }
    for (let X = _ + 1; X <= f.value.count - 1; X++) {
      const pe = Dt(_e(l(), { month: A.value(X - 1), year: I.value(X - 1) }), 1);
      ue(X, Te(pe), ye(pe));
    }
  }, Ve = () => {
    if (Array.isArray(u.value) && u.value.length === 2) {
      const _ = l(l(u.value[1] ?? Dt(u.value[0], 1))), [X, pe] = [Te(u.value[0]), ye(u.value[0])], [Me, Be] = [Te(u.value[1]), ye(u.value[1])];
      (X !== Me || X === Me && pe !== Be) && f.value.solo && ue(1, Te(_), ye(_));
    } else u.value && !Array.isArray(u.value) && (ue(0, Te(u.value), ye(u.value)), g(l()));
  }, Ce = () => {
    M.startDate && (ue(0, Te(l(M.startDate)), ye(l(M.startDate))), f.value.count && ne(0));
  }, kt = (_, X) => {
    if ($.value.monthChangeOnScroll) {
      const pe = Date.now() - s.value.getTime(), Me = Math.abs(_.deltaY);
      let Be = 500;
      Me > 1 && (Be = 100), Me > 100 && (Be = 0), pe > Be && (s.value = /* @__PURE__ */ new Date(), ee(
        $.value.monthChangeOnScroll === "inverse" ? _.deltaY : -_.deltaY,
        X
      ));
    }
  }, zt = (_, X, pe = !1) => {
    $.value.monthChangeOnArrows && M.vertical === pe && Ct(_, X);
  }, Ct = (_, X) => {
    ee(_ === "right" ? -1 : 1, X);
  }, oa = (_) => {
    if (F.value.markers)
      return E(_.value, F.value.markers);
  }, sa = (_, X) => {
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
  }, ua = (_, X, pe, Me) => {
    if (M.sixWeeks && _.length < 6) {
      const Be = 6 - _.length, ft = (X.getDay() + 7 - Me) % 7, qt = 6 - (pe.getDay() + 7 - Me) % 7, [xt, ma] = sa(ft, qt);
      for (let wt = 1; wt <= Be; wt++)
        if (ma ? !!(wt % 2) == xt : xt) {
          const Qt = _[0].days[0], pa = Yt(mt(Qt.value, -7), Te(X));
          _.unshift({ days: pa });
        } else {
          const Qt = _[_.length - 1], pa = Qt.days[Qt.days.length - 1], on = Yt(mt(pa.value, 1), Te(X));
          _.push({ days: on });
        }
    }
    return _;
  }, Yt = (_, X) => {
    const pe = l(_), Me = [];
    for (let Be = 0; Be < 7; Be++) {
      const ft = mt(pe, Be), Ot = Te(ft) !== X;
      Me.push({
        text: M.hideOffsetDates && Ot ? "" : W(ft),
        value: ft,
        current: !Ot,
        classData: {}
      });
    }
    return Me;
  }, ia = (_, X) => {
    const pe = [], Me = l(new Date(X, _)), Be = l(new Date(X, _ + 1, 0)), ft = M.weekStart, Ot = Ma(Me, { weekStartsOn: ft }), qt = (xt) => {
      const ma = Yt(xt, _);
      if (pe.push({ days: ma }), !pe[pe.length - 1].days.some((wt) => fe(l(wt.value), re(Be)))) {
        const wt = mt(xt, 7);
        qt(wt);
      }
    };
    return qt(Ot), ua(pe, Me, Be, ft);
  }, ca = (_) => {
    const X = z(
      { hours: k.hours, minutes: k.minutes, seconds: At() },
      l(_.value)
    );
    d("date-click", X), q.value.enabled ? se(X, q.value.limit) : u.value = X, r(), Ge().then(() => {
      le();
    });
  }, Ut = (_) => V.value.noDisabledRange ? ge(o.value[0], _).some((pe) => D(pe)) : !1, da = () => {
    o.value = u.value ? u.value.slice().filter((_) => !!_) : [], o.value.length === 2 && !(V.value.fixedStart || V.value.fixedEnd) && (o.value = []);
  }, va = (_, X) => {
    const pe = [l(_.value), mt(l(_.value), +V.value.autoRange)];
    L(pe) ? (X && me(_.value), o.value = pe) : d("invalid-date", _.value);
  }, me = (_) => {
    const X = Te(l(_)), pe = ye(l(_));
    if (ue(0, X, pe), f.value.count > 0)
      for (let Me = 1; Me < f.value.count; Me++) {
        const Be = x(
          _e(l(_), { year: I.value(Me - 1), month: A.value(Me - 1) })
        );
        ue(Me, Be.month, Be.year);
      }
  }, ze = (_) => {
    if (Ut(_.value) || !Q(_.value, u.value, V.value.fixedStart ? 0 : 1))
      return d("invalid-date", _.value);
    o.value = Ae(l(_.value));
  }, nt = (_, X) => {
    if (da(), V.value.autoRange) return va(_, X);
    if (V.value.fixedStart || V.value.fixedEnd) return ze(_);
    o.value[0] ? Q(l(_.value), u.value) && !Ut(_.value) ? ae(l(_.value), l(o.value[0])) ? (o.value.unshift(l(_.value)), d("range-end", o.value[0])) : (o.value[1] = l(_.value), d("range-end", o.value[1])) : d("invalid-date", _.value) : (o.value[0] = l(_.value), d("range-start", o.value[0]));
  }, At = (_ = !0) => C.value.enableSeconds ? Array.isArray(k.seconds) ? _ ? k.seconds[0] : k.seconds[1] : k.seconds : 0, it = (_) => {
    o.value[_] = z(
      {
        hours: k.hours[_],
        minutes: k.minutes[_],
        seconds: At(_ !== 1)
      },
      o.value[_]
    );
  }, fa = () => {
    o.value[0] && o.value[1] && +o.value?.[0] > +o.value?.[1] && (o.value.reverse(), d("range-start", o.value[0]), d("range-end", o.value[1]));
  }, Ja = () => {
    o.value.length && (o.value[0] && !o.value[1] ? it(0) : (it(0), it(1), r()), fa(), u.value = o.value.slice(), De(
      o.value,
      w,
      o.value.length < 2 || e.flowStep !== y.value?.steps?.length
    ));
  }, Xa = (_, X = !1) => {
    if (D(_.value) || !_.current && M.hideOffsetDates)
      return d("invalid-date", _.value);
    if (n.value = structuredClone(_), !V.value.enabled) return ca(_);
    Array.isArray(k.hours) && Array.isArray(k.minutes) && !q.value.enabled && (nt(_, X), Ja());
  }, Za = (_, X) => {
    ue(_, X.month, X.year, !0), f.value.count && !f.value.solo && ne(_), d("update-month-year", { instance: _, month: X.month, year: X.year }), p(f.value.solo ? _ : void 0);
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
    !V.value.enabled && !q.value.enabled ? u.value = _ : u.value && Array.isArray(u.value) && u.value[0] ? q.value.enabled ? u.value = [...u.value, _] : u.value = ae(_, u.value[0]) ? [_, u.value[0]] : [u.value[0], _] : u.value = [_], b();
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
    validateTime: N,
    getCalendarDays: ia,
    getMarker: oa,
    handleScroll: kt,
    handleSwipe: Ct,
    handleArrow: zt,
    selectDate: Xa,
    updateMonthYear: Za,
    presetDate: en,
    selectCurrentDate: an,
    updateTime: (_) => {
      const X = ln(_);
      te(_, nn), X && d(X, u.value[X === "range-start" ? 0 : 1]);
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
    modelValue: f
  } = $e(), { isDisabled: Y } = at(), V = de(null), $ = (h) => {
    !h.current && A.hideOffsetDates || (V.value = h.value);
  }, F = () => {
    V.value = null;
  }, q = (h) => Array.isArray(f.value) && P.value.enabled && f.value[0] && V.value ? h ? p(V.value, f.value[0]) : r(V.value, f.value[0]) : !0, C = (h, m) => {
    const x = () => f.value ? m ? f.value[0] || null : f.value[1] : null, g = f.value && Array.isArray(f.value) ? x() : null;
    return s(d(h.value), g);
  }, y = (h) => {
    const m = Array.isArray(f.value) ? f.value[0] : null;
    return h ? !r(V.value, m) : !0;
  }, c = (h, m = !0) => (P.value.enabled || A.weekPicker) && Array.isArray(f.value) && f.value.length === 2 ? A.hideOffsetDates && !h.current ? !1 : s(d(h.value), f.value[m ? 0 : 1]) : P.value.enabled ? C(h, m) && y(m) || s(h.value, Array.isArray(f.value) ? f.value[0] : null) && q(m) : !1, D = (h, m) => {
    if (Array.isArray(f.value) && f.value[0] && f.value.length === 1) {
      const x = s(h.value, V.value);
      return m ? p(f.value[0], h.value) && x : r(f.value[0], h.value) && x;
    }
    return !1;
  }, L = (h) => !f.value || A.hideOffsetDates && !h.current ? !1 : P.value.enabled ? A.modelAuto && Array.isArray(f.value) ? s(h.value, f.value[0] ?? B) : !1 : k.value.enabled && Array.isArray(f.value) ? f.value.some((m) => s(m, h.value)) : s(h.value, f.value ? f.value : B), Q = (h) => {
    if (P.value.autoRange || A.weekPicker) {
      if (V.value) {
        if (A.hideOffsetDates && !h.current) return !1;
        const m = mt(V.value, +P.value.autoRange), x = n(d(V.value), A.weekStart);
        return A.weekPicker ? s(x[1], d(h.value)) : s(m, d(h.value));
      }
      return !1;
    }
    return !1;
  }, te = (h) => {
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
  }, ve = (h) => o(f.value, V.value, h.value), he = () => A.modelAuto && Array.isArray(f.value) ? !!f.value[0] : !1, N = () => A.modelAuto ? e(f.value) : !0, J = (h) => {
    if (A.weekPicker) return !1;
    const m = P.value.enabled ? !c(h) && !c(h, !1) : !0;
    return !Y(h.value) && !L(h) && !(!h.current && A.hideOffsetDates) && m;
  }, W = (h) => P.value.enabled ? A.modelAuto ? he() && L(h) : !1 : L(h), re = (h) => M.value ? w(h.value, i.value.highlight) : !1, z = (h) => {
    const m = Y(h.value);
    return m && (typeof M.value == "function" ? !M.value(h.value, m) : !M.value.options.highlightDisabled);
  }, ae = (h) => typeof M.value == "function" ? M.value(h.value) : M.value.weekdays?.includes(h.value.getDay()), fe = (h) => (P.value.enabled || A.weekPicker) && (!(I.value.count > 0) || h.current) && N() && !(!h.current && A.hideOffsetDates) && !L(h) ? ve(h) : !1, ge = (h) => {
    if (Array.isArray(f.value) && f.value.length === 1) {
      const { before: m, after: x } = l(+P.value.maxRange, f.value[0]);
      return $t(h.value, m) || _t(h.value, x);
    }
    return !1;
  }, De = (h) => {
    if (Array.isArray(f.value) && f.value.length === 1) {
      const { before: m, after: x } = l(+P.value.minRange, f.value[0]);
      return o([m, x], f.value[0], h.value);
    }
    return !1;
  }, Ae = (h) => P.value.enabled && (P.value.maxRange || P.value.minRange) ? P.value.maxRange && P.value.minRange ? ge(h) || De(h) : P.value.maxRange ? ge(h) : De(h) : !1, se = (h) => {
    const { isRangeStart: m, isRangeEnd: x } = ue(h), g = P.value.enabled ? m || x : !1;
    return {
      dp__cell_offset: !h.current,
      dp__pointer: !A.disabled && !(!h.current && A.hideOffsetDates) && !Y(h.value) && !Ae(h),
      dp__cell_disabled: Y(h.value) || Ae(h),
      dp__cell_highlight: !z(h) && (re(h) || ae(h)) && !W(h) && !g && !Z(h) && !(fe(h) && A.weekPicker) && !x,
      dp__cell_highlight_active: !z(h) && (re(h) || ae(h)) && W(h),
      dp__today: !A.noToday && s(h.value, B) && h.current,
      "dp--past": r(h.value, B),
      "dp--future": p(h.value, B)
    };
  }, H = (h) => ({
    dp__active_date: W(h),
    dp__date_hover: J(h)
  }), E = (h) => {
    if (f.value && !Array.isArray(f.value)) {
      const m = n(f.value, A.weekStart);
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
    if (f.value && Array.isArray(f.value)) {
      const m = n(f.value[0], A.weekStart), x = f.value[1] ? n(f.value[1], A.weekStart) : [];
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
    const m = I.value.count > 0 ? h.current && c(h) && N() : c(h) && N(), x = I.value.count > 0 ? h.current && c(h, !1) && N() : c(h, !1) && N();
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
    dp__cell_auto_range: te(h),
    dp__cell_auto_range_start: Z(h),
    dp__cell_auto_range_end: Q(h)
  }), ie = (h) => P.value.enabled ? P.value.autoRange ? T(h) : A.modelAuto ? { ...H(h), ...b(h) } : A.weekPicker ? ce(h) : b(h) : A.weekPicker ? E(h) : H(h);
  return {
    setHoverDate: $,
    clearHoverDate: F,
    getDayClassData: (h) => A.hideOffsetDates && !h.current ? {} : {
      ...se(h),
      ...ie(h),
      [u.value.dayClass ? u.value.dayClass(h.value, f.value) : ""]: !0,
      ...u.value.calendarCell
    }
  };
}, Yl = { key: 0 }, Ol = /* @__PURE__ */ We({
  __name: "DatePicker",
  props: /* @__PURE__ */ xa({
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
      selectDate: f,
      updateMonthYear: Y,
      presetDate: V,
      selectCurrentDate: $,
      updateTime: F,
      assignMonthAndYear: q,
      setStartTime: C
    } = Rl(o, r, E, ce), y = ht(), { setHoverDate: c, getDayClassData: D, clearHoverDate: L } = Cl(), {
      getDate: Q,
      rootEmit: te,
      rootProps: Z,
      defaults: { multiCalendars: ve, timeConfig: he }
    } = $e(), { getYears: N, getMonths: J } = aa(), { getCellId: W } = je(), { mapSlots: re } = yt(), z = Re("calendar-header"), ae = Re("calendar"), fe = Re("time-picker"), ge = re(y, "calendar"), De = re(y, "monthYear"), Ae = re(y, "timePicker"), se = (g) => {
      r("mount", g);
    };
    st(
      ve,
      (g, R) => {
        g.count - R.count > 0 && q();
      },
      { deep: !0 }
    );
    const H = j(() => (g) => k(s.value(g), n.value(g)).map((R) => ({
      ...R,
      days: R.days.map((G) => (G.marker = u(G), G.classData = D(G), G))
    })));
    function E(g) {
      g || g === 0 ? ae.value?.[g]?.triggerTransition(s.value(g), n.value(g)) : ae.value?.forEach((R, G) => R?.triggerTransition(s.value(G), n.value(G)));
    }
    function ce() {
      r("update-flow-step");
    }
    const ue = (g, R, G = 0) => {
      z.value?.[G]?.toggleMonthPicker(g, R);
    }, b = (g, R, G = 0) => {
      z.value?.[G]?.toggleYearPicker(g, R);
    }, T = (g, R, G) => {
      fe.value?.toggleTimePicker(g, R, G);
    }, ie = (g, R) => {
      if (!Z.range) {
        const G = l.value ? l.value : A, a = R ? Q(R) : G, v = g ? Ma(a, { weekStartsOn: 1 }) : Ia(a, { weekStartsOn: 1 });
        f({
          value: v,
          current: Te(a) === s.value(0),
          text: "",
          classData: {}
        }), document.getElementById(W(v))?.focus();
      }
    }, le = (g) => {
      z.value?.[0]?.handleMonthYearChange(g, !0);
    }, h = (g) => {
      Y(0, { month: s.value(0), year: n.value(0) + (g ? 1 : -1), fromNav: !0 });
    }, m = (g) => {
      te("overlay-toggle", { open: !1, overlay: g }), r("focus-menu");
    };
    return w({
      clearHoverDate: L,
      presetDate: V,
      selectCurrentDate: $,
      handleArrow: M,
      updateMonthYear: Y,
      setStartTime: C,
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
        selectDate: f,
        presetDate: V
      }),
      changeMonth: le,
      changeYear: h,
      selectWeekDate: ie
    }), (g, R) => (O(), K(ke, null, [
      tt(ra, { collapse: e.collapse }, {
        default: we(({ instances: G, wrapClass: a }) => [
          (O(!0), K(ke, null, Ye(G, (v) => (O(), K("div", {
            key: v,
            class: be(a)
          }, [
            t(Z).hideMonthYearSelect ? U("", !0) : (O(), Se(Dl, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(J)(),
              years: t(N)(),
              month: t(s)(v),
              year: t(n)(v),
              instance: v,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: R[0] || (R[0] = (S) => se(t(Mt).header)),
              onResetFlow: R[1] || (R[1] = (S) => g.$emit("reset-flow")),
              onUpdateMonthYear: (S) => t(Y)(v, S),
              onOverlayClosed: m
            }, Le({ _: 2 }, [
              Ye(t(De), (S, ee) => ({
                name: S,
                fn: we((ne) => [
                  oe(g.$slots, S, et({ ref_for: !0 }, ne))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            tt(Sl, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": H.value(v),
              instance: v,
              month: t(s)(v),
              year: t(n)(v),
              onSelectDate: (S) => t(f)(S, v !== 1),
              onSetHoverDate: R[2] || (R[2] = (S) => t(c)(S)),
              onHandleScroll: (S) => t(i)(S, v),
              onHandleSwipe: (S) => t(P)(S, v),
              onMount: R[3] || (R[3] = (S) => se(t(Mt).calendar))
            }, Le({ _: 2 }, [
              Ye(t(ge), (S, ee) => ({
                name: S,
                fn: we((ne) => [
                  oe(g.$slots, S, et({ ref_for: !0 }, { ...ne }))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(he).enableTimePicker ? (O(), K("div", Yl, [
        g.$slots["time-picker"] ? oe(g.$slots, "time-picker", Je(et({ key: 0 }, { time: t(d), updateTime: t(F) }))) : (O(), Se(Qa, {
          key: 1,
          ref: "time-picker",
          hours: t(d).hours,
          minutes: t(d).minutes,
          seconds: t(d).seconds,
          "disabled-times-config": t(B),
          "validate-time": t(I),
          "no-overlay-focus": e.noOverlayFocus,
          onMount: R[4] || (R[4] = (G) => se(t(Mt).timePicker)),
          "onUpdate:hours": R[5] || (R[5] = (G) => t(F)({ hours: G, minutes: t(d).minutes, seconds: t(d).seconds })),
          "onUpdate:minutes": R[6] || (R[6] = (G) => t(F)({ hours: t(d).hours, minutes: G, seconds: t(d).seconds })),
          "onUpdate:seconds": R[7] || (R[7] = (G) => t(F)({ hours: t(d).hours, minutes: t(d).minutes, seconds: G })),
          onResetFlow: R[8] || (R[8] = (G) => g.$emit("reset-flow"))
        }, Le({ _: 2 }, [
          Ye(t(Ae), (G, a) => ({
            name: G,
            fn: we((v) => [
              oe(g.$slots, G, Je(ot(v)))
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
  } = $e(), { isDateBetween: B, isDateEqual: A } = je(), { checkRangeAutoApply: I, handleMultiDatesSelect: k, setMonthOrYearRange: u } = la();
  Kt();
  const { isDisabled: M } = at(), { formatQuarterText: i } = bt(), {
    selectYear: P,
    groupedYears: f,
    showYearPicker: Y,
    isDisabled: V,
    toggleYearPicker: $,
    handleYearSelect: F,
    handleYear: q,
    setStartDate: C
  } = qa(w), y = de();
  Ne(() => {
    C();
  });
  const c = j(() => (W) => r.value ? Array.isArray(r.value) ? r.value.some((re) => Pa(W, re)) : Pa(r.value, W) : !1), D = (W) => {
    if (l.value.enabled) {
      if (Array.isArray(r.value)) {
        const re = A(W, r.value[0]) || A(W, r.value[1]);
        return B(r.value, y.value, W) && !re;
      }
      return !1;
    }
    return !1;
  }, L = (W, re) => W.quarter === $a(re) && W.year === ye(re), Q = (W) => typeof n.value == "function" ? n.value({ quarter: $a(W), year: ye(W) }) : n.value.quarters.some((re) => L(re, W)), te = j(() => (W) => {
    const re = _e(p(), { year: o.value(W) });
    return Bn({
      start: Vt(re),
      end: Va(re)
    }).map((z) => {
      const ae = In(z), fe = Ta(z), ge = M(z), De = D(ae), Ae = Q(ae);
      return {
        text: i(ae, fe),
        value: ae,
        active: c.value(ae),
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
    groupedYears: f,
    year: o,
    isDisabled: V,
    quarters: te,
    showYearPicker: Y,
    modelValue: r,
    selectYear: P,
    toggleYearPicker: $,
    handleYearSelect: F,
    handleYear: q,
    setHoverDate: (W) => {
      y.value = W;
    },
    selectQuarter: (W, re, z) => {
      if (!z)
        return s.value[re].month = Te(Ta(W)), d.value.enabled ? Z(W) : l.value.enabled ? ve(W) : he(W);
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
      toggleYearPicker: f,
      handleYearSelect: Y,
      handleYear: V
    } = xl(o, r);
    return w({ getSidebarProps: () => ({
      modelValue: u,
      year: A,
      selectQuarter: P,
      handleYearSelect: Y,
      handleYear: V
    }) }), (F, q) => (O(), Se(ra, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: we(({ instances: C, wrapClass: y }) => [
        (O(!0), K(ke, null, Ye(C, (c) => (O(), K("div", {
          key: c,
          class: be(y)
        }, [
          Pe("div", {
            class: "dp-quarter-picker-wrap",
            style: Xe({ minHeight: `${t(s).modeHeight}px` })
          }, [
            F.$slots["top-extra"] ? oe(F.$slots, "top-extra", {
              key: 0,
              value: t(u)
            }) : U("", !0),
            Pe("div", null, [
              tt(Ua, {
                items: t(B)(c),
                instance: c,
                "show-year-picker": t(M)[c],
                year: t(A)(c),
                "is-disabled": (D) => t(I)(c, D),
                onHandleYear: (D) => t(V)(c, D),
                onYearSelect: (D) => t(Y)(D, c),
                onToggleYearPicker: (D) => t(f)(c, D?.flow, D?.show)
              }, Le({ _: 2 }, [
                Ye(t(d), (D, L) => ({
                  name: D,
                  fn: we((Q) => [
                    oe(F.$slots, D, et({ ref_for: !0 }, Q))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            Pe("div", Bl, [
              (O(!0), K(ke, null, Ye(t(k)(c), (D, L) => (O(), K("div", { key: L }, [
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
                  F.$slots.quarter ? oe(F.$slots, "quarter", {
                    key: 0,
                    value: D.value,
                    text: D.text
                  }) : (O(), K(ke, { key: 1 }, [
                    dt(Ke(D.text), 1)
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
    } = $e(), { isMobile: u } = ta(), { mapSlots: M } = yt(), { handleEventPropagation: i, getElWithin: P, checkStopPropagation: f, checkKeyDown: Y } = Fe(), { arrowRight: V, arrowLeft: $, arrowDown: F, arrowUp: q } = gt(), C = Re("inner-menu"), y = Re("dp-menu"), c = Re("dyn-cmp"), D = de(0), L = de(!1), Q = de(!1), { flowStep: te, updateFlowStep: Z, childMount: ve, resetFlow: he, handleFlow: N } = Hn(c), J = (a) => {
      Q.value = !0, B.value.allowPreventDefault && a.preventDefault(), f(a, B.value, !0);
    };
    Ne(() => {
      L.value = !0, W(), globalThis.addEventListener("resize", W);
      const a = Qe(y);
      a && !l.value.enabled && !d.value.enabled && (k("menuFocused", !0), z()), a && (a.addEventListener("pointerdown", J), a.addEventListener("mousedown", J)), document.addEventListener("mousedown", R);
    }), St(() => {
      globalThis.removeEventListener("resize", W), document.removeEventListener("mousedown", R);
      const a = Qe(y);
      a && (a.removeEventListener("pointerdown", J), a.removeEventListener("mousedown", J));
    });
    const W = () => {
      const a = Qe(C);
      a && (D.value = a.getBoundingClientRect().width);
    }, re = j(() => n.monthPicker ? Zr : n.yearPicker ? tl : n.timePicker ? pl : n.quarterPicker ? Vl : Ol), z = () => {
      const a = Qe(y);
      a && a.focus({ preventScroll: !0 });
    }, ae = j(() => c.value?.getSidebarProps() || {}), fe = M(o, "action"), ge = j(() => n.monthPicker || n.yearPicker ? M(o, "monthYear") : n.timePicker ? M(o, "timePicker") : M(o, "shared")), De = j(() => ({
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
    ), se = (a) => {
      f(a, B.value, !0);
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
      k("shiftKeyInMenu", a.shiftKey), !n.hideMonthYearSelect && a.code === xe.tab && a.target.classList.contains("dp__menu") && s.shiftKeyInMenu && (a.preventDefault(), f(a, B.value, !0), r("close-picker"));
    }, ue = (a) => {
      c.value?.toggleTimePicker(!1, !1), c.value?.toggleMonthPicker(!1, !1, a), c.value?.toggleYearPicker(!1, !1, a);
    }, b = (a, v = 0) => a === "month" ? c.value?.toggleMonthPicker(!1, !0, v) : a === "year" ? c.value?.toggleYearPicker(!1, !0, v) : a === "time" ? c.value?.toggleTimePicker(!0, !1) : ue(v), T = (a, ...v) => {
      c.value?.[a] && c.value?.[a](...v);
    }, ie = () => {
      T("selectCurrentDate");
    }, le = (a) => {
      T("presetDate", fn(a));
    }, h = () => {
      T("clearHoverDate");
    }, m = (a, v) => {
      T("updateMonthYear", a, v);
    }, x = (a, v) => {
      a.preventDefault(), E(v);
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
    }, R = (a) => {
      d.value.enabled && !d.value.input && !y.value?.contains(a.target) && Q.value && (Q.value = !1, r("menu-blur"));
    };
    return w({
      updateMonthYear: m,
      switchView: b,
      onValueCleared: () => {
        c.value?.setStartTime?.();
      },
      handleFlow: N
    }), (a, v) => (O(), K("div", {
      id: t(n).menuId,
      ref: "dp-menu",
      tabindex: t(d).enabled ? void 0 : "0",
      role: t(d).enabled ? void 0 : "dialog",
      "aria-label": t(I)?.menu,
      class: be(Ae.value),
      onMouseleave: h,
      onClick: se,
      onKeydown: g
    }, [
      (t(n).disabled || t(n).readonly) && t(d).enabled || t(n).loading ? (O(), K("div", {
        key: 0,
        class: be(De.value)
      }, [
        t(n).loading ? (O(), K("div", Fl, [...v[5] || (v[5] = [
          Pe("span", { class: "dp--menu-loader" }, null, -1)
        ])])) : U("", !0)
      ], 2)) : U("", !0),
      a.$slots["menu-header"] ? (O(), K("div", Nl, [
        oe(a.$slots, "menu-header")
      ])) : U("", !0),
      oe(a.$slots, "arrow"),
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
          oe(a.$slots, "left-sidebar", Je(ot(ae.value)))
        ])) : U("", !0),
        t(n).presetDates.length ? (O(), K("div", {
          key: 1,
          class: be({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(u)
        }, [
          (O(!0), K(ke, null, Ye(t(n).presetDates, (S, ee) => (O(), K(ke, { key: ee }, [
            S.slot ? oe(a.$slots, S.slot, {
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
              onClick: Nt((ne) => le(S.value), ["prevent"]),
              onKeydown: (ne) => t(Y)(ne, () => le(S.value), !0)
            }, Ke(S.label), 47, Kl))
          ], 64))), 128))
        ], 10, Hl)) : U("", !0),
        Pe("div", jl, [
          (O(), Se(Da(re.value), {
            ref: "dyn-cmp",
            "flow-step": t(te),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": y.value,
            onMount: t(ve),
            onUpdateFlowStep: t(Z),
            onResetFlow: t(he),
            onFocusMenu: z,
            onSelectDate: v[0] || (v[0] = (S) => a.$emit("select-date")),
            onAutoApply: v[1] || (v[1] = (S) => a.$emit("auto-apply", S)),
            onTimeUpdate: v[2] || (v[2] = (S) => a.$emit("time-update"))
          }, Le({ _: 2 }, [
            Ye(ge.value, (S, ee) => ({
              name: S,
              fn: we((ne) => [
                oe(a.$slots, S, Je(ot({ ...ne })))
              ])
            }))
          ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
        ]),
        a.$slots["right-sidebar"] ? (O(), K("div", zl, [
          oe(a.$slots, "right-sidebar", Je(ot(ae.value)))
        ])) : U("", !0),
        a.$slots["action-extra"] ? (O(), K("div", Ul, [
          a.$slots["action-extra"] ? oe(a.$slots, "action-extra", {
            key: 0,
            selectCurrentDate: ie
          }) : U("", !0)
        ])) : U("", !0)
      ], 14, Wl),
      !t(n).autoApply || t(B).keepActionRow ? (O(), Se(Kr, {
        key: 2,
        "menu-mount": L.value,
        "calendar-width": D.value,
        onClosePicker: v[3] || (v[3] = (S) => a.$emit("close-picker")),
        onSelectDate: v[4] || (v[4] = (S) => a.$emit("select-date")),
        onSelectNow: ie
      }, Le({ _: 2 }, [
        Ye(t(fe), (S, ee) => ({
          name: S,
          fn: we((ne) => [
            oe(a.$slots, S, Je(ot({ ...ne })))
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
    } = $e(), { clearArrowNav: M } = gt(), { validateDate: i, isValidTime: P } = at(), { menuTransition: f, showTransition: Y } = Ht(), { isMobile: V } = ta(), { mapSlots: $ } = yt(), { findNextFocusableElement: F, getNumVal: q } = Fe(), C = ht(), y = de(!1), c = de(!1), D = _a(n, "modelValue"), L = _a(n, "timezone"), Q = Re("dp-menu-wrap"), te = Re("dp-menu"), Z = Re("input-cmp"), ve = Re("picker-wrapper"), he = Re("menu-arrow"), N = de(!1), J = de(!1), W = de(!1), re = de(!1), z = (me) => (u.value.arrow && (u.value.arrow === !0 ? me.push(Aa({ element: he })) : me.push(Aa({ element: u.value.arrow }))), me), { floatingStyles: ae, middlewareData: fe, placement: ge, y: De } = gn(
      Z,
      Q,
      {
        strategy: u.value.strategy,
        placement: u.value.placement,
        middleware: z([bn(u.value.offset), kn(), wn()]),
        whileElementsMounted: yn
      }
    );
    Ne(() => {
      H(n.modelValue), Ge().then(() => {
        l.value.enabled || globalThis.addEventListener("resize", m);
      }), l.value.enabled && (y.value = !0), globalThis.addEventListener("keyup", x), globalThis.addEventListener("keydown", g);
    }), St(() => {
      l.value.enabled || globalThis.removeEventListener("resize", m), globalThis.removeEventListener("keyup", x), globalThis.removeEventListener("keydown", g);
    });
    const Ae = $(C, "all", n.presetDates), se = $(C, "input");
    st(
      [D, L],
      () => {
        H(D.value);
      },
      { deep: !0 }
    ), st([ge, De], () => {
      c.value = !1, Ge().then(() => {
        c.value = !0;
      });
    });
    const { parseExternalModelValue: H, emitModelValue: E, formatInputValue: ce, checkBeforeEmit: ue } = Nn(), b = j(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: l.value.enabled,
        "dp--flex-display-collapsed": re.value,
        dp__flex_display_with_input: l.value.input
      })
    ), T = j(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), ie = j(() => l.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), le = () => Z.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, h = () => {
      y.value && d.value.closeOnScroll && Ce();
    }, m = () => {
      const me = te.value?.$el.getBoundingClientRect().width ?? 0;
      re.value = document.body.offsetWidth <= me;
    }, x = (me) => {
      me.key === "Tab" && !l.value.enabled && !n.teleport && d.value.tabOutClosesMenu && (ve.value.contains(document.activeElement) || Ce()), W.value = me.shiftKey;
    }, g = (me) => {
      W.value = me.shiftKey;
    }, R = () => {
      !n.disabled && !n.readonly && (y.value = !0, y.value && p("open"), y.value || Ve(), H(n.modelValue));
    }, G = () => {
      o.value = "", Ve(), te.value?.onValueCleared(), Z.value?.setParsedDate(null), p("update:model-value", null), p("cleared"), d.value.closeOnClearValue && Ce();
    }, a = () => {
      const me = s.value;
      return !me || !Array.isArray(me) && i(me) ? !0 : Array.isArray(me) ? I.value.enabled || me.length === 2 && i(me[0]) && i(me[1]) ? !0 : A.value.partialRange && !n.timePicker ? i(me[0]) : !1 : !1;
    }, v = () => {
      ue() && a() ? (E(), Ce()) : p("invalid-select");
    }, S = (me) => {
      ee(), E(), d.value.closeOnAutoApply && !me && Ce();
    }, ee = () => {
      Z.value && B.value.enabled && Z.value.setParsedDate(s.value);
    }, ne = (me = !1) => {
      n.autoApply && P(s.value) && a() && (A.value.enabled && Array.isArray(s.value) ? (A.value.partialRange || s.value.length === 2) && S(me) : S(me));
    }, Ve = () => {
      B.value.enabled || (s.value = null);
    }, Ce = (me = !1) => {
      me && s.value && d.value.setDateOnMenuClose && v(), l.value.enabled || (y.value && (y.value = !1, r("menuFocused", !1), r("shiftKeyInMenu", !1), M(), p("closed"), o.value && H(D.value)), Ve(), p("blur"));
    }, kt = (me, ze, nt = !1) => {
      if (!me) {
        s.value = null;
        return;
      }
      const At = Array.isArray(me) ? !me.some((fa) => !i(fa)) : i(me), it = P(me);
      At && it ? (r("isTextInputDate", !0), s.value = me, ze ? (J.value = nt, v(), p("text-submit")) : n.autoApply && ne(!0), Ge().then(() => {
        r("isTextInputDate", !1);
      })) : p("invalid-date", me);
    }, zt = () => {
      n.autoApply && P(s.value) && E(), ee();
    }, Ct = () => y.value ? Ce() : R(), oa = (me) => {
      s.value = me;
    }, sa = () => {
      B.value.enabled && (N.value = !0, ce()), p("focus");
    }, ua = () => {
      B.value.enabled && (N.value = !1, H(n.modelValue), J.value && F(ve.value, W.value)?.focus()), p("blur");
    }, Yt = (me, ze) => {
      te.value && te.value.updateMonthYear(ze ?? 0, {
        month: q(me.month),
        year: q(me.year)
      });
    }, ia = (me) => {
      H(me ?? n.modelValue);
    }, ca = (me, ze) => {
      te.value?.switchView(me, ze);
    }, Ut = (me, ze) => d.value.onClickOutside ? d.value.onClickOutside(me, ze) : Ce(!0), da = (me = 0) => {
      te.value?.handleFlow(me);
    }, va = () => Q;
    return hn(Q, (me) => Ut(a, me), {
      ignore: [Z]
    }), w({
      closeMenu: Ce,
      selectDate: v,
      clearValue: G,
      openMenu: R,
      onScroll: h,
      formatInputValue: ce,
      // exposed for testing purposes
      updateInternalModelValue: oa,
      // modify internal modelValue
      setMonthYear: Yt,
      parseModel: ia,
      switchView: ca,
      toggleMenu: Ct,
      handleFlow: da,
      getDpWrapMenuRef: va
    }), (me, ze) => (O(), K("div", {
      ref: "picker-wrapper",
      class: be(b.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": t(V)
    }, [
      tt(Fr, {
        ref: "input-cmp",
        "is-menu-open": y.value,
        onClear: G,
        onOpen: R,
        onSetInputDate: kt,
        onSetEmptyDate: t(E),
        onSelectDate: v,
        onToggle: Ct,
        onClose: Ce,
        onFocus: sa,
        onBlur: ua,
        onRealBlur: ze[0] || (ze[0] = (nt) => N.value = !1)
      }, Le({ _: 2 }, [
        Ye(t(se), (nt, At) => ({
          name: nt,
          fn: we((it) => [
            oe(me.$slots, nt, Je(ot(it)))
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
          style: Xe(!t(l).enabled && !t(n).centered ? t(ae) : void 0)
        }, [
          tt(Rt, {
            name: t(f)(t(ge).startsWith("top")),
            css: t(Y) && !t(l).enabled && !t(n).centered && c.value
          }, {
            default: we(() => [
              y.value && c.value ? (O(), Se(ql, {
                key: 0,
                ref: "dp-menu",
                class: be({ [T.value]: !0 }),
                "no-overlay-focus": ie.value,
                collapse: re.value,
                "get-input-rect": le,
                onClosePicker: Ce,
                onSelectDate: v,
                onAutoApply: ne,
                onTimeUpdate: zt,
                onMenuBlur: ze[1] || (ze[1] = (nt) => t(p)("blur"))
              }, Le({ _: 2 }, [
                Ye(t(Ae), (nt, At) => ({
                  name: nt,
                  fn: we((it) => [
                    oe(me.$slots, nt, Je(ot({ ...it })))
                  ])
                })),
                !t(l).enabled && !t(n).centered && t(u).arrow === !0 ? {
                  name: "arrow",
                  fn: we(() => [
                    Pe("div", {
                      ref: "menu-arrow",
                      class: be({
                        dp__arrow_top: t(ge) === "bottom",
                        dp__arrow_bottom: t(ge) === "top"
                      }),
                      style: Xe({
                        left: t(fe).arrow?.x != null ? `${t(fe).arrow.x}px` : "",
                        top: t(fe).arrow?.y != null ? `${t(fe).arrow.y}px` : ""
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
  props: /* @__PURE__ */ xa({
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
          oe(B.$slots, I, Je(ot(u)))
        ])
      }))
    ]), 1536));
  }
});
export {
  so as TZDate,
  ro as VueDatePicker
};
