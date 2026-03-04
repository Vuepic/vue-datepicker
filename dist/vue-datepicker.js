import { h as Ye, ref as ie, reactive as Gt, computed as H, provide as tn, readonly as an, inject as nn, watch as tt, onMounted as Ee, onUnmounted as kt, nextTick as je, defineComponent as Ve, useTemplateRef as Ce, createElementBlock as G, openBlock as W, renderSlot as ne, createCommentVNode as ae, unref as t, createElementVNode as ye, normalizeClass as he, createBlock as Se, withModifiers as _t, createVNode as Be, normalizeProps as Ke, mergeProps as nt, Fragment as Te, normalizeStyle as ze, createTextVNode as ut, toDisplayString as Ne, onBeforeUpdate as rn, withDirectives as Ut, renderList as Re, vShow as Qt, withCtx as be, withKeys as ln, Transition as At, createSlots as Fe, useSlots as mt, resolveDynamicComponent as pa, guardReactiveProps as et, mergeDefaults as Pa, toValue as on, toRef as ya, Teleport as sn } from "vue";
import { unrefElement as vt, useSwipe as un, onClickOutside as cn } from "@vueuse/core";
import { useFloating as dn, autoUpdate as vn, offset as fn, arrow as mn, flip as pn, shift as hn } from "@floating-ui/vue";
import { getYear as me, getMonth as _e, set as De, setYear as Ze, parse as ma, getSeconds as ft, getMinutes as it, getHours as ot, isValid as Jt, addMonths as yt, subMonths as It, differenceInCalendarDays as gn, eachDayOfInterval as ha, getDay as yn, isBefore as st, isAfter as rt, isEqual as Dt, format as qe, subDays as bn, addDays as dt, startOfWeek as Xt, endOfWeek as ga, startOfMonth as kn, setMonth as wn, isDate as Dn, endOfYear as Ta, startOfYear as Yt, addYears as $a, subYears as Sa, differenceInYears as Mn, add as Ra, sub as _n, setMilliseconds as An, setSeconds as Pn, getWeek as Tn, getISOWeek as $n, roundToNearestMinutes as Sn, isSameQuarter as ba, eachQuarterOfInterval as Rn, startOfQuarter as Cn, endOfQuarter as ka, getQuarter as wa } from "date-fns";
import { TZDate as xn } from "@date-fns/tz";
import { TZDate as ao } from "@date-fns/tz";
function Et() {
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
function On() {
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
const Ia = Symbol("ContextKey"), Yn = (e, M) => {
  const { setTimeModelValue: p } = Ie(), o = Tr(e), i = ie(null), u = Gt({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1,
    arrowNavigationLevel: 0
  }), r = o.getDate(/* @__PURE__ */ new Date()), s = ie(""), v = ie([{ month: _e(r), year: me(r) }]), O = Gt({ hours: 0, minutes: 0, seconds: 0 });
  p(O, null, r, o.range.value.enabled);
  const A = H({
    get: () => i.value,
    set: (g) => {
      i.value = g;
    }
  }), Y = H(
    () => (g) => v.value[g] ? v.value[g].month : 0
  ), x = H(
    () => (g) => v.value[g] ? v.value[g].year : 0
  ), l = (g, _) => {
    u[g] = _;
  }, w = () => {
    p(O, A.value, r, o.range.value.enabled);
  };
  tn(Ia, {
    rootProps: e,
    defaults: o,
    modelValue: A,
    state: an(u),
    rootEmit: M,
    calendars: v,
    month: Y,
    year: x,
    time: O,
    today: r,
    inputValue: s,
    setState: l,
    updateTime: w,
    getDate: o.getDate
  });
}, Me = () => {
  const e = nn(Ia);
  if (!e)
    throw new Error("Can't use context");
  return e;
};
var Ge = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ge || {}), bt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(bt || {}), He = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(He || {});
const Bn = ["timestamp", "date", "iso"];
var Xe = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Xe || {}), $e = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))($e || {}), Mt = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(Mt || {}), Ea = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e))(Ea || {});
const In = () => {
  const { rootProps: e, state: M } = Me(), p = H(() => M.arrowNavigationLevel), o = ie(-1), i = ie(-1);
  tt(p, (E, T) => {
    b(E === 0 && T > 0);
  });
  const u = ie([]), r = ie(/* @__PURE__ */ new Map()), s = () => {
    const E = Array.from(
      document.querySelectorAll(`[data-dp-action-element="${p.value}"]`)
    ), T = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
    for (const k of E) {
      const $ = k.getBoundingClientRect(), S = $.top, R = $.left;
      T.has(S) || T.set(S, []), T.get(S).push(k), m.set(k, { row: S, col: R });
    }
    u.value = Array.from(T.entries()).sort((k, $) => k[0] - $[0]).map(([k, $]) => v($, m)), r.value = m;
  }, v = (E, T) => E.sort((m, k) => {
    const $ = T.get(m), S = T.get(k);
    return $.col - S.col;
  }), O = (E, T) => {
    p.value === 0 && (o.value = E, i.value = T);
  }, A = (E) => {
    if (![$e.arrowUp, $e.arrowDown, $e.arrowLeft, $e.arrowRight].includes(E.key))
      return;
    s(), E.preventDefault();
    const T = document.activeElement;
    if (!T?.hasAttribute("data-dp-action-element"))
      return;
    let m = -1, k = -1;
    for (let $ = 0; $ < u.value.length; $++) {
      const S = u.value[$].indexOf(T);
      if (S !== -1) {
        m = $, k = S;
        break;
      }
    }
    if (m !== -1)
      switch (E.key) {
        case $e.arrowLeft:
          return Y(m, k);
        case $e.arrowRight:
          return x(m, k);
        case $e.arrowUp:
          return l(m, k);
        case $e.arrowDown:
          return w(m, k);
        default:
          return;
      }
  }, Y = (E, T) => {
    if (T > 0) {
      const m = u.value[E][T - 1];
      O(E, T - 1), m && m.focus();
    }
  }, x = (E, T) => {
    if (T < u.value[E].length - 1) {
      const m = u.value[E][T + 1];
      O(E, T + 1), m && m.focus();
    }
  }, l = (E, T) => {
    if (E > 0) {
      const m = u.value[E - 1], k = Math.min(T, m.length - 1), $ = m[k];
      O(E - 1, k), $ && $.focus();
    }
  }, w = (E, T) => {
    if (E < u.value.length - 1) {
      const m = u.value[E + 1], k = Math.min(T, m.length - 1), $ = m[k];
      O(E + 1, k), $ && $.focus();
    }
  }, g = () => {
    je().then(() => {
      s();
      const E = u.value[o.value]?.[i.value];
      E && _(E);
    });
  }, _ = (E) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        E.focus({ preventScroll: !0 });
      });
    });
  }, b = (E) => {
    if (E)
      return g();
    const T = document.querySelector(`[data-dp-element-active="${p.value}"]`);
    if (T && !E)
      _(T);
    else {
      const m = document.querySelector(`[data-dp-action-element="${p.value}"]`);
      m && _(m);
    }
  };
  Ee(() => {
    e.arrowNavigation && (b(!1), document.addEventListener("keydown", A));
  }), kt(() => {
    e.arrowNavigation && document.removeEventListener("keydown", A);
  });
}, En = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: M, isValidDate: p } = Ue(), { convertType: o, errorMapper: i } = Ie(), {
    getDate: u,
    rootEmit: r,
    state: s,
    rootProps: v,
    inputValue: O,
    defaults: { textInput: A, range: Y, multiDates: x, timeConfig: l, formats: w },
    modelValue: g,
    updateTime: _
  } = Me(), { setTime: b, getWeekFromDate: E } = We(), { formatSelectedDate: T, formatForTextInput: m } = pt();
  tt(
    g,
    (y, L) => {
      r("internal-model-change", g.value), JSON.stringify(L ?? {}) !== JSON.stringify(y ?? {}) && _();
    },
    { deep: !0 }
  ), tt(Y, (y, L) => {
    y.enabled !== L.enabled && (g.value = null);
  }), tt(
    () => w.value.input,
    () => {
      te();
    }
  );
  const k = (y) => y ? v.modelType ? Z(y) : {
    hours: ot(y),
    minutes: it(y),
    seconds: l.value.enableSeconds ? ft(y) : 0
  } : null, $ = (y) => v.modelType ? Z(y) : { month: _e(y), year: me(y) }, S = (y) => Array.isArray(y) ? x.value.enabled ? y.map((L) => R(L, Ze(u(), L))) : M(
    () => [
      Ze(u(), y[0]),
      y[1] ? Ze(u(), y[1]) : e(Y.value.partialRange)
    ],
    Y.value.enabled
  ) : Ze(u(), +y), R = (y, L) => (typeof y == "string" || typeof y == "number") && v.modelType ? de(y) : L, h = (y) => Array.isArray(y) ? [
    R(y[0], b(y[0])),
    R(y[1], b(y[1]))
  ] : R(y, b(y)), D = (y) => {
    const L = De(u(), { date: 1 });
    return Array.isArray(y) ? x.value.enabled ? y.map(
      (fe) => R(fe, De(L, { month: +fe.month, year: +fe.year }))
    ) : M(
      () => [
        R(y[0], De(L, { month: +y[0].month, year: +y[0].year })),
        R(
          y[1],
          y[1] ? De(L, { month: +y[1].month, year: +y[1].year }) : e(Y.value.partialRange)
        )
      ],
      Y.value.enabled
    ) : R(y, De(L, { month: +y.month, year: +y.year }));
  }, V = (y) => {
    if (Array.isArray(y))
      return y.map((L) => de(L));
    throw new Error(i.dateArr("multi-dates"));
  }, F = (y) => {
    if (Array.isArray(y) && Y.value.enabled) {
      const L = y[0], fe = y[1];
      return [
        u(Array.isArray(L) ? L[0] : null),
        Array.isArray(fe) && fe.length ? u(fe[0]) : null
      ];
    }
    return u(y[0]);
  }, Q = (y) => v.modelAuto ? Array.isArray(y) ? [de(y[0]), de(y[1])] : v.autoApply ? [de(y)] : [de(y), null] : Array.isArray(y) ? M(
    () => y[1] ? [
      de(y[0]),
      y[1] ? de(y[1]) : e(Y.value.partialRange)
    ] : [de(y[0])],
    Y.value.enabled
  ) : de(y), U = () => {
    Array.isArray(g.value) && Y.value.enabled && g.value.length === 1 && g.value.push(e(Y.value.partialRange));
  }, re = () => {
    const y = g.value;
    return [
      Z(y[0]),
      y[1] ? Z(y[1]) : e(Y.value.partialRange)
    ];
  }, ee = () => Array.isArray(g.value) ? g.value[1] ? re() : Z(o(g.value[0])) : [], I = () => (g.value || []).map((y) => Z(y)), X = (y = !1) => (y || U(), v.modelAuto ? ee() : x.value.enabled ? I() : Array.isArray(g.value) ? M(() => re(), Y.value.enabled) : Z(o(g.value))), j = (y) => !y || Array.isArray(y) && !y.length ? null : v.timePicker ? h(o(y)) : v.monthPicker ? D(o(y)) : v.yearPicker ? S(o(y)) : x.value.enabled ? V(o(y)) : v.weekPicker ? F(o(y)) : Q(o(y)), oe = (y) => {
    if (s.isTextInputDate) return;
    const L = j(y);
    p(o(L)) ? (g.value = o(L), te()) : (g.value = null, O.value = "");
  }, K = () => g.value ? x.value.enabled ? g.value.map((y) => T(y)).join("; ") : A.value.enabled ? m() : T(g.value) : "", te = () => {
    O.value = K();
  }, de = (y) => v.modelType ? Bn.includes(v.modelType) ? u(y) : v.modelType === "format" && typeof w.value.input == "string" ? ma(y, w.value.input, u(), { locale: v.locale }) : ma(y, v.modelType, u(), { locale: v.locale }) : u(y), Z = (y) => y ? v.modelType ? v.modelType === "timestamp" ? +y : v.modelType === "iso" ? y.toISOString() : v.modelType === "format" && typeof w.value.input == "string" ? T(y) : T(y, v.modelType) : y : null, ce = (y) => {
    r("update:model-value", y);
  }, le = (y) => Array.isArray(g.value) ? x.value.enabled ? g.value.map((L) => y(L)) : [y(g.value[0]), g.value[1] ? y(g.value[1]) : null] : y(o(g.value)), we = () => {
    if (Array.isArray(g.value)) {
      const y = E(g.value[0], v.weekStart), L = g.value[1] ? E(g.value[1], v.weekStart) : [];
      return [y.map((fe) => u(fe)), L.map((fe) => u(fe))];
    }
    return E(g.value, v.weekStart).map((y) => u(y));
  }, ve = (y) => ce(o(le(y))), Ae = () => r("update:model-value", we());
  return {
    checkBeforeEmit: () => g.value ? Y.value.enabled ? Y.value.partialRange ? g.value.length >= 1 : g.value.length === 2 : !!g.value : !1,
    parseExternalModelValue: oe,
    formatInputValue: te,
    emitModelValue: () => (te(), v.monthPicker ? ve($) : v.timePicker ? ve(k) : v.yearPicker ? ve(me) : v.weekPicker ? Ae() : ce(X()))
  };
}, Vt = () => {
  const {
    defaults: { transitions: e }
  } = Me(), M = H(() => (o) => e.value ? o ? e.value.open : e.value.close : ""), p = H(() => (o) => e.value ? o ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: M, showTransition: !!e.value, menuTransition: p };
}, Ft = (e) => {
  const {
    today: M,
    time: p,
    modelValue: o,
    defaults: { range: i }
  } = Me(), { setTimeModelValue: u } = Ie();
  tt(
    i,
    (r, s) => {
      r.enabled !== s.enabled && u(p, o.value, M, i.value.enabled);
    },
    { deep: !0 }
  ), tt(
    o,
    (r, s) => {
      e && JSON.stringify(r ?? {}) !== JSON.stringify(s ?? {}) && e();
    },
    { deep: !0 }
  );
}, Ue = () => {
  const {
    defaults: { safeDates: e, range: M, multiDates: p, filters: o, timeConfig: i },
    rootProps: u,
    getDate: r
  } = Me(), { getMapKeyType: s, getMapDate: v, errorMapper: O, convertType: A } = Ie(), { isDateBefore: Y, isDateAfter: x, isDateEqual: l, resetDate: w, getDaysInBetween: g, setTimeValue: _, getTimeObj: b, setTime: E } = We(), T = (c) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(r(c)) : !!v(c, e.value.disabledDates) : !1, m = (c) => e.value.maxDate ? u.yearPicker ? me(c) > me(e.value.maxDate) : x(c, e.value.maxDate) : !1, k = (c) => e.value.minDate ? u.yearPicker ? me(c) < me(e.value.minDate) : Y(c, e.value.minDate) : !1, $ = (c) => {
    if (!c) return !1;
    const d = m(c), a = k(c), n = T(c), f = o.value.months.map((Qe) => +Qe).includes(_e(c)), N = o.value.weekDays?.length ? o.value.weekDays.some((Qe) => +Qe === yn(c)) : !1, q = V(c), pe = me(c), ge = pe < +u.yearRange[0] || pe > +u.yearRange[1];
    return !(d || a || n || f || ge || N || q);
  }, S = (c, d) => Y(...Ae(e.value.minDate, c, d)) || l(...Ae(e.value.minDate, c, d)), R = (c, d) => x(...Ae(e.value.maxDate, c, d)) || l(...Ae(e.value.maxDate, c, d)), h = (c, d, a) => {
    let n = !1;
    return e.value.maxDate && a && R(c, d) && (n = !0), e.value.minDate && !a && S(c, d) && (n = !0), n;
  }, D = (c, d, a, n) => {
    let C = !1;
    return n && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? C = h(c, d, a) : (e.value.minDate && S(c, d) || e.value.maxDate && R(c, d)) && (C = !0) : C = !0, C;
  }, V = (c) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !v(
    c,
    e.value.allowedDates,
    s(u.monthPicker, u.yearPicker)
  ) : !1, F = (c) => !$(c), Q = (c) => M.value.noDisabledRange ? !ha({ start: c[0], end: c[1] }).some((a) => F(a)) : !0, U = (c) => {
    if (c) {
      const d = me(c);
      return d >= +u.yearRange[0] && d <= u.yearRange[1];
    }
    return !0;
  }, re = (c, d) => !!(Array.isArray(c) && c[d] && (M.value.maxRange || M.value.minRange) && U(c[d])), ee = (c, d, a = 0) => {
    if (re(d, a) && U(c)) {
      const n = gn(c, d[a]), C = g(d[a], c), f = C.length === 1 ? 0 : C.filter((q) => F(q)).length, N = Math.abs(n) - (M.value.minMaxRawRange ? 0 : f);
      if (M.value.minRange && M.value.maxRange)
        return N >= +M.value.minRange && N <= +M.value.maxRange;
      if (M.value.minRange) return N >= +M.value.minRange;
      if (M.value.maxRange) return N <= +M.value.maxRange;
    }
    return !0;
  }, I = () => !i.value.enableTimePicker || u.monthPicker || u.yearPicker || i.value.ignoreTimeValidation, X = (c) => Array.isArray(c) ? [c[0] ? _(c[0]) : null, c[1] ? _(c[1]) : null] : _(c), j = (c, d, a) => d ? c.find(
    (n) => +n.hours === ot(d) && n.minutes === "*" ? !0 : +n.minutes === it(d) && +n.hours === ot(d)
  ) && a : !1, oe = (c, d, a) => {
    const [n, C] = c, [f, N] = d;
    return !j(n, f, a) && !j(C, N, a) && a;
  }, K = (c, d) => {
    const a = Array.isArray(d) ? d : [d];
    return Array.isArray(u.disabledTimes) ? Array.isArray(u.disabledTimes[0]) ? oe(u.disabledTimes, a, c) : !a.some((n) => j(u.disabledTimes, n, c)) : c;
  }, te = (c, d) => {
    const a = Array.isArray(d) ? [b(d[0]), d[1] ? b(d[1]) : void 0] : b(d), n = !u.disabledTimes(a);
    return c && n;
  }, de = (c, d) => u.disabledTimes ? Array.isArray(u.disabledTimes) ? K(d, c) : te(d, c) : d, Z = (c) => {
    let d = !0;
    if (!c || I()) return !0;
    const a = !e.value.minDate && !e.value.maxDate ? X(c) : c;
    return (u.maxTime || e.value.maxDate) && (d = B(
      u.maxTime,
      e.value.maxDate,
      "max",
      A(a),
      d
    )), (u.minTime || e.value.minDate) && (d = B(
      u.minTime,
      e.value.minDate,
      "min",
      A(a),
      d
    )), de(c, d);
  }, ce = (c) => {
    if (!u.monthPicker) return !0;
    let d = !0;
    const a = r(w(c));
    if (e.value.minDate && e.value.maxDate) {
      const n = r(w(e.value.minDate)), C = r(w(e.value.maxDate));
      return x(a, n) && Y(a, C) || l(a, n) || l(a, C);
    }
    if (e.value.minDate) {
      const n = r(w(e.value.minDate));
      d = x(a, n) || l(a, n);
    }
    if (e.value.maxDate) {
      const n = r(w(e.value.maxDate));
      d = Y(a, n) || l(a, n);
    }
    return d;
  }, le = H(() => (c) => !i.value.enableTimePicker || i.value.ignoreTimeValidation ? !0 : Z(c)), we = H(() => (c) => u.monthPicker ? Array.isArray(c) && (M.value.enabled || p.value.enabled) ? !c.filter((a) => !ce(a)).length : ce(c) : !0), ve = (c, d, a) => {
    if (!d || a && !e.value.maxDate || !a && !e.value.minDate) return !1;
    const n = a ? yt(c, 1) : It(c, 1), C = [_e(n), me(n)];
    return a ? !R(...C) : !S(...C);
  }, Ae = (c, d, a) => [De(r(c), { date: 1 }), De(r(), { month: d, year: a, date: 1 })], J = (c, d, a, n) => {
    if (!c) return !0;
    if (n) {
      const C = a === "max" ? st(c, d) : rt(c, d), f = { seconds: 0, milliseconds: 0 };
      return C || Dt(De(c, f), De(d, f));
    }
    return a === "max" ? c.getTime() <= d.getTime() : c.getTime() >= d.getTime();
  }, B = (c, d, a, n, C) => {
    if (Array.isArray(n)) {
      const N = y(c, n[0], d), q = y(c, n[1], d);
      return J(n[0], N, a, !!d) && J(n[1], q, a, !!d) && C;
    }
    const f = y(c, n, d);
    return J(n, f, a, !!d) && C;
  }, y = (c, d, a) => c ? E(c, d) : r(a ?? d);
  return {
    isDisabled: F,
    validateDate: $,
    validateMonthYearInRange: D,
    isDateRangeAllowed: Q,
    checkMinMaxRange: ee,
    isValidTime: Z,
    validateMonthYear: ve,
    validateMinDate: S,
    validateMaxDate: R,
    isValidDate: (c) => Array.isArray(c) ? Jt(c[0]) && (c[1] ? Jt(c[1]) : !0) : c ? Jt(c) : !1,
    checkPartialRangeValue: (c) => {
      if (c) return null;
      throw new Error(O.prop("partial-range"));
    },
    checkRangeEnabled: (c, d) => {
      if (d) return c();
      throw new Error(O.prop("range"));
    },
    checkMinMaxValue: (c, d, a) => {
      const n = a != null, C = d != null;
      if (!n && !C) return !1;
      const f = +a, N = +d;
      return n && C ? +c > f || +c < N : n ? +c > f : C ? +c < N : !1;
    },
    isTimeValid: le,
    isMonthValid: we
  };
}, Vn = (e) => {
  const {
    rootEmit: M,
    rootProps: p,
    defaults: { timeConfig: o, flow: i }
  } = Me(), u = ie(0), r = Gt({
    [bt.timePicker]: !o.value.enableTimePicker || p.timePicker || p.monthPicker,
    [bt.calendar]: !1,
    [bt.header]: !1
  }), s = H(() => p.monthPicker || p.timePicker), v = (l) => {
    if (i.value?.steps?.length) {
      if (!l && s.value) return x();
      r[l] = !0, Object.keys(r).filter((w) => !r[w]).length || x();
    }
  }, O = () => {
    i.value?.steps?.length && u.value !== -1 && (u.value += 1, M("flow-step", u.value), x()), i.value?.steps?.length === u.value && je().then(() => A());
  }, A = () => {
    u.value = -1;
  }, Y = (l, w, ...g) => {
    i.value?.steps[u.value] === l && e.value && e.value[w]?.(...g);
  }, x = (l = 0) => {
    l && (u.value += l), Y(He.month, "toggleMonthPicker", !0), Y(He.year, "toggleYearPicker", !0), Y(He.calendar, "toggleTimePicker", !1, !0), Y(He.time, "toggleTimePicker", !0, !0);
    const w = i.value?.steps[u.value];
    (w === He.hours || w === He.minutes || w === He.seconds) && Y(w, "toggleTimePicker", !0, !0, w);
  };
  return { childMount: v, updateFlowStep: O, resetFlow: A, handleFlow: x, flowStep: u };
};
function fa(e) {
  return (M = {}) => {
    const p = M.width ? String(M.width) : e.defaultWidth;
    return e.formats[p] || e.formats[e.defaultWidth];
  };
}
function xt(e) {
  return (M, p) => {
    const o = p?.context ? String(p.context) : "standalone";
    let i;
    if (o === "formatting" && e.formattingValues) {
      const r = e.defaultFormattingWidth || e.defaultWidth, s = p?.width ? String(p.width) : r;
      i = e.formattingValues[s] || e.formattingValues[r];
    } else {
      const r = e.defaultWidth, s = p?.width ? String(p.width) : e.defaultWidth;
      i = e.values[s] || e.values[r];
    }
    const u = e.argumentCallback ? e.argumentCallback(M) : M;
    return i[u];
  };
}
function Ot(e) {
  return (M, p = {}) => {
    const o = p.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], u = M.match(i);
    if (!u)
      return null;
    const r = u[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], v = Array.isArray(s) ? Nn(s, (Y) => Y.test(r)) : (
      // [TODO] -- I challenge you to fix the type
      Fn(s, (Y) => Y.test(r))
    );
    let O;
    O = e.valueCallback ? e.valueCallback(v) : v, O = p.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      p.valueCallback(O)
    ) : O;
    const A = M.slice(r.length);
    return { value: O, rest: A };
  };
}
function Fn(e, M) {
  for (const p in e)
    if (Object.prototype.hasOwnProperty.call(e, p) && M(e[p]))
      return p;
}
function Nn(e, M) {
  for (let p = 0; p < e.length; p++)
    if (M(e[p]))
      return p;
}
function Wn(e) {
  return (M, p = {}) => {
    const o = M.match(e.matchPattern);
    if (!o) return null;
    const i = o[0], u = M.match(e.parsePattern);
    if (!u) return null;
    let r = e.valueCallback ? e.valueCallback(u[0]) : u[0];
    r = p.valueCallback ? p.valueCallback(r) : r;
    const s = M.slice(i.length);
    return { value: r, rest: s };
  };
}
const Ln = {
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
}, Hn = (e, M, p) => {
  let o;
  const i = Ln[e];
  return typeof i == "string" ? o = i : M === 1 ? o = i.one : o = i.other.replace("{{count}}", M.toString()), p?.addSuffix ? p.comparison && p.comparison > 0 ? "in " + o : o + " ago" : o;
}, jn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Kn = (e, M, p, o) => jn[e], zn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, qn = {
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
}, Qn = {
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
}, Jn = {
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
}, Xn = (e, M) => {
  const p = Number(e), o = p % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return p + "st";
      case 2:
        return p + "nd";
      case 3:
        return p + "rd";
    }
  return p + "th";
}, Zn = {
  ordinalNumber: Xn,
  era: xt({
    values: zn,
    defaultWidth: "wide"
  }),
  quarter: xt({
    values: qn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: xt({
    values: Un,
    defaultWidth: "wide"
  }),
  day: xt({
    values: Qn,
    defaultWidth: "wide"
  }),
  dayPeriod: xt({
    values: Jn,
    defaultWidth: "wide",
    formattingValues: Gn,
    defaultFormattingWidth: "wide"
  })
}, er = /^(\d+)(th|st|nd|rd)?/i, tr = /\d+/i, ar = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, nr = {
  any: [/^b/i, /^(a|c)/i]
}, rr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, lr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, or = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, sr = {
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
}, ur = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ir = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, cr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, dr = {
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
}, vr = {
  ordinalNumber: Wn({
    matchPattern: er,
    parsePattern: tr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ot({
    matchPatterns: ar,
    defaultMatchWidth: "wide",
    parsePatterns: nr,
    defaultParseWidth: "any"
  }),
  quarter: Ot({
    matchPatterns: rr,
    defaultMatchWidth: "wide",
    parsePatterns: lr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ot({
    matchPatterns: or,
    defaultMatchWidth: "wide",
    parsePatterns: sr,
    defaultParseWidth: "any"
  }),
  day: Ot({
    matchPatterns: ur,
    defaultMatchWidth: "wide",
    parsePatterns: ir,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ot({
    matchPatterns: cr,
    defaultMatchWidth: "any",
    parsePatterns: dr,
    defaultParseWidth: "any"
  })
}, fr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, mr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, pr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, hr = {
  date: fa({
    formats: fr,
    defaultWidth: "full"
  }),
  time: fa({
    formats: mr,
    defaultWidth: "full"
  }),
  dateTime: fa({
    formats: pr,
    defaultWidth: "full"
  })
}, gr = {
  code: "en-US",
  formatDistance: Hn,
  formatLong: hr,
  formatRelative: Kn,
  localize: Zn,
  match: vr,
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
  fixedEnd: !1,
  autoSwitchStartEnd: !0
}, yr = {
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
  applyOnBlur: !1,
  separators: void 0
}, br = {
  dates: [],
  years: [],
  months: [],
  quarters: [],
  weeks: [],
  weekdays: [],
  options: { highlightDisabled: !1 }
}, kr = {
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  selectBtnLabel: "Select",
  cancelBtnLabel: "Cancel",
  nowBtnLabel: "Now",
  nowBtnRound: void 0
}, wr = {
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
}, Dr = {
  weekDays: [],
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] }
}, Mr = {
  month: "LLL",
  year: "yyyy",
  weekDay: "EEEEEE",
  quarter: "MMMM",
  day: "d",
  input: void 0,
  preview: void 0
}, _r = {
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
}, Ar = {
  flowStep: 0,
  menuWrapRef: null,
  collapse: !1
}, Pr = {
  weekStart: Ea.Monday,
  yearRange: () => [1900, 2100],
  ui: () => ({}),
  locale: () => gr,
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
}, qt = {
  type: "local",
  hideOnOffsetDates: !1,
  label: "W"
}, Tr = (e) => {
  const { getMapKey: M, getMapKeyType: p, getTimeObjFromCurrent: o } = Ie();
  function i(I, X) {
    let j;
    return e.timezone ? j = new xn(I ?? /* @__PURE__ */ new Date(), e.timezone) : j = I ? new Date(I) : /* @__PURE__ */ new Date(), X ? De(j, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : j;
  }
  const u = () => {
    const I = Q.value.enableSeconds ? ":ss" : "", X = Q.value.enableMinutes ? ":mm" : "";
    return Q.value.is24 ? `HH${X}${I}` : `hh${X}${I} aa`;
  }, r = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? u() : e.weekPicker ? `${$.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : Q.value.enableTimePicker ? `MM/dd/yyyy, ${u()}` : "MM/dd/yyyy", s = (I) => o(i(), I, Q.value.enableSeconds), v = () => h.value.enabled ? Q.value.startTime && Array.isArray(Q.value.startTime) ? [s(Q.value.startTime[0]), s(Q.value.startTime[1])] : null : Q.value.startTime && !Array.isArray(Q.value.startTime) ? s(Q.value.startTime) : null, O = (I) => I ? typeof I == "boolean" ? I ? 2 : 0 : Math.max(+I, 2) : 0, A = (I) => {
    const X = p(e.monthPicker, e.yearPicker);
    return new Map(
      I.map((j) => {
        const oe = i(j, Y.value);
        return [M(oe, X), oe];
      })
    );
  }, Y = H(() => e.monthPicker || e.yearPicker || e.quarterPicker), x = H(() => {
    const I = typeof e.multiCalendars == "object" && e.multiCalendars, X = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...X, count: O(!1) };
    const j = I ? e.multiCalendars : {}, oe = I ? j.count ?? !0 : e.multiCalendars, K = O(oe);
    return Object.assign(X, j, { count: K });
  }), l = H(() => v()), w = H(() => ({ ...wr, ...e.ariaLabels })), g = H(() => ({ ...Dr, ...e.filters })), _ = H(() => typeof e.transitions == "boolean" ? e.transitions ? _a : !1 : { ..._a, ...e.transitions }), b = H(() => ({ ...kr, ...e.actionRow })), E = H(() => typeof e.textInput == "object" ? {
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
  }), T = H(() => {
    const I = { input: !1 };
    return typeof e.inline == "object" ? { ...I, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...I
    };
  }), m = H(() => ({ ...yr, ...e.config })), k = H(() => typeof e.highlight == "function" ? e.highlight : {
    ...br,
    ...e.highlight
  }), $ = H(() => typeof e.weekNumbers == "object" ? {
    type: e.weekNumbers?.type ?? qt.type,
    hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? qt.hideOnOffsetDates,
    label: e.weekNumbers.label ?? qt.label
  } : e.weekNumbers ? qt : void 0), S = H(() => typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
    enabled: !!e.multiDates,
    limit: e.multiDates?.limit ? +e.multiDates.limit : null,
    dragSelect: e.multiDates?.dragSelect ?? !0
  }), R = H(() => ({
    minDate: e.minDate ? i(e.minDate) : null,
    maxDate: e.maxDate ? i(e.maxDate) : null,
    disabledDates: Array.isArray(e.disabledDates) ? A(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? A(e.allowedDates) : null,
    highlight: typeof k.value == "object" && Array.isArray(k.value.dates) ? A(k.value.dates) : k.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((I) => {
        const X = i(I.date);
        return [M(X, Mt.DATE), I];
      })
    ) : null
  })), h = H(() => typeof e.range == "object" ? { enabled: !0, ...Da, ...e.range } : {
    enabled: e.range,
    ...Da
  }), D = H(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((X) => {
        const j = X, oe = e.ui[j];
        if (j === "dayClass") return [j, e.ui[j]];
        const K = typeof e.ui[j] == "string" ? { [oe]: !0 } : Object.fromEntries(oe.map((te) => [te, !0]));
        return [X, K];
      })
    )
  })), V = H(() => ({
    ...Mr,
    ...e.formats,
    input: e.formats?.input ?? r(),
    preview: e.formats?.preview ?? r()
  })), F = H(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), Q = H(() => ({ ..._r, ...e.timeConfig })), U = H(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), re = H(() => {
    const I = E.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Aa, inputmode: I, ...e.inputAttrs } : { ...Aa, inputmode: I };
  }), ee = H(() => ({
    offset: e.floating?.offset ?? 10,
    arrow: e.floating?.arrow ?? !0,
    strategy: e.floating?.strategy ?? void 0,
    placement: e.floating?.placement ?? void 0,
    flip: e.floating?.flip ?? !0,
    shift: e.floating?.shift ?? !0
  }));
  return {
    transitions: _,
    multiCalendars: x,
    startTime: l,
    ariaLabels: w,
    filters: g,
    actionRow: b,
    textInput: E,
    inline: T,
    config: m,
    highlight: k,
    weekNumbers: $,
    range: h,
    safeDates: R,
    multiDates: S,
    ui: D,
    formats: V,
    teleport: F,
    timeConfig: Q,
    flow: U,
    inputAttrs: re,
    floatingConfig: ee,
    getDate: i
  };
}, Ie = () => {
  const e = (m, k) => qe(m, k ?? Mt.DATE), M = (m, k) => m ? Mt.MONTH_AND_YEAR : k ? Mt.YEAR : Mt.DATE, p = (m, k, $) => k.get(e(m, $)), o = (m) => m, i = (m) => m === 0 ? m : !m || Number.isNaN(+m) ? null : +m, u = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), r = (m, k) => {
    let $ = [...document.querySelectorAll(u())];
    $ = $.filter((R) => !m.contains(R) || "datepicker-instance" in R.dataset);
    const S = $.indexOf(m);
    if (S >= 0 && (k ? S - 1 >= 0 : S + 1 <= $.length))
      return $[S + (k ? -1 : 1)];
  }, s = (m) => String(m).padStart(2, "0"), v = (m, k) => m?.querySelector(`[data-dp-element="${k}"]`), O = (m, k, $ = !1) => {
    m && k.allowStopPropagation && ($ && m.stopImmediatePropagation(), m.stopPropagation());
  }, A = (m, k, $ = !1, S) => {
    if (m.key === $e.enter || m.key === $e.space)
      return $ && m.preventDefault(), k();
    if (S) return S(m);
  }, Y = (m, k) => {
    k.allowStopPropagation && m.stopPropagation(), k.allowPreventDefault && m.preventDefault();
  }, x = (m) => {
    if (m)
      return [...m.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, l = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, w = (m) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][m], g = (m) => {
    const k = [], $ = (S) => S.filter((R) => !!R);
    for (let S = 0; S < m.length; S += 3) {
      const R = [m[S], m[S + 1], m[S + 2]];
      k.push($(R));
    }
    return k;
  }, _ = {
    prop: (m) => `"${m}" prop must be enabled!`,
    dateArr: (m) => `You need to use array as "model-value" binding in order to support "${m}"`
  }, b = (m, k, $, S, R) => {
    const h = {
      hours: ot,
      minutes: it,
      seconds: ft
    };
    if (!k) return S ? [h[m]($), h[m]($)] : h[m]($);
    if (Array.isArray(k) && S) {
      const D = k[0] ?? $, V = k[1];
      return [h[m](D), V ? h[m](V) : R[m][1] ?? h[m]($)];
    }
    return Array.isArray(k) && !S ? h[m](k[k.length - 1] ?? $) : h[m](k);
  };
  return {
    getMapKey: e,
    getMapKeyType: M,
    getMapDate: p,
    convertType: o,
    getNumVal: i,
    findNextFocusableElement: r,
    padZero: s,
    getElWithin: v,
    checkStopPropagation: O,
    checkKeyDown: A,
    handleEventPropagation: Y,
    findFocusableEl: x,
    isTouchDevice: l,
    hoursToAmPmHours: w,
    getGroupedList: g,
    setTimeModelValue: (m, k, $, S) => {
      m.hours = b("hours", k, $, S, m), m.minutes = b("minutes", k, $, S, m), m.seconds = b("seconds", k, $, S, m);
    },
    getTimeObjFromCurrent: (m, k, $) => {
      const S = {
        hours: ot(m),
        minutes: it(m),
        seconds: $ ? ft(m) : 0
      };
      return Object.assign(S, k);
    },
    errorMapper: _
  };
}, We = () => {
  const { getDate: e } = Me(), { getMapDate: M, getGroupedList: p } = Ie(), o = (h, D) => {
    if (!h) return e();
    const V = e(h), F = De(V, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return D ? kn(F) : F;
  }, i = (h, D) => {
    const V = e(D);
    return De(V, {
      hours: +(h.hours ?? ot(V)),
      minutes: +(h.minutes ?? it(V)),
      seconds: +(h.seconds ?? ft(V)),
      milliseconds: 0
    });
  }, u = (h, D) => {
    const V = Xt(h, { weekStartsOn: +D }), F = ga(h, { weekStartsOn: +D });
    return [V, F];
  }, r = (h, D) => !h || !D ? !1 : st(o(h), o(D)), s = (h, D) => !h || !D ? !1 : Dt(o(h), o(D)), v = (h, D) => !h || !D ? !1 : rt(o(h), o(D)), O = (h, D, V) => h?.[0] && h?.[1] ? v(V, h[0]) && r(V, h[1]) : h?.[0] && D ? v(V, h[0]) && r(V, D) || r(V, h[0]) && v(V, D) : !1, A = (h, D) => {
    const V = v(h, D) ? D : h, F = v(D, h) ? D : h;
    return ha({ start: V, end: F });
  }, Y = (h) => `dp-${qe(h, "yyyy-MM-dd")}`, x = (h) => o(De(e(h), { date: 1 })), l = (h, D) => {
    if (D) {
      const V = me(e(D));
      if (V > h) return 12;
      if (V === h) return _e(e(D));
    }
  }, w = (h, D) => {
    if (D) {
      const V = me(e(D));
      return V < h ? -1 : V === h ? _e(e(D)) : void 0;
    }
  }, g = (h) => {
    if (h) return me(e(h));
  }, _ = (h) => ({
    hours: ot(h),
    minutes: it(h),
    seconds: ft(h)
  });
  return {
    resetDateTime: o,
    groupListAndMap: (h, D) => p(h).map((V) => V.map((F) => {
      const { active: Q, disabled: U, isBetween: re, highlighted: ee } = D(F);
      return {
        ...F,
        active: Q,
        disabled: U,
        className: {
          dp__overlay_cell_active: Q,
          dp__overlay_cell: !Q,
          dp__overlay_cell_disabled: U,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: U && Q,
          dp__cell_in_between: re,
          "dp--highlighted": ee
        }
      };
    })),
    setTime: i,
    getWeekFromDate: u,
    isDateAfter: v,
    isDateBefore: r,
    isDateBetween: O,
    isDateEqual: s,
    getDaysInBetween: A,
    getCellId: Y,
    resetDate: x,
    getMinMonth: l,
    getMaxMonth: w,
    getYearFromDate: g,
    getTimeObj: _,
    setTimeValue: (h) => De(e(), _(h)),
    sanitizeTime: (h, D, V) => D && (V || V === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((F) => F === D ? [F, V] : [F, Number.isNaN(+h[F]) ? void 0 : +h[F]])
    ) : {
      hours: Number.isNaN(+h.hours) ? void 0 : +h.hours,
      minutes: Number.isNaN(+h.minutes) ? void 0 : +h.minutes,
      seconds: Number.isNaN(+(h.seconds ?? "")) ? void 0 : +h.seconds
    },
    getBeforeAndAfterInRange: (h, D) => {
      const V = bn(o(D), h), F = dt(o(D), h);
      return { before: V, after: F };
    },
    isModelAuto: (h) => Array.isArray(h) ? !!h[0] && !!h[1] : !1,
    matchDate: (h, D) => h ? D ? D instanceof Map ? !!M(h, D) : D(e(h)) : !1 : !0,
    checkHighlightMonth: (h, D, V) => typeof h == "function" ? h({ month: D, year: V }) : h.months.some((F) => F.month === D && F.year === V),
    checkHighlightYear: (h, D) => typeof h == "function" ? h(D) : h.years.includes(D)
  };
}, Zt = () => {
  const {
    defaults: { config: e }
  } = Me(), M = ie(0);
  Ee(() => {
    p(), globalThis.addEventListener("resize", p, { passive: !0 });
  }), kt(() => {
    globalThis.removeEventListener("resize", p);
  });
  const p = () => {
    M.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: H(() => M.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, pt = () => {
  const {
    getDate: e,
    state: M,
    modelValue: p,
    rootProps: o,
    defaults: { formats: i, textInput: u }
  } = Me(), r = (_) => qe(Ze(e(), _), i.value.year, { locale: o.locale }), s = (_) => qe(wn(e(), _), i.value.month, { locale: o.locale }), v = (_) => qe(_, i.value.weekDay, { locale: o.locale }), O = (_) => qe(_, i.value.quarter, { locale: o.locale }), A = (_, b) => [_, b].map((E) => O(E)).join("-"), Y = (_) => qe(_, i.value.day, { locale: o.locale }), x = (_, b, E) => {
    const T = E ? i.value.preview : i.value.input;
    if (!_) return "";
    if (typeof T == "function") return T(_);
    const m = b ?? T, k = { locale: o.locale };
    return Array.isArray(_) ? `${qe(_[0], m, k)}${o.modelAuto && !_[1] ? "" : u.value.rangeSeparator}${_[1] ? qe(_[1], m, k) : ""}` : qe(_, m, k);
  }, l = () => {
    const _ = (b) => qe(b, u.value.format);
    return Array.isArray(p.value) ? `${_(p.value[0])} ${u.value.rangeSeparator} ${p.value[1] ? _(p.value[1]) : ""}` : "";
  };
  return {
    formatYear: r,
    formatMonth: s,
    formatWeekDay: v,
    formatQuarter: O,
    formatSelectedDate: x,
    formatForTextInput: () => M.isInputFocused && p.value ? Array.isArray(p.value) ? l() : qe(p.value, u.value.format) : x(p.value),
    formatPreview: (_) => x(_, void 0, !0),
    formatQuarterText: A,
    formatDay: Y
  };
}, ea = () => {
  const { rootProps: e } = Me(), { formatYear: M, formatMonth: p } = pt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((r) => ({
      text: p(r),
      value: r
    })),
    getYears: () => {
      const r = [];
      for (let s = +e.yearRange[0]; s <= +e.yearRange[1]; s++)
        r.push({ value: +s, text: M(s) });
      return e.reverseYears ? r.reverse() : r;
    },
    isOutOfYearRange: (r) => r < +e.yearRange[0] || r > +e.yearRange[1]
  };
}, $r = (e) => ({
  openMenu: () => e.value?.openMenu(),
  closeMenu: () => e.value?.closeMenu(),
  selectDate: () => e.value?.selectDate(),
  clearValue: () => e.value?.clearValue(),
  formatInputValue: () => e.value?.formatInputValue(),
  updateInternalModelValue: (g) => e.value?.updateInternalModelValue(g),
  setMonthYear: (g, _) => e.value?.setMonthYear(g, _),
  parseModel: () => e.value?.parseModel(),
  switchView: (g, _) => e.value?.switchView(g, _),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu(),
  dpMenuRef: () => e.value?.dpMenuRef(),
  dpWrapMenuRef: () => e.value?.dpWrapMenuRef(),
  inputRef: () => e.value?.inputRef()
}), Pt = () => ({
  boolHtmlAttribute: (M) => M ? !0 : void 0
}), Sr = () => {
  const {
    getDate: e,
    rootProps: M,
    defaults: { textInput: p, startTime: o, timeConfig: i }
  } = Me(), { getTimeObjFromCurrent: u } = Ie(), r = ie(!1), s = H(
    () => Array.isArray(o.value) ? o.value[0] : o.value ?? u(e(), {}, i.value.enableSeconds)
  ), v = (l, w) => {
    const g = /[^a-zA-Z]+/g, _ = /\D+/g, b = w.split(_), E = l.split(g), T = l.match(g) || [], m = w.match(_) || [];
    let k = "";
    for (let $ = 0; $ < b.length && $ < E.length; $++) {
      $ > 0 && m[$ - 1] && (k += T[$ - 1] || m[$ - 1]);
      const S = b[$]?.length;
      k += E[$]?.slice(0, S);
    }
    return k;
  }, O = (l, w, g) => {
    const _ = ma(l, v(w, l), e(), {
      locale: M.locale
    });
    return Jt(_) && Dn(_) ? g || r.value ? _ : De(_, {
      hours: +s.value.hours,
      minutes: +s.value.minutes,
      seconds: +(s.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: r,
    parseFreeInput: (l, w) => {
      if (typeof p.value.pattern == "string")
        return O(l, p.value.pattern, w);
      if (Array.isArray(p.value.pattern)) {
        let g = null;
        for (const _ of p.value.pattern)
          if (g = O(l, _, w), g)
            break;
        return g;
      }
      return typeof p.value.pattern == "function" ? p.value.pattern(l) : null;
    },
    applyMaxValues: (l, w) => {
      const g = {
        MM: 12,
        DD: 31,
        hh: 23,
        mm: 59,
        ss: 59
      };
      let _ = "", b = 0;
      for (let E = 0; E < w.length; E++) {
        const T = w[E], m = T.length, k = l.slice(b, b + m);
        if (!k) break;
        if (k.length < m)
          _ += k;
        else {
          let $ = Number.parseInt(k, 10);
          g[T] && $ > g[T] && ($ = g[T]), _ += $.toString().padStart(m, "0").slice(0, m);
        }
        b += m;
      }
      return _;
    },
    createMaskedValue: (l, w) => {
      const g = /(YYYY|MM|DD|hh|mm|ss)/g, _ = [...w.matchAll(g)].map((k) => k[0]), b = w.replace(g, "|").split("|").filter(Boolean), E = _.map((k) => k.length);
      let T = "", m = 0;
      for (let k = 0; k < _.length; k++) {
        const $ = E[k], S = l.slice(m, m + $);
        if (!S) break;
        T += S, S.length === $ && b[k] && (T += b[k]), m += $;
      }
      return T;
    }
  };
};
var at = /* @__PURE__ */ ((e) => (e.Input = "input", e.DatePicker = "date-picker", e.Calendar = "calendar", e.DatePickerHeader = "date-picker-header", e.Menu = "menu", e.ActionRow = "action-row", e.TimePicker = "time-picker", e.TimeInput = "time-input", e.PassTrough = "pass-trough", e.MonthPicker = "month-picker", e.YearMode = "year-mode", e.QuarterPicker = "quarter-picker", e.YearPicker = "year-picker", e))(at || {});
const wt = [
  "time-input",
  "time-picker",
  "pass-trough"
  /* PassTrough */
], Va = [
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
    use: wt
  },
  {
    name: "hours-overlay-header",
    use: wt
  },
  {
    name: "minutes-overlay-value",
    use: wt
  },
  {
    name: "minutes-overlay-header",
    use: wt
  },
  {
    name: "seconds-overlay-value",
    use: wt
  },
  {
    name: "seconds-overlay-header",
    use: wt
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
], lt = (e, M) => Va.filter((p) => e[p.name] && p.use.includes(M)).map((p) => p.name), Fa = (e, M) => Va.map((p) => p.name).concat(M?.filter((p) => p.slot).map((p) => p.slot) ?? []).filter((p) => !!e[p]), Rr = {
  key: 1,
  class: "dp__input_wrap"
}, Cr = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], xr = {
  key: 1,
  class: "dp--clear-btn"
}, Or = ["aria-label"], Yr = /* @__PURE__ */ Ve({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 }
  },
  emits: ["clear", "open", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus", "blur", "real-blur"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      rootEmit: u,
      inputValue: r,
      rootProps: s,
      defaults: { textInput: v, ariaLabels: O, inline: A, config: Y, range: x, multiDates: l, ui: w, inputAttrs: g }
    } = Me(), { checkMinMaxRange: _, isValidDate: b } = Ue(), { parseFreeInput: E, textPasted: T, createMaskedValue: m, applyMaxValues: k } = Sr(), { checkKeyDown: $, checkStopPropagation: S } = Ie(), { boolHtmlAttribute: R } = Pt(), h = Ce("dp-input"), D = ie(null), V = ie(!1), F = H(
      () => ({
        dp__pointer: !s.disabled && !s.readonly && !v.value.enabled,
        dp__disabled: s.disabled,
        dp__input_readonly: !v.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !g.value.clearable,
        dp__input_icon_pad: !g.value.hideInputIcon,
        dp__input_valid: typeof g.value.state == "boolean" ? g.value.state : !1,
        dp__input_invalid: typeof g.value.state == "boolean" ? !g.value.state : !1,
        dp__input_focus: V.value || i.isMenuOpen,
        dp__input_reg: !v.value.enabled,
        ...w.value.input
      })
    ), Q = () => {
      o("set-input-date", null), g && s.autoApply && (o("set-empty-date"), D.value = null);
    }, U = (J) => {
      if (v.value.separators?.length) {
        const B = new RegExp(
          v.value.separators.map((y) => y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
        );
        return J.split(B);
      }
      return J.split(v.value.rangeSeparator);
    }, re = (J) => {
      const [B, y] = U(J);
      if (B) {
        const L = E(B.trim(), r.value), fe = y ? E(y.trim(), r.value) : void 0;
        if (rt(L, fe)) return;
        const Pe = L && fe ? [L, fe] : [L];
        _(fe, Pe, 0) && (D.value = L ? Pe : null);
      }
    }, ee = () => {
      T.value = !0;
    }, I = (J) => {
      if (x.value.enabled)
        re(J);
      else if (l.value.enabled) {
        const B = J.split(";");
        D.value = B.map((y) => E(y.trim())).filter((y) => !!y);
      } else
        D.value = E(J, r.value);
    }, X = (J) => {
      const B = typeof J == "string" ? J : J.target?.value, y = v?.value?.maskFormat;
      let L = B;
      if (typeof y == "string") {
        const fe = /(YYYY|MM|DD|hh|mm|ss)/g, xe = [...y.matchAll(fe)].map((a) => a[0]), c = B.replace(/\D/g, ""), d = k(c, xe);
        L = m(d, y);
      }
      L === "" ? Q() : (v.value.openMenu && !i.isMenuOpen && o("open"), I(L), o("set-input-date", D.value)), T.value = !1, r.value = L, u("text-input", J, D.value);
    }, j = (J) => {
      v.value.enabled ? (I(J.target.value), v.value.enterSubmit && b(D.value) && r.value !== "" ? (o("set-input-date", D.value, !0), D.value = null) : v.value.enterSubmit && r.value === "" && (D.value = null, o("clear"))) : te(J);
    }, oe = (J, B) => {
      v.value.enabled && v.value.tabSubmit && !B && I(J.target.value), v.value.tabSubmit && b(D.value) && r.value !== "" ? (o("set-input-date", D.value, !0, !0), D.value = null) : v.value.tabSubmit && r.value === "" && (D.value = null, o("clear"));
    }, K = () => {
      V.value = !0, o("focus"), je().then(() => {
        v.value.enabled && v.value.selectOnFocus && h.value?.select();
      });
    }, te = (J) => {
      if (S(J, Y.value, !0), v.value.enabled && v.value.openMenu && !A.value.input) {
        if (v.value.openMenu === "open" && !i.isMenuOpen) return o("open");
        if (v.value.openMenu === "toggle") return o("toggle");
      } else v.value.enabled || o("toggle");
    }, de = () => {
      o("real-blur"), V.value = !1, (!i.isMenuOpen || A.value.enabled && A.value.input) && o("blur"), (s.autoApply && v.value.enabled && D.value && !i.isMenuOpen || v.value.applyOnBlur) && (o("set-input-date", D.value), o("select-date"), D.value = null);
    }, Z = (J) => {
      S(J, Y.value, !0), o("clear");
    }, ce = () => {
      o("close");
    }, le = (J) => {
      if (J.key === "Tab" && oe(J), J.key === "Enter" && j(J), J.key === "Escape" && v.value.escClose && ce(), !v.value.enabled) {
        if (J.code === "Tab") return;
        J.preventDefault();
      }
    }, we = () => {
      h.value?.focus({ preventScroll: !0 });
    }, ve = (J) => {
      D.value = J;
    }, Ae = (J) => {
      J.key === $e.tab && oe(J, !0);
    };
    return M({
      focusInput: we,
      setParsedDate: ve
    }), (J, B) => (W(), G("div", { onClick: te }, [
      !J.$slots["dp-input"] && !t(A).enabled ? ne(J.$slots, "trigger", { key: 0 }) : ae("", !0),
      !J.$slots.trigger && (!t(A).enabled || t(A).input) ? (W(), G("div", Rr, [
        !J.$slots.trigger && (!t(A).enabled || t(A).enabled && t(A).input) ? ne(J.$slots, "dp-input", {
          key: 0,
          value: t(r),
          isMenuOpen: e.isMenuOpen,
          onInput: X,
          onEnter: j,
          onTab: oe,
          onClear: Z,
          onBlur: de,
          onKeypress: le,
          onPaste: ee,
          onFocus: K,
          openMenu: () => J.$emit("open"),
          closeMenu: () => J.$emit("close"),
          toggleMenu: () => J.$emit("toggle")
        }, () => [
          ye("input", {
            id: t(g).id,
            ref: "dp-input",
            "data-test-id": "dp-input",
            name: t(g).name,
            class: he(F.value),
            inputmode: t(g).inputmode,
            placeholder: t(s).placeholder,
            disabled: t(R)(t(s).disabled),
            readonly: t(R)(t(s).readonly),
            required: t(R)(t(g).required),
            value: t(r),
            autocomplete: t(g).autocomplete,
            "aria-label": t(O).input,
            "aria-disabled": t(s).disabled || void 0,
            "aria-invalid": t(g).state === !1 ? !0 : void 0,
            onInput: X,
            onBlur: de,
            onFocus: K,
            onKeypress: le,
            onKeydown: B[0] || (B[0] = (y) => le(y)),
            onPaste: ee,
            onInvalid: B[1] || (B[1] = (y) => t(u)("invalid", y))
          }, null, 42, Cr)
        ]) : ae("", !0),
        ye("div", {
          onClick: B[4] || (B[4] = (y) => o("toggle"))
        }, [
          J.$slots["input-icon"] && !t(g).hideInputIcon ? (W(), G("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: B[2] || (B[2] = (y) => o("toggle"))
          }, [
            ne(J.$slots, "input-icon")
          ])) : ae("", !0),
          !J.$slots["input-icon"] && !t(g).hideInputIcon && !J.$slots["dp-input"] ? (W(), Se(t(Et), {
            key: 1,
            "aria-label": t(O)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: B[3] || (B[3] = (y) => o("toggle"))
          }, null, 8, ["aria-label"])) : ae("", !0)
        ]),
        J.$slots["clear-icon"] && (t(g).alwaysClearable || t(r) && t(g).clearable && !t(s).disabled && !t(s).readonly) ? (W(), G("span", xr, [
          ne(J.$slots, "clear-icon", { clear: Z })
        ])) : ae("", !0),
        !J.$slots["clear-icon"] && (t(g).alwaysClearable || t(g).clearable && t(r) && !t(s).disabled && !t(s).readonly) ? (W(), G("button", {
          key: 2,
          "aria-label": t(O)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: B[5] || (B[5] = (y) => t($)(y, () => Z(y), !0, Ae)),
          onClick: B[6] || (B[6] = _t((y) => Z(y), ["prevent"]))
        }, [
          Be(t(On), { class: "dp__input_icons" })
        ], 40, Or)) : ae("", !0)
      ])) : ae("", !0)
    ]));
  }
}), Br = {
  ref: "action-row",
  class: "dp__action_row"
}, Ir = ["title"], Er = {
  ref: "action-buttons-container",
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, Vr = ["disabled"], Fr = /* @__PURE__ */ Ve({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { default: 0 }
  },
  emits: ["close-picker", "select-date", "select-now"],
  setup(e, { emit: M }) {
    const p = M, o = e, {
      rootEmit: i,
      rootProps: u,
      modelValue: r,
      defaults: { actionRow: s, multiCalendars: v, inline: O, range: A, multiDates: Y, formats: x }
    } = Me(), { isTimeValid: l, isMonthValid: w } = Ue(), { formatPreview: g } = pt(), { checkKeyDown: _, convertType: b } = Ie(), { boolHtmlAttribute: E } = Pt(), T = Ce("action-buttons-container"), m = Ce("action-row"), k = ie(!1), $ = ie({});
    Ee(() => {
      S(), globalThis.addEventListener("resize", S);
    }), kt(() => {
      globalThis.removeEventListener("resize", S);
    });
    const S = () => {
      k.value = !1, setTimeout(() => {
        const ee = T.value?.getBoundingClientRect(), I = m.value?.getBoundingClientRect();
        ee && I && ($.value.maxWidth = `${I.width - ee.width - 20}px`), k.value = !0;
      }, 0);
    }, R = H(() => A.value.enabled && !A.value.partialRange && r.value ? r.value.length === 2 : !0), h = H(
      () => !l.value(r.value) || !w.value(r.value) || !R.value
    ), D = () => {
      const ee = x.value.preview;
      return u.timePicker || u.monthPicker, ee(b(r.value));
    }, V = () => {
      const ee = r.value;
      return v.value.count > 0 ? `${g(ee[0])} - ${g(ee[1])}` : [g(ee[0]), g(ee[1])];
    }, F = H(() => !r.value || !o.menuMount ? "" : typeof x.value.preview == "string" ? Array.isArray(r.value) ? r.value.length === 2 && r.value[1] ? V() : Y.value.enabled ? r.value.map((ee) => `${g(ee)}`) : u.modelAuto ? `${g(r.value[0])}` : `${g(r.value[0])} -` : g(r.value) : D()), Q = () => Y.value.enabled ? "; " : " - ", U = H(
      () => Array.isArray(F.value) ? F.value.join(Q()) : F.value
    ), re = () => {
      l.value(r.value) && w.value(r.value) && R.value ? p("select-date") : i("invalid-select");
    };
    return (ee, I) => (W(), G("div", Br, [
      ee.$slots["action-row"] ? ne(ee.$slots, "action-row", Ke(nt({ key: 0 }, {
        modelValue: t(r),
        disabled: h.value,
        selectDate: () => ee.$emit("select-date"),
        closePicker: () => ee.$emit("close-picker")
      }))) : (W(), G(Te, { key: 1 }, [
        t(s).showPreview ? (W(), G("div", {
          key: 0,
          class: "dp__selection_preview",
          title: U.value || void 0,
          style: ze($.value)
        }, [
          ee.$slots["action-preview"] && k.value ? ne(ee.$slots, "action-preview", {
            key: 0,
            value: t(r),
            formatValue: U.value
          }) : ae("", !0),
          !ee.$slots["action-preview"] && k.value ? (W(), G(Te, { key: 1 }, [
            ut(Ne(U.value), 1)
          ], 64)) : ae("", !0)
        ], 12, Ir)) : ae("", !0),
        ye("div", Er, [
          ee.$slots["action-buttons"] ? ne(ee.$slots, "action-buttons", {
            key: 0,
            value: t(r),
            selectDate: re,
            selectionDisabled: h.value
          }) : ae("", !0),
          ee.$slots["action-buttons"] ? ae("", !0) : (W(), G(Te, { key: 1 }, [
            !t(O).enabled && t(s).showCancel ? (W(), G("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_cancel",
              onClick: I[0] || (I[0] = (X) => ee.$emit("close-picker")),
              onKeydown: I[1] || (I[1] = (X) => t(_)(X, () => ee.$emit("close-picker")))
            }, Ne(t(s).cancelBtnLabel), 545)) : ae("", !0),
            t(s).showNow ? (W(), G("button", {
              key: 1,
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_cancel",
              onClick: I[2] || (I[2] = (X) => ee.$emit("select-now")),
              onKeydown: I[3] || (I[3] = (X) => t(_)(X, () => ee.$emit("select-now")))
            }, Ne(t(s).nowBtnLabel), 33)) : ae("", !0),
            t(s).showSelect ? (W(), G("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_select",
              disabled: t(E)(h.value),
              "data-test-id": "select-button",
              onKeydown: I[4] || (I[4] = (X) => t(_)(X, () => re())),
              onClick: re
            }, Ne(t(s).selectBtnLabel), 41, Vr)) : ae("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), ta = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: M }
  } = Me(), p = H(() => (u) => e.hideNavigation?.includes(u)), o = H(() => (u) => M.value.count ? M.value.solo ? !0 : u === 0 : !0), i = H(() => (u) => M.value.count ? M.value.solo ? !0 : u === M.value.count - 1 : !0);
  return { hideNavigationButtons: p, showLeftIcon: o, showRightIcon: i };
}, Nr = ["role", "aria-label", "tabindex"], Wr = { class: "dp__selection_grid_header" }, Lr = ["aria-selected", "aria-disabled", "data-dp-action-element", "data-dp-element-active", "data-test-id", "onClick", "onKeydown", "onMouseover"], Hr = ["aria-label", "data-dp-action-element"], Nt = /* @__PURE__ */ Ve({
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
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      setState: u,
      defaults: { ariaLabels: r, config: s }
    } = Me(), { hideNavigationButtons: v } = ta(), { handleEventPropagation: O, checkKeyDown: A } = Ie(), Y = Ce("toggle-button"), x = Ce("overlay-container"), l = Ce("grid-wrap"), w = ie(!1), g = ie(null), _ = ie(), b = ie(0);
    rn(() => {
      g.value = null;
    }), Ee(async () => {
      await je(), S(), u("arrowNavigationLevel", i.level ?? 1);
    }), kt(() => {
      u("arrowNavigationLevel", (i.level ?? 1) - 1);
    });
    const E = H(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !i.useRelative,
        "dp--overlay-relative": i.useRelative
      })
    ), T = H(
      () => i.useRelative ? { height: `${i.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), m = H(() => ({
      dp__overlay_col: !0
    })), k = H(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: w.value,
        dp__button_bottom: i.isLast
      })
    ), $ = H(() => ({
      dp__overlay_container: !0,
      dp__container_flex: i.items?.length <= 6,
      dp__container_block: i.items?.length > 6
    }));
    tt(
      () => i.items,
      () => S(!1),
      { deep: !0 }
    );
    const S = (U = !0) => {
      je().then(() => {
        const re = document.querySelector(`[data-dp-element-active="${i.level ?? 1}"]`), ee = vt(l), I = vt(Y), X = vt(x), j = I ? I.getBoundingClientRect().height : 0;
        ee && (ee.getBoundingClientRect().height ? b.value = ee.getBoundingClientRect().height - j : b.value = s.value.modeHeight - j), re && X && U && (X.scrollTop = re.offsetTop - X.offsetTop - (b.value / 2 - re.getBoundingClientRect().height) - j);
      });
    }, R = (U) => {
      U.disabled || o("selected", U.value);
    }, h = () => {
      o("toggle"), o("reset-flow");
    }, D = (U) => {
      s.value.escClose && (h(), O(U, s.value));
    }, V = (U) => {
      _.value = U, o("hover-value", U);
    }, F = (U) => {
      if (U.key === $e.esc) return D(U);
    }, Q = (U) => {
      if (U.key === $e.enter) return h();
    };
    return M({ scrollToActive: () => S(!0) }), (U, re) => (W(), G("div", {
      ref: "grid-wrap",
      class: he(E.value),
      style: ze(T.value),
      role: e.useRelative ? void 0 : "dialog",
      "aria-label": e.overlayLabel,
      tabindex: e.useRelative ? void 0 : "0",
      onKeydown: F,
      onClick: re[0] || (re[0] = _t(() => {
      }, ["prevent"]))
    }, [
      ye("div", {
        ref: "overlay-container",
        class: he($.value),
        style: ze({ "--dp-overlay-height": `${b.value}px` }),
        role: "grid"
      }, [
        ye("div", Wr, [
          ne(U.$slots, "header")
        ]),
        ne(U.$slots, "overlay", {}, () => [
          (W(!0), G(Te, null, Re(e.items, (ee, I) => (W(), G("div", {
            key: I,
            class: he(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
            role: "row"
          }, [
            (W(!0), G(Te, null, Re(ee, (X) => (W(), G("div", {
              key: X.value,
              role: "gridcell",
              class: he(m.value),
              "aria-selected": X.active || void 0,
              "aria-disabled": X.disabled || void 0,
              "data-dp-action-element": e.level ?? 1,
              "data-dp-element-active": X.active ? e.level ?? 1 : void 0,
              tabindex: "0",
              "data-test-id": X.text,
              onClick: _t((j) => R(X), ["prevent"]),
              onKeydown: (j) => t(A)(j, () => R(X), !0),
              onMouseover: (j) => V(X.value)
            }, [
              ye("div", {
                class: he(X.className)
              }, [
                ne(U.$slots, "item", { item: X }, () => [
                  ut(Ne(X.text), 1)
                ])
              ], 2)
            ], 42, Lr))), 128))
          ], 2))), 128))
        ])
      ], 6),
      U.$slots["button-icon"] ? Ut((W(), G("button", {
        key: 0,
        ref: "toggle-button",
        type: "button",
        "aria-label": t(r)?.toggleOverlay,
        class: he(k.value),
        tabindex: "0",
        "data-dp-action-element": e.level ?? 1,
        onClick: h,
        onKeydown: Q
      }, [
        ne(U.$slots, "button-icon")
      ], 42, Hr)), [
        [Qt, !t(v)(e.type)]
      ]) : ae("", !0)
    ], 46, Nr));
  }
}), jr = ["data-dp-mobile"], aa = /* @__PURE__ */ Ve({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: M }
    } = Me(), { isMobile: p } = Zt(), o = H(
      () => M.value.count > 0 ? [...new Array(M.value.count).keys()] : [0]
    );
    return (i, u) => (W(), G("div", {
      class: he({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: t(M).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": t(p)
    }, [
      ne(i.$slots, "default", {
        instances: o.value,
        wrapClass: { dp__instance_calendar: t(M).count > 0 }
      })
    ], 10, jr));
  }
}), Kr = ["data-dp-element", "aria-label", "aria-disabled"], Bt = /* @__PURE__ */ Ve({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: M }) {
    const { checkKeyDown: p } = Ie(), o = M;
    return (i, u) => (W(), G("button", {
      ref: "arrow-btn",
      type: "button",
      "data-dp-element": e.elName,
      "data-dp-action-element": "0",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled || void 0,
      onClick: u[0] || (u[0] = (r) => o("activate")),
      onKeydown: u[1] || (u[1] = (r) => t(p)(r, () => o("activate"), !0))
    }, [
      ye("span", {
        class: he(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        ne(i.$slots, "default")
      ], 2)
    ], 40, Kr));
  }
}), zr = ["aria-label", "data-test-id"], Na = /* @__PURE__ */ Ve({
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
    const p = M, o = e, { showRightIcon: i, showLeftIcon: u } = ta(), {
      rootProps: r,
      defaults: { config: s, ariaLabels: v, ui: O }
    } = Me(), { showTransition: A, transitionName: Y } = Vt(), { formatYear: x } = pt(), { boolHtmlAttribute: l } = Pt(), w = ie(!1), g = Ce("overlayRef"), _ = H(() => x(o.year)), b = (m = !1, k) => {
      w.value = !w.value, p("toggle-year-picker", { flow: m, show: k });
    }, E = (m) => {
      w.value = !1, p("year-select", m);
    }, T = (m = !1) => {
      p("handle-year", m);
    };
    return (m, k) => (W(), G(Te, null, [
      ye("div", {
        class: he(["dp--year-mode-picker", { "dp--hidden-el": w.value }])
      }, [
        t(u)(e.instance) ? (W(), Se(Bt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(v)?.prevYear,
          disabled: t(l)(e.isDisabled(!1)),
          class: he(t(O)?.navBtnPrev),
          onActivate: k[0] || (k[0] = ($) => T(!1))
        }, {
          default: be(() => [
            m.$slots["arrow-left"] ? ne(m.$slots, "arrow-left", { key: 0 }) : ae("", !0),
            m.$slots["arrow-left"] ? ae("", !0) : (W(), Se(t(Ca), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : ae("", !0),
        ye("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": `${e.year}-${t(v)?.openYearsOverlay}`,
          "data-test-id": `year-mode-btn-${e.instance}`,
          "data-dp-action-element": "0",
          onClick: k[1] || (k[1] = () => b(!1)),
          onKeydown: k[2] || (k[2] = ln(_t(() => b(!1), ["prevent"]), ["enter"]))
        }, [
          m.$slots.year ? ne(m.$slots, "year", {
            key: 0,
            text: _.value,
            value: e.year
          }) : ae("", !0),
          m.$slots.year ? ae("", !0) : (W(), G(Te, { key: 1 }, [
            ut(Ne(e.year), 1)
          ], 64))
        ], 40, zr),
        t(i)(e.instance) ? (W(), Se(Bt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(v)?.nextYear,
          disabled: t(l)(e.isDisabled(!0)),
          class: he(t(O)?.navBtnNext),
          onActivate: k[3] || (k[3] = ($) => T(!0))
        }, {
          default: be(() => [
            m.$slots["arrow-right"] ? ne(m.$slots, "arrow-right", { key: 0 }) : ae("", !0),
            m.$slots["arrow-right"] ? ae("", !0) : (W(), Se(t(xa), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : ae("", !0)
      ], 2),
      Be(At, {
        name: t(Y)(e.showYearPicker),
        css: t(A),
        onAfterEnter: k[5] || (k[5] = ($) => g.value?.scrollToActive())
      }, {
        default: be(() => [
          e.showYearPicker ? (W(), Se(Nt, {
            key: 0,
            ref_key: "overlayRef",
            ref: g,
            items: e.items,
            config: t(s),
            "is-last": t(r).autoApply && !t(s).keepActionRow,
            "overlay-label": t(v)?.yearPicker?.(!0),
            type: "year",
            onToggle: b,
            onSelected: k[4] || (k[4] = ($) => E($))
          }, Fe({
            "button-icon": be(() => [
              m.$slots["calendar-icon"] ? ne(m.$slots, "calendar-icon", { key: 0 }) : ae("", !0),
              m.$slots["calendar-icon"] ? ae("", !0) : (W(), Se(t(Et), { key: 1 }))
            ]),
            _: 2
          }, [
            m.$slots["year-overlay-value"] ? {
              name: "item",
              fn: be(({ item: $ }) => [
                ne(m.$slots, "year-overlay-value", {
                  text: $.text,
                  value: $.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "config", "is-last", "overlay-label"])) : ae("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Wa = (e) => {
  const {
    getDate: M,
    rootEmit: p,
    state: o,
    month: i,
    year: u,
    modelValue: r,
    calendars: s,
    rootProps: v,
    defaults: { multiCalendars: O, range: A, safeDates: Y, filters: x, highlight: l }
  } = Me(), { resetDate: w, getYearFromDate: g, checkHighlightYear: _, groupListAndMap: b } = We(), { getYears: E } = ea(), { validateMonthYear: T, checkMinMaxValue: m } = Ue(), k = ie([!1]), $ = H(() => E()), S = H(() => (K, te) => {
    const de = De(w(M()), {
      month: i.value(K),
      year: u.value(K)
    }), Z = te ? Ta(de) : Yt(de);
    return T(Z, v.preventMinMaxNavigation, te);
  }), R = () => Array.isArray(r.value) && O.value.solo && r.value[1], h = () => {
    for (let K = 0; K < O.value.count; K++)
      if (K === 0)
        s.value[K] = s.value[0];
      else if (K === O.value.count - 1 && R())
        s.value[K] = {
          month: _e(r.value[1]),
          year: me(r.value[1])
        };
      else {
        const te = De(M(), s.value[K - 1]);
        s.value[K] = { month: _e(te), year: me($a(te, 1)) };
      }
  }, D = (K) => {
    if (!K) return h();
    const te = De(M(), s.value[K]);
    return s.value[0].year = me(Sa(te, O.value.count - 1)), h();
  }, V = (K, te) => {
    const de = Mn(te, K);
    return A.value.showLastInRange && de > 1 ? te : K;
  }, F = (K) => v.focusStartDate || O.value.solo ? K[0] : K[1] ? V(K[0], K[1]) : K[0], Q = () => {
    if (r.value) {
      const K = Array.isArray(r.value) ? F(r.value) : r.value;
      s.value[0] = { month: _e(K), year: me(K) };
    }
  }, U = () => {
    Q(), O.value.count && h();
  };
  tt(r, (K, te) => {
    o.isTextInputDate && JSON.stringify(K ?? {}) !== JSON.stringify(te ?? {}) && U();
  }), Ee(() => {
    U();
  });
  const re = (K, te) => {
    s.value[te].year = K, p("update-month-year", { instance: te, year: K, month: s.value[te].month }), O.value.count && !O.value.solo && D(te);
  }, ee = H(() => (K) => b($.value, (te) => {
    const de = u.value(K) === te.value, Z = m(
      te.value,
      g(Y.value.minDate),
      g(Y.value.maxDate)
    ) || x.value.years?.includes(u.value(K)), ce = _(l.value, te.value);
    return { active: de, disabled: Z, highlighted: ce };
  })), I = (K, te) => {
    re(K, te), j(te);
  }, X = (K, te = !1) => {
    if (!S.value(K, te)) {
      const de = te ? u.value(K) + 1 : u.value(K) - 1;
      re(de, K);
    }
  }, j = (K, te = !1, de) => {
    te || e("reset-flow"), de === void 0 ? k.value[K] = !k.value[K] : k.value[K] = de, k.value[K] ? p("overlay-toggle", { open: !0, overlay: He.year }) : p("overlay-toggle", { open: !1, overlay: He.year });
  };
  return {
    isDisabled: S,
    groupedYears: ee,
    showYearPicker: k,
    selectYear: re,
    setStartDate: () => {
      v.startDate && (r.value && v.focusStartDate || !r.value) && re(me(M(v.startDate)), 0);
    },
    toggleYearPicker: j,
    handleYearSelect: I,
    handleYear: X
  };
}, na = () => {
  const { isDateAfter: e, isDateBefore: M, isDateEqual: p } = We(), {
    getDate: o,
    rootEmit: i,
    rootProps: u,
    modelValue: r,
    defaults: { range: s }
  } = Me();
  return {
    getRangeWithFixedDate: (l) => Array.isArray(r.value) && (r.value.length === 2 || r.value.length === 1 && s.value.partialRange) ? s.value.fixedStart && (e(l, r.value[0]) || p(l, r.value[0])) ? [r.value[0], l] : s.value.fixedEnd && (M(l, r.value[1]) || p(l, r.value[1])) ? [l, r.value[1]] : (i("invalid-fixed-range", l), r.value) : [],
    setPresetDate: (l) => {
      Array.isArray(l.value) && l.value.length <= 2 && s.value.enabled ? r.value = l.value.map((w) => o(w)) : Array.isArray(l.value) || (r.value = o(l.value));
    },
    checkRangeAutoApply: (l, w, g) => {
      s && (l[0] && l[1] && u.autoApply && w("auto-apply", g), l[0] && !l[1] && (u.modelAuto || s.value.partialRange) && u.autoApply && w("auto-apply", g));
    },
    setMonthOrYearRange: (l) => {
      let w = r.value ? r.value.slice() : [];
      return w.length === 2 && w[1] !== null && (w = []), w.length ? (M(l, w[0]) ? w.unshift(l) : w[1] = l, i("range-end", l)) : (w = [l], i("range-start", l)), w;
    },
    handleMultiDatesSelect: (l, w) => {
      if (r.value && Array.isArray(r.value))
        if (r.value.some((g) => p(l, g))) {
          const g = r.value.filter((_) => !p(_, l));
          r.value = g.length ? g : null;
        } else (w && +w > r.value.length || !w) && r.value.push(l);
      else
        r.value = [l];
    }
  };
}, qr = (e, M) => {
  const {
    getDate: p,
    rootEmit: o,
    state: i,
    calendars: u,
    year: r,
    modelValue: s,
    rootProps: v,
    defaults: { range: O, highlight: A, safeDates: Y, filters: x, multiDates: l }
  } = Me();
  Ft(() => {
    i.isTextInputDate && I(me(p(v.startDate)), 0);
  });
  const { checkMinMaxRange: w, checkMinMaxValue: g } = Ue(), { isDateBetween: _, resetDateTime: b, resetDate: E, getMinMonth: T, getMaxMonth: m, checkHighlightMonth: k, groupListAndMap: $ } = We(), { checkRangeAutoApply: S, getRangeWithFixedDate: R, handleMultiDatesSelect: h, setMonthOrYearRange: D, setPresetDate: V } = na(), { padZero: F } = Ie(), { getMonths: Q, isOutOfYearRange: U } = ea(), re = H(() => Q()), ee = ie(null), {
    selectYear: I,
    groupedYears: X,
    showYearPicker: j,
    toggleYearPicker: oe,
    handleYearSelect: K,
    handleYear: te,
    isDisabled: de,
    setStartDate: Z
  } = Wa(M);
  Ee(() => {
    Z();
  });
  const ce = (f) => f ? { month: _e(f), year: me(f) } : { month: null, year: null }, le = () => s.value ? Array.isArray(s.value) ? s.value.map((f) => ce(f)) : ce(s.value) : ce(), we = (f, N) => {
    const q = u.value[f], pe = le();
    return Array.isArray(pe) ? pe.some((ge) => ge.year === q?.year && ge.month === N) : q?.year === pe.year && N === pe.month;
  }, ve = (f, N, q) => {
    const pe = le();
    return Array.isArray(pe) ? r.value(N) === pe[q]?.year && f === pe[q]?.month : !1;
  }, Ae = (f, N) => {
    if (O.value.enabled) {
      const q = le();
      if (Array.isArray(s.value) && Array.isArray(q)) {
        const pe = ve(f, N, 0) || ve(f, N, 1), ge = De(E(p()), { month: f, year: r.value(N) });
        return _(s.value, ee.value, ge) && !pe;
      }
      return !1;
    }
    return !1;
  }, J = H(() => (f) => $(re.value, (N) => {
    const q = we(f, N.value), pe = g(
      N.value,
      T(r.value(f), Y.value.minDate),
      m(r.value(f), Y.value.maxDate)
    ) || n(Y.value.disabledDates, r.value(f), N.value) || x.value.months?.includes(N.value) || !C(Y.value.allowedDates, r.value(f), N.value) || U(r.value(f)), ge = Ae(N.value, f), Qe = k(A.value, N.value, r.value(f));
    return { active: q, disabled: pe, isBetween: ge, highlighted: Qe };
  })), B = (f, N) => De(E(p()), { month: f, year: r.value(N) }), y = (f, N) => {
    const q = s.value ? s.value : E(p());
    s.value = De(q, { month: f, year: r.value(N) }), M("auto-apply"), M("update-flow-step");
  }, L = (f, N) => {
    const q = B(f, N);
    O.value.fixedEnd || O.value.fixedStart ? s.value = R(q) : s.value ? w(q, s.value) && (s.value = D(B(f, N))) : s.value = [B(f, N)], je().then(() => {
      S(s.value, M, s.value.length < 2);
    });
  }, fe = (f, N) => {
    h(B(f, N), l.value.limit), M("auto-apply", !0);
  }, Pe = (f, N) => (u.value[N].month = f, c(N, u.value[N].year, f), l.value.enabled ? fe(f, N) : O.value.enabled ? L(f, N) : y(f, N)), xe = (f, N) => {
    I(f, N), c(N, f, null);
  }, c = (f, N, q) => {
    let pe = q;
    if (!pe && pe !== 0) {
      const ge = le();
      pe = Array.isArray(ge) ? ge[f].month : ge.month;
    }
    o("update-month-year", { instance: f, year: N, month: pe });
  }, d = (f, N) => {
    ee.value = B(f, N);
  }, a = (f) => {
    V({
      value: f
    }), M("auto-apply");
  }, n = (f, N, q) => {
    if (f instanceof Map) {
      const pe = `${F(q + 1)}-${N}`;
      return f.size ? f.has(pe) : !1;
    }
    return typeof f == "function" ? f(b(De(p(), { month: q, year: N }), !0)) : !1;
  }, C = (f, N, q) => {
    if (f instanceof Map) {
      const pe = `${F(q + 1)}-${N}`;
      return f.size ? f.has(pe) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: J,
    groupedYears: X,
    year: r,
    isDisabled: de,
    showYearPicker: j,
    modelValue: s,
    toggleYearPicker: oe,
    handleYearSelect: K,
    handleYear: te,
    presetDate: a,
    setHoverDate: d,
    selectMonth: Pe,
    selectYear: xe,
    getModelMonthYear: le
  };
}, Ur = /* @__PURE__ */ Ve({
  __name: "MonthPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply", "update-flow-step", "mount"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, u = mt(), {
      rootProps: r,
      defaults: { config: s }
    } = Me(), v = lt(u, at.YearMode);
    Ee(() => {
      o("mount");
    });
    const {
      groupedMonths: O,
      groupedYears: A,
      year: Y,
      isDisabled: x,
      showYearPicker: l,
      modelValue: w,
      presetDate: g,
      setHoverDate: _,
      selectMonth: b,
      selectYear: E,
      toggleYearPicker: T,
      handleYearSelect: m,
      handleYear: k,
      getModelMonthYear: $
    } = qr(i, o);
    return M({ getSidebarProps: () => ({
      modelValue: w,
      year: Y,
      getModelMonthYear: $,
      selectMonth: b,
      selectYear: E,
      handleYear: k
    }), presetDate: g, toggleYearPicker: (R) => T(0, R) }), (R, h) => (W(), Se(aa, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: be(({ instances: D, wrapClass: V }) => [
        (W(!0), G(Te, null, Re(D, (F) => (W(), G("div", {
          key: F,
          class: he(V)
        }, [
          R.$slots["top-extra"] ? ne(R.$slots, "top-extra", {
            key: 0,
            value: t(w)
          }) : ae("", !0),
          ne(R.$slots, "month-year", nt({ ref_for: !0 }, {
            year: t(Y),
            months: t(O)(F),
            years: t(A)(F),
            selectMonth: t(b),
            selectYear: t(E),
            instance: F
          }), () => [
            Be(Nt, {
              items: t(O)(F),
              "is-last": t(r).autoApply && !t(s).keepActionRow,
              height: t(s).modeHeight,
              "no-overlay-focus": !!(e.noOverlayFocus || t(r).textInput),
              "use-relative": "",
              level: 0,
              type: "month",
              onSelected: (Q) => t(b)(Q, F),
              onHoverValue: (Q) => t(_)(Q, F)
            }, Fe({
              header: be(() => [
                Be(Na, {
                  items: t(A)(F),
                  instance: F,
                  "show-year-picker": t(l)[F],
                  year: t(Y)(F),
                  "is-disabled": (Q) => t(x)(F, Q),
                  onHandleYear: (Q) => t(k)(F, Q),
                  onYearSelect: (Q) => t(m)(Q, F),
                  onToggleYearPicker: (Q) => t(T)(F, Q?.flow, Q?.show)
                }, Fe({ _: 2 }, [
                  Re(t(v), (Q, U) => ({
                    name: Q,
                    fn: be((re) => [
                      ne(R.$slots, Q, nt({ ref_for: !0 }, re))
                    ])
                  }))
                ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
              ]),
              _: 2
            }, [
              R.$slots["month-overlay-value"] ? {
                name: "item",
                fn: be(({ item: Q }) => [
                  ne(R.$slots, "month-overlay-value", {
                    text: Q.text,
                    value: Q.value
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
}), Qr = (e, M) => {
  const {
    rootEmit: p,
    getDate: o,
    state: i,
    modelValue: u,
    rootProps: r,
    defaults: { highlight: s, multiDates: v, filters: O, range: A, safeDates: Y }
  } = Me(), { getYears: x } = ea(), { isDateBetween: l, resetDate: w, resetDateTime: g, getYearFromDate: _, checkHighlightYear: b, groupListAndMap: E } = We(), { checkRangeAutoApply: T, setMonthOrYearRange: m } = na(), { checkMinMaxValue: k, checkMinMaxRange: $ } = Ue();
  Ft(() => {
    i.isTextInputDate && (R.value = me(o(r.startDate)));
  });
  const S = ie(null), R = ie();
  Ee(() => {
    r.startDate && (u.value && r.focusStartDate || !u.value) && (R.value = me(o(r.startDate)));
  });
  const h = (I) => Array.isArray(u.value) ? u.value.some((X) => me(X) === I) : u.value ? me(u.value) === I : !1, D = (I) => A.value.enabled && Array.isArray(u.value) ? l(u.value, S.value, U(I)) : !1, V = (I) => Y.value.allowedDates?.size ? Y.value.allowedDates.has(`${I}`) : !0, F = (I) => Y.value.disabledDates instanceof Map ? Y.value.disabledDates.size ? Y.value.disabledDates.has(`${I}`) : !1 : typeof Y.value.disabledDates == "function" ? Y.value.disabledDates(Ze(g(Yt(o())), I)) : !0, Q = H(() => E(x(), (I) => {
    const X = h(I.value), j = k(
      I.value,
      _(Y.value.minDate),
      _(Y.value.maxDate)
    ) || O.value.years.includes(I.value) || !V(I.value) || F(I.value), oe = D(I.value) && !X, K = b(s.value, I.value);
    return { active: X, disabled: j, isBetween: oe, highlighted: K };
  })), U = (I) => Ze(w(Yt(o())), I);
  return {
    groupedYears: Q,
    focusYear: R,
    setHoverValue: (I) => {
      S.value = Ze(w(o()), I);
    },
    selectYear: (I) => {
      if (p("update-month-year", { instance: 0, year: I, month: Number.NaN }), v.value.enabled)
        return u.value ? Array.isArray(u.value) && ((u.value?.map((j) => me(j))).includes(I) ? u.value = u.value.filter((j) => me(j) !== I) : u.value.push(Ze(g(o()), I))) : u.value = [Ze(g(Yt(o())), I)], M("auto-apply", !0);
      A.value.enabled ? $(U(I), u.value) && (u.value = m(U(I)), je().then(() => {
        T(u.value, M, u.value.length < 2);
      })) : (u.value = U(I), M("auto-apply"));
    }
  };
}, Jr = /* @__PURE__ */ Ve({
  __name: "YearPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      modelValue: u,
      defaults: { config: r },
      rootProps: s
    } = Me(), { groupedYears: v, focusYear: O, selectYear: A, setHoverValue: Y } = Qr(i, o);
    return M({ getSidebarProps: () => ({
      modelValue: u,
      selectYear: A
    }) }), (l, w) => (W(), G("div", null, [
      l.$slots["top-extra"] ? ne(l.$slots, "top-extra", {
        key: 0,
        value: t(u)
      }) : ae("", !0),
      l.$slots["month-year"] ? ne(l.$slots, "month-year", Ke(nt({ key: 1 }, {
        years: t(v),
        selectYear: t(A)
      }))) : (W(), Se(Nt, {
        key: 2,
        items: t(v),
        "is-last": t(s).autoApply && !t(r).keepActionRow,
        height: t(r).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || t(s).textInput),
        "focus-value": t(O),
        type: "year",
        "use-relative": "",
        onSelected: t(A),
        onHoverValue: t(Y)
      }, Fe({ _: 2 }, [
        l.$slots["year-overlay-value"] ? {
          name: "item",
          fn: be(({ item: g }) => [
            ne(l.$slots, "year-overlay-value", {
              text: g.text,
              value: g.value
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
}, Xr = ["data-compact", "data-collapsed"], Zr = ["data-test-id", "aria-label", "data-dp-action-element", "onKeydown", "onClick", "onMousedown"], el = ["aria-label", "disabled", "data-dp-action-element", "data-test-id", "onKeydown", "onClick"], tl = ["data-test-id", "aria-label", "data-dp-action-element", "onKeydown", "onClick", "onMousedown"], al = { key: 0 }, nl = ["aria-label", "data-dp-action-element", "data-compact"], rl = /* @__PURE__ */ Ve({
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
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      getDate: u,
      rootEmit: r,
      rootProps: s,
      defaults: { ariaLabels: v, filters: O, config: A, range: Y, multiCalendars: x, timeConfig: l }
    } = Me(), { checkKeyDown: w, hoursToAmPmHours: g } = Ie(), { boolHtmlAttribute: _ } = Pt(), { sanitizeTime: b, groupListAndMap: E } = We(), { transitionName: T, showTransition: m } = Vt(), k = Gt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), $ = ie("AM"), S = ie(null), R = ie(), h = ie(!1);
    Ee(() => {
      o("mounted");
    });
    const D = (n) => De(u(), {
      hours: n.hours,
      minutes: n.minutes,
      seconds: l.value.enableSeconds ? n.seconds : 0,
      milliseconds: 0
    }), V = H(() => s.timePicker || l.value.timePickerInline ? 0 : 1), F = H(
      () => (n) => ce(n, i[n]) || U(n, i[n])
    ), Q = H(() => ({ hours: i.hours, minutes: i.minutes, seconds: i.seconds })), U = (n, C) => Y.value.enabled && !Y.value.disableTimeRangeValidation ? !i.validateTime(n, C) : !1, re = (n, C) => {
      if (Y.value.enabled && !Y.value.disableTimeRangeValidation) {
        const f = C ? +l.value[`${n}Increment`] : -+l.value[`${n}Increment`], N = i[n] + f;
        return !i.validateTime(n, N);
      }
      return !1;
    }, ee = H(() => (n) => !J(+i[n] + +l.value[`${n}Increment`], n) || re(n, !0)), I = H(() => (n) => !J(+i[n] - +l.value[`${n}Increment`], n) || re(n, !1)), X = (n, C) => Ra(De(u(), n), C), j = (n, C) => _n(De(u(), n), C), oe = H(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !l.value.timePickerInline,
        dp__time_col_reg_block: !l.value.enableSeconds && l.value.is24 && !l.value.timePickerInline,
        dp__time_col_reg_inline: !l.value.enableSeconds && l.value.is24 && l.value.timePickerInline,
        dp__time_col_reg_with_button: !l.value.enableSeconds && !l.value.is24,
        dp__time_col_sec: l.value.enableSeconds && l.value.is24,
        dp__time_col_sec_with_button: l.value.enableSeconds && !l.value.is24
      })
    ), K = H(
      () => l.value.timePickerInline && Y.value.enabled && !x.value.count
    ), te = H(() => {
      const n = [{ type: "hours" }];
      return l.value.enableMinutes && n.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), l.value.enableSeconds && n.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), n;
    }), de = H(() => te.value.filter((n) => !n.separator)), Z = H(() => (n) => {
      if (n === "hours") {
        const C = xe(+i.hours);
        return { text: C < 10 ? `0${C}` : `${C}`, value: C };
      }
      return { text: i[n] < 10 ? `0${i[n]}` : `${i[n]}`, value: i[n] };
    }), ce = (n, C) => {
      if (!i.disabledTimesConfig) return !1;
      const f = i.disabledTimesConfig(i.order, n === "hours" ? C : void 0);
      return f[n] ? !!f[n]?.includes(C) : !0;
    }, le = (n, C) => C !== "hours" || $.value === "AM" ? n : n + 12, we = (n) => {
      const C = l.value.is24 ? 24 : 12, f = n === "hours" ? C : 60, N = +l.value[`${n}GridIncrement`], q = n === "hours" && !l.value.is24 ? N : 0, pe = [];
      for (let ge = q; ge < f; ge += N)
        pe.push({
          value: l.value.is24 ? ge : le(ge, n),
          text: ge < 10 ? `0${ge}` : `${ge}`
        });
      return n === "hours" && !l.value.is24 && pe.unshift({ value: $.value === "PM" ? 12 : 0, text: "12" }), E(pe, (ge) => ({ active: !1, disabled: O.value.times[n].includes(ge.value) || !J(ge.value, n) || ce(n, ge.value) || U(n, ge.value) }));
    }, ve = (n) => n >= 0 ? n : 59, Ae = (n) => n >= 0 ? n : 23, J = (n, C) => {
      const f = s.minTime ? D(b(s.minTime)) : null, N = s.maxTime ? D(b(s.maxTime)) : null, q = D(
        b(
          Q.value,
          C,
          C === "minutes" || C === "seconds" ? ve(n) : Ae(n)
        )
      );
      return f && N ? (st(q, N) || Dt(q, N)) && (rt(q, f) || Dt(q, f)) : f ? rt(q, f) || Dt(q, f) : N ? st(q, N) || Dt(q, N) : !0;
    }, B = (n) => l.value[`no${n[0].toUpperCase() + n.slice(1)}Overlay`], y = (n) => {
      B(n) || (k[n] = !k[n], k[n] ? (h.value = !0, o("overlay-opened", n)) : (h.value = !1, o("overlay-closed", n)));
    }, L = (n) => n === "hours" ? ot : n === "minutes" ? it : ft, fe = () => {
      R.value && clearTimeout(R.value);
    }, Pe = (n, C = !0, f) => {
      const N = C ? X : j, q = C ? +l.value[`${n}Increment`] : -+l.value[`${n}Increment`];
      J(+i[n] + q, n) && o(
        `update:${n}`,
        L(n)(
          N({ [n]: +i[n] }, { [n]: +l.value[`${n}Increment`] })
        )
      ), !f?.keyboard && A.value.timeArrowHoldThreshold && (R.value = setTimeout(() => {
        Pe(n, C);
      }, A.value.timeArrowHoldThreshold));
    }, xe = (n) => l.value.is24 ? n : (n >= 12 ? $.value = "PM" : $.value = "AM", g(n)), c = () => {
      $.value === "PM" ? ($.value = "AM", o("update:hours", i.hours - 12)) : ($.value = "PM", o("update:hours", i.hours + 12)), r("am-pm-change", $.value);
    }, d = (n) => {
      k[n] = !0;
    }, a = (n, C) => (y(n), o(`update:${n}`, C));
    return M({ openChildCmp: d }), (n, C) => t(s).disabled ? ae("", !0) : (W(), G("div", Gr, [
      (W(!0), G(Te, null, Re(te.value, (f, N) => (W(), G("div", {
        key: N,
        class: he(oe.value),
        "data-compact": K.value && !t(l).enableSeconds,
        "data-collapsed": K.value && t(l).enableSeconds
      }, [
        f.separator ? (W(), G(Te, { key: 0 }, [
          h.value ? ae("", !0) : (W(), G(Te, { key: 0 }, [
            ut(":")
          ], 64))
        ], 64)) : (W(), G(Te, { key: 1 }, [
          ye("button", {
            type: "button",
            class: he({
              dp__btn: !0,
              dp__inc_dec_button: !t(l).timePickerInline,
              dp__inc_dec_button_inline: t(l).timePickerInline,
              dp__tp_inline_btn_top: t(l).timePickerInline,
              dp__inc_dec_button_disabled: ee.value(f.type),
              "dp--hidden-el": h.value
            }),
            "data-test-id": `${f.type}-time-inc-btn-${i.order}`,
            "aria-label": t(v)?.incrementValue(f.type),
            tabindex: "0",
            "data-dp-action-element": V.value,
            onKeydown: (q) => t(w)(q, () => Pe(f.type, !0, { keyboard: !0 }), !0),
            onClick: (q) => t(A).timeArrowHoldThreshold ? void 0 : Pe(f.type, !0),
            onMousedown: (q) => t(A).timeArrowHoldThreshold ? Pe(f.type, !0) : void 0,
            onMouseup: fe
          }, [
            t(l).timePickerInline ? ne(n.$slots, "tp-inline-arrow-up", { key: 1 }, () => [
              C[2] || (C[2] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
              C[3] || (C[3] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
            ]) : ne(n.$slots, "arrow-up", { key: 0 }, () => [
              Be(t(Ya))
            ])
          ], 42, Zr),
          ye("button", {
            type: "button",
            "aria-label": `${Z.value(f.type).text}-${t(v)?.openTpOverlay(f.type)}`,
            class: he({
              dp__time_display: !0,
              dp__time_display_block: !t(l).timePickerInline,
              dp__time_display_inline: t(l).timePickerInline,
              "dp--time-invalid": F.value(f.type),
              "dp--time-overlay-btn": !F.value(f.type),
              "dp--hidden-el": h.value
            }),
            disabled: t(_)(B(f.type)),
            tabindex: "0",
            "data-dp-action-element": V.value,
            "data-test-id": `${f.type}-toggle-overlay-btn-${i.order}`,
            onKeydown: (q) => t(w)(q, () => y(f.type), !0),
            onClick: (q) => y(f.type)
          }, [
            ne(n.$slots, f.type, {
              text: Z.value(f.type).text,
              value: Z.value(f.type).value
            }, () => [
              ut(Ne(Z.value(f.type).text), 1)
            ])
          ], 42, el),
          ye("button", {
            type: "button",
            class: he({
              dp__btn: !0,
              dp__inc_dec_button: !t(l).timePickerInline,
              dp__inc_dec_button_inline: t(l).timePickerInline,
              dp__tp_inline_btn_bottom: t(l).timePickerInline,
              dp__inc_dec_button_disabled: I.value(f.type),
              "dp--hidden-el": h.value
            }),
            "data-test-id": `${f.type}-time-dec-btn-${i.order}`,
            "aria-label": t(v)?.decrementValue(f.type),
            tabindex: "0",
            "data-dp-action-element": V.value,
            onKeydown: (q) => t(w)(q, () => Pe(f.type, !1, { keyboard: !0 }), !0),
            onClick: (q) => t(A).timeArrowHoldThreshold ? void 0 : Pe(f.type, !1),
            onMousedown: (q) => t(A).timeArrowHoldThreshold ? Pe(f.type, !1) : void 0,
            onMouseup: fe
          }, [
            t(l).timePickerInline ? ne(n.$slots, "tp-inline-arrow-down", { key: 1 }, () => [
              C[4] || (C[4] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
              C[5] || (C[5] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
            ]) : ne(n.$slots, "arrow-down", { key: 0 }, () => [
              Be(t(Ba))
            ])
          ], 42, tl)
        ], 64))
      ], 10, Xr))), 128)),
      t(l).is24 ? ae("", !0) : (W(), G("div", al, [
        ne(n.$slots, "am-pm-button", {
          toggle: c,
          value: $.value
        }, () => [
          ye("button", {
            ref_key: "amPmButton",
            ref: S,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": t(v)?.amPmButton,
            tabindex: "0",
            "data-dp-action-element": V.value,
            "data-compact": K.value,
            onClick: c,
            onKeydown: C[0] || (C[0] = (f) => t(w)(f, () => c(), !0))
          }, Ne($.value), 41, nl)
        ])
      ])),
      (W(!0), G(Te, null, Re(de.value, (f, N) => (W(), Se(At, {
        key: N,
        name: t(T)(k[f.type]),
        css: t(m)
      }, {
        default: be(() => [
          k[f.type] ? (W(), Se(Nt, {
            key: 0,
            items: we(f.type),
            "is-last": t(s).autoApply && !t(A).keepActionRow,
            type: f.type,
            "aria-labels": t(v),
            level: t(l).timePickerInline || t(s).timePicker ? 1 : 2,
            "overlay-label": t(v).timeOverlay?.(f.type),
            onSelected: (q) => a(f.type, q),
            onToggle: (q) => y(f.type),
            onResetFlow: C[1] || (C[1] = (q) => n.$emit("reset-flow"))
          }, Fe({
            "button-icon": be(() => [
              ne(n.$slots, "clock-icon", {}, () => [
                n.$slots["clock-icon"] ? ae("", !0) : (W(), Se(pa(t(l).timePickerInline ? t(Et) : t(Oa)), { key: 0 }))
              ])
            ]),
            _: 2
          }, [
            n.$slots[`${f.type}-overlay-value`] ? {
              name: "item",
              fn: be(({ item: q }) => [
                ne(n.$slots, `${f.type}-overlay-value`, {
                  text: q.text,
                  value: q.value
                })
              ]),
              key: "0"
            } : void 0,
            n.$slots[`${f.type}-overlay-header`] ? {
              name: "header",
              fn: be(() => [
                ne(n.$slots, `${f.type}-overlay-header`, {
                  toggle: () => y(f.type)
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["items", "is-last", "type", "aria-labels", "level", "overlay-label", "onSelected", "onToggle"])) : ae("", !0)
        ]),
        _: 2
      }, 1032, ["name", "css"]))), 128))
    ]));
  }
}), ll = ["data-dp-mobile"], ol = ["aria-label", "tabindex"], sl = ["role", "aria-label", "tabindex"], ul = ["aria-label"], La = /* @__PURE__ */ Ve({
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
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      rootEmit: u,
      setState: r,
      modelValue: s,
      rootProps: v,
      defaults: { ariaLabels: O, textInput: A, config: Y, range: x, timeConfig: l }
    } = Me(), { isModelAuto: w } = We(), { checkKeyDown: g, findFocusableEl: _ } = Ie(), { transitionName: b, showTransition: E } = Vt(), { hideNavigationButtons: T } = ta(), { isMobile: m } = Zt(), k = mt(), $ = Ce("overlay"), S = Ce("close-tp-btn"), R = Ce("tp-input"), h = ie(!1);
    Ee(() => {
      o("mount");
    });
    const D = H(() => x.value.enabled && v.modelAuto ? w(s.value) : !0), V = ie(!1), F = (Z) => ({
      hours: Array.isArray(i.hours) ? i.hours[Z] : i.hours,
      minutes: Array.isArray(i.minutes) ? i.minutes[Z] : i.minutes,
      seconds: Array.isArray(i.seconds) ? i.seconds[Z] : i.seconds
    }), Q = H(() => {
      const Z = [];
      if (x.value.enabled)
        for (let ce = 0; ce < 2; ce++)
          Z.push(F(ce));
      else
        Z.push(F(0));
      return Z;
    }), U = (Z, ce = !1, le = "") => {
      ce || o("reset-flow"), V.value = Z, r("arrowNavigationLevel", Z ? 1 : 0), u("overlay-toggle", { open: Z, overlay: He.time }), je(() => {
        le !== "" && R.value?.[0] && R.value[0].openChildCmp(le);
      });
    }, re = H(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: v.autoApply && !Y.value.keepActionRow
    })), ee = lt(k, at.TimeInput), I = (Z, ce, le) => x.value.enabled ? ce === 0 ? [Z, Q.value[1][le]] : [Q.value[0][le], Z] : Z, X = (Z) => {
      o("update:hours", Z);
    }, j = (Z) => {
      o("update:minutes", Z);
    }, oe = (Z) => {
      o("update:seconds", Z);
    }, K = () => {
      if ($.value && !A.value.enabled && !i.noOverlayFocus) {
        const Z = _($.value);
        Z && Z.focus({ preventScroll: !0 });
      }
    }, te = (Z) => {
      h.value = !1, u("overlay-toggle", { open: !1, overlay: Z });
    }, de = (Z) => {
      h.value = !0, u("overlay-toggle", { open: !0, overlay: Z });
    };
    return M({ toggleTimePicker: U }), (Z, ce) => (W(), G("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(m)
    }, [
      !t(v).timePicker && !t(l).timePickerInline ? Ut((W(), G("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        "data-dp-action-element": "0",
        class: he({ ...re.value, "dp--hidden-el": V.value }),
        "aria-label": t(O)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: ce[0] || (ce[0] = (le) => t(g)(le, () => U(!0))),
        onClick: ce[1] || (ce[1] = (le) => U(!0))
      }, [
        ne(Z.$slots, "clock-icon", {}, () => [
          Be(t(Oa))
        ])
      ], 42, ol)), [
        [Qt, !t(T)("time")]
      ]) : ae("", !0),
      Be(At, {
        name: t(b)(V.value),
        css: t(E) && !t(l).timePickerInline
      }, {
        default: be(() => [
          V.value || t(v).timePicker || t(l).timePickerInline ? (W(), G("div", {
            key: 0,
            ref: "overlay",
            role: t(l).timePickerInline ? void 0 : "dialog",
            class: he({
              dp__overlay: !t(l).timePickerInline,
              "dp--overlay-absolute": !t(v).timePicker && !t(l).timePickerInline,
              "dp--overlay-relative": t(v).timePicker
            }),
            style: ze(t(v).timePicker ? { height: `${t(Y).modeHeight}px` } : void 0),
            "aria-label": t(O)?.timePicker,
            tabindex: t(l).timePickerInline ? void 0 : 0
          }, [
            ye("div", {
              class: he(
                t(l).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
              ),
              style: { display: "flex" }
            }, [
              ne(Z.$slots, "time-picker-overlay", {
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: X,
                setMinutes: j,
                setSeconds: oe
              }, () => [
                ye("div", {
                  class: he(t(l).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                }, [
                  (W(!0), G(Te, null, Re(Q.value, (le, we) => Ut((W(), Se(rl, nt({ key: we }, { ref_for: !0 }, {
                    order: we,
                    hours: le.hours,
                    minutes: le.minutes,
                    seconds: le.seconds,
                    closeTimePickerBtn: S.value,
                    disabledTimesConfig: e.disabledTimesConfig,
                    disabled: we === 0 ? t(x).fixedStart : t(x).fixedEnd
                  }, {
                    ref_for: !0,
                    ref: "tp-input",
                    "validate-time": (ve, Ae) => e.validateTime(ve, I(Ae, we, ve)),
                    "onUpdate:hours": (ve) => X(I(ve, we, "hours")),
                    "onUpdate:minutes": (ve) => j(I(ve, we, "minutes")),
                    "onUpdate:seconds": (ve) => oe(I(ve, we, "seconds")),
                    onMounted: K,
                    onOverlayClosed: te,
                    onOverlayOpened: de
                  }), Fe({ _: 2 }, [
                    Re(t(ee), (ve, Ae) => ({
                      name: ve,
                      fn: be((J) => [
                        ne(Z.$slots, ve, nt({ ref_for: !0 }, J))
                      ])
                    }))
                  ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                    [Qt, we === 0 ? !0 : D.value]
                  ])), 128))
                ], 2)
              ]),
              !t(v).timePicker && !t(l).timePickerInline ? Ut((W(), G("button", {
                key: 0,
                ref: "close-tp-btn",
                "data-dp-action-element": "1",
                type: "button",
                class: he({ ...re.value, "dp--hidden-el": h.value }),
                "aria-label": t(O)?.closeTimePicker,
                tabindex: "0",
                onKeydown: ce[2] || (ce[2] = (le) => t(g)(le, () => U(!1))),
                onClick: ce[3] || (ce[3] = (le) => U(!1))
              }, [
                ne(Z.$slots, "calendar-icon", {}, () => [
                  Be(t(Et))
                ])
              ], 42, ul)), [
                [Qt, !t(T)("time")]
              ]) : ae("", !0)
            ], 2)
          ], 14, sl)) : ae("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 8, ll));
  }
}), Ha = (e) => {
  const {
    getDate: M,
    modelValue: p,
    time: o,
    rootProps: i,
    defaults: { range: u, timeConfig: r }
  } = Me(), { isDateEqual: s, setTime: v } = We(), O = (S, R) => Array.isArray(o[S]) ? o[S][R] : o[S], A = (S) => r.value.enableSeconds ? Array.isArray(o.seconds) ? o.seconds[S] : o.seconds : 0, Y = (S, R) => S ? v(
    R !== void 0 ? { hours: O("hours", R), minutes: O("minutes", R), seconds: A(R) } : { hours: o.hours, minutes: o.minutes, seconds: A() },
    S
  ) : Pn(M(), A(R)), x = (S, R) => {
    o[S] = R;
  }, l = H(() => i.modelAuto && u.value.enabled ? Array.isArray(p.value) ? p.value.length > 1 : !1 : u.value.enabled), w = (S, R) => {
    const h = Object.fromEntries(
      Object.keys(o).map((D) => D === S ? [D, R] : [D, o[D]].slice())
    );
    if (l.value && !u.value.disableTimeRangeValidation) {
      const D = (F) => p.value ? v(
        {
          hours: h.hours[F],
          minutes: h.minutes[F],
          seconds: h.seconds[F]
        },
        p.value[F]
      ) : null, V = (F) => An(p.value[F], 0);
      return !(s(D(0), D(1)) && (rt(D(0), V(1)) || st(D(1), V(0))));
    }
    return !0;
  }, g = (S, R) => {
    w(S, R) && (x(S, R), e && e());
  }, _ = (S) => {
    g("hours", S);
  }, b = (S) => {
    g("minutes", S);
  }, E = (S) => {
    g("seconds", S);
  }, T = (S, R) => {
    _(S.hours), b(S.minutes), E(S.seconds), p.value && R(p.value);
  }, m = (S) => {
    if (S) {
      const R = Array.isArray(S), h = R ? [+S[0].hours, +S[1].hours] : +S.hours, D = R ? [+S[0].minutes, +S[1].minutes] : +S.minutes, V = R ? [+(S[0].seconds ?? 0), +(S[1].seconds ?? 0)] : +(S.seconds ?? 0);
      x("hours", h), x("minutes", D), r.value.enableSeconds && x("seconds", V);
    }
  }, k = (S, R) => {
    const h = {
      hours: Array.isArray(o.hours) ? o.hours[S] : o.hours,
      disabledArr: []
    };
    return (R || R === 0) && (h.hours = R), Array.isArray(i.disabledTimes) && (h.disabledArr = u.value.enabled && Array.isArray(i.disabledTimes[S]) ? i.disabledTimes[S] : i.disabledTimes), h;
  }, $ = H(() => (S, R) => {
    if (Array.isArray(i.disabledTimes)) {
      const { disabledArr: h, hours: D } = k(S, R), V = h.filter((F) => +F.hours === D);
      return V[0]?.minutes === "*" ? { hours: [D], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: V?.map((F) => +F.minutes) ?? [],
        seconds: V?.map((F) => F.seconds ? +F.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: x,
    updateHours: _,
    updateMinutes: b,
    updateSeconds: E,
    getSetDateTime: Y,
    updateTimeValues: T,
    getSecondsValue: A,
    assignStartTime: m,
    validateTime: w,
    disabledTimesConfig: $
  };
}, il = (e) => {
  const {
    getDate: M,
    time: p,
    modelValue: o,
    state: i,
    defaults: { startTime: u, range: r, timeConfig: s }
  } = Me(), { getTimeObj: v } = We();
  Ft(() => {
    i.isTextInputDate && k();
  });
  const { updateTimeValues: O, getSetDateTime: A, assignTime: Y, assignStartTime: x, disabledTimesConfig: l, validateTime: w } = Ha(g);
  function g() {
    e("update-flow-step");
  }
  const _ = (R) => {
    const { hours: h, minutes: D, seconds: V } = R;
    return { hours: +h, minutes: +D, seconds: V ? +V : 0 };
  }, b = () => {
    if (s.value.startTime) {
      if (Array.isArray(s.value.startTime)) {
        const h = _(s.value.startTime[0]), D = _(s.value.startTime[1]);
        return [De(M(), h), De(M(), D)];
      }
      const R = _(s.value.startTime);
      return De(M(), R);
    }
    return r.value.enabled ? [null, null] : null;
  }, E = () => {
    if (r.value.enabled) {
      const [R, h] = b();
      o.value = [A(R, 0), A(h, 1)];
    } else
      o.value = A(b());
  }, T = (R) => Array.isArray(R) ? [v(M(R[0])), v(M(R[1]))] : [v(R ?? M())], m = (R, h, D) => {
    Y("hours", R), Y("minutes", h), Y("seconds", s.value.enableSeconds ? D : 0);
  }, k = () => {
    const [R, h] = T(o.value);
    return r.value.enabled ? m(
      [R.hours, h.hours],
      [R.minutes, h.minutes],
      [R.seconds, h.seconds]
    ) : m(R.hours, R.minutes, R.seconds);
  };
  Ee(() => (x(u.value), o.value ? k() : E()));
  const $ = () => {
    Array.isArray(o.value) ? o.value = o.value.map((R, h) => R && A(R, h)) : o.value = A(o.value), e("time-update");
  };
  return {
    modelValue: o,
    time: p,
    disabledTimesConfig: l,
    validateTime: w,
    updateTime: (R) => {
      O(R, $);
    }
  };
}, cl = /* @__PURE__ */ Ve({
  __name: "TimePickerSolo",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["time-update", "mount", "reset-flow", "update-flow-step"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = mt(), u = lt(i, at.TimePicker), r = Ce("time-input"), { time: s, modelValue: v, disabledTimesConfig: O, updateTime: A, validateTime: Y } = il(o);
    return Ee(() => {
      o("mount");
    }), M({ getSidebarProps: () => ({
      modelValue: v,
      time: s,
      updateTime: A
    }), toggleTimePicker: (w, g = !1, _ = "") => {
      r.value?.toggleTimePicker(w, g, _);
    } }), (w, g) => (W(), Se(aa, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: be(({ wrapClass: _ }) => [
        ye("div", {
          class: he(_)
        }, [
          Be(La, nt({ ref: "time-input" }, w.$props, {
            hours: t(s).hours,
            minutes: t(s).minutes,
            seconds: t(s).seconds,
            "disabled-times-config": t(O),
            "validate-time": t(Y),
            "onUpdate:hours": g[0] || (g[0] = (b) => t(A)({ hours: b, minutes: t(s).minutes, seconds: t(s).seconds })),
            "onUpdate:minutes": g[1] || (g[1] = (b) => t(A)({ hours: t(s).hours, minutes: b, seconds: t(s).seconds })),
            "onUpdate:seconds": g[2] || (g[2] = (b) => t(A)({ hours: t(s).hours, minutes: t(s).minutes, seconds: b })),
            onResetFlow: g[3] || (g[3] = (b) => w.$emit("reset-flow"))
          }), Fe({ _: 2 }, [
            Re(t(u), (b, E) => ({
              name: b,
              fn: be((T) => [
                ne(w.$slots, b, Ke(et(T)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), dl = (e, M) => {
  const {
    getDate: p,
    rootProps: o,
    defaults: { filters: i }
  } = Me(), { validateMonthYearInRange: u, validateMonthYear: r } = Ue(), s = (x, l) => {
    let w = x;
    return i.value.months.includes(_e(w)) ? (w = l ? yt(x, 1) : It(x, 1), s(w, l)) : w;
  }, v = (x, l) => {
    let w = x;
    return i.value.years.includes(me(w)) ? (w = l ? $a(x, 1) : Sa(x, 1), v(w, l)) : w;
  }, O = (x, l = !1) => {
    const w = De(p(), { month: e.month, year: e.year });
    let g = x ? yt(w, 1) : It(w, 1);
    o.disableYearSelect && (g = Ze(g, e.year));
    let _ = _e(g), b = me(g);
    i.value.months.includes(_) && (g = s(g, x), _ = _e(g), b = me(g)), i.value.years.includes(b) && (g = v(g, x), b = me(g)), u(_, b, x, o.preventMinMaxNavigation) && A(_, b, l);
  }, A = (x, l, w = !1) => {
    M("update-month-year", { month: x, year: l, fromNav: w });
  }, Y = H(() => (x) => r(
    De(p(), { month: e.month, year: e.year }),
    o.preventMinMaxNavigation,
    x
  ));
  return { handleMonthYearChange: O, isDisabled: Y, updateMonthYear: A };
}, vl = { class: "dp--header-wrap" }, fl = {
  key: 0,
  class: "dp__month_year_wrap"
}, ml = { key: 0 }, pl = { class: "dp__month_year_wrap" }, hl = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], gl = /* @__PURE__ */ Ve({
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
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      rootEmit: u,
      rootProps: r,
      modelValue: s,
      defaults: { ariaLabels: v, filters: O, config: A, highlight: Y, safeDates: x, ui: l }
    } = Me(), { transitionName: w, showTransition: g } = Vt(), { showLeftIcon: _, showRightIcon: b } = ta(), { handleMonthYearChange: E, isDisabled: T, updateMonthYear: m } = dl(i, o), { getMaxMonth: k, getMinMonth: $, getYearFromDate: S, groupListAndMap: R, checkHighlightYear: h, checkHighlightMonth: D } = We(), { checkKeyDown: V } = Ie(), { formatYear: F } = pt(), { checkMinMaxValue: Q } = Ue(), { boolHtmlAttribute: U } = Pt(), re = ie(!1), ee = ie(!1), I = ie(!1);
    Ee(() => {
      o("mount");
    });
    const X = (B) => ({
      get: () => i[B],
      set: (y) => {
        const L = B === Ge.month ? Ge.year : Ge.month;
        o("update-month-year", { [B]: y, [L]: i[L] }), B === Ge.month ? le(!0) : we(!0);
      }
    }), j = H(X(Ge.month)), oe = H(X(Ge.year)), K = H(() => (B) => ({
      month: i.month,
      year: i.year,
      items: B === Ge.month ? i.months : i.years,
      instance: i.instance,
      updateMonthYear: m,
      toggle: B === Ge.month ? le : we
    })), te = H(() => {
      const B = i.months.find((y) => y.value === i.month);
      return B || { text: "", value: 0 };
    }), de = H(() => R(i.months, (B) => {
      const y = i.month === B.value, L = Q(
        B.value,
        $(i.year, x.value.minDate),
        k(i.year, x.value.maxDate)
      ) || O.value.months.includes(B.value), fe = D(Y.value, B.value, i.year);
      return { active: y, disabled: L, highlighted: fe };
    })), Z = H(() => R(i.years, (B) => {
      const y = i.year === B.value, L = Q(
        B.value,
        S(x.value.minDate),
        S(x.value.maxDate)
      ) || O.value.years.includes(B.value), fe = h(Y.value, B.value);
      return { active: y, disabled: L, highlighted: fe };
    })), ce = (B, y, L) => {
      L === void 0 ? B.value = !B.value : B.value = L, B.value ? (I.value = !0, u("overlay-toggle", { open: !0, overlay: y })) : (I.value = !1, u("overlay-toggle", { open: !1, overlay: y }));
    }, le = (B = !1, y) => {
      ve(B), ce(re, He.month, y);
    }, we = (B = !1, y) => {
      ve(B), ce(ee, He.year, y);
    }, ve = (B) => {
      B || o("reset-flow");
    }, Ae = H(() => [
      {
        type: Ge.month,
        index: 1,
        toggle: le,
        modelValue: j.value,
        updateModelValue: (B) => j.value = B,
        text: te.value.text,
        showSelectionGrid: re.value,
        items: de.value,
        ariaLabel: v.value?.openMonthsOverlay,
        overlayLabel: v.value.monthPicker?.(!0) ?? void 0
      },
      {
        type: Ge.year,
        index: 2,
        toggle: we,
        modelValue: oe.value,
        updateModelValue: (B) => oe.value = B,
        text: F(i.year),
        showSelectionGrid: ee.value,
        items: Z.value,
        ariaLabel: v.value?.openYearsOverlay,
        overlayLabel: v.value.yearPicker?.(!0) ?? void 0
      }
    ]), J = H(() => r.disableYearSelect ? [Ae.value[0]] : r.yearFirst ? [...Ae.value].reverse() : Ae.value);
    return M({
      toggleMonthPicker: le,
      toggleYearPicker: we,
      handleMonthYearChange: E
    }), (B, y) => (W(), G("div", vl, [
      B.$slots["month-year"] ? (W(), G("div", fl, [
        ne(B.$slots, "month-year", Ke(et({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(m),
          handleMonthYearChange: t(E),
          instance: e.instance,
          isDisabled: t(T)
        })))
      ])) : (W(), G(Te, { key: 1 }, [
        B.$slots["top-extra"] ? (W(), G("div", ml, [
          ne(B.$slots, "top-extra", { value: t(s) })
        ])) : ae("", !0),
        ye("div", pl, [
          t(_)(e.instance) && !t(r).vertical ? (W(), Se(Bt, {
            key: 0,
            "aria-label": t(v)?.prevMonth,
            disabled: t(U)(t(T)(!1)),
            class: he(t(l)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: y[0] || (y[0] = (L) => t(E)(!1, !0))
          }, {
            default: be(() => [
              B.$slots["arrow-left"] ? ne(B.$slots, "arrow-left", { key: 0 }) : ae("", !0),
              B.$slots["arrow-left"] ? ae("", !0) : (W(), Se(t(Ca), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : ae("", !0),
          ye("div", {
            class: he(["dp__month_year_wrap", {
              dp__year_disable_select: t(r).disableYearSelect
            }])
          }, [
            (W(!0), G(Te, null, Re(J.value, (L) => (W(), G(Te, {
              key: L.type
            }, [
              ye("button", {
                type: "button",
                "data-dp-element": `overlay-${L.type}`,
                class: he(["dp__btn dp__month_year_select", { "dp--hidden-el": I.value }]),
                "aria-label": `${L.text}-${L.ariaLabel}`,
                "data-test-id": `${L.type}-toggle-overlay-${e.instance}`,
                tabindex: "0",
                "data-dp-action-element": "0",
                onClick: (fe) => L.toggle(!1),
                onKeydown: (fe) => t(V)(fe, () => L.toggle(), !0)
              }, [
                B.$slots[L.type] ? ne(B.$slots, L.type, {
                  key: 0,
                  text: L.text,
                  value: i[L.type]
                }) : ae("", !0),
                B.$slots[L.type] ? ae("", !0) : (W(), G(Te, { key: 1 }, [
                  ut(Ne(L.text), 1)
                ], 64))
              ], 42, hl),
              Be(At, {
                name: t(w)(L.showSelectionGrid),
                css: t(g)
              }, {
                default: be(() => [
                  L.showSelectionGrid ? (W(), Se(Nt, {
                    key: 0,
                    items: L.items,
                    "is-last": t(r).autoApply && !t(A).keepActionRow,
                    "skip-button-ref": !1,
                    type: L.type,
                    "header-refs": [],
                    "menu-wrap-ref": e.menuWrapRef,
                    "overlay-label": L.overlayLabel,
                    onSelected: L.updateModelValue,
                    onToggle: L.toggle
                  }, Fe({
                    "button-icon": be(() => [
                      B.$slots["calendar-icon"] ? ne(B.$slots, "calendar-icon", { key: 0 }) : ae("", !0),
                      B.$slots["calendar-icon"] ? ae("", !0) : (W(), Se(t(Et), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    B.$slots[`${L.type}-overlay-value`] ? {
                      name: "item",
                      fn: be(({ item: fe }) => [
                        ne(B.$slots, `${L.type}-overlay-value`, {
                          text: fe.text,
                          value: fe.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    B.$slots[`${L.type}-overlay`] ? {
                      name: "overlay",
                      fn: be(() => [
                        ne(B.$slots, `${L.type}-overlay`, nt({ ref_for: !0 }, K.value(L.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    B.$slots[`${L.type}-overlay-header`] ? {
                      name: "header",
                      fn: be(() => [
                        ne(B.$slots, `${L.type}-overlay-header`, {
                          toggle: L.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "is-last", "type", "menu-wrap-ref", "overlay-label", "onSelected", "onToggle"])) : ae("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          t(_)(e.instance) && t(r).vertical ? (W(), Se(Bt, {
            key: 1,
            "aria-label": t(v)?.prevMonth,
            "el-name": "action-prev",
            disabled: t(U)(t(T)(!1)),
            class: he(t(l)?.navBtnPrev),
            onActivate: y[1] || (y[1] = (L) => t(E)(!1, !0))
          }, {
            default: be(() => [
              B.$slots["arrow-up"] ? ne(B.$slots, "arrow-up", { key: 0 }) : ae("", !0),
              B.$slots["arrow-up"] ? ae("", !0) : (W(), Se(t(Ya), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : ae("", !0),
          t(b)(e.instance) ? (W(), Se(Bt, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t(U)(t(T)(!0)),
            "aria-label": t(v)?.nextMonth,
            class: he(t(l)?.navBtnNext),
            onActivate: y[2] || (y[2] = (L) => t(E)(!0, !0))
          }, {
            default: be(() => [
              B.$slots[t(r).vertical ? "arrow-down" : "arrow-right"] ? ne(B.$slots, t(r).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : ae("", !0),
              B.$slots[t(r).vertical ? "arrow-down" : "arrow-right"] ? ae("", !0) : (W(), Se(pa(t(r).vertical ? t(Ba) : t(xa)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label", "class"])) : ae("", !0)
        ])
      ], 64))
    ]));
  }
}), yl = {
  class: "dp__calendar_header",
  role: "row"
}, bl = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, kl = ["aria-label"], wl = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, Dl = { class: "dp__cell_inner" }, Ml = ["id", "aria-selected", "aria-disabled", "aria-label", "tabindex", "data-test-id", "data-dp-element-active", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], _l = /* @__PURE__ */ Ve({
  __name: "DpCalendar",
  props: {
    instance: {},
    mappedDates: {},
    month: {},
    year: {}
  },
  emits: ["mount", "select-date", "set-hover-date", "handle-scroll", "handle-swipe"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      getDate: u,
      rootEmit: r,
      rootProps: s,
      defaults: { transitions: v, config: O, ariaLabels: A, multiCalendars: Y, weekNumbers: x, multiDates: l, ui: w }
    } = Me(), { isDateAfter: g, isDateEqual: _, resetDateTime: b, getCellId: E } = We(), { checkKeyDown: T, checkStopPropagation: m, isTouchDevice: k } = Ie(), { formatWeekDay: $ } = pt(), S = Ce("calendar-wrap"), R = Ce("active-tooltip"), h = ie([]), D = ie(null), V = ie(!0), F = ie(!1), Q = ie(""), U = ie({
      bottom: "",
      left: "",
      transform: ""
    }), re = ie({ left: "50%" });
    un(S, {
      onSwipeEnd: (d, a) => {
        O.value.noSwipe || (s.vertical ? (a === "up" || a === "down") && o("handle-swipe", a === "up" ? "left" : "right") : (a === "left" || a === "right") && o("handle-swipe", a === "right" ? "left" : "right"));
      }
    });
    const ee = H(() => s.calendar ? s.calendar(i.mappedDates) : i.mappedDates), I = H(() => s.dayNames ? Array.isArray(s.dayNames) ? s.dayNames : s.dayNames() : c());
    Ee(() => {
      o("mount", { cmp: "calendar", dayRefs: h.value }), O.value.monthChangeOnScroll && S.value && S.value.addEventListener("wheel", B, { passive: !1 });
    }), kt(() => {
      O.value.monthChangeOnScroll && S.value && S.value.removeEventListener("wheel", B);
    });
    const X = (d) => d ? s.vertical ? "vNext" : "next" : s.vertical ? "vPrevious" : "previous", j = (d, a) => {
      if (s.transitions) {
        const n = b(De(u(), { month: i.month, year: i.year }));
        Q.value = g(b(De(u(), { month: d, year: a })), n) ? v.value[X(!0)] : v.value[X(!1)], V.value = !1, je(() => {
          V.value = !0;
        });
      }
    }, oe = H(
      () => ({
        ...w.value.calendar
      })
    ), K = (d) => ({ type: "dot", ...d }), te = H(() => (d) => {
      const a = K(d);
      return {
        dp__marker_dot: a.type === "dot",
        dp__marker_line: a.type === "line"
      };
    }), de = H(() => (d) => _(d, D.value)), Z = H(() => ({
      dp__calendar: !0,
      dp__calendar_next: Y.value.count > 0 && i.instance !== 0
    })), ce = H(() => (d) => s.hideOffsetDates ? d.current : !0), le = async (d, a) => {
      const { width: n, height: C } = d.getBoundingClientRect();
      D.value = a.value;
      let f = { left: `${n / 2}px` }, N = -50;
      if (await je(), R.value?.[0]) {
        const { left: q, width: pe } = R.value[0].getBoundingClientRect();
        q < 0 && (f = { left: "0" }, N = 0, re.value.left = `${n / 2}px`), globalThis.innerWidth < q + pe && (f = { right: "0" }, N = 0, re.value.left = `${pe - n / 2}px`);
      }
      U.value = {
        bottom: `${C}px`,
        ...f,
        transform: `translateX(${N}%)`
      };
    }, we = async (d, a, n) => {
      const C = vt(h.value?.[a]?.[n]);
      C && (d.marker?.customPosition && d.marker?.tooltip?.length ? U.value = d.marker.customPosition(C) : await le(C, d), r("tooltip-open", d.marker));
    }, ve = async (d, a, n) => {
      if (F.value && l.value.enabled && l.value.dragSelect)
        return o("select-date", d);
      if (o("set-hover-date", d), d.marker?.tooltip?.length) {
        if (s.hideOffsetDates && !d.current) return;
        await we(d, a, n);
      }
    }, Ae = (d) => {
      D.value && (D.value = null, U.value = structuredClone({ bottom: "", left: "", transform: "" }), r("tooltip-close", d.marker));
    }, J = (d, a, n) => {
      d && (Array.isArray(h.value[a]) ? h.value[a][n] = d : h.value[a] = [d]);
    }, B = (d) => {
      O.value.monthChangeOnScroll && (d.preventDefault(), o("handle-scroll", d));
    }, y = (d) => x.value ? x.value.type === "local" ? Tn(d.value, {
      weekStartsOn: +s.weekStart,
      locale: s.locale
    }) : x.value.type === "iso" ? $n(d.value) : typeof x.value.type == "function" ? x.value.type(d.value) : "" : "", L = (d) => {
      const a = d[0];
      return x.value?.hideOnOffsetDates ? d.some((n) => n.current) ? y(a) : "" : y(a);
    }, fe = (d, a, n = !0) => {
      !n && k() || (!l.value.enabled || O.value.allowPreventDefault) && (m(d, O.value), o("select-date", a));
    }, Pe = (d) => {
      m(d, O.value);
    }, xe = (d) => {
      l.value.enabled && l.value.dragSelect ? (F.value = !0, o("select-date", d)) : l.value.enabled && o("select-date", d);
    }, c = () => {
      const d = u(), a = Xt(d, { locale: s.locale, weekStartsOn: +s.weekStart }), n = ga(d, { locale: s.locale, weekStartsOn: +s.weekStart });
      return ha({ start: a, end: n }).map((f) => $(f));
    };
    return M({ triggerTransition: j }), (d, a) => (W(), G("div", {
      class: he(Z.value)
    }, [
      ye("div", {
        ref: "calendar-wrap",
        class: he(oe.value),
        role: "grid"
      }, [
        ye("div", yl, [
          t(x) ? (W(), G("div", bl, Ne(t(x).label), 1)) : ae("", !0),
          (W(!0), G(Te, null, Re(I.value, (n, C) => (W(), G("div", {
            key: C,
            class: "dp__calendar_header_item",
            role: "gridcell",
            "data-test-id": "calendar-header",
            "aria-label": t(A)?.weekDay?.(C)
          }, [
            ne(d.$slots, "calendar-header", {
              day: n,
              index: C
            }, () => [
              ut(Ne(n), 1)
            ])
          ], 8, kl))), 128))
        ]),
        a[2] || (a[2] = ye("div", { class: "dp__calendar_header_separator" }, null, -1)),
        Be(At, {
          name: Q.value,
          css: !!t(v)
        }, {
          default: be(() => [
            V.value ? (W(), G("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: a[1] || (a[1] = (n) => F.value = !1)
            }, [
              (W(!0), G(Te, null, Re(ee.value, (n, C) => (W(), G("div", {
                key: C,
                class: "dp__calendar_row",
                role: "row"
              }, [
                t(x) ? (W(), G("div", wl, [
                  ye("div", Dl, Ne(L(n.days)), 1)
                ])) : ae("", !0),
                (W(!0), G(Te, null, Re(n.days, (f, N) => (W(), G("div", {
                  id: t(E)(f.value),
                  ref_for: !0,
                  ref: (q) => J(q, C, N),
                  key: N + C,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (f.classData.dp__active_date || f.classData.dp__range_start || f.classData.dp__range_end) ?? void 0,
                  "aria-disabled": f.classData.dp__cell_disabled || void 0,
                  "aria-label": t(A)?.day?.(f),
                  tabindex: !f.current && t(s).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(E)(f.value),
                  "data-dp-element-active": f.classData.dp__active_date ? 0 : void 0,
                  "data-dp-action-element": "0",
                  onClick: _t((q) => fe(q, f), ["prevent"]),
                  onTouchend: (q) => fe(q, f, !1),
                  onKeydown: (q) => t(T)(q, () => d.$emit("select-date", f)),
                  onMouseenter: (q) => ve(f, C, N),
                  onMouseleave: (q) => Ae(f),
                  onMousedown: (q) => xe(f),
                  onMouseup: a[0] || (a[0] = (q) => F.value = !1)
                }, [
                  ye("div", {
                    class: he(["dp__cell_inner", f.classData])
                  }, [
                    d.$slots.day && ce.value(f) ? ne(d.$slots, "day", {
                      key: 0,
                      day: +f.text,
                      date: f.value
                    }) : ae("", !0),
                    d.$slots.day ? ae("", !0) : (W(), G(Te, { key: 1 }, [
                      ut(Ne(f.text), 1)
                    ], 64)),
                    f.marker && ce.value(f) ? ne(d.$slots, "marker", {
                      key: 2,
                      marker: f.marker,
                      day: +f.text,
                      date: f.value
                    }, () => [
                      ye("div", {
                        class: he(te.value(f.marker)),
                        style: ze(f.marker.color ? { backgroundColor: f.marker.color } : {})
                      }, null, 6)
                    ]) : ae("", !0),
                    de.value(f.value) ? (W(), G("div", {
                      key: 3,
                      ref_for: !0,
                      ref: "active-tooltip",
                      class: "dp__marker_tooltip",
                      style: ze(U.value)
                    }, [
                      f.marker?.tooltip ? (W(), G("div", {
                        key: 0,
                        class: "dp__tooltip_content",
                        onClick: Pe
                      }, [
                        (W(!0), G(Te, null, Re(f.marker.tooltip, (q, pe) => (W(), G("div", {
                          key: pe,
                          class: "dp__tooltip_text"
                        }, [
                          ne(d.$slots, "marker-tooltip", {
                            tooltip: q,
                            day: f.value
                          }, () => [
                            ye("div", {
                              class: "dp__tooltip_mark",
                              style: ze(q.color ? { backgroundColor: q.color } : {})
                            }, null, 4),
                            ye("div", null, Ne(q.text), 1)
                          ])
                        ]))), 128)),
                        ye("div", {
                          class: "dp__arrow_bottom_tp",
                          style: ze(re.value)
                        }, null, 4)
                      ])) : ae("", !0)
                    ], 4)) : ae("", !0)
                  ], 2)
                ], 40, Ml))), 128))
              ]))), 128))
            ], 32)) : ae("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Al = (e, M, p, o) => {
  const i = ie([]), u = ie(/* @__PURE__ */ new Date()), r = ie(), {
    getDate: s,
    rootEmit: v,
    calendars: O,
    month: A,
    year: Y,
    time: x,
    modelValue: l,
    rootProps: w,
    today: g,
    state: _,
    defaults: { multiCalendars: b, startTime: E, range: T, config: m, safeDates: k, multiDates: $, timeConfig: S, flow: R }
  } = Me(), { validateMonthYearInRange: h, isDisabled: D, isDateRangeAllowed: V, checkMinMaxRange: F } = Ue(), { updateTimeValues: Q, getSetDateTime: U, assignTime: re, assignStartTime: ee, validateTime: I, disabledTimesConfig: X } = Ha(o), { formatDay: j } = pt(), { resetDateTime: oe, setTime: K, isDateBefore: te, isDateEqual: de, getDaysInBetween: Z } = We(), { checkRangeAutoApply: ce, getRangeWithFixedDate: le, handleMultiDatesSelect: we, setPresetDate: ve } = na(), { getMapDate: Ae } = Ie();
  Ft(() => xe(_.isTextInputDate));
  const J = (P) => !m.value.keepViewOnOffsetClick || P ? !0 : !r.value, B = (P, z, ue, ke = !1) => {
    J(ke) && (O.value[P] ??= O.value[P] = { month: 0, year: 0 }, O.value[P].month = z ?? O.value[P]?.month, O.value[P].year = ue ?? O.value[P]?.year);
  }, y = () => {
    w.autoApply && M("select-date");
  }, L = () => {
    E.value && ee(E.value);
  };
  Ee(() => {
    l.value || (Tt(), L()), xe(!0), w.focusStartDate && w.startDate && Tt();
  });
  const fe = H(() => R.value?.steps?.length && !R.value?.partial ? e.flowStep === R.value.steps.length : !0), Pe = () => {
    w.autoApply && fe.value && M("auto-apply", R.value?.partial ? e.flowStep !== R.value?.steps?.length : !1);
  }, xe = (P = !1) => {
    if (l.value)
      return Array.isArray(l.value) ? (i.value = l.value, q(P)) : n(l.value, P);
    if (b.value.count && P && !w.startDate)
      return a(s(), P);
  }, c = () => Array.isArray(l.value) && T.value.enabled ? _e(l.value[0]) === _e(l.value[1] ?? l.value[0]) : !1, d = (P) => {
    const z = yt(P, 1);
    return { month: _e(z), year: me(z) };
  }, a = (P = s(), z = !1) => {
    if ((!b.value.count || !b.value.static || z) && B(0, _e(P), me(P)), b.value.count && (!l.value || c() || !b.value.solo) && (!b.value.solo || z))
      for (let ue = 1; ue < b.value.count; ue++) {
        const ke = De(s(), { month: A.value(ue - 1), year: Y.value(ue - 1) }), Oe = Ra(ke, { months: 1 });
        O.value[ue] = { month: _e(Oe), year: me(Oe) };
      }
  }, n = (P, z) => {
    a(P), re("hours", ot(P)), re("minutes", it(P)), re("seconds", ft(P)), b.value.count && z && Qe();
  }, C = (P) => {
    if (b.value.count) {
      if (b.value.solo) return 0;
      const z = _e(P[0]), ue = _e(P[1]);
      return Math.abs(ue - z) < b.value.count ? 0 : 1;
    }
    return 1;
  }, f = (P, z) => {
    P[1] && T.value.showLastInRange ? a(P[C(P)], z) : a(P[0], z);
    const ue = (ke, Oe) => [
      ke(P[0]),
      P?.[1] ? ke(P[1]) : x[Oe][1]
    ];
    re("hours", ue(ot, "hours")), re("minutes", ue(it, "minutes")), re("seconds", ue(ft, "seconds"));
  }, N = (P, z) => {
    if ((T.value.enabled || w.weekPicker) && !$.value.enabled)
      return f(P, z);
    if ($.value.enabled && z) {
      const ue = P[P.length - 1];
      return n(ue, z);
    }
  }, q = (P) => {
    const z = l.value;
    N(z, P), b.value.count && b.value.solo && Qe();
  }, pe = (P, z) => {
    const ue = De(s(), { month: A.value(z), year: Y.value(z) }), ke = P < 0 ? yt(ue, 1) : It(ue, 1);
    h(_e(ke), me(ke), P < 0, w.preventMinMaxNavigation) && (B(z, _e(ke), me(ke)), v("update-month-year", { instance: z, month: _e(ke), year: me(ke) }), b.value.count && !b.value.solo && ge(z), p());
  }, ge = (P) => {
    for (let z = P - 1; z >= 0; z--) {
      const ue = It(De(s(), { month: A.value(z + 1), year: Y.value(z + 1) }), 1);
      B(z, _e(ue), me(ue));
    }
    for (let z = P + 1; z <= b.value.count - 1; z++) {
      const ue = yt(De(s(), { month: A.value(z - 1), year: Y.value(z - 1) }), 1);
      B(z, _e(ue), me(ue));
    }
  }, Qe = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const P = s(s(l.value[1] ?? yt(l.value[0], 1))), [z, ue] = [_e(l.value[0]), me(l.value[0])], [ke, Oe] = [_e(l.value[1]), me(l.value[1])];
      (z !== ke || z === ke && ue !== Oe) && b.value.solo && B(1, _e(P), me(P));
    } else l.value && !Array.isArray(l.value) && (B(0, _e(l.value), me(l.value)), a(s()));
  }, Tt = () => {
    w.startDate && (B(0, _e(s(w.startDate)), me(s(w.startDate))), b.value.count && ge(0));
  }, Wt = (P, z) => {
    if (m.value.monthChangeOnScroll) {
      const ue = Date.now() - u.value.getTime(), ke = Math.abs(P.deltaY);
      let Oe = 500;
      ke > 1 && (Oe = 100), ke > 100 && (Oe = 0), ue > Oe && (u.value = /* @__PURE__ */ new Date(), pe(
        m.value.monthChangeOnScroll === "inverse" ? P.deltaY : -P.deltaY,
        z
      ));
    }
  }, ra = (P, z, ue = !1) => {
    m.value.monthChangeOnArrows && w.vertical === ue && Lt(P, z);
  }, Lt = (P, z) => {
    pe(P === "right" ? -1 : 1, z);
  }, la = (P) => {
    if (k.value.markers)
      return Ae(P.value, k.value.markers);
  }, oa = (P, z) => {
    switch (w.sixWeeks === !0 ? "append" : w.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [P == 0, !0];
      case "fair":
        return [P == 0 || z > P, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, sa = (P, z, ue, ke) => {
    if (w.sixWeeks && P.length < 6) {
      const Oe = 6 - P.length, ct = (z.getDay() + 7 - ke) % 7, Kt = 6 - (ue.getDay() + 7 - ke) % 7, [Ct, da] = oa(ct, Kt);
      for (let gt = 1; gt <= Oe; gt++)
        if (da ? !!(gt % 2) == Ct : Ct) {
          const zt = P[0].days[0], va = $t(dt(zt.value, -7), _e(z));
          P.unshift({ days: va });
        } else {
          const zt = P[P.length - 1], va = zt.days[zt.days.length - 1], en = $t(dt(va.value, 1), _e(z));
          P.push({ days: en });
        }
    }
    return P;
  }, $t = (P, z) => {
    const ue = s(P), ke = [];
    for (let Oe = 0; Oe < 7; Oe++) {
      const ct = dt(ue, Oe), Rt = _e(ct) !== z;
      ke.push({
        text: w.hideOffsetDates && Rt ? "" : j(ct),
        value: ct,
        current: !Rt,
        classData: {}
      });
    }
    return ke;
  }, ua = (P, z) => {
    const ue = [], ke = s(new Date(z, P)), Oe = s(new Date(z, P + 1, 0)), ct = w.weekStart, Rt = Xt(ke, { weekStartsOn: ct }), Kt = (Ct) => {
      const da = $t(Ct, P);
      if (ue.push({ days: da }), !ue[ue.length - 1].days.some((gt) => de(s(gt.value), oe(Oe)))) {
        const gt = dt(Ct, 7);
        Kt(gt);
      }
    };
    return Kt(Rt), sa(ue, ke, Oe, ct);
  }, ia = (P) => {
    const z = K(
      { hours: x.hours, minutes: x.minutes, seconds: jt() },
      s(P.value)
    );
    v("date-click", z), $.value.enabled ? we(z, $.value.limit) : l.value = z, o(), je().then(() => {
      Pe();
    });
  }, Ht = (P) => T.value.noDisabledRange ? Z(i.value[0], P).some((ue) => D(ue)) : !1, se = () => {
    i.value = l.value ? l.value.slice().filter((P) => !!P) : [], i.value.length === 2 && !(T.value.fixedStart || T.value.fixedEnd) && (i.value = []);
  }, Le = (P, z) => {
    const ue = [s(P.value), dt(s(P.value), +T.value.autoRange)];
    V(ue) ? (z && Je(P.value), i.value = ue) : v("invalid-date", P.value);
  }, Je = (P) => {
    const z = _e(s(P)), ue = me(s(P));
    if (B(0, z, ue), b.value.count > 0)
      for (let ke = 1; ke < b.value.count; ke++) {
        const Oe = d(
          De(s(P), { year: Y.value(ke - 1), month: A.value(ke - 1) })
        );
        B(ke, Oe.month, Oe.year);
      }
  }, St = (P) => {
    if (Ht(P.value) || !F(P.value, l.value, T.value.fixedStart ? 0 : 1))
      return v("invalid-date", P.value);
    i.value = le(s(P.value));
  }, ht = (P, z) => {
    if (se(), T.value.autoRange) return Le(P, z);
    if (T.value.fixedStart || T.value.fixedEnd) return St(P);
    i.value[0] ? F(s(P.value), l.value) && !Ht(P.value) ? te(s(P.value), s(i.value[0])) ? T.value.autoSwitchStartEnd ? (i.value.unshift(s(P.value)), v("range-end", i.value[0])) : (i.value[0] = s(P.value), v("range-start", i.value[0])) : (i.value[1] = s(P.value), v("range-end", i.value[1])) : v("invalid-date", P.value) : (i.value[0] = s(P.value), v("range-start", i.value[0]));
  }, jt = (P = !0) => S.value.enableSeconds ? Array.isArray(x.seconds) ? P ? x.seconds[0] : x.seconds[1] : x.seconds : 0, ca = (P) => {
    i.value[P] = K(
      {
        hours: x.hours[P],
        minutes: x.minutes[P],
        seconds: jt(P !== 1)
      },
      i.value[P]
    );
  }, ja = () => {
    i.value[0] && i.value[1] && +i.value?.[0] > +i.value?.[1] && (i.value.reverse(), v("range-start", i.value[0]), v("range-end", i.value[1]));
  }, Ka = () => {
    i.value.length && (i.value[0] && !i.value[1] ? ca(0) : (ca(0), ca(1), o()), ja(), l.value = i.value.slice(), ce(
      i.value,
      M,
      i.value.length < 2 || R.value?.steps.length ? e.flowStep !== R.value?.steps?.length : !1
    ));
  }, za = (P, z = !1) => {
    if (D(P.value) || !P.current && w.hideOffsetDates)
      return v("invalid-date", P.value);
    if (r.value = structuredClone(P), !T.value.enabled) return ia(P);
    Array.isArray(x.hours) && Array.isArray(x.minutes) && !$.value.enabled && (ht(P, z), Ka());
  }, qa = (P, z) => {
    B(P, z.month, z.year, !0), b.value.count && !b.value.solo && ge(P), v("update-month-year", { instance: P, month: z.month, year: z.year }), p(b.value.solo ? P : void 0);
    const ue = R.value?.steps?.length ? R.value.steps[e.flowStep] : void 0;
    !z.fromNav && (ue === He.month || ue === He.year) && o();
  }, Ua = (P) => {
    ve({
      value: P
    }), y(), w.multiCalendars && je().then(() => xe(!0));
  }, Qa = () => {
    let P = s();
    return w.actionRow?.nowBtnRound && (P = Sn(P, {
      roundingMethod: w.actionRow.nowBtnRound.rounding ?? "ceil",
      nearestTo: w.actionRow.nowBtnRound.roundTo ?? 15
    })), P;
  }, Ja = () => {
    const P = Qa();
    !T.value.enabled && !$.value.enabled ? l.value = P : l.value && Array.isArray(l.value) && l.value[0] ? $.value.enabled ? l.value = [...l.value, P] : l.value = te(P, l.value[0]) ? [P, l.value[0]] : [l.value[0], P] : l.value = [P], y();
  }, Ga = () => {
    if (Array.isArray(l.value))
      if ($.value.enabled) {
        const P = Xa();
        l.value[l.value.length - 1] = U(P);
      } else
        l.value = l.value.map((P, z) => P && U(P, z));
    else
      l.value = U(l.value);
    M("time-update");
  }, Xa = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null, Za = (P) => {
    let z = "";
    if (T.value.enabled && Array.isArray(l.value))
      for (const ue of Object.keys(P)) {
        const ke = P[ue];
        Array.isArray(ke) && (x[ue][0] !== ke[0] && (z = "range-start"), x[ue][1] !== ke[1] && (z = "range-start"));
      }
    return z;
  };
  return {
    calendars: O,
    modelValue: l,
    month: A,
    year: Y,
    time: x,
    disabledTimesConfig: X,
    today: g,
    validateTime: I,
    getCalendarDays: ua,
    getMarker: la,
    handleScroll: Wt,
    handleSwipe: Lt,
    handleArrow: ra,
    selectDate: za,
    updateMonthYear: qa,
    presetDate: Ua,
    selectCurrentDate: Ja,
    updateTime: (P) => {
      const z = Za(P);
      Q(P, Ga), z && v(z, l.value[z === "range-start" ? 0 : 1]);
    },
    assignMonthAndYear: a,
    setStartTime: L
  };
}, Pl = () => {
  const {
    isModelAuto: e,
    matchDate: M,
    isDateAfter: p,
    isDateBefore: o,
    isDateBetween: i,
    isDateEqual: u,
    getWeekFromDate: r,
    getBeforeAndAfterInRange: s
  } = We(), {
    getDate: v,
    today: O,
    rootProps: A,
    defaults: { multiCalendars: Y, multiDates: x, ui: l, highlight: w, safeDates: g, range: _ },
    modelValue: b
  } = Me(), { isDisabled: E } = Ue(), T = ie(null), m = (a) => {
    !a.current && A.hideOffsetDates || (T.value = a.value);
  }, k = () => {
    T.value = null;
  }, $ = (a) => Array.isArray(b.value) && _.value.enabled && b.value[0] && T.value ? a ? p(T.value, b.value[0]) : o(T.value, b.value[0]) : !0, S = (a, n) => {
    const C = () => b.value ? n ? b.value[0] || null : b.value[1] : null, f = b.value && Array.isArray(b.value) ? C() : null;
    return u(v(a.value), f);
  }, R = (a) => {
    const n = Array.isArray(b.value) ? b.value[0] : null;
    return a ? !o(T.value, n) : !0;
  }, h = (a, n = !0) => (_.value.enabled || A.weekPicker) && Array.isArray(b.value) && b.value.length === 2 ? A.hideOffsetDates && !a.current ? !1 : u(v(a.value), b.value[n ? 0 : 1]) : _.value.enabled ? S(a, n) && R(n) || u(a.value, Array.isArray(b.value) ? b.value[0] : null) && $(n) : !1, D = (a, n) => {
    if (Array.isArray(b.value) && b.value[0] && b.value.length === 1) {
      const C = u(a.value, T.value);
      return n ? p(b.value[0], a.value) && C : o(b.value[0], a.value) && C;
    }
    return !1;
  }, V = (a) => !b.value || A.hideOffsetDates && !a.current ? !1 : _.value.enabled ? A.modelAuto && Array.isArray(b.value) ? u(a.value, b.value[0] ?? O) : !1 : x.value.enabled && Array.isArray(b.value) ? b.value.some((n) => u(n, a.value)) : u(a.value, b.value ? b.value : O), F = (a) => {
    if (_.value.autoRange || A.weekPicker) {
      if (T.value) {
        if (A.hideOffsetDates && !a.current) return !1;
        const n = dt(T.value, +_.value.autoRange), C = r(v(T.value), A.weekStart);
        return A.weekPicker ? u(C[1], v(a.value)) : u(n, v(a.value));
      }
      return !1;
    }
    return !1;
  }, Q = (a) => {
    if (_.value.autoRange || A.weekPicker) {
      if (T.value) {
        const n = dt(T.value, +_.value.autoRange);
        if (A.hideOffsetDates && !a.current) return !1;
        const C = r(v(T.value), A.weekStart);
        return A.weekPicker ? p(a.value, C[0]) && o(a.value, C[1]) : p(a.value, T.value) && o(a.value, n);
      }
      return !1;
    }
    return !1;
  }, U = (a) => {
    if (_.value.autoRange || A.weekPicker) {
      if (T.value) {
        if (A.hideOffsetDates && !a.current) return !1;
        const n = r(v(T.value), A.weekStart);
        return A.weekPicker ? u(n[0], a.value) : u(T.value, a.value);
      }
      return !1;
    }
    return !1;
  }, re = (a) => i(b.value, T.value, a.value), ee = () => A.modelAuto && Array.isArray(b.value) ? !!b.value[0] : !1, I = () => A.modelAuto ? e(b.value) : !0, X = (a) => {
    if (A.weekPicker) return !1;
    const n = _.value.enabled ? !h(a) && !h(a, !1) : !0;
    return !E(a.value) && !V(a) && !(!a.current && A.hideOffsetDates) && n;
  }, j = (a) => _.value.enabled ? A.modelAuto ? ee() && V(a) : !1 : V(a), oe = (a) => w.value ? M(a.value, g.value.highlight) : !1, K = (a) => {
    const n = E(a.value);
    return n && (typeof w.value == "function" ? !w.value(a.value, n) : !w.value.options.highlightDisabled);
  }, te = (a) => typeof w.value == "function" ? w.value(a.value) : w.value.weekdays?.includes(a.value.getDay()), de = (a) => (_.value.enabled || A.weekPicker) && (!(Y.value.count > 0) || a.current) && I() && !(!a.current && A.hideOffsetDates) && !V(a) ? re(a) : !1, Z = (a) => {
    if (Array.isArray(b.value) && b.value.length === 1) {
      const { before: n, after: C } = s(+_.value.maxRange, b.value[0]);
      return st(a.value, n) || rt(a.value, C);
    }
    return !1;
  }, ce = (a) => {
    if (Array.isArray(b.value) && b.value.length === 1) {
      const { before: n, after: C } = s(+_.value.minRange, b.value[0]);
      return i([n, C], b.value[0], a.value);
    }
    return !1;
  }, le = (a) => _.value.enabled && (_.value.maxRange || _.value.minRange) ? _.value.maxRange && _.value.minRange ? Z(a) || ce(a) : _.value.maxRange ? Z(a) : ce(a) : !1, we = (a) => {
    const { isRangeStart: n, isRangeEnd: C } = B(a), f = _.value.enabled ? n || C : !1;
    return {
      dp__cell_offset: !a.current,
      dp__pointer: !A.disabled && !(!a.current && A.hideOffsetDates) && !E(a.value) && !le(a),
      dp__cell_disabled: E(a.value) || le(a),
      dp__cell_highlight: !K(a) && (oe(a) || te(a)) && !j(a) && !f && !U(a) && !(de(a) && A.weekPicker) && !C,
      dp__cell_highlight_active: !K(a) && (oe(a) || te(a)) && j(a),
      dp__today: !A.noToday && u(a.value, O) && a.current,
      "dp--past": o(a.value, O),
      "dp--future": p(a.value, O)
    };
  }, ve = (a) => ({
    dp__active_date: j(a),
    dp__date_hover: X(a)
  }), Ae = (a) => {
    if (b.value && !Array.isArray(b.value)) {
      const n = r(b.value, A.weekStart);
      return {
        ...xe(a),
        dp__range_start: u(n[0], a.value),
        dp__range_end: u(n[1], a.value),
        dp__range_between_week: p(a.value, n[0]) && o(a.value, n[1])
      };
    }
    return {
      ...xe(a)
    };
  }, J = (a) => {
    if (b.value && Array.isArray(b.value)) {
      const n = r(b.value[0], A.weekStart), C = b.value[1] ? r(b.value[1], A.weekStart) : [];
      return {
        ...xe(a),
        dp__range_start: u(n[0], a.value) || u(C[0], a.value),
        dp__range_end: u(n[1], a.value) || u(C[1], a.value),
        dp__range_between_week: p(a.value, n[0]) && o(a.value, n[1]) || p(a.value, C[0]) && o(a.value, C[1]),
        dp__range_between: p(a.value, n[1]) && o(a.value, C[0])
      };
    }
    return {
      ...xe(a)
    };
  }, B = (a) => {
    const n = Y.value.count > 0 ? a.current && h(a) && I() : h(a) && I(), C = Y.value.count > 0 ? a.current && h(a, !1) && I() : h(a, !1) && I();
    return { isRangeStart: n, isRangeEnd: C };
  }, y = (a) => _.value.enabled && (_.value.fixedStart || _.value.fixedEnd) && Array.isArray(b.value) && b.value.length === 2, L = (a, n, C, f) => !y(b.value) || !T.value ? !1 : n ? _.value.fixedEnd && u(a.value, T.value) && st(a.value, b.value[0]) && !C : _.value.fixedStart && u(a.value, T.value) && rt(a.value, b.value[1]) && !f, fe = (a, n) => !y(b.value) || !T.value ? !1 : n ? _.value.fixedEnd && rt(a.value, T.value) && st(a.value, b.value[0]) : _.value.fixedStart && st(a.value, T.value) && rt(a.value, b.value[1]), Pe = (a) => {
    const { isRangeStart: n, isRangeEnd: C } = B(a);
    return {
      dp__range_start: n,
      dp__range_end: C,
      dp__range_between: de(a),
      dp__date_hover: u(a.value, T.value) && !n && !C && !A.weekPicker,
      dp__date_hover_start: D(a, !0) || L(a, !0, n, C),
      dp__date_hover_end: D(a, !1) || L(a, !1, n, C),
      "dp--extended-fixed-start": fe(a, !0),
      "dp--extended-fixed-end": fe(a, !1)
    };
  }, xe = (a) => ({
    ...Pe(a),
    dp__cell_auto_range: Q(a),
    dp__cell_auto_range_start: U(a),
    dp__cell_auto_range_end: F(a)
  }), c = (a) => _.value.enabled ? _.value.autoRange ? xe(a) : A.modelAuto ? { ...ve(a), ...Pe(a) } : A.weekPicker ? J(a) : Pe(a) : A.weekPicker ? Ae(a) : ve(a);
  return {
    setHoverDate: m,
    clearHoverDate: k,
    getDayClassData: (a) => A.hideOffsetDates && !a.current ? {} : {
      ...we(a),
      ...c(a),
      [l.value.dayClass ? l.value.dayClass(a.value, b.value) : ""]: !0,
      ...l.value.calendarCell
    }
  };
}, Tl = { key: 0 }, $l = /* @__PURE__ */ Ve({
  __name: "DatePicker",
  props: /* @__PURE__ */ Pa({
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  }, Ar),
  emits: ["mount", "update-flow-step", "reset-flow", "focus-menu", "select-date", "time-update", "auto-apply"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      month: u,
      year: r,
      modelValue: s,
      time: v,
      disabledTimesConfig: O,
      today: A,
      validateTime: Y,
      getCalendarDays: x,
      getMarker: l,
      handleArrow: w,
      handleScroll: g,
      handleSwipe: _,
      selectDate: b,
      updateMonthYear: E,
      presetDate: T,
      selectCurrentDate: m,
      updateTime: k,
      assignMonthAndYear: $,
      setStartTime: S
    } = Al(i, o, ve, Ae), R = mt(), { setHoverDate: h, getDayClassData: D, clearHoverDate: V } = Pl(), {
      getDate: F,
      rootEmit: Q,
      rootProps: U,
      defaults: { multiCalendars: re, timeConfig: ee }
    } = Me(), { getYears: I, getMonths: X } = ea(), { getCellId: j } = We(), oe = Ce("calendar-header"), K = Ce("calendar"), te = Ce("time-picker"), de = lt(R, at.Calendar), Z = lt(R, at.DatePickerHeader), ce = lt(R, at.TimePicker), le = (d) => {
      o("mount", d);
    };
    tt(
      re,
      (d, a) => {
        d.count - a.count > 0 && $();
      },
      { deep: !0 }
    );
    const we = H(() => (d) => x(u.value(d), r.value(d)).map((a) => ({
      ...a,
      days: a.days.map((n) => (n.marker = l(n), n.classData = D(n), n))
    })));
    function ve(d) {
      d || d === 0 ? K.value?.[d]?.triggerTransition(u.value(d), r.value(d)) : K.value?.forEach((a, n) => a?.triggerTransition(u.value(n), r.value(n)));
    }
    function Ae() {
      o("update-flow-step");
    }
    const J = (d, a, n = 0) => {
      oe.value?.[n]?.toggleMonthPicker(d, a);
    }, B = (d, a, n = 0) => {
      oe.value?.[n]?.toggleYearPicker(d, a);
    }, y = (d, a, n) => {
      te.value?.toggleTimePicker(d, a, n);
    }, L = (d, a) => {
      if (!U.range) {
        const n = s.value ? s.value : A, C = a ? F(a) : n, f = d ? Xt(C, { weekStartsOn: 1 }) : ga(C, { weekStartsOn: 1 });
        b({
          value: f,
          current: _e(C) === u.value(0),
          text: "",
          classData: {}
        }), document.getElementById(j(f))?.focus();
      }
    }, fe = (d) => {
      oe.value?.[0]?.handleMonthYearChange(d, !0);
    }, Pe = (d) => {
      E(0, { month: u.value(0), year: r.value(0) + (d ? 1 : -1), fromNav: !0 });
    }, xe = (d) => {
      Q("overlay-toggle", { open: !1, overlay: d }), o("focus-menu");
    };
    return M({
      clearHoverDate: V,
      presetDate: T,
      selectCurrentDate: m,
      handleArrow: w,
      updateMonthYear: E,
      setStartTime: S,
      toggleMonthPicker: J,
      toggleYearPicker: B,
      toggleTimePicker: y,
      getSidebarProps: () => ({
        modelValue: s,
        month: u,
        year: r,
        time: v,
        updateTime: k,
        updateMonthYear: E,
        selectDate: b,
        presetDate: T
      }),
      changeMonth: fe,
      changeYear: Pe,
      selectWeekDate: L
    }), (d, a) => (W(), G(Te, null, [
      Be(aa, { collapse: e.collapse }, {
        default: be(({ instances: n, wrapClass: C }) => [
          (W(!0), G(Te, null, Re(n, (f) => (W(), G("div", {
            key: f,
            class: he(C)
          }, [
            t(U).hideMonthYearSelect ? ae("", !0) : (W(), Se(gl, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(X)(),
              years: t(I)(),
              month: t(u)(f),
              year: t(r)(f),
              instance: f,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: a[0] || (a[0] = (N) => le(t(bt).header)),
              onResetFlow: a[1] || (a[1] = (N) => d.$emit("reset-flow")),
              onUpdateMonthYear: (N) => t(E)(f, N),
              onOverlayClosed: xe
            }, Fe({ _: 2 }, [
              Re(t(Z), (N, q) => ({
                name: N,
                fn: be((pe) => [
                  ne(d.$slots, N, nt({ ref_for: !0 }, pe))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            Be(_l, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": we.value(f),
              instance: f,
              month: t(u)(f),
              year: t(r)(f),
              onSelectDate: (N) => t(b)(N, f !== 1),
              onSetHoverDate: a[2] || (a[2] = (N) => t(h)(N)),
              onHandleScroll: (N) => t(g)(N, f),
              onHandleSwipe: (N) => t(_)(N, f),
              onMount: a[3] || (a[3] = (N) => le(t(bt).calendar))
            }, Fe({ _: 2 }, [
              Re(t(de), (N, q) => ({
                name: N,
                fn: be((pe) => [
                  ne(d.$slots, N, nt({ ref_for: !0 }, pe))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(ee).enableTimePicker ? (W(), G("div", Tl, [
        ne(d.$slots, "time-picker", Ke(et({ time: t(v), updateTime: t(k) })), () => [
          Be(La, {
            ref: "time-picker",
            hours: t(v).hours,
            minutes: t(v).minutes,
            seconds: t(v).seconds,
            "disabled-times-config": t(O),
            "validate-time": t(Y),
            "no-overlay-focus": e.noOverlayFocus,
            onMount: a[4] || (a[4] = (n) => le(t(bt).timePicker)),
            "onUpdate:hours": a[5] || (a[5] = (n) => t(k)({ hours: n, minutes: t(v).minutes, seconds: t(v).seconds })),
            "onUpdate:minutes": a[6] || (a[6] = (n) => t(k)({ hours: t(v).hours, minutes: n, seconds: t(v).seconds })),
            "onUpdate:seconds": a[7] || (a[7] = (n) => t(k)({ hours: t(v).hours, minutes: t(v).minutes, seconds: n })),
            onResetFlow: a[8] || (a[8] = (n) => d.$emit("reset-flow"))
          }, Fe({ _: 2 }, [
            Re(t(ce), (n, C) => ({
              name: n,
              fn: be((f) => [
                ne(d.$slots, n, Ke(et(f)))
              ])
            }))
          ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"])
        ])
      ])) : ae("", !0)
    ], 64));
  }
}), Sl = (e, M) => {
  const {
    getDate: p,
    modelValue: o,
    year: i,
    calendars: u,
    defaults: { highlight: r, range: s, multiDates: v }
  } = Me(), { isDateBetween: O, isDateEqual: A } = We(), { checkRangeAutoApply: Y, handleMultiDatesSelect: x, setMonthOrYearRange: l } = na();
  Ft();
  const { isDisabled: w } = Ue(), { formatQuarterText: g } = pt(), {
    selectYear: _,
    groupedYears: b,
    showYearPicker: E,
    isDisabled: T,
    toggleYearPicker: m,
    handleYearSelect: k,
    handleYear: $,
    setStartDate: S
  } = Wa(M), R = ie();
  Ee(() => {
    S();
  });
  const h = H(() => (j) => o.value ? Array.isArray(o.value) ? o.value.some((oe) => ba(j, oe)) : ba(o.value, j) : !1), D = (j) => {
    if (s.value.enabled) {
      if (Array.isArray(o.value)) {
        const oe = A(j, o.value[0]) || A(j, o.value[1]);
        return O(o.value, R.value, j) && !oe;
      }
      return !1;
    }
    return !1;
  }, V = (j, oe) => j.quarter === wa(oe) && j.year === me(oe), F = (j) => typeof r.value == "function" ? r.value({ quarter: wa(j), year: me(j) }) : r.value.quarters.some((oe) => V(oe, j)), Q = H(() => (j) => {
    const oe = De(p(), { year: i.value(j) });
    return Rn({
      start: Yt(oe),
      end: Ta(oe)
    }).map((K) => {
      const te = Cn(K), de = ka(K), Z = w(K), ce = D(te), le = F(te);
      return {
        text: g(te, de),
        value: te,
        active: h.value(te),
        highlighted: le,
        disabled: Z,
        isBetween: ce
      };
    });
  }), U = (j) => {
    x(j, v.value.limit), M("auto-apply", !0);
  }, re = (j) => {
    o.value = l(j), Y(o.value, M, o.value.length < 2);
  }, ee = (j) => {
    o.value = j, M("auto-apply");
  };
  return {
    groupedYears: b,
    year: i,
    isDisabled: T,
    quarters: Q,
    showYearPicker: E,
    modelValue: o,
    selectYear: _,
    toggleYearPicker: m,
    handleYearSelect: k,
    handleYear: $,
    setHoverDate: (j) => {
      R.value = j;
    },
    selectQuarter: (j, oe, K) => {
      if (!K)
        return u.value[oe].month = _e(ka(j)), v.value.enabled ? U(j) : s.value.enabled ? re(j) : ee(j);
    }
  };
}, Rl = { class: "dp--quarter-items" }, Cl = ["data-test-id", "disabled", "onClick", "onMouseover"], xl = /* @__PURE__ */ Ve({
  __name: "QuarterPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e, {
      defaults: { config: u }
    } = Me(), r = mt(), { boolHtmlAttribute: s } = Pt(), v = lt(r, at.YearMode), {
      groupedYears: O,
      year: A,
      isDisabled: Y,
      quarters: x,
      modelValue: l,
      showYearPicker: w,
      setHoverDate: g,
      selectQuarter: _,
      toggleYearPicker: b,
      handleYearSelect: E,
      handleYear: T
    } = Sl(i, o);
    return M({ getSidebarProps: () => ({
      modelValue: l,
      year: A,
      selectQuarter: _,
      handleYearSelect: E,
      handleYear: T
    }) }), (k, $) => (W(), Se(aa, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: be(({ instances: S, wrapClass: R }) => [
        (W(!0), G(Te, null, Re(S, (h) => (W(), G("div", {
          key: h,
          class: he(R)
        }, [
          ye("div", {
            class: "dp-quarter-picker-wrap",
            style: ze({ minHeight: `${t(u).modeHeight}px` })
          }, [
            k.$slots["top-extra"] ? ne(k.$slots, "top-extra", {
              key: 0,
              value: t(l)
            }) : ae("", !0),
            ye("div", null, [
              Be(Na, {
                items: t(O)(h),
                instance: h,
                "show-year-picker": t(w)[h],
                year: t(A)(h),
                "is-disabled": (D) => t(Y)(h, D),
                onHandleYear: (D) => t(T)(h, D),
                onYearSelect: (D) => t(E)(D, h),
                onToggleYearPicker: (D) => t(b)(h, D?.flow, D?.show)
              }, Fe({ _: 2 }, [
                Re(t(v), (D, V) => ({
                  name: D,
                  fn: be((F) => [
                    ne(k.$slots, D, nt({ ref_for: !0 }, F))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            ye("div", Rl, [
              (W(!0), G(Te, null, Re(t(x)(h), (D, V) => (W(), G("div", { key: V }, [
                ye("button", {
                  type: "button",
                  class: he(["dp--qr-btn", {
                    "dp--qr-btn-active": D.active,
                    "dp--qr-btn-between": D.isBetween,
                    "dp--qr-btn-disabled": D.disabled,
                    "dp--highlighted": D.highlighted
                  }]),
                  "data-dp-action-element": "0",
                  "data-test-id": D.value,
                  disabled: t(s)(D.disabled),
                  onClick: (F) => t(_)(D.value, h, D.disabled),
                  onMouseover: (F) => t(g)(D.value)
                }, [
                  ne(k.$slots, "quarter", {
                    value: D.value,
                    text: D.text
                  }, () => [
                    ut(Ne(D.text), 1)
                  ])
                ], 42, Cl)
              ]))), 128))
            ])
          ], 4)
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), Ol = ["id", "tabindex", "role", "aria-label"], Yl = {
  key: 0,
  class: "dp--menu-load-container"
}, Bl = {
  key: 1,
  class: "dp--menu-header"
}, Il = ["data-dp-mobile"], El = {
  key: 0,
  class: "dp__sidebar_left"
}, Vl = ["data-dp-mobile"], Fl = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], Nl = { class: "dp__instance_calendar" }, Wl = {
  key: 2,
  class: "dp__sidebar_right"
}, Ll = {
  key: 2,
  class: "dp__action_extra"
}, Hl = /* @__PURE__ */ Ve({
  __name: "DatepickerMenu",
  props: {
    collapse: { type: Boolean },
    noOverlayFocus: { type: Boolean },
    getInputRect: { type: Function }
  },
  emits: ["close-picker", "select-date", "auto-apply", "time-update", "menu-blur"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = mt(), {
      state: u,
      rootProps: r,
      defaults: { textInput: s, inline: v, config: O, ui: A, ariaLabels: Y },
      setState: x
    } = Me(), { isMobile: l } = Zt(), { handleEventPropagation: w, getElWithin: g, checkStopPropagation: _, checkKeyDown: b } = Ie();
    In();
    const E = Ce("inner-menu"), T = Ce("dp-menu"), m = Ce("dyn-cmp"), k = ie(0), $ = ie(!1), S = ie(!1), { flowStep: R, updateFlowStep: h, childMount: D, resetFlow: V, handleFlow: F } = Vn(m), Q = (c) => {
      S.value = !0, O.value.allowPreventDefault && c.preventDefault(), _(c, O.value, !0);
    };
    Ee(() => {
      $.value = !0, U(), globalThis.addEventListener("resize", U);
      const c = vt(T);
      c && !s.value.enabled && !v.value.enabled && x("menuFocused", !0), c && (c.addEventListener("pointerdown", Q), c.addEventListener("mousedown", Q)), document.addEventListener("mousedown", Pe);
    }), kt(() => {
      globalThis.removeEventListener("resize", U), document.removeEventListener("mousedown", Pe);
      const c = vt(T);
      c && (c.removeEventListener("pointerdown", Q), c.removeEventListener("mousedown", Q));
    });
    const U = () => {
      const c = vt(E);
      c && (k.value = c.getBoundingClientRect().width);
    }, re = H(() => r.monthPicker ? Ur : r.yearPicker ? Jr : r.timePicker ? cl : r.quarterPicker ? xl : $l), ee = () => {
      const c = vt(T);
      c && c.focus({ preventScroll: !0 });
    }, I = H(() => m.value?.getSidebarProps() || {}), X = lt(i, at.ActionRow), j = lt(i, at.PassTrough), oe = H(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly,
      "dp-menu-loading": r.loading
    })), K = H(
      () => ({
        dp__menu: !0,
        dp__menu_index: !v.value.enabled,
        dp__relative: v.value.enabled,
        ...A.value.menu
      })
    ), te = (c) => {
      _(c, O.value, !0);
    }, de = (c) => {
      O.value.escClose && (o("close-picker"), w(c, O.value));
    }, Z = (c) => {
      r.arrowNavigation || (c === Xe.left || c === Xe.up ? ve("handleArrow", Xe.left, 0, c === Xe.up) : ve("handleArrow", Xe.right, 0, c === Xe.down));
    }, ce = (c) => {
      x("shiftKeyInMenu", c.shiftKey), !r.hideMonthYearSelect && c.code === $e.tab && c.target.classList.contains("dp__menu") && u.shiftKeyInMenu && (c.preventDefault(), _(c, O.value, !0), o("close-picker"));
    }, le = (c) => {
      m.value?.toggleTimePicker(!1, !1), m.value?.toggleMonthPicker(!1, !1, c), m.value?.toggleYearPicker(!1, !1, c);
    }, we = (c, d = 0) => c === "month" ? m.value?.toggleMonthPicker(!1, !0, d) : c === "year" ? m.value?.toggleYearPicker(!1, !0, d) : c === "time" ? m.value?.toggleTimePicker(!0, !1) : le(d), ve = (c, ...d) => {
      m.value?.[c] && m.value?.[c](...d);
    }, Ae = () => {
      ve("selectCurrentDate");
    }, J = (c) => {
      ve("presetDate", on(c));
    }, B = () => {
      ve("clearHoverDate");
    }, y = (c, d) => {
      ve("updateMonthYear", c, d);
    }, L = (c, d) => {
      c.preventDefault(), Z(d);
    }, fe = (c) => {
      if (ce(c), c.key === $e.home || c.key === $e.end)
        return ve(
          "selectWeekDate",
          c.key === $e.home,
          c.target.getAttribute("id")
        );
      switch ((c.key === $e.pageUp || c.key === $e.pageDown) && (c.shiftKey ? (ve("changeYear", c.key === $e.pageUp), g(T.value, "overlay-year")?.focus()) : (ve("changeMonth", c.key === $e.pageUp), g(T.value, c.key === $e.pageUp ? "action-prev" : "action-next")?.focus()), c.target.getAttribute("id") && T.value?.focus({ preventScroll: !0 })), c.key) {
        case $e.esc:
          return de(c);
        case $e.arrowLeft:
          return L(c, Xe.left);
        case $e.arrowRight:
          return L(c, Xe.right);
        case $e.arrowUp:
          return L(c, Xe.up);
        case $e.arrowDown:
          return L(c, Xe.down);
        default:
          return;
      }
    }, Pe = (c) => {
      v.value.enabled && !v.value.input && !T.value?.contains(c.target) && S.value && (S.value = !1, o("menu-blur"));
    };
    return M({
      updateMonthYear: y,
      switchView: we,
      onValueCleared: () => {
        m.value?.setStartTime?.();
      },
      handleFlow: F
    }), (c, d) => (W(), G("div", {
      id: t(r).menuId,
      ref: "dp-menu",
      tabindex: t(v).enabled ? void 0 : "0",
      role: t(v).enabled ? void 0 : "dialog",
      "aria-label": t(Y)?.menu,
      class: he(K.value),
      onMouseleave: B,
      onClick: te,
      onKeydown: fe
    }, [
      (t(r).disabled || t(r).readonly) && t(v).enabled || t(r).loading ? (W(), G("div", {
        key: 0,
        class: he(oe.value)
      }, [
        t(r).loading ? (W(), G("div", Yl, [...d[5] || (d[5] = [
          ye("span", { class: "dp--menu-loader" }, null, -1)
        ])])) : ae("", !0)
      ], 2)) : ae("", !0),
      c.$slots["menu-header"] ? (W(), G("div", Bl, [
        ne(c.$slots, "menu-header")
      ])) : ae("", !0),
      ne(c.$slots, "arrow"),
      ye("div", {
        ref: "inner-menu",
        class: he({
          dp__menu_content_wrapper: t(r).presetDates?.length || !!c.$slots["left-sidebar"] || !!c.$slots["right-sidebar"],
          "dp--menu-content-wrapper-collapsed": e.collapse && (t(r).presetDates?.length || !!c.$slots["left-sidebar"] || !!c.$slots["right-sidebar"])
        }),
        "data-dp-mobile": t(l),
        style: ze({ "--dp-menu-width": `${k.value}px` })
      }, [
        c.$slots["left-sidebar"] ? (W(), G("div", El, [
          ne(c.$slots, "left-sidebar", Ke(et(I.value)))
        ])) : ae("", !0),
        t(r).presetDates.length ? (W(), G("div", {
          key: 1,
          class: he({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(l)
        }, [
          (W(!0), G(Te, null, Re(t(r).presetDates, (a, n) => (W(), G(Te, { key: n }, [
            a.slot ? ne(c.$slots, a.slot, {
              key: 0,
              presetDate: J,
              label: a.label,
              value: a.value
            }) : (W(), G("button", {
              key: 1,
              type: "button",
              style: ze(a.style || {}),
              class: he(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
              "data-test-id": a.testId ?? void 0,
              "data-dp-mobile": t(l),
              onClick: _t((C) => J(a.value), ["prevent"]),
              onKeydown: (C) => t(b)(C, () => J(a.value), !0)
            }, Ne(a.label), 47, Fl))
          ], 64))), 128))
        ], 10, Vl)) : ae("", !0),
        ye("div", Nl, [
          (W(), Se(pa(re.value), {
            ref: "dyn-cmp",
            "flow-step": t(R),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": T.value,
            onMount: t(D),
            onUpdateFlowStep: t(h),
            onResetFlow: t(V),
            onFocusMenu: ee,
            onSelectDate: d[0] || (d[0] = (a) => c.$emit("select-date")),
            onAutoApply: d[1] || (d[1] = (a) => c.$emit("auto-apply", a)),
            onTimeUpdate: d[2] || (d[2] = (a) => c.$emit("time-update"))
          }, Fe({ _: 2 }, [
            Re(t(j), (a, n) => ({
              name: a,
              fn: be((C) => [
                ne(c.$slots, a, Ke(et({ ...C })))
              ])
            }))
          ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
        ]),
        c.$slots["right-sidebar"] ? (W(), G("div", Wl, [
          ne(c.$slots, "right-sidebar", Ke(et(I.value)))
        ])) : ae("", !0)
      ], 14, Il),
      c.$slots["action-extra"] ? (W(), G("div", Ll, [
        c.$slots["action-extra"] ? ne(c.$slots, "action-extra", {
          key: 0,
          selectCurrentDate: Ae
        }) : ae("", !0)
      ])) : ae("", !0),
      !t(r).autoApply || t(O).keepActionRow ? (W(), Se(Fr, {
        key: 3,
        "menu-mount": $.value,
        "calendar-width": k.value,
        onClosePicker: d[3] || (d[3] = (a) => c.$emit("close-picker")),
        onSelectDate: d[4] || (d[4] = (a) => c.$emit("select-date")),
        onSelectNow: Ae
      }, Fe({ _: 2 }, [
        Re(t(X), (a, n) => ({
          name: a,
          fn: be((C) => [
            ne(c.$slots, a, Ke(et(C)))
          ])
        }))
      ]), 1032, ["menu-mount", "calendar-width"])) : ae("", !0)
    ], 42, Ol));
  }
}), jl = ["data-dp-mobile"], Kl = /* @__PURE__ */ Ve({
  __name: "VueDatePicker",
  setup(e, { expose: M }) {
    const {
      rootEmit: p,
      setState: o,
      inputValue: i,
      modelValue: u,
      rootProps: r,
      defaults: { inline: s, config: v, textInput: O, range: A, multiDates: Y, teleport: x, floatingConfig: l }
    } = Me(), { validateDate: w, isValidTime: g } = Ue(), { menuTransition: _, showTransition: b } = Vt(), { isMobile: E } = Zt(), { findNextFocusableElement: T, getNumVal: m } = Ie(), k = mt(), $ = ie(!1), S = ie(s.value.enabled || r.centered), R = ya(r, "modelValue"), h = ya(r, "timezone"), D = Ce("dp-menu-wrap"), V = Ce("dp-menu"), F = Ce("input-cmp"), Q = Ce("picker-wrapper"), U = Ce("menu-arrow"), re = ie(!1), ee = ie(!1), I = ie(!1), X = ie(!0), j = (se) => (l.value.arrow && se.push(
      mn({ element: l.value.arrow === !0 ? U : l.value.arrow })
    ), l.value.flip && se.push(pn(typeof l.value.flip == "object" ? l.value.flip : {})), l.value.shift && se.push(hn(typeof l.value.shift == "object" ? l.value.shift : {})), se), { floatingStyles: oe, middlewareData: K, placement: te, y: de } = dn(
      F,
      D,
      {
        strategy: l.value.strategy,
        placement: l.value.placement,
        middleware: j([fn(l.value.offset)]),
        whileElementsMounted: vn
      }
    );
    Ee(() => {
      le(r.modelValue), je().then(() => {
        s.value.enabled || globalThis.addEventListener("resize", Pe);
      }), s.value.enabled && ($.value = !0), globalThis.addEventListener("keyup", xe), globalThis.addEventListener("keydown", c);
    }), kt(() => {
      s.value.enabled || globalThis.removeEventListener("resize", Pe), globalThis.removeEventListener("keyup", xe), globalThis.removeEventListener("keydown", c);
    });
    const Z = Fa(k, r.presetDates), ce = lt(k, at.Input);
    tt(
      [R, h],
      () => {
        le(R.value);
      },
      { deep: !0 }
    ), tt([te, de], () => {
      !s.value.enabled && !r.centered && X.value && (S.value = !1, je().then(() => {
        X.value = !1, S.value = !0;
      }));
    });
    const { parseExternalModelValue: le, emitModelValue: we, formatInputValue: ve, checkBeforeEmit: Ae } = En(), J = H(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: s.value.enabled,
        "dp--flex-display-collapsed": I.value,
        dp__flex_display_with_input: s.value.input
      })
    ), B = H(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), y = H(() => s.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker)), L = () => F.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, fe = () => {
      $.value && v.value.closeOnScroll && ge();
    }, Pe = () => {
      const se = V.value?.$el.getBoundingClientRect().width ?? 0;
      I.value = document.body.offsetWidth <= se;
    }, xe = (se) => {
      se.key === "Tab" && !s.value.enabled && !r.teleport && v.value.tabOutClosesMenu && (Q.value.contains(document.activeElement) || ge()), ee.value = se.shiftKey;
    }, c = (se) => {
      ee.value = se.shiftKey;
    }, d = () => {
      !r.disabled && !r.readonly && (X.value = !0, $.value = !0, $.value && p("open"), $.value || pe(), le(r.modelValue));
    }, a = () => {
      i.value = "", pe(), V.value?.onValueCleared(), F.value?.setParsedDate(null), p("update:model-value", null), p("cleared"), v.value.closeOnClearValue && ge();
    }, n = () => {
      const se = u.value;
      return !se || !Array.isArray(se) && w(se) ? !0 : Array.isArray(se) ? Y.value.enabled || se.length === 2 && w(se[0]) && w(se[1]) ? !0 : A.value.partialRange && !r.timePicker ? w(se[0]) : !1 : !1;
    }, C = () => {
      Ae() && n() ? (we(), ge()) : p("invalid-select");
    }, f = (se) => {
      N(), we(), v.value.closeOnAutoApply && !se && ge();
    }, N = () => {
      F.value && O.value.enabled && F.value.setParsedDate(u.value);
    }, q = (se = !1) => {
      r.autoApply && g(u.value) && n() && (A.value.enabled && Array.isArray(u.value) ? (A.value.partialRange || u.value.length === 2) && f(se) : f(se));
    }, pe = () => {
      O.value.enabled || (u.value = null);
    }, ge = (se = !1) => {
      X.value = !0, se && u.value && v.value.setDateOnMenuClose && C(), s.value.enabled || ($.value && ($.value = !1, o("menuFocused", !1), o("shiftKeyInMenu", !1), p("closed"), i.value && le(R.value)), pe(), p("blur"));
    }, Qe = (se, Le, Je = !1) => {
      if (!se) {
        u.value = null;
        return;
      }
      const St = Array.isArray(se) ? se.every((jt) => w(jt)) : w(se), ht = g(se);
      St && ht ? (o("isTextInputDate", !0), u.value = se, Le ? (re.value = Je, C(), p("text-submit")) : r.autoApply && q(!0), je().then(() => {
        o("isTextInputDate", !1);
      })) : p("invalid-date", se);
    }, Tt = () => {
      r.autoApply && g(u.value) && we(), N();
    }, Wt = () => $.value ? ge() : d(), ra = (se) => {
      u.value = se;
    }, Lt = () => {
      O.value.enabled && (o("isInputFocused", !0), ve()), p("focus");
    }, la = () => {
      O.value.enabled && (o("isInputFocused", !1), le(r.modelValue), re.value && T(Q.value, ee.value)?.focus()), p("blur");
    }, oa = (se, Le) => {
      V.value && V.value.updateMonthYear(Le ?? 0, {
        month: m(se.month),
        year: m(se.year)
      });
    }, sa = (se) => {
      le(se ?? r.modelValue);
    }, $t = (se, Le) => {
      V.value?.switchView(se, Le);
    }, ua = (se, Le) => {
      if ($.value)
        return v.value.onClickOutside ? v.value.onClickOutside(se, Le) : ge(!0);
    }, ia = (se = 0) => {
      V.value?.handleFlow(se);
    }, Ht = () => D;
    return cn(D, (se) => ua(n, se), {
      ignore: [F]
    }), M({
      closeMenu: ge,
      selectDate: C,
      clearValue: a,
      openMenu: d,
      onScroll: fe,
      formatInputValue: ve,
      // exposed for testing purposes
      updateInternalModelValue: ra,
      // modify internal modelValue
      setMonthYear: oa,
      parseModel: sa,
      switchView: $t,
      toggleMenu: Wt,
      handleFlow: ia,
      getDpWrapMenuRef: Ht,
      dpMenuRef: () => V,
      dpWrapMenuRef: () => D,
      inputRef: () => F
    }), (se, Le) => (W(), G("div", {
      ref: "picker-wrapper",
      class: he(J.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": t(E)
    }, [
      Be(Yr, {
        ref: "input-cmp",
        "is-menu-open": $.value,
        onClear: a,
        onOpen: d,
        onSetInputDate: Qe,
        onSetEmptyDate: t(we),
        onSelectDate: C,
        onToggle: Wt,
        onClose: ge,
        onFocus: Lt,
        onBlur: la,
        onRealBlur: Le[0] || (Le[0] = (Je) => t(o)("isInputFocused", !1))
      }, Fe({ _: 2 }, [
        Re(t(ce), (Je, St) => ({
          name: Je,
          fn: be((ht) => [
            ne(se.$slots, Je, Ke(et(ht)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      Be(sn, {
        to: t(x),
        disabled: !t(x)
      }, {
        default: be(() => [
          ye("div", {
            ref: "dp-menu-wrap",
            class: he({
              "dp--menu-wrapper": !t(s).enabled,
              dp__outer_menu_wrap: !0,
              "dp--centered": t(r).centered
            }),
            style: ze(!t(s).enabled && !t(r).centered ? t(oe) : void 0)
          }, [
            Be(At, {
              name: t(_)(t(te).startsWith("top")),
              css: t(b) && !t(s).enabled && !t(r).centered && S.value
            }, {
              default: be(() => [
                $.value && S.value ? (W(), Se(Hl, {
                  key: 0,
                  ref: "dp-menu",
                  class: he({ [B.value]: !0 }),
                  "no-overlay-focus": y.value,
                  collapse: I.value,
                  "get-input-rect": L,
                  onClosePicker: ge,
                  onSelectDate: C,
                  onAutoApply: q,
                  onTimeUpdate: Tt,
                  onMenuBlur: Le[1] || (Le[1] = (Je) => t(p)("blur"))
                }, Fe({ _: 2 }, [
                  Re(t(Z), (Je, St) => ({
                    name: Je,
                    fn: be((ht) => [
                      ne(se.$slots, Je, Ke(et({ ...ht })))
                    ])
                  })),
                  !t(s).enabled && !t(r).centered && t(l).arrow === !0 ? {
                    name: "arrow",
                    fn: be(() => [
                      ye("div", {
                        ref: "menu-arrow",
                        class: he({
                          dp__arrow_top: t(te) === "bottom",
                          dp__arrow_bottom: t(te) === "top"
                        }),
                        style: ze({
                          left: t(K).arrow?.x != null ? `${t(K).arrow.x}px` : "",
                          top: t(K).arrow?.y != null ? `${t(K).arrow.y}px` : ""
                        })
                      }, null, 6)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["class", "no-overlay-focus", "collapse"])) : ae("", !0)
              ]),
              _: 3
            }, 8, ["name", "css"])
          ], 6)
        ]),
        _: 3
      }, 8, ["to", "disabled"])
    ], 10, jl));
  }
}), Zl = /* @__PURE__ */ Ve({
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
  }, Pr),
  emits: ["update:model-value", "internal-model-change", "text-submit", "text-input", "open", "closed", "focus", "blur", "cleared", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "invalid-date", "tooltip-open", "tooltip-close", "am-pm-change", "range-start", "range-end", "date-click", "overlay-toggle", "invalid"],
  setup(e, { expose: M, emit: p }) {
    const o = p, i = e;
    Yn(i, o);
    const u = mt(), r = Fa(u, i.presetDates), s = Ce("date-picker");
    return M($r(s)), (v, O) => (W(), Se(Kl, { ref: "date-picker" }, Fe({ _: 2 }, [
      Re(t(r), (A, Y) => ({
        name: A,
        fn: be((x) => [
          ne(v.$slots, A, Ke(et(x)))
        ])
      }))
    ]), 1536));
  }
});
export {
  ao as TZDate,
  Zl as VueDatePicker,
  Ea as WeekStart
};
