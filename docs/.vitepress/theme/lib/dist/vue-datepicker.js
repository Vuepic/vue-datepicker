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
    let k = null;
    e.value[Ne.value] && (k = e.value[Ne.value][je.value]), !k && e.value[Ne.value + (b ? 1 : -1)] ? (Ne.value = Ne.value + (b ? 1 : -1), je.value = b ? 0 : e.value[Ne.value].length - 1) : k || (je.value = b ? je.value - 1 : je.value + 1);
  }, f = (b) => {
    if (Ne.value === 0 && !b || Ne.value === e.value.length && b) return;
    Ne.value = b ? Ne.value + 1 : Ne.value - 1, e.value[Ne.value] ? e.value[Ne.value] && !e.value[Ne.value][je.value] && je.value !== 0 && (je.value = e.value[Ne.value].length - 1) : Ne.value = b ? Ne.value - 1 : Ne.value + 1;
  }, s = (b) => {
    let k = null;
    e.value[Ne.value] && (k = e.value[Ne.value][je.value]), k ? k.focus({ preventScroll: !Gt.value }) : je.value = b ? je.value - 1 : je.value + 1;
  }, l = () => {
    w(!0), s(!0);
  }, i = () => {
    w(!1), s(!1);
  }, r = () => {
    f(!1), s(!0);
  }, v = () => {
    f(!0), s(!0);
  }, g = (b, k) => {
    xe[k] = b;
  }, D = (b, k) => {
    xe[k] = b;
  }, c = () => {
    je.value = 0, Ne.value = 0;
  };
  return {
    buildMatrix: g,
    buildMultiLevelMatrix: D,
    setTimePickerBackRef: (b) => {
      ma.value = b;
    },
    setSelectionGrid: (b) => {
      Gt.value = b, c(), b || (xe.selectionGrid = []);
    },
    setTimePicker: (b, k = !1) => {
      pa.value = b, ga.value = k, c(), b || (xe.timePicker[0] = [], xe.timePicker[1] = []);
    },
    setTimePickerElements: (b, k = 0) => {
      xe.timePicker[k] = b;
    },
    arrowRight: l,
    arrowLeft: i,
    arrowUp: r,
    arrowDown: v,
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
  const { getDate: e, setTime: w, getWeekFromDate: f } = Ee(), { checkPartialRangeValue: s, checkRangeEnabled: l, isValidDate: i } = ut(), { convertType: r, errorMapper: v } = We(), {
    rootEmit: g,
    state: D,
    rootProps: c,
    inputValue: O,
    defaults: { textInput: u, range: _, tz: p, multiDates: M, timeConfig: R, formats: b },
    modelValue: k,
    updateTime: F
  } = Se(), { formatSelectedDate: re, formatForTextInput: oe } = Pt();
  it(
    k,
    (h, W) => {
      g("internal-model-change", k.value), JSON.stringify(W ?? {}) !== JSON.stringify(h ?? {}) && F();
    },
    { deep: !0 }
  ), it(_, (h, W) => {
    h.enabled !== W.enabled && (k.value = null);
  }), it(
    () => b.value.input,
    () => {
      we();
    }
  );
  const A = (h) => p.value.timezone && p.value.convertModel ? e(h) : h, m = (h) => h ? c.modelType ? U(h) : {
    hours: ct(h),
    minutes: ht(h),
    seconds: R.value.enableSeconds ? Dt(h) : 0
  } : null, o = (h) => c.modelType ? U(h) : { month: Pe(h), year: be(h) }, y = (h) => Array.isArray(h) ? M.value.enabled ? h.map((W) => $(W, ot(e(), W))) : l(
    () => [
      ot(e(), h[0]),
      h[1] ? ot(e(), h[1]) : s(_.value.partialRange)
    ],
    _.value.enabled
  ) : ot(e(), +h), $ = (h, W) => (typeof h == "string" || typeof h == "number") && c.modelType ? ye(h) : W, B = (h) => Array.isArray(h) ? [
    $(h[0], w(h[0])),
    $(h[1], w(h[1]))
  ] : $(h, w(h)), N = (h) => {
    const W = Te(e(), { date: 1 });
    return Array.isArray(h) ? M.value.enabled ? h.map(
      (n) => $(n, Te(W, { month: +n.month, year: +n.year }))
    ) : l(
      () => [
        $(h[0], Te(W, { month: +h[0].month, year: +h[0].year })),
        $(
          h[1],
          h[1] ? Te(W, { month: +h[1].month, year: +h[1].year }) : s(_.value.partialRange)
        )
      ],
      _.value.enabled
    ) : $(h, Te(W, { month: +h.month, year: +h.year }));
  }, J = (h) => {
    if (Array.isArray(h))
      return h.map((W) => ye(W));
    throw new Error(v.dateArr("multi-dates"));
  }, ee = (h) => {
    if (Array.isArray(h) && _.value.enabled) {
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
      h[1] ? ye(h[1]) : s(_.value.partialRange)
    ] : [ye(h[0])],
    _.value.enabled
  ) : ye(h), Z = () => {
    Array.isArray(k.value) && _.value.enabled && k.value.length === 1 && k.value.push(s(_.value.partialRange));
  }, ce = () => {
    const h = k.value;
    return [
      U(h[0]),
      h[1] ? U(h[1]) : s(_.value.partialRange)
    ];
  }, Y = () => Array.isArray(k.value) ? k.value[1] ? ce() : U(r(k.value[0])) : [], V = () => (k.value || []).map((h) => U(h)), E = (h = !1) => (h || Z(), c.modelAuto ? Y() : M.value.enabled ? V() : Array.isArray(k.value) ? l(() => ce(), _.value.enabled) : U(r(k.value))), ae = (h) => !h || Array.isArray(h) && !h.length ? null : c.timePicker ? B(r(h)) : c.monthPicker ? N(r(h)) : c.yearPicker ? y(r(h)) : M.value.enabled ? J(r(h)) : c.weekPicker ? ee(r(h)) : pe(r(h)), ve = (h) => {
    if (D.isTextInputDate) return;
    const W = ae(h);
    i(r(W)) ? (k.value = r(W), we()) : (k.value = null, O.value = "");
  }, Me = () => k.value ? M.value.enabled ? k.value.map((h) => re(h)).join("; ") : u.value.enabled ? oe() : re(k.value) : "", we = () => {
    O.value = Me();
  }, ye = (h) => c.modelType ? En.includes(c.modelType) ? new Date(h) : c.modelType === "format" && typeof b.value.input == "string" ? ba(h, b.value.input, /* @__PURE__ */ new Date(), { locale: c.locale }) : ba(h, c.modelType, /* @__PURE__ */ new Date(), { locale: c.locale }) : new Date(h), U = (h) => h ? c.modelType ? c.modelType === "timestamp" ? +A(h) : c.modelType === "iso" ? A(h).toISOString() : c.modelType === "format" && typeof b.value.input == "string" ? re(A(h)) : re(A(h), c.modelType) : A(h) : "", z = (h) => {
    g("update:model-value", h);
  }, se = (h) => Array.isArray(k.value) ? M.value.enabled ? k.value.map((W) => h(W)) : [h(k.value[0]), k.value[1] ?? null] : h(r(k.value)), q = () => {
    if (Array.isArray(k.value)) {
      const h = f(k.value[0], c.weekStart), W = k.value[1] ? f(k.value[1], c.weekStart) : [];
      return [h.map((n) => e(n)), W.map((n) => e(n))];
    }
    return f(k.value, c.weekStart).map((h) => e(h));
  }, de = (h) => z(r(se(h))), me = () => g("update:model-value", q());
  return {
    checkBeforeEmit: () => k.value ? _.value.enabled ? _.value.partialRange ? k.value.length >= 1 : k.value.length === 2 : !!k.value : !1,
    parseExternalModelValue: ve,
    formatInputValue: we,
    emitModelValue: () => (we(), c.monthPicker ? de(o) : c.timePicker ? de(m) : c.yearPicker ? de(be) : c.weekPicker ? me() : z(E()))
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
  }), r = /* @__PURE__ */ new Date(), v = ie(""), g = ie([{ month: Pe(r), year: be(r) }]), D = Ft({ hours: 0, minutes: 0, seconds: 0 });
  f(D, null, r, s.range.value.enabled);
  const c = L({
    get: () => l.value,
    set: (M) => {
      !e.readonly && !e.disabled && (l.value = M);
    }
  }), O = L(
    () => (M) => g.value[M] ? g.value[M].month : 0
  ), u = L(
    () => (M) => g.value[M] ? g.value[M].year : 0
  ), _ = (M, R) => {
    i[M] = R;
  }, p = () => {
    f(D, c.value, r, s.range.value.enabled);
  };
  un(qa, {
    rootProps: e,
    defaults: s,
    modelValue: c,
    state: cn(i),
    rootEmit: w,
    calendars: g,
    month: O,
    year: u,
    time: D,
    today: r,
    inputValue: v,
    setState: _,
    updateTime: p
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
    (r, v) => {
      r.enabled !== v.enabled && i(f, s.value, w, l.value.enabled);
    },
    { deep: !0 }
  ), it(
    s,
    (r, v) => {
      e && JSON.stringify(r ?? {}) !== JSON.stringify(v ?? {}) && e();
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
    getTimeObj: v,
    setTime: g
  } = Ee(), {
    defaults: { safeDates: D, range: c, multiDates: O, filters: u, timeConfig: _ },
    rootProps: p
  } = Se(), { getMapKeyType: M, getMapDate: R, errorMapper: b, convertType: k } = We(), F = (n) => D.value.disabledDates ? typeof D.value.disabledDates == "function" ? D.value.disabledDates(e(n)) : !!R(n, D.value.disabledDates) : !1, re = (n) => D.value.maxDate ? p.yearPicker ? be(n) > be(D.value.maxDate) : f(n, D.value.maxDate) : !1, oe = (n) => D.value.minDate ? p.yearPicker ? be(n) < be(D.value.minDate) : w(n, D.value.minDate) : !1, A = (n) => {
    if (!n) return !1;
    const P = re(n), S = oe(n), j = F(n), Q = u.value.months.map((G) => +G).includes(Pe(n)), a = u.value.weekDays?.length ? u.value.weekDays.some((G) => +G === Dn(n)) : !1, x = B(n), d = be(n), X = d < +p.yearRange[0] || d > +p.yearRange[1];
    return !(P || S || j || Q || X || a || x);
  }, m = (n, P) => w(...q(D.value.minDate, n, P)) || s(...q(D.value.minDate, n, P)), o = (n, P) => f(...q(D.value.maxDate, n, P)) || s(...q(D.value.maxDate, n, P)), y = (n, P, S) => {
    let j = !1;
    return D.value.maxDate && S && o(n, P) && (j = !0), D.value.minDate && !S && m(n, P) && (j = !0), j;
  }, $ = (n, P, S, j) => {
    let ne = !1;
    return j && (D.value.minDate || D.value.maxDate) ? D.value.minDate && D.value.maxDate ? ne = y(n, P, S) : (D.value.minDate && m(n, P) || D.value.maxDate && o(n, P)) && (ne = !0) : ne = !0, ne;
  }, B = (n) => Array.isArray(D.value.allowedDates) && !D.value.allowedDates.length ? !0 : D.value.allowedDates ? !R(
    n,
    D.value.allowedDates,
    M(p.monthPicker, p.yearPicker)
  ) : !1, N = (n) => !A(n), J = (n) => c.value.noDisabledRange ? !Ba({ start: n[0], end: n[1] }).some((S) => N(S)) : !0, ee = (n) => {
    if (n) {
      const P = be(n);
      return P >= +p.yearRange[0] && P <= p.yearRange[1];
    }
    return !0;
  }, pe = (n, P) => !!(Array.isArray(n) && n[P] && (c.value.maxRange || c.value.minRange) && ee(n[P])), Z = (n, P, S = 0) => {
    if (pe(P, S) && ee(n)) {
      const j = wn(n, P[S]), ne = i(P[S], n), Q = ne.length === 1 ? 0 : ne.filter((x) => N(x)).length, a = Math.abs(j) - (c.value.minMaxRawRange ? 0 : Q);
      if (c.value.minRange && c.value.maxRange)
        return a >= +c.value.minRange && a <= +c.value.maxRange;
      if (c.value.minRange) return a >= +c.value.minRange;
      if (c.value.maxRange) return a <= +c.value.maxRange;
    }
    return !0;
  }, ce = () => !_.value.enableTimePicker || p.monthPicker || p.yearPicker || _.value.ignoreTimeValidation, Y = (n) => Array.isArray(n) ? [n[0] ? r(n[0]) : null, n[1] ? r(n[1]) : null] : r(n), V = (n, P, S) => P ? n.find(
    (j) => +j.hours === ct(P) && j.minutes === "*" ? !0 : +j.minutes === ht(P) && +j.hours === ct(P)
  ) && S : !1, E = (n, P, S) => {
    const [j, ne] = n, [Q, a] = P;
    return !V(j, Q, S) && !V(ne, a, S) && S;
  }, ae = (n, P) => {
    const S = Array.isArray(P) ? P : [P];
    return Array.isArray(p.disabledTimes) ? Array.isArray(p.disabledTimes[0]) ? E(p.disabledTimes, S, n) : !S.some((j) => V(p.disabledTimes, j, n)) : n;
  }, ve = (n, P) => {
    const S = Array.isArray(P) ? [v(P[0]), P[1] ? v(P[1]) : void 0] : v(P), j = !p.disabledTimes(S);
    return n && j;
  }, Me = (n, P) => p.disabledTimes ? Array.isArray(p.disabledTimes) ? ae(P, n) : ve(P, n) : P, we = (n) => {
    let P = !0;
    if (!n || ce()) return !0;
    const S = !D.value.minDate && !D.value.maxDate ? Y(n) : n;
    return (p.maxTime || D.value.maxDate) && (P = me(
      p.maxTime,
      D.value.maxDate,
      "max",
      k(S),
      P
    )), (p.minTime || D.value.minDate) && (P = me(
      p.minTime,
      D.value.minDate,
      "min",
      k(S),
      P
    )), Me(n, P);
  }, ye = (n) => {
    if (!p.monthPicker) return !0;
    let P = !0;
    const S = e(l(n));
    if (D.value.minDate && D.value.maxDate) {
      const j = e(l(D.value.minDate)), ne = e(l(D.value.maxDate));
      return f(S, j) && w(S, ne) || s(S, j) || s(S, ne);
    }
    if (D.value.minDate) {
      const j = e(l(D.value.minDate));
      P = f(S, j) || s(S, j);
    }
    if (D.value.maxDate) {
      const j = e(l(D.value.maxDate));
      P = w(S, j) || s(S, j);
    }
    return P;
  }, U = L(() => (n) => !_.value.enableTimePicker || _.value.ignoreTimeValidation ? !0 : we(n)), z = L(() => (n) => p.monthPicker ? Array.isArray(n) && (c.value.enabled || O.value.enabled) ? !n.filter((S) => !ye(S)).length : ye(n) : !0), se = (n, P, S) => {
    if (!P || S && !D.value.maxDate || !S && !D.value.minDate) return !1;
    const j = S ? wt(n, 1) : Lt(n, 1), ne = [Pe(j), be(j)];
    return S ? !o(...ne) : !m(...ne);
  }, q = (n, P, S) => [Te(e(n), { date: 1 }), Te(e(), { month: P, year: S, date: 1 })], de = (n, P, S, j) => {
    if (!n) return !0;
    if (j) {
      const ne = S === "max" ? St(n, P) : _t(n, P), Q = { seconds: 0, milliseconds: 0 };
      return ne || Tt(Te(n, Q), Te(P, Q));
    }
    return S === "max" ? n.getTime() <= P.getTime() : n.getTime() >= P.getTime();
  }, me = (n, P, S, j, ne) => {
    if (Array.isArray(j)) {
      const a = ge(n, j[0], P), x = ge(n, j[1], P);
      return de(j[0], a, S, !!P) && de(j[1], x, S, !!P) && ne;
    }
    const Q = ge(n, j, P);
    return de(j, Q, S, !!P) && ne;
  }, ge = (n, P, S) => n ? g(n, P) : e(S ?? P);
  return {
    isDisabled: N,
    validateDate: A,
    validateMonthYearInRange: $,
    isDateRangeAllowed: J,
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
    checkRangeEnabled: (n, P) => {
      if (P) return n();
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
  }), v = L(() => f.monthPicker || f.timePicker), g = (_) => {
    if (l.value?.steps?.length) {
      if (!_ && v.value) return u();
      r[_] = !0, Object.keys(r).filter((p) => !r[p]).length || u();
    }
  }, D = () => {
    l.value?.steps?.length && i.value !== -1 && (i.value += 1, w("flow-step", i.value), u()), l.value?.steps?.length === i.value && tt().then(() => c());
  }, c = () => {
    i.value = -1;
  }, O = (_, p, ...M) => {
    l.value?.steps[i.value] === _ && e.value && e.value[p]?.(...M);
  }, u = (_ = 0) => {
    _ && (i.value += _), O(Qe.month, "toggleMonthPicker", !0), O(Qe.year, "toggleYearPicker", !0), O(Qe.calendar, "toggleTimePicker", !1, !0), O(Qe.time, "toggleTimePicker", !0, !0);
    const p = l.value?.steps[i.value];
    (p === Qe.hours || p === Qe.minutes || p === Qe.seconds) && O(p, "toggleTimePicker", !0, !0, p);
  };
  return { childMount: g, updateFlowStep: D, resetFlow: c, handleFlow: u, flowStep: i };
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
      const r = e.defaultFormattingWidth || e.defaultWidth, v = f?.width ? String(f.width) : r;
      l = e.formattingValues[v] || e.formattingValues[r];
    } else {
      const r = e.defaultWidth, v = f?.width ? String(f.width) : e.defaultWidth;
      l = e.values[v] || e.values[r];
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
    const r = i[0], v = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], g = Array.isArray(v) ? zn(v, (O) => O.test(r)) : (
      // [TODO] -- I challenge you to fix the type
      Hn(v, (O) => O.test(r))
    );
    let D;
    D = e.valueCallback ? e.valueCallback(g) : g, D = f.valueCallback ? (
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
    const v = w.slice(l.length);
    return { value: r, rest: v };
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
  timePickerInline: !1
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
    const Y = ee.value.enableSeconds ? ":ss" : "", V = ee.value.enableMinutes ? ":mm" : "";
    return ee.value.is24 ? `HH${V}${Y}` : `hh${V}${Y} aa`;
  }, r = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? i() : e.weekPicker ? `${A.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : ee.value.enableTimePicker ? `MM/dd/yyyy, ${i()}` : "MM/dd/yyyy", v = (Y) => w(Y, ee.value.enableSeconds), g = () => $.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [v(e.startTime[0]), v(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? v(e.startTime) : null, D = (Y) => Y ? typeof Y == "boolean" ? Y ? 2 : 0 : Math.max(+Y, 2) : 0, c = (Y) => {
    const V = l(e.monthPicker, e.yearPicker);
    return new Map(
      Y.map((E) => {
        const ae = f(E, m.value, O.value);
        return [s(ae, V), ae];
      })
    );
  }, O = L(() => e.monthPicker || e.yearPicker || e.quarterPicker), u = L(() => {
    const Y = typeof e.multiCalendars == "object" && e.multiCalendars, V = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...V, count: D(!1) };
    const E = Y ? e.multiCalendars : {}, ae = Y ? E.count ?? !0 : e.multiCalendars, ve = D(ae);
    return Object.assign(V, E, { count: ve });
  }), _ = L(() => g()), p = L(() => ({ ...Ar, ...e.ariaLabels })), M = L(() => ({ ...Pr, ...e.filters })), R = L(() => typeof e.transitions == "boolean" ? e.transitions ? Ca : !1 : { ...Ca, ...e.transitions }), b = L(() => ({ ..._r, ...e.actionRow })), k = L(() => typeof e.textInput == "object" ? {
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
  }), F = L(() => {
    const Y = { input: !1 };
    return typeof e.inline == "object" ? { ...Y, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...Y
    };
  }), re = L(() => ({ ...Dr, ...e.config })), oe = L(() => typeof e.highlight == "function" ? e.highlight : {
    ...Mr,
    ...e.highlight
  }), A = L(() => typeof e.weekNumbers == "object" ? {
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
  }), y = L(() => ({
    minDate: f(e.minDate, m.value, O.value),
    maxDate: f(e.maxDate, m.value, O.value),
    disabledDates: Array.isArray(e.disabledDates) ? c(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? c(e.allowedDates) : null,
    highlight: typeof oe.value == "object" && Array.isArray(oe.value.dates) ? c(oe.value.dates) : oe.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((Y) => {
        const V = f(Y.date, m.value);
        return [s(V, $t.DATE), Y];
      })
    ) : null
  })), $ = L(() => typeof e.range == "object" ? { enabled: !0, ...Sa, ...e.range } : {
    enabled: e.range,
    ...Sa
  }), B = L(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((V) => {
        const E = V, ae = e.ui[E];
        if (E === "dayClass") return [E, e.ui[E]];
        const ve = typeof e.ui[E] == "string" ? { [ae]: !0 } : Object.fromEntries(ae.map((Me) => [Me, !0]));
        return [V, ve];
      })
    )
  })), N = L(() => ({
    ...Tr,
    ...e.formats,
    input: e.formats?.input ?? r(),
    preview: e.formats?.preview ?? r()
  })), J = L(() => typeof e.teleport == "boolean" || !e.teleport ? { ...Ya, enabled: !!e.teleport } : { ...Ya, ...e.teleport, enabled: !0 }), ee = L(() => ({ ...$r, ...e.timeConfig })), pe = L(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), Z = L(() => {
    const Y = k.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Oa, inputmode: Y, ...e.inputAttrs } : { ...Oa, inputmode: Y };
  }), ce = L(() => ({
    offset: e.floating?.offset ?? 10,
    arrow: e.floating?.arrow ?? !0
  }));
  return {
    transitions: R,
    multiCalendars: u,
    startTime: _,
    ariaLabels: p,
    filters: M,
    actionRow: b,
    textInput: k,
    inline: F,
    config: re,
    highlight: oe,
    weekNumbers: A,
    range: $,
    safeDates: y,
    tz: m,
    multiDates: o,
    ui: B,
    formats: N,
    teleport: J,
    timeConfig: ee,
    flow: pe,
    inputAttrs: Z,
    floatingConfig: ce
  };
}, Ee = () => {
  const e = (A) => +(A ?? -1) >= 0, w = (A, m) => {
    if (!A) return /* @__PURE__ */ new Date();
    const o = f(A), y = Te(o, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return m ? Pn(y) : y;
  }, f = (A) => A ? new Date(A) : /* @__PURE__ */ new Date(), s = (A, m) => {
    let o = f(m);
    return e(A.hours) && (o = _n(o, +A.hours)), e(A.minutes) && (o = An(o, +A.minutes)), e(A.seconds) && (o = Ea(o, +A.seconds)), Va(o, 0);
  }, l = (A, m) => {
    const o = wa(A, { weekStartsOn: +m }), y = Ia(A, { weekStartsOn: +m });
    return [o, y];
  }, i = (A, m) => !A || !m ? !1 : St(w(A), w(m)), r = (A, m) => !A || !m ? !1 : Tt(w(A), w(m)), v = (A, m) => !A || !m ? !1 : _t(w(A), w(m)), g = (A, m, o) => A?.[0] && A?.[1] ? v(o, A[0]) && i(o, A[1]) : A?.[0] && m ? v(o, A[0]) && i(o, m) || i(o, A[0]) && v(o, m) : !1, D = (A, m) => {
    const o = v(A, m) ? m : A, y = v(m, A) ? m : A;
    return Ba({ start: o, end: y });
  }, c = (A) => `dp-${lt(A, "yyyy-MM-dd")}`, O = (A) => w(Te(f(A), { date: 1 })), u = (A, m) => {
    if (m) {
      const o = be(f(m));
      if (o > A) return 12;
      if (o === A) return Pe(f(m));
    }
  }, _ = (A, m) => {
    if (m) {
      const o = be(f(m));
      return o < A ? -1 : o === A ? Pe(f(m)) : void 0;
    }
  }, p = (A) => {
    if (A) return be(f(A));
  }, M = (A) => ({
    hours: ct(A),
    minutes: ht(A),
    seconds: Dt(A)
  }), R = (A) => Te(f(), M(A)), b = (A, m, o) => m && (o || o === 0) ? Object.fromEntries(
    ["hours", "minutes", "seconds"].map((y) => y === m ? [y, o] : [y, Number.isNaN(+A[y]) ? void 0 : +A[y]])
  ) : {
    hours: Number.isNaN(+A.hours) ? void 0 : +A.hours,
    minutes: Number.isNaN(+A.minutes) ? void 0 : +A.minutes,
    seconds: Number.isNaN(+A.seconds) ? void 0 : +A.seconds
  }, k = (A, m) => {
    const o = f(), y = {
      hours: ct(o),
      minutes: ht(o),
      seconds: m ? Dt(o) : 0
    };
    return Object.assign(y, A);
  }, F = (A, m) => {
    const o = Mn(w(m), A), y = pt(w(m), A);
    return { before: o, after: y };
  }, re = (A, m, o, y) => {
    const $ = {
      hours: ct,
      minutes: ht,
      seconds: Dt
    };
    if (!m) return y ? [$[A](o), $[A](o)] : $[A](o);
    if (Array.isArray(m)) {
      const B = m[0] ?? o, N = m[1] ?? o;
      return [$[A](B), $[A](N)];
    }
    return $[A](m);
  };
  return {
    resetDateTime: w,
    getDate: f,
    setTime: s,
    getWeekFromDate: l,
    isDateAfter: v,
    isDateBefore: i,
    isDateBetween: g,
    isDateEqual: r,
    getDaysInBetween: D,
    getCellId: c,
    resetDate: O,
    getMinMonth: u,
    getMaxMonth: _,
    getYearFromDate: p,
    getTimeObj: M,
    setTimeValue: R,
    sanitizeTime: b,
    getTimeObjFromCurrent: k,
    getBeforeAndAfterInRange: F,
    timeGetter: re,
    setTimeModelValue: (A, m, o, y) => {
      A.hours = re("hours", m, o, y), A.minutes = re("minutes", m, o, y), A.seconds = re("seconds", m, o, y);
    }
  };
}, We = () => {
  const { getDate: e } = Ee(), w = (o) => o < 10 ? `0${o}` : o, f = (o, y, $) => typeof o == "function" ? o({ month: y, year: $ }) : o.months.some((B) => B.month === y && B.year === $), s = (o, y) => typeof o == "function" ? o(y) : o.years.includes(y), l = (o, y) => {
    y.allowStopPropagation && o.stopPropagation(), y.allowPreventDefault && o.preventDefault();
  }, i = (o, y) => lt(o, y ?? $t.DATE), r = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), v = (o, y) => {
    let $ = [...document.querySelectorAll(r())];
    $ = $.filter((N) => !o.contains(N) || "datepicker-instance" in N.dataset);
    const B = $.indexOf(o);
    if (B >= 0 && (y ? B - 1 >= 0 : B + 1 <= $.length))
      return $[B + (y ? -1 : 1)];
  }, g = (o) => o === 0 ? o : !o || Number.isNaN(+o) ? null : +o, D = (o, y) => o ? $t.MONTH_AND_YEAR : y ? $t.YEAR : $t.DATE, c = (o, y, $) => y.get(i(o, $)), O = {
    prop: (o) => `"${o}" prop must be enabled!`,
    dateArr: (o) => `You need to use array as "model-value" binding in order to support "${o}"`
  }, u = (o) => o, _ = (o) => Array.isArray(o) ? !!o[0] && !!o[1] : !1, p = (o, y) => o ? y ? y instanceof Map ? !!c(o, y) : y(e(o)) : !1 : !0, M = (o, y) => o?.querySelector(`[data-dp-element="${y}"]`), R = (o, y, $ = !1) => {
    o && y.allowStopPropagation && ($ && o.stopImmediatePropagation(), o.stopPropagation());
  }, b = (o, y, $ = !1, B) => {
    if (o.key === Be.enter || o.key === Be.space)
      return $ && o.preventDefault(), y();
    if (B) return B(o);
  }, k = (o) => {
    if (o)
      return [...o.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, F = (o) => {
    const y = [], $ = (B) => B.filter((N) => !!N);
    for (let B = 0; B < o.length; B += 3) {
      const N = [o[B], o[B + 1], o[B + 2]];
      y.push($(N));
    }
    return y;
  };
  return {
    padZero: w,
    checkHighlightMonth: f,
    checkHighlightYear: s,
    getMapKey: i,
    findNextFocusableElement: v,
    getNumVal: g,
    getMapKeyType: D,
    getMapDate: c,
    convertType: u,
    isModelAuto: _,
    matchDate: p,
    handleEventPropagation: l,
    getElWithin: M,
    checkStopPropagation: R,
    checkKeyDown: b,
    findFocusableEl: k,
    groupListAndMap: (o, y) => F(o).map(($) => $.map((B) => {
      const { active: N, disabled: J, isBetween: ee, highlighted: pe } = y(B);
      return {
        ...B,
        active: N,
        disabled: J,
        className: {
          dp__overlay_cell_active: N,
          dp__overlay_cell: !N,
          dp__overlay_cell_disabled: J,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: J && N,
          dp__cell_in_between: ee,
          "dp--highlighted": pe
        }
      };
    })),
    checkMinMaxValue: (o, y, $) => {
      const B = $ != null, N = y != null;
      if (!B && !N) return !1;
      const J = +$, ee = +y;
      return B && N ? +o > J || +o < ee : B ? +o > J : N ? +o < ee : !1;
    },
    isTouchDevice: () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0,
    hoursToAmPmHours: (o) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][o],
    errorMapper: O
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
  } = Se(), r = (M) => lt(ot(e(), M), l.value.year, { locale: s.locale }), v = (M) => lt(Tn(e(), M), l.value.month, { locale: s.locale }), g = (M) => lt(e(`2017-01-0${M}T00:00:00+00:00`), l.value.weekDay, { locale: s.locale }), D = (M) => lt(M, l.value.quarter, { locale: s.locale }), c = (M, R) => [M, R].map((b) => D(b)).join("-"), O = (M, R, b) => {
    const k = b ? l.value.preview : l.value.input;
    if (!M) return "";
    if (typeof k == "function") return k(M);
    const F = R ?? k, re = { locale: s.locale };
    return Array.isArray(M) ? `${lt(M[0], F, re)}${s.modelAuto && !M[1] ? "" : i.value.rangeSeparator}${M[1] ? lt(M[1], F, re) : ""}` : lt(M, F, re);
  }, u = () => {
    const M = (R) => lt(R, i.value.format);
    return Array.isArray(f.value) ? `${M(f.value[0])} ${i.value.rangeSeparator} ${f.value[1] ? M(f.value[1]) : ""}` : "";
  };
  return {
    formatYear: r,
    formatMonth: v,
    formatWeekDay: g,
    formatQuarter: D,
    formatSelectedDate: O,
    formatForTextInput: () => w.isInputFocused && f.value ? Array.isArray(f.value) ? u() : lt(f.value, i.value.format) : O(f.value),
    formatPreview: (M) => O(M, void 0, !0),
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
      for (let v = +e.yearRange[0]; v <= +e.yearRange[1]; v++)
        r.push({ value: +v, text: w(v) });
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
  switchView: (u, _) => e.value?.switchView(u, _),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu()
}), Or = () => {
  const {
    rootProps: e,
    defaults: { textInput: w, startTime: f, timeConfig: s }
  } = Se(), { getTimeObjFromCurrent: l } = Ee(), i = ie(!1), r = L(
    () => Array.isArray(f.value) ? f.value[0] : f.value ?? l({}, s.value.enableSeconds)
  ), v = (D, c, O) => {
    const u = ba(D, c.slice(0, D.length), /* @__PURE__ */ new Date(), { locale: e.locale });
    return Zt(u) && $n(u) ? O || i.value ? u : Te(u, {
      hours: +r.value.hours,
      minutes: +r.value.minutes,
      seconds: +r.value.seconds,
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: i,
    parseFreeInput: (D, c) => {
      if (typeof w.value.pattern == "string")
        return v(D, w.value.pattern, c);
      if (Array.isArray(w.value.pattern)) {
        let O = null;
        for (const u of w.value.pattern)
          if (O = v(D, u, c), O)
            break;
        return O;
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
      rootProps: v,
      defaults: { textInput: g, ariaLabels: D, inline: c, config: O, range: u, multiDates: _, ui: p, inputAttrs: M }
    } = Se(), { checkMinMaxRange: R, isValidDate: b } = ut(), { parseFreeInput: k, textPasted: F } = Or(), { checkKeyDown: re, checkStopPropagation: oe } = We(), A = Ye("dp-input"), m = ie(null), o = ie(!1), y = L(
      () => ({
        dp__pointer: !v.disabled && !v.readonly && !g.value.enabled,
        dp__disabled: v.disabled,
        dp__input_readonly: !g.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !M.value.clearable,
        dp__input_icon_pad: !M.value.hideInputIcon,
        dp__input_valid: typeof M.value.state == "boolean" ? M.value.state : !1,
        dp__input_invalid: typeof M.value.state == "boolean" ? !M.value.state : !1,
        dp__input_focus: o.value || l.isMenuOpen,
        dp__input_reg: !g.value.enabled,
        ...p.value.input
      })
    ), $ = () => {
      s("set-input-date", null), M && v.autoApply && (s("set-empty-date"), m.value = null);
    }, B = (U) => {
      const { rangeSeparator: z } = g.value, [se, q] = U.split(`${z}`);
      if (se) {
        const de = k(se.trim(), r.value), me = q ? k(q.trim(), r.value) : void 0;
        if (_t(de, me)) return;
        const ge = de && me ? [de, me] : [de];
        R(me, ge, 0) && (m.value = de ? ge : null);
      }
    }, N = () => {
      F.value = !0;
    }, J = (U) => {
      if (u.value.enabled)
        B(U);
      else if (_.value.enabled) {
        const z = U.split(";");
        m.value = z.map((se) => k(se.trim())).filter((se) => !!se);
      } else
        m.value = k(U, r.value);
    }, ee = (U) => {
      const z = typeof U == "string" ? U : U.target?.value;
      z === "" ? $() : (g.value.openMenu && !l.isMenuOpen && s("open"), J(z), s("set-input-date", m.value)), F.value = !1, r.value = z, i("text-input", U, m.value);
    }, pe = (U) => {
      g.value.enabled ? (J(U.target.value), g.value.enterSubmit && b(m.value) && r.value !== "" ? (s("set-input-date", m.value, !0), m.value = null) : g.value.enterSubmit && r.value === "" && (m.value = null, s("clear"))) : Y(U);
    }, Z = (U, z) => {
      g.value.enabled && g.value.tabSubmit && !z && J(U.target.value), g.value.tabSubmit && b(m.value) && r.value !== "" ? (s("set-input-date", m.value, !0, !0), m.value = null) : g.value.tabSubmit && r.value === "" && (m.value = null, s("clear"));
    }, ce = () => {
      o.value = !0, s("focus"), tt().then(() => {
        g.value.enabled && g.value.selectOnFocus && A.value?.select();
      });
    }, Y = (U) => {
      if (oe(U, O.value, !0), g.value.enabled && g.value.openMenu && !c.value.input) {
        if (g.value.openMenu === "open" && !l.isMenuOpen) return s("open");
        if (g.value.openMenu === "toggle") return s("toggle");
      } else g.value.enabled || s("toggle");
    }, V = () => {
      s("real-blur"), o.value = !1, (!l.isMenuOpen || c.value.enabled && c.value.input) && s("blur"), v.autoApply && g.value.enabled && m.value && !l.isMenuOpen && (s("set-input-date", m.value), s("select-date"), m.value = null);
    }, E = (U) => {
      oe(U, O.value, !0), s("clear");
    }, ae = () => {
      s("close");
    }, ve = (U) => {
      if (U.key === "Tab" && Z(U), U.key === "Enter" && pe(U), U.key === "Escape" && g.value.escClose && ae(), !g.value.enabled) {
        if (U.code === "Tab") return;
        U.preventDefault();
      }
    }, Me = () => {
      A.value?.focus({ preventScroll: !0 });
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
          onInput: ee,
          onEnter: pe,
          onTab: Z,
          onClear: E,
          onBlur: V,
          onKeypress: ve,
          onPaste: N,
          onFocus: ce,
          openMenu: () => U.$emit("open"),
          closeMenu: () => U.$emit("close"),
          toggleMenu: () => U.$emit("toggle")
        }) : K("", !0),
        U.$slots["dp-input"] ? K("", !0) : (C(), H("input", {
          key: 1,
          id: t(M).id,
          ref: "dp-input",
          "data-test-id": "dp-input",
          name: t(M).name,
          class: ke(y.value),
          inputmode: t(M).inputmode,
          placeholder: t(v).placeholder,
          disabled: t(v).disabled,
          readonly: t(v).readonly,
          required: t(M).required,
          value: t(r),
          autocomplete: t(M).autocomplete,
          "aria-label": t(D).input,
          "aria-disabled": t(v).disabled || void 0,
          "aria-invalid": t(M).state === !1 ? !0 : void 0,
          onInput: ee,
          onBlur: V,
          onFocus: ce,
          onKeypress: ve,
          onKeydown: z[0] || (z[0] = (se) => ve(se)),
          onPaste: N
        }, null, 42, Br)),
        Ae("div", {
          onClick: z[3] || (z[3] = (se) => s("toggle"))
        }, [
          U.$slots["input-icon"] && !t(M).hideInputIcon ? (C(), H("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: z[1] || (z[1] = (se) => s("toggle"))
          }, [
            le(U.$slots, "input-icon")
          ])) : K("", !0),
          !U.$slots["input-icon"] && !t(M).hideInputIcon && !U.$slots["dp-input"] ? (C(), Re(t(Ht), {
            key: 1,
            "aria-label": t(D)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: z[2] || (z[2] = (se) => s("toggle"))
          }, null, 8, ["aria-label"])) : K("", !0)
        ]),
        U.$slots["clear-icon"] && (t(M).alwaysClearable || t(r) && t(M).clearable && !t(v).disabled && !t(v).readonly) ? (C(), H("span", Ir, [
          le(U.$slots, "clear-icon", { clear: E })
        ])) : K("", !0),
        !U.$slots["clear-icon"] && (t(M).alwaysClearable || t(M).clearable && t(r) && !t(v).disabled && !t(v).readonly) ? (C(), H("button", {
          key: 3,
          "aria-label": t(D)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: z[4] || (z[4] = (se) => t(re)(se, () => E(se), !0, ye)),
          onClick: z[5] || (z[5] = Wt((se) => E(se), ["prevent"]))
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
      defaults: { actionRow: v, multiCalendars: g, inline: D, range: c, multiDates: O, formats: u }
    } = Se(), { isTimeValid: _, isMonthValid: p } = ut(), { buildMatrix: M } = yt(), { formatPreview: R } = Pt(), { checkKeyDown: b, convertType: k } = We(), F = Ye("cancel-btn"), re = Ye("select-btn"), oe = Ye("action-buttons-container"), A = Ye("action-row"), m = ie(!1), o = ie({});
    Ke(() => {
      i.arrowNavigation && M([Ge(F), Ge(re)], "actionRow"), y(), globalThis.addEventListener("resize", y);
    }), Rt(() => {
      globalThis.removeEventListener("resize", y);
    });
    const y = () => {
      m.value = !1, setTimeout(() => {
        const Y = oe.value?.getBoundingClientRect(), V = A.value?.getBoundingClientRect();
        Y && V && (o.value.maxWidth = `${V.width - Y.width - 20}px`), m.value = !0;
      }, 0);
    }, $ = L(() => c.value.enabled && !c.value.partialRange && r.value ? r.value.length === 2 : !0), B = L(
      () => !_.value(r.value) || !p.value(r.value) || !$.value
    ), N = () => {
      const Y = u.value.preview;
      return i.timePicker || i.monthPicker, Y(k(r.value));
    }, J = () => {
      const Y = r.value;
      return g.value.count > 0 ? `${R(Y[0])} - ${R(Y[1])}` : [R(Y[0]), R(Y[1])];
    }, ee = L(() => !r.value || !s.menuMount ? "" : typeof u.value.preview == "string" ? Array.isArray(r.value) ? r.value.length === 2 && r.value[1] ? J() : O.value.enabled ? r.value.map((Y) => `${R(Y)}`) : i.modelAuto ? `${R(r.value[0])}` : `${R(r.value[0])} -` : R(r.value) : N()), pe = () => O.value.enabled ? "; " : " - ", Z = L(
      () => Array.isArray(ee.value) ? ee.value.join(pe()) : ee.value
    ), ce = () => {
      _.value(r.value) && p.value(r.value) && $.value ? f("select-date") : l("invalid-select");
    };
    return (Y, V) => (C(), H("div", Nr, [
      Y.$slots["action-row"] ? le(Y.$slots, "action-row", Je(et({ key: 0 }, {
        modelValue: t(r),
        disabled: B.value,
        selectDate: () => Y.$emit("select-date"),
        closePicker: () => Y.$emit("close-picker")
      }))) : (C(), H(De, { key: 1 }, [
        t(v).showPreview ? (C(), H("div", {
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
            !t(D).enabled && t(v).showCancel ? (C(), H("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: V[0] || (V[0] = (E) => Y.$emit("close-picker")),
              onKeydown: V[1] || (V[1] = (E) => t(b)(E, () => Y.$emit("close-picker")))
            }, Ue(t(v).cancelBtnLabel), 545)) : K("", !0),
            t(v).showNow ? (C(), H("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: V[2] || (V[2] = (E) => Y.$emit("select-now")),
              onKeydown: V[3] || (V[3] = (E) => t(b)(E, () => Y.$emit("select-now")))
            }, Ue(t(v).nowBtnLabel), 33)) : K("", !0),
            t(v).showSelect ? (C(), H("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: B.value,
              "data-test-id": "select-button",
              onKeydown: V[4] || (V[4] = (E) => t(b)(E, () => ce())),
              onClick: ce
            }, Ue(t(v).selectBtnLabel), 41, Lr)) : K("", !0)
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
    const { setSelectionGrid: s, buildMultiLevelMatrix: l, setMonthPicker: i } = yt(), r = f, v = e, {
      rootProps: g,
      defaults: { ariaLabels: D, textInput: c, config: O }
    } = Se(), { hideNavigationButtons: u } = aa(), { handleEventPropagation: _, convertType: p, checkKeyDown: M, checkStopPropagation: R, getElWithin: b, findFocusableEl: k } = We(), F = Ye("toggle-button"), re = Ye("overlay-container"), oe = Ye("grid-wrap"), A = ie(!1), m = ie(null), o = ie([]), y = ie(), $ = ie(0);
    vn(() => {
      m.value = null;
    }), Ke(() => {
      tt().then(() => Y()), v.noOverlayFocus || N(), B(!0);
    }), Rt(() => B(!1));
    const B = (q) => {
      g.arrowNavigation && (v.headerRefs?.length ? i(q) : s(q));
    }, N = () => {
      const q = Ge(oe);
      q && (c.value.enabled || (m.value ? m.value?.focus({ preventScroll: !0 }) : q.focus({ preventScroll: !0 })), A.value = q.clientHeight < q.scrollHeight);
    }, J = L(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !v.useRelative,
        "dp--overlay-relative": v.useRelative
      })
    ), ee = L(
      () => v.useRelative ? { height: `${v.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), pe = L(() => ({
      dp__overlay_col: !0
    })), Z = L(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: A.value,
        dp__button_bottom: v.isLast
      })
    ), ce = L(() => ({
      dp__overlay_container: !0,
      dp__container_flex: v.items?.length <= 6,
      dp__container_block: v.items?.length > 6
    }));
    it(
      () => v.items,
      () => Y(!1),
      { deep: !0 }
    );
    const Y = (q = !0) => {
      tt().then(() => {
        const de = Ge(m), me = Ge(oe), ge = Ge(F), I = Ge(re), h = ge ? ge.getBoundingClientRect().height : 0;
        me && (me.getBoundingClientRect().height ? $.value = me.getBoundingClientRect().height - h : $.value = O.value.modeHeight - h), de && I && q && (I.scrollTop = de.offsetTop - I.offsetTop - ($.value / 2 - de.getBoundingClientRect().height) - h);
      });
    }, V = (q) => {
      q.disabled || r("selected", q.value);
    }, E = () => {
      r("toggle"), r("reset-flow");
    }, ae = (q) => {
      O.value.escClose && (E(), _(q, O.value));
    }, ve = (q, de, me, ge) => {
      q && ((de.active || de.value === v.focusValue) && (m.value = q), g.arrowNavigation && (Array.isArray(o.value[me]) ? o.value[me][ge] = q : o.value[me] = [q], Me()));
    }, Me = () => {
      const q = v.headerRefs?.length ? [v.headerRefs].concat(o.value) : o.value.concat([v.skipButtonRef ? [] : [F.value]]);
      l(p(q), v.headerRefs?.length ? "monthPicker" : "selectionGrid");
    }, we = (q) => {
      g.arrowNavigation || R(q, O.value, !0);
    }, ye = (q) => {
      y.value = q, r("hover-value", q);
    }, U = () => {
      if (E(), !v.isLast) {
        const q = b(v.menuWrapRef ?? null, "action-row");
        q && k(q)?.focus();
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
      if (q.key === Be.enter) return E();
      if (q.key === Be.tab) return U();
    };
    return w({ focusGrid: N }), (q, de) => (C(), H("div", {
      ref: "grid-wrap",
      class: ke(J.value),
      style: Ze(ee.value),
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
        style: Ze({ "--dp-overlay-height": `${$.value}px` }),
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
          (C(!0), H(De, null, Oe(me, (I, h) => (C(), H("div", {
            key: I.value,
            ref_for: !0,
            ref: (W) => ve(W, I, ge, h),
            role: "gridcell",
            class: ke(pe.value),
            "aria-selected": I.active || void 0,
            "aria-disabled": I.disabled || void 0,
            tabindex: "0",
            "data-test-id": I.text,
            onClick: Wt((W) => V(I), ["prevent"]),
            onKeydown: (W) => t(M)(W, () => V(I), !0),
            onMouseover: (W) => ye(I.value)
          }, [
            Ae("div", {
              class: ke(I.className)
            }, [
              q.$slots.item ? le(q.$slots, "item", {
                key: 0,
                item: I
              }) : K("", !0),
              q.$slots.item ? K("", !0) : (C(), H(De, { key: 1 }, [
                dt(Ue(I.text), 1)
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
        onClick: E,
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
      onClick: r[0] || (r[0] = (v) => f("activate")),
      onKeydown: r[1] || (r[1] = (v) => t(l)(v, () => f("activate"), !0))
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
      defaults: { config: v, ariaLabels: g, ui: D }
    } = Se(), { showTransition: c, transitionName: O } = zt(), { formatYear: u } = Pt(), _ = ie(!1), p = L(() => u(s.year)), M = (k = !1, F) => {
      _.value = !_.value, f("toggle-year-picker", { flow: k, show: F });
    }, R = (k) => {
      _.value = !1, f("year-select", k);
    }, b = (k = !1) => {
      f("handle-year", k);
    };
    return (k, F) => (C(), H(De, null, [
      Ae("div", {
        class: ke(["dp--year-mode-picker", { "dp--hidden-el": _.value }])
      }, [
        t(i)(e.instance) ? (C(), Re(Nt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(g)?.prevYear,
          disabled: e.isDisabled(!1),
          class: ke(t(D)?.navBtnPrev),
          onActivate: F[0] || (F[0] = (re) => b(!1))
        }, {
          default: _e(() => [
            k.$slots["arrow-left"] ? le(k.$slots, "arrow-left", { key: 0 }) : K("", !0),
            k.$slots["arrow-left"] ? K("", !0) : (C(), Re(t(Ha), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : K("", !0),
        Ae("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": `${e.year}-${t(g)?.openYearsOverlay}`,
          "data-test-id": `year-mode-btn-${e.instance}`,
          onClick: F[1] || (F[1] = () => M(!1)),
          onKeydown: F[2] || (F[2] = fn(() => M(!1), ["enter"]))
        }, [
          k.$slots.year ? le(k.$slots, "year", {
            key: 0,
            text: p.value,
            value: e.year
          }) : K("", !0),
          k.$slots.year ? K("", !0) : (C(), H(De, { key: 1 }, [
            dt(Ue(e.year), 1)
          ], 64))
        ], 40, Gr),
        t(l)(e.instance) ? (C(), Re(Nt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(g)?.nextYear,
          disabled: e.isDisabled(!0),
          class: ke(t(D)?.navBtnNext),
          onActivate: F[3] || (F[3] = (re) => b(!0))
        }, {
          default: _e(() => [
            k.$slots["arrow-right"] ? le(k.$slots, "arrow-right", { key: 0 }) : K("", !0),
            k.$slots["arrow-right"] ? K("", !0) : (C(), Re(t(za), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : K("", !0)
      ], 2),
      at(Ct, {
        name: t(O)(e.showYearPicker),
        css: t(c)
      }, {
        default: _e(() => [
          e.showYearPicker ? (C(), Re(jt, {
            key: 0,
            items: e.items,
            config: t(v),
            "is-last": t(r).autoApply && !t(v).keepActionRow,
            "overlay-label": t(g)?.yearPicker?.(!0),
            type: "year",
            onToggle: M,
            onSelected: F[4] || (F[4] = (re) => R(re))
          }, ze({
            "button-icon": _e(() => [
              k.$slots["calendar-icon"] ? le(k.$slots, "calendar-icon", { key: 0 }) : K("", !0),
              k.$slots["calendar-icon"] ? K("", !0) : (C(), Re(t(Ht), { key: 1 }))
            ]),
            _: 2
          }, [
            k.$slots["year-overlay-value"] ? {
              name: "item",
              fn: _e(({ item: re }) => [
                le(k.$slots, "year-overlay-value", {
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
    rootProps: v,
    defaults: { multiCalendars: g, range: D, safeDates: c, filters: O, highlight: u }
  } = Se(), { getDate: _, resetDate: p, getYearFromDate: M } = Ee(), { checkHighlightYear: R, groupListAndMap: b, checkMinMaxValue: k } = We(), { getYears: F } = ta(), { validateMonthYear: re } = ut(), oe = ie([!1]), A = L(() => F()), m = L(() => (E, ae) => {
    const ve = Te(p(/* @__PURE__ */ new Date()), {
      month: s.value(E),
      year: l.value(E)
    }), Me = ae ? Na(ve) : Vt(ve);
    return re(Me, v.preventMinMaxNavigation, ae);
  }), o = () => Array.isArray(i.value) && g.value.solo && i.value[1], y = () => {
    for (let E = 0; E < g.value.count; E++)
      if (E === 0)
        r.value[E] = r.value[0];
      else if (E === g.value.count - 1 && o())
        r.value[E] = {
          month: Pe(i.value[1]),
          year: be(i.value[1])
        };
      else {
        const ae = Te(_(), r.value[E - 1]);
        r.value[E] = { month: Pe(ae), year: be(Fa(ae, 1)) };
      }
  }, $ = (E) => {
    if (!E) return y();
    const ae = Te(_(), r.value[E]);
    return r.value[0].year = be(Wa(ae, g.value.count - 1)), y();
  }, B = (E, ae) => {
    const ve = Sn(ae, E);
    return D.value.showLastInRange && ve > 1 ? ae : E;
  }, N = (E) => v.focusStartDate || g.value.solo ? E[0] : E[1] ? B(E[0], E[1]) : E[0], J = () => {
    if (i.value) {
      const E = Array.isArray(i.value) ? N(i.value) : i.value;
      r.value[0] = { month: Pe(E), year: be(E) };
    }
  }, ee = () => {
    J(), g.value.count && y();
  };
  it(i, (E, ae) => {
    f.isTextInputDate && JSON.stringify(E ?? {}) !== JSON.stringify(ae ?? {}) && ee();
  }), Ke(() => {
    ee();
  });
  const pe = (E, ae) => {
    r.value[ae].year = E, w("update-month-year", { instance: ae, year: E, month: r.value[ae].month }), g.value.count && !g.value.solo && $(ae);
  }, Z = L(() => (E) => b(A.value, (ae) => {
    const ve = l.value(E) === ae.value, Me = k(
      ae.value,
      M(c.value.minDate),
      M(c.value.maxDate)
    ) || O.value.years?.includes(l.value(E)), we = R(u.value, ae.value);
    return { active: ve, disabled: Me, highlighted: we };
  })), ce = (E, ae) => {
    pe(E, ae), V(ae);
  }, Y = (E, ae = !1) => {
    if (!m.value(E, ae)) {
      const ve = ae ? l.value(E) + 1 : l.value(E) - 1;
      pe(ve, E);
    }
  }, V = (E, ae = !1, ve) => {
    ae || e("reset-flow"), ve === void 0 ? oe.value[E] = !oe.value[E] : oe.value[E] = ve, oe.value[E] ? w("overlay-toggle", { open: !0, overlay: Qe.year }) : w("overlay-toggle", { open: !1, overlay: Qe.year });
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
      Array.isArray(u.value) && u.value.length <= 2 && r.value.enabled ? i.value = u.value.map((_) => e(_)) : Array.isArray(u.value) || (i.value = e(u.value));
    },
    checkRangeAutoApply: (u, _, p, M) => {
      u && (u[0] && u[1] && p && _("auto-apply"), u[0] && !u[1] && M && p && _("auto-apply"));
    },
    setMonthOrYearRange: (u) => {
      let _ = i.value ? i.value.slice() : [];
      return _.length === 2 && _[1] !== null && (_ = []), _.length ? (f(u, _[0]) ? _.unshift(u) : _[1] = u, l("range-end", u)) : (_ = [u], l("range-start", u)), _;
    },
    handleMultiDatesSelect: (u, _) => {
      if (i.value && Array.isArray(i.value))
        if (i.value.some((p) => s(u, p))) {
          const p = i.value.filter((M) => !s(M, u));
          i.value = p.length ? p : null;
        } else (_ && +_ > i.value.length || !_) && i.value.push(u);
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
    rootProps: v,
    defaults: { range: g, highlight: D, safeDates: c, filters: O, multiDates: u }
  } = Se();
  Kt(() => {
    s.isTextInputDate && ce(be(M(v.startDate)), 0);
  });
  const { checkMinMaxRange: _ } = ut(), { isDateBetween: p, getDate: M, resetDateTime: R, resetDate: b, getMinMonth: k, getMaxMonth: F } = Ee(), { checkRangeAutoApply: re, getRangeWithFixedDate: oe, handleMultiDatesSelect: A, setMonthOrYearRange: m, setPresetDate: o } = ra(), { padZero: y, checkHighlightMonth: $, checkMinMaxValue: B, groupListAndMap: N } = We(), { getMonths: J, isOutOfYearRange: ee } = ta(), pe = L(() => J()), Z = ie(null), {
    selectYear: ce,
    groupedYears: Y,
    showYearPicker: V,
    toggleYearPicker: E,
    handleYearSelect: ae,
    handleYear: ve,
    isDisabled: Me
  } = Ga(w);
  Ke(() => {
    v.startDate && (r.value && v.focusStartDate || !r.value) && ce(be(M(v.startDate)), 0);
  });
  const we = (Q) => Q ? { month: Pe(Q), year: be(Q) } : { month: null, year: null }, ye = () => r.value ? Array.isArray(r.value) ? r.value.map((Q) => we(Q)) : we(r.value) : we(), U = (Q, a) => {
    const x = l.value[Q], d = ye();
    return Array.isArray(d) ? d.some((X) => X.year === x?.year && X.month === a) : x?.year === d.year && a === d.month;
  }, z = (Q, a, x) => {
    const d = ye();
    return Array.isArray(d) ? i.value(a) === d[x]?.year && Q === d[x]?.month : !1;
  }, se = (Q, a) => {
    if (g.value.enabled) {
      const x = ye();
      if (Array.isArray(r.value) && Array.isArray(x)) {
        const d = z(Q, a, 0) || z(Q, a, 1), X = Te(b(M()), { month: Q, year: i.value(a) });
        return p(r.value, Z.value, X) && !d;
      }
      return !1;
    }
    return !1;
  }, q = L(() => (Q) => N(pe.value, (a) => {
    const x = U(Q, a.value), d = B(
      a.value,
      k(i.value(Q), c.value.minDate),
      F(i.value(Q), c.value.maxDate)
    ) || j(c.value.disabledDates, i.value(Q), a.value) || O.value.months?.includes(a.value) || !ne(c.value.allowedDates, i.value(Q), a.value) || ee(i.value(Q)), X = se(a.value, Q), G = $(D.value, a.value, i.value(Q));
    return { active: x, disabled: d, isBetween: X, highlighted: G };
  })), de = (Q, a) => Te(b(M()), { month: Q, year: i.value(a) }), me = (Q, a) => {
    const x = r.value ? r.value : b(/* @__PURE__ */ new Date());
    r.value = Te(x, { month: Q, year: i.value(a) }), w("auto-apply"), w("update-flow-step");
  }, ge = (Q, a) => {
    const x = de(Q, a);
    g.value.fixedEnd || g.value.fixedStart ? r.value = oe(x) : r.value ? _(x, r.value) && (r.value = m(de(Q, a))) : r.value = [de(Q, a)], tt().then(() => {
      re(r.value, w, v.autoApply, v.modelAuto);
    });
  }, I = (Q, a) => {
    A(de(Q, a), u.value.limit), w("auto-apply", !0);
  }, h = (Q, a) => (l.value[a].month = Q, n(a, l.value[a].year, Q), u.value.enabled ? I(Q, a) : g.value.enabled ? ge(Q, a) : me(Q, a)), W = (Q, a) => {
    ce(Q, a), n(a, Q, null);
  }, n = (Q, a, x) => {
    let d = x;
    if (!d && d !== 0) {
      const X = ye();
      d = Array.isArray(X) ? X[Q].month : X.month;
    }
    f("update-month-year", { instance: Q, year: a, month: d });
  }, P = (Q, a) => {
    Z.value = de(Q, a);
  }, S = (Q, a) => {
    o({
      value: Q
    }), w("auto-apply");
  }, j = (Q, a, x) => {
    if (Q instanceof Map) {
      const d = `${y(x + 1)}-${a}`;
      return Q.size ? Q.has(d) : !1;
    }
    return typeof Q == "function" ? Q(R(Te(M(), { month: x, year: a }), !0)) : !1;
  }, ne = (Q, a, x) => {
    if (Q instanceof Map) {
      const d = `${y(x + 1)}-${a}`;
      return Q.size ? Q.has(d) : !0;
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
    toggleYearPicker: E,
    handleYearSelect: ae,
    handleYear: ve,
    presetDate: S,
    setHoverDate: P,
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
      rootProps: v,
      defaults: { config: g }
    } = Se(), D = r(i, "yearMode");
    Ke(() => {
      s("mount");
    });
    const {
      groupedMonths: c,
      groupedYears: O,
      year: u,
      isDisabled: _,
      showYearPicker: p,
      modelValue: M,
      presetDate: R,
      setHoverDate: b,
      selectMonth: k,
      selectYear: F,
      toggleYearPicker: re,
      handleYearSelect: oe,
      handleYear: A,
      getModelMonthYear: m
    } = Xr(l, s);
    return w({ getSidebarProps: () => ({
      modelValue: M,
      year: u,
      getModelMonthYear: m,
      selectMonth: k,
      selectYear: F,
      handleYear: A
    }), presetDate: R, toggleYearPicker: (y) => re(0, y) }), (y, $) => (C(), Re(na, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: _e(({ instances: B, wrapClass: N }) => [
        (C(!0), H(De, null, Oe(B, (J) => (C(), H("div", {
          key: J,
          class: ke(N)
        }, [
          y.$slots["top-extra"] ? le(y.$slots, "top-extra", {
            key: 0,
            value: t(M)
          }) : K("", !0),
          y.$slots["month-year"] ? le(y.$slots, "month-year", et({
            key: 1,
            ref_for: !0
          }, {
            year: t(u),
            months: t(c)(J),
            years: t(O)(J),
            selectMonth: t(k),
            selectYear: t(F),
            instance: J
          })) : (C(), Re(jt, {
            key: 2,
            items: t(c)(J),
            "is-last": t(v).autoApply && !t(g).keepActionRow,
            height: t(g).modeHeight,
            "no-overlay-focus": !!(e.noOverlayFocus || t(v).textInput),
            "use-relative": "",
            type: "month",
            onSelected: (ee) => t(k)(ee, J),
            onHoverValue: (ee) => t(b)(ee, J)
          }, ze({
            header: _e(() => [
              at(Qa, {
                items: t(O)(J),
                instance: J,
                "show-year-picker": t(p)[J],
                year: t(u)(J),
                "is-disabled": (ee) => t(_)(J, ee),
                onHandleYear: (ee) => t(A)(J, ee),
                onYearSelect: (ee) => t(oe)(ee, J),
                onToggleYearPicker: (ee) => t(re)(J, ee?.flow, ee?.show)
              }, ze({ _: 2 }, [
                Oe(t(D), (ee, pe) => ({
                  name: ee,
                  fn: _e((Z) => [
                    le(y.$slots, ee, et({ ref_for: !0 }, Z))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            y.$slots["month-overlay-value"] ? {
              name: "item",
              fn: _e(({ item: ee }) => [
                le(y.$slots, "month-overlay-value", {
                  text: ee.text,
                  value: ee.value
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
    defaults: { highlight: r, multiDates: v, filters: g, range: D, safeDates: c }
  } = Se(), { getYears: O } = ta(), { checkHighlightYear: u, groupListAndMap: _, checkMinMaxValue: p } = We(), { getDate: M, isDateBetween: R, resetDate: b, resetDateTime: k, getYearFromDate: F } = Ee(), { checkRangeAutoApply: re, setMonthOrYearRange: oe } = ra();
  Kt(() => {
    s.isTextInputDate && (m.value = be(M(i.startDate)));
  });
  const A = ie(null), m = ie();
  Ke(() => {
    i.startDate && (l.value && i.focusStartDate || !l.value) && (m.value = be(M(i.startDate)));
  });
  const o = (Z) => Array.isArray(l.value) ? l.value.some((ce) => be(ce) === Z) : l.value ? be(l.value) === Z : !1, y = (Z) => D.value.enabled && Array.isArray(l.value) ? R(l.value, A.value, J(Z)) : !1, $ = (Z) => c.value.allowedDates instanceof Map ? c.value.allowedDates.size ? c.value.allowedDates.has(`${Z}`) : !1 : !0, B = (Z) => c.value.disabledDates instanceof Map ? c.value.disabledDates.size ? c.value.disabledDates.has(`${Z}`) : !1 : typeof c.value.disabledDates == "function" ? c.value.disabledDates(ot(k(Vt(M())), Z)) : !0, N = L(() => _(O(), (Z) => {
    const ce = o(Z.value), Y = p(
      Z.value,
      F(c.value.minDate),
      F(c.value.maxDate)
    ) || g.value.years.includes(Z.value) || !$(Z.value) || B(Z.value), V = y(Z.value) && !ce, E = u(r.value, Z.value);
    return { active: ce, disabled: Y, isBetween: V, highlighted: E };
  })), J = (Z) => ot(b(Vt(/* @__PURE__ */ new Date())), Z);
  return {
    groupedYears: N,
    focusYear: m,
    setHoverValue: (Z) => {
      A.value = ot(b(/* @__PURE__ */ new Date()), Z);
    },
    selectYear: (Z) => {
      if (f("update-month-year", { instance: 0, year: Z, month: Number.NaN }), v.value.enabled)
        return l.value ? Array.isArray(l.value) && ((l.value?.map((Y) => be(Y))).includes(Z) ? l.value = l.value.filter((Y) => be(Y) !== Z) : l.value.push(ot(k(M()), Z))) : l.value = [ot(k(Vt(M())), Z)], w("auto-apply", !0);
      D.value.enabled ? (l.value = oe(J(Z)), tt().then(() => {
        re(l.value, w, i.autoApply, i.modelAuto);
      })) : (l.value = J(Z), w("auto-apply"));
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
      rootProps: v
    } = Se(), { groupedYears: g, focusYear: D, selectYear: c, setHoverValue: O } = Zr(l, s);
    return w({ getSidebarProps: () => ({
      modelValue: i,
      selectYear: c
    }) }), (_, p) => (C(), H("div", null, [
      _.$slots["top-extra"] ? le(_.$slots, "top-extra", {
        key: 0,
        value: t(i)
      }) : K("", !0),
      _.$slots["month-year"] ? le(_.$slots, "month-year", Je(et({ key: 1 }, {
        years: t(g),
        selectYear: t(c)
      }))) : (C(), Re(jt, {
        key: 2,
        items: t(g),
        "is-last": t(v).autoApply && !t(r).keepActionRow,
        height: t(r).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || t(v).textInput),
        "focus-value": t(D),
        type: "year",
        "use-relative": "",
        onSelected: t(c),
        onHoverValue: t(O)
      }, ze({ _: 2 }, [
        _.$slots["year-overlay-value"] ? {
          name: "item",
          fn: _e(({ item: M }) => [
            le(_.$slots, "year-overlay-value", {
              text: M.text,
              value: M.value
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
      rootEmit: v,
      rootProps: g,
      defaults: { ariaLabels: D, filters: c, config: O, range: u, multiCalendars: _, timeConfig: p }
    } = Se(), { checkKeyDown: M, groupListAndMap: R, hoursToAmPmHours: b } = We(), { getDate: k, sanitizeTime: F } = Ee(), { transitionName: re, showTransition: oe } = zt(), A = Ft({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), m = ie("AM"), o = ie(null), y = ie([]), $ = ie(), B = ie(!1);
    Ke(() => {
      s("mounted");
    });
    const N = (a) => Te(/* @__PURE__ */ new Date(), {
      hours: a.hours,
      minutes: a.minutes,
      seconds: p.value.enableSeconds ? a.seconds : 0,
      milliseconds: 0
    }), J = L(
      () => (a) => U(a, l[a]) || pe(a, l[a])
    ), ee = L(() => ({ hours: l.hours, minutes: l.minutes, seconds: l.seconds })), pe = (a, x) => u.value.enabled && !u.value.disableTimeRangeValidation ? !l.validateTime(a, x) : !1, Z = (a, x) => {
      if (u.value.enabled && !u.value.disableTimeRangeValidation) {
        const d = x ? +p.value[`${a}Increment`] : -+p.value[`${a}Increment`], X = l[a] + d;
        return !l.validateTime(a, X);
      }
      return !1;
    }, ce = L(() => (a) => !me(+l[a] + +p.value[`${a}Increment`], a) || Z(a, !0)), Y = L(() => (a) => !me(+l[a] - +p.value[`${a}Increment`], a) || Z(a, !1)), V = (a, x) => La(Te(k(), a), x), E = (a, x) => Rn(Te(k(), a), x), ae = L(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !p.value.timePickerInline,
        dp__time_col_reg_block: !p.value.enableSeconds && p.value.is24 && !p.value.timePickerInline,
        dp__time_col_reg_inline: !p.value.enableSeconds && p.value.is24 && p.value.timePickerInline,
        dp__time_col_reg_with_button: !p.value.enableSeconds && !p.value.is24,
        dp__time_col_sec: p.value.enableSeconds && p.value.is24,
        dp__time_col_sec_with_button: p.value.enableSeconds && !p.value.is24
      })
    ), ve = L(
      () => p.value.timePickerInline && u.value.enabled && !_.value.count
    ), Me = L(() => {
      const a = [{ type: "hours" }];
      return p.value.enableMinutes && a.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), p.value.enableSeconds && a.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), a;
    }), we = L(() => Me.value.filter((a) => !a.separator)), ye = L(() => (a) => {
      if (a === "hours") {
        const x = P(+l.hours);
        return { text: x < 10 ? `0${x}` : `${x}`, value: x };
      }
      return { text: l[a] < 10 ? `0${l[a]}` : `${l[a]}`, value: l[a] };
    }), U = (a, x) => {
      if (!l.disabledTimesConfig) return !1;
      const d = l.disabledTimesConfig(l.order, a === "hours" ? x : void 0);
      return d[a] ? !!d[a]?.includes(x) : !0;
    }, z = (a, x) => x !== "hours" || m.value === "AM" ? a : a + 12, se = (a) => {
      const x = p.value.is24 ? 24 : 12, d = a === "hours" ? x : 60, X = +p.value[`${a}GridIncrement`], G = a === "hours" && !p.value.is24 ? X : 0, Ce = [];
      for (let fe = G; fe < d; fe += X)
        Ce.push({
          value: p.value.is24 ? fe : z(fe, a),
          text: fe < 10 ? `0${fe}` : `${fe}`
        });
      return a === "hours" && !p.value.is24 && Ce.unshift({ value: m.value === "PM" ? 12 : 0, text: "12" }), R(Ce, (fe) => ({ active: !1, disabled: c.value.times[a].includes(fe.value) || !me(fe.value, a) || U(a, fe.value) || pe(a, fe.value) }));
    }, q = (a) => a >= 0 ? a : 59, de = (a) => a >= 0 ? a : 23, me = (a, x) => {
      const d = g.minTime ? N(F(g.minTime)) : null, X = g.maxTime ? N(F(g.maxTime)) : null, G = N(
        F(
          ee.value,
          x,
          x === "minutes" || x === "seconds" ? q(a) : de(a)
        )
      );
      return d && X ? (St(G, X) || Tt(G, X)) && (_t(G, d) || Tt(G, d)) : d ? _t(G, d) || Tt(G, d) : X ? St(G, X) || Tt(G, X) : !0;
    }, ge = (a) => p.value[`no${a[0].toUpperCase() + a.slice(1)}Overlay`], I = (a) => {
      ge(a) || (A[a] = !A[a], A[a] ? (B.value = !0, s("overlay-opened", a)) : (B.value = !1, s("overlay-closed", a)));
    }, h = (a) => a === "hours" ? ct : a === "minutes" ? ht : Dt, W = () => {
      $.value && clearTimeout($.value);
    }, n = (a, x = !0, d) => {
      const X = x ? V : E, G = x ? +p.value[`${a}Increment`] : -+p.value[`${a}Increment`];
      me(+l[a] + G, a) && s(
        `update:${a}`,
        h(a)(
          X({ [a]: +l[a] }, { [a]: +p.value[`${a}Increment`] })
        )
      ), !d?.keyboard && O.value.timeArrowHoldThreshold && ($.value = setTimeout(() => {
        n(a, x);
      }, O.value.timeArrowHoldThreshold));
    }, P = (a) => p.value.is24 ? a : (a >= 12 ? m.value = "PM" : m.value = "AM", b(a)), S = () => {
      m.value === "PM" ? (m.value = "AM", s("update:hours", l.hours - 12)) : (m.value = "PM", s("update:hours", l.hours + 12)), v("am-pm-change", m.value);
    }, j = (a) => {
      A[a] = !0;
    }, ne = (a, x, d) => {
      if (a && g.arrowNavigation) {
        Array.isArray(y.value[x]) ? y.value[x][d] = a : y.value[x] = [a];
        const X = y.value.reduce(
          (G, Ce) => Ce.map((fe, He) => [...G[He] || [], Ce[He]]),
          []
        );
        r(l.closeTimePickerBtn), o.value && (X[1] = X[1].concat(o.value)), i(X, l.order);
      }
    }, Q = (a, x) => (I(a), s(`update:${a}`, x));
    return w({ openChildCmp: j }), (a, x) => t(g).disabled ? K("", !0) : (C(), H("div", tl, [
      (C(!0), H(De, null, Oe(Me.value, (d, X) => (C(), H("div", {
        key: X,
        class: ke(ae.value),
        "data-compact": ve.value && !t(p).enableSeconds,
        "data-collapsed": ve.value && t(p).enableSeconds
      }, [
        d.separator ? (C(), H(De, { key: 0 }, [
          B.value ? K("", !0) : (C(), H(De, { key: 0 }, [
            dt(":")
          ], 64))
        ], 64)) : (C(), H(De, { key: 1 }, [
          Ae("button", {
            ref_for: !0,
            ref: (G) => ne(G, X, 0),
            type: "button",
            class: ke({
              dp__btn: !0,
              dp__inc_dec_button: !t(p).timePickerInline,
              dp__inc_dec_button_inline: t(p).timePickerInline,
              dp__tp_inline_btn_top: t(p).timePickerInline,
              dp__inc_dec_button_disabled: ce.value(d.type),
              "dp--hidden-el": B.value
            }),
            "data-test-id": `${d.type}-time-inc-btn-${l.order}`,
            "aria-label": t(D)?.incrementValue(d.type),
            tabindex: "0",
            onKeydown: (G) => t(M)(G, () => n(d.type, !0, { keyboard: !0 }), !0),
            onClick: (G) => t(O).timeArrowHoldThreshold ? void 0 : n(d.type, !0),
            onMousedown: (G) => t(O).timeArrowHoldThreshold ? n(d.type, !0) : void 0,
            onMouseup: W
          }, [
            t(p).timePickerInline ? (C(), H(De, { key: 1 }, [
              a.$slots["tp-inline-arrow-up"] ? le(a.$slots, "tp-inline-arrow-up", { key: 0 }) : (C(), H(De, { key: 1 }, [
                x[2] || (x[2] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                x[3] || (x[3] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (C(), H(De, { key: 0 }, [
              a.$slots["arrow-up"] ? le(a.$slots, "arrow-up", { key: 0 }) : K("", !0),
              a.$slots["arrow-up"] ? K("", !0) : (C(), Re(t(ja), { key: 1 }))
            ], 64))
          ], 42, nl),
          Ae("button", {
            ref_for: !0,
            ref: (G) => ne(G, X, 1),
            type: "button",
            "aria-label": `${ye.value(d.type).text}-${t(D)?.openTpOverlay(d.type)}`,
            class: ke({
              dp__time_display: !0,
              dp__time_display_block: !t(p).timePickerInline,
              dp__time_display_inline: t(p).timePickerInline,
              "dp--time-invalid": J.value(d.type),
              "dp--time-overlay-btn": !J.value(d.type),
              "dp--hidden-el": B.value
            }),
            disabled: ge(d.type),
            tabindex: "0",
            "data-test-id": `${d.type}-toggle-overlay-btn-${l.order}`,
            onKeydown: (G) => t(M)(G, () => I(d.type), !0),
            onClick: (G) => I(d.type)
          }, [
            a.$slots[d.type] ? le(a.$slots, d.type, {
              key: 0,
              text: ye.value(d.type).text,
              value: ye.value(d.type).value
            }) : K("", !0),
            a.$slots[d.type] ? K("", !0) : (C(), H(De, { key: 1 }, [
              dt(Ue(ye.value(d.type).text), 1)
            ], 64))
          ], 42, rl),
          Ae("button", {
            ref_for: !0,
            ref: (G) => ne(G, X, 2),
            type: "button",
            class: ke({
              dp__btn: !0,
              dp__inc_dec_button: !t(p).timePickerInline,
              dp__inc_dec_button_inline: t(p).timePickerInline,
              dp__tp_inline_btn_bottom: t(p).timePickerInline,
              dp__inc_dec_button_disabled: Y.value(d.type),
              "dp--hidden-el": B.value
            }),
            "data-test-id": `${d.type}-time-dec-btn-${l.order}`,
            "aria-label": t(D)?.decrementValue(d.type),
            tabindex: "0",
            onKeydown: (G) => t(M)(G, () => n(d.type, !1, { keyboard: !0 }), !0),
            onClick: (G) => t(O).timeArrowHoldThreshold ? void 0 : n(d.type, !1),
            onMousedown: (G) => t(O).timeArrowHoldThreshold ? n(d.type, !1) : void 0,
            onMouseup: W
          }, [
            t(p).timePickerInline ? (C(), H(De, { key: 1 }, [
              a.$slots["tp-inline-arrow-down"] ? le(a.$slots, "tp-inline-arrow-down", { key: 0 }) : (C(), H(De, { key: 1 }, [
                x[4] || (x[4] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                x[5] || (x[5] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (C(), H(De, { key: 0 }, [
              a.$slots["arrow-down"] ? le(a.$slots, "arrow-down", { key: 0 }) : K("", !0),
              a.$slots["arrow-down"] ? K("", !0) : (C(), Re(t(Ua), { key: 1 }))
            ], 64))
          ], 42, ll)
        ], 64))
      ], 10, al))), 128)),
      t(p).is24 ? K("", !0) : (C(), H("div", ol, [
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
          onKeydown: x[0] || (x[0] = (d) => t(M)(d, () => S(), !0))
        }, Ue(m.value), 41, sl))
      ])),
      (C(!0), H(De, null, Oe(we.value, (d, X) => (C(), Re(Ct, {
        key: X,
        name: t(re)(A[d.type]),
        css: t(oe)
      }, {
        default: _e(() => [
          A[d.type] ? (C(), Re(jt, {
            key: 0,
            items: se(d.type),
            "is-last": t(g).autoApply && !t(O).keepActionRow,
            type: d.type,
            "aria-labels": t(D),
            "overlay-label": t(D).timeOverlay?.(d.type),
            onSelected: (G) => Q(d.type, G),
            onToggle: (G) => I(d.type),
            onResetFlow: x[1] || (x[1] = (G) => a.$emit("reset-flow"))
          }, ze({
            "button-icon": _e(() => [
              a.$slots["clock-icon"] ? le(a.$slots, "clock-icon", { key: 0 }) : K("", !0),
              a.$slots["clock-icon"] ? K("", !0) : (C(), Re(ka(t(p).timePickerInline ? t(Ht) : t(Ka)), { key: 1 }))
            ]),
            _: 2
          }, [
            a.$slots[`${d.type}-overlay-value`] ? {
              name: "item",
              fn: _e(({ item: G }) => [
                le(a.$slots, `${d.type}-overlay-value`, {
                  text: G.text,
                  value: G.value
                })
              ]),
              key: "0"
            } : void 0,
            a.$slots[`${d.type}-overlay-header`] ? {
              name: "header",
              fn: _e(() => [
                le(a.$slots, `${d.type}-overlay-header`, {
                  toggle: () => I(d.type)
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
      rootProps: v,
      defaults: { ariaLabels: g, textInput: D, config: c, range: O, timeConfig: u }
    } = Se(), { checkKeyDown: _, findFocusableEl: p, isModelAuto: M } = We(), { buildMatrix: R, setTimePicker: b } = yt(), { transitionName: k, showTransition: F } = zt(), { hideNavigationButtons: re } = aa(), { mapSlots: oe } = At(), { isMobile: A } = ea(), m = gt(), o = Ye("overlay"), y = Ye("open-tp-btn"), $ = Ye("close-tp-btn"), B = Ye("tp-input"), N = ie(!1);
    Ke(() => {
      s("mount"), !v.timePicker && v.arrowNavigation ? R([Ge(y.value)], "time") : b(!0, v.timePicker);
    });
    const J = L(() => O.value.enabled && v.modelAuto ? M(r.value) : !0), ee = ie(!1), pe = (z) => ({
      hours: Array.isArray(l.hours) ? l.hours[z] : l.hours,
      minutes: Array.isArray(l.minutes) ? l.minutes[z] : l.minutes,
      seconds: Array.isArray(l.seconds) ? l.seconds[z] : l.seconds
    }), Z = L(() => {
      const z = [];
      if (O.value.enabled)
        for (let se = 0; se < 2; se++)
          z.push(pe(se));
      else
        z.push(pe(0));
      return z;
    }), ce = (z, se = !1, q = "") => {
      se || s("reset-flow"), ee.value = z, i("overlay-toggle", { open: z, overlay: Qe.time }), v.arrowNavigation && b(z), tt(() => {
        q !== "" && B.value?.[0] && B.value[0].openChildCmp(q);
      });
    }, Y = L(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: v.autoApply && !c.value.keepActionRow
    })), V = oe(m, "timePicker"), E = (z, se, q) => O.value.enabled ? se === 0 ? [z, Z.value[1][q]] : [Z.value[0][q], z] : z, ae = (z) => {
      s("update:hours", z);
    }, ve = (z) => {
      s("update:minutes", z);
    }, Me = (z) => {
      s("update:seconds", z);
    }, we = () => {
      if (o.value && !D.value.enabled && !l.noOverlayFocus) {
        const z = p(o.value);
        z && z.focus({ preventScroll: !0 });
      }
    }, ye = (z) => {
      N.value = !1, i("overlay-toggle", { open: !1, overlay: z });
    }, U = (z) => {
      N.value = !0, i("overlay-toggle", { open: !0, overlay: z });
    };
    return w({ toggleTimePicker: ce }), (z, se) => (C(), H("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(A)
    }, [
      !t(v).timePicker && !t(u).timePickerInline ? Xt((C(), H("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        class: ke({ ...Y.value, "dp--hidden-el": ee.value }),
        "aria-label": t(g)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: se[0] || (se[0] = (q) => t(_)(q, () => ce(!0))),
        onClick: se[1] || (se[1] = (q) => ce(!0))
      }, [
        z.$slots["clock-icon"] ? le(z.$slots, "clock-icon", { key: 0 }) : K("", !0),
        z.$slots["clock-icon"] ? K("", !0) : (C(), Re(t(Ka), { key: 1 }))
      ], 42, cl)), [
        [Jt, !t(re)("time")]
      ]) : K("", !0),
      at(Ct, {
        name: t(k)(ee.value),
        css: t(F) && !t(u).timePickerInline
      }, {
        default: _e(() => [
          ee.value || t(v).timePicker || t(u).timePickerInline ? (C(), H("div", {
            key: 0,
            ref: "overlay",
            role: t(u).timePickerInline ? void 0 : "dialog",
            class: ke({
              dp__overlay: !t(u).timePickerInline,
              "dp--overlay-absolute": !t(v).timePicker && !t(u).timePickerInline,
              "dp--overlay-relative": t(v).timePicker
            }),
            style: Ze(t(v).timePicker ? { height: `${t(c).modeHeight}px` } : void 0),
            "aria-label": t(g)?.timePicker,
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
                  closeTimePickerBtn: $.value,
                  disabledTimesConfig: e.disabledTimesConfig,
                  disabled: de === 0 ? t(O).fixedStart : t(O).fixedEnd
                }, {
                  ref_for: !0,
                  ref: "tp-input",
                  "validate-time": (me, ge) => e.validateTime(me, E(ge, de, me)),
                  "onUpdate:hours": (me) => ae(E(me, de, "hours")),
                  "onUpdate:minutes": (me) => ve(E(me, de, "minutes")),
                  "onUpdate:seconds": (me) => Me(E(me, de, "seconds")),
                  onMounted: we,
                  onOverlayClosed: ye,
                  onOverlayOpened: U
                }), ze({ _: 2 }, [
                  Oe(t(V), (me, ge) => ({
                    name: me,
                    fn: _e((I) => [
                      le(z.$slots, me, et({ ref_for: !0 }, I))
                    ])
                  }))
                ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [Jt, de === 0 ? !0 : J.value]
                ])), 128))
              ], 2)),
              !t(v).timePicker && !t(u).timePickerInline ? Xt((C(), H("button", {
                key: 2,
                ref: "close-tp-btn",
                type: "button",
                class: ke({ ...Y.value, "dp--hidden-el": N.value }),
                "aria-label": t(g)?.closeTimePicker,
                tabindex: "0",
                onKeydown: se[2] || (se[2] = (q) => t(_)(q, () => ce(!1))),
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
    defaults: { range: v, timeConfig: g }
  } = Se(), D = (m, o) => Array.isArray(i[m]) ? i[m][o] : i[m], c = (m) => g.value.enableSeconds ? Array.isArray(i.seconds) ? i.seconds[m] : i.seconds : 0, O = (m, o) => m ? s(
    o !== void 0 ? { hours: D("hours", o), minutes: D("minutes", o), seconds: c(o) } : { hours: i.hours, minutes: i.minutes, seconds: c() },
    m
  ) : Ea(w(), c(o)), u = (m, o) => {
    i[m] = o;
  }, _ = L(() => r.modelAuto && v.value.enabled ? Array.isArray(l.value) ? l.value.length > 1 : !1 : v.value.enabled), p = (m, o) => {
    const y = Object.fromEntries(
      Object.keys(i).map(($) => $ === m ? [$, o] : [$, i[$]].slice())
    );
    if (_.value && !v.value.disableTimeRangeValidation) {
      const $ = (N) => l.value ? s(
        {
          hours: y.hours[N],
          minutes: y.minutes[N],
          seconds: y.seconds[N]
        },
        l.value[N]
      ) : null, B = (N) => Va(l.value[N], 0);
      return !(f($(0), $(1)) && (_t($(0), B(1)) || St($(1), B(0))));
    }
    return !0;
  }, M = (m, o) => {
    p(m, o) && (u(m, o), e && e());
  }, R = (m) => {
    M("hours", m);
  }, b = (m) => {
    M("minutes", m);
  }, k = (m) => {
    M("seconds", m);
  }, F = (m, o, y, $) => {
    o && R(m), !o && !y && b(m), y && k(m), l.value && $(l.value);
  }, re = (m) => {
    if (m) {
      const o = Array.isArray(m), y = o ? [+m[0].hours, +m[1].hours] : +m.hours, $ = o ? [+m[0].minutes, +m[1].minutes] : +m.minutes, B = o ? [+m[0].seconds, +m[1].seconds] : +m.seconds;
      u("hours", y), u("minutes", $), g.value.enableSeconds && u("seconds", B);
    }
  }, oe = (m, o) => {
    const y = {
      hours: Array.isArray(i.hours) ? i.hours[m] : i.hours,
      disabledArr: []
    };
    return (o || o === 0) && (y.hours = o), Array.isArray(r.disabledTimes) && (y.disabledArr = v.value.enabled && Array.isArray(r.disabledTimes[m]) ? r.disabledTimes[m] : r.disabledTimes), y;
  }, A = L(() => (m, o) => {
    if (Array.isArray(r.disabledTimes)) {
      const { disabledArr: y, hours: $ } = oe(m, o), B = y.filter((N) => +N.hours === $);
      return B[0]?.minutes === "*" ? { hours: [$], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: B?.map((N) => +N.minutes) ?? [],
        seconds: B?.map((N) => N.seconds ? +N.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: u,
    updateHours: R,
    updateMinutes: b,
    updateSeconds: k,
    getSetDateTime: O,
    updateTimeValues: F,
    getSecondsValue: c,
    assignStartTime: re,
    validateTime: p,
    disabledTimesConfig: A
  };
}, fl = (e) => {
  const {
    time: w,
    modelValue: f,
    rootProps: s,
    state: l,
    defaults: { startTime: i, range: r, tz: v, timeConfig: g }
  } = Se(), { toTzSafe: D } = Da(), { getDate: c, getTimeObj: O } = Ee();
  Kt(() => {
    l.isTextInputDate && o();
  });
  const { updateTimeValues: u, getSetDateTime: _, assignTime: p, assignStartTime: M, disabledTimesConfig: R, validateTime: b } = Ja(k);
  function k() {
    e("update-flow-step");
  }
  const F = (B) => {
    const { hours: N, minutes: J, seconds: ee } = B;
    return { hours: +N, minutes: +J, seconds: ee ? +ee : 0 };
  }, re = () => {
    if (s.startTime) {
      if (Array.isArray(s.startTime)) {
        const N = F(s.startTime[0]), J = F(s.startTime[1]);
        return [Te(c(), N), Te(c(), J)];
      }
      const B = F(s.startTime);
      return Te(c(), B);
    }
    return r.value.enabled ? [null, null] : null;
  }, oe = () => {
    if (r.value.enabled) {
      const [B, N] = re();
      f.value = [
        D(_(B, 0), v.value),
        D(_(N, 1), v.value)
      ];
    } else
      f.value = D(_(re()), v.value);
  }, A = (B) => Array.isArray(B) ? [O(c(B[0])), O(c(B[1]))] : [O(B ?? c())], m = (B, N, J) => {
    p("hours", B), p("minutes", N), p("seconds", g.value.enableSeconds ? J : 0);
  }, o = () => {
    const [B, N] = A(f.value);
    return r.value.enabled ? m(
      [B.hours, N.hours],
      [B.minutes, N.minutes],
      [B.seconds, N.seconds]
    ) : m(B.hours, B.minutes, B.seconds);
  };
  Ke(() => (M(i.value), f.value ? o() : oe()));
  const y = () => {
    Array.isArray(f.value) ? f.value = f.value.map((B, N) => B && _(B, N)) : f.value = _(f.value), e("time-update");
  };
  return {
    modelValue: f,
    time: w,
    disabledTimesConfig: R,
    validateTime: b,
    updateTime: (B, N = !0, J = !1) => {
      u(B, N, J, y);
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
    const s = f, l = gt(), { mapSlots: i } = At(), r = i(l, "timePicker"), v = Ye("time-input"), { time: g, modelValue: D, disabledTimesConfig: c, updateTime: O, validateTime: u } = fl(s);
    return Ke(() => {
      s("mount");
    }), w({ getSidebarProps: () => ({
      modelValue: D,
      time: g,
      updateTime: O
    }), toggleTimePicker: (M, R = !1, b = "") => {
      v.value?.toggleTimePicker(M, R, b);
    } }), (M, R) => (C(), Re(na, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: _e(({ wrapClass: b }) => [
        Ae("div", {
          class: ke(b)
        }, [
          at(Xa, et({ ref: "time-input" }, M.$props, {
            hours: t(g).hours,
            minutes: t(g).minutes,
            seconds: t(g).seconds,
            "disabled-times-config": t(c),
            "validate-time": t(u),
            "onUpdate:hours": R[0] || (R[0] = (k) => t(O)(k)),
            "onUpdate:minutes": R[1] || (R[1] = (k) => t(O)(k, !1)),
            "onUpdate:seconds": R[2] || (R[2] = (k) => t(O)(k, !1, !0)),
            onResetFlow: R[3] || (R[3] = (k) => M.$emit("reset-flow"))
          }), ze({ _: 2 }, [
            Oe(t(r), (k, F) => ({
              name: k,
              fn: _e((re) => [
                le(M.$slots, k, Je(st(re)))
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
  } = Se(), { validateMonthYearInRange: l, validateMonthYear: i } = ut(), { getDate: r } = Ee(), v = (u, _) => {
    let p = u;
    return s.value.months.includes(Pe(p)) ? (p = _ ? wt(u, 1) : Lt(u, 1), v(p, _)) : p;
  }, g = (u, _) => {
    let p = u;
    return s.value.years.includes(be(p)) ? (p = _ ? Fa(u, 1) : Wa(u, 1), g(p, _)) : p;
  }, D = (u, _ = !1) => {
    const p = Te(r(), { month: e.month, year: e.year });
    let M = u ? wt(p, 1) : Lt(p, 1);
    f.disableYearSelect && (M = ot(M, e.year));
    let R = Pe(M), b = be(M);
    s.value.months.includes(R) && (M = v(M, u), R = Pe(M), b = be(M)), s.value.years.includes(b) && (M = g(M, u), b = be(M)), l(R, b, u, f.preventMinMaxNavigation) && c(R, b, _);
  }, c = (u, _, p) => {
    w("update-month-year", { month: u, year: _, fromNav: p });
  }, O = L(() => (u) => i(
    Te(r(), { month: e.month, year: e.year }),
    f.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: D, isDisabled: O, updateMonthYear: c };
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
      modelValue: v,
      defaults: { ariaLabels: g, filters: D, config: c, highlight: O, safeDates: u, ui: _ }
    } = Se(), { transitionName: p, showTransition: M } = zt(), { showLeftIcon: R, showRightIcon: b } = aa(), { buildMatrix: k } = yt(), { handleMonthYearChange: F, isDisabled: re, updateMonthYear: oe } = pl(l, s), { checkHighlightYear: A, checkHighlightMonth: m } = We(), { getMaxMonth: o, getMinMonth: y, getYearFromDate: $ } = Ee(), { checkKeyDown: B, groupListAndMap: N, checkMinMaxValue: J } = We(), { formatYear: ee } = Pt(), pe = ie(!1), Z = ie(!1), ce = ie(!1), Y = ie([null, null, null, null]);
    Ke(() => {
      s("mount");
    });
    const V = (I) => ({
      get: () => l[I],
      set: (h) => {
        const W = I === rt.month ? rt.year : rt.month;
        s("update-month-year", { [I]: h, [W]: l[W] }), I === rt.month ? z(!0) : se(!0);
      }
    }), E = L(V(rt.month)), ae = L(V(rt.year)), ve = L(() => (I) => ({
      month: l.month,
      year: l.year,
      items: I === rt.month ? l.months : l.years,
      instance: l.instance,
      updateMonthYear: oe,
      toggle: I === rt.month ? z : se
    })), Me = L(() => {
      const I = l.months.find((h) => h.value === l.month);
      return I || { text: "", value: 0 };
    }), we = L(() => N(l.months, (I) => {
      const h = l.month === I.value, W = J(
        I.value,
        y(l.year, u.value.minDate),
        o(l.year, u.value.maxDate)
      ) || D.value.months.includes(I.value), n = m(O.value, I.value, l.year);
      return { active: h, disabled: W, highlighted: n };
    })), ye = L(() => N(l.years, (I) => {
      const h = l.year === I.value, W = J(
        I.value,
        $(u.value.minDate),
        $(u.value.maxDate)
      ) || D.value.years.includes(I.value), n = A(O.value, I.value);
      return { active: h, disabled: W, highlighted: n };
    })), U = (I, h, W) => {
      W === void 0 ? I.value = !I.value : I.value = W, I.value ? (ce.value = !0, s("overlay-opened", h)) : (ce.value = !1, i("overlay-toggle", { open: !1, overlay: h }));
    }, z = (I = !1, h) => {
      q(I), U(pe, Qe.month, h);
    }, se = (I = !1, h) => {
      q(I), U(Z, Qe.year, h);
    }, q = (I) => {
      I || s("reset-flow");
    }, de = (I, h) => {
      r.arrowNavigation && (Y.value[h] = Ge(I), k(Y.value, "monthYear"));
    }, me = L(() => [
      {
        type: rt.month,
        index: 1,
        toggle: z,
        modelValue: E.value,
        updateModelValue: (I) => E.value = I,
        text: Me.value.text,
        showSelectionGrid: pe.value,
        items: we.value,
        ariaLabel: g.value?.openMonthsOverlay,
        overlayLabel: g.value.monthPicker?.(!0) ?? void 0
      },
      {
        type: rt.year,
        index: 2,
        toggle: se,
        modelValue: ae.value,
        updateModelValue: (I) => ae.value = I,
        text: ee(l.year),
        showSelectionGrid: Z.value,
        items: ye.value,
        ariaLabel: g.value?.openYearsOverlay,
        overlayLabel: g.value.yearPicker?.(!0) ?? void 0
      }
    ]), ge = L(() => r.disableYearSelect ? [me.value[0]] : r.yearFirst ? [...me.value].reverse() : me.value);
    return w({
      toggleMonthPicker: z,
      toggleYearPicker: se,
      handleMonthYearChange: F
    }), (I, h) => (C(), H("div", hl, [
      I.$slots["month-year"] ? (C(), H("div", gl, [
        le(I.$slots, "month-year", Je(st({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(oe),
          handleMonthYearChange: t(F),
          instance: e.instance,
          isDisabled: t(re)
        })))
      ])) : (C(), H(De, { key: 1 }, [
        I.$slots["top-extra"] ? (C(), H("div", yl, [
          le(I.$slots, "top-extra", { value: t(v) })
        ])) : K("", !0),
        Ae("div", bl, [
          t(R)(e.instance) && !t(r).vertical ? (C(), Re(Nt, {
            key: 0,
            "aria-label": t(g)?.prevMonth,
            disabled: t(re)(!1),
            class: ke(t(_)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: h[0] || (h[0] = (W) => t(F)(!1, !0)),
            onSetRef: h[1] || (h[1] = (W) => de(W, 0))
          }, {
            default: _e(() => [
              I.$slots["arrow-left"] ? le(I.$slots, "arrow-left", { key: 0 }) : K("", !0),
              I.$slots["arrow-left"] ? K("", !0) : (C(), Re(t(Ha), { key: 1 }))
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
                ref: (P) => de(P, n + 1),
                type: "button",
                "data-dp-element": `overlay-${W.type}`,
                class: ke(["dp__btn dp__month_year_select", { "dp--hidden-el": ce.value }]),
                "aria-label": `${W.text}-${W.ariaLabel}`,
                "data-test-id": `${W.type}-toggle-overlay-${e.instance}`,
                onClick: (P) => W.toggle(!1),
                onKeydown: (P) => t(B)(P, () => W.toggle(), !0)
              }, [
                I.$slots[W.type] ? le(I.$slots, W.type, {
                  key: 0,
                  text: W.text,
                  value: l[W.type]
                }) : K("", !0),
                I.$slots[W.type] ? K("", !0) : (C(), H(De, { key: 1 }, [
                  dt(Ue(W.text), 1)
                ], 64))
              ], 42, kl),
              at(Ct, {
                name: t(p)(W.showSelectionGrid),
                css: t(M)
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
                      I.$slots["calendar-icon"] ? le(I.$slots, "calendar-icon", { key: 0 }) : K("", !0),
                      I.$slots["calendar-icon"] ? K("", !0) : (C(), Re(t(Ht), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    I.$slots[`${W.type}-overlay-value`] ? {
                      name: "item",
                      fn: _e(({ item: P }) => [
                        le(I.$slots, `${W.type}-overlay-value`, {
                          text: P.text,
                          value: P.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    I.$slots[`${W.type}-overlay`] ? {
                      name: "overlay",
                      fn: _e(() => [
                        le(I.$slots, `${W.type}-overlay`, et({ ref_for: !0 }, ve.value(W.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    I.$slots[`${W.type}-overlay-header`] ? {
                      name: "header",
                      fn: _e(() => [
                        le(I.$slots, `${W.type}-overlay-header`, {
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
            "aria-label": t(g)?.prevMonth,
            "el-name": "action-prev",
            disabled: t(re)(!1),
            class: ke(t(_)?.navBtnPrev),
            onActivate: h[2] || (h[2] = (W) => t(F)(!1, !0))
          }, {
            default: _e(() => [
              I.$slots["arrow-up"] ? le(I.$slots, "arrow-up", { key: 0 }) : K("", !0),
              I.$slots["arrow-up"] ? K("", !0) : (C(), Re(t(ja), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : K("", !0),
          t(b)(e.instance) ? (C(), Re(Nt, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t(re)(!0),
            "aria-label": t(g)?.nextMonth,
            class: ke(t(_)?.navBtnNext),
            onActivate: h[3] || (h[3] = (W) => t(F)(!0, !0)),
            onSetRef: h[4] || (h[4] = (W) => de(W, t(r).disableYearSelect ? 2 : 3))
          }, {
            default: _e(() => [
              I.$slots[t(r).vertical ? "arrow-down" : "arrow-right"] ? le(I.$slots, t(r).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : K("", !0),
              I.$slots[t(r).vertical ? "arrow-down" : "arrow-right"] ? K("", !0) : (C(), Re(ka(t(r).vertical ? t(Ua) : t(za)), { key: 1 }))
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
      defaults: { transitions: v, config: g, ariaLabels: D, multiCalendars: c, weekNumbers: O, multiDates: u, ui: _ }
    } = Se(), { buildMultiLevelMatrix: p } = yt(), { getDate: M, isDateAfter: R, isDateEqual: b, resetDateTime: k, getCellId: F } = Ee(), { checkKeyDown: re, checkStopPropagation: oe, isTouchDevice: A } = We(), { formatWeekDay: m } = Pt(), o = Ye("calendar-wrap"), y = Ye("active-tooltip"), $ = ie([]), B = ie(null), N = ie(!0), J = ie(!1), ee = ie(""), pe = ie({
      bottom: "",
      left: "",
      transform: ""
    }), Z = ie({ startX: 0, endX: 0, startY: 0, endY: 0 }), ce = ie({ left: "50%" }), Y = L(() => r.calendar ? r.calendar(l.mappedDates) : l.mappedDates), V = L(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames() : x());
    Ke(() => {
      s("mount", { cmp: "calendar", dayRefs: $.value }), g.value.noSwipe || o.value && (o.value.addEventListener("touchstart", ge, { passive: !1 }), o.value.addEventListener("touchend", I, { passive: !1 }), o.value.addEventListener("touchmove", h, { passive: !1 })), g.value.monthChangeOnScroll && o.value && o.value.addEventListener("wheel", P, { passive: !1 });
    }), Rt(() => {
      g.value.noSwipe || o.value && (o.value.removeEventListener("touchstart", ge), o.value.removeEventListener("touchend", I), o.value.removeEventListener("touchmove", h)), g.value.monthChangeOnScroll && o.value && o.value.removeEventListener("wheel", P);
    });
    const E = (d) => d ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", ae = (d, X) => {
      if (r.transitions) {
        const G = k(Te(M(), { month: l.month, year: l.year }));
        ee.value = R(k(Te(M(), { month: d, year: X })), G) ? v.value[E(!0)] : v.value[E(!1)], N.value = !1, tt(() => {
          N.value = !0;
        });
      }
    }, ve = L(
      () => ({
        ..._.value.calendar
      })
    ), Me = (d) => ({ type: "dot", ...d }), we = L(() => (d) => {
      const X = Me(d);
      return {
        dp__marker_dot: X.type === "dot",
        dp__marker_line: X.type === "line"
      };
    }), ye = L(() => (d) => b(d, B.value)), U = L(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && l.instance !== 0
    })), z = L(() => (d) => r.hideOffsetDates ? d.current : !0), se = async (d, X) => {
      const { width: G, height: Ce } = d.getBoundingClientRect();
      B.value = X.value;
      let fe = { left: `${G / 2}px` }, He = -50;
      if (await tt(), y.value?.[0]) {
        const { left: Ie, width: vt } = y.value[0].getBoundingClientRect();
        Ie < 0 && (fe = { left: "0" }, He = 0, ce.value.left = `${G / 2}px`), globalThis.innerWidth < Ie + vt && (fe = { right: "0" }, He = 0, ce.value.left = `${vt - G / 2}px`);
      }
      pe.value = {
        bottom: `${Ce}px`,
        ...fe,
        transform: `translateX(${He}%)`
      };
    }, q = async (d, X, G) => {
      const Ce = Ge($.value?.[X]?.[G]);
      Ce && (d.marker?.customPosition && d.marker?.tooltip?.length ? pe.value = d.marker.customPosition(Ce) : await se(Ce, d), i("tooltip-open", d.marker));
    }, de = async (d, X, G) => {
      if (J.value && u.value.enabled && u.value.dragSelect)
        return s("select-date", d);
      if (s("set-hover-date", d), d.marker?.tooltip?.length) {
        if (r.hideOffsetDates && !d.current) return;
        await q(d, X, G);
      }
    }, me = (d) => {
      B.value && (B.value = null, pe.value = structuredClone({ bottom: "", left: "", transform: "" }), i("tooltip-close", d.marker));
    }, ge = (d) => {
      Z.value.startX = d.changedTouches[0].screenX, Z.value.startY = d.changedTouches[0].screenY;
    }, I = (d) => {
      Z.value.endX = d.changedTouches[0].screenX, Z.value.endY = d.changedTouches[0].screenY, W();
    }, h = (d) => {
      r.vertical && !r.inline && d.preventDefault();
    }, W = () => {
      const d = r.vertical ? "Y" : "X";
      Math.abs(Z.value[`start${d}`] - Z.value[`end${d}`]) > 10 && s("handle-swipe", Z.value[`start${d}`] > Z.value[`end${d}`] ? "right" : "left");
    }, n = (d, X, G) => {
      d && (Array.isArray($.value[X]) ? $.value[X][G] = d : $.value[X] = [d]), r.arrowNavigation && p($.value, "calendar");
    }, P = (d) => {
      g.value.monthChangeOnScroll && (d.preventDefault(), s("handle-scroll", d));
    }, S = (d) => O.value.type === "local" ? Cn(d.value, { weekStartsOn: +r.weekStart }) : O.value.type === "iso" ? Yn(d.value) : typeof O.value.type == "function" ? O.value.type(d.value) : "", j = (d) => {
      const X = d[0];
      return O.value.hideOnOffsetDates ? d.some((G) => G.current) ? S(X) : "" : S(X);
    }, ne = (d, X, G = !0) => {
      !G && A() || (!u.value.enabled || g.value.allowPreventDefault) && (oe(d, g.value), s("select-date", X));
    }, Q = (d) => {
      oe(d, g.value);
    }, a = (d) => {
      u.value.enabled && u.value.dragSelect ? (J.value = !0, s("select-date", d)) : u.value.enabled && s("select-date", d);
    }, x = () => {
      const X = [1, 2, 3, 4, 5, 6, 7].map((fe) => m(fe)), G = X.slice(0, +r.weekStart), Ce = X.slice(+r.weekStart + 1, X.length);
      return [X[+r.weekStart]].concat(...Ce).concat(...G);
    };
    return w({ triggerTransition: ae }), (d, X) => (C(), H("div", {
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
            d.$slots["calendar-header"] ? le(d.$slots, "calendar-header", {
              key: 0,
              day: G,
              index: Ce
            }) : K("", !0),
            d.$slots["calendar-header"] ? K("", !0) : (C(), H(De, { key: 1 }, [
              dt(Ue(G), 1)
            ], 64))
          ], 8, _l))), 128))
        ]),
        X[2] || (X[2] = Ae("div", { class: "dp__calendar_header_separator" }, null, -1)),
        at(Ct, {
          name: ee.value,
          css: !!t(v)
        }, {
          default: _e(() => [
            N.value ? (C(), H("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: X[1] || (X[1] = (G) => J.value = !1)
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
                  id: t(F)(fe.value),
                  ref_for: !0,
                  ref: (Ie) => n(Ie, Ce, He),
                  key: He + Ce,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (fe.classData.dp__active_date || fe.classData.dp__range_start || fe.classData.dp__range_end) ?? void 0,
                  "aria-disabled": fe.classData.dp__cell_disabled || void 0,
                  "aria-label": t(D)?.day?.(fe),
                  tabindex: !fe.current && t(r).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(F)(fe.value),
                  onClick: Wt((Ie) => ne(Ie, fe), ["prevent"]),
                  onTouchend: (Ie) => ne(Ie, fe, !1),
                  onKeydown: (Ie) => t(re)(Ie, () => d.$emit("select-date", fe)),
                  onMouseenter: (Ie) => de(fe, Ce, He),
                  onMouseleave: (Ie) => me(fe),
                  onMousedown: (Ie) => a(fe),
                  onMouseup: X[0] || (X[0] = (Ie) => J.value = !1)
                }, [
                  Ae("div", {
                    class: ke(["dp__cell_inner", fe.classData])
                  }, [
                    d.$slots.day && z.value(fe) ? le(d.$slots, "day", {
                      key: 0,
                      day: +fe.text,
                      date: fe.value
                    }) : K("", !0),
                    d.$slots.day ? K("", !0) : (C(), H(De, { key: 1 }, [
                      dt(Ue(fe.text), 1)
                    ], 64)),
                    fe.marker && z.value(fe) ? (C(), H(De, { key: 2 }, [
                      d.$slots.marker ? le(d.$slots, "marker", {
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
                          d.$slots["marker-tooltip"] ? le(d.$slots, "marker-tooltip", {
                            key: 0,
                            tooltip: Ie,
                            day: fe.value
                          }) : K("", !0),
                          d.$slots["marker-tooltip"] ? K("", !0) : (C(), H(De, { key: 1 }, [
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
    rootEmit: v,
    calendars: g,
    month: D,
    year: c,
    time: O,
    modelValue: u,
    rootProps: _,
    today: p,
    state: M,
    defaults: { multiCalendars: R, startTime: b, range: k, config: F, tz: re, safeDates: oe, multiDates: A, timeConfig: m, flow: o }
  } = Se(), { validateMonthYearInRange: y, isDisabled: $, isDateRangeAllowed: B, checkMinMaxRange: N } = ut(), { updateTimeValues: J, getSetDateTime: ee, assignTime: pe, assignStartTime: Z, validateTime: ce, disabledTimesConfig: Y } = Ja(s), { getDate: V, resetDateTime: E, setTime: ae, isDateBefore: ve, isDateEqual: Me, getDaysInBetween: we } = Ee(), { checkRangeAutoApply: ye, getRangeWithFixedDate: U, handleMultiDatesSelect: z, setPresetDate: se } = ra(), { getMapDate: q } = We(), { toTzSafe: de } = Da();
  Kt(() => P(M.isTextInputDate));
  const me = (T) => !F.value.keepViewOnOffsetClick || T ? !0 : !r.value, ge = (T, te, he, $e = !1) => {
    me($e) && (g.value[T] ??= g.value[T] = { month: 0, year: 0 }, g.value[T].month = te ?? g.value[T]?.month, g.value[T].year = he ?? g.value[T]?.year);
  }, I = () => {
    _.autoApply && w("select-date");
  }, h = () => {
    b.value && Z(b.value);
  };
  Ke(() => {
    u.value || (He(), h()), P(!0), _.focusStartDate && _.startDate && He();
  });
  const W = L(() => o.value?.steps?.length && !o.value?.partial ? e.flowStep === o.value.steps.length : !0), n = () => {
    _.autoApply && W.value && w("auto-apply", o.value?.partial ? e.flowStep !== o.value?.steps?.length : !1);
  }, P = (T = !1) => {
    if (u.value)
      return Array.isArray(u.value) ? (l.value = u.value, X(T)) : Q(u.value, T);
    if (R.value.count && T && !_.startDate)
      return ne(V(), T);
  }, S = () => Array.isArray(u.value) && k.value.enabled ? Pe(u.value[0]) === Pe(u.value[1] ?? u.value[0]) : !1, j = (T) => {
    const te = wt(T, 1);
    return { month: Pe(te), year: be(te) };
  }, ne = (T = /* @__PURE__ */ new Date(), te = !1) => {
    if ((!R.value.count || !R.value.static || te) && ge(0, Pe(T), be(T)), R.value.count && (!u.value || S() || !R.value.solo) && (!R.value.solo || te))
      for (let he = 1; he < R.value.count; he++) {
        const $e = Te(V(), { month: D.value(he - 1), year: c.value(he - 1) }), Ve = La($e, { months: 1 });
        g.value[he] = { month: Pe(Ve), year: be(Ve) };
      }
  }, Q = (T, te) => {
    ne(T), pe("hours", ct(T)), pe("minutes", ht(T)), pe("seconds", Dt(T)), R.value.count && te && fe();
  }, a = (T) => {
    if (R.value.count) {
      if (R.value.solo) return 0;
      const te = Pe(T[0]), he = Pe(T[1]);
      return Math.abs(he - te) < R.value.count ? 0 : 1;
    }
    return 1;
  }, x = (T, te) => {
    T[1] && k.value.showLastInRange ? ne(T[a(T)], te) : ne(T[0], te);
    const he = ($e, Ve) => [
      $e(T[0]),
      T?.[1] ? $e(T[1]) : O[Ve][1]
    ];
    pe("hours", he(ct, "hours")), pe("minutes", he(ht, "minutes")), pe("seconds", he(Dt, "seconds"));
  }, d = (T, te) => {
    if ((k.value.enabled || _.weekPicker) && !A.value.enabled)
      return x(T, te);
    if (A.value.enabled && te) {
      const he = T[T.length - 1];
      return Q(he, te);
    }
  }, X = (T) => {
    const te = u.value;
    d(te, T), R.value.count && R.value.solo && fe();
  }, G = (T, te) => {
    const he = Te(V(), { month: D.value(te), year: c.value(te) }), $e = T < 0 ? wt(he, 1) : Lt(he, 1);
    y(Pe($e), be($e), T < 0, _.preventMinMaxNavigation) && (ge(te, Pe($e), be($e)), v("update-month-year", { instance: te, month: Pe($e), year: be($e) }), R.value.count && !R.value.solo && Ce(te), f());
  }, Ce = (T) => {
    for (let te = T - 1; te >= 0; te--) {
      const he = Lt(Te(V(), { month: D.value(te + 1), year: c.value(te + 1) }), 1);
      ge(te, Pe(he), be(he));
    }
    for (let te = T + 1; te <= R.value.count - 1; te++) {
      const he = wt(Te(V(), { month: D.value(te - 1), year: c.value(te - 1) }), 1);
      ge(te, Pe(he), be(he));
    }
  }, fe = () => {
    if (Array.isArray(u.value) && u.value.length === 2) {
      const T = V(V(u.value[1] ?? wt(u.value[0], 1))), [te, he] = [Pe(u.value[0]), be(u.value[0])], [$e, Ve] = [Pe(u.value[1]), be(u.value[1])];
      (te !== $e || te === $e && he !== Ve) && R.value.solo && ge(1, Pe(T), be(T));
    } else u.value && !Array.isArray(u.value) && (ge(0, Pe(u.value), be(u.value)), ne(V()));
  }, He = () => {
    _.startDate && (ge(0, Pe(V(_.startDate)), be(V(_.startDate))), R.value.count && Ce(0));
  }, Ie = (T, te) => {
    if (F.value.monthChangeOnScroll) {
      const he = Date.now() - i.value.getTime(), $e = Math.abs(T.deltaY);
      let Ve = 500;
      $e > 1 && (Ve = 100), $e > 100 && (Ve = 0), he > Ve && (i.value = /* @__PURE__ */ new Date(), G(
        F.value.monthChangeOnScroll === "inverse" ? T.deltaY : -T.deltaY,
        te
      ));
    }
  }, vt = (T, te, he = !1) => {
    F.value.monthChangeOnArrows && _.vertical === he && Ut(T, te);
  }, Ut = (T, te) => {
    G(T === "right" ? -1 : 1, te);
  }, la = (T) => {
    if (oe.value.markers)
      return q(T.value, oe.value.markers);
  }, oa = (T, te) => {
    switch (_.sixWeeks === !0 ? "append" : _.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [T == 0, !0];
      case "fair":
        return [T == 0 || te > T, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, sa = (T, te, he, $e) => {
    if (_.sixWeeks && T.length < 6) {
      const Ve = 6 - T.length, ft = (te.getDay() + 7 - $e) % 7, qt = 6 - (he.getDay() + 7 - $e) % 7, [Bt, va] = oa(ft, qt);
      for (let kt = 1; kt <= Ve; kt++)
        if (va ? !!(kt % 2) == Bt : Bt) {
          const Qt = T[0].days[0], fa = Yt(pt(Qt.value, -7), Pe(te));
          T.unshift({ days: fa });
        } else {
          const Qt = T[T.length - 1], fa = Qt.days[Qt.days.length - 1], sn = Yt(pt(fa.value, 1), Pe(te));
          T.push({ days: sn });
        }
    }
    return T;
  }, Yt = (T, te) => {
    const he = V(T), $e = [];
    for (let Ve = 0; Ve < 7; Ve++) {
      const ft = pt(he, Ve), xt = Pe(ft) !== te;
      $e.push({
        text: _.hideOffsetDates && xt ? "" : ft.getDate(),
        value: ft,
        current: !xt,
        classData: {}
      });
    }
    return $e;
  }, ua = (T, te) => {
    const he = [], $e = new Date(te, T), Ve = new Date(te, T + 1, 0), ft = _.weekStart, xt = wa($e, { weekStartsOn: ft }), qt = (Bt) => {
      const va = Yt(Bt, T);
      if (he.push({ days: va }), !he[he.length - 1].days.some((kt) => Me(V(kt.value), E(Ve)))) {
        const kt = pt(Bt, 7);
        qt(kt);
      }
    };
    return qt(xt), sa(he, $e, Ve, ft);
  }, ia = (T) => {
    const te = ae(
      { hours: O.hours, minutes: O.minutes, seconds: Ma() },
      V(T.value)
    );
    v("date-click", te), A.value.enabled ? z(te, A.value.limit) : u.value = te, s(), tt().then(() => {
      n();
    });
  }, ue = (T) => k.value.noDisabledRange ? we(l.value[0], T).some((he) => $(he)) : !1, Xe = () => {
    l.value = u.value ? u.value.slice() : [], l.value.length === 2 && !(k.value.fixedStart || k.value.fixedEnd) && (l.value = []);
  }, nt = (T, te) => {
    const he = [V(T.value), pt(V(T.value), +k.value.autoRange)];
    B(he) ? (te && Ot(T.value), l.value = he) : v("invalid-date", T.value);
  }, Ot = (T) => {
    const te = Pe(V(T)), he = be(V(T));
    if (ge(0, te, he), R.value.count > 0)
      for (let $e = 1; $e < R.value.count; $e++) {
        const Ve = j(
          Te(V(T), { year: c.value($e - 1), month: D.value($e - 1) })
        );
        ge($e, Ve.month, Ve.year);
      }
  }, bt = (T) => {
    if (ue(T.value) || !N(T.value, u.value, k.value.fixedStart ? 0 : 1))
      return v("invalid-date", T.value);
    l.value = U(V(T.value));
  }, ca = (T, te) => {
    if (Xe(), k.value.autoRange) return nt(T, te);
    if (k.value.fixedStart || k.value.fixedEnd) return bt(T);
    l.value[0] ? N(V(T.value), u.value) && !ue(T.value) ? ve(V(T.value), V(l.value[0])) ? (l.value.unshift(V(T.value)), v("range-end", l.value[0])) : (l.value[1] = V(T.value), v("range-end", l.value[1])) : v("invalid-date", T.value) : (l.value[0] = V(T.value), v("range-start", l.value[0]));
  }, Ma = (T = !0) => m.value.enableSeconds ? Array.isArray(O.seconds) ? T ? O.seconds[0] : O.seconds[1] : O.seconds : 0, da = (T) => {
    l.value[T] = ae(
      {
        hours: O.hours[T],
        minutes: O.minutes[T],
        seconds: Ma(T !== 1)
      },
      l.value[T]
    );
  }, Za = () => {
    l.value[0] && l.value[1] && +l.value?.[0] > +l.value?.[1] && (l.value.reverse(), v("range-start", l.value[0]), v("range-end", l.value[1]));
  }, en = () => {
    l.value.length && (l.value[0] && !l.value[1] ? da(0) : (da(0), da(1), s()), Za(), u.value = l.value.slice(), ye(l.value, w, _.autoApply, _.modelAuto));
  }, tn = (T, te = !1) => {
    if ($(T.value) || !T.current && _.hideOffsetDates)
      return v("invalid-date", T.value);
    if (r.value = structuredClone(T), !k.value.enabled) return ia(T);
    Array.isArray(O.hours) && Array.isArray(O.minutes) && !A.value.enabled && (ca(T, te), en());
  }, an = (T, te) => {
    ge(T, te.month, te.year, !0), R.value.count && !R.value.solo && Ce(T), v("update-month-year", { instance: T, month: te.month, year: te.year }), f(R.value.solo ? T : void 0);
    const he = o.value?.steps?.length ? o.value.steps[e.flowStep] : void 0;
    !te.fromNav && (he === Qe.month || he === Qe.year) && s();
  }, nn = (T) => {
    se({
      value: T
    }), I(), _.multiCalendars && tt().then(() => P(!0));
  }, rn = () => {
    const T = de(V(), re.value);
    !k.value.enabled && !A.value.enabled ? u.value = T : u.value && Array.isArray(u.value) && u.value[0] ? A.value.enabled ? u.value = [...u.value, T] : u.value = ve(T, u.value[0]) ? [T, u.value[0]] : [u.value[0], T] : u.value = [T], I();
  }, ln = () => {
    if (Array.isArray(u.value))
      if (A.value.enabled) {
        const T = on();
        u.value[u.value.length - 1] = ee(T);
      } else
        u.value = u.value.map((T, te) => T && ee(T, te));
    else
      u.value = ee(u.value);
    w("time-update");
  }, on = () => Array.isArray(u.value) && u.value.length ? u.value[u.value.length - 1] : null;
  return {
    calendars: g,
    modelValue: u,
    month: D,
    year: c,
    time: O,
    disabledTimesConfig: Y,
    today: p,
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
    updateTime: (T, te = !0, he = !1) => {
      J(T, te, he, ln);
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
  } = Ee(), { isModelAuto: v, matchDate: g } = We(), {
    today: D,
    rootProps: c,
    defaults: { multiCalendars: O, multiDates: u, ui: _, highlight: p, safeDates: M, range: R },
    modelValue: b
  } = Se(), { isDisabled: k } = ut(), F = ie(null), re = (n) => {
    !n.current && c.hideOffsetDates || (F.value = n.value);
  }, oe = () => {
    F.value = null;
  }, A = (n) => Array.isArray(b.value) && R.value.enabled && b.value[0] && F.value ? n ? e(F.value, b.value[0]) : w(F.value, b.value[0]) : !0, m = (n, P) => {
    const S = () => b.value ? P ? b.value[0] || null : b.value[1] : null, j = b.value && Array.isArray(b.value) ? S() : null;
    return s(l(n.value), j);
  }, o = (n) => {
    const P = Array.isArray(b.value) ? b.value[0] : null;
    return n ? !w(F.value, P) : !0;
  }, y = (n, P = !0) => (R.value.enabled || c.weekPicker) && Array.isArray(b.value) && b.value.length === 2 ? c.hideOffsetDates && !n.current ? !1 : s(l(n.value), b.value[P ? 0 : 1]) : R.value.enabled ? m(n, P) && o(P) || s(n.value, Array.isArray(b.value) ? b.value[0] : null) && A(P) : !1, $ = (n, P) => {
    if (Array.isArray(b.value) && b.value[0] && b.value.length === 1) {
      const S = s(n.value, F.value);
      return P ? e(b.value[0], n.value) && S : w(b.value[0], n.value) && S;
    }
    return !1;
  }, B = (n) => !b.value || c.hideOffsetDates && !n.current ? !1 : R.value.enabled ? c.modelAuto && Array.isArray(b.value) ? s(n.value, b.value[0] ?? D) : !1 : u.value.enabled && Array.isArray(b.value) ? b.value.some((P) => s(P, n.value)) : s(n.value, b.value ? b.value : D), N = (n) => {
    if (R.value.autoRange || c.weekPicker) {
      if (F.value) {
        if (c.hideOffsetDates && !n.current) return !1;
        const P = pt(F.value, +R.value.autoRange), S = i(l(F.value), c.weekStart);
        return c.weekPicker ? s(S[1], l(n.value)) : s(P, l(n.value));
      }
      return !1;
    }
    return !1;
  }, J = (n) => {
    if (R.value.autoRange || c.weekPicker) {
      if (F.value) {
        const P = pt(F.value, +R.value.autoRange);
        if (c.hideOffsetDates && !n.current) return !1;
        const S = i(l(F.value), c.weekStart);
        return c.weekPicker ? e(n.value, S[0]) && w(n.value, S[1]) : e(n.value, F.value) && w(n.value, P);
      }
      return !1;
    }
    return !1;
  }, ee = (n) => {
    if (R.value.autoRange || c.weekPicker) {
      if (F.value) {
        if (c.hideOffsetDates && !n.current) return !1;
        const P = i(l(F.value), c.weekStart);
        return c.weekPicker ? s(P[0], n.value) : s(F.value, n.value);
      }
      return !1;
    }
    return !1;
  }, pe = (n) => f(b.value, F.value, n.value), Z = () => c.modelAuto && Array.isArray(b.value) ? !!b.value[0] : !1, ce = () => c.modelAuto ? v(b.value) : !0, Y = (n) => {
    if (c.weekPicker) return !1;
    const P = R.value.enabled ? !y(n) && !y(n, !1) : !0;
    return !k(n.value) && !B(n) && !(!n.current && c.hideOffsetDates) && P;
  }, V = (n) => R.value.enabled ? c.modelAuto ? Z() && B(n) : !1 : B(n), E = (n) => p.value ? g(n.value, M.value.highlight) : !1, ae = (n) => {
    const P = k(n.value);
    return P && (typeof p.value == "function" ? !p.value(n.value, P) : !p.value.options.highlightDisabled);
  }, ve = (n) => typeof p.value == "function" ? p.value(n.value) : p.value.weekdays?.includes(n.value.getDay()), Me = (n) => (R.value.enabled || c.weekPicker) && (!(O.value.count > 0) || n.current) && ce() && !(!n.current && c.hideOffsetDates) && !B(n) ? pe(n) : !1, we = (n) => {
    if (Array.isArray(b.value) && b.value.length === 1) {
      const { before: P, after: S } = r(+R.value.maxRange, b.value[0]);
      return St(n.value, P) || _t(n.value, S);
    }
    return !1;
  }, ye = (n) => {
    if (Array.isArray(b.value) && b.value.length === 1) {
      const { before: P, after: S } = r(+R.value.minRange, b.value[0]);
      return f([P, S], b.value[0], n.value);
    }
    return !1;
  }, U = (n) => R.value.enabled && (R.value.maxRange || R.value.minRange) ? R.value.maxRange && R.value.minRange ? we(n) || ye(n) : R.value.maxRange ? we(n) : ye(n) : !1, z = (n) => {
    const { isRangeStart: P, isRangeEnd: S } = me(n), j = R.value.enabled ? P || S : !1;
    return {
      dp__cell_offset: !n.current,
      dp__pointer: !c.disabled && !(!n.current && c.hideOffsetDates) && !k(n.value) && !U(n),
      dp__cell_disabled: k(n.value) || U(n),
      dp__cell_highlight: !ae(n) && (E(n) || ve(n)) && !V(n) && !j && !ee(n) && !(Me(n) && c.weekPicker) && !S,
      dp__cell_highlight_active: !ae(n) && (E(n) || ve(n)) && V(n),
      dp__today: !c.noToday && s(n.value, D) && n.current,
      "dp--past": w(n.value, D),
      "dp--future": e(n.value, D)
    };
  }, se = (n) => ({
    dp__active_date: V(n),
    dp__date_hover: Y(n)
  }), q = (n) => {
    if (b.value && !Array.isArray(b.value)) {
      const P = i(b.value, c.weekStart);
      return {
        ...I(n),
        dp__range_start: s(P[0], n.value),
        dp__range_end: s(P[1], n.value),
        dp__range_between_week: e(n.value, P[0]) && w(n.value, P[1])
      };
    }
    return {
      ...I(n)
    };
  }, de = (n) => {
    if (b.value && Array.isArray(b.value)) {
      const P = i(b.value[0], c.weekStart), S = b.value[1] ? i(b.value[1], c.weekStart) : [];
      return {
        ...I(n),
        dp__range_start: s(P[0], n.value) || s(S[0], n.value),
        dp__range_end: s(P[1], n.value) || s(S[1], n.value),
        dp__range_between_week: e(n.value, P[0]) && w(n.value, P[1]) || e(n.value, S[0]) && w(n.value, S[1]),
        dp__range_between: e(n.value, P[1]) && w(n.value, S[0])
      };
    }
    return {
      ...I(n)
    };
  }, me = (n) => {
    const P = O.value.count > 0 ? n.current && y(n) && ce() : y(n) && ce(), S = O.value.count > 0 ? n.current && y(n, !1) && ce() : y(n, !1) && ce();
    return { isRangeStart: P, isRangeEnd: S };
  }, ge = (n) => {
    const { isRangeStart: P, isRangeEnd: S } = me(n);
    return {
      dp__range_start: P,
      dp__range_end: S,
      dp__range_between: Me(n),
      dp__date_hover: s(n.value, F.value) && !P && !S && !c.weekPicker,
      dp__date_hover_start: $(n, !0),
      dp__date_hover_end: $(n, !1)
    };
  }, I = (n) => ({
    ...ge(n),
    dp__cell_auto_range: J(n),
    dp__cell_auto_range_start: ee(n),
    dp__cell_auto_range_end: N(n)
  }), h = (n) => R.value.enabled ? R.value.autoRange ? I(n) : c.modelAuto ? { ...se(n), ...ge(n) } : c.weekPicker ? de(n) : ge(n) : c.weekPicker ? q(n) : se(n);
  return {
    setHoverDate: re,
    clearHoverDate: oe,
    getDayClassData: (n) => c.hideOffsetDates && !n.current ? {} : {
      ...z(n),
      ...h(n),
      [_.value.dayClass ? _.value.dayClass(n.value, b.value) : ""]: !0,
      ..._.value.calendarCell
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
      modelValue: v,
      time: g,
      disabledTimesConfig: D,
      today: c,
      validateTime: O,
      getCalendarDays: u,
      getMarker: _,
      handleArrow: p,
      handleScroll: M,
      handleSwipe: R,
      selectDate: b,
      updateMonthYear: k,
      presetDate: F,
      selectCurrentDate: re,
      updateTime: oe,
      assignMonthAndYear: A,
      setStartTime: m
    } = Sl(l, s, se, q), o = gt(), { setHoverDate: y, getDayClassData: $, clearHoverDate: B } = Rl(), {
      rootEmit: N,
      rootProps: J,
      defaults: { multiCalendars: ee, timeConfig: pe }
    } = Se(), { getYears: Z, getMonths: ce } = ta(), { getCellId: Y } = Ee(), { mapSlots: V } = At(), E = Ye("calendar-header"), ae = Ye("calendar"), ve = Ye("time-picker"), Me = V(o, "calendar"), we = V(o, "monthYear"), ye = V(o, "timePicker"), U = (S) => {
      s("mount", S);
    };
    it(
      ee,
      (S, j) => {
        S.count - j.count > 0 && A();
      },
      { deep: !0 }
    );
    const z = L(() => (S) => u(i.value(S), r.value(S)).map((j) => ({
      ...j,
      days: j.days.map((ne) => (ne.marker = _(ne), ne.classData = $(ne), ne))
    })));
    function se(S) {
      S || S === 0 ? ae.value?.[S]?.triggerTransition(i.value(S), r.value(S)) : ae.value?.forEach((j, ne) => j?.triggerTransition(i.value(ne), r.value(ne)));
    }
    function q() {
      s("update-flow-step");
    }
    const de = (S, j, ne = 0) => {
      E.value?.[ne]?.toggleMonthPicker(S, j);
    }, me = (S, j, ne = 0) => {
      E.value?.[ne]?.toggleYearPicker(S, j);
    }, ge = (S, j, ne) => {
      ve.value?.toggleTimePicker(S, j, ne);
    }, I = (S, j) => {
      if (!J.range) {
        const ne = v.value ? v.value : c, Q = j ? new Date(j) : ne, a = S ? wa(Q, { weekStartsOn: 1 }) : Ia(Q, { weekStartsOn: 1 });
        b({
          value: a,
          current: Pe(Q) === i.value(0),
          text: "",
          classData: {}
        }), document.getElementById(Y(a))?.focus();
      }
    }, h = (S) => {
      E.value?.[0]?.handleMonthYearChange(S, !0);
    }, W = (S) => {
      k(0, { month: i.value(0), year: r.value(0) + (S ? 1 : -1), fromNav: !0 });
    }, n = (S) => {
      N("overlay-toggle", { open: !1, overlay: S }), s("focus-menu");
    };
    return w({
      clearHoverDate: B,
      presetDate: F,
      selectCurrentDate: re,
      handleArrow: p,
      updateMonthYear: k,
      setStartTime: m,
      toggleMonthPicker: de,
      toggleYearPicker: me,
      toggleTimePicker: ge,
      getSidebarProps: () => ({
        modelValue: v,
        month: i,
        year: r,
        time: g,
        updateTime: oe,
        updateMonthYear: k,
        selectDate: b,
        presetDate: F
      }),
      changeMonth: h,
      changeYear: W,
      selectWeekDate: I
    }), (S, j) => (C(), H(De, null, [
      at(na, { collapse: e.collapse }, {
        default: _e(({ instances: ne, wrapClass: Q }) => [
          (C(!0), H(De, null, Oe(ne, (a) => (C(), H("div", {
            key: a,
            class: ke(Q)
          }, [
            t(J).hideMonthYearSelect ? K("", !0) : (C(), Re(wl, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(ce)(),
              years: t(Z)(),
              month: t(i)(a),
              year: t(r)(a),
              instance: a,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: j[0] || (j[0] = (x) => U(t(Mt).header)),
              onResetFlow: j[1] || (j[1] = (x) => S.$emit("reset-flow")),
              onUpdateMonthYear: (x) => t(k)(a, x),
              onOverlayClosed: n
            }, ze({ _: 2 }, [
              Oe(t(we), (x, d) => ({
                name: x,
                fn: _e((X) => [
                  le(S.$slots, x, et({ ref_for: !0 }, X))
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
              onSelectDate: (x) => t(b)(x, a !== 1),
              onSetHoverDate: j[2] || (j[2] = (x) => t(y)(x)),
              onHandleScroll: (x) => t(M)(x, a),
              onHandleSwipe: (x) => t(R)(x, a),
              onMount: j[3] || (j[3] = (x) => U(t(Mt).calendar))
            }, ze({ _: 2 }, [
              Oe(t(Me), (x, d) => ({
                name: x,
                fn: _e((X) => [
                  le(S.$slots, x, et({ ref_for: !0 }, { ...X }))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(pe).enableTimePicker ? (C(), H("div", Cl, [
        S.$slots["time-picker"] ? le(S.$slots, "time-picker", Je(et({ key: 0 }, { time: t(g), updateTime: t(oe) }))) : (C(), Re(Xa, {
          key: 1,
          ref: "time-picker",
          hours: t(g).hours,
          minutes: t(g).minutes,
          seconds: t(g).seconds,
          "disabled-times-config": t(D),
          "validate-time": t(O),
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
    defaults: { highlight: r, range: v, multiDates: g }
  } = Se(), { isDateBetween: D, isDateEqual: c } = Ee(), { checkRangeAutoApply: O, handleMultiDatesSelect: u, setMonthOrYearRange: _ } = ra();
  Kt();
  const { isDisabled: p } = ut(), { formatQuarterText: M } = Pt(), { selectYear: R, groupedYears: b, showYearPicker: k, isDisabled: F, toggleYearPicker: re, handleYearSelect: oe, handleYear: A } = Ga(w), m = ie(), o = L(() => (Y) => s.value ? Array.isArray(s.value) ? s.value.some((V) => Pa(Y, V)) : Pa(s.value, Y) : !1), y = (Y) => {
    if (v.value.enabled) {
      if (Array.isArray(s.value)) {
        const V = c(Y, s.value[0]) || c(Y, s.value[1]);
        return D(s.value, m.value, Y) && !V;
      }
      return !1;
    }
    return !1;
  }, $ = (Y, V) => Y.quarter === $a(V) && Y.year === be(V), B = (Y) => typeof r.value == "function" ? r.value({ quarter: $a(Y), year: be(Y) }) : r.value.quarters.some((V) => $(V, Y)), N = L(() => (Y) => {
    const V = Te(/* @__PURE__ */ new Date(), { year: l.value(Y) });
    return On({
      start: Vt(V),
      end: Na(V)
    }).map((E) => {
      const ae = xn(E), ve = Ta(E), Me = p(E), we = y(ae), ye = B(ae);
      return {
        text: M(ae, ve),
        value: ae,
        active: o.value(ae),
        highlighted: ye,
        disabled: Me,
        isBetween: we
      };
    });
  }), J = (Y) => {
    u(Y, g.value.limit), w("auto-apply", !0);
  }, ee = (Y) => {
    s.value = _(Y), O(s.value, w, f.autoApply, f.modelAuto);
  }, pe = (Y) => {
    s.value = Y, w("auto-apply");
  };
  return {
    groupedYears: b,
    year: l,
    isDisabled: F,
    quarters: N,
    showYearPicker: k,
    modelValue: s,
    selectYear: R,
    toggleYearPicker: re,
    handleYearSelect: oe,
    handleYear: A,
    setHoverDate: (Y) => {
      m.value = Y;
    },
    selectQuarter: (Y, V, E) => {
      if (!E)
        return i.value[V].month = Pe(Ta(Y)), g.value.enabled ? J(Y) : v.value.enabled ? ee(Y) : pe(Y);
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
    } = Se(), r = gt(), { mapSlots: v } = At(), g = v(r, "yearMode"), {
      groupedYears: D,
      year: c,
      isDisabled: O,
      quarters: u,
      modelValue: _,
      showYearPicker: p,
      setHoverDate: M,
      selectQuarter: R,
      toggleYearPicker: b,
      handleYearSelect: k,
      handleYear: F
    } = Ol(l, s);
    return w({ getSidebarProps: () => ({
      modelValue: _,
      year: c,
      selectQuarter: R,
      handleYearSelect: k,
      handleYear: F
    }) }), (oe, A) => (C(), Re(na, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: _e(({ instances: m, wrapClass: o }) => [
        (C(!0), H(De, null, Oe(m, (y) => (C(), H("div", {
          key: y,
          class: ke(o)
        }, [
          Ae("div", {
            class: "dp-quarter-picker-wrap",
            style: Ze({ minHeight: `${t(i).modeHeight}px` })
          }, [
            oe.$slots["top-extra"] ? le(oe.$slots, "top-extra", {
              key: 0,
              value: t(_)
            }) : K("", !0),
            Ae("div", null, [
              at(Qa, et({ ref_for: !0 }, oe.$props, {
                items: t(D)(y),
                instance: y,
                "show-year-picker": t(p)[y],
                year: t(c)(y),
                "is-disabled": ($) => t(O)(y, $),
                onHandleYear: ($) => t(F)(y, $),
                onYearSelect: ($) => t(k)($, y),
                onToggleYearPicker: ($) => t(b)(y, $?.flow, $?.show)
              }), ze({ _: 2 }, [
                Oe(t(g), ($, B) => ({
                  name: $,
                  fn: _e((N) => [
                    le(oe.$slots, $, et({ ref_for: !0 }, N))
                  ])
                }))
              ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            Ae("div", xl, [
              (C(!0), H(De, null, Oe(t(u)(y), ($, B) => (C(), H("div", { key: B }, [
                Ae("button", {
                  type: "button",
                  class: ke(["dp--qr-btn", {
                    "dp--qr-btn-active": $.active,
                    "dp--qr-btn-between": $.isBetween,
                    "dp--qr-btn-disabled": $.disabled,
                    "dp--highlighted": $.highlighted
                  }]),
                  "data-test-id": $.value,
                  disabled: $.disabled,
                  onClick: (N) => t(R)($.value, y, $.disabled),
                  onMouseover: (N) => t(M)($.value)
                }, [
                  oe.$slots.quarter ? le(oe.$slots, "quarter", {
                    key: 0,
                    value: $.value,
                    text: $.text
                  }) : (C(), H(De, { key: 1 }, [
                    dt(Ue($.text), 1)
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
      defaults: { textInput: v, inline: g, config: D, ui: c, ariaLabels: O },
      setState: u
    } = Se(), { isMobile: _ } = ea(), { mapSlots: p } = At(), { handleEventPropagation: M, getElWithin: R, checkStopPropagation: b, checkKeyDown: k } = We(), { arrowRight: F, arrowLeft: re, arrowDown: oe, arrowUp: A } = yt(), m = Ye("inner-menu"), o = Ye("dp-menu"), y = Ye("dyn-cmp"), $ = ie(0), B = ie(!1), N = ie(!1), { flowStep: J, updateFlowStep: ee, childMount: pe, resetFlow: Z, handleFlow: ce } = Ln(y), Y = (a) => {
      N.value = !0, D.value.allowPreventDefault && a.preventDefault(), b(a, D.value, !0);
    };
    Ke(() => {
      B.value = !0, V(), globalThis.addEventListener("resize", V);
      const a = Ge(o);
      a && !v.value.enabled && !g.value.enabled && (u("menuFocused", !0), ae()), a && (a.addEventListener("pointerdown", Y), a.addEventListener("mousedown", Y)), document.addEventListener("mousedown", ne);
    }), Rt(() => {
      globalThis.removeEventListener("resize", V), document.removeEventListener("mousedown", ne);
      const a = Ge(o);
      a && (a.removeEventListener("pointerdown", Y), a.removeEventListener("mousedown", Y));
    });
    const V = () => {
      const a = Ge(m);
      a && ($.value = a.getBoundingClientRect().width);
    }, E = L(() => r.monthPicker ? Jr : r.yearPicker ? el : r.timePicker ? ml : r.quarterPicker ? Il : Yl), ae = () => {
      const a = Ge(o);
      a && a.focus({ preventScroll: !0 });
    }, ve = L(() => y.value?.getSidebarProps() || {}), Me = p(l, "action"), we = L(() => r.monthPicker || r.yearPicker ? p(l, "monthYear") : r.timePicker ? p(l, "timePicker") : p(l, "shared")), ye = L(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly,
      "dp-menu-loading": r.loading
    })), U = L(
      () => ({
        dp__menu: !0,
        dp__menu_index: !g.value.enabled,
        dp__relative: g.value.enabled,
        ...c.value.menu
      })
    ), z = (a) => {
      b(a, D.value, !0);
    }, se = (a) => {
      D.value.escClose && (s("close-picker"), M(a, D.value));
    }, q = (a) => {
      if (r.arrowNavigation) {
        if (a === qe.up) return A();
        if (a === qe.down) return oe();
        if (a === qe.left) return re();
        if (a === qe.right) return F();
      } else a === qe.left || a === qe.up ? I("handleArrow", qe.left, 0, a === qe.up) : I("handleArrow", qe.right, 0, a === qe.down);
    }, de = (a) => {
      u("shiftKeyInMenu", a.shiftKey), !r.hideMonthYearSelect && a.code === Be.tab && a.target.classList.contains("dp__menu") && i.shiftKeyInMenu && (a.preventDefault(), b(a, D.value, !0), s("close-picker"));
    }, me = (a) => {
      y.value?.toggleTimePicker(!1, !1), y.value?.toggleMonthPicker(!1, !1, a), y.value?.toggleYearPicker(!1, !1, a);
    }, ge = (a, x = 0) => a === "month" ? y.value?.toggleMonthPicker(!1, !0, x) : a === "year" ? y.value?.toggleYearPicker(!1, !0, x) : a === "time" ? y.value?.toggleTimePicker(!0, !1) : me(x), I = (a, ...x) => {
      y.value?.[a] && y.value?.[a](...x);
    }, h = () => {
      I("selectCurrentDate");
    }, W = (a, x) => {
      I("presetDate", mn(a), x);
    }, n = () => {
      I("clearHoverDate");
    }, P = (a, x) => {
      I("updateMonthYear", a, x);
    }, S = (a, x) => {
      a.preventDefault(), q(x);
    }, j = (a) => {
      if (de(a), a.key === Be.home || a.key === Be.end)
        return I(
          "selectWeekDate",
          a.key === Be.home,
          a.target.getAttribute("id")
        );
      switch ((a.key === Be.pageUp || a.key === Be.pageDown) && (a.shiftKey ? (I("changeYear", a.key === Be.pageUp), R(o.value, "overlay-year")?.focus()) : (I("changeMonth", a.key === Be.pageUp), R(o.value, a.key === Be.pageUp ? "action-prev" : "action-next")?.focus()), a.target.getAttribute("id") && o.value?.focus({ preventScroll: !0 })), a.key) {
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
      g.value.enabled && !g.value.input && !o.value?.contains(a.target) && N.value && (N.value = !1, s("menu-blur"));
    };
    return w({
      updateMonthYear: P,
      switchView: ge,
      onValueCleared: () => {
        y.value?.setStartTime?.();
      },
      handleFlow: ce
    }), (a, x) => (C(), H("div", {
      id: t(r).uid ? `dp-menu-${t(r).uid}` : void 0,
      ref: "dp-menu",
      tabindex: t(g).enabled ? void 0 : "0",
      role: t(g).enabled ? void 0 : "dialog",
      "aria-label": t(O)?.menu,
      class: ke(U.value),
      onMouseleave: n,
      onClick: z,
      onKeydown: j
    }, [
      (t(r).disabled || t(r).readonly) && t(g).enabled || t(r).loading ? (C(), H("div", {
        key: 0,
        class: ke(ye.value)
      }, [
        t(r).loading ? (C(), H("div", Vl, [...x[5] || (x[5] = [
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
        "data-dp-mobile": t(_),
        style: Ze({ "--dp-menu-width": `${$.value}px` })
      }, [
        a.$slots["left-sidebar"] ? (C(), H("div", Wl, [
          le(a.$slots, "left-sidebar", Je(st(ve.value)))
        ])) : K("", !0),
        t(r).presetDates.length ? (C(), H("div", {
          key: 1,
          class: ke({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(_)
        }, [
          (C(!0), H(De, null, Oe(t(r).presetDates, (d, X) => (C(), H(De, { key: X }, [
            d.slot ? le(a.$slots, d.slot, {
              key: 0,
              presetDate: W,
              label: d.label,
              value: d.value
            }) : (C(), H("button", {
              key: 1,
              type: "button",
              style: Ze(d.style || {}),
              class: ke(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
              "data-test-id": d.testId ?? void 0,
              "data-dp-mobile": t(_),
              onClick: Wt((G) => W(d.value, d.noTz), ["prevent"]),
              onKeydown: (G) => t(k)(G, () => W(d.value, d.noTz), !0)
            }, Ue(d.label), 47, Hl))
          ], 64))), 128))
        ], 10, Ll)) : K("", !0),
        Ae("div", zl, [
          (C(), Re(ka(E.value), {
            ref: "dyn-cmp",
            "flow-step": t(J),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": o.value,
            onMount: t(pe),
            onUpdateFlowStep: t(ee),
            onResetFlow: t(Z),
            onFocusMenu: ae,
            onSelectDate: x[0] || (x[0] = (d) => a.$emit("select-date")),
            onAutoApply: x[1] || (x[1] = (d) => a.$emit("auto-apply", d)),
            onTimeUpdate: x[2] || (x[2] = (d) => a.$emit("time-update"))
          }, ze({ _: 2 }, [
            Oe(we.value, (d, X) => ({
              name: d,
              fn: _e((G) => [
                le(a.$slots, d, Je(st({ ...G })))
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
        "menu-mount": B.value,
        "calendar-width": $.value,
        onClosePicker: x[3] || (x[3] = (d) => a.$emit("close-picker")),
        onSelectDate: x[4] || (x[4] = (d) => a.$emit("select-date")),
        onSelectNow: h
      }, ze({ _: 2 }, [
        Oe(t(Me), (d, X) => ({
          name: d,
          fn: _e((G) => [
            le(a.$slots, d, Je(st({ ...G })))
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
      defaults: { inline: v, config: g, textInput: D, range: c, multiDates: O, teleport: u, floatingConfig: _ }
    } = Se(), { clearArrowNav: p } = yt(), { validateDate: M, isValidTime: R } = ut(), { menuTransition: b, showTransition: k } = zt(), { isMobile: F } = ea(), { mapSlots: re } = At(), { findNextFocusableElement: oe, getNumVal: A } = We(), m = gt(), o = ie(!1), y = _a(r, "modelValue"), $ = _a(r, "timezone"), B = Ye("dp-menu-wrap"), N = Ye("dp-menu"), J = Ye("input-cmp"), ee = Ye("picker-wrapper"), pe = Ye("menu-arrow"), Z = ie(!1), ce = ie(!1), Y = ie(!1), V = ie(!1), E = (ue) => (_.value.arrow && (_.value.arrow === !0 ? ue.push(Aa({ element: pe })) : ue.push(Aa({ element: _.value.arrow }))), ue), { floatingStyles: ae, middlewareData: ve, placement: Me } = hn(
      J,
      B,
      {
        middleware: E([yn(_.value.offset), bn(), kn()]),
        whileElementsMounted(...ue) {
          return gn(...ue, { animationFrame: !0 });
        }
      }
    );
    Ke(() => {
      U(r.modelValue), tt().then(() => {
        v.value.enabled || globalThis.addEventListener("resize", W);
      }), v.value.enabled && (o.value = !0), globalThis.addEventListener("keyup", n), globalThis.addEventListener("keydown", P);
    }), Rt(() => {
      v.value.enabled || globalThis.removeEventListener("resize", W), globalThis.removeEventListener("keyup", n), globalThis.removeEventListener("keydown", P);
    });
    const we = re(m, "all", r.presetDates), ye = re(m, "input");
    it(
      [y, $],
      () => {
        U(y.value);
      },
      { deep: !0 }
    );
    const { parseExternalModelValue: U, emitModelValue: z, formatInputValue: se, checkBeforeEmit: q } = Vn(), de = L(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: v.value.enabled,
        "dp--flex-display-collapsed": V.value,
        dp__flex_display_with_input: v.value.input
      })
    ), me = L(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), ge = L(() => v.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker)), I = () => J.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, h = () => {
      o.value && g.value.closeOnScroll && G();
    }, W = () => {
      const ue = N.value?.$el.getBoundingClientRect().width ?? 0;
      V.value = document.body.offsetWidth <= ue;
    }, n = (ue) => {
      ue.key === "Tab" && !v.value.enabled && !r.teleport && g.value.tabOutClosesMenu && (ee.value.contains(document.activeElement) || G()), Y.value = ue.shiftKey;
    }, P = (ue) => {
      Y.value = ue.shiftKey;
    }, S = () => {
      !r.disabled && !r.readonly && (o.value = !0, o.value && f("open"), o.value || X(), U(r.modelValue));
    }, j = () => {
      l.value = "", X(), N.value?.onValueCleared(), J.value?.setParsedDate(null), f("update:model-value", null), f("cleared"), g.value.closeOnClearValue && G();
    }, ne = () => {
      const ue = i.value;
      return !ue || !Array.isArray(ue) && M(ue) ? !0 : Array.isArray(ue) ? O.value.enabled || ue.length === 2 && M(ue[0]) && M(ue[1]) ? !0 : c.value.partialRange && !r.timePicker ? M(ue[0]) : !1 : !1;
    }, Q = () => {
      q() && ne() ? (z(), G()) : f("invalid-select");
    }, a = (ue) => {
      x(), z(), g.value.closeOnAutoApply && !ue && G();
    }, x = () => {
      J.value && D.value.enabled && J.value.setParsedDate(i.value);
    }, d = (ue = !1) => {
      r.autoApply && R(i.value) && ne() && (c.value.enabled && Array.isArray(i.value) ? (c.value.partialRange || i.value.length === 2) && a(ue) : a(ue));
    }, X = () => {
      D.value.enabled || (i.value = null);
    }, G = (ue = !1) => {
      ue && i.value && g.value.setDateOnMenuClose && Q(), v.value.enabled || (o.value && (o.value = !1, s("menuFocused", !1), s("shiftKeyInMenu", !1), p(), f("closed"), l.value && U(y.value)), X(), f("blur"));
    }, Ce = (ue, Xe, nt = !1) => {
      if (!ue) {
        i.value = null;
        return;
      }
      const Ot = Array.isArray(ue) ? !ue.some((ca) => !M(ca)) : M(ue), bt = R(ue);
      Ot && bt ? (s("isTextInputDate", !0), i.value = ue, Xe ? (ce.value = nt, Q(), f("text-submit")) : r.autoApply && d(!0), tt().then(() => {
        s("isTextInputDate", !1);
      })) : f("invalid-date", ue);
    }, fe = () => {
      r.autoApply && R(i.value) && z(), x();
    }, He = () => o.value ? G() : S(), Ie = (ue) => {
      i.value = ue;
    }, vt = () => {
      D.value.enabled && (Z.value = !0, se()), f("focus");
    }, Ut = () => {
      D.value.enabled && (Z.value = !1, U(r.modelValue), ce.value && oe(ee.value, Y.value)?.focus()), f("blur");
    }, la = (ue) => {
      N.value && N.value.updateMonthYear(0, {
        month: A(ue.month),
        year: A(ue.year)
      });
    }, oa = (ue) => {
      U(ue ?? r.modelValue);
    }, sa = (ue, Xe) => {
      N.value?.switchView(ue, Xe);
    }, Yt = (ue, Xe) => g.value.onClickOutside ? g.value.onClickOutside(ue, Xe) : G(!0), ua = (ue = 0) => {
      N.value?.handleFlow(ue);
    }, ia = () => B;
    return pn(B, (ue) => Yt(ne, ue), {
      ignore: [J]
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
      "data-dp-mobile": t(F)
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
        class: ke({ "dp--menu-wrapper": !t(v).enabled, dp__outer_menu_wrap: !0 }),
        style: Ze(t(v).enabled ? void 0 : t(ae))
      }, [
        at(Ct, {
          name: t(b)(t(Me) === "top"),
          css: t(k) && !t(v).enabled
        }, {
          default: _e(() => [
            o.value ? (C(), Re(Ul, {
              key: 0,
              ref: "dp-menu",
              class: ke({ [me.value]: !0, "dp--menu-wrapper": t(r).teleport }),
              "no-overlay-focus": ge.value,
              collapse: V.value,
              "get-input-rect": I,
              onClosePicker: G,
              onSelectDate: Q,
              onAutoApply: d,
              onTimeUpdate: fe,
              onMenuBlur: Xe[1] || (Xe[1] = (nt) => t(f)("blur"))
            }, ze({ _: 2 }, [
              Oe(t(we), (nt, Ot) => ({
                name: nt,
                fn: _e((bt) => [
                  le(ue.$slots, nt, Je(st({ ...bt })))
                ])
              })),
              !t(v).enabled && !t(u).center && t(_).arrow === !0 ? {
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
    startTime: {},
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
    return w(Yr(r)), (v, g) => (C(), Re(Ql, { ref: "date-picker" }, ze({ _: 2 }, [
      Oe(i, (D, c) => ({
        name: D,
        fn: _e((O) => [
          le(v.$slots, D, Je(st(O)))
        ])
      }))
    ]), 1536));
  }
});
export {
  no as VueDatePicker
};
