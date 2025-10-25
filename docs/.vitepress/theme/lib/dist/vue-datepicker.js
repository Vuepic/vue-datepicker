import { h as Ne, reactive as Ft, ref as de, computed as z, watch as it, provide as nn, readonly as rn, inject as ln, nextTick as Xe, onMounted as He, onUnmounted as Ct, defineComponent as We, useTemplateRef as Ye, createElementBlock as K, openBlock as R, renderSlot as ue, createCommentVNode as j, unref as t, createElementVNode as Pe, normalizeClass as we, createBlock as Ce, withModifiers as Wt, createVNode as nt, normalizeProps as Ze, mergeProps as tt, Fragment as De, normalizeStyle as et, createTextVNode as ft, toDisplayString as ze, onBeforeUpdate as on, withDirectives as Xt, renderList as Oe, vShow as Jt, withCtx as Me, withKeys as sn, Transition as Yt, createSlots as Le, useSlots as yt, resolveDynamicComponent as wa, guardReactiveProps as ut, mergeDefaults as Oa, toValue as un, toRef as Ma, Teleport as cn } from "vue";
import { unrefElement as Ge, onClickOutside as dn } from "@vueuse/core";
import { useFloating as vn, autoUpdate as fn, offset as mn, flip as pn, shift as hn, arrow as _a } from "@floating-ui/vue";
import { set as Ae, setYear as st, parse as ka, getYear as ke, getMonth as Te, getSeconds as gt, getMinutes as mt, getHours as ct, isValid as Zt, addMonths as _t, subMonths as Lt, differenceInCalendarDays as gn, eachDayOfInterval as Ba, getDay as yn, isBefore as Rt, isAfter as Pt, isEqual as $t, format as ot, subDays as bn, addDays as ht, startOfWeek as Da, endOfWeek as xa, startOfMonth as kn, setMonth as wn, isDate as Dn, endOfYear as Ia, startOfYear as Vt, addYears as Ea, subYears as Va, differenceInYears as Mn, add as Na, sub as _n, setMilliseconds as An, setSeconds as Pn, getWeek as Tn, getISOWeek as $n, isSameQuarter as Aa, eachQuarterOfInterval as Sn, startOfQuarter as Rn, endOfQuarter as Pa, getQuarter as Ta } from "date-fns";
import { TZDate as Cn } from "@date-fns/tz";
import { TZDate as to } from "@date-fns/tz";
function Ht() {
  return Ne(
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
      Ne("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Ne("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ne("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ne("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function Yn() {
  return Ne(
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
      Ne("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Ne("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function Fa() {
  return Ne(
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
      Ne("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Wa() {
  return Ne(
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
      Ne("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function La() {
  return Ne(
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
      Ne("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Ne("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Ha() {
  return Ne(
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
      Ne("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Ka() {
  return Ne(
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
      Ne("path", {
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
}), pa = de(null), Gt = de(!1), ha = de(!1), ga = de(!1), ya = de(!1), Ke = de(0), Ve = de(0), bt = () => {
  const e = z(() => Gt.value ? [...xe.selectionGrid, xe.actionRow].filter((m) => m.length) : ha.value ? [
    ...xe.timePicker[0],
    ...xe.timePicker[1],
    ya.value ? [] : [pa.value],
    xe.actionRow
  ].filter((m) => m.length) : ga.value ? [...xe.monthPicker, xe.actionRow] : [xe.monthYear, ...xe.calendar, xe.time, xe.actionRow].filter((m) => m.length)), w = (m) => {
    Ke.value = m ? Ke.value + 1 : Ke.value - 1;
    let B = null;
    e.value[Ve.value] && (B = e.value[Ve.value][Ke.value]), !B && e.value[Ve.value + (m ? 1 : -1)] ? (Ve.value = Ve.value + (m ? 1 : -1), Ke.value = m ? 0 : e.value[Ve.value].length - 1) : B || (Ke.value = m ? Ke.value - 1 : Ke.value + 1);
  }, p = (m) => {
    if (Ve.value === 0 && !m || Ve.value === e.value.length && m) return;
    Ve.value = m ? Ve.value + 1 : Ve.value - 1, e.value[Ve.value] ? e.value[Ve.value] && !e.value[Ve.value][Ke.value] && Ke.value !== 0 && (Ke.value = e.value[Ve.value].length - 1) : Ve.value = m ? Ve.value - 1 : Ve.value + 1;
  }, r = (m) => {
    let B = null;
    e.value[Ve.value] && (B = e.value[Ve.value][Ke.value]), B ? B.focus({ preventScroll: !Gt.value }) : Ke.value = m ? Ke.value - 1 : Ke.value + 1;
  }, s = () => {
    w(!0), r(!0);
  }, l = () => {
    w(!1), r(!1);
  }, n = () => {
    p(!1), r(!0);
  }, o = () => {
    p(!0), r(!0);
  }, c = (m, B) => {
    xe[B] = m;
  }, S = (m, B) => {
    xe[B] = m;
  }, D = () => {
    Ke.value = 0, Ve.value = 0;
  };
  return {
    buildMatrix: c,
    buildMultiLevelMatrix: S,
    setTimePickerBackRef: (m) => {
      pa.value = m;
    },
    setSelectionGrid: (m) => {
      Gt.value = m, D(), m || (xe.selectionGrid = []);
    },
    setTimePicker: (m, B = !1) => {
      ha.value = m, ya.value = B, D(), m || (xe.timePicker[0] = [], xe.timePicker[1] = []);
    },
    setTimePickerElements: (m, B = 0) => {
      xe.timePicker[B] = m;
    },
    arrowRight: s,
    arrowLeft: l,
    arrowUp: n,
    arrowDown: o,
    clearArrowNav: () => {
      xe.monthYear = [], xe.calendar = [], xe.time = [], xe.actionRow = [], xe.selectionGrid = [], xe.timePicker[0] = [], xe.timePicker[1] = [], Gt.value = !1, ha.value = !1, ya.value = !1, ga.value = !1, D(), pa.value = null;
    },
    setMonthPicker: (m) => {
      ga.value = m, D();
    },
    refSets: xe
    // exposed for testing
  };
};
var lt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(lt || {}), At = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(At || {}), Qe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Qe || {});
const On = ["timestamp", "date", "iso"];
var qe = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(qe || {}), Ie = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Ie || {}), St = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(St || {});
const Bn = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: w, isValidDate: p } = rt(), { convertType: r, errorMapper: s } = Fe(), {
    getDate: l,
    rootEmit: n,
    state: o,
    rootProps: c,
    inputValue: S,
    defaults: { textInput: D, range: $, multiDates: g, timeConfig: d, formats: Y },
    modelValue: u,
    updateTime: I
  } = $e(), { setTime: m, getWeekFromDate: B } = je(), { formatSelectedDate: V, formatForTextInput: C } = Tt();
  it(
    u,
    (b, A) => {
      n("internal-model-change", u.value), JSON.stringify(A ?? {}) !== JSON.stringify(b ?? {}) && I();
    },
    { deep: !0 }
  ), it($, (b, A) => {
    b.enabled !== A.enabled && (u.value = null);
  }), it(
    () => Y.value.input,
    () => {
      ve();
    }
  );
  const N = (b) => b ? c.modelType ? be(b) : {
    hours: ct(b),
    minutes: mt(b),
    seconds: d.value.enableSeconds ? gt(b) : 0
  } : null, q = (b) => c.modelType ? be(b) : { month: Te(b), year: ke(b) }, M = (b) => Array.isArray(b) ? g.value.enabled ? b.map((A) => y(A, st(l(), A))) : w(
    () => [
      st(l(), b[0]),
      b[1] ? st(l(), b[1]) : e($.value.partialRange)
    ],
    $.value.enabled
  ) : st(l(), +b), y = (b, A) => (typeof b == "string" || typeof b == "number") && c.modelType ? ye(b) : A, v = (b) => Array.isArray(b) ? [
    y(b[0], m(b[0])),
    y(b[1], m(b[1]))
  ] : y(b, m(b)), k = (b) => {
    const A = Ae(l(), { date: 1 });
    return Array.isArray(b) ? g.value.enabled ? b.map(
      (ie) => y(ie, Ae(A, { month: +ie.month, year: +ie.year }))
    ) : w(
      () => [
        y(b[0], Ae(A, { month: +b[0].month, year: +b[0].year })),
        y(
          b[1],
          b[1] ? Ae(A, { month: +b[1].month, year: +b[1].year }) : e($.value.partialRange)
        )
      ],
      $.value.enabled
    ) : y(b, Ae(A, { month: +b.month, year: +b.year }));
  }, F = (b) => {
    if (Array.isArray(b))
      return b.map((A) => ye(A));
    throw new Error(s.dateArr("multi-dates"));
  }, U = (b) => {
    if (Array.isArray(b) && $.value.enabled) {
      const A = b[0], ie = b[1];
      return [
        l(Array.isArray(A) ? A[0] : null),
        Array.isArray(ie) && ie.length ? l(ie[0]) : null
      ];
    }
    return l(b[0]);
  }, X = (b) => c.modelAuto ? Array.isArray(b) ? [ye(b[0]), ye(b[1])] : c.autoApply ? [ye(b)] : [ye(b), null] : Array.isArray(b) ? w(
    () => b[1] ? [
      ye(b[0]),
      b[1] ? ye(b[1]) : e($.value.partialRange)
    ] : [ye(b[0])],
    $.value.enabled
  ) : ye(b), le = () => {
    Array.isArray(u.value) && $.value.enabled && u.value.length === 1 && u.value.push(e($.value.partialRange));
  }, fe = () => {
    const b = u.value;
    return [
      be(b[0]),
      b[1] ? be(b[1]) : e($.value.partialRange)
    ];
  }, ee = () => Array.isArray(u.value) ? u.value[1] ? fe() : be(r(u.value[0])) : [], te = () => (u.value || []).map((b) => be(b)), Q = (b = !1) => (b || le(), c.modelAuto ? ee() : g.value.enabled ? te() : Array.isArray(u.value) ? w(() => fe(), $.value.enabled) : be(r(u.value))), W = (b) => !b || Array.isArray(b) && !b.length ? null : c.timePicker ? v(r(b)) : c.monthPicker ? k(r(b)) : c.yearPicker ? M(r(b)) : g.value.enabled ? F(r(b)) : c.weekPicker ? U(r(b)) : X(r(b)), x = (b) => {
    if (o.isTextInputDate) return;
    const A = W(b);
    p(r(A)) ? (u.value = r(A), ve()) : (u.value = null, S.value = "");
  }, re = () => u.value ? g.value.enabled ? u.value.map((b) => V(b)).join("; ") : D.value.enabled ? C() : V(u.value) : "", ve = () => {
    S.value = re();
  }, ye = (b) => c.modelType ? On.includes(c.modelType) ? l(b) : c.modelType === "format" && typeof Y.value.input == "string" ? ka(b, Y.value.input, l(), { locale: c.locale }) : ka(b, c.modelType, l(), { locale: c.locale }) : l(b), be = (b) => b ? c.modelType ? c.modelType === "timestamp" ? +b : c.modelType === "iso" ? b.toISOString() : c.modelType === "format" && typeof Y.value.input == "string" ? V(b) : V(b, c.modelType) : b : "", _e = (b) => {
    n("update:model-value", b);
  }, ae = (b) => Array.isArray(u.value) ? g.value.enabled ? u.value.map((A) => b(A)) : [b(u.value[0]), u.value[1] ?? null] : b(r(u.value)), pe = () => {
    if (Array.isArray(u.value)) {
      const b = B(u.value[0], c.weekStart), A = u.value[1] ? B(u.value[1], c.weekStart) : [];
      return [b.map((ie) => l(ie)), A.map((ie) => l(ie))];
    }
    return B(u.value, c.weekStart).map((b) => l(b));
  }, G = (b) => _e(r(ae(b))), H = () => n("update:model-value", pe());
  return {
    checkBeforeEmit: () => u.value ? $.value.enabled ? $.value.partialRange ? u.value.length >= 1 : u.value.length === 2 : !!u.value : !1,
    parseExternalModelValue: x,
    formatInputValue: ve,
    emitModelValue: () => (ve(), c.monthPicker ? G(q) : c.timePicker ? G(N) : c.yearPicker ? G(ke) : c.weekPicker ? H() : _e(Q()))
  };
}, vt = [
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
], $a = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], xn = {
  all: () => vt,
  root: () => vt.concat($a),
  monthYear: () => vt.filter((e) => e.use.includes("month-year")),
  input: () => $a,
  timePicker: () => vt.filter((e) => e.use.includes("time")),
  action: () => vt.filter((e) => e.use.includes("action")),
  calendar: () => vt.filter((e) => e.use.includes("calendar")),
  menu: () => vt.filter((e) => e.use.includes("menu")),
  shared: () => vt.filter((e) => e.use.includes("shared")),
  yearMode: () => vt.filter((e) => e.use.includes("year-mode"))
}, kt = () => ({
  mapSlots: (w, p, r) => {
    const s = [];
    for (const l of xn[p]())
      w[l.name] && s.push(l.name);
    if (r?.length)
      for (const l of r)
        l.slot && s.push(l.slot);
    return s;
  }
}), za = Symbol("ContextKey"), In = (e, w) => {
  const { setTimeModelValue: p } = Fe(), r = Pr(e), s = de(null), l = Ft({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1
  }), n = r.getDate(/* @__PURE__ */ new Date()), o = de(""), c = de([{ month: Te(n), year: ke(n) }]), S = Ft({ hours: 0, minutes: 0, seconds: 0 });
  p(S, null, n, r.range.value.enabled);
  const D = z({
    get: () => s.value,
    set: (u) => {
      !e.readonly && !e.disabled && (s.value = u);
    }
  }), $ = z(
    () => (u) => c.value[u] ? c.value[u].month : 0
  ), g = z(
    () => (u) => c.value[u] ? c.value[u].year : 0
  ), d = (u, I) => {
    l[u] = I;
  }, Y = () => {
    p(S, D.value, n, r.range.value.enabled);
  };
  nn(za, {
    rootProps: e,
    defaults: r,
    modelValue: D,
    state: rn(l),
    rootEmit: w,
    calendars: c,
    month: $,
    year: g,
    time: S,
    today: n,
    inputValue: o,
    setState: d,
    updateTime: Y,
    getDate: r.getDate
  });
}, $e = () => {
  const e = ln(za);
  if (!e)
    throw new Error("Can't use context");
  return e;
}, Kt = () => {
  const {
    defaults: { transitions: e }
  } = $e(), w = z(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), p = z(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: w, showTransition: !!e.value, menuTransition: p };
}, zt = (e) => {
  const {
    today: w,
    time: p,
    modelValue: r,
    defaults: { range: s }
  } = $e(), { setTimeModelValue: l } = Fe();
  it(
    s,
    (n, o) => {
      n.enabled !== o.enabled && l(p, r.value, w, s.value.enabled);
    },
    { deep: !0 }
  ), it(
    r,
    (n, o) => {
      e && JSON.stringify(n ?? {}) !== JSON.stringify(o ?? {}) && e();
    },
    { deep: !0 }
  );
}, rt = () => {
  const {
    defaults: { safeDates: e, range: w, multiDates: p, filters: r, timeConfig: s },
    rootProps: l,
    getDate: n
  } = $e(), { getMapKeyType: o, getMapDate: c, errorMapper: S, convertType: D } = Fe(), { isDateBefore: $, isDateAfter: g, isDateEqual: d, resetDate: Y, getDaysInBetween: u, setTimeValue: I, getTimeObj: m, setTime: B } = je(), V = (f) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(n(f)) : !!c(f, e.value.disabledDates) : !1, C = (f) => e.value.maxDate ? l.yearPicker ? ke(f) > ke(e.value.maxDate) : g(f, e.value.maxDate) : !1, N = (f) => e.value.minDate ? l.yearPicker ? ke(f) < ke(e.value.minDate) : $(f, e.value.minDate) : !1, q = (f) => {
    if (!f) return !1;
    const P = C(f), E = N(f), L = V(f), a = r.value.months.map((Se) => +Se).includes(Te(f)), T = r.value.weekDays?.length ? r.value.weekDays.some((Se) => +Se === yn(f)) : !1, i = F(f), J = ke(f), Z = J < +l.yearRange[0] || J > +l.yearRange[1];
    return !(P || E || L || a || Z || T || i);
  }, M = (f, P) => $(...H(e.value.minDate, f, P)) || d(...H(e.value.minDate, f, P)), y = (f, P) => g(...H(e.value.maxDate, f, P)) || d(...H(e.value.maxDate, f, P)), v = (f, P, E) => {
    let L = !1;
    return e.value.maxDate && E && y(f, P) && (L = !0), e.value.minDate && !E && M(f, P) && (L = !0), L;
  }, k = (f, P, E, L) => {
    let O = !1;
    return L && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? O = v(f, P, E) : (e.value.minDate && M(f, P) || e.value.maxDate && y(f, P)) && (O = !0) : O = !0, O;
  }, F = (f) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !c(
    f,
    e.value.allowedDates,
    o(l.monthPicker, l.yearPicker)
  ) : !1, U = (f) => !q(f), X = (f) => w.value.noDisabledRange ? !Ba({ start: f[0], end: f[1] }).some((E) => U(E)) : !0, le = (f) => {
    if (f) {
      const P = ke(f);
      return P >= +l.yearRange[0] && P <= l.yearRange[1];
    }
    return !0;
  }, fe = (f, P) => !!(Array.isArray(f) && f[P] && (w.value.maxRange || w.value.minRange) && le(f[P])), ee = (f, P, E = 0) => {
    if (fe(P, E) && le(f)) {
      const L = gn(f, P[E]), O = u(P[E], f), a = O.length === 1 ? 0 : O.filter((i) => U(i)).length, T = Math.abs(L) - (w.value.minMaxRawRange ? 0 : a);
      if (w.value.minRange && w.value.maxRange)
        return T >= +w.value.minRange && T <= +w.value.maxRange;
      if (w.value.minRange) return T >= +w.value.minRange;
      if (w.value.maxRange) return T <= +w.value.maxRange;
    }
    return !0;
  }, te = () => !s.value.enableTimePicker || l.monthPicker || l.yearPicker || s.value.ignoreTimeValidation, Q = (f) => Array.isArray(f) ? [f[0] ? I(f[0]) : null, f[1] ? I(f[1]) : null] : I(f), W = (f, P, E) => P ? f.find(
    (L) => +L.hours === ct(P) && L.minutes === "*" ? !0 : +L.minutes === mt(P) && +L.hours === ct(P)
  ) && E : !1, x = (f, P, E) => {
    const [L, O] = f, [a, T] = P;
    return !W(L, a, E) && !W(O, T, E) && E;
  }, re = (f, P) => {
    const E = Array.isArray(P) ? P : [P];
    return Array.isArray(l.disabledTimes) ? Array.isArray(l.disabledTimes[0]) ? x(l.disabledTimes, E, f) : !E.some((L) => W(l.disabledTimes, L, f)) : f;
  }, ve = (f, P) => {
    const E = Array.isArray(P) ? [m(P[0]), P[1] ? m(P[1]) : void 0] : m(P), L = !l.disabledTimes(E);
    return f && L;
  }, ye = (f, P) => l.disabledTimes ? Array.isArray(l.disabledTimes) ? re(P, f) : ve(P, f) : P, be = (f) => {
    let P = !0;
    if (!f || te()) return !0;
    const E = !e.value.minDate && !e.value.maxDate ? Q(f) : f;
    return (l.maxTime || e.value.maxDate) && (P = he(
      l.maxTime,
      e.value.maxDate,
      "max",
      D(E),
      P
    )), (l.minTime || e.value.minDate) && (P = he(
      l.minTime,
      e.value.minDate,
      "min",
      D(E),
      P
    )), ye(f, P);
  }, _e = (f) => {
    if (!l.monthPicker) return !0;
    let P = !0;
    const E = n(Y(f));
    if (e.value.minDate && e.value.maxDate) {
      const L = n(Y(e.value.minDate)), O = n(Y(e.value.maxDate));
      return g(E, L) && $(E, O) || d(E, L) || d(E, O);
    }
    if (e.value.minDate) {
      const L = n(Y(e.value.minDate));
      P = g(E, L) || d(E, L);
    }
    if (e.value.maxDate) {
      const L = n(Y(e.value.maxDate));
      P = $(E, L) || d(E, L);
    }
    return P;
  }, ae = z(() => (f) => !s.value.enableTimePicker || s.value.ignoreTimeValidation ? !0 : be(f)), pe = z(() => (f) => l.monthPicker ? Array.isArray(f) && (w.value.enabled || p.value.enabled) ? !f.filter((E) => !_e(E)).length : _e(f) : !0), G = (f, P, E) => {
    if (!P || E && !e.value.maxDate || !E && !e.value.minDate) return !1;
    const L = E ? _t(f, 1) : Lt(f, 1), O = [Te(L), ke(L)];
    return E ? !y(...O) : !M(...O);
  }, H = (f, P, E) => [Ae(n(f), { date: 1 }), Ae(n(), { month: P, year: E, date: 1 })], se = (f, P, E, L) => {
    if (!f) return !0;
    if (L) {
      const O = E === "max" ? Rt(f, P) : Pt(f, P), a = { seconds: 0, milliseconds: 0 };
      return O || $t(Ae(f, a), Ae(P, a));
    }
    return E === "max" ? f.getTime() <= P.getTime() : f.getTime() >= P.getTime();
  }, he = (f, P, E, L, O) => {
    if (Array.isArray(L)) {
      const T = b(f, L[0], P), i = b(f, L[1], P);
      return se(L[0], T, E, !!P) && se(L[1], i, E, !!P) && O;
    }
    const a = b(f, L, P);
    return se(L, a, E, !!P) && O;
  }, b = (f, P, E) => f ? B(f, P) : n(E ?? P);
  return {
    isDisabled: U,
    validateDate: q,
    validateMonthYearInRange: k,
    isDateRangeAllowed: X,
    checkMinMaxRange: ee,
    isValidTime: be,
    validateMonthYear: G,
    validateMinDate: M,
    validateMaxDate: y,
    isValidDate: (f) => Array.isArray(f) ? Zt(f[0]) && (f[1] ? Zt(f[1]) : !0) : f ? Zt(f) : !1,
    checkPartialRangeValue: (f) => {
      if (f) return null;
      throw new Error(S.prop("partial-range"));
    },
    checkRangeEnabled: (f, P) => {
      if (P) return f();
      throw new Error(S.prop("range"));
    },
    checkMinMaxValue: (f, P, E) => {
      const L = E != null, O = P != null;
      if (!L && !O) return !1;
      const a = +E, T = +P;
      return L && O ? +f > a || +f < T : L ? +f > a : O ? +f < T : !1;
    },
    isTimeValid: ae,
    isMonthValid: pe
  };
}, En = (e) => {
  const {
    rootEmit: w,
    rootProps: p,
    defaults: { timeConfig: r, flow: s }
  } = $e(), l = de(0), n = Ft({
    [At.timePicker]: !r.value.enableTimePicker || p.timePicker || p.monthPicker,
    [At.calendar]: !1,
    [At.header]: !1
  }), o = z(() => p.monthPicker || p.timePicker), c = (d) => {
    if (s.value?.steps?.length) {
      if (!d && o.value) return g();
      n[d] = !0, Object.keys(n).filter((Y) => !n[Y]).length || g();
    }
  }, S = () => {
    s.value?.steps?.length && l.value !== -1 && (l.value += 1, w("flow-step", l.value), g()), s.value?.steps?.length === l.value && Xe().then(() => D());
  }, D = () => {
    l.value = -1;
  }, $ = (d, Y, ...u) => {
    s.value?.steps[l.value] === d && e.value && e.value[Y]?.(...u);
  }, g = (d = 0) => {
    d && (l.value += d), $(Qe.month, "toggleMonthPicker", !0), $(Qe.year, "toggleYearPicker", !0), $(Qe.calendar, "toggleTimePicker", !1, !0), $(Qe.time, "toggleTimePicker", !0, !0);
    const Y = s.value?.steps[l.value];
    (Y === Qe.hours || Y === Qe.minutes || Y === Qe.seconds) && $(Y, "toggleTimePicker", !0, !0, Y);
  };
  return { childMount: c, updateFlowStep: S, resetFlow: D, handleFlow: g, flowStep: l };
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
    let s;
    if (r === "formatting" && e.formattingValues) {
      const n = e.defaultFormattingWidth || e.defaultWidth, o = p?.width ? String(p.width) : n;
      s = e.formattingValues[o] || e.formattingValues[n];
    } else {
      const n = e.defaultWidth, o = p?.width ? String(p.width) : e.defaultWidth;
      s = e.values[o] || e.values[n];
    }
    const l = e.argumentCallback ? e.argumentCallback(w) : w;
    return s[l];
  };
}
function Et(e) {
  return (w, p = {}) => {
    const r = p.width, s = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], l = w.match(s);
    if (!l)
      return null;
    const n = l[0], o = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(o) ? Nn(o, ($) => $.test(n)) : (
      // [TODO] -- I challenge you to fix the type
      Vn(o, ($) => $.test(n))
    );
    let S;
    S = e.valueCallback ? e.valueCallback(c) : c, S = p.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      p.valueCallback(S)
    ) : S;
    const D = w.slice(n.length);
    return { value: S, rest: D };
  };
}
function Vn(e, w) {
  for (const p in e)
    if (Object.prototype.hasOwnProperty.call(e, p) && w(e[p]))
      return p;
}
function Nn(e, w) {
  for (let p = 0; p < e.length; p++)
    if (w(e[p]))
      return p;
}
function Fn(e) {
  return (w, p = {}) => {
    const r = w.match(e.matchPattern);
    if (!r) return null;
    const s = r[0], l = w.match(e.parsePattern);
    if (!l) return null;
    let n = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    n = p.valueCallback ? p.valueCallback(n) : n;
    const o = w.slice(s.length);
    return { value: n, rest: o };
  };
}
const Wn = {
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
}, Ln = (e, w, p) => {
  let r;
  const s = Wn[e];
  return typeof s == "string" ? r = s : w === 1 ? r = s.one : r = s.other.replace("{{count}}", w.toString()), p?.addSuffix ? p.comparison && p.comparison > 0 ? "in " + r : r + " ago" : r;
}, Hn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Kn = (e, w, p, r) => Hn[e], zn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, jn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Un = {
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
}, qn = {
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
}, Qn = {
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
}, Gn = {
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
}, Xn = (e, w) => {
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
}, Jn = {
  ordinalNumber: Xn,
  era: It({
    values: zn,
    defaultWidth: "wide"
  }),
  quarter: It({
    values: jn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: It({
    values: Un,
    defaultWidth: "wide"
  }),
  day: It({
    values: qn,
    defaultWidth: "wide"
  }),
  dayPeriod: It({
    values: Qn,
    defaultWidth: "wide",
    formattingValues: Gn,
    defaultFormattingWidth: "wide"
  })
}, Zn = /^(\d+)(th|st|nd|rd)?/i, er = /\d+/i, tr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ar = {
  any: [/^b/i, /^(a|c)/i]
}, nr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, rr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, lr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, or = {
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
}, sr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ur = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ir = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, cr = {
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
}, dr = {
  ordinalNumber: Fn({
    matchPattern: Zn,
    parsePattern: er,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Et({
    matchPatterns: tr,
    defaultMatchWidth: "wide",
    parsePatterns: ar,
    defaultParseWidth: "any"
  }),
  quarter: Et({
    matchPatterns: nr,
    defaultMatchWidth: "wide",
    parsePatterns: rr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Et({
    matchPatterns: lr,
    defaultMatchWidth: "wide",
    parsePatterns: or,
    defaultParseWidth: "any"
  }),
  day: Et({
    matchPatterns: sr,
    defaultMatchWidth: "wide",
    parsePatterns: ur,
    defaultParseWidth: "any"
  }),
  dayPeriod: Et({
    matchPatterns: ir,
    defaultMatchWidth: "any",
    parsePatterns: cr,
    defaultParseWidth: "any"
  })
}, vr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, fr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, mr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, pr = {
  date: ba({
    formats: vr,
    defaultWidth: "full"
  }),
  time: ba({
    formats: fr,
    defaultWidth: "full"
  }),
  dateTime: ba({
    formats: mr,
    defaultWidth: "full"
  })
}, hr = {
  code: "en-US",
  formatDistance: Ln,
  formatLong: pr,
  formatRelative: Kn,
  localize: Jn,
  match: dr,
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
}, gr = {
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
}, yr = {
  dates: [],
  years: [],
  months: [],
  quarters: [],
  weeks: [],
  weekdays: [],
  options: { highlightDisabled: !1 }
}, br = {
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  selectBtnLabel: "Select",
  cancelBtnLabel: "Cancel",
  nowBtnLabel: "Now"
}, kr = {
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
}, wr = {
  weekDays: [],
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] }
}, Dr = {
  month: "LLL",
  year: "yyyy",
  weekDay: "EEEEEE",
  quarter: "MMMM",
  input: void 0,
  preview: void 0
}, Mr = {
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
}, _r = {
  flowStep: 0,
  menuWrapRef: null,
  collapse: !1
}, Ar = {
  weekStart: 1,
  yearRange: () => [1900, 2100],
  ui: () => ({}),
  locale: () => hr,
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
}, Pr = (e) => {
  const { getMapKey: w, getMapKeyType: p, getTimeObjFromCurrent: r } = Fe();
  function s(te, Q) {
    let W;
    return e.timezone ? W = new Cn(te ?? /* @__PURE__ */ new Date(), e.timezone) : W = te ? new Date(te) : /* @__PURE__ */ new Date(), Q ? Ae(W, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : W;
  }
  const l = () => {
    const te = X.value.enableSeconds ? ":ss" : "", Q = X.value.enableMinutes ? ":mm" : "";
    return X.value.is24 ? `HH${Q}${te}` : `hh${Q}${te} aa`;
  }, n = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? l() : e.weekPicker ? `${q.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : X.value.enableTimePicker ? `MM/dd/yyyy, ${l()}` : "MM/dd/yyyy", o = (te) => r(s(), te, X.value.enableSeconds), c = () => v.value.enabled ? X.value.startTime && Array.isArray(X.value.startTime) ? [o(X.value.startTime[0]), o(X.value.startTime[1])] : null : X.value.startTime && !Array.isArray(X.value.startTime) ? o(X.value.startTime) : null, S = (te) => te ? typeof te == "boolean" ? te ? 2 : 0 : Math.max(+te, 2) : 0, D = (te) => {
    const Q = p(e.monthPicker, e.yearPicker);
    return new Map(
      te.map((W) => {
        const x = s(W, $.value);
        return [w(x, Q), x];
      })
    );
  }, $ = z(() => e.monthPicker || e.yearPicker || e.quarterPicker), g = z(() => {
    const te = typeof e.multiCalendars == "object" && e.multiCalendars, Q = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...Q, count: S(!1) };
    const W = te ? e.multiCalendars : {}, x = te ? W.count ?? !0 : e.multiCalendars, re = S(x);
    return Object.assign(Q, W, { count: re });
  }), d = z(() => c()), Y = z(() => ({ ...kr, ...e.ariaLabels })), u = z(() => ({ ...wr, ...e.filters })), I = z(() => typeof e.transitions == "boolean" ? e.transitions ? Ca : !1 : { ...Ca, ...e.transitions }), m = z(() => ({ ...br, ...e.actionRow })), B = z(() => typeof e.textInput == "object" ? {
    ...Ra,
    format: n(),
    pattern: n(),
    ...e.textInput,
    enabled: !0
  } : {
    ...Ra,
    format: n(),
    pattern: n(),
    enabled: e.textInput
  }), V = z(() => {
    const te = { input: !1 };
    return typeof e.inline == "object" ? { ...te, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...te
    };
  }), C = z(() => ({ ...gr, ...e.config })), N = z(() => typeof e.highlight == "function" ? e.highlight : {
    ...yr,
    ...e.highlight
  }), q = z(() => typeof e.weekNumbers == "object" ? {
    type: e.weekNumbers?.type ?? "local",
    hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? !1
  } : {
    type: e.weekNumbers,
    hideOnOffsetDates: !1
  }), M = z(() => typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
    enabled: !!e.multiDates,
    limit: e.multiDates?.limit ? +e.multiDates.limit : null,
    dragSelect: e.multiDates?.dragSelect ?? !0
  }), y = z(() => ({
    minDate: e.minDate ? s(e.minDate) : null,
    maxDate: e.maxDate ? s(e.maxDate) : null,
    disabledDates: Array.isArray(e.disabledDates) ? D(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? D(e.allowedDates) : null,
    highlight: typeof N.value == "object" && Array.isArray(N.value.dates) ? D(N.value.dates) : N.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((te) => {
        const Q = s(te.date);
        return [w(Q, St.DATE), te];
      })
    ) : null
  })), v = z(() => typeof e.range == "object" ? { enabled: !0, ...Sa, ...e.range } : {
    enabled: e.range,
    ...Sa
  }), k = z(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((Q) => {
        const W = Q, x = e.ui[W];
        if (W === "dayClass") return [W, e.ui[W]];
        const re = typeof e.ui[W] == "string" ? { [x]: !0 } : Object.fromEntries(x.map((ve) => [ve, !0]));
        return [Q, re];
      })
    )
  })), F = z(() => ({
    ...Dr,
    ...e.formats,
    input: e.formats?.input ?? n(),
    preview: e.formats?.preview ?? n()
  })), U = z(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), X = z(() => ({ ...Mr, ...e.timeConfig })), le = z(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), fe = z(() => {
    const te = B.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Ya, inputmode: te, ...e.inputAttrs } : { ...Ya, inputmode: te };
  }), ee = z(() => ({
    offset: e.floating?.offset ?? 10,
    arrow: e.floating?.arrow ?? !0,
    strategy: e.floating?.strategy ?? void 0,
    placement: e.floating?.placement ?? void 0
  }));
  return {
    transitions: I,
    multiCalendars: g,
    startTime: d,
    ariaLabels: Y,
    filters: u,
    actionRow: m,
    textInput: B,
    inline: V,
    config: C,
    highlight: N,
    weekNumbers: q,
    range: v,
    safeDates: y,
    multiDates: M,
    ui: k,
    formats: F,
    teleport: U,
    timeConfig: X,
    flow: le,
    inputAttrs: fe,
    floatingConfig: ee,
    getDate: s
  };
}, Fe = () => {
  const e = (C, N) => ot(C, N ?? St.DATE), w = (C, N) => C ? St.MONTH_AND_YEAR : N ? St.YEAR : St.DATE, p = (C, N, q) => N.get(e(C, q)), r = (C) => C, s = (C) => C === 0 ? C : !C || Number.isNaN(+C) ? null : +C, l = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), n = (C, N) => {
    let q = [...document.querySelectorAll(l())];
    q = q.filter((y) => !C.contains(y) || "datepicker-instance" in y.dataset);
    const M = q.indexOf(C);
    if (M >= 0 && (N ? M - 1 >= 0 : M + 1 <= q.length))
      return q[M + (N ? -1 : 1)];
  }, o = (C) => String(C).padStart(2, "0"), c = (C, N) => C?.querySelector(`[data-dp-element="${N}"]`), S = (C, N, q = !1) => {
    C && N.allowStopPropagation && (q && C.stopImmediatePropagation(), C.stopPropagation());
  }, D = (C, N, q = !1, M) => {
    if (C.key === Ie.enter || C.key === Ie.space)
      return q && C.preventDefault(), N();
    if (M) return M(C);
  }, $ = (C, N) => {
    N.allowStopPropagation && C.stopPropagation(), N.allowPreventDefault && C.preventDefault();
  }, g = (C) => {
    if (C)
      return [...C.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, d = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, Y = (C) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][C], u = (C) => {
    const N = [], q = (M) => M.filter((y) => !!y);
    for (let M = 0; M < C.length; M += 3) {
      const y = [C[M], C[M + 1], C[M + 2]];
      N.push(q(y));
    }
    return N;
  }, I = {
    prop: (C) => `"${C}" prop must be enabled!`,
    dateArr: (C) => `You need to use array as "model-value" binding in order to support "${C}"`
  }, m = (C, N, q, M) => {
    const y = {
      hours: ct,
      minutes: mt,
      seconds: gt
    };
    if (!N) return M ? [y[C](q), y[C](q)] : y[C](q);
    if (Array.isArray(N)) {
      const v = N[0] ?? q, k = N[1] ?? q;
      return [y[C](v), y[C](k)];
    }
    return y[C](N);
  };
  return {
    getMapKey: e,
    getMapKeyType: w,
    getMapDate: p,
    convertType: r,
    getNumVal: s,
    findNextFocusableElement: n,
    padZero: o,
    getElWithin: c,
    checkStopPropagation: S,
    checkKeyDown: D,
    handleEventPropagation: $,
    findFocusableEl: g,
    isTouchDevice: d,
    hoursToAmPmHours: Y,
    getGroupedList: u,
    setTimeModelValue: (C, N, q, M) => {
      C.hours = m("hours", N, q, M), C.minutes = m("minutes", N, q, M), C.seconds = m("seconds", N, q, M);
    },
    getTimeObjFromCurrent: (C, N, q) => {
      const M = {
        hours: ct(C),
        minutes: mt(C),
        seconds: q ? gt(C) : 0
      };
      return Object.assign(M, N);
    },
    errorMapper: I
  };
}, je = () => {
  const { getDate: e } = $e(), { getMapDate: w, getGroupedList: p } = Fe(), r = (v, k) => {
    if (!v) return e();
    const F = e(v), U = Ae(F, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return k ? kn(U) : U;
  }, s = (v, k) => {
    const F = e(k);
    return Ae(F, {
      hours: +(v.hours ?? ct(F)),
      minutes: +(v.minutes ?? mt(F)),
      seconds: +(v.seconds ?? gt(F)),
      milliseconds: 0
    });
  }, l = (v, k) => {
    const F = Da(v, { weekStartsOn: +k }), U = xa(v, { weekStartsOn: +k });
    return [F, U];
  }, n = (v, k) => !v || !k ? !1 : Rt(r(v), r(k)), o = (v, k) => !v || !k ? !1 : $t(r(v), r(k)), c = (v, k) => !v || !k ? !1 : Pt(r(v), r(k)), S = (v, k, F) => v?.[0] && v?.[1] ? c(F, v[0]) && n(F, v[1]) : v?.[0] && k ? c(F, v[0]) && n(F, k) || n(F, v[0]) && c(F, k) : !1, D = (v, k) => {
    const F = c(v, k) ? k : v, U = c(k, v) ? k : v;
    return Ba({ start: F, end: U });
  }, $ = (v) => `dp-${ot(v, "yyyy-MM-dd")}`, g = (v) => r(Ae(e(v), { date: 1 })), d = (v, k) => {
    if (k) {
      const F = ke(e(k));
      if (F > v) return 12;
      if (F === v) return Te(e(k));
    }
  }, Y = (v, k) => {
    if (k) {
      const F = ke(e(k));
      return F < v ? -1 : F === v ? Te(e(k)) : void 0;
    }
  }, u = (v) => {
    if (v) return ke(e(v));
  }, I = (v) => ({
    hours: ct(v),
    minutes: mt(v),
    seconds: gt(v)
  });
  return {
    resetDateTime: r,
    groupListAndMap: (v, k) => p(v).map((F) => F.map((U) => {
      const { active: X, disabled: le, isBetween: fe, highlighted: ee } = k(U);
      return {
        ...U,
        active: X,
        disabled: le,
        className: {
          dp__overlay_cell_active: X,
          dp__overlay_cell: !X,
          dp__overlay_cell_disabled: le,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: le && X,
          dp__cell_in_between: fe,
          "dp--highlighted": ee
        }
      };
    })),
    setTime: s,
    getWeekFromDate: l,
    isDateAfter: c,
    isDateBefore: n,
    isDateBetween: S,
    isDateEqual: o,
    getDaysInBetween: D,
    getCellId: $,
    resetDate: g,
    getMinMonth: d,
    getMaxMonth: Y,
    getYearFromDate: u,
    getTimeObj: I,
    setTimeValue: (v) => Ae(e(), I(v)),
    sanitizeTime: (v, k, F) => k && (F || F === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((U) => U === k ? [U, F] : [U, Number.isNaN(+v[U]) ? void 0 : +v[U]])
    ) : {
      hours: Number.isNaN(+v.hours) ? void 0 : +v.hours,
      minutes: Number.isNaN(+v.minutes) ? void 0 : +v.minutes,
      seconds: Number.isNaN(+(v.seconds ?? "")) ? void 0 : +v.seconds
    },
    getBeforeAndAfterInRange: (v, k) => {
      const F = bn(r(k), v), U = ht(r(k), v);
      return { before: F, after: U };
    },
    isModelAuto: (v) => Array.isArray(v) ? !!v[0] && !!v[1] : !1,
    matchDate: (v, k) => v ? k ? k instanceof Map ? !!w(v, k) : k(e(v)) : !1 : !0,
    checkHighlightMonth: (v, k, F) => typeof v == "function" ? v({ month: k, year: F }) : v.months.some((U) => U.month === k && U.year === F),
    checkHighlightYear: (v, k) => typeof v == "function" ? v(k) : v.years.includes(k)
  };
}, ea = () => {
  const {
    defaults: { config: e }
  } = $e(), w = de(0);
  He(() => {
    p(), globalThis.addEventListener("resize", p, { passive: !0 });
  }), Ct(() => {
    globalThis.removeEventListener("resize", p);
  });
  const p = () => {
    w.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: z(() => w.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, Tt = () => {
  const {
    getDate: e,
    state: w,
    modelValue: p,
    rootProps: r,
    defaults: { formats: s, textInput: l }
  } = $e(), n = (u) => ot(st(e(), u), s.value.year, { locale: r.locale }), o = (u) => ot(wn(e(), u), s.value.month, { locale: r.locale }), c = (u) => ot(e(`2017-01-0${u}T00:00:00+00:00`), s.value.weekDay, { locale: r.locale }), S = (u) => ot(u, s.value.quarter, { locale: r.locale }), D = (u, I) => [u, I].map((m) => S(m)).join("-"), $ = (u, I, m) => {
    const B = m ? s.value.preview : s.value.input;
    if (!u) return "";
    if (typeof B == "function") return B(u);
    const V = I ?? B, C = { locale: r.locale };
    return Array.isArray(u) ? `${ot(u[0], V, C)}${r.modelAuto && !u[1] ? "" : l.value.rangeSeparator}${u[1] ? ot(u[1], V, C) : ""}` : ot(u, V, C);
  }, g = () => {
    const u = (I) => ot(I, l.value.format);
    return Array.isArray(p.value) ? `${u(p.value[0])} ${l.value.rangeSeparator} ${p.value[1] ? u(p.value[1]) : ""}` : "";
  };
  return {
    formatYear: n,
    formatMonth: o,
    formatWeekDay: c,
    formatQuarter: S,
    formatSelectedDate: $,
    formatForTextInput: () => w.isInputFocused && p.value ? Array.isArray(p.value) ? g() : ot(p.value, l.value.format) : $(p.value),
    formatPreview: (u) => $(u, void 0, !0),
    formatQuarterText: D
  };
}, ta = () => {
  const { rootProps: e } = $e(), { formatYear: w, formatMonth: p } = Tt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => ({
      text: p(n),
      value: n
    })),
    getYears: () => {
      const n = [];
      for (let o = +e.yearRange[0]; o <= +e.yearRange[1]; o++)
        n.push({ value: +o, text: w(o) });
      return e.reverseYears ? n.reverse() : n;
    },
    isOutOfYearRange: (n) => n < +e.yearRange[0] || n > +e.yearRange[1]
  };
}, Tr = (e) => ({
  openMenu: () => e.value?.openMenu(),
  closeMenu: () => e.value?.closeMenu(),
  selectDate: () => e.value?.selectDate(),
  clearValue: () => e.value?.clearValue(),
  formatInputValue: () => e.value?.formatInputValue(),
  updateInternalModelValue: (g) => e.value?.updateInternalModelValue(g),
  setMonthYear: (g) => e.value?.setMonthYear(g),
  parseModel: () => e.value?.parseModel(),
  switchView: (g, d) => e.value?.switchView(g, d),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu()
}), $r = () => {
  const {
    getDate: e,
    rootProps: w,
    defaults: { textInput: p, startTime: r, timeConfig: s }
  } = $e(), { getTimeObjFromCurrent: l } = Fe(), n = de(!1), o = z(
    () => Array.isArray(r.value) ? r.value[0] : r.value ?? l(e(), {}, s.value.enableSeconds)
  ), c = (D, $, g) => {
    const d = ka(D, $.slice(0, D.length), e(), { locale: w.locale });
    return Zt(d) && Dn(d) ? g || n.value ? d : Ae(d, {
      hours: +o.value.hours,
      minutes: +o.value.minutes,
      seconds: +(o.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: n,
    parseFreeInput: (D, $) => {
      if (typeof p.value.pattern == "string")
        return c(D, p.value.pattern, $);
      if (Array.isArray(p.value.pattern)) {
        let g = null;
        for (const d of p.value.pattern)
          if (g = c(D, d, $), g)
            break;
        return g;
      }
      return typeof p.value.pattern == "function" ? p.value.pattern(D) : null;
    }
  };
}, Sr = {
  key: 1,
  class: "dp__input_wrap"
}, Rr = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Cr = {
  key: 2,
  class: "dp--clear-btn"
}, Yr = ["aria-label"], Or = /* @__PURE__ */ We({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 }
  },
  emits: ["clear", "open", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus", "blur", "real-blur"],
  setup(e, { expose: w, emit: p }) {
    const r = p, s = e, {
      rootEmit: l,
      inputValue: n,
      rootProps: o,
      defaults: { textInput: c, ariaLabels: S, inline: D, config: $, range: g, multiDates: d, ui: Y, inputAttrs: u }
    } = $e(), { checkMinMaxRange: I, isValidDate: m } = rt(), { parseFreeInput: B, textPasted: V } = $r(), { checkKeyDown: C, checkStopPropagation: N } = Fe(), q = Ye("dp-input"), M = de(null), y = de(!1), v = z(
      () => ({
        dp__pointer: !o.disabled && !o.readonly && !c.value.enabled,
        dp__disabled: o.disabled,
        dp__input_readonly: !c.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !u.value.clearable,
        dp__input_icon_pad: !u.value.hideInputIcon,
        dp__input_valid: typeof u.value.state == "boolean" ? u.value.state : !1,
        dp__input_invalid: typeof u.value.state == "boolean" ? !u.value.state : !1,
        dp__input_focus: y.value || s.isMenuOpen,
        dp__input_reg: !c.value.enabled,
        ...Y.value.input
      })
    ), k = () => {
      r("set-input-date", null), u && o.autoApply && (r("set-empty-date"), M.value = null);
    }, F = (ae) => {
      const { rangeSeparator: pe } = c.value, [G, H] = ae.split(`${pe}`);
      if (G) {
        const se = B(G.trim(), n.value), he = H ? B(H.trim(), n.value) : void 0;
        if (Pt(se, he)) return;
        const b = se && he ? [se, he] : [se];
        I(he, b, 0) && (M.value = se ? b : null);
      }
    }, U = () => {
      V.value = !0;
    }, X = (ae) => {
      if (g.value.enabled)
        F(ae);
      else if (d.value.enabled) {
        const pe = ae.split(";");
        M.value = pe.map((G) => B(G.trim())).filter((G) => !!G);
      } else
        M.value = B(ae, n.value);
    }, le = (ae) => {
      const pe = typeof ae == "string" ? ae : ae.target?.value;
      pe === "" ? k() : (c.value.openMenu && !s.isMenuOpen && r("open"), X(pe), r("set-input-date", M.value)), V.value = !1, n.value = pe, l("text-input", ae, M.value);
    }, fe = (ae) => {
      c.value.enabled ? (X(ae.target.value), c.value.enterSubmit && m(M.value) && n.value !== "" ? (r("set-input-date", M.value, !0), M.value = null) : c.value.enterSubmit && n.value === "" && (M.value = null, r("clear"))) : Q(ae);
    }, ee = (ae, pe) => {
      c.value.enabled && c.value.tabSubmit && !pe && X(ae.target.value), c.value.tabSubmit && m(M.value) && n.value !== "" ? (r("set-input-date", M.value, !0, !0), M.value = null) : c.value.tabSubmit && n.value === "" && (M.value = null, r("clear"));
    }, te = () => {
      y.value = !0, r("focus"), Xe().then(() => {
        c.value.enabled && c.value.selectOnFocus && q.value?.select();
      });
    }, Q = (ae) => {
      if (N(ae, $.value, !0), c.value.enabled && c.value.openMenu && !D.value.input) {
        if (c.value.openMenu === "open" && !s.isMenuOpen) return r("open");
        if (c.value.openMenu === "toggle") return r("toggle");
      } else c.value.enabled || r("toggle");
    }, W = () => {
      r("real-blur"), y.value = !1, (!s.isMenuOpen || D.value.enabled && D.value.input) && r("blur"), o.autoApply && c.value.enabled && M.value && !s.isMenuOpen && (r("set-input-date", M.value), r("select-date"), M.value = null);
    }, x = (ae) => {
      N(ae, $.value, !0), r("clear");
    }, re = () => {
      r("close");
    }, ve = (ae) => {
      if (ae.key === "Tab" && ee(ae), ae.key === "Enter" && fe(ae), ae.key === "Escape" && c.value.escClose && re(), !c.value.enabled) {
        if (ae.code === "Tab") return;
        ae.preventDefault();
      }
    }, ye = () => {
      q.value?.focus({ preventScroll: !0 });
    }, be = (ae) => {
      M.value = ae;
    }, _e = (ae) => {
      ae.key === Ie.tab && ee(ae, !0);
    };
    return w({
      focusInput: ye,
      setParsedDate: be
    }), (ae, pe) => (R(), K("div", { onClick: Q }, [
      ae.$slots.trigger && !ae.$slots["dp-input"] && !t(D).enabled ? ue(ae.$slots, "trigger", { key: 0 }) : j("", !0),
      !ae.$slots.trigger && (!t(D).enabled || t(D).input) ? (R(), K("div", Sr, [
        ae.$slots["dp-input"] && !ae.$slots.trigger && (!t(D).enabled || t(D).enabled && t(D).input) ? ue(ae.$slots, "dp-input", {
          key: 0,
          value: t(n),
          isMenuOpen: e.isMenuOpen,
          onInput: le,
          onEnter: fe,
          onTab: ee,
          onClear: x,
          onBlur: W,
          onKeypress: ve,
          onPaste: U,
          onFocus: te,
          openMenu: () => ae.$emit("open"),
          closeMenu: () => ae.$emit("close"),
          toggleMenu: () => ae.$emit("toggle")
        }) : j("", !0),
        ae.$slots["dp-input"] ? j("", !0) : (R(), K("input", {
          key: 1,
          id: t(u).id,
          ref: "dp-input",
          "data-test-id": "dp-input",
          name: t(u).name,
          class: we(v.value),
          inputmode: t(u).inputmode,
          placeholder: t(o).placeholder,
          disabled: t(o).disabled,
          readonly: t(o).readonly,
          required: t(u).required,
          value: t(n),
          autocomplete: t(u).autocomplete,
          "aria-label": t(S).input,
          "aria-disabled": t(o).disabled || void 0,
          "aria-invalid": t(u).state === !1 ? !0 : void 0,
          onInput: le,
          onBlur: W,
          onFocus: te,
          onKeypress: ve,
          onKeydown: pe[0] || (pe[0] = (G) => ve(G)),
          onPaste: U
        }, null, 42, Rr)),
        Pe("div", {
          onClick: pe[3] || (pe[3] = (G) => r("toggle"))
        }, [
          ae.$slots["input-icon"] && !t(u).hideInputIcon ? (R(), K("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: pe[1] || (pe[1] = (G) => r("toggle"))
          }, [
            ue(ae.$slots, "input-icon")
          ])) : j("", !0),
          !ae.$slots["input-icon"] && !t(u).hideInputIcon && !ae.$slots["dp-input"] ? (R(), Ce(t(Ht), {
            key: 1,
            "aria-label": t(S)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: pe[2] || (pe[2] = (G) => r("toggle"))
          }, null, 8, ["aria-label"])) : j("", !0)
        ]),
        ae.$slots["clear-icon"] && (t(u).alwaysClearable || t(n) && t(u).clearable && !t(o).disabled && !t(o).readonly) ? (R(), K("span", Cr, [
          ue(ae.$slots, "clear-icon", { clear: x })
        ])) : j("", !0),
        !ae.$slots["clear-icon"] && (t(u).alwaysClearable || t(u).clearable && t(n) && !t(o).disabled && !t(o).readonly) ? (R(), K("button", {
          key: 3,
          "aria-label": t(S)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: pe[4] || (pe[4] = (G) => t(C)(G, () => x(G), !0, _e)),
          onClick: pe[5] || (pe[5] = Wt((G) => x(G), ["prevent"]))
        }, [
          nt(t(Yn), { class: "dp__input_icons" })
        ], 40, Yr)) : j("", !0)
      ])) : j("", !0)
    ]));
  }
}), Br = {
  ref: "action-row",
  class: "dp__action_row"
}, xr = ["title"], Ir = {
  ref: "action-buttons-container",
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, Er = ["disabled"], Vr = /* @__PURE__ */ We({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { default: 0 }
  },
  emits: ["close-picker", "select-date", "select-now"],
  setup(e, { emit: w }) {
    const p = w, r = e, {
      rootEmit: s,
      rootProps: l,
      modelValue: n,
      defaults: { actionRow: o, multiCalendars: c, inline: S, range: D, multiDates: $, formats: g }
    } = $e(), { isTimeValid: d, isMonthValid: Y } = rt(), { buildMatrix: u } = bt(), { formatPreview: I } = Tt(), { checkKeyDown: m, convertType: B } = Fe(), V = Ye("cancel-btn"), C = Ye("select-btn"), N = Ye("action-buttons-container"), q = Ye("action-row"), M = de(!1), y = de({});
    He(() => {
      l.arrowNavigation && u([Ge(V), Ge(C)], "actionRow"), v(), globalThis.addEventListener("resize", v);
    }), Ct(() => {
      globalThis.removeEventListener("resize", v);
    });
    const v = () => {
      M.value = !1, setTimeout(() => {
        const Q = N.value?.getBoundingClientRect(), W = q.value?.getBoundingClientRect();
        Q && W && (y.value.maxWidth = `${W.width - Q.width - 20}px`), M.value = !0;
      }, 0);
    }, k = z(() => D.value.enabled && !D.value.partialRange && n.value ? n.value.length === 2 : !0), F = z(
      () => !d.value(n.value) || !Y.value(n.value) || !k.value
    ), U = () => {
      const Q = g.value.preview;
      return l.timePicker || l.monthPicker, Q(B(n.value));
    }, X = () => {
      const Q = n.value;
      return c.value.count > 0 ? `${I(Q[0])} - ${I(Q[1])}` : [I(Q[0]), I(Q[1])];
    }, le = z(() => !n.value || !r.menuMount ? "" : typeof g.value.preview == "string" ? Array.isArray(n.value) ? n.value.length === 2 && n.value[1] ? X() : $.value.enabled ? n.value.map((Q) => `${I(Q)}`) : l.modelAuto ? `${I(n.value[0])}` : `${I(n.value[0])} -` : I(n.value) : U()), fe = () => $.value.enabled ? "; " : " - ", ee = z(
      () => Array.isArray(le.value) ? le.value.join(fe()) : le.value
    ), te = () => {
      d.value(n.value) && Y.value(n.value) && k.value ? p("select-date") : s("invalid-select");
    };
    return (Q, W) => (R(), K("div", Br, [
      Q.$slots["action-row"] ? ue(Q.$slots, "action-row", Ze(tt({ key: 0 }, {
        modelValue: t(n),
        disabled: F.value,
        selectDate: () => Q.$emit("select-date"),
        closePicker: () => Q.$emit("close-picker")
      }))) : (R(), K(De, { key: 1 }, [
        t(o).showPreview ? (R(), K("div", {
          key: 0,
          class: "dp__selection_preview",
          title: ee.value,
          style: et(y.value)
        }, [
          Q.$slots["action-preview"] && M.value ? ue(Q.$slots, "action-preview", {
            key: 0,
            value: t(n)
          }) : j("", !0),
          !Q.$slots["action-preview"] && M.value ? (R(), K(De, { key: 1 }, [
            ft(ze(ee.value), 1)
          ], 64)) : j("", !0)
        ], 12, xr)) : j("", !0),
        Pe("div", Ir, [
          Q.$slots["action-buttons"] ? ue(Q.$slots, "action-buttons", {
            key: 0,
            value: t(n)
          }) : j("", !0),
          Q.$slots["action-buttons"] ? j("", !0) : (R(), K(De, { key: 1 }, [
            !t(S).enabled && t(o).showCancel ? (R(), K("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: W[0] || (W[0] = (x) => Q.$emit("close-picker")),
              onKeydown: W[1] || (W[1] = (x) => t(m)(x, () => Q.$emit("close-picker")))
            }, ze(t(o).cancelBtnLabel), 545)) : j("", !0),
            t(o).showNow ? (R(), K("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: W[2] || (W[2] = (x) => Q.$emit("select-now")),
              onKeydown: W[3] || (W[3] = (x) => t(m)(x, () => Q.$emit("select-now")))
            }, ze(t(o).nowBtnLabel), 33)) : j("", !0),
            t(o).showSelect ? (R(), K("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: F.value,
              "data-test-id": "select-button",
              onKeydown: W[4] || (W[4] = (x) => t(m)(x, () => te())),
              onClick: te
            }, ze(t(o).selectBtnLabel), 41, Er)) : j("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), aa = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: w }
  } = $e(), p = z(() => (l) => e.hideNavigation?.includes(l)), r = z(() => (l) => w.value.count ? w.value.solo ? !0 : l === 0 : !0), s = z(() => (l) => w.value.count ? w.value.solo ? !0 : l === w.value.count - 1 : !0);
  return { hideNavigationButtons: p, showLeftIcon: r, showRightIcon: s };
}, Nr = ["role", "aria-label", "tabindex"], Fr = { class: "dp__selection_grid_header" }, Wr = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], Lr = ["aria-label"], jt = /* @__PURE__ */ We({
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
    const { setSelectionGrid: r, buildMultiLevelMatrix: s, setMonthPicker: l } = bt(), n = p, o = e, {
      rootProps: c,
      defaults: { ariaLabels: S, textInput: D, config: $ }
    } = $e(), { hideNavigationButtons: g } = aa(), { handleEventPropagation: d, convertType: Y, checkKeyDown: u, checkStopPropagation: I, getElWithin: m, findFocusableEl: B } = Fe(), V = Ye("toggle-button"), C = Ye("overlay-container"), N = Ye("grid-wrap"), q = de(!1), M = de(null), y = de([]), v = de(), k = de(0);
    on(() => {
      M.value = null;
    }), He(() => {
      Xe().then(() => Q()), o.noOverlayFocus || U(), F(!0);
    }), Ct(() => F(!1));
    const F = (H) => {
      c.arrowNavigation && (o.headerRefs?.length ? l(H) : r(H));
    }, U = () => {
      const H = Ge(N);
      H && (D.value.enabled || (M.value ? M.value?.focus({ preventScroll: !0 }) : H.focus({ preventScroll: !0 })), q.value = H.clientHeight < H.scrollHeight);
    }, X = z(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !o.useRelative,
        "dp--overlay-relative": o.useRelative
      })
    ), le = z(
      () => o.useRelative ? { height: `${o.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), fe = z(() => ({
      dp__overlay_col: !0
    })), ee = z(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: q.value,
        dp__button_bottom: o.isLast
      })
    ), te = z(() => ({
      dp__overlay_container: !0,
      dp__container_flex: o.items?.length <= 6,
      dp__container_block: o.items?.length > 6
    }));
    it(
      () => o.items,
      () => Q(!1),
      { deep: !0 }
    );
    const Q = (H = !0) => {
      Xe().then(() => {
        const se = Ge(M), he = Ge(N), b = Ge(V), A = Ge(C), ie = b ? b.getBoundingClientRect().height : 0;
        he && (he.getBoundingClientRect().height ? k.value = he.getBoundingClientRect().height - ie : k.value = $.value.modeHeight - ie), se && A && H && (A.scrollTop = se.offsetTop - A.offsetTop - (k.value / 2 - se.getBoundingClientRect().height) - ie);
      });
    }, W = (H) => {
      H.disabled || n("selected", H.value);
    }, x = () => {
      n("toggle"), n("reset-flow");
    }, re = (H) => {
      $.value.escClose && (x(), d(H, $.value));
    }, ve = (H, se, he, b) => {
      H && ((se.active || se.value === o.focusValue) && (M.value = H), c.arrowNavigation && (Array.isArray(y.value[he]) ? y.value[he][b] = H : y.value[he] = [H], ye()));
    }, ye = () => {
      const H = o.headerRefs?.length ? [o.headerRefs].concat(y.value) : y.value.concat([o.skipButtonRef ? [] : [V.value]]);
      s(Y(H), o.headerRefs?.length ? "monthPicker" : "selectionGrid");
    }, be = (H) => {
      c.arrowNavigation || I(H, $.value, !0);
    }, _e = (H) => {
      v.value = H, n("hover-value", H);
    }, ae = () => {
      if (x(), !o.isLast) {
        const H = m(o.menuWrapRef ?? null, "action-row");
        H && B(H)?.focus();
      }
    }, pe = (H) => {
      switch (H.key) {
        case Ie.esc:
          return re(H);
        case Ie.arrowLeft:
          return be(H);
        case Ie.arrowRight:
          return be(H);
        case Ie.arrowUp:
          return be(H);
        case Ie.arrowDown:
          return be(H);
        default:
          return;
      }
    }, G = (H) => {
      if (H.key === Ie.enter) return x();
      if (H.key === Ie.tab) return ae();
    };
    return w({ focusGrid: U }), (H, se) => (R(), K("div", {
      ref: "grid-wrap",
      class: we(X.value),
      style: et(le.value),
      role: e.useRelative ? void 0 : "dialog",
      "aria-label": e.overlayLabel,
      tabindex: e.useRelative ? void 0 : "0",
      onKeydown: pe,
      onClick: se[0] || (se[0] = Wt(() => {
      }, ["prevent"]))
    }, [
      Pe("div", {
        ref: "overlay-container",
        class: we(te.value),
        style: et({ "--dp-overlay-height": `${k.value}px` }),
        role: "grid"
      }, [
        Pe("div", Fr, [
          ue(H.$slots, "header")
        ]),
        H.$slots.overlay ? ue(H.$slots, "overlay", { key: 0 }) : (R(!0), K(De, { key: 1 }, Oe(e.items, (he, b) => (R(), K("div", {
          key: b,
          class: we(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
          role: "row"
        }, [
          (R(!0), K(De, null, Oe(he, (A, ie) => (R(), K("div", {
            key: A.value,
            ref_for: !0,
            ref: (oe) => ve(oe, A, b, ie),
            role: "gridcell",
            class: we(fe.value),
            "aria-selected": A.active || void 0,
            "aria-disabled": A.disabled || void 0,
            tabindex: "0",
            "data-test-id": A.text,
            onClick: Wt((oe) => W(A), ["prevent"]),
            onKeydown: (oe) => t(u)(oe, () => W(A), !0),
            onMouseover: (oe) => _e(A.value)
          }, [
            Pe("div", {
              class: we(A.className)
            }, [
              H.$slots.item ? ue(H.$slots, "item", {
                key: 0,
                item: A
              }) : j("", !0),
              H.$slots.item ? j("", !0) : (R(), K(De, { key: 1 }, [
                ft(ze(A.text), 1)
              ], 64))
            ], 2)
          ], 42, Wr))), 128))
        ], 2))), 128))
      ], 6),
      H.$slots["button-icon"] ? Xt((R(), K("button", {
        key: 0,
        ref: "toggle-button",
        type: "button",
        "aria-label": t(S)?.toggleOverlay,
        class: we(ee.value),
        tabindex: "0",
        onClick: x,
        onKeydown: G
      }, [
        ue(H.$slots, "button-icon")
      ], 42, Lr)), [
        [Jt, !t(g)(e.type)]
      ]) : j("", !0)
    ], 46, Nr));
  }
}), Hr = ["data-dp-mobile"], na = /* @__PURE__ */ We({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: w }
    } = $e(), { isMobile: p } = ea(), r = z(
      () => w.value.count > 0 ? [...new Array(w.value.count).keys()] : [0]
    );
    return (s, l) => (R(), K("div", {
      class: we({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: t(w).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": t(p)
    }, [
      ue(s.$slots, "default", {
        instances: r.value,
        wrapClass: { dp__instance_calendar: t(w).count > 0 }
      })
    ], 10, Hr));
  }
}), Kr = ["data-dp-element", "aria-label", "aria-disabled"], Nt = /* @__PURE__ */ We({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: w }) {
    const { checkKeyDown: p } = Fe(), r = w, s = Ye("arrow-btn");
    return He(() => r("set-ref", s)), (l, n) => (R(), K("button", {
      ref: "arrow-btn",
      type: "button",
      "data-dp-element": e.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled || void 0,
      onClick: n[0] || (n[0] = (o) => r("activate")),
      onKeydown: n[1] || (n[1] = (o) => t(p)(o, () => r("activate"), !0))
    }, [
      Pe("span", {
        class: we(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        ue(l.$slots, "default")
      ], 2)
    ], 40, Kr));
  }
}), zr = ["aria-label", "data-test-id"], ja = /* @__PURE__ */ We({
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
    const p = w, r = e, { showRightIcon: s, showLeftIcon: l } = aa(), {
      rootProps: n,
      defaults: { config: o, ariaLabels: c, ui: S }
    } = $e(), { showTransition: D, transitionName: $ } = Kt(), { formatYear: g } = Tt(), d = de(!1), Y = z(() => g(r.year)), u = (B = !1, V) => {
      d.value = !d.value, p("toggle-year-picker", { flow: B, show: V });
    }, I = (B) => {
      d.value = !1, p("year-select", B);
    }, m = (B = !1) => {
      p("handle-year", B);
    };
    return (B, V) => (R(), K(De, null, [
      Pe("div", {
        class: we(["dp--year-mode-picker", { "dp--hidden-el": d.value }])
      }, [
        t(l)(e.instance) ? (R(), Ce(Nt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(c)?.prevYear,
          disabled: e.isDisabled(!1),
          class: we(t(S)?.navBtnPrev),
          onActivate: V[0] || (V[0] = (C) => m(!1))
        }, {
          default: Me(() => [
            B.$slots["arrow-left"] ? ue(B.$slots, "arrow-left", { key: 0 }) : j("", !0),
            B.$slots["arrow-left"] ? j("", !0) : (R(), Ce(t(Fa), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : j("", !0),
        Pe("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": `${e.year}-${t(c)?.openYearsOverlay}`,
          "data-test-id": `year-mode-btn-${e.instance}`,
          onClick: V[1] || (V[1] = () => u(!1)),
          onKeydown: V[2] || (V[2] = sn(() => u(!1), ["enter"]))
        }, [
          B.$slots.year ? ue(B.$slots, "year", {
            key: 0,
            text: Y.value,
            value: e.year
          }) : j("", !0),
          B.$slots.year ? j("", !0) : (R(), K(De, { key: 1 }, [
            ft(ze(e.year), 1)
          ], 64))
        ], 40, zr),
        t(s)(e.instance) ? (R(), Ce(Nt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(c)?.nextYear,
          disabled: e.isDisabled(!0),
          class: we(t(S)?.navBtnNext),
          onActivate: V[3] || (V[3] = (C) => m(!0))
        }, {
          default: Me(() => [
            B.$slots["arrow-right"] ? ue(B.$slots, "arrow-right", { key: 0 }) : j("", !0),
            B.$slots["arrow-right"] ? j("", !0) : (R(), Ce(t(Wa), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : j("", !0)
      ], 2),
      nt(Yt, {
        name: t($)(e.showYearPicker),
        css: t(D)
      }, {
        default: Me(() => [
          e.showYearPicker ? (R(), Ce(jt, {
            key: 0,
            items: e.items,
            config: t(o),
            "is-last": t(n).autoApply && !t(o).keepActionRow,
            "overlay-label": t(c)?.yearPicker?.(!0),
            type: "year",
            onToggle: u,
            onSelected: V[4] || (V[4] = (C) => I(C))
          }, Le({
            "button-icon": Me(() => [
              B.$slots["calendar-icon"] ? ue(B.$slots, "calendar-icon", { key: 0 }) : j("", !0),
              B.$slots["calendar-icon"] ? j("", !0) : (R(), Ce(t(Ht), { key: 1 }))
            ]),
            _: 2
          }, [
            B.$slots["year-overlay-value"] ? {
              name: "item",
              fn: Me(({ item: C }) => [
                ue(B.$slots, "year-overlay-value", {
                  text: C.text,
                  value: C.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "config", "is-last", "overlay-label"])) : j("", !0)
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
    month: s,
    year: l,
    modelValue: n,
    calendars: o,
    rootProps: c,
    defaults: { multiCalendars: S, range: D, safeDates: $, filters: g, highlight: d }
  } = $e(), { resetDate: Y, getYearFromDate: u, checkHighlightYear: I, groupListAndMap: m } = je(), { getYears: B } = ta(), { validateMonthYear: V, checkMinMaxValue: C } = rt(), N = de([!1]), q = z(() => B()), M = z(() => (x, re) => {
    const ve = Ae(Y(w()), {
      month: s.value(x),
      year: l.value(x)
    }), ye = re ? Ia(ve) : Vt(ve);
    return V(ye, c.preventMinMaxNavigation, re);
  }), y = () => Array.isArray(n.value) && S.value.solo && n.value[1], v = () => {
    for (let x = 0; x < S.value.count; x++)
      if (x === 0)
        o.value[x] = o.value[0];
      else if (x === S.value.count - 1 && y())
        o.value[x] = {
          month: Te(n.value[1]),
          year: ke(n.value[1])
        };
      else {
        const re = Ae(w(), o.value[x - 1]);
        o.value[x] = { month: Te(re), year: ke(Ea(re, 1)) };
      }
  }, k = (x) => {
    if (!x) return v();
    const re = Ae(w(), o.value[x]);
    return o.value[0].year = ke(Va(re, S.value.count - 1)), v();
  }, F = (x, re) => {
    const ve = Mn(re, x);
    return D.value.showLastInRange && ve > 1 ? re : x;
  }, U = (x) => c.focusStartDate || S.value.solo ? x[0] : x[1] ? F(x[0], x[1]) : x[0], X = () => {
    if (n.value) {
      const x = Array.isArray(n.value) ? U(n.value) : n.value;
      o.value[0] = { month: Te(x), year: ke(x) };
    }
  }, le = () => {
    X(), S.value.count && v();
  };
  it(n, (x, re) => {
    r.isTextInputDate && JSON.stringify(x ?? {}) !== JSON.stringify(re ?? {}) && le();
  }), He(() => {
    le();
  });
  const fe = (x, re) => {
    o.value[re].year = x, p("update-month-year", { instance: re, year: x, month: o.value[re].month }), S.value.count && !S.value.solo && k(re);
  }, ee = z(() => (x) => m(q.value, (re) => {
    const ve = l.value(x) === re.value, ye = C(
      re.value,
      u($.value.minDate),
      u($.value.maxDate)
    ) || g.value.years?.includes(l.value(x)), be = I(d.value, re.value);
    return { active: ve, disabled: ye, highlighted: be };
  })), te = (x, re) => {
    fe(x, re), W(re);
  }, Q = (x, re = !1) => {
    if (!M.value(x, re)) {
      const ve = re ? l.value(x) + 1 : l.value(x) - 1;
      fe(ve, x);
    }
  }, W = (x, re = !1, ve) => {
    re || e("reset-flow"), ve === void 0 ? N.value[x] = !N.value[x] : N.value[x] = ve, N.value[x] ? p("overlay-toggle", { open: !0, overlay: Qe.year }) : p("overlay-toggle", { open: !1, overlay: Qe.year });
  };
  return {
    isDisabled: M,
    groupedYears: ee,
    showYearPicker: N,
    selectYear: fe,
    toggleYearPicker: W,
    handleYearSelect: te,
    handleYear: Q
  };
}, ra = () => {
  const { isDateAfter: e, isDateBefore: w, isDateEqual: p } = je(), {
    getDate: r,
    rootEmit: s,
    modelValue: l,
    defaults: { range: n }
  } = $e();
  return {
    getRangeWithFixedDate: (g) => Array.isArray(l.value) && (l.value.length === 2 || l.value.length === 1 && n.value.partialRange) ? n.value.fixedStart && (e(g, l.value[0]) || p(g, l.value[0])) ? [l.value[0], g] : n.value.fixedEnd && (w(g, l.value[1]) || p(g, l.value[1])) ? [g, l.value[1]] : (s("invalid-fixed-range", g), l.value) : [],
    setPresetDate: (g) => {
      Array.isArray(g.value) && g.value.length <= 2 && n.value.enabled ? l.value = g.value.map((d) => r(d)) : Array.isArray(g.value) || (l.value = r(g.value));
    },
    checkRangeAutoApply: (g, d, Y, u) => {
      g && (g[0] && g[1] && Y && d("auto-apply"), g[0] && !g[1] && u && Y && d("auto-apply"));
    },
    setMonthOrYearRange: (g) => {
      let d = l.value ? l.value.slice() : [];
      return d.length === 2 && d[1] !== null && (d = []), d.length ? (w(g, d[0]) ? d.unshift(g) : d[1] = g, s("range-end", g)) : (d = [g], s("range-start", g)), d;
    },
    handleMultiDatesSelect: (g, d) => {
      if (l.value && Array.isArray(l.value))
        if (l.value.some((Y) => p(g, Y))) {
          const Y = l.value.filter((u) => !p(u, g));
          l.value = Y.length ? Y : null;
        } else (d && +d > l.value.length || !d) && l.value.push(g);
      else
        l.value = [g];
    }
  };
}, jr = (e, w) => {
  const {
    getDate: p,
    rootEmit: r,
    state: s,
    calendars: l,
    year: n,
    modelValue: o,
    rootProps: c,
    defaults: { range: S, highlight: D, safeDates: $, filters: g, multiDates: d }
  } = $e();
  zt(() => {
    s.isTextInputDate && te(ke(p(c.startDate)), 0);
  });
  const { checkMinMaxRange: Y, checkMinMaxValue: u } = rt(), { isDateBetween: I, resetDateTime: m, resetDate: B, getMinMonth: V, getMaxMonth: C, checkHighlightMonth: N, groupListAndMap: q } = je(), { checkRangeAutoApply: M, getRangeWithFixedDate: y, handleMultiDatesSelect: v, setMonthOrYearRange: k, setPresetDate: F } = ra(), { padZero: U } = Fe(), { getMonths: X, isOutOfYearRange: le } = ta(), fe = z(() => X()), ee = de(null), {
    selectYear: te,
    groupedYears: Q,
    showYearPicker: W,
    toggleYearPicker: x,
    handleYearSelect: re,
    handleYear: ve,
    isDisabled: ye
  } = Ua(w);
  He(() => {
    c.startDate && (o.value && c.focusStartDate || !o.value) && te(ke(p(c.startDate)), 0);
  });
  const be = (O) => O ? { month: Te(O), year: ke(O) } : { month: null, year: null }, _e = () => o.value ? Array.isArray(o.value) ? o.value.map((O) => be(O)) : be(o.value) : be(), ae = (O, a) => {
    const T = l.value[O], i = _e();
    return Array.isArray(i) ? i.some((J) => J.year === T?.year && J.month === a) : T?.year === i.year && a === i.month;
  }, pe = (O, a, T) => {
    const i = _e();
    return Array.isArray(i) ? n.value(a) === i[T]?.year && O === i[T]?.month : !1;
  }, G = (O, a) => {
    if (S.value.enabled) {
      const T = _e();
      if (Array.isArray(o.value) && Array.isArray(T)) {
        const i = pe(O, a, 0) || pe(O, a, 1), J = Ae(B(p()), { month: O, year: n.value(a) });
        return I(o.value, ee.value, J) && !i;
      }
      return !1;
    }
    return !1;
  }, H = z(() => (O) => q(fe.value, (a) => {
    const T = ae(O, a.value), i = u(
      a.value,
      V(n.value(O), $.value.minDate),
      C(n.value(O), $.value.maxDate)
    ) || E($.value.disabledDates, n.value(O), a.value) || g.value.months?.includes(a.value) || !L($.value.allowedDates, n.value(O), a.value) || le(n.value(O)), J = G(a.value, O), Z = N(D.value, a.value, n.value(O));
    return { active: T, disabled: i, isBetween: J, highlighted: Z };
  })), se = (O, a) => Ae(B(p()), { month: O, year: n.value(a) }), he = (O, a) => {
    const T = o.value ? o.value : B(p());
    o.value = Ae(T, { month: O, year: n.value(a) }), w("auto-apply"), w("update-flow-step");
  }, b = (O, a) => {
    const T = se(O, a);
    S.value.fixedEnd || S.value.fixedStart ? o.value = y(T) : o.value ? Y(T, o.value) && (o.value = k(se(O, a))) : o.value = [se(O, a)], Xe().then(() => {
      M(o.value, w, c.autoApply, c.modelAuto);
    });
  }, A = (O, a) => {
    v(se(O, a), d.value.limit), w("auto-apply", !0);
  }, ie = (O, a) => (l.value[a].month = O, h(a, l.value[a].year, O), d.value.enabled ? A(O, a) : S.value.enabled ? b(O, a) : he(O, a)), oe = (O, a) => {
    te(O, a), h(a, O, null);
  }, h = (O, a, T) => {
    let i = T;
    if (!i && i !== 0) {
      const J = _e();
      i = Array.isArray(J) ? J[O].month : J.month;
    }
    r("update-month-year", { instance: O, year: a, month: i });
  }, f = (O, a) => {
    ee.value = se(O, a);
  }, P = (O, a) => {
    F({
      value: O
    }), w("auto-apply");
  }, E = (O, a, T) => {
    if (O instanceof Map) {
      const i = `${U(T + 1)}-${a}`;
      return O.size ? O.has(i) : !1;
    }
    return typeof O == "function" ? O(m(Ae(p(), { month: T, year: a }), !0)) : !1;
  }, L = (O, a, T) => {
    if (O instanceof Map) {
      const i = `${U(T + 1)}-${a}`;
      return O.size ? O.has(i) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: H,
    groupedYears: Q,
    year: n,
    isDisabled: ye,
    showYearPicker: W,
    modelValue: o,
    toggleYearPicker: x,
    handleYearSelect: re,
    handleYear: ve,
    presetDate: P,
    setHoverDate: f,
    selectMonth: ie,
    selectYear: oe,
    getModelMonthYear: _e
  };
}, Ur = /* @__PURE__ */ We({
  __name: "MonthPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply", "update-flow-step", "mount"],
  setup(e, { expose: w, emit: p }) {
    const r = p, s = e, l = yt(), { mapSlots: n } = kt(), {
      rootProps: o,
      defaults: { config: c }
    } = $e(), S = n(l, "yearMode");
    He(() => {
      r("mount");
    });
    const {
      groupedMonths: D,
      groupedYears: $,
      year: g,
      isDisabled: d,
      showYearPicker: Y,
      modelValue: u,
      presetDate: I,
      setHoverDate: m,
      selectMonth: B,
      selectYear: V,
      toggleYearPicker: C,
      handleYearSelect: N,
      handleYear: q,
      getModelMonthYear: M
    } = jr(s, r);
    return w({ getSidebarProps: () => ({
      modelValue: u,
      year: g,
      getModelMonthYear: M,
      selectMonth: B,
      selectYear: V,
      handleYear: q
    }), presetDate: I, toggleYearPicker: (v) => C(0, v) }), (v, k) => (R(), Ce(na, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: Me(({ instances: F, wrapClass: U }) => [
        (R(!0), K(De, null, Oe(F, (X) => (R(), K("div", {
          key: X,
          class: we(U)
        }, [
          v.$slots["top-extra"] ? ue(v.$slots, "top-extra", {
            key: 0,
            value: t(u)
          }) : j("", !0),
          v.$slots["month-year"] ? ue(v.$slots, "month-year", tt({
            key: 1,
            ref_for: !0
          }, {
            year: t(g),
            months: t(D)(X),
            years: t($)(X),
            selectMonth: t(B),
            selectYear: t(V),
            instance: X
          })) : (R(), Ce(jt, {
            key: 2,
            items: t(D)(X),
            "is-last": t(o).autoApply && !t(c).keepActionRow,
            height: t(c).modeHeight,
            "no-overlay-focus": !!(e.noOverlayFocus || t(o).textInput),
            "use-relative": "",
            type: "month",
            onSelected: (le) => t(B)(le, X),
            onHoverValue: (le) => t(m)(le, X)
          }, Le({
            header: Me(() => [
              nt(ja, {
                items: t($)(X),
                instance: X,
                "show-year-picker": t(Y)[X],
                year: t(g)(X),
                "is-disabled": (le) => t(d)(X, le),
                onHandleYear: (le) => t(q)(X, le),
                onYearSelect: (le) => t(N)(le, X),
                onToggleYearPicker: (le) => t(C)(X, le?.flow, le?.show)
              }, Le({ _: 2 }, [
                Oe(t(S), (le, fe) => ({
                  name: le,
                  fn: Me((ee) => [
                    ue(v.$slots, le, tt({ ref_for: !0 }, ee))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            v.$slots["month-overlay-value"] ? {
              name: "item",
              fn: Me(({ item: le }) => [
                ue(v.$slots, "month-overlay-value", {
                  text: le.text,
                  value: le.value
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
}), qr = (e, w) => {
  const {
    rootEmit: p,
    getDate: r,
    state: s,
    modelValue: l,
    rootProps: n,
    defaults: { highlight: o, multiDates: c, filters: S, range: D, safeDates: $ }
  } = $e(), { getYears: g } = ta(), { isDateBetween: d, resetDate: Y, resetDateTime: u, getYearFromDate: I, checkHighlightYear: m, groupListAndMap: B } = je(), { checkRangeAutoApply: V, setMonthOrYearRange: C } = ra(), { checkMinMaxValue: N } = rt();
  zt(() => {
    s.isTextInputDate && (M.value = ke(r(n.startDate)));
  });
  const q = de(null), M = de();
  He(() => {
    n.startDate && (l.value && n.focusStartDate || !l.value) && (M.value = ke(r(n.startDate)));
  });
  const y = (ee) => Array.isArray(l.value) ? l.value.some((te) => ke(te) === ee) : l.value ? ke(l.value) === ee : !1, v = (ee) => D.value.enabled && Array.isArray(l.value) ? d(l.value, q.value, X(ee)) : !1, k = (ee) => $.value.allowedDates instanceof Map ? $.value.allowedDates.size ? $.value.allowedDates.has(`${ee}`) : !1 : !0, F = (ee) => $.value.disabledDates instanceof Map ? $.value.disabledDates.size ? $.value.disabledDates.has(`${ee}`) : !1 : typeof $.value.disabledDates == "function" ? $.value.disabledDates(st(u(Vt(r())), ee)) : !0, U = z(() => B(g(), (ee) => {
    const te = y(ee.value), Q = N(
      ee.value,
      I($.value.minDate),
      I($.value.maxDate)
    ) || S.value.years.includes(ee.value) || !k(ee.value) || F(ee.value), W = v(ee.value) && !te, x = m(o.value, ee.value);
    return { active: te, disabled: Q, isBetween: W, highlighted: x };
  })), X = (ee) => st(Y(Vt(r())), ee);
  return {
    groupedYears: U,
    focusYear: M,
    setHoverValue: (ee) => {
      q.value = st(Y(r()), ee);
    },
    selectYear: (ee) => {
      if (p("update-month-year", { instance: 0, year: ee, month: Number.NaN }), c.value.enabled)
        return l.value ? Array.isArray(l.value) && ((l.value?.map((Q) => ke(Q))).includes(ee) ? l.value = l.value.filter((Q) => ke(Q) !== ee) : l.value.push(st(u(r()), ee))) : l.value = [st(u(Vt(r())), ee)], w("auto-apply", !0);
      D.value.enabled ? (l.value = C(X(ee)), Xe().then(() => {
        V(l.value, w, n.autoApply, n.modelAuto);
      })) : (l.value = X(ee), w("auto-apply"));
    }
  };
}, Qr = /* @__PURE__ */ We({
  __name: "YearPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: w, emit: p }) {
    const r = p, s = e, {
      modelValue: l,
      defaults: { config: n },
      rootProps: o
    } = $e(), { groupedYears: c, focusYear: S, selectYear: D, setHoverValue: $ } = qr(s, r);
    return w({ getSidebarProps: () => ({
      modelValue: l,
      selectYear: D
    }) }), (d, Y) => (R(), K("div", null, [
      d.$slots["top-extra"] ? ue(d.$slots, "top-extra", {
        key: 0,
        value: t(l)
      }) : j("", !0),
      d.$slots["month-year"] ? ue(d.$slots, "month-year", Ze(tt({ key: 1 }, {
        years: t(c),
        selectYear: t(D)
      }))) : (R(), Ce(jt, {
        key: 2,
        items: t(c),
        "is-last": t(o).autoApply && !t(n).keepActionRow,
        height: t(n).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || t(o).textInput),
        "focus-value": t(S),
        type: "year",
        "use-relative": "",
        onSelected: t(D),
        onHoverValue: t($)
      }, Le({ _: 2 }, [
        d.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Me(({ item: u }) => [
            ue(d.$slots, "year-overlay-value", {
              text: u.text,
              value: u.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), Gr = {
  key: 0,
  class: "dp__time_input"
}, Xr = ["data-compact", "data-collapsed"], Jr = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], Zr = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], el = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], tl = { key: 0 }, al = ["aria-label", "data-compact"], nl = /* @__PURE__ */ We({
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
    const r = p, s = e, { setTimePickerElements: l, setTimePickerBackRef: n } = bt(), {
      getDate: o,
      rootEmit: c,
      rootProps: S,
      defaults: { ariaLabels: D, filters: $, config: g, range: d, multiCalendars: Y, timeConfig: u }
    } = $e(), { checkKeyDown: I, hoursToAmPmHours: m } = Fe(), { sanitizeTime: B, groupListAndMap: V } = je(), { transitionName: C, showTransition: N } = Kt(), q = Ft({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), M = de("AM"), y = de(null), v = de([]), k = de(), F = de(!1);
    He(() => {
      r("mounted");
    });
    const U = (a) => Ae(o(), {
      hours: a.hours,
      minutes: a.minutes,
      seconds: u.value.enableSeconds ? a.seconds : 0,
      milliseconds: 0
    }), X = z(
      () => (a) => ae(a, s[a]) || fe(a, s[a])
    ), le = z(() => ({ hours: s.hours, minutes: s.minutes, seconds: s.seconds })), fe = (a, T) => d.value.enabled && !d.value.disableTimeRangeValidation ? !s.validateTime(a, T) : !1, ee = (a, T) => {
      if (d.value.enabled && !d.value.disableTimeRangeValidation) {
        const i = T ? +u.value[`${a}Increment`] : -+u.value[`${a}Increment`], J = s[a] + i;
        return !s.validateTime(a, J);
      }
      return !1;
    }, te = z(() => (a) => !he(+s[a] + +u.value[`${a}Increment`], a) || ee(a, !0)), Q = z(() => (a) => !he(+s[a] - +u.value[`${a}Increment`], a) || ee(a, !1)), W = (a, T) => Na(Ae(o(), a), T), x = (a, T) => _n(Ae(o(), a), T), re = z(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !u.value.timePickerInline,
        dp__time_col_reg_block: !u.value.enableSeconds && u.value.is24 && !u.value.timePickerInline,
        dp__time_col_reg_inline: !u.value.enableSeconds && u.value.is24 && u.value.timePickerInline,
        dp__time_col_reg_with_button: !u.value.enableSeconds && !u.value.is24,
        dp__time_col_sec: u.value.enableSeconds && u.value.is24,
        dp__time_col_sec_with_button: u.value.enableSeconds && !u.value.is24
      })
    ), ve = z(
      () => u.value.timePickerInline && d.value.enabled && !Y.value.count
    ), ye = z(() => {
      const a = [{ type: "hours" }];
      return u.value.enableMinutes && a.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), u.value.enableSeconds && a.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), a;
    }), be = z(() => ye.value.filter((a) => !a.separator)), _e = z(() => (a) => {
      if (a === "hours") {
        const T = f(+s.hours);
        return { text: T < 10 ? `0${T}` : `${T}`, value: T };
      }
      return { text: s[a] < 10 ? `0${s[a]}` : `${s[a]}`, value: s[a] };
    }), ae = (a, T) => {
      if (!s.disabledTimesConfig) return !1;
      const i = s.disabledTimesConfig(s.order, a === "hours" ? T : void 0);
      return i[a] ? !!i[a]?.includes(T) : !0;
    }, pe = (a, T) => T !== "hours" || M.value === "AM" ? a : a + 12, G = (a) => {
      const T = u.value.is24 ? 24 : 12, i = a === "hours" ? T : 60, J = +u.value[`${a}GridIncrement`], Z = a === "hours" && !u.value.is24 ? J : 0, Se = [];
      for (let ce = Z; ce < i; ce += J)
        Se.push({
          value: u.value.is24 ? ce : pe(ce, a),
          text: ce < 10 ? `0${ce}` : `${ce}`
        });
      return a === "hours" && !u.value.is24 && Se.unshift({ value: M.value === "PM" ? 12 : 0, text: "12" }), V(Se, (ce) => ({ active: !1, disabled: $.value.times[a].includes(ce.value) || !he(ce.value, a) || ae(a, ce.value) || fe(a, ce.value) }));
    }, H = (a) => a >= 0 ? a : 59, se = (a) => a >= 0 ? a : 23, he = (a, T) => {
      const i = S.minTime ? U(B(S.minTime)) : null, J = S.maxTime ? U(B(S.maxTime)) : null, Z = U(
        B(
          le.value,
          T,
          T === "minutes" || T === "seconds" ? H(a) : se(a)
        )
      );
      return i && J ? (Rt(Z, J) || $t(Z, J)) && (Pt(Z, i) || $t(Z, i)) : i ? Pt(Z, i) || $t(Z, i) : J ? Rt(Z, J) || $t(Z, J) : !0;
    }, b = (a) => u.value[`no${a[0].toUpperCase() + a.slice(1)}Overlay`], A = (a) => {
      b(a) || (q[a] = !q[a], q[a] ? (F.value = !0, r("overlay-opened", a)) : (F.value = !1, r("overlay-closed", a)));
    }, ie = (a) => a === "hours" ? ct : a === "minutes" ? mt : gt, oe = () => {
      k.value && clearTimeout(k.value);
    }, h = (a, T = !0, i) => {
      const J = T ? W : x, Z = T ? +u.value[`${a}Increment`] : -+u.value[`${a}Increment`];
      he(+s[a] + Z, a) && r(
        `update:${a}`,
        ie(a)(
          J({ [a]: +s[a] }, { [a]: +u.value[`${a}Increment`] })
        )
      ), !i?.keyboard && g.value.timeArrowHoldThreshold && (k.value = setTimeout(() => {
        h(a, T);
      }, g.value.timeArrowHoldThreshold));
    }, f = (a) => u.value.is24 ? a : (a >= 12 ? M.value = "PM" : M.value = "AM", m(a)), P = () => {
      M.value === "PM" ? (M.value = "AM", r("update:hours", s.hours - 12)) : (M.value = "PM", r("update:hours", s.hours + 12)), c("am-pm-change", M.value);
    }, E = (a) => {
      q[a] = !0;
    }, L = (a, T, i) => {
      if (a && S.arrowNavigation) {
        Array.isArray(v.value[T]) ? v.value[T][i] = a : v.value[T] = [a];
        const J = v.value.reduce(
          (Z, Se) => Se.map((ce, Ue) => [...Z[Ue] || [], Se[Ue]]),
          []
        );
        n(s.closeTimePickerBtn), y.value && (J[1] = J[1].concat(y.value)), l(J, s.order);
      }
    }, O = (a, T) => (A(a), r(`update:${a}`, T));
    return w({ openChildCmp: E }), (a, T) => t(S).disabled ? j("", !0) : (R(), K("div", Gr, [
      (R(!0), K(De, null, Oe(ye.value, (i, J) => (R(), K("div", {
        key: J,
        class: we(re.value),
        "data-compact": ve.value && !t(u).enableSeconds,
        "data-collapsed": ve.value && t(u).enableSeconds
      }, [
        i.separator ? (R(), K(De, { key: 0 }, [
          F.value ? j("", !0) : (R(), K(De, { key: 0 }, [
            ft(":")
          ], 64))
        ], 64)) : (R(), K(De, { key: 1 }, [
          Pe("button", {
            ref_for: !0,
            ref: (Z) => L(Z, J, 0),
            type: "button",
            class: we({
              dp__btn: !0,
              dp__inc_dec_button: !t(u).timePickerInline,
              dp__inc_dec_button_inline: t(u).timePickerInline,
              dp__tp_inline_btn_top: t(u).timePickerInline,
              dp__inc_dec_button_disabled: te.value(i.type),
              "dp--hidden-el": F.value
            }),
            "data-test-id": `${i.type}-time-inc-btn-${s.order}`,
            "aria-label": t(D)?.incrementValue(i.type),
            tabindex: "0",
            onKeydown: (Z) => t(I)(Z, () => h(i.type, !0, { keyboard: !0 }), !0),
            onClick: (Z) => t(g).timeArrowHoldThreshold ? void 0 : h(i.type, !0),
            onMousedown: (Z) => t(g).timeArrowHoldThreshold ? h(i.type, !0) : void 0,
            onMouseup: oe
          }, [
            t(u).timePickerInline ? (R(), K(De, { key: 1 }, [
              a.$slots["tp-inline-arrow-up"] ? ue(a.$slots, "tp-inline-arrow-up", { key: 0 }) : (R(), K(De, { key: 1 }, [
                T[2] || (T[2] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                T[3] || (T[3] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (R(), K(De, { key: 0 }, [
              a.$slots["arrow-up"] ? ue(a.$slots, "arrow-up", { key: 0 }) : j("", !0),
              a.$slots["arrow-up"] ? j("", !0) : (R(), Ce(t(Ha), { key: 1 }))
            ], 64))
          ], 42, Jr),
          Pe("button", {
            ref_for: !0,
            ref: (Z) => L(Z, J, 1),
            type: "button",
            "aria-label": `${_e.value(i.type).text}-${t(D)?.openTpOverlay(i.type)}`,
            class: we({
              dp__time_display: !0,
              dp__time_display_block: !t(u).timePickerInline,
              dp__time_display_inline: t(u).timePickerInline,
              "dp--time-invalid": X.value(i.type),
              "dp--time-overlay-btn": !X.value(i.type),
              "dp--hidden-el": F.value
            }),
            disabled: b(i.type),
            tabindex: "0",
            "data-test-id": `${i.type}-toggle-overlay-btn-${s.order}`,
            onKeydown: (Z) => t(I)(Z, () => A(i.type), !0),
            onClick: (Z) => A(i.type)
          }, [
            a.$slots[i.type] ? ue(a.$slots, i.type, {
              key: 0,
              text: _e.value(i.type).text,
              value: _e.value(i.type).value
            }) : j("", !0),
            a.$slots[i.type] ? j("", !0) : (R(), K(De, { key: 1 }, [
              ft(ze(_e.value(i.type).text), 1)
            ], 64))
          ], 42, Zr),
          Pe("button", {
            ref_for: !0,
            ref: (Z) => L(Z, J, 2),
            type: "button",
            class: we({
              dp__btn: !0,
              dp__inc_dec_button: !t(u).timePickerInline,
              dp__inc_dec_button_inline: t(u).timePickerInline,
              dp__tp_inline_btn_bottom: t(u).timePickerInline,
              dp__inc_dec_button_disabled: Q.value(i.type),
              "dp--hidden-el": F.value
            }),
            "data-test-id": `${i.type}-time-dec-btn-${s.order}`,
            "aria-label": t(D)?.decrementValue(i.type),
            tabindex: "0",
            onKeydown: (Z) => t(I)(Z, () => h(i.type, !1, { keyboard: !0 }), !0),
            onClick: (Z) => t(g).timeArrowHoldThreshold ? void 0 : h(i.type, !1),
            onMousedown: (Z) => t(g).timeArrowHoldThreshold ? h(i.type, !1) : void 0,
            onMouseup: oe
          }, [
            t(u).timePickerInline ? (R(), K(De, { key: 1 }, [
              a.$slots["tp-inline-arrow-down"] ? ue(a.$slots, "tp-inline-arrow-down", { key: 0 }) : (R(), K(De, { key: 1 }, [
                T[4] || (T[4] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                T[5] || (T[5] = Pe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (R(), K(De, { key: 0 }, [
              a.$slots["arrow-down"] ? ue(a.$slots, "arrow-down", { key: 0 }) : j("", !0),
              a.$slots["arrow-down"] ? j("", !0) : (R(), Ce(t(Ka), { key: 1 }))
            ], 64))
          ], 42, el)
        ], 64))
      ], 10, Xr))), 128)),
      t(u).is24 ? j("", !0) : (R(), K("div", tl, [
        a.$slots["am-pm-button"] ? ue(a.$slots, "am-pm-button", {
          key: 0,
          toggle: P,
          value: M.value
        }) : j("", !0),
        a.$slots["am-pm-button"] ? j("", !0) : (R(), K("button", {
          key: 1,
          ref_key: "amPmButton",
          ref: y,
          type: "button",
          class: "dp__pm_am_button",
          role: "button",
          "aria-label": t(D)?.amPmButton,
          tabindex: "0",
          "data-compact": ve.value,
          onClick: P,
          onKeydown: T[0] || (T[0] = (i) => t(I)(i, () => P(), !0))
        }, ze(M.value), 41, al))
      ])),
      (R(!0), K(De, null, Oe(be.value, (i, J) => (R(), Ce(Yt, {
        key: J,
        name: t(C)(q[i.type]),
        css: t(N)
      }, {
        default: Me(() => [
          q[i.type] ? (R(), Ce(jt, {
            key: 0,
            items: G(i.type),
            "is-last": t(S).autoApply && !t(g).keepActionRow,
            type: i.type,
            "aria-labels": t(D),
            "overlay-label": t(D).timeOverlay?.(i.type),
            onSelected: (Z) => O(i.type, Z),
            onToggle: (Z) => A(i.type),
            onResetFlow: T[1] || (T[1] = (Z) => a.$emit("reset-flow"))
          }, Le({
            "button-icon": Me(() => [
              a.$slots["clock-icon"] ? ue(a.$slots, "clock-icon", { key: 0 }) : j("", !0),
              a.$slots["clock-icon"] ? j("", !0) : (R(), Ce(wa(t(u).timePickerInline ? t(Ht) : t(La)), { key: 1 }))
            ]),
            _: 2
          }, [
            a.$slots[`${i.type}-overlay-value`] ? {
              name: "item",
              fn: Me(({ item: Z }) => [
                ue(a.$slots, `${i.type}-overlay-value`, {
                  text: Z.text,
                  value: Z.value
                })
              ]),
              key: "0"
            } : void 0,
            a.$slots[`${i.type}-overlay-header`] ? {
              name: "header",
              fn: Me(() => [
                ue(a.$slots, `${i.type}-overlay-header`, {
                  toggle: () => A(i.type)
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["items", "is-last", "type", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : j("", !0)
        ]),
        _: 2
      }, 1032, ["name", "css"]))), 128))
    ]));
  }
}), rl = ["data-dp-mobile"], ll = ["aria-label", "tabindex"], ol = ["role", "aria-label", "tabindex"], sl = ["aria-label"], qa = /* @__PURE__ */ We({
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
    const r = p, s = e, {
      getDate: l,
      rootEmit: n,
      modelValue: o,
      rootProps: c,
      defaults: { ariaLabels: S, textInput: D, config: $, range: g, timeConfig: d }
    } = $e(), { isModelAuto: Y } = je(), { checkKeyDown: u, findFocusableEl: I } = Fe(), { buildMatrix: m, setTimePicker: B } = bt(), { transitionName: V, showTransition: C } = Kt(), { hideNavigationButtons: N } = aa(), { mapSlots: q } = kt(), { isMobile: M } = ea(), y = yt(), v = Ye("overlay"), k = Ye("open-tp-btn"), F = Ye("close-tp-btn"), U = Ye("tp-input"), X = de(!1);
    He(() => {
      r("mount"), !c.timePicker && c.arrowNavigation ? m([Ge(k.value)], "time") : B(!0, c.timePicker);
    });
    const le = z(() => g.value.enabled && c.modelAuto ? Y(o.value) : !0), fe = de(!1), ee = (G) => ({
      hours: Array.isArray(s.hours) ? s.hours[G] : s.hours,
      minutes: Array.isArray(s.minutes) ? s.minutes[G] : s.minutes,
      seconds: Array.isArray(s.seconds) ? s.seconds[G] : s.seconds
    }), te = z(() => {
      const G = [];
      if (g.value.enabled)
        for (let H = 0; H < 2; H++)
          G.push(ee(H));
      else
        G.push(ee(0));
      return G;
    }), Q = (G, H = !1, se = "") => {
      H || r("reset-flow"), fe.value = G, n("overlay-toggle", { open: G, overlay: Qe.time }), c.arrowNavigation && B(G), Xe(() => {
        se !== "" && U.value?.[0] && U.value[0].openChildCmp(se);
      });
    }, W = z(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: c.autoApply && !$.value.keepActionRow
    })), x = q(y, "timePicker"), re = (G, H, se) => g.value.enabled ? H === 0 ? [G, te.value[1][se]] : [te.value[0][se], G] : G, ve = (G) => {
      r("update:hours", G);
    }, ye = (G) => {
      r("update:minutes", G);
    }, be = (G) => {
      r("update:seconds", G);
    }, _e = () => {
      if (v.value && !D.value.enabled && !s.noOverlayFocus) {
        const G = I(v.value);
        G && G.focus({ preventScroll: !0 });
      }
    }, ae = (G) => {
      X.value = !1, n("overlay-toggle", { open: !1, overlay: G });
    }, pe = (G) => {
      X.value = !0, n("overlay-toggle", { open: !0, overlay: G });
    };
    return w({ toggleTimePicker: Q }), (G, H) => (R(), K("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(M)
    }, [
      !t(c).timePicker && !t(d).timePickerInline ? Xt((R(), K("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        class: we({ ...W.value, "dp--hidden-el": fe.value }),
        "aria-label": t(S)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: H[0] || (H[0] = (se) => t(u)(se, () => Q(!0))),
        onClick: H[1] || (H[1] = (se) => Q(!0))
      }, [
        G.$slots["clock-icon"] ? ue(G.$slots, "clock-icon", { key: 0 }) : j("", !0),
        G.$slots["clock-icon"] ? j("", !0) : (R(), Ce(t(La), { key: 1 }))
      ], 42, ll)), [
        [Jt, !t(N)("time")]
      ]) : j("", !0),
      nt(Yt, {
        name: t(V)(fe.value),
        css: t(C) && !t(d).timePickerInline
      }, {
        default: Me(() => [
          fe.value || t(c).timePicker || t(d).timePickerInline ? (R(), K("div", {
            key: 0,
            ref: "overlay",
            role: t(d).timePickerInline ? void 0 : "dialog",
            class: we({
              dp__overlay: !t(d).timePickerInline,
              "dp--overlay-absolute": !t(c).timePicker && !t(d).timePickerInline,
              "dp--overlay-relative": t(c).timePicker
            }),
            style: et(t(c).timePicker ? { height: `${t($).modeHeight}px` } : void 0),
            "aria-label": t(S)?.timePicker,
            tabindex: t(d).timePickerInline ? void 0 : 0
          }, [
            Pe("div", {
              class: we(
                t(d).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
              ),
              style: { display: "flex" }
            }, [
              G.$slots["time-picker-overlay"] ? ue(G.$slots, "time-picker-overlay", {
                key: 0,
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: ve,
                setMinutes: ye,
                setSeconds: be
              }) : j("", !0),
              G.$slots["time-picker-overlay"] ? j("", !0) : (R(), K("div", {
                key: 1,
                class: we(t(d).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
              }, [
                (R(!0), K(De, null, Oe(te.value, (se, he) => Xt((R(), Ce(nl, tt({ key: he }, { ref_for: !0 }, {
                  order: he,
                  hours: se.hours,
                  minutes: se.minutes,
                  seconds: se.seconds,
                  closeTimePickerBtn: F.value,
                  disabledTimesConfig: e.disabledTimesConfig,
                  disabled: he === 0 ? t(g).fixedStart : t(g).fixedEnd
                }, {
                  ref_for: !0,
                  ref: "tp-input",
                  "validate-time": (b, A) => e.validateTime(b, re(A, he, b)),
                  "onUpdate:hours": (b) => ve(re(b, he, "hours")),
                  "onUpdate:minutes": (b) => ye(re(b, he, "minutes")),
                  "onUpdate:seconds": (b) => be(re(b, he, "seconds")),
                  onMounted: _e,
                  onOverlayClosed: ae,
                  onOverlayOpened: pe
                }), Le({ _: 2 }, [
                  Oe(t(x), (b, A) => ({
                    name: b,
                    fn: Me((ie) => [
                      ue(G.$slots, b, tt({ ref_for: !0 }, ie))
                    ])
                  }))
                ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [Jt, he === 0 ? !0 : le.value]
                ])), 128))
              ], 2)),
              !t(c).timePicker && !t(d).timePickerInline ? Xt((R(), K("button", {
                key: 2,
                ref: "close-tp-btn",
                type: "button",
                class: we({ ...W.value, "dp--hidden-el": X.value }),
                "aria-label": t(S)?.closeTimePicker,
                tabindex: "0",
                onKeydown: H[2] || (H[2] = (se) => t(u)(se, () => Q(!1))),
                onClick: H[3] || (H[3] = (se) => Q(!1))
              }, [
                G.$slots["calendar-icon"] ? ue(G.$slots, "calendar-icon", { key: 0 }) : j("", !0),
                G.$slots["calendar-icon"] ? j("", !0) : (R(), Ce(t(Ht), { key: 1 }))
              ], 42, sl)), [
                [Jt, !t(N)("time")]
              ]) : j("", !0)
            ], 2)
          ], 14, ol)) : j("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 8, rl));
  }
}), Qa = (e) => {
  const {
    getDate: w,
    modelValue: p,
    time: r,
    rootProps: s,
    defaults: { range: l, timeConfig: n }
  } = $e(), { isDateEqual: o, setTime: c } = je(), S = (M, y) => Array.isArray(r[M]) ? r[M][y] : r[M], D = (M) => n.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[M] : r.seconds : 0, $ = (M, y) => M ? c(
    y !== void 0 ? { hours: S("hours", y), minutes: S("minutes", y), seconds: D(y) } : { hours: r.hours, minutes: r.minutes, seconds: D() },
    M
  ) : Pn(w(), D(y)), g = (M, y) => {
    r[M] = y;
  }, d = z(() => s.modelAuto && l.value.enabled ? Array.isArray(p.value) ? p.value.length > 1 : !1 : l.value.enabled), Y = (M, y) => {
    const v = Object.fromEntries(
      Object.keys(r).map((k) => k === M ? [k, y] : [k, r[k]].slice())
    );
    if (d.value && !l.value.disableTimeRangeValidation) {
      const k = (U) => p.value ? c(
        {
          hours: v.hours[U],
          minutes: v.minutes[U],
          seconds: v.seconds[U]
        },
        p.value[U]
      ) : null, F = (U) => An(p.value[U], 0);
      return !(o(k(0), k(1)) && (Pt(k(0), F(1)) || Rt(k(1), F(0))));
    }
    return !0;
  }, u = (M, y) => {
    Y(M, y) && (g(M, y), e && e());
  }, I = (M) => {
    u("hours", M);
  }, m = (M) => {
    u("minutes", M);
  }, B = (M) => {
    u("seconds", M);
  }, V = (M, y, v, k) => {
    y && I(M), !y && !v && m(M), v && B(M), p.value && k(p.value);
  }, C = (M) => {
    if (M) {
      const y = Array.isArray(M), v = y ? [+M[0].hours, +M[1].hours] : +M.hours, k = y ? [+M[0].minutes, +M[1].minutes] : +M.minutes, F = y ? [+(M[0].seconds ?? 0), +(M[1].seconds ?? 0)] : +(M.seconds ?? 0);
      g("hours", v), g("minutes", k), n.value.enableSeconds && g("seconds", F);
    }
  }, N = (M, y) => {
    const v = {
      hours: Array.isArray(r.hours) ? r.hours[M] : r.hours,
      disabledArr: []
    };
    return (y || y === 0) && (v.hours = y), Array.isArray(s.disabledTimes) && (v.disabledArr = l.value.enabled && Array.isArray(s.disabledTimes[M]) ? s.disabledTimes[M] : s.disabledTimes), v;
  }, q = z(() => (M, y) => {
    if (Array.isArray(s.disabledTimes)) {
      const { disabledArr: v, hours: k } = N(M, y), F = v.filter((U) => +U.hours === k);
      return F[0]?.minutes === "*" ? { hours: [k], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: F?.map((U) => +U.minutes) ?? [],
        seconds: F?.map((U) => U.seconds ? +U.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: g,
    updateHours: I,
    updateMinutes: m,
    updateSeconds: B,
    getSetDateTime: $,
    updateTimeValues: V,
    getSecondsValue: D,
    assignStartTime: C,
    validateTime: Y,
    disabledTimesConfig: q
  };
}, ul = (e) => {
  const {
    getDate: w,
    time: p,
    modelValue: r,
    state: s,
    defaults: { startTime: l, range: n, timeConfig: o }
  } = $e(), { getTimeObj: c } = je();
  zt(() => {
    s.isTextInputDate && N();
  });
  const { updateTimeValues: S, getSetDateTime: D, assignTime: $, assignStartTime: g, disabledTimesConfig: d, validateTime: Y } = Qa(u);
  function u() {
    e("update-flow-step");
  }
  const I = (y) => {
    const { hours: v, minutes: k, seconds: F } = y;
    return { hours: +v, minutes: +k, seconds: F ? +F : 0 };
  }, m = () => {
    if (o.value.startTime) {
      if (Array.isArray(o.value.startTime)) {
        const v = I(o.value.startTime[0]), k = I(o.value.startTime[1]);
        return [Ae(w(), v), Ae(w(), k)];
      }
      const y = I(o.value.startTime);
      return Ae(w(), y);
    }
    return n.value.enabled ? [null, null] : null;
  }, B = () => {
    if (n.value.enabled) {
      const [y, v] = m();
      r.value = [D(y, 0), D(v, 1)];
    } else
      r.value = D(m());
  }, V = (y) => Array.isArray(y) ? [c(w(y[0])), c(w(y[1]))] : [c(y ?? w())], C = (y, v, k) => {
    $("hours", y), $("minutes", v), $("seconds", o.value.enableSeconds ? k : 0);
  }, N = () => {
    const [y, v] = V(r.value);
    return n.value.enabled ? C(
      [y.hours, v.hours],
      [y.minutes, v.minutes],
      [y.seconds, v.seconds]
    ) : C(y.hours, y.minutes, y.seconds);
  };
  He(() => (g(l.value), r.value ? N() : B()));
  const q = () => {
    Array.isArray(r.value) ? r.value = r.value.map((y, v) => y && D(y, v)) : r.value = D(r.value), e("time-update");
  };
  return {
    modelValue: r,
    time: p,
    disabledTimesConfig: d,
    validateTime: Y,
    updateTime: (y, v = !0, k = !1) => {
      S(y, v, k, q);
    }
  };
}, il = /* @__PURE__ */ We({
  __name: "TimePickerSolo",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["time-update", "mount", "reset-flow", "update-flow-step"],
  setup(e, { expose: w, emit: p }) {
    const r = p, s = yt(), { mapSlots: l } = kt(), n = l(s, "timePicker"), o = Ye("time-input"), { time: c, modelValue: S, disabledTimesConfig: D, updateTime: $, validateTime: g } = ul(r);
    return He(() => {
      r("mount");
    }), w({ getSidebarProps: () => ({
      modelValue: S,
      time: c,
      updateTime: $
    }), toggleTimePicker: (u, I = !1, m = "") => {
      o.value?.toggleTimePicker(u, I, m);
    } }), (u, I) => (R(), Ce(na, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Me(({ wrapClass: m }) => [
        Pe("div", {
          class: we(m)
        }, [
          nt(qa, tt({ ref: "time-input" }, u.$props, {
            hours: t(c).hours,
            minutes: t(c).minutes,
            seconds: t(c).seconds,
            "disabled-times-config": t(D),
            "validate-time": t(g),
            "onUpdate:hours": I[0] || (I[0] = (B) => t($)(B)),
            "onUpdate:minutes": I[1] || (I[1] = (B) => t($)(B, !1)),
            "onUpdate:seconds": I[2] || (I[2] = (B) => t($)(B, !1, !0)),
            onResetFlow: I[3] || (I[3] = (B) => u.$emit("reset-flow"))
          }), Le({ _: 2 }, [
            Oe(t(n), (B, V) => ({
              name: B,
              fn: Me((C) => [
                ue(u.$slots, B, Ze(ut(C)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), cl = (e, w) => {
  const {
    getDate: p,
    rootProps: r,
    defaults: { filters: s }
  } = $e(), { validateMonthYearInRange: l, validateMonthYear: n } = rt(), o = (g, d) => {
    let Y = g;
    return s.value.months.includes(Te(Y)) ? (Y = d ? _t(g, 1) : Lt(g, 1), o(Y, d)) : Y;
  }, c = (g, d) => {
    let Y = g;
    return s.value.years.includes(ke(Y)) ? (Y = d ? Ea(g, 1) : Va(g, 1), c(Y, d)) : Y;
  }, S = (g, d = !1) => {
    const Y = Ae(p(), { month: e.month, year: e.year });
    let u = g ? _t(Y, 1) : Lt(Y, 1);
    r.disableYearSelect && (u = st(u, e.year));
    let I = Te(u), m = ke(u);
    s.value.months.includes(I) && (u = o(u, g), I = Te(u), m = ke(u)), s.value.years.includes(m) && (u = c(u, g), m = ke(u)), l(I, m, g, r.preventMinMaxNavigation) && D(I, m, d);
  }, D = (g, d, Y) => {
    w("update-month-year", { month: g, year: d, fromNav: Y });
  }, $ = z(() => (g) => n(
    Ae(p(), { month: e.month, year: e.year }),
    r.preventMinMaxNavigation,
    g
  ));
  return { handleMonthYearChange: S, isDisabled: $, updateMonthYear: D };
}, dl = { class: "dp--header-wrap" }, vl = {
  key: 0,
  class: "dp__month_year_wrap"
}, fl = { key: 0 }, ml = { class: "dp__month_year_wrap" }, pl = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], hl = /* @__PURE__ */ We({
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
    const r = p, s = e, {
      rootEmit: l,
      rootProps: n,
      modelValue: o,
      defaults: { ariaLabels: c, filters: S, config: D, highlight: $, safeDates: g, ui: d }
    } = $e(), { transitionName: Y, showTransition: u } = Kt(), { showLeftIcon: I, showRightIcon: m } = aa(), { buildMatrix: B } = bt(), { handleMonthYearChange: V, isDisabled: C, updateMonthYear: N } = cl(s, r), { getMaxMonth: q, getMinMonth: M, getYearFromDate: y, groupListAndMap: v, checkHighlightYear: k, checkHighlightMonth: F } = je(), { checkKeyDown: U } = Fe(), { formatYear: X } = Tt(), { checkMinMaxValue: le } = rt(), fe = de(!1), ee = de(!1), te = de(!1), Q = de([null, null, null, null]);
    He(() => {
      r("mount");
    });
    const W = (A) => ({
      get: () => s[A],
      set: (ie) => {
        const oe = A === lt.month ? lt.year : lt.month;
        r("update-month-year", { [A]: ie, [oe]: s[oe] }), A === lt.month ? pe(!0) : G(!0);
      }
    }), x = z(W(lt.month)), re = z(W(lt.year)), ve = z(() => (A) => ({
      month: s.month,
      year: s.year,
      items: A === lt.month ? s.months : s.years,
      instance: s.instance,
      updateMonthYear: N,
      toggle: A === lt.month ? pe : G
    })), ye = z(() => {
      const A = s.months.find((ie) => ie.value === s.month);
      return A || { text: "", value: 0 };
    }), be = z(() => v(s.months, (A) => {
      const ie = s.month === A.value, oe = le(
        A.value,
        M(s.year, g.value.minDate),
        q(s.year, g.value.maxDate)
      ) || S.value.months.includes(A.value), h = F($.value, A.value, s.year);
      return { active: ie, disabled: oe, highlighted: h };
    })), _e = z(() => v(s.years, (A) => {
      const ie = s.year === A.value, oe = le(
        A.value,
        y(g.value.minDate),
        y(g.value.maxDate)
      ) || S.value.years.includes(A.value), h = k($.value, A.value);
      return { active: ie, disabled: oe, highlighted: h };
    })), ae = (A, ie, oe) => {
      oe === void 0 ? A.value = !A.value : A.value = oe, A.value ? (te.value = !0, r("overlay-opened", ie)) : (te.value = !1, l("overlay-toggle", { open: !1, overlay: ie }));
    }, pe = (A = !1, ie) => {
      H(A), ae(fe, Qe.month, ie);
    }, G = (A = !1, ie) => {
      H(A), ae(ee, Qe.year, ie);
    }, H = (A) => {
      A || r("reset-flow");
    }, se = (A, ie) => {
      n.arrowNavigation && (Q.value[ie] = Ge(A), B(Q.value, "monthYear"));
    }, he = z(() => [
      {
        type: lt.month,
        index: 1,
        toggle: pe,
        modelValue: x.value,
        updateModelValue: (A) => x.value = A,
        text: ye.value.text,
        showSelectionGrid: fe.value,
        items: be.value,
        ariaLabel: c.value?.openMonthsOverlay,
        overlayLabel: c.value.monthPicker?.(!0) ?? void 0
      },
      {
        type: lt.year,
        index: 2,
        toggle: G,
        modelValue: re.value,
        updateModelValue: (A) => re.value = A,
        text: X(s.year),
        showSelectionGrid: ee.value,
        items: _e.value,
        ariaLabel: c.value?.openYearsOverlay,
        overlayLabel: c.value.yearPicker?.(!0) ?? void 0
      }
    ]), b = z(() => n.disableYearSelect ? [he.value[0]] : n.yearFirst ? [...he.value].reverse() : he.value);
    return w({
      toggleMonthPicker: pe,
      toggleYearPicker: G,
      handleMonthYearChange: V
    }), (A, ie) => (R(), K("div", dl, [
      A.$slots["month-year"] ? (R(), K("div", vl, [
        ue(A.$slots, "month-year", Ze(ut({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(N),
          handleMonthYearChange: t(V),
          instance: e.instance,
          isDisabled: t(C)
        })))
      ])) : (R(), K(De, { key: 1 }, [
        A.$slots["top-extra"] ? (R(), K("div", fl, [
          ue(A.$slots, "top-extra", { value: t(o) })
        ])) : j("", !0),
        Pe("div", ml, [
          t(I)(e.instance) && !t(n).vertical ? (R(), Ce(Nt, {
            key: 0,
            "aria-label": t(c)?.prevMonth,
            disabled: t(C)(!1),
            class: we(t(d)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: ie[0] || (ie[0] = (oe) => t(V)(!1, !0)),
            onSetRef: ie[1] || (ie[1] = (oe) => se(oe, 0))
          }, {
            default: Me(() => [
              A.$slots["arrow-left"] ? ue(A.$slots, "arrow-left", { key: 0 }) : j("", !0),
              A.$slots["arrow-left"] ? j("", !0) : (R(), Ce(t(Fa), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : j("", !0),
          Pe("div", {
            class: we(["dp__month_year_wrap", {
              dp__year_disable_select: t(n).disableYearSelect
            }])
          }, [
            (R(!0), K(De, null, Oe(b.value, (oe, h) => (R(), K(De, {
              key: oe.type
            }, [
              Pe("button", {
                ref_for: !0,
                ref: (f) => se(f, h + 1),
                type: "button",
                "data-dp-element": `overlay-${oe.type}`,
                class: we(["dp__btn dp__month_year_select", { "dp--hidden-el": te.value }]),
                "aria-label": `${oe.text}-${oe.ariaLabel}`,
                "data-test-id": `${oe.type}-toggle-overlay-${e.instance}`,
                onClick: (f) => oe.toggle(!1),
                onKeydown: (f) => t(U)(f, () => oe.toggle(), !0)
              }, [
                A.$slots[oe.type] ? ue(A.$slots, oe.type, {
                  key: 0,
                  text: oe.text,
                  value: s[oe.type]
                }) : j("", !0),
                A.$slots[oe.type] ? j("", !0) : (R(), K(De, { key: 1 }, [
                  ft(ze(oe.text), 1)
                ], 64))
              ], 42, pl),
              nt(Yt, {
                name: t(Y)(oe.showSelectionGrid),
                css: t(u)
              }, {
                default: Me(() => [
                  oe.showSelectionGrid ? (R(), Ce(jt, {
                    key: 0,
                    items: oe.items,
                    "is-last": t(n).autoApply && !t(D).keepActionRow,
                    "skip-button-ref": !1,
                    type: oe.type,
                    "header-refs": [],
                    "menu-wrap-ref": e.menuWrapRef,
                    "overlay-label": oe.overlayLabel,
                    onSelected: oe.updateModelValue,
                    onToggle: oe.toggle
                  }, Le({
                    "button-icon": Me(() => [
                      A.$slots["calendar-icon"] ? ue(A.$slots, "calendar-icon", { key: 0 }) : j("", !0),
                      A.$slots["calendar-icon"] ? j("", !0) : (R(), Ce(t(Ht), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    A.$slots[`${oe.type}-overlay-value`] ? {
                      name: "item",
                      fn: Me(({ item: f }) => [
                        ue(A.$slots, `${oe.type}-overlay-value`, {
                          text: f.text,
                          value: f.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    A.$slots[`${oe.type}-overlay`] ? {
                      name: "overlay",
                      fn: Me(() => [
                        ue(A.$slots, `${oe.type}-overlay`, tt({ ref_for: !0 }, ve.value(oe.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    A.$slots[`${oe.type}-overlay-header`] ? {
                      name: "header",
                      fn: Me(() => [
                        ue(A.$slots, `${oe.type}-overlay-header`, {
                          toggle: oe.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "is-last", "type", "menu-wrap-ref", "overlay-label", "onSelected", "onToggle"])) : j("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          t(I)(e.instance) && t(n).vertical ? (R(), Ce(Nt, {
            key: 1,
            "aria-label": t(c)?.prevMonth,
            "el-name": "action-prev",
            disabled: t(C)(!1),
            class: we(t(d)?.navBtnPrev),
            onActivate: ie[2] || (ie[2] = (oe) => t(V)(!1, !0))
          }, {
            default: Me(() => [
              A.$slots["arrow-up"] ? ue(A.$slots, "arrow-up", { key: 0 }) : j("", !0),
              A.$slots["arrow-up"] ? j("", !0) : (R(), Ce(t(Ha), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : j("", !0),
          t(m)(e.instance) ? (R(), Ce(Nt, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t(C)(!0),
            "aria-label": t(c)?.nextMonth,
            class: we(t(d)?.navBtnNext),
            onActivate: ie[3] || (ie[3] = (oe) => t(V)(!0, !0)),
            onSetRef: ie[4] || (ie[4] = (oe) => se(oe, t(n).disableYearSelect ? 2 : 3))
          }, {
            default: Me(() => [
              A.$slots[t(n).vertical ? "arrow-down" : "arrow-right"] ? ue(A.$slots, t(n).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : j("", !0),
              A.$slots[t(n).vertical ? "arrow-down" : "arrow-right"] ? j("", !0) : (R(), Ce(wa(t(n).vertical ? t(Ka) : t(Wa)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label", "class"])) : j("", !0)
        ])
      ], 64))
    ]));
  }
}), gl = {
  class: "dp__calendar_header",
  role: "row"
}, yl = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, bl = ["aria-label"], kl = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, wl = { class: "dp__cell_inner" }, Dl = ["id", "aria-selected", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Ml = /* @__PURE__ */ We({
  __name: "DpCalendar",
  props: {
    instance: {},
    mappedDates: {},
    month: {},
    year: {}
  },
  emits: ["mount", "select-date", "set-hover-date", "handle-scroll", "handle-swipe"],
  setup(e, { expose: w, emit: p }) {
    const r = p, s = e, {
      getDate: l,
      rootEmit: n,
      rootProps: o,
      defaults: { transitions: c, config: S, ariaLabels: D, multiCalendars: $, weekNumbers: g, multiDates: d, ui: Y }
    } = $e(), { buildMultiLevelMatrix: u } = bt(), { isDateAfter: I, isDateEqual: m, resetDateTime: B, getCellId: V } = je(), { checkKeyDown: C, checkStopPropagation: N, isTouchDevice: q } = Fe(), { formatWeekDay: M } = Tt(), y = Ye("calendar-wrap"), v = Ye("active-tooltip"), k = de([]), F = de(null), U = de(!0), X = de(!1), le = de(""), fe = de({
      bottom: "",
      left: "",
      transform: ""
    }), ee = de({ startX: 0, endX: 0, startY: 0, endY: 0 }), te = de({ left: "50%" }), Q = z(() => o.calendar ? o.calendar(s.mappedDates) : s.mappedDates), W = z(() => o.dayNames ? Array.isArray(o.dayNames) ? o.dayNames : o.dayNames() : T());
    He(() => {
      r("mount", { cmp: "calendar", dayRefs: k.value }), S.value.noSwipe || y.value && (y.value.addEventListener("touchstart", b, { passive: !1 }), y.value.addEventListener("touchend", A, { passive: !1 }), y.value.addEventListener("touchmove", ie, { passive: !1 })), S.value.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", f, { passive: !1 });
    }), Ct(() => {
      S.value.noSwipe || y.value && (y.value.removeEventListener("touchstart", b), y.value.removeEventListener("touchend", A), y.value.removeEventListener("touchmove", ie)), S.value.monthChangeOnScroll && y.value && y.value.removeEventListener("wheel", f);
    });
    const x = (i) => i ? o.vertical ? "vNext" : "next" : o.vertical ? "vPrevious" : "previous", re = (i, J) => {
      if (o.transitions) {
        const Z = B(Ae(l(), { month: s.month, year: s.year }));
        le.value = I(B(Ae(l(), { month: i, year: J })), Z) ? c.value[x(!0)] : c.value[x(!1)], U.value = !1, Xe(() => {
          U.value = !0;
        });
      }
    }, ve = z(
      () => ({
        ...Y.value.calendar
      })
    ), ye = (i) => ({ type: "dot", ...i }), be = z(() => (i) => {
      const J = ye(i);
      return {
        dp__marker_dot: J.type === "dot",
        dp__marker_line: J.type === "line"
      };
    }), _e = z(() => (i) => m(i, F.value)), ae = z(() => ({
      dp__calendar: !0,
      dp__calendar_next: $.value.count > 0 && s.instance !== 0
    })), pe = z(() => (i) => o.hideOffsetDates ? i.current : !0), G = async (i, J) => {
      const { width: Z, height: Se } = i.getBoundingClientRect();
      F.value = J.value;
      let ce = { left: `${Z / 2}px` }, Ue = -50;
      if (await Xe(), v.value?.[0]) {
        const { left: Be, width: dt } = v.value[0].getBoundingClientRect();
        Be < 0 && (ce = { left: "0" }, Ue = 0, te.value.left = `${Z / 2}px`), globalThis.innerWidth < Be + dt && (ce = { right: "0" }, Ue = 0, te.value.left = `${dt - Z / 2}px`);
      }
      fe.value = {
        bottom: `${Se}px`,
        ...ce,
        transform: `translateX(${Ue}%)`
      };
    }, H = async (i, J, Z) => {
      const Se = Ge(k.value?.[J]?.[Z]);
      Se && (i.marker?.customPosition && i.marker?.tooltip?.length ? fe.value = i.marker.customPosition(Se) : await G(Se, i), n("tooltip-open", i.marker));
    }, se = async (i, J, Z) => {
      if (X.value && d.value.enabled && d.value.dragSelect)
        return r("select-date", i);
      if (r("set-hover-date", i), i.marker?.tooltip?.length) {
        if (o.hideOffsetDates && !i.current) return;
        await H(i, J, Z);
      }
    }, he = (i) => {
      F.value && (F.value = null, fe.value = structuredClone({ bottom: "", left: "", transform: "" }), n("tooltip-close", i.marker));
    }, b = (i) => {
      ee.value.startX = i.changedTouches[0].screenX, ee.value.startY = i.changedTouches[0].screenY;
    }, A = (i) => {
      ee.value.endX = i.changedTouches[0].screenX, ee.value.endY = i.changedTouches[0].screenY, oe();
    }, ie = (i) => {
      o.vertical && !o.inline && i.preventDefault();
    }, oe = () => {
      const i = o.vertical ? "Y" : "X";
      Math.abs(ee.value[`start${i}`] - ee.value[`end${i}`]) > 10 && r("handle-swipe", ee.value[`start${i}`] > ee.value[`end${i}`] ? "right" : "left");
    }, h = (i, J, Z) => {
      i && (Array.isArray(k.value[J]) ? k.value[J][Z] = i : k.value[J] = [i]), o.arrowNavigation && u(k.value, "calendar");
    }, f = (i) => {
      S.value.monthChangeOnScroll && (i.preventDefault(), r("handle-scroll", i));
    }, P = (i) => g.value.type === "local" ? Tn(i.value, { weekStartsOn: +o.weekStart }) : g.value.type === "iso" ? $n(i.value) : typeof g.value.type == "function" ? g.value.type(i.value) : "", E = (i) => {
      const J = i[0];
      return g.value.hideOnOffsetDates ? i.some((Z) => Z.current) ? P(J) : "" : P(J);
    }, L = (i, J, Z = !0) => {
      !Z && q() || (!d.value.enabled || S.value.allowPreventDefault) && (N(i, S.value), r("select-date", J));
    }, O = (i) => {
      N(i, S.value);
    }, a = (i) => {
      d.value.enabled && d.value.dragSelect ? (X.value = !0, r("select-date", i)) : d.value.enabled && r("select-date", i);
    }, T = () => {
      const J = [1, 2, 3, 4, 5, 6, 7].map((ce) => M(ce)), Z = J.slice(0, +o.weekStart), Se = J.slice(+o.weekStart + 1, J.length);
      return [J[+o.weekStart]].concat(...Se).concat(...Z);
    };
    return w({ triggerTransition: re }), (i, J) => (R(), K("div", {
      class: we(ae.value)
    }, [
      Pe("div", {
        ref: "calendar-wrap",
        class: we(ve.value),
        role: "grid"
      }, [
        Pe("div", gl, [
          t(o).weekNumbers ? (R(), K("div", yl, ze(t(o).weekNumName), 1)) : j("", !0),
          (R(!0), K(De, null, Oe(W.value, (Z, Se) => (R(), K("div", {
            key: Se,
            class: "dp__calendar_header_item",
            role: "gridcell",
            "data-test-id": "calendar-header",
            "aria-label": t(D)?.weekDay?.(Se)
          }, [
            i.$slots["calendar-header"] ? ue(i.$slots, "calendar-header", {
              key: 0,
              day: Z,
              index: Se
            }) : j("", !0),
            i.$slots["calendar-header"] ? j("", !0) : (R(), K(De, { key: 1 }, [
              ft(ze(Z), 1)
            ], 64))
          ], 8, bl))), 128))
        ]),
        J[2] || (J[2] = Pe("div", { class: "dp__calendar_header_separator" }, null, -1)),
        nt(Yt, {
          name: le.value,
          css: !!t(c)
        }, {
          default: Me(() => [
            U.value ? (R(), K("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: J[1] || (J[1] = (Z) => X.value = !1)
            }, [
              (R(!0), K(De, null, Oe(Q.value, (Z, Se) => (R(), K("div", {
                key: Se,
                class: "dp__calendar_row",
                role: "row"
              }, [
                t(o).weekNumbers ? (R(), K("div", kl, [
                  Pe("div", wl, ze(E(Z.days)), 1)
                ])) : j("", !0),
                (R(!0), K(De, null, Oe(Z.days, (ce, Ue) => (R(), K("div", {
                  id: t(V)(ce.value),
                  ref_for: !0,
                  ref: (Be) => h(Be, Se, Ue),
                  key: Ue + Se,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (ce.classData.dp__active_date || ce.classData.dp__range_start || ce.classData.dp__range_end) ?? void 0,
                  "aria-disabled": ce.classData.dp__cell_disabled || void 0,
                  "aria-label": t(D)?.day?.(ce),
                  tabindex: !ce.current && t(o).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(V)(ce.value),
                  onClick: Wt((Be) => L(Be, ce), ["prevent"]),
                  onTouchend: (Be) => L(Be, ce, !1),
                  onKeydown: (Be) => t(C)(Be, () => i.$emit("select-date", ce)),
                  onMouseenter: (Be) => se(ce, Se, Ue),
                  onMouseleave: (Be) => he(ce),
                  onMousedown: (Be) => a(ce),
                  onMouseup: J[0] || (J[0] = (Be) => X.value = !1)
                }, [
                  Pe("div", {
                    class: we(["dp__cell_inner", ce.classData])
                  }, [
                    i.$slots.day && pe.value(ce) ? ue(i.$slots, "day", {
                      key: 0,
                      day: +ce.text,
                      date: ce.value
                    }) : j("", !0),
                    i.$slots.day ? j("", !0) : (R(), K(De, { key: 1 }, [
                      ft(ze(ce.text), 1)
                    ], 64)),
                    ce.marker && pe.value(ce) ? (R(), K(De, { key: 2 }, [
                      i.$slots.marker ? ue(i.$slots, "marker", {
                        key: 0,
                        marker: ce.marker,
                        day: +ce.text,
                        date: ce.value
                      }) : (R(), K("div", {
                        key: 1,
                        class: we(be.value(ce.marker)),
                        style: et(ce.marker.color ? { backgroundColor: ce.marker.color } : {})
                      }, null, 6))
                    ], 64)) : j("", !0),
                    _e.value(ce.value) ? (R(), K("div", {
                      key: 3,
                      ref_for: !0,
                      ref: "active-tooltip",
                      class: "dp__marker_tooltip",
                      style: et(fe.value)
                    }, [
                      ce.marker?.tooltip ? (R(), K("div", {
                        key: 0,
                        class: "dp__tooltip_content",
                        onClick: O
                      }, [
                        (R(!0), K(De, null, Oe(ce.marker.tooltip, (Be, dt) => (R(), K("div", {
                          key: dt,
                          class: "dp__tooltip_text"
                        }, [
                          i.$slots["marker-tooltip"] ? ue(i.$slots, "marker-tooltip", {
                            key: 0,
                            tooltip: Be,
                            day: ce.value
                          }) : j("", !0),
                          i.$slots["marker-tooltip"] ? j("", !0) : (R(), K(De, { key: 1 }, [
                            Pe("div", {
                              class: "dp__tooltip_mark",
                              style: et(Be.color ? { backgroundColor: Be.color } : {})
                            }, null, 4),
                            Pe("div", null, ze(Be.text), 1)
                          ], 64))
                        ]))), 128)),
                        Pe("div", {
                          class: "dp__arrow_bottom_tp",
                          style: et(te.value)
                        }, null, 4)
                      ])) : j("", !0)
                    ], 4)) : j("", !0)
                  ], 2)
                ], 40, Dl))), 128))
              ]))), 128))
            ], 32)) : j("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), _l = (e, w, p, r) => {
  const s = de([]), l = de(/* @__PURE__ */ new Date()), n = de(), {
    getDate: o,
    rootEmit: c,
    calendars: S,
    month: D,
    year: $,
    time: g,
    modelValue: d,
    rootProps: Y,
    today: u,
    state: I,
    defaults: { multiCalendars: m, startTime: B, range: V, config: C, safeDates: N, multiDates: q, timeConfig: M, flow: y }
  } = $e(), { validateMonthYearInRange: v, isDisabled: k, isDateRangeAllowed: F, checkMinMaxRange: U } = rt(), { updateTimeValues: X, getSetDateTime: le, assignTime: fe, assignStartTime: ee, validateTime: te, disabledTimesConfig: Q } = Qa(r), { resetDateTime: W, setTime: x, isDateBefore: re, isDateEqual: ve, getDaysInBetween: ye } = je(), { checkRangeAutoApply: be, getRangeWithFixedDate: _e, handleMultiDatesSelect: ae, setPresetDate: pe } = ra(), { getMapDate: G } = Fe();
  zt(() => oe(I.isTextInputDate));
  const H = (_) => !C.value.keepViewOnOffsetClick || _ ? !0 : !n.value, se = (_, ne, ge, Re = !1) => {
    H(Re) && (S.value[_] ??= S.value[_] = { month: 0, year: 0 }, S.value[_].month = ne ?? S.value[_]?.month, S.value[_].year = ge ?? S.value[_]?.year);
  }, he = () => {
    Y.autoApply && w("select-date");
  }, b = () => {
    B.value && ee(B.value);
  };
  He(() => {
    d.value || (Se(), b()), oe(!0), Y.focusStartDate && Y.startDate && Se();
  });
  const A = z(() => y.value?.steps?.length && !y.value?.partial ? e.flowStep === y.value.steps.length : !0), ie = () => {
    Y.autoApply && A.value && w("auto-apply", y.value?.partial ? e.flowStep !== y.value?.steps?.length : !1);
  }, oe = (_ = !1) => {
    if (d.value)
      return Array.isArray(d.value) ? (s.value = d.value, T(_)) : E(d.value, _);
    if (m.value.count && _ && !Y.startDate)
      return P(o(), _);
  }, h = () => Array.isArray(d.value) && V.value.enabled ? Te(d.value[0]) === Te(d.value[1] ?? d.value[0]) : !1, f = (_) => {
    const ne = _t(_, 1);
    return { month: Te(ne), year: ke(ne) };
  }, P = (_ = o(), ne = !1) => {
    if ((!m.value.count || !m.value.static || ne) && se(0, Te(_), ke(_)), m.value.count && (!d.value || h() || !m.value.solo) && (!m.value.solo || ne))
      for (let ge = 1; ge < m.value.count; ge++) {
        const Re = Ae(o(), { month: D.value(ge - 1), year: $.value(ge - 1) }), Ee = Na(Re, { months: 1 });
        S.value[ge] = { month: Te(Ee), year: ke(Ee) };
      }
  }, E = (_, ne) => {
    P(_), fe("hours", ct(_)), fe("minutes", mt(_)), fe("seconds", gt(_)), m.value.count && ne && Z();
  }, L = (_) => {
    if (m.value.count) {
      if (m.value.solo) return 0;
      const ne = Te(_[0]), ge = Te(_[1]);
      return Math.abs(ge - ne) < m.value.count ? 0 : 1;
    }
    return 1;
  }, O = (_, ne) => {
    _[1] && V.value.showLastInRange ? P(_[L(_)], ne) : P(_[0], ne);
    const ge = (Re, Ee) => [
      Re(_[0]),
      _?.[1] ? Re(_[1]) : g[Ee][1]
    ];
    fe("hours", ge(ct, "hours")), fe("minutes", ge(mt, "minutes")), fe("seconds", ge(gt, "seconds"));
  }, a = (_, ne) => {
    if ((V.value.enabled || Y.weekPicker) && !q.value.enabled)
      return O(_, ne);
    if (q.value.enabled && ne) {
      const ge = _[_.length - 1];
      return E(ge, ne);
    }
  }, T = (_) => {
    const ne = d.value;
    a(ne, _), m.value.count && m.value.solo && Z();
  }, i = (_, ne) => {
    const ge = Ae(o(), { month: D.value(ne), year: $.value(ne) }), Re = _ < 0 ? _t(ge, 1) : Lt(ge, 1);
    v(Te(Re), ke(Re), _ < 0, Y.preventMinMaxNavigation) && (se(ne, Te(Re), ke(Re)), c("update-month-year", { instance: ne, month: Te(Re), year: ke(Re) }), m.value.count && !m.value.solo && J(ne), p());
  }, J = (_) => {
    for (let ne = _ - 1; ne >= 0; ne--) {
      const ge = Lt(Ae(o(), { month: D.value(ne + 1), year: $.value(ne + 1) }), 1);
      se(ne, Te(ge), ke(ge));
    }
    for (let ne = _ + 1; ne <= m.value.count - 1; ne++) {
      const ge = _t(Ae(o(), { month: D.value(ne - 1), year: $.value(ne - 1) }), 1);
      se(ne, Te(ge), ke(ge));
    }
  }, Z = () => {
    if (Array.isArray(d.value) && d.value.length === 2) {
      const _ = o(o(d.value[1] ?? _t(d.value[0], 1))), [ne, ge] = [Te(d.value[0]), ke(d.value[0])], [Re, Ee] = [Te(d.value[1]), ke(d.value[1])];
      (ne !== Re || ne === Re && ge !== Ee) && m.value.solo && se(1, Te(_), ke(_));
    } else d.value && !Array.isArray(d.value) && (se(0, Te(d.value), ke(d.value)), P(o()));
  }, Se = () => {
    Y.startDate && (se(0, Te(o(Y.startDate)), ke(o(Y.startDate))), m.value.count && J(0));
  }, ce = (_, ne) => {
    if (C.value.monthChangeOnScroll) {
      const ge = Date.now() - l.value.getTime(), Re = Math.abs(_.deltaY);
      let Ee = 500;
      Re > 1 && (Ee = 100), Re > 100 && (Ee = 0), ge > Ee && (l.value = /* @__PURE__ */ new Date(), i(
        C.value.monthChangeOnScroll === "inverse" ? _.deltaY : -_.deltaY,
        ne
      ));
    }
  }, Ue = (_, ne, ge = !1) => {
    C.value.monthChangeOnArrows && Y.vertical === ge && Be(_, ne);
  }, Be = (_, ne) => {
    i(_ === "right" ? -1 : 1, ne);
  }, dt = (_) => {
    if (N.value.markers)
      return G(_.value, N.value.markers);
  }, la = (_, ne) => {
    switch (Y.sixWeeks === !0 ? "append" : Y.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [_ == 0, !0];
      case "fair":
        return [_ == 0 || ne > _, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, oa = (_, ne, ge, Re) => {
    if (Y.sixWeeks && _.length < 6) {
      const Ee = 6 - _.length, pt = (ne.getDay() + 7 - Re) % 7, qt = 6 - (ge.getDay() + 7 - Re) % 7, [xt, fa] = la(pt, qt);
      for (let Mt = 1; Mt <= Ee; Mt++)
        if (fa ? !!(Mt % 2) == xt : xt) {
          const Qt = _[0].days[0], ma = Ot(ht(Qt.value, -7), Te(ne));
          _.unshift({ days: ma });
        } else {
          const Qt = _[_.length - 1], ma = Qt.days[Qt.days.length - 1], an = Ot(ht(ma.value, 1), Te(ne));
          _.push({ days: an });
        }
    }
    return _;
  }, Ot = (_, ne) => {
    const ge = o(_), Re = [];
    for (let Ee = 0; Ee < 7; Ee++) {
      const pt = ht(ge, Ee), Bt = Te(pt) !== ne;
      Re.push({
        text: Y.hideOffsetDates && Bt ? "" : pt.getDate(),
        value: pt,
        current: !Bt,
        classData: {}
      });
    }
    return Re;
  }, sa = (_, ne) => {
    const ge = [], Re = o(new Date(ne, _)), Ee = o(new Date(ne, _ + 1, 0)), pt = Y.weekStart, Bt = Da(Re, { weekStartsOn: pt }), qt = (xt) => {
      const fa = Ot(xt, _);
      if (ge.push({ days: fa }), !ge[ge.length - 1].days.some((Mt) => ve(o(Mt.value), W(Ee)))) {
        const Mt = ht(xt, 7);
        qt(Mt);
      }
    };
    return qt(Bt), oa(ge, Re, Ee, pt);
  }, ua = (_) => {
    const ne = x(
      { hours: g.hours, minutes: g.minutes, seconds: at() },
      o(_.value)
    );
    c("date-click", ne), q.value.enabled ? ae(ne, q.value.limit) : d.value = ne, r(), Xe().then(() => {
      ie();
    });
  }, Ut = (_) => V.value.noDisabledRange ? ye(s.value[0], _).some((ge) => k(ge)) : !1, ia = () => {
    s.value = d.value ? d.value.slice() : [], s.value.length === 2 && !(V.value.fixedStart || V.value.fixedEnd) && (s.value = []);
  }, ca = (_, ne) => {
    const ge = [o(_.value), ht(o(_.value), +V.value.autoRange)];
    F(ge) ? (ne && da(_.value), s.value = ge) : c("invalid-date", _.value);
  }, da = (_) => {
    const ne = Te(o(_)), ge = ke(o(_));
    if (se(0, ne, ge), m.value.count > 0)
      for (let Re = 1; Re < m.value.count; Re++) {
        const Ee = f(
          Ae(o(_), { year: $.value(Re - 1), month: D.value(Re - 1) })
        );
        se(Re, Ee.month, Ee.year);
      }
  }, me = (_) => {
    if (Ut(_.value) || !U(_.value, d.value, V.value.fixedStart ? 0 : 1))
      return c("invalid-date", _.value);
    s.value = _e(o(_.value));
  }, Je = (_, ne) => {
    if (ia(), V.value.autoRange) return ca(_, ne);
    if (V.value.fixedStart || V.value.fixedEnd) return me(_);
    s.value[0] ? U(o(_.value), d.value) && !Ut(_.value) ? re(o(_.value), o(s.value[0])) ? (s.value.unshift(o(_.value)), c("range-end", s.value[0])) : (s.value[1] = o(_.value), c("range-end", s.value[1])) : c("invalid-date", _.value) : (s.value[0] = o(_.value), c("range-start", s.value[0]));
  }, at = (_ = !0) => M.value.enableSeconds ? Array.isArray(g.seconds) ? _ ? g.seconds[0] : g.seconds[1] : g.seconds : 0, wt = (_) => {
    s.value[_] = x(
      {
        hours: g.hours[_],
        minutes: g.minutes[_],
        seconds: at(_ !== 1)
      },
      s.value[_]
    );
  }, Dt = () => {
    s.value[0] && s.value[1] && +s.value?.[0] > +s.value?.[1] && (s.value.reverse(), c("range-start", s.value[0]), c("range-end", s.value[1]));
  }, va = () => {
    s.value.length && (s.value[0] && !s.value[1] ? wt(0) : (wt(0), wt(1), r()), Dt(), d.value = s.value.slice(), be(s.value, w, Y.autoApply, Y.modelAuto));
  }, Ga = (_, ne = !1) => {
    if (k(_.value) || !_.current && Y.hideOffsetDates)
      return c("invalid-date", _.value);
    if (n.value = structuredClone(_), !V.value.enabled) return ua(_);
    Array.isArray(g.hours) && Array.isArray(g.minutes) && !q.value.enabled && (Je(_, ne), va());
  }, Xa = (_, ne) => {
    se(_, ne.month, ne.year, !0), m.value.count && !m.value.solo && J(_), c("update-month-year", { instance: _, month: ne.month, year: ne.year }), p(m.value.solo ? _ : void 0);
    const ge = y.value?.steps?.length ? y.value.steps[e.flowStep] : void 0;
    !ne.fromNav && (ge === Qe.month || ge === Qe.year) && r();
  }, Ja = (_) => {
    pe({
      value: _
    }), he(), Y.multiCalendars && Xe().then(() => oe(!0));
  }, Za = () => {
    const _ = o();
    !V.value.enabled && !q.value.enabled ? d.value = _ : d.value && Array.isArray(d.value) && d.value[0] ? q.value.enabled ? d.value = [...d.value, _] : d.value = re(_, d.value[0]) ? [_, d.value[0]] : [d.value[0], _] : d.value = [_], he();
  }, en = () => {
    if (Array.isArray(d.value))
      if (q.value.enabled) {
        const _ = tn();
        d.value[d.value.length - 1] = le(_);
      } else
        d.value = d.value.map((_, ne) => _ && le(_, ne));
    else
      d.value = le(d.value);
    w("time-update");
  }, tn = () => Array.isArray(d.value) && d.value.length ? d.value[d.value.length - 1] : null;
  return {
    calendars: S,
    modelValue: d,
    month: D,
    year: $,
    time: g,
    disabledTimesConfig: Q,
    today: u,
    validateTime: te,
    getCalendarDays: sa,
    getMarker: dt,
    handleScroll: ce,
    handleSwipe: Be,
    handleArrow: Ue,
    selectDate: Ga,
    updateMonthYear: Xa,
    presetDate: Ja,
    selectCurrentDate: Za,
    updateTime: (_, ne = !0, ge = !1) => {
      X(_, ne, ge, en);
    },
    assignMonthAndYear: P,
    setStartTime: b
  };
}, Al = () => {
  const {
    isModelAuto: e,
    matchDate: w,
    isDateAfter: p,
    isDateBefore: r,
    isDateBetween: s,
    isDateEqual: l,
    getWeekFromDate: n,
    getBeforeAndAfterInRange: o
  } = je(), {
    getDate: c,
    today: S,
    rootProps: D,
    defaults: { multiCalendars: $, multiDates: g, ui: d, highlight: Y, safeDates: u, range: I },
    modelValue: m
  } = $e(), { isDisabled: B } = rt(), V = de(null), C = (h) => {
    !h.current && D.hideOffsetDates || (V.value = h.value);
  }, N = () => {
    V.value = null;
  }, q = (h) => Array.isArray(m.value) && I.value.enabled && m.value[0] && V.value ? h ? p(V.value, m.value[0]) : r(V.value, m.value[0]) : !0, M = (h, f) => {
    const P = () => m.value ? f ? m.value[0] || null : m.value[1] : null, E = m.value && Array.isArray(m.value) ? P() : null;
    return l(c(h.value), E);
  }, y = (h) => {
    const f = Array.isArray(m.value) ? m.value[0] : null;
    return h ? !r(V.value, f) : !0;
  }, v = (h, f = !0) => (I.value.enabled || D.weekPicker) && Array.isArray(m.value) && m.value.length === 2 ? D.hideOffsetDates && !h.current ? !1 : l(c(h.value), m.value[f ? 0 : 1]) : I.value.enabled ? M(h, f) && y(f) || l(h.value, Array.isArray(m.value) ? m.value[0] : null) && q(f) : !1, k = (h, f) => {
    if (Array.isArray(m.value) && m.value[0] && m.value.length === 1) {
      const P = l(h.value, V.value);
      return f ? p(m.value[0], h.value) && P : r(m.value[0], h.value) && P;
    }
    return !1;
  }, F = (h) => !m.value || D.hideOffsetDates && !h.current ? !1 : I.value.enabled ? D.modelAuto && Array.isArray(m.value) ? l(h.value, m.value[0] ?? S) : !1 : g.value.enabled && Array.isArray(m.value) ? m.value.some((f) => l(f, h.value)) : l(h.value, m.value ? m.value : S), U = (h) => {
    if (I.value.autoRange || D.weekPicker) {
      if (V.value) {
        if (D.hideOffsetDates && !h.current) return !1;
        const f = ht(V.value, +I.value.autoRange), P = n(c(V.value), D.weekStart);
        return D.weekPicker ? l(P[1], c(h.value)) : l(f, c(h.value));
      }
      return !1;
    }
    return !1;
  }, X = (h) => {
    if (I.value.autoRange || D.weekPicker) {
      if (V.value) {
        const f = ht(V.value, +I.value.autoRange);
        if (D.hideOffsetDates && !h.current) return !1;
        const P = n(c(V.value), D.weekStart);
        return D.weekPicker ? p(h.value, P[0]) && r(h.value, P[1]) : p(h.value, V.value) && r(h.value, f);
      }
      return !1;
    }
    return !1;
  }, le = (h) => {
    if (I.value.autoRange || D.weekPicker) {
      if (V.value) {
        if (D.hideOffsetDates && !h.current) return !1;
        const f = n(c(V.value), D.weekStart);
        return D.weekPicker ? l(f[0], h.value) : l(V.value, h.value);
      }
      return !1;
    }
    return !1;
  }, fe = (h) => s(m.value, V.value, h.value), ee = () => D.modelAuto && Array.isArray(m.value) ? !!m.value[0] : !1, te = () => D.modelAuto ? e(m.value) : !0, Q = (h) => {
    if (D.weekPicker) return !1;
    const f = I.value.enabled ? !v(h) && !v(h, !1) : !0;
    return !B(h.value) && !F(h) && !(!h.current && D.hideOffsetDates) && f;
  }, W = (h) => I.value.enabled ? D.modelAuto ? ee() && F(h) : !1 : F(h), x = (h) => Y.value ? w(h.value, u.value.highlight) : !1, re = (h) => {
    const f = B(h.value);
    return f && (typeof Y.value == "function" ? !Y.value(h.value, f) : !Y.value.options.highlightDisabled);
  }, ve = (h) => typeof Y.value == "function" ? Y.value(h.value) : Y.value.weekdays?.includes(h.value.getDay()), ye = (h) => (I.value.enabled || D.weekPicker) && (!($.value.count > 0) || h.current) && te() && !(!h.current && D.hideOffsetDates) && !F(h) ? fe(h) : !1, be = (h) => {
    if (Array.isArray(m.value) && m.value.length === 1) {
      const { before: f, after: P } = o(+I.value.maxRange, m.value[0]);
      return Rt(h.value, f) || Pt(h.value, P);
    }
    return !1;
  }, _e = (h) => {
    if (Array.isArray(m.value) && m.value.length === 1) {
      const { before: f, after: P } = o(+I.value.minRange, m.value[0]);
      return s([f, P], m.value[0], h.value);
    }
    return !1;
  }, ae = (h) => I.value.enabled && (I.value.maxRange || I.value.minRange) ? I.value.maxRange && I.value.minRange ? be(h) || _e(h) : I.value.maxRange ? be(h) : _e(h) : !1, pe = (h) => {
    const { isRangeStart: f, isRangeEnd: P } = he(h), E = I.value.enabled ? f || P : !1;
    return {
      dp__cell_offset: !h.current,
      dp__pointer: !D.disabled && !(!h.current && D.hideOffsetDates) && !B(h.value) && !ae(h),
      dp__cell_disabled: B(h.value) || ae(h),
      dp__cell_highlight: !re(h) && (x(h) || ve(h)) && !W(h) && !E && !le(h) && !(ye(h) && D.weekPicker) && !P,
      dp__cell_highlight_active: !re(h) && (x(h) || ve(h)) && W(h),
      dp__today: !D.noToday && l(h.value, S) && h.current,
      "dp--past": r(h.value, S),
      "dp--future": p(h.value, S)
    };
  }, G = (h) => ({
    dp__active_date: W(h),
    dp__date_hover: Q(h)
  }), H = (h) => {
    if (m.value && !Array.isArray(m.value)) {
      const f = n(m.value, D.weekStart);
      return {
        ...A(h),
        dp__range_start: l(f[0], h.value),
        dp__range_end: l(f[1], h.value),
        dp__range_between_week: p(h.value, f[0]) && r(h.value, f[1])
      };
    }
    return {
      ...A(h)
    };
  }, se = (h) => {
    if (m.value && Array.isArray(m.value)) {
      const f = n(m.value[0], D.weekStart), P = m.value[1] ? n(m.value[1], D.weekStart) : [];
      return {
        ...A(h),
        dp__range_start: l(f[0], h.value) || l(P[0], h.value),
        dp__range_end: l(f[1], h.value) || l(P[1], h.value),
        dp__range_between_week: p(h.value, f[0]) && r(h.value, f[1]) || p(h.value, P[0]) && r(h.value, P[1]),
        dp__range_between: p(h.value, f[1]) && r(h.value, P[0])
      };
    }
    return {
      ...A(h)
    };
  }, he = (h) => {
    const f = $.value.count > 0 ? h.current && v(h) && te() : v(h) && te(), P = $.value.count > 0 ? h.current && v(h, !1) && te() : v(h, !1) && te();
    return { isRangeStart: f, isRangeEnd: P };
  }, b = (h) => {
    const { isRangeStart: f, isRangeEnd: P } = he(h);
    return {
      dp__range_start: f,
      dp__range_end: P,
      dp__range_between: ye(h),
      dp__date_hover: l(h.value, V.value) && !f && !P && !D.weekPicker,
      dp__date_hover_start: k(h, !0),
      dp__date_hover_end: k(h, !1)
    };
  }, A = (h) => ({
    ...b(h),
    dp__cell_auto_range: X(h),
    dp__cell_auto_range_start: le(h),
    dp__cell_auto_range_end: U(h)
  }), ie = (h) => I.value.enabled ? I.value.autoRange ? A(h) : D.modelAuto ? { ...G(h), ...b(h) } : D.weekPicker ? se(h) : b(h) : D.weekPicker ? H(h) : G(h);
  return {
    setHoverDate: C,
    clearHoverDate: N,
    getDayClassData: (h) => D.hideOffsetDates && !h.current ? {} : {
      ...pe(h),
      ...ie(h),
      [d.value.dayClass ? d.value.dayClass(h.value, m.value) : ""]: !0,
      ...d.value.calendarCell
    }
  };
}, Pl = { key: 0 }, Tl = /* @__PURE__ */ We({
  __name: "DatePicker",
  props: /* @__PURE__ */ Oa({
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  }, _r),
  emits: ["mount", "update-flow-step", "reset-flow", "focus-menu", "select-date", "time-update", "auto-apply"],
  setup(e, { expose: w, emit: p }) {
    const r = p, s = e, {
      month: l,
      year: n,
      modelValue: o,
      time: c,
      disabledTimesConfig: S,
      today: D,
      validateTime: $,
      getCalendarDays: g,
      getMarker: d,
      handleArrow: Y,
      handleScroll: u,
      handleSwipe: I,
      selectDate: m,
      updateMonthYear: B,
      presetDate: V,
      selectCurrentDate: C,
      updateTime: N,
      assignMonthAndYear: q,
      setStartTime: M
    } = _l(s, r, H, se), y = yt(), { setHoverDate: v, getDayClassData: k, clearHoverDate: F } = Al(), {
      getDate: U,
      rootEmit: X,
      rootProps: le,
      defaults: { multiCalendars: fe, timeConfig: ee }
    } = $e(), { getYears: te, getMonths: Q } = ta(), { getCellId: W } = je(), { mapSlots: x } = kt(), re = Ye("calendar-header"), ve = Ye("calendar"), ye = Ye("time-picker"), be = x(y, "calendar"), _e = x(y, "monthYear"), ae = x(y, "timePicker"), pe = (E) => {
      r("mount", E);
    };
    it(
      fe,
      (E, L) => {
        E.count - L.count > 0 && q();
      },
      { deep: !0 }
    );
    const G = z(() => (E) => g(l.value(E), n.value(E)).map((L) => ({
      ...L,
      days: L.days.map((O) => (O.marker = d(O), O.classData = k(O), O))
    })));
    function H(E) {
      E || E === 0 ? ve.value?.[E]?.triggerTransition(l.value(E), n.value(E)) : ve.value?.forEach((L, O) => L?.triggerTransition(l.value(O), n.value(O)));
    }
    function se() {
      r("update-flow-step");
    }
    const he = (E, L, O = 0) => {
      re.value?.[O]?.toggleMonthPicker(E, L);
    }, b = (E, L, O = 0) => {
      re.value?.[O]?.toggleYearPicker(E, L);
    }, A = (E, L, O) => {
      ye.value?.toggleTimePicker(E, L, O);
    }, ie = (E, L) => {
      if (!le.range) {
        const O = o.value ? o.value : D, a = L ? U(L) : O, T = E ? Da(a, { weekStartsOn: 1 }) : xa(a, { weekStartsOn: 1 });
        m({
          value: T,
          current: Te(a) === l.value(0),
          text: "",
          classData: {}
        }), document.getElementById(W(T))?.focus();
      }
    }, oe = (E) => {
      re.value?.[0]?.handleMonthYearChange(E, !0);
    }, h = (E) => {
      B(0, { month: l.value(0), year: n.value(0) + (E ? 1 : -1), fromNav: !0 });
    }, f = (E) => {
      X("overlay-toggle", { open: !1, overlay: E }), r("focus-menu");
    };
    return w({
      clearHoverDate: F,
      presetDate: V,
      selectCurrentDate: C,
      handleArrow: Y,
      updateMonthYear: B,
      setStartTime: M,
      toggleMonthPicker: he,
      toggleYearPicker: b,
      toggleTimePicker: A,
      getSidebarProps: () => ({
        modelValue: o,
        month: l,
        year: n,
        time: c,
        updateTime: N,
        updateMonthYear: B,
        selectDate: m,
        presetDate: V
      }),
      changeMonth: oe,
      changeYear: h,
      selectWeekDate: ie
    }), (E, L) => (R(), K(De, null, [
      nt(na, { collapse: e.collapse }, {
        default: Me(({ instances: O, wrapClass: a }) => [
          (R(!0), K(De, null, Oe(O, (T) => (R(), K("div", {
            key: T,
            class: we(a)
          }, [
            t(le).hideMonthYearSelect ? j("", !0) : (R(), Ce(hl, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(Q)(),
              years: t(te)(),
              month: t(l)(T),
              year: t(n)(T),
              instance: T,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: L[0] || (L[0] = (i) => pe(t(At).header)),
              onResetFlow: L[1] || (L[1] = (i) => E.$emit("reset-flow")),
              onUpdateMonthYear: (i) => t(B)(T, i),
              onOverlayClosed: f
            }, Le({ _: 2 }, [
              Oe(t(_e), (i, J) => ({
                name: i,
                fn: Me((Z) => [
                  ue(E.$slots, i, tt({ ref_for: !0 }, Z))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            nt(Ml, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": G.value(T),
              instance: T,
              month: t(l)(T),
              year: t(n)(T),
              onSelectDate: (i) => t(m)(i, T !== 1),
              onSetHoverDate: L[2] || (L[2] = (i) => t(v)(i)),
              onHandleScroll: (i) => t(u)(i, T),
              onHandleSwipe: (i) => t(I)(i, T),
              onMount: L[3] || (L[3] = (i) => pe(t(At).calendar))
            }, Le({ _: 2 }, [
              Oe(t(be), (i, J) => ({
                name: i,
                fn: Me((Z) => [
                  ue(E.$slots, i, tt({ ref_for: !0 }, { ...Z }))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(ee).enableTimePicker ? (R(), K("div", Pl, [
        E.$slots["time-picker"] ? ue(E.$slots, "time-picker", Ze(tt({ key: 0 }, { time: t(c), updateTime: t(N) }))) : (R(), Ce(qa, {
          key: 1,
          ref: "time-picker",
          hours: t(c).hours,
          minutes: t(c).minutes,
          seconds: t(c).seconds,
          "disabled-times-config": t(S),
          "validate-time": t($),
          "no-overlay-focus": e.noOverlayFocus,
          onMount: L[4] || (L[4] = (O) => pe(t(At).timePicker)),
          "onUpdate:hours": L[5] || (L[5] = (O) => t(N)(O)),
          "onUpdate:minutes": L[6] || (L[6] = (O) => t(N)(O, !1)),
          "onUpdate:seconds": L[7] || (L[7] = (O) => t(N)(O, !1, !0)),
          onResetFlow: L[8] || (L[8] = (O) => E.$emit("reset-flow"))
        }, Le({ _: 2 }, [
          Oe(t(ae), (O, a) => ({
            name: O,
            fn: Me((T) => [
              ue(E.$slots, O, Ze(ut(T)))
            ])
          }))
        ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"]))
      ])) : j("", !0)
    ], 64));
  }
}), $l = (e, w) => {
  const {
    getDate: p,
    rootProps: r,
    modelValue: s,
    year: l,
    calendars: n,
    defaults: { highlight: o, range: c, multiDates: S }
  } = $e(), { isDateBetween: D, isDateEqual: $ } = je(), { checkRangeAutoApply: g, handleMultiDatesSelect: d, setMonthOrYearRange: Y } = ra();
  zt();
  const { isDisabled: u } = rt(), { formatQuarterText: I } = Tt(), { selectYear: m, groupedYears: B, showYearPicker: V, isDisabled: C, toggleYearPicker: N, handleYearSelect: q, handleYear: M } = Ua(w), y = de(), v = z(() => (W) => s.value ? Array.isArray(s.value) ? s.value.some((x) => Aa(W, x)) : Aa(s.value, W) : !1), k = (W) => {
    if (c.value.enabled) {
      if (Array.isArray(s.value)) {
        const x = $(W, s.value[0]) || $(W, s.value[1]);
        return D(s.value, y.value, W) && !x;
      }
      return !1;
    }
    return !1;
  }, F = (W, x) => W.quarter === Ta(x) && W.year === ke(x), U = (W) => typeof o.value == "function" ? o.value({ quarter: Ta(W), year: ke(W) }) : o.value.quarters.some((x) => F(x, W)), X = z(() => (W) => {
    const x = Ae(p(), { year: l.value(W) });
    return Sn({
      start: Vt(x),
      end: Ia(x)
    }).map((re) => {
      const ve = Rn(re), ye = Pa(re), be = u(re), _e = k(ve), ae = U(ve);
      return {
        text: I(ve, ye),
        value: ve,
        active: v.value(ve),
        highlighted: ae,
        disabled: be,
        isBetween: _e
      };
    });
  }), le = (W) => {
    d(W, S.value.limit), w("auto-apply", !0);
  }, fe = (W) => {
    s.value = Y(W), g(s.value, w, r.autoApply, r.modelAuto);
  }, ee = (W) => {
    s.value = W, w("auto-apply");
  };
  return {
    groupedYears: B,
    year: l,
    isDisabled: C,
    quarters: X,
    showYearPicker: V,
    modelValue: s,
    selectYear: m,
    toggleYearPicker: N,
    handleYearSelect: q,
    handleYear: M,
    setHoverDate: (W) => {
      y.value = W;
    },
    selectQuarter: (W, x, re) => {
      if (!re)
        return n.value[x].month = Te(Pa(W)), S.value.enabled ? le(W) : c.value.enabled ? fe(W) : ee(W);
    }
  };
}, Sl = { class: "dp--quarter-items" }, Rl = ["data-test-id", "disabled", "onClick", "onMouseover"], Cl = /* @__PURE__ */ We({
  __name: "QuarterPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: w, emit: p }) {
    const r = p, s = e, {
      defaults: { config: l }
    } = $e(), n = yt(), { mapSlots: o } = kt(), c = o(n, "yearMode"), {
      groupedYears: S,
      year: D,
      isDisabled: $,
      quarters: g,
      modelValue: d,
      showYearPicker: Y,
      setHoverDate: u,
      selectQuarter: I,
      toggleYearPicker: m,
      handleYearSelect: B,
      handleYear: V
    } = $l(s, r);
    return w({ getSidebarProps: () => ({
      modelValue: d,
      year: D,
      selectQuarter: I,
      handleYearSelect: B,
      handleYear: V
    }) }), (N, q) => (R(), Ce(na, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: Me(({ instances: M, wrapClass: y }) => [
        (R(!0), K(De, null, Oe(M, (v) => (R(), K("div", {
          key: v,
          class: we(y)
        }, [
          Pe("div", {
            class: "dp-quarter-picker-wrap",
            style: et({ minHeight: `${t(l).modeHeight}px` })
          }, [
            N.$slots["top-extra"] ? ue(N.$slots, "top-extra", {
              key: 0,
              value: t(d)
            }) : j("", !0),
            Pe("div", null, [
              nt(ja, tt({ ref_for: !0 }, N.$props, {
                items: t(S)(v),
                instance: v,
                "show-year-picker": t(Y)[v],
                year: t(D)(v),
                "is-disabled": (k) => t($)(v, k),
                onHandleYear: (k) => t(V)(v, k),
                onYearSelect: (k) => t(B)(k, v),
                onToggleYearPicker: (k) => t(m)(v, k?.flow, k?.show)
              }), Le({ _: 2 }, [
                Oe(t(c), (k, F) => ({
                  name: k,
                  fn: Me((U) => [
                    ue(N.$slots, k, tt({ ref_for: !0 }, U))
                  ])
                }))
              ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            Pe("div", Sl, [
              (R(!0), K(De, null, Oe(t(g)(v), (k, F) => (R(), K("div", { key: F }, [
                Pe("button", {
                  type: "button",
                  class: we(["dp--qr-btn", {
                    "dp--qr-btn-active": k.active,
                    "dp--qr-btn-between": k.isBetween,
                    "dp--qr-btn-disabled": k.disabled,
                    "dp--highlighted": k.highlighted
                  }]),
                  "data-test-id": k.value,
                  disabled: k.disabled,
                  onClick: (U) => t(I)(k.value, v, k.disabled),
                  onMouseover: (U) => t(u)(k.value)
                }, [
                  N.$slots.quarter ? ue(N.$slots, "quarter", {
                    key: 0,
                    value: k.value,
                    text: k.text
                  }) : (R(), K(De, { key: 1 }, [
                    ft(ze(k.text), 1)
                  ], 64))
                ], 42, Rl)
              ]))), 128))
            ])
          ], 4)
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), Yl = ["id", "tabindex", "role", "aria-label"], Ol = {
  key: 0,
  class: "dp--menu-load-container"
}, Bl = {
  key: 1,
  class: "dp--menu-header"
}, xl = ["data-dp-mobile"], Il = {
  key: 0,
  class: "dp__sidebar_left"
}, El = ["data-dp-mobile"], Vl = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], Nl = { class: "dp__instance_calendar" }, Fl = {
  key: 2,
  class: "dp__sidebar_right"
}, Wl = {
  key: 3,
  class: "dp__action_extra"
}, Ll = /* @__PURE__ */ We({
  __name: "DatepickerMenu",
  props: {
    collapse: { type: Boolean },
    noOverlayFocus: { type: Boolean },
    getInputRect: { type: Function }
  },
  emits: ["close-picker", "select-date", "auto-apply", "time-update", "menu-blur"],
  setup(e, { expose: w, emit: p }) {
    const r = p, s = yt(), {
      state: l,
      rootProps: n,
      defaults: { textInput: o, inline: c, config: S, ui: D, ariaLabels: $ },
      setState: g
    } = $e(), { isMobile: d } = ea(), { mapSlots: Y } = kt(), { handleEventPropagation: u, getElWithin: I, checkStopPropagation: m, checkKeyDown: B } = Fe(), { arrowRight: V, arrowLeft: C, arrowDown: N, arrowUp: q } = bt(), M = Ye("inner-menu"), y = Ye("dp-menu"), v = Ye("dyn-cmp"), k = de(0), F = de(!1), U = de(!1), { flowStep: X, updateFlowStep: le, childMount: fe, resetFlow: ee, handleFlow: te } = En(v), Q = (a) => {
      U.value = !0, S.value.allowPreventDefault && a.preventDefault(), m(a, S.value, !0);
    };
    He(() => {
      F.value = !0, W(), globalThis.addEventListener("resize", W);
      const a = Ge(y);
      a && !o.value.enabled && !c.value.enabled && (g("menuFocused", !0), re()), a && (a.addEventListener("pointerdown", Q), a.addEventListener("mousedown", Q)), document.addEventListener("mousedown", L);
    }), Ct(() => {
      globalThis.removeEventListener("resize", W), document.removeEventListener("mousedown", L);
      const a = Ge(y);
      a && (a.removeEventListener("pointerdown", Q), a.removeEventListener("mousedown", Q));
    });
    const W = () => {
      const a = Ge(M);
      a && (k.value = a.getBoundingClientRect().width);
    }, x = z(() => n.monthPicker ? Ur : n.yearPicker ? Qr : n.timePicker ? il : n.quarterPicker ? Cl : Tl), re = () => {
      const a = Ge(y);
      a && a.focus({ preventScroll: !0 });
    }, ve = z(() => v.value?.getSidebarProps() || {}), ye = Y(s, "action"), be = z(() => n.monthPicker || n.yearPicker ? Y(s, "monthYear") : n.timePicker ? Y(s, "timePicker") : Y(s, "shared")), _e = z(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), ae = z(
      () => ({
        dp__menu: !0,
        dp__menu_index: !c.value.enabled,
        dp__relative: c.value.enabled,
        ...D.value.menu
      })
    ), pe = (a) => {
      m(a, S.value, !0);
    }, G = (a) => {
      S.value.escClose && (r("close-picker"), u(a, S.value));
    }, H = (a) => {
      if (n.arrowNavigation) {
        if (a === qe.up) return q();
        if (a === qe.down) return N();
        if (a === qe.left) return C();
        if (a === qe.right) return V();
      } else a === qe.left || a === qe.up ? A("handleArrow", qe.left, 0, a === qe.up) : A("handleArrow", qe.right, 0, a === qe.down);
    }, se = (a) => {
      g("shiftKeyInMenu", a.shiftKey), !n.hideMonthYearSelect && a.code === Ie.tab && a.target.classList.contains("dp__menu") && l.shiftKeyInMenu && (a.preventDefault(), m(a, S.value, !0), r("close-picker"));
    }, he = (a) => {
      v.value?.toggleTimePicker(!1, !1), v.value?.toggleMonthPicker(!1, !1, a), v.value?.toggleYearPicker(!1, !1, a);
    }, b = (a, T = 0) => a === "month" ? v.value?.toggleMonthPicker(!1, !0, T) : a === "year" ? v.value?.toggleYearPicker(!1, !0, T) : a === "time" ? v.value?.toggleTimePicker(!0, !1) : he(T), A = (a, ...T) => {
      v.value?.[a] && v.value?.[a](...T);
    }, ie = () => {
      A("selectCurrentDate");
    }, oe = (a, T) => {
      A("presetDate", un(a), T);
    }, h = () => {
      A("clearHoverDate");
    }, f = (a, T) => {
      A("updateMonthYear", a, T);
    }, P = (a, T) => {
      a.preventDefault(), H(T);
    }, E = (a) => {
      if (se(a), a.key === Ie.home || a.key === Ie.end)
        return A(
          "selectWeekDate",
          a.key === Ie.home,
          a.target.getAttribute("id")
        );
      switch ((a.key === Ie.pageUp || a.key === Ie.pageDown) && (a.shiftKey ? (A("changeYear", a.key === Ie.pageUp), I(y.value, "overlay-year")?.focus()) : (A("changeMonth", a.key === Ie.pageUp), I(y.value, a.key === Ie.pageUp ? "action-prev" : "action-next")?.focus()), a.target.getAttribute("id") && y.value?.focus({ preventScroll: !0 })), a.key) {
        case Ie.esc:
          return G(a);
        case Ie.arrowLeft:
          return P(a, qe.left);
        case Ie.arrowRight:
          return P(a, qe.right);
        case Ie.arrowUp:
          return P(a, qe.up);
        case Ie.arrowDown:
          return P(a, qe.down);
        default:
          return;
      }
    }, L = (a) => {
      c.value.enabled && !c.value.input && !y.value?.contains(a.target) && U.value && (U.value = !1, r("menu-blur"));
    };
    return w({
      updateMonthYear: f,
      switchView: b,
      onValueCleared: () => {
        v.value?.setStartTime?.();
      },
      handleFlow: te
    }), (a, T) => (R(), K("div", {
      id: t(n).menuId,
      ref: "dp-menu",
      tabindex: t(c).enabled ? void 0 : "0",
      role: t(c).enabled ? void 0 : "dialog",
      "aria-label": t($)?.menu,
      class: we(ae.value),
      onMouseleave: h,
      onClick: pe,
      onKeydown: E
    }, [
      (t(n).disabled || t(n).readonly) && t(c).enabled || t(n).loading ? (R(), K("div", {
        key: 0,
        class: we(_e.value)
      }, [
        t(n).loading ? (R(), K("div", Ol, [...T[5] || (T[5] = [
          Pe("span", { class: "dp--menu-loader" }, null, -1)
        ])])) : j("", !0)
      ], 2)) : j("", !0),
      a.$slots["menu-header"] ? (R(), K("div", Bl, [
        ue(a.$slots, "menu-header")
      ])) : j("", !0),
      ue(a.$slots, "arrow"),
      Pe("div", {
        ref: "inner-menu",
        class: we({
          dp__menu_content_wrapper: t(n).presetDates?.length || !!a.$slots["left-sidebar"] || !!a.$slots["right-sidebar"],
          "dp--menu-content-wrapper-collapsed": e.collapse && (t(n).presetDates?.length || !!a.$slots["left-sidebar"] || !!a.$slots["right-sidebar"])
        }),
        "data-dp-mobile": t(d),
        style: et({ "--dp-menu-width": `${k.value}px` })
      }, [
        a.$slots["left-sidebar"] ? (R(), K("div", Il, [
          ue(a.$slots, "left-sidebar", Ze(ut(ve.value)))
        ])) : j("", !0),
        t(n).presetDates.length ? (R(), K("div", {
          key: 1,
          class: we({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(d)
        }, [
          (R(!0), K(De, null, Oe(t(n).presetDates, (i, J) => (R(), K(De, { key: J }, [
            i.slot ? ue(a.$slots, i.slot, {
              key: 0,
              presetDate: oe,
              label: i.label,
              value: i.value
            }) : (R(), K("button", {
              key: 1,
              type: "button",
              style: et(i.style || {}),
              class: we(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
              "data-test-id": i.testId ?? void 0,
              "data-dp-mobile": t(d),
              onClick: Wt((Z) => oe(i.value, i.noTz), ["prevent"]),
              onKeydown: (Z) => t(B)(Z, () => oe(i.value, i.noTz), !0)
            }, ze(i.label), 47, Vl))
          ], 64))), 128))
        ], 10, El)) : j("", !0),
        Pe("div", Nl, [
          (R(), Ce(wa(x.value), {
            ref: "dyn-cmp",
            "flow-step": t(X),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": y.value,
            onMount: t(fe),
            onUpdateFlowStep: t(le),
            onResetFlow: t(ee),
            onFocusMenu: re,
            onSelectDate: T[0] || (T[0] = (i) => a.$emit("select-date")),
            onAutoApply: T[1] || (T[1] = (i) => a.$emit("auto-apply", i)),
            onTimeUpdate: T[2] || (T[2] = (i) => a.$emit("time-update"))
          }, Le({ _: 2 }, [
            Oe(be.value, (i, J) => ({
              name: i,
              fn: Me((Z) => [
                ue(a.$slots, i, Ze(ut({ ...Z })))
              ])
            }))
          ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
        ]),
        a.$slots["right-sidebar"] ? (R(), K("div", Fl, [
          ue(a.$slots, "right-sidebar", Ze(ut(ve.value)))
        ])) : j("", !0),
        a.$slots["action-extra"] ? (R(), K("div", Wl, [
          a.$slots["action-extra"] ? ue(a.$slots, "action-extra", {
            key: 0,
            selectCurrentDate: ie
          }) : j("", !0)
        ])) : j("", !0)
      ], 14, xl),
      !t(n).autoApply || t(S).keepActionRow ? (R(), Ce(Vr, {
        key: 2,
        "menu-mount": F.value,
        "calendar-width": k.value,
        onClosePicker: T[3] || (T[3] = (i) => a.$emit("close-picker")),
        onSelectDate: T[4] || (T[4] = (i) => a.$emit("select-date")),
        onSelectNow: ie
      }, Le({ _: 2 }, [
        Oe(t(ye), (i, J) => ({
          name: i,
          fn: Me((Z) => [
            ue(a.$slots, i, Ze(ut({ ...Z })))
          ])
        }))
      ]), 1032, ["menu-mount", "calendar-width"])) : j("", !0)
    ], 42, Yl));
  }
}), Hl = ["data-dp-mobile"], Kl = /* @__PURE__ */ We({
  __name: "VueDatePicker",
  setup(e, { expose: w }) {
    const {
      rootEmit: p,
      setState: r,
      inputValue: s,
      modelValue: l,
      rootProps: n,
      defaults: { inline: o, config: c, textInput: S, range: D, multiDates: $, teleport: g, floatingConfig: d }
    } = $e(), { clearArrowNav: Y } = bt(), { validateDate: u, isValidTime: I } = rt(), { menuTransition: m, showTransition: B } = Kt(), { isMobile: V } = ea(), { mapSlots: C } = kt(), { findNextFocusableElement: N, getNumVal: q } = Fe(), M = yt(), y = de(!1), v = de(!1), k = Ma(n, "modelValue"), F = Ma(n, "timezone"), U = Ye("dp-menu-wrap"), X = Ye("dp-menu"), le = Ye("input-cmp"), fe = Ye("picker-wrapper"), ee = Ye("menu-arrow"), te = de(!1), Q = de(!1), W = de(!1), x = de(!1), re = (me) => (d.value.arrow && (d.value.arrow === !0 ? me.push(_a({ element: ee })) : me.push(_a({ element: d.value.arrow }))), me), { floatingStyles: ve, middlewareData: ye, placement: be, y: _e } = vn(
      le,
      U,
      {
        strategy: d.value.strategy,
        placement: d.value.placement,
        middleware: re([mn(d.value.offset), pn(), hn()]),
        whileElementsMounted: fn
      }
    );
    He(() => {
      G(n.modelValue), Xe().then(() => {
        o.value.enabled || globalThis.addEventListener("resize", f);
      }), o.value.enabled && (y.value = !0), globalThis.addEventListener("keyup", P), globalThis.addEventListener("keydown", E);
    }), Ct(() => {
      o.value.enabled || globalThis.removeEventListener("resize", f), globalThis.removeEventListener("keyup", P), globalThis.removeEventListener("keydown", E);
    });
    const ae = C(M, "all", n.presetDates), pe = C(M, "input");
    it(
      [k, F],
      () => {
        G(k.value);
      },
      { deep: !0 }
    ), it([be, _e], () => {
      v.value = !1, Xe().then(() => {
        v.value = !0;
      });
    });
    const { parseExternalModelValue: G, emitModelValue: H, formatInputValue: se, checkBeforeEmit: he } = Bn(), b = z(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: o.value.enabled,
        "dp--flex-display-collapsed": x.value,
        dp__flex_display_with_input: o.value.input
      })
    ), A = z(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), ie = z(() => o.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), oe = () => le.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, h = () => {
      y.value && c.value.closeOnScroll && ce();
    }, f = () => {
      const me = X.value?.$el.getBoundingClientRect().width ?? 0;
      x.value = document.body.offsetWidth <= me;
    }, P = (me) => {
      me.key === "Tab" && !o.value.enabled && !n.teleport && c.value.tabOutClosesMenu && (fe.value.contains(document.activeElement) || ce()), W.value = me.shiftKey;
    }, E = (me) => {
      W.value = me.shiftKey;
    }, L = () => {
      !n.disabled && !n.readonly && (y.value = !0, y.value && p("open"), y.value || Se(), G(n.modelValue));
    }, O = () => {
      s.value = "", Se(), X.value?.onValueCleared(), le.value?.setParsedDate(null), p("update:model-value", null), p("cleared"), c.value.closeOnClearValue && ce();
    }, a = () => {
      const me = l.value;
      return !me || !Array.isArray(me) && u(me) ? !0 : Array.isArray(me) ? $.value.enabled || me.length === 2 && u(me[0]) && u(me[1]) ? !0 : D.value.partialRange && !n.timePicker ? u(me[0]) : !1 : !1;
    }, T = () => {
      he() && a() ? (H(), ce()) : p("invalid-select");
    }, i = (me) => {
      J(), H(), c.value.closeOnAutoApply && !me && ce();
    }, J = () => {
      le.value && S.value.enabled && le.value.setParsedDate(l.value);
    }, Z = (me = !1) => {
      n.autoApply && I(l.value) && a() && (D.value.enabled && Array.isArray(l.value) ? (D.value.partialRange || l.value.length === 2) && i(me) : i(me));
    }, Se = () => {
      S.value.enabled || (l.value = null);
    }, ce = (me = !1) => {
      me && l.value && c.value.setDateOnMenuClose && T(), o.value.enabled || (y.value && (y.value = !1, r("menuFocused", !1), r("shiftKeyInMenu", !1), Y(), p("closed"), s.value && G(k.value)), Se(), p("blur"));
    }, Ue = (me, Je, at = !1) => {
      if (!me) {
        l.value = null;
        return;
      }
      const wt = Array.isArray(me) ? !me.some((va) => !u(va)) : u(me), Dt = I(me);
      wt && Dt ? (r("isTextInputDate", !0), l.value = me, Je ? (Q.value = at, T(), p("text-submit")) : n.autoApply && Z(!0), Xe().then(() => {
        r("isTextInputDate", !1);
      })) : p("invalid-date", me);
    }, Be = () => {
      n.autoApply && I(l.value) && H(), J();
    }, dt = () => y.value ? ce() : L(), la = (me) => {
      l.value = me;
    }, oa = () => {
      S.value.enabled && (te.value = !0, se()), p("focus");
    }, Ot = () => {
      S.value.enabled && (te.value = !1, G(n.modelValue), Q.value && N(fe.value, W.value)?.focus()), p("blur");
    }, sa = (me) => {
      X.value && X.value.updateMonthYear(0, {
        month: q(me.month),
        year: q(me.year)
      });
    }, ua = (me) => {
      G(me ?? n.modelValue);
    }, Ut = (me, Je) => {
      X.value?.switchView(me, Je);
    }, ia = (me, Je) => c.value.onClickOutside ? c.value.onClickOutside(me, Je) : ce(!0), ca = (me = 0) => {
      X.value?.handleFlow(me);
    }, da = () => U;
    return dn(U, (me) => ia(a, me), {
      ignore: [le]
    }), w({
      closeMenu: ce,
      selectDate: T,
      clearValue: O,
      openMenu: L,
      onScroll: h,
      formatInputValue: se,
      // exposed for testing purposes
      updateInternalModelValue: la,
      // modify internal modelValue
      setMonthYear: sa,
      parseModel: ua,
      switchView: Ut,
      toggleMenu: dt,
      handleFlow: ca,
      getDpWrapMenuRef: da
    }), (me, Je) => (R(), K("div", {
      ref: "picker-wrapper",
      class: we(b.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": t(V)
    }, [
      nt(Or, {
        ref: "input-cmp",
        "is-menu-open": y.value,
        onClear: O,
        onOpen: L,
        onSetInputDate: Ue,
        onSetEmptyDate: t(H),
        onSelectDate: T,
        onToggle: dt,
        onClose: ce,
        onFocus: oa,
        onBlur: Ot,
        onRealBlur: Je[0] || (Je[0] = (at) => te.value = !1)
      }, Le({ _: 2 }, [
        Oe(t(pe), (at, wt) => ({
          name: at,
          fn: Me((Dt) => [
            ue(me.$slots, at, Ze(ut(Dt)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      (R(), Ce(cn, {
        to: t(g),
        disabled: !t(g)
      }, [
        Pe("div", {
          ref: "dp-menu-wrap",
          class: we({
            "dp--menu-wrapper": !t(o).enabled,
            dp__outer_menu_wrap: !0,
            "dp--centered": t(n).centered
          }),
          style: et(!t(o).enabled && !t(n).centered ? t(ve) : void 0)
        }, [
          nt(Yt, {
            name: t(m)(t(be).startsWith("top")),
            css: t(B) && !t(o).enabled && !t(n).centered && v.value
          }, {
            default: Me(() => [
              y.value && v.value ? (R(), Ce(Ll, {
                key: 0,
                ref: "dp-menu",
                class: we({ [A.value]: !0 }),
                "no-overlay-focus": ie.value,
                collapse: x.value,
                "get-input-rect": oe,
                onClosePicker: ce,
                onSelectDate: T,
                onAutoApply: Z,
                onTimeUpdate: Be,
                onMenuBlur: Je[1] || (Je[1] = (at) => t(p)("blur"))
              }, Le({ _: 2 }, [
                Oe(t(ae), (at, wt) => ({
                  name: at,
                  fn: Me((Dt) => [
                    ue(me.$slots, at, Ze(ut({ ...Dt })))
                  ])
                })),
                !t(o).enabled && !t(n).centered && t(d).arrow === !0 ? {
                  name: "arrow",
                  fn: Me(() => [
                    Pe("div", {
                      ref: "menu-arrow",
                      class: we({
                        dp__arrow_top: t(be) === "bottom",
                        dp__arrow_bottom: t(be) === "top"
                      }),
                      style: et({
                        left: t(ye).arrow?.x != null ? `${t(ye).arrow.x}px` : "",
                        top: t(ye).arrow?.y != null ? `${t(ye).arrow.y}px` : ""
                      })
                    }, null, 6)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["class", "no-overlay-focus", "collapse"])) : j("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ], 6)
      ], 8, ["to", "disabled"]))
    ], 10, Hl));
  }
}), Jl = /* @__PURE__ */ We({
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
  }, Ar),
  emits: ["update:model-value", "internal-model-change", "text-submit", "text-input", "open", "closed", "focus", "blur", "cleared", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "invalid-date", "tooltip-open", "tooltip-close", "am-pm-change", "range-start", "range-end", "date-click", "overlay-toggle"],
  setup(e, { expose: w, emit: p }) {
    In(e, p);
    const l = yt(), { mapSlots: n } = kt(), o = n(l, "root"), c = Ye("date-picker");
    return w(Tr(c)), (S, D) => (R(), Ce(Kl, { ref: "date-picker" }, Le({ _: 2 }, [
      Oe(t(o), ($, g) => ({
        name: $,
        fn: Me((d) => [
          ue(S.$slots, $, Ze(ut(d)))
        ])
      }))
    ]), 1536));
  }
});
export {
  to as TZDate,
  Jl as VueDatePicker
};
