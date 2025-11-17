import { h as Ee, reactive as Wt, ref as ce, computed as U, watch as ut, provide as un, readonly as cn, inject as dn, nextTick as Je, onMounted as Ne, onUnmounted as Ct, defineComponent as We, useTemplateRef as Ce, createElementBlock as j, openBlock as C, renderSlot as re, createCommentVNode as q, unref as t, createElementVNode as Te, normalizeClass as ke, createBlock as Re, withModifiers as Lt, createVNode as at, normalizeProps as Xe, mergeProps as tt, Fragment as we, normalizeStyle as Ze, createTextVNode as vt, toDisplayString as je, onBeforeUpdate as vn, withDirectives as Zt, renderList as Ye, vShow as ea, withCtx as De, withKeys as fn, Transition as Yt, createSlots as He, useSlots as gt, resolveDynamicComponent as _a, guardReactiveProps as st, mergeDefaults as Va, toValue as mn, toRef as Ta, Teleport as pn } from "vue";
import { unrefElement as Ge, useSwipe as hn, onClickOutside as gn } from "@vueuse/core";
import { useFloating as yn, autoUpdate as bn, offset as kn, flip as wn, shift as Dn, arrow as $a } from "@floating-ui/vue";
import { set as Pe, setYear as ot, parse as Ma, getYear as be, getMonth as $e, getSeconds as ht, getMinutes as ft, getHours as it, isValid as ta, addMonths as Mt, subMonths as Ht, differenceInCalendarDays as Mn, eachDayOfInterval as Aa, getDay as _n, isBefore as Rt, isAfter as At, isEqual as $t, format as et, subDays as An, addDays as pt, startOfWeek as aa, endOfWeek as Pa, startOfMonth as Pn, setMonth as Tn, isDate as $n, endOfYear as Ea, startOfYear as Ft, addYears as Fa, subYears as Na, differenceInYears as Sn, add as Wa, sub as Rn, setMilliseconds as Cn, setSeconds as Yn, getWeek as On, getISOWeek as xn, roundToNearestMinutes as Bn, isSameQuarter as Sa, eachQuarterOfInterval as In, startOfQuarter as Vn, endOfQuarter as Ra, getQuarter as Ca } from "date-fns";
import { TZDate as En } from "@date-fns/tz";
import { TZDate as uo } from "@date-fns/tz";
function Kt() {
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
function Fn() {
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
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
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
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
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
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Ee("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
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
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function za() {
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
const Oe = Wt({
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
}), ya = ce(null), Jt = ce(!1), ba = ce(!1), ka = ce(!1), wa = ce(!1), Ke = ce(0), Ve = ce(0), yt = () => {
  const e = U(() => Jt.value ? [...Oe.selectionGrid, Oe.actionRow].filter((f) => f.length) : ba.value ? [
    ...Oe.timePicker[0],
    ...Oe.timePicker[1],
    wa.value ? [] : [ya.value],
    Oe.actionRow
  ].filter((f) => f.length) : ka.value ? [...Oe.monthPicker, Oe.actionRow] : [Oe.monthYear, ...Oe.calendar, Oe.time, Oe.actionRow].filter((f) => f.length)), w = (f) => {
    Ke.value = f ? Ke.value + 1 : Ke.value - 1;
    let W = null;
    e.value[Ve.value] && (W = e.value[Ve.value][Ke.value]), !W && e.value[Ve.value + (f ? 1 : -1)] ? (Ve.value = Ve.value + (f ? 1 : -1), Ke.value = f ? 0 : e.value[Ve.value].length - 1) : W || (Ke.value = f ? Ke.value - 1 : Ke.value + 1);
  }, h = (f) => {
    if (Ve.value === 0 && !f || Ve.value === e.value.length && f) return;
    Ve.value = f ? Ve.value + 1 : Ve.value - 1, e.value[Ve.value] ? e.value[Ve.value] && !e.value[Ve.value][Ke.value] && Ke.value !== 0 && (Ke.value = e.value[Ve.value].length - 1) : Ve.value = f ? Ve.value - 1 : Ve.value + 1;
  }, r = (f) => {
    let W = null;
    e.value[Ve.value] && (W = e.value[Ve.value][Ke.value]), W ? W.focus({ preventScroll: !Jt.value }) : Ke.value = f ? Ke.value - 1 : Ke.value + 1;
  }, o = () => {
    w(!0), r(!0);
  }, s = () => {
    w(!1), r(!1);
  }, a = () => {
    h(!1), r(!0);
  }, l = () => {
    h(!0), r(!0);
  }, d = (f, W) => {
    Oe[W] = f;
  }, x = (f, W) => {
    Oe[W] = f;
  }, P = () => {
    Ke.value = 0, Ve.value = 0;
  };
  return {
    buildMatrix: d,
    buildMultiLevelMatrix: x,
    setTimePickerBackRef: (f) => {
      ya.value = f;
    },
    setSelectionGrid: (f) => {
      Jt.value = f, P(), f || (Oe.selectionGrid = []);
    },
    setTimePicker: (f, W = !1) => {
      ba.value = f, wa.value = W, P(), f || (Oe.timePicker[0] = [], Oe.timePicker[1] = []);
    },
    setTimePickerElements: (f, W = 0) => {
      Oe.timePicker[W] = f;
    },
    arrowRight: o,
    arrowLeft: s,
    arrowUp: a,
    arrowDown: l,
    clearArrowNav: () => {
      Oe.monthYear = [], Oe.calendar = [], Oe.time = [], Oe.actionRow = [], Oe.selectionGrid = [], Oe.timePicker[0] = [], Oe.timePicker[1] = [], Jt.value = !1, ba.value = !1, wa.value = !1, ka.value = !1, P(), ya.value = null;
    },
    setMonthPicker: (f) => {
      ka.value = f, P();
    },
    refSets: Oe
    // exposed for testing
  };
};
var lt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(lt || {}), _t = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(_t || {}), Qe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Qe || {});
const Nn = ["timestamp", "date", "iso"];
var qe = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(qe || {}), xe = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(xe || {}), St = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(St || {});
const Wn = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: w, isValidDate: h } = nt(), { convertType: r, errorMapper: o } = Fe(), {
    getDate: s,
    rootEmit: a,
    state: l,
    rootProps: d,
    inputValue: x,
    defaults: { textInput: P, range: O, multiDates: M, timeConfig: i, formats: _ },
    modelValue: u,
    updateTime: T
  } = Se(), { setTime: f, getWeekFromDate: W } = ze(), { formatSelectedDate: B, formatForTextInput: D } = kt();
  ut(
    u,
    (b, X) => {
      a("internal-model-change", u.value), JSON.stringify(X ?? {}) !== JSON.stringify(b ?? {}) && T();
    },
    { deep: !0 }
  ), ut(O, (b, X) => {
    b.enabled !== X.enabled && (u.value = null);
  }), ut(
    () => _.value.input,
    () => {
      ne();
    }
  );
  const F = (b) => b ? d.modelType ? ye(b) : {
    hours: it(b),
    minutes: ft(b),
    seconds: i.value.enableSeconds ? ht(b) : 0
  } : null, Q = (b) => d.modelType ? ye(b) : { month: $e(b), year: be(b) }, I = (b) => Array.isArray(b) ? M.value.enabled ? b.map((X) => y(X, ot(s(), X))) : w(
    () => [
      ot(s(), b[0]),
      b[1] ? ot(s(), b[1]) : e(O.value.partialRange)
    ],
    O.value.enabled
  ) : ot(s(), +b), y = (b, X) => (typeof b == "string" || typeof b == "number") && d.modelType ? ie(b) : X, m = (b) => Array.isArray(b) ? [
    y(b[0], f(b[0])),
    y(b[1], f(b[1]))
  ] : y(b, f(b)), k = (b) => {
    const X = Pe(s(), { date: 1 });
    return Array.isArray(b) ? M.value.enabled ? b.map(
      (L) => y(L, Pe(X, { month: +L.month, year: +L.year }))
    ) : w(
      () => [
        y(b[0], Pe(X, { month: +b[0].month, year: +b[0].year })),
        y(
          b[1],
          b[1] ? Pe(X, { month: +b[1].month, year: +b[1].year }) : e(O.value.partialRange)
        )
      ],
      O.value.enabled
    ) : y(b, Pe(X, { month: +b.month, year: +b.year }));
  }, R = (b) => {
    if (Array.isArray(b))
      return b.map((X) => ie(X));
    throw new Error(o.dateArr("multi-dates"));
  }, z = (b) => {
    if (Array.isArray(b) && O.value.enabled) {
      const X = b[0], L = b[1];
      return [
        s(Array.isArray(X) ? X[0] : null),
        Array.isArray(L) && L.length ? s(L[0]) : null
      ];
    }
    return s(b[0]);
  }, Z = (b) => d.modelAuto ? Array.isArray(b) ? [ie(b[0]), ie(b[1])] : d.autoApply ? [ie(b)] : [ie(b), null] : Array.isArray(b) ? w(
    () => b[1] ? [
      ie(b[0]),
      b[1] ? ie(b[1]) : e(O.value.partialRange)
    ] : [ie(b[0])],
    O.value.enabled
  ) : ie(b), te = () => {
    Array.isArray(u.value) && O.value.enabled && u.value.length === 1 && u.value.push(e(O.value.partialRange));
  }, de = () => {
    const b = u.value;
    return [
      ye(b[0]),
      b[1] ? ye(b[1]) : e(O.value.partialRange)
    ];
  }, ge = () => Array.isArray(u.value) ? u.value[1] ? de() : ye(r(u.value[0])) : [], H = () => (u.value || []).map((b) => ye(b)), se = (b = !1) => (b || te(), d.modelAuto ? ge() : M.value.enabled ? H() : Array.isArray(u.value) ? w(() => de(), O.value.enabled) : ye(r(u.value))), E = (b) => !b || Array.isArray(b) && !b.length ? null : d.timePicker ? m(r(b)) : d.monthPicker ? k(r(b)) : d.yearPicker ? I(r(b)) : M.value.enabled ? R(r(b)) : d.weekPicker ? z(r(b)) : Z(r(b)), ae = (b) => {
    if (l.isTextInputDate) return;
    const X = E(b);
    h(r(X)) ? (u.value = r(X), ne()) : (u.value = null, x.value = "");
  }, K = () => u.value ? M.value.enabled ? u.value.map((b) => B(b)).join("; ") : P.value.enabled ? D() : B(u.value) : "", ne = () => {
    x.value = K();
  }, ie = (b) => d.modelType ? Nn.includes(d.modelType) ? s(b) : d.modelType === "format" && typeof _.value.input == "string" ? Ma(b, _.value.input, s(), { locale: d.locale }) : Ma(b, d.modelType, s(), { locale: d.locale }) : s(b), ye = (b) => b ? d.modelType ? d.modelType === "timestamp" ? +b : d.modelType === "iso" ? b.toISOString() : d.modelType === "format" && typeof _.value.input == "string" ? B(b) : B(b, d.modelType) : b : null, _e = (b) => {
    a("update:model-value", b);
  }, Ae = (b) => Array.isArray(u.value) ? M.value.enabled ? u.value.map((X) => b(X)) : [b(u.value[0]), u.value[1] ? b(u.value[1]) : null] : b(r(u.value)), le = () => {
    if (Array.isArray(u.value)) {
      const b = W(u.value[0], d.weekStart), X = u.value[1] ? W(u.value[1], d.weekStart) : [];
      return [b.map((L) => s(L)), X.map((L) => s(L))];
    }
    return W(u.value, d.weekStart).map((b) => s(b));
  }, me = (b) => _e(r(Ae(b))), $ = () => a("update:model-value", le());
  return {
    checkBeforeEmit: () => u.value ? O.value.enabled ? O.value.partialRange ? u.value.length >= 1 : u.value.length === 2 : !!u.value : !1,
    parseExternalModelValue: ae,
    formatInputValue: ne,
    emitModelValue: () => (ne(), d.monthPicker ? me(Q) : d.timePicker ? me(F) : d.yearPicker ? me(be) : d.weekPicker ? $() : _e(se()))
  };
}, dt = [
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
], Ya = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Ln = {
  all: () => dt,
  root: () => dt.concat(Ya),
  monthYear: () => dt.filter((e) => e.use.includes("month-year")),
  input: () => Ya,
  timePicker: () => dt.filter((e) => e.use.includes("time")),
  action: () => dt.filter((e) => e.use.includes("action")),
  calendar: () => dt.filter((e) => e.use.includes("calendar")),
  menu: () => dt.filter((e) => e.use.includes("menu")),
  shared: () => dt.filter((e) => e.use.includes("shared")),
  yearMode: () => dt.filter((e) => e.use.includes("year-mode"))
}, bt = () => ({
  mapSlots: (w, h, r) => {
    const o = [];
    for (const s of Ln[h]())
      w[s.name] && o.push(s.name);
    if (r?.length)
      for (const s of r)
        s.slot && o.push(s.slot);
    return o;
  }
}), Ua = Symbol("ContextKey"), Hn = (e, w) => {
  const { setTimeModelValue: h } = Fe(), r = Or(e), o = ce(null), s = Wt({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1
  }), a = r.getDate(/* @__PURE__ */ new Date()), l = ce(""), d = ce([{ month: $e(a), year: be(a) }]), x = Wt({ hours: 0, minutes: 0, seconds: 0 });
  h(x, null, a, r.range.value.enabled);
  const P = U({
    get: () => o.value,
    set: (u) => {
      o.value = u;
    }
  }), O = U(
    () => (u) => d.value[u] ? d.value[u].month : 0
  ), M = U(
    () => (u) => d.value[u] ? d.value[u].year : 0
  ), i = (u, T) => {
    s[u] = T;
  }, _ = () => {
    h(x, P.value, a, r.range.value.enabled);
  };
  un(Ua, {
    rootProps: e,
    defaults: r,
    modelValue: P,
    state: cn(s),
    rootEmit: w,
    calendars: d,
    month: O,
    year: M,
    time: x,
    today: a,
    inputValue: l,
    setState: i,
    updateTime: _,
    getDate: r.getDate
  });
}, Se = () => {
  const e = dn(Ua);
  if (!e)
    throw new Error("Can't use context");
  return e;
}, jt = () => {
  const {
    defaults: { transitions: e }
  } = Se(), w = U(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), h = U(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: w, showTransition: !!e.value, menuTransition: h };
}, zt = (e) => {
  const {
    today: w,
    time: h,
    modelValue: r,
    defaults: { range: o }
  } = Se(), { setTimeModelValue: s } = Fe();
  ut(
    o,
    (a, l) => {
      a.enabled !== l.enabled && s(h, r.value, w, o.value.enabled);
    },
    { deep: !0 }
  ), ut(
    r,
    (a, l) => {
      e && JSON.stringify(a ?? {}) !== JSON.stringify(l ?? {}) && e();
    },
    { deep: !0 }
  );
}, nt = () => {
  const {
    defaults: { safeDates: e, range: w, multiDates: h, filters: r, timeConfig: o },
    rootProps: s,
    getDate: a
  } = Se(), { getMapKeyType: l, getMapDate: d, errorMapper: x, convertType: P } = Fe(), { isDateBefore: O, isDateAfter: M, isDateEqual: i, resetDate: _, getDaysInBetween: u, setTimeValue: T, getTimeObj: f, setTime: W } = ze(), B = (p) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(a(p)) : !!d(p, e.value.disabledDates) : !1, D = (p) => e.value.maxDate ? s.yearPicker ? be(p) > be(e.value.maxDate) : M(p, e.value.maxDate) : !1, F = (p) => e.value.minDate ? s.yearPicker ? be(p) < be(e.value.minDate) : O(p, e.value.minDate) : !1, Q = (p) => {
    if (!p) return !1;
    const S = D(p), g = F(p), Y = B(p), v = r.value.months.map((he) => +he).includes($e(p)), n = r.value.weekDays?.length ? r.value.weekDays.some((he) => +he === _n(p)) : !1, V = R(p), N = be(p), ue = N < +s.yearRange[0] || N > +s.yearRange[1];
    return !(S || g || Y || v || ue || n || V);
  }, I = (p, S) => O(...$(e.value.minDate, p, S)) || i(...$(e.value.minDate, p, S)), y = (p, S) => M(...$(e.value.maxDate, p, S)) || i(...$(e.value.maxDate, p, S)), m = (p, S, g) => {
    let Y = !1;
    return e.value.maxDate && g && y(p, S) && (Y = !0), e.value.minDate && !g && I(p, S) && (Y = !0), Y;
  }, k = (p, S, g, Y) => {
    let G = !1;
    return Y && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? G = m(p, S, g) : (e.value.minDate && I(p, S) || e.value.maxDate && y(p, S)) && (G = !0) : G = !0, G;
  }, R = (p) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !d(
    p,
    e.value.allowedDates,
    l(s.monthPicker, s.yearPicker)
  ) : !1, z = (p) => !Q(p), Z = (p) => w.value.noDisabledRange ? !Aa({ start: p[0], end: p[1] }).some((g) => z(g)) : !0, te = (p) => {
    if (p) {
      const S = be(p);
      return S >= +s.yearRange[0] && S <= s.yearRange[1];
    }
    return !0;
  }, de = (p, S) => !!(Array.isArray(p) && p[S] && (w.value.maxRange || w.value.minRange) && te(p[S])), ge = (p, S, g = 0) => {
    if (de(S, g) && te(p)) {
      const Y = Mn(p, S[g]), G = u(S[g], p), v = G.length === 1 ? 0 : G.filter((V) => z(V)).length, n = Math.abs(Y) - (w.value.minMaxRawRange ? 0 : v);
      if (w.value.minRange && w.value.maxRange)
        return n >= +w.value.minRange && n <= +w.value.maxRange;
      if (w.value.minRange) return n >= +w.value.minRange;
      if (w.value.maxRange) return n <= +w.value.maxRange;
    }
    return !0;
  }, H = () => !o.value.enableTimePicker || s.monthPicker || s.yearPicker || o.value.ignoreTimeValidation, se = (p) => Array.isArray(p) ? [p[0] ? T(p[0]) : null, p[1] ? T(p[1]) : null] : T(p), E = (p, S, g) => S ? p.find(
    (Y) => +Y.hours === it(S) && Y.minutes === "*" ? !0 : +Y.minutes === ft(S) && +Y.hours === it(S)
  ) && g : !1, ae = (p, S, g) => {
    const [Y, G] = p, [v, n] = S;
    return !E(Y, v, g) && !E(G, n, g) && g;
  }, K = (p, S) => {
    const g = Array.isArray(S) ? S : [S];
    return Array.isArray(s.disabledTimes) ? Array.isArray(s.disabledTimes[0]) ? ae(s.disabledTimes, g, p) : !g.some((Y) => E(s.disabledTimes, Y, p)) : p;
  }, ne = (p, S) => {
    const g = Array.isArray(S) ? [f(S[0]), S[1] ? f(S[1]) : void 0] : f(S), Y = !s.disabledTimes(g);
    return p && Y;
  }, ie = (p, S) => s.disabledTimes ? Array.isArray(s.disabledTimes) ? K(S, p) : ne(S, p) : S, ye = (p) => {
    let S = !0;
    if (!p || H()) return !0;
    const g = !e.value.minDate && !e.value.maxDate ? se(p) : p;
    return (s.maxTime || e.value.maxDate) && (S = ee(
      s.maxTime,
      e.value.maxDate,
      "max",
      P(g),
      S
    )), (s.minTime || e.value.minDate) && (S = ee(
      s.minTime,
      e.value.minDate,
      "min",
      P(g),
      S
    )), ie(p, S);
  }, _e = (p) => {
    if (!s.monthPicker) return !0;
    let S = !0;
    const g = a(_(p));
    if (e.value.minDate && e.value.maxDate) {
      const Y = a(_(e.value.minDate)), G = a(_(e.value.maxDate));
      return M(g, Y) && O(g, G) || i(g, Y) || i(g, G);
    }
    if (e.value.minDate) {
      const Y = a(_(e.value.minDate));
      S = M(g, Y) || i(g, Y);
    }
    if (e.value.maxDate) {
      const Y = a(_(e.value.maxDate));
      S = O(g, Y) || i(g, Y);
    }
    return S;
  }, Ae = U(() => (p) => !o.value.enableTimePicker || o.value.ignoreTimeValidation ? !0 : ye(p)), le = U(() => (p) => s.monthPicker ? Array.isArray(p) && (w.value.enabled || h.value.enabled) ? !p.filter((g) => !_e(g)).length : _e(p) : !0), me = (p, S, g) => {
    if (!S || g && !e.value.maxDate || !g && !e.value.minDate) return !1;
    const Y = g ? Mt(p, 1) : Ht(p, 1), G = [$e(Y), be(Y)];
    return g ? !y(...G) : !I(...G);
  }, $ = (p, S, g) => [Pe(a(p), { date: 1 }), Pe(a(), { month: S, year: g, date: 1 })], oe = (p, S, g, Y) => {
    if (!p) return !0;
    if (Y) {
      const G = g === "max" ? Rt(p, S) : At(p, S), v = { seconds: 0, milliseconds: 0 };
      return G || $t(Pe(p, v), Pe(S, v));
    }
    return g === "max" ? p.getTime() <= S.getTime() : p.getTime() >= S.getTime();
  }, ee = (p, S, g, Y, G) => {
    if (Array.isArray(Y)) {
      const n = b(p, Y[0], S), V = b(p, Y[1], S);
      return oe(Y[0], n, g, !!S) && oe(Y[1], V, g, !!S) && G;
    }
    const v = b(p, Y, S);
    return oe(Y, v, g, !!S) && G;
  }, b = (p, S, g) => p ? W(p, S) : a(g ?? S);
  return {
    isDisabled: z,
    validateDate: Q,
    validateMonthYearInRange: k,
    isDateRangeAllowed: Z,
    checkMinMaxRange: ge,
    isValidTime: ye,
    validateMonthYear: me,
    validateMinDate: I,
    validateMaxDate: y,
    isValidDate: (p) => Array.isArray(p) ? ta(p[0]) && (p[1] ? ta(p[1]) : !0) : p ? ta(p) : !1,
    checkPartialRangeValue: (p) => {
      if (p) return null;
      throw new Error(x.prop("partial-range"));
    },
    checkRangeEnabled: (p, S) => {
      if (S) return p();
      throw new Error(x.prop("range"));
    },
    checkMinMaxValue: (p, S, g) => {
      const Y = g != null, G = S != null;
      if (!Y && !G) return !1;
      const v = +g, n = +S;
      return Y && G ? +p > v || +p < n : Y ? +p > v : G ? +p < n : !1;
    },
    isTimeValid: Ae,
    isMonthValid: le
  };
}, Kn = (e) => {
  const {
    rootEmit: w,
    rootProps: h,
    defaults: { timeConfig: r, flow: o }
  } = Se(), s = ce(0), a = Wt({
    [_t.timePicker]: !r.value.enableTimePicker || h.timePicker || h.monthPicker,
    [_t.calendar]: !1,
    [_t.header]: !1
  }), l = U(() => h.monthPicker || h.timePicker), d = (i) => {
    if (o.value?.steps?.length) {
      if (!i && l.value) return M();
      a[i] = !0, Object.keys(a).filter((_) => !a[_]).length || M();
    }
  }, x = () => {
    o.value?.steps?.length && s.value !== -1 && (s.value += 1, w("flow-step", s.value), M()), o.value?.steps?.length === s.value && Je().then(() => P());
  }, P = () => {
    s.value = -1;
  }, O = (i, _, ...u) => {
    o.value?.steps[s.value] === i && e.value && e.value[_]?.(...u);
  }, M = (i = 0) => {
    i && (s.value += i), O(Qe.month, "toggleMonthPicker", !0), O(Qe.year, "toggleYearPicker", !0), O(Qe.calendar, "toggleTimePicker", !1, !0), O(Qe.time, "toggleTimePicker", !0, !0);
    const _ = o.value?.steps[s.value];
    (_ === Qe.hours || _ === Qe.minutes || _ === Qe.seconds) && O(_, "toggleTimePicker", !0, !0, _);
  };
  return { childMount: d, updateFlowStep: x, resetFlow: P, handleFlow: M, flowStep: s };
};
function Da(e) {
  return (w = {}) => {
    const h = w.width ? String(w.width) : e.defaultWidth;
    return e.formats[h] || e.formats[e.defaultWidth];
  };
}
function Vt(e) {
  return (w, h) => {
    const r = h?.context ? String(h.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, l = h?.width ? String(h.width) : a;
      o = e.formattingValues[l] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, l = h?.width ? String(h.width) : e.defaultWidth;
      o = e.values[l] || e.values[a];
    }
    const s = e.argumentCallback ? e.argumentCallback(w) : w;
    return o[s];
  };
}
function Et(e) {
  return (w, h = {}) => {
    const r = h.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = w.match(o);
    if (!s)
      return null;
    const a = s[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(l) ? zn(l, (O) => O.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      jn(l, (O) => O.test(a))
    );
    let x;
    x = e.valueCallback ? e.valueCallback(d) : d, x = h.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      h.valueCallback(x)
    ) : x;
    const P = w.slice(a.length);
    return { value: x, rest: P };
  };
}
function jn(e, w) {
  for (const h in e)
    if (Object.prototype.hasOwnProperty.call(e, h) && w(e[h]))
      return h;
}
function zn(e, w) {
  for (let h = 0; h < e.length; h++)
    if (w(e[h]))
      return h;
}
function Un(e) {
  return (w, h = {}) => {
    const r = w.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = w.match(e.parsePattern);
    if (!s) return null;
    let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = h.valueCallback ? h.valueCallback(a) : a;
    const l = w.slice(o.length);
    return { value: a, rest: l };
  };
}
const qn = {
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
}, Qn = (e, w, h) => {
  let r;
  const o = qn[e];
  return typeof o == "string" ? r = o : w === 1 ? r = o.one : r = o.other.replace("{{count}}", w.toString()), h?.addSuffix ? h.comparison && h.comparison > 0 ? "in " + r : r + " ago" : r;
}, Gn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Jn = (e, w, h, r) => Gn[e], Xn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Zn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, er = {
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
}, tr = {
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
}, ar = {
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
}, nr = {
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
}, rr = (e, w) => {
  const h = Number(e), r = h % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return h + "st";
      case 2:
        return h + "nd";
      case 3:
        return h + "rd";
    }
  return h + "th";
}, lr = {
  ordinalNumber: rr,
  era: Vt({
    values: Xn,
    defaultWidth: "wide"
  }),
  quarter: Vt({
    values: Zn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Vt({
    values: er,
    defaultWidth: "wide"
  }),
  day: Vt({
    values: tr,
    defaultWidth: "wide"
  }),
  dayPeriod: Vt({
    values: ar,
    defaultWidth: "wide",
    formattingValues: nr,
    defaultFormattingWidth: "wide"
  })
}, or = /^(\d+)(th|st|nd|rd)?/i, sr = /\d+/i, ur = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ir = {
  any: [/^b/i, /^(a|c)/i]
}, cr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, dr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, vr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, fr = {
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
}, mr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, hr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, gr = {
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
}, yr = {
  ordinalNumber: Un({
    matchPattern: or,
    parsePattern: sr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Et({
    matchPatterns: ur,
    defaultMatchWidth: "wide",
    parsePatterns: ir,
    defaultParseWidth: "any"
  }),
  quarter: Et({
    matchPatterns: cr,
    defaultMatchWidth: "wide",
    parsePatterns: dr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Et({
    matchPatterns: vr,
    defaultMatchWidth: "wide",
    parsePatterns: fr,
    defaultParseWidth: "any"
  }),
  day: Et({
    matchPatterns: mr,
    defaultMatchWidth: "wide",
    parsePatterns: pr,
    defaultParseWidth: "any"
  }),
  dayPeriod: Et({
    matchPatterns: hr,
    defaultMatchWidth: "any",
    parsePatterns: gr,
    defaultParseWidth: "any"
  })
}, br = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, kr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, wr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Dr = {
  date: Da({
    formats: br,
    defaultWidth: "full"
  }),
  time: Da({
    formats: kr,
    defaultWidth: "full"
  }),
  dateTime: Da({
    formats: wr,
    defaultWidth: "full"
  })
}, Mr = {
  code: "en-US",
  formatDistance: Qn,
  formatLong: Dr,
  formatRelative: Jn,
  localize: lr,
  match: yr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Oa = {
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
}, _r = {
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
}, xa = {
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: "open",
  selectOnFocus: !1,
  rangeSeparator: " - ",
  escClose: !0,
  format: void 0,
  maskFormat: void 0
}, Ar = {
  dates: [],
  years: [],
  months: [],
  quarters: [],
  weeks: [],
  weekdays: [],
  options: { highlightDisabled: !1 }
}, Pr = {
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  selectBtnLabel: "Select",
  cancelBtnLabel: "Cancel",
  nowBtnLabel: "Now",
  nowBtnRound: void 0
}, Tr = {
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
}, Ba = {
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down"
}, $r = {
  weekDays: [],
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] }
}, Sr = {
  month: "LLL",
  year: "yyyy",
  weekDay: "EEEEEE",
  quarter: "MMMM",
  day: "d",
  input: void 0,
  preview: void 0
}, Rr = {
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
}, Cr = {
  flowStep: 0,
  menuWrapRef: null,
  collapse: !1
}, Yr = {
  weekStart: 1,
  yearRange: () => [1900, 2100],
  ui: () => ({}),
  locale: () => Mr,
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
}, Ia = {
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
}, Or = (e) => {
  const { getMapKey: w, getMapKeyType: h, getTimeObjFromCurrent: r } = Fe();
  function o(H, se) {
    let E;
    return e.timezone ? E = new En(H ?? /* @__PURE__ */ new Date(), e.timezone) : E = H ? new Date(H) : /* @__PURE__ */ new Date(), se ? Pe(E, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : E;
  }
  const s = () => {
    const H = Z.value.enableSeconds ? ":ss" : "", se = Z.value.enableMinutes ? ":mm" : "";
    return Z.value.is24 ? `HH${se}${H}` : `hh${se}${H} aa`;
  }, a = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${Q.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : Z.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", l = (H) => r(o(), H, Z.value.enableSeconds), d = () => m.value.enabled ? Z.value.startTime && Array.isArray(Z.value.startTime) ? [l(Z.value.startTime[0]), l(Z.value.startTime[1])] : null : Z.value.startTime && !Array.isArray(Z.value.startTime) ? l(Z.value.startTime) : null, x = (H) => H ? typeof H == "boolean" ? H ? 2 : 0 : Math.max(+H, 2) : 0, P = (H) => {
    const se = h(e.monthPicker, e.yearPicker);
    return new Map(
      H.map((E) => {
        const ae = o(E, O.value);
        return [w(ae, se), ae];
      })
    );
  }, O = U(() => e.monthPicker || e.yearPicker || e.quarterPicker), M = U(() => {
    const H = typeof e.multiCalendars == "object" && e.multiCalendars, se = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...se, count: x(!1) };
    const E = H ? e.multiCalendars : {}, ae = H ? E.count ?? !0 : e.multiCalendars, K = x(ae);
    return Object.assign(se, E, { count: K });
  }), i = U(() => d()), _ = U(() => ({ ...Tr, ...e.ariaLabels })), u = U(() => ({ ...$r, ...e.filters })), T = U(() => typeof e.transitions == "boolean" ? e.transitions ? Ba : !1 : { ...Ba, ...e.transitions }), f = U(() => ({ ...Pr, ...e.actionRow })), W = U(() => typeof e.textInput == "object" ? {
    ...xa,
    ...e.textInput,
    format: typeof e.textInput.format == "string" ? e.textInput.format : R.value.input,
    pattern: e.textInput.format ?? R.value.input,
    enabled: !0
  } : {
    ...xa,
    format: R.value.input,
    pattern: R.value.input,
    enabled: e.textInput
  }), B = U(() => {
    const H = { input: !1 };
    return typeof e.inline == "object" ? { ...H, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...H
    };
  }), D = U(() => ({ ..._r, ...e.config })), F = U(() => typeof e.highlight == "function" ? e.highlight : {
    ...Ar,
    ...e.highlight
  }), Q = U(() => typeof e.weekNumbers == "object" ? {
    type: e.weekNumbers?.type ?? Xt.type,
    hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? Xt.hideOnOffsetDates,
    label: e.weekNumbers.label ?? Xt.label
  } : e.weekNumbers ? Xt : void 0), I = U(() => typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
    enabled: !!e.multiDates,
    limit: e.multiDates?.limit ? +e.multiDates.limit : null,
    dragSelect: e.multiDates?.dragSelect ?? !0
  }), y = U(() => ({
    minDate: e.minDate ? o(e.minDate) : null,
    maxDate: e.maxDate ? o(e.maxDate) : null,
    disabledDates: Array.isArray(e.disabledDates) ? P(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? P(e.allowedDates) : null,
    highlight: typeof F.value == "object" && Array.isArray(F.value.dates) ? P(F.value.dates) : F.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((H) => {
        const se = o(H.date);
        return [w(se, St.DATE), H];
      })
    ) : null
  })), m = U(() => typeof e.range == "object" ? { enabled: !0, ...Oa, ...e.range } : {
    enabled: e.range,
    ...Oa
  }), k = U(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((se) => {
        const E = se, ae = e.ui[E];
        if (E === "dayClass") return [E, e.ui[E]];
        const K = typeof e.ui[E] == "string" ? { [ae]: !0 } : Object.fromEntries(ae.map((ne) => [ne, !0]));
        return [se, K];
      })
    )
  })), R = U(() => ({
    ...Sr,
    ...e.formats,
    input: e.formats?.input ?? a(),
    preview: e.formats?.preview ?? a()
  })), z = U(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), Z = U(() => ({ ...Rr, ...e.timeConfig })), te = U(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), de = U(() => {
    const H = W.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Ia, inputmode: H, ...e.inputAttrs } : { ...Ia, inputmode: H };
  }), ge = U(() => ({
    offset: e.floating?.offset ?? 10,
    arrow: e.floating?.arrow ?? !0,
    strategy: e.floating?.strategy ?? void 0,
    placement: e.floating?.placement ?? void 0
  }));
  return {
    transitions: T,
    multiCalendars: M,
    startTime: i,
    ariaLabels: _,
    filters: u,
    actionRow: f,
    textInput: W,
    inline: B,
    config: D,
    highlight: F,
    weekNumbers: Q,
    range: m,
    safeDates: y,
    multiDates: I,
    ui: k,
    formats: R,
    teleport: z,
    timeConfig: Z,
    flow: te,
    inputAttrs: de,
    floatingConfig: ge,
    getDate: o
  };
}, Fe = () => {
  const e = (D, F) => et(D, F ?? St.DATE), w = (D, F) => D ? St.MONTH_AND_YEAR : F ? St.YEAR : St.DATE, h = (D, F, Q) => F.get(e(D, Q)), r = (D) => D, o = (D) => D === 0 ? D : !D || Number.isNaN(+D) ? null : +D, s = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), a = (D, F) => {
    let Q = [...document.querySelectorAll(s())];
    Q = Q.filter((y) => !D.contains(y) || "datepicker-instance" in y.dataset);
    const I = Q.indexOf(D);
    if (I >= 0 && (F ? I - 1 >= 0 : I + 1 <= Q.length))
      return Q[I + (F ? -1 : 1)];
  }, l = (D) => String(D).padStart(2, "0"), d = (D, F) => D?.querySelector(`[data-dp-element="${F}"]`), x = (D, F, Q = !1) => {
    D && F.allowStopPropagation && (Q && D.stopImmediatePropagation(), D.stopPropagation());
  }, P = (D, F, Q = !1, I) => {
    if (D.key === xe.enter || D.key === xe.space)
      return Q && D.preventDefault(), F();
    if (I) return I(D);
  }, O = (D, F) => {
    F.allowStopPropagation && D.stopPropagation(), F.allowPreventDefault && D.preventDefault();
  }, M = (D) => {
    if (D)
      return [...D.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, i = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, _ = (D) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][D], u = (D) => {
    const F = [], Q = (I) => I.filter((y) => !!y);
    for (let I = 0; I < D.length; I += 3) {
      const y = [D[I], D[I + 1], D[I + 2]];
      F.push(Q(y));
    }
    return F;
  }, T = {
    prop: (D) => `"${D}" prop must be enabled!`,
    dateArr: (D) => `You need to use array as "model-value" binding in order to support "${D}"`
  }, f = (D, F, Q, I, y) => {
    const m = {
      hours: it,
      minutes: ft,
      seconds: ht
    };
    if (!F) return I ? [m[D](Q), m[D](Q)] : m[D](Q);
    if (Array.isArray(F) && I) {
      const k = F[0] ?? Q, R = F[1];
      return [m[D](k), R ? m[D](R) : y[D][1] ?? m[D](Q)];
    }
    return Array.isArray(F) && !I ? m[D](F[F.length - 1] ?? Q) : m[D](F);
  };
  return {
    getMapKey: e,
    getMapKeyType: w,
    getMapDate: h,
    convertType: r,
    getNumVal: o,
    findNextFocusableElement: a,
    padZero: l,
    getElWithin: d,
    checkStopPropagation: x,
    checkKeyDown: P,
    handleEventPropagation: O,
    findFocusableEl: M,
    isTouchDevice: i,
    hoursToAmPmHours: _,
    getGroupedList: u,
    setTimeModelValue: (D, F, Q, I) => {
      D.hours = f("hours", F, Q, I, D), D.minutes = f("minutes", F, Q, I, D), D.seconds = f("seconds", F, Q, I, D);
    },
    getTimeObjFromCurrent: (D, F, Q) => {
      const I = {
        hours: it(D),
        minutes: ft(D),
        seconds: Q ? ht(D) : 0
      };
      return Object.assign(I, F);
    },
    errorMapper: T
  };
}, ze = () => {
  const { getDate: e } = Se(), { getMapDate: w, getGroupedList: h } = Fe(), r = (m, k) => {
    if (!m) return e();
    const R = e(m), z = Pe(R, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return k ? Pn(z) : z;
  }, o = (m, k) => {
    const R = e(k);
    return Pe(R, {
      hours: +(m.hours ?? it(R)),
      minutes: +(m.minutes ?? ft(R)),
      seconds: +(m.seconds ?? ht(R)),
      milliseconds: 0
    });
  }, s = (m, k) => {
    const R = aa(m, { weekStartsOn: +k }), z = Pa(m, { weekStartsOn: +k });
    return [R, z];
  }, a = (m, k) => !m || !k ? !1 : Rt(r(m), r(k)), l = (m, k) => !m || !k ? !1 : $t(r(m), r(k)), d = (m, k) => !m || !k ? !1 : At(r(m), r(k)), x = (m, k, R) => m?.[0] && m?.[1] ? d(R, m[0]) && a(R, m[1]) : m?.[0] && k ? d(R, m[0]) && a(R, k) || a(R, m[0]) && d(R, k) : !1, P = (m, k) => {
    const R = d(m, k) ? k : m, z = d(k, m) ? k : m;
    return Aa({ start: R, end: z });
  }, O = (m) => `dp-${et(m, "yyyy-MM-dd")}`, M = (m) => r(Pe(e(m), { date: 1 })), i = (m, k) => {
    if (k) {
      const R = be(e(k));
      if (R > m) return 12;
      if (R === m) return $e(e(k));
    }
  }, _ = (m, k) => {
    if (k) {
      const R = be(e(k));
      return R < m ? -1 : R === m ? $e(e(k)) : void 0;
    }
  }, u = (m) => {
    if (m) return be(e(m));
  }, T = (m) => ({
    hours: it(m),
    minutes: ft(m),
    seconds: ht(m)
  });
  return {
    resetDateTime: r,
    groupListAndMap: (m, k) => h(m).map((R) => R.map((z) => {
      const { active: Z, disabled: te, isBetween: de, highlighted: ge } = k(z);
      return {
        ...z,
        active: Z,
        disabled: te,
        className: {
          dp__overlay_cell_active: Z,
          dp__overlay_cell: !Z,
          dp__overlay_cell_disabled: te,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: te && Z,
          dp__cell_in_between: de,
          "dp--highlighted": ge
        }
      };
    })),
    setTime: o,
    getWeekFromDate: s,
    isDateAfter: d,
    isDateBefore: a,
    isDateBetween: x,
    isDateEqual: l,
    getDaysInBetween: P,
    getCellId: O,
    resetDate: M,
    getMinMonth: i,
    getMaxMonth: _,
    getYearFromDate: u,
    getTimeObj: T,
    setTimeValue: (m) => Pe(e(), T(m)),
    sanitizeTime: (m, k, R) => k && (R || R === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((z) => z === k ? [z, R] : [z, Number.isNaN(+m[z]) ? void 0 : +m[z]])
    ) : {
      hours: Number.isNaN(+m.hours) ? void 0 : +m.hours,
      minutes: Number.isNaN(+m.minutes) ? void 0 : +m.minutes,
      seconds: Number.isNaN(+(m.seconds ?? "")) ? void 0 : +m.seconds
    },
    getBeforeAndAfterInRange: (m, k) => {
      const R = An(r(k), m), z = pt(r(k), m);
      return { before: R, after: z };
    },
    isModelAuto: (m) => Array.isArray(m) ? !!m[0] && !!m[1] : !1,
    matchDate: (m, k) => m ? k ? k instanceof Map ? !!w(m, k) : k(e(m)) : !1 : !0,
    checkHighlightMonth: (m, k, R) => typeof m == "function" ? m({ month: k, year: R }) : m.months.some((z) => z.month === k && z.year === R),
    checkHighlightYear: (m, k) => typeof m == "function" ? m(k) : m.years.includes(k)
  };
}, na = () => {
  const {
    defaults: { config: e }
  } = Se(), w = ce(0);
  Ne(() => {
    h(), globalThis.addEventListener("resize", h, { passive: !0 });
  }), Ct(() => {
    globalThis.removeEventListener("resize", h);
  });
  const h = () => {
    w.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: U(() => w.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, kt = () => {
  const {
    getDate: e,
    state: w,
    modelValue: h,
    rootProps: r,
    defaults: { formats: o, textInput: s }
  } = Se(), a = (T) => et(ot(e(), T), o.value.year, { locale: r.locale }), l = (T) => et(Tn(e(), T), o.value.month, { locale: r.locale }), d = (T) => et(T, o.value.weekDay, { locale: r.locale }), x = (T) => et(T, o.value.quarter, { locale: r.locale }), P = (T, f) => [T, f].map((W) => x(W)).join("-"), O = (T) => et(T, o.value.day, { locale: r.locale }), M = (T, f, W) => {
    const B = W ? o.value.preview : o.value.input;
    if (!T) return "";
    if (typeof B == "function") return B(T);
    const D = f ?? B, F = { locale: r.locale };
    return Array.isArray(T) ? `${et(T[0], D, F)}${r.modelAuto && !T[1] ? "" : s.value.rangeSeparator}${T[1] ? et(T[1], D, F) : ""}` : et(T, D, F);
  }, i = () => {
    const T = (f) => et(f, s.value.format);
    return Array.isArray(h.value) ? `${T(h.value[0])} ${s.value.rangeSeparator} ${h.value[1] ? T(h.value[1]) : ""}` : "";
  };
  return {
    formatYear: a,
    formatMonth: l,
    formatWeekDay: d,
    formatQuarter: x,
    formatSelectedDate: M,
    formatForTextInput: () => w.isInputFocused && h.value ? Array.isArray(h.value) ? i() : et(h.value, s.value.format) : M(h.value),
    formatPreview: (T) => M(T, void 0, !0),
    formatQuarterText: P,
    formatDay: O
  };
}, ra = () => {
  const { rootProps: e } = Se(), { formatYear: w, formatMonth: h } = kt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => ({
      text: h(a),
      value: a
    })),
    getYears: () => {
      const a = [];
      for (let l = +e.yearRange[0]; l <= +e.yearRange[1]; l++)
        a.push({ value: +l, text: w(l) });
      return e.reverseYears ? a.reverse() : a;
    },
    isOutOfYearRange: (a) => a < +e.yearRange[0] || a > +e.yearRange[1]
  };
}, xr = (e) => ({
  openMenu: () => e.value?.openMenu(),
  closeMenu: () => e.value?.closeMenu(),
  selectDate: () => e.value?.selectDate(),
  clearValue: () => e.value?.clearValue(),
  formatInputValue: () => e.value?.formatInputValue(),
  updateInternalModelValue: (M) => e.value?.updateInternalModelValue(M),
  setMonthYear: (M, i) => e.value?.setMonthYear(M, i),
  parseModel: () => e.value?.parseModel(),
  switchView: (M, i) => e.value?.switchView(M, i),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu()
}), Ot = () => ({
  boolHtmlAttribute: (w) => w ? !0 : void 0
}), Br = () => {
  const {
    getDate: e,
    rootProps: w,
    defaults: { textInput: h, startTime: r, timeConfig: o }
  } = Se(), { getTimeObjFromCurrent: s } = Fe(), a = ce(!1), l = U(
    () => Array.isArray(r.value) ? r.value[0] : r.value ?? s(e(), {}, o.value.enableSeconds)
  ), d = (M, i, _) => {
    const u = Ma(M, i.slice(0, M.length), e(), { locale: w.locale });
    return ta(u) && $n(u) ? _ || a.value ? u : Pe(u, {
      hours: +l.value.hours,
      minutes: +l.value.minutes,
      seconds: +(l.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: a,
    parseFreeInput: (M, i) => {
      if (typeof h.value.pattern == "string")
        return d(M, h.value.pattern, i);
      if (Array.isArray(h.value.pattern)) {
        let _ = null;
        for (const u of h.value.pattern)
          if (_ = d(M, u, i), _)
            break;
        return _;
      }
      return typeof h.value.pattern == "function" ? h.value.pattern(M) : null;
    },
    applyMaxValues: (M, i) => {
      const _ = {
        MM: 12,
        DD: 31,
        hh: 23,
        mm: 59,
        ss: 59
      };
      let u = "", T = 0;
      for (let f = 0; f < i.length; f++) {
        const W = i[f], B = W.length, D = M.slice(T, T + B);
        if (!D) break;
        if (D.length < B)
          u += D;
        else {
          let F = Number.parseInt(D, 10);
          _[W] && F > _[W] && (F = _[W]), u += F.toString().padStart(B, "0").slice(0, B);
        }
        T += B;
      }
      return u;
    },
    createMaskedValue: (M, i) => {
      const _ = /(YYYY|MM|DD|hh|mm|ss)/g, u = [...i.matchAll(_)].map((D) => D[0]), T = i.replace(_, "|").split("|").filter(Boolean), f = u.map((D) => D.length);
      let W = "", B = 0;
      for (let D = 0; D < u.length; D++) {
        const F = f[D], Q = M.slice(B, B + F);
        if (!Q) break;
        W += Q, Q.length === F && T[D] && (W += T[D]), B += F;
      }
      return W;
    }
  };
}, Ir = {
  key: 1,
  class: "dp__input_wrap"
}, Vr = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Er = {
  key: 2,
  class: "dp--clear-btn"
}, Fr = ["aria-label"], Nr = /* @__PURE__ */ We({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 }
  },
  emits: ["clear", "open", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus", "blur", "real-blur"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, {
      rootEmit: s,
      inputValue: a,
      rootProps: l,
      defaults: { textInput: d, ariaLabels: x, inline: P, config: O, range: M, multiDates: i, ui: _, inputAttrs: u }
    } = Se(), { checkMinMaxRange: T, isValidDate: f } = nt(), { parseFreeInput: W, textPasted: B, createMaskedValue: D, applyMaxValues: F } = Br(), { checkKeyDown: Q, checkStopPropagation: I } = Fe(), { boolHtmlAttribute: y } = Ot(), m = Ce("dp-input"), k = ce(null), R = ce(!1), z = U(
      () => ({
        dp__pointer: !l.disabled && !l.readonly && !d.value.enabled,
        dp__disabled: l.disabled,
        dp__input_readonly: !d.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !u.value.clearable,
        dp__input_icon_pad: !u.value.hideInputIcon,
        dp__input_valid: typeof u.value.state == "boolean" ? u.value.state : !1,
        dp__input_invalid: typeof u.value.state == "boolean" ? !u.value.state : !1,
        dp__input_focus: R.value || o.isMenuOpen,
        dp__input_reg: !d.value.enabled,
        ..._.value.input
      })
    ), Z = () => {
      r("set-input-date", null), u && l.autoApply && (r("set-empty-date"), k.value = null);
    }, te = ($) => {
      const { rangeSeparator: oe } = d.value, [ee, b] = $.split(`${oe}`);
      if (ee) {
        const X = W(ee.trim(), a.value), L = b ? W(b.trim(), a.value) : void 0;
        if (At(X, L)) return;
        const ve = X && L ? [X, L] : [X];
        T(L, ve, 0) && (k.value = X ? ve : null);
      }
    }, de = () => {
      B.value = !0;
    }, ge = ($) => {
      if (M.value.enabled)
        te($);
      else if (i.value.enabled) {
        const oe = $.split(";");
        k.value = oe.map((ee) => W(ee.trim())).filter((ee) => !!ee);
      } else
        k.value = W($, a.value);
    }, H = ($) => {
      const oe = typeof $ == "string" ? $ : $.target?.value, ee = d?.value?.maskFormat;
      let b = oe;
      if (typeof ee == "string") {
        const X = /(YYYY|MM|DD|hh|mm|ss)/g, ve = [...ee.matchAll(X)].map((S) => S[0]), c = oe.replace(/\D/g, ""), p = F(c, ve);
        b = D(p, ee);
      }
      b === "" ? Z() : (d.value.openMenu && !o.isMenuOpen && r("open"), ge(b), r("set-input-date", k.value)), B.value = !1, a.value = b, s("text-input", $, k.value);
    }, se = ($) => {
      d.value.enabled ? (ge($.target.value), d.value.enterSubmit && f(k.value) && a.value !== "" ? (r("set-input-date", k.value, !0), k.value = null) : d.value.enterSubmit && a.value === "" && (k.value = null, r("clear"))) : K($);
    }, E = ($, oe) => {
      d.value.enabled && d.value.tabSubmit && !oe && ge($.target.value), d.value.tabSubmit && f(k.value) && a.value !== "" ? (r("set-input-date", k.value, !0, !0), k.value = null) : d.value.tabSubmit && a.value === "" && (k.value = null, r("clear"));
    }, ae = () => {
      R.value = !0, r("focus"), Je().then(() => {
        d.value.enabled && d.value.selectOnFocus && m.value?.select();
      });
    }, K = ($) => {
      if (I($, O.value, !0), d.value.enabled && d.value.openMenu && !P.value.input) {
        if (d.value.openMenu === "open" && !o.isMenuOpen) return r("open");
        if (d.value.openMenu === "toggle") return r("toggle");
      } else d.value.enabled || r("toggle");
    }, ne = () => {
      r("real-blur"), R.value = !1, (!o.isMenuOpen || P.value.enabled && P.value.input) && r("blur"), l.autoApply && d.value.enabled && k.value && !o.isMenuOpen && (r("set-input-date", k.value), r("select-date"), k.value = null);
    }, ie = ($) => {
      I($, O.value, !0), r("clear");
    }, ye = () => {
      r("close");
    }, _e = ($) => {
      if ($.key === "Tab" && E($), $.key === "Enter" && se($), $.key === "Escape" && d.value.escClose && ye(), !d.value.enabled) {
        if ($.code === "Tab") return;
        $.preventDefault();
      }
    }, Ae = () => {
      m.value?.focus({ preventScroll: !0 });
    }, le = ($) => {
      k.value = $;
    }, me = ($) => {
      $.key === xe.tab && E($, !0);
    };
    return w({
      focusInput: Ae,
      setParsedDate: le
    }), ($, oe) => (C(), j("div", { onClick: K }, [
      $.$slots.trigger && !$.$slots["dp-input"] && !t(P).enabled ? re($.$slots, "trigger", { key: 0 }) : q("", !0),
      !$.$slots.trigger && (!t(P).enabled || t(P).input) ? (C(), j("div", Ir, [
        $.$slots["dp-input"] && !$.$slots.trigger && (!t(P).enabled || t(P).enabled && t(P).input) ? re($.$slots, "dp-input", {
          key: 0,
          value: t(a),
          isMenuOpen: e.isMenuOpen,
          onInput: H,
          onEnter: se,
          onTab: E,
          onClear: ie,
          onBlur: ne,
          onKeypress: _e,
          onPaste: de,
          onFocus: ae,
          openMenu: () => $.$emit("open"),
          closeMenu: () => $.$emit("close"),
          toggleMenu: () => $.$emit("toggle")
        }) : q("", !0),
        $.$slots["dp-input"] ? q("", !0) : (C(), j("input", {
          key: 1,
          id: t(u).id,
          ref: "dp-input",
          "data-test-id": "dp-input",
          name: t(u).name,
          class: ke(z.value),
          inputmode: t(u).inputmode,
          placeholder: t(l).placeholder,
          disabled: t(y)(t(l).disabled),
          readonly: t(y)(t(l).readonly),
          required: t(y)(t(u).required),
          value: t(a),
          autocomplete: t(u).autocomplete,
          "aria-label": t(x).input,
          "aria-disabled": t(l).disabled || void 0,
          "aria-invalid": t(u).state === !1 ? !0 : void 0,
          onInput: H,
          onBlur: ne,
          onFocus: ae,
          onKeypress: _e,
          onKeydown: oe[0] || (oe[0] = (ee) => _e(ee)),
          onPaste: de,
          onInvalid: oe[1] || (oe[1] = (ee) => t(s)("invalid", ee))
        }, null, 42, Vr)),
        Te("div", {
          onClick: oe[4] || (oe[4] = (ee) => r("toggle"))
        }, [
          $.$slots["input-icon"] && !t(u).hideInputIcon ? (C(), j("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: oe[2] || (oe[2] = (ee) => r("toggle"))
          }, [
            re($.$slots, "input-icon")
          ])) : q("", !0),
          !$.$slots["input-icon"] && !t(u).hideInputIcon && !$.$slots["dp-input"] ? (C(), Re(t(Kt), {
            key: 1,
            "aria-label": t(x)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: oe[3] || (oe[3] = (ee) => r("toggle"))
          }, null, 8, ["aria-label"])) : q("", !0)
        ]),
        $.$slots["clear-icon"] && (t(u).alwaysClearable || t(a) && t(u).clearable && !t(l).disabled && !t(l).readonly) ? (C(), j("span", Er, [
          re($.$slots, "clear-icon", { clear: ie })
        ])) : q("", !0),
        !$.$slots["clear-icon"] && (t(u).alwaysClearable || t(u).clearable && t(a) && !t(l).disabled && !t(l).readonly) ? (C(), j("button", {
          key: 3,
          "aria-label": t(x)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: oe[5] || (oe[5] = (ee) => t(Q)(ee, () => ie(ee), !0, me)),
          onClick: oe[6] || (oe[6] = Lt((ee) => ie(ee), ["prevent"]))
        }, [
          at(t(Fn), { class: "dp__input_icons" })
        ], 40, Fr)) : q("", !0)
      ])) : q("", !0)
    ]));
  }
}), Wr = {
  ref: "action-row",
  class: "dp__action_row"
}, Lr = ["title"], Hr = {
  ref: "action-buttons-container",
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, Kr = ["disabled"], jr = /* @__PURE__ */ We({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { default: 0 }
  },
  emits: ["close-picker", "select-date", "select-now"],
  setup(e, { emit: w }) {
    const h = w, r = e, {
      rootEmit: o,
      rootProps: s,
      modelValue: a,
      defaults: { actionRow: l, multiCalendars: d, inline: x, range: P, multiDates: O, formats: M }
    } = Se(), { isTimeValid: i, isMonthValid: _ } = nt(), { buildMatrix: u } = yt(), { formatPreview: T } = kt(), { checkKeyDown: f, convertType: W } = Fe(), { boolHtmlAttribute: B } = Ot(), D = Ce("cancel-btn"), F = Ce("select-btn"), Q = Ce("action-buttons-container"), I = Ce("action-row"), y = ce(!1), m = ce({});
    Ne(() => {
      s.arrowNavigation && u([Ge(D), Ge(F)], "actionRow"), k(), globalThis.addEventListener("resize", k);
    }), Ct(() => {
      globalThis.removeEventListener("resize", k);
    });
    const k = () => {
      y.value = !1, setTimeout(() => {
        const E = Q.value?.getBoundingClientRect(), ae = I.value?.getBoundingClientRect();
        E && ae && (m.value.maxWidth = `${ae.width - E.width - 20}px`), y.value = !0;
      }, 0);
    }, R = U(() => P.value.enabled && !P.value.partialRange && a.value ? a.value.length === 2 : !0), z = U(
      () => !i.value(a.value) || !_.value(a.value) || !R.value
    ), Z = () => {
      const E = M.value.preview;
      return s.timePicker || s.monthPicker, E(W(a.value));
    }, te = () => {
      const E = a.value;
      return d.value.count > 0 ? `${T(E[0])} - ${T(E[1])}` : [T(E[0]), T(E[1])];
    }, de = U(() => !a.value || !r.menuMount ? "" : typeof M.value.preview == "string" ? Array.isArray(a.value) ? a.value.length === 2 && a.value[1] ? te() : O.value.enabled ? a.value.map((E) => `${T(E)}`) : s.modelAuto ? `${T(a.value[0])}` : `${T(a.value[0])} -` : T(a.value) : Z()), ge = () => O.value.enabled ? "; " : " - ", H = U(
      () => Array.isArray(de.value) ? de.value.join(ge()) : de.value
    ), se = () => {
      i.value(a.value) && _.value(a.value) && R.value ? h("select-date") : o("invalid-select");
    };
    return (E, ae) => (C(), j("div", Wr, [
      E.$slots["action-row"] ? re(E.$slots, "action-row", Xe(tt({ key: 0 }, {
        modelValue: t(a),
        disabled: z.value,
        selectDate: () => E.$emit("select-date"),
        closePicker: () => E.$emit("close-picker")
      }))) : (C(), j(we, { key: 1 }, [
        t(l).showPreview ? (C(), j("div", {
          key: 0,
          class: "dp__selection_preview",
          title: H.value || void 0,
          style: Ze(m.value)
        }, [
          E.$slots["action-preview"] && y.value ? re(E.$slots, "action-preview", {
            key: 0,
            value: t(a)
          }) : q("", !0),
          !E.$slots["action-preview"] && y.value ? (C(), j(we, { key: 1 }, [
            vt(je(H.value), 1)
          ], 64)) : q("", !0)
        ], 12, Lr)) : q("", !0),
        Te("div", Hr, [
          E.$slots["action-buttons"] ? re(E.$slots, "action-buttons", {
            key: 0,
            value: t(a)
          }) : q("", !0),
          E.$slots["action-buttons"] ? q("", !0) : (C(), j(we, { key: 1 }, [
            !t(x).enabled && t(l).showCancel ? (C(), j("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: ae[0] || (ae[0] = (K) => E.$emit("close-picker")),
              onKeydown: ae[1] || (ae[1] = (K) => t(f)(K, () => E.$emit("close-picker")))
            }, je(t(l).cancelBtnLabel), 545)) : q("", !0),
            t(l).showNow ? (C(), j("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: ae[2] || (ae[2] = (K) => E.$emit("select-now")),
              onKeydown: ae[3] || (ae[3] = (K) => t(f)(K, () => E.$emit("select-now")))
            }, je(t(l).nowBtnLabel), 33)) : q("", !0),
            t(l).showSelect ? (C(), j("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: t(B)(z.value),
              "data-test-id": "select-button",
              onKeydown: ae[4] || (ae[4] = (K) => t(f)(K, () => se())),
              onClick: se
            }, je(t(l).selectBtnLabel), 41, Kr)) : q("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), la = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: w }
  } = Se(), h = U(() => (s) => e.hideNavigation?.includes(s)), r = U(() => (s) => w.value.count ? w.value.solo ? !0 : s === 0 : !0), o = U(() => (s) => w.value.count ? w.value.solo ? !0 : s === w.value.count - 1 : !0);
  return { hideNavigationButtons: h, showLeftIcon: r, showRightIcon: o };
}, zr = ["role", "aria-label", "tabindex"], Ur = { class: "dp__selection_grid_header" }, qr = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], Qr = ["aria-label"], Ut = /* @__PURE__ */ We({
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
  setup(e, { expose: w, emit: h }) {
    const { setSelectionGrid: r, buildMultiLevelMatrix: o, setMonthPicker: s } = yt(), a = h, l = e, {
      rootProps: d,
      defaults: { ariaLabels: x, textInput: P, config: O }
    } = Se(), { hideNavigationButtons: M } = la(), { handleEventPropagation: i, convertType: _, checkKeyDown: u, checkStopPropagation: T, getElWithin: f, findFocusableEl: W } = Fe(), B = Ce("toggle-button"), D = Ce("overlay-container"), F = Ce("grid-wrap"), Q = ce(!1), I = ce(null), y = ce([]), m = ce(), k = ce(0);
    vn(() => {
      I.value = null;
    }), Ne(() => {
      Je().then(() => se()), l.noOverlayFocus || z(), R(!0);
    }), Ct(() => R(!1));
    const R = ($) => {
      d.arrowNavigation && (l.headerRefs?.length ? s($) : r($));
    }, z = () => {
      const $ = Ge(F);
      $ && (P.value.enabled || (I.value ? I.value?.focus({ preventScroll: !0 }) : $.focus({ preventScroll: !0 })), Q.value = $.clientHeight < $.scrollHeight);
    }, Z = U(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !l.useRelative,
        "dp--overlay-relative": l.useRelative
      })
    ), te = U(
      () => l.useRelative ? { height: `${l.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), de = U(() => ({
      dp__overlay_col: !0
    })), ge = U(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: Q.value,
        dp__button_bottom: l.isLast
      })
    ), H = U(() => ({
      dp__overlay_container: !0,
      dp__container_flex: l.items?.length <= 6,
      dp__container_block: l.items?.length > 6
    }));
    ut(
      () => l.items,
      () => se(!1),
      { deep: !0 }
    );
    const se = ($ = !0) => {
      Je().then(() => {
        const oe = Ge(I), ee = Ge(F), b = Ge(B), X = Ge(D), L = b ? b.getBoundingClientRect().height : 0;
        ee && (ee.getBoundingClientRect().height ? k.value = ee.getBoundingClientRect().height - L : k.value = O.value.modeHeight - L), oe && X && $ && (X.scrollTop = oe.offsetTop - X.offsetTop - (k.value / 2 - oe.getBoundingClientRect().height) - L);
      });
    }, E = ($) => {
      $.disabled || a("selected", $.value);
    }, ae = () => {
      a("toggle"), a("reset-flow");
    }, K = ($) => {
      O.value.escClose && (ae(), i($, O.value));
    }, ne = ($, oe, ee, b) => {
      $ && ((oe.active || oe.value === l.focusValue) && (I.value = $), d.arrowNavigation && (Array.isArray(y.value[ee]) ? y.value[ee][b] = $ : y.value[ee] = [$], ie()));
    }, ie = () => {
      const $ = l.headerRefs?.length ? [l.headerRefs].concat(y.value) : y.value.concat([l.skipButtonRef ? [] : [B.value]]);
      o(_($), l.headerRefs?.length ? "monthPicker" : "selectionGrid");
    }, ye = ($) => {
      d.arrowNavigation || T($, O.value, !0);
    }, _e = ($) => {
      m.value = $, a("hover-value", $);
    }, Ae = () => {
      if (ae(), !l.isLast) {
        const $ = f(l.menuWrapRef ?? null, "action-row");
        $ && W($)?.focus();
      }
    }, le = ($) => {
      switch ($.key) {
        case xe.esc:
          return K($);
        case xe.arrowLeft:
          return ye($);
        case xe.arrowRight:
          return ye($);
        case xe.arrowUp:
          return ye($);
        case xe.arrowDown:
          return ye($);
        default:
          return;
      }
    }, me = ($) => {
      if ($.key === xe.enter) return ae();
      if ($.key === xe.tab) return Ae();
    };
    return w({ focusGrid: z }), ($, oe) => (C(), j("div", {
      ref: "grid-wrap",
      class: ke(Z.value),
      style: Ze(te.value),
      role: e.useRelative ? void 0 : "dialog",
      "aria-label": e.overlayLabel,
      tabindex: e.useRelative ? void 0 : "0",
      onKeydown: le,
      onClick: oe[0] || (oe[0] = Lt(() => {
      }, ["prevent"]))
    }, [
      Te("div", {
        ref: "overlay-container",
        class: ke(H.value),
        style: Ze({ "--dp-overlay-height": `${k.value}px` }),
        role: "grid"
      }, [
        Te("div", Ur, [
          re($.$slots, "header")
        ]),
        $.$slots.overlay ? re($.$slots, "overlay", { key: 0 }) : (C(!0), j(we, { key: 1 }, Ye(e.items, (ee, b) => (C(), j("div", {
          key: b,
          class: ke(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
          role: "row"
        }, [
          (C(!0), j(we, null, Ye(ee, (X, L) => (C(), j("div", {
            key: X.value,
            ref_for: !0,
            ref: (ve) => ne(ve, X, b, L),
            role: "gridcell",
            class: ke(de.value),
            "aria-selected": X.active || void 0,
            "aria-disabled": X.disabled || void 0,
            tabindex: "0",
            "data-test-id": X.text,
            onClick: Lt((ve) => E(X), ["prevent"]),
            onKeydown: (ve) => t(u)(ve, () => E(X), !0),
            onMouseover: (ve) => _e(X.value)
          }, [
            Te("div", {
              class: ke(X.className)
            }, [
              $.$slots.item ? re($.$slots, "item", {
                key: 0,
                item: X
              }) : q("", !0),
              $.$slots.item ? q("", !0) : (C(), j(we, { key: 1 }, [
                vt(je(X.text), 1)
              ], 64))
            ], 2)
          ], 42, qr))), 128))
        ], 2))), 128))
      ], 6),
      $.$slots["button-icon"] ? Zt((C(), j("button", {
        key: 0,
        ref: "toggle-button",
        type: "button",
        "aria-label": t(x)?.toggleOverlay,
        class: ke(ge.value),
        tabindex: "0",
        onClick: ae,
        onKeydown: me
      }, [
        re($.$slots, "button-icon")
      ], 42, Qr)), [
        [ea, !t(M)(e.type)]
      ]) : q("", !0)
    ], 46, zr));
  }
}), Gr = ["data-dp-mobile"], oa = /* @__PURE__ */ We({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: w }
    } = Se(), { isMobile: h } = na(), r = U(
      () => w.value.count > 0 ? [...new Array(w.value.count).keys()] : [0]
    );
    return (o, s) => (C(), j("div", {
      class: ke({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: t(w).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": t(h)
    }, [
      re(o.$slots, "default", {
        instances: r.value,
        wrapClass: { dp__instance_calendar: t(w).count > 0 }
      })
    ], 10, Gr));
  }
}), Jr = ["data-dp-element", "aria-label", "aria-disabled"], Nt = /* @__PURE__ */ We({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: w }) {
    const { checkKeyDown: h } = Fe(), r = w, o = Ce("arrow-btn");
    return Ne(() => r("set-ref", o)), (s, a) => (C(), j("button", {
      ref: "arrow-btn",
      type: "button",
      "data-dp-element": e.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled || void 0,
      onClick: a[0] || (a[0] = (l) => r("activate")),
      onKeydown: a[1] || (a[1] = (l) => t(h)(l, () => r("activate"), !0))
    }, [
      Te("span", {
        class: ke(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        re(s.$slots, "default")
      ], 2)
    ], 40, Jr));
  }
}), Xr = ["aria-label", "data-test-id"], qa = /* @__PURE__ */ We({
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
    const h = w, r = e, { showRightIcon: o, showLeftIcon: s } = la(), {
      rootProps: a,
      defaults: { config: l, ariaLabels: d, ui: x }
    } = Se(), { showTransition: P, transitionName: O } = jt(), { formatYear: M } = kt(), { boolHtmlAttribute: i } = Ot(), _ = ce(!1), u = U(() => M(r.year)), T = (B = !1, D) => {
      _.value = !_.value, h("toggle-year-picker", { flow: B, show: D });
    }, f = (B) => {
      _.value = !1, h("year-select", B);
    }, W = (B = !1) => {
      h("handle-year", B);
    };
    return (B, D) => (C(), j(we, null, [
      Te("div", {
        class: ke(["dp--year-mode-picker", { "dp--hidden-el": _.value }])
      }, [
        t(s)(e.instance) ? (C(), Re(Nt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(d)?.prevYear,
          disabled: t(i)(e.isDisabled(!1)),
          class: ke(t(x)?.navBtnPrev),
          onActivate: D[0] || (D[0] = (F) => W(!1))
        }, {
          default: De(() => [
            B.$slots["arrow-left"] ? re(B.$slots, "arrow-left", { key: 0 }) : q("", !0),
            B.$slots["arrow-left"] ? q("", !0) : (C(), Re(t(La), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : q("", !0),
        Te("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": `${e.year}-${t(d)?.openYearsOverlay}`,
          "data-test-id": `year-mode-btn-${e.instance}`,
          onClick: D[1] || (D[1] = () => T(!1)),
          onKeydown: D[2] || (D[2] = fn(() => T(!1), ["enter"]))
        }, [
          B.$slots.year ? re(B.$slots, "year", {
            key: 0,
            text: u.value,
            value: e.year
          }) : q("", !0),
          B.$slots.year ? q("", !0) : (C(), j(we, { key: 1 }, [
            vt(je(e.year), 1)
          ], 64))
        ], 40, Xr),
        t(o)(e.instance) ? (C(), Re(Nt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(d)?.nextYear,
          disabled: t(i)(e.isDisabled(!0)),
          class: ke(t(x)?.navBtnNext),
          onActivate: D[3] || (D[3] = (F) => W(!0))
        }, {
          default: De(() => [
            B.$slots["arrow-right"] ? re(B.$slots, "arrow-right", { key: 0 }) : q("", !0),
            B.$slots["arrow-right"] ? q("", !0) : (C(), Re(t(Ha), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : q("", !0)
      ], 2),
      at(Yt, {
        name: t(O)(e.showYearPicker),
        css: t(P)
      }, {
        default: De(() => [
          e.showYearPicker ? (C(), Re(Ut, {
            key: 0,
            items: e.items,
            config: t(l),
            "is-last": t(a).autoApply && !t(l).keepActionRow,
            "overlay-label": t(d)?.yearPicker?.(!0),
            type: "year",
            onToggle: T,
            onSelected: D[4] || (D[4] = (F) => f(F))
          }, He({
            "button-icon": De(() => [
              B.$slots["calendar-icon"] ? re(B.$slots, "calendar-icon", { key: 0 }) : q("", !0),
              B.$slots["calendar-icon"] ? q("", !0) : (C(), Re(t(Kt), { key: 1 }))
            ]),
            _: 2
          }, [
            B.$slots["year-overlay-value"] ? {
              name: "item",
              fn: De(({ item: F }) => [
                re(B.$slots, "year-overlay-value", {
                  text: F.text,
                  value: F.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "config", "is-last", "overlay-label"])) : q("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Qa = (e) => {
  const {
    getDate: w,
    rootEmit: h,
    state: r,
    month: o,
    year: s,
    modelValue: a,
    calendars: l,
    rootProps: d,
    defaults: { multiCalendars: x, range: P, safeDates: O, filters: M, highlight: i }
  } = Se(), { resetDate: _, getYearFromDate: u, checkHighlightYear: T, groupListAndMap: f } = ze(), { getYears: W } = ra(), { validateMonthYear: B, checkMinMaxValue: D } = nt(), F = ce([!1]), Q = U(() => W()), I = U(() => (K, ne) => {
    const ie = Pe(_(w()), {
      month: o.value(K),
      year: s.value(K)
    }), ye = ne ? Ea(ie) : Ft(ie);
    return B(ye, d.preventMinMaxNavigation, ne);
  }), y = () => Array.isArray(a.value) && x.value.solo && a.value[1], m = () => {
    for (let K = 0; K < x.value.count; K++)
      if (K === 0)
        l.value[K] = l.value[0];
      else if (K === x.value.count - 1 && y())
        l.value[K] = {
          month: $e(a.value[1]),
          year: be(a.value[1])
        };
      else {
        const ne = Pe(w(), l.value[K - 1]);
        l.value[K] = { month: $e(ne), year: be(Fa(ne, 1)) };
      }
  }, k = (K) => {
    if (!K) return m();
    const ne = Pe(w(), l.value[K]);
    return l.value[0].year = be(Na(ne, x.value.count - 1)), m();
  }, R = (K, ne) => {
    const ie = Sn(ne, K);
    return P.value.showLastInRange && ie > 1 ? ne : K;
  }, z = (K) => d.focusStartDate || x.value.solo ? K[0] : K[1] ? R(K[0], K[1]) : K[0], Z = () => {
    if (a.value) {
      const K = Array.isArray(a.value) ? z(a.value) : a.value;
      l.value[0] = { month: $e(K), year: be(K) };
    }
  }, te = () => {
    Z(), x.value.count && m();
  };
  ut(a, (K, ne) => {
    r.isTextInputDate && JSON.stringify(K ?? {}) !== JSON.stringify(ne ?? {}) && te();
  }), Ne(() => {
    te();
  });
  const de = (K, ne) => {
    l.value[ne].year = K, h("update-month-year", { instance: ne, year: K, month: l.value[ne].month }), x.value.count && !x.value.solo && k(ne);
  }, ge = U(() => (K) => f(Q.value, (ne) => {
    const ie = s.value(K) === ne.value, ye = D(
      ne.value,
      u(O.value.minDate),
      u(O.value.maxDate)
    ) || M.value.years?.includes(s.value(K)), _e = T(i.value, ne.value);
    return { active: ie, disabled: ye, highlighted: _e };
  })), H = (K, ne) => {
    de(K, ne), E(ne);
  }, se = (K, ne = !1) => {
    if (!I.value(K, ne)) {
      const ie = ne ? s.value(K) + 1 : s.value(K) - 1;
      de(ie, K);
    }
  }, E = (K, ne = !1, ie) => {
    ne || e("reset-flow"), ie === void 0 ? F.value[K] = !F.value[K] : F.value[K] = ie, F.value[K] ? h("overlay-toggle", { open: !0, overlay: Qe.year }) : h("overlay-toggle", { open: !1, overlay: Qe.year });
  };
  return {
    isDisabled: I,
    groupedYears: ge,
    showYearPicker: F,
    selectYear: de,
    setStartDate: () => {
      d.startDate && (a.value && d.focusStartDate || !a.value) && de(be(w(d.startDate)), 0);
    },
    toggleYearPicker: E,
    handleYearSelect: H,
    handleYear: se
  };
}, sa = () => {
  const { isDateAfter: e, isDateBefore: w, isDateEqual: h } = ze(), {
    getDate: r,
    rootEmit: o,
    rootProps: s,
    modelValue: a,
    defaults: { range: l }
  } = Se();
  return {
    getRangeWithFixedDate: (i) => Array.isArray(a.value) && (a.value.length === 2 || a.value.length === 1 && l.value.partialRange) ? l.value.fixedStart && (e(i, a.value[0]) || h(i, a.value[0])) ? [a.value[0], i] : l.value.fixedEnd && (w(i, a.value[1]) || h(i, a.value[1])) ? [i, a.value[1]] : (o("invalid-fixed-range", i), a.value) : [],
    setPresetDate: (i) => {
      Array.isArray(i.value) && i.value.length <= 2 && l.value.enabled ? a.value = i.value.map((_) => r(_)) : Array.isArray(i.value) || (a.value = r(i.value));
    },
    checkRangeAutoApply: (i, _, u) => {
      l && (i[0] && i[1] && s.autoApply && _("auto-apply", u), i[0] && !i[1] && (s.modelAuto || l.value.partialRange) && s.autoApply && _("auto-apply", u));
    },
    setMonthOrYearRange: (i) => {
      let _ = a.value ? a.value.slice() : [];
      return _.length === 2 && _[1] !== null && (_ = []), _.length ? (w(i, _[0]) ? _.unshift(i) : _[1] = i, o("range-end", i)) : (_ = [i], o("range-start", i)), _;
    },
    handleMultiDatesSelect: (i, _) => {
      if (a.value && Array.isArray(a.value))
        if (a.value.some((u) => h(i, u))) {
          const u = a.value.filter((T) => !h(T, i));
          a.value = u.length ? u : null;
        } else (_ && +_ > a.value.length || !_) && a.value.push(i);
      else
        a.value = [i];
    }
  };
}, Zr = (e, w) => {
  const {
    getDate: h,
    rootEmit: r,
    state: o,
    calendars: s,
    year: a,
    modelValue: l,
    rootProps: d,
    defaults: { range: x, highlight: P, safeDates: O, filters: M, multiDates: i }
  } = Se();
  zt(() => {
    o.isTextInputDate && H(be(h(d.startDate)), 0);
  });
  const { checkMinMaxRange: _, checkMinMaxValue: u } = nt(), { isDateBetween: T, resetDateTime: f, resetDate: W, getMinMonth: B, getMaxMonth: D, checkHighlightMonth: F, groupListAndMap: Q } = ze(), { checkRangeAutoApply: I, getRangeWithFixedDate: y, handleMultiDatesSelect: m, setMonthOrYearRange: k, setPresetDate: R } = sa(), { padZero: z } = Fe(), { getMonths: Z, isOutOfYearRange: te } = ra(), de = U(() => Z()), ge = ce(null), {
    selectYear: H,
    groupedYears: se,
    showYearPicker: E,
    toggleYearPicker: ae,
    handleYearSelect: K,
    handleYear: ne,
    isDisabled: ie,
    setStartDate: ye
  } = Qa(w);
  Ne(() => {
    ye();
  });
  const _e = (v) => v ? { month: $e(v), year: be(v) } : { month: null, year: null }, Ae = () => l.value ? Array.isArray(l.value) ? l.value.map((v) => _e(v)) : _e(l.value) : _e(), le = (v, n) => {
    const V = s.value[v], N = Ae();
    return Array.isArray(N) ? N.some((ue) => ue.year === V?.year && ue.month === n) : V?.year === N.year && n === N.month;
  }, me = (v, n, V) => {
    const N = Ae();
    return Array.isArray(N) ? a.value(n) === N[V]?.year && v === N[V]?.month : !1;
  }, $ = (v, n) => {
    if (x.value.enabled) {
      const V = Ae();
      if (Array.isArray(l.value) && Array.isArray(V)) {
        const N = me(v, n, 0) || me(v, n, 1), ue = Pe(W(h()), { month: v, year: a.value(n) });
        return T(l.value, ge.value, ue) && !N;
      }
      return !1;
    }
    return !1;
  }, oe = U(() => (v) => Q(de.value, (n) => {
    const V = le(v, n.value), N = u(
      n.value,
      B(a.value(v), O.value.minDate),
      D(a.value(v), O.value.maxDate)
    ) || Y(O.value.disabledDates, a.value(v), n.value) || M.value.months?.includes(n.value) || !G(O.value.allowedDates, a.value(v), n.value) || te(a.value(v)), ue = $(n.value, v), he = F(P.value, n.value, a.value(v));
    return { active: V, disabled: N, isBetween: ue, highlighted: he };
  })), ee = (v, n) => Pe(W(h()), { month: v, year: a.value(n) }), b = (v, n) => {
    const V = l.value ? l.value : W(h());
    l.value = Pe(V, { month: v, year: a.value(n) }), w("auto-apply"), w("update-flow-step");
  }, X = (v, n) => {
    const V = ee(v, n);
    x.value.fixedEnd || x.value.fixedStart ? l.value = y(V) : l.value ? _(V, l.value) && (l.value = k(ee(v, n))) : l.value = [ee(v, n)], Je().then(() => {
      I(l.value, w, l.value.length < 2);
    });
  }, L = (v, n) => {
    m(ee(v, n), i.value.limit), w("auto-apply", !0);
  }, ve = (v, n) => (s.value[n].month = v, p(n, s.value[n].year, v), i.value.enabled ? L(v, n) : x.value.enabled ? X(v, n) : b(v, n)), c = (v, n) => {
    H(v, n), p(n, v, null);
  }, p = (v, n, V) => {
    let N = V;
    if (!N && N !== 0) {
      const ue = Ae();
      N = Array.isArray(ue) ? ue[v].month : ue.month;
    }
    r("update-month-year", { instance: v, year: n, month: N });
  }, S = (v, n) => {
    ge.value = ee(v, n);
  }, g = (v) => {
    R({
      value: v
    }), w("auto-apply");
  }, Y = (v, n, V) => {
    if (v instanceof Map) {
      const N = `${z(V + 1)}-${n}`;
      return v.size ? v.has(N) : !1;
    }
    return typeof v == "function" ? v(f(Pe(h(), { month: V, year: n }), !0)) : !1;
  }, G = (v, n, V) => {
    if (v instanceof Map) {
      const N = `${z(V + 1)}-${n}`;
      return v.size ? v.has(N) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: oe,
    groupedYears: se,
    year: a,
    isDisabled: ie,
    showYearPicker: E,
    modelValue: l,
    toggleYearPicker: ae,
    handleYearSelect: K,
    handleYear: ne,
    presetDate: g,
    setHoverDate: S,
    selectMonth: ve,
    selectYear: c,
    getModelMonthYear: Ae
  };
}, el = /* @__PURE__ */ We({
  __name: "MonthPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply", "update-flow-step", "mount"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, s = gt(), { mapSlots: a } = bt(), {
      rootProps: l,
      defaults: { config: d }
    } = Se(), x = a(s, "yearMode");
    Ne(() => {
      r("mount");
    });
    const {
      groupedMonths: P,
      groupedYears: O,
      year: M,
      isDisabled: i,
      showYearPicker: _,
      modelValue: u,
      presetDate: T,
      setHoverDate: f,
      selectMonth: W,
      selectYear: B,
      toggleYearPicker: D,
      handleYearSelect: F,
      handleYear: Q,
      getModelMonthYear: I
    } = Zr(o, r);
    return w({ getSidebarProps: () => ({
      modelValue: u,
      year: M,
      getModelMonthYear: I,
      selectMonth: W,
      selectYear: B,
      handleYear: Q
    }), presetDate: T, toggleYearPicker: (m) => D(0, m) }), (m, k) => (C(), Re(oa, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: De(({ instances: R, wrapClass: z }) => [
        (C(!0), j(we, null, Ye(R, (Z) => (C(), j("div", {
          key: Z,
          class: ke(z)
        }, [
          m.$slots["top-extra"] ? re(m.$slots, "top-extra", {
            key: 0,
            value: t(u)
          }) : q("", !0),
          m.$slots["month-year"] ? re(m.$slots, "month-year", tt({
            key: 1,
            ref_for: !0
          }, {
            year: t(M),
            months: t(P)(Z),
            years: t(O)(Z),
            selectMonth: t(W),
            selectYear: t(B),
            instance: Z
          })) : (C(), Re(Ut, {
            key: 2,
            items: t(P)(Z),
            "is-last": t(l).autoApply && !t(d).keepActionRow,
            height: t(d).modeHeight,
            "no-overlay-focus": !!(e.noOverlayFocus || t(l).textInput),
            "use-relative": "",
            type: "month",
            onSelected: (te) => t(W)(te, Z),
            onHoverValue: (te) => t(f)(te, Z)
          }, He({
            header: De(() => [
              at(qa, {
                items: t(O)(Z),
                instance: Z,
                "show-year-picker": t(_)[Z],
                year: t(M)(Z),
                "is-disabled": (te) => t(i)(Z, te),
                onHandleYear: (te) => t(Q)(Z, te),
                onYearSelect: (te) => t(F)(te, Z),
                onToggleYearPicker: (te) => t(D)(Z, te?.flow, te?.show)
              }, He({ _: 2 }, [
                Ye(t(x), (te, de) => ({
                  name: te,
                  fn: De((ge) => [
                    re(m.$slots, te, tt({ ref_for: !0 }, ge))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            m.$slots["month-overlay-value"] ? {
              name: "item",
              fn: De(({ item: te }) => [
                re(m.$slots, "month-overlay-value", {
                  text: te.text,
                  value: te.value
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
}), tl = (e, w) => {
  const {
    rootEmit: h,
    getDate: r,
    state: o,
    modelValue: s,
    rootProps: a,
    defaults: { highlight: l, multiDates: d, filters: x, range: P, safeDates: O }
  } = Se(), { getYears: M } = ra(), { isDateBetween: i, resetDate: _, resetDateTime: u, getYearFromDate: T, checkHighlightYear: f, groupListAndMap: W } = ze(), { checkRangeAutoApply: B, setMonthOrYearRange: D } = sa(), { checkMinMaxValue: F, checkMinMaxRange: Q } = nt();
  zt(() => {
    o.isTextInputDate && (y.value = be(r(a.startDate)));
  });
  const I = ce(null), y = ce();
  Ne(() => {
    a.startDate && (s.value && a.focusStartDate || !s.value) && (y.value = be(r(a.startDate)));
  });
  const m = (H) => Array.isArray(s.value) ? s.value.some((se) => be(se) === H) : s.value ? be(s.value) === H : !1, k = (H) => P.value.enabled && Array.isArray(s.value) ? i(s.value, I.value, te(H)) : !1, R = (H) => O.value.allowedDates?.size ? O.value.allowedDates.has(`${H}`) : !0, z = (H) => O.value.disabledDates instanceof Map ? O.value.disabledDates.size ? O.value.disabledDates.has(`${H}`) : !1 : typeof O.value.disabledDates == "function" ? O.value.disabledDates(ot(u(Ft(r())), H)) : !0, Z = U(() => W(M(), (H) => {
    const se = m(H.value), E = F(
      H.value,
      T(O.value.minDate),
      T(O.value.maxDate)
    ) || x.value.years.includes(H.value) || !R(H.value) || z(H.value), ae = k(H.value) && !se, K = f(l.value, H.value);
    return { active: se, disabled: E, isBetween: ae, highlighted: K };
  })), te = (H) => ot(_(Ft(r())), H);
  return {
    groupedYears: Z,
    focusYear: y,
    setHoverValue: (H) => {
      I.value = ot(_(r()), H);
    },
    selectYear: (H) => {
      if (h("update-month-year", { instance: 0, year: H, month: Number.NaN }), d.value.enabled)
        return s.value ? Array.isArray(s.value) && ((s.value?.map((E) => be(E))).includes(H) ? s.value = s.value.filter((E) => be(E) !== H) : s.value.push(ot(u(r()), H))) : s.value = [ot(u(Ft(r())), H)], w("auto-apply", !0);
      P.value.enabled ? Q(te(H), s.value) && (s.value = D(te(H)), Je().then(() => {
        B(s.value, w, s.value.length < 2);
      })) : (s.value = te(H), w("auto-apply"));
    }
  };
}, al = /* @__PURE__ */ We({
  __name: "YearPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, {
      modelValue: s,
      defaults: { config: a },
      rootProps: l
    } = Se(), { groupedYears: d, focusYear: x, selectYear: P, setHoverValue: O } = tl(o, r);
    return w({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: P
    }) }), (i, _) => (C(), j("div", null, [
      i.$slots["top-extra"] ? re(i.$slots, "top-extra", {
        key: 0,
        value: t(s)
      }) : q("", !0),
      i.$slots["month-year"] ? re(i.$slots, "month-year", Xe(tt({ key: 1 }, {
        years: t(d),
        selectYear: t(P)
      }))) : (C(), Re(Ut, {
        key: 2,
        items: t(d),
        "is-last": t(l).autoApply && !t(a).keepActionRow,
        height: t(a).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || t(l).textInput),
        "focus-value": t(x),
        type: "year",
        "use-relative": "",
        onSelected: t(P),
        onHoverValue: t(O)
      }, He({ _: 2 }, [
        i.$slots["year-overlay-value"] ? {
          name: "item",
          fn: De(({ item: u }) => [
            re(i.$slots, "year-overlay-value", {
              text: u.text,
              value: u.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), nl = {
  key: 0,
  class: "dp__time_input"
}, rl = ["data-compact", "data-collapsed"], ll = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], ol = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], sl = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], ul = { key: 0 }, il = ["aria-label", "data-compact"], cl = /* @__PURE__ */ We({
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
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, { setTimePickerElements: s, setTimePickerBackRef: a } = yt(), {
      getDate: l,
      rootEmit: d,
      rootProps: x,
      defaults: { ariaLabels: P, filters: O, config: M, range: i, multiCalendars: _, timeConfig: u }
    } = Se(), { checkKeyDown: T, hoursToAmPmHours: f } = Fe(), { boolHtmlAttribute: W } = Ot(), { sanitizeTime: B, groupListAndMap: D } = ze(), { transitionName: F, showTransition: Q } = jt(), I = Wt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = ce("AM"), m = ce(null), k = ce([]), R = ce(), z = ce(!1);
    Ne(() => {
      r("mounted");
    });
    const Z = (n) => Pe(l(), {
      hours: n.hours,
      minutes: n.minutes,
      seconds: u.value.enableSeconds ? n.seconds : 0,
      milliseconds: 0
    }), te = U(
      () => (n) => le(n, o[n]) || ge(n, o[n])
    ), de = U(() => ({ hours: o.hours, minutes: o.minutes, seconds: o.seconds })), ge = (n, V) => i.value.enabled && !i.value.disableTimeRangeValidation ? !o.validateTime(n, V) : !1, H = (n, V) => {
      if (i.value.enabled && !i.value.disableTimeRangeValidation) {
        const N = V ? +u.value[`${n}Increment`] : -+u.value[`${n}Increment`], ue = o[n] + N;
        return !o.validateTime(n, ue);
      }
      return !1;
    }, se = U(() => (n) => !b(+o[n] + +u.value[`${n}Increment`], n) || H(n, !0)), E = U(() => (n) => !b(+o[n] - +u.value[`${n}Increment`], n) || H(n, !1)), ae = (n, V) => Wa(Pe(l(), n), V), K = (n, V) => Rn(Pe(l(), n), V), ne = U(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !u.value.timePickerInline,
        dp__time_col_reg_block: !u.value.enableSeconds && u.value.is24 && !u.value.timePickerInline,
        dp__time_col_reg_inline: !u.value.enableSeconds && u.value.is24 && u.value.timePickerInline,
        dp__time_col_reg_with_button: !u.value.enableSeconds && !u.value.is24,
        dp__time_col_sec: u.value.enableSeconds && u.value.is24,
        dp__time_col_sec_with_button: u.value.enableSeconds && !u.value.is24
      })
    ), ie = U(
      () => u.value.timePickerInline && i.value.enabled && !_.value.count
    ), ye = U(() => {
      const n = [{ type: "hours" }];
      return u.value.enableMinutes && n.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), u.value.enableSeconds && n.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), n;
    }), _e = U(() => ye.value.filter((n) => !n.separator)), Ae = U(() => (n) => {
      if (n === "hours") {
        const V = S(+o.hours);
        return { text: V < 10 ? `0${V}` : `${V}`, value: V };
      }
      return { text: o[n] < 10 ? `0${o[n]}` : `${o[n]}`, value: o[n] };
    }), le = (n, V) => {
      if (!o.disabledTimesConfig) return !1;
      const N = o.disabledTimesConfig(o.order, n === "hours" ? V : void 0);
      return N[n] ? !!N[n]?.includes(V) : !0;
    }, me = (n, V) => V !== "hours" || y.value === "AM" ? n : n + 12, $ = (n) => {
      const V = u.value.is24 ? 24 : 12, N = n === "hours" ? V : 60, ue = +u.value[`${n}GridIncrement`], he = n === "hours" && !u.value.is24 ? ue : 0, Ie = [];
      for (let Le = he; Le < N; Le += ue)
        Ie.push({
          value: u.value.is24 ? Le : me(Le, n),
          text: Le < 10 ? `0${Le}` : `${Le}`
        });
      return n === "hours" && !u.value.is24 && Ie.unshift({ value: y.value === "PM" ? 12 : 0, text: "12" }), D(Ie, (Le) => ({ active: !1, disabled: O.value.times[n].includes(Le.value) || !b(Le.value, n) || le(n, Le.value) || ge(n, Le.value) }));
    }, oe = (n) => n >= 0 ? n : 59, ee = (n) => n >= 0 ? n : 23, b = (n, V) => {
      const N = x.minTime ? Z(B(x.minTime)) : null, ue = x.maxTime ? Z(B(x.maxTime)) : null, he = Z(
        B(
          de.value,
          V,
          V === "minutes" || V === "seconds" ? oe(n) : ee(n)
        )
      );
      return N && ue ? (Rt(he, ue) || $t(he, ue)) && (At(he, N) || $t(he, N)) : N ? At(he, N) || $t(he, N) : ue ? Rt(he, ue) || $t(he, ue) : !0;
    }, X = (n) => u.value[`no${n[0].toUpperCase() + n.slice(1)}Overlay`], L = (n) => {
      X(n) || (I[n] = !I[n], I[n] ? (z.value = !0, r("overlay-opened", n)) : (z.value = !1, r("overlay-closed", n)));
    }, ve = (n) => n === "hours" ? it : n === "minutes" ? ft : ht, c = () => {
      R.value && clearTimeout(R.value);
    }, p = (n, V = !0, N) => {
      const ue = V ? ae : K, he = V ? +u.value[`${n}Increment`] : -+u.value[`${n}Increment`];
      b(+o[n] + he, n) && r(
        `update:${n}`,
        ve(n)(
          ue({ [n]: +o[n] }, { [n]: +u.value[`${n}Increment`] })
        )
      ), !N?.keyboard && M.value.timeArrowHoldThreshold && (R.value = setTimeout(() => {
        p(n, V);
      }, M.value.timeArrowHoldThreshold));
    }, S = (n) => u.value.is24 ? n : (n >= 12 ? y.value = "PM" : y.value = "AM", f(n)), g = () => {
      y.value === "PM" ? (y.value = "AM", r("update:hours", o.hours - 12)) : (y.value = "PM", r("update:hours", o.hours + 12)), d("am-pm-change", y.value);
    }, Y = (n) => {
      I[n] = !0;
    }, G = (n, V, N) => {
      if (n && x.arrowNavigation) {
        Array.isArray(k.value[V]) ? k.value[V][N] = n : k.value[V] = [n];
        const ue = k.value.reduce(
          (he, Ie) => Ie.map((Le, wt) => [...he[wt] || [], Ie[wt]]),
          []
        );
        a(o.closeTimePickerBtn), m.value && (ue[1] = ue[1].concat(m.value)), s(ue, o.order);
      }
    }, v = (n, V) => (L(n), r(`update:${n}`, V));
    return w({ openChildCmp: Y }), (n, V) => t(x).disabled ? q("", !0) : (C(), j("div", nl, [
      (C(!0), j(we, null, Ye(ye.value, (N, ue) => (C(), j("div", {
        key: ue,
        class: ke(ne.value),
        "data-compact": ie.value && !t(u).enableSeconds,
        "data-collapsed": ie.value && t(u).enableSeconds
      }, [
        N.separator ? (C(), j(we, { key: 0 }, [
          z.value ? q("", !0) : (C(), j(we, { key: 0 }, [
            vt(":")
          ], 64))
        ], 64)) : (C(), j(we, { key: 1 }, [
          Te("button", {
            ref_for: !0,
            ref: (he) => G(he, ue, 0),
            type: "button",
            class: ke({
              dp__btn: !0,
              dp__inc_dec_button: !t(u).timePickerInline,
              dp__inc_dec_button_inline: t(u).timePickerInline,
              dp__tp_inline_btn_top: t(u).timePickerInline,
              dp__inc_dec_button_disabled: se.value(N.type),
              "dp--hidden-el": z.value
            }),
            "data-test-id": `${N.type}-time-inc-btn-${o.order}`,
            "aria-label": t(P)?.incrementValue(N.type),
            tabindex: "0",
            onKeydown: (he) => t(T)(he, () => p(N.type, !0, { keyboard: !0 }), !0),
            onClick: (he) => t(M).timeArrowHoldThreshold ? void 0 : p(N.type, !0),
            onMousedown: (he) => t(M).timeArrowHoldThreshold ? p(N.type, !0) : void 0,
            onMouseup: c
          }, [
            t(u).timePickerInline ? (C(), j(we, { key: 1 }, [
              n.$slots["tp-inline-arrow-up"] ? re(n.$slots, "tp-inline-arrow-up", { key: 0 }) : (C(), j(we, { key: 1 }, [
                V[2] || (V[2] = Te("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                V[3] || (V[3] = Te("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (C(), j(we, { key: 0 }, [
              n.$slots["arrow-up"] ? re(n.$slots, "arrow-up", { key: 0 }) : q("", !0),
              n.$slots["arrow-up"] ? q("", !0) : (C(), Re(t(ja), { key: 1 }))
            ], 64))
          ], 42, ll),
          Te("button", {
            ref_for: !0,
            ref: (he) => G(he, ue, 1),
            type: "button",
            "aria-label": `${Ae.value(N.type).text}-${t(P)?.openTpOverlay(N.type)}`,
            class: ke({
              dp__time_display: !0,
              dp__time_display_block: !t(u).timePickerInline,
              dp__time_display_inline: t(u).timePickerInline,
              "dp--time-invalid": te.value(N.type),
              "dp--time-overlay-btn": !te.value(N.type),
              "dp--hidden-el": z.value
            }),
            disabled: t(W)(X(N.type)),
            tabindex: "0",
            "data-test-id": `${N.type}-toggle-overlay-btn-${o.order}`,
            onKeydown: (he) => t(T)(he, () => L(N.type), !0),
            onClick: (he) => L(N.type)
          }, [
            n.$slots[N.type] ? re(n.$slots, N.type, {
              key: 0,
              text: Ae.value(N.type).text,
              value: Ae.value(N.type).value
            }) : q("", !0),
            n.$slots[N.type] ? q("", !0) : (C(), j(we, { key: 1 }, [
              vt(je(Ae.value(N.type).text), 1)
            ], 64))
          ], 42, ol),
          Te("button", {
            ref_for: !0,
            ref: (he) => G(he, ue, 2),
            type: "button",
            class: ke({
              dp__btn: !0,
              dp__inc_dec_button: !t(u).timePickerInline,
              dp__inc_dec_button_inline: t(u).timePickerInline,
              dp__tp_inline_btn_bottom: t(u).timePickerInline,
              dp__inc_dec_button_disabled: E.value(N.type),
              "dp--hidden-el": z.value
            }),
            "data-test-id": `${N.type}-time-dec-btn-${o.order}`,
            "aria-label": t(P)?.decrementValue(N.type),
            tabindex: "0",
            onKeydown: (he) => t(T)(he, () => p(N.type, !1, { keyboard: !0 }), !0),
            onClick: (he) => t(M).timeArrowHoldThreshold ? void 0 : p(N.type, !1),
            onMousedown: (he) => t(M).timeArrowHoldThreshold ? p(N.type, !1) : void 0,
            onMouseup: c
          }, [
            t(u).timePickerInline ? (C(), j(we, { key: 1 }, [
              n.$slots["tp-inline-arrow-down"] ? re(n.$slots, "tp-inline-arrow-down", { key: 0 }) : (C(), j(we, { key: 1 }, [
                V[4] || (V[4] = Te("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                V[5] || (V[5] = Te("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
              ], 64))
            ], 64)) : (C(), j(we, { key: 0 }, [
              n.$slots["arrow-down"] ? re(n.$slots, "arrow-down", { key: 0 }) : q("", !0),
              n.$slots["arrow-down"] ? q("", !0) : (C(), Re(t(za), { key: 1 }))
            ], 64))
          ], 42, sl)
        ], 64))
      ], 10, rl))), 128)),
      t(u).is24 ? q("", !0) : (C(), j("div", ul, [
        n.$slots["am-pm-button"] ? re(n.$slots, "am-pm-button", {
          key: 0,
          toggle: g,
          value: y.value
        }) : q("", !0),
        n.$slots["am-pm-button"] ? q("", !0) : (C(), j("button", {
          key: 1,
          ref_key: "amPmButton",
          ref: m,
          type: "button",
          class: "dp__pm_am_button",
          role: "button",
          "aria-label": t(P)?.amPmButton,
          tabindex: "0",
          "data-compact": ie.value,
          onClick: g,
          onKeydown: V[0] || (V[0] = (N) => t(T)(N, () => g(), !0))
        }, je(y.value), 41, il))
      ])),
      (C(!0), j(we, null, Ye(_e.value, (N, ue) => (C(), Re(Yt, {
        key: ue,
        name: t(F)(I[N.type]),
        css: t(Q)
      }, {
        default: De(() => [
          I[N.type] ? (C(), Re(Ut, {
            key: 0,
            items: $(N.type),
            "is-last": t(x).autoApply && !t(M).keepActionRow,
            type: N.type,
            "aria-labels": t(P),
            "overlay-label": t(P).timeOverlay?.(N.type),
            onSelected: (he) => v(N.type, he),
            onToggle: (he) => L(N.type),
            onResetFlow: V[1] || (V[1] = (he) => n.$emit("reset-flow"))
          }, He({
            "button-icon": De(() => [
              n.$slots["clock-icon"] ? re(n.$slots, "clock-icon", { key: 0 }) : q("", !0),
              n.$slots["clock-icon"] ? q("", !0) : (C(), Re(_a(t(u).timePickerInline ? t(Kt) : t(Ka)), { key: 1 }))
            ]),
            _: 2
          }, [
            n.$slots[`${N.type}-overlay-value`] ? {
              name: "item",
              fn: De(({ item: he }) => [
                re(n.$slots, `${N.type}-overlay-value`, {
                  text: he.text,
                  value: he.value
                })
              ]),
              key: "0"
            } : void 0,
            n.$slots[`${N.type}-overlay-header`] ? {
              name: "header",
              fn: De(() => [
                re(n.$slots, `${N.type}-overlay-header`, {
                  toggle: () => L(N.type)
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["items", "is-last", "type", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : q("", !0)
        ]),
        _: 2
      }, 1032, ["name", "css"]))), 128))
    ]));
  }
}), dl = ["data-dp-mobile"], vl = ["aria-label", "tabindex"], fl = ["role", "aria-label", "tabindex"], ml = ["aria-label"], Ga = /* @__PURE__ */ We({
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
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, {
      rootEmit: s,
      modelValue: a,
      rootProps: l,
      defaults: { ariaLabels: d, textInput: x, config: P, range: O, timeConfig: M }
    } = Se(), { isModelAuto: i } = ze(), { checkKeyDown: _, findFocusableEl: u } = Fe(), { buildMatrix: T, setTimePicker: f } = yt(), { transitionName: W, showTransition: B } = jt(), { hideNavigationButtons: D } = la(), { mapSlots: F } = bt(), { isMobile: Q } = na(), I = gt(), y = Ce("overlay"), m = Ce("open-tp-btn"), k = Ce("close-tp-btn"), R = Ce("tp-input"), z = ce(!1);
    Ne(() => {
      r("mount"), !l.timePicker && l.arrowNavigation ? T([Ge(m.value)], "time") : f(!0, l.timePicker);
    });
    const Z = U(() => O.value.enabled && l.modelAuto ? i(a.value) : !0), te = ce(!1), de = (le) => ({
      hours: Array.isArray(o.hours) ? o.hours[le] : o.hours,
      minutes: Array.isArray(o.minutes) ? o.minutes[le] : o.minutes,
      seconds: Array.isArray(o.seconds) ? o.seconds[le] : o.seconds
    }), ge = U(() => {
      const le = [];
      if (O.value.enabled)
        for (let me = 0; me < 2; me++)
          le.push(de(me));
      else
        le.push(de(0));
      return le;
    }), H = (le, me = !1, $ = "") => {
      me || r("reset-flow"), te.value = le, s("overlay-toggle", { open: le, overlay: Qe.time }), l.arrowNavigation && f(le), Je(() => {
        $ !== "" && R.value?.[0] && R.value[0].openChildCmp($);
      });
    }, se = U(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: l.autoApply && !P.value.keepActionRow
    })), E = F(I, "timePicker"), ae = (le, me, $) => O.value.enabled ? me === 0 ? [le, ge.value[1][$]] : [ge.value[0][$], le] : le, K = (le) => {
      r("update:hours", le);
    }, ne = (le) => {
      r("update:minutes", le);
    }, ie = (le) => {
      r("update:seconds", le);
    }, ye = () => {
      if (y.value && !x.value.enabled && !o.noOverlayFocus) {
        const le = u(y.value);
        le && le.focus({ preventScroll: !0 });
      }
    }, _e = (le) => {
      z.value = !1, s("overlay-toggle", { open: !1, overlay: le });
    }, Ae = (le) => {
      z.value = !0, s("overlay-toggle", { open: !0, overlay: le });
    };
    return w({ toggleTimePicker: H }), (le, me) => (C(), j("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(Q)
    }, [
      !t(l).timePicker && !t(M).timePickerInline ? Zt((C(), j("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        class: ke({ ...se.value, "dp--hidden-el": te.value }),
        "aria-label": t(d)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: me[0] || (me[0] = ($) => t(_)($, () => H(!0))),
        onClick: me[1] || (me[1] = ($) => H(!0))
      }, [
        le.$slots["clock-icon"] ? re(le.$slots, "clock-icon", { key: 0 }) : q("", !0),
        le.$slots["clock-icon"] ? q("", !0) : (C(), Re(t(Ka), { key: 1 }))
      ], 42, vl)), [
        [ea, !t(D)("time")]
      ]) : q("", !0),
      at(Yt, {
        name: t(W)(te.value),
        css: t(B) && !t(M).timePickerInline
      }, {
        default: De(() => [
          te.value || t(l).timePicker || t(M).timePickerInline ? (C(), j("div", {
            key: 0,
            ref: "overlay",
            role: t(M).timePickerInline ? void 0 : "dialog",
            class: ke({
              dp__overlay: !t(M).timePickerInline,
              "dp--overlay-absolute": !t(l).timePicker && !t(M).timePickerInline,
              "dp--overlay-relative": t(l).timePicker
            }),
            style: Ze(t(l).timePicker ? { height: `${t(P).modeHeight}px` } : void 0),
            "aria-label": t(d)?.timePicker,
            tabindex: t(M).timePickerInline ? void 0 : 0
          }, [
            Te("div", {
              class: ke(
                t(M).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
              ),
              style: { display: "flex" }
            }, [
              le.$slots["time-picker-overlay"] ? re(le.$slots, "time-picker-overlay", {
                key: 0,
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: K,
                setMinutes: ne,
                setSeconds: ie
              }) : q("", !0),
              le.$slots["time-picker-overlay"] ? q("", !0) : (C(), j("div", {
                key: 1,
                class: ke(t(M).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
              }, [
                (C(!0), j(we, null, Ye(ge.value, ($, oe) => Zt((C(), Re(cl, tt({ key: oe }, { ref_for: !0 }, {
                  order: oe,
                  hours: $.hours,
                  minutes: $.minutes,
                  seconds: $.seconds,
                  closeTimePickerBtn: k.value,
                  disabledTimesConfig: e.disabledTimesConfig,
                  disabled: oe === 0 ? t(O).fixedStart : t(O).fixedEnd
                }, {
                  ref_for: !0,
                  ref: "tp-input",
                  "validate-time": (ee, b) => e.validateTime(ee, ae(b, oe, ee)),
                  "onUpdate:hours": (ee) => K(ae(ee, oe, "hours")),
                  "onUpdate:minutes": (ee) => ne(ae(ee, oe, "minutes")),
                  "onUpdate:seconds": (ee) => ie(ae(ee, oe, "seconds")),
                  onMounted: ye,
                  onOverlayClosed: _e,
                  onOverlayOpened: Ae
                }), He({ _: 2 }, [
                  Ye(t(E), (ee, b) => ({
                    name: ee,
                    fn: De((X) => [
                      re(le.$slots, ee, tt({ ref_for: !0 }, X))
                    ])
                  }))
                ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                  [ea, oe === 0 ? !0 : Z.value]
                ])), 128))
              ], 2)),
              !t(l).timePicker && !t(M).timePickerInline ? Zt((C(), j("button", {
                key: 2,
                ref: "close-tp-btn",
                type: "button",
                class: ke({ ...se.value, "dp--hidden-el": z.value }),
                "aria-label": t(d)?.closeTimePicker,
                tabindex: "0",
                onKeydown: me[2] || (me[2] = ($) => t(_)($, () => H(!1))),
                onClick: me[3] || (me[3] = ($) => H(!1))
              }, [
                le.$slots["calendar-icon"] ? re(le.$slots, "calendar-icon", { key: 0 }) : q("", !0),
                le.$slots["calendar-icon"] ? q("", !0) : (C(), Re(t(Kt), { key: 1 }))
              ], 42, ml)), [
                [ea, !t(D)("time")]
              ]) : q("", !0)
            ], 2)
          ], 14, fl)) : q("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 8, dl));
  }
}), Ja = (e) => {
  const {
    getDate: w,
    modelValue: h,
    time: r,
    rootProps: o,
    defaults: { range: s, timeConfig: a }
  } = Se(), { isDateEqual: l, setTime: d } = ze(), x = (I, y) => Array.isArray(r[I]) ? r[I][y] : r[I], P = (I) => a.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[I] : r.seconds : 0, O = (I, y) => I ? d(
    y !== void 0 ? { hours: x("hours", y), minutes: x("minutes", y), seconds: P(y) } : { hours: r.hours, minutes: r.minutes, seconds: P() },
    I
  ) : Yn(w(), P(y)), M = (I, y) => {
    r[I] = y;
  }, i = U(() => o.modelAuto && s.value.enabled ? Array.isArray(h.value) ? h.value.length > 1 : !1 : s.value.enabled), _ = (I, y) => {
    const m = Object.fromEntries(
      Object.keys(r).map((k) => k === I ? [k, y] : [k, r[k]].slice())
    );
    if (i.value && !s.value.disableTimeRangeValidation) {
      const k = (z) => h.value ? d(
        {
          hours: m.hours[z],
          minutes: m.minutes[z],
          seconds: m.seconds[z]
        },
        h.value[z]
      ) : null, R = (z) => Cn(h.value[z], 0);
      return !(l(k(0), k(1)) && (At(k(0), R(1)) || Rt(k(1), R(0))));
    }
    return !0;
  }, u = (I, y) => {
    _(I, y) && (M(I, y), e && e());
  }, T = (I) => {
    u("hours", I);
  }, f = (I) => {
    u("minutes", I);
  }, W = (I) => {
    u("seconds", I);
  }, B = (I, y) => {
    T(I.hours), f(I.minutes), W(I.seconds), h.value && y(h.value);
  }, D = (I) => {
    if (I) {
      const y = Array.isArray(I), m = y ? [+I[0].hours, +I[1].hours] : +I.hours, k = y ? [+I[0].minutes, +I[1].minutes] : +I.minutes, R = y ? [+(I[0].seconds ?? 0), +(I[1].seconds ?? 0)] : +(I.seconds ?? 0);
      M("hours", m), M("minutes", k), a.value.enableSeconds && M("seconds", R);
    }
  }, F = (I, y) => {
    const m = {
      hours: Array.isArray(r.hours) ? r.hours[I] : r.hours,
      disabledArr: []
    };
    return (y || y === 0) && (m.hours = y), Array.isArray(o.disabledTimes) && (m.disabledArr = s.value.enabled && Array.isArray(o.disabledTimes[I]) ? o.disabledTimes[I] : o.disabledTimes), m;
  }, Q = U(() => (I, y) => {
    if (Array.isArray(o.disabledTimes)) {
      const { disabledArr: m, hours: k } = F(I, y), R = m.filter((z) => +z.hours === k);
      return R[0]?.minutes === "*" ? { hours: [k], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: R?.map((z) => +z.minutes) ?? [],
        seconds: R?.map((z) => z.seconds ? +z.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: M,
    updateHours: T,
    updateMinutes: f,
    updateSeconds: W,
    getSetDateTime: O,
    updateTimeValues: B,
    getSecondsValue: P,
    assignStartTime: D,
    validateTime: _,
    disabledTimesConfig: Q
  };
}, pl = (e) => {
  const {
    getDate: w,
    time: h,
    modelValue: r,
    state: o,
    defaults: { startTime: s, range: a, timeConfig: l }
  } = Se(), { getTimeObj: d } = ze();
  zt(() => {
    o.isTextInputDate && F();
  });
  const { updateTimeValues: x, getSetDateTime: P, assignTime: O, assignStartTime: M, disabledTimesConfig: i, validateTime: _ } = Ja(u);
  function u() {
    e("update-flow-step");
  }
  const T = (y) => {
    const { hours: m, minutes: k, seconds: R } = y;
    return { hours: +m, minutes: +k, seconds: R ? +R : 0 };
  }, f = () => {
    if (l.value.startTime) {
      if (Array.isArray(l.value.startTime)) {
        const m = T(l.value.startTime[0]), k = T(l.value.startTime[1]);
        return [Pe(w(), m), Pe(w(), k)];
      }
      const y = T(l.value.startTime);
      return Pe(w(), y);
    }
    return a.value.enabled ? [null, null] : null;
  }, W = () => {
    if (a.value.enabled) {
      const [y, m] = f();
      r.value = [P(y, 0), P(m, 1)];
    } else
      r.value = P(f());
  }, B = (y) => Array.isArray(y) ? [d(w(y[0])), d(w(y[1]))] : [d(y ?? w())], D = (y, m, k) => {
    O("hours", y), O("minutes", m), O("seconds", l.value.enableSeconds ? k : 0);
  }, F = () => {
    const [y, m] = B(r.value);
    return a.value.enabled ? D(
      [y.hours, m.hours],
      [y.minutes, m.minutes],
      [y.seconds, m.seconds]
    ) : D(y.hours, y.minutes, y.seconds);
  };
  Ne(() => (M(s.value), r.value ? F() : W()));
  const Q = () => {
    Array.isArray(r.value) ? r.value = r.value.map((y, m) => y && P(y, m)) : r.value = P(r.value), e("time-update");
  };
  return {
    modelValue: r,
    time: h,
    disabledTimesConfig: i,
    validateTime: _,
    updateTime: (y) => {
      x(y, Q);
    }
  };
}, hl = /* @__PURE__ */ We({
  __name: "TimePickerSolo",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["time-update", "mount", "reset-flow", "update-flow-step"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = gt(), { mapSlots: s } = bt(), a = s(o, "timePicker"), l = Ce("time-input"), { time: d, modelValue: x, disabledTimesConfig: P, updateTime: O, validateTime: M } = pl(r);
    return Ne(() => {
      r("mount");
    }), w({ getSidebarProps: () => ({
      modelValue: x,
      time: d,
      updateTime: O
    }), toggleTimePicker: (u, T = !1, f = "") => {
      l.value?.toggleTimePicker(u, T, f);
    } }), (u, T) => (C(), Re(oa, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: De(({ wrapClass: f }) => [
        Te("div", {
          class: ke(f)
        }, [
          at(Ga, tt({ ref: "time-input" }, u.$props, {
            hours: t(d).hours,
            minutes: t(d).minutes,
            seconds: t(d).seconds,
            "disabled-times-config": t(P),
            "validate-time": t(M),
            "onUpdate:hours": T[0] || (T[0] = (W) => t(O)({ hours: W, minutes: t(d).minutes, seconds: t(d).seconds })),
            "onUpdate:minutes": T[1] || (T[1] = (W) => t(O)({ hours: t(d).hours, minutes: W, seconds: t(d).seconds })),
            "onUpdate:seconds": T[2] || (T[2] = (W) => t(O)({ hours: t(d).hours, minutes: t(d).minutes, seconds: W })),
            onResetFlow: T[3] || (T[3] = (W) => u.$emit("reset-flow"))
          }), He({ _: 2 }, [
            Ye(t(a), (W, B) => ({
              name: W,
              fn: De((D) => [
                re(u.$slots, W, Xe(st(D)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), gl = (e, w) => {
  const {
    getDate: h,
    rootProps: r,
    defaults: { filters: o }
  } = Se(), { validateMonthYearInRange: s, validateMonthYear: a } = nt(), l = (M, i) => {
    let _ = M;
    return o.value.months.includes($e(_)) ? (_ = i ? Mt(M, 1) : Ht(M, 1), l(_, i)) : _;
  }, d = (M, i) => {
    let _ = M;
    return o.value.years.includes(be(_)) ? (_ = i ? Fa(M, 1) : Na(M, 1), d(_, i)) : _;
  }, x = (M, i = !1) => {
    const _ = Pe(h(), { month: e.month, year: e.year });
    let u = M ? Mt(_, 1) : Ht(_, 1);
    r.disableYearSelect && (u = ot(u, e.year));
    let T = $e(u), f = be(u);
    o.value.months.includes(T) && (u = l(u, M), T = $e(u), f = be(u)), o.value.years.includes(f) && (u = d(u, M), f = be(u)), s(T, f, M, r.preventMinMaxNavigation) && P(T, f, i);
  }, P = (M, i, _) => {
    w("update-month-year", { month: M, year: i, fromNav: _ });
  }, O = U(() => (M) => a(
    Pe(h(), { month: e.month, year: e.year }),
    r.preventMinMaxNavigation,
    M
  ));
  return { handleMonthYearChange: x, isDisabled: O, updateMonthYear: P };
}, yl = { class: "dp--header-wrap" }, bl = {
  key: 0,
  class: "dp__month_year_wrap"
}, kl = { key: 0 }, wl = { class: "dp__month_year_wrap" }, Dl = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], Ml = /* @__PURE__ */ We({
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
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, {
      rootEmit: s,
      rootProps: a,
      modelValue: l,
      defaults: { ariaLabels: d, filters: x, config: P, highlight: O, safeDates: M, ui: i }
    } = Se(), { transitionName: _, showTransition: u } = jt(), { showLeftIcon: T, showRightIcon: f } = la(), { buildMatrix: W } = yt(), { handleMonthYearChange: B, isDisabled: D, updateMonthYear: F } = gl(o, r), { getMaxMonth: Q, getMinMonth: I, getYearFromDate: y, groupListAndMap: m, checkHighlightYear: k, checkHighlightMonth: R } = ze(), { checkKeyDown: z } = Fe(), { formatYear: Z } = kt(), { checkMinMaxValue: te } = nt(), { boolHtmlAttribute: de } = Ot(), ge = ce(!1), H = ce(!1), se = ce(!1), E = ce([null, null, null, null]);
    Ne(() => {
      r("mount");
    });
    const ae = (L) => ({
      get: () => o[L],
      set: (ve) => {
        const c = L === lt.month ? lt.year : lt.month;
        r("update-month-year", { [L]: ve, [c]: o[c] }), L === lt.month ? me(!0) : $(!0);
      }
    }), K = U(ae(lt.month)), ne = U(ae(lt.year)), ie = U(() => (L) => ({
      month: o.month,
      year: o.year,
      items: L === lt.month ? o.months : o.years,
      instance: o.instance,
      updateMonthYear: F,
      toggle: L === lt.month ? me : $
    })), ye = U(() => {
      const L = o.months.find((ve) => ve.value === o.month);
      return L || { text: "", value: 0 };
    }), _e = U(() => m(o.months, (L) => {
      const ve = o.month === L.value, c = te(
        L.value,
        I(o.year, M.value.minDate),
        Q(o.year, M.value.maxDate)
      ) || x.value.months.includes(L.value), p = R(O.value, L.value, o.year);
      return { active: ve, disabled: c, highlighted: p };
    })), Ae = U(() => m(o.years, (L) => {
      const ve = o.year === L.value, c = te(
        L.value,
        y(M.value.minDate),
        y(M.value.maxDate)
      ) || x.value.years.includes(L.value), p = k(O.value, L.value);
      return { active: ve, disabled: c, highlighted: p };
    })), le = (L, ve, c) => {
      c === void 0 ? L.value = !L.value : L.value = c, L.value ? (se.value = !0, s("overlay-toggle", { open: !0, overlay: ve })) : (se.value = !1, s("overlay-toggle", { open: !1, overlay: ve }));
    }, me = (L = !1, ve) => {
      oe(L), le(ge, Qe.month, ve);
    }, $ = (L = !1, ve) => {
      oe(L), le(H, Qe.year, ve);
    }, oe = (L) => {
      L || r("reset-flow");
    }, ee = (L, ve) => {
      a.arrowNavigation && (E.value[ve] = Ge(L), W(E.value, "monthYear"));
    }, b = U(() => [
      {
        type: lt.month,
        index: 1,
        toggle: me,
        modelValue: K.value,
        updateModelValue: (L) => K.value = L,
        text: ye.value.text,
        showSelectionGrid: ge.value,
        items: _e.value,
        ariaLabel: d.value?.openMonthsOverlay,
        overlayLabel: d.value.monthPicker?.(!0) ?? void 0
      },
      {
        type: lt.year,
        index: 2,
        toggle: $,
        modelValue: ne.value,
        updateModelValue: (L) => ne.value = L,
        text: Z(o.year),
        showSelectionGrid: H.value,
        items: Ae.value,
        ariaLabel: d.value?.openYearsOverlay,
        overlayLabel: d.value.yearPicker?.(!0) ?? void 0
      }
    ]), X = U(() => a.disableYearSelect ? [b.value[0]] : a.yearFirst ? [...b.value].reverse() : b.value);
    return w({
      toggleMonthPicker: me,
      toggleYearPicker: $,
      handleMonthYearChange: B
    }), (L, ve) => (C(), j("div", yl, [
      L.$slots["month-year"] ? (C(), j("div", bl, [
        re(L.$slots, "month-year", Xe(st({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(F),
          handleMonthYearChange: t(B),
          instance: e.instance,
          isDisabled: t(D)
        })))
      ])) : (C(), j(we, { key: 1 }, [
        L.$slots["top-extra"] ? (C(), j("div", kl, [
          re(L.$slots, "top-extra", { value: t(l) })
        ])) : q("", !0),
        Te("div", wl, [
          t(T)(e.instance) && !t(a).vertical ? (C(), Re(Nt, {
            key: 0,
            "aria-label": t(d)?.prevMonth,
            disabled: t(de)(t(D)(!1)),
            class: ke(t(i)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: ve[0] || (ve[0] = (c) => t(B)(!1, !0)),
            onSetRef: ve[1] || (ve[1] = (c) => ee(c, 0))
          }, {
            default: De(() => [
              L.$slots["arrow-left"] ? re(L.$slots, "arrow-left", { key: 0 }) : q("", !0),
              L.$slots["arrow-left"] ? q("", !0) : (C(), Re(t(La), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : q("", !0),
          Te("div", {
            class: ke(["dp__month_year_wrap", {
              dp__year_disable_select: t(a).disableYearSelect
            }])
          }, [
            (C(!0), j(we, null, Ye(X.value, (c, p) => (C(), j(we, {
              key: c.type
            }, [
              Te("button", {
                ref_for: !0,
                ref: (S) => ee(S, p + 1),
                type: "button",
                "data-dp-element": `overlay-${c.type}`,
                class: ke(["dp__btn dp__month_year_select", { "dp--hidden-el": se.value }]),
                "aria-label": `${c.text}-${c.ariaLabel}`,
                "data-test-id": `${c.type}-toggle-overlay-${e.instance}`,
                onClick: (S) => c.toggle(!1),
                onKeydown: (S) => t(z)(S, () => c.toggle(), !0)
              }, [
                L.$slots[c.type] ? re(L.$slots, c.type, {
                  key: 0,
                  text: c.text,
                  value: o[c.type]
                }) : q("", !0),
                L.$slots[c.type] ? q("", !0) : (C(), j(we, { key: 1 }, [
                  vt(je(c.text), 1)
                ], 64))
              ], 42, Dl),
              at(Yt, {
                name: t(_)(c.showSelectionGrid),
                css: t(u)
              }, {
                default: De(() => [
                  c.showSelectionGrid ? (C(), Re(Ut, {
                    key: 0,
                    items: c.items,
                    "is-last": t(a).autoApply && !t(P).keepActionRow,
                    "skip-button-ref": !1,
                    type: c.type,
                    "header-refs": [],
                    "menu-wrap-ref": e.menuWrapRef,
                    "overlay-label": c.overlayLabel,
                    onSelected: c.updateModelValue,
                    onToggle: c.toggle
                  }, He({
                    "button-icon": De(() => [
                      L.$slots["calendar-icon"] ? re(L.$slots, "calendar-icon", { key: 0 }) : q("", !0),
                      L.$slots["calendar-icon"] ? q("", !0) : (C(), Re(t(Kt), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    L.$slots[`${c.type}-overlay-value`] ? {
                      name: "item",
                      fn: De(({ item: S }) => [
                        re(L.$slots, `${c.type}-overlay-value`, {
                          text: S.text,
                          value: S.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    L.$slots[`${c.type}-overlay`] ? {
                      name: "overlay",
                      fn: De(() => [
                        re(L.$slots, `${c.type}-overlay`, tt({ ref_for: !0 }, ie.value(c.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    L.$slots[`${c.type}-overlay-header`] ? {
                      name: "header",
                      fn: De(() => [
                        re(L.$slots, `${c.type}-overlay-header`, {
                          toggle: c.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "is-last", "type", "menu-wrap-ref", "overlay-label", "onSelected", "onToggle"])) : q("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          t(T)(e.instance) && t(a).vertical ? (C(), Re(Nt, {
            key: 1,
            "aria-label": t(d)?.prevMonth,
            "el-name": "action-prev",
            disabled: t(de)(t(D)(!1)),
            class: ke(t(i)?.navBtnPrev),
            onActivate: ve[2] || (ve[2] = (c) => t(B)(!1, !0))
          }, {
            default: De(() => [
              L.$slots["arrow-up"] ? re(L.$slots, "arrow-up", { key: 0 }) : q("", !0),
              L.$slots["arrow-up"] ? q("", !0) : (C(), Re(t(ja), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : q("", !0),
          t(f)(e.instance) ? (C(), Re(Nt, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t(de)(t(D)(!0)),
            "aria-label": t(d)?.nextMonth,
            class: ke(t(i)?.navBtnNext),
            onActivate: ve[3] || (ve[3] = (c) => t(B)(!0, !0)),
            onSetRef: ve[4] || (ve[4] = (c) => ee(c, t(a).disableYearSelect ? 2 : 3))
          }, {
            default: De(() => [
              L.$slots[t(a).vertical ? "arrow-down" : "arrow-right"] ? re(L.$slots, t(a).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : q("", !0),
              L.$slots[t(a).vertical ? "arrow-down" : "arrow-right"] ? q("", !0) : (C(), Re(_a(t(a).vertical ? t(za) : t(Ha)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label", "class"])) : q("", !0)
        ])
      ], 64))
    ]));
  }
}), _l = {
  class: "dp__calendar_header",
  role: "row"
}, Al = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Pl = ["aria-label"], Tl = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, $l = { class: "dp__cell_inner" }, Sl = ["id", "aria-selected", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Rl = /* @__PURE__ */ We({
  __name: "DpCalendar",
  props: {
    instance: {},
    mappedDates: {},
    month: {},
    year: {}
  },
  emits: ["mount", "select-date", "set-hover-date", "handle-scroll", "handle-swipe"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, {
      getDate: s,
      rootEmit: a,
      rootProps: l,
      defaults: { transitions: d, config: x, ariaLabels: P, multiCalendars: O, weekNumbers: M, multiDates: i, ui: _ }
    } = Se(), { buildMultiLevelMatrix: u } = yt(), { isDateAfter: T, isDateEqual: f, resetDateTime: W, getCellId: B } = ze(), { checkKeyDown: D, checkStopPropagation: F, isTouchDevice: Q } = Fe(), { formatWeekDay: I } = kt(), y = Ce("calendar-wrap"), m = Ce("active-tooltip"), k = ce([]), R = ce(null), z = ce(!0), Z = ce(!1), te = ce(""), de = ce({
      bottom: "",
      left: "",
      transform: ""
    }), ge = ce({ left: "50%" });
    hn(y, {
      onSwipeEnd: (g, Y) => {
        x.value.noSwipe || (l.vertical ? (Y === "up" || Y === "down") && r("handle-swipe", Y === "up" ? "left" : "right") : (Y === "left" || Y === "right") && r("handle-swipe", Y === "right" ? "left" : "right"));
      }
    });
    const H = U(() => l.calendar ? l.calendar(o.mappedDates) : o.mappedDates), se = U(() => l.dayNames ? Array.isArray(l.dayNames) ? l.dayNames : l.dayNames() : S());
    Ne(() => {
      r("mount", { cmp: "calendar", dayRefs: k.value }), x.value.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", b, { passive: !1 });
    }), Ct(() => {
      x.value.monthChangeOnScroll && y.value && y.value.removeEventListener("wheel", b);
    });
    const E = (g) => g ? l.vertical ? "vNext" : "next" : l.vertical ? "vPrevious" : "previous", ae = (g, Y) => {
      if (l.transitions) {
        const G = W(Pe(s(), { month: o.month, year: o.year }));
        te.value = T(W(Pe(s(), { month: g, year: Y })), G) ? d.value[E(!0)] : d.value[E(!1)], z.value = !1, Je(() => {
          z.value = !0;
        });
      }
    }, K = U(
      () => ({
        ..._.value.calendar
      })
    ), ne = (g) => ({ type: "dot", ...g }), ie = U(() => (g) => {
      const Y = ne(g);
      return {
        dp__marker_dot: Y.type === "dot",
        dp__marker_line: Y.type === "line"
      };
    }), ye = U(() => (g) => f(g, R.value)), _e = U(() => ({
      dp__calendar: !0,
      dp__calendar_next: O.value.count > 0 && o.instance !== 0
    })), Ae = U(() => (g) => l.hideOffsetDates ? g.current : !0), le = async (g, Y) => {
      const { width: G, height: v } = g.getBoundingClientRect();
      R.value = Y.value;
      let n = { left: `${G / 2}px` }, V = -50;
      if (await Je(), m.value?.[0]) {
        const { left: N, width: ue } = m.value[0].getBoundingClientRect();
        N < 0 && (n = { left: "0" }, V = 0, ge.value.left = `${G / 2}px`), globalThis.innerWidth < N + ue && (n = { right: "0" }, V = 0, ge.value.left = `${ue - G / 2}px`);
      }
      de.value = {
        bottom: `${v}px`,
        ...n,
        transform: `translateX(${V}%)`
      };
    }, me = async (g, Y, G) => {
      const v = Ge(k.value?.[Y]?.[G]);
      v && (g.marker?.customPosition && g.marker?.tooltip?.length ? de.value = g.marker.customPosition(v) : await le(v, g), a("tooltip-open", g.marker));
    }, $ = async (g, Y, G) => {
      if (Z.value && i.value.enabled && i.value.dragSelect)
        return r("select-date", g);
      if (r("set-hover-date", g), g.marker?.tooltip?.length) {
        if (l.hideOffsetDates && !g.current) return;
        await me(g, Y, G);
      }
    }, oe = (g) => {
      R.value && (R.value = null, de.value = structuredClone({ bottom: "", left: "", transform: "" }), a("tooltip-close", g.marker));
    }, ee = (g, Y, G) => {
      g && (Array.isArray(k.value[Y]) ? k.value[Y][G] = g : k.value[Y] = [g]), l.arrowNavigation && u(k.value, "calendar");
    }, b = (g) => {
      x.value.monthChangeOnScroll && (g.preventDefault(), r("handle-scroll", g));
    }, X = (g) => M.value ? M.value.type === "local" ? On(g.value, {
      weekStartsOn: +l.weekStart,
      locale: l.locale
    }) : M.value.type === "iso" ? xn(g.value) : typeof M.value.type == "function" ? M.value.type(g.value) : "" : "", L = (g) => {
      const Y = g[0];
      return M.value?.hideOnOffsetDates ? g.some((G) => G.current) ? X(Y) : "" : X(Y);
    }, ve = (g, Y, G = !0) => {
      !G && Q() || (!i.value.enabled || x.value.allowPreventDefault) && (F(g, x.value), r("select-date", Y));
    }, c = (g) => {
      F(g, x.value);
    }, p = (g) => {
      i.value.enabled && i.value.dragSelect ? (Z.value = !0, r("select-date", g)) : i.value.enabled && r("select-date", g);
    }, S = () => {
      const g = s(), Y = aa(g, { locale: l.locale, weekStartsOn: +l.weekStart }), G = Pa(g, { locale: l.locale, weekStartsOn: +l.weekStart });
      return Aa({ start: Y, end: G }).map((n) => I(n));
    };
    return w({ triggerTransition: ae }), (g, Y) => (C(), j("div", {
      class: ke(_e.value)
    }, [
      Te("div", {
        ref: "calendar-wrap",
        class: ke(K.value),
        role: "grid"
      }, [
        Te("div", _l, [
          t(M) ? (C(), j("div", Al, je(t(M).label), 1)) : q("", !0),
          (C(!0), j(we, null, Ye(se.value, (G, v) => (C(), j("div", {
            key: v,
            class: "dp__calendar_header_item",
            role: "gridcell",
            "data-test-id": "calendar-header",
            "aria-label": t(P)?.weekDay?.(v)
          }, [
            g.$slots["calendar-header"] ? re(g.$slots, "calendar-header", {
              key: 0,
              day: G,
              index: v
            }) : q("", !0),
            g.$slots["calendar-header"] ? q("", !0) : (C(), j(we, { key: 1 }, [
              vt(je(G), 1)
            ], 64))
          ], 8, Pl))), 128))
        ]),
        Y[2] || (Y[2] = Te("div", { class: "dp__calendar_header_separator" }, null, -1)),
        at(Yt, {
          name: te.value,
          css: !!t(d)
        }, {
          default: De(() => [
            z.value ? (C(), j("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: Y[1] || (Y[1] = (G) => Z.value = !1)
            }, [
              (C(!0), j(we, null, Ye(H.value, (G, v) => (C(), j("div", {
                key: v,
                class: "dp__calendar_row",
                role: "row"
              }, [
                t(M) ? (C(), j("div", Tl, [
                  Te("div", $l, je(L(G.days)), 1)
                ])) : q("", !0),
                (C(!0), j(we, null, Ye(G.days, (n, V) => (C(), j("div", {
                  id: t(B)(n.value),
                  ref_for: !0,
                  ref: (N) => ee(N, v, V),
                  key: V + v,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (n.classData.dp__active_date || n.classData.dp__range_start || n.classData.dp__range_end) ?? void 0,
                  "aria-disabled": n.classData.dp__cell_disabled || void 0,
                  "aria-label": t(P)?.day?.(n),
                  tabindex: !n.current && t(l).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(B)(n.value),
                  onClick: Lt((N) => ve(N, n), ["prevent"]),
                  onTouchend: (N) => ve(N, n, !1),
                  onKeydown: (N) => t(D)(N, () => g.$emit("select-date", n)),
                  onMouseenter: (N) => $(n, v, V),
                  onMouseleave: (N) => oe(n),
                  onMousedown: (N) => p(n),
                  onMouseup: Y[0] || (Y[0] = (N) => Z.value = !1)
                }, [
                  Te("div", {
                    class: ke(["dp__cell_inner", n.classData])
                  }, [
                    g.$slots.day && Ae.value(n) ? re(g.$slots, "day", {
                      key: 0,
                      day: +n.text,
                      date: n.value
                    }) : q("", !0),
                    g.$slots.day ? q("", !0) : (C(), j(we, { key: 1 }, [
                      vt(je(n.text), 1)
                    ], 64)),
                    n.marker && Ae.value(n) ? (C(), j(we, { key: 2 }, [
                      g.$slots.marker ? re(g.$slots, "marker", {
                        key: 0,
                        marker: n.marker,
                        day: +n.text,
                        date: n.value
                      }) : (C(), j("div", {
                        key: 1,
                        class: ke(ie.value(n.marker)),
                        style: Ze(n.marker.color ? { backgroundColor: n.marker.color } : {})
                      }, null, 6))
                    ], 64)) : q("", !0),
                    ye.value(n.value) ? (C(), j("div", {
                      key: 3,
                      ref_for: !0,
                      ref: "active-tooltip",
                      class: "dp__marker_tooltip",
                      style: Ze(de.value)
                    }, [
                      n.marker?.tooltip ? (C(), j("div", {
                        key: 0,
                        class: "dp__tooltip_content",
                        onClick: c
                      }, [
                        (C(!0), j(we, null, Ye(n.marker.tooltip, (N, ue) => (C(), j("div", {
                          key: ue,
                          class: "dp__tooltip_text"
                        }, [
                          g.$slots["marker-tooltip"] ? re(g.$slots, "marker-tooltip", {
                            key: 0,
                            tooltip: N,
                            day: n.value
                          }) : q("", !0),
                          g.$slots["marker-tooltip"] ? q("", !0) : (C(), j(we, { key: 1 }, [
                            Te("div", {
                              class: "dp__tooltip_mark",
                              style: Ze(N.color ? { backgroundColor: N.color } : {})
                            }, null, 4),
                            Te("div", null, je(N.text), 1)
                          ], 64))
                        ]))), 128)),
                        Te("div", {
                          class: "dp__arrow_bottom_tp",
                          style: Ze(ge.value)
                        }, null, 4)
                      ])) : q("", !0)
                    ], 4)) : q("", !0)
                  ], 2)
                ], 40, Sl))), 128))
              ]))), 128))
            ], 32)) : q("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Cl = (e, w, h, r) => {
  const o = ce([]), s = ce(/* @__PURE__ */ new Date()), a = ce(), {
    getDate: l,
    rootEmit: d,
    calendars: x,
    month: P,
    year: O,
    time: M,
    modelValue: i,
    rootProps: _,
    today: u,
    state: T,
    defaults: { multiCalendars: f, startTime: W, range: B, config: D, safeDates: F, multiDates: Q, timeConfig: I, flow: y }
  } = Se(), { validateMonthYearInRange: m, isDisabled: k, isDateRangeAllowed: R, checkMinMaxRange: z } = nt(), { updateTimeValues: Z, getSetDateTime: te, assignTime: de, assignStartTime: ge, validateTime: H, disabledTimesConfig: se } = Ja(r), { formatDay: E } = kt(), { resetDateTime: ae, setTime: K, isDateBefore: ne, isDateEqual: ie, getDaysInBetween: ye } = ze(), { checkRangeAutoApply: _e, getRangeWithFixedDate: Ae, handleMultiDatesSelect: le, setPresetDate: me } = sa(), { getMapDate: $ } = Fe();
  zt(() => c(T.isTextInputDate));
  const oe = (A) => !D.value.keepViewOnOffsetClick || A ? !0 : !a.value, ee = (A, J, pe, Me = !1) => {
    oe(Me) && (x.value[A] ??= x.value[A] = { month: 0, year: 0 }, x.value[A].month = J ?? x.value[A]?.month, x.value[A].year = pe ?? x.value[A]?.year);
  }, b = () => {
    _.autoApply && w("select-date");
  }, X = () => {
    W.value && ge(W.value);
  };
  Ne(() => {
    i.value || (Ie(), X()), c(!0), _.focusStartDate && _.startDate && Ie();
  });
  const L = U(() => y.value?.steps?.length && !y.value?.partial ? e.flowStep === y.value.steps.length : !0), ve = () => {
    _.autoApply && L.value && w("auto-apply", y.value?.partial ? e.flowStep !== y.value?.steps?.length : !1);
  }, c = (A = !1) => {
    if (i.value)
      return Array.isArray(i.value) ? (o.value = i.value, V(A)) : Y(i.value, A);
    if (f.value.count && A && !_.startDate)
      return g(l(), A);
  }, p = () => Array.isArray(i.value) && B.value.enabled ? $e(i.value[0]) === $e(i.value[1] ?? i.value[0]) : !1, S = (A) => {
    const J = Mt(A, 1);
    return { month: $e(J), year: be(J) };
  }, g = (A = l(), J = !1) => {
    if ((!f.value.count || !f.value.static || J) && ee(0, $e(A), be(A)), f.value.count && (!i.value || p() || !f.value.solo) && (!f.value.solo || J))
      for (let pe = 1; pe < f.value.count; pe++) {
        const Me = Pe(l(), { month: P.value(pe - 1), year: O.value(pe - 1) }), Be = Wa(Me, { months: 1 });
        x.value[pe] = { month: $e(Be), year: be(Be) };
      }
  }, Y = (A, J) => {
    g(A), de("hours", it(A)), de("minutes", ft(A)), de("seconds", ht(A)), f.value.count && J && he();
  }, G = (A) => {
    if (f.value.count) {
      if (f.value.solo) return 0;
      const J = $e(A[0]), pe = $e(A[1]);
      return Math.abs(pe - J) < f.value.count ? 0 : 1;
    }
    return 1;
  }, v = (A, J) => {
    A[1] && B.value.showLastInRange ? g(A[G(A)], J) : g(A[0], J);
    const pe = (Me, Be) => [
      Me(A[0]),
      A?.[1] ? Me(A[1]) : M[Be][1]
    ];
    de("hours", pe(it, "hours")), de("minutes", pe(ft, "minutes")), de("seconds", pe(ht, "seconds"));
  }, n = (A, J) => {
    if ((B.value.enabled || _.weekPicker) && !Q.value.enabled)
      return v(A, J);
    if (Q.value.enabled && J) {
      const pe = A[A.length - 1];
      return Y(pe, J);
    }
  }, V = (A) => {
    const J = i.value;
    n(J, A), f.value.count && f.value.solo && he();
  }, N = (A, J) => {
    const pe = Pe(l(), { month: P.value(J), year: O.value(J) }), Me = A < 0 ? Mt(pe, 1) : Ht(pe, 1);
    m($e(Me), be(Me), A < 0, _.preventMinMaxNavigation) && (ee(J, $e(Me), be(Me)), d("update-month-year", { instance: J, month: $e(Me), year: be(Me) }), f.value.count && !f.value.solo && ue(J), h());
  }, ue = (A) => {
    for (let J = A - 1; J >= 0; J--) {
      const pe = Ht(Pe(l(), { month: P.value(J + 1), year: O.value(J + 1) }), 1);
      ee(J, $e(pe), be(pe));
    }
    for (let J = A + 1; J <= f.value.count - 1; J++) {
      const pe = Mt(Pe(l(), { month: P.value(J - 1), year: O.value(J - 1) }), 1);
      ee(J, $e(pe), be(pe));
    }
  }, he = () => {
    if (Array.isArray(i.value) && i.value.length === 2) {
      const A = l(l(i.value[1] ?? Mt(i.value[0], 1))), [J, pe] = [$e(i.value[0]), be(i.value[0])], [Me, Be] = [$e(i.value[1]), be(i.value[1])];
      (J !== Me || J === Me && pe !== Be) && f.value.solo && ee(1, $e(A), be(A));
    } else i.value && !Array.isArray(i.value) && (ee(0, $e(i.value), be(i.value)), g(l()));
  }, Ie = () => {
    _.startDate && (ee(0, $e(l(_.startDate)), be(l(_.startDate))), f.value.count && ue(0));
  }, Le = (A, J) => {
    if (D.value.monthChangeOnScroll) {
      const pe = Date.now() - s.value.getTime(), Me = Math.abs(A.deltaY);
      let Be = 500;
      Me > 1 && (Be = 100), Me > 100 && (Be = 0), pe > Be && (s.value = /* @__PURE__ */ new Date(), N(
        D.value.monthChangeOnScroll === "inverse" ? A.deltaY : -A.deltaY,
        J
      ));
    }
  }, wt = (A, J, pe = !1) => {
    D.value.monthChangeOnArrows && _.vertical === pe && Pt(A, J);
  }, Pt = (A, J) => {
    N(A === "right" ? -1 : 1, J);
  }, ua = (A) => {
    if (F.value.markers)
      return $(A.value, F.value.markers);
  }, ia = (A, J) => {
    switch (_.sixWeeks === !0 ? "append" : _.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [A == 0, !0];
      case "fair":
        return [A == 0 || J > A, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, ca = (A, J, pe, Me) => {
    if (_.sixWeeks && A.length < 6) {
      const Be = 6 - A.length, mt = (J.getDay() + 7 - Me) % 7, Qt = 6 - (pe.getDay() + 7 - Me) % 7, [It, ha] = ia(mt, Qt);
      for (let Dt = 1; Dt <= Be; Dt++)
        if (ha ? !!(Dt % 2) == It : It) {
          const Gt = A[0].days[0], ga = xt(pt(Gt.value, -7), $e(J));
          A.unshift({ days: ga });
        } else {
          const Gt = A[A.length - 1], ga = Gt.days[Gt.days.length - 1], sn = xt(pt(ga.value, 1), $e(J));
          A.push({ days: sn });
        }
    }
    return A;
  }, xt = (A, J) => {
    const pe = l(A), Me = [];
    for (let Be = 0; Be < 7; Be++) {
      const mt = pt(pe, Be), Bt = $e(mt) !== J;
      Me.push({
        text: _.hideOffsetDates && Bt ? "" : E(mt),
        value: mt,
        current: !Bt,
        classData: {}
      });
    }
    return Me;
  }, da = (A, J) => {
    const pe = [], Me = l(new Date(J, A)), Be = l(new Date(J, A + 1, 0)), mt = _.weekStart, Bt = aa(Me, { weekStartsOn: mt }), Qt = (It) => {
      const ha = xt(It, A);
      if (pe.push({ days: ha }), !pe[pe.length - 1].days.some((Dt) => ie(l(Dt.value), ae(Be)))) {
        const Dt = pt(It, 7);
        Qt(Dt);
      }
    };
    return Qt(Bt), ca(pe, Me, Be, mt);
  }, va = (A) => {
    const J = K(
      { hours: M.hours, minutes: M.minutes, seconds: Tt() },
      l(A.value)
    );
    d("date-click", J), Q.value.enabled ? le(J, Q.value.limit) : i.value = J, r(), Je().then(() => {
      ve();
    });
  }, qt = (A) => B.value.noDisabledRange ? ye(o.value[0], A).some((pe) => k(pe)) : !1, fa = () => {
    o.value = i.value ? i.value.slice().filter((A) => !!A) : [], o.value.length === 2 && !(B.value.fixedStart || B.value.fixedEnd) && (o.value = []);
  }, ma = (A, J) => {
    const pe = [l(A.value), pt(l(A.value), +B.value.autoRange)];
    R(pe) ? (J && fe(A.value), o.value = pe) : d("invalid-date", A.value);
  }, fe = (A) => {
    const J = $e(l(A)), pe = be(l(A));
    if (ee(0, J, pe), f.value.count > 0)
      for (let Me = 1; Me < f.value.count; Me++) {
        const Be = S(
          Pe(l(A), { year: O.value(Me - 1), month: P.value(Me - 1) })
        );
        ee(Me, Be.month, Be.year);
      }
  }, Ue = (A) => {
    if (qt(A.value) || !z(A.value, i.value, B.value.fixedStart ? 0 : 1))
      return d("invalid-date", A.value);
    o.value = Ae(l(A.value));
  }, rt = (A, J) => {
    if (fa(), B.value.autoRange) return ma(A, J);
    if (B.value.fixedStart || B.value.fixedEnd) return Ue(A);
    o.value[0] ? z(l(A.value), i.value) && !qt(A.value) ? ne(l(A.value), l(o.value[0])) ? (o.value.unshift(l(A.value)), d("range-end", o.value[0])) : (o.value[1] = l(A.value), d("range-end", o.value[1])) : d("invalid-date", A.value) : (o.value[0] = l(A.value), d("range-start", o.value[0]));
  }, Tt = (A = !0) => I.value.enableSeconds ? Array.isArray(M.seconds) ? A ? M.seconds[0] : M.seconds[1] : M.seconds : 0, ct = (A) => {
    o.value[A] = K(
      {
        hours: M.hours[A],
        minutes: M.minutes[A],
        seconds: Tt(A !== 1)
      },
      o.value[A]
    );
  }, pa = () => {
    o.value[0] && o.value[1] && +o.value?.[0] > +o.value?.[1] && (o.value.reverse(), d("range-start", o.value[0]), d("range-end", o.value[1]));
  }, Xa = () => {
    o.value.length && (o.value[0] && !o.value[1] ? ct(0) : (ct(0), ct(1), r()), pa(), i.value = o.value.slice(), _e(
      o.value,
      w,
      o.value.length < 2 || y.value?.steps.length ? e.flowStep !== y.value?.steps?.length : !1
    ));
  }, Za = (A, J = !1) => {
    if (k(A.value) || !A.current && _.hideOffsetDates)
      return d("invalid-date", A.value);
    if (a.value = structuredClone(A), !B.value.enabled) return va(A);
    Array.isArray(M.hours) && Array.isArray(M.minutes) && !Q.value.enabled && (rt(A, J), Xa());
  }, en = (A, J) => {
    ee(A, J.month, J.year, !0), f.value.count && !f.value.solo && ue(A), d("update-month-year", { instance: A, month: J.month, year: J.year }), h(f.value.solo ? A : void 0);
    const pe = y.value?.steps?.length ? y.value.steps[e.flowStep] : void 0;
    !J.fromNav && (pe === Qe.month || pe === Qe.year) && r();
  }, tn = (A) => {
    me({
      value: A
    }), b(), _.multiCalendars && Je().then(() => c(!0));
  }, an = () => {
    let A = l();
    return _.actionRow?.nowBtnRound && (A = Bn(A, {
      roundingMethod: _.actionRow.nowBtnRound.rounding ?? "ceil",
      nearestTo: _.actionRow.nowBtnRound.roundTo ?? 15
    })), A;
  }, nn = () => {
    const A = an();
    !B.value.enabled && !Q.value.enabled ? i.value = A : i.value && Array.isArray(i.value) && i.value[0] ? Q.value.enabled ? i.value = [...i.value, A] : i.value = ne(A, i.value[0]) ? [A, i.value[0]] : [i.value[0], A] : i.value = [A], b();
  }, rn = () => {
    if (Array.isArray(i.value))
      if (Q.value.enabled) {
        const A = ln();
        i.value[i.value.length - 1] = te(A);
      } else
        i.value = i.value.map((A, J) => A && te(A, J));
    else
      i.value = te(i.value);
    w("time-update");
  }, ln = () => Array.isArray(i.value) && i.value.length ? i.value[i.value.length - 1] : null, on = (A) => {
    let J = "";
    if (B.value.enabled && Array.isArray(i.value))
      for (const pe of Object.keys(A)) {
        const Me = A[pe];
        Array.isArray(Me) && (M[pe][0] !== Me[0] && (J = "range-start"), M[pe][1] !== Me[1] && (J = "range-start"));
      }
    return J;
  };
  return {
    calendars: x,
    modelValue: i,
    month: P,
    year: O,
    time: M,
    disabledTimesConfig: se,
    today: u,
    validateTime: H,
    getCalendarDays: da,
    getMarker: ua,
    handleScroll: Le,
    handleSwipe: Pt,
    handleArrow: wt,
    selectDate: Za,
    updateMonthYear: en,
    presetDate: tn,
    selectCurrentDate: nn,
    updateTime: (A) => {
      const J = on(A);
      Z(A, rn), J && d(J, i.value[J === "range-start" ? 0 : 1]);
    },
    assignMonthAndYear: g,
    setStartTime: X
  };
}, Yl = () => {
  const {
    isModelAuto: e,
    matchDate: w,
    isDateAfter: h,
    isDateBefore: r,
    isDateBetween: o,
    isDateEqual: s,
    getWeekFromDate: a,
    getBeforeAndAfterInRange: l
  } = ze(), {
    getDate: d,
    today: x,
    rootProps: P,
    defaults: { multiCalendars: O, multiDates: M, ui: i, highlight: _, safeDates: u, range: T },
    modelValue: f
  } = Se(), { isDisabled: W } = nt(), B = ce(null), D = (c) => {
    !c.current && P.hideOffsetDates || (B.value = c.value);
  }, F = () => {
    B.value = null;
  }, Q = (c) => Array.isArray(f.value) && T.value.enabled && f.value[0] && B.value ? c ? h(B.value, f.value[0]) : r(B.value, f.value[0]) : !0, I = (c, p) => {
    const S = () => f.value ? p ? f.value[0] || null : f.value[1] : null, g = f.value && Array.isArray(f.value) ? S() : null;
    return s(d(c.value), g);
  }, y = (c) => {
    const p = Array.isArray(f.value) ? f.value[0] : null;
    return c ? !r(B.value, p) : !0;
  }, m = (c, p = !0) => (T.value.enabled || P.weekPicker) && Array.isArray(f.value) && f.value.length === 2 ? P.hideOffsetDates && !c.current ? !1 : s(d(c.value), f.value[p ? 0 : 1]) : T.value.enabled ? I(c, p) && y(p) || s(c.value, Array.isArray(f.value) ? f.value[0] : null) && Q(p) : !1, k = (c, p) => {
    if (Array.isArray(f.value) && f.value[0] && f.value.length === 1) {
      const S = s(c.value, B.value);
      return p ? h(f.value[0], c.value) && S : r(f.value[0], c.value) && S;
    }
    return !1;
  }, R = (c) => !f.value || P.hideOffsetDates && !c.current ? !1 : T.value.enabled ? P.modelAuto && Array.isArray(f.value) ? s(c.value, f.value[0] ?? x) : !1 : M.value.enabled && Array.isArray(f.value) ? f.value.some((p) => s(p, c.value)) : s(c.value, f.value ? f.value : x), z = (c) => {
    if (T.value.autoRange || P.weekPicker) {
      if (B.value) {
        if (P.hideOffsetDates && !c.current) return !1;
        const p = pt(B.value, +T.value.autoRange), S = a(d(B.value), P.weekStart);
        return P.weekPicker ? s(S[1], d(c.value)) : s(p, d(c.value));
      }
      return !1;
    }
    return !1;
  }, Z = (c) => {
    if (T.value.autoRange || P.weekPicker) {
      if (B.value) {
        const p = pt(B.value, +T.value.autoRange);
        if (P.hideOffsetDates && !c.current) return !1;
        const S = a(d(B.value), P.weekStart);
        return P.weekPicker ? h(c.value, S[0]) && r(c.value, S[1]) : h(c.value, B.value) && r(c.value, p);
      }
      return !1;
    }
    return !1;
  }, te = (c) => {
    if (T.value.autoRange || P.weekPicker) {
      if (B.value) {
        if (P.hideOffsetDates && !c.current) return !1;
        const p = a(d(B.value), P.weekStart);
        return P.weekPicker ? s(p[0], c.value) : s(B.value, c.value);
      }
      return !1;
    }
    return !1;
  }, de = (c) => o(f.value, B.value, c.value), ge = () => P.modelAuto && Array.isArray(f.value) ? !!f.value[0] : !1, H = () => P.modelAuto ? e(f.value) : !0, se = (c) => {
    if (P.weekPicker) return !1;
    const p = T.value.enabled ? !m(c) && !m(c, !1) : !0;
    return !W(c.value) && !R(c) && !(!c.current && P.hideOffsetDates) && p;
  }, E = (c) => T.value.enabled ? P.modelAuto ? ge() && R(c) : !1 : R(c), ae = (c) => _.value ? w(c.value, u.value.highlight) : !1, K = (c) => {
    const p = W(c.value);
    return p && (typeof _.value == "function" ? !_.value(c.value, p) : !_.value.options.highlightDisabled);
  }, ne = (c) => typeof _.value == "function" ? _.value(c.value) : _.value.weekdays?.includes(c.value.getDay()), ie = (c) => (T.value.enabled || P.weekPicker) && (!(O.value.count > 0) || c.current) && H() && !(!c.current && P.hideOffsetDates) && !R(c) ? de(c) : !1, ye = (c) => {
    if (Array.isArray(f.value) && f.value.length === 1) {
      const { before: p, after: S } = l(+T.value.maxRange, f.value[0]);
      return Rt(c.value, p) || At(c.value, S);
    }
    return !1;
  }, _e = (c) => {
    if (Array.isArray(f.value) && f.value.length === 1) {
      const { before: p, after: S } = l(+T.value.minRange, f.value[0]);
      return o([p, S], f.value[0], c.value);
    }
    return !1;
  }, Ae = (c) => T.value.enabled && (T.value.maxRange || T.value.minRange) ? T.value.maxRange && T.value.minRange ? ye(c) || _e(c) : T.value.maxRange ? ye(c) : _e(c) : !1, le = (c) => {
    const { isRangeStart: p, isRangeEnd: S } = ee(c), g = T.value.enabled ? p || S : !1;
    return {
      dp__cell_offset: !c.current,
      dp__pointer: !P.disabled && !(!c.current && P.hideOffsetDates) && !W(c.value) && !Ae(c),
      dp__cell_disabled: W(c.value) || Ae(c),
      dp__cell_highlight: !K(c) && (ae(c) || ne(c)) && !E(c) && !g && !te(c) && !(ie(c) && P.weekPicker) && !S,
      dp__cell_highlight_active: !K(c) && (ae(c) || ne(c)) && E(c),
      dp__today: !P.noToday && s(c.value, x) && c.current,
      "dp--past": r(c.value, x),
      "dp--future": h(c.value, x)
    };
  }, me = (c) => ({
    dp__active_date: E(c),
    dp__date_hover: se(c)
  }), $ = (c) => {
    if (f.value && !Array.isArray(f.value)) {
      const p = a(f.value, P.weekStart);
      return {
        ...X(c),
        dp__range_start: s(p[0], c.value),
        dp__range_end: s(p[1], c.value),
        dp__range_between_week: h(c.value, p[0]) && r(c.value, p[1])
      };
    }
    return {
      ...X(c)
    };
  }, oe = (c) => {
    if (f.value && Array.isArray(f.value)) {
      const p = a(f.value[0], P.weekStart), S = f.value[1] ? a(f.value[1], P.weekStart) : [];
      return {
        ...X(c),
        dp__range_start: s(p[0], c.value) || s(S[0], c.value),
        dp__range_end: s(p[1], c.value) || s(S[1], c.value),
        dp__range_between_week: h(c.value, p[0]) && r(c.value, p[1]) || h(c.value, S[0]) && r(c.value, S[1]),
        dp__range_between: h(c.value, p[1]) && r(c.value, S[0])
      };
    }
    return {
      ...X(c)
    };
  }, ee = (c) => {
    const p = O.value.count > 0 ? c.current && m(c) && H() : m(c) && H(), S = O.value.count > 0 ? c.current && m(c, !1) && H() : m(c, !1) && H();
    return { isRangeStart: p, isRangeEnd: S };
  }, b = (c) => {
    const { isRangeStart: p, isRangeEnd: S } = ee(c);
    return {
      dp__range_start: p,
      dp__range_end: S,
      dp__range_between: ie(c),
      dp__date_hover: s(c.value, B.value) && !p && !S && !P.weekPicker,
      dp__date_hover_start: k(c, !0),
      dp__date_hover_end: k(c, !1)
    };
  }, X = (c) => ({
    ...b(c),
    dp__cell_auto_range: Z(c),
    dp__cell_auto_range_start: te(c),
    dp__cell_auto_range_end: z(c)
  }), L = (c) => T.value.enabled ? T.value.autoRange ? X(c) : P.modelAuto ? { ...me(c), ...b(c) } : P.weekPicker ? oe(c) : b(c) : P.weekPicker ? $(c) : me(c);
  return {
    setHoverDate: D,
    clearHoverDate: F,
    getDayClassData: (c) => P.hideOffsetDates && !c.current ? {} : {
      ...le(c),
      ...L(c),
      [i.value.dayClass ? i.value.dayClass(c.value, f.value) : ""]: !0,
      ...i.value.calendarCell
    }
  };
}, Ol = { key: 0 }, xl = /* @__PURE__ */ We({
  __name: "DatePicker",
  props: /* @__PURE__ */ Va({
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  }, Cr),
  emits: ["mount", "update-flow-step", "reset-flow", "focus-menu", "select-date", "time-update", "auto-apply"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, {
      month: s,
      year: a,
      modelValue: l,
      time: d,
      disabledTimesConfig: x,
      today: P,
      validateTime: O,
      getCalendarDays: M,
      getMarker: i,
      handleArrow: _,
      handleScroll: u,
      handleSwipe: T,
      selectDate: f,
      updateMonthYear: W,
      presetDate: B,
      selectCurrentDate: D,
      updateTime: F,
      assignMonthAndYear: Q,
      setStartTime: I
    } = Cl(o, r, $, oe), y = gt(), { setHoverDate: m, getDayClassData: k, clearHoverDate: R } = Yl(), {
      getDate: z,
      rootEmit: Z,
      rootProps: te,
      defaults: { multiCalendars: de, timeConfig: ge }
    } = Se(), { getYears: H, getMonths: se } = ra(), { getCellId: E } = ze(), { mapSlots: ae } = bt(), K = Ce("calendar-header"), ne = Ce("calendar"), ie = Ce("time-picker"), ye = ae(y, "calendar"), _e = ae(y, "monthYear"), Ae = ae(y, "timePicker"), le = (g) => {
      r("mount", g);
    };
    ut(
      de,
      (g, Y) => {
        g.count - Y.count > 0 && Q();
      },
      { deep: !0 }
    );
    const me = U(() => (g) => M(s.value(g), a.value(g)).map((Y) => ({
      ...Y,
      days: Y.days.map((G) => (G.marker = i(G), G.classData = k(G), G))
    })));
    function $(g) {
      g || g === 0 ? ne.value?.[g]?.triggerTransition(s.value(g), a.value(g)) : ne.value?.forEach((Y, G) => Y?.triggerTransition(s.value(G), a.value(G)));
    }
    function oe() {
      r("update-flow-step");
    }
    const ee = (g, Y, G = 0) => {
      K.value?.[G]?.toggleMonthPicker(g, Y);
    }, b = (g, Y, G = 0) => {
      K.value?.[G]?.toggleYearPicker(g, Y);
    }, X = (g, Y, G) => {
      ie.value?.toggleTimePicker(g, Y, G);
    }, L = (g, Y) => {
      if (!te.range) {
        const G = l.value ? l.value : P, v = Y ? z(Y) : G, n = g ? aa(v, { weekStartsOn: 1 }) : Pa(v, { weekStartsOn: 1 });
        f({
          value: n,
          current: $e(v) === s.value(0),
          text: "",
          classData: {}
        }), document.getElementById(E(n))?.focus();
      }
    }, ve = (g) => {
      K.value?.[0]?.handleMonthYearChange(g, !0);
    }, c = (g) => {
      W(0, { month: s.value(0), year: a.value(0) + (g ? 1 : -1), fromNav: !0 });
    }, p = (g) => {
      Z("overlay-toggle", { open: !1, overlay: g }), r("focus-menu");
    };
    return w({
      clearHoverDate: R,
      presetDate: B,
      selectCurrentDate: D,
      handleArrow: _,
      updateMonthYear: W,
      setStartTime: I,
      toggleMonthPicker: ee,
      toggleYearPicker: b,
      toggleTimePicker: X,
      getSidebarProps: () => ({
        modelValue: l,
        month: s,
        year: a,
        time: d,
        updateTime: F,
        updateMonthYear: W,
        selectDate: f,
        presetDate: B
      }),
      changeMonth: ve,
      changeYear: c,
      selectWeekDate: L
    }), (g, Y) => (C(), j(we, null, [
      at(oa, { collapse: e.collapse }, {
        default: De(({ instances: G, wrapClass: v }) => [
          (C(!0), j(we, null, Ye(G, (n) => (C(), j("div", {
            key: n,
            class: ke(v)
          }, [
            t(te).hideMonthYearSelect ? q("", !0) : (C(), Re(Ml, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(se)(),
              years: t(H)(),
              month: t(s)(n),
              year: t(a)(n),
              instance: n,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: Y[0] || (Y[0] = (V) => le(t(_t).header)),
              onResetFlow: Y[1] || (Y[1] = (V) => g.$emit("reset-flow")),
              onUpdateMonthYear: (V) => t(W)(n, V),
              onOverlayClosed: p
            }, He({ _: 2 }, [
              Ye(t(_e), (V, N) => ({
                name: V,
                fn: De((ue) => [
                  re(g.$slots, V, tt({ ref_for: !0 }, ue))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            at(Rl, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": me.value(n),
              instance: n,
              month: t(s)(n),
              year: t(a)(n),
              onSelectDate: (V) => t(f)(V, n !== 1),
              onSetHoverDate: Y[2] || (Y[2] = (V) => t(m)(V)),
              onHandleScroll: (V) => t(u)(V, n),
              onHandleSwipe: (V) => t(T)(V, n),
              onMount: Y[3] || (Y[3] = (V) => le(t(_t).calendar))
            }, He({ _: 2 }, [
              Ye(t(ye), (V, N) => ({
                name: V,
                fn: De((ue) => [
                  re(g.$slots, V, tt({ ref_for: !0 }, { ...ue }))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(ge).enableTimePicker ? (C(), j("div", Ol, [
        g.$slots["time-picker"] ? re(g.$slots, "time-picker", Xe(tt({ key: 0 }, { time: t(d), updateTime: t(F) }))) : (C(), Re(Ga, {
          key: 1,
          ref: "time-picker",
          hours: t(d).hours,
          minutes: t(d).minutes,
          seconds: t(d).seconds,
          "disabled-times-config": t(x),
          "validate-time": t(O),
          "no-overlay-focus": e.noOverlayFocus,
          onMount: Y[4] || (Y[4] = (G) => le(t(_t).timePicker)),
          "onUpdate:hours": Y[5] || (Y[5] = (G) => t(F)({ hours: G, minutes: t(d).minutes, seconds: t(d).seconds })),
          "onUpdate:minutes": Y[6] || (Y[6] = (G) => t(F)({ hours: t(d).hours, minutes: G, seconds: t(d).seconds })),
          "onUpdate:seconds": Y[7] || (Y[7] = (G) => t(F)({ hours: t(d).hours, minutes: t(d).minutes, seconds: G })),
          onResetFlow: Y[8] || (Y[8] = (G) => g.$emit("reset-flow"))
        }, He({ _: 2 }, [
          Ye(t(Ae), (G, v) => ({
            name: G,
            fn: De((n) => [
              re(g.$slots, G, Xe(st(n)))
            ])
          }))
        ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"]))
      ])) : q("", !0)
    ], 64));
  }
}), Bl = (e, w) => {
  const {
    getDate: h,
    modelValue: r,
    year: o,
    calendars: s,
    defaults: { highlight: a, range: l, multiDates: d }
  } = Se(), { isDateBetween: x, isDateEqual: P } = ze(), { checkRangeAutoApply: O, handleMultiDatesSelect: M, setMonthOrYearRange: i } = sa();
  zt();
  const { isDisabled: _ } = nt(), { formatQuarterText: u } = kt(), {
    selectYear: T,
    groupedYears: f,
    showYearPicker: W,
    isDisabled: B,
    toggleYearPicker: D,
    handleYearSelect: F,
    handleYear: Q,
    setStartDate: I
  } = Qa(w), y = ce();
  Ne(() => {
    I();
  });
  const m = U(() => (E) => r.value ? Array.isArray(r.value) ? r.value.some((ae) => Sa(E, ae)) : Sa(r.value, E) : !1), k = (E) => {
    if (l.value.enabled) {
      if (Array.isArray(r.value)) {
        const ae = P(E, r.value[0]) || P(E, r.value[1]);
        return x(r.value, y.value, E) && !ae;
      }
      return !1;
    }
    return !1;
  }, R = (E, ae) => E.quarter === Ca(ae) && E.year === be(ae), z = (E) => typeof a.value == "function" ? a.value({ quarter: Ca(E), year: be(E) }) : a.value.quarters.some((ae) => R(ae, E)), Z = U(() => (E) => {
    const ae = Pe(h(), { year: o.value(E) });
    return In({
      start: Ft(ae),
      end: Ea(ae)
    }).map((K) => {
      const ne = Vn(K), ie = Ra(K), ye = _(K), _e = k(ne), Ae = z(ne);
      return {
        text: u(ne, ie),
        value: ne,
        active: m.value(ne),
        highlighted: Ae,
        disabled: ye,
        isBetween: _e
      };
    });
  }), te = (E) => {
    M(E, d.value.limit), w("auto-apply", !0);
  }, de = (E) => {
    r.value = i(E), O(r.value, w, r.value.length < 2);
  }, ge = (E) => {
    r.value = E, w("auto-apply");
  };
  return {
    groupedYears: f,
    year: o,
    isDisabled: B,
    quarters: Z,
    showYearPicker: W,
    modelValue: r,
    selectYear: T,
    toggleYearPicker: D,
    handleYearSelect: F,
    handleYear: Q,
    setHoverDate: (E) => {
      y.value = E;
    },
    selectQuarter: (E, ae, K) => {
      if (!K)
        return s.value[ae].month = $e(Ra(E)), d.value.enabled ? te(E) : l.value.enabled ? de(E) : ge(E);
    }
  };
}, Il = { class: "dp--quarter-items" }, Vl = ["data-test-id", "disabled", "onClick", "onMouseover"], El = /* @__PURE__ */ We({
  __name: "QuarterPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e, {
      defaults: { config: s }
    } = Se(), a = gt(), { mapSlots: l } = bt(), { boolHtmlAttribute: d } = Ot(), x = l(a, "yearMode"), {
      groupedYears: P,
      year: O,
      isDisabled: M,
      quarters: i,
      modelValue: _,
      showYearPicker: u,
      setHoverDate: T,
      selectQuarter: f,
      toggleYearPicker: W,
      handleYearSelect: B,
      handleYear: D
    } = Bl(o, r);
    return w({ getSidebarProps: () => ({
      modelValue: _,
      year: O,
      selectQuarter: f,
      handleYearSelect: B,
      handleYear: D
    }) }), (Q, I) => (C(), Re(oa, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: De(({ instances: y, wrapClass: m }) => [
        (C(!0), j(we, null, Ye(y, (k) => (C(), j("div", {
          key: k,
          class: ke(m)
        }, [
          Te("div", {
            class: "dp-quarter-picker-wrap",
            style: Ze({ minHeight: `${t(s).modeHeight}px` })
          }, [
            Q.$slots["top-extra"] ? re(Q.$slots, "top-extra", {
              key: 0,
              value: t(_)
            }) : q("", !0),
            Te("div", null, [
              at(qa, {
                items: t(P)(k),
                instance: k,
                "show-year-picker": t(u)[k],
                year: t(O)(k),
                "is-disabled": (R) => t(M)(k, R),
                onHandleYear: (R) => t(D)(k, R),
                onYearSelect: (R) => t(B)(R, k),
                onToggleYearPicker: (R) => t(W)(k, R?.flow, R?.show)
              }, He({ _: 2 }, [
                Ye(t(x), (R, z) => ({
                  name: R,
                  fn: De((Z) => [
                    re(Q.$slots, R, tt({ ref_for: !0 }, Z))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            Te("div", Il, [
              (C(!0), j(we, null, Ye(t(i)(k), (R, z) => (C(), j("div", { key: z }, [
                Te("button", {
                  type: "button",
                  class: ke(["dp--qr-btn", {
                    "dp--qr-btn-active": R.active,
                    "dp--qr-btn-between": R.isBetween,
                    "dp--qr-btn-disabled": R.disabled,
                    "dp--highlighted": R.highlighted
                  }]),
                  "data-test-id": R.value,
                  disabled: t(d)(R.disabled),
                  onClick: (Z) => t(f)(R.value, k, R.disabled),
                  onMouseover: (Z) => t(T)(R.value)
                }, [
                  Q.$slots.quarter ? re(Q.$slots, "quarter", {
                    key: 0,
                    value: R.value,
                    text: R.text
                  }) : (C(), j(we, { key: 1 }, [
                    vt(je(R.text), 1)
                  ], 64))
                ], 42, Vl)
              ]))), 128))
            ])
          ], 4)
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), Fl = ["id", "tabindex", "role", "aria-label"], Nl = {
  key: 0,
  class: "dp--menu-load-container"
}, Wl = {
  key: 1,
  class: "dp--menu-header"
}, Ll = ["data-dp-mobile"], Hl = {
  key: 0,
  class: "dp__sidebar_left"
}, Kl = ["data-dp-mobile"], jl = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], zl = { class: "dp__instance_calendar" }, Ul = {
  key: 2,
  class: "dp__sidebar_right"
}, ql = {
  key: 3,
  class: "dp__action_extra"
}, Ql = /* @__PURE__ */ We({
  __name: "DatepickerMenu",
  props: {
    collapse: { type: Boolean },
    noOverlayFocus: { type: Boolean },
    getInputRect: { type: Function }
  },
  emits: ["close-picker", "select-date", "auto-apply", "time-update", "menu-blur"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = gt(), {
      state: s,
      rootProps: a,
      defaults: { textInput: l, inline: d, config: x, ui: P, ariaLabels: O },
      setState: M
    } = Se(), { isMobile: i } = na(), { mapSlots: _ } = bt(), { handleEventPropagation: u, getElWithin: T, checkStopPropagation: f, checkKeyDown: W } = Fe(), { arrowRight: B, arrowLeft: D, arrowDown: F, arrowUp: Q } = yt(), I = Ce("inner-menu"), y = Ce("dp-menu"), m = Ce("dyn-cmp"), k = ce(0), R = ce(!1), z = ce(!1), { flowStep: Z, updateFlowStep: te, childMount: de, resetFlow: ge, handleFlow: H } = Kn(m), se = (v) => {
      z.value = !0, x.value.allowPreventDefault && v.preventDefault(), f(v, x.value, !0);
    };
    Ne(() => {
      R.value = !0, E(), globalThis.addEventListener("resize", E);
      const v = Ge(y);
      v && !l.value.enabled && !d.value.enabled && (M("menuFocused", !0), K()), v && (v.addEventListener("pointerdown", se), v.addEventListener("mousedown", se)), document.addEventListener("mousedown", Y);
    }), Ct(() => {
      globalThis.removeEventListener("resize", E), document.removeEventListener("mousedown", Y);
      const v = Ge(y);
      v && (v.removeEventListener("pointerdown", se), v.removeEventListener("mousedown", se));
    });
    const E = () => {
      const v = Ge(I);
      v && (k.value = v.getBoundingClientRect().width);
    }, ae = U(() => a.monthPicker ? el : a.yearPicker ? al : a.timePicker ? hl : a.quarterPicker ? El : xl), K = () => {
      const v = Ge(y);
      v && v.focus({ preventScroll: !0 });
    }, ne = U(() => m.value?.getSidebarProps() || {}), ie = _(o, "action"), ye = U(() => a.monthPicker || a.yearPicker ? _(o, "monthYear") : a.timePicker ? _(o, "timePicker") : _(o, "shared")), _e = U(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), Ae = U(
      () => ({
        dp__menu: !0,
        dp__menu_index: !d.value.enabled,
        dp__relative: d.value.enabled,
        ...P.value.menu
      })
    ), le = (v) => {
      f(v, x.value, !0);
    }, me = (v) => {
      x.value.escClose && (r("close-picker"), u(v, x.value));
    }, $ = (v) => {
      if (a.arrowNavigation) {
        if (v === qe.up) return Q();
        if (v === qe.down) return F();
        if (v === qe.left) return D();
        if (v === qe.right) return B();
      } else v === qe.left || v === qe.up ? X("handleArrow", qe.left, 0, v === qe.up) : X("handleArrow", qe.right, 0, v === qe.down);
    }, oe = (v) => {
      M("shiftKeyInMenu", v.shiftKey), !a.hideMonthYearSelect && v.code === xe.tab && v.target.classList.contains("dp__menu") && s.shiftKeyInMenu && (v.preventDefault(), f(v, x.value, !0), r("close-picker"));
    }, ee = (v) => {
      m.value?.toggleTimePicker(!1, !1), m.value?.toggleMonthPicker(!1, !1, v), m.value?.toggleYearPicker(!1, !1, v);
    }, b = (v, n = 0) => v === "month" ? m.value?.toggleMonthPicker(!1, !0, n) : v === "year" ? m.value?.toggleYearPicker(!1, !0, n) : v === "time" ? m.value?.toggleTimePicker(!0, !1) : ee(n), X = (v, ...n) => {
      m.value?.[v] && m.value?.[v](...n);
    }, L = () => {
      X("selectCurrentDate");
    }, ve = (v) => {
      X("presetDate", mn(v));
    }, c = () => {
      X("clearHoverDate");
    }, p = (v, n) => {
      X("updateMonthYear", v, n);
    }, S = (v, n) => {
      v.preventDefault(), $(n);
    }, g = (v) => {
      if (oe(v), v.key === xe.home || v.key === xe.end)
        return X(
          "selectWeekDate",
          v.key === xe.home,
          v.target.getAttribute("id")
        );
      switch ((v.key === xe.pageUp || v.key === xe.pageDown) && (v.shiftKey ? (X("changeYear", v.key === xe.pageUp), T(y.value, "overlay-year")?.focus()) : (X("changeMonth", v.key === xe.pageUp), T(y.value, v.key === xe.pageUp ? "action-prev" : "action-next")?.focus()), v.target.getAttribute("id") && y.value?.focus({ preventScroll: !0 })), v.key) {
        case xe.esc:
          return me(v);
        case xe.arrowLeft:
          return S(v, qe.left);
        case xe.arrowRight:
          return S(v, qe.right);
        case xe.arrowUp:
          return S(v, qe.up);
        case xe.arrowDown:
          return S(v, qe.down);
        default:
          return;
      }
    }, Y = (v) => {
      d.value.enabled && !d.value.input && !y.value?.contains(v.target) && z.value && (z.value = !1, r("menu-blur"));
    };
    return w({
      updateMonthYear: p,
      switchView: b,
      onValueCleared: () => {
        m.value?.setStartTime?.();
      },
      handleFlow: H
    }), (v, n) => (C(), j("div", {
      id: t(a).menuId,
      ref: "dp-menu",
      tabindex: t(d).enabled ? void 0 : "0",
      role: t(d).enabled ? void 0 : "dialog",
      "aria-label": t(O)?.menu,
      class: ke(Ae.value),
      onMouseleave: c,
      onClick: le,
      onKeydown: g
    }, [
      (t(a).disabled || t(a).readonly) && t(d).enabled || t(a).loading ? (C(), j("div", {
        key: 0,
        class: ke(_e.value)
      }, [
        t(a).loading ? (C(), j("div", Nl, [...n[5] || (n[5] = [
          Te("span", { class: "dp--menu-loader" }, null, -1)
        ])])) : q("", !0)
      ], 2)) : q("", !0),
      v.$slots["menu-header"] ? (C(), j("div", Wl, [
        re(v.$slots, "menu-header")
      ])) : q("", !0),
      re(v.$slots, "arrow"),
      Te("div", {
        ref: "inner-menu",
        class: ke({
          dp__menu_content_wrapper: t(a).presetDates?.length || !!v.$slots["left-sidebar"] || !!v.$slots["right-sidebar"],
          "dp--menu-content-wrapper-collapsed": e.collapse && (t(a).presetDates?.length || !!v.$slots["left-sidebar"] || !!v.$slots["right-sidebar"])
        }),
        "data-dp-mobile": t(i),
        style: Ze({ "--dp-menu-width": `${k.value}px` })
      }, [
        v.$slots["left-sidebar"] ? (C(), j("div", Hl, [
          re(v.$slots, "left-sidebar", Xe(st(ne.value)))
        ])) : q("", !0),
        t(a).presetDates.length ? (C(), j("div", {
          key: 1,
          class: ke({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(i)
        }, [
          (C(!0), j(we, null, Ye(t(a).presetDates, (V, N) => (C(), j(we, { key: N }, [
            V.slot ? re(v.$slots, V.slot, {
              key: 0,
              presetDate: ve,
              label: V.label,
              value: V.value
            }) : (C(), j("button", {
              key: 1,
              type: "button",
              style: Ze(V.style || {}),
              class: ke(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
              "data-test-id": V.testId ?? void 0,
              "data-dp-mobile": t(i),
              onClick: Lt((ue) => ve(V.value), ["prevent"]),
              onKeydown: (ue) => t(W)(ue, () => ve(V.value), !0)
            }, je(V.label), 47, jl))
          ], 64))), 128))
        ], 10, Kl)) : q("", !0),
        Te("div", zl, [
          (C(), Re(_a(ae.value), {
            ref: "dyn-cmp",
            "flow-step": t(Z),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": y.value,
            onMount: t(de),
            onUpdateFlowStep: t(te),
            onResetFlow: t(ge),
            onFocusMenu: K,
            onSelectDate: n[0] || (n[0] = (V) => v.$emit("select-date")),
            onAutoApply: n[1] || (n[1] = (V) => v.$emit("auto-apply", V)),
            onTimeUpdate: n[2] || (n[2] = (V) => v.$emit("time-update"))
          }, He({ _: 2 }, [
            Ye(ye.value, (V, N) => ({
              name: V,
              fn: De((ue) => [
                re(v.$slots, V, Xe(st({ ...ue })))
              ])
            }))
          ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
        ]),
        v.$slots["right-sidebar"] ? (C(), j("div", Ul, [
          re(v.$slots, "right-sidebar", Xe(st(ne.value)))
        ])) : q("", !0),
        v.$slots["action-extra"] ? (C(), j("div", ql, [
          v.$slots["action-extra"] ? re(v.$slots, "action-extra", {
            key: 0,
            selectCurrentDate: L
          }) : q("", !0)
        ])) : q("", !0)
      ], 14, Ll),
      !t(a).autoApply || t(x).keepActionRow ? (C(), Re(jr, {
        key: 2,
        "menu-mount": R.value,
        "calendar-width": k.value,
        onClosePicker: n[3] || (n[3] = (V) => v.$emit("close-picker")),
        onSelectDate: n[4] || (n[4] = (V) => v.$emit("select-date")),
        onSelectNow: L
      }, He({ _: 2 }, [
        Ye(t(ie), (V, N) => ({
          name: V,
          fn: De((ue) => [
            re(v.$slots, V, Xe(st({ ...ue })))
          ])
        }))
      ]), 1032, ["menu-mount", "calendar-width"])) : q("", !0)
    ], 42, Fl));
  }
}), Gl = ["data-dp-mobile"], Jl = /* @__PURE__ */ We({
  __name: "VueDatePicker",
  setup(e, { expose: w }) {
    const {
      rootEmit: h,
      setState: r,
      inputValue: o,
      modelValue: s,
      rootProps: a,
      defaults: { inline: l, config: d, textInput: x, range: P, multiDates: O, teleport: M, floatingConfig: i }
    } = Se(), { clearArrowNav: _ } = yt(), { validateDate: u, isValidTime: T } = nt(), { menuTransition: f, showTransition: W } = jt(), { isMobile: B } = na(), { mapSlots: D } = bt(), { findNextFocusableElement: F, getNumVal: Q } = Fe(), I = gt(), y = ce(!1), m = ce(l.value.enabled || a.centered), k = Ta(a, "modelValue"), R = Ta(a, "timezone"), z = Ce("dp-menu-wrap"), Z = Ce("dp-menu"), te = Ce("input-cmp"), de = Ce("picker-wrapper"), ge = Ce("menu-arrow"), H = ce(!1), se = ce(!1), E = ce(!1), ae = ce(!0), K = (fe) => (i.value.arrow && (i.value.arrow === !0 ? fe.push($a({ element: ge })) : fe.push($a({ element: i.value.arrow }))), fe), { floatingStyles: ne, middlewareData: ie, placement: ye, y: _e } = yn(
      te,
      z,
      {
        strategy: i.value.strategy,
        placement: i.value.placement,
        middleware: K([kn(i.value.offset), wn(), Dn()]),
        whileElementsMounted: bn
      }
    );
    Ne(() => {
      me(a.modelValue), Je().then(() => {
        l.value.enabled || globalThis.addEventListener("resize", p);
      }), l.value.enabled && (y.value = !0), globalThis.addEventListener("keyup", S), globalThis.addEventListener("keydown", g);
    }), Ct(() => {
      l.value.enabled || globalThis.removeEventListener("resize", p), globalThis.removeEventListener("keyup", S), globalThis.removeEventListener("keydown", g);
    });
    const Ae = D(I, "all", a.presetDates), le = D(I, "input");
    ut(
      [k, R],
      () => {
        me(k.value);
      },
      { deep: !0 }
    ), ut([ye, _e], () => {
      !l.value.enabled && !a.centered && ae.value && (m.value = !1, Je().then(() => {
        ae.value = !1, m.value = !0;
      }));
    });
    const { parseExternalModelValue: me, emitModelValue: $, formatInputValue: oe, checkBeforeEmit: ee } = Wn(), b = U(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: l.value.enabled,
        "dp--flex-display-collapsed": E.value,
        dp__flex_display_with_input: l.value.input
      })
    ), X = U(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), L = U(() => l.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), ve = () => te.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, c = () => {
      y.value && d.value.closeOnScroll && Ie();
    }, p = () => {
      const fe = Z.value?.$el.getBoundingClientRect().width ?? 0;
      E.value = document.body.offsetWidth <= fe;
    }, S = (fe) => {
      fe.key === "Tab" && !l.value.enabled && !a.teleport && d.value.tabOutClosesMenu && (de.value.contains(document.activeElement) || Ie()), se.value = fe.shiftKey;
    }, g = (fe) => {
      se.value = fe.shiftKey;
    }, Y = () => {
      !a.disabled && !a.readonly && (ae.value = !0, y.value = !0, y.value && h("open"), y.value || he(), me(a.modelValue));
    }, G = () => {
      o.value = "", he(), Z.value?.onValueCleared(), te.value?.setParsedDate(null), h("update:model-value", null), h("cleared"), d.value.closeOnClearValue && Ie();
    }, v = () => {
      const fe = s.value;
      return !fe || !Array.isArray(fe) && u(fe) ? !0 : Array.isArray(fe) ? O.value.enabled || fe.length === 2 && u(fe[0]) && u(fe[1]) ? !0 : P.value.partialRange && !a.timePicker ? u(fe[0]) : !1 : !1;
    }, n = () => {
      ee() && v() ? ($(), Ie()) : h("invalid-select");
    }, V = (fe) => {
      N(), $(), d.value.closeOnAutoApply && !fe && Ie();
    }, N = () => {
      te.value && x.value.enabled && te.value.setParsedDate(s.value);
    }, ue = (fe = !1) => {
      a.autoApply && T(s.value) && v() && (P.value.enabled && Array.isArray(s.value) ? (P.value.partialRange || s.value.length === 2) && V(fe) : V(fe));
    }, he = () => {
      x.value.enabled || (s.value = null);
    }, Ie = (fe = !1) => {
      ae.value = !0, fe && s.value && d.value.setDateOnMenuClose && n(), l.value.enabled || (y.value && (y.value = !1, r("menuFocused", !1), r("shiftKeyInMenu", !1), _(), h("closed"), o.value && me(k.value)), he(), h("blur"));
    }, Le = (fe, Ue, rt = !1) => {
      if (!fe) {
        s.value = null;
        return;
      }
      const Tt = Array.isArray(fe) ? !fe.some((pa) => !u(pa)) : u(fe), ct = T(fe);
      Tt && ct ? (r("isTextInputDate", !0), s.value = fe, Ue ? (H.value = rt, n(), h("text-submit")) : a.autoApply && ue(!0), Je().then(() => {
        r("isTextInputDate", !1);
      })) : h("invalid-date", fe);
    }, wt = () => {
      a.autoApply && T(s.value) && $(), N();
    }, Pt = () => y.value ? Ie() : Y(), ua = (fe) => {
      s.value = fe;
    }, ia = () => {
      x.value.enabled && (r("isInputFocused", !0), oe()), h("focus");
    }, ca = () => {
      x.value.enabled && (r("isInputFocused", !1), me(a.modelValue), H.value && F(de.value, se.value)?.focus()), h("blur");
    }, xt = (fe, Ue) => {
      Z.value && Z.value.updateMonthYear(Ue ?? 0, {
        month: Q(fe.month),
        year: Q(fe.year)
      });
    }, da = (fe) => {
      me(fe ?? a.modelValue);
    }, va = (fe, Ue) => {
      Z.value?.switchView(fe, Ue);
    }, qt = (fe, Ue) => {
      if (y.value)
        return d.value.onClickOutside ? d.value.onClickOutside(fe, Ue) : Ie(!0);
    }, fa = (fe = 0) => {
      Z.value?.handleFlow(fe);
    }, ma = () => z;
    return gn(z, (fe) => qt(v, fe), {
      ignore: [te]
    }), w({
      closeMenu: Ie,
      selectDate: n,
      clearValue: G,
      openMenu: Y,
      onScroll: c,
      formatInputValue: oe,
      // exposed for testing purposes
      updateInternalModelValue: ua,
      // modify internal modelValue
      setMonthYear: xt,
      parseModel: da,
      switchView: va,
      toggleMenu: Pt,
      handleFlow: fa,
      getDpWrapMenuRef: ma
    }), (fe, Ue) => (C(), j("div", {
      ref: "picker-wrapper",
      class: ke(b.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": t(B)
    }, [
      at(Nr, {
        ref: "input-cmp",
        "is-menu-open": y.value,
        onClear: G,
        onOpen: Y,
        onSetInputDate: Le,
        onSetEmptyDate: t($),
        onSelectDate: n,
        onToggle: Pt,
        onClose: Ie,
        onFocus: ia,
        onBlur: ca,
        onRealBlur: Ue[0] || (Ue[0] = (rt) => t(r)("isInputFocused", !1))
      }, He({ _: 2 }, [
        Ye(t(le), (rt, Tt) => ({
          name: rt,
          fn: De((ct) => [
            re(fe.$slots, rt, Xe(st(ct)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      (C(), Re(pn, {
        to: t(M),
        disabled: !t(M)
      }, [
        Te("div", {
          ref: "dp-menu-wrap",
          class: ke({
            "dp--menu-wrapper": !t(l).enabled,
            dp__outer_menu_wrap: !0,
            "dp--centered": t(a).centered
          }),
          style: Ze(!t(l).enabled && !t(a).centered ? t(ne) : void 0)
        }, [
          at(Yt, {
            name: t(f)(t(ye).startsWith("top")),
            css: t(W) && !t(l).enabled && !t(a).centered && m.value
          }, {
            default: De(() => [
              y.value && m.value ? (C(), Re(Ql, {
                key: 0,
                ref: "dp-menu",
                class: ke({ [X.value]: !0 }),
                "no-overlay-focus": L.value,
                collapse: E.value,
                "get-input-rect": ve,
                onClosePicker: Ie,
                onSelectDate: n,
                onAutoApply: ue,
                onTimeUpdate: wt,
                onMenuBlur: Ue[1] || (Ue[1] = (rt) => t(h)("blur"))
              }, He({ _: 2 }, [
                Ye(t(Ae), (rt, Tt) => ({
                  name: rt,
                  fn: De((ct) => [
                    re(fe.$slots, rt, Xe(st({ ...ct })))
                  ])
                })),
                !t(l).enabled && !t(a).centered && t(i).arrow === !0 ? {
                  name: "arrow",
                  fn: De(() => [
                    Te("div", {
                      ref: "menu-arrow",
                      class: ke({
                        dp__arrow_top: t(ye) === "bottom",
                        dp__arrow_bottom: t(ye) === "top"
                      }),
                      style: Ze({
                        left: t(ie).arrow?.x != null ? `${t(ie).arrow.x}px` : "",
                        top: t(ie).arrow?.y != null ? `${t(ie).arrow.y}px` : ""
                      })
                    }, null, 6)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["class", "no-overlay-focus", "collapse"])) : q("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ], 6)
      ], 8, ["to", "disabled"]))
    ], 10, Gl));
  }
}), lo = /* @__PURE__ */ We({
  __name: "VueDatePickerRoot",
  props: /* @__PURE__ */ Va({
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
  }, Yr),
  emits: ["update:model-value", "internal-model-change", "text-submit", "text-input", "open", "closed", "focus", "blur", "cleared", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "invalid-date", "tooltip-open", "tooltip-close", "am-pm-change", "range-start", "range-end", "date-click", "overlay-toggle", "invalid"],
  setup(e, { expose: w, emit: h }) {
    const r = h, o = e;
    Hn(o, r);
    const s = gt(), { mapSlots: a } = bt(), l = a(s, "root", o.presetDates), d = Ce("date-picker");
    return w(xr(d)), (x, P) => (C(), Re(Jl, { ref: "date-picker" }, He({ _: 2 }, [
      Ye(t(l), (O, M) => ({
        name: O,
        fn: De((i) => [
          re(x.$slots, O, Xe(st(i)))
        ])
      }))
    ]), 1536));
  }
});
export {
  uo as TZDate,
  lo as VueDatePicker
};
