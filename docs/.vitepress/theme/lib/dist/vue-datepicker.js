import { h as Ye, ref as ve, reactive as Jt, computed as j, provide as tn, readonly as an, inject as nn, watch as tt, onMounted as Ee, onUnmounted as bt, nextTick as Ke, defineComponent as Ve, useTemplateRef as xe, createElementBlock as J, openBlock as W, renderSlot as ne, createCommentVNode as te, unref as t, createElementVNode as ke, normalizeClass as ye, createBlock as Re, withModifiers as Dt, createVNode as Be, normalizeProps as je, mergeProps as nt, Fragment as Te, normalizeStyle as ze, createTextVNode as ot, toDisplayString as Ne, onBeforeUpdate as rn, withDirectives as qt, renderList as Ce, vShow as Ut, withCtx as we, withKeys as ln, Transition as _t, createSlots as Fe, useSlots as vt, resolveDynamicComponent as fa, guardReactiveProps as et, mergeDefaults as Pa, toValue as on, toRef as ga, Teleport as sn } from "vue";
import { unrefElement as ct, useSwipe as un, onClickOutside as cn } from "@vueuse/core";
import { useFloating as dn, autoUpdate as vn, offset as mn, flip as fn, shift as pn, arrow as ya } from "@floating-ui/vue";
import { getYear as he, getMonth as Pe, set as _e, setYear as Ze, parse as ma, getSeconds as dt, getMinutes as st, getHours as lt, isValid as Qt, addMonths as ht, subMonths as Bt, differenceInCalendarDays as hn, eachDayOfInterval as pa, getDay as gn, isBefore as Mt, isAfter as yt, isEqual as kt, format as qe, subDays as yn, addDays as it, startOfWeek as Gt, endOfWeek as ha, startOfMonth as bn, setMonth as kn, isDate as wn, endOfYear as Ta, startOfYear as Ot, addYears as $a, subYears as Sa, differenceInYears as Dn, add as Ra, sub as Mn, setMilliseconds as _n, setSeconds as An, getWeek as Pn, getISOWeek as Tn, roundToNearestMinutes as $n, isSameQuarter as ba, eachQuarterOfInterval as Sn, startOfQuarter as Rn, endOfQuarter as ka, getQuarter as wa } from "date-fns";
import { TZDate as Cn } from "@date-fns/tz";
import { TZDate as to } from "@date-fns/tz";
function It() {
  return Ye(
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
      Ye("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Ye("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ye("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ye("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function xn() {
  return Ye(
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
      Ye("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Ye("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function Ca() {
  return Ye(
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
      Ye("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function xa() {
  return Ye(
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
      Ye("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function Oa() {
  return Ye(
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
      Ye("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Ye("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Ya() {
  return Ye(
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
      Ye("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Ba() {
  return Ye(
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
      Ye("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const Ia = Symbol("ContextKey"), On = (e, M) => {
  const { setTimeModelValue: m } = Ie(), r = Pr(e), c = ve(null), u = Jt({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1,
    arrowNavigationLevel: 0
  }), a = r.getDate(/* @__PURE__ */ new Date()), s = ve(""), d = ve([{ month: Pe(a), year: he(a) }]), O = Jt({ hours: 0, minutes: 0, seconds: 0 });
  m(O, null, a, r.range.value.enabled);
  const A = j({
    get: () => c.value,
    set: (h) => {
      c.value = h;
    }
  }), Y = j(
    () => (h) => d.value[h] ? d.value[h].month : 0
  ), S = j(
    () => (h) => d.value[h] ? d.value[h].year : 0
  ), l = (h, R) => {
    u[h] = R;
  }, b = () => {
    m(O, A.value, a, r.range.value.enabled);
  };
  tn(Ia, {
    rootProps: e,
    defaults: r,
    modelValue: A,
    state: an(u),
    rootEmit: M,
    calendars: d,
    month: Y,
    year: S,
    time: O,
    today: a,
    inputValue: s,
    setState: l,
    updateTime: b,
    getDate: r.getDate
  });
}, Ae = () => {
  const e = nn(Ia);
  if (!e)
    throw new Error("Can't use context");
  return e;
};
var Ge = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ge || {}), gt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(gt || {}), He = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(He || {});
const Yn = ["timestamp", "date", "iso"];
var Xe = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Xe || {}), Se = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Se || {}), wt = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(wt || {}), Ea = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))(Ea || {});
const Bn = () => {
  const { rootProps: e, state: M } = Ae(), m = j(() => M.arrowNavigationLevel), r = ve(-1), c = ve(-1);
  tt(m, (v, E) => {
    R(v === 0 && E > 0);
  });
  const u = ve([]), a = ve(/* @__PURE__ */ new Map()), s = () => {
    const v = Array.from(
      document.querySelectorAll(`[data-dp-action-element="${m.value}"]`)
    ), E = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
    for (const g of v) {
      const T = g.getBoundingClientRect(), I = T.top, C = T.left;
      E.has(I) || E.set(I, []), E.get(I).push(g), _.set(g, { row: I, col: C });
    }
    u.value = Array.from(E.entries()).sort((g, T) => g[0] - T[0]).map(
      ([g, T]) => T.sort((I, C) => {
        const $ = _.get(I), p = _.get(C);
        return $.col - p.col;
      })
    ), a.value = _;
  }, d = (v, E) => {
    m.value === 0 && (r.value = v, c.value = E);
  }, O = (v) => {
    if (![Se.arrowUp, Se.arrowDown, Se.arrowLeft, Se.arrowRight].includes(v.key))
      return;
    s(), v.preventDefault();
    const E = document.activeElement;
    if (!E?.hasAttribute("data-dp-action-element"))
      return;
    let _ = -1, g = -1;
    for (let T = 0; T < u.value.length; T++) {
      const I = u.value[T].indexOf(E);
      if (I !== -1) {
        _ = T, g = I;
        break;
      }
    }
    if (_ !== -1)
      switch (v.key) {
        case Se.arrowLeft:
          return A(_, g);
        case Se.arrowRight:
          return Y(_, g);
        case Se.arrowUp:
          return S(_, g);
        case Se.arrowDown:
          return l(_, g);
        default:
          return;
      }
  }, A = (v, E) => {
    if (E > 0) {
      const _ = u.value[v][E - 1];
      d(v, E - 1), _ && _.focus();
    }
  }, Y = (v, E) => {
    if (E < u.value[v].length - 1) {
      const _ = u.value[v][E + 1];
      d(v, E + 1), _ && _.focus();
    }
  }, S = (v, E) => {
    if (v > 0) {
      const _ = u.value[v - 1], g = Math.min(E, _.length - 1), T = _[g];
      d(v - 1, g), T && T.focus();
    }
  }, l = (v, E) => {
    if (v < u.value.length - 1) {
      const _ = u.value[v + 1], g = Math.min(E, _.length - 1), T = _[g];
      d(v + 1, g), T && T.focus();
    }
  }, b = () => {
    Ke().then(() => {
      s();
      const v = u.value[r.value]?.[c.value];
      v && h(v);
    });
  }, h = (v) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        v.focus({ preventScroll: !0 });
      });
    });
  }, R = (v) => {
    if (v)
      return b();
    const E = document.querySelector(`[data-dp-element-active="${m.value}"]`);
    if (E && !v)
      h(E);
    else {
      const _ = document.querySelector(`[data-dp-action-element="${m.value}"]`);
      _ && h(_);
    }
  };
  Ee(() => {
    e.arrowNavigation && (R(!1), document.addEventListener("keydown", O));
  }), bt(() => {
    e.arrowNavigation && document.removeEventListener("keydown", O);
  });
}, In = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: M, isValidDate: m } = Ue(), { convertType: r, errorMapper: c } = Ie(), {
    getDate: u,
    rootEmit: a,
    state: s,
    rootProps: d,
    inputValue: O,
    defaults: { textInput: A, range: Y, multiDates: S, timeConfig: l, formats: b },
    modelValue: h,
    updateTime: R
  } = Ae(), { setTime: v, getWeekFromDate: E } = We(), { formatSelectedDate: _, formatForTextInput: g } = mt();
  tt(
    h,
    (y, K) => {
      a("internal-model-change", h.value), JSON.stringify(K ?? {}) !== JSON.stringify(y ?? {}) && R();
    },
    { deep: !0 }
  ), tt(Y, (y, K) => {
    y.enabled !== K.enabled && (h.value = null);
  }), tt(
    () => b.value.input,
    () => {
      ee();
    }
  );
  const T = (y) => y ? d.modelType ? Z(y) : {
    hours: lt(y),
    minutes: st(y),
    seconds: l.value.enableSeconds ? dt(y) : 0
  } : null, I = (y) => d.modelType ? Z(y) : { month: Pe(y), year: he(y) }, C = (y) => Array.isArray(y) ? S.value.enabled ? y.map((K) => $(K, Ze(u(), K))) : M(
    () => [
      Ze(u(), y[0]),
      y[1] ? Ze(u(), y[1]) : e(Y.value.partialRange)
    ],
    Y.value.enabled
  ) : Ze(u(), +y), $ = (y, K) => (typeof y == "string" || typeof y == "number") && d.modelType ? me(y) : K, p = (y) => Array.isArray(y) ? [
    $(y[0], v(y[0])),
    $(y[1], v(y[1]))
  ] : $(y, v(y)), w = (y) => {
    const K = _e(u(), { date: 1 });
    return Array.isArray(y) ? S.value.enabled ? y.map(
      (pe) => $(pe, _e(K, { month: +pe.month, year: +pe.year }))
    ) : M(
      () => [
        $(y[0], _e(K, { month: +y[0].month, year: +y[0].year })),
        $(
          y[1],
          y[1] ? _e(K, { month: +y[1].month, year: +y[1].year }) : e(Y.value.partialRange)
        )
      ],
      Y.value.enabled
    ) : $(y, _e(K, { month: +y.month, year: +y.year }));
  }, V = (y) => {
    if (Array.isArray(y))
      return y.map((K) => me(K));
    throw new Error(c.dateArr("multi-dates"));
  }, L = (y) => {
    if (Array.isArray(y) && Y.value.enabled) {
      const K = y[0], pe = y[1];
      return [
        u(Array.isArray(K) ? K[0] : null),
        Array.isArray(pe) && pe.length ? u(pe[0]) : null
      ];
    }
    return u(y[0]);
  }, H = (y) => d.modelAuto ? Array.isArray(y) ? [me(y[0]), me(y[1])] : d.autoApply ? [me(y)] : [me(y), null] : Array.isArray(y) ? M(
    () => y[1] ? [
      me(y[0]),
      y[1] ? me(y[1]) : e(Y.value.partialRange)
    ] : [me(y[0])],
    Y.value.enabled
  ) : me(y), re = () => {
    Array.isArray(h.value) && Y.value.enabled && h.value.length === 1 && h.value.push(e(Y.value.partialRange));
  }, le = () => {
    const y = h.value;
    return [
      Z(y[0]),
      y[1] ? Z(y[1]) : e(Y.value.partialRange)
    ];
  }, X = () => Array.isArray(h.value) ? h.value[1] ? le() : Z(r(h.value[0])) : [], x = () => (h.value || []).map((y) => Z(y)), ae = (y = !1) => (y || re(), d.modelAuto ? X() : S.value.enabled ? x() : Array.isArray(h.value) ? M(() => le(), Y.value.enabled) : Z(r(h.value))), q = (y) => !y || Array.isArray(y) && !y.length ? null : d.timePicker ? p(r(y)) : d.monthPicker ? w(r(y)) : d.yearPicker ? C(r(y)) : S.value.enabled ? V(r(y)) : d.weekPicker ? L(r(y)) : H(r(y)), oe = (y) => {
    if (s.isTextInputDate) return;
    const K = q(y);
    m(r(K)) ? (h.value = r(K), ee()) : (h.value = null, O.value = "");
  }, z = () => h.value ? S.value.enabled ? h.value.map((y) => _(y)).join("; ") : A.value.enabled ? g() : _(h.value) : "", ee = () => {
    O.value = z();
  }, me = (y) => d.modelType ? Yn.includes(d.modelType) ? u(y) : d.modelType === "format" && typeof b.value.input == "string" ? ma(y, b.value.input, u(), { locale: d.locale }) : ma(y, d.modelType, u(), { locale: d.locale }) : u(y), Z = (y) => y ? d.modelType ? d.modelType === "timestamp" ? +y : d.modelType === "iso" ? y.toISOString() : d.modelType === "format" && typeof b.value.input == "string" ? _(y) : _(y, d.modelType) : y : null, ie = (y) => {
    a("update:model-value", y);
  }, se = (y) => Array.isArray(h.value) ? S.value.enabled ? h.value.map((K) => y(K)) : [y(h.value[0]), h.value[1] ? y(h.value[1]) : null] : y(r(h.value)), Me = () => {
    if (Array.isArray(h.value)) {
      const y = E(h.value[0], d.weekStart), K = h.value[1] ? E(h.value[1], d.weekStart) : [];
      return [y.map((pe) => u(pe)), K.map((pe) => u(pe))];
    }
    return E(h.value, d.weekStart).map((y) => u(y));
  }, fe = (y) => ie(r(se(y))), G = () => a("update:model-value", Me());
  return {
    checkBeforeEmit: () => h.value ? Y.value.enabled ? Y.value.partialRange ? h.value.length >= 1 : h.value.length === 2 : !!h.value : !1,
    parseExternalModelValue: oe,
    formatInputValue: ee,
    emitModelValue: () => (ee(), d.monthPicker ? fe(I) : d.timePicker ? fe(T) : d.yearPicker ? fe(he) : d.weekPicker ? G() : ie(ae()))
  };
}, Et = () => {
  const {
    defaults: { transitions: e }
  } = Ae(), M = j(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), m = j(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: M, showTransition: !!e.value, menuTransition: m };
}, Vt = (e) => {
  const {
    today: M,
    time: m,
    modelValue: r,
    defaults: { range: c }
  } = Ae(), { setTimeModelValue: u } = Ie();
  tt(
    c,
    (a, s) => {
      a.enabled !== s.enabled && u(m, r.value, M, c.value.enabled);
    },
    { deep: !0 }
  ), tt(
    r,
    (a, s) => {
      e && JSON.stringify(a ?? {}) !== JSON.stringify(s ?? {}) && e();
    },
    { deep: !0 }
  );
}, Ue = () => {
  const {
    defaults: { safeDates: e, range: M, multiDates: m, filters: r, timeConfig: c },
    rootProps: u,
    getDate: a
  } = Ae(), { getMapKeyType: s, getMapDate: d, errorMapper: O, convertType: A } = Ie(), { isDateBefore: Y, isDateAfter: S, isDateEqual: l, resetDate: b, getDaysInBetween: h, setTimeValue: R, getTimeObj: v, setTime: E } = We(), _ = (n) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(a(n)) : !!d(n, e.value.disabledDates) : !1, g = (n) => e.value.maxDate ? u.yearPicker ? he(n) > he(e.value.maxDate) : S(n, e.value.maxDate) : !1, T = (n) => e.value.minDate ? u.yearPicker ? he(n) < he(e.value.minDate) : Y(n, e.value.minDate) : !1, I = (n) => {
    if (!n) return !1;
    const o = g(n), k = T(n), i = _(n), f = r.value.months.map((Qe) => +Qe).includes(Pe(n)), N = r.value.weekDays?.length ? r.value.weekDays.some((Qe) => +Qe === gn(n)) : !1, Q = V(n), ge = he(n), be = ge < +u.yearRange[0] || ge > +u.yearRange[1];
    return !(o || k || i || f || be || N || Q);
  }, C = (n, o) => Y(...G(e.value.minDate, n, o)) || l(...G(e.value.minDate, n, o)), $ = (n, o) => S(...G(e.value.maxDate, n, o)) || l(...G(e.value.maxDate, n, o)), p = (n, o, k) => {
    let i = !1;
    return e.value.maxDate && k && $(n, o) && (i = !0), e.value.minDate && !k && C(n, o) && (i = !0), i;
  }, w = (n, o, k, i) => {
    let F = !1;
    return i && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? F = p(n, o, k) : (e.value.minDate && C(n, o) || e.value.maxDate && $(n, o)) && (F = !0) : F = !0, F;
  }, V = (n) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !d(
    n,
    e.value.allowedDates,
    s(u.monthPicker, u.yearPicker)
  ) : !1, L = (n) => !I(n), H = (n) => M.value.noDisabledRange ? !pa({ start: n[0], end: n[1] }).some((k) => L(k)) : !0, re = (n) => {
    if (n) {
      const o = he(n);
      return o >= +u.yearRange[0] && o <= u.yearRange[1];
    }
    return !0;
  }, le = (n, o) => !!(Array.isArray(n) && n[o] && (M.value.maxRange || M.value.minRange) && re(n[o])), X = (n, o, k = 0) => {
    if (le(o, k) && re(n)) {
      const i = hn(n, o[k]), F = h(o[k], n), f = F.length === 1 ? 0 : F.filter((Q) => L(Q)).length, N = Math.abs(i) - (M.value.minMaxRawRange ? 0 : f);
      if (M.value.minRange && M.value.maxRange)
        return N >= +M.value.minRange && N <= +M.value.maxRange;
      if (M.value.minRange) return N >= +M.value.minRange;
      if (M.value.maxRange) return N <= +M.value.maxRange;
    }
    return !0;
  }, x = () => !c.value.enableTimePicker || u.monthPicker || u.yearPicker || c.value.ignoreTimeValidation, ae = (n) => Array.isArray(n) ? [n[0] ? R(n[0]) : null, n[1] ? R(n[1]) : null] : R(n), q = (n, o, k) => o ? n.find(
    (i) => +i.hours === lt(o) && i.minutes === "*" ? !0 : +i.minutes === st(o) && +i.hours === lt(o)
  ) && k : !1, oe = (n, o, k) => {
    const [i, F] = n, [f, N] = o;
    return !q(i, f, k) && !q(F, N, k) && k;
  }, z = (n, o) => {
    const k = Array.isArray(o) ? o : [o];
    return Array.isArray(u.disabledTimes) ? Array.isArray(u.disabledTimes[0]) ? oe(u.disabledTimes, k, n) : !k.some((i) => q(u.disabledTimes, i, n)) : n;
  }, ee = (n, o) => {
    const k = Array.isArray(o) ? [v(o[0]), o[1] ? v(o[1]) : void 0] : v(o), i = !u.disabledTimes(k);
    return n && i;
  }, me = (n, o) => u.disabledTimes ? Array.isArray(u.disabledTimes) ? z(o, n) : ee(o, n) : o, Z = (n) => {
    let o = !0;
    if (!n || x()) return !0;
    const k = !e.value.minDate && !e.value.maxDate ? ae(n) : n;
    return (u.maxTime || e.value.maxDate) && (o = B(
      u.maxTime,
      e.value.maxDate,
      "max",
      A(k),
      o
    )), (u.minTime || e.value.minDate) && (o = B(
      u.minTime,
      e.value.minDate,
      "min",
      A(k),
      o
    )), me(n, o);
  }, ie = (n) => {
    if (!u.monthPicker) return !0;
    let o = !0;
    const k = a(b(n));
    if (e.value.minDate && e.value.maxDate) {
      const i = a(b(e.value.minDate)), F = a(b(e.value.maxDate));
      return S(k, i) && Y(k, F) || l(k, i) || l(k, F);
    }
    if (e.value.minDate) {
      const i = a(b(e.value.minDate));
      o = S(k, i) || l(k, i);
    }
    if (e.value.maxDate) {
      const i = a(b(e.value.maxDate));
      o = Y(k, i) || l(k, i);
    }
    return o;
  }, se = j(() => (n) => !c.value.enableTimePicker || c.value.ignoreTimeValidation ? !0 : Z(n)), Me = j(() => (n) => u.monthPicker ? Array.isArray(n) && (M.value.enabled || m.value.enabled) ? !n.filter((k) => !ie(k)).length : ie(n) : !0), fe = (n, o, k) => {
    if (!o || k && !e.value.maxDate || !k && !e.value.minDate) return !1;
    const i = k ? ht(n, 1) : Bt(n, 1), F = [Pe(i), he(i)];
    return k ? !$(...F) : !C(...F);
  }, G = (n, o, k) => [_e(a(n), { date: 1 }), _e(a(), { month: o, year: k, date: 1 })], ce = (n, o, k, i) => {
    if (!n) return !0;
    if (i) {
      const F = k === "max" ? Mt(n, o) : yt(n, o), f = { seconds: 0, milliseconds: 0 };
      return F || kt(_e(n, f), _e(o, f));
    }
    return k === "max" ? n.getTime() <= o.getTime() : n.getTime() >= o.getTime();
  }, B = (n, o, k, i, F) => {
    if (Array.isArray(i)) {
      const N = y(n, i[0], o), Q = y(n, i[1], o);
      return ce(i[0], N, k, !!o) && ce(i[1], Q, k, !!o) && F;
    }
    const f = y(n, i, o);
    return ce(i, f, k, !!o) && F;
  }, y = (n, o, k) => n ? E(n, o) : a(k ?? o);
  return {
    isDisabled: L,
    validateDate: I,
    validateMonthYearInRange: w,
    isDateRangeAllowed: H,
    checkMinMaxRange: X,
    isValidTime: Z,
    validateMonthYear: fe,
    validateMinDate: C,
    validateMaxDate: $,
    isValidDate: (n) => Array.isArray(n) ? Qt(n[0]) && (n[1] ? Qt(n[1]) : !0) : n ? Qt(n) : !1,
    checkPartialRangeValue: (n) => {
      if (n) return null;
      throw new Error(O.prop("partial-range"));
    },
    checkRangeEnabled: (n, o) => {
      if (o) return n();
      throw new Error(O.prop("range"));
    },
    checkMinMaxValue: (n, o, k) => {
      const i = k != null, F = o != null;
      if (!i && !F) return !1;
      const f = +k, N = +o;
      return i && F ? +n > f || +n < N : i ? +n > f : F ? +n < N : !1;
    },
    isTimeValid: se,
    isMonthValid: Me
  };
}, En = (e) => {
  const {
    rootEmit: M,
    rootProps: m,
    defaults: { timeConfig: r, flow: c }
  } = Ae(), u = ve(0), a = Jt({
    [gt.timePicker]: !r.value.enableTimePicker || m.timePicker || m.monthPicker,
    [gt.calendar]: !1,
    [gt.header]: !1
  }), s = j(() => m.monthPicker || m.timePicker), d = (l) => {
    if (c.value?.steps?.length) {
      if (!l && s.value) return S();
      a[l] = !0, Object.keys(a).filter((b) => !a[b]).length || S();
    }
  }, O = () => {
    c.value?.steps?.length && u.value !== -1 && (u.value += 1, M("flow-step", u.value), S()), c.value?.steps?.length === u.value && Ke().then(() => A());
  }, A = () => {
    u.value = -1;
  }, Y = (l, b, ...h) => {
    c.value?.steps[u.value] === l && e.value && e.value[b]?.(...h);
  }, S = (l = 0) => {
    l && (u.value += l), Y(He.month, "toggleMonthPicker", !0), Y(He.year, "toggleYearPicker", !0), Y(He.calendar, "toggleTimePicker", !1, !0), Y(He.time, "toggleTimePicker", !0, !0);
    const b = c.value?.steps[u.value];
    (b === He.hours || b === He.minutes || b === He.seconds) && Y(b, "toggleTimePicker", !0, !0, b);
  };
  return { childMount: d, updateFlowStep: O, resetFlow: A, handleFlow: S, flowStep: u };
};
function va(e) {
  return (M = {}) => {
    const m = M.width ? String(M.width) : e.defaultWidth;
    return e.formats[m] || e.formats[e.defaultWidth];
  };
}
function Ct(e) {
  return (M, m) => {
    const r = m?.context ? String(m.context) : "standalone";
    let c;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, s = m?.width ? String(m.width) : a;
      c = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, s = m?.width ? String(m.width) : e.defaultWidth;
      c = e.values[s] || e.values[a];
    }
    const u = e.argumentCallback ? e.argumentCallback(M) : M;
    return c[u];
  };
}
function xt(e) {
  return (M, m = {}) => {
    const r = m.width, c = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], u = M.match(c);
    if (!u)
      return null;
    const a = u[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(s) ? Fn(s, (Y) => Y.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      Vn(s, (Y) => Y.test(a))
    );
    let O;
    O = e.valueCallback ? e.valueCallback(d) : d, O = m.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      m.valueCallback(O)
    ) : O;
    const A = M.slice(a.length);
    return { value: O, rest: A };
  };
}
function Vn(e, M) {
  for (const m in e)
    if (Object.prototype.hasOwnProperty.call(e, m) && M(e[m]))
      return m;
}
function Fn(e, M) {
  for (let m = 0; m < e.length; m++)
    if (M(e[m]))
      return m;
}
function Nn(e) {
  return (M, m = {}) => {
    const r = M.match(e.matchPattern);
    if (!r) return null;
    const c = r[0], u = M.match(e.parsePattern);
    if (!u) return null;
    let a = e.valueCallback ? e.valueCallback(u[0]) : u[0];
    a = m.valueCallback ? m.valueCallback(a) : a;
    const s = M.slice(c.length);
    return { value: a, rest: s };
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
}, Ln = (e, M, m) => {
  let r;
  const c = Wn[e];
  return typeof c == "string" ? r = c : M === 1 ? r = c.one : r = c.other.replace("{{count}}", M.toString()), m?.addSuffix ? m.comparison && m.comparison > 0 ? "in " + r : r + " ago" : r;
}, Hn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Kn = (e, M, m, r) => Hn[e], jn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, zn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qn = {
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
}, Un = {
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
}, Jn = {
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
}, Gn = (e, M) => {
  const m = Number(e), r = m % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return m + "st";
      case 2:
        return m + "nd";
      case 3:
        return m + "rd";
    }
  return m + "th";
}, Xn = {
  ordinalNumber: Gn,
  era: Ct({
    values: jn,
    defaultWidth: "wide"
  }),
  quarter: Ct({
    values: zn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ct({
    values: qn,
    defaultWidth: "wide"
  }),
  day: Ct({
    values: Un,
    defaultWidth: "wide"
  }),
  dayPeriod: Ct({
    values: Qn,
    defaultWidth: "wide",
    formattingValues: Jn,
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
  ordinalNumber: Nn({
    matchPattern: Zn,
    parsePattern: er,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xt({
    matchPatterns: tr,
    defaultMatchWidth: "wide",
    parsePatterns: ar,
    defaultParseWidth: "any"
  }),
  quarter: xt({
    matchPatterns: nr,
    defaultMatchWidth: "wide",
    parsePatterns: rr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xt({
    matchPatterns: lr,
    defaultMatchWidth: "wide",
    parsePatterns: or,
    defaultParseWidth: "any"
  }),
  day: xt({
    matchPatterns: sr,
    defaultMatchWidth: "wide",
    parsePatterns: ur,
    defaultParseWidth: "any"
  }),
  dayPeriod: xt({
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
}, mr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, fr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, pr = {
  date: va({
    formats: vr,
    defaultWidth: "full"
  }),
  time: va({
    formats: mr,
    defaultWidth: "full"
  }),
  dateTime: va({
    formats: fr,
    defaultWidth: "full"
  })
}, hr = {
  code: "en-US",
  formatDistance: Ln,
  formatLong: pr,
  formatRelative: Kn,
  localize: Xn,
  match: dr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Da = {
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
  escClose: !0,
  spaceConfirm: !0,
  monthChangeOnArrows: !0,
  monthChangeOnScroll: !0
}, Ma = {
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: "open",
  selectOnFocus: !1,
  rangeSeparator: " - ",
  escClose: !0,
  format: void 0,
  maskFormat: void 0,
  applyOnBlur: !1
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
  nowBtnLabel: "Now",
  nowBtnRound: void 0
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
}, _a = {
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
  day: "d",
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
  weekStart: Ea.Monday,
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
}, Aa = {
  name: void 0,
  required: !1,
  autocomplete: "off",
  state: void 0,
  clearable: !0,
  alwaysClearable: !1,
  hideInputIcon: !1,
  id: void 0,
  inputmode: "none"
}, zt = {
  type: "local",
  hideOnOffsetDates: !1,
  label: "W"
}, Pr = (e) => {
  const { getMapKey: M, getMapKeyType: m, getTimeObjFromCurrent: r } = Ie();
  function c(x, ae) {
    let q;
    return e.timezone ? q = new Cn(x ?? /* @__PURE__ */ new Date(), e.timezone) : q = x ? new Date(x) : /* @__PURE__ */ new Date(), ae ? _e(q, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : q;
  }
  const u = () => {
    const x = H.value.enableSeconds ? ":ss" : "", ae = H.value.enableMinutes ? ":mm" : "";
    return H.value.is24 ? `HH${ae}${x}` : `hh${ae}${x} aa`;
  }, a = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? u() : e.weekPicker ? `${I.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : H.value.enableTimePicker ? `MM/dd/yyyy, ${u()}` : "MM/dd/yyyy", s = (x) => r(c(), x, H.value.enableSeconds), d = () => p.value.enabled ? H.value.startTime && Array.isArray(H.value.startTime) ? [s(H.value.startTime[0]), s(H.value.startTime[1])] : null : H.value.startTime && !Array.isArray(H.value.startTime) ? s(H.value.startTime) : null, O = (x) => x ? typeof x == "boolean" ? x ? 2 : 0 : Math.max(+x, 2) : 0, A = (x) => {
    const ae = m(e.monthPicker, e.yearPicker);
    return new Map(
      x.map((q) => {
        const oe = c(q, Y.value);
        return [M(oe, ae), oe];
      })
    );
  }, Y = j(() => e.monthPicker || e.yearPicker || e.quarterPicker), S = j(() => {
    const x = typeof e.multiCalendars == "object" && e.multiCalendars, ae = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...ae, count: O(!1) };
    const q = x ? e.multiCalendars : {}, oe = x ? q.count ?? !0 : e.multiCalendars, z = O(oe);
    return Object.assign(ae, q, { count: z });
  }), l = j(() => d()), b = j(() => ({ ...kr, ...e.ariaLabels })), h = j(() => ({ ...wr, ...e.filters })), R = j(() => typeof e.transitions == "boolean" ? e.transitions ? _a : !1 : { ..._a, ...e.transitions }), v = j(() => ({ ...br, ...e.actionRow })), E = j(() => typeof e.textInput == "object" ? {
    ...Ma,
    ...e.textInput,
    format: typeof e.textInput.format == "string" ? e.textInput.format : V.value.input,
    pattern: e.textInput.format ?? V.value.input,
    enabled: !0
  } : {
    ...Ma,
    format: V.value.input,
    pattern: V.value.input,
    enabled: e.textInput
  }), _ = j(() => {
    const x = { input: !1 };
    return typeof e.inline == "object" ? { ...x, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...x
    };
  }), g = j(() => ({ ...gr, ...e.config })), T = j(() => typeof e.highlight == "function" ? e.highlight : {
    ...yr,
    ...e.highlight
  }), I = j(() => typeof e.weekNumbers == "object" ? {
    type: e.weekNumbers?.type ?? zt.type,
    hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? zt.hideOnOffsetDates,
    label: e.weekNumbers.label ?? zt.label
  } : e.weekNumbers ? zt : void 0), C = j(() => typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
    enabled: !!e.multiDates,
    limit: e.multiDates?.limit ? +e.multiDates.limit : null,
    dragSelect: e.multiDates?.dragSelect ?? !0
  }), $ = j(() => ({
    minDate: e.minDate ? c(e.minDate) : null,
    maxDate: e.maxDate ? c(e.maxDate) : null,
    disabledDates: Array.isArray(e.disabledDates) ? A(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? A(e.allowedDates) : null,
    highlight: typeof T.value == "object" && Array.isArray(T.value.dates) ? A(T.value.dates) : T.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((x) => {
        const ae = c(x.date);
        return [M(ae, wt.DATE), x];
      })
    ) : null
  })), p = j(() => typeof e.range == "object" ? { enabled: !0, ...Da, ...e.range } : {
    enabled: e.range,
    ...Da
  }), w = j(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((ae) => {
        const q = ae, oe = e.ui[q];
        if (q === "dayClass") return [q, e.ui[q]];
        const z = typeof e.ui[q] == "string" ? { [oe]: !0 } : Object.fromEntries(oe.map((ee) => [ee, !0]));
        return [ae, z];
      })
    )
  })), V = j(() => ({
    ...Dr,
    ...e.formats,
    input: e.formats?.input ?? a(),
    preview: e.formats?.preview ?? a()
  })), L = j(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), H = j(() => ({ ...Mr, ...e.timeConfig })), re = j(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), le = j(() => {
    const x = E.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Aa, inputmode: x, ...e.inputAttrs } : { ...Aa, inputmode: x };
  }), X = j(() => ({
    offset: e.floating?.offset ?? 10,
    arrow: e.floating?.arrow ?? !0,
    strategy: e.floating?.strategy ?? void 0,
    placement: e.floating?.placement ?? void 0
  }));
  return {
    transitions: R,
    multiCalendars: S,
    startTime: l,
    ariaLabels: b,
    filters: h,
    actionRow: v,
    textInput: E,
    inline: _,
    config: g,
    highlight: T,
    weekNumbers: I,
    range: p,
    safeDates: $,
    multiDates: C,
    ui: w,
    formats: V,
    teleport: L,
    timeConfig: H,
    flow: re,
    inputAttrs: le,
    floatingConfig: X,
    getDate: c
  };
}, Ie = () => {
  const e = (g, T) => qe(g, T ?? wt.DATE), M = (g, T) => g ? wt.MONTH_AND_YEAR : T ? wt.YEAR : wt.DATE, m = (g, T, I) => T.get(e(g, I)), r = (g) => g, c = (g) => g === 0 ? g : !g || Number.isNaN(+g) ? null : +g, u = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), a = (g, T) => {
    let I = [...document.querySelectorAll(u())];
    I = I.filter(($) => !g.contains($) || "datepicker-instance" in $.dataset);
    const C = I.indexOf(g);
    if (C >= 0 && (T ? C - 1 >= 0 : C + 1 <= I.length))
      return I[C + (T ? -1 : 1)];
  }, s = (g) => String(g).padStart(2, "0"), d = (g, T) => g?.querySelector(`[data-dp-element="${T}"]`), O = (g, T, I = !1) => {
    g && T.allowStopPropagation && (I && g.stopImmediatePropagation(), g.stopPropagation());
  }, A = (g, T, I = !1, C) => {
    if (g.key === Se.enter || g.key === Se.space)
      return I && g.preventDefault(), T();
    if (C) return C(g);
  }, Y = (g, T) => {
    T.allowStopPropagation && g.stopPropagation(), T.allowPreventDefault && g.preventDefault();
  }, S = (g) => {
    if (g)
      return [...g.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, l = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, b = (g) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][g], h = (g) => {
    const T = [], I = (C) => C.filter(($) => !!$);
    for (let C = 0; C < g.length; C += 3) {
      const $ = [g[C], g[C + 1], g[C + 2]];
      T.push(I($));
    }
    return T;
  }, R = {
    prop: (g) => `"${g}" prop must be enabled!`,
    dateArr: (g) => `You need to use array as "model-value" binding in order to support "${g}"`
  }, v = (g, T, I, C, $) => {
    const p = {
      hours: lt,
      minutes: st,
      seconds: dt
    };
    if (!T) return C ? [p[g](I), p[g](I)] : p[g](I);
    if (Array.isArray(T) && C) {
      const w = T[0] ?? I, V = T[1];
      return [p[g](w), V ? p[g](V) : $[g][1] ?? p[g](I)];
    }
    return Array.isArray(T) && !C ? p[g](T[T.length - 1] ?? I) : p[g](T);
  };
  return {
    getMapKey: e,
    getMapKeyType: M,
    getMapDate: m,
    convertType: r,
    getNumVal: c,
    findNextFocusableElement: a,
    padZero: s,
    getElWithin: d,
    checkStopPropagation: O,
    checkKeyDown: A,
    handleEventPropagation: Y,
    findFocusableEl: S,
    isTouchDevice: l,
    hoursToAmPmHours: b,
    getGroupedList: h,
    setTimeModelValue: (g, T, I, C) => {
      g.hours = v("hours", T, I, C, g), g.minutes = v("minutes", T, I, C, g), g.seconds = v("seconds", T, I, C, g);
    },
    getTimeObjFromCurrent: (g, T, I) => {
      const C = {
        hours: lt(g),
        minutes: st(g),
        seconds: I ? dt(g) : 0
      };
      return Object.assign(C, T);
    },
    errorMapper: R
  };
}, We = () => {
  const { getDate: e } = Ae(), { getMapDate: M, getGroupedList: m } = Ie(), r = (p, w) => {
    if (!p) return e();
    const V = e(p), L = _e(V, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return w ? bn(L) : L;
  }, c = (p, w) => {
    const V = e(w);
    return _e(V, {
      hours: +(p.hours ?? lt(V)),
      minutes: +(p.minutes ?? st(V)),
      seconds: +(p.seconds ?? dt(V)),
      milliseconds: 0
    });
  }, u = (p, w) => {
    const V = Gt(p, { weekStartsOn: +w }), L = ha(p, { weekStartsOn: +w });
    return [V, L];
  }, a = (p, w) => !p || !w ? !1 : Mt(r(p), r(w)), s = (p, w) => !p || !w ? !1 : kt(r(p), r(w)), d = (p, w) => !p || !w ? !1 : yt(r(p), r(w)), O = (p, w, V) => p?.[0] && p?.[1] ? d(V, p[0]) && a(V, p[1]) : p?.[0] && w ? d(V, p[0]) && a(V, w) || a(V, p[0]) && d(V, w) : !1, A = (p, w) => {
    const V = d(p, w) ? w : p, L = d(w, p) ? w : p;
    return pa({ start: V, end: L });
  }, Y = (p) => `dp-${qe(p, "yyyy-MM-dd")}`, S = (p) => r(_e(e(p), { date: 1 })), l = (p, w) => {
    if (w) {
      const V = he(e(w));
      if (V > p) return 12;
      if (V === p) return Pe(e(w));
    }
  }, b = (p, w) => {
    if (w) {
      const V = he(e(w));
      return V < p ? -1 : V === p ? Pe(e(w)) : void 0;
    }
  }, h = (p) => {
    if (p) return he(e(p));
  }, R = (p) => ({
    hours: lt(p),
    minutes: st(p),
    seconds: dt(p)
  });
  return {
    resetDateTime: r,
    groupListAndMap: (p, w) => m(p).map((V) => V.map((L) => {
      const { active: H, disabled: re, isBetween: le, highlighted: X } = w(L);
      return {
        ...L,
        active: H,
        disabled: re,
        className: {
          dp__overlay_cell_active: H,
          dp__overlay_cell: !H,
          dp__overlay_cell_disabled: re,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: re && H,
          dp__cell_in_between: le,
          "dp--highlighted": X
        }
      };
    })),
    setTime: c,
    getWeekFromDate: u,
    isDateAfter: d,
    isDateBefore: a,
    isDateBetween: O,
    isDateEqual: s,
    getDaysInBetween: A,
    getCellId: Y,
    resetDate: S,
    getMinMonth: l,
    getMaxMonth: b,
    getYearFromDate: h,
    getTimeObj: R,
    setTimeValue: (p) => _e(e(), R(p)),
    sanitizeTime: (p, w, V) => w && (V || V === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((L) => L === w ? [L, V] : [L, Number.isNaN(+p[L]) ? void 0 : +p[L]])
    ) : {
      hours: Number.isNaN(+p.hours) ? void 0 : +p.hours,
      minutes: Number.isNaN(+p.minutes) ? void 0 : +p.minutes,
      seconds: Number.isNaN(+(p.seconds ?? "")) ? void 0 : +p.seconds
    },
    getBeforeAndAfterInRange: (p, w) => {
      const V = yn(r(w), p), L = it(r(w), p);
      return { before: V, after: L };
    },
    isModelAuto: (p) => Array.isArray(p) ? !!p[0] && !!p[1] : !1,
    matchDate: (p, w) => p ? w ? w instanceof Map ? !!M(p, w) : w(e(p)) : !1 : !0,
    checkHighlightMonth: (p, w, V) => typeof p == "function" ? p({ month: w, year: V }) : p.months.some((L) => L.month === w && L.year === V),
    checkHighlightYear: (p, w) => typeof p == "function" ? p(w) : p.years.includes(w)
  };
}, Xt = () => {
  const {
    defaults: { config: e }
  } = Ae(), M = ve(0);
  Ee(() => {
    m(), globalThis.addEventListener("resize", m, { passive: !0 });
  }), bt(() => {
    globalThis.removeEventListener("resize", m);
  });
  const m = () => {
    M.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: j(() => M.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, mt = () => {
  const {
    getDate: e,
    state: M,
    modelValue: m,
    rootProps: r,
    defaults: { formats: c, textInput: u }
  } = Ae(), a = (R) => qe(Ze(e(), R), c.value.year, { locale: r.locale }), s = (R) => qe(kn(e(), R), c.value.month, { locale: r.locale }), d = (R) => qe(R, c.value.weekDay, { locale: r.locale }), O = (R) => qe(R, c.value.quarter, { locale: r.locale }), A = (R, v) => [R, v].map((E) => O(E)).join("-"), Y = (R) => qe(R, c.value.day, { locale: r.locale }), S = (R, v, E) => {
    const _ = E ? c.value.preview : c.value.input;
    if (!R) return "";
    if (typeof _ == "function") return _(R);
    const g = v ?? _, T = { locale: r.locale };
    return Array.isArray(R) ? `${qe(R[0], g, T)}${r.modelAuto && !R[1] ? "" : u.value.rangeSeparator}${R[1] ? qe(R[1], g, T) : ""}` : qe(R, g, T);
  }, l = () => {
    const R = (v) => qe(v, u.value.format);
    return Array.isArray(m.value) ? `${R(m.value[0])} ${u.value.rangeSeparator} ${m.value[1] ? R(m.value[1]) : ""}` : "";
  };
  return {
    formatYear: a,
    formatMonth: s,
    formatWeekDay: d,
    formatQuarter: O,
    formatSelectedDate: S,
    formatForTextInput: () => M.isInputFocused && m.value ? Array.isArray(m.value) ? l() : qe(m.value, u.value.format) : S(m.value),
    formatPreview: (R) => S(R, void 0, !0),
    formatQuarterText: A,
    formatDay: Y
  };
}, Zt = () => {
  const { rootProps: e } = Ae(), { formatYear: M, formatMonth: m } = mt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => ({
      text: m(a),
      value: a
    })),
    getYears: () => {
      const a = [];
      for (let s = +e.yearRange[0]; s <= +e.yearRange[1]; s++)
        a.push({ value: +s, text: M(s) });
      return e.reverseYears ? a.reverse() : a;
    },
    isOutOfYearRange: (a) => a < +e.yearRange[0] || a > +e.yearRange[1]
  };
}, Tr = (e) => ({
  openMenu: () => e.value?.openMenu(),
  closeMenu: () => e.value?.closeMenu(),
  selectDate: () => e.value?.selectDate(),
  clearValue: () => e.value?.clearValue(),
  formatInputValue: () => e.value?.formatInputValue(),
  updateInternalModelValue: (S) => e.value?.updateInternalModelValue(S),
  setMonthYear: (S, l) => e.value?.setMonthYear(S, l),
  parseModel: () => e.value?.parseModel(),
  switchView: (S, l) => e.value?.switchView(S, l),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu()
}), At = () => ({
  boolHtmlAttribute: (M) => M ? !0 : void 0
}), $r = () => {
  const {
    getDate: e,
    rootProps: M,
    defaults: { textInput: m, startTime: r, timeConfig: c }
  } = Ae(), { getTimeObjFromCurrent: u } = Ie(), a = ve(!1), s = j(
    () => Array.isArray(r.value) ? r.value[0] : r.value ?? u(e(), {}, c.value.enableSeconds)
  ), d = (S, l, b) => {
    const h = ma(S, l.slice(0, S.length), e(), { locale: M.locale });
    return Qt(h) && wn(h) ? b || a.value ? h : _e(h, {
      hours: +s.value.hours,
      minutes: +s.value.minutes,
      seconds: +(s.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: a,
    parseFreeInput: (S, l) => {
      if (typeof m.value.pattern == "string")
        return d(S, m.value.pattern, l);
      if (Array.isArray(m.value.pattern)) {
        let b = null;
        for (const h of m.value.pattern)
          if (b = d(S, h, l), b)
            break;
        return b;
      }
      return typeof m.value.pattern == "function" ? m.value.pattern(S) : null;
    },
    applyMaxValues: (S, l) => {
      const b = {
        MM: 12,
        DD: 31,
        hh: 23,
        mm: 59,
        ss: 59
      };
      let h = "", R = 0;
      for (let v = 0; v < l.length; v++) {
        const E = l[v], _ = E.length, g = S.slice(R, R + _);
        if (!g) break;
        if (g.length < _)
          h += g;
        else {
          let T = Number.parseInt(g, 10);
          b[E] && T > b[E] && (T = b[E]), h += T.toString().padStart(_, "0").slice(0, _);
        }
        R += _;
      }
      return h;
    },
    createMaskedValue: (S, l) => {
      const b = /(YYYY|MM|DD|hh|mm|ss)/g, h = [...l.matchAll(b)].map((g) => g[0]), R = l.replace(b, "|").split("|").filter(Boolean), v = h.map((g) => g.length);
      let E = "", _ = 0;
      for (let g = 0; g < h.length; g++) {
        const T = v[g], I = S.slice(_, _ + T);
        if (!I) break;
        E += I, I.length === T && R[g] && (E += R[g]), _ += T;
      }
      return E;
    }
  };
};
var at = /* @__PURE__ */ ((e) => (e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e))(at || {});
const Va = [
  { name: "trigger", use: [
    "input"
    /* Input */
  ] },
  { name: "input-icon", use: [
    "input"
    /* Input */
  ] },
  { name: "clear-icon", use: [
    "input"
    /* Input */
  ] },
  { name: "dp-input", use: [
    "input"
    /* Input */
  ] },
  { name: "clock-icon", use: [
    "time-picker",
    "time-input",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "arrow-left", use: [
    "date-picker-header",
    "pass-trough",
    "year-mode"
    /* YearMode */
  ] },
  { name: "arrow-right", use: [
    "date-picker-header",
    "pass-trough",
    "year-mode"
    /* YearMode */
  ] },
  {
    name: "arrow-up",
    use: [
      "time-picker",
      "time-input",
      "date-picker-header",
      "pass-trough"
      /* PassTrough */
    ]
  },
  {
    name: "arrow-down",
    use: [
      "time-picker",
      "time-input",
      "date-picker-header",
      "pass-trough"
      /* PassTrough */
    ]
  },
  {
    name: "calendar-icon",
    use: [
      "date-picker-header",
      "time-picker",
      "pass-trough",
      "year-mode"
      /* YearMode */
    ]
  },
  { name: "day", use: [
    "calendar",
    "pass-trough"
    /* PassTrough */
  ] },
  {
    name: "month-overlay-value",
    use: [
      "date-picker-header",
      "pass-trough",
      "month-picker"
      /* MonthPicker */
    ]
  },
  {
    name: "year-overlay-value",
    use: [
      "date-picker-header",
      "pass-trough",
      "year-mode",
      "year-picker"
      /* YearPicker */
    ]
  },
  { name: "year-overlay", use: [
    "date-picker-header",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "month-overlay", use: [
    "date-picker-header",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "month-overlay-header", use: [
    "date-picker-header",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "year-overlay-header", use: [
    "date-picker-header",
    "pass-trough"
    /* PassTrough */
  ] },
  {
    name: "hours-overlay-value",
    use: [
      "time-input",
      "time-picker",
      "pass-trough"
      /* PassTrough */
    ]
  },
  {
    name: "hours-overlay-header",
    use: [
      "time-input",
      "time-picker",
      "pass-trough"
      /* PassTrough */
    ]
  },
  {
    name: "minutes-overlay-value",
    use: [
      "time-input",
      "time-picker",
      "pass-trough"
      /* PassTrough */
    ]
  },
  {
    name: "minutes-overlay-header",
    use: [
      "time-input",
      "time-picker",
      "pass-trough"
      /* PassTrough */
    ]
  },
  {
    name: "seconds-overlay-value",
    use: [
      "time-input",
      "time-picker",
      "pass-trough"
      /* PassTrough */
    ]
  },
  {
    name: "seconds-overlay-header",
    use: [
      "time-input",
      "time-picker",
      "pass-trough"
      /* PassTrough */
    ]
  },
  { name: "hours", use: [
    "time-input",
    "time-picker",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "minutes", use: [
    "time-input",
    "time-picker",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "seconds", use: [
    "time-input",
    "time-picker",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "month", use: [
    "date-picker-header",
    "time-picker",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "year", use: [
    "date-picker-header",
    "time-picker",
    "pass-trough",
    "year-mode"
    /* YearMode */
  ] },
  { name: "action-buttons", use: [
    "action-row"
    /* ActionRow */
  ] },
  { name: "action-preview", use: [
    "action-row"
    /* ActionRow */
  ] },
  { name: "calendar-header", use: [
    "calendar",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "marker-tooltip", use: [
    "calendar",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "action-extra", use: [
    "menu"
    /* Menu */
  ] },
  { name: "time-picker-overlay", use: [
    "time-picker",
    "time-picker",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "am-pm-button", use: [
    "time-picker",
    "time-input",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "left-sidebar", use: [
    "menu"
    /* Menu */
  ] },
  { name: "right-sidebar", use: [
    "menu"
    /* Menu */
  ] },
  {
    name: "month-year",
    use: [
      "date-picker-header",
      "pass-trough",
      "month-picker",
      "year-picker"
      /* YearPicker */
    ]
  },
  { name: "time-picker", use: [
    "date-picker",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "action-row", use: [
    "action-row"
    /* ActionRow */
  ] },
  { name: "marker", use: [
    "calendar",
    "pass-trough"
    /* PassTrough */
  ] },
  { name: "quarter", use: [
    "quarter-picker",
    "pass-trough"
    /* PassTrough */
  ] },
  {
    name: "top-extra",
    use: [
      "date-picker-header",
      "pass-trough",
      "month-picker",
      "quarter-picker",
      "year-picker"
      /* YearPicker */
    ]
  },
  {
    name: "tp-inline-arrow-up",
    use: [
      "date-picker",
      "time-input",
      "time-picker",
      "pass-trough"
      /* PassTrough */
    ]
  },
  {
    name: "tp-inline-arrow-down",
    use: [
      "date-picker",
      "time-input",
      "time-picker",
      "pass-trough"
      /* PassTrough */
    ]
  },
  { name: "arrow", use: [
    "menu"
    /* Menu */
  ] },
  { name: "menu-header", use: [
    "menu"
    /* Menu */
  ] }
], rt = (e, M) => Va.filter((m) => e[m.name] && m.use.includes(M)).map((m) => m.name), Fa = (e, M) => Va.map((m) => m.name).concat(M?.filter((m) => m.slot).map((m) => m.slot) ?? []).filter((m) => !!e[m]), Sr = {
  key: 1,
  class: "dp__input_wrap"
}, Rr = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Cr = {
  key: 1,
  class: "dp--clear-btn"
}, xr = ["aria-label"], Or = /* @__PURE__ */ Ve({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 }
  },
  emits: ["clear", "open", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus", "blur", "real-blur"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, {
      rootEmit: u,
      inputValue: a,
      rootProps: s,
      defaults: { textInput: d, ariaLabels: O, inline: A, config: Y, range: S, multiDates: l, ui: b, inputAttrs: h }
    } = Ae(), { checkMinMaxRange: R, isValidDate: v } = Ue(), { parseFreeInput: E, textPasted: _, createMaskedValue: g, applyMaxValues: T } = $r(), { checkKeyDown: I, checkStopPropagation: C } = Ie(), { boolHtmlAttribute: $ } = At(), p = xe("dp-input"), w = ve(null), V = ve(!1), L = j(
      () => ({
        dp__pointer: !s.disabled && !s.readonly && !d.value.enabled,
        dp__disabled: s.disabled,
        dp__input_readonly: !d.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !h.value.clearable,
        dp__input_icon_pad: !h.value.hideInputIcon,
        dp__input_valid: typeof h.value.state == "boolean" ? h.value.state : !1,
        dp__input_invalid: typeof h.value.state == "boolean" ? !h.value.state : !1,
        dp__input_focus: V.value || c.isMenuOpen,
        dp__input_reg: !d.value.enabled,
        ...b.value.input
      })
    ), H = () => {
      r("set-input-date", null), h && s.autoApply && (r("set-empty-date"), w.value = null);
    }, re = (G) => {
      const { rangeSeparator: ce } = d.value, [B, y] = G.split(`${ce}`);
      if (B) {
        const K = E(B.trim(), a.value), pe = y ? E(y.trim(), a.value) : void 0;
        if (yt(K, pe)) return;
        const $e = K && pe ? [K, pe] : [K];
        R(pe, $e, 0) && (w.value = K ? $e : null);
      }
    }, le = () => {
      _.value = !0;
    }, X = (G) => {
      if (S.value.enabled)
        re(G);
      else if (l.value.enabled) {
        const ce = G.split(";");
        w.value = ce.map((B) => E(B.trim())).filter((B) => !!B);
      } else
        w.value = E(G, a.value);
    }, x = (G) => {
      const ce = typeof G == "string" ? G : G.target?.value, B = d?.value?.maskFormat;
      let y = ce;
      if (typeof B == "string") {
        const K = /(YYYY|MM|DD|hh|mm|ss)/g, $e = [...B.matchAll(K)].map((o) => o[0]), D = ce.replace(/\D/g, ""), n = T(D, $e);
        y = g(n, B);
      }
      y === "" ? H() : (d.value.openMenu && !c.isMenuOpen && r("open"), X(y), r("set-input-date", w.value)), _.value = !1, a.value = y, u("text-input", G, w.value);
    }, ae = (G) => {
      d.value.enabled ? (X(G.target.value), d.value.enterSubmit && v(w.value) && a.value !== "" ? (r("set-input-date", w.value, !0), w.value = null) : d.value.enterSubmit && a.value === "" && (w.value = null, r("clear"))) : z(G);
    }, q = (G, ce) => {
      d.value.enabled && d.value.tabSubmit && !ce && X(G.target.value), d.value.tabSubmit && v(w.value) && a.value !== "" ? (r("set-input-date", w.value, !0, !0), w.value = null) : d.value.tabSubmit && a.value === "" && (w.value = null, r("clear"));
    }, oe = () => {
      V.value = !0, r("focus"), Ke().then(() => {
        d.value.enabled && d.value.selectOnFocus && p.value?.select();
      });
    }, z = (G) => {
      if (C(G, Y.value, !0), d.value.enabled && d.value.openMenu && !A.value.input) {
        if (d.value.openMenu === "open" && !c.isMenuOpen) return r("open");
        if (d.value.openMenu === "toggle") return r("toggle");
      } else d.value.enabled || r("toggle");
    }, ee = () => {
      r("real-blur"), V.value = !1, (!c.isMenuOpen || A.value.enabled && A.value.input) && r("blur"), (s.autoApply && d.value.enabled && w.value && !c.isMenuOpen || d.value.applyOnBlur) && (r("set-input-date", w.value), r("select-date"), w.value = null);
    }, me = (G) => {
      C(G, Y.value, !0), r("clear");
    }, Z = () => {
      r("close");
    }, ie = (G) => {
      if (G.key === "Tab" && q(G), G.key === "Enter" && ae(G), G.key === "Escape" && d.value.escClose && Z(), !d.value.enabled) {
        if (G.code === "Tab") return;
        G.preventDefault();
      }
    }, se = () => {
      p.value?.focus({ preventScroll: !0 });
    }, Me = (G) => {
      w.value = G;
    }, fe = (G) => {
      G.key === Se.tab && q(G, !0);
    };
    return M({
      focusInput: se,
      setParsedDate: Me
    }), (G, ce) => (W(), J("div", { onClick: z }, [
      !G.$slots["dp-input"] && !t(A).enabled ? ne(G.$slots, "trigger", { key: 0 }) : te("", !0),
      !G.$slots.trigger && (!t(A).enabled || t(A).input) ? (W(), J("div", Sr, [
        !G.$slots.trigger && (!t(A).enabled || t(A).enabled && t(A).input) ? ne(G.$slots, "dp-input", {
          key: 0,
          value: t(a),
          isMenuOpen: e.isMenuOpen,
          onInput: x,
          onEnter: ae,
          onTab: q,
          onClear: me,
          onBlur: ee,
          onKeypress: ie,
          onPaste: le,
          onFocus: oe,
          openMenu: () => G.$emit("open"),
          closeMenu: () => G.$emit("close"),
          toggleMenu: () => G.$emit("toggle")
        }, () => [
          ke("input", {
            id: t(h).id,
            ref: "dp-input",
            "data-test-id": "dp-input",
            name: t(h).name,
            class: ye(L.value),
            inputmode: t(h).inputmode,
            placeholder: t(s).placeholder,
            disabled: t($)(t(s).disabled),
            readonly: t($)(t(s).readonly),
            required: t($)(t(h).required),
            value: t(a),
            autocomplete: t(h).autocomplete,
            "aria-label": t(O).input,
            "aria-disabled": t(s).disabled || void 0,
            "aria-invalid": t(h).state === !1 ? !0 : void 0,
            onInput: x,
            onBlur: ee,
            onFocus: oe,
            onKeypress: ie,
            onKeydown: ce[0] || (ce[0] = (B) => ie(B)),
            onPaste: le,
            onInvalid: ce[1] || (ce[1] = (B) => t(u)("invalid", B))
          }, null, 42, Rr)
        ]) : te("", !0),
        ke("div", {
          onClick: ce[4] || (ce[4] = (B) => r("toggle"))
        }, [
          G.$slots["input-icon"] && !t(h).hideInputIcon ? (W(), J("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: ce[2] || (ce[2] = (B) => r("toggle"))
          }, [
            ne(G.$slots, "input-icon")
          ])) : te("", !0),
          !G.$slots["input-icon"] && !t(h).hideInputIcon && !G.$slots["dp-input"] ? (W(), Re(t(It), {
            key: 1,
            "aria-label": t(O)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: ce[3] || (ce[3] = (B) => r("toggle"))
          }, null, 8, ["aria-label"])) : te("", !0)
        ]),
        G.$slots["clear-icon"] && (t(h).alwaysClearable || t(a) && t(h).clearable && !t(s).disabled && !t(s).readonly) ? (W(), J("span", Cr, [
          ne(G.$slots, "clear-icon", { clear: me })
        ])) : te("", !0),
        !G.$slots["clear-icon"] && (t(h).alwaysClearable || t(h).clearable && t(a) && !t(s).disabled && !t(s).readonly) ? (W(), J("button", {
          key: 2,
          "aria-label": t(O)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: ce[5] || (ce[5] = (B) => t(I)(B, () => me(B), !0, fe)),
          onClick: ce[6] || (ce[6] = Dt((B) => me(B), ["prevent"]))
        }, [
          Be(t(xn), { class: "dp__input_icons" })
        ], 40, xr)) : te("", !0)
      ])) : te("", !0)
    ]));
  }
}), Yr = {
  ref: "action-row",
  class: "dp__action_row"
}, Br = ["title"], Ir = {
  ref: "action-buttons-container",
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, Er = ["disabled"], Vr = /* @__PURE__ */ Ve({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { default: 0 }
  },
  emits: ["close-picker", "select-date", "select-now"],
  setup(e, { emit: M }) {
    const m = M, r = e, {
      rootEmit: c,
      rootProps: u,
      modelValue: a,
      defaults: { actionRow: s, multiCalendars: d, inline: O, range: A, multiDates: Y, formats: S }
    } = Ae(), { isTimeValid: l, isMonthValid: b } = Ue(), { formatPreview: h } = mt(), { checkKeyDown: R, convertType: v } = Ie(), { boolHtmlAttribute: E } = At(), _ = xe("action-buttons-container"), g = xe("action-row"), T = ve(!1), I = ve({});
    Ee(() => {
      C(), globalThis.addEventListener("resize", C);
    }), bt(() => {
      globalThis.removeEventListener("resize", C);
    });
    const C = () => {
      T.value = !1, setTimeout(() => {
        const X = _.value?.getBoundingClientRect(), x = g.value?.getBoundingClientRect();
        X && x && (I.value.maxWidth = `${x.width - X.width - 20}px`), T.value = !0;
      }, 0);
    }, $ = j(() => A.value.enabled && !A.value.partialRange && a.value ? a.value.length === 2 : !0), p = j(
      () => !l.value(a.value) || !b.value(a.value) || !$.value
    ), w = () => {
      const X = S.value.preview;
      return u.timePicker || u.monthPicker, X(v(a.value));
    }, V = () => {
      const X = a.value;
      return d.value.count > 0 ? `${h(X[0])} - ${h(X[1])}` : [h(X[0]), h(X[1])];
    }, L = j(() => !a.value || !r.menuMount ? "" : typeof S.value.preview == "string" ? Array.isArray(a.value) ? a.value.length === 2 && a.value[1] ? V() : Y.value.enabled ? a.value.map((X) => `${h(X)}`) : u.modelAuto ? `${h(a.value[0])}` : `${h(a.value[0])} -` : h(a.value) : w()), H = () => Y.value.enabled ? "; " : " - ", re = j(
      () => Array.isArray(L.value) ? L.value.join(H()) : L.value
    ), le = () => {
      l.value(a.value) && b.value(a.value) && $.value ? m("select-date") : c("invalid-select");
    };
    return (X, x) => (W(), J("div", Yr, [
      X.$slots["action-row"] ? ne(X.$slots, "action-row", je(nt({ key: 0 }, {
        modelValue: t(a),
        disabled: p.value,
        selectDate: () => X.$emit("select-date"),
        closePicker: () => X.$emit("close-picker")
      }))) : (W(), J(Te, { key: 1 }, [
        t(s).showPreview ? (W(), J("div", {
          key: 0,
          class: "dp__selection_preview",
          title: re.value || void 0,
          style: ze(I.value)
        }, [
          X.$slots["action-preview"] && T.value ? ne(X.$slots, "action-preview", {
            key: 0,
            value: t(a),
            formatValue: re.value
          }) : te("", !0),
          !X.$slots["action-preview"] && T.value ? (W(), J(Te, { key: 1 }, [
            ot(Ne(re.value), 1)
          ], 64)) : te("", !0)
        ], 12, Br)) : te("", !0),
        ke("div", Ir, [
          X.$slots["action-buttons"] ? ne(X.$slots, "action-buttons", {
            key: 0,
            value: t(a)
          }) : te("", !0),
          X.$slots["action-buttons"] ? te("", !0) : (W(), J(Te, { key: 1 }, [
            !t(O).enabled && t(s).showCancel ? (W(), J("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_cancel",
              onClick: x[0] || (x[0] = (ae) => X.$emit("close-picker")),
              onKeydown: x[1] || (x[1] = (ae) => t(R)(ae, () => X.$emit("close-picker")))
            }, Ne(t(s).cancelBtnLabel), 545)) : te("", !0),
            t(s).showNow ? (W(), J("button", {
              key: 1,
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_cancel",
              onClick: x[2] || (x[2] = (ae) => X.$emit("select-now")),
              onKeydown: x[3] || (x[3] = (ae) => t(R)(ae, () => X.$emit("select-now")))
            }, Ne(t(s).nowBtnLabel), 33)) : te("", !0),
            t(s).showSelect ? (W(), J("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_select",
              disabled: t(E)(p.value),
              "data-test-id": "select-button",
              onKeydown: x[4] || (x[4] = (ae) => t(R)(ae, () => le())),
              onClick: le
            }, Ne(t(s).selectBtnLabel), 41, Er)) : te("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), ea = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: M }
  } = Ae(), m = j(() => (u) => e.hideNavigation?.includes(u)), r = j(() => (u) => M.value.count ? M.value.solo ? !0 : u === 0 : !0), c = j(() => (u) => M.value.count ? M.value.solo ? !0 : u === M.value.count - 1 : !0);
  return { hideNavigationButtons: m, showLeftIcon: r, showRightIcon: c };
}, Fr = ["role", "aria-label", "tabindex"], Nr = { class: "dp__selection_grid_header" }, Wr = ["aria-selected", "aria-disabled", "data-dp-action-element", "data-dp-element-active", "data-test-id", "onClick", "onKeydown", "onMouseover"], Lr = ["aria-label", "data-dp-action-element"], Ft = /* @__PURE__ */ Ve({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    useRelative: { type: Boolean },
    height: {},
    overlayLabel: {},
    isLast: { type: Boolean },
    level: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { emit: M }) {
    const m = M, r = e, {
      setState: c,
      defaults: { ariaLabels: u, config: a }
    } = Ae(), { hideNavigationButtons: s } = ea(), { handleEventPropagation: d, checkKeyDown: O } = Ie(), A = xe("toggle-button"), Y = xe("overlay-container"), S = xe("grid-wrap"), l = ve(!1), b = ve(null), h = ve(), R = ve(0);
    rn(() => {
      b.value = null;
    }), Ee(async () => {
      await Ke(), I(), c("arrowNavigationLevel", r.level ?? 1);
    }), bt(() => {
      c("arrowNavigationLevel", (r.level ?? 1) - 1);
    });
    const v = j(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !r.useRelative,
        "dp--overlay-relative": r.useRelative
      })
    ), E = j(
      () => r.useRelative ? { height: `${r.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), _ = j(() => ({
      dp__overlay_col: !0
    })), g = j(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: l.value,
        dp__button_bottom: r.isLast
      })
    ), T = j(() => ({
      dp__overlay_container: !0,
      dp__container_flex: r.items?.length <= 6,
      dp__container_block: r.items?.length > 6
    }));
    tt(
      () => r.items,
      () => I(!1),
      { deep: !0 }
    );
    const I = (H = !0) => {
      Ke().then(() => {
        const re = document.querySelector(`[data-dp-element-active="${r.level ?? 1}"]`), le = ct(S), X = ct(A), x = ct(Y), ae = X ? X.getBoundingClientRect().height : 0;
        le && (le.getBoundingClientRect().height ? R.value = le.getBoundingClientRect().height - ae : R.value = a.value.modeHeight - ae), re && x && H && (x.scrollTop = re.offsetTop - x.offsetTop - (R.value / 2 - re.getBoundingClientRect().height) - ae);
      });
    }, C = (H) => {
      H.disabled || m("selected", H.value);
    }, $ = () => {
      m("toggle"), m("reset-flow");
    }, p = (H) => {
      a.value.escClose && ($(), d(H, a.value));
    }, w = (H) => {
      h.value = H, m("hover-value", H);
    }, V = (H) => {
      switch (H.key) {
        case Se.esc:
          return p(H);
        default:
          return;
      }
    }, L = (H) => {
      if (H.key === Se.enter) return $();
    };
    return (H, re) => (W(), J("div", {
      ref: "grid-wrap",
      class: ye(v.value),
      style: ze(E.value),
      role: e.useRelative ? void 0 : "dialog",
      "aria-label": e.overlayLabel,
      tabindex: e.useRelative ? void 0 : "0",
      onKeydown: V,
      onClick: re[0] || (re[0] = Dt(() => {
      }, ["prevent"]))
    }, [
      ke("div", {
        ref: "overlay-container",
        class: ye(T.value),
        style: ze({ "--dp-overlay-height": `${R.value}px` }),
        role: "grid"
      }, [
        ke("div", Nr, [
          ne(H.$slots, "header")
        ]),
        ne(H.$slots, "overlay", {}, () => [
          (W(!0), J(Te, null, Ce(e.items, (le, X) => (W(), J("div", {
            key: X,
            class: ye(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
            role: "row"
          }, [
            (W(!0), J(Te, null, Ce(le, (x) => (W(), J("div", {
              key: x.value,
              role: "gridcell",
              class: ye(_.value),
              "aria-selected": x.active || void 0,
              "aria-disabled": x.disabled || void 0,
              "data-dp-action-element": e.level ?? 1,
              "data-dp-element-active": x.active ? e.level ?? 1 : void 0,
              tabindex: "0",
              "data-test-id": x.text,
              onClick: Dt((ae) => C(x), ["prevent"]),
              onKeydown: (ae) => t(O)(ae, () => C(x), !0),
              onMouseover: (ae) => w(x.value)
            }, [
              ke("div", {
                class: ye(x.className)
              }, [
                ne(H.$slots, "item", { item: x }, () => [
                  ot(Ne(x.text), 1)
                ])
              ], 2)
            ], 42, Wr))), 128))
          ], 2))), 128))
        ])
      ], 6),
      H.$slots["button-icon"] ? qt((W(), J("button", {
        key: 0,
        ref: "toggle-button",
        type: "button",
        "aria-label": t(u)?.toggleOverlay,
        class: ye(g.value),
        tabindex: "0",
        "data-dp-action-element": e.level ?? 1,
        onClick: $,
        onKeydown: L
      }, [
        ne(H.$slots, "button-icon")
      ], 42, Lr)), [
        [Ut, !t(s)(e.type)]
      ]) : te("", !0)
    ], 46, Fr));
  }
}), Hr = ["data-dp-mobile"], ta = /* @__PURE__ */ Ve({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: M }
    } = Ae(), { isMobile: m } = Xt(), r = j(
      () => M.value.count > 0 ? [...new Array(M.value.count).keys()] : [0]
    );
    return (c, u) => (W(), J("div", {
      class: ye({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: t(M).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": t(m)
    }, [
      ne(c.$slots, "default", {
        instances: r.value,
        wrapClass: { dp__instance_calendar: t(M).count > 0 }
      })
    ], 10, Hr));
  }
}), Kr = ["data-dp-element", "aria-label", "aria-disabled"], Yt = /* @__PURE__ */ Ve({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: M }) {
    const { checkKeyDown: m } = Ie(), r = M;
    return (c, u) => (W(), J("button", {
      ref: "arrow-btn",
      type: "button",
      "data-dp-element": e.elName,
      "data-dp-action-element": "0",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled || void 0,
      onClick: u[0] || (u[0] = (a) => r("activate")),
      onKeydown: u[1] || (u[1] = (a) => t(m)(a, () => r("activate"), !0))
    }, [
      ke("span", {
        class: ye(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        ne(c.$slots, "default")
      ], 2)
    ], 40, Kr));
  }
}), jr = ["aria-label", "data-test-id"], Na = /* @__PURE__ */ Ve({
  __name: "YearModePicker",
  props: {
    items: {},
    instance: {},
    year: {},
    showYearPicker: { type: Boolean, default: !1 },
    isDisabled: {}
  },
  emits: ["handle-year", "year-select", "toggle-year-picker"],
  setup(e, { emit: M }) {
    const m = M, r = e, { showRightIcon: c, showLeftIcon: u } = ea(), {
      rootProps: a,
      defaults: { config: s, ariaLabels: d, ui: O }
    } = Ae(), { showTransition: A, transitionName: Y } = Et(), { formatYear: S } = mt(), { boolHtmlAttribute: l } = At(), b = ve(!1), h = j(() => S(r.year)), R = (_ = !1, g) => {
      b.value = !b.value, m("toggle-year-picker", { flow: _, show: g });
    }, v = (_) => {
      b.value = !1, m("year-select", _);
    }, E = (_ = !1) => {
      m("handle-year", _);
    };
    return (_, g) => (W(), J(Te, null, [
      ke("div", {
        class: ye(["dp--year-mode-picker", { "dp--hidden-el": b.value }])
      }, [
        t(u)(e.instance) ? (W(), Re(Yt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(d)?.prevYear,
          disabled: t(l)(e.isDisabled(!1)),
          class: ye(t(O)?.navBtnPrev),
          onActivate: g[0] || (g[0] = (T) => E(!1))
        }, {
          default: we(() => [
            _.$slots["arrow-left"] ? ne(_.$slots, "arrow-left", { key: 0 }) : te("", !0),
            _.$slots["arrow-left"] ? te("", !0) : (W(), Re(t(Ca), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : te("", !0),
        ke("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": `${e.year}-${t(d)?.openYearsOverlay}`,
          "data-test-id": `year-mode-btn-${e.instance}`,
          "data-dp-action-element": "0",
          onClick: g[1] || (g[1] = () => R(!1)),
          onKeydown: g[2] || (g[2] = ln(Dt(() => R(!1), ["prevent"]), ["enter"]))
        }, [
          _.$slots.year ? ne(_.$slots, "year", {
            key: 0,
            text: h.value,
            value: e.year
          }) : te("", !0),
          _.$slots.year ? te("", !0) : (W(), J(Te, { key: 1 }, [
            ot(Ne(e.year), 1)
          ], 64))
        ], 40, jr),
        t(c)(e.instance) ? (W(), Re(Yt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(d)?.nextYear,
          disabled: t(l)(e.isDisabled(!0)),
          class: ye(t(O)?.navBtnNext),
          onActivate: g[3] || (g[3] = (T) => E(!0))
        }, {
          default: we(() => [
            _.$slots["arrow-right"] ? ne(_.$slots, "arrow-right", { key: 0 }) : te("", !0),
            _.$slots["arrow-right"] ? te("", !0) : (W(), Re(t(xa), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : te("", !0)
      ], 2),
      Be(_t, {
        name: t(Y)(e.showYearPicker),
        css: t(A)
      }, {
        default: we(() => [
          e.showYearPicker ? (W(), Re(Ft, {
            key: 0,
            items: e.items,
            config: t(s),
            "is-last": t(a).autoApply && !t(s).keepActionRow,
            "overlay-label": t(d)?.yearPicker?.(!0),
            type: "year",
            onToggle: R,
            onSelected: g[4] || (g[4] = (T) => v(T))
          }, Fe({
            "button-icon": we(() => [
              _.$slots["calendar-icon"] ? ne(_.$slots, "calendar-icon", { key: 0 }) : te("", !0),
              _.$slots["calendar-icon"] ? te("", !0) : (W(), Re(t(It), { key: 1 }))
            ]),
            _: 2
          }, [
            _.$slots["year-overlay-value"] ? {
              name: "item",
              fn: we(({ item: T }) => [
                ne(_.$slots, "year-overlay-value", {
                  text: T.text,
                  value: T.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "config", "is-last", "overlay-label"])) : te("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Wa = (e) => {
  const {
    getDate: M,
    rootEmit: m,
    state: r,
    month: c,
    year: u,
    modelValue: a,
    calendars: s,
    rootProps: d,
    defaults: { multiCalendars: O, range: A, safeDates: Y, filters: S, highlight: l }
  } = Ae(), { resetDate: b, getYearFromDate: h, checkHighlightYear: R, groupListAndMap: v } = We(), { getYears: E } = Zt(), { validateMonthYear: _, checkMinMaxValue: g } = Ue(), T = ve([!1]), I = j(() => E()), C = j(() => (z, ee) => {
    const me = _e(b(M()), {
      month: c.value(z),
      year: u.value(z)
    }), Z = ee ? Ta(me) : Ot(me);
    return _(Z, d.preventMinMaxNavigation, ee);
  }), $ = () => Array.isArray(a.value) && O.value.solo && a.value[1], p = () => {
    for (let z = 0; z < O.value.count; z++)
      if (z === 0)
        s.value[z] = s.value[0];
      else if (z === O.value.count - 1 && $())
        s.value[z] = {
          month: Pe(a.value[1]),
          year: he(a.value[1])
        };
      else {
        const ee = _e(M(), s.value[z - 1]);
        s.value[z] = { month: Pe(ee), year: he($a(ee, 1)) };
      }
  }, w = (z) => {
    if (!z) return p();
    const ee = _e(M(), s.value[z]);
    return s.value[0].year = he(Sa(ee, O.value.count - 1)), p();
  }, V = (z, ee) => {
    const me = Dn(ee, z);
    return A.value.showLastInRange && me > 1 ? ee : z;
  }, L = (z) => d.focusStartDate || O.value.solo ? z[0] : z[1] ? V(z[0], z[1]) : z[0], H = () => {
    if (a.value) {
      const z = Array.isArray(a.value) ? L(a.value) : a.value;
      s.value[0] = { month: Pe(z), year: he(z) };
    }
  }, re = () => {
    H(), O.value.count && p();
  };
  tt(a, (z, ee) => {
    r.isTextInputDate && JSON.stringify(z ?? {}) !== JSON.stringify(ee ?? {}) && re();
  }), Ee(() => {
    re();
  });
  const le = (z, ee) => {
    s.value[ee].year = z, m("update-month-year", { instance: ee, year: z, month: s.value[ee].month }), O.value.count && !O.value.solo && w(ee);
  }, X = j(() => (z) => v(I.value, (ee) => {
    const me = u.value(z) === ee.value, Z = g(
      ee.value,
      h(Y.value.minDate),
      h(Y.value.maxDate)
    ) || S.value.years?.includes(u.value(z)), ie = R(l.value, ee.value);
    return { active: me, disabled: Z, highlighted: ie };
  })), x = (z, ee) => {
    le(z, ee), q(ee);
  }, ae = (z, ee = !1) => {
    if (!C.value(z, ee)) {
      const me = ee ? u.value(z) + 1 : u.value(z) - 1;
      le(me, z);
    }
  }, q = (z, ee = !1, me) => {
    ee || e("reset-flow"), me === void 0 ? T.value[z] = !T.value[z] : T.value[z] = me, T.value[z] ? m("overlay-toggle", { open: !0, overlay: He.year }) : m("overlay-toggle", { open: !1, overlay: He.year });
  };
  return {
    isDisabled: C,
    groupedYears: X,
    showYearPicker: T,
    selectYear: le,
    setStartDate: () => {
      d.startDate && (a.value && d.focusStartDate || !a.value) && le(he(M(d.startDate)), 0);
    },
    toggleYearPicker: q,
    handleYearSelect: x,
    handleYear: ae
  };
}, aa = () => {
  const { isDateAfter: e, isDateBefore: M, isDateEqual: m } = We(), {
    getDate: r,
    rootEmit: c,
    rootProps: u,
    modelValue: a,
    defaults: { range: s }
  } = Ae();
  return {
    getRangeWithFixedDate: (l) => Array.isArray(a.value) && (a.value.length === 2 || a.value.length === 1 && s.value.partialRange) ? s.value.fixedStart && (e(l, a.value[0]) || m(l, a.value[0])) ? [a.value[0], l] : s.value.fixedEnd && (M(l, a.value[1]) || m(l, a.value[1])) ? [l, a.value[1]] : (c("invalid-fixed-range", l), a.value) : [],
    setPresetDate: (l) => {
      Array.isArray(l.value) && l.value.length <= 2 && s.value.enabled ? a.value = l.value.map((b) => r(b)) : Array.isArray(l.value) || (a.value = r(l.value));
    },
    checkRangeAutoApply: (l, b, h) => {
      s && (l[0] && l[1] && u.autoApply && b("auto-apply", h), l[0] && !l[1] && (u.modelAuto || s.value.partialRange) && u.autoApply && b("auto-apply", h));
    },
    setMonthOrYearRange: (l) => {
      let b = a.value ? a.value.slice() : [];
      return b.length === 2 && b[1] !== null && (b = []), b.length ? (M(l, b[0]) ? b.unshift(l) : b[1] = l, c("range-end", l)) : (b = [l], c("range-start", l)), b;
    },
    handleMultiDatesSelect: (l, b) => {
      if (a.value && Array.isArray(a.value))
        if (a.value.some((h) => m(l, h))) {
          const h = a.value.filter((R) => !m(R, l));
          a.value = h.length ? h : null;
        } else (b && +b > a.value.length || !b) && a.value.push(l);
      else
        a.value = [l];
    }
  };
}, zr = (e, M) => {
  const {
    getDate: m,
    rootEmit: r,
    state: c,
    calendars: u,
    year: a,
    modelValue: s,
    rootProps: d,
    defaults: { range: O, highlight: A, safeDates: Y, filters: S, multiDates: l }
  } = Ae();
  Vt(() => {
    c.isTextInputDate && x(he(m(d.startDate)), 0);
  });
  const { checkMinMaxRange: b, checkMinMaxValue: h } = Ue(), { isDateBetween: R, resetDateTime: v, resetDate: E, getMinMonth: _, getMaxMonth: g, checkHighlightMonth: T, groupListAndMap: I } = We(), { checkRangeAutoApply: C, getRangeWithFixedDate: $, handleMultiDatesSelect: p, setMonthOrYearRange: w, setPresetDate: V } = aa(), { padZero: L } = Ie(), { getMonths: H, isOutOfYearRange: re } = Zt(), le = j(() => H()), X = ve(null), {
    selectYear: x,
    groupedYears: ae,
    showYearPicker: q,
    toggleYearPicker: oe,
    handleYearSelect: z,
    handleYear: ee,
    isDisabled: me,
    setStartDate: Z
  } = Wa(M);
  Ee(() => {
    Z();
  });
  const ie = (f) => f ? { month: Pe(f), year: he(f) } : { month: null, year: null }, se = () => s.value ? Array.isArray(s.value) ? s.value.map((f) => ie(f)) : ie(s.value) : ie(), Me = (f, N) => {
    const Q = u.value[f], ge = se();
    return Array.isArray(ge) ? ge.some((be) => be.year === Q?.year && be.month === N) : Q?.year === ge.year && N === ge.month;
  }, fe = (f, N, Q) => {
    const ge = se();
    return Array.isArray(ge) ? a.value(N) === ge[Q]?.year && f === ge[Q]?.month : !1;
  }, G = (f, N) => {
    if (O.value.enabled) {
      const Q = se();
      if (Array.isArray(s.value) && Array.isArray(Q)) {
        const ge = fe(f, N, 0) || fe(f, N, 1), be = _e(E(m()), { month: f, year: a.value(N) });
        return R(s.value, X.value, be) && !ge;
      }
      return !1;
    }
    return !1;
  }, ce = j(() => (f) => I(le.value, (N) => {
    const Q = Me(f, N.value), ge = h(
      N.value,
      _(a.value(f), Y.value.minDate),
      g(a.value(f), Y.value.maxDate)
    ) || i(Y.value.disabledDates, a.value(f), N.value) || S.value.months?.includes(N.value) || !F(Y.value.allowedDates, a.value(f), N.value) || re(a.value(f)), be = G(N.value, f), Qe = T(A.value, N.value, a.value(f));
    return { active: Q, disabled: ge, isBetween: be, highlighted: Qe };
  })), B = (f, N) => _e(E(m()), { month: f, year: a.value(N) }), y = (f, N) => {
    const Q = s.value ? s.value : E(m());
    s.value = _e(Q, { month: f, year: a.value(N) }), M("auto-apply"), M("update-flow-step");
  }, K = (f, N) => {
    const Q = B(f, N);
    O.value.fixedEnd || O.value.fixedStart ? s.value = $(Q) : s.value ? b(Q, s.value) && (s.value = w(B(f, N))) : s.value = [B(f, N)], Ke().then(() => {
      C(s.value, M, s.value.length < 2);
    });
  }, pe = (f, N) => {
    p(B(f, N), l.value.limit), M("auto-apply", !0);
  }, $e = (f, N) => (u.value[N].month = f, n(N, u.value[N].year, f), l.value.enabled ? pe(f, N) : O.value.enabled ? K(f, N) : y(f, N)), D = (f, N) => {
    x(f, N), n(N, f, null);
  }, n = (f, N, Q) => {
    let ge = Q;
    if (!ge && ge !== 0) {
      const be = se();
      ge = Array.isArray(be) ? be[f].month : be.month;
    }
    r("update-month-year", { instance: f, year: N, month: ge });
  }, o = (f, N) => {
    X.value = B(f, N);
  }, k = (f) => {
    V({
      value: f
    }), M("auto-apply");
  }, i = (f, N, Q) => {
    if (f instanceof Map) {
      const ge = `${L(Q + 1)}-${N}`;
      return f.size ? f.has(ge) : !1;
    }
    return typeof f == "function" ? f(v(_e(m(), { month: Q, year: N }), !0)) : !1;
  }, F = (f, N, Q) => {
    if (f instanceof Map) {
      const ge = `${L(Q + 1)}-${N}`;
      return f.size ? f.has(ge) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: ce,
    groupedYears: ae,
    year: a,
    isDisabled: me,
    showYearPicker: q,
    modelValue: s,
    toggleYearPicker: oe,
    handleYearSelect: z,
    handleYear: ee,
    presetDate: k,
    setHoverDate: o,
    selectMonth: $e,
    selectYear: D,
    getModelMonthYear: se
  };
}, qr = /* @__PURE__ */ Ve({
  __name: "MonthPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply", "update-flow-step", "mount"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, u = vt(), {
      rootProps: a,
      defaults: { config: s }
    } = Ae(), d = rt(u, at.YearMode);
    Ee(() => {
      r("mount");
    });
    const {
      groupedMonths: O,
      groupedYears: A,
      year: Y,
      isDisabled: S,
      showYearPicker: l,
      modelValue: b,
      presetDate: h,
      setHoverDate: R,
      selectMonth: v,
      selectYear: E,
      toggleYearPicker: _,
      handleYearSelect: g,
      handleYear: T,
      getModelMonthYear: I
    } = zr(c, r);
    return M({ getSidebarProps: () => ({
      modelValue: b,
      year: Y,
      getModelMonthYear: I,
      selectMonth: v,
      selectYear: E,
      handleYear: T
    }), presetDate: h, toggleYearPicker: ($) => _(0, $) }), ($, p) => (W(), Re(ta, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: we(({ instances: w, wrapClass: V }) => [
        (W(!0), J(Te, null, Ce(w, (L) => (W(), J("div", {
          key: L,
          class: ye(V)
        }, [
          $.$slots["top-extra"] ? ne($.$slots, "top-extra", {
            key: 0,
            value: t(b)
          }) : te("", !0),
          ne($.$slots, "month-year", nt({ ref_for: !0 }, {
            year: t(Y),
            months: t(O)(L),
            years: t(A)(L),
            selectMonth: t(v),
            selectYear: t(E),
            instance: L
          }), () => [
            Be(Ft, {
              items: t(O)(L),
              "is-last": t(a).autoApply && !t(s).keepActionRow,
              height: t(s).modeHeight,
              "no-overlay-focus": !!(e.noOverlayFocus || t(a).textInput),
              "use-relative": "",
              level: 0,
              type: "month",
              onSelected: (H) => t(v)(H, L),
              onHoverValue: (H) => t(R)(H, L)
            }, Fe({
              header: we(() => [
                Be(Na, {
                  items: t(A)(L),
                  instance: L,
                  "show-year-picker": t(l)[L],
                  year: t(Y)(L),
                  "is-disabled": (H) => t(S)(L, H),
                  onHandleYear: (H) => t(T)(L, H),
                  onYearSelect: (H) => t(g)(H, L),
                  onToggleYearPicker: (H) => t(_)(L, H?.flow, H?.show)
                }, Fe({ _: 2 }, [
                  Ce(t(d), (H, re) => ({
                    name: H,
                    fn: we((le) => [
                      ne($.$slots, H, nt({ ref_for: !0 }, le))
                    ])
                  }))
                ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
              ]),
              _: 2
            }, [
              $.$slots["month-overlay-value"] ? {
                name: "item",
                fn: we(({ item: H }) => [
                  ne($.$slots, "month-overlay-value", {
                    text: H.text,
                    value: H.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "onSelected", "onHoverValue"])
          ])
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), Ur = (e, M) => {
  const {
    rootEmit: m,
    getDate: r,
    state: c,
    modelValue: u,
    rootProps: a,
    defaults: { highlight: s, multiDates: d, filters: O, range: A, safeDates: Y }
  } = Ae(), { getYears: S } = Zt(), { isDateBetween: l, resetDate: b, resetDateTime: h, getYearFromDate: R, checkHighlightYear: v, groupListAndMap: E } = We(), { checkRangeAutoApply: _, setMonthOrYearRange: g } = aa(), { checkMinMaxValue: T, checkMinMaxRange: I } = Ue();
  Vt(() => {
    c.isTextInputDate && ($.value = he(r(a.startDate)));
  });
  const C = ve(null), $ = ve();
  Ee(() => {
    a.startDate && (u.value && a.focusStartDate || !u.value) && ($.value = he(r(a.startDate)));
  });
  const p = (x) => Array.isArray(u.value) ? u.value.some((ae) => he(ae) === x) : u.value ? he(u.value) === x : !1, w = (x) => A.value.enabled && Array.isArray(u.value) ? l(u.value, C.value, re(x)) : !1, V = (x) => Y.value.allowedDates?.size ? Y.value.allowedDates.has(`${x}`) : !0, L = (x) => Y.value.disabledDates instanceof Map ? Y.value.disabledDates.size ? Y.value.disabledDates.has(`${x}`) : !1 : typeof Y.value.disabledDates == "function" ? Y.value.disabledDates(Ze(h(Ot(r())), x)) : !0, H = j(() => E(S(), (x) => {
    const ae = p(x.value), q = T(
      x.value,
      R(Y.value.minDate),
      R(Y.value.maxDate)
    ) || O.value.years.includes(x.value) || !V(x.value) || L(x.value), oe = w(x.value) && !ae, z = v(s.value, x.value);
    return { active: ae, disabled: q, isBetween: oe, highlighted: z };
  })), re = (x) => Ze(b(Ot(r())), x);
  return {
    groupedYears: H,
    focusYear: $,
    setHoverValue: (x) => {
      C.value = Ze(b(r()), x);
    },
    selectYear: (x) => {
      if (m("update-month-year", { instance: 0, year: x, month: Number.NaN }), d.value.enabled)
        return u.value ? Array.isArray(u.value) && ((u.value?.map((q) => he(q))).includes(x) ? u.value = u.value.filter((q) => he(q) !== x) : u.value.push(Ze(h(r()), x))) : u.value = [Ze(h(Ot(r())), x)], M("auto-apply", !0);
      A.value.enabled ? I(re(x), u.value) && (u.value = g(re(x)), Ke().then(() => {
        _(u.value, M, u.value.length < 2);
      })) : (u.value = re(x), M("auto-apply"));
    }
  };
}, Qr = /* @__PURE__ */ Ve({
  __name: "YearPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, {
      modelValue: u,
      defaults: { config: a },
      rootProps: s
    } = Ae(), { groupedYears: d, focusYear: O, selectYear: A, setHoverValue: Y } = Ur(c, r);
    return M({ getSidebarProps: () => ({
      modelValue: u,
      selectYear: A
    }) }), (l, b) => (W(), J("div", null, [
      l.$slots["top-extra"] ? ne(l.$slots, "top-extra", {
        key: 0,
        value: t(u)
      }) : te("", !0),
      l.$slots["month-year"] ? ne(l.$slots, "month-year", je(nt({ key: 1 }, {
        years: t(d),
        selectYear: t(A)
      }))) : (W(), Re(Ft, {
        key: 2,
        items: t(d),
        "is-last": t(s).autoApply && !t(a).keepActionRow,
        height: t(a).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || t(s).textInput),
        "focus-value": t(O),
        type: "year",
        "use-relative": "",
        onSelected: t(A),
        onHoverValue: t(Y)
      }, Fe({ _: 2 }, [
        l.$slots["year-overlay-value"] ? {
          name: "item",
          fn: we(({ item: h }) => [
            ne(l.$slots, "year-overlay-value", {
              text: h.text,
              value: h.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), Jr = {
  key: 0,
  class: "dp__time_input"
}, Gr = ["data-compact", "data-collapsed"], Xr = ["data-test-id", "aria-label", "data-dp-action-element", "onKeydown", "onClick", "onMousedown"], Zr = ["aria-label", "disabled", "data-dp-action-element", "data-test-id", "onKeydown", "onClick"], el = ["data-test-id", "aria-label", "data-dp-action-element", "onKeydown", "onClick", "onMousedown"], tl = { key: 0 }, al = ["aria-label", "data-dp-action-element", "data-compact"], nl = /* @__PURE__ */ Ve({
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
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, {
      getDate: u,
      rootEmit: a,
      rootProps: s,
      defaults: { ariaLabels: d, filters: O, config: A, range: Y, multiCalendars: S, timeConfig: l }
    } = Ae(), { checkKeyDown: b, hoursToAmPmHours: h } = Ie(), { boolHtmlAttribute: R } = At(), { sanitizeTime: v, groupListAndMap: E } = We(), { transitionName: _, showTransition: g } = Et(), T = Jt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), I = ve("AM"), C = ve(null), $ = ve(), p = ve(!1);
    Ee(() => {
      r("mounted");
    });
    const w = (i) => _e(u(), {
      hours: i.hours,
      minutes: i.minutes,
      seconds: l.value.enableSeconds ? i.seconds : 0,
      milliseconds: 0
    }), V = j(() => s.timePicker || l.value.timePickerInline ? 0 : 1), L = j(
      () => (i) => ie(i, c[i]) || re(i, c[i])
    ), H = j(() => ({ hours: c.hours, minutes: c.minutes, seconds: c.seconds })), re = (i, F) => Y.value.enabled && !Y.value.disableTimeRangeValidation ? !c.validateTime(i, F) : !1, le = (i, F) => {
      if (Y.value.enabled && !Y.value.disableTimeRangeValidation) {
        const f = F ? +l.value[`${i}Increment`] : -+l.value[`${i}Increment`], N = c[i] + f;
        return !c.validateTime(i, N);
      }
      return !1;
    }, X = j(() => (i) => !ce(+c[i] + +l.value[`${i}Increment`], i) || le(i, !0)), x = j(() => (i) => !ce(+c[i] - +l.value[`${i}Increment`], i) || le(i, !1)), ae = (i, F) => Ra(_e(u(), i), F), q = (i, F) => Mn(_e(u(), i), F), oe = j(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !l.value.timePickerInline,
        dp__time_col_reg_block: !l.value.enableSeconds && l.value.is24 && !l.value.timePickerInline,
        dp__time_col_reg_inline: !l.value.enableSeconds && l.value.is24 && l.value.timePickerInline,
        dp__time_col_reg_with_button: !l.value.enableSeconds && !l.value.is24,
        dp__time_col_sec: l.value.enableSeconds && l.value.is24,
        dp__time_col_sec_with_button: l.value.enableSeconds && !l.value.is24
      })
    ), z = j(
      () => l.value.timePickerInline && Y.value.enabled && !S.value.count
    ), ee = j(() => {
      const i = [{ type: "hours" }];
      return l.value.enableMinutes && i.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), l.value.enableSeconds && i.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), i;
    }), me = j(() => ee.value.filter((i) => !i.separator)), Z = j(() => (i) => {
      if (i === "hours") {
        const F = D(+c.hours);
        return { text: F < 10 ? `0${F}` : `${F}`, value: F };
      }
      return { text: c[i] < 10 ? `0${c[i]}` : `${c[i]}`, value: c[i] };
    }), ie = (i, F) => {
      if (!c.disabledTimesConfig) return !1;
      const f = c.disabledTimesConfig(c.order, i === "hours" ? F : void 0);
      return f[i] ? !!f[i]?.includes(F) : !0;
    }, se = (i, F) => F !== "hours" || I.value === "AM" ? i : i + 12, Me = (i) => {
      const F = l.value.is24 ? 24 : 12, f = i === "hours" ? F : 60, N = +l.value[`${i}GridIncrement`], Q = i === "hours" && !l.value.is24 ? N : 0, ge = [];
      for (let be = Q; be < f; be += N)
        ge.push({
          value: l.value.is24 ? be : se(be, i),
          text: be < 10 ? `0${be}` : `${be}`
        });
      return i === "hours" && !l.value.is24 && ge.unshift({ value: I.value === "PM" ? 12 : 0, text: "12" }), E(ge, (be) => ({ active: !1, disabled: O.value.times[i].includes(be.value) || !ce(be.value, i) || ie(i, be.value) || re(i, be.value) }));
    }, fe = (i) => i >= 0 ? i : 59, G = (i) => i >= 0 ? i : 23, ce = (i, F) => {
      const f = s.minTime ? w(v(s.minTime)) : null, N = s.maxTime ? w(v(s.maxTime)) : null, Q = w(
        v(
          H.value,
          F,
          F === "minutes" || F === "seconds" ? fe(i) : G(i)
        )
      );
      return f && N ? (Mt(Q, N) || kt(Q, N)) && (yt(Q, f) || kt(Q, f)) : f ? yt(Q, f) || kt(Q, f) : N ? Mt(Q, N) || kt(Q, N) : !0;
    }, B = (i) => l.value[`no${i[0].toUpperCase() + i.slice(1)}Overlay`], y = (i) => {
      B(i) || (T[i] = !T[i], T[i] ? (p.value = !0, r("overlay-opened", i)) : (p.value = !1, r("overlay-closed", i)));
    }, K = (i) => i === "hours" ? lt : i === "minutes" ? st : dt, pe = () => {
      $.value && clearTimeout($.value);
    }, $e = (i, F = !0, f) => {
      const N = F ? ae : q, Q = F ? +l.value[`${i}Increment`] : -+l.value[`${i}Increment`];
      ce(+c[i] + Q, i) && r(
        `update:${i}`,
        K(i)(
          N({ [i]: +c[i] }, { [i]: +l.value[`${i}Increment`] })
        )
      ), !f?.keyboard && A.value.timeArrowHoldThreshold && ($.value = setTimeout(() => {
        $e(i, F);
      }, A.value.timeArrowHoldThreshold));
    }, D = (i) => l.value.is24 ? i : (i >= 12 ? I.value = "PM" : I.value = "AM", h(i)), n = () => {
      I.value === "PM" ? (I.value = "AM", r("update:hours", c.hours - 12)) : (I.value = "PM", r("update:hours", c.hours + 12)), a("am-pm-change", I.value);
    }, o = (i) => {
      T[i] = !0;
    }, k = (i, F) => (y(i), r(`update:${i}`, F));
    return M({ openChildCmp: o }), (i, F) => t(s).disabled ? te("", !0) : (W(), J("div", Jr, [
      (W(!0), J(Te, null, Ce(ee.value, (f, N) => (W(), J("div", {
        key: N,
        class: ye(oe.value),
        "data-compact": z.value && !t(l).enableSeconds,
        "data-collapsed": z.value && t(l).enableSeconds
      }, [
        f.separator ? (W(), J(Te, { key: 0 }, [
          p.value ? te("", !0) : (W(), J(Te, { key: 0 }, [
            ot(":")
          ], 64))
        ], 64)) : (W(), J(Te, { key: 1 }, [
          ke("button", {
            type: "button",
            class: ye({
              dp__btn: !0,
              dp__inc_dec_button: !t(l).timePickerInline,
              dp__inc_dec_button_inline: t(l).timePickerInline,
              dp__tp_inline_btn_top: t(l).timePickerInline,
              dp__inc_dec_button_disabled: X.value(f.type),
              "dp--hidden-el": p.value
            }),
            "data-test-id": `${f.type}-time-inc-btn-${c.order}`,
            "aria-label": t(d)?.incrementValue(f.type),
            tabindex: "0",
            "data-dp-action-element": V.value,
            onKeydown: (Q) => t(b)(Q, () => $e(f.type, !0, { keyboard: !0 }), !0),
            onClick: (Q) => t(A).timeArrowHoldThreshold ? void 0 : $e(f.type, !0),
            onMousedown: (Q) => t(A).timeArrowHoldThreshold ? $e(f.type, !0) : void 0,
            onMouseup: pe
          }, [
            t(l).timePickerInline ? ne(i.$slots, "tp-inline-arrow-up", { key: 1 }, () => [
              F[2] || (F[2] = ke("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
              F[3] || (F[3] = ke("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
            ]) : ne(i.$slots, "arrow-up", { key: 0 }, () => [
              Be(t(Ya))
            ])
          ], 42, Xr),
          ke("button", {
            type: "button",
            "aria-label": `${Z.value(f.type).text}-${t(d)?.openTpOverlay(f.type)}`,
            class: ye({
              dp__time_display: !0,
              dp__time_display_block: !t(l).timePickerInline,
              dp__time_display_inline: t(l).timePickerInline,
              "dp--time-invalid": L.value(f.type),
              "dp--time-overlay-btn": !L.value(f.type),
              "dp--hidden-el": p.value
            }),
            disabled: t(R)(B(f.type)),
            tabindex: "0",
            "data-dp-action-element": V.value,
            "data-test-id": `${f.type}-toggle-overlay-btn-${c.order}`,
            onKeydown: (Q) => t(b)(Q, () => y(f.type), !0),
            onClick: (Q) => y(f.type)
          }, [
            ne(i.$slots, f.type, {
              text: Z.value(f.type).text,
              value: Z.value(f.type).value
            }, () => [
              ot(Ne(Z.value(f.type).text), 1)
            ])
          ], 42, Zr),
          ke("button", {
            type: "button",
            class: ye({
              dp__btn: !0,
              dp__inc_dec_button: !t(l).timePickerInline,
              dp__inc_dec_button_inline: t(l).timePickerInline,
              dp__tp_inline_btn_bottom: t(l).timePickerInline,
              dp__inc_dec_button_disabled: x.value(f.type),
              "dp--hidden-el": p.value
            }),
            "data-test-id": `${f.type}-time-dec-btn-${c.order}`,
            "aria-label": t(d)?.decrementValue(f.type),
            tabindex: "0",
            "data-dp-action-element": V.value,
            onKeydown: (Q) => t(b)(Q, () => $e(f.type, !1, { keyboard: !0 }), !0),
            onClick: (Q) => t(A).timeArrowHoldThreshold ? void 0 : $e(f.type, !1),
            onMousedown: (Q) => t(A).timeArrowHoldThreshold ? $e(f.type, !1) : void 0,
            onMouseup: pe
          }, [
            t(l).timePickerInline ? ne(i.$slots, "tp-inline-arrow-down", { key: 1 }, () => [
              F[4] || (F[4] = ke("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
              F[5] || (F[5] = ke("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
            ]) : ne(i.$slots, "arrow-down", { key: 0 }, () => [
              Be(t(Ba))
            ])
          ], 42, el)
        ], 64))
      ], 10, Gr))), 128)),
      t(l).is24 ? te("", !0) : (W(), J("div", tl, [
        ne(i.$slots, "am-pm-button", {
          toggle: n,
          value: I.value
        }, () => [
          ke("button", {
            ref_key: "amPmButton",
            ref: C,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": t(d)?.amPmButton,
            tabindex: "0",
            "data-dp-action-element": V.value,
            "data-compact": z.value,
            onClick: n,
            onKeydown: F[0] || (F[0] = (f) => t(b)(f, () => n(), !0))
          }, Ne(I.value), 41, al)
        ])
      ])),
      (W(!0), J(Te, null, Ce(me.value, (f, N) => (W(), Re(_t, {
        key: N,
        name: t(_)(T[f.type]),
        css: t(g)
      }, {
        default: we(() => [
          T[f.type] ? (W(), Re(Ft, {
            key: 0,
            items: Me(f.type),
            "is-last": t(s).autoApply && !t(A).keepActionRow,
            type: f.type,
            "aria-labels": t(d),
            level: t(l).timePickerInline || t(s).timePicker ? 1 : 2,
            "overlay-label": t(d).timeOverlay?.(f.type),
            onSelected: (Q) => k(f.type, Q),
            onToggle: (Q) => y(f.type),
            onResetFlow: F[1] || (F[1] = (Q) => i.$emit("reset-flow"))
          }, Fe({
            "button-icon": we(() => [
              ne(i.$slots, "clock-icon", {}, () => [
                i.$slots["clock-icon"] ? te("", !0) : (W(), Re(fa(t(l).timePickerInline ? t(It) : t(Oa)), { key: 0 }))
              ])
            ]),
            _: 2
          }, [
            i.$slots[`${f.type}-overlay-value`] ? {
              name: "item",
              fn: we(({ item: Q }) => [
                ne(i.$slots, `${f.type}-overlay-value`, {
                  text: Q.text,
                  value: Q.value
                })
              ]),
              key: "0"
            } : void 0,
            i.$slots[`${f.type}-overlay-header`] ? {
              name: "header",
              fn: we(() => [
                ne(i.$slots, `${f.type}-overlay-header`, {
                  toggle: () => y(f.type)
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["items", "is-last", "type", "aria-labels", "level", "overlay-label", "onSelected", "onToggle"])) : te("", !0)
        ]),
        _: 2
      }, 1032, ["name", "css"]))), 128))
    ]));
  }
}), rl = ["data-dp-mobile"], ll = ["aria-label", "tabindex"], ol = ["role", "aria-label", "tabindex"], sl = ["aria-label"], La = /* @__PURE__ */ Ve({
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
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, {
      rootEmit: u,
      setState: a,
      modelValue: s,
      rootProps: d,
      defaults: { ariaLabels: O, textInput: A, config: Y, range: S, timeConfig: l }
    } = Ae(), { isModelAuto: b } = We(), { checkKeyDown: h, findFocusableEl: R } = Ie(), { transitionName: v, showTransition: E } = Et(), { hideNavigationButtons: _ } = ea(), { isMobile: g } = Xt(), T = vt(), I = xe("overlay"), C = xe("close-tp-btn"), $ = xe("tp-input"), p = ve(!1);
    Ee(() => {
      r("mount");
    });
    const w = j(() => S.value.enabled && d.modelAuto ? b(s.value) : !0), V = ve(!1), L = (Z) => ({
      hours: Array.isArray(c.hours) ? c.hours[Z] : c.hours,
      minutes: Array.isArray(c.minutes) ? c.minutes[Z] : c.minutes,
      seconds: Array.isArray(c.seconds) ? c.seconds[Z] : c.seconds
    }), H = j(() => {
      const Z = [];
      if (S.value.enabled)
        for (let ie = 0; ie < 2; ie++)
          Z.push(L(ie));
      else
        Z.push(L(0));
      return Z;
    }), re = (Z, ie = !1, se = "") => {
      ie || r("reset-flow"), V.value = Z, a("arrowNavigationLevel", Z ? 1 : 0), u("overlay-toggle", { open: Z, overlay: He.time }), Ke(() => {
        se !== "" && $.value?.[0] && $.value[0].openChildCmp(se);
      });
    }, le = j(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: d.autoApply && !Y.value.keepActionRow
    })), X = rt(T, at.TimeInput), x = (Z, ie, se) => S.value.enabled ? ie === 0 ? [Z, H.value[1][se]] : [H.value[0][se], Z] : Z, ae = (Z) => {
      r("update:hours", Z);
    }, q = (Z) => {
      r("update:minutes", Z);
    }, oe = (Z) => {
      r("update:seconds", Z);
    }, z = () => {
      if (I.value && !A.value.enabled && !c.noOverlayFocus) {
        const Z = R(I.value);
        Z && Z.focus({ preventScroll: !0 });
      }
    }, ee = (Z) => {
      p.value = !1, u("overlay-toggle", { open: !1, overlay: Z });
    }, me = (Z) => {
      p.value = !0, u("overlay-toggle", { open: !0, overlay: Z });
    };
    return M({ toggleTimePicker: re }), (Z, ie) => (W(), J("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(g)
    }, [
      !t(d).timePicker && !t(l).timePickerInline ? qt((W(), J("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        "data-dp-action-element": "0",
        class: ye({ ...le.value, "dp--hidden-el": V.value }),
        "aria-label": t(O)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: ie[0] || (ie[0] = (se) => t(h)(se, () => re(!0))),
        onClick: ie[1] || (ie[1] = (se) => re(!0))
      }, [
        ne(Z.$slots, "clock-icon", {}, () => [
          Be(t(Oa))
        ])
      ], 42, ll)), [
        [Ut, !t(_)("time")]
      ]) : te("", !0),
      Be(_t, {
        name: t(v)(V.value),
        css: t(E) && !t(l).timePickerInline
      }, {
        default: we(() => [
          V.value || t(d).timePicker || t(l).timePickerInline ? (W(), J("div", {
            key: 0,
            ref: "overlay",
            role: t(l).timePickerInline ? void 0 : "dialog",
            class: ye({
              dp__overlay: !t(l).timePickerInline,
              "dp--overlay-absolute": !t(d).timePicker && !t(l).timePickerInline,
              "dp--overlay-relative": t(d).timePicker
            }),
            style: ze(t(d).timePicker ? { height: `${t(Y).modeHeight}px` } : void 0),
            "aria-label": t(O)?.timePicker,
            tabindex: t(l).timePickerInline ? void 0 : 0
          }, [
            ke("div", {
              class: ye(
                t(l).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
              ),
              style: { display: "flex" }
            }, [
              ne(Z.$slots, "time-picker-overlay", {
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: ae,
                setMinutes: q,
                setSeconds: oe
              }, () => [
                ke("div", {
                  class: ye(t(l).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                }, [
                  (W(!0), J(Te, null, Ce(H.value, (se, Me) => qt((W(), Re(nl, nt({ key: Me }, { ref_for: !0 }, {
                    order: Me,
                    hours: se.hours,
                    minutes: se.minutes,
                    seconds: se.seconds,
                    closeTimePickerBtn: C.value,
                    disabledTimesConfig: e.disabledTimesConfig,
                    disabled: Me === 0 ? t(S).fixedStart : t(S).fixedEnd
                  }, {
                    ref_for: !0,
                    ref: "tp-input",
                    "validate-time": (fe, G) => e.validateTime(fe, x(G, Me, fe)),
                    "onUpdate:hours": (fe) => ae(x(fe, Me, "hours")),
                    "onUpdate:minutes": (fe) => q(x(fe, Me, "minutes")),
                    "onUpdate:seconds": (fe) => oe(x(fe, Me, "seconds")),
                    onMounted: z,
                    onOverlayClosed: ee,
                    onOverlayOpened: me
                  }), Fe({ _: 2 }, [
                    Ce(t(X), (fe, G) => ({
                      name: fe,
                      fn: we((ce) => [
                        ne(Z.$slots, fe, nt({ ref_for: !0 }, ce))
                      ])
                    }))
                  ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                    [Ut, Me === 0 ? !0 : w.value]
                  ])), 128))
                ], 2)
              ]),
              !t(d).timePicker && !t(l).timePickerInline ? qt((W(), J("button", {
                key: 0,
                ref: "close-tp-btn",
                "data-dp-action-element": "1",
                type: "button",
                class: ye({ ...le.value, "dp--hidden-el": p.value }),
                "aria-label": t(O)?.closeTimePicker,
                tabindex: "0",
                onKeydown: ie[2] || (ie[2] = (se) => t(h)(se, () => re(!1))),
                onClick: ie[3] || (ie[3] = (se) => re(!1))
              }, [
                ne(Z.$slots, "calendar-icon", {}, () => [
                  Be(t(It))
                ])
              ], 42, sl)), [
                [Ut, !t(_)("time")]
              ]) : te("", !0)
            ], 2)
          ], 14, ol)) : te("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 8, rl));
  }
}), Ha = (e) => {
  const {
    getDate: M,
    modelValue: m,
    time: r,
    rootProps: c,
    defaults: { range: u, timeConfig: a }
  } = Ae(), { isDateEqual: s, setTime: d } = We(), O = (C, $) => Array.isArray(r[C]) ? r[C][$] : r[C], A = (C) => a.value.enableSeconds ? Array.isArray(r.seconds) ? r.seconds[C] : r.seconds : 0, Y = (C, $) => C ? d(
    $ !== void 0 ? { hours: O("hours", $), minutes: O("minutes", $), seconds: A($) } : { hours: r.hours, minutes: r.minutes, seconds: A() },
    C
  ) : An(M(), A($)), S = (C, $) => {
    r[C] = $;
  }, l = j(() => c.modelAuto && u.value.enabled ? Array.isArray(m.value) ? m.value.length > 1 : !1 : u.value.enabled), b = (C, $) => {
    const p = Object.fromEntries(
      Object.keys(r).map((w) => w === C ? [w, $] : [w, r[w]].slice())
    );
    if (l.value && !u.value.disableTimeRangeValidation) {
      const w = (L) => m.value ? d(
        {
          hours: p.hours[L],
          minutes: p.minutes[L],
          seconds: p.seconds[L]
        },
        m.value[L]
      ) : null, V = (L) => _n(m.value[L], 0);
      return !(s(w(0), w(1)) && (yt(w(0), V(1)) || Mt(w(1), V(0))));
    }
    return !0;
  }, h = (C, $) => {
    b(C, $) && (S(C, $), e && e());
  }, R = (C) => {
    h("hours", C);
  }, v = (C) => {
    h("minutes", C);
  }, E = (C) => {
    h("seconds", C);
  }, _ = (C, $) => {
    R(C.hours), v(C.minutes), E(C.seconds), m.value && $(m.value);
  }, g = (C) => {
    if (C) {
      const $ = Array.isArray(C), p = $ ? [+C[0].hours, +C[1].hours] : +C.hours, w = $ ? [+C[0].minutes, +C[1].minutes] : +C.minutes, V = $ ? [+(C[0].seconds ?? 0), +(C[1].seconds ?? 0)] : +(C.seconds ?? 0);
      S("hours", p), S("minutes", w), a.value.enableSeconds && S("seconds", V);
    }
  }, T = (C, $) => {
    const p = {
      hours: Array.isArray(r.hours) ? r.hours[C] : r.hours,
      disabledArr: []
    };
    return ($ || $ === 0) && (p.hours = $), Array.isArray(c.disabledTimes) && (p.disabledArr = u.value.enabled && Array.isArray(c.disabledTimes[C]) ? c.disabledTimes[C] : c.disabledTimes), p;
  }, I = j(() => (C, $) => {
    if (Array.isArray(c.disabledTimes)) {
      const { disabledArr: p, hours: w } = T(C, $), V = p.filter((L) => +L.hours === w);
      return V[0]?.minutes === "*" ? { hours: [w], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: V?.map((L) => +L.minutes) ?? [],
        seconds: V?.map((L) => L.seconds ? +L.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: S,
    updateHours: R,
    updateMinutes: v,
    updateSeconds: E,
    getSetDateTime: Y,
    updateTimeValues: _,
    getSecondsValue: A,
    assignStartTime: g,
    validateTime: b,
    disabledTimesConfig: I
  };
}, ul = (e) => {
  const {
    getDate: M,
    time: m,
    modelValue: r,
    state: c,
    defaults: { startTime: u, range: a, timeConfig: s }
  } = Ae(), { getTimeObj: d } = We();
  Vt(() => {
    c.isTextInputDate && T();
  });
  const { updateTimeValues: O, getSetDateTime: A, assignTime: Y, assignStartTime: S, disabledTimesConfig: l, validateTime: b } = Ha(h);
  function h() {
    e("update-flow-step");
  }
  const R = ($) => {
    const { hours: p, minutes: w, seconds: V } = $;
    return { hours: +p, minutes: +w, seconds: V ? +V : 0 };
  }, v = () => {
    if (s.value.startTime) {
      if (Array.isArray(s.value.startTime)) {
        const p = R(s.value.startTime[0]), w = R(s.value.startTime[1]);
        return [_e(M(), p), _e(M(), w)];
      }
      const $ = R(s.value.startTime);
      return _e(M(), $);
    }
    return a.value.enabled ? [null, null] : null;
  }, E = () => {
    if (a.value.enabled) {
      const [$, p] = v();
      r.value = [A($, 0), A(p, 1)];
    } else
      r.value = A(v());
  }, _ = ($) => Array.isArray($) ? [d(M($[0])), d(M($[1]))] : [d($ ?? M())], g = ($, p, w) => {
    Y("hours", $), Y("minutes", p), Y("seconds", s.value.enableSeconds ? w : 0);
  }, T = () => {
    const [$, p] = _(r.value);
    return a.value.enabled ? g(
      [$.hours, p.hours],
      [$.minutes, p.minutes],
      [$.seconds, p.seconds]
    ) : g($.hours, $.minutes, $.seconds);
  };
  Ee(() => (S(u.value), r.value ? T() : E()));
  const I = () => {
    Array.isArray(r.value) ? r.value = r.value.map(($, p) => $ && A($, p)) : r.value = A(r.value), e("time-update");
  };
  return {
    modelValue: r,
    time: m,
    disabledTimesConfig: l,
    validateTime: b,
    updateTime: ($) => {
      O($, I);
    }
  };
}, il = /* @__PURE__ */ Ve({
  __name: "TimePickerSolo",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["time-update", "mount", "reset-flow", "update-flow-step"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = vt(), u = rt(c, at.TimePicker), a = xe("time-input"), { time: s, modelValue: d, disabledTimesConfig: O, updateTime: A, validateTime: Y } = ul(r);
    return Ee(() => {
      r("mount");
    }), M({ getSidebarProps: () => ({
      modelValue: d,
      time: s,
      updateTime: A
    }), toggleTimePicker: (b, h = !1, R = "") => {
      a.value?.toggleTimePicker(b, h, R);
    } }), (b, h) => (W(), Re(ta, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: we(({ wrapClass: R }) => [
        ke("div", {
          class: ye(R)
        }, [
          Be(La, nt({ ref: "time-input" }, b.$props, {
            hours: t(s).hours,
            minutes: t(s).minutes,
            seconds: t(s).seconds,
            "disabled-times-config": t(O),
            "validate-time": t(Y),
            "onUpdate:hours": h[0] || (h[0] = (v) => t(A)({ hours: v, minutes: t(s).minutes, seconds: t(s).seconds })),
            "onUpdate:minutes": h[1] || (h[1] = (v) => t(A)({ hours: t(s).hours, minutes: v, seconds: t(s).seconds })),
            "onUpdate:seconds": h[2] || (h[2] = (v) => t(A)({ hours: t(s).hours, minutes: t(s).minutes, seconds: v })),
            onResetFlow: h[3] || (h[3] = (v) => b.$emit("reset-flow"))
          }), Fe({ _: 2 }, [
            Ce(t(u), (v, E) => ({
              name: v,
              fn: we((_) => [
                ne(b.$slots, v, je(et(_)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), cl = (e, M) => {
  const {
    getDate: m,
    rootProps: r,
    defaults: { filters: c }
  } = Ae(), { validateMonthYearInRange: u, validateMonthYear: a } = Ue(), s = (S, l) => {
    let b = S;
    return c.value.months.includes(Pe(b)) ? (b = l ? ht(S, 1) : Bt(S, 1), s(b, l)) : b;
  }, d = (S, l) => {
    let b = S;
    return c.value.years.includes(he(b)) ? (b = l ? $a(S, 1) : Sa(S, 1), d(b, l)) : b;
  }, O = (S, l = !1) => {
    const b = _e(m(), { month: e.month, year: e.year });
    let h = S ? ht(b, 1) : Bt(b, 1);
    r.disableYearSelect && (h = Ze(h, e.year));
    let R = Pe(h), v = he(h);
    c.value.months.includes(R) && (h = s(h, S), R = Pe(h), v = he(h)), c.value.years.includes(v) && (h = d(h, S), v = he(h)), u(R, v, S, r.preventMinMaxNavigation) && A(R, v, l);
  }, A = (S, l, b = !1) => {
    M("update-month-year", { month: S, year: l, fromNav: b });
  }, Y = j(() => (S) => a(
    _e(m(), { month: e.month, year: e.year }),
    r.preventMinMaxNavigation,
    S
  ));
  return { handleMonthYearChange: O, isDisabled: Y, updateMonthYear: A };
}, dl = { class: "dp--header-wrap" }, vl = {
  key: 0,
  class: "dp__month_year_wrap"
}, ml = { key: 0 }, fl = { class: "dp__month_year_wrap" }, pl = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], hl = /* @__PURE__ */ Ve({
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
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, {
      rootEmit: u,
      rootProps: a,
      modelValue: s,
      defaults: { ariaLabels: d, filters: O, config: A, highlight: Y, safeDates: S, ui: l }
    } = Ae(), { transitionName: b, showTransition: h } = Et(), { showLeftIcon: R, showRightIcon: v } = ea(), { handleMonthYearChange: E, isDisabled: _, updateMonthYear: g } = cl(c, r), { getMaxMonth: T, getMinMonth: I, getYearFromDate: C, groupListAndMap: $, checkHighlightYear: p, checkHighlightMonth: w } = We(), { checkKeyDown: V } = Ie(), { formatYear: L } = mt(), { checkMinMaxValue: H } = Ue(), { boolHtmlAttribute: re } = At(), le = ve(!1), X = ve(!1), x = ve(!1);
    Ee(() => {
      r("mount");
    });
    const ae = (B) => ({
      get: () => c[B],
      set: (y) => {
        const K = B === Ge.month ? Ge.year : Ge.month;
        r("update-month-year", { [B]: y, [K]: c[K] }), B === Ge.month ? se(!0) : Me(!0);
      }
    }), q = j(ae(Ge.month)), oe = j(ae(Ge.year)), z = j(() => (B) => ({
      month: c.month,
      year: c.year,
      items: B === Ge.month ? c.months : c.years,
      instance: c.instance,
      updateMonthYear: g,
      toggle: B === Ge.month ? se : Me
    })), ee = j(() => {
      const B = c.months.find((y) => y.value === c.month);
      return B || { text: "", value: 0 };
    }), me = j(() => $(c.months, (B) => {
      const y = c.month === B.value, K = H(
        B.value,
        I(c.year, S.value.minDate),
        T(c.year, S.value.maxDate)
      ) || O.value.months.includes(B.value), pe = w(Y.value, B.value, c.year);
      return { active: y, disabled: K, highlighted: pe };
    })), Z = j(() => $(c.years, (B) => {
      const y = c.year === B.value, K = H(
        B.value,
        C(S.value.minDate),
        C(S.value.maxDate)
      ) || O.value.years.includes(B.value), pe = p(Y.value, B.value);
      return { active: y, disabled: K, highlighted: pe };
    })), ie = (B, y, K) => {
      K === void 0 ? B.value = !B.value : B.value = K, B.value ? (x.value = !0, u("overlay-toggle", { open: !0, overlay: y })) : (x.value = !1, u("overlay-toggle", { open: !1, overlay: y }));
    }, se = (B = !1, y) => {
      fe(B), ie(le, He.month, y);
    }, Me = (B = !1, y) => {
      fe(B), ie(X, He.year, y);
    }, fe = (B) => {
      B || r("reset-flow");
    }, G = j(() => [
      {
        type: Ge.month,
        index: 1,
        toggle: se,
        modelValue: q.value,
        updateModelValue: (B) => q.value = B,
        text: ee.value.text,
        showSelectionGrid: le.value,
        items: me.value,
        ariaLabel: d.value?.openMonthsOverlay,
        overlayLabel: d.value.monthPicker?.(!0) ?? void 0
      },
      {
        type: Ge.year,
        index: 2,
        toggle: Me,
        modelValue: oe.value,
        updateModelValue: (B) => oe.value = B,
        text: L(c.year),
        showSelectionGrid: X.value,
        items: Z.value,
        ariaLabel: d.value?.openYearsOverlay,
        overlayLabel: d.value.yearPicker?.(!0) ?? void 0
      }
    ]), ce = j(() => a.disableYearSelect ? [G.value[0]] : a.yearFirst ? [...G.value].reverse() : G.value);
    return M({
      toggleMonthPicker: se,
      toggleYearPicker: Me,
      handleMonthYearChange: E
    }), (B, y) => (W(), J("div", dl, [
      B.$slots["month-year"] ? (W(), J("div", vl, [
        ne(B.$slots, "month-year", je(et({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(g),
          handleMonthYearChange: t(E),
          instance: e.instance,
          isDisabled: t(_)
        })))
      ])) : (W(), J(Te, { key: 1 }, [
        B.$slots["top-extra"] ? (W(), J("div", ml, [
          ne(B.$slots, "top-extra", { value: t(s) })
        ])) : te("", !0),
        ke("div", fl, [
          t(R)(e.instance) && !t(a).vertical ? (W(), Re(Yt, {
            key: 0,
            "aria-label": t(d)?.prevMonth,
            disabled: t(re)(t(_)(!1)),
            class: ye(t(l)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: y[0] || (y[0] = (K) => t(E)(!1, !0))
          }, {
            default: we(() => [
              B.$slots["arrow-left"] ? ne(B.$slots, "arrow-left", { key: 0 }) : te("", !0),
              B.$slots["arrow-left"] ? te("", !0) : (W(), Re(t(Ca), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : te("", !0),
          ke("div", {
            class: ye(["dp__month_year_wrap", {
              dp__year_disable_select: t(a).disableYearSelect
            }])
          }, [
            (W(!0), J(Te, null, Ce(ce.value, (K) => (W(), J(Te, {
              key: K.type
            }, [
              ke("button", {
                type: "button",
                "data-dp-element": `overlay-${K.type}`,
                class: ye(["dp__btn dp__month_year_select", { "dp--hidden-el": x.value }]),
                "aria-label": `${K.text}-${K.ariaLabel}`,
                "data-test-id": `${K.type}-toggle-overlay-${e.instance}`,
                tabindex: "0",
                "data-dp-action-element": "0",
                onClick: (pe) => K.toggle(!1),
                onKeydown: (pe) => t(V)(pe, () => K.toggle(), !0)
              }, [
                B.$slots[K.type] ? ne(B.$slots, K.type, {
                  key: 0,
                  text: K.text,
                  value: c[K.type]
                }) : te("", !0),
                B.$slots[K.type] ? te("", !0) : (W(), J(Te, { key: 1 }, [
                  ot(Ne(K.text), 1)
                ], 64))
              ], 42, pl),
              Be(_t, {
                name: t(b)(K.showSelectionGrid),
                css: t(h)
              }, {
                default: we(() => [
                  K.showSelectionGrid ? (W(), Re(Ft, {
                    key: 0,
                    items: K.items,
                    "is-last": t(a).autoApply && !t(A).keepActionRow,
                    "skip-button-ref": !1,
                    type: K.type,
                    "header-refs": [],
                    "menu-wrap-ref": e.menuWrapRef,
                    "overlay-label": K.overlayLabel,
                    onSelected: K.updateModelValue,
                    onToggle: K.toggle
                  }, Fe({
                    "button-icon": we(() => [
                      B.$slots["calendar-icon"] ? ne(B.$slots, "calendar-icon", { key: 0 }) : te("", !0),
                      B.$slots["calendar-icon"] ? te("", !0) : (W(), Re(t(It), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    B.$slots[`${K.type}-overlay-value`] ? {
                      name: "item",
                      fn: we(({ item: pe }) => [
                        ne(B.$slots, `${K.type}-overlay-value`, {
                          text: pe.text,
                          value: pe.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    B.$slots[`${K.type}-overlay`] ? {
                      name: "overlay",
                      fn: we(() => [
                        ne(B.$slots, `${K.type}-overlay`, nt({ ref_for: !0 }, z.value(K.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    B.$slots[`${K.type}-overlay-header`] ? {
                      name: "header",
                      fn: we(() => [
                        ne(B.$slots, `${K.type}-overlay-header`, {
                          toggle: K.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "is-last", "type", "menu-wrap-ref", "overlay-label", "onSelected", "onToggle"])) : te("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          t(R)(e.instance) && t(a).vertical ? (W(), Re(Yt, {
            key: 1,
            "aria-label": t(d)?.prevMonth,
            "el-name": "action-prev",
            disabled: t(re)(t(_)(!1)),
            class: ye(t(l)?.navBtnPrev),
            onActivate: y[1] || (y[1] = (K) => t(E)(!1, !0))
          }, {
            default: we(() => [
              B.$slots["arrow-up"] ? ne(B.$slots, "arrow-up", { key: 0 }) : te("", !0),
              B.$slots["arrow-up"] ? te("", !0) : (W(), Re(t(Ya), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : te("", !0),
          t(v)(e.instance) ? (W(), Re(Yt, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t(re)(t(_)(!0)),
            "aria-label": t(d)?.nextMonth,
            class: ye(t(l)?.navBtnNext),
            onActivate: y[2] || (y[2] = (K) => t(E)(!0, !0))
          }, {
            default: we(() => [
              B.$slots[t(a).vertical ? "arrow-down" : "arrow-right"] ? ne(B.$slots, t(a).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : te("", !0),
              B.$slots[t(a).vertical ? "arrow-down" : "arrow-right"] ? te("", !0) : (W(), Re(fa(t(a).vertical ? t(Ba) : t(xa)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label", "class"])) : te("", !0)
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
}, wl = { class: "dp__cell_inner" }, Dl = ["id", "aria-selected", "aria-disabled", "aria-label", "tabindex", "data-test-id", "data-dp-element-active", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Ml = /* @__PURE__ */ Ve({
  __name: "DpCalendar",
  props: {
    instance: {},
    mappedDates: {},
    month: {},
    year: {}
  },
  emits: ["mount", "select-date", "set-hover-date", "handle-scroll", "handle-swipe"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, {
      getDate: u,
      rootEmit: a,
      rootProps: s,
      defaults: { transitions: d, config: O, ariaLabels: A, multiCalendars: Y, weekNumbers: S, multiDates: l, ui: b }
    } = Ae(), { isDateAfter: h, isDateEqual: R, resetDateTime: v, getCellId: E } = We(), { checkKeyDown: _, checkStopPropagation: g, isTouchDevice: T } = Ie(), { formatWeekDay: I } = mt(), C = xe("calendar-wrap"), $ = xe("active-tooltip"), p = ve([]), w = ve(null), V = ve(!0), L = ve(!1), H = ve(""), re = ve({
      bottom: "",
      left: "",
      transform: ""
    }), le = ve({ left: "50%" });
    un(C, {
      onSwipeEnd: (o, k) => {
        O.value.noSwipe || (s.vertical ? (k === "up" || k === "down") && r("handle-swipe", k === "up" ? "left" : "right") : (k === "left" || k === "right") && r("handle-swipe", k === "right" ? "left" : "right"));
      }
    });
    const X = j(() => s.calendar ? s.calendar(c.mappedDates) : c.mappedDates), x = j(() => s.dayNames ? Array.isArray(s.dayNames) ? s.dayNames : s.dayNames() : n());
    Ee(() => {
      r("mount", { cmp: "calendar", dayRefs: p.value }), O.value.monthChangeOnScroll && C.value && C.value.addEventListener("wheel", B, { passive: !1 });
    }), bt(() => {
      O.value.monthChangeOnScroll && C.value && C.value.removeEventListener("wheel", B);
    });
    const ae = (o) => o ? s.vertical ? "vNext" : "next" : s.vertical ? "vPrevious" : "previous", q = (o, k) => {
      if (s.transitions) {
        const i = v(_e(u(), { month: c.month, year: c.year }));
        H.value = h(v(_e(u(), { month: o, year: k })), i) ? d.value[ae(!0)] : d.value[ae(!1)], V.value = !1, Ke(() => {
          V.value = !0;
        });
      }
    }, oe = j(
      () => ({
        ...b.value.calendar
      })
    ), z = (o) => ({ type: "dot", ...o }), ee = j(() => (o) => {
      const k = z(o);
      return {
        dp__marker_dot: k.type === "dot",
        dp__marker_line: k.type === "line"
      };
    }), me = j(() => (o) => R(o, w.value)), Z = j(() => ({
      dp__calendar: !0,
      dp__calendar_next: Y.value.count > 0 && c.instance !== 0
    })), ie = j(() => (o) => s.hideOffsetDates ? o.current : !0), se = async (o, k) => {
      const { width: i, height: F } = o.getBoundingClientRect();
      w.value = k.value;
      let f = { left: `${i / 2}px` }, N = -50;
      if (await Ke(), $.value?.[0]) {
        const { left: Q, width: ge } = $.value[0].getBoundingClientRect();
        Q < 0 && (f = { left: "0" }, N = 0, le.value.left = `${i / 2}px`), globalThis.innerWidth < Q + ge && (f = { right: "0" }, N = 0, le.value.left = `${ge - i / 2}px`);
      }
      re.value = {
        bottom: `${F}px`,
        ...f,
        transform: `translateX(${N}%)`
      };
    }, Me = async (o, k, i) => {
      const F = ct(p.value?.[k]?.[i]);
      F && (o.marker?.customPosition && o.marker?.tooltip?.length ? re.value = o.marker.customPosition(F) : await se(F, o), a("tooltip-open", o.marker));
    }, fe = async (o, k, i) => {
      if (L.value && l.value.enabled && l.value.dragSelect)
        return r("select-date", o);
      if (r("set-hover-date", o), o.marker?.tooltip?.length) {
        if (s.hideOffsetDates && !o.current) return;
        await Me(o, k, i);
      }
    }, G = (o) => {
      w.value && (w.value = null, re.value = structuredClone({ bottom: "", left: "", transform: "" }), a("tooltip-close", o.marker));
    }, ce = (o, k, i) => {
      o && (Array.isArray(p.value[k]) ? p.value[k][i] = o : p.value[k] = [o]);
    }, B = (o) => {
      O.value.monthChangeOnScroll && (o.preventDefault(), r("handle-scroll", o));
    }, y = (o) => S.value ? S.value.type === "local" ? Pn(o.value, {
      weekStartsOn: +s.weekStart,
      locale: s.locale
    }) : S.value.type === "iso" ? Tn(o.value) : typeof S.value.type == "function" ? S.value.type(o.value) : "" : "", K = (o) => {
      const k = o[0];
      return S.value?.hideOnOffsetDates ? o.some((i) => i.current) ? y(k) : "" : y(k);
    }, pe = (o, k, i = !0) => {
      !i && T() || (!l.value.enabled || O.value.allowPreventDefault) && (g(o, O.value), r("select-date", k));
    }, $e = (o) => {
      g(o, O.value);
    }, D = (o) => {
      l.value.enabled && l.value.dragSelect ? (L.value = !0, r("select-date", o)) : l.value.enabled && r("select-date", o);
    }, n = () => {
      const o = u(), k = Gt(o, { locale: s.locale, weekStartsOn: +s.weekStart }), i = ha(o, { locale: s.locale, weekStartsOn: +s.weekStart });
      return pa({ start: k, end: i }).map((f) => I(f));
    };
    return M({ triggerTransition: q }), (o, k) => (W(), J("div", {
      class: ye(Z.value)
    }, [
      ke("div", {
        ref: "calendar-wrap",
        class: ye(oe.value),
        role: "grid"
      }, [
        ke("div", gl, [
          t(S) ? (W(), J("div", yl, Ne(t(S).label), 1)) : te("", !0),
          (W(!0), J(Te, null, Ce(x.value, (i, F) => (W(), J("div", {
            key: F,
            class: "dp__calendar_header_item",
            role: "gridcell",
            "data-test-id": "calendar-header",
            "aria-label": t(A)?.weekDay?.(F)
          }, [
            ne(o.$slots, "calendar-header", {
              day: i,
              index: F
            }, () => [
              ot(Ne(i), 1)
            ])
          ], 8, bl))), 128))
        ]),
        k[2] || (k[2] = ke("div", { class: "dp__calendar_header_separator" }, null, -1)),
        Be(_t, {
          name: H.value,
          css: !!t(d)
        }, {
          default: we(() => [
            V.value ? (W(), J("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: k[1] || (k[1] = (i) => L.value = !1)
            }, [
              (W(!0), J(Te, null, Ce(X.value, (i, F) => (W(), J("div", {
                key: F,
                class: "dp__calendar_row",
                role: "row"
              }, [
                t(S) ? (W(), J("div", kl, [
                  ke("div", wl, Ne(K(i.days)), 1)
                ])) : te("", !0),
                (W(!0), J(Te, null, Ce(i.days, (f, N) => (W(), J("div", {
                  id: t(E)(f.value),
                  ref_for: !0,
                  ref: (Q) => ce(Q, F, N),
                  key: N + F,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (f.classData.dp__active_date || f.classData.dp__range_start || f.classData.dp__range_end) ?? void 0,
                  "aria-disabled": f.classData.dp__cell_disabled || void 0,
                  "aria-label": t(A)?.day?.(f),
                  tabindex: !f.current && t(s).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(E)(f.value),
                  "data-dp-element-active": f.classData.dp__active_date ? 0 : void 0,
                  "data-dp-action-element": "0",
                  onClick: Dt((Q) => pe(Q, f), ["prevent"]),
                  onTouchend: (Q) => pe(Q, f, !1),
                  onKeydown: (Q) => t(_)(Q, () => o.$emit("select-date", f)),
                  onMouseenter: (Q) => fe(f, F, N),
                  onMouseleave: (Q) => G(f),
                  onMousedown: (Q) => D(f),
                  onMouseup: k[0] || (k[0] = (Q) => L.value = !1)
                }, [
                  ke("div", {
                    class: ye(["dp__cell_inner", f.classData])
                  }, [
                    o.$slots.day && ie.value(f) ? ne(o.$slots, "day", {
                      key: 0,
                      day: +f.text,
                      date: f.value
                    }) : te("", !0),
                    o.$slots.day ? te("", !0) : (W(), J(Te, { key: 1 }, [
                      ot(Ne(f.text), 1)
                    ], 64)),
                    f.marker && ie.value(f) ? ne(o.$slots, "marker", {
                      key: 2,
                      marker: f.marker,
                      day: +f.text,
                      date: f.value
                    }, () => [
                      ke("div", {
                        class: ye(ee.value(f.marker)),
                        style: ze(f.marker.color ? { backgroundColor: f.marker.color } : {})
                      }, null, 6)
                    ]) : te("", !0),
                    me.value(f.value) ? (W(), J("div", {
                      key: 3,
                      ref_for: !0,
                      ref: "active-tooltip",
                      class: "dp__marker_tooltip",
                      style: ze(re.value)
                    }, [
                      f.marker?.tooltip ? (W(), J("div", {
                        key: 0,
                        class: "dp__tooltip_content",
                        onClick: $e
                      }, [
                        (W(!0), J(Te, null, Ce(f.marker.tooltip, (Q, ge) => (W(), J("div", {
                          key: ge,
                          class: "dp__tooltip_text"
                        }, [
                          ne(o.$slots, "marker-tooltip", {
                            tooltip: Q,
                            day: f.value
                          }, () => [
                            ke("div", {
                              class: "dp__tooltip_mark",
                              style: ze(Q.color ? { backgroundColor: Q.color } : {})
                            }, null, 4),
                            ke("div", null, Ne(Q.text), 1)
                          ])
                        ]))), 128)),
                        ke("div", {
                          class: "dp__arrow_bottom_tp",
                          style: ze(le.value)
                        }, null, 4)
                      ])) : te("", !0)
                    ], 4)) : te("", !0)
                  ], 2)
                ], 40, Dl))), 128))
              ]))), 128))
            ], 32)) : te("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), _l = (e, M, m, r) => {
  const c = ve([]), u = ve(/* @__PURE__ */ new Date()), a = ve(), {
    getDate: s,
    rootEmit: d,
    calendars: O,
    month: A,
    year: Y,
    time: S,
    modelValue: l,
    rootProps: b,
    today: h,
    state: R,
    defaults: { multiCalendars: v, startTime: E, range: _, config: g, safeDates: T, multiDates: I, timeConfig: C, flow: $ }
  } = Ae(), { validateMonthYearInRange: p, isDisabled: w, isDateRangeAllowed: V, checkMinMaxRange: L } = Ue(), { updateTimeValues: H, getSetDateTime: re, assignTime: le, assignStartTime: X, validateTime: x, disabledTimesConfig: ae } = Ha(r), { formatDay: q } = mt(), { resetDateTime: oe, setTime: z, isDateBefore: ee, isDateEqual: me, getDaysInBetween: Z } = We(), { checkRangeAutoApply: ie, getRangeWithFixedDate: se, handleMultiDatesSelect: Me, setPresetDate: fe } = aa(), { getMapDate: G } = Ie();
  Vt(() => D(R.isTextInputDate));
  const ce = (P) => !g.value.keepViewOnOffsetClick || P ? !0 : !a.value, B = (P, U, de, De = !1) => {
    ce(De) && (O.value[P] ??= O.value[P] = { month: 0, year: 0 }, O.value[P].month = U ?? O.value[P]?.month, O.value[P].year = de ?? O.value[P]?.year);
  }, y = () => {
    b.autoApply && M("select-date");
  }, K = () => {
    E.value && X(E.value);
  };
  Ee(() => {
    l.value || (Pt(), K()), D(!0), b.focusStartDate && b.startDate && Pt();
  });
  const pe = j(() => $.value?.steps?.length && !$.value?.partial ? e.flowStep === $.value.steps.length : !0), $e = () => {
    b.autoApply && pe.value && M("auto-apply", $.value?.partial ? e.flowStep !== $.value?.steps?.length : !1);
  }, D = (P = !1) => {
    if (l.value)
      return Array.isArray(l.value) ? (c.value = l.value, Q(P)) : i(l.value, P);
    if (v.value.count && P && !b.startDate)
      return k(s(), P);
  }, n = () => Array.isArray(l.value) && _.value.enabled ? Pe(l.value[0]) === Pe(l.value[1] ?? l.value[0]) : !1, o = (P) => {
    const U = ht(P, 1);
    return { month: Pe(U), year: he(U) };
  }, k = (P = s(), U = !1) => {
    if ((!v.value.count || !v.value.static || U) && B(0, Pe(P), he(P)), v.value.count && (!l.value || n() || !v.value.solo) && (!v.value.solo || U))
      for (let de = 1; de < v.value.count; de++) {
        const De = _e(s(), { month: A.value(de - 1), year: Y.value(de - 1) }), Oe = Ra(De, { months: 1 });
        O.value[de] = { month: Pe(Oe), year: he(Oe) };
      }
  }, i = (P, U) => {
    k(P), le("hours", lt(P)), le("minutes", st(P)), le("seconds", dt(P)), v.value.count && U && Qe();
  }, F = (P) => {
    if (v.value.count) {
      if (v.value.solo) return 0;
      const U = Pe(P[0]), de = Pe(P[1]);
      return Math.abs(de - U) < v.value.count ? 0 : 1;
    }
    return 1;
  }, f = (P, U) => {
    P[1] && _.value.showLastInRange ? k(P[F(P)], U) : k(P[0], U);
    const de = (De, Oe) => [
      De(P[0]),
      P?.[1] ? De(P[1]) : S[Oe][1]
    ];
    le("hours", de(lt, "hours")), le("minutes", de(st, "minutes")), le("seconds", de(dt, "seconds"));
  }, N = (P, U) => {
    if ((_.value.enabled || b.weekPicker) && !I.value.enabled)
      return f(P, U);
    if (I.value.enabled && U) {
      const de = P[P.length - 1];
      return i(de, U);
    }
  }, Q = (P) => {
    const U = l.value;
    N(U, P), v.value.count && v.value.solo && Qe();
  }, ge = (P, U) => {
    const de = _e(s(), { month: A.value(U), year: Y.value(U) }), De = P < 0 ? ht(de, 1) : Bt(de, 1);
    p(Pe(De), he(De), P < 0, b.preventMinMaxNavigation) && (B(U, Pe(De), he(De)), d("update-month-year", { instance: U, month: Pe(De), year: he(De) }), v.value.count && !v.value.solo && be(U), m());
  }, be = (P) => {
    for (let U = P - 1; U >= 0; U--) {
      const de = Bt(_e(s(), { month: A.value(U + 1), year: Y.value(U + 1) }), 1);
      B(U, Pe(de), he(de));
    }
    for (let U = P + 1; U <= v.value.count - 1; U++) {
      const de = ht(_e(s(), { month: A.value(U - 1), year: Y.value(U - 1) }), 1);
      B(U, Pe(de), he(de));
    }
  }, Qe = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const P = s(s(l.value[1] ?? ht(l.value[0], 1))), [U, de] = [Pe(l.value[0]), he(l.value[0])], [De, Oe] = [Pe(l.value[1]), he(l.value[1])];
      (U !== De || U === De && de !== Oe) && v.value.solo && B(1, Pe(P), he(P));
    } else l.value && !Array.isArray(l.value) && (B(0, Pe(l.value), he(l.value)), k(s()));
  }, Pt = () => {
    b.startDate && (B(0, Pe(s(b.startDate)), he(s(b.startDate))), v.value.count && be(0));
  }, Nt = (P, U) => {
    if (g.value.monthChangeOnScroll) {
      const de = Date.now() - u.value.getTime(), De = Math.abs(P.deltaY);
      let Oe = 500;
      De > 1 && (Oe = 100), De > 100 && (Oe = 0), de > Oe && (u.value = /* @__PURE__ */ new Date(), ge(
        g.value.monthChangeOnScroll === "inverse" ? P.deltaY : -P.deltaY,
        U
      ));
    }
  }, na = (P, U, de = !1) => {
    g.value.monthChangeOnArrows && b.vertical === de && Wt(P, U);
  }, Wt = (P, U) => {
    ge(P === "right" ? -1 : 1, U);
  }, ra = (P) => {
    if (T.value.markers)
      return G(P.value, T.value.markers);
  }, la = (P, U) => {
    switch (b.sixWeeks === !0 ? "append" : b.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [P == 0, !0];
      case "fair":
        return [P == 0 || U > P, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, oa = (P, U, de, De) => {
    if (b.sixWeeks && P.length < 6) {
      const Oe = 6 - P.length, ut = (U.getDay() + 7 - De) % 7, Kt = 6 - (de.getDay() + 7 - De) % 7, [Rt, ca] = la(ut, Kt);
      for (let pt = 1; pt <= Oe; pt++)
        if (ca ? !!(pt % 2) == Rt : Rt) {
          const jt = P[0].days[0], da = Tt(it(jt.value, -7), Pe(U));
          P.unshift({ days: da });
        } else {
          const jt = P[P.length - 1], da = jt.days[jt.days.length - 1], en = Tt(it(da.value, 1), Pe(U));
          P.push({ days: en });
        }
    }
    return P;
  }, Tt = (P, U) => {
    const de = s(P), De = [];
    for (let Oe = 0; Oe < 7; Oe++) {
      const ut = it(de, Oe), St = Pe(ut) !== U;
      De.push({
        text: b.hideOffsetDates && St ? "" : q(ut),
        value: ut,
        current: !St,
        classData: {}
      });
    }
    return De;
  }, sa = (P, U) => {
    const de = [], De = s(new Date(U, P)), Oe = s(new Date(U, P + 1, 0)), ut = b.weekStart, St = Gt(De, { weekStartsOn: ut }), Kt = (Rt) => {
      const ca = Tt(Rt, P);
      if (de.push({ days: ca }), !de[de.length - 1].days.some((pt) => me(s(pt.value), oe(Oe)))) {
        const pt = it(Rt, 7);
        Kt(pt);
      }
    };
    return Kt(St), oa(de, De, Oe, ut);
  }, ua = (P) => {
    const U = z(
      { hours: S.hours, minutes: S.minutes, seconds: Ht() },
      s(P.value)
    );
    d("date-click", U), I.value.enabled ? Me(U, I.value.limit) : l.value = U, r(), Ke().then(() => {
      $e();
    });
  }, Lt = (P) => _.value.noDisabledRange ? Z(c.value[0], P).some((de) => w(de)) : !1, ue = () => {
    c.value = l.value ? l.value.slice().filter((P) => !!P) : [], c.value.length === 2 && !(_.value.fixedStart || _.value.fixedEnd) && (c.value = []);
  }, Le = (P, U) => {
    const de = [s(P.value), it(s(P.value), +_.value.autoRange)];
    V(de) ? (U && Je(P.value), c.value = de) : d("invalid-date", P.value);
  }, Je = (P) => {
    const U = Pe(s(P)), de = he(s(P));
    if (B(0, U, de), v.value.count > 0)
      for (let De = 1; De < v.value.count; De++) {
        const Oe = o(
          _e(s(P), { year: Y.value(De - 1), month: A.value(De - 1) })
        );
        B(De, Oe.month, Oe.year);
      }
  }, $t = (P) => {
    if (Lt(P.value) || !L(P.value, l.value, _.value.fixedStart ? 0 : 1))
      return d("invalid-date", P.value);
    c.value = se(s(P.value));
  }, ft = (P, U) => {
    if (ue(), _.value.autoRange) return Le(P, U);
    if (_.value.fixedStart || _.value.fixedEnd) return $t(P);
    c.value[0] ? L(s(P.value), l.value) && !Lt(P.value) ? ee(s(P.value), s(c.value[0])) ? (c.value.unshift(s(P.value)), d("range-end", c.value[0])) : (c.value[1] = s(P.value), d("range-end", c.value[1])) : d("invalid-date", P.value) : (c.value[0] = s(P.value), d("range-start", c.value[0]));
  }, Ht = (P = !0) => C.value.enableSeconds ? Array.isArray(S.seconds) ? P ? S.seconds[0] : S.seconds[1] : S.seconds : 0, ia = (P) => {
    c.value[P] = z(
      {
        hours: S.hours[P],
        minutes: S.minutes[P],
        seconds: Ht(P !== 1)
      },
      c.value[P]
    );
  }, Ka = () => {
    c.value[0] && c.value[1] && +c.value?.[0] > +c.value?.[1] && (c.value.reverse(), d("range-start", c.value[0]), d("range-end", c.value[1]));
  }, ja = () => {
    c.value.length && (c.value[0] && !c.value[1] ? ia(0) : (ia(0), ia(1), r()), Ka(), l.value = c.value.slice(), ie(
      c.value,
      M,
      c.value.length < 2 || $.value?.steps.length ? e.flowStep !== $.value?.steps?.length : !1
    ));
  }, za = (P, U = !1) => {
    if (w(P.value) || !P.current && b.hideOffsetDates)
      return d("invalid-date", P.value);
    if (a.value = structuredClone(P), !_.value.enabled) return ua(P);
    Array.isArray(S.hours) && Array.isArray(S.minutes) && !I.value.enabled && (ft(P, U), ja());
  }, qa = (P, U) => {
    B(P, U.month, U.year, !0), v.value.count && !v.value.solo && be(P), d("update-month-year", { instance: P, month: U.month, year: U.year }), m(v.value.solo ? P : void 0);
    const de = $.value?.steps?.length ? $.value.steps[e.flowStep] : void 0;
    !U.fromNav && (de === He.month || de === He.year) && r();
  }, Ua = (P) => {
    fe({
      value: P
    }), y(), b.multiCalendars && Ke().then(() => D(!0));
  }, Qa = () => {
    let P = s();
    return b.actionRow?.nowBtnRound && (P = $n(P, {
      roundingMethod: b.actionRow.nowBtnRound.rounding ?? "ceil",
      nearestTo: b.actionRow.nowBtnRound.roundTo ?? 15
    })), P;
  }, Ja = () => {
    const P = Qa();
    !_.value.enabled && !I.value.enabled ? l.value = P : l.value && Array.isArray(l.value) && l.value[0] ? I.value.enabled ? l.value = [...l.value, P] : l.value = ee(P, l.value[0]) ? [P, l.value[0]] : [l.value[0], P] : l.value = [P], y();
  }, Ga = () => {
    if (Array.isArray(l.value))
      if (I.value.enabled) {
        const P = Xa();
        l.value[l.value.length - 1] = re(P);
      } else
        l.value = l.value.map((P, U) => P && re(P, U));
    else
      l.value = re(l.value);
    M("time-update");
  }, Xa = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null, Za = (P) => {
    let U = "";
    if (_.value.enabled && Array.isArray(l.value))
      for (const de of Object.keys(P)) {
        const De = P[de];
        Array.isArray(De) && (S[de][0] !== De[0] && (U = "range-start"), S[de][1] !== De[1] && (U = "range-start"));
      }
    return U;
  };
  return {
    calendars: O,
    modelValue: l,
    month: A,
    year: Y,
    time: S,
    disabledTimesConfig: ae,
    today: h,
    validateTime: x,
    getCalendarDays: sa,
    getMarker: ra,
    handleScroll: Nt,
    handleSwipe: Wt,
    handleArrow: na,
    selectDate: za,
    updateMonthYear: qa,
    presetDate: Ua,
    selectCurrentDate: Ja,
    updateTime: (P) => {
      const U = Za(P);
      H(P, Ga), U && d(U, l.value[U === "range-start" ? 0 : 1]);
    },
    assignMonthAndYear: k,
    setStartTime: K
  };
}, Al = () => {
  const {
    isModelAuto: e,
    matchDate: M,
    isDateAfter: m,
    isDateBefore: r,
    isDateBetween: c,
    isDateEqual: u,
    getWeekFromDate: a,
    getBeforeAndAfterInRange: s
  } = We(), {
    getDate: d,
    today: O,
    rootProps: A,
    defaults: { multiCalendars: Y, multiDates: S, ui: l, highlight: b, safeDates: h, range: R },
    modelValue: v
  } = Ae(), { isDisabled: E } = Ue(), _ = ve(null), g = (D) => {
    !D.current && A.hideOffsetDates || (_.value = D.value);
  }, T = () => {
    _.value = null;
  }, I = (D) => Array.isArray(v.value) && R.value.enabled && v.value[0] && _.value ? D ? m(_.value, v.value[0]) : r(_.value, v.value[0]) : !0, C = (D, n) => {
    const o = () => v.value ? n ? v.value[0] || null : v.value[1] : null, k = v.value && Array.isArray(v.value) ? o() : null;
    return u(d(D.value), k);
  }, $ = (D) => {
    const n = Array.isArray(v.value) ? v.value[0] : null;
    return D ? !r(_.value, n) : !0;
  }, p = (D, n = !0) => (R.value.enabled || A.weekPicker) && Array.isArray(v.value) && v.value.length === 2 ? A.hideOffsetDates && !D.current ? !1 : u(d(D.value), v.value[n ? 0 : 1]) : R.value.enabled ? C(D, n) && $(n) || u(D.value, Array.isArray(v.value) ? v.value[0] : null) && I(n) : !1, w = (D, n) => {
    if (Array.isArray(v.value) && v.value[0] && v.value.length === 1) {
      const o = u(D.value, _.value);
      return n ? m(v.value[0], D.value) && o : r(v.value[0], D.value) && o;
    }
    return !1;
  }, V = (D) => !v.value || A.hideOffsetDates && !D.current ? !1 : R.value.enabled ? A.modelAuto && Array.isArray(v.value) ? u(D.value, v.value[0] ?? O) : !1 : S.value.enabled && Array.isArray(v.value) ? v.value.some((n) => u(n, D.value)) : u(D.value, v.value ? v.value : O), L = (D) => {
    if (R.value.autoRange || A.weekPicker) {
      if (_.value) {
        if (A.hideOffsetDates && !D.current) return !1;
        const n = it(_.value, +R.value.autoRange), o = a(d(_.value), A.weekStart);
        return A.weekPicker ? u(o[1], d(D.value)) : u(n, d(D.value));
      }
      return !1;
    }
    return !1;
  }, H = (D) => {
    if (R.value.autoRange || A.weekPicker) {
      if (_.value) {
        const n = it(_.value, +R.value.autoRange);
        if (A.hideOffsetDates && !D.current) return !1;
        const o = a(d(_.value), A.weekStart);
        return A.weekPicker ? m(D.value, o[0]) && r(D.value, o[1]) : m(D.value, _.value) && r(D.value, n);
      }
      return !1;
    }
    return !1;
  }, re = (D) => {
    if (R.value.autoRange || A.weekPicker) {
      if (_.value) {
        if (A.hideOffsetDates && !D.current) return !1;
        const n = a(d(_.value), A.weekStart);
        return A.weekPicker ? u(n[0], D.value) : u(_.value, D.value);
      }
      return !1;
    }
    return !1;
  }, le = (D) => c(v.value, _.value, D.value), X = () => A.modelAuto && Array.isArray(v.value) ? !!v.value[0] : !1, x = () => A.modelAuto ? e(v.value) : !0, ae = (D) => {
    if (A.weekPicker) return !1;
    const n = R.value.enabled ? !p(D) && !p(D, !1) : !0;
    return !E(D.value) && !V(D) && !(!D.current && A.hideOffsetDates) && n;
  }, q = (D) => R.value.enabled ? A.modelAuto ? X() && V(D) : !1 : V(D), oe = (D) => b.value ? M(D.value, h.value.highlight) : !1, z = (D) => {
    const n = E(D.value);
    return n && (typeof b.value == "function" ? !b.value(D.value, n) : !b.value.options.highlightDisabled);
  }, ee = (D) => typeof b.value == "function" ? b.value(D.value) : b.value.weekdays?.includes(D.value.getDay()), me = (D) => (R.value.enabled || A.weekPicker) && (!(Y.value.count > 0) || D.current) && x() && !(!D.current && A.hideOffsetDates) && !V(D) ? le(D) : !1, Z = (D) => {
    if (Array.isArray(v.value) && v.value.length === 1) {
      const { before: n, after: o } = s(+R.value.maxRange, v.value[0]);
      return Mt(D.value, n) || yt(D.value, o);
    }
    return !1;
  }, ie = (D) => {
    if (Array.isArray(v.value) && v.value.length === 1) {
      const { before: n, after: o } = s(+R.value.minRange, v.value[0]);
      return c([n, o], v.value[0], D.value);
    }
    return !1;
  }, se = (D) => R.value.enabled && (R.value.maxRange || R.value.minRange) ? R.value.maxRange && R.value.minRange ? Z(D) || ie(D) : R.value.maxRange ? Z(D) : ie(D) : !1, Me = (D) => {
    const { isRangeStart: n, isRangeEnd: o } = B(D), k = R.value.enabled ? n || o : !1;
    return {
      dp__cell_offset: !D.current,
      dp__pointer: !A.disabled && !(!D.current && A.hideOffsetDates) && !E(D.value) && !se(D),
      dp__cell_disabled: E(D.value) || se(D),
      dp__cell_highlight: !z(D) && (oe(D) || ee(D)) && !q(D) && !k && !re(D) && !(me(D) && A.weekPicker) && !o,
      dp__cell_highlight_active: !z(D) && (oe(D) || ee(D)) && q(D),
      dp__today: !A.noToday && u(D.value, O) && D.current,
      "dp--past": r(D.value, O),
      "dp--future": m(D.value, O)
    };
  }, fe = (D) => ({
    dp__active_date: q(D),
    dp__date_hover: ae(D)
  }), G = (D) => {
    if (v.value && !Array.isArray(v.value)) {
      const n = a(v.value, A.weekStart);
      return {
        ...K(D),
        dp__range_start: u(n[0], D.value),
        dp__range_end: u(n[1], D.value),
        dp__range_between_week: m(D.value, n[0]) && r(D.value, n[1])
      };
    }
    return {
      ...K(D)
    };
  }, ce = (D) => {
    if (v.value && Array.isArray(v.value)) {
      const n = a(v.value[0], A.weekStart), o = v.value[1] ? a(v.value[1], A.weekStart) : [];
      return {
        ...K(D),
        dp__range_start: u(n[0], D.value) || u(o[0], D.value),
        dp__range_end: u(n[1], D.value) || u(o[1], D.value),
        dp__range_between_week: m(D.value, n[0]) && r(D.value, n[1]) || m(D.value, o[0]) && r(D.value, o[1]),
        dp__range_between: m(D.value, n[1]) && r(D.value, o[0])
      };
    }
    return {
      ...K(D)
    };
  }, B = (D) => {
    const n = Y.value.count > 0 ? D.current && p(D) && x() : p(D) && x(), o = Y.value.count > 0 ? D.current && p(D, !1) && x() : p(D, !1) && x();
    return { isRangeStart: n, isRangeEnd: o };
  }, y = (D) => {
    const { isRangeStart: n, isRangeEnd: o } = B(D);
    return {
      dp__range_start: n,
      dp__range_end: o,
      dp__range_between: me(D),
      dp__date_hover: u(D.value, _.value) && !n && !o && !A.weekPicker,
      dp__date_hover_start: w(D, !0),
      dp__date_hover_end: w(D, !1)
    };
  }, K = (D) => ({
    ...y(D),
    dp__cell_auto_range: H(D),
    dp__cell_auto_range_start: re(D),
    dp__cell_auto_range_end: L(D)
  }), pe = (D) => R.value.enabled ? R.value.autoRange ? K(D) : A.modelAuto ? { ...fe(D), ...y(D) } : A.weekPicker ? ce(D) : y(D) : A.weekPicker ? G(D) : fe(D);
  return {
    setHoverDate: g,
    clearHoverDate: T,
    getDayClassData: (D) => A.hideOffsetDates && !D.current ? {} : {
      ...Me(D),
      ...pe(D),
      [l.value.dayClass ? l.value.dayClass(D.value, v.value) : ""]: !0,
      ...l.value.calendarCell
    }
  };
}, Pl = { key: 0 }, Tl = /* @__PURE__ */ Ve({
  __name: "DatePicker",
  props: /* @__PURE__ */ Pa({
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  }, _r),
  emits: ["mount", "update-flow-step", "reset-flow", "focus-menu", "select-date", "time-update", "auto-apply"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, {
      month: u,
      year: a,
      modelValue: s,
      time: d,
      disabledTimesConfig: O,
      today: A,
      validateTime: Y,
      getCalendarDays: S,
      getMarker: l,
      handleArrow: b,
      handleScroll: h,
      handleSwipe: R,
      selectDate: v,
      updateMonthYear: E,
      presetDate: _,
      selectCurrentDate: g,
      updateTime: T,
      assignMonthAndYear: I,
      setStartTime: C
    } = _l(c, r, fe, G), $ = vt(), { setHoverDate: p, getDayClassData: w, clearHoverDate: V } = Al(), {
      getDate: L,
      rootEmit: H,
      rootProps: re,
      defaults: { multiCalendars: le, timeConfig: X }
    } = Ae(), { getYears: x, getMonths: ae } = Zt(), { getCellId: q } = We(), oe = xe("calendar-header"), z = xe("calendar"), ee = xe("time-picker"), me = rt($, at.Calendar), Z = rt($, at.DatePickerHeader), ie = rt($, at.TimePicker), se = (o) => {
      r("mount", o);
    };
    tt(
      le,
      (o, k) => {
        o.count - k.count > 0 && I();
      },
      { deep: !0 }
    );
    const Me = j(() => (o) => S(u.value(o), a.value(o)).map((k) => ({
      ...k,
      days: k.days.map((i) => (i.marker = l(i), i.classData = w(i), i))
    })));
    function fe(o) {
      o || o === 0 ? z.value?.[o]?.triggerTransition(u.value(o), a.value(o)) : z.value?.forEach((k, i) => k?.triggerTransition(u.value(i), a.value(i)));
    }
    function G() {
      r("update-flow-step");
    }
    const ce = (o, k, i = 0) => {
      oe.value?.[i]?.toggleMonthPicker(o, k);
    }, B = (o, k, i = 0) => {
      oe.value?.[i]?.toggleYearPicker(o, k);
    }, y = (o, k, i) => {
      ee.value?.toggleTimePicker(o, k, i);
    }, K = (o, k) => {
      if (!re.range) {
        const i = s.value ? s.value : A, F = k ? L(k) : i, f = o ? Gt(F, { weekStartsOn: 1 }) : ha(F, { weekStartsOn: 1 });
        v({
          value: f,
          current: Pe(F) === u.value(0),
          text: "",
          classData: {}
        }), document.getElementById(q(f))?.focus();
      }
    }, pe = (o) => {
      oe.value?.[0]?.handleMonthYearChange(o, !0);
    }, $e = (o) => {
      E(0, { month: u.value(0), year: a.value(0) + (o ? 1 : -1), fromNav: !0 });
    }, D = (o) => {
      H("overlay-toggle", { open: !1, overlay: o }), r("focus-menu");
    };
    return M({
      clearHoverDate: V,
      presetDate: _,
      selectCurrentDate: g,
      handleArrow: b,
      updateMonthYear: E,
      setStartTime: C,
      toggleMonthPicker: ce,
      toggleYearPicker: B,
      toggleTimePicker: y,
      getSidebarProps: () => ({
        modelValue: s,
        month: u,
        year: a,
        time: d,
        updateTime: T,
        updateMonthYear: E,
        selectDate: v,
        presetDate: _
      }),
      changeMonth: pe,
      changeYear: $e,
      selectWeekDate: K
    }), (o, k) => (W(), J(Te, null, [
      Be(ta, { collapse: e.collapse }, {
        default: we(({ instances: i, wrapClass: F }) => [
          (W(!0), J(Te, null, Ce(i, (f) => (W(), J("div", {
            key: f,
            class: ye(F)
          }, [
            t(re).hideMonthYearSelect ? te("", !0) : (W(), Re(hl, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(ae)(),
              years: t(x)(),
              month: t(u)(f),
              year: t(a)(f),
              instance: f,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: k[0] || (k[0] = (N) => se(t(gt).header)),
              onResetFlow: k[1] || (k[1] = (N) => o.$emit("reset-flow")),
              onUpdateMonthYear: (N) => t(E)(f, N),
              onOverlayClosed: D
            }, Fe({ _: 2 }, [
              Ce(t(Z), (N, Q) => ({
                name: N,
                fn: we((ge) => [
                  ne(o.$slots, N, nt({ ref_for: !0 }, ge))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            Be(Ml, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": Me.value(f),
              instance: f,
              month: t(u)(f),
              year: t(a)(f),
              onSelectDate: (N) => t(v)(N, f !== 1),
              onSetHoverDate: k[2] || (k[2] = (N) => t(p)(N)),
              onHandleScroll: (N) => t(h)(N, f),
              onHandleSwipe: (N) => t(R)(N, f),
              onMount: k[3] || (k[3] = (N) => se(t(gt).calendar))
            }, Fe({ _: 2 }, [
              Ce(t(me), (N, Q) => ({
                name: N,
                fn: we((ge) => [
                  ne(o.$slots, N, nt({ ref_for: !0 }, ge))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(X).enableTimePicker ? (W(), J("div", Pl, [
        ne(o.$slots, "time-picker", je(et({ time: t(d), updateTime: t(T) })), () => [
          Be(La, {
            ref: "time-picker",
            hours: t(d).hours,
            minutes: t(d).minutes,
            seconds: t(d).seconds,
            "disabled-times-config": t(O),
            "validate-time": t(Y),
            "no-overlay-focus": e.noOverlayFocus,
            onMount: k[4] || (k[4] = (i) => se(t(gt).timePicker)),
            "onUpdate:hours": k[5] || (k[5] = (i) => t(T)({ hours: i, minutes: t(d).minutes, seconds: t(d).seconds })),
            "onUpdate:minutes": k[6] || (k[6] = (i) => t(T)({ hours: t(d).hours, minutes: i, seconds: t(d).seconds })),
            "onUpdate:seconds": k[7] || (k[7] = (i) => t(T)({ hours: t(d).hours, minutes: t(d).minutes, seconds: i })),
            onResetFlow: k[8] || (k[8] = (i) => o.$emit("reset-flow"))
          }, Fe({ _: 2 }, [
            Ce(t(ie), (i, F) => ({
              name: i,
              fn: we((f) => [
                ne(o.$slots, i, je(et(f)))
              ])
            }))
          ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"])
        ])
      ])) : te("", !0)
    ], 64));
  }
}), $l = (e, M) => {
  const {
    getDate: m,
    modelValue: r,
    year: c,
    calendars: u,
    defaults: { highlight: a, range: s, multiDates: d }
  } = Ae(), { isDateBetween: O, isDateEqual: A } = We(), { checkRangeAutoApply: Y, handleMultiDatesSelect: S, setMonthOrYearRange: l } = aa();
  Vt();
  const { isDisabled: b } = Ue(), { formatQuarterText: h } = mt(), {
    selectYear: R,
    groupedYears: v,
    showYearPicker: E,
    isDisabled: _,
    toggleYearPicker: g,
    handleYearSelect: T,
    handleYear: I,
    setStartDate: C
  } = Wa(M), $ = ve();
  Ee(() => {
    C();
  });
  const p = j(() => (q) => r.value ? Array.isArray(r.value) ? r.value.some((oe) => ba(q, oe)) : ba(r.value, q) : !1), w = (q) => {
    if (s.value.enabled) {
      if (Array.isArray(r.value)) {
        const oe = A(q, r.value[0]) || A(q, r.value[1]);
        return O(r.value, $.value, q) && !oe;
      }
      return !1;
    }
    return !1;
  }, V = (q, oe) => q.quarter === wa(oe) && q.year === he(oe), L = (q) => typeof a.value == "function" ? a.value({ quarter: wa(q), year: he(q) }) : a.value.quarters.some((oe) => V(oe, q)), H = j(() => (q) => {
    const oe = _e(m(), { year: c.value(q) });
    return Sn({
      start: Ot(oe),
      end: Ta(oe)
    }).map((z) => {
      const ee = Rn(z), me = ka(z), Z = b(z), ie = w(ee), se = L(ee);
      return {
        text: h(ee, me),
        value: ee,
        active: p.value(ee),
        highlighted: se,
        disabled: Z,
        isBetween: ie
      };
    });
  }), re = (q) => {
    S(q, d.value.limit), M("auto-apply", !0);
  }, le = (q) => {
    r.value = l(q), Y(r.value, M, r.value.length < 2);
  }, X = (q) => {
    r.value = q, M("auto-apply");
  };
  return {
    groupedYears: v,
    year: c,
    isDisabled: _,
    quarters: H,
    showYearPicker: E,
    modelValue: r,
    selectYear: R,
    toggleYearPicker: g,
    handleYearSelect: T,
    handleYear: I,
    setHoverDate: (q) => {
      $.value = q;
    },
    selectQuarter: (q, oe, z) => {
      if (!z)
        return u.value[oe].month = Pe(ka(q)), d.value.enabled ? re(q) : s.value.enabled ? le(q) : X(q);
    }
  };
}, Sl = { class: "dp--quarter-items" }, Rl = ["data-test-id", "disabled", "onClick", "onMouseover"], Cl = /* @__PURE__ */ Ve({
  __name: "QuarterPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e, {
      defaults: { config: u }
    } = Ae(), a = vt(), { boolHtmlAttribute: s } = At(), d = rt(a, at.YearMode), {
      groupedYears: O,
      year: A,
      isDisabled: Y,
      quarters: S,
      modelValue: l,
      showYearPicker: b,
      setHoverDate: h,
      selectQuarter: R,
      toggleYearPicker: v,
      handleYearSelect: E,
      handleYear: _
    } = $l(c, r);
    return M({ getSidebarProps: () => ({
      modelValue: l,
      year: A,
      selectQuarter: R,
      handleYearSelect: E,
      handleYear: _
    }) }), (T, I) => (W(), Re(ta, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: we(({ instances: C, wrapClass: $ }) => [
        (W(!0), J(Te, null, Ce(C, (p) => (W(), J("div", {
          key: p,
          class: ye($)
        }, [
          ke("div", {
            class: "dp-quarter-picker-wrap",
            style: ze({ minHeight: `${t(u).modeHeight}px` })
          }, [
            T.$slots["top-extra"] ? ne(T.$slots, "top-extra", {
              key: 0,
              value: t(l)
            }) : te("", !0),
            ke("div", null, [
              Be(Na, {
                items: t(O)(p),
                instance: p,
                "show-year-picker": t(b)[p],
                year: t(A)(p),
                "is-disabled": (w) => t(Y)(p, w),
                onHandleYear: (w) => t(_)(p, w),
                onYearSelect: (w) => t(E)(w, p),
                onToggleYearPicker: (w) => t(v)(p, w?.flow, w?.show)
              }, Fe({ _: 2 }, [
                Ce(t(d), (w, V) => ({
                  name: w,
                  fn: we((L) => [
                    ne(T.$slots, w, nt({ ref_for: !0 }, L))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            ke("div", Sl, [
              (W(!0), J(Te, null, Ce(t(S)(p), (w, V) => (W(), J("div", { key: V }, [
                ke("button", {
                  type: "button",
                  class: ye(["dp--qr-btn", {
                    "dp--qr-btn-active": w.active,
                    "dp--qr-btn-between": w.isBetween,
                    "dp--qr-btn-disabled": w.disabled,
                    "dp--highlighted": w.highlighted
                  }]),
                  "data-dp-action-element": "0",
                  "data-test-id": w.value,
                  disabled: t(s)(w.disabled),
                  onClick: (L) => t(R)(w.value, p, w.disabled),
                  onMouseover: (L) => t(h)(w.value)
                }, [
                  ne(T.$slots, "quarter", {
                    value: w.value,
                    text: w.text
                  }, () => [
                    ot(Ne(w.text), 1)
                  ])
                ], 42, Rl)
              ]))), 128))
            ])
          ], 4)
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), xl = ["id", "tabindex", "role", "aria-label"], Ol = {
  key: 0,
  class: "dp--menu-load-container"
}, Yl = {
  key: 1,
  class: "dp--menu-header"
}, Bl = ["data-dp-mobile"], Il = {
  key: 0,
  class: "dp__sidebar_left"
}, El = ["data-dp-mobile"], Vl = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], Fl = { class: "dp__instance_calendar" }, Nl = {
  key: 2,
  class: "dp__sidebar_right"
}, Wl = {
  key: 2,
  class: "dp__action_extra"
}, Ll = /* @__PURE__ */ Ve({
  __name: "DatepickerMenu",
  props: {
    collapse: { type: Boolean },
    noOverlayFocus: { type: Boolean },
    getInputRect: { type: Function }
  },
  emits: ["close-picker", "select-date", "auto-apply", "time-update", "menu-blur"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = vt(), {
      state: u,
      rootProps: a,
      defaults: { textInput: s, inline: d, config: O, ui: A, ariaLabels: Y },
      setState: S
    } = Ae(), { isMobile: l } = Xt(), { handleEventPropagation: b, getElWithin: h, checkStopPropagation: R, checkKeyDown: v } = Ie();
    Bn();
    const E = xe("inner-menu"), _ = xe("dp-menu"), g = xe("dyn-cmp"), T = ve(0), I = ve(!1), C = ve(!1), { flowStep: $, updateFlowStep: p, childMount: w, resetFlow: V, handleFlow: L } = En(g), H = (n) => {
      C.value = !0, O.value.allowPreventDefault && n.preventDefault(), R(n, O.value, !0);
    };
    Ee(() => {
      I.value = !0, re(), globalThis.addEventListener("resize", re);
      const n = ct(_);
      n && !s.value.enabled && !d.value.enabled && S("menuFocused", !0), n && (n.addEventListener("pointerdown", H), n.addEventListener("mousedown", H)), document.addEventListener("mousedown", $e);
    }), bt(() => {
      globalThis.removeEventListener("resize", re), document.removeEventListener("mousedown", $e);
      const n = ct(_);
      n && (n.removeEventListener("pointerdown", H), n.removeEventListener("mousedown", H));
    });
    const re = () => {
      const n = ct(E);
      n && (T.value = n.getBoundingClientRect().width);
    }, le = j(() => a.monthPicker ? qr : a.yearPicker ? Qr : a.timePicker ? il : a.quarterPicker ? Cl : Tl), X = () => {
      const n = ct(_);
      n && n.focus({ preventScroll: !0 });
    }, x = j(() => g.value?.getSidebarProps() || {}), ae = rt(c, at.ActionRow), q = rt(c, at.PassTrough), oe = j(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), z = j(
      () => ({
        dp__menu: !0,
        dp__menu_index: !d.value.enabled,
        dp__relative: d.value.enabled,
        ...A.value.menu
      })
    ), ee = (n) => {
      R(n, O.value, !0);
    }, me = (n) => {
      O.value.escClose && (r("close-picker"), b(n, O.value));
    }, Z = (n) => {
      a.arrowNavigation || (n === Xe.left || n === Xe.up ? fe("handleArrow", Xe.left, 0, n === Xe.up) : fe("handleArrow", Xe.right, 0, n === Xe.down));
    }, ie = (n) => {
      S("shiftKeyInMenu", n.shiftKey), !a.hideMonthYearSelect && n.code === Se.tab && n.target.classList.contains("dp__menu") && u.shiftKeyInMenu && (n.preventDefault(), R(n, O.value, !0), r("close-picker"));
    }, se = (n) => {
      g.value?.toggleTimePicker(!1, !1), g.value?.toggleMonthPicker(!1, !1, n), g.value?.toggleYearPicker(!1, !1, n);
    }, Me = (n, o = 0) => n === "month" ? g.value?.toggleMonthPicker(!1, !0, o) : n === "year" ? g.value?.toggleYearPicker(!1, !0, o) : n === "time" ? g.value?.toggleTimePicker(!0, !1) : se(o), fe = (n, ...o) => {
      g.value?.[n] && g.value?.[n](...o);
    }, G = () => {
      fe("selectCurrentDate");
    }, ce = (n) => {
      fe("presetDate", on(n));
    }, B = () => {
      fe("clearHoverDate");
    }, y = (n, o) => {
      fe("updateMonthYear", n, o);
    }, K = (n, o) => {
      n.preventDefault(), Z(o);
    }, pe = (n) => {
      if (ie(n), n.key === Se.home || n.key === Se.end)
        return fe(
          "selectWeekDate",
          n.key === Se.home,
          n.target.getAttribute("id")
        );
      switch ((n.key === Se.pageUp || n.key === Se.pageDown) && (n.shiftKey ? (fe("changeYear", n.key === Se.pageUp), h(_.value, "overlay-year")?.focus()) : (fe("changeMonth", n.key === Se.pageUp), h(_.value, n.key === Se.pageUp ? "action-prev" : "action-next")?.focus()), n.target.getAttribute("id") && _.value?.focus({ preventScroll: !0 })), n.key) {
        case Se.esc:
          return me(n);
        case Se.arrowLeft:
          return K(n, Xe.left);
        case Se.arrowRight:
          return K(n, Xe.right);
        case Se.arrowUp:
          return K(n, Xe.up);
        case Se.arrowDown:
          return K(n, Xe.down);
        default:
          return;
      }
    }, $e = (n) => {
      d.value.enabled && !d.value.input && !_.value?.contains(n.target) && C.value && (C.value = !1, r("menu-blur"));
    };
    return M({
      updateMonthYear: y,
      switchView: Me,
      onValueCleared: () => {
        g.value?.setStartTime?.();
      },
      handleFlow: L
    }), (n, o) => (W(), J("div", {
      id: t(a).menuId,
      ref: "dp-menu",
      tabindex: t(d).enabled ? void 0 : "0",
      role: t(d).enabled ? void 0 : "dialog",
      "aria-label": t(Y)?.menu,
      class: ye(z.value),
      onMouseleave: B,
      onClick: ee,
      onKeydown: pe
    }, [
      (t(a).disabled || t(a).readonly) && t(d).enabled || t(a).loading ? (W(), J("div", {
        key: 0,
        class: ye(oe.value)
      }, [
        t(a).loading ? (W(), J("div", Ol, [...o[5] || (o[5] = [
          ke("span", { class: "dp--menu-loader" }, null, -1)
        ])])) : te("", !0)
      ], 2)) : te("", !0),
      n.$slots["menu-header"] ? (W(), J("div", Yl, [
        ne(n.$slots, "menu-header")
      ])) : te("", !0),
      ne(n.$slots, "arrow"),
      ke("div", {
        ref: "inner-menu",
        class: ye({
          dp__menu_content_wrapper: t(a).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"],
          "dp--menu-content-wrapper-collapsed": e.collapse && (t(a).presetDates?.length || !!n.$slots["left-sidebar"] || !!n.$slots["right-sidebar"])
        }),
        "data-dp-mobile": t(l),
        style: ze({ "--dp-menu-width": `${T.value}px` })
      }, [
        n.$slots["left-sidebar"] ? (W(), J("div", Il, [
          ne(n.$slots, "left-sidebar", je(et(x.value)))
        ])) : te("", !0),
        t(a).presetDates.length ? (W(), J("div", {
          key: 1,
          class: ye({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(l)
        }, [
          (W(!0), J(Te, null, Ce(t(a).presetDates, (k, i) => (W(), J(Te, { key: i }, [
            k.slot ? ne(n.$slots, k.slot, {
              key: 0,
              presetDate: ce,
              label: k.label,
              value: k.value
            }) : (W(), J("button", {
              key: 1,
              type: "button",
              style: ze(k.style || {}),
              class: ye(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
              "data-test-id": k.testId ?? void 0,
              "data-dp-mobile": t(l),
              onClick: Dt((F) => ce(k.value), ["prevent"]),
              onKeydown: (F) => t(v)(F, () => ce(k.value), !0)
            }, Ne(k.label), 47, Vl))
          ], 64))), 128))
        ], 10, El)) : te("", !0),
        ke("div", Fl, [
          (W(), Re(fa(le.value), {
            ref: "dyn-cmp",
            "flow-step": t($),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": _.value,
            onMount: t(w),
            onUpdateFlowStep: t(p),
            onResetFlow: t(V),
            onFocusMenu: X,
            onSelectDate: o[0] || (o[0] = (k) => n.$emit("select-date")),
            onAutoApply: o[1] || (o[1] = (k) => n.$emit("auto-apply", k)),
            onTimeUpdate: o[2] || (o[2] = (k) => n.$emit("time-update"))
          }, Fe({ _: 2 }, [
            Ce(t(q), (k, i) => ({
              name: k,
              fn: we((F) => [
                ne(n.$slots, k, je(et({ ...F })))
              ])
            }))
          ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
        ]),
        n.$slots["right-sidebar"] ? (W(), J("div", Nl, [
          ne(n.$slots, "right-sidebar", je(et(x.value)))
        ])) : te("", !0)
      ], 14, Bl),
      n.$slots["action-extra"] ? (W(), J("div", Wl, [
        n.$slots["action-extra"] ? ne(n.$slots, "action-extra", {
          key: 0,
          selectCurrentDate: G
        }) : te("", !0)
      ])) : te("", !0),
      !t(a).autoApply || t(O).keepActionRow ? (W(), Re(Vr, {
        key: 3,
        "menu-mount": I.value,
        "calendar-width": T.value,
        onClosePicker: o[3] || (o[3] = (k) => n.$emit("close-picker")),
        onSelectDate: o[4] || (o[4] = (k) => n.$emit("select-date")),
        onSelectNow: G
      }, Fe({ _: 2 }, [
        Ce(t(ae), (k, i) => ({
          name: k,
          fn: we((F) => [
            ne(n.$slots, k, je(et(F)))
          ])
        }))
      ]), 1032, ["menu-mount", "calendar-width"])) : te("", !0)
    ], 42, xl));
  }
}), Hl = ["data-dp-mobile"], Kl = /* @__PURE__ */ Ve({
  __name: "VueDatePicker",
  setup(e, { expose: M }) {
    const {
      rootEmit: m,
      setState: r,
      inputValue: c,
      modelValue: u,
      rootProps: a,
      defaults: { inline: s, config: d, textInput: O, range: A, multiDates: Y, teleport: S, floatingConfig: l }
    } = Ae(), { validateDate: b, isValidTime: h } = Ue(), { menuTransition: R, showTransition: v } = Et(), { isMobile: E } = Xt(), { findNextFocusableElement: _, getNumVal: g } = Ie(), T = vt(), I = ve(!1), C = ve(s.value.enabled || a.centered), $ = ga(a, "modelValue"), p = ga(a, "timezone"), w = xe("dp-menu-wrap"), V = xe("dp-menu"), L = xe("input-cmp"), H = xe("picker-wrapper"), re = xe("menu-arrow"), le = ve(!1), X = ve(!1), x = ve(!1), ae = ve(!0), q = (ue) => (l.value.arrow && (l.value.arrow === !0 ? ue.push(ya({ element: re })) : ue.push(ya({ element: l.value.arrow }))), ue), { floatingStyles: oe, middlewareData: z, placement: ee, y: me } = dn(
      L,
      w,
      {
        strategy: l.value.strategy,
        placement: l.value.placement,
        middleware: q([mn(l.value.offset), fn(), pn()]),
        whileElementsMounted: vn
      }
    );
    Ee(() => {
      se(a.modelValue), Ke().then(() => {
        s.value.enabled || globalThis.addEventListener("resize", $e);
      }), s.value.enabled && (I.value = !0), globalThis.addEventListener("keyup", D), globalThis.addEventListener("keydown", n);
    }), bt(() => {
      s.value.enabled || globalThis.removeEventListener("resize", $e), globalThis.removeEventListener("keyup", D), globalThis.removeEventListener("keydown", n);
    });
    const Z = Fa(T, a.presetDates), ie = rt(T, at.Input);
    tt(
      [$, p],
      () => {
        se($.value);
      },
      { deep: !0 }
    ), tt([ee, me], () => {
      !s.value.enabled && !a.centered && ae.value && (C.value = !1, Ke().then(() => {
        ae.value = !1, C.value = !0;
      }));
    });
    const { parseExternalModelValue: se, emitModelValue: Me, formatInputValue: fe, checkBeforeEmit: G } = In(), ce = j(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: s.value.enabled,
        "dp--flex-display-collapsed": x.value,
        dp__flex_display_with_input: s.value.input
      })
    ), B = j(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), y = j(() => s.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), K = () => L.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, pe = () => {
      I.value && d.value.closeOnScroll && be();
    }, $e = () => {
      const ue = V.value?.$el.getBoundingClientRect().width ?? 0;
      x.value = document.body.offsetWidth <= ue;
    }, D = (ue) => {
      ue.key === "Tab" && !s.value.enabled && !a.teleport && d.value.tabOutClosesMenu && (H.value.contains(document.activeElement) || be()), X.value = ue.shiftKey;
    }, n = (ue) => {
      X.value = ue.shiftKey;
    }, o = () => {
      !a.disabled && !a.readonly && (ae.value = !0, I.value = !0, I.value && m("open"), I.value || ge(), se(a.modelValue));
    }, k = () => {
      c.value = "", ge(), V.value?.onValueCleared(), L.value?.setParsedDate(null), m("update:model-value", null), m("cleared"), d.value.closeOnClearValue && be();
    }, i = () => {
      const ue = u.value;
      return !ue || !Array.isArray(ue) && b(ue) ? !0 : Array.isArray(ue) ? Y.value.enabled || ue.length === 2 && b(ue[0]) && b(ue[1]) ? !0 : A.value.partialRange && !a.timePicker ? b(ue[0]) : !1 : !1;
    }, F = () => {
      G() && i() ? (Me(), be()) : m("invalid-select");
    }, f = (ue) => {
      N(), Me(), d.value.closeOnAutoApply && !ue && be();
    }, N = () => {
      L.value && O.value.enabled && L.value.setParsedDate(u.value);
    }, Q = (ue = !1) => {
      a.autoApply && h(u.value) && i() && (A.value.enabled && Array.isArray(u.value) ? (A.value.partialRange || u.value.length === 2) && f(ue) : f(ue));
    }, ge = () => {
      O.value.enabled || (u.value = null);
    }, be = (ue = !1) => {
      ae.value = !0, ue && u.value && d.value.setDateOnMenuClose && F(), s.value.enabled || (I.value && (I.value = !1, r("menuFocused", !1), r("shiftKeyInMenu", !1), m("closed"), c.value && se($.value)), ge(), m("blur"));
    }, Qe = (ue, Le, Je = !1) => {
      if (!ue) {
        u.value = null;
        return;
      }
      const $t = Array.isArray(ue) ? !ue.some((Ht) => !b(Ht)) : b(ue), ft = h(ue);
      $t && ft ? (r("isTextInputDate", !0), u.value = ue, Le ? (le.value = Je, F(), m("text-submit")) : a.autoApply && Q(!0), Ke().then(() => {
        r("isTextInputDate", !1);
      })) : m("invalid-date", ue);
    }, Pt = () => {
      a.autoApply && h(u.value) && Me(), N();
    }, Nt = () => I.value ? be() : o(), na = (ue) => {
      u.value = ue;
    }, Wt = () => {
      O.value.enabled && (r("isInputFocused", !0), fe()), m("focus");
    }, ra = () => {
      O.value.enabled && (r("isInputFocused", !1), se(a.modelValue), le.value && _(H.value, X.value)?.focus()), m("blur");
    }, la = (ue, Le) => {
      V.value && V.value.updateMonthYear(Le ?? 0, {
        month: g(ue.month),
        year: g(ue.year)
      });
    }, oa = (ue) => {
      se(ue ?? a.modelValue);
    }, Tt = (ue, Le) => {
      V.value?.switchView(ue, Le);
    }, sa = (ue, Le) => {
      if (I.value)
        return d.value.onClickOutside ? d.value.onClickOutside(ue, Le) : be(!0);
    }, ua = (ue = 0) => {
      V.value?.handleFlow(ue);
    }, Lt = () => w;
    return cn(w, (ue) => sa(i, ue), {
      ignore: [L]
    }), M({
      closeMenu: be,
      selectDate: F,
      clearValue: k,
      openMenu: o,
      onScroll: pe,
      formatInputValue: fe,
      // exposed for testing purposes
      updateInternalModelValue: na,
      // modify internal modelValue
      setMonthYear: la,
      parseModel: oa,
      switchView: Tt,
      toggleMenu: Nt,
      handleFlow: ua,
      getDpWrapMenuRef: Lt
    }), (ue, Le) => (W(), J("div", {
      ref: "picker-wrapper",
      class: ye(ce.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": t(E)
    }, [
      Be(Or, {
        ref: "input-cmp",
        "is-menu-open": I.value,
        onClear: k,
        onOpen: o,
        onSetInputDate: Qe,
        onSetEmptyDate: t(Me),
        onSelectDate: F,
        onToggle: Nt,
        onClose: be,
        onFocus: Wt,
        onBlur: ra,
        onRealBlur: Le[0] || (Le[0] = (Je) => t(r)("isInputFocused", !1))
      }, Fe({ _: 2 }, [
        Ce(t(ie), (Je, $t) => ({
          name: Je,
          fn: we((ft) => [
            ne(ue.$slots, Je, je(et(ft)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      Be(sn, {
        to: t(S),
        disabled: !t(S)
      }, {
        default: we(() => [
          ke("div", {
            ref: "dp-menu-wrap",
            class: ye({
              "dp--menu-wrapper": !t(s).enabled,
              dp__outer_menu_wrap: !0,
              "dp--centered": t(a).centered
            }),
            style: ze(!t(s).enabled && !t(a).centered ? t(oe) : void 0)
          }, [
            Be(_t, {
              name: t(R)(t(ee).startsWith("top")),
              css: t(v) && !t(s).enabled && !t(a).centered && C.value
            }, {
              default: we(() => [
                I.value && C.value ? (W(), Re(Ll, {
                  key: 0,
                  ref: "dp-menu",
                  class: ye({ [B.value]: !0 }),
                  "no-overlay-focus": y.value,
                  collapse: x.value,
                  "get-input-rect": K,
                  onClosePicker: be,
                  onSelectDate: F,
                  onAutoApply: Q,
                  onTimeUpdate: Pt,
                  onMenuBlur: Le[1] || (Le[1] = (Je) => t(m)("blur"))
                }, Fe({ _: 2 }, [
                  Ce(t(Z), (Je, $t) => ({
                    name: Je,
                    fn: we((ft) => [
                      ne(ue.$slots, Je, je(et({ ...ft })))
                    ])
                  })),
                  !t(s).enabled && !t(a).centered && t(l).arrow === !0 ? {
                    name: "arrow",
                    fn: we(() => [
                      ke("div", {
                        ref: "menu-arrow",
                        class: ye({
                          dp__arrow_top: t(ee) === "bottom",
                          dp__arrow_bottom: t(ee) === "top"
                        }),
                        style: ze({
                          left: t(z).arrow?.x != null ? `${t(z).arrow.x}px` : "",
                          top: t(z).arrow?.y != null ? `${t(z).arrow.y}px` : ""
                        })
                      }, null, 6)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["class", "no-overlay-focus", "collapse"])) : te("", !0)
              ]),
              _: 3
            }, 8, ["name", "css"])
          ], 6)
        ]),
        _: 3
      }, 8, ["to", "disabled"])
    ], 10, Hl));
  }
}), Xl = /* @__PURE__ */ Ve({
  __name: "VueDatePickerRoot",
  props: /* @__PURE__ */ Pa({
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
  }, Ar),
  emits: ["update:model-value", "internal-model-change", "text-submit", "text-input", "open", "closed", "focus", "blur", "cleared", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "invalid-date", "tooltip-open", "tooltip-close", "am-pm-change", "range-start", "range-end", "date-click", "overlay-toggle", "invalid"],
  setup(e, { expose: M, emit: m }) {
    const r = m, c = e;
    On(c, r);
    const u = vt(), a = Fa(u, c.presetDates), s = xe("date-picker");
    return M(Tr(s)), (d, O) => (W(), Re(Kl, { ref: "date-picker" }, Fe({ _: 2 }, [
      Ce(t(a), (A, Y) => ({
        name: A,
        fn: we((S) => [
          ne(d.$slots, A, je(et(S)))
        ])
      }))
    ]), 1536));
  }
});
export {
  to as TZDate,
  Xl as VueDatePicker,
  Ea as WeekStart
};
