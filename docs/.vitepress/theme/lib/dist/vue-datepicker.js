import { h as Fe, reactive as Ft, ref as ie, computed as L, watch as it, provide as un, readonly as cn, inject as dn, nextTick as tt, onMounted as Ke, onUnmounted as Rt, defineComponent as Le, useTemplateRef as Ye, createElementBlock as H, openBlock as C, renderSlot as le, createCommentVNode as K, unref as t, createElementVNode as Ae, normalizeClass as ke, createBlock as Re, withModifiers as Wt, createVNode as at, normalizeProps as Je, mergeProps as et, Fragment as De, normalizeStyle as Ze, createTextVNode as dt, toDisplayString as Ue, onBeforeUpdate as vn, withDirectives as Xt, renderList as Oe, vShow as Jt, withCtx as _e, withKeys as fn, Transition as Ct, createSlots as ze, useSlots as gt, resolveDynamicComponent as ka, guardReactiveProps as st, mergeDefaults as xa, toValue as mn, toRef as _a } from "vue";
import { unrefElement as Ge, onClickOutside as pn } from "@vueuse/core";
import { useFloating as hn, autoUpdate as gn, offset as yn, flip as bn, shift as kn, arrow as Aa } from "@floating-ui/vue";
import { set as Te, setYear as ot, parse as ba, getYear as be, getMonth as Pe, getSeconds as Dt, getMinutes as ht, getHours as ct, isValid as Zt, addMonths as wt, subMonths as Lt, differenceInCalendarDays as wn, eachDayOfInterval as Ba, getDay as Dn, isBefore as St, isAfter as _t, isEqual as Tt, subDays as Mn, addDays as pt, format as lt, startOfWeek as wa, endOfWeek as Ia, setHours as _n, setMinutes as An, setSeconds as Ea, setMilliseconds as Va, startOfMonth as Pn, setMonth as Tn, isDate as $n, endOfYear as Na, startOfYear as Vt, addYears as Fa, subYears as Wa, differenceInYears as Sn, add as La, sub as Rn, getWeek as Cn, getISOWeek as Yn, isSameQuarter as Pa, eachQuarterOfInterval as On, startOfQuarter as xn, endOfQuarter as Ta, getQuarter as $a } from "date-fns";
import { TZDate as Bn } from "@date-fns/tz";
function Ht() {
  return Fe(
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
      Fe("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Fe("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Fe("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Fe("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function In() {
  return Fe(
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
      Fe("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Fe("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function Ha() {
  return Fe(
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
      Fe("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function za() {
  return Fe(
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
      Fe("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function Ka() {
  return Fe(
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
      Fe("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Fe("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function ja() {
  return Fe(
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
      Fe("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Ua() {
  return Fe(
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
      Fe("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const xe = Ft({
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
}), ma = ie(null), Gt = ie(!1), pa = ie(!1), ha = ie(!1), ga = ie(!1), je = ie(0), Ne = ie(0), yt = () => {
  const e = L(() => Gt.value ? [...xe.selectionGrid, xe.actionRow].filter((b) => b.length) : pa.value ? [
    ...xe.timePicker[0],
    ...xe.timePicker[1],
    ga.value ? [] : [ma.value],
    xe.actionRow
  ].filter((b) => b.length) : ha.value ? [...xe.monthPicker, xe.actionRow] : [xe.monthYear, ...xe.calendar, xe.time, xe.actionRow].filter((b) => b.length)), w = (b) => {
    je.value = b ? je.value + 1 : je.value - 1;
    let y = null;
    e.value[Ne.value] && (y = e.value[Ne.value][je.value]), !y && e.value[Ne.value + (b ? 1 : -1)] ? (Ne.value = Ne.value + (b ? 1 : -1), je.value = b ? 0 : e.value[Ne.value].length - 1) : y || (je.value = b ? je.value - 1 : je.value + 1);
  }, f = (b) => {
    if (Ne.value === 0 && !b || Ne.value === e.value.length && b) return;
    Ne.value = b ? Ne.value + 1 : Ne.value - 1, e.value[Ne.value] ? e.value[Ne.value] && !e.value[Ne.value][je.value] && je.value !== 0 && (je.value = e.value[Ne.value].length - 1) : Ne.value = b ? Ne.value - 1 : Ne.value + 1;
  }, s = (b) => {
    let y = null;
    e.value[Ne.value] && (y = e.value[Ne.value][je.value]), y ? y.focus({ preventScroll: !Gt.value }) : je.value = b ? je.value - 1 : je.value + 1;
  }, l = () => {
    w(!0), s(!0);
  }, i = () => {
    w(!1), s(!1);
  }, r = () => {
    f(!1), s(!0);
  }, d = () => {
    f(!0), s(!0);
  }, p = (b, y) => {
    xe[y] = b;
  }, D = (b, y) => {
    xe[y] = b;
  }, c = () => {
    je.value = 0, Ne.value = 0;
  };
  return {
    buildMatrix: p,
    buildMultiLevelMatrix: D,
    setTimePickerBackRef: (b) => {
      ma.value = b;
    },
    setSelectionGrid: (b) => {
      Gt.value = b, c(), b || (xe.selectionGrid = []);
    },
    setTimePicker: (b, y = !1) => {
      pa.value = b, ga.value = y, c(), b || (xe.timePicker[0] = [], xe.timePicker[1] = []);
    },
    setTimePickerElements: (b, y = 0) => {
      xe.timePicker[y] = b;
    },
    arrowRight: l,
    arrowLeft: i,
    arrowUp: r,
    arrowDown: d,
    clearArrowNav: () => {
      xe.monthYear = [], xe.calendar = [], xe.time = [], xe.actionRow = [], xe.selectionGrid = [], xe.timePicker[0] = [], xe.timePicker[1] = [], Gt.value = !1, pa.value = !1, ga.value = !1, ha.value = !1, c(), ma.value = null;
    },
    setMonthPicker: (b) => {
      ha.value = b, c();
    },
    refSets: xe
    // exposed for testing
  };
};
var rt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(rt || {}), Mt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Mt || {}), Qe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Qe || {});
const En = ["timestamp", "date", "iso"];
var qe = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(qe || {}), Be = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Be || {}), $t = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))($t || {});
const Vn = () => {
  const { getDate: e, setTime: w, getWeekFromDate: f } = Ee(), { checkPartialRangeValue: s, checkRangeEnabled: l, isValidDate: i } = ut(), { convertType: r, errorMapper: d } = We(), {
    rootEmit: p,
    state: D,
    rootProps: c,
    inputValue: x,
    defaults: { textInput: u, range: A, tz: g, multiDates: _, timeConfig: R, formats: b },
    modelValue: y,
    updateTime: N
  } = Se(), { formatSelectedDate: re, formatForTextInput: oe } = Pt();
  it(
    y,
    (h, W) => {
      p("internal-model-change", y.value), JSON.stringify(W ?? {}) !== JSON.stringify(h ?? {}) && N();
    },
    { deep: !0 }
  ), it(A, (h, W) => {
    h.enabled !== W.enabled && (y.value = null);
  }), it(
    () => b.value.input,
    () => {
      we();
    }
  );
  const P = (h) => g.value.timezone && g.value.convertModel ? e(h) : h, m = (h) => h ? c.modelType ? U(h) : {
    hours: ct(h),
    minutes: ht(h),
    seconds: R.value.enableSeconds ? Dt(h) : 0
  } : null, o = (h) => c.modelType ? U(h) : { month: Pe(h), year: be(h) }, k = (h) => Array.isArray(h) ? _.value.enabled ? h.map((W) => M(W, ot(e(), W))) : l(
    () => [
      ot(e(), h[0]),
      h[1] ? ot(e(), h[1]) : s(A.value.partialRange)
    ],
    A.value.enabled
  ) : ot(e(), +h), M = (h, W) => (typeof h == "string" || typeof h == "number") && c.modelType ? ye(h) : W, E = (h) => Array.isArray(h) ? [
    M(h[0], w(h[0])),
    M(h[1], w(h[1]))
  ] : M(h, w(h)), F = (h) => {
    const W = Te(e(), { date: 1 });
    return Array.isArray(h) ? _.value.enabled ? h.map(
      (n) => M(n, Te(W, { month: +n.month, year: +n.year }))
    ) : l(
      () => [
        M(h[0], Te(W, { month: +h[0].month, year: +h[0].year })),
        M(
          h[1],
          h[1] ? Te(W, { month: +h[1].month, year: +h[1].year }) : s(A.value.partialRange)
        )
      ],
      A.value.enabled
    ) : M(h, Te(W, { month: +h.month, year: +h.year }));
  }, te = (h) => {
    if (Array.isArray(h))
      return h.map((W) => ye(W));
    throw new Error(d.dateArr("multi-dates"));
  }, X = (h) => {
    if (Array.isArray(h) && A.value.enabled) {
      const W = h[0], n = h[1];
      return [
        e(Array.isArray(W) ? W[0] : null),
        Array.isArray(n) && n.length ? e(n[0]) : null
      ];
    }
    return e(h[0]);
  }, pe = (h) => c.modelAuto ? Array.isArray(h) ? [ye(h[0]), ye(h[1])] : c.autoApply ? [ye(h)] : [ye(h), null] : Array.isArray(h) ? l(
    () => h[1] ? [
      ye(h[0]),
      h[1] ? ye(h[1]) : s(A.value.partialRange)
    ] : [ye(h[0])],
    A.value.enabled
  ) : ye(h), Z = () => {
    Array.isArray(y.value) && A.value.enabled && y.value.length === 1 && y.value.push(s(A.value.partialRange));
  }, ce = () => {
    const h = y.value;
    return [
      U(h[0]),
      h[1] ? U(h[1]) : s(A.value.partialRange)
    ];
  }, Y = () => Array.isArray(y.value) ? y.value[1] ? ce() : U(r(y.value[0])) : [], V = () => (y.value || []).map((h) => U(h)), I = (h = !1) => (h || Z(), c.modelAuto ? Y() : _.value.enabled ? V() : Array.isArray(y.value) ? l(() => ce(), A.value.enabled) : U(r(y.value))), ae = (h) => !h || Array.isArray(h) && !h.length ? null : c.timePicker ? E(r(h)) : c.monthPicker ? F(r(h)) : c.yearPicker ? k(r(h)) : _.value.enabled ? te(r(h)) : c.weekPicker ? X(r(h)) : pe(r(h)), ve = (h) => {
    if (D.isTextInputDate) return;
    const W = ae(h);
    i(r(W)) ? (y.value = r(W), we()) : (y.value = null, x.value = "");
  }, Me = () => y.value ? _.value.enabled ? y.value.map((h) => re(h)).join("; ") : u.value.enabled ? oe() : re(y.value) : "", we = () => {
    x.value = Me();
  }, ye = (h) => c.modelType ? En.includes(c.modelType) ? new Date(h) : c.modelType === "format" && typeof b.value.input == "string" ? ba(h, b.value.input, /* @__PURE__ */ new Date(), { locale: c.locale }) : ba(h, c.modelType, /* @__PURE__ */ new Date(), { locale: c.locale }) : new Date(h), U = (h) => h ? c.modelType ? c.modelType === "timestamp" ? +P(h) : c.modelType === "iso" ? P(h).toISOString() : c.modelType === "format" && typeof b.value.input == "string" ? re(P(h)) : re(P(h), c.modelType) : P(h) : "", z = (h) => {
    p("update:model-value", h);
  }, se = (h) => Array.isArray(y.value) ? _.value.enabled ? y.value.map((W) => h(W)) : [h(y.value[0]), y.value[1] ?? null] : h(r(y.value)), q = () => {
    if (Array.isArray(y.value)) {
      const h = f(y.value[0], c.weekStart), W = y.value[1] ? f(y.value[1], c.weekStart) : [];
      return [h.map((n) => e(n)), W.map((n) => e(n))];
    }
    return f(y.value, c.weekStart).map((h) => e(h));
  }, de = (h) => z(r(se(h))), me = () => p("update:model-value", q());
  return {
    checkBeforeEmit: () => y.value ? A.value.enabled ? A.value.partialRange ? y.value.length >= 1 : y.value.length === 2 : !!y.value : !1,
    parseExternalModelValue: ve,
    formatInputValue: we,
    emitModelValue: () => (we(), c.monthPicker ? de(o) : c.timePicker ? de(m) : c.yearPicker ? de(be) : c.weekPicker ? me() : z(I()))
  };
}, mt = [
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
], Nn = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Fn = {
  all: () => mt,
  monthYear: () => mt.filter((e) => e.use.includes("month-year")),
  input: () => Nn,
  timePicker: () => mt.filter((e) => e.use.includes("time")),
  action: () => mt.filter((e) => e.use.includes("action")),
  calendar: () => mt.filter((e) => e.use.includes("calendar")),
  menu: () => mt.filter((e) => e.use.includes("menu")),
  shared: () => mt.filter((e) => e.use.includes("shared")),
  yearMode: () => mt.filter((e) => e.use.includes("year-mode"))
}, At = () => ({
  mapSlots: (w, f, s) => {
    const l = [];
    for (const i of Fn[f]())
      w[i.name] && l.push(i.name);
    if (s?.length)
      for (const i of s)
        i.slot && l.push(i.slot);
    return l;
  }
}), qa = Symbol("ContextKey"), Wn = (e, w) => {
  const { setTimeModelValue: f } = Ee(), s = Cr(e), l = ie(null), i = Ft({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1
  }), r = /* @__PURE__ */ new Date(), d = ie(""), p = ie([{ month: Pe(r), year: be(r) }]), D = Ft({ hours: 0, minutes: 0, seconds: 0 });
  f(D, null, r, s.range.value.enabled);
  const c = L({
    get: () => l.value,
    set: (_) => {
      !e.readonly && !e.disabled && (l.value = _);
    }
  }), x = L(
    () => (_) => p.value[_] ? p.value[_].month : 0
  ), u = L(
    () => (_) => p.value[_] ? p.value[_].year : 0
  ), A = (_, R) => {
    i[_] = R;
  }, g = () => {
    f(D, c.value, r, s.range.value.enabled);
  };
  un(qa, {
    rootProps: e,
    defaults: s,
    modelValue: c,
    state: cn(i),
    rootEmit: w,
    calendars: p,
    month: x,
    year: u,
    time: D,
    today: r,
    inputValue: d,
    setState: A,
    updateTime: g
  });
}, Se = () => {
  const e = dn(qa);
  if (!e)
    throw new Error("Can't use context");
  return e;
}, zt = () => {
  const {
    defaults: { transitions: e }
  } = Se(), w = L(() => (s) => e.value ? s ? e.value.open : e.value.close : ""), f = L(() => (s) => e.value ? s ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: w, showTransition: !!e.value, menuTransition: f };
}, Kt = (e) => {
  const {
    today: w,
    time: f,
    modelValue: s,
    defaults: { range: l }
  } = Se(), { setTimeModelValue: i } = Ee();
  it(
    l,
    (r, d) => {
      r.enabled !== d.enabled && i(f, s.value, w, l.value.enabled);
    },
    { deep: !0 }
  ), it(
    s,
    (r, d) => {
      e && JSON.stringify(r ?? {}) !== JSON.stringify(d ?? {}) && e();
    },
    { deep: !0 }
  );
}, ut = () => {
  const {
    getDate: e,
    isDateBefore: w,
    isDateAfter: f,
    isDateEqual: s,
    resetDate: l,
    getDaysInBetween: i,
    setTimeValue: r,
    getTimeObj: d,
    setTime: p
  } = Ee(), {
    defaults: { safeDates: D, range: c, multiDates: x, filters: u, timeConfig: A },
    rootProps: g
  } = Se(), { getMapKeyType: _, getMapDate: R, errorMapper: b, convertType: y } = We(), N = (n) => D.value.disabledDates ? typeof D.value.disabledDates == "function" ? D.value.disabledDates(e(n)) : !!R(n, D.value.disabledDates) : !1, re = (n) => D.value.maxDate ? g.yearPicker ? be(n) > be(D.value.maxDate) : f(n, D.value.maxDate) : !1, oe = (n) => D.value.minDate ? g.yearPicker ? be(n) < be(D.value.minDate) : w(n, D.value.minDate) : !1, P = (n) => {
    if (!n) return !1;
    const T = re(n), S = oe(n), j = N(n), Q = u.value.months.map((G) => +G).includes(Pe(n)), a = u.value.weekDays?.length ? u.value.weekDays.some((G) => +G === Dn(n)) : !1, O = E(n), v = be(n), J = v < +g.yearRange[0] || v > +g.yearRange[1];
    return !(T || S || j || Q || J || a || O);
  }, m = (n, T) => w(...q(D.value.minDate, n, T)) || s(...q(D.value.minDate, n, T)), o = (n, T) => f(...q(D.value.maxDate, n, T)) || s(...q(D.value.maxDate, n, T)), k = (n, T, S) => {
    let j = !1;
    return D.value.maxDate && S && o(n, T) && (j = !0), D.value.minDate && !S && m(n, T) && (j = !0), j;
  }, M = (n, T, S, j) => {
    let ne = !1;
    return j && (D.value.minDate || D.value.maxDate) ? D.value.minDate && D.value.maxDate ? ne = k(n, T, S) : (D.value.minDate && m(n, T) || D.value.maxDate && o(n, T)) && (ne = !0) : ne = !0, ne;
  }, E = (n) => Array.isArray(D.value.allowedDates) && !D.value.allowedDates.length ? !0 : D.value.allowedDates ? !R(
    n,
    D.value.allowedDates,
    _(g.monthPicker, g.yearPicker)
  ) : !1, F = (n) => !P(n), te = (n) => c.value.noDisabledRange ? !Ba({ start: n[0], end: n[1] }).some((S) => F(S)) : !0, X = (n) => {
    if (n) {
      const T = be(n);
      return T >= +g.yearRange[0] && T <= g.yearRange[1];
    }
    return !0;
  }, pe = (n, T) => !!(Array.isArray(n) && n[T] && (c.value.maxRange || c.value.minRange) && X(n[T])), Z = (n, T, S = 0) => {
    if (pe(T, S) && X(n)) {
      const j = wn(n, T[S]), ne = i(T[S], n), Q = ne.length === 1 ? 0 : ne.filter((O) => F(O)).length, a = Math.abs(j) - (c.value.minMaxRawRange ? 0 : Q);
      if (c.value.minRange && c.value.maxRange)
        return a >= +c.value.minRange && a <= +c.value.maxRange;
      if (c.value.minRange) return a >= +c.value.minRange;
      if (c.value.maxRange) return a <= +c.value.maxRange;
    }
    return !0;
  }, ce = () => !A.value.enableTimePicker || g.monthPicker || g.yearPicker || A.value.ignoreTimeValidation, Y = (n) => Array.isArray(n) ? [n[0] ? r(n[0]) : null, n[1] ? r(n[1]) : null] : r(n), V = (n, T, S) => T ? n.find(
    (j) => +j.hours === ct(T) && j.minutes === "*" ? !0 : +j.minutes === ht(T) && +j.hours === ct(T)
  ) && S : !1, I = (n, T, S) => {
    const [j, ne] = n, [Q, a] = T;
    return !V(j, Q, S) && !V(ne, a, S) && S;
  }, ae = (n, T) => {
    const S = Array.isArray(T) ? T : [T];
    return Array.isArray(g.disabledTimes) ? Array.isArray(g.disabledTimes[0]) ? I(g.disabledTimes, S, n) : !S.some((j) => V(g.disabledTimes, j, n)) : n;
  }, ve = (n, T) => {
    const S = Array.isArray(T) ? [d(T[0]), T[1] ? d(T[1]) : void 0] : d(T), j = !g.disabledTimes(S);
    return n && j;
  }, Me = (n, T) => g.disabledTimes ? Array.isArray(g.disabledTimes) ? ae(T, n) : ve(T, n) : T, we = (n) => {
    let T = !0;
    if (!n || ce()) return !0;
    const S = !D.value.minDate && !D.value.maxDate ? Y(n) : n;
    return (g.maxTime || D.value.maxDate) && (T = me(
      g.maxTime,
      D.value.maxDate,
      "max",
      y(S),
      T
    )), (g.minTime || D.value.minDate) && (T = me(
      g.minTime,
      D.value.minDate,
      "min",
      y(S),
      T
    )), Me(n, T);
  }, ye = (n) => {
    if (!g.monthPicker) return !0;
    let T = !0;
    const S = e(l(n));
    if (D.value.minDate && D.value.maxDate) {
      const j = e(l(D.value.minDate)), ne = e(l(D.value.maxDate));
      return f(S, j) && w(S, ne) || s(S, j) || s(S, ne);
    }
    if (D.value.minDate) {
      const j = e(l(D.value.minDate));
      T = f(S, j) || s(S, j);
    }
    if (D.value.maxDate) {
      const j = e(l(D.value.maxDate));
      T = w(S, j) || s(S, j);
    }
    return T;
  }, U = L(() => (n) => !A.value.enableTimePicker || A.value.ignoreTimeValidation ? !0 : we(n)), z = L(() => (n) => g.monthPicker ? Array.isArray(n) && (c.value.enabled || x.value.enabled) ? !n.filter((S) => !ye(S)).length : ye(n) : !0), se = (n, T, S) => {
    if (!T || S && !D.value.maxDate || !S && !D.value.minDate) return !1;
    const j = S ? wt(n, 1) : Lt(n, 1), ne = [Pe(j), be(j)];
    return S ? !o(...ne) : !m(...ne);
  }, q = (n, T, S) => [Te(e(n), { date: 1 }), Te(e(), { month: T, year: S, date: 1 })], de = (n, T, S, j) => {
    if (!n) return !0;
    if (j) {
      const ne = S === "max" ? St(n, T) : _t(n, T), Q = { seconds: 0, milliseconds: 0 };
      return ne || Tt(Te(n, Q), Te(T, Q));
    }
    return S === "max" ? n.getTime() <= T.getTime() : n.getTime() >= T.getTime();
  }, me = (n, T, S, j, ne) => {
    if (Array.isArray(j)) {
      const a = ge(n, j[0], T), O = ge(n, j[1], T);
      return de(j[0], a, S, !!T) && de(j[1], O, S, !!T) && ne;
    }
    const Q = ge(n, j, T);
    return de(j, Q, S, !!T) && ne;
  }, ge = (n, T, S) => n ? p(n, T) : e(S ?? T);
  return {
    isDisabled: F,
    validateDate: P,
    validateMonthYearInRange: M,
    isDateRangeAllowed: te,
    checkMinMaxRange: Z,
    isValidTime: we,
    validateMonthYear: se,
    validateMinDate: m,
    validateMaxDate: o,
    isValidDate: (n) => Array.isArray(n) ? Zt(n[0]) && (n[1] ? Zt(n[1]) : !0) : n ? Zt(n) : !1,
    checkPartialRangeValue: (n) => {
      if (n) return null;
      throw new Error(b.prop("partial-range"));
    },
    checkRangeEnabled: (n, T) => {
      if (T) return n();
      throw new Error(b.prop("range"));
    },
    isTimeValid: U,
    isMonthValid: z
  };
}, Ln = (e) => {
  const {
    rootEmit: w,
    rootProps: f,
    defaults: { timeConfig: s, flow: l }
  } = Se(), i = ie(0), r = Ft({
    [Mt.timePicker]: !s.value.enableTimePicker || f.timePicker || f.monthPicker,
    [Mt.calendar]: !1,
    [Mt.header]: !1
  }), d = L(() => f.monthPicker || f.timePicker), p = (A) => {
    if (l.value?.steps?.length) {
      if (!A && d.value) return u();
      r[A] = !0, Object.keys(r).filter((g) => !r[g]).length || u();
    }
  }, D = () => {
    l.value?.steps?.length && i.value !== -1 && (i.value += 1, w("flow-step", i.value), u()), l.value?.steps?.length === i.value && tt().then(() => c());
  }, c = () => {
    i.value = -1;
  }, x = (A, g, ..._) => {
    l.value?.steps[i.value] === A && e.value && e.value[g]?.(..._);
  }, u = (A = 0) => {
    A && (i.value += A), x(Qe.month, "toggleMonthPicker", !0), x(Qe.year, "toggleYearPicker", !0), x(Qe.calendar, "toggleTimePicker", !1, !0), x(Qe.time, "toggleTimePicker", !0, !0);
    const g = l.value?.steps[i.value];
    (g === Qe.hours || g === Qe.minutes || g === Qe.seconds) && x(g, "toggleTimePicker", !0, !0, g);
  };
  return { childMount: p, updateFlowStep: D, resetFlow: c, handleFlow: u, flowStep: i };
};
function ya(e) {
  return (w = {}) => {
    const f = w.width ? String(w.width) : e.defaultWidth;
    return e.formats[f] || e.formats[e.defaultWidth];
  };
}
function It(e) {
  return (w, f) => {
    const s = f?.context ? String(f.context) : "standalone";
    let l;
    if (s === "formatting" && e.formattingValues) {
      const r = e.defaultFormattingWidth || e.defaultWidth, d = f?.width ? String(f.width) : r;
      l = e.formattingValues[d] || e.formattingValues[r];
    } else {
      const r = e.defaultWidth, d = f?.width ? String(f.width) : e.defaultWidth;
      l = e.values[d] || e.values[r];
    }
    const i = e.argumentCallback ? e.argumentCallback(w) : w;
    return l[i];
  };
}
function Et(e) {
  return (w, f = {}) => {
    const s = f.width, l = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], i = w.match(l);
    if (!i)
      return null;
    const r = i[0], d = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], p = Array.isArray(d) ? zn(d, (x) => x.test(r)) : (
      // [TODO] -- I challenge you to fix the type
      Hn(d, (x) => x.test(r))
    );
    let D;
    D = e.valueCallback ? e.valueCallback(p) : p, D = f.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      f.valueCallback(D)
    ) : D;
    const c = w.slice(r.length);
    return { value: D, rest: c };
  };
}
function Hn(e, w) {
  for (const f in e)
    if (Object.prototype.hasOwnProperty.call(e, f) && w(e[f]))
      return f;
}
function zn(e, w) {
  for (let f = 0; f < e.length; f++)
    if (w(e[f]))
      return f;
}
function Kn(e) {
  return (w, f = {}) => {
    const s = w.match(e.matchPattern);
    if (!s) return null;
    const l = s[0], i = w.match(e.parsePattern);
    if (!i) return null;
    let r = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    r = f.valueCallback ? f.valueCallback(r) : r;
    const d = w.slice(l.length);
    return { value: r, rest: d };
  };
}
const jn = {
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
}, Un = (e, w, f) => {
  let s;
  const l = jn[e];
  return typeof l == "string" ? s = l : w === 1 ? s = l.one : s = l.other.replace("{{count}}", w.toString()), f?.addSuffix ? f.comparison && f.comparison > 0 ? "in " + s : s + " ago" : s;
}, qn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Qn = (e, w, f, s) => qn[e], Gn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Xn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Jn = {
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
}, Zn = {
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
}, er = {
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
}, tr = {
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
}, ar = (e, w) => {
  const f = Number(e), s = f % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return f + "st";
      case 2:
        return f + "nd";
      case 3:
        return f + "rd";
    }
  return f + "th";
}, nr = {
  ordinalNumber: ar,
  era: It({
    values: Gn,
    defaultWidth: "wide"
  }),
  quarter: It({
    values: Xn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: It({
    values: Jn,
    defaultWidth: "wide"
  }),
  day: It({
    values: Zn,
    defaultWidth: "wide"
  }),
  dayPeriod: It({
    values: er,
    defaultWidth: "wide",
    formattingValues: tr,
    defaultFormattingWidth: "wide"
  })
}, rr = /^(\d+)(th|st|nd|rd)?/i, lr = /\d+/i, or = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, sr = {
  any: [/^b/i, /^(a|c)/i]
}, ur = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ir = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, cr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, dr = {
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
}, vr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, fr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, mr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, pr = {
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
}, hr = {
  ordinalNumber: Kn({
    matchPattern: rr,
    parsePattern: lr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Et({
    matchPatterns: or,
    defaultMatchWidth: "wide",
    parsePatterns: sr,
    defaultParseWidth: "any"
  }),
  quarter: Et({
    matchPatterns: ur,
    defaultMatchWidth: "wide",
    parsePatterns: ir,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Et({
    matchPatterns: cr,
    defaultMatchWidth: "wide",
    parsePatterns: dr,
    defaultParseWidth: "any"
  }),
  day: Et({
    matchPatterns: vr,
    defaultMatchWidth: "wide",
    parsePatterns: fr,
    defaultParseWidth: "any"
  }),
  dayPeriod: Et({
    matchPatterns: mr,
    defaultMatchWidth: "any",
    parsePatterns: pr,
    defaultParseWidth: "any"
  })
}, gr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, yr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, br = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, kr = {
  date: ya({
    formats: gr,
    defaultWidth: "full"
  }),
  time: ya({
    formats: yr,
    defaultWidth: "full"
  }),
  dateTime: ya({
    formats: br,
    defaultWidth: "full"
  })
}, wr = {
  code: "en-US",
  formatDistance: Un,
  formatLong: kr,
  formatRelative: Qn,
  localize: nr,
  match: hr,
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
}, Dr = {
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
  escClose: !1
}, Ra = {
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: "open",
  selectOnFocus: !1,
  rangeSeparator: " - ",
  escClose: !0,
  format: void 0
}, Mr = {
  dates: [],
  years: [],
  months: [],
  quarters: [],
  weeks: [],
  weekdays: [],
  options: { highlightDisabled: !1 }
}, _r = {
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  selectBtnLabel: "Select",
  cancelBtnLabel: "Cancel",
  nowBtnLabel: "Now"
}, Ar = {
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
}, Pr = {
  weekDays: [],
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] }
}, Tr = {
  month: "LLL",
  year: "yyyy",
  weekDay: "EEEEEE",
  quarter: "MMMM",
  input: void 0,
  preview: void 0
}, Ya = {
  target: "body",
  center: !1
}, $r = {
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
}, Sr = {
  flowStep: 0,
  menuWrapRef: null,
  collapse: !1
}, Rr = {
  weekStart: 1,
  yearRange: () => [1900, 2100],
  ui: () => ({}),
  locale: () => wr,
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
  weekNumName: "W",
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
  loading: !1
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
}, Cr = (e) => {
  const { getTimeObjFromCurrent: w } = Ee(), { toTzSafe: f } = Da(), { getMapKey: s, getMapKeyType: l } = We(), i = () => {
    const Y = X.value.enableSeconds ? ":ss" : "", V = X.value.enableMinutes ? ":mm" : "";
    return X.value.is24 ? `HH${V}${Y}` : `hh${V}${Y} aa`;
  }, r = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? i() : e.weekPicker ? `${P.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : X.value.enableTimePicker ? `MM/dd/yyyy, ${i()}` : "MM/dd/yyyy", d = (Y) => w(Y, X.value.enableSeconds), p = () => M.value.enabled ? X.value.startTime && Array.isArray(X.value.startTime) ? [d(X.value.startTime[0]), d(X.value.startTime[1])] : null : X.value.startTime && !Array.isArray(X.value.startTime) ? d(X.value.startTime) : null, D = (Y) => Y ? typeof Y == "boolean" ? Y ? 2 : 0 : Math.max(+Y, 2) : 0, c = (Y) => {
    const V = l(e.monthPicker, e.yearPicker);
    return new Map(
      Y.map((I) => {
        const ae = f(I, m.value, x.value);
        return [s(ae, V), ae];
      })
    );
  }, x = L(() => e.monthPicker || e.yearPicker || e.quarterPicker), u = L(() => {
    const Y = typeof e.multiCalendars == "object" && e.multiCalendars, V = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...V, count: D(!1) };
    const I = Y ? e.multiCalendars : {}, ae = Y ? I.count ?? !0 : e.multiCalendars, ve = D(ae);
    return Object.assign(V, I, { count: ve });
  }), A = L(() => p()), g = L(() => ({ ...Ar, ...e.ariaLabels })), _ = L(() => ({ ...Pr, ...e.filters })), R = L(() => typeof e.transitions == "boolean" ? e.transitions ? Ca : !1 : { ...Ca, ...e.transitions }), b = L(() => ({ ..._r, ...e.actionRow })), y = L(() => typeof e.textInput == "object" ? {
    ...Ra,
    format: r(),
    pattern: r(),
    ...e.textInput,
    enabled: !0
  } : {
    ...Ra,
    format: r(),
    pattern: r(),
    enabled: e.textInput
  }), N = L(() => {
    const Y = { input: !1 };
    return typeof e.inline == "object" ? { ...Y, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...Y
    };
  }), re = L(() => ({ ...Dr, ...e.config })), oe = L(() => typeof e.highlight == "function" ? e.highlight : {
    ...Mr,
    ...e.highlight
  }), P = L(() => typeof e.weekNumbers == "object" ? {
    type: e.weekNumbers?.type ?? "local",
    hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? !1
  } : {
    type: e.weekNumbers,
    hideOnOffsetDates: !1
  }), m = L(() => e.timezone ? typeof e.timezone == "string" ? {
    timezone: e.timezone,
    exactMatch: !1,
    dateInTz: void 0,
    convertModel: !0
  } : {
    timezone: e.timezone.timezone,
    exactMatch: e.timezone.exactMatch ?? !1,
    dateInTz: e.timezone.dateInTz ?? void 0,
    convertModel: e.timezone.convertModel ?? !0
  } : { timezone: void 0, exactMatch: !1 }), o = L(() => typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
    enabled: !!e.multiDates,
    limit: e.multiDates?.limit ? +e.multiDates.limit : null,
    dragSelect: e.multiDates?.dragSelect ?? !0
  }), k = L(() => ({
    minDate: f(e.minDate, m.value, x.value),
    maxDate: f(e.maxDate, m.value, x.value),
    disabledDates: Array.isArray(e.disabledDates) ? c(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? c(e.allowedDates) : null,
    highlight: typeof oe.value == "object" && Array.isArray(oe.value.dates) ? c(oe.value.dates) : oe.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((Y) => {
        const V = f(Y.date, m.value);
        return [s(V, $t.DATE), Y];
      })
    ) : null
  })), M = L(() => typeof e.range == "object" ? { enabled: !0, ...Sa, ...e.range } : {
    enabled: e.range,
    ...Sa
  }), E = L(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((V) => {
        const I = V, ae = e.ui[I];
        if (I === "dayClass") return [I, e.ui[I]];
        const ve = typeof e.ui[I] == "string" ? { [ae]: !0 } : Object.fromEntries(ae.map((Me) => [Me, !0]));
        return [V, ve];
      })
    )
  })), F = L(() => ({
    ...Tr,
    ...e.formats,
    input: e.formats?.input ?? r(),
    preview: e.formats?.preview ?? r()
  })), te = L(() => typeof e.teleport == "boolean" || !e.teleport ? { ...Ya, enabled: !!e.teleport } : { ...Ya, ...e.teleport, enabled: !0 }), X = L(() => ({ ...$r, ...e.timeConfig })), pe = L(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), Z = L(() => {
    const Y = y.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Oa, inputmode: Y, ...e.inputAttrs } : { ...Oa, inputmode: Y };
  }), ce = L(() => ({
    offset: e.floating?.offset ?? 10,
    arrow: e.floating?.arrow ?? !0
  }));
  return {
    transitions: R,
    multiCalendars: u,
    startTime: A,
    ariaLabels: g,
    filters: _,
    actionRow: b,
    textInput: y,
    inline: N,
    config: re,
    highlight: oe,
    weekNumbers: P,
    range: M,
    safeDates: k,
    tz: m,
    multiDates: o,
    ui: E,
    formats: F,
    teleport: te,
    timeConfig: X,
    flow: pe,
    inputAttrs: Z,
    floatingConfig: ce
  };
}, Ee = () => {
  const e = (P) => +(P ?? -1) >= 0, w = (P, m) => {
    if (!P) return /* @__PURE__ */ new Date();
    const o = f(P), k = Te(o, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return m ? Pn(k) : k;
  }, f = (P) => P ? new Date(P) : /* @__PURE__ */ new Date(), s = (P, m) => {
    let o = f(m);
    return e(P.hours) && (o = _n(o, +P.hours)), e(P.minutes) && (o = An(o, +P.minutes)), e(P.seconds) && (o = Ea(o, +P.seconds)), Va(o, 0);
  }, l = (P, m) => {
    const o = wa(P, { weekStartsOn: +m }), k = Ia(P, { weekStartsOn: +m });
    return [o, k];
  }, i = (P, m) => !P || !m ? !1 : St(w(P), w(m)), r = (P, m) => !P || !m ? !1 : Tt(w(P), w(m)), d = (P, m) => !P || !m ? !1 : _t(w(P), w(m)), p = (P, m, o) => P?.[0] && P?.[1] ? d(o, P[0]) && i(o, P[1]) : P?.[0] && m ? d(o, P[0]) && i(o, m) || i(o, P[0]) && d(o, m) : !1, D = (P, m) => {
    const o = d(P, m) ? m : P, k = d(m, P) ? m : P;
    return Ba({ start: o, end: k });
  }, c = (P) => `dp-${lt(P, "yyyy-MM-dd")}`, x = (P) => w(Te(f(P), { date: 1 })), u = (P, m) => {
    if (m) {
      const o = be(f(m));
      if (o > P) return 12;
      if (o === P) return Pe(f(m));
    }
  }, A = (P, m) => {
    if (m) {
      const o = be(f(m));
      return o < P ? -1 : o === P ? Pe(f(m)) : void 0;
    }
  }, g = (P) => {
    if (P) return be(f(P));
  }, _ = (P) => ({
    hours: ct(P),
    minutes: ht(P),
    seconds: Dt(P)
  }), R = (P) => Te(f(), _(P)), b = (P, m, o) => m && (o || o === 0) ? Object.fromEntries(
    ["hours", "minutes", "seconds"].map((k) => k === m ? [k, o] : [k, Number.isNaN(+P[k]) ? void 0 : +P[k]])
  ) : {
    hours: Number.isNaN(+P.hours) ? void 0 : +P.hours,
    minutes: Number.isNaN(+P.minutes) ? void 0 : +P.minutes,
    seconds: Number.isNaN(+(P.seconds ?? "")) ? void 0 : +P.seconds
  }, y = (P, m) => {
    const o = f(), k = {
      hours: ct(o),
      minutes: ht(o),
      seconds: m ? Dt(o) : 0
    };
    return Object.assign(k, P);
  }, N = (P, m) => {
    const o = Mn(w(m), P), k = pt(w(m), P);
    return { before: o, after: k };
  }, re = (P, m, o, k) => {
    const M = {
      hours: ct,
      minutes: ht,
      seconds: Dt
    };
    if (!m) return k ? [M[P](o), M[P](o)] : M[P](o);
    if (Array.isArray(m)) {
      const E = m[0] ?? o, F = m[1] ?? o;
      return [M[P](E), M[P](F)];
    }
    return M[P](m);
  };
  return {
    resetDateTime: w,
    getDate: f,
    setTime: s,
    getWeekFromDate: l,
    isDateAfter: d,
    isDateBefore: i,
    isDateBetween: p,
    isDateEqual: r,
    getDaysInBetween: D,
    getCellId: c,
    resetDate: x,
    getMinMonth: u,
    getMaxMonth: A,
    getYearFromDate: g,
    getTimeObj: _,
    setTimeValue: R,
    sanitizeTime: b,
    getTimeObjFromCurrent: y,
    getBeforeAndAfterInRange: N,
    timeGetter: re,
    setTimeModelValue: (P, m, o, k) => {
      P.hours = re("hours", m, o, k), P.minutes = re("minutes", m, o, k), P.seconds = re("seconds", m, o, k);
    }
  };
}, We = () => {
  const { getDate: e } = Ee(), w = (o) => o < 10 ? `0${o}` : o, f = (o, k, M) => typeof o == "function" ? o({ month: k, year: M }) : o.months.some((E) => E.month === k && E.year === M), s = (o, k) => typeof o == "function" ? o(k) : o.years.includes(k), l = (o, k) => {
    k.allowStopPropagation && o.stopPropagation(), k.allowPreventDefault && o.preventDefault();
  }, i = (o, k) => lt(o, k ?? $t.DATE), r = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), d = (o, k) => {
    let M = [...document.querySelectorAll(r())];
    M = M.filter((F) => !o.contains(F) || "datepicker-instance" in F.dataset);
    const E = M.indexOf(o);
    if (E >= 0 && (k ? E - 1 >= 0 : E + 1 <= M.length))
      return M[E + (k ? -1 : 1)];
  }, p = (o) => o === 0 ? o : !o || Number.isNaN(+o) ? null : +o, D = (o, k) => o ? $t.MONTH_AND_YEAR : k ? $t.YEAR : $t.DATE, c = (o, k, M) => k.get(i(o, M)), x = {
    prop: (o) => `"${o}" prop must be enabled!`,
    dateArr: (o) => `You need to use array as "model-value" binding in order to support "${o}"`
  }, u = (o) => o, A = (o) => Array.isArray(o) ? !!o[0] && !!o[1] : !1, g = (o, k) => o ? k ? k instanceof Map ? !!c(o, k) : k(e(o)) : !1 : !0, _ = (o, k) => o?.querySelector(`[data-dp-element="${k}"]`), R = (o, k, M = !1) => {
    o && k.allowStopPropagation && (M && o.stopImmediatePropagation(), o.stopPropagation());
  }, b = (o, k, M = !1, E) => {
    if (o.key === Be.enter || o.key === Be.space)
      return M && o.preventDefault(), k();
    if (E) return E(o);
  }, y = (o) => {
    if (o)
      return [...o.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, N = (o) => {
    const k = [], M = (E) => E.filter((F) => !!F);
    for (let E = 0; E < o.length; E += 3) {
      const F = [o[E], o[E + 1], o[E + 2]];
      k.push(M(F));
    }
    return k;
  };
  return {
    padZero: w,
    checkHighlightMonth: f,
    checkHighlightYear: s,
    getMapKey: i,
    findNextFocusableElement: d,
    getNumVal: p,
    getMapKeyType: D,
    getMapDate: c,
    convertType: u,
    isModelAuto: A,
    matchDate: g,
    handleEventPropagation: l,
    getElWithin: _,
    checkStopPropagation: R,
    checkKeyDown: b,
    findFocusableEl: y,
    groupListAndMap: (o, k) => N(o).map((M) => M.map((E) => {
      const { active: F, disabled: te, isBetween: X, highlighted: pe } = k(E);
      return {
        ...E,
        active: F,
        disabled: te,
        className: {
          dp__overlay_cell_active: F,
          dp__overlay_cell: !F,
          dp__overlay_cell_disabled: te,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: te && F,
          dp__cell_in_between: X,
          "dp--highlighted": pe
        }
      };
    })),
    checkMinMaxValue: (o, k, M) => {
      const E = M != null, F = k != null;
      if (!E && !F) return !1;
      const te = +M, X = +k;
      return E && F ? +o > te || +o < X : E ? +o > te : F ? +o < X : !1;
    },
    isTouchDevice: () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0,
    hoursToAmPmHours: (o) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][o],
    errorMapper: x
  };
}, ea = () => {
  const {
    defaults: { config: e }
  } = Se(), w = ie(0);
  Ke(() => {
    f(), globalThis.addEventListener("resize", f, { passive: !0 });
  }), Rt(() => {
    globalThis.removeEventListener("resize", f);
  });
  const f = () => {
    w.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: L(() => w.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, Da = () => {
  const { getDate: e, resetDateTime: w } = Ee();
  return {
    toTzSafe: (s, l, i) => {
      if (!s) return null;
      const r = i ? w(s, !0) : e(s);
      return l ? new Bn(r, l.timezone) : r;
    }
  };
}, Pt = () => {
  const { getDate: e } = Ee(), {
    state: w,
    modelValue: f,
    rootProps: s,
    defaults: { formats: l, textInput: i }
  } = Se(), r = (_) => lt(ot(e(), _), l.value.year, { locale: s.locale }), d = (_) => lt(Tn(e(), _), l.value.month, { locale: s.locale }), p = (_) => lt(e(`2017-01-0${_}T00:00:00+00:00`), l.value.weekDay, { locale: s.locale }), D = (_) => lt(_, l.value.quarter, { locale: s.locale }), c = (_, R) => [_, R].map((b) => D(b)).join("-"), x = (_, R, b) => {
    const y = b ? l.value.preview : l.value.input;
    if (!_) return "";
    if (typeof y == "function") return y(_);
    const N = R ?? y, re = { locale: s.locale };
    return Array.isArray(_) ? `${lt(_[0], N, re)}${s.modelAuto && !_[1] ? "" : i.value.rangeSeparator}${_[1] ? lt(_[1], N, re) : ""}` : lt(_, N, re);
  }, u = () => {
    const _ = (R) => lt(R, i.value.format);
    return Array.isArray(f.value) ? `${_(f.value[0])} ${i.value.rangeSeparator} ${f.value[1] ? _(f.value[1]) : ""}` : "";
  };
  return {
    formatYear: r,
    formatMonth: d,
    formatWeekDay: p,
    formatQuarter: D,
    formatSelectedDate: x,
    formatForTextInput: () => w.isInputFocused && f.value ? Array.isArray(f.value) ? u() : lt(f.value, i.value.format) : x(f.value),
    formatPreview: (_) => x(_, void 0, !0),
    formatQuarterText: c
  };
}, ta = () => {
  const { rootProps: e } = Se(), { formatYear: w, formatMonth: f } = Pt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((r) => ({
      text: f(r),
      value: r
    })),
    getYears: () => {
      const r = [];
      for (let d = +e.yearRange[0]; d <= +e.yearRange[1]; d++)
        r.push({ value: +d, text: w(d) });
      return e.reverseYears ? r.reverse() : r;
    },
    isOutOfYearRange: (r) => r < +e.yearRange[0] || r > +e.yearRange[1]
  };
}, Yr = (e) => ({
  openMenu: () => e.value?.openMenu(),
  closeMenu: () => e.value?.closeMenu(),
  selectDate: () => e.value?.selectDate(),
  clearValue: () => e.value?.clearValue(),
  formatInputValue: () => e.value?.formatInputValue(),
  updateInternalModelValue: (u) => e.value?.updateInternalModelValue(u),
  setMonthYear: (u) => e.value?.setMonthYear(u),
  parseModel: () => e.value?.parseModel(),
  switchView: (u, A) => e.value?.switchView(u, A),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu()
}), Or = () => {
  const {
    rootProps: e,
    defaults: { textInput: w, startTime: f, timeConfig: s }
  } = Se(), { getTimeObjFromCurrent: l } = Ee(), i = ie(!1), r = L(
    () => Array.isArray(f.value) ? f.value[0] : f.value ?? l({}, s.value.enableSeconds)
  ), d = (D, c, x) => {
    const u = ba(D, c.slice(0, D.length), /* @__PURE__ */ new Date(), { locale: e.locale });
    return Zt(u) && $n(u) ? x || i.value ? u : Te(u, {
      hours: +r.value.hours,
      minutes: +r.value.minutes,
      seconds: +(r.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: i,
    parseFreeInput: (D, c) => {
      if (typeof w.value.pattern == "string")
        return d(D, w.value.pattern, c);
      if (Array.isArray(w.value.pattern)) {
        let x = null;
        for (const u of w.value.pattern)
          if (x = d(D, u, c), x)
            break;
        return x;
      }
      return typeof w.value.pattern == "function" ? w.value.pattern(D) : null;
    }
  };
}, xr = {
  key: 1,
  class: "dp__input_wrap"
}, Br = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Ir = {
  key: 2,
  class: "dp--clear-btn"
}, Er = ["aria-label"], Vr = /* @__PURE__ */ Le({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 }
  },
  emits: ["clear", "open", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus", "blur", "real-blur"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, {
      rootEmit: i,
      inputValue: r,
      rootProps: d,
      defaults: { textInput: p, ariaLabels: D, inline: c, config: x, range: u, multiDates: A, ui: g, inputAttrs: _ }
    } = Se(), { checkMinMaxRange: R, isValidDate: b } = ut(), { parseFreeInput: y, textPasted: N } = Or(), { checkKeyDown: re, checkStopPropagation: oe } = We(), P = Ye("dp-input"), m = ie(null), o = ie(!1), k = L(
      () => ({
        dp__pointer: !d.disabled && !d.readonly && !p.value.enabled,
        dp__disabled: d.disabled,
        dp__input_readonly: !p.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !_.value.clearable,
        dp__input_icon_pad: !_.value.hideInputIcon,
        dp__input_valid: typeof _.value.state == "boolean" ? _.value.state : !1,
        dp__input_invalid: typeof _.value.state == "boolean" ? !_.value.state : !1,
        dp__input_focus: o.value || l.isMenuOpen,
        dp__input_reg: !p.value.enabled,
        ...g.value.input
      })
    ), M = () => {
      s("set-input-date", null), _ && d.autoApply && (s("set-empty-date"), m.value = null);
    }, E = (U) => {
      const { rangeSeparator: z } = p.value, [se, q] = U.split(`${z}`);
      if (se) {
        const de = y(se.trim(), r.value), me = q ? y(q.trim(), r.value) : void 0;
        if (_t(de, me)) return;
        const ge = de && me ? [de, me] : [de];
        R(me, ge, 0) && (m.value = de ? ge : null);
      }
    }, F = () => {
      N.value = !0;
    }, te = (U) => {
      if (u.value.enabled)
        E(U);
      else if (A.value.enabled) {
        const z = U.split(";");
        m.value = z.map((se) => y(se.trim())).filter((se) => !!se);
      } else
        m.value = y(U, r.value);
    }, X = (U) => {
      const z = typeof U == "string" ? U : U.target?.value;
      z === "" ? M() : (p.value.openMenu && !l.isMenuOpen && s("open"), te(z), s("set-input-date", m.value)), N.value = !1, r.value = z, i("text-input", U, m.value);
    }, pe = (U) => {
      p.value.enabled ? (te(U.target.value), p.value.enterSubmit && b(m.value) && r.value !== "" ? (s("set-input-date", m.value, !0), m.value = null) : p.value.enterSubmit && r.value === "" && (m.value = null, s("clear"))) : Y(U);
    }, Z = (U, z) => {
      p.value.enabled && p.value.tabSubmit && !z && te(U.target.value), p.value.tabSubmit && b(m.value) && r.value !== "" ? (s("set-input-date", m.value, !0, !0), m.value = null) : p.value.tabSubmit && r.value === "" && (m.value = null, s("clear"));
    }, ce = () => {
      o.value = !0, s("focus"), tt().then(() => {
        p.value.enabled && p.value.selectOnFocus && P.value?.select();
      });
    }, Y = (U) => {
      if (oe(U, x.value, !0), p.value.enabled && p.value.openMenu && !c.value.input) {
        if (p.value.openMenu === "open" && !l.isMenuOpen) return s("open");
        if (p.value.openMenu === "toggle") return s("toggle");
      } else p.value.enabled || s("toggle");
    }, V = () => {
      s("real-blur"), o.value = !1, (!l.isMenuOpen || c.value.enabled && c.value.input) && s("blur"), d.autoApply && p.value.enabled && m.value && !l.isMenuOpen && (s("set-input-date", m.value), s("select-date"), m.value = null);
    }, I = (U) => {
      oe(U, x.value, !0), s("clear");
    }, ae = () => {
      s("close");
    }, ve = (U) => {
      if (U.key === "Tab" && Z(U), U.key === "Enter" && pe(U), U.key === "Escape" && p.value.escClose && ae(), !p.value.enabled) {
        if (U.code === "Tab") return;
        U.preventDefault();
      }
    }, Me = () => {
      P.value?.focus({ preventScroll: !0 });
    }, we = (U) => {
      m.value = U;
    }, ye = (U) => {
      U.key === Be.tab && Z(U, !0);
    };
    return w({
      focusInput: Me,
      setParsedDate: we
    }), (U, z) => (C(), H("div", { onClick: Y }, [
      U.$slots.trigger && !U.$slots["dp-input"] && !t(c).enabled ? le(U.$slots, "trigger", { key: 0 }) : K("", !0),
      !U.$slots.trigger && (!t(c).enabled || t(c).input) ? (C(), H("div", xr, [
        U.$slots["dp-input"] && !U.$slots.trigger && (!t(c).enabled || t(c).enabled && t(c).input) ? le(U.$slots, "dp-input", {
          key: 0,
          value: t(r),
          isMenuOpen: e.isMenuOpen,
          onInput: X,
          onEnter: pe,
          onTab: Z,
          onClear: I,
          onBlur: V,
          onKeypress: ve,
          onPaste: F,
          onFocus: ce,
          openMenu: () => U.$emit("open"),
          closeMenu: () => U.$emit("close"),
          toggleMenu: () => U.$emit("toggle")
        }) : K("", !0),
        U.$slots["dp-input"] ? K("", !0) : (C(), H("input", {
          key: 1,
          id: t(_).id,
          ref: "dp-input",
          "data-test-id": "dp-input",
          name: t(_).name,
          class: ke(k.value),
          inputmode: t(_).inputmode,
          placeholder: t(d).placeholder,
          disabled: t(d).disabled,
          readonly: t(d).readonly,
          required: t(_).required,
          value: t(r),
          autocomplete: t(_).autocomplete,
          "aria-label": t(D).input,
          "aria-disabled": t(d).disabled || void 0,
          "aria-invalid": t(_).state === !1 ? !0 : void 0,
          onInput: X,
          onBlur: V,
          onFocus: ce,
          onKeypress: ve,
          onKeydown: z[0] || (z[0] = (se) => ve(se)),
          onPaste: F
        }, null, 42, Br)),
        Ae("div", {
          onClick: z[3] || (z[3] = (se) => s("toggle"))
        }, [
          U.$slots["input-icon"] && !t(_).hideInputIcon ? (C(), H("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: z[1] || (z[1] = (se) => s("toggle"))
          }, [
            le(U.$slots, "input-icon")
          ])) : K("", !0),
          !U.$slots["input-icon"] && !t(_).hideInputIcon && !U.$slots["dp-input"] ? (C(), Re(t(Ht), {
            key: 1,
            "aria-label": t(D)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: z[2] || (z[2] = (se) => s("toggle"))
          }, null, 8, ["aria-label"])) : K("", !0)
        ]),
        U.$slots["clear-icon"] && (t(_).alwaysClearable || t(r) && t(_).clearable && !t(d).disabled && !t(d).readonly) ? (C(), H("span", Ir, [
          le(U.$slots, "clear-icon", { clear: I })
        ])) : K("", !0),
        !U.$slots["clear-icon"] && (t(_).alwaysClearable || t(_).clearable && t(r) && !t(d).disabled && !t(d).readonly) ? (C(), H("button", {
          key: 3,
          "aria-label": t(D)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: z[4] || (z[4] = (se) => t(re)(se, () => I(se), !0, ye)),
          onClick: z[5] || (z[5] = Wt((se) => I(se), ["prevent"]))
        }, [
          at(t(In), { class: "dp__input_icons" })
        ], 40, Er)) : K("", !0)
      ])) : K("", !0)
    ]));
  }
}), Nr = {
  ref: "action-row",
  class: "dp__action_row"
}, Fr = ["title"], Wr = {
  ref: "action-buttons-container",
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, Lr = ["disabled"], Hr = /* @__PURE__ */ Le({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { default: 0 }
  },
  emits: ["close-picker", "select-date", "select-now"],
  setup(e, { emit: w }) {
    const f = w, s = e, {
      rootEmit: l,
      rootProps: i,
      modelValue: r,
      defaults: { actionRow: d, multiCalendars: p, inline: D, range: c, multiDates: x, formats: u }
    } = Se(), { isTimeValid: A, isMonthValid: g } = ut(), { buildMatrix: _ } = yt(), { formatPreview: R } = Pt(), { checkKeyDown: b, convertType: y } = We(), N = Ye("cancel-btn"), re = Ye("select-btn"), oe = Ye("action-buttons-container"), P = Ye("action-row"), m = ie(!1), o = ie({});
    Ke(() => {
      i.arrowNavigation && _([Ge(N), Ge(re)], "actionRow"), k(), globalThis.addEventListener("resize", k);
    }), Rt(() => {
      globalThis.removeEventListener("resize", k);
    });
    const k = () => {
      m.value = !1, setTimeout(() => {
        const Y = oe.value?.getBoundingClientRect(), V = P.value?.getBoundingClientRect();
        Y && V && (o.value.maxWidth = `${V.width - Y.width - 20}px`), m.value = !0;
      }, 0);
    }, M = L(() => c.value.enabled && !c.value.partialRange && r.value ? r.value.length === 2 : !0), E = L(
      () => !A.value(r.value) || !g.value(r.value) || !M.value
    ), F = () => {
      const Y = u.value.preview;
      return i.timePicker || i.monthPicker, Y(y(r.value));
    }, te = () => {
      const Y = r.value;
      return p.value.count > 0 ? `${R(Y[0])} - ${R(Y[1])}` : [R(Y[0]), R(Y[1])];
    }, X = L(() => !r.value || !s.menuMount ? "" : typeof u.value.preview == "string" ? Array.isArray(r.value) ? r.value.length === 2 && r.value[1] ? te() : x.value.enabled ? r.value.map((Y) => `${R(Y)}`) : i.modelAuto ? `${R(r.value[0])}` : `${R(r.value[0])} -` : R(r.value) : F()), pe = () => x.value.enabled ? "; " : " - ", Z = L(
      () => Array.isArray(X.value) ? X.value.join(pe()) : X.value
    ), ce = () => {
      A.value(r.value) && g.value(r.value) && M.value ? f("select-date") : l("invalid-select");
    };
    return (Y, V) => (C(), H("div", Nr, [
      Y.$slots["action-row"] ? le(Y.$slots, "action-row", Je(et({ key: 0 }, {
        modelValue: t(r),
        disabled: E.value,
        selectDate: () => Y.$emit("select-date"),
        closePicker: () => Y.$emit("close-picker")
      }))) : (C(), H(De, { key: 1 }, [
        t(d).showPreview ? (C(), H("div", {
          key: 0,
          class: "dp__selection_preview",
          title: Z.value,
          style: Ze(o.value)
        }, [
          Y.$slots["action-preview"] && m.value ? le(Y.$slots, "action-preview", {
            key: 0,
            value: t(r)
          }) : K("", !0),
          !Y.$slots["action-preview"] && m.value ? (C(), H(De, { key: 1 }, [
            dt(Ue(Z.value), 1)
          ], 64)) : K("", !0)
        ], 12, Fr)) : K("", !0),
        Ae("div", Wr, [
          Y.$slots["action-buttons"] ? le(Y.$slots, "action-buttons", {
            key: 0,
            value: t(r)
          }) : K("", !0),
          Y.$slots["action-buttons"] ? K("", !0) : (C(), H(De, { key: 1 }, [
            !t(D).enabled && t(d).showCancel ? (C(), H("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: V[0] || (V[0] = (I) => Y.$emit("close-picker")),
              onKeydown: V[1] || (V[1] = (I) => t(b)(I, () => Y.$emit("close-picker")))
            }, Ue(t(d).cancelBtnLabel), 545)) : K("", !0),
            t(d).showNow ? (C(), H("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: V[2] || (V[2] = (I) => Y.$emit("select-now")),
              onKeydown: V[3] || (V[3] = (I) => t(b)(I, () => Y.$emit("select-now")))
            }, Ue(t(d).nowBtnLabel), 33)) : K("", !0),
            t(d).showSelect ? (C(), H("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: E.value,
              "data-test-id": "select-button",
              onKeydown: V[4] || (V[4] = (I) => t(b)(I, () => ce())),
              onClick: ce
            }, Ue(t(d).selectBtnLabel), 41, Lr)) : K("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), aa = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: w }
  } = Se(), f = L(() => (i) => e.hideNavigation?.includes(i)), s = L(() => (i) => w.value.count ? w.value.solo ? !0 : i === 0 : !0), l = L(() => (i) => w.value.count ? w.value.solo ? !0 : i === w.value.count - 1 : !0);
  return { hideNavigationButtons: f, showLeftIcon: s, showRightIcon: l };
}, zr = ["role", "aria-label", "tabindex"], Kr = { class: "dp__selection_grid_header" }, jr = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], Ur = ["aria-label"], jt = /* @__PURE__ */ Le({
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
  setup(e, { expose: w, emit: f }) {
    const { setSelectionGrid: s, buildMultiLevelMatrix: l, setMonthPicker: i } = yt(), r = f, d = e, {
      rootProps: p,
      defaults: { ariaLabels: D, textInput: c, config: x }
    } = Se(), { hideNavigationButtons: u } = aa(), { handleEventPropagation: A, convertType: g, checkKeyDown: _, checkStopPropagation: R, getElWithin: b, findFocusableEl: y } = We(), N = Ye("toggle-button"), re = Ye("overlay-container"), oe = Ye("grid-wrap"), P = ie(!1), m = ie(null), o = ie([]), k = ie(), M = ie(0);
    vn(() => {
      m.value = null;
    }), Ke(() => {
      tt().then(() => Y()), d.noOverlayFocus || F(), E(!0);
    }), Rt(() => E(!1));
    const E = (q) => {
      p.arrowNavigation && (d.headerRefs?.length ? i(q) : s(q));
    }, F = () => {
      const q = Ge(oe);
      q && (c.value.enabled || (m.value ? m.value?.focus({ preventScroll: !0 }) : q.focus({ preventScroll: !0 })), P.value = q.clientHeight < q.scrollHeight);
    }, te = L(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !d.useRelative,
        "dp--overlay-relative": d.useRelative
      })
    ), X = L(
      () => d.useRelative ? { height: `${d.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), pe = L(() => ({
      dp__overlay_col: !0
    })), Z = L(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: P.value,
        dp__button_bottom: d.isLast
      })
    ), ce = L(() => ({
      dp__overlay_container: !0,
      dp__container_flex: d.items?.length <= 6,
      dp__container_block: d.items?.length > 6
    }));
    it(
      () => d.items,
      () => Y(!1),
      { deep: !0 }
    );
    const Y = (q = !0) => {
      tt().then(() => {
        const de = Ge(m), me = Ge(oe), ge = Ge(N), B = Ge(re), h = ge ? ge.getBoundingClientRect().height : 0;
        me && (me.getBoundingClientRect().height ? M.value = me.getBoundingClientRect().height - h : M.value = x.value.modeHeight - h), de && B && q && (B.scrollTop = de.offsetTop - B.offsetTop - (M.value / 2 - de.getBoundingClientRect().height) - h);
      });
    }, V = (q) => {
      q.disabled || r("selected", q.value);
    }, I = () => {
      r("toggle"), r("reset-flow");
    }, ae = (q) => {
      x.value.escClose && (I(), A(q, x.value));
    }, ve = (q, de, me, ge) => {
      q && ((de.active || de.value === d.focusValue) && (m.value = q), p.arrowNavigation && (Array.isArray(o.value[me]) ? o.value[me][ge] = q : o.value[me] = [q], Me()));
    }, Me = () => {
      const q = d.headerRefs?.length ? [d.headerRefs].concat(o.value) : o.value.concat([d.skipButtonRef ? [] : [N.value]]);
      l(g(q), d.headerRefs?.length ? "monthPicker" : "selectionGrid");
    }, we = (q) => {
      p.arrowNavigation || R(q, x.value, !0);
    }, ye = (q) => {
      k.value = q, r("hover-value", q);
    }, U = () => {
      if (I(), !d.isLast) {
        const q = b(d.menuWrapRef ?? null, "action-row");
        q && y(q)?.focus();
      }
    }, z = (q) => {
      switch (q.key) {
        case Be.esc:
          return ae(q);
        case Be.arrowLeft:
          return we(q);
        case Be.arrowRight:
          return we(q);
        case Be.arrowUp:
          return we(q);
        case Be.arrowDown:
          return we(q);
        default:
          return;
      }
    }, se = (q) => {
      if (q.key === Be.enter) return I();
      if (q.key === Be.tab) return U();
    };
    return w({ focusGrid: F }), (q, de) => (C(), H("div", {
      ref: "grid-wrap",
      class: ke(te.value),
      style: Ze(X.value),
      role: e.useRelative ? void 0 : "dialog",
      "aria-label": e.overlayLabel,
      tabindex: e.useRelative ? void 0 : "0",
      onKeydown: z,
      onClick: de[0] || (de[0] = Wt(() => {
      }, ["prevent"]))
    }, [
      Ae("div", {
        ref: "overlay-container",
        class: ke(ce.value),
        style: Ze({ "--dp-overlay-height": `${M.value}px` }),
        role: "grid"
      }, [
        Ae("div", Kr, [
          le(q.$slots, "header")
        ]),
        q.$slots.overlay ? le(q.$slots, "overlay", { key: 0 }) : (C(!0), H(De, { key: 1 }, Oe(e.items, (me, ge) => (C(), H("div", {
          key: ge,
          class: ke(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
          role: "row"
        }, [
          (C(!0), H(De, null, Oe(me, (B, h) => (C(), H("div", {
            key: B.value,
            ref_for: !0,
            ref: (W) => ve(W, B, ge, h),
            role: "gridcell",
            class: ke(pe.value),
            "aria-selected": B.active || void 0,
            "aria-disabled": B.disabled || void 0,
            tabindex: "0",
            "data-test-id": B.text,
            onClick: Wt((W) => V(B), ["prevent"]),
            onKeydown: (W) => t(_)(W, () => V(B), !0),
            onMouseover: (W) => ye(B.value)
          }, [
            Ae("div", {
              class: ke(B.className)
            }, [
              q.$slots.item ? le(q.$slots, "item", {
                key: 0,
                item: B
              }) : K("", !0),
              q.$slots.item ? K("", !0) : (C(), H(De, { key: 1 }, [
                dt(Ue(B.text), 1)
              ], 64))
            ], 2)
          ], 42, jr))), 128))
        ], 2))), 128))
      ], 6),
      q.$slots["button-icon"] ? Xt((C(), H("button", {
        key: 0,
        ref: "toggle-button",
        type: "button",
        "aria-label": t(D)?.toggleOverlay,
        class: ke(Z.value),
        tabindex: "0",
        onClick: I,
        onKeydown: se
      }, [
        le(q.$slots, "button-icon")
      ], 42, Ur)), [
        [Jt, !t(u)(e.type)]
      ]) : K("", !0)
    ], 46, zr));
  }
}), qr = ["data-dp-mobile"], na = /* @__PURE__ */ Le({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: w }
    } = Se(), { isMobile: f } = ea(), s = L(
      () => w.value.count > 0 ? [...new Array(w.value.count).keys()] : [0]
    );
    return (l, i) => (C(), H("div", {
      class: ke({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: t(w).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": t(f)
    }, [
      le(l.$slots, "default", {
        instances: s.value,
        wrapClass: { dp__instance_calendar: t(w).count > 0 }
      })
    ], 10, qr));
  }
}), Qr = ["data-dp-element", "aria-label", "aria-disabled"], Nt = /* @__PURE__ */ Le({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: w }) {
    const f = w, s = Ye("arrow-btn"), { checkKeyDown: l } = We();
    return Ke(() => f("set-ref", s)), (i, r) => (C(), H("button", {
      ref: "arrow-btn",
      type: "button",
      "data-dp-element": e.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled || void 0,
      onClick: r[0] || (r[0] = (d) => f("activate")),
      onKeydown: r[1] || (r[1] = (d) => t(l)(d, () => f("activate"), !0))
    }, [
      Ae("span", {
        class: ke(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        le(i.$slots, "default")
      ], 2)
    ], 40, Qr));
  }
}), Gr = ["aria-label", "data-test-id"], Qa = /* @__PURE__ */ Le({
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
    const f = w, s = e, { showRightIcon: l, showLeftIcon: i } = aa(), {
      rootProps: r,
      defaults: { config: d, ariaLabels: p, ui: D }
    } = Se(), { showTransition: c, transitionName: x } = zt(), { formatYear: u } = Pt(), A = ie(!1), g = L(() => u(s.year)), _ = (y = !1, N) => {
      A.value = !A.value, f("toggle-year-picker", { flow: y, show: N });
    }, R = (y) => {
      A.value = !1, f("year-select", y);
    }, b = (y = !1) => {
      f("handle-year", y);
    };
    return (y, N) => (C(), H(De, null, [
      Ae("div", {
        class: ke(["dp--year-mode-picker", { "dp--hidden-el": A.value }])
      }, [
        t(i)(e.instance) ? (C(), Re(Nt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(p)?.prevYear,
          disabled: e.isDisabled(!1),
          class: ke(t(D)?.navBtnPrev),
          onActivate: N[0] || (N[0] = (re) => b(!1))
        }, {
          default: _e(() => [
            y.$slots["arrow-left"] ? le(y.$slots, "arrow-left", { key: 0 }) : K("", !0),
            y.$slots["arrow-left"] ? K("", !0) : (C(), Re(t(Ha), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : K("", !0),
        Ae("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": `${e.year}-${t(p)?.openYearsOverlay}`,
          "data-test-id": `year-mode-btn-${e.instance}`,
          onClick: N[1] || (N[1] = () => _(!1)),
          onKeydown: N[2] || (N[2] = fn(() => _(!1), ["enter"]))
        }, [
          y.$slots.year ? le(y.$slots, "year", {
            key: 0,
            text: g.value,
            value: e.year
          }) : K("", !0),
          y.$slots.year ? K("", !0) : (C(), H(De, { key: 1 }, [
            dt(Ue(e.year), 1)
          ], 64))
        ], 40, Gr),
        t(l)(e.instance) ? (C(), Re(Nt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(p)?.nextYear,
          disabled: e.isDisabled(!0),
          class: ke(t(D)?.navBtnNext),
          onActivate: N[3] || (N[3] = (re) => b(!0))
        }, {
          default: _e(() => [
            y.$slots["arrow-right"] ? le(y.$slots, "arrow-right", { key: 0 }) : K("", !0),
            y.$slots["arrow-right"] ? K("", !0) : (C(), Re(t(za), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : K("", !0)
      ], 2),
      at(Ct, {
        name: t(x)(e.showYearPicker),
        css: t(c)
      }, {
        default: _e(() => [
          e.showYearPicker ? (C(), Re(jt, {
            key: 0,
            items: e.items,
            config: t(d),
            "is-last": t(r).autoApply && !t(d).keepActionRow,
            "overlay-label": t(p)?.yearPicker?.(!0),
            type: "year",
            onToggle: _,
            onSelected: N[4] || (N[4] = (re) => R(re))
          }, ze({
            "button-icon": _e(() => [
              y.$slots["calendar-icon"] ? le(y.$slots, "calendar-icon", { key: 0 }) : K("", !0),
              y.$slots["calendar-icon"] ? K("", !0) : (C(), Re(t(Ht), { key: 1 }))
            ]),
            _: 2
          }, [
            y.$slots["year-overlay-value"] ? {
              name: "item",
              fn: _e(({ item: re }) => [
                le(y.$slots, "year-overlay-value", {
                  text: re.text,
                  value: re.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "config", "is-last", "overlay-label"])) : K("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Ga = (e) => {
  const {
    rootEmit: w,
    state: f,
    month: s,
    year: l,
    modelValue: i,
    calendars: r,
    rootProps: d,
    defaults: { multiCalendars: p, range: D, safeDates: c, filters: x, highlight: u }
  } = Se(), { getDate: A, resetDate: g, getYearFromDate: _ } = Ee(), { checkHighlightYear: R, groupListAndMap: b, checkMinMaxValue: y } = We(), { getYears: N } = ta(), { validateMonthYear: re } = ut(), oe = ie([!1]), P = L(() => N()), m = L(() => (I, ae) => {
    const ve = Te(g(/* @__PURE__ */ new Date()), {
      month: s.value(I),
      year: l.value(I)
    }), Me = ae ? Na(ve) : Vt(ve);
    return re(Me, d.preventMinMaxNavigation, ae);
  }), o = () => Array.isArray(i.value) && p.value.solo && i.value[1], k = () => {
    for (let I = 0; I < p.value.count; I++)
      if (I === 0)
        r.value[I] = r.value[0];
      else if (I === p.value.count - 1 && o())
        r.value[I] = {
          month: Pe(i.value[1]),
          year: be(i.value[1])
        };
      else {
        const ae = Te(A(), r.value[I - 1]);
        r.value[I] = { month: Pe(ae), year: be(Fa(ae, 1)) };
      }
  }, M = (I) => {
    if (!I) return k();
    const ae = Te(A(), r.value[I]);
    return r.value[0].year = be(Wa(ae, p.value.count - 1)), k();
  }, E = (I, ae) => {
    const ve = Sn(ae, I);
    return D.value.showLastInRange && ve > 1 ? ae : I;
  }, F = (I) => d.focusStartDate || p.value.solo ? I[0] : I[1] ? E(I[0], I[1]) : I[0], te = () => {
    if (i.value) {
      const I = Array.isArray(i.value) ? F(i.value) : i.value;
      r.value[0] = { month: Pe(I), year: be(I) };
    }
  }, X = () => {
    te(), p.value.count && k();
  };
  it(i, (I, ae) => {
    f.isTextInputDate && JSON.stringify(I ?? {}) !== JSON.stringify(ae ?? {}) && X();
  }), Ke(() => {
    X();
  });
  const pe = (I, ae) => {
    r.value[ae].year = I, w("update-month-year", { instance: ae, year: I, month: r.value[ae].month }), p.value.count && !p.value.solo && M(ae);
  }, Z = L(() => (I) => b(P.value, (ae) => {
    const ve = l.value(I) === ae.value, Me = y(
      ae.value,
      _(c.value.minDate),
      _(c.value.maxDate)
    ) || x.value.years?.includes(l.value(I)), we = R(u.value, ae.value);
    return { active: ve, disabled: Me, highlighted: we };
  })), ce = (I, ae) => {
    pe(I, ae), V(ae);
  }, Y = (I, ae = !1) => {
    if (!m.value(I, ae)) {
      const ve = ae ? l.value(I) + 1 : l.value(I) - 1;
      pe(ve, I);
    }
  }, V = (I, ae = !1, ve) => {
    ae || e("reset-flow"), ve === void 0 ? oe.value[I] = !oe.value[I] : oe.value[I] = ve, oe.value[I] ? w("overlay-toggle", { open: !0, overlay: Qe.year }) : w("overlay-toggle", { open: !1, overlay: Qe.year });
  };
  return {
    isDisabled: m,
    groupedYears: Z,
    showYearPicker: oe,
    selectYear: pe,
    toggleYearPicker: V,
    handleYearSelect: ce,
    handleYear: Y
  };
}, ra = () => {
  const { getDate: e, isDateAfter: w, isDateBefore: f, isDateEqual: s } = Ee(), {
    rootEmit: l,
    modelValue: i,
    defaults: { range: r }
  } = Se();
  return {
    getRangeWithFixedDate: (u) => Array.isArray(i.value) && (i.value.length === 2 || i.value.length === 1 && r.value.partialRange) ? r.value.fixedStart && (w(u, i.value[0]) || s(u, i.value[0])) ? [i.value[0], u] : r.value.fixedEnd && (f(u, i.value[1]) || s(u, i.value[1])) ? [u, i.value[1]] : (l("invalid-fixed-range", u), i.value) : [],
    setPresetDate: (u) => {
      Array.isArray(u.value) && u.value.length <= 2 && r.value.enabled ? i.value = u.value.map((A) => e(A)) : Array.isArray(u.value) || (i.value = e(u.value));
    },
    checkRangeAutoApply: (u, A, g, _) => {
      u && (u[0] && u[1] && g && A("auto-apply"), u[0] && !u[1] && _ && g && A("auto-apply"));
    },
    setMonthOrYearRange: (u) => {
      let A = i.value ? i.value.slice() : [];
      return A.length === 2 && A[1] !== null && (A = []), A.length ? (f(u, A[0]) ? A.unshift(u) : A[1] = u, l("range-end", u)) : (A = [u], l("range-start", u)), A;
    },
    handleMultiDatesSelect: (u, A) => {
      if (i.value && Array.isArray(i.value))
        if (i.value.some((g) => s(u, g))) {
          const g = i.value.filter((_) => !s(_, u));
          i.value = g.length ? g : null;
        } else (A && +A > i.value.length || !A) && i.value.push(u);
      else
        i.value = [u];
    }
  };
}, Xr = (e, w) => {
  const {
    rootEmit: f,
    state: s,
    calendars: l,
    year: i,
    modelValue: r,
    rootProps: d,
    defaults: { range: p, highlight: D, safeDates: c, filters: x, multiDates: u }
  } = Se();
  Kt(() => {
    s.isTextInputDate && ce(be(_(d.startDate)), 0);
  });
  const { checkMinMaxRange: A } = ut(), { isDateBetween: g, getDate: _, resetDateTime: R, resetDate: b, getMinMonth: y, getMaxMonth: N } = Ee(), { checkRangeAutoApply: re, getRangeWithFixedDate: oe, handleMultiDatesSelect: P, setMonthOrYearRange: m, setPresetDate: o } = ra(), { padZero: k, checkHighlightMonth: M, checkMinMaxValue: E, groupListAndMap: F } = We(), { getMonths: te, isOutOfYearRange: X } = ta(), pe = L(() => te()), Z = ie(null), {
    selectYear: ce,
    groupedYears: Y,
    showYearPicker: V,
    toggleYearPicker: I,
    handleYearSelect: ae,
    handleYear: ve,
    isDisabled: Me
  } = Ga(w);
  Ke(() => {
    d.startDate && (r.value && d.focusStartDate || !r.value) && ce(be(_(d.startDate)), 0);
  });
  const we = (Q) => Q ? { month: Pe(Q), year: be(Q) } : { month: null, year: null }, ye = () => r.value ? Array.isArray(r.value) ? r.value.map((Q) => we(Q)) : we(r.value) : we(), U = (Q, a) => {
    const O = l.value[Q], v = ye();
    return Array.isArray(v) ? v.some((J) => J.year === O?.year && J.month === a) : O?.year === v.year && a === v.month;
  }, z = (Q, a, O) => {
    const v = ye();
    return Array.isArray(v) ? i.value(a) === v[O]?.year && Q === v[O]?.month : !1;
  }, se = (Q, a) => {
    if (p.value.enabled) {
      const O = ye();
      if (Array.isArray(r.value) && Array.isArray(O)) {
        const v = z(Q, a, 0) || z(Q, a, 1), J = Te(b(_()), { month: Q, year: i.value(a) });
        return g(r.value, Z.value, J) && !v;
      }
      return !1;
    }
    return !1;
  }, q = L(() => (Q) => F(pe.value, (a) => {
    const O = U(Q, a.value), v = E(
      a.value,
      y(i.value(Q), c.value.minDate),
      N(i.value(Q), c.value.maxDate)
    ) || j(c.value.disabledDates, i.value(Q), a.value) || x.value.months?.includes(a.value) || !ne(c.value.allowedDates, i.value(Q), a.value) || X(i.value(Q)), J = se(a.value, Q), G = M(D.value, a.value, i.value(Q));
    return { active: O, disabled: v, isBetween: J, highlighted: G };
  })), de = (Q, a) => Te(b(_()), { month: Q, year: i.value(a) }), me = (Q, a) => {
    const O = r.value ? r.value : b(/* @__PURE__ */ new Date());
    r.value = Te(O, { month: Q, year: i.value(a) }), w("auto-apply"), w("update-flow-step");
  }, ge = (Q, a) => {
    const O = de(Q, a);
    p.value.fixedEnd || p.value.fixedStart ? r.value = oe(O) : r.value ? A(O, r.value) && (r.value = m(de(Q, a))) : r.value = [de(Q, a)], tt().then(() => {
      re(r.value, w, d.autoApply, d.modelAuto);
    });
  }, B = (Q, a) => {
    P(de(Q, a), u.value.limit), w("auto-apply", !0);
  }, h = (Q, a) => (l.value[a].month = Q, n(a, l.value[a].year, Q), u.value.enabled ? B(Q, a) : p.value.enabled ? ge(Q, a) : me(Q, a)), W = (Q, a) => {
    ce(Q, a), n(a, Q, null);
  }, n = (Q, a, O) => {
    let v = O;
    if (!v && v !== 0) {
      const J = ye();
      v = Array.isArray(J) ? J[Q].month : J.month;
    }
    f("update-month-year", { instance: Q, year: a, month: v });
  }, T = (Q, a) => {
    Z.value = de(Q, a);
  }, S = (Q, a) => {
    o({
      value: Q
    }), w("auto-apply");
  }, j = (Q, a, O) => {
    if (Q instanceof Map) {
      const v = `${k(O + 1)}-${a}`;
      return Q.size ? Q.has(v) : !1;
    }
    return typeof Q == "function" ? Q(R(Te(_(), { month: O, year: a }), !0)) : !1;
  }, ne = (Q, a, O) => {
    if (Q instanceof Map) {
      const v = `${k(O + 1)}-${a}`;
      return Q.size ? Q.has(v) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: q,
    groupedYears: Y,
    year: i,
    isDisabled: Me,
    showYearPicker: V,
    modelValue: r,
    toggleYearPicker: I,
    handleYearSelect: ae,
    handleYear: ve,
    presetDate: S,
    setHoverDate: T,
    selectMonth: h,
    selectYear: W,
    getModelMonthYear: ye
  };
}, Jr = /* @__PURE__ */ Le({
  __name: "MonthPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply", "update-flow-step", "mount"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, i = gt(), { mapSlots: r } = At(), {
      rootProps: d,
      defaults: { config: p }
    } = Se(), D = r(i, "yearMode");
    Ke(() => {
      s("mount");
    });
    const {
      groupedMonths: c,
      groupedYears: x,
      year: u,
      isDisabled: A,
      showYearPicker: g,
      modelValue: _,
      presetDate: R,
      setHoverDate: b,
      selectMonth: y,
      selectYear: N,
      toggleYearPicker: re,
      handleYearSelect: oe,
      handleYear: P,
      getModelMonthYear: m
    } = Xr(l, s);
    return w({ getSidebarProps: () => ({
      modelValue: _,
      year: u,
      getModelMonthYear: m,
      selectMonth: y,
      selectYear: N,
      handleYear: P
    }), presetDate: R, toggleYearPicker: (k) => re(0, k) }), (k, M) => (C(), Re(na, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: _e(({ instances: E, wrapClass: F }) => [
        (C(!0), H(De, null, Oe(E, (te) => (C(), H("div", {
          key: te,
          class: ke(F)
        }, [
          k.$slots["top-extra"] ? le(k.$slots, "top-extra", {
            key: 0,
            value: t(_)
          }) : K("", !0),
          k.$slots["month-year"] ? le(k.$slots, "month-year", et({
            key: 1,
            ref_for: !0
          }, {
            year: t(u),
            months: t(c)(te),
            years: t(x)(te),
            selectMonth: t(y),
            selectYear: t(N),
            instance: te
          })) : (C(), Re(jt, {
            key: 2,
            items: t(c)(te),
            "is-last": t(d).autoApply && !t(p).keepActionRow,
            height: t(p).modeHeight,
            "no-overlay-focus": !!(e.noOverlayFocus || t(d).textInput),
            "use-relative": "",
            type: "month",
            onSelected: (X) => t(y)(X, te),
            onHoverValue: (X) => t(b)(X, te)
          }, ze({
            header: _e(() => [
              at(Qa, {
                items: t(x)(te),
                instance: te,
                "show-year-picker": t(g)[te],
                year: t(u)(te),
                "is-disabled": (X) => t(A)(te, X),
                onHandleYear: (X) => t(P)(te, X),
                onYearSelect: (X) => t(oe)(X, te),
                onToggleYearPicker: (X) => t(re)(te, X?.flow, X?.show)
              }, ze({ _: 2 }, [
                Oe(t(D), (X, pe) => ({
                  name: X,
                  fn: _e((Z) => [
                    le(k.$slots, X, et({ ref_for: !0 }, Z))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            k.$slots["month-overlay-value"] ? {
              name: "item",
              fn: _e(({ item: X }) => [
                le(k.$slots, "month-overlay-value", {
                  text: X.text,
                  value: X.value
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
}), Zr = (e, w) => {
  const {
    rootEmit: f,
    state: s,
    modelValue: l,
    rootProps: i,
    defaults: { highlight: r, multiDates: d, filters: p, range: D, safeDates: c }
  } = Se(), { getYears: x } = ta(), { checkHighlightYear: u, groupListAndMap: A, checkMinMaxValue: g } = We(), { getDate: _, isDateBetween: R, resetDate: b, resetDateTime: y, getYearFromDate: N } = Ee(), { checkRangeAutoApply: re, setMonthOrYearRange: oe } = ra();
  Kt(() => {
    s.isTextInputDate && (m.value = be(_(i.startDate)));
  });
  const P = ie(null), m = ie();
  Ke(() => {
    i.startDate && (l.value && i.focusStartDate || !l.value) && (m.value = be(_(i.startDate)));
  });
  const o = (Z) => Array.isArray(l.value) ? l.value.some((ce) => be(ce) === Z) : l.value ? be(l.value) === Z : !1, k = (Z) => D.value.enabled && Array.isArray(l.value) ? R(l.value, P.value, te(Z)) : !1, M = (Z) => c.value.allowedDates instanceof Map ? c.value.allowedDates.size ? c.value.allowedDates.has(`${Z}`) : !1 : !0, E = (Z) => c.value.disabledDates instanceof Map ? c.value.disabledDates.size ? c.value.disabledDates.has(`${Z}`) : !1 : typeof c.value.disabledDates == "function" ? c.value.disabledDates(ot(y(Vt(_())), Z)) : !0, F = L(() => A(x(), (Z) => {
    const ce = o(Z.value), Y = g(
      Z.value,
      N(c.value.minDate),
      N(c.value.maxDate)
    ) || p.value.years.includes(Z.value) || !M(Z.value) || E(Z.value), V = k(Z.value) && !ce, I = u(r.value, Z.value);
    return { active: ce, disabled: Y, isBetween: V, highlighted: I };
  })), te = (Z) => ot(b(Vt(/* @__PURE__ */ new Date())), Z);
  return {
    groupedYears: F,
    focusYear: m,
    setHoverValue: (Z) => {
      P.value = ot(b(/* @__PURE__ */ new Date()), Z);
    },
    selectYear: (Z) => {
      if (f("update-month-year", { instance: 0, year: Z, month: Number.NaN }), d.value.enabled)
        return l.value ? Array.isArray(l.value) && ((l.value?.map((Y) => be(Y))).includes(Z) ? l.value = l.value.filter((Y) => be(Y) !== Z) : l.value.push(ot(y(_()), Z))) : l.value = [ot(y(Vt(_())), Z)], w("auto-apply", !0);
      D.value.enabled ? (l.value = oe(te(Z)), tt().then(() => {
        re(l.value, w, i.autoApply, i.modelAuto);
      })) : (l.value = te(Z), w("auto-apply"));
    }
  };
}, el = /* @__PURE__ */ Le({
  __name: "YearPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, {
      modelValue: i,
      defaults: { config: r },
      rootProps: d
    } = Se(), { groupedYears: p, focusYear: D, selectYear: c, setHoverValue: x } = Zr(l, s);
    return w({ getSidebarProps: () => ({
      modelValue: i,
      selectYear: c
    }) }), (A, g) => (C(), H("div", null, [
      A.$slots["top-extra"] ? le(A.$slots, "top-extra", {
        key: 0,
        value: t(i)
      }) : K("", !0),
      A.$slots["month-year"] ? le(A.$slots, "month-year", Je(et({ key: 1 }, {
        years: t(p),
        selectYear: t(c)
      }))) : (C(), Re(jt, {
        key: 2,
        items: t(p),
        "is-last": t(d).autoApply && !t(r).keepActionRow,
        height: t(r).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || t(d).textInput),
        "focus-value": t(D),
        type: "year",
        "use-relative": "",
        onSelected: t(c),
        onHoverValue: t(x)
      }, ze({ _: 2 }, [
        A.$slots["year-overlay-value"] ? {
          name: "item",
          fn: _e(({ item: _ }) => [
            le(A.$slots, "year-overlay-value", {
              text: _.text,
              value: _.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), tl = {
  key: 0,
  class: "dp__time_input"
}, al = ["data-compact", "data-collapsed"], nl = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], rl = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], ll = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], ol = { key: 0 }, sl = ["aria-label", "data-compact"], ul = /* @__PURE__ */ Le({
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
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, { setTimePickerElements: i, setTimePickerBackRef: r } = yt(), {
      rootEmit: d,
      rootProps: p,
      defaults: { ariaLabels: D, filters: c, config: x, range: u, multiCalendars: A, timeConfig: g }
    } = Se(), { checkKeyDown: _, groupListAndMap: R, hoursToAmPmHours: b } = We(), { getDate: y, sanitizeTime: N } = Ee(), { transitionName: re, showTransition: oe } = zt(), P = Ft({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), m = ie("AM"), o = ie(null), k = ie([]), M = ie(), E = ie(!1);
    Ke(() => {
      s("mounted");
    });
    const F = (a) => Te(/* @__PURE__ */ new Date(), {
      hours: a.hours,
      minutes: a.minutes,
      seconds: g.value.enableSeconds ? a.seconds : 0,
      milliseconds: 0
    }), te = L(
      () => (a) => U(a, l[a]) || pe(a, l[a])
    ), X = L(() => ({ hours: l.hours, minutes: l.minutes, seconds: l.seconds })), pe = (a, O) => u.value.enabled && !u.value.disableTimeRangeValidation ? !l.validateTime(a, O) : !1, Z = (a, O) => {
      if (u.value.enabled && !u.value.disableTimeRangeValidation) {
        const v = O ? +g.value[`${a}Increment`] : -+g.value[`${a}Increment`], J = l[a] + v;
        return !l.validateTime(a, J);
      }
      return !1;
    }, ce = L(() => (a) => !me(+l[a] + +g.value[`${a}Increment`], a) || Z(a, !0)), Y = L(() => (a) => !me(+l[a] - +g.value[`${a}Increment`], a) || Z(a, !1)), V = (a, O) => La(Te(y(), a), O), I = (a, O) => Rn(Te(y(), a), O), ae = L(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !g.value.timePickerInline,
        dp__time_col_reg_block: !g.value.enableSeconds && g.value.is24 && !g.value.timePickerInline,
        dp__time_col_reg_inline: !g.value.enableSeconds && g.value.is24 && g.value.timePickerInline,
        dp__time_col_reg_with_button: !g.value.enableSeconds && !g.value.is24,
        dp__time_col_sec: g.value.enableSeconds && g.value.is24,
        dp__time_col_sec_with_button: g.value.enableSeconds && !g.value.is24
      })
    ), ve = L(
      () => g.value.timePickerInline && u.value.enabled && !A.value.count
    ), Me = L(() => {
      const a = [{ type: "hours" }];
      return g.value.enableMinutes && a.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), g.value.enableSeconds && a.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), a;
    }), we = L(() => Me.value.filter((a) => !a.separator)), ye = L(() => (a) => {
      if (a === "hours") {
        const O = T(+l.hours);
        return { text: O < 10 ? `0${O}` : `${O}`, value: O };
      }
      return { text: l[a] < 10 ? `0${l[a]}` : `${l[a]}`, value: l[a] };
    }), U = (a, O) => {
      if (!l.disabledTimesConfig) return !1;
      const v = l.disabledTimesConfig(l.order, a === "hours" ? O : void 0);
      return v[a] ? !!v[a]?.includes(O) : !0;
    }, z = (a, O) => O !== "hours" || m.value === "AM" ? a : a + 12, se = (a) => {
      const O = g.value.is24 ? 24 : 12, v = a === "hours" ? O : 60, J = +g.value[`${a}GridIncrement`], G = a === "hours" && !g.value.is24 ? J : 0, Ce = [];
      for (let fe = G; fe < v; fe += J)
        Ce.push({
          value: g.value.is24 ? fe : z(fe, a),
          text: fe < 10 ? `0${fe}` : `${fe}`
        });
      return a === "hours" && !g.value.is24 && Ce.unshift({ value: m.value === "PM" ? 12 : 0, text: "12" }), R(Ce, (fe) => ({ active: !1, disabled: c.value.times[a].includes(fe.value) || !me(fe.value, a) || U(a, fe.value) || pe(a, fe.value) }));
    }, q = (a) => a >= 0 ? a : 59, de = (a) => a >= 0 ? a : 23, me = (a, O) => {
      const v = p.minTime ? F(N(p.minTime)) : null, J = p.maxTime ? F(N(p.maxTime)) : null, G = F(
        N(
          X.value,
          O,
          O === "minutes" || O === "seconds" ? q(a) : de(a)
        )
      );
      return v && J ? (St(G, J) || Tt(G, J)) && (_t(G, v) || Tt(G, v)) : v ? _t(G, v) || Tt(G, v) : J ? St(G, J) || Tt(G, J) : !0;
    }, ge = (a) => g.value[`no${a[0].toUpperCase() + a.slice(1)}Overlay`], B = (a) => {
      ge(a) || (P[a] = !P[a], P[a] ? (E.value = !0, s("overlay-opened", a)) : (E.value = !1, s("overlay-closed", a)));
    }, h = (a) => a === "hours" ? ct : a === "minutes" ? ht : Dt, W = () => {
      M.value && clearTimeout(M.value);
    }, n = (a, O = !0, v) => {
      const J = O ? V : I, G = O ? +g.value[`${a}Increment`] : -+g.value[`${a}Increment`];
      me(+l[a] + G, a) && s(
        `update:${a}`,
        h(a)(
          J({ [a]: +l[a] }, { [a]: +g.value[`${a}Increment`] })
        )
      ), !v?.keyboard && x.value.timeArrowHoldThreshold && (M.value = setTimeout(() => {
        n(a, O);
      }, x.value.timeArrowHoldThreshold));
    }, T = (a) => g.value.is24 ? a : (a >= 12 ? m.value = "PM" : m.value = "AM", b(a)), S = () => {
      m.value === "PM" ? (m.value = "AM", s("update:hours", l.hours - 12)) : (m.value = "PM", s("update:hours", l.hours + 12)), d("am-pm-change", m.value);
    }, j = (a) => {
      P[a] = !0;
    }, ne = (a, O, v) => {
      if (a && p.arrowNavigation) {
        Array.isArray(k.value[O]) ? k.value[O][v] = a : k.value[O] = [a];
        const J = k.value.reduce(
          (G, Ce) => Ce.map((fe, He) => [...G[He] || [], Ce[He]]),
          []
        );
        r(l.closeTimePickerBtn), o.value && (J[1] = J[1].concat(o.value)), i(J, l.order);
      }
    }, Q = (a, O) => (B(a), s(`update:${a}`, O));
    return w({ openChildCmp: j }), (a, O) => t(p).disabled ? K("", !0) : (C(), H("div", tl, [
      (C(!0), H(De, null, Oe(Me.value, (v, J) => (C(), H("div", {
        key: J,
        class: ke(ae.value),
        "data-compact": ve.value && !t(g).enableSeconds,
        "data-collapsed": ve.value && t(g).enableSeconds
      }, [
        v.separator ? (C(), H(De, { key: 0 }, [
          E.value ? K("", !0) : (C(), H(De, { key: 0 }, [
            dt(":")
          ], 64))
        ], 64)) : (C(), H(De, { key: 1 }, [
          Ae("button", {
            ref_for: !0,
            ref: (G) => ne(G, J, 0),
            type: "button",
            class: ke({
              dp__btn: !0,
              dp__inc_dec_button: !t(g).timePickerInline,
              dp__inc_dec_button_inline: t(g).timePickerInline,
              dp__tp_inline_btn_top: t(g).timePickerInline,
              dp__inc_dec_button_disabled: ce.value(v.type),
              "dp--hidden-el": E.value
            }),
            "data-test-id": `${v.type}-time-inc-btn-${l.order}`,
            "aria-label": t(D)?.incrementValue(v.type),
            tabindex: "0",
            onKeydown: (G) => t(_)(G, () => n(v.type, !0, { keyboard: !0 }), !0),
            onClick: (G) => t(x).timeArrowHoldThreshold ? void 0 : n(v.type, !0),
            onMousedown: (G) => t(x).timeArrowHoldThreshold ? n(v.type, !0) : void 0,
            onMouseup: W
          }, [
            t(g).timePickerInline ? (C(), H(De, { key: 1 }, [
              a.$slots["tp-inline-arrow-up"] ? le(a.$slots, "tp-inline-arrow-up", { key: 0 }) : (C(), H(De, { key: 1 }, [
                O[2] || (O[2] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                O[3] || (O[3] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (C(), H(De, { key: 0 }, [
              a.$slots["arrow-up"] ? le(a.$slots, "arrow-up", { key: 0 }) : K("", !0),
              a.$slots["arrow-up"] ? K("", !0) : (C(), Re(t(ja), { key: 1 }))
            ], 64))
          ], 42, nl),
          Ae("button", {
            ref_for: !0,
            ref: (G) => ne(G, J, 1),
            type: "button",
            "aria-label": `${ye.value(v.type).text}-${t(D)?.openTpOverlay(v.type)}`,
            class: ke({
              dp__time_display: !0,
              dp__time_display_block: !t(g).timePickerInline,
              dp__time_display_inline: t(g).timePickerInline,
              "dp--time-invalid": te.value(v.type),
              "dp--time-overlay-btn": !te.value(v.type),
              "dp--hidden-el": E.value
            }),
            disabled: ge(v.type),
            tabindex: "0",
            "data-test-id": `${v.type}-toggle-overlay-btn-${l.order}`,
            onKeydown: (G) => t(_)(G, () => B(v.type), !0),
            onClick: (G) => B(v.type)
          }, [
            a.$slots[v.type] ? le(a.$slots, v.type, {
              key: 0,
              text: ye.value(v.type).text,
              value: ye.value(v.type).value
            }) : K("", !0),
            a.$slots[v.type] ? K("", !0) : (C(), H(De, { key: 1 }, [
              dt(Ue(ye.value(v.type).text), 1)
            ], 64))
          ], 42, rl),
          Ae("button", {
            ref_for: !0,
            ref: (G) => ne(G, J, 2),
            type: "button",
            class: ke({
              dp__btn: !0,
              dp__inc_dec_button: !t(g).timePickerInline,
              dp__inc_dec_button_inline: t(g).timePickerInline,
              dp__tp_inline_btn_bottom: t(g).timePickerInline,
              dp__inc_dec_button_disabled: Y.value(v.type),
              "dp--hidden-el": E.value
            }),
            "data-test-id": `${v.type}-time-dec-btn-${l.order}`,
            "aria-label": t(D)?.decrementValue(v.type),
            tabindex: "0",
            onKeydown: (G) => t(_)(G, () => n(v.type, !1, { keyboard: !0 }), !0),
            onClick: (G) => t(x).timeArrowHoldThreshold ? void 0 : n(v.type, !1),
            onMousedown: (G) => t(x).timeArrowHoldThreshold ? n(v.type, !1) : void 0,
            onMouseup: W
          }, [
            t(g).timePickerInline ? (C(), H(De, { key: 1 }, [
              a.$slots["tp-inline-arrow-down"] ? le(a.$slots, "tp-inline-arrow-down", { key: 0 }) : (C(), H(De, { key: 1 }, [
                O[4] || (O[4] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                O[5] || (O[5] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (C(), H(De, { key: 0 }, [
              a.$slots["arrow-down"] ? le(a.$slots, "arrow-down", { key: 0 }) : K("", !0),
              a.$slots["arrow-down"] ? K("", !0) : (C(), Re(t(Ua), { key: 1 }))
            ], 64))
          ], 42, ll)
        ], 64))
      ], 10, al))), 128)),
      t(g).is24 ? K("", !0) : (C(), H("div", ol, [
        a.$slots["am-pm-button"] ? le(a.$slots, "am-pm-button", {
          key: 0,
          toggle: S,
          value: m.value
        }) : K("", !0),
        a.$slots["am-pm-button"] ? K("", !0) : (C(), H("button", {
          key: 1,
          ref_key: "amPmButton",
          ref: o,
          type: "button",
          class: "dp__pm_am_button",
          role: "button",
          "aria-label": t(D)?.amPmButton,
          tabindex: "0",
          "data-compact": ve.value,
          onClick: S,
          onKeydown: O[0] || (O[0] = (v) => t(_)(v, () => S(), !0))
        }, Ue(m.value), 41, sl))
      ])),
      (C(!0), H(De, null, Oe(we.value, (v, J) => (C(), Re(Ct, {
        key: J,
        name: t(re)(P[v.type]),
        css: t(oe)
      }, {
        default: _e(() => [
          P[v.type] ? (C(), Re(jt, {
            key: 0,
            items: se(v.type),
            "is-last": t(p).autoApply && !t(x).keepActionRow,
            type: v.type,
            "aria-labels": t(D),
            "overlay-label": t(D).timeOverlay?.(v.type),
            onSelected: (G) => Q(v.type, G),
            onToggle: (G) => B(v.type),
            onResetFlow: O[1] || (O[1] = (G) => a.$emit("reset-flow"))
          }, ze({
            "button-icon": _e(() => [
              a.$slots["clock-icon"] ? le(a.$slots, "clock-icon", { key: 0 }) : K("", !0),
              a.$slots["clock-icon"] ? K("", !0) : (C(), Re(ka(t(g).timePickerInline ? t(Ht) : t(Ka)), { key: 1 }))
            ]),
            _: 2
          }, [
            a.$slots[`${v.type}-overlay-value`] ? {
              name: "item",
              fn: _e(({ item: G }) => [
                le(a.$slots, `${v.type}-overlay-value`, {
                  text: G.text,
                  value: G.value
                })
              ]),
              key: "0"
            } : void 0,
            a.$slots[`${v.type}-overlay-header`] ? {
              name: "header",
              fn: _e(() => [
                le(a.$slots, `${v.type}-overlay-header`, {
                  toggle: () => B(v.type)
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["items", "is-last", "type", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : K("", !0)
        ]),
        _: 2
      }, 1032, ["name", "css"]))), 128))
    ]));
  }
}), il = ["data-dp-mobile"], cl = ["aria-label", "tabindex"], dl = ["role", "aria-label", "tabindex"], vl = ["aria-label"], Xa = /* @__PURE__ */ Le({
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
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, {
      rootEmit: i,
      modelValue: r,
      rootProps: d,
      defaults: { ariaLabels: p, textInput: D, config: c, range: x, timeConfig: u }
    } = Se(), { checkKeyDown: A, findFocusableEl: g, isModelAuto: _ } = We(), { buildMatrix: R, setTimePicker: b } = yt(), { transitionName: y, showTransition: N } = zt(), { hideNavigationButtons: re } = aa(), { mapSlots: oe } = At(), { isMobile: P } = ea(), m = gt(), o = Ye("overlay"), k = Ye("open-tp-btn"), M = Ye("close-tp-btn"), E = Ye("tp-input"), F = ie(!1);
    Ke(() => {
      s("mount"), !d.timePicker && d.arrowNavigation ? R([Ge(k.value)], "time") : b(!0, d.timePicker);
    });
    const te = L(() => x.value.enabled && d.modelAuto ? _(r.value) : !0), X = ie(!1), pe = (z) => ({
      hours: Array.isArray(l.hours) ? l.hours[z] : l.hours,
      minutes: Array.isArray(l.minutes) ? l.minutes[z] : l.minutes,
      seconds: Array.isArray(l.seconds) ? l.seconds[z] : l.seconds
    }), Z = L(() => {
      const z = [];
      if (x.value.enabled)
        for (let se = 0; se < 2; se++)
          z.push(pe(se));
      else
        z.push(pe(0));
      return z;
    }), ce = (z, se = !1, q = "") => {
      se || s("reset-flow"), X.value = z, i("overlay-toggle", { open: z, overlay: Qe.time }), d.arrowNavigation && b(z), tt(() => {
        q !== "" && E.value?.[0] && E.value[0].openChildCmp(q);
      });
    }, Y = L(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: d.autoApply && !c.value.keepActionRow
    })), V = oe(m, "timePicker"), I = (z, se, q) => x.value.enabled ? se === 0 ? [z, Z.value[1][q]] : [Z.value[0][q], z] : z, ae = (z) => {
      s("update:hours", z);
    }, ve = (z) => {
      s("update:minutes", z);
    }, Me = (z) => {
      s("update:seconds", z);
    }, we = () => {
      if (o.value && !D.value.enabled && !l.noOverlayFocus) {
        const z = g(o.value);
        z && z.focus({ preventScroll: !0 });
      }
    }, ye = (z) => {
      F.value = !1, i("overlay-toggle", { open: !1, overlay: z });
    }, U = (z) => {
      F.value = !0, i("overlay-toggle", { open: !0, overlay: z });
    };
    return w({ toggleTimePicker: ce }), (z, se) => (C(), H("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(P)
    }, [
      !t(d).timePicker && !t(u).timePickerInline ? Xt((C(), H("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        class: ke({ ...Y.value, "dp--hidden-el": X.value }),
        "aria-label": t(p)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: se[0] || (se[0] = (q) => t(A)(q, () => ce(!0))),
        onClick: se[1] || (se[1] = (q) => ce(!0))
      }, [
        z.$slots["clock-icon"] ? le(z.$slots, "clock-icon", { key: 0 }) : K("", !0),
        z.$slots["clock-icon"] ? K("", !0) : (C(), Re(t(Ka), { key: 1 }))
      ], 42, cl)), [
        [Jt, !t(re)("time")]
      ]) : K("", !0),
      at(Ct, {
        name: t(y)(X.value),
        css: t(N) && !t(u).timePickerInline
      }, {
        default: _e(() => [
          X.value || t(d).timePicker || t(u).timePickerInline ? (C(), H("div", {
            key: 0,
            ref: "overlay",
            role: t(u).timePickerInline ? void 0 : "dialog",
            class: ke({
              dp__overlay: !t(u).timePickerInline,
              "dp--overlay-absolute": !t(d).timePicker && !t(u).timePickerInline,
              "dp--overlay-relative": t(d).timePicker
            }),
            style: Ze(t(d).timePicker ? { height: `${t(c).modeHeight}px` } : void 0),
            "aria-label": t(p)?.timePicker,
            tabindex: t(u).timePickerInline ? void 0 : 0
          }, [
            Ae("div", {
              class: ke(
                t(u).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
              ),
              style: { display: "flex" }
            }, [
              z.$slots["time-picker-overlay"] ? le(z.$slots, "time-picker-overlay", {
                key: 0,
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: ae,
                setMinutes: ve,
                setSeconds: Me
              }) : K("", !0),
              z.$slots["time-picker-overlay"] ? K("", !0) : (C(), H("div", {
                key: 1,
                class: ke(t(u).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
              }, [
                (C(!0), H(De, null, Oe(Z.value, (q, de) => Xt((C(), Re(ul, et({ key: de }, { ref_for: !0 }, {
                  order: de,
                  hours: q.hours,
                  minutes: q.minutes,
                  seconds: q.seconds,
                  closeTimePickerBtn: M.value,
                  disabledTimesConfig: e.disabledTimesConfig,
                  disabled: de === 0 ? t(x).fixedStart : t(x).fixedEnd
                }, {
                  ref_for: !0,
                  ref: "tp-input",
                  "validate-time": (me, ge) => e.validateTime(me, I(ge, de, me)),
                  "onUpdate:hours": (me) => ae(I(me, de, "hours")),
                  "onUpdate:minutes": (me) => ve(I(me, de, "minutes")),
                  "onUpdate:seconds": (me) => Me(I(me, de, "seconds")),
                  onMounted: we,
                  onOverlayClosed: ye,
                  onOverlayOpened: U
                }), ze({ _: 2 }, [
                  Oe(t(V), (me, ge) => ({
                    name: me,
                    fn: _e((B) => [
                      le(z.$slots, me, et({ ref_for: !0 }, B))
                    ])
                  }))
                ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [Jt, de === 0 ? !0 : te.value]
                ])), 128))
              ], 2)),
              !t(d).timePicker && !t(u).timePickerInline ? Xt((C(), H("button", {
                key: 2,
                ref: "close-tp-btn",
                type: "button",
                class: ke({ ...Y.value, "dp--hidden-el": F.value }),
                "aria-label": t(p)?.closeTimePicker,
                tabindex: "0",
                onKeydown: se[2] || (se[2] = (q) => t(A)(q, () => ce(!1))),
                onClick: se[3] || (se[3] = (q) => ce(!1))
              }, [
                z.$slots["calendar-icon"] ? le(z.$slots, "calendar-icon", { key: 0 }) : K("", !0),
                z.$slots["calendar-icon"] ? K("", !0) : (C(), Re(t(Ht), { key: 1 }))
              ], 42, vl)), [
                [Jt, !t(re)("time")]
              ]) : K("", !0)
            ], 2)
          ], 14, dl)) : K("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 8, il));
  }
}), Ja = (e) => {
  const { getDate: w, isDateEqual: f, setTime: s } = Ee(), {
    modelValue: l,
    time: i,
    rootProps: r,
    defaults: { range: d, timeConfig: p }
  } = Se(), D = (m, o) => Array.isArray(i[m]) ? i[m][o] : i[m], c = (m) => p.value.enableSeconds ? Array.isArray(i.seconds) ? i.seconds[m] : i.seconds : 0, x = (m, o) => m ? s(
    o !== void 0 ? { hours: D("hours", o), minutes: D("minutes", o), seconds: c(o) } : { hours: i.hours, minutes: i.minutes, seconds: c() },
    m
  ) : Ea(w(), c(o)), u = (m, o) => {
    i[m] = o;
  }, A = L(() => r.modelAuto && d.value.enabled ? Array.isArray(l.value) ? l.value.length > 1 : !1 : d.value.enabled), g = (m, o) => {
    const k = Object.fromEntries(
      Object.keys(i).map((M) => M === m ? [M, o] : [M, i[M]].slice())
    );
    if (A.value && !d.value.disableTimeRangeValidation) {
      const M = (F) => l.value ? s(
        {
          hours: k.hours[F],
          minutes: k.minutes[F],
          seconds: k.seconds[F]
        },
        l.value[F]
      ) : null, E = (F) => Va(l.value[F], 0);
      return !(f(M(0), M(1)) && (_t(M(0), E(1)) || St(M(1), E(0))));
    }
    return !0;
  }, _ = (m, o) => {
    g(m, o) && (u(m, o), e && e());
  }, R = (m) => {
    _("hours", m);
  }, b = (m) => {
    _("minutes", m);
  }, y = (m) => {
    _("seconds", m);
  }, N = (m, o, k, M) => {
    o && R(m), !o && !k && b(m), k && y(m), l.value && M(l.value);
  }, re = (m) => {
    if (m) {
      const o = Array.isArray(m), k = o ? [+m[0].hours, +m[1].hours] : +m.hours, M = o ? [+m[0].minutes, +m[1].minutes] : +m.minutes, E = o ? [+(m[0].seconds ?? 0), +(m[1].seconds ?? 0)] : +(m.seconds ?? 0);
      u("hours", k), u("minutes", M), p.value.enableSeconds && u("seconds", E);
    }
  }, oe = (m, o) => {
    const k = {
      hours: Array.isArray(i.hours) ? i.hours[m] : i.hours,
      disabledArr: []
    };
    return (o || o === 0) && (k.hours = o), Array.isArray(r.disabledTimes) && (k.disabledArr = d.value.enabled && Array.isArray(r.disabledTimes[m]) ? r.disabledTimes[m] : r.disabledTimes), k;
  }, P = L(() => (m, o) => {
    if (Array.isArray(r.disabledTimes)) {
      const { disabledArr: k, hours: M } = oe(m, o), E = k.filter((F) => +F.hours === M);
      return E[0]?.minutes === "*" ? { hours: [M], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: E?.map((F) => +F.minutes) ?? [],
        seconds: E?.map((F) => F.seconds ? +F.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: u,
    updateHours: R,
    updateMinutes: b,
    updateSeconds: y,
    getSetDateTime: x,
    updateTimeValues: N,
    getSecondsValue: c,
    assignStartTime: re,
    validateTime: g,
    disabledTimesConfig: P
  };
}, fl = (e) => {
  const {
    time: w,
    modelValue: f,
    state: s,
    defaults: { startTime: l, range: i, tz: r, timeConfig: d }
  } = Se(), { toTzSafe: p } = Da(), { getDate: D, getTimeObj: c } = Ee();
  Kt(() => {
    s.isTextInputDate && m();
  });
  const { updateTimeValues: x, getSetDateTime: u, assignTime: A, assignStartTime: g, disabledTimesConfig: _, validateTime: R } = Ja(b);
  function b() {
    e("update-flow-step");
  }
  const y = (M) => {
    const { hours: E, minutes: F, seconds: te } = M;
    return { hours: +E, minutes: +F, seconds: te ? +te : 0 };
  }, N = () => {
    if (d.value.startTime) {
      if (Array.isArray(d.value.startTime)) {
        const E = y(d.value.startTime[0]), F = y(d.value.startTime[1]);
        return [Te(D(), E), Te(D(), F)];
      }
      const M = y(d.value.startTime);
      return Te(D(), M);
    }
    return i.value.enabled ? [null, null] : null;
  }, re = () => {
    if (i.value.enabled) {
      const [M, E] = N();
      f.value = [
        p(u(M, 0), r.value),
        p(u(E, 1), r.value)
      ];
    } else
      f.value = p(u(N()), r.value);
  }, oe = (M) => Array.isArray(M) ? [c(D(M[0])), c(D(M[1]))] : [c(M ?? D())], P = (M, E, F) => {
    A("hours", M), A("minutes", E), A("seconds", d.value.enableSeconds ? F : 0);
  }, m = () => {
    const [M, E] = oe(f.value);
    return i.value.enabled ? P(
      [M.hours, E.hours],
      [M.minutes, E.minutes],
      [M.seconds, E.seconds]
    ) : P(M.hours, M.minutes, M.seconds);
  };
  Ke(() => (g(l.value), f.value ? m() : re()));
  const o = () => {
    Array.isArray(f.value) ? f.value = f.value.map((M, E) => M && u(M, E)) : f.value = u(f.value), e("time-update");
  };
  return {
    modelValue: f,
    time: w,
    disabledTimesConfig: _,
    validateTime: R,
    updateTime: (M, E = !0, F = !1) => {
      x(M, E, F, o);
    }
  };
}, ml = /* @__PURE__ */ Le({
  __name: "TimePickerSolo",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["time-update", "mount", "reset-flow", "update-flow-step"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = gt(), { mapSlots: i } = At(), r = i(l, "timePicker"), d = Ye("time-input"), { time: p, modelValue: D, disabledTimesConfig: c, updateTime: x, validateTime: u } = fl(s);
    return Ke(() => {
      s("mount");
    }), w({ getSidebarProps: () => ({
      modelValue: D,
      time: p,
      updateTime: x
    }), toggleTimePicker: (_, R = !1, b = "") => {
      d.value?.toggleTimePicker(_, R, b);
    } }), (_, R) => (C(), Re(na, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: _e(({ wrapClass: b }) => [
        Ae("div", {
          class: ke(b)
        }, [
          at(Xa, et({ ref: "time-input" }, _.$props, {
            hours: t(p).hours,
            minutes: t(p).minutes,
            seconds: t(p).seconds,
            "disabled-times-config": t(c),
            "validate-time": t(u),
            "onUpdate:hours": R[0] || (R[0] = (y) => t(x)(y)),
            "onUpdate:minutes": R[1] || (R[1] = (y) => t(x)(y, !1)),
            "onUpdate:seconds": R[2] || (R[2] = (y) => t(x)(y, !1, !0)),
            onResetFlow: R[3] || (R[3] = (y) => _.$emit("reset-flow"))
          }), ze({ _: 2 }, [
            Oe(t(r), (y, N) => ({
              name: y,
              fn: _e((re) => [
                le(_.$slots, y, Je(st(re)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), pl = (e, w) => {
  const {
    rootProps: f,
    defaults: { filters: s }
  } = Se(), { validateMonthYearInRange: l, validateMonthYear: i } = ut(), { getDate: r } = Ee(), d = (u, A) => {
    let g = u;
    return s.value.months.includes(Pe(g)) ? (g = A ? wt(u, 1) : Lt(u, 1), d(g, A)) : g;
  }, p = (u, A) => {
    let g = u;
    return s.value.years.includes(be(g)) ? (g = A ? Fa(u, 1) : Wa(u, 1), p(g, A)) : g;
  }, D = (u, A = !1) => {
    const g = Te(r(), { month: e.month, year: e.year });
    let _ = u ? wt(g, 1) : Lt(g, 1);
    f.disableYearSelect && (_ = ot(_, e.year));
    let R = Pe(_), b = be(_);
    s.value.months.includes(R) && (_ = d(_, u), R = Pe(_), b = be(_)), s.value.years.includes(b) && (_ = p(_, u), b = be(_)), l(R, b, u, f.preventMinMaxNavigation) && c(R, b, A);
  }, c = (u, A, g) => {
    w("update-month-year", { month: u, year: A, fromNav: g });
  }, x = L(() => (u) => i(
    Te(r(), { month: e.month, year: e.year }),
    f.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: D, isDisabled: x, updateMonthYear: c };
}, hl = { class: "dp--header-wrap" }, gl = {
  key: 0,
  class: "dp__month_year_wrap"
}, yl = { key: 0 }, bl = { class: "dp__month_year_wrap" }, kl = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], wl = /* @__PURE__ */ Le({
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
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, {
      rootEmit: i,
      rootProps: r,
      modelValue: d,
      defaults: { ariaLabels: p, filters: D, config: c, highlight: x, safeDates: u, ui: A }
    } = Se(), { transitionName: g, showTransition: _ } = zt(), { showLeftIcon: R, showRightIcon: b } = aa(), { buildMatrix: y } = yt(), { handleMonthYearChange: N, isDisabled: re, updateMonthYear: oe } = pl(l, s), { checkHighlightYear: P, checkHighlightMonth: m } = We(), { getMaxMonth: o, getMinMonth: k, getYearFromDate: M } = Ee(), { checkKeyDown: E, groupListAndMap: F, checkMinMaxValue: te } = We(), { formatYear: X } = Pt(), pe = ie(!1), Z = ie(!1), ce = ie(!1), Y = ie([null, null, null, null]);
    Ke(() => {
      s("mount");
    });
    const V = (B) => ({
      get: () => l[B],
      set: (h) => {
        const W = B === rt.month ? rt.year : rt.month;
        s("update-month-year", { [B]: h, [W]: l[W] }), B === rt.month ? z(!0) : se(!0);
      }
    }), I = L(V(rt.month)), ae = L(V(rt.year)), ve = L(() => (B) => ({
      month: l.month,
      year: l.year,
      items: B === rt.month ? l.months : l.years,
      instance: l.instance,
      updateMonthYear: oe,
      toggle: B === rt.month ? z : se
    })), Me = L(() => {
      const B = l.months.find((h) => h.value === l.month);
      return B || { text: "", value: 0 };
    }), we = L(() => F(l.months, (B) => {
      const h = l.month === B.value, W = te(
        B.value,
        k(l.year, u.value.minDate),
        o(l.year, u.value.maxDate)
      ) || D.value.months.includes(B.value), n = m(x.value, B.value, l.year);
      return { active: h, disabled: W, highlighted: n };
    })), ye = L(() => F(l.years, (B) => {
      const h = l.year === B.value, W = te(
        B.value,
        M(u.value.minDate),
        M(u.value.maxDate)
      ) || D.value.years.includes(B.value), n = P(x.value, B.value);
      return { active: h, disabled: W, highlighted: n };
    })), U = (B, h, W) => {
      W === void 0 ? B.value = !B.value : B.value = W, B.value ? (ce.value = !0, s("overlay-opened", h)) : (ce.value = !1, i("overlay-toggle", { open: !1, overlay: h }));
    }, z = (B = !1, h) => {
      q(B), U(pe, Qe.month, h);
    }, se = (B = !1, h) => {
      q(B), U(Z, Qe.year, h);
    }, q = (B) => {
      B || s("reset-flow");
    }, de = (B, h) => {
      r.arrowNavigation && (Y.value[h] = Ge(B), y(Y.value, "monthYear"));
    }, me = L(() => [
      {
        type: rt.month,
        index: 1,
        toggle: z,
        modelValue: I.value,
        updateModelValue: (B) => I.value = B,
        text: Me.value.text,
        showSelectionGrid: pe.value,
        items: we.value,
        ariaLabel: p.value?.openMonthsOverlay,
        overlayLabel: p.value.monthPicker?.(!0) ?? void 0
      },
      {
        type: rt.year,
        index: 2,
        toggle: se,
        modelValue: ae.value,
        updateModelValue: (B) => ae.value = B,
        text: X(l.year),
        showSelectionGrid: Z.value,
        items: ye.value,
        ariaLabel: p.value?.openYearsOverlay,
        overlayLabel: p.value.yearPicker?.(!0) ?? void 0
      }
    ]), ge = L(() => r.disableYearSelect ? [me.value[0]] : r.yearFirst ? [...me.value].reverse() : me.value);
    return w({
      toggleMonthPicker: z,
      toggleYearPicker: se,
      handleMonthYearChange: N
    }), (B, h) => (C(), H("div", hl, [
      B.$slots["month-year"] ? (C(), H("div", gl, [
        le(B.$slots, "month-year", Je(st({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(oe),
          handleMonthYearChange: t(N),
          instance: e.instance,
          isDisabled: t(re)
        })))
      ])) : (C(), H(De, { key: 1 }, [
        B.$slots["top-extra"] ? (C(), H("div", yl, [
          le(B.$slots, "top-extra", { value: t(d) })
        ])) : K("", !0),
        Ae("div", bl, [
          t(R)(e.instance) && !t(r).vertical ? (C(), Re(Nt, {
            key: 0,
            "aria-label": t(p)?.prevMonth,
            disabled: t(re)(!1),
            class: ke(t(A)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: h[0] || (h[0] = (W) => t(N)(!1, !0)),
            onSetRef: h[1] || (h[1] = (W) => de(W, 0))
          }, {
            default: _e(() => [
              B.$slots["arrow-left"] ? le(B.$slots, "arrow-left", { key: 0 }) : K("", !0),
              B.$slots["arrow-left"] ? K("", !0) : (C(), Re(t(Ha), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : K("", !0),
          Ae("div", {
            class: ke(["dp__month_year_wrap", {
              dp__year_disable_select: t(r).disableYearSelect
            }])
          }, [
            (C(!0), H(De, null, Oe(ge.value, (W, n) => (C(), H(De, {
              key: W.type
            }, [
              Ae("button", {
                ref_for: !0,
                ref: (T) => de(T, n + 1),
                type: "button",
                "data-dp-element": `overlay-${W.type}`,
                class: ke(["dp__btn dp__month_year_select", { "dp--hidden-el": ce.value }]),
                "aria-label": `${W.text}-${W.ariaLabel}`,
                "data-test-id": `${W.type}-toggle-overlay-${e.instance}`,
                onClick: (T) => W.toggle(!1),
                onKeydown: (T) => t(E)(T, () => W.toggle(), !0)
              }, [
                B.$slots[W.type] ? le(B.$slots, W.type, {
                  key: 0,
                  text: W.text,
                  value: l[W.type]
                }) : K("", !0),
                B.$slots[W.type] ? K("", !0) : (C(), H(De, { key: 1 }, [
                  dt(Ue(W.text), 1)
                ], 64))
              ], 42, kl),
              at(Ct, {
                name: t(g)(W.showSelectionGrid),
                css: t(_)
              }, {
                default: _e(() => [
                  W.showSelectionGrid ? (C(), Re(jt, {
                    key: 0,
                    items: W.items,
                    "is-last": t(r).autoApply && !t(c).keepActionRow,
                    "skip-button-ref": !1,
                    type: W.type,
                    "header-refs": [],
                    "menu-wrap-ref": e.menuWrapRef,
                    "overlay-label": W.overlayLabel,
                    onSelected: W.updateModelValue,
                    onToggle: W.toggle
                  }, ze({
                    "button-icon": _e(() => [
                      B.$slots["calendar-icon"] ? le(B.$slots, "calendar-icon", { key: 0 }) : K("", !0),
                      B.$slots["calendar-icon"] ? K("", !0) : (C(), Re(t(Ht), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    B.$slots[`${W.type}-overlay-value`] ? {
                      name: "item",
                      fn: _e(({ item: T }) => [
                        le(B.$slots, `${W.type}-overlay-value`, {
                          text: T.text,
                          value: T.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    B.$slots[`${W.type}-overlay`] ? {
                      name: "overlay",
                      fn: _e(() => [
                        le(B.$slots, `${W.type}-overlay`, et({ ref_for: !0 }, ve.value(W.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    B.$slots[`${W.type}-overlay-header`] ? {
                      name: "header",
                      fn: _e(() => [
                        le(B.$slots, `${W.type}-overlay-header`, {
                          toggle: W.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "is-last", "type", "menu-wrap-ref", "overlay-label", "onSelected", "onToggle"])) : K("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          t(R)(e.instance) && t(r).vertical ? (C(), Re(Nt, {
            key: 1,
            "aria-label": t(p)?.prevMonth,
            "el-name": "action-prev",
            disabled: t(re)(!1),
            class: ke(t(A)?.navBtnPrev),
            onActivate: h[2] || (h[2] = (W) => t(N)(!1, !0))
          }, {
            default: _e(() => [
              B.$slots["arrow-up"] ? le(B.$slots, "arrow-up", { key: 0 }) : K("", !0),
              B.$slots["arrow-up"] ? K("", !0) : (C(), Re(t(ja), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : K("", !0),
          t(b)(e.instance) ? (C(), Re(Nt, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t(re)(!0),
            "aria-label": t(p)?.nextMonth,
            class: ke(t(A)?.navBtnNext),
            onActivate: h[3] || (h[3] = (W) => t(N)(!0, !0)),
            onSetRef: h[4] || (h[4] = (W) => de(W, t(r).disableYearSelect ? 2 : 3))
          }, {
            default: _e(() => [
              B.$slots[t(r).vertical ? "arrow-down" : "arrow-right"] ? le(B.$slots, t(r).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : K("", !0),
              B.$slots[t(r).vertical ? "arrow-down" : "arrow-right"] ? K("", !0) : (C(), Re(ka(t(r).vertical ? t(Ua) : t(za)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label", "class"])) : K("", !0)
        ])
      ], 64))
    ]));
  }
}), Dl = {
  class: "dp__calendar_header",
  role: "row"
}, Ml = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, _l = ["aria-label"], Al = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, Pl = { class: "dp__cell_inner" }, Tl = ["id", "aria-selected", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], $l = /* @__PURE__ */ Le({
  __name: "DpCalendar",
  props: {
    instance: {},
    mappedDates: {},
    month: {},
    year: {}
  },
  emits: ["mount", "select-date", "set-hover-date", "handle-scroll", "handle-swipe"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, {
      rootEmit: i,
      rootProps: r,
      defaults: { transitions: d, config: p, ariaLabels: D, multiCalendars: c, weekNumbers: x, multiDates: u, ui: A }
    } = Se(), { buildMultiLevelMatrix: g } = yt(), { getDate: _, isDateAfter: R, isDateEqual: b, resetDateTime: y, getCellId: N } = Ee(), { checkKeyDown: re, checkStopPropagation: oe, isTouchDevice: P } = We(), { formatWeekDay: m } = Pt(), o = Ye("calendar-wrap"), k = Ye("active-tooltip"), M = ie([]), E = ie(null), F = ie(!0), te = ie(!1), X = ie(""), pe = ie({
      bottom: "",
      left: "",
      transform: ""
    }), Z = ie({ startX: 0, endX: 0, startY: 0, endY: 0 }), ce = ie({ left: "50%" }), Y = L(() => r.calendar ? r.calendar(l.mappedDates) : l.mappedDates), V = L(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames() : O());
    Ke(() => {
      s("mount", { cmp: "calendar", dayRefs: M.value }), p.value.noSwipe || o.value && (o.value.addEventListener("touchstart", ge, { passive: !1 }), o.value.addEventListener("touchend", B, { passive: !1 }), o.value.addEventListener("touchmove", h, { passive: !1 })), p.value.monthChangeOnScroll && o.value && o.value.addEventListener("wheel", T, { passive: !1 });
    }), Rt(() => {
      p.value.noSwipe || o.value && (o.value.removeEventListener("touchstart", ge), o.value.removeEventListener("touchend", B), o.value.removeEventListener("touchmove", h)), p.value.monthChangeOnScroll && o.value && o.value.removeEventListener("wheel", T);
    });
    const I = (v) => v ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", ae = (v, J) => {
      if (r.transitions) {
        const G = y(Te(_(), { month: l.month, year: l.year }));
        X.value = R(y(Te(_(), { month: v, year: J })), G) ? d.value[I(!0)] : d.value[I(!1)], F.value = !1, tt(() => {
          F.value = !0;
        });
      }
    }, ve = L(
      () => ({
        ...A.value.calendar
      })
    ), Me = (v) => ({ type: "dot", ...v }), we = L(() => (v) => {
      const J = Me(v);
      return {
        dp__marker_dot: J.type === "dot",
        dp__marker_line: J.type === "line"
      };
    }), ye = L(() => (v) => b(v, E.value)), U = L(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && l.instance !== 0
    })), z = L(() => (v) => r.hideOffsetDates ? v.current : !0), se = async (v, J) => {
      const { width: G, height: Ce } = v.getBoundingClientRect();
      E.value = J.value;
      let fe = { left: `${G / 2}px` }, He = -50;
      if (await tt(), k.value?.[0]) {
        const { left: Ie, width: vt } = k.value[0].getBoundingClientRect();
        Ie < 0 && (fe = { left: "0" }, He = 0, ce.value.left = `${G / 2}px`), globalThis.innerWidth < Ie + vt && (fe = { right: "0" }, He = 0, ce.value.left = `${vt - G / 2}px`);
      }
      pe.value = {
        bottom: `${Ce}px`,
        ...fe,
        transform: `translateX(${He}%)`
      };
    }, q = async (v, J, G) => {
      const Ce = Ge(M.value?.[J]?.[G]);
      Ce && (v.marker?.customPosition && v.marker?.tooltip?.length ? pe.value = v.marker.customPosition(Ce) : await se(Ce, v), i("tooltip-open", v.marker));
    }, de = async (v, J, G) => {
      if (te.value && u.value.enabled && u.value.dragSelect)
        return s("select-date", v);
      if (s("set-hover-date", v), v.marker?.tooltip?.length) {
        if (r.hideOffsetDates && !v.current) return;
        await q(v, J, G);
      }
    }, me = (v) => {
      E.value && (E.value = null, pe.value = structuredClone({ bottom: "", left: "", transform: "" }), i("tooltip-close", v.marker));
    }, ge = (v) => {
      Z.value.startX = v.changedTouches[0].screenX, Z.value.startY = v.changedTouches[0].screenY;
    }, B = (v) => {
      Z.value.endX = v.changedTouches[0].screenX, Z.value.endY = v.changedTouches[0].screenY, W();
    }, h = (v) => {
      r.vertical && !r.inline && v.preventDefault();
    }, W = () => {
      const v = r.vertical ? "Y" : "X";
      Math.abs(Z.value[`start${v}`] - Z.value[`end${v}`]) > 10 && s("handle-swipe", Z.value[`start${v}`] > Z.value[`end${v}`] ? "right" : "left");
    }, n = (v, J, G) => {
      v && (Array.isArray(M.value[J]) ? M.value[J][G] = v : M.value[J] = [v]), r.arrowNavigation && g(M.value, "calendar");
    }, T = (v) => {
      p.value.monthChangeOnScroll && (v.preventDefault(), s("handle-scroll", v));
    }, S = (v) => x.value.type === "local" ? Cn(v.value, { weekStartsOn: +r.weekStart }) : x.value.type === "iso" ? Yn(v.value) : typeof x.value.type == "function" ? x.value.type(v.value) : "", j = (v) => {
      const J = v[0];
      return x.value.hideOnOffsetDates ? v.some((G) => G.current) ? S(J) : "" : S(J);
    }, ne = (v, J, G = !0) => {
      !G && P() || (!u.value.enabled || p.value.allowPreventDefault) && (oe(v, p.value), s("select-date", J));
    }, Q = (v) => {
      oe(v, p.value);
    }, a = (v) => {
      u.value.enabled && u.value.dragSelect ? (te.value = !0, s("select-date", v)) : u.value.enabled && s("select-date", v);
    }, O = () => {
      const J = [1, 2, 3, 4, 5, 6, 7].map((fe) => m(fe)), G = J.slice(0, +r.weekStart), Ce = J.slice(+r.weekStart + 1, J.length);
      return [J[+r.weekStart]].concat(...Ce).concat(...G);
    };
    return w({ triggerTransition: ae }), (v, J) => (C(), H("div", {
      class: ke(U.value)
    }, [
      Ae("div", {
        ref: "calendar-wrap",
        class: ke(ve.value),
        role: "grid"
      }, [
        Ae("div", Dl, [
          t(r).weekNumbers ? (C(), H("div", Ml, Ue(t(r).weekNumName), 1)) : K("", !0),
          (C(!0), H(De, null, Oe(V.value, (G, Ce) => (C(), H("div", {
            key: Ce,
            class: "dp__calendar_header_item",
            role: "gridcell",
            "data-test-id": "calendar-header",
            "aria-label": t(D)?.weekDay?.(Ce)
          }, [
            v.$slots["calendar-header"] ? le(v.$slots, "calendar-header", {
              key: 0,
              day: G,
              index: Ce
            }) : K("", !0),
            v.$slots["calendar-header"] ? K("", !0) : (C(), H(De, { key: 1 }, [
              dt(Ue(G), 1)
            ], 64))
          ], 8, _l))), 128))
        ]),
        J[2] || (J[2] = Ae("div", { class: "dp__calendar_header_separator" }, null, -1)),
        at(Ct, {
          name: X.value,
          css: !!t(d)
        }, {
          default: _e(() => [
            F.value ? (C(), H("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: J[1] || (J[1] = (G) => te.value = !1)
            }, [
              (C(!0), H(De, null, Oe(Y.value, (G, Ce) => (C(), H("div", {
                key: Ce,
                class: "dp__calendar_row",
                role: "row"
              }, [
                t(r).weekNumbers ? (C(), H("div", Al, [
                  Ae("div", Pl, Ue(j(G.days)), 1)
                ])) : K("", !0),
                (C(!0), H(De, null, Oe(G.days, (fe, He) => (C(), H("div", {
                  id: t(N)(fe.value),
                  ref_for: !0,
                  ref: (Ie) => n(Ie, Ce, He),
                  key: He + Ce,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (fe.classData.dp__active_date || fe.classData.dp__range_start || fe.classData.dp__range_end) ?? void 0,
                  "aria-disabled": fe.classData.dp__cell_disabled || void 0,
                  "aria-label": t(D)?.day?.(fe),
                  tabindex: !fe.current && t(r).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(N)(fe.value),
                  onClick: Wt((Ie) => ne(Ie, fe), ["prevent"]),
                  onTouchend: (Ie) => ne(Ie, fe, !1),
                  onKeydown: (Ie) => t(re)(Ie, () => v.$emit("select-date", fe)),
                  onMouseenter: (Ie) => de(fe, Ce, He),
                  onMouseleave: (Ie) => me(fe),
                  onMousedown: (Ie) => a(fe),
                  onMouseup: J[0] || (J[0] = (Ie) => te.value = !1)
                }, [
                  Ae("div", {
                    class: ke(["dp__cell_inner", fe.classData])
                  }, [
                    v.$slots.day && z.value(fe) ? le(v.$slots, "day", {
                      key: 0,
                      day: +fe.text,
                      date: fe.value
                    }) : K("", !0),
                    v.$slots.day ? K("", !0) : (C(), H(De, { key: 1 }, [
                      dt(Ue(fe.text), 1)
                    ], 64)),
                    fe.marker && z.value(fe) ? (C(), H(De, { key: 2 }, [
                      v.$slots.marker ? le(v.$slots, "marker", {
                        key: 0,
                        marker: fe.marker,
                        day: +fe.text,
                        date: fe.value
                      }) : (C(), H("div", {
                        key: 1,
                        class: ke(we.value(fe.marker)),
                        style: Ze(fe.marker.color ? { backgroundColor: fe.marker.color } : {})
                      }, null, 6))
                    ], 64)) : K("", !0),
                    ye.value(fe.value) ? (C(), H("div", {
                      key: 3,
                      ref_for: !0,
                      ref: "active-tooltip",
                      class: "dp__marker_tooltip",
                      style: Ze(pe.value)
                    }, [
                      fe.marker?.tooltip ? (C(), H("div", {
                        key: 0,
                        class: "dp__tooltip_content",
                        onClick: Q
                      }, [
                        (C(!0), H(De, null, Oe(fe.marker.tooltip, (Ie, vt) => (C(), H("div", {
                          key: vt,
                          class: "dp__tooltip_text"
                        }, [
                          v.$slots["marker-tooltip"] ? le(v.$slots, "marker-tooltip", {
                            key: 0,
                            tooltip: Ie,
                            day: fe.value
                          }) : K("", !0),
                          v.$slots["marker-tooltip"] ? K("", !0) : (C(), H(De, { key: 1 }, [
                            Ae("div", {
                              class: "dp__tooltip_mark",
                              style: Ze(Ie.color ? { backgroundColor: Ie.color } : {})
                            }, null, 4),
                            Ae("div", null, Ue(Ie.text), 1)
                          ], 64))
                        ]))), 128)),
                        Ae("div", {
                          class: "dp__arrow_bottom_tp",
                          style: Ze(ce.value)
                        }, null, 4)
                      ])) : K("", !0)
                    ], 4)) : K("", !0)
                  ], 2)
                ], 40, Tl))), 128))
              ]))), 128))
            ], 32)) : K("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Sl = (e, w, f, s) => {
  const l = ie([]), i = ie(/* @__PURE__ */ new Date()), r = ie(), {
    rootEmit: d,
    calendars: p,
    month: D,
    year: c,
    time: x,
    modelValue: u,
    rootProps: A,
    today: g,
    state: _,
    defaults: { multiCalendars: R, startTime: b, range: y, config: N, tz: re, safeDates: oe, multiDates: P, timeConfig: m, flow: o }
  } = Se(), { validateMonthYearInRange: k, isDisabled: M, isDateRangeAllowed: E, checkMinMaxRange: F } = ut(), { updateTimeValues: te, getSetDateTime: X, assignTime: pe, assignStartTime: Z, validateTime: ce, disabledTimesConfig: Y } = Ja(s), { getDate: V, resetDateTime: I, setTime: ae, isDateBefore: ve, isDateEqual: Me, getDaysInBetween: we } = Ee(), { checkRangeAutoApply: ye, getRangeWithFixedDate: U, handleMultiDatesSelect: z, setPresetDate: se } = ra(), { getMapDate: q } = We(), { toTzSafe: de } = Da();
  Kt(() => T(_.isTextInputDate));
  const me = ($) => !N.value.keepViewOnOffsetClick || $ ? !0 : !r.value, ge = ($, ee, he, $e = !1) => {
    me($e) && (p.value[$] ??= p.value[$] = { month: 0, year: 0 }, p.value[$].month = ee ?? p.value[$]?.month, p.value[$].year = he ?? p.value[$]?.year);
  }, B = () => {
    A.autoApply && w("select-date");
  }, h = () => {
    b.value && Z(b.value);
  };
  Ke(() => {
    u.value || (He(), h()), T(!0), A.focusStartDate && A.startDate && He();
  });
  const W = L(() => o.value?.steps?.length && !o.value?.partial ? e.flowStep === o.value.steps.length : !0), n = () => {
    A.autoApply && W.value && w("auto-apply", o.value?.partial ? e.flowStep !== o.value?.steps?.length : !1);
  }, T = ($ = !1) => {
    if (u.value)
      return Array.isArray(u.value) ? (l.value = u.value, J($)) : Q(u.value, $);
    if (R.value.count && $ && !A.startDate)
      return ne(V(), $);
  }, S = () => Array.isArray(u.value) && y.value.enabled ? Pe(u.value[0]) === Pe(u.value[1] ?? u.value[0]) : !1, j = ($) => {
    const ee = wt($, 1);
    return { month: Pe(ee), year: be(ee) };
  }, ne = ($ = /* @__PURE__ */ new Date(), ee = !1) => {
    if ((!R.value.count || !R.value.static || ee) && ge(0, Pe($), be($)), R.value.count && (!u.value || S() || !R.value.solo) && (!R.value.solo || ee))
      for (let he = 1; he < R.value.count; he++) {
        const $e = Te(V(), { month: D.value(he - 1), year: c.value(he - 1) }), Ve = La($e, { months: 1 });
        p.value[he] = { month: Pe(Ve), year: be(Ve) };
      }
  }, Q = ($, ee) => {
    ne($), pe("hours", ct($)), pe("minutes", ht($)), pe("seconds", Dt($)), R.value.count && ee && fe();
  }, a = ($) => {
    if (R.value.count) {
      if (R.value.solo) return 0;
      const ee = Pe($[0]), he = Pe($[1]);
      return Math.abs(he - ee) < R.value.count ? 0 : 1;
    }
    return 1;
  }, O = ($, ee) => {
    $[1] && y.value.showLastInRange ? ne($[a($)], ee) : ne($[0], ee);
    const he = ($e, Ve) => [
      $e($[0]),
      $?.[1] ? $e($[1]) : x[Ve][1]
    ];
    pe("hours", he(ct, "hours")), pe("minutes", he(ht, "minutes")), pe("seconds", he(Dt, "seconds"));
  }, v = ($, ee) => {
    if ((y.value.enabled || A.weekPicker) && !P.value.enabled)
      return O($, ee);
    if (P.value.enabled && ee) {
      const he = $[$.length - 1];
      return Q(he, ee);
    }
  }, J = ($) => {
    const ee = u.value;
    v(ee, $), R.value.count && R.value.solo && fe();
  }, G = ($, ee) => {
    const he = Te(V(), { month: D.value(ee), year: c.value(ee) }), $e = $ < 0 ? wt(he, 1) : Lt(he, 1);
    k(Pe($e), be($e), $ < 0, A.preventMinMaxNavigation) && (ge(ee, Pe($e), be($e)), d("update-month-year", { instance: ee, month: Pe($e), year: be($e) }), R.value.count && !R.value.solo && Ce(ee), f());
  }, Ce = ($) => {
    for (let ee = $ - 1; ee >= 0; ee--) {
      const he = Lt(Te(V(), { month: D.value(ee + 1), year: c.value(ee + 1) }), 1);
      ge(ee, Pe(he), be(he));
    }
    for (let ee = $ + 1; ee <= R.value.count - 1; ee++) {
      const he = wt(Te(V(), { month: D.value(ee - 1), year: c.value(ee - 1) }), 1);
      ge(ee, Pe(he), be(he));
    }
  }, fe = () => {
    if (Array.isArray(u.value) && u.value.length === 2) {
      const $ = V(V(u.value[1] ?? wt(u.value[0], 1))), [ee, he] = [Pe(u.value[0]), be(u.value[0])], [$e, Ve] = [Pe(u.value[1]), be(u.value[1])];
      (ee !== $e || ee === $e && he !== Ve) && R.value.solo && ge(1, Pe($), be($));
    } else u.value && !Array.isArray(u.value) && (ge(0, Pe(u.value), be(u.value)), ne(V()));
  }, He = () => {
    A.startDate && (ge(0, Pe(V(A.startDate)), be(V(A.startDate))), R.value.count && Ce(0));
  }, Ie = ($, ee) => {
    if (N.value.monthChangeOnScroll) {
      const he = Date.now() - i.value.getTime(), $e = Math.abs($.deltaY);
      let Ve = 500;
      $e > 1 && (Ve = 100), $e > 100 && (Ve = 0), he > Ve && (i.value = /* @__PURE__ */ new Date(), G(
        N.value.monthChangeOnScroll === "inverse" ? $.deltaY : -$.deltaY,
        ee
      ));
    }
  }, vt = ($, ee, he = !1) => {
    N.value.monthChangeOnArrows && A.vertical === he && Ut($, ee);
  }, Ut = ($, ee) => {
    G($ === "right" ? -1 : 1, ee);
  }, la = ($) => {
    if (oe.value.markers)
      return q($.value, oe.value.markers);
  }, oa = ($, ee) => {
    switch (A.sixWeeks === !0 ? "append" : A.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [$ == 0, !0];
      case "fair":
        return [$ == 0 || ee > $, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, sa = ($, ee, he, $e) => {
    if (A.sixWeeks && $.length < 6) {
      const Ve = 6 - $.length, ft = (ee.getDay() + 7 - $e) % 7, qt = 6 - (he.getDay() + 7 - $e) % 7, [Bt, va] = oa(ft, qt);
      for (let kt = 1; kt <= Ve; kt++)
        if (va ? !!(kt % 2) == Bt : Bt) {
          const Qt = $[0].days[0], fa = Yt(pt(Qt.value, -7), Pe(ee));
          $.unshift({ days: fa });
        } else {
          const Qt = $[$.length - 1], fa = Qt.days[Qt.days.length - 1], sn = Yt(pt(fa.value, 1), Pe(ee));
          $.push({ days: sn });
        }
    }
    return $;
  }, Yt = ($, ee) => {
    const he = V($), $e = [];
    for (let Ve = 0; Ve < 7; Ve++) {
      const ft = pt(he, Ve), xt = Pe(ft) !== ee;
      $e.push({
        text: A.hideOffsetDates && xt ? "" : ft.getDate(),
        value: ft,
        current: !xt,
        classData: {}
      });
    }
    return $e;
  }, ua = ($, ee) => {
    const he = [], $e = new Date(ee, $), Ve = new Date(ee, $ + 1, 0), ft = A.weekStart, xt = wa($e, { weekStartsOn: ft }), qt = (Bt) => {
      const va = Yt(Bt, $);
      if (he.push({ days: va }), !he[he.length - 1].days.some((kt) => Me(V(kt.value), I(Ve)))) {
        const kt = pt(Bt, 7);
        qt(kt);
      }
    };
    return qt(xt), sa(he, $e, Ve, ft);
  }, ia = ($) => {
    const ee = ae(
      { hours: x.hours, minutes: x.minutes, seconds: Ma() },
      V($.value)
    );
    d("date-click", ee), P.value.enabled ? z(ee, P.value.limit) : u.value = ee, s(), tt().then(() => {
      n();
    });
  }, ue = ($) => y.value.noDisabledRange ? we(l.value[0], $).some((he) => M(he)) : !1, Xe = () => {
    l.value = u.value ? u.value.slice() : [], l.value.length === 2 && !(y.value.fixedStart || y.value.fixedEnd) && (l.value = []);
  }, nt = ($, ee) => {
    const he = [V($.value), pt(V($.value), +y.value.autoRange)];
    E(he) ? (ee && Ot($.value), l.value = he) : d("invalid-date", $.value);
  }, Ot = ($) => {
    const ee = Pe(V($)), he = be(V($));
    if (ge(0, ee, he), R.value.count > 0)
      for (let $e = 1; $e < R.value.count; $e++) {
        const Ve = j(
          Te(V($), { year: c.value($e - 1), month: D.value($e - 1) })
        );
        ge($e, Ve.month, Ve.year);
      }
  }, bt = ($) => {
    if (ue($.value) || !F($.value, u.value, y.value.fixedStart ? 0 : 1))
      return d("invalid-date", $.value);
    l.value = U(V($.value));
  }, ca = ($, ee) => {
    if (Xe(), y.value.autoRange) return nt($, ee);
    if (y.value.fixedStart || y.value.fixedEnd) return bt($);
    l.value[0] ? F(V($.value), u.value) && !ue($.value) ? ve(V($.value), V(l.value[0])) ? (l.value.unshift(V($.value)), d("range-end", l.value[0])) : (l.value[1] = V($.value), d("range-end", l.value[1])) : d("invalid-date", $.value) : (l.value[0] = V($.value), d("range-start", l.value[0]));
  }, Ma = ($ = !0) => m.value.enableSeconds ? Array.isArray(x.seconds) ? $ ? x.seconds[0] : x.seconds[1] : x.seconds : 0, da = ($) => {
    l.value[$] = ae(
      {
        hours: x.hours[$],
        minutes: x.minutes[$],
        seconds: Ma($ !== 1)
      },
      l.value[$]
    );
  }, Za = () => {
    l.value[0] && l.value[1] && +l.value?.[0] > +l.value?.[1] && (l.value.reverse(), d("range-start", l.value[0]), d("range-end", l.value[1]));
  }, en = () => {
    l.value.length && (l.value[0] && !l.value[1] ? da(0) : (da(0), da(1), s()), Za(), u.value = l.value.slice(), ye(l.value, w, A.autoApply, A.modelAuto));
  }, tn = ($, ee = !1) => {
    if (M($.value) || !$.current && A.hideOffsetDates)
      return d("invalid-date", $.value);
    if (r.value = structuredClone($), !y.value.enabled) return ia($);
    Array.isArray(x.hours) && Array.isArray(x.minutes) && !P.value.enabled && (ca($, ee), en());
  }, an = ($, ee) => {
    ge($, ee.month, ee.year, !0), R.value.count && !R.value.solo && Ce($), d("update-month-year", { instance: $, month: ee.month, year: ee.year }), f(R.value.solo ? $ : void 0);
    const he = o.value?.steps?.length ? o.value.steps[e.flowStep] : void 0;
    !ee.fromNav && (he === Qe.month || he === Qe.year) && s();
  }, nn = ($) => {
    se({
      value: $
    }), B(), A.multiCalendars && tt().then(() => T(!0));
  }, rn = () => {
    const $ = de(V(), re.value);
    !y.value.enabled && !P.value.enabled ? u.value = $ : u.value && Array.isArray(u.value) && u.value[0] ? P.value.enabled ? u.value = [...u.value, $] : u.value = ve($, u.value[0]) ? [$, u.value[0]] : [u.value[0], $] : u.value = [$], B();
  }, ln = () => {
    if (Array.isArray(u.value))
      if (P.value.enabled) {
        const $ = on();
        u.value[u.value.length - 1] = X($);
      } else
        u.value = u.value.map(($, ee) => $ && X($, ee));
    else
      u.value = X(u.value);
    w("time-update");
  }, on = () => Array.isArray(u.value) && u.value.length ? u.value[u.value.length - 1] : null;
  return {
    calendars: p,
    modelValue: u,
    month: D,
    year: c,
    time: x,
    disabledTimesConfig: Y,
    today: g,
    validateTime: ce,
    getCalendarDays: ua,
    getMarker: la,
    handleScroll: Ie,
    handleSwipe: Ut,
    handleArrow: vt,
    selectDate: tn,
    updateMonthYear: an,
    presetDate: nn,
    selectCurrentDate: rn,
    updateTime: ($, ee = !0, he = !1) => {
      te($, ee, he, ln);
    },
    assignMonthAndYear: ne,
    setStartTime: h
  };
}, Rl = () => {
  const {
    isDateAfter: e,
    isDateBefore: w,
    isDateBetween: f,
    isDateEqual: s,
    getDate: l,
    getWeekFromDate: i,
    getBeforeAndAfterInRange: r
  } = Ee(), { isModelAuto: d, matchDate: p } = We(), {
    today: D,
    rootProps: c,
    defaults: { multiCalendars: x, multiDates: u, ui: A, highlight: g, safeDates: _, range: R },
    modelValue: b
  } = Se(), { isDisabled: y } = ut(), N = ie(null), re = (n) => {
    !n.current && c.hideOffsetDates || (N.value = n.value);
  }, oe = () => {
    N.value = null;
  }, P = (n) => Array.isArray(b.value) && R.value.enabled && b.value[0] && N.value ? n ? e(N.value, b.value[0]) : w(N.value, b.value[0]) : !0, m = (n, T) => {
    const S = () => b.value ? T ? b.value[0] || null : b.value[1] : null, j = b.value && Array.isArray(b.value) ? S() : null;
    return s(l(n.value), j);
  }, o = (n) => {
    const T = Array.isArray(b.value) ? b.value[0] : null;
    return n ? !w(N.value, T) : !0;
  }, k = (n, T = !0) => (R.value.enabled || c.weekPicker) && Array.isArray(b.value) && b.value.length === 2 ? c.hideOffsetDates && !n.current ? !1 : s(l(n.value), b.value[T ? 0 : 1]) : R.value.enabled ? m(n, T) && o(T) || s(n.value, Array.isArray(b.value) ? b.value[0] : null) && P(T) : !1, M = (n, T) => {
    if (Array.isArray(b.value) && b.value[0] && b.value.length === 1) {
      const S = s(n.value, N.value);
      return T ? e(b.value[0], n.value) && S : w(b.value[0], n.value) && S;
    }
    return !1;
  }, E = (n) => !b.value || c.hideOffsetDates && !n.current ? !1 : R.value.enabled ? c.modelAuto && Array.isArray(b.value) ? s(n.value, b.value[0] ?? D) : !1 : u.value.enabled && Array.isArray(b.value) ? b.value.some((T) => s(T, n.value)) : s(n.value, b.value ? b.value : D), F = (n) => {
    if (R.value.autoRange || c.weekPicker) {
      if (N.value) {
        if (c.hideOffsetDates && !n.current) return !1;
        const T = pt(N.value, +R.value.autoRange), S = i(l(N.value), c.weekStart);
        return c.weekPicker ? s(S[1], l(n.value)) : s(T, l(n.value));
      }
      return !1;
    }
    return !1;
  }, te = (n) => {
    if (R.value.autoRange || c.weekPicker) {
      if (N.value) {
        const T = pt(N.value, +R.value.autoRange);
        if (c.hideOffsetDates && !n.current) return !1;
        const S = i(l(N.value), c.weekStart);
        return c.weekPicker ? e(n.value, S[0]) && w(n.value, S[1]) : e(n.value, N.value) && w(n.value, T);
      }
      return !1;
    }
    return !1;
  }, X = (n) => {
    if (R.value.autoRange || c.weekPicker) {
      if (N.value) {
        if (c.hideOffsetDates && !n.current) return !1;
        const T = i(l(N.value), c.weekStart);
        return c.weekPicker ? s(T[0], n.value) : s(N.value, n.value);
      }
      return !1;
    }
    return !1;
  }, pe = (n) => f(b.value, N.value, n.value), Z = () => c.modelAuto && Array.isArray(b.value) ? !!b.value[0] : !1, ce = () => c.modelAuto ? d(b.value) : !0, Y = (n) => {
    if (c.weekPicker) return !1;
    const T = R.value.enabled ? !k(n) && !k(n, !1) : !0;
    return !y(n.value) && !E(n) && !(!n.current && c.hideOffsetDates) && T;
  }, V = (n) => R.value.enabled ? c.modelAuto ? Z() && E(n) : !1 : E(n), I = (n) => g.value ? p(n.value, _.value.highlight) : !1, ae = (n) => {
    const T = y(n.value);
    return T && (typeof g.value == "function" ? !g.value(n.value, T) : !g.value.options.highlightDisabled);
  }, ve = (n) => typeof g.value == "function" ? g.value(n.value) : g.value.weekdays?.includes(n.value.getDay()), Me = (n) => (R.value.enabled || c.weekPicker) && (!(x.value.count > 0) || n.current) && ce() && !(!n.current && c.hideOffsetDates) && !E(n) ? pe(n) : !1, we = (n) => {
    if (Array.isArray(b.value) && b.value.length === 1) {
      const { before: T, after: S } = r(+R.value.maxRange, b.value[0]);
      return St(n.value, T) || _t(n.value, S);
    }
    return !1;
  }, ye = (n) => {
    if (Array.isArray(b.value) && b.value.length === 1) {
      const { before: T, after: S } = r(+R.value.minRange, b.value[0]);
      return f([T, S], b.value[0], n.value);
    }
    return !1;
  }, U = (n) => R.value.enabled && (R.value.maxRange || R.value.minRange) ? R.value.maxRange && R.value.minRange ? we(n) || ye(n) : R.value.maxRange ? we(n) : ye(n) : !1, z = (n) => {
    const { isRangeStart: T, isRangeEnd: S } = me(n), j = R.value.enabled ? T || S : !1;
    return {
      dp__cell_offset: !n.current,
      dp__pointer: !c.disabled && !(!n.current && c.hideOffsetDates) && !y(n.value) && !U(n),
      dp__cell_disabled: y(n.value) || U(n),
      dp__cell_highlight: !ae(n) && (I(n) || ve(n)) && !V(n) && !j && !X(n) && !(Me(n) && c.weekPicker) && !S,
      dp__cell_highlight_active: !ae(n) && (I(n) || ve(n)) && V(n),
      dp__today: !c.noToday && s(n.value, D) && n.current,
      "dp--past": w(n.value, D),
      "dp--future": e(n.value, D)
    };
  }, se = (n) => ({
    dp__active_date: V(n),
    dp__date_hover: Y(n)
  }), q = (n) => {
    if (b.value && !Array.isArray(b.value)) {
      const T = i(b.value, c.weekStart);
      return {
        ...B(n),
        dp__range_start: s(T[0], n.value),
        dp__range_end: s(T[1], n.value),
        dp__range_between_week: e(n.value, T[0]) && w(n.value, T[1])
      };
    }
    return {
      ...B(n)
    };
  }, de = (n) => {
    if (b.value && Array.isArray(b.value)) {
      const T = i(b.value[0], c.weekStart), S = b.value[1] ? i(b.value[1], c.weekStart) : [];
      return {
        ...B(n),
        dp__range_start: s(T[0], n.value) || s(S[0], n.value),
        dp__range_end: s(T[1], n.value) || s(S[1], n.value),
        dp__range_between_week: e(n.value, T[0]) && w(n.value, T[1]) || e(n.value, S[0]) && w(n.value, S[1]),
        dp__range_between: e(n.value, T[1]) && w(n.value, S[0])
      };
    }
    return {
      ...B(n)
    };
  }, me = (n) => {
    const T = x.value.count > 0 ? n.current && k(n) && ce() : k(n) && ce(), S = x.value.count > 0 ? n.current && k(n, !1) && ce() : k(n, !1) && ce();
    return { isRangeStart: T, isRangeEnd: S };
  }, ge = (n) => {
    const { isRangeStart: T, isRangeEnd: S } = me(n);
    return {
      dp__range_start: T,
      dp__range_end: S,
      dp__range_between: Me(n),
      dp__date_hover: s(n.value, N.value) && !T && !S && !c.weekPicker,
      dp__date_hover_start: M(n, !0),
      dp__date_hover_end: M(n, !1)
    };
  }, B = (n) => ({
    ...ge(n),
    dp__cell_auto_range: te(n),
    dp__cell_auto_range_start: X(n),
    dp__cell_auto_range_end: F(n)
  }), h = (n) => R.value.enabled ? R.value.autoRange ? B(n) : c.modelAuto ? { ...se(n), ...ge(n) } : c.weekPicker ? de(n) : ge(n) : c.weekPicker ? q(n) : se(n);
  return {
    setHoverDate: re,
    clearHoverDate: oe,
    getDayClassData: (n) => c.hideOffsetDates && !n.current ? {} : {
      ...z(n),
      ...h(n),
      [A.value.dayClass ? A.value.dayClass(n.value, b.value) : ""]: !0,
      ...A.value.calendarCell
    }
  };
}, Cl = { key: 0 }, Yl = /* @__PURE__ */ Le({
  __name: "DatePicker",
  props: /* @__PURE__ */ xa({
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  }, Sr),
  emits: ["mount", "update-flow-step", "reset-flow", "focus-menu", "select-date", "time-update", "auto-apply"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, {
      month: i,
      year: r,
      modelValue: d,
      time: p,
      disabledTimesConfig: D,
      today: c,
      validateTime: x,
      getCalendarDays: u,
      getMarker: A,
      handleArrow: g,
      handleScroll: _,
      handleSwipe: R,
      selectDate: b,
      updateMonthYear: y,
      presetDate: N,
      selectCurrentDate: re,
      updateTime: oe,
      assignMonthAndYear: P,
      setStartTime: m
    } = Sl(l, s, se, q), o = gt(), { setHoverDate: k, getDayClassData: M, clearHoverDate: E } = Rl(), {
      rootEmit: F,
      rootProps: te,
      defaults: { multiCalendars: X, timeConfig: pe }
    } = Se(), { getYears: Z, getMonths: ce } = ta(), { getCellId: Y } = Ee(), { mapSlots: V } = At(), I = Ye("calendar-header"), ae = Ye("calendar"), ve = Ye("time-picker"), Me = V(o, "calendar"), we = V(o, "monthYear"), ye = V(o, "timePicker"), U = (S) => {
      s("mount", S);
    };
    it(
      X,
      (S, j) => {
        S.count - j.count > 0 && P();
      },
      { deep: !0 }
    );
    const z = L(() => (S) => u(i.value(S), r.value(S)).map((j) => ({
      ...j,
      days: j.days.map((ne) => (ne.marker = A(ne), ne.classData = M(ne), ne))
    })));
    function se(S) {
      S || S === 0 ? ae.value?.[S]?.triggerTransition(i.value(S), r.value(S)) : ae.value?.forEach((j, ne) => j?.triggerTransition(i.value(ne), r.value(ne)));
    }
    function q() {
      s("update-flow-step");
    }
    const de = (S, j, ne = 0) => {
      I.value?.[ne]?.toggleMonthPicker(S, j);
    }, me = (S, j, ne = 0) => {
      I.value?.[ne]?.toggleYearPicker(S, j);
    }, ge = (S, j, ne) => {
      ve.value?.toggleTimePicker(S, j, ne);
    }, B = (S, j) => {
      if (!te.range) {
        const ne = d.value ? d.value : c, Q = j ? new Date(j) : ne, a = S ? wa(Q, { weekStartsOn: 1 }) : Ia(Q, { weekStartsOn: 1 });
        b({
          value: a,
          current: Pe(Q) === i.value(0),
          text: "",
          classData: {}
        }), document.getElementById(Y(a))?.focus();
      }
    }, h = (S) => {
      I.value?.[0]?.handleMonthYearChange(S, !0);
    }, W = (S) => {
      y(0, { month: i.value(0), year: r.value(0) + (S ? 1 : -1), fromNav: !0 });
    }, n = (S) => {
      F("overlay-toggle", { open: !1, overlay: S }), s("focus-menu");
    };
    return w({
      clearHoverDate: E,
      presetDate: N,
      selectCurrentDate: re,
      handleArrow: g,
      updateMonthYear: y,
      setStartTime: m,
      toggleMonthPicker: de,
      toggleYearPicker: me,
      toggleTimePicker: ge,
      getSidebarProps: () => ({
        modelValue: d,
        month: i,
        year: r,
        time: p,
        updateTime: oe,
        updateMonthYear: y,
        selectDate: b,
        presetDate: N
      }),
      changeMonth: h,
      changeYear: W,
      selectWeekDate: B
    }), (S, j) => (C(), H(De, null, [
      at(na, { collapse: e.collapse }, {
        default: _e(({ instances: ne, wrapClass: Q }) => [
          (C(!0), H(De, null, Oe(ne, (a) => (C(), H("div", {
            key: a,
            class: ke(Q)
          }, [
            t(te).hideMonthYearSelect ? K("", !0) : (C(), Re(wl, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(ce)(),
              years: t(Z)(),
              month: t(i)(a),
              year: t(r)(a),
              instance: a,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: j[0] || (j[0] = (O) => U(t(Mt).header)),
              onResetFlow: j[1] || (j[1] = (O) => S.$emit("reset-flow")),
              onUpdateMonthYear: (O) => t(y)(a, O),
              onOverlayClosed: n
            }, ze({ _: 2 }, [
              Oe(t(we), (O, v) => ({
                name: O,
                fn: _e((J) => [
                  le(S.$slots, O, et({ ref_for: !0 }, J))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            at($l, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": z.value(a),
              instance: a,
              month: t(i)(a),
              year: t(r)(a),
              onSelectDate: (O) => t(b)(O, a !== 1),
              onSetHoverDate: j[2] || (j[2] = (O) => t(k)(O)),
              onHandleScroll: (O) => t(_)(O, a),
              onHandleSwipe: (O) => t(R)(O, a),
              onMount: j[3] || (j[3] = (O) => U(t(Mt).calendar))
            }, ze({ _: 2 }, [
              Oe(t(Me), (O, v) => ({
                name: O,
                fn: _e((J) => [
                  le(S.$slots, O, et({ ref_for: !0 }, { ...J }))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(pe).enableTimePicker ? (C(), H("div", Cl, [
        S.$slots["time-picker"] ? le(S.$slots, "time-picker", Je(et({ key: 0 }, { time: t(p), updateTime: t(oe) }))) : (C(), Re(Xa, {
          key: 1,
          ref: "time-picker",
          hours: t(p).hours,
          minutes: t(p).minutes,
          seconds: t(p).seconds,
          "disabled-times-config": t(D),
          "validate-time": t(x),
          "no-overlay-focus": e.noOverlayFocus,
          onMount: j[4] || (j[4] = (ne) => U(t(Mt).timePicker)),
          "onUpdate:hours": j[5] || (j[5] = (ne) => t(oe)(ne)),
          "onUpdate:minutes": j[6] || (j[6] = (ne) => t(oe)(ne, !1)),
          "onUpdate:seconds": j[7] || (j[7] = (ne) => t(oe)(ne, !1, !0)),
          onResetFlow: j[8] || (j[8] = (ne) => S.$emit("reset-flow"))
        }, ze({ _: 2 }, [
          Oe(t(ye), (ne, Q) => ({
            name: ne,
            fn: _e((a) => [
              le(S.$slots, ne, Je(st(a)))
            ])
          }))
        ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"]))
      ])) : K("", !0)
    ], 64));
  }
}), Ol = (e, w) => {
  const {
    rootProps: f,
    modelValue: s,
    year: l,
    calendars: i,
    defaults: { highlight: r, range: d, multiDates: p }
  } = Se(), { isDateBetween: D, isDateEqual: c } = Ee(), { checkRangeAutoApply: x, handleMultiDatesSelect: u, setMonthOrYearRange: A } = ra();
  Kt();
  const { isDisabled: g } = ut(), { formatQuarterText: _ } = Pt(), { selectYear: R, groupedYears: b, showYearPicker: y, isDisabled: N, toggleYearPicker: re, handleYearSelect: oe, handleYear: P } = Ga(w), m = ie(), o = L(() => (Y) => s.value ? Array.isArray(s.value) ? s.value.some((V) => Pa(Y, V)) : Pa(s.value, Y) : !1), k = (Y) => {
    if (d.value.enabled) {
      if (Array.isArray(s.value)) {
        const V = c(Y, s.value[0]) || c(Y, s.value[1]);
        return D(s.value, m.value, Y) && !V;
      }
      return !1;
    }
    return !1;
  }, M = (Y, V) => Y.quarter === $a(V) && Y.year === be(V), E = (Y) => typeof r.value == "function" ? r.value({ quarter: $a(Y), year: be(Y) }) : r.value.quarters.some((V) => M(V, Y)), F = L(() => (Y) => {
    const V = Te(/* @__PURE__ */ new Date(), { year: l.value(Y) });
    return On({
      start: Vt(V),
      end: Na(V)
    }).map((I) => {
      const ae = xn(I), ve = Ta(I), Me = g(I), we = k(ae), ye = E(ae);
      return {
        text: _(ae, ve),
        value: ae,
        active: o.value(ae),
        highlighted: ye,
        disabled: Me,
        isBetween: we
      };
    });
  }), te = (Y) => {
    u(Y, p.value.limit), w("auto-apply", !0);
  }, X = (Y) => {
    s.value = A(Y), x(s.value, w, f.autoApply, f.modelAuto);
  }, pe = (Y) => {
    s.value = Y, w("auto-apply");
  };
  return {
    groupedYears: b,
    year: l,
    isDisabled: N,
    quarters: F,
    showYearPicker: y,
    modelValue: s,
    selectYear: R,
    toggleYearPicker: re,
    handleYearSelect: oe,
    handleYear: P,
    setHoverDate: (Y) => {
      m.value = Y;
    },
    selectQuarter: (Y, V, I) => {
      if (!I)
        return i.value[V].month = Pe(Ta(Y)), p.value.enabled ? te(Y) : d.value.enabled ? X(Y) : pe(Y);
    }
  };
}, xl = { class: "dp--quarter-items" }, Bl = ["data-test-id", "disabled", "onClick", "onMouseover"], Il = /* @__PURE__ */ Le({
  __name: "QuarterPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, {
      defaults: { config: i }
    } = Se(), r = gt(), { mapSlots: d } = At(), p = d(r, "yearMode"), {
      groupedYears: D,
      year: c,
      isDisabled: x,
      quarters: u,
      modelValue: A,
      showYearPicker: g,
      setHoverDate: _,
      selectQuarter: R,
      toggleYearPicker: b,
      handleYearSelect: y,
      handleYear: N
    } = Ol(l, s);
    return w({ getSidebarProps: () => ({
      modelValue: A,
      year: c,
      selectQuarter: R,
      handleYearSelect: y,
      handleYear: N
    }) }), (oe, P) => (C(), Re(na, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: _e(({ instances: m, wrapClass: o }) => [
        (C(!0), H(De, null, Oe(m, (k) => (C(), H("div", {
          key: k,
          class: ke(o)
        }, [
          Ae("div", {
            class: "dp-quarter-picker-wrap",
            style: Ze({ minHeight: `${t(i).modeHeight}px` })
          }, [
            oe.$slots["top-extra"] ? le(oe.$slots, "top-extra", {
              key: 0,
              value: t(A)
            }) : K("", !0),
            Ae("div", null, [
              at(Qa, et({ ref_for: !0 }, oe.$props, {
                items: t(D)(k),
                instance: k,
                "show-year-picker": t(g)[k],
                year: t(c)(k),
                "is-disabled": (M) => t(x)(k, M),
                onHandleYear: (M) => t(N)(k, M),
                onYearSelect: (M) => t(y)(M, k),
                onToggleYearPicker: (M) => t(b)(k, M?.flow, M?.show)
              }), ze({ _: 2 }, [
                Oe(t(p), (M, E) => ({
                  name: M,
                  fn: _e((F) => [
                    le(oe.$slots, M, et({ ref_for: !0 }, F))
                  ])
                }))
              ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            Ae("div", xl, [
              (C(!0), H(De, null, Oe(t(u)(k), (M, E) => (C(), H("div", { key: E }, [
                Ae("button", {
                  type: "button",
                  class: ke(["dp--qr-btn", {
                    "dp--qr-btn-active": M.active,
                    "dp--qr-btn-between": M.isBetween,
                    "dp--qr-btn-disabled": M.disabled,
                    "dp--highlighted": M.highlighted
                  }]),
                  "data-test-id": M.value,
                  disabled: M.disabled,
                  onClick: (F) => t(R)(M.value, k, M.disabled),
                  onMouseover: (F) => t(_)(M.value)
                }, [
                  oe.$slots.quarter ? le(oe.$slots, "quarter", {
                    key: 0,
                    value: M.value,
                    text: M.text
                  }) : (C(), H(De, { key: 1 }, [
                    dt(Ue(M.text), 1)
                  ], 64))
                ], 42, Bl)
              ]))), 128))
            ])
          ], 4)
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), El = ["id", "tabindex", "role", "aria-label"], Vl = {
  key: 0,
  class: "dp--menu-load-container"
}, Nl = {
  key: 1,
  class: "dp--menu-header"
}, Fl = ["data-dp-mobile"], Wl = {
  key: 0,
  class: "dp__sidebar_left"
}, Ll = ["data-dp-mobile"], Hl = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], zl = {
  class: "dp__instance_calendar",
  role: "document"
}, Kl = {
  key: 2,
  class: "dp__sidebar_right"
}, jl = {
  key: 3,
  class: "dp__action_extra"
}, Ul = /* @__PURE__ */ Le({
  __name: "DatepickerMenu",
  props: {
    collapse: { type: Boolean },
    noOverlayFocus: { type: Boolean },
    getInputRect: { type: Function }
  },
  emits: ["close-picker", "select-date", "auto-apply", "time-update", "menu-blur"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = gt(), {
      state: i,
      rootProps: r,
      defaults: { textInput: d, inline: p, config: D, ui: c, ariaLabels: x },
      setState: u
    } = Se(), { isMobile: A } = ea(), { mapSlots: g } = At(), { handleEventPropagation: _, getElWithin: R, checkStopPropagation: b, checkKeyDown: y } = We(), { arrowRight: N, arrowLeft: re, arrowDown: oe, arrowUp: P } = yt(), m = Ye("inner-menu"), o = Ye("dp-menu"), k = Ye("dyn-cmp"), M = ie(0), E = ie(!1), F = ie(!1), { flowStep: te, updateFlowStep: X, childMount: pe, resetFlow: Z, handleFlow: ce } = Ln(k), Y = (a) => {
      F.value = !0, D.value.allowPreventDefault && a.preventDefault(), b(a, D.value, !0);
    };
    Ke(() => {
      E.value = !0, V(), globalThis.addEventListener("resize", V);
      const a = Ge(o);
      a && !d.value.enabled && !p.value.enabled && (u("menuFocused", !0), ae()), a && (a.addEventListener("pointerdown", Y), a.addEventListener("mousedown", Y)), document.addEventListener("mousedown", ne);
    }), Rt(() => {
      globalThis.removeEventListener("resize", V), document.removeEventListener("mousedown", ne);
      const a = Ge(o);
      a && (a.removeEventListener("pointerdown", Y), a.removeEventListener("mousedown", Y));
    });
    const V = () => {
      const a = Ge(m);
      a && (M.value = a.getBoundingClientRect().width);
    }, I = L(() => r.monthPicker ? Jr : r.yearPicker ? el : r.timePicker ? ml : r.quarterPicker ? Il : Yl), ae = () => {
      const a = Ge(o);
      a && a.focus({ preventScroll: !0 });
    }, ve = L(() => k.value?.getSidebarProps() || {}), Me = g(l, "action"), we = L(() => r.monthPicker || r.yearPicker ? g(l, "monthYear") : r.timePicker ? g(l, "timePicker") : g(l, "shared")), ye = L(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly,
      "dp-menu-loading": r.loading
    })), U = L(
      () => ({
        dp__menu: !0,
        dp__menu_index: !p.value.enabled,
        dp__relative: p.value.enabled,
        ...c.value.menu
      })
    ), z = (a) => {
      b(a, D.value, !0);
    }, se = (a) => {
      D.value.escClose && (s("close-picker"), _(a, D.value));
    }, q = (a) => {
      if (r.arrowNavigation) {
        if (a === qe.up) return P();
        if (a === qe.down) return oe();
        if (a === qe.left) return re();
        if (a === qe.right) return N();
      } else a === qe.left || a === qe.up ? B("handleArrow", qe.left, 0, a === qe.up) : B("handleArrow", qe.right, 0, a === qe.down);
    }, de = (a) => {
      u("shiftKeyInMenu", a.shiftKey), !r.hideMonthYearSelect && a.code === Be.tab && a.target.classList.contains("dp__menu") && i.shiftKeyInMenu && (a.preventDefault(), b(a, D.value, !0), s("close-picker"));
    }, me = (a) => {
      k.value?.toggleTimePicker(!1, !1), k.value?.toggleMonthPicker(!1, !1, a), k.value?.toggleYearPicker(!1, !1, a);
    }, ge = (a, O = 0) => a === "month" ? k.value?.toggleMonthPicker(!1, !0, O) : a === "year" ? k.value?.toggleYearPicker(!1, !0, O) : a === "time" ? k.value?.toggleTimePicker(!0, !1) : me(O), B = (a, ...O) => {
      k.value?.[a] && k.value?.[a](...O);
    }, h = () => {
      B("selectCurrentDate");
    }, W = (a, O) => {
      B("presetDate", mn(a), O);
    }, n = () => {
      B("clearHoverDate");
    }, T = (a, O) => {
      B("updateMonthYear", a, O);
    }, S = (a, O) => {
      a.preventDefault(), q(O);
    }, j = (a) => {
      if (de(a), a.key === Be.home || a.key === Be.end)
        return B(
          "selectWeekDate",
          a.key === Be.home,
          a.target.getAttribute("id")
        );
      switch ((a.key === Be.pageUp || a.key === Be.pageDown) && (a.shiftKey ? (B("changeYear", a.key === Be.pageUp), R(o.value, "overlay-year")?.focus()) : (B("changeMonth", a.key === Be.pageUp), R(o.value, a.key === Be.pageUp ? "action-prev" : "action-next")?.focus()), a.target.getAttribute("id") && o.value?.focus({ preventScroll: !0 })), a.key) {
        case Be.esc:
          return se(a);
        case Be.arrowLeft:
          return S(a, qe.left);
        case Be.arrowRight:
          return S(a, qe.right);
        case Be.arrowUp:
          return S(a, qe.up);
        case Be.arrowDown:
          return S(a, qe.down);
        default:
          return;
      }
    }, ne = (a) => {
      p.value.enabled && !p.value.input && !o.value?.contains(a.target) && F.value && (F.value = !1, s("menu-blur"));
    };
    return w({
      updateMonthYear: T,
      switchView: ge,
      onValueCleared: () => {
        k.value?.setStartTime?.();
      },
      handleFlow: ce
    }), (a, O) => (C(), H("div", {
      id: t(r).uid ? `dp-menu-${t(r).uid}` : void 0,
      ref: "dp-menu",
      tabindex: t(p).enabled ? void 0 : "0",
      role: t(p).enabled ? void 0 : "dialog",
      "aria-label": t(x)?.menu,
      class: ke(U.value),
      onMouseleave: n,
      onClick: z,
      onKeydown: j
    }, [
      (t(r).disabled || t(r).readonly) && t(p).enabled || t(r).loading ? (C(), H("div", {
        key: 0,
        class: ke(ye.value)
      }, [
        t(r).loading ? (C(), H("div", Vl, [...O[5] || (O[5] = [
          Ae("span", { class: "dp--menu-loader" }, null, -1)
        ])])) : K("", !0)
      ], 2)) : K("", !0),
      a.$slots["menu-header"] ? (C(), H("div", Nl, [
        le(a.$slots, "menu-header")
      ])) : K("", !0),
      le(a.$slots, "arrow"),
      Ae("div", {
        ref: "inner-menu",
        class: ke({
          dp__menu_content_wrapper: t(r).presetDates?.length || !!a.$slots["left-sidebar"] || !!a.$slots["right-sidebar"],
          "dp--menu-content-wrapper-collapsed": e.collapse && (t(r).presetDates?.length || !!a.$slots["left-sidebar"] || !!a.$slots["right-sidebar"])
        }),
        "data-dp-mobile": t(A),
        style: Ze({ "--dp-menu-width": `${M.value}px` })
      }, [
        a.$slots["left-sidebar"] ? (C(), H("div", Wl, [
          le(a.$slots, "left-sidebar", Je(st(ve.value)))
        ])) : K("", !0),
        t(r).presetDates.length ? (C(), H("div", {
          key: 1,
          class: ke({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(A)
        }, [
          (C(!0), H(De, null, Oe(t(r).presetDates, (v, J) => (C(), H(De, { key: J }, [
            v.slot ? le(a.$slots, v.slot, {
              key: 0,
              presetDate: W,
              label: v.label,
              value: v.value
            }) : (C(), H("button", {
              key: 1,
              type: "button",
              style: Ze(v.style || {}),
              class: ke(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
              "data-test-id": v.testId ?? void 0,
              "data-dp-mobile": t(A),
              onClick: Wt((G) => W(v.value, v.noTz), ["prevent"]),
              onKeydown: (G) => t(y)(G, () => W(v.value, v.noTz), !0)
            }, Ue(v.label), 47, Hl))
          ], 64))), 128))
        ], 10, Ll)) : K("", !0),
        Ae("div", zl, [
          (C(), Re(ka(I.value), {
            ref: "dyn-cmp",
            "flow-step": t(te),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": o.value,
            onMount: t(pe),
            onUpdateFlowStep: t(X),
            onResetFlow: t(Z),
            onFocusMenu: ae,
            onSelectDate: O[0] || (O[0] = (v) => a.$emit("select-date")),
            onAutoApply: O[1] || (O[1] = (v) => a.$emit("auto-apply", v)),
            onTimeUpdate: O[2] || (O[2] = (v) => a.$emit("time-update"))
          }, ze({ _: 2 }, [
            Oe(we.value, (v, J) => ({
              name: v,
              fn: _e((G) => [
                le(a.$slots, v, Je(st({ ...G })))
              ])
            }))
          ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
        ]),
        a.$slots["right-sidebar"] ? (C(), H("div", Kl, [
          le(a.$slots, "right-sidebar", Je(st(ve.value)))
        ])) : K("", !0),
        a.$slots["action-extra"] ? (C(), H("div", jl, [
          a.$slots["action-extra"] ? le(a.$slots, "action-extra", {
            key: 0,
            selectCurrentDate: h
          }) : K("", !0)
        ])) : K("", !0)
      ], 14, Fl),
      !t(r).autoApply || t(D).keepActionRow ? (C(), Re(Hr, {
        key: 2,
        "menu-mount": E.value,
        "calendar-width": M.value,
        onClosePicker: O[3] || (O[3] = (v) => a.$emit("close-picker")),
        onSelectDate: O[4] || (O[4] = (v) => a.$emit("select-date")),
        onSelectNow: h
      }, ze({ _: 2 }, [
        Oe(t(Me), (v, J) => ({
          name: v,
          fn: _e((G) => [
            le(a.$slots, v, Je(st({ ...G })))
          ])
        }))
      ]), 1032, ["menu-mount", "calendar-width"])) : K("", !0)
    ], 42, El));
  }
}), ql = ["data-dp-mobile"], Ql = /* @__PURE__ */ Le({
  __name: "VueDatePicker",
  setup(e, { expose: w }) {
    const {
      rootEmit: f,
      setState: s,
      inputValue: l,
      modelValue: i,
      rootProps: r,
      defaults: { inline: d, config: p, textInput: D, range: c, multiDates: x, teleport: u, floatingConfig: A }
    } = Se(), { clearArrowNav: g } = yt(), { validateDate: _, isValidTime: R } = ut(), { menuTransition: b, showTransition: y } = zt(), { isMobile: N } = ea(), { mapSlots: re } = At(), { findNextFocusableElement: oe, getNumVal: P } = We(), m = gt(), o = ie(!1), k = _a(r, "modelValue"), M = _a(r, "timezone"), E = Ye("dp-menu-wrap"), F = Ye("dp-menu"), te = Ye("input-cmp"), X = Ye("picker-wrapper"), pe = Ye("menu-arrow"), Z = ie(!1), ce = ie(!1), Y = ie(!1), V = ie(!1), I = (ue) => (A.value.arrow && (A.value.arrow === !0 ? ue.push(Aa({ element: pe })) : ue.push(Aa({ element: A.value.arrow }))), ue), { floatingStyles: ae, middlewareData: ve, placement: Me } = hn(
      te,
      E,
      {
        middleware: I([yn(A.value.offset), bn(), kn()]),
        whileElementsMounted(...ue) {
          return gn(...ue, { animationFrame: !0 });
        }
      }
    );
    Ke(() => {
      U(r.modelValue), tt().then(() => {
        d.value.enabled || globalThis.addEventListener("resize", W);
      }), d.value.enabled && (o.value = !0), globalThis.addEventListener("keyup", n), globalThis.addEventListener("keydown", T);
    }), Rt(() => {
      d.value.enabled || globalThis.removeEventListener("resize", W), globalThis.removeEventListener("keyup", n), globalThis.removeEventListener("keydown", T);
    });
    const we = re(m, "all", r.presetDates), ye = re(m, "input");
    it(
      [k, M],
      () => {
        U(k.value);
      },
      { deep: !0 }
    );
    const { parseExternalModelValue: U, emitModelValue: z, formatInputValue: se, checkBeforeEmit: q } = Vn(), de = L(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: d.value.enabled,
        "dp--flex-display-collapsed": V.value,
        dp__flex_display_with_input: d.value.input
      })
    ), me = L(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), ge = L(() => d.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker)), B = () => te.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, h = () => {
      o.value && p.value.closeOnScroll && G();
    }, W = () => {
      const ue = F.value?.$el.getBoundingClientRect().width ?? 0;
      V.value = document.body.offsetWidth <= ue;
    }, n = (ue) => {
      ue.key === "Tab" && !d.value.enabled && !r.teleport && p.value.tabOutClosesMenu && (X.value.contains(document.activeElement) || G()), Y.value = ue.shiftKey;
    }, T = (ue) => {
      Y.value = ue.shiftKey;
    }, S = () => {
      !r.disabled && !r.readonly && (o.value = !0, o.value && f("open"), o.value || J(), U(r.modelValue));
    }, j = () => {
      l.value = "", J(), F.value?.onValueCleared(), te.value?.setParsedDate(null), f("update:model-value", null), f("cleared"), p.value.closeOnClearValue && G();
    }, ne = () => {
      const ue = i.value;
      return !ue || !Array.isArray(ue) && _(ue) ? !0 : Array.isArray(ue) ? x.value.enabled || ue.length === 2 && _(ue[0]) && _(ue[1]) ? !0 : c.value.partialRange && !r.timePicker ? _(ue[0]) : !1 : !1;
    }, Q = () => {
      q() && ne() ? (z(), G()) : f("invalid-select");
    }, a = (ue) => {
      O(), z(), p.value.closeOnAutoApply && !ue && G();
    }, O = () => {
      te.value && D.value.enabled && te.value.setParsedDate(i.value);
    }, v = (ue = !1) => {
      r.autoApply && R(i.value) && ne() && (c.value.enabled && Array.isArray(i.value) ? (c.value.partialRange || i.value.length === 2) && a(ue) : a(ue));
    }, J = () => {
      D.value.enabled || (i.value = null);
    }, G = (ue = !1) => {
      ue && i.value && p.value.setDateOnMenuClose && Q(), d.value.enabled || (o.value && (o.value = !1, s("menuFocused", !1), s("shiftKeyInMenu", !1), g(), f("closed"), l.value && U(k.value)), J(), f("blur"));
    }, Ce = (ue, Xe, nt = !1) => {
      if (!ue) {
        i.value = null;
        return;
      }
      const Ot = Array.isArray(ue) ? !ue.some((ca) => !_(ca)) : _(ue), bt = R(ue);
      Ot && bt ? (s("isTextInputDate", !0), i.value = ue, Xe ? (ce.value = nt, Q(), f("text-submit")) : r.autoApply && v(!0), tt().then(() => {
        s("isTextInputDate", !1);
      })) : f("invalid-date", ue);
    }, fe = () => {
      r.autoApply && R(i.value) && z(), O();
    }, He = () => o.value ? G() : S(), Ie = (ue) => {
      i.value = ue;
    }, vt = () => {
      D.value.enabled && (Z.value = !0, se()), f("focus");
    }, Ut = () => {
      D.value.enabled && (Z.value = !1, U(r.modelValue), ce.value && oe(X.value, Y.value)?.focus()), f("blur");
    }, la = (ue) => {
      F.value && F.value.updateMonthYear(0, {
        month: P(ue.month),
        year: P(ue.year)
      });
    }, oa = (ue) => {
      U(ue ?? r.modelValue);
    }, sa = (ue, Xe) => {
      F.value?.switchView(ue, Xe);
    }, Yt = (ue, Xe) => p.value.onClickOutside ? p.value.onClickOutside(ue, Xe) : G(!0), ua = (ue = 0) => {
      F.value?.handleFlow(ue);
    }, ia = () => E;
    return pn(E, (ue) => Yt(ne, ue), {
      ignore: [te]
    }), w({
      closeMenu: G,
      selectDate: Q,
      clearValue: j,
      openMenu: S,
      onScroll: h,
      formatInputValue: se,
      // exposed for testing purposes
      updateInternalModelValue: Ie,
      // modify internal modelValue
      setMonthYear: la,
      parseModel: oa,
      switchView: sa,
      toggleMenu: He,
      handleFlow: ua,
      getDpWrapMenuRef: ia
    }), (ue, Xe) => (C(), H("div", {
      ref: "picker-wrapper",
      class: ke(de.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": t(N)
    }, [
      at(Vr, {
        ref: "input-cmp",
        "is-menu-open": o.value,
        onClear: j,
        onOpen: S,
        onSetInputDate: Ce,
        onSetEmptyDate: t(z),
        onSelectDate: Q,
        onToggle: He,
        onClose: G,
        onFocus: vt,
        onBlur: Ut,
        onRealBlur: Xe[0] || (Xe[0] = (nt) => Z.value = !1)
      }, ze({ _: 2 }, [
        Oe(t(ye), (nt, Ot) => ({
          name: nt,
          fn: _e((bt) => [
            le(ue.$slots, nt, Je(st(bt)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      Ae("div", {
        ref: "dp-menu-wrap",
        class: ke({ "dp--menu-wrapper": !t(d).enabled, dp__outer_menu_wrap: !0 }),
        style: Ze(t(d).enabled ? void 0 : t(ae))
      }, [
        at(Ct, {
          name: t(b)(t(Me) === "top"),
          css: t(y) && !t(d).enabled
        }, {
          default: _e(() => [
            o.value ? (C(), Re(Ul, {
              key: 0,
              ref: "dp-menu",
              class: ke({ [me.value]: !0, "dp--menu-wrapper": t(r).teleport }),
              "no-overlay-focus": ge.value,
              collapse: V.value,
              "get-input-rect": B,
              onClosePicker: G,
              onSelectDate: Q,
              onAutoApply: v,
              onTimeUpdate: fe,
              onMenuBlur: Xe[1] || (Xe[1] = (nt) => t(f)("blur"))
            }, ze({ _: 2 }, [
              Oe(t(we), (nt, Ot) => ({
                name: nt,
                fn: _e((bt) => [
                  le(ue.$slots, nt, Je(st({ ...bt })))
                ])
              })),
              !t(d).enabled && !t(u).center && t(A).arrow === !0 ? {
                name: "arrow",
                fn: _e(() => [
                  Ae("div", {
                    ref: "menu-arrow",
                    class: ke({ dp__arrow_top: t(Me) === "bottom", dp__arrow_bottom: t(Me) === "top" }),
                    style: Ze({
                      left: t(ve).arrow?.x != null ? `${t(ve).arrow.x}px` : "",
                      top: t(ve).arrow?.y != null ? `${t(ve).arrow.y}px` : ""
                    })
                  }, null, 6)
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["class", "no-overlay-focus", "collapse"])) : K("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 6)
    ], 10, ql));
  }
}), no = /* @__PURE__ */ Le({
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
    teleport: { type: [Object, Boolean] },
    locale: {},
    weekNumName: {},
    weekStart: {},
    weekNumbers: { type: [String, Function, Object] },
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
    uid: {},
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
  }, Rr),
  emits: ["update:model-value", "internal-model-change", "text-submit", "text-input", "open", "closed", "focus", "blur", "cleared", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "invalid-date", "tooltip-open", "tooltip-close", "am-pm-change", "range-start", "range-end", "date-click", "overlay-toggle"],
  setup(e, { expose: w, emit: f }) {
    const s = f, l = e, i = gt();
    Wn(l, s);
    const r = Ye("date-picker");
    return w(Yr(r)), (d, p) => (C(), Re(Ql, { ref: "date-picker" }, ze({ _: 2 }, [
      Oe(i, (D, c) => ({
        name: D,
        fn: _e((x) => [
          le(d.$slots, D, Je(st(x)))
        ])
      }))
    ]), 1536));
  }
});
export {
  no as VueDatePicker
};
