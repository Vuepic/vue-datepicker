import { h as Ye, ref as ie, reactive as Gt, computed as j, provide as tn, readonly as an, inject as nn, watch as tt, onMounted as Ee, onUnmounted as kt, nextTick as je, defineComponent as Ve, useTemplateRef as xe, createElementBlock as J, openBlock as W, renderSlot as ae, createCommentVNode as ee, unref as t, createElementVNode as ye, normalizeClass as he, createBlock as Se, withModifiers as _t, createVNode as Be, normalizeProps as Ke, mergeProps as nt, Fragment as Te, normalizeStyle as ze, createTextVNode as ut, toDisplayString as Ne, onBeforeUpdate as rn, withDirectives as Ut, renderList as Re, vShow as Qt, withCtx as be, withKeys as ln, Transition as At, createSlots as Fe, useSlots as mt, resolveDynamicComponent as pa, guardReactiveProps as et, mergeDefaults as Pa, toValue as on, toRef as ya, Teleport as sn } from "vue";
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
const Ia = Symbol("ContextKey"), Yn = (e, A) => {
  const { setTimeModelValue: f } = Ie(), o = Tr(e), c = ie(null), s = Gt({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1,
    arrowNavigationLevel: 0
  }), r = o.getDate(/* @__PURE__ */ new Date()), u = ie(""), v = ie([{ month: _e(r), year: me(r) }]), Y = Gt({ hours: 0, minutes: 0, seconds: 0 });
  f(Y, null, r, o.range.value.enabled);
  const P = j({
    get: () => c.value,
    set: (h) => {
      c.value = h;
    }
  }), B = j(
    () => (h) => v.value[h] ? v.value[h].month : 0
  ), O = j(
    () => (h) => v.value[h] ? v.value[h].year : 0
  ), l = (h, _) => {
    s[h] = _;
  }, w = () => {
    f(Y, P.value, r, o.range.value.enabled);
  };
  tn(Ia, {
    rootProps: e,
    defaults: o,
    modelValue: P,
    state: an(s),
    rootEmit: A,
    calendars: v,
    month: B,
    year: O,
    time: Y,
    today: r,
    inputValue: u,
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
  const { rootProps: e, state: A } = Me(), f = j(() => A.arrowNavigationLevel), o = ie(-1), c = ie(-1);
  tt(f, (E, k) => {
    b(E === 0 && k > 0);
  });
  const s = ie([]), r = ie(/* @__PURE__ */ new Map()), u = () => {
    const E = Array.from(
      document.querySelectorAll(`[data-dp-action-element="${f.value}"]`)
    ), k = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
    for (const M of E) {
      const R = M.getBoundingClientRect(), $ = R.top, S = R.left;
      k.has($) || k.set($, []), k.get($).push(M), g.set(M, { row: $, col: S });
    }
    s.value = Array.from(k.entries()).sort((M, R) => M[0] - R[0]).map(([M, R]) => v(R, g)), r.value = g;
  }, v = (E, k) => E.sort((g, M) => {
    const R = k.get(g), $ = k.get(M);
    return R.col - $.col;
  }), Y = (E, k) => {
    f.value === 0 && (o.value = E, c.value = k);
  }, P = (E) => {
    if (![$e.arrowUp, $e.arrowDown, $e.arrowLeft, $e.arrowRight].includes(E.key))
      return;
    u(), E.preventDefault();
    const k = document.activeElement;
    if (!k?.hasAttribute("data-dp-action-element"))
      return;
    let g = -1, M = -1;
    for (let R = 0; R < s.value.length; R++) {
      const $ = s.value[R].indexOf(k);
      if ($ !== -1) {
        g = R, M = $;
        break;
      }
    }
    if (g !== -1)
      switch (E.key) {
        case $e.arrowLeft:
          return B(g, M);
        case $e.arrowRight:
          return O(g, M);
        case $e.arrowUp:
          return l(g, M);
        case $e.arrowDown:
          return w(g, M);
        default:
          return;
      }
  }, B = (E, k) => {
    if (k > 0) {
      const g = s.value[E][k - 1];
      Y(E, k - 1), g && g.focus();
    }
  }, O = (E, k) => {
    if (k < s.value[E].length - 1) {
      const g = s.value[E][k + 1];
      Y(E, k + 1), g && g.focus();
    }
  }, l = (E, k) => {
    if (E > 0) {
      const g = s.value[E - 1], M = Math.min(k, g.length - 1), R = g[M];
      Y(E - 1, M), R && R.focus();
    }
  }, w = (E, k) => {
    if (E < s.value.length - 1) {
      const g = s.value[E + 1], M = Math.min(k, g.length - 1), R = g[M];
      Y(E + 1, M), R && R.focus();
    }
  }, h = () => {
    je().then(() => {
      u();
      const E = s.value[o.value]?.[c.value];
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
      return h();
    const k = document.querySelector(`[data-dp-element-active="${f.value}"]`);
    if (k && !E)
      _(k);
    else {
      const g = document.querySelector(`[data-dp-action-element="${f.value}"]`);
      g && _(g);
    }
  };
  Ee(() => {
    e.arrowNavigation && (b(!1), document.addEventListener("keydown", P));
  }), kt(() => {
    e.arrowNavigation && document.removeEventListener("keydown", P);
  });
}, En = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: A, isValidDate: f } = Ue(), { convertType: o, errorMapper: c } = Ie(), {
    getDate: s,
    rootEmit: r,
    state: u,
    rootProps: v,
    inputValue: Y,
    defaults: { textInput: P, range: B, multiDates: O, timeConfig: l, formats: w },
    modelValue: h,
    updateTime: _
  } = Me(), { setTime: b, getWeekFromDate: E } = We(), { formatSelectedDate: k, formatForTextInput: g } = pt();
  tt(
    h,
    (y, H) => {
      r("internal-model-change", h.value), JSON.stringify(H ?? {}) !== JSON.stringify(y ?? {}) && _();
    },
    { deep: !0 }
  ), tt(B, (y, H) => {
    y.enabled !== H.enabled && (h.value = null);
  }), tt(
    () => w.value.input,
    () => {
      Z();
    }
  );
  const M = (y) => y ? v.modelType ? G(y) : {
    hours: ot(y),
    minutes: it(y),
    seconds: l.value.enableSeconds ? ft(y) : 0
  } : null, R = (y) => v.modelType ? G(y) : { month: _e(y), year: me(y) }, $ = (y) => Array.isArray(y) ? O.value.enabled ? y.map((H) => S(H, Ze(s(), H))) : A(
    () => [
      Ze(s(), y[0]),
      y[1] ? Ze(s(), y[1]) : e(B.value.partialRange)
    ],
    B.value.enabled
  ) : Ze(s(), +y), S = (y, H) => (typeof y == "string" || typeof y == "number") && v.modelType ? de(y) : H, p = (y) => Array.isArray(y) ? [
    S(y[0], b(y[0])),
    S(y[1], b(y[1]))
  ] : S(y, b(y)), D = (y) => {
    const H = De(s(), { date: 1 });
    return Array.isArray(y) ? O.value.enabled ? y.map(
      (fe) => S(fe, De(H, { month: +fe.month, year: +fe.year }))
    ) : A(
      () => [
        S(y[0], De(H, { month: +y[0].month, year: +y[0].year })),
        S(
          y[1],
          y[1] ? De(H, { month: +y[1].month, year: +y[1].year }) : e(B.value.partialRange)
        )
      ],
      B.value.enabled
    ) : S(y, De(H, { month: +y.month, year: +y.year }));
  }, V = (y) => {
    if (Array.isArray(y))
      return y.map((H) => de(H));
    throw new Error(c.dateArr("multi-dates"));
  }, F = (y) => {
    if (Array.isArray(y) && B.value.enabled) {
      const H = y[0], fe = y[1];
      return [
        s(Array.isArray(H) ? H[0] : null),
        Array.isArray(fe) && fe.length ? s(fe[0]) : null
      ];
    }
    return s(y[0]);
  }, L = (y) => v.modelAuto ? Array.isArray(y) ? [de(y[0]), de(y[1])] : v.autoApply ? [de(y)] : [de(y), null] : Array.isArray(y) ? A(
    () => y[1] ? [
      de(y[0]),
      y[1] ? de(y[1]) : e(B.value.partialRange)
    ] : [de(y[0])],
    B.value.enabled
  ) : de(y), ne = () => {
    Array.isArray(h.value) && B.value.enabled && h.value.length === 1 && h.value.push(e(B.value.partialRange));
  }, re = () => {
    const y = h.value;
    return [
      G(y[0]),
      y[1] ? G(y[1]) : e(B.value.partialRange)
    ];
  }, X = () => Array.isArray(h.value) ? h.value[1] ? re() : G(o(h.value[0])) : [], x = () => (h.value || []).map((y) => G(y)), te = (y = !1) => (y || ne(), v.modelAuto ? X() : O.value.enabled ? x() : Array.isArray(h.value) ? A(() => re(), B.value.enabled) : G(o(h.value))), q = (y) => !y || Array.isArray(y) && !y.length ? null : v.timePicker ? p(o(y)) : v.monthPicker ? D(o(y)) : v.yearPicker ? $(o(y)) : O.value.enabled ? V(o(y)) : v.weekPicker ? F(o(y)) : L(o(y)), oe = (y) => {
    if (u.isTextInputDate) return;
    const H = q(y);
    f(o(H)) ? (h.value = o(H), Z()) : (h.value = null, Y.value = "");
  }, K = () => h.value ? O.value.enabled ? h.value.map((y) => k(y)).join("; ") : P.value.enabled ? g() : k(h.value) : "", Z = () => {
    Y.value = K();
  }, de = (y) => v.modelType ? Bn.includes(v.modelType) ? s(y) : v.modelType === "format" && typeof w.value.input == "string" ? ma(y, w.value.input, s(), { locale: v.locale }) : ma(y, v.modelType, s(), { locale: v.locale }) : s(y), G = (y) => y ? v.modelType ? v.modelType === "timestamp" ? +y : v.modelType === "iso" ? y.toISOString() : v.modelType === "format" && typeof w.value.input == "string" ? k(y) : k(y, v.modelType) : y : null, ce = (y) => {
    r("update:model-value", y);
  }, le = (y) => Array.isArray(h.value) ? O.value.enabled ? h.value.map((H) => y(H)) : [y(h.value[0]), h.value[1] ? y(h.value[1]) : null] : y(o(h.value)), we = () => {
    if (Array.isArray(h.value)) {
      const y = E(h.value[0], v.weekStart), H = h.value[1] ? E(h.value[1], v.weekStart) : [];
      return [y.map((fe) => s(fe)), H.map((fe) => s(fe))];
    }
    return E(h.value, v.weekStart).map((y) => s(y));
  }, ve = (y) => ce(o(le(y))), Ae = () => r("update:model-value", we());
  return {
    checkBeforeEmit: () => h.value ? B.value.enabled ? B.value.partialRange ? h.value.length >= 1 : h.value.length === 2 : !!h.value : !1,
    parseExternalModelValue: oe,
    formatInputValue: Z,
    emitModelValue: () => (Z(), v.monthPicker ? ve(R) : v.timePicker ? ve(M) : v.yearPicker ? ve(me) : v.weekPicker ? Ae() : ce(te()))
  };
}, Vt = () => {
  const {
    defaults: { transitions: e }
  } = Me(), A = j(() => (o) => e.value ? o ? e.value.open : e.value.close : ""), f = j(() => (o) => e.value ? o ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: A, showTransition: !!e.value, menuTransition: f };
}, Ft = (e) => {
  const {
    today: A,
    time: f,
    modelValue: o,
    defaults: { range: c }
  } = Me(), { setTimeModelValue: s } = Ie();
  tt(
    c,
    (r, u) => {
      r.enabled !== u.enabled && s(f, o.value, A, c.value.enabled);
    },
    { deep: !0 }
  ), tt(
    o,
    (r, u) => {
      e && JSON.stringify(r ?? {}) !== JSON.stringify(u ?? {}) && e();
    },
    { deep: !0 }
  );
}, Ue = () => {
  const {
    defaults: { safeDates: e, range: A, multiDates: f, filters: o, timeConfig: c },
    rootProps: s,
    getDate: r
  } = Me(), { getMapKeyType: u, getMapDate: v, errorMapper: Y, convertType: P } = Ie(), { isDateBefore: B, isDateAfter: O, isDateEqual: l, resetDate: w, getDaysInBetween: h, setTimeValue: _, getTimeObj: b, setTime: E } = We(), k = (i) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(r(i)) : !!v(i, e.value.disabledDates) : !1, g = (i) => e.value.maxDate ? s.yearPicker ? me(i) > me(e.value.maxDate) : O(i, e.value.maxDate) : !1, M = (i) => e.value.minDate ? s.yearPicker ? me(i) < me(e.value.minDate) : B(i, e.value.minDate) : !1, R = (i) => {
    if (!i) return !1;
    const d = g(i), a = M(i), n = k(i), m = o.value.months.map((Qe) => +Qe).includes(_e(i)), N = o.value.weekDays?.length ? o.value.weekDays.some((Qe) => +Qe === yn(i)) : !1, U = V(i), pe = me(i), ge = pe < +s.yearRange[0] || pe > +s.yearRange[1];
    return !(d || a || n || m || ge || N || U);
  }, $ = (i, d) => B(...Ae(e.value.minDate, i, d)) || l(...Ae(e.value.minDate, i, d)), S = (i, d) => O(...Ae(e.value.maxDate, i, d)) || l(...Ae(e.value.maxDate, i, d)), p = (i, d, a) => {
    let n = !1;
    return e.value.maxDate && a && S(i, d) && (n = !0), e.value.minDate && !a && $(i, d) && (n = !0), n;
  }, D = (i, d, a, n) => {
    let C = !1;
    return n && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? C = p(i, d, a) : (e.value.minDate && $(i, d) || e.value.maxDate && S(i, d)) && (C = !0) : C = !0, C;
  }, V = (i) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !v(
    i,
    e.value.allowedDates,
    u(s.monthPicker, s.yearPicker)
  ) : !1, F = (i) => !R(i), L = (i) => A.value.noDisabledRange ? !ha({ start: i[0], end: i[1] }).some((a) => F(a)) : !0, ne = (i) => {
    if (i) {
      const d = me(i);
      return d >= +s.yearRange[0] && d <= s.yearRange[1];
    }
    return !0;
  }, re = (i, d) => !!(Array.isArray(i) && i[d] && (A.value.maxRange || A.value.minRange) && ne(i[d])), X = (i, d, a = 0) => {
    if (re(d, a) && ne(i)) {
      const n = gn(i, d[a]), C = h(d[a], i), m = C.length === 1 ? 0 : C.filter((U) => F(U)).length, N = Math.abs(n) - (A.value.minMaxRawRange ? 0 : m);
      if (A.value.minRange && A.value.maxRange)
        return N >= +A.value.minRange && N <= +A.value.maxRange;
      if (A.value.minRange) return N >= +A.value.minRange;
      if (A.value.maxRange) return N <= +A.value.maxRange;
    }
    return !0;
  }, x = () => !c.value.enableTimePicker || s.monthPicker || s.yearPicker || c.value.ignoreTimeValidation, te = (i) => Array.isArray(i) ? [i[0] ? _(i[0]) : null, i[1] ? _(i[1]) : null] : _(i), q = (i, d, a) => d ? i.find(
    (n) => +n.hours === ot(d) && n.minutes === "*" ? !0 : +n.minutes === it(d) && +n.hours === ot(d)
  ) && a : !1, oe = (i, d, a) => {
    const [n, C] = i, [m, N] = d;
    return !q(n, m, a) && !q(C, N, a) && a;
  }, K = (i, d) => {
    const a = Array.isArray(d) ? d : [d];
    return Array.isArray(s.disabledTimes) ? Array.isArray(s.disabledTimes[0]) ? oe(s.disabledTimes, a, i) : !a.some((n) => q(s.disabledTimes, n, i)) : i;
  }, Z = (i, d) => {
    const a = Array.isArray(d) ? [b(d[0]), d[1] ? b(d[1]) : void 0] : b(d), n = !s.disabledTimes(a);
    return i && n;
  }, de = (i, d) => s.disabledTimes ? Array.isArray(s.disabledTimes) ? K(d, i) : Z(d, i) : d, G = (i) => {
    let d = !0;
    if (!i || x()) return !0;
    const a = !e.value.minDate && !e.value.maxDate ? te(i) : i;
    return (s.maxTime || e.value.maxDate) && (d = I(
      s.maxTime,
      e.value.maxDate,
      "max",
      P(a),
      d
    )), (s.minTime || e.value.minDate) && (d = I(
      s.minTime,
      e.value.minDate,
      "min",
      P(a),
      d
    )), de(i, d);
  }, ce = (i) => {
    if (!s.monthPicker) return !0;
    let d = !0;
    const a = r(w(i));
    if (e.value.minDate && e.value.maxDate) {
      const n = r(w(e.value.minDate)), C = r(w(e.value.maxDate));
      return O(a, n) && B(a, C) || l(a, n) || l(a, C);
    }
    if (e.value.minDate) {
      const n = r(w(e.value.minDate));
      d = O(a, n) || l(a, n);
    }
    if (e.value.maxDate) {
      const n = r(w(e.value.maxDate));
      d = B(a, n) || l(a, n);
    }
    return d;
  }, le = j(() => (i) => !c.value.enableTimePicker || c.value.ignoreTimeValidation ? !0 : G(i)), we = j(() => (i) => s.monthPicker ? Array.isArray(i) && (A.value.enabled || f.value.enabled) ? !i.filter((a) => !ce(a)).length : ce(i) : !0), ve = (i, d, a) => {
    if (!d || a && !e.value.maxDate || !a && !e.value.minDate) return !1;
    const n = a ? yt(i, 1) : It(i, 1), C = [_e(n), me(n)];
    return a ? !S(...C) : !$(...C);
  }, Ae = (i, d, a) => [De(r(i), { date: 1 }), De(r(), { month: d, year: a, date: 1 })], Q = (i, d, a, n) => {
    if (!i) return !0;
    if (n) {
      const C = a === "max" ? st(i, d) : rt(i, d), m = { seconds: 0, milliseconds: 0 };
      return C || Dt(De(i, m), De(d, m));
    }
    return a === "max" ? i.getTime() <= d.getTime() : i.getTime() >= d.getTime();
  }, I = (i, d, a, n, C) => {
    if (Array.isArray(n)) {
      const N = y(i, n[0], d), U = y(i, n[1], d);
      return Q(n[0], N, a, !!d) && Q(n[1], U, a, !!d) && C;
    }
    const m = y(i, n, d);
    return Q(n, m, a, !!d) && C;
  }, y = (i, d, a) => i ? E(i, d) : r(a ?? d);
  return {
    isDisabled: F,
    validateDate: R,
    validateMonthYearInRange: D,
    isDateRangeAllowed: L,
    checkMinMaxRange: X,
    isValidTime: G,
    validateMonthYear: ve,
    validateMinDate: $,
    validateMaxDate: S,
    isValidDate: (i) => Array.isArray(i) ? Jt(i[0]) && (i[1] ? Jt(i[1]) : !0) : i ? Jt(i) : !1,
    checkPartialRangeValue: (i) => {
      if (i) return null;
      throw new Error(Y.prop("partial-range"));
    },
    checkRangeEnabled: (i, d) => {
      if (d) return i();
      throw new Error(Y.prop("range"));
    },
    checkMinMaxValue: (i, d, a) => {
      const n = a != null, C = d != null;
      if (!n && !C) return !1;
      const m = +a, N = +d;
      return n && C ? +i > m || +i < N : n ? +i > m : C ? +i < N : !1;
    },
    isTimeValid: le,
    isMonthValid: we
  };
}, Vn = (e) => {
  const {
    rootEmit: A,
    rootProps: f,
    defaults: { timeConfig: o, flow: c }
  } = Me(), s = ie(0), r = Gt({
    [bt.timePicker]: !o.value.enableTimePicker || f.timePicker || f.monthPicker,
    [bt.calendar]: !1,
    [bt.header]: !1
  }), u = j(() => f.monthPicker || f.timePicker), v = (l) => {
    if (c.value?.steps?.length) {
      if (!l && u.value) return O();
      r[l] = !0, Object.keys(r).filter((w) => !r[w]).length || O();
    }
  }, Y = () => {
    c.value?.steps?.length && s.value !== -1 && (s.value += 1, A("flow-step", s.value), O()), c.value?.steps?.length === s.value && je().then(() => P());
  }, P = () => {
    s.value = -1;
  }, B = (l, w, ...h) => {
    c.value?.steps[s.value] === l && e.value && e.value[w]?.(...h);
  }, O = (l = 0) => {
    l && (s.value += l), B(He.month, "toggleMonthPicker", !0), B(He.year, "toggleYearPicker", !0), B(He.calendar, "toggleTimePicker", !1, !0), B(He.time, "toggleTimePicker", !0, !0);
    const w = c.value?.steps[s.value];
    (w === He.hours || w === He.minutes || w === He.seconds) && B(w, "toggleTimePicker", !0, !0, w);
  };
  return { childMount: v, updateFlowStep: Y, resetFlow: P, handleFlow: O, flowStep: s };
};
function fa(e) {
  return (A = {}) => {
    const f = A.width ? String(A.width) : e.defaultWidth;
    return e.formats[f] || e.formats[e.defaultWidth];
  };
}
function xt(e) {
  return (A, f) => {
    const o = f?.context ? String(f.context) : "standalone";
    let c;
    if (o === "formatting" && e.formattingValues) {
      const r = e.defaultFormattingWidth || e.defaultWidth, u = f?.width ? String(f.width) : r;
      c = e.formattingValues[u] || e.formattingValues[r];
    } else {
      const r = e.defaultWidth, u = f?.width ? String(f.width) : e.defaultWidth;
      c = e.values[u] || e.values[r];
    }
    const s = e.argumentCallback ? e.argumentCallback(A) : A;
    return c[s];
  };
}
function Ot(e) {
  return (A, f = {}) => {
    const o = f.width, c = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], s = A.match(c);
    if (!s)
      return null;
    const r = s[0], u = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], v = Array.isArray(u) ? Nn(u, (B) => B.test(r)) : (
      // [TODO] -- I challenge you to fix the type
      Fn(u, (B) => B.test(r))
    );
    let Y;
    Y = e.valueCallback ? e.valueCallback(v) : v, Y = f.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      f.valueCallback(Y)
    ) : Y;
    const P = A.slice(r.length);
    return { value: Y, rest: P };
  };
}
function Fn(e, A) {
  for (const f in e)
    if (Object.prototype.hasOwnProperty.call(e, f) && A(e[f]))
      return f;
}
function Nn(e, A) {
  for (let f = 0; f < e.length; f++)
    if (A(e[f]))
      return f;
}
function Wn(e) {
  return (A, f = {}) => {
    const o = A.match(e.matchPattern);
    if (!o) return null;
    const c = o[0], s = A.match(e.parsePattern);
    if (!s) return null;
    let r = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    r = f.valueCallback ? f.valueCallback(r) : r;
    const u = A.slice(c.length);
    return { value: r, rest: u };
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
}, Hn = (e, A, f) => {
  let o;
  const c = Ln[e];
  return typeof c == "string" ? o = c : A === 1 ? o = c.one : o = c.other.replace("{{count}}", A.toString()), f?.addSuffix ? f.comparison && f.comparison > 0 ? "in " + o : o + " ago" : o;
}, jn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Kn = (e, A, f, o) => jn[e], zn = {
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
}, Xn = (e, A) => {
  const f = Number(e), o = f % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return f + "st";
      case 2:
        return f + "nd";
      case 3:
        return f + "rd";
    }
  return f + "th";
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
  const { getMapKey: A, getMapKeyType: f, getTimeObjFromCurrent: o } = Ie();
  function c(x, te) {
    let q;
    return e.timezone ? q = new xn(x ?? /* @__PURE__ */ new Date(), e.timezone) : q = x ? new Date(x) : /* @__PURE__ */ new Date(), te ? De(q, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : q;
  }
  const s = () => {
    const x = L.value.enableSeconds ? ":ss" : "", te = L.value.enableMinutes ? ":mm" : "";
    return L.value.is24 ? `HH${te}${x}` : `hh${te}${x} aa`;
  }, r = () => e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? `${R.value?.type === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : L.value.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", u = (x) => o(c(), x, L.value.enableSeconds), v = () => p.value.enabled ? L.value.startTime && Array.isArray(L.value.startTime) ? [u(L.value.startTime[0]), u(L.value.startTime[1])] : null : L.value.startTime && !Array.isArray(L.value.startTime) ? u(L.value.startTime) : null, Y = (x) => x ? typeof x == "boolean" ? x ? 2 : 0 : Math.max(+x, 2) : 0, P = (x) => {
    const te = f(e.monthPicker, e.yearPicker);
    return new Map(
      x.map((q) => {
        const oe = c(q, B.value);
        return [A(oe, te), oe];
      })
    );
  }, B = j(() => e.monthPicker || e.yearPicker || e.quarterPicker), O = j(() => {
    const x = typeof e.multiCalendars == "object" && e.multiCalendars, te = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...te, count: Y(!1) };
    const q = x ? e.multiCalendars : {}, oe = x ? q.count ?? !0 : e.multiCalendars, K = Y(oe);
    return Object.assign(te, q, { count: K });
  }), l = j(() => v()), w = j(() => ({ ...wr, ...e.ariaLabels })), h = j(() => ({ ...Dr, ...e.filters })), _ = j(() => typeof e.transitions == "boolean" ? e.transitions ? _a : !1 : { ..._a, ...e.transitions }), b = j(() => ({ ...kr, ...e.actionRow })), E = j(() => typeof e.textInput == "object" ? {
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
  }), k = j(() => {
    const x = { input: !1 };
    return typeof e.inline == "object" ? { ...x, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...x
    };
  }), g = j(() => ({ ...yr, ...e.config })), M = j(() => typeof e.highlight == "function" ? e.highlight : {
    ...br,
    ...e.highlight
  }), R = j(() => typeof e.weekNumbers == "object" ? {
    type: e.weekNumbers?.type ?? qt.type,
    hideOnOffsetDates: e.weekNumbers?.hideOnOffsetDates ?? qt.hideOnOffsetDates,
    label: e.weekNumbers.label ?? qt.label
  } : e.weekNumbers ? qt : void 0), $ = j(() => typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
    enabled: !!e.multiDates,
    limit: e.multiDates?.limit ? +e.multiDates.limit : null,
    dragSelect: e.multiDates?.dragSelect ?? !0
  }), S = j(() => ({
    minDate: e.minDate ? c(e.minDate) : null,
    maxDate: e.maxDate ? c(e.maxDate) : null,
    disabledDates: Array.isArray(e.disabledDates) ? P(e.disabledDates) : e.disabledDates,
    allowedDates: Array.isArray(e.allowedDates) ? P(e.allowedDates) : null,
    highlight: typeof M.value == "object" && Array.isArray(M.value.dates) ? P(M.value.dates) : M.value,
    markers: e.markers?.length ? new Map(
      e.markers.map((x) => {
        const te = c(x.date);
        return [A(te, Mt.DATE), x];
      })
    ) : null
  })), p = j(() => typeof e.range == "object" ? { enabled: !0, ...Da, ...e.range } : {
    enabled: e.range,
    ...Da
  }), D = j(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((te) => {
        const q = te, oe = e.ui[q];
        if (q === "dayClass") return [q, e.ui[q]];
        const K = typeof e.ui[q] == "string" ? { [oe]: !0 } : Object.fromEntries(oe.map((Z) => [Z, !0]));
        return [te, K];
      })
    )
  })), V = j(() => ({
    ...Mr,
    ...e.formats,
    input: e.formats?.input ?? r(),
    preview: e.formats?.preview ?? r()
  })), F = j(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), L = j(() => ({ ..._r, ...e.timeConfig })), ne = j(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), re = j(() => {
    const x = E.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Aa, inputmode: x, ...e.inputAttrs } : { ...Aa, inputmode: x };
  }), X = j(() => ({
    offset: e.floating?.offset ?? 10,
    arrow: e.floating?.arrow ?? !0,
    strategy: e.floating?.strategy ?? void 0,
    placement: e.floating?.placement ?? void 0,
    flip: e.floating?.flip ?? !0,
    shift: e.floating?.shift ?? !0
  }));
  return {
    transitions: _,
    multiCalendars: O,
    startTime: l,
    ariaLabels: w,
    filters: h,
    actionRow: b,
    textInput: E,
    inline: k,
    config: g,
    highlight: M,
    weekNumbers: R,
    range: p,
    safeDates: S,
    multiDates: $,
    ui: D,
    formats: V,
    teleport: F,
    timeConfig: L,
    flow: ne,
    inputAttrs: re,
    floatingConfig: X,
    getDate: c
  };
}, Ie = () => {
  const e = (g, M) => qe(g, M ?? Mt.DATE), A = (g, M) => g ? Mt.MONTH_AND_YEAR : M ? Mt.YEAR : Mt.DATE, f = (g, M, R) => M.get(e(g, R)), o = (g) => g, c = (g) => g === 0 ? g : !g || Number.isNaN(+g) ? null : +g, s = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), r = (g, M) => {
    let R = [...document.querySelectorAll(s())];
    R = R.filter((S) => !g.contains(S) || "datepicker-instance" in S.dataset);
    const $ = R.indexOf(g);
    if ($ >= 0 && (M ? $ - 1 >= 0 : $ + 1 <= R.length))
      return R[$ + (M ? -1 : 1)];
  }, u = (g) => String(g).padStart(2, "0"), v = (g, M) => g?.querySelector(`[data-dp-element="${M}"]`), Y = (g, M, R = !1) => {
    g && M.allowStopPropagation && (R && g.stopImmediatePropagation(), g.stopPropagation());
  }, P = (g, M, R = !1, $) => {
    if (g.key === $e.enter || g.key === $e.space)
      return R && g.preventDefault(), M();
    if ($) return $(g);
  }, B = (g, M) => {
    M.allowStopPropagation && g.stopPropagation(), M.allowPreventDefault && g.preventDefault();
  }, O = (g) => {
    if (g)
      return [...g.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, l = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, w = (g) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][g], h = (g) => {
    const M = [], R = ($) => $.filter((S) => !!S);
    for (let $ = 0; $ < g.length; $ += 3) {
      const S = [g[$], g[$ + 1], g[$ + 2]];
      M.push(R(S));
    }
    return M;
  }, _ = {
    prop: (g) => `"${g}" prop must be enabled!`,
    dateArr: (g) => `You need to use array as "model-value" binding in order to support "${g}"`
  }, b = (g, M, R, $, S) => {
    const p = {
      hours: ot,
      minutes: it,
      seconds: ft
    };
    if (!M) return $ ? [p[g](R), p[g](R)] : p[g](R);
    if (Array.isArray(M) && $) {
      const D = M[0] ?? R, V = M[1];
      return [p[g](D), V ? p[g](V) : S[g][1] ?? p[g](R)];
    }
    return Array.isArray(M) && !$ ? p[g](M[M.length - 1] ?? R) : p[g](M);
  };
  return {
    getMapKey: e,
    getMapKeyType: A,
    getMapDate: f,
    convertType: o,
    getNumVal: c,
    findNextFocusableElement: r,
    padZero: u,
    getElWithin: v,
    checkStopPropagation: Y,
    checkKeyDown: P,
    handleEventPropagation: B,
    findFocusableEl: O,
    isTouchDevice: l,
    hoursToAmPmHours: w,
    getGroupedList: h,
    setTimeModelValue: (g, M, R, $) => {
      g.hours = b("hours", M, R, $, g), g.minutes = b("minutes", M, R, $, g), g.seconds = b("seconds", M, R, $, g);
    },
    getTimeObjFromCurrent: (g, M, R) => {
      const $ = {
        hours: ot(g),
        minutes: it(g),
        seconds: R ? ft(g) : 0
      };
      return Object.assign($, M);
    },
    errorMapper: _
  };
}, We = () => {
  const { getDate: e } = Me(), { getMapDate: A, getGroupedList: f } = Ie(), o = (p, D) => {
    if (!p) return e();
    const V = e(p), F = De(V, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return D ? kn(F) : F;
  }, c = (p, D) => {
    const V = e(D);
    return De(V, {
      hours: +(p.hours ?? ot(V)),
      minutes: +(p.minutes ?? it(V)),
      seconds: +(p.seconds ?? ft(V)),
      milliseconds: 0
    });
  }, s = (p, D) => {
    const V = Xt(p, { weekStartsOn: +D }), F = ga(p, { weekStartsOn: +D });
    return [V, F];
  }, r = (p, D) => !p || !D ? !1 : st(o(p), o(D)), u = (p, D) => !p || !D ? !1 : Dt(o(p), o(D)), v = (p, D) => !p || !D ? !1 : rt(o(p), o(D)), Y = (p, D, V) => p?.[0] && p?.[1] ? v(V, p[0]) && r(V, p[1]) : p?.[0] && D ? v(V, p[0]) && r(V, D) || r(V, p[0]) && v(V, D) : !1, P = (p, D) => {
    const V = v(p, D) ? D : p, F = v(D, p) ? D : p;
    return ha({ start: V, end: F });
  }, B = (p) => `dp-${qe(p, "yyyy-MM-dd")}`, O = (p) => o(De(e(p), { date: 1 })), l = (p, D) => {
    if (D) {
      const V = me(e(D));
      if (V > p) return 12;
      if (V === p) return _e(e(D));
    }
  }, w = (p, D) => {
    if (D) {
      const V = me(e(D));
      return V < p ? -1 : V === p ? _e(e(D)) : void 0;
    }
  }, h = (p) => {
    if (p) return me(e(p));
  }, _ = (p) => ({
    hours: ot(p),
    minutes: it(p),
    seconds: ft(p)
  });
  return {
    resetDateTime: o,
    groupListAndMap: (p, D) => f(p).map((V) => V.map((F) => {
      const { active: L, disabled: ne, isBetween: re, highlighted: X } = D(F);
      return {
        ...F,
        active: L,
        disabled: ne,
        className: {
          dp__overlay_cell_active: L,
          dp__overlay_cell: !L,
          dp__overlay_cell_disabled: ne,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: ne && L,
          dp__cell_in_between: re,
          "dp--highlighted": X
        }
      };
    })),
    setTime: c,
    getWeekFromDate: s,
    isDateAfter: v,
    isDateBefore: r,
    isDateBetween: Y,
    isDateEqual: u,
    getDaysInBetween: P,
    getCellId: B,
    resetDate: O,
    getMinMonth: l,
    getMaxMonth: w,
    getYearFromDate: h,
    getTimeObj: _,
    setTimeValue: (p) => De(e(), _(p)),
    sanitizeTime: (p, D, V) => D && (V || V === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((F) => F === D ? [F, V] : [F, Number.isNaN(+p[F]) ? void 0 : +p[F]])
    ) : {
      hours: Number.isNaN(+p.hours) ? void 0 : +p.hours,
      minutes: Number.isNaN(+p.minutes) ? void 0 : +p.minutes,
      seconds: Number.isNaN(+(p.seconds ?? "")) ? void 0 : +p.seconds
    },
    getBeforeAndAfterInRange: (p, D) => {
      const V = bn(o(D), p), F = dt(o(D), p);
      return { before: V, after: F };
    },
    isModelAuto: (p) => Array.isArray(p) ? !!p[0] && !!p[1] : !1,
    matchDate: (p, D) => p ? D ? D instanceof Map ? !!A(p, D) : D(e(p)) : !1 : !0,
    checkHighlightMonth: (p, D, V) => typeof p == "function" ? p({ month: D, year: V }) : p.months.some((F) => F.month === D && F.year === V),
    checkHighlightYear: (p, D) => typeof p == "function" ? p(D) : p.years.includes(D)
  };
}, Zt = () => {
  const {
    defaults: { config: e }
  } = Me(), A = ie(0);
  Ee(() => {
    f(), globalThis.addEventListener("resize", f, { passive: !0 });
  }), kt(() => {
    globalThis.removeEventListener("resize", f);
  });
  const f = () => {
    A.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: j(() => A.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, pt = () => {
  const {
    getDate: e,
    state: A,
    modelValue: f,
    rootProps: o,
    defaults: { formats: c, textInput: s }
  } = Me(), r = (_) => qe(Ze(e(), _), c.value.year, { locale: o.locale }), u = (_) => qe(wn(e(), _), c.value.month, { locale: o.locale }), v = (_) => qe(_, c.value.weekDay, { locale: o.locale }), Y = (_) => qe(_, c.value.quarter, { locale: o.locale }), P = (_, b) => [_, b].map((E) => Y(E)).join("-"), B = (_) => qe(_, c.value.day, { locale: o.locale }), O = (_, b, E) => {
    const k = E ? c.value.preview : c.value.input;
    if (!_) return "";
    if (typeof k == "function") return k(_);
    const g = b ?? k, M = { locale: o.locale };
    return Array.isArray(_) ? `${qe(_[0], g, M)}${o.modelAuto && !_[1] ? "" : s.value.rangeSeparator}${_[1] ? qe(_[1], g, M) : ""}` : qe(_, g, M);
  }, l = () => {
    const _ = (b) => qe(b, s.value.format);
    return Array.isArray(f.value) ? `${_(f.value[0])} ${s.value.rangeSeparator} ${f.value[1] ? _(f.value[1]) : ""}` : "";
  };
  return {
    formatYear: r,
    formatMonth: u,
    formatWeekDay: v,
    formatQuarter: Y,
    formatSelectedDate: O,
    formatForTextInput: () => A.isInputFocused && f.value ? Array.isArray(f.value) ? l() : qe(f.value, s.value.format) : O(f.value),
    formatPreview: (_) => O(_, void 0, !0),
    formatQuarterText: P,
    formatDay: B
  };
}, ea = () => {
  const { rootProps: e } = Me(), { formatYear: A, formatMonth: f } = pt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((r) => ({
      text: f(r),
      value: r
    })),
    getYears: () => {
      const r = [];
      for (let u = +e.yearRange[0]; u <= +e.yearRange[1]; u++)
        r.push({ value: +u, text: A(u) });
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
  updateInternalModelValue: (h) => e.value?.updateInternalModelValue(h),
  setMonthYear: (h, _) => e.value?.setMonthYear(h, _),
  parseModel: () => e.value?.parseModel(),
  switchView: (h, _) => e.value?.switchView(h, _),
  handleFlow: () => e.value?.handleFlow(),
  toggleMenu: () => e.value?.toggleMenu(),
  dpMenuRef: () => e.value?.dpMenuRef(),
  dpWrapMenuRef: () => e.value?.dpWrapMenuRef(),
  inputRef: () => e.value?.inputRef()
}), Pt = () => ({
  boolHtmlAttribute: (A) => A ? !0 : void 0
}), Sr = () => {
  const {
    getDate: e,
    rootProps: A,
    defaults: { textInput: f, startTime: o, timeConfig: c }
  } = Me(), { getTimeObjFromCurrent: s } = Ie(), r = ie(!1), u = j(
    () => Array.isArray(o.value) ? o.value[0] : o.value ?? s(e(), {}, c.value.enableSeconds)
  ), v = (l, w) => {
    const h = /[^a-zA-Z]+/g, _ = /\D+/g, b = w.split(_), E = l.split(h), k = l.match(h) || [], g = w.match(_) || [];
    let M = "";
    for (let R = 0; R < b.length && R < E.length; R++) {
      R > 0 && g[R - 1] && (M += k[R - 1] || g[R - 1]);
      const $ = b[R]?.length;
      M += E[R]?.slice(0, $);
    }
    return M;
  }, Y = (l, w, h) => {
    const _ = ma(l, v(w, l), e(), {
      locale: A.locale
    });
    return Jt(_) && Dn(_) ? h || r.value ? _ : De(_, {
      hours: +u.value.hours,
      minutes: +u.value.minutes,
      seconds: +(u.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: r,
    parseFreeInput: (l, w) => {
      if (typeof f.value.pattern == "string")
        return Y(l, f.value.pattern, w);
      if (Array.isArray(f.value.pattern)) {
        let h = null;
        for (const _ of f.value.pattern)
          if (h = Y(l, _, w), h)
            break;
        return h;
      }
      return typeof f.value.pattern == "function" ? f.value.pattern(l) : null;
    },
    applyMaxValues: (l, w) => {
      const h = {
        MM: 12,
        DD: 31,
        hh: 23,
        mm: 59,
        ss: 59
      };
      let _ = "", b = 0;
      for (let E = 0; E < w.length; E++) {
        const k = w[E], g = k.length, M = l.slice(b, b + g);
        if (!M) break;
        if (M.length < g)
          _ += M;
        else {
          let R = Number.parseInt(M, 10);
          h[k] && R > h[k] && (R = h[k]), _ += R.toString().padStart(g, "0").slice(0, g);
        }
        b += g;
      }
      return _;
    },
    createMaskedValue: (l, w) => {
      const h = /(YYYY|MM|DD|hh|mm|ss)/g, _ = [...w.matchAll(h)].map((M) => M[0]), b = w.replace(h, "|").split("|").filter(Boolean), E = _.map((M) => M.length);
      let k = "", g = 0;
      for (let M = 0; M < _.length; M++) {
        const R = E[M], $ = l.slice(g, g + R);
        if (!$) break;
        k += $, $.length === R && b[M] && (k += b[M]), g += R;
      }
      return k;
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
], lt = (e, A) => Va.filter((f) => e[f.name] && f.use.includes(A)).map((f) => f.name), Fa = (e, A) => Va.map((f) => f.name).concat(A?.filter((f) => f.slot).map((f) => f.slot) ?? []).filter((f) => !!e[f]), Rr = {
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, {
      rootEmit: s,
      inputValue: r,
      rootProps: u,
      defaults: { textInput: v, ariaLabels: Y, inline: P, config: B, range: O, multiDates: l, ui: w, inputAttrs: h }
    } = Me(), { checkMinMaxRange: _, isValidDate: b } = Ue(), { parseFreeInput: E, textPasted: k, createMaskedValue: g, applyMaxValues: M } = Sr(), { checkKeyDown: R, checkStopPropagation: $ } = Ie(), { boolHtmlAttribute: S } = Pt(), p = xe("dp-input"), D = ie(null), V = ie(!1), F = j(
      () => ({
        dp__pointer: !u.disabled && !u.readonly && !v.value.enabled,
        dp__disabled: u.disabled,
        dp__input_readonly: !v.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !h.value.clearable,
        dp__input_icon_pad: !h.value.hideInputIcon,
        dp__input_valid: typeof h.value.state == "boolean" ? h.value.state : !1,
        dp__input_invalid: typeof h.value.state == "boolean" ? !h.value.state : !1,
        dp__input_focus: V.value || c.isMenuOpen,
        dp__input_reg: !v.value.enabled,
        ...w.value.input
      })
    ), L = () => {
      o("set-input-date", null), h && u.autoApply && (o("set-empty-date"), D.value = null);
    }, ne = (Q) => {
      if (v.value.separators?.length) {
        const I = new RegExp(
          v.value.separators.map((y) => y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
        );
        return Q.split(I);
      }
      return Q.split(v.value.rangeSeparator);
    }, re = (Q) => {
      const [I, y] = ne(Q);
      if (I) {
        const H = E(I.trim(), r.value), fe = y ? E(y.trim(), r.value) : void 0;
        if (rt(H, fe)) return;
        const Pe = H && fe ? [H, fe] : [H];
        _(fe, Pe, 0) && (D.value = H ? Pe : null);
      }
    }, X = () => {
      k.value = !0;
    }, x = (Q) => {
      if (O.value.enabled)
        re(Q);
      else if (l.value.enabled) {
        const I = Q.split(";");
        D.value = I.map((y) => E(y.trim())).filter((y) => !!y);
      } else
        D.value = E(Q, r.value);
    }, te = (Q) => {
      const I = typeof Q == "string" ? Q : Q.target?.value, y = v?.value?.maskFormat;
      let H = I;
      if (typeof y == "string") {
        const fe = /(YYYY|MM|DD|hh|mm|ss)/g, Ce = [...y.matchAll(fe)].map((a) => a[0]), i = I.replace(/\D/g, ""), d = M(i, Ce);
        H = g(d, y);
      }
      H === "" ? L() : (v.value.openMenu && !c.isMenuOpen && o("open"), x(H), o("set-input-date", D.value)), k.value = !1, r.value = H, s("text-input", Q, D.value);
    }, q = (Q) => {
      v.value.enabled ? (x(Q.target.value), v.value.enterSubmit && b(D.value) && r.value !== "" ? (o("set-input-date", D.value, !0), D.value = null) : v.value.enterSubmit && r.value === "" && (D.value = null, o("clear"))) : Z(Q);
    }, oe = (Q, I) => {
      v.value.enabled && v.value.tabSubmit && !I && x(Q.target.value), v.value.tabSubmit && b(D.value) && r.value !== "" ? (o("set-input-date", D.value, !0, !0), D.value = null) : v.value.tabSubmit && r.value === "" && (D.value = null, o("clear"));
    }, K = () => {
      V.value = !0, o("focus"), je().then(() => {
        v.value.enabled && v.value.selectOnFocus && p.value?.select();
      });
    }, Z = (Q) => {
      if ($(Q, B.value, !0), v.value.enabled && v.value.openMenu && !P.value.input) {
        if (v.value.openMenu === "open" && !c.isMenuOpen) return o("open");
        if (v.value.openMenu === "toggle") return o("toggle");
      } else v.value.enabled || o("toggle");
    }, de = () => {
      o("real-blur"), V.value = !1, (!c.isMenuOpen || P.value.enabled && P.value.input) && o("blur"), (u.autoApply && v.value.enabled && D.value && !c.isMenuOpen || v.value.applyOnBlur) && (o("set-input-date", D.value), o("select-date"), D.value = null);
    }, G = (Q) => {
      $(Q, B.value, !0), o("clear");
    }, ce = () => {
      o("close");
    }, le = (Q) => {
      if (Q.key === "Tab" && oe(Q), Q.key === "Enter" && q(Q), Q.key === "Escape" && v.value.escClose && ce(), !v.value.enabled) {
        if (Q.code === "Tab") return;
        Q.preventDefault();
      }
    }, we = () => {
      p.value?.focus({ preventScroll: !0 });
    }, ve = (Q) => {
      D.value = Q;
    }, Ae = (Q) => {
      Q.key === $e.tab && oe(Q, !0);
    };
    return A({
      focusInput: we,
      setParsedDate: ve
    }), (Q, I) => (W(), J("div", { onClick: Z }, [
      !Q.$slots["dp-input"] && !t(P).enabled ? ae(Q.$slots, "trigger", { key: 0 }) : ee("", !0),
      !Q.$slots.trigger && (!t(P).enabled || t(P).input) ? (W(), J("div", Rr, [
        !Q.$slots.trigger && (!t(P).enabled || t(P).enabled && t(P).input) ? ae(Q.$slots, "dp-input", {
          key: 0,
          value: t(r),
          isMenuOpen: e.isMenuOpen,
          onInput: te,
          onEnter: q,
          onTab: oe,
          onClear: G,
          onBlur: de,
          onKeypress: le,
          onPaste: X,
          onFocus: K,
          openMenu: () => Q.$emit("open"),
          closeMenu: () => Q.$emit("close"),
          toggleMenu: () => Q.$emit("toggle")
        }, () => [
          ye("input", {
            id: t(h).id,
            ref: "dp-input",
            "data-test-id": "dp-input",
            name: t(h).name,
            class: he(F.value),
            inputmode: t(h).inputmode,
            placeholder: t(u).placeholder,
            disabled: t(S)(t(u).disabled),
            readonly: t(S)(t(u).readonly),
            required: t(S)(t(h).required),
            value: t(r),
            autocomplete: t(h).autocomplete,
            "aria-label": t(Y).input,
            "aria-disabled": t(u).disabled || void 0,
            "aria-invalid": t(h).state === !1 ? !0 : void 0,
            onInput: te,
            onBlur: de,
            onFocus: K,
            onKeypress: le,
            onKeydown: I[0] || (I[0] = (y) => le(y)),
            onPaste: X,
            onInvalid: I[1] || (I[1] = (y) => t(s)("invalid", y))
          }, null, 42, Cr)
        ]) : ee("", !0),
        ye("div", {
          onClick: I[4] || (I[4] = (y) => o("toggle"))
        }, [
          Q.$slots["input-icon"] && !t(h).hideInputIcon ? (W(), J("span", {
            key: 0,
            class: "dp__input_icon",
            onClick: I[2] || (I[2] = (y) => o("toggle"))
          }, [
            ae(Q.$slots, "input-icon")
          ])) : ee("", !0),
          !Q.$slots["input-icon"] && !t(h).hideInputIcon && !Q.$slots["dp-input"] ? (W(), Se(t(Et), {
            key: 1,
            "aria-label": t(Y)?.calendarIcon,
            class: "dp__input_icon dp__input_icons",
            onClick: I[3] || (I[3] = (y) => o("toggle"))
          }, null, 8, ["aria-label"])) : ee("", !0)
        ]),
        Q.$slots["clear-icon"] && (t(h).alwaysClearable || t(r) && t(h).clearable && !t(u).disabled && !t(u).readonly) ? (W(), J("span", xr, [
          ae(Q.$slots, "clear-icon", { clear: G })
        ])) : ee("", !0),
        !Q.$slots["clear-icon"] && (t(h).alwaysClearable || t(h).clearable && t(r) && !t(u).disabled && !t(u).readonly) ? (W(), J("button", {
          key: 2,
          "aria-label": t(Y)?.clearInput,
          class: "dp--clear-btn",
          type: "button",
          "data-test-id": "clear-input-value-btn",
          onKeydown: I[5] || (I[5] = (y) => t(R)(y, () => G(y), !0, Ae)),
          onClick: I[6] || (I[6] = _t((y) => G(y), ["prevent"]))
        }, [
          Be(t(On), { class: "dp__input_icons" })
        ], 40, Or)) : ee("", !0)
      ])) : ee("", !0)
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
  setup(e, { emit: A }) {
    const f = A, o = e, {
      rootEmit: c,
      rootProps: s,
      modelValue: r,
      defaults: { actionRow: u, multiCalendars: v, inline: Y, range: P, multiDates: B, formats: O }
    } = Me(), { isTimeValid: l, isMonthValid: w } = Ue(), { formatPreview: h } = pt(), { checkKeyDown: _, convertType: b } = Ie(), { boolHtmlAttribute: E } = Pt(), k = xe("action-buttons-container"), g = xe("action-row"), M = ie(!1), R = ie({});
    Ee(() => {
      $(), globalThis.addEventListener("resize", $);
    }), kt(() => {
      globalThis.removeEventListener("resize", $);
    });
    const $ = () => {
      M.value = !1, setTimeout(() => {
        const X = k.value?.getBoundingClientRect(), x = g.value?.getBoundingClientRect();
        X && x && (R.value.maxWidth = `${x.width - X.width - 20}px`), M.value = !0;
      }, 0);
    }, S = j(() => P.value.enabled && !P.value.partialRange && r.value ? r.value.length === 2 : !0), p = j(
      () => !l.value(r.value) || !w.value(r.value) || !S.value
    ), D = () => {
      const X = O.value.preview;
      return s.timePicker || s.monthPicker, X(b(r.value));
    }, V = () => {
      const X = r.value;
      return v.value.count > 0 ? `${h(X[0])} - ${h(X[1])}` : [h(X[0]), h(X[1])];
    }, F = j(() => !r.value || !o.menuMount ? "" : typeof O.value.preview == "string" ? Array.isArray(r.value) ? r.value.length === 2 && r.value[1] ? V() : B.value.enabled ? r.value.map((X) => `${h(X)}`) : s.modelAuto ? `${h(r.value[0])}` : `${h(r.value[0])} -` : h(r.value) : D()), L = () => B.value.enabled ? "; " : " - ", ne = j(
      () => Array.isArray(F.value) ? F.value.join(L()) : F.value
    ), re = () => {
      l.value(r.value) && w.value(r.value) && S.value ? f("select-date") : c("invalid-select");
    };
    return (X, x) => (W(), J("div", Br, [
      X.$slots["action-row"] ? ae(X.$slots, "action-row", Ke(nt({ key: 0 }, {
        modelValue: t(r),
        disabled: p.value,
        selectDate: () => X.$emit("select-date"),
        closePicker: () => X.$emit("close-picker")
      }))) : (W(), J(Te, { key: 1 }, [
        t(u).showPreview ? (W(), J("div", {
          key: 0,
          class: "dp__selection_preview",
          title: ne.value || void 0,
          style: ze(R.value)
        }, [
          X.$slots["action-preview"] && M.value ? ae(X.$slots, "action-preview", {
            key: 0,
            value: t(r),
            formatValue: ne.value
          }) : ee("", !0),
          !X.$slots["action-preview"] && M.value ? (W(), J(Te, { key: 1 }, [
            ut(Ne(ne.value), 1)
          ], 64)) : ee("", !0)
        ], 12, Ir)) : ee("", !0),
        ye("div", Er, [
          X.$slots["action-buttons"] ? ae(X.$slots, "action-buttons", {
            key: 0,
            value: t(r),
            selectDate: re,
            selectionDisabled: p.value
          }) : ee("", !0),
          X.$slots["action-buttons"] ? ee("", !0) : (W(), J(Te, { key: 1 }, [
            !t(Y).enabled && t(u).showCancel ? (W(), J("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_cancel",
              onClick: x[0] || (x[0] = (te) => X.$emit("close-picker")),
              onKeydown: x[1] || (x[1] = (te) => t(_)(te, () => X.$emit("close-picker")))
            }, Ne(t(u).cancelBtnLabel), 545)) : ee("", !0),
            t(u).showNow ? (W(), J("button", {
              key: 1,
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_cancel",
              onClick: x[2] || (x[2] = (te) => X.$emit("select-now")),
              onKeydown: x[3] || (x[3] = (te) => t(_)(te, () => X.$emit("select-now")))
            }, Ne(t(u).nowBtnLabel), 33)) : ee("", !0),
            t(u).showSelect ? (W(), J("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              "data-dp-action-element": "0",
              class: "dp__action_button dp__action_select",
              disabled: t(E)(p.value),
              "data-test-id": "select-button",
              onKeydown: x[4] || (x[4] = (te) => t(_)(te, () => re())),
              onClick: re
            }, Ne(t(u).selectBtnLabel), 41, Vr)) : ee("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), ta = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: A }
  } = Me(), f = j(() => (s) => e.hideNavigation?.includes(s)), o = j(() => (s) => A.value.count ? A.value.solo ? !0 : s === 0 : !0), c = j(() => (s) => A.value.count ? A.value.solo ? !0 : s === A.value.count - 1 : !0);
  return { hideNavigationButtons: f, showLeftIcon: o, showRightIcon: c };
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
  setup(e, { emit: A }) {
    const f = A, o = e, {
      setState: c,
      defaults: { ariaLabels: s, config: r }
    } = Me(), { hideNavigationButtons: u } = ta(), { handleEventPropagation: v, checkKeyDown: Y } = Ie(), P = xe("toggle-button"), B = xe("overlay-container"), O = xe("grid-wrap"), l = ie(!1), w = ie(null), h = ie(), _ = ie(0);
    rn(() => {
      w.value = null;
    }), Ee(async () => {
      await je(), R(), c("arrowNavigationLevel", o.level ?? 1);
    }), kt(() => {
      c("arrowNavigationLevel", (o.level ?? 1) - 1);
    });
    const b = j(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !o.useRelative,
        "dp--overlay-relative": o.useRelative
      })
    ), E = j(
      () => o.useRelative ? { height: `${o.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), k = j(() => ({
      dp__overlay_col: !0
    })), g = j(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: l.value,
        dp__button_bottom: o.isLast
      })
    ), M = j(() => ({
      dp__overlay_container: !0,
      dp__container_flex: o.items?.length <= 6,
      dp__container_block: o.items?.length > 6
    }));
    tt(
      () => o.items,
      () => R(!1),
      { deep: !0 }
    );
    const R = (L = !0) => {
      je().then(() => {
        const ne = document.querySelector(`[data-dp-element-active="${o.level ?? 1}"]`), re = vt(O), X = vt(P), x = vt(B), te = X ? X.getBoundingClientRect().height : 0;
        re && (re.getBoundingClientRect().height ? _.value = re.getBoundingClientRect().height - te : _.value = r.value.modeHeight - te), ne && x && L && (x.scrollTop = ne.offsetTop - x.offsetTop - (_.value / 2 - ne.getBoundingClientRect().height) - te);
      });
    }, $ = (L) => {
      L.disabled || f("selected", L.value);
    }, S = () => {
      f("toggle"), f("reset-flow");
    }, p = (L) => {
      r.value.escClose && (S(), v(L, r.value));
    }, D = (L) => {
      h.value = L, f("hover-value", L);
    }, V = (L) => {
      if (L.key === $e.esc) return p(L);
    }, F = (L) => {
      if (L.key === $e.enter) return S();
    };
    return (L, ne) => (W(), J("div", {
      ref: "grid-wrap",
      class: he(b.value),
      style: ze(E.value),
      role: e.useRelative ? void 0 : "dialog",
      "aria-label": e.overlayLabel,
      tabindex: e.useRelative ? void 0 : "0",
      onKeydown: V,
      onClick: ne[0] || (ne[0] = _t(() => {
      }, ["prevent"]))
    }, [
      ye("div", {
        ref: "overlay-container",
        class: he(M.value),
        style: ze({ "--dp-overlay-height": `${_.value}px` }),
        role: "grid"
      }, [
        ye("div", Wr, [
          ae(L.$slots, "header")
        ]),
        ae(L.$slots, "overlay", {}, () => [
          (W(!0), J(Te, null, Re(e.items, (re, X) => (W(), J("div", {
            key: X,
            class: he(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
            role: "row"
          }, [
            (W(!0), J(Te, null, Re(re, (x) => (W(), J("div", {
              key: x.value,
              role: "gridcell",
              class: he(k.value),
              "aria-selected": x.active || void 0,
              "aria-disabled": x.disabled || void 0,
              "data-dp-action-element": e.level ?? 1,
              "data-dp-element-active": x.active ? e.level ?? 1 : void 0,
              tabindex: "0",
              "data-test-id": x.text,
              onClick: _t((te) => $(x), ["prevent"]),
              onKeydown: (te) => t(Y)(te, () => $(x), !0),
              onMouseover: (te) => D(x.value)
            }, [
              ye("div", {
                class: he(x.className)
              }, [
                ae(L.$slots, "item", { item: x }, () => [
                  ut(Ne(x.text), 1)
                ])
              ], 2)
            ], 42, Lr))), 128))
          ], 2))), 128))
        ])
      ], 6),
      L.$slots["button-icon"] ? Ut((W(), J("button", {
        key: 0,
        ref: "toggle-button",
        type: "button",
        "aria-label": t(s)?.toggleOverlay,
        class: he(g.value),
        tabindex: "0",
        "data-dp-action-element": e.level ?? 1,
        onClick: S,
        onKeydown: F
      }, [
        ae(L.$slots, "button-icon")
      ], 42, Hr)), [
        [Qt, !t(u)(e.type)]
      ]) : ee("", !0)
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
      defaults: { multiCalendars: A }
    } = Me(), { isMobile: f } = Zt(), o = j(
      () => A.value.count > 0 ? [...new Array(A.value.count).keys()] : [0]
    );
    return (c, s) => (W(), J("div", {
      class: he({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: t(A).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": t(f)
    }, [
      ae(c.$slots, "default", {
        instances: o.value,
        wrapClass: { dp__instance_calendar: t(A).count > 0 }
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
  setup(e, { emit: A }) {
    const { checkKeyDown: f } = Ie(), o = A;
    return (c, s) => (W(), J("button", {
      ref: "arrow-btn",
      type: "button",
      "data-dp-element": e.elName,
      "data-dp-action-element": "0",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled || void 0,
      onClick: s[0] || (s[0] = (r) => o("activate")),
      onKeydown: s[1] || (s[1] = (r) => t(f)(r, () => o("activate"), !0))
    }, [
      ye("span", {
        class: he(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        ae(c.$slots, "default")
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
  setup(e, { emit: A }) {
    const f = A, o = e, { showRightIcon: c, showLeftIcon: s } = ta(), {
      rootProps: r,
      defaults: { config: u, ariaLabels: v, ui: Y }
    } = Me(), { showTransition: P, transitionName: B } = Vt(), { formatYear: O } = pt(), { boolHtmlAttribute: l } = Pt(), w = ie(!1), h = j(() => O(o.year)), _ = (k = !1, g) => {
      w.value = !w.value, f("toggle-year-picker", { flow: k, show: g });
    }, b = (k) => {
      w.value = !1, f("year-select", k);
    }, E = (k = !1) => {
      f("handle-year", k);
    };
    return (k, g) => (W(), J(Te, null, [
      ye("div", {
        class: he(["dp--year-mode-picker", { "dp--hidden-el": w.value }])
      }, [
        t(s)(e.instance) ? (W(), Se(Bt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": t(v)?.prevYear,
          disabled: t(l)(e.isDisabled(!1)),
          class: he(t(Y)?.navBtnPrev),
          onActivate: g[0] || (g[0] = (M) => E(!1))
        }, {
          default: be(() => [
            k.$slots["arrow-left"] ? ae(k.$slots, "arrow-left", { key: 0 }) : ee("", !0),
            k.$slots["arrow-left"] ? ee("", !0) : (W(), Se(t(Ca), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : ee("", !0),
        ye("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": `${e.year}-${t(v)?.openYearsOverlay}`,
          "data-test-id": `year-mode-btn-${e.instance}`,
          "data-dp-action-element": "0",
          onClick: g[1] || (g[1] = () => _(!1)),
          onKeydown: g[2] || (g[2] = ln(_t(() => _(!1), ["prevent"]), ["enter"]))
        }, [
          k.$slots.year ? ae(k.$slots, "year", {
            key: 0,
            text: h.value,
            value: e.year
          }) : ee("", !0),
          k.$slots.year ? ee("", !0) : (W(), J(Te, { key: 1 }, [
            ut(Ne(e.year), 1)
          ], 64))
        ], 40, zr),
        t(c)(e.instance) ? (W(), Se(Bt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": t(v)?.nextYear,
          disabled: t(l)(e.isDisabled(!0)),
          class: he(t(Y)?.navBtnNext),
          onActivate: g[3] || (g[3] = (M) => E(!0))
        }, {
          default: be(() => [
            k.$slots["arrow-right"] ? ae(k.$slots, "arrow-right", { key: 0 }) : ee("", !0),
            k.$slots["arrow-right"] ? ee("", !0) : (W(), Se(t(xa), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : ee("", !0)
      ], 2),
      Be(At, {
        name: t(B)(e.showYearPicker),
        css: t(P)
      }, {
        default: be(() => [
          e.showYearPicker ? (W(), Se(Nt, {
            key: 0,
            items: e.items,
            config: t(u),
            "is-last": t(r).autoApply && !t(u).keepActionRow,
            "overlay-label": t(v)?.yearPicker?.(!0),
            type: "year",
            onToggle: _,
            onSelected: g[4] || (g[4] = (M) => b(M))
          }, Fe({
            "button-icon": be(() => [
              k.$slots["calendar-icon"] ? ae(k.$slots, "calendar-icon", { key: 0 }) : ee("", !0),
              k.$slots["calendar-icon"] ? ee("", !0) : (W(), Se(t(Et), { key: 1 }))
            ]),
            _: 2
          }, [
            k.$slots["year-overlay-value"] ? {
              name: "item",
              fn: be(({ item: M }) => [
                ae(k.$slots, "year-overlay-value", {
                  text: M.text,
                  value: M.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "config", "is-last", "overlay-label"])) : ee("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Wa = (e) => {
  const {
    getDate: A,
    rootEmit: f,
    state: o,
    month: c,
    year: s,
    modelValue: r,
    calendars: u,
    rootProps: v,
    defaults: { multiCalendars: Y, range: P, safeDates: B, filters: O, highlight: l }
  } = Me(), { resetDate: w, getYearFromDate: h, checkHighlightYear: _, groupListAndMap: b } = We(), { getYears: E } = ea(), { validateMonthYear: k, checkMinMaxValue: g } = Ue(), M = ie([!1]), R = j(() => E()), $ = j(() => (K, Z) => {
    const de = De(w(A()), {
      month: c.value(K),
      year: s.value(K)
    }), G = Z ? Ta(de) : Yt(de);
    return k(G, v.preventMinMaxNavigation, Z);
  }), S = () => Array.isArray(r.value) && Y.value.solo && r.value[1], p = () => {
    for (let K = 0; K < Y.value.count; K++)
      if (K === 0)
        u.value[K] = u.value[0];
      else if (K === Y.value.count - 1 && S())
        u.value[K] = {
          month: _e(r.value[1]),
          year: me(r.value[1])
        };
      else {
        const Z = De(A(), u.value[K - 1]);
        u.value[K] = { month: _e(Z), year: me($a(Z, 1)) };
      }
  }, D = (K) => {
    if (!K) return p();
    const Z = De(A(), u.value[K]);
    return u.value[0].year = me(Sa(Z, Y.value.count - 1)), p();
  }, V = (K, Z) => {
    const de = Mn(Z, K);
    return P.value.showLastInRange && de > 1 ? Z : K;
  }, F = (K) => v.focusStartDate || Y.value.solo ? K[0] : K[1] ? V(K[0], K[1]) : K[0], L = () => {
    if (r.value) {
      const K = Array.isArray(r.value) ? F(r.value) : r.value;
      u.value[0] = { month: _e(K), year: me(K) };
    }
  }, ne = () => {
    L(), Y.value.count && p();
  };
  tt(r, (K, Z) => {
    o.isTextInputDate && JSON.stringify(K ?? {}) !== JSON.stringify(Z ?? {}) && ne();
  }), Ee(() => {
    ne();
  });
  const re = (K, Z) => {
    u.value[Z].year = K, f("update-month-year", { instance: Z, year: K, month: u.value[Z].month }), Y.value.count && !Y.value.solo && D(Z);
  }, X = j(() => (K) => b(R.value, (Z) => {
    const de = s.value(K) === Z.value, G = g(
      Z.value,
      h(B.value.minDate),
      h(B.value.maxDate)
    ) || O.value.years?.includes(s.value(K)), ce = _(l.value, Z.value);
    return { active: de, disabled: G, highlighted: ce };
  })), x = (K, Z) => {
    re(K, Z), q(Z);
  }, te = (K, Z = !1) => {
    if (!$.value(K, Z)) {
      const de = Z ? s.value(K) + 1 : s.value(K) - 1;
      re(de, K);
    }
  }, q = (K, Z = !1, de) => {
    Z || e("reset-flow"), de === void 0 ? M.value[K] = !M.value[K] : M.value[K] = de, M.value[K] ? f("overlay-toggle", { open: !0, overlay: He.year }) : f("overlay-toggle", { open: !1, overlay: He.year });
  };
  return {
    isDisabled: $,
    groupedYears: X,
    showYearPicker: M,
    selectYear: re,
    setStartDate: () => {
      v.startDate && (r.value && v.focusStartDate || !r.value) && re(me(A(v.startDate)), 0);
    },
    toggleYearPicker: q,
    handleYearSelect: x,
    handleYear: te
  };
}, na = () => {
  const { isDateAfter: e, isDateBefore: A, isDateEqual: f } = We(), {
    getDate: o,
    rootEmit: c,
    rootProps: s,
    modelValue: r,
    defaults: { range: u }
  } = Me();
  return {
    getRangeWithFixedDate: (l) => Array.isArray(r.value) && (r.value.length === 2 || r.value.length === 1 && u.value.partialRange) ? u.value.fixedStart && (e(l, r.value[0]) || f(l, r.value[0])) ? [r.value[0], l] : u.value.fixedEnd && (A(l, r.value[1]) || f(l, r.value[1])) ? [l, r.value[1]] : (c("invalid-fixed-range", l), r.value) : [],
    setPresetDate: (l) => {
      Array.isArray(l.value) && l.value.length <= 2 && u.value.enabled ? r.value = l.value.map((w) => o(w)) : Array.isArray(l.value) || (r.value = o(l.value));
    },
    checkRangeAutoApply: (l, w, h) => {
      u && (l[0] && l[1] && s.autoApply && w("auto-apply", h), l[0] && !l[1] && (s.modelAuto || u.value.partialRange) && s.autoApply && w("auto-apply", h));
    },
    setMonthOrYearRange: (l) => {
      let w = r.value ? r.value.slice() : [];
      return w.length === 2 && w[1] !== null && (w = []), w.length ? (A(l, w[0]) ? w.unshift(l) : w[1] = l, c("range-end", l)) : (w = [l], c("range-start", l)), w;
    },
    handleMultiDatesSelect: (l, w) => {
      if (r.value && Array.isArray(r.value))
        if (r.value.some((h) => f(l, h))) {
          const h = r.value.filter((_) => !f(_, l));
          r.value = h.length ? h : null;
        } else (w && +w > r.value.length || !w) && r.value.push(l);
      else
        r.value = [l];
    }
  };
}, qr = (e, A) => {
  const {
    getDate: f,
    rootEmit: o,
    state: c,
    calendars: s,
    year: r,
    modelValue: u,
    rootProps: v,
    defaults: { range: Y, highlight: P, safeDates: B, filters: O, multiDates: l }
  } = Me();
  Ft(() => {
    c.isTextInputDate && x(me(f(v.startDate)), 0);
  });
  const { checkMinMaxRange: w, checkMinMaxValue: h } = Ue(), { isDateBetween: _, resetDateTime: b, resetDate: E, getMinMonth: k, getMaxMonth: g, checkHighlightMonth: M, groupListAndMap: R } = We(), { checkRangeAutoApply: $, getRangeWithFixedDate: S, handleMultiDatesSelect: p, setMonthOrYearRange: D, setPresetDate: V } = na(), { padZero: F } = Ie(), { getMonths: L, isOutOfYearRange: ne } = ea(), re = j(() => L()), X = ie(null), {
    selectYear: x,
    groupedYears: te,
    showYearPicker: q,
    toggleYearPicker: oe,
    handleYearSelect: K,
    handleYear: Z,
    isDisabled: de,
    setStartDate: G
  } = Wa(A);
  Ee(() => {
    G();
  });
  const ce = (m) => m ? { month: _e(m), year: me(m) } : { month: null, year: null }, le = () => u.value ? Array.isArray(u.value) ? u.value.map((m) => ce(m)) : ce(u.value) : ce(), we = (m, N) => {
    const U = s.value[m], pe = le();
    return Array.isArray(pe) ? pe.some((ge) => ge.year === U?.year && ge.month === N) : U?.year === pe.year && N === pe.month;
  }, ve = (m, N, U) => {
    const pe = le();
    return Array.isArray(pe) ? r.value(N) === pe[U]?.year && m === pe[U]?.month : !1;
  }, Ae = (m, N) => {
    if (Y.value.enabled) {
      const U = le();
      if (Array.isArray(u.value) && Array.isArray(U)) {
        const pe = ve(m, N, 0) || ve(m, N, 1), ge = De(E(f()), { month: m, year: r.value(N) });
        return _(u.value, X.value, ge) && !pe;
      }
      return !1;
    }
    return !1;
  }, Q = j(() => (m) => R(re.value, (N) => {
    const U = we(m, N.value), pe = h(
      N.value,
      k(r.value(m), B.value.minDate),
      g(r.value(m), B.value.maxDate)
    ) || n(B.value.disabledDates, r.value(m), N.value) || O.value.months?.includes(N.value) || !C(B.value.allowedDates, r.value(m), N.value) || ne(r.value(m)), ge = Ae(N.value, m), Qe = M(P.value, N.value, r.value(m));
    return { active: U, disabled: pe, isBetween: ge, highlighted: Qe };
  })), I = (m, N) => De(E(f()), { month: m, year: r.value(N) }), y = (m, N) => {
    const U = u.value ? u.value : E(f());
    u.value = De(U, { month: m, year: r.value(N) }), A("auto-apply"), A("update-flow-step");
  }, H = (m, N) => {
    const U = I(m, N);
    Y.value.fixedEnd || Y.value.fixedStart ? u.value = S(U) : u.value ? w(U, u.value) && (u.value = D(I(m, N))) : u.value = [I(m, N)], je().then(() => {
      $(u.value, A, u.value.length < 2);
    });
  }, fe = (m, N) => {
    p(I(m, N), l.value.limit), A("auto-apply", !0);
  }, Pe = (m, N) => (s.value[N].month = m, i(N, s.value[N].year, m), l.value.enabled ? fe(m, N) : Y.value.enabled ? H(m, N) : y(m, N)), Ce = (m, N) => {
    x(m, N), i(N, m, null);
  }, i = (m, N, U) => {
    let pe = U;
    if (!pe && pe !== 0) {
      const ge = le();
      pe = Array.isArray(ge) ? ge[m].month : ge.month;
    }
    o("update-month-year", { instance: m, year: N, month: pe });
  }, d = (m, N) => {
    X.value = I(m, N);
  }, a = (m) => {
    V({
      value: m
    }), A("auto-apply");
  }, n = (m, N, U) => {
    if (m instanceof Map) {
      const pe = `${F(U + 1)}-${N}`;
      return m.size ? m.has(pe) : !1;
    }
    return typeof m == "function" ? m(b(De(f(), { month: U, year: N }), !0)) : !1;
  }, C = (m, N, U) => {
    if (m instanceof Map) {
      const pe = `${F(U + 1)}-${N}`;
      return m.size ? m.has(pe) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: Q,
    groupedYears: te,
    year: r,
    isDisabled: de,
    showYearPicker: q,
    modelValue: u,
    toggleYearPicker: oe,
    handleYearSelect: K,
    handleYear: Z,
    presetDate: a,
    setHoverDate: d,
    selectMonth: Pe,
    selectYear: Ce,
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, s = mt(), {
      rootProps: r,
      defaults: { config: u }
    } = Me(), v = lt(s, at.YearMode);
    Ee(() => {
      o("mount");
    });
    const {
      groupedMonths: Y,
      groupedYears: P,
      year: B,
      isDisabled: O,
      showYearPicker: l,
      modelValue: w,
      presetDate: h,
      setHoverDate: _,
      selectMonth: b,
      selectYear: E,
      toggleYearPicker: k,
      handleYearSelect: g,
      handleYear: M,
      getModelMonthYear: R
    } = qr(c, o);
    return A({ getSidebarProps: () => ({
      modelValue: w,
      year: B,
      getModelMonthYear: R,
      selectMonth: b,
      selectYear: E,
      handleYear: M
    }), presetDate: h, toggleYearPicker: (S) => k(0, S) }), (S, p) => (W(), Se(aa, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: be(({ instances: D, wrapClass: V }) => [
        (W(!0), J(Te, null, Re(D, (F) => (W(), J("div", {
          key: F,
          class: he(V)
        }, [
          S.$slots["top-extra"] ? ae(S.$slots, "top-extra", {
            key: 0,
            value: t(w)
          }) : ee("", !0),
          ae(S.$slots, "month-year", nt({ ref_for: !0 }, {
            year: t(B),
            months: t(Y)(F),
            years: t(P)(F),
            selectMonth: t(b),
            selectYear: t(E),
            instance: F
          }), () => [
            Be(Nt, {
              items: t(Y)(F),
              "is-last": t(r).autoApply && !t(u).keepActionRow,
              height: t(u).modeHeight,
              "no-overlay-focus": !!(e.noOverlayFocus || t(r).textInput),
              "use-relative": "",
              level: 0,
              type: "month",
              onSelected: (L) => t(b)(L, F),
              onHoverValue: (L) => t(_)(L, F)
            }, Fe({
              header: be(() => [
                Be(Na, {
                  items: t(P)(F),
                  instance: F,
                  "show-year-picker": t(l)[F],
                  year: t(B)(F),
                  "is-disabled": (L) => t(O)(F, L),
                  onHandleYear: (L) => t(M)(F, L),
                  onYearSelect: (L) => t(g)(L, F),
                  onToggleYearPicker: (L) => t(k)(F, L?.flow, L?.show)
                }, Fe({ _: 2 }, [
                  Re(t(v), (L, ne) => ({
                    name: L,
                    fn: be((re) => [
                      ae(S.$slots, L, nt({ ref_for: !0 }, re))
                    ])
                  }))
                ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
              ]),
              _: 2
            }, [
              S.$slots["month-overlay-value"] ? {
                name: "item",
                fn: be(({ item: L }) => [
                  ae(S.$slots, "month-overlay-value", {
                    text: L.text,
                    value: L.value
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
}), Qr = (e, A) => {
  const {
    rootEmit: f,
    getDate: o,
    state: c,
    modelValue: s,
    rootProps: r,
    defaults: { highlight: u, multiDates: v, filters: Y, range: P, safeDates: B }
  } = Me(), { getYears: O } = ea(), { isDateBetween: l, resetDate: w, resetDateTime: h, getYearFromDate: _, checkHighlightYear: b, groupListAndMap: E } = We(), { checkRangeAutoApply: k, setMonthOrYearRange: g } = na(), { checkMinMaxValue: M, checkMinMaxRange: R } = Ue();
  Ft(() => {
    c.isTextInputDate && (S.value = me(o(r.startDate)));
  });
  const $ = ie(null), S = ie();
  Ee(() => {
    r.startDate && (s.value && r.focusStartDate || !s.value) && (S.value = me(o(r.startDate)));
  });
  const p = (x) => Array.isArray(s.value) ? s.value.some((te) => me(te) === x) : s.value ? me(s.value) === x : !1, D = (x) => P.value.enabled && Array.isArray(s.value) ? l(s.value, $.value, ne(x)) : !1, V = (x) => B.value.allowedDates?.size ? B.value.allowedDates.has(`${x}`) : !0, F = (x) => B.value.disabledDates instanceof Map ? B.value.disabledDates.size ? B.value.disabledDates.has(`${x}`) : !1 : typeof B.value.disabledDates == "function" ? B.value.disabledDates(Ze(h(Yt(o())), x)) : !0, L = j(() => E(O(), (x) => {
    const te = p(x.value), q = M(
      x.value,
      _(B.value.minDate),
      _(B.value.maxDate)
    ) || Y.value.years.includes(x.value) || !V(x.value) || F(x.value), oe = D(x.value) && !te, K = b(u.value, x.value);
    return { active: te, disabled: q, isBetween: oe, highlighted: K };
  })), ne = (x) => Ze(w(Yt(o())), x);
  return {
    groupedYears: L,
    focusYear: S,
    setHoverValue: (x) => {
      $.value = Ze(w(o()), x);
    },
    selectYear: (x) => {
      if (f("update-month-year", { instance: 0, year: x, month: Number.NaN }), v.value.enabled)
        return s.value ? Array.isArray(s.value) && ((s.value?.map((q) => me(q))).includes(x) ? s.value = s.value.filter((q) => me(q) !== x) : s.value.push(Ze(h(o()), x))) : s.value = [Ze(h(Yt(o())), x)], A("auto-apply", !0);
      P.value.enabled ? R(ne(x), s.value) && (s.value = g(ne(x)), je().then(() => {
        k(s.value, A, s.value.length < 2);
      })) : (s.value = ne(x), A("auto-apply"));
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, {
      modelValue: s,
      defaults: { config: r },
      rootProps: u
    } = Me(), { groupedYears: v, focusYear: Y, selectYear: P, setHoverValue: B } = Qr(c, o);
    return A({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: P
    }) }), (l, w) => (W(), J("div", null, [
      l.$slots["top-extra"] ? ae(l.$slots, "top-extra", {
        key: 0,
        value: t(s)
      }) : ee("", !0),
      l.$slots["month-year"] ? ae(l.$slots, "month-year", Ke(nt({ key: 1 }, {
        years: t(v),
        selectYear: t(P)
      }))) : (W(), Se(Nt, {
        key: 2,
        items: t(v),
        "is-last": t(u).autoApply && !t(r).keepActionRow,
        height: t(r).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || t(u).textInput),
        "focus-value": t(Y),
        type: "year",
        "use-relative": "",
        onSelected: t(P),
        onHoverValue: t(B)
      }, Fe({ _: 2 }, [
        l.$slots["year-overlay-value"] ? {
          name: "item",
          fn: be(({ item: h }) => [
            ae(l.$slots, "year-overlay-value", {
              text: h.text,
              value: h.value
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, {
      getDate: s,
      rootEmit: r,
      rootProps: u,
      defaults: { ariaLabels: v, filters: Y, config: P, range: B, multiCalendars: O, timeConfig: l }
    } = Me(), { checkKeyDown: w, hoursToAmPmHours: h } = Ie(), { boolHtmlAttribute: _ } = Pt(), { sanitizeTime: b, groupListAndMap: E } = We(), { transitionName: k, showTransition: g } = Vt(), M = Gt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), R = ie("AM"), $ = ie(null), S = ie(), p = ie(!1);
    Ee(() => {
      o("mounted");
    });
    const D = (n) => De(s(), {
      hours: n.hours,
      minutes: n.minutes,
      seconds: l.value.enableSeconds ? n.seconds : 0,
      milliseconds: 0
    }), V = j(() => u.timePicker || l.value.timePickerInline ? 0 : 1), F = j(
      () => (n) => ce(n, c[n]) || ne(n, c[n])
    ), L = j(() => ({ hours: c.hours, minutes: c.minutes, seconds: c.seconds })), ne = (n, C) => B.value.enabled && !B.value.disableTimeRangeValidation ? !c.validateTime(n, C) : !1, re = (n, C) => {
      if (B.value.enabled && !B.value.disableTimeRangeValidation) {
        const m = C ? +l.value[`${n}Increment`] : -+l.value[`${n}Increment`], N = c[n] + m;
        return !c.validateTime(n, N);
      }
      return !1;
    }, X = j(() => (n) => !Q(+c[n] + +l.value[`${n}Increment`], n) || re(n, !0)), x = j(() => (n) => !Q(+c[n] - +l.value[`${n}Increment`], n) || re(n, !1)), te = (n, C) => Ra(De(s(), n), C), q = (n, C) => _n(De(s(), n), C), oe = j(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !l.value.timePickerInline,
        dp__time_col_reg_block: !l.value.enableSeconds && l.value.is24 && !l.value.timePickerInline,
        dp__time_col_reg_inline: !l.value.enableSeconds && l.value.is24 && l.value.timePickerInline,
        dp__time_col_reg_with_button: !l.value.enableSeconds && !l.value.is24,
        dp__time_col_sec: l.value.enableSeconds && l.value.is24,
        dp__time_col_sec_with_button: l.value.enableSeconds && !l.value.is24
      })
    ), K = j(
      () => l.value.timePickerInline && B.value.enabled && !O.value.count
    ), Z = j(() => {
      const n = [{ type: "hours" }];
      return l.value.enableMinutes && n.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), l.value.enableSeconds && n.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), n;
    }), de = j(() => Z.value.filter((n) => !n.separator)), G = j(() => (n) => {
      if (n === "hours") {
        const C = Ce(+c.hours);
        return { text: C < 10 ? `0${C}` : `${C}`, value: C };
      }
      return { text: c[n] < 10 ? `0${c[n]}` : `${c[n]}`, value: c[n] };
    }), ce = (n, C) => {
      if (!c.disabledTimesConfig) return !1;
      const m = c.disabledTimesConfig(c.order, n === "hours" ? C : void 0);
      return m[n] ? !!m[n]?.includes(C) : !0;
    }, le = (n, C) => C !== "hours" || R.value === "AM" ? n : n + 12, we = (n) => {
      const C = l.value.is24 ? 24 : 12, m = n === "hours" ? C : 60, N = +l.value[`${n}GridIncrement`], U = n === "hours" && !l.value.is24 ? N : 0, pe = [];
      for (let ge = U; ge < m; ge += N)
        pe.push({
          value: l.value.is24 ? ge : le(ge, n),
          text: ge < 10 ? `0${ge}` : `${ge}`
        });
      return n === "hours" && !l.value.is24 && pe.unshift({ value: R.value === "PM" ? 12 : 0, text: "12" }), E(pe, (ge) => ({ active: !1, disabled: Y.value.times[n].includes(ge.value) || !Q(ge.value, n) || ce(n, ge.value) || ne(n, ge.value) }));
    }, ve = (n) => n >= 0 ? n : 59, Ae = (n) => n >= 0 ? n : 23, Q = (n, C) => {
      const m = u.minTime ? D(b(u.minTime)) : null, N = u.maxTime ? D(b(u.maxTime)) : null, U = D(
        b(
          L.value,
          C,
          C === "minutes" || C === "seconds" ? ve(n) : Ae(n)
        )
      );
      return m && N ? (st(U, N) || Dt(U, N)) && (rt(U, m) || Dt(U, m)) : m ? rt(U, m) || Dt(U, m) : N ? st(U, N) || Dt(U, N) : !0;
    }, I = (n) => l.value[`no${n[0].toUpperCase() + n.slice(1)}Overlay`], y = (n) => {
      I(n) || (M[n] = !M[n], M[n] ? (p.value = !0, o("overlay-opened", n)) : (p.value = !1, o("overlay-closed", n)));
    }, H = (n) => n === "hours" ? ot : n === "minutes" ? it : ft, fe = () => {
      S.value && clearTimeout(S.value);
    }, Pe = (n, C = !0, m) => {
      const N = C ? te : q, U = C ? +l.value[`${n}Increment`] : -+l.value[`${n}Increment`];
      Q(+c[n] + U, n) && o(
        `update:${n}`,
        H(n)(
          N({ [n]: +c[n] }, { [n]: +l.value[`${n}Increment`] })
        )
      ), !m?.keyboard && P.value.timeArrowHoldThreshold && (S.value = setTimeout(() => {
        Pe(n, C);
      }, P.value.timeArrowHoldThreshold));
    }, Ce = (n) => l.value.is24 ? n : (n >= 12 ? R.value = "PM" : R.value = "AM", h(n)), i = () => {
      R.value === "PM" ? (R.value = "AM", o("update:hours", c.hours - 12)) : (R.value = "PM", o("update:hours", c.hours + 12)), r("am-pm-change", R.value);
    }, d = (n) => {
      M[n] = !0;
    }, a = (n, C) => (y(n), o(`update:${n}`, C));
    return A({ openChildCmp: d }), (n, C) => t(u).disabled ? ee("", !0) : (W(), J("div", Gr, [
      (W(!0), J(Te, null, Re(Z.value, (m, N) => (W(), J("div", {
        key: N,
        class: he(oe.value),
        "data-compact": K.value && !t(l).enableSeconds,
        "data-collapsed": K.value && t(l).enableSeconds
      }, [
        m.separator ? (W(), J(Te, { key: 0 }, [
          p.value ? ee("", !0) : (W(), J(Te, { key: 0 }, [
            ut(":")
          ], 64))
        ], 64)) : (W(), J(Te, { key: 1 }, [
          ye("button", {
            type: "button",
            class: he({
              dp__btn: !0,
              dp__inc_dec_button: !t(l).timePickerInline,
              dp__inc_dec_button_inline: t(l).timePickerInline,
              dp__tp_inline_btn_top: t(l).timePickerInline,
              dp__inc_dec_button_disabled: X.value(m.type),
              "dp--hidden-el": p.value
            }),
            "data-test-id": `${m.type}-time-inc-btn-${c.order}`,
            "aria-label": t(v)?.incrementValue(m.type),
            tabindex: "0",
            "data-dp-action-element": V.value,
            onKeydown: (U) => t(w)(U, () => Pe(m.type, !0, { keyboard: !0 }), !0),
            onClick: (U) => t(P).timeArrowHoldThreshold ? void 0 : Pe(m.type, !0),
            onMousedown: (U) => t(P).timeArrowHoldThreshold ? Pe(m.type, !0) : void 0,
            onMouseup: fe
          }, [
            t(l).timePickerInline ? ae(n.$slots, "tp-inline-arrow-up", { key: 1 }, () => [
              C[2] || (C[2] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
              C[3] || (C[3] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
            ]) : ae(n.$slots, "arrow-up", { key: 0 }, () => [
              Be(t(Ya))
            ])
          ], 42, Zr),
          ye("button", {
            type: "button",
            "aria-label": `${G.value(m.type).text}-${t(v)?.openTpOverlay(m.type)}`,
            class: he({
              dp__time_display: !0,
              dp__time_display_block: !t(l).timePickerInline,
              dp__time_display_inline: t(l).timePickerInline,
              "dp--time-invalid": F.value(m.type),
              "dp--time-overlay-btn": !F.value(m.type),
              "dp--hidden-el": p.value
            }),
            disabled: t(_)(I(m.type)),
            tabindex: "0",
            "data-dp-action-element": V.value,
            "data-test-id": `${m.type}-toggle-overlay-btn-${c.order}`,
            onKeydown: (U) => t(w)(U, () => y(m.type), !0),
            onClick: (U) => y(m.type)
          }, [
            ae(n.$slots, m.type, {
              text: G.value(m.type).text,
              value: G.value(m.type).value
            }, () => [
              ut(Ne(G.value(m.type).text), 1)
            ])
          ], 42, el),
          ye("button", {
            type: "button",
            class: he({
              dp__btn: !0,
              dp__inc_dec_button: !t(l).timePickerInline,
              dp__inc_dec_button_inline: t(l).timePickerInline,
              dp__tp_inline_btn_bottom: t(l).timePickerInline,
              dp__inc_dec_button_disabled: x.value(m.type),
              "dp--hidden-el": p.value
            }),
            "data-test-id": `${m.type}-time-dec-btn-${c.order}`,
            "aria-label": t(v)?.decrementValue(m.type),
            tabindex: "0",
            "data-dp-action-element": V.value,
            onKeydown: (U) => t(w)(U, () => Pe(m.type, !1, { keyboard: !0 }), !0),
            onClick: (U) => t(P).timeArrowHoldThreshold ? void 0 : Pe(m.type, !1),
            onMousedown: (U) => t(P).timeArrowHoldThreshold ? Pe(m.type, !1) : void 0,
            onMouseup: fe
          }, [
            t(l).timePickerInline ? ae(n.$slots, "tp-inline-arrow-down", { key: 1 }, () => [
              C[4] || (C[4] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
              C[5] || (C[5] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
            ]) : ae(n.$slots, "arrow-down", { key: 0 }, () => [
              Be(t(Ba))
            ])
          ], 42, tl)
        ], 64))
      ], 10, Xr))), 128)),
      t(l).is24 ? ee("", !0) : (W(), J("div", al, [
        ae(n.$slots, "am-pm-button", {
          toggle: i,
          value: R.value
        }, () => [
          ye("button", {
            ref_key: "amPmButton",
            ref: $,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": t(v)?.amPmButton,
            tabindex: "0",
            "data-dp-action-element": V.value,
            "data-compact": K.value,
            onClick: i,
            onKeydown: C[0] || (C[0] = (m) => t(w)(m, () => i(), !0))
          }, Ne(R.value), 41, nl)
        ])
      ])),
      (W(!0), J(Te, null, Re(de.value, (m, N) => (W(), Se(At, {
        key: N,
        name: t(k)(M[m.type]),
        css: t(g)
      }, {
        default: be(() => [
          M[m.type] ? (W(), Se(Nt, {
            key: 0,
            items: we(m.type),
            "is-last": t(u).autoApply && !t(P).keepActionRow,
            type: m.type,
            "aria-labels": t(v),
            level: t(l).timePickerInline || t(u).timePicker ? 1 : 2,
            "overlay-label": t(v).timeOverlay?.(m.type),
            onSelected: (U) => a(m.type, U),
            onToggle: (U) => y(m.type),
            onResetFlow: C[1] || (C[1] = (U) => n.$emit("reset-flow"))
          }, Fe({
            "button-icon": be(() => [
              ae(n.$slots, "clock-icon", {}, () => [
                n.$slots["clock-icon"] ? ee("", !0) : (W(), Se(pa(t(l).timePickerInline ? t(Et) : t(Oa)), { key: 0 }))
              ])
            ]),
            _: 2
          }, [
            n.$slots[`${m.type}-overlay-value`] ? {
              name: "item",
              fn: be(({ item: U }) => [
                ae(n.$slots, `${m.type}-overlay-value`, {
                  text: U.text,
                  value: U.value
                })
              ]),
              key: "0"
            } : void 0,
            n.$slots[`${m.type}-overlay-header`] ? {
              name: "header",
              fn: be(() => [
                ae(n.$slots, `${m.type}-overlay-header`, {
                  toggle: () => y(m.type)
                })
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["items", "is-last", "type", "aria-labels", "level", "overlay-label", "onSelected", "onToggle"])) : ee("", !0)
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, {
      rootEmit: s,
      setState: r,
      modelValue: u,
      rootProps: v,
      defaults: { ariaLabels: Y, textInput: P, config: B, range: O, timeConfig: l }
    } = Me(), { isModelAuto: w } = We(), { checkKeyDown: h, findFocusableEl: _ } = Ie(), { transitionName: b, showTransition: E } = Vt(), { hideNavigationButtons: k } = ta(), { isMobile: g } = Zt(), M = mt(), R = xe("overlay"), $ = xe("close-tp-btn"), S = xe("tp-input"), p = ie(!1);
    Ee(() => {
      o("mount");
    });
    const D = j(() => O.value.enabled && v.modelAuto ? w(u.value) : !0), V = ie(!1), F = (G) => ({
      hours: Array.isArray(c.hours) ? c.hours[G] : c.hours,
      minutes: Array.isArray(c.minutes) ? c.minutes[G] : c.minutes,
      seconds: Array.isArray(c.seconds) ? c.seconds[G] : c.seconds
    }), L = j(() => {
      const G = [];
      if (O.value.enabled)
        for (let ce = 0; ce < 2; ce++)
          G.push(F(ce));
      else
        G.push(F(0));
      return G;
    }), ne = (G, ce = !1, le = "") => {
      ce || o("reset-flow"), V.value = G, r("arrowNavigationLevel", G ? 1 : 0), s("overlay-toggle", { open: G, overlay: He.time }), je(() => {
        le !== "" && S.value?.[0] && S.value[0].openChildCmp(le);
      });
    }, re = j(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: v.autoApply && !B.value.keepActionRow
    })), X = lt(M, at.TimeInput), x = (G, ce, le) => O.value.enabled ? ce === 0 ? [G, L.value[1][le]] : [L.value[0][le], G] : G, te = (G) => {
      o("update:hours", G);
    }, q = (G) => {
      o("update:minutes", G);
    }, oe = (G) => {
      o("update:seconds", G);
    }, K = () => {
      if (R.value && !P.value.enabled && !c.noOverlayFocus) {
        const G = _(R.value);
        G && G.focus({ preventScroll: !0 });
      }
    }, Z = (G) => {
      p.value = !1, s("overlay-toggle", { open: !1, overlay: G });
    }, de = (G) => {
      p.value = !0, s("overlay-toggle", { open: !0, overlay: G });
    };
    return A({ toggleTimePicker: ne }), (G, ce) => (W(), J("div", {
      class: "dp--tp-wrap",
      "data-dp-mobile": t(g)
    }, [
      !t(v).timePicker && !t(l).timePickerInline ? Ut((W(), J("button", {
        key: 0,
        ref: "open-tp-btn",
        type: "button",
        "data-dp-action-element": "0",
        class: he({ ...re.value, "dp--hidden-el": V.value }),
        "aria-label": t(Y)?.openTimePicker,
        tabindex: e.noOverlayFocus ? void 0 : 0,
        "data-test-id": "open-time-picker-btn",
        onKeydown: ce[0] || (ce[0] = (le) => t(h)(le, () => ne(!0))),
        onClick: ce[1] || (ce[1] = (le) => ne(!0))
      }, [
        ae(G.$slots, "clock-icon", {}, () => [
          Be(t(Oa))
        ])
      ], 42, ol)), [
        [Qt, !t(k)("time")]
      ]) : ee("", !0),
      Be(At, {
        name: t(b)(V.value),
        css: t(E) && !t(l).timePickerInline
      }, {
        default: be(() => [
          V.value || t(v).timePicker || t(l).timePickerInline ? (W(), J("div", {
            key: 0,
            ref: "overlay",
            role: t(l).timePickerInline ? void 0 : "dialog",
            class: he({
              dp__overlay: !t(l).timePickerInline,
              "dp--overlay-absolute": !t(v).timePicker && !t(l).timePickerInline,
              "dp--overlay-relative": t(v).timePicker
            }),
            style: ze(t(v).timePicker ? { height: `${t(B).modeHeight}px` } : void 0),
            "aria-label": t(Y)?.timePicker,
            tabindex: t(l).timePickerInline ? void 0 : 0
          }, [
            ye("div", {
              class: he(
                t(l).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
              ),
              style: { display: "flex" }
            }, [
              ae(G.$slots, "time-picker-overlay", {
                hours: e.hours,
                minutes: e.minutes,
                seconds: e.seconds,
                setHours: te,
                setMinutes: q,
                setSeconds: oe
              }, () => [
                ye("div", {
                  class: he(t(l).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                }, [
                  (W(!0), J(Te, null, Re(L.value, (le, we) => Ut((W(), Se(rl, nt({ key: we }, { ref_for: !0 }, {
                    order: we,
                    hours: le.hours,
                    minutes: le.minutes,
                    seconds: le.seconds,
                    closeTimePickerBtn: $.value,
                    disabledTimesConfig: e.disabledTimesConfig,
                    disabled: we === 0 ? t(O).fixedStart : t(O).fixedEnd
                  }, {
                    ref_for: !0,
                    ref: "tp-input",
                    "validate-time": (ve, Ae) => e.validateTime(ve, x(Ae, we, ve)),
                    "onUpdate:hours": (ve) => te(x(ve, we, "hours")),
                    "onUpdate:minutes": (ve) => q(x(ve, we, "minutes")),
                    "onUpdate:seconds": (ve) => oe(x(ve, we, "seconds")),
                    onMounted: K,
                    onOverlayClosed: Z,
                    onOverlayOpened: de
                  }), Fe({ _: 2 }, [
                    Re(t(X), (ve, Ae) => ({
                      name: ve,
                      fn: be((Q) => [
                        ae(G.$slots, ve, nt({ ref_for: !0 }, Q))
                      ])
                    }))
                  ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                    [Qt, we === 0 ? !0 : D.value]
                  ])), 128))
                ], 2)
              ]),
              !t(v).timePicker && !t(l).timePickerInline ? Ut((W(), J("button", {
                key: 0,
                ref: "close-tp-btn",
                "data-dp-action-element": "1",
                type: "button",
                class: he({ ...re.value, "dp--hidden-el": p.value }),
                "aria-label": t(Y)?.closeTimePicker,
                tabindex: "0",
                onKeydown: ce[2] || (ce[2] = (le) => t(h)(le, () => ne(!1))),
                onClick: ce[3] || (ce[3] = (le) => ne(!1))
              }, [
                ae(G.$slots, "calendar-icon", {}, () => [
                  Be(t(Et))
                ])
              ], 42, ul)), [
                [Qt, !t(k)("time")]
              ]) : ee("", !0)
            ], 2)
          ], 14, sl)) : ee("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 8, ll));
  }
}), Ha = (e) => {
  const {
    getDate: A,
    modelValue: f,
    time: o,
    rootProps: c,
    defaults: { range: s, timeConfig: r }
  } = Me(), { isDateEqual: u, setTime: v } = We(), Y = ($, S) => Array.isArray(o[$]) ? o[$][S] : o[$], P = ($) => r.value.enableSeconds ? Array.isArray(o.seconds) ? o.seconds[$] : o.seconds : 0, B = ($, S) => $ ? v(
    S !== void 0 ? { hours: Y("hours", S), minutes: Y("minutes", S), seconds: P(S) } : { hours: o.hours, minutes: o.minutes, seconds: P() },
    $
  ) : Pn(A(), P(S)), O = ($, S) => {
    o[$] = S;
  }, l = j(() => c.modelAuto && s.value.enabled ? Array.isArray(f.value) ? f.value.length > 1 : !1 : s.value.enabled), w = ($, S) => {
    const p = Object.fromEntries(
      Object.keys(o).map((D) => D === $ ? [D, S] : [D, o[D]].slice())
    );
    if (l.value && !s.value.disableTimeRangeValidation) {
      const D = (F) => f.value ? v(
        {
          hours: p.hours[F],
          minutes: p.minutes[F],
          seconds: p.seconds[F]
        },
        f.value[F]
      ) : null, V = (F) => An(f.value[F], 0);
      return !(u(D(0), D(1)) && (rt(D(0), V(1)) || st(D(1), V(0))));
    }
    return !0;
  }, h = ($, S) => {
    w($, S) && (O($, S), e && e());
  }, _ = ($) => {
    h("hours", $);
  }, b = ($) => {
    h("minutes", $);
  }, E = ($) => {
    h("seconds", $);
  }, k = ($, S) => {
    _($.hours), b($.minutes), E($.seconds), f.value && S(f.value);
  }, g = ($) => {
    if ($) {
      const S = Array.isArray($), p = S ? [+$[0].hours, +$[1].hours] : +$.hours, D = S ? [+$[0].minutes, +$[1].minutes] : +$.minutes, V = S ? [+($[0].seconds ?? 0), +($[1].seconds ?? 0)] : +($.seconds ?? 0);
      O("hours", p), O("minutes", D), r.value.enableSeconds && O("seconds", V);
    }
  }, M = ($, S) => {
    const p = {
      hours: Array.isArray(o.hours) ? o.hours[$] : o.hours,
      disabledArr: []
    };
    return (S || S === 0) && (p.hours = S), Array.isArray(c.disabledTimes) && (p.disabledArr = s.value.enabled && Array.isArray(c.disabledTimes[$]) ? c.disabledTimes[$] : c.disabledTimes), p;
  }, R = j(() => ($, S) => {
    if (Array.isArray(c.disabledTimes)) {
      const { disabledArr: p, hours: D } = M($, S), V = p.filter((F) => +F.hours === D);
      return V[0]?.minutes === "*" ? { hours: [D], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: V?.map((F) => +F.minutes) ?? [],
        seconds: V?.map((F) => F.seconds ? +F.seconds : void 0) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: O,
    updateHours: _,
    updateMinutes: b,
    updateSeconds: E,
    getSetDateTime: B,
    updateTimeValues: k,
    getSecondsValue: P,
    assignStartTime: g,
    validateTime: w,
    disabledTimesConfig: R
  };
}, il = (e) => {
  const {
    getDate: A,
    time: f,
    modelValue: o,
    state: c,
    defaults: { startTime: s, range: r, timeConfig: u }
  } = Me(), { getTimeObj: v } = We();
  Ft(() => {
    c.isTextInputDate && M();
  });
  const { updateTimeValues: Y, getSetDateTime: P, assignTime: B, assignStartTime: O, disabledTimesConfig: l, validateTime: w } = Ha(h);
  function h() {
    e("update-flow-step");
  }
  const _ = (S) => {
    const { hours: p, minutes: D, seconds: V } = S;
    return { hours: +p, minutes: +D, seconds: V ? +V : 0 };
  }, b = () => {
    if (u.value.startTime) {
      if (Array.isArray(u.value.startTime)) {
        const p = _(u.value.startTime[0]), D = _(u.value.startTime[1]);
        return [De(A(), p), De(A(), D)];
      }
      const S = _(u.value.startTime);
      return De(A(), S);
    }
    return r.value.enabled ? [null, null] : null;
  }, E = () => {
    if (r.value.enabled) {
      const [S, p] = b();
      o.value = [P(S, 0), P(p, 1)];
    } else
      o.value = P(b());
  }, k = (S) => Array.isArray(S) ? [v(A(S[0])), v(A(S[1]))] : [v(S ?? A())], g = (S, p, D) => {
    B("hours", S), B("minutes", p), B("seconds", u.value.enableSeconds ? D : 0);
  }, M = () => {
    const [S, p] = k(o.value);
    return r.value.enabled ? g(
      [S.hours, p.hours],
      [S.minutes, p.minutes],
      [S.seconds, p.seconds]
    ) : g(S.hours, S.minutes, S.seconds);
  };
  Ee(() => (O(s.value), o.value ? M() : E()));
  const R = () => {
    Array.isArray(o.value) ? o.value = o.value.map((S, p) => S && P(S, p)) : o.value = P(o.value), e("time-update");
  };
  return {
    modelValue: o,
    time: f,
    disabledTimesConfig: l,
    validateTime: w,
    updateTime: (S) => {
      Y(S, R);
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = mt(), s = lt(c, at.TimePicker), r = xe("time-input"), { time: u, modelValue: v, disabledTimesConfig: Y, updateTime: P, validateTime: B } = il(o);
    return Ee(() => {
      o("mount");
    }), A({ getSidebarProps: () => ({
      modelValue: v,
      time: u,
      updateTime: P
    }), toggleTimePicker: (w, h = !1, _ = "") => {
      r.value?.toggleTimePicker(w, h, _);
    } }), (w, h) => (W(), Se(aa, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: be(({ wrapClass: _ }) => [
        ye("div", {
          class: he(_)
        }, [
          Be(La, nt({ ref: "time-input" }, w.$props, {
            hours: t(u).hours,
            minutes: t(u).minutes,
            seconds: t(u).seconds,
            "disabled-times-config": t(Y),
            "validate-time": t(B),
            "onUpdate:hours": h[0] || (h[0] = (b) => t(P)({ hours: b, minutes: t(u).minutes, seconds: t(u).seconds })),
            "onUpdate:minutes": h[1] || (h[1] = (b) => t(P)({ hours: t(u).hours, minutes: b, seconds: t(u).seconds })),
            "onUpdate:seconds": h[2] || (h[2] = (b) => t(P)({ hours: t(u).hours, minutes: t(u).minutes, seconds: b })),
            onResetFlow: h[3] || (h[3] = (b) => w.$emit("reset-flow"))
          }), Fe({ _: 2 }, [
            Re(t(s), (b, E) => ({
              name: b,
              fn: be((k) => [
                ae(w.$slots, b, Ke(et(k)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), dl = (e, A) => {
  const {
    getDate: f,
    rootProps: o,
    defaults: { filters: c }
  } = Me(), { validateMonthYearInRange: s, validateMonthYear: r } = Ue(), u = (O, l) => {
    let w = O;
    return c.value.months.includes(_e(w)) ? (w = l ? yt(O, 1) : It(O, 1), u(w, l)) : w;
  }, v = (O, l) => {
    let w = O;
    return c.value.years.includes(me(w)) ? (w = l ? $a(O, 1) : Sa(O, 1), v(w, l)) : w;
  }, Y = (O, l = !1) => {
    const w = De(f(), { month: e.month, year: e.year });
    let h = O ? yt(w, 1) : It(w, 1);
    o.disableYearSelect && (h = Ze(h, e.year));
    let _ = _e(h), b = me(h);
    c.value.months.includes(_) && (h = u(h, O), _ = _e(h), b = me(h)), c.value.years.includes(b) && (h = v(h, O), b = me(h)), s(_, b, O, o.preventMinMaxNavigation) && P(_, b, l);
  }, P = (O, l, w = !1) => {
    A("update-month-year", { month: O, year: l, fromNav: w });
  }, B = j(() => (O) => r(
    De(f(), { month: e.month, year: e.year }),
    o.preventMinMaxNavigation,
    O
  ));
  return { handleMonthYearChange: Y, isDisabled: B, updateMonthYear: P };
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, {
      rootEmit: s,
      rootProps: r,
      modelValue: u,
      defaults: { ariaLabels: v, filters: Y, config: P, highlight: B, safeDates: O, ui: l }
    } = Me(), { transitionName: w, showTransition: h } = Vt(), { showLeftIcon: _, showRightIcon: b } = ta(), { handleMonthYearChange: E, isDisabled: k, updateMonthYear: g } = dl(c, o), { getMaxMonth: M, getMinMonth: R, getYearFromDate: $, groupListAndMap: S, checkHighlightYear: p, checkHighlightMonth: D } = We(), { checkKeyDown: V } = Ie(), { formatYear: F } = pt(), { checkMinMaxValue: L } = Ue(), { boolHtmlAttribute: ne } = Pt(), re = ie(!1), X = ie(!1), x = ie(!1);
    Ee(() => {
      o("mount");
    });
    const te = (I) => ({
      get: () => c[I],
      set: (y) => {
        const H = I === Ge.month ? Ge.year : Ge.month;
        o("update-month-year", { [I]: y, [H]: c[H] }), I === Ge.month ? le(!0) : we(!0);
      }
    }), q = j(te(Ge.month)), oe = j(te(Ge.year)), K = j(() => (I) => ({
      month: c.month,
      year: c.year,
      items: I === Ge.month ? c.months : c.years,
      instance: c.instance,
      updateMonthYear: g,
      toggle: I === Ge.month ? le : we
    })), Z = j(() => {
      const I = c.months.find((y) => y.value === c.month);
      return I || { text: "", value: 0 };
    }), de = j(() => S(c.months, (I) => {
      const y = c.month === I.value, H = L(
        I.value,
        R(c.year, O.value.minDate),
        M(c.year, O.value.maxDate)
      ) || Y.value.months.includes(I.value), fe = D(B.value, I.value, c.year);
      return { active: y, disabled: H, highlighted: fe };
    })), G = j(() => S(c.years, (I) => {
      const y = c.year === I.value, H = L(
        I.value,
        $(O.value.minDate),
        $(O.value.maxDate)
      ) || Y.value.years.includes(I.value), fe = p(B.value, I.value);
      return { active: y, disabled: H, highlighted: fe };
    })), ce = (I, y, H) => {
      H === void 0 ? I.value = !I.value : I.value = H, I.value ? (x.value = !0, s("overlay-toggle", { open: !0, overlay: y })) : (x.value = !1, s("overlay-toggle", { open: !1, overlay: y }));
    }, le = (I = !1, y) => {
      ve(I), ce(re, He.month, y);
    }, we = (I = !1, y) => {
      ve(I), ce(X, He.year, y);
    }, ve = (I) => {
      I || o("reset-flow");
    }, Ae = j(() => [
      {
        type: Ge.month,
        index: 1,
        toggle: le,
        modelValue: q.value,
        updateModelValue: (I) => q.value = I,
        text: Z.value.text,
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
        updateModelValue: (I) => oe.value = I,
        text: F(c.year),
        showSelectionGrid: X.value,
        items: G.value,
        ariaLabel: v.value?.openYearsOverlay,
        overlayLabel: v.value.yearPicker?.(!0) ?? void 0
      }
    ]), Q = j(() => r.disableYearSelect ? [Ae.value[0]] : r.yearFirst ? [...Ae.value].reverse() : Ae.value);
    return A({
      toggleMonthPicker: le,
      toggleYearPicker: we,
      handleMonthYearChange: E
    }), (I, y) => (W(), J("div", vl, [
      I.$slots["month-year"] ? (W(), J("div", fl, [
        ae(I.$slots, "month-year", Ke(et({
          month: e.month,
          year: e.year,
          months: e.months,
          years: e.years,
          updateMonthYear: t(g),
          handleMonthYearChange: t(E),
          instance: e.instance,
          isDisabled: t(k)
        })))
      ])) : (W(), J(Te, { key: 1 }, [
        I.$slots["top-extra"] ? (W(), J("div", ml, [
          ae(I.$slots, "top-extra", { value: t(u) })
        ])) : ee("", !0),
        ye("div", pl, [
          t(_)(e.instance) && !t(r).vertical ? (W(), Se(Bt, {
            key: 0,
            "aria-label": t(v)?.prevMonth,
            disabled: t(ne)(t(k)(!1)),
            class: he(t(l)?.navBtnPrev),
            "el-name": "action-prev",
            onActivate: y[0] || (y[0] = (H) => t(E)(!1, !0))
          }, {
            default: be(() => [
              I.$slots["arrow-left"] ? ae(I.$slots, "arrow-left", { key: 0 }) : ee("", !0),
              I.$slots["arrow-left"] ? ee("", !0) : (W(), Se(t(Ca), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : ee("", !0),
          ye("div", {
            class: he(["dp__month_year_wrap", {
              dp__year_disable_select: t(r).disableYearSelect
            }])
          }, [
            (W(!0), J(Te, null, Re(Q.value, (H) => (W(), J(Te, {
              key: H.type
            }, [
              ye("button", {
                type: "button",
                "data-dp-element": `overlay-${H.type}`,
                class: he(["dp__btn dp__month_year_select", { "dp--hidden-el": x.value }]),
                "aria-label": `${H.text}-${H.ariaLabel}`,
                "data-test-id": `${H.type}-toggle-overlay-${e.instance}`,
                tabindex: "0",
                "data-dp-action-element": "0",
                onClick: (fe) => H.toggle(!1),
                onKeydown: (fe) => t(V)(fe, () => H.toggle(), !0)
              }, [
                I.$slots[H.type] ? ae(I.$slots, H.type, {
                  key: 0,
                  text: H.text,
                  value: c[H.type]
                }) : ee("", !0),
                I.$slots[H.type] ? ee("", !0) : (W(), J(Te, { key: 1 }, [
                  ut(Ne(H.text), 1)
                ], 64))
              ], 42, hl),
              Be(At, {
                name: t(w)(H.showSelectionGrid),
                css: t(h)
              }, {
                default: be(() => [
                  H.showSelectionGrid ? (W(), Se(Nt, {
                    key: 0,
                    items: H.items,
                    "is-last": t(r).autoApply && !t(P).keepActionRow,
                    "skip-button-ref": !1,
                    type: H.type,
                    "header-refs": [],
                    "menu-wrap-ref": e.menuWrapRef,
                    "overlay-label": H.overlayLabel,
                    onSelected: H.updateModelValue,
                    onToggle: H.toggle
                  }, Fe({
                    "button-icon": be(() => [
                      I.$slots["calendar-icon"] ? ae(I.$slots, "calendar-icon", { key: 0 }) : ee("", !0),
                      I.$slots["calendar-icon"] ? ee("", !0) : (W(), Se(t(Et), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    I.$slots[`${H.type}-overlay-value`] ? {
                      name: "item",
                      fn: be(({ item: fe }) => [
                        ae(I.$slots, `${H.type}-overlay-value`, {
                          text: fe.text,
                          value: fe.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    I.$slots[`${H.type}-overlay`] ? {
                      name: "overlay",
                      fn: be(() => [
                        ae(I.$slots, `${H.type}-overlay`, nt({ ref_for: !0 }, K.value(H.type)))
                      ]),
                      key: "1"
                    } : void 0,
                    I.$slots[`${H.type}-overlay-header`] ? {
                      name: "header",
                      fn: be(() => [
                        ae(I.$slots, `${H.type}-overlay-header`, {
                          toggle: H.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "is-last", "type", "menu-wrap-ref", "overlay-label", "onSelected", "onToggle"])) : ee("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          t(_)(e.instance) && t(r).vertical ? (W(), Se(Bt, {
            key: 1,
            "aria-label": t(v)?.prevMonth,
            "el-name": "action-prev",
            disabled: t(ne)(t(k)(!1)),
            class: he(t(l)?.navBtnPrev),
            onActivate: y[1] || (y[1] = (H) => t(E)(!1, !0))
          }, {
            default: be(() => [
              I.$slots["arrow-up"] ? ae(I.$slots, "arrow-up", { key: 0 }) : ee("", !0),
              I.$slots["arrow-up"] ? ee("", !0) : (W(), Se(t(Ya), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : ee("", !0),
          t(b)(e.instance) ? (W(), Se(Bt, {
            key: 2,
            ref: "rightIcon",
            "el-name": "action-next",
            disabled: t(ne)(t(k)(!0)),
            "aria-label": t(v)?.nextMonth,
            class: he(t(l)?.navBtnNext),
            onActivate: y[2] || (y[2] = (H) => t(E)(!0, !0))
          }, {
            default: be(() => [
              I.$slots[t(r).vertical ? "arrow-down" : "arrow-right"] ? ae(I.$slots, t(r).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : ee("", !0),
              I.$slots[t(r).vertical ? "arrow-down" : "arrow-right"] ? ee("", !0) : (W(), Se(pa(t(r).vertical ? t(Ba) : t(xa)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label", "class"])) : ee("", !0)
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, {
      getDate: s,
      rootEmit: r,
      rootProps: u,
      defaults: { transitions: v, config: Y, ariaLabels: P, multiCalendars: B, weekNumbers: O, multiDates: l, ui: w }
    } = Me(), { isDateAfter: h, isDateEqual: _, resetDateTime: b, getCellId: E } = We(), { checkKeyDown: k, checkStopPropagation: g, isTouchDevice: M } = Ie(), { formatWeekDay: R } = pt(), $ = xe("calendar-wrap"), S = xe("active-tooltip"), p = ie([]), D = ie(null), V = ie(!0), F = ie(!1), L = ie(""), ne = ie({
      bottom: "",
      left: "",
      transform: ""
    }), re = ie({ left: "50%" });
    un($, {
      onSwipeEnd: (d, a) => {
        Y.value.noSwipe || (u.vertical ? (a === "up" || a === "down") && o("handle-swipe", a === "up" ? "left" : "right") : (a === "left" || a === "right") && o("handle-swipe", a === "right" ? "left" : "right"));
      }
    });
    const X = j(() => u.calendar ? u.calendar(c.mappedDates) : c.mappedDates), x = j(() => u.dayNames ? Array.isArray(u.dayNames) ? u.dayNames : u.dayNames() : i());
    Ee(() => {
      o("mount", { cmp: "calendar", dayRefs: p.value }), Y.value.monthChangeOnScroll && $.value && $.value.addEventListener("wheel", I, { passive: !1 });
    }), kt(() => {
      Y.value.monthChangeOnScroll && $.value && $.value.removeEventListener("wheel", I);
    });
    const te = (d) => d ? u.vertical ? "vNext" : "next" : u.vertical ? "vPrevious" : "previous", q = (d, a) => {
      if (u.transitions) {
        const n = b(De(s(), { month: c.month, year: c.year }));
        L.value = h(b(De(s(), { month: d, year: a })), n) ? v.value[te(!0)] : v.value[te(!1)], V.value = !1, je(() => {
          V.value = !0;
        });
      }
    }, oe = j(
      () => ({
        ...w.value.calendar
      })
    ), K = (d) => ({ type: "dot", ...d }), Z = j(() => (d) => {
      const a = K(d);
      return {
        dp__marker_dot: a.type === "dot",
        dp__marker_line: a.type === "line"
      };
    }), de = j(() => (d) => _(d, D.value)), G = j(() => ({
      dp__calendar: !0,
      dp__calendar_next: B.value.count > 0 && c.instance !== 0
    })), ce = j(() => (d) => u.hideOffsetDates ? d.current : !0), le = async (d, a) => {
      const { width: n, height: C } = d.getBoundingClientRect();
      D.value = a.value;
      let m = { left: `${n / 2}px` }, N = -50;
      if (await je(), S.value?.[0]) {
        const { left: U, width: pe } = S.value[0].getBoundingClientRect();
        U < 0 && (m = { left: "0" }, N = 0, re.value.left = `${n / 2}px`), globalThis.innerWidth < U + pe && (m = { right: "0" }, N = 0, re.value.left = `${pe - n / 2}px`);
      }
      ne.value = {
        bottom: `${C}px`,
        ...m,
        transform: `translateX(${N}%)`
      };
    }, we = async (d, a, n) => {
      const C = vt(p.value?.[a]?.[n]);
      C && (d.marker?.customPosition && d.marker?.tooltip?.length ? ne.value = d.marker.customPosition(C) : await le(C, d), r("tooltip-open", d.marker));
    }, ve = async (d, a, n) => {
      if (F.value && l.value.enabled && l.value.dragSelect)
        return o("select-date", d);
      if (o("set-hover-date", d), d.marker?.tooltip?.length) {
        if (u.hideOffsetDates && !d.current) return;
        await we(d, a, n);
      }
    }, Ae = (d) => {
      D.value && (D.value = null, ne.value = structuredClone({ bottom: "", left: "", transform: "" }), r("tooltip-close", d.marker));
    }, Q = (d, a, n) => {
      d && (Array.isArray(p.value[a]) ? p.value[a][n] = d : p.value[a] = [d]);
    }, I = (d) => {
      Y.value.monthChangeOnScroll && (d.preventDefault(), o("handle-scroll", d));
    }, y = (d) => O.value ? O.value.type === "local" ? Tn(d.value, {
      weekStartsOn: +u.weekStart,
      locale: u.locale
    }) : O.value.type === "iso" ? $n(d.value) : typeof O.value.type == "function" ? O.value.type(d.value) : "" : "", H = (d) => {
      const a = d[0];
      return O.value?.hideOnOffsetDates ? d.some((n) => n.current) ? y(a) : "" : y(a);
    }, fe = (d, a, n = !0) => {
      !n && M() || (!l.value.enabled || Y.value.allowPreventDefault) && (g(d, Y.value), o("select-date", a));
    }, Pe = (d) => {
      g(d, Y.value);
    }, Ce = (d) => {
      l.value.enabled && l.value.dragSelect ? (F.value = !0, o("select-date", d)) : l.value.enabled && o("select-date", d);
    }, i = () => {
      const d = s(), a = Xt(d, { locale: u.locale, weekStartsOn: +u.weekStart }), n = ga(d, { locale: u.locale, weekStartsOn: +u.weekStart });
      return ha({ start: a, end: n }).map((m) => R(m));
    };
    return A({ triggerTransition: q }), (d, a) => (W(), J("div", {
      class: he(G.value)
    }, [
      ye("div", {
        ref: "calendar-wrap",
        class: he(oe.value),
        role: "grid"
      }, [
        ye("div", yl, [
          t(O) ? (W(), J("div", bl, Ne(t(O).label), 1)) : ee("", !0),
          (W(!0), J(Te, null, Re(x.value, (n, C) => (W(), J("div", {
            key: C,
            class: "dp__calendar_header_item",
            role: "gridcell",
            "data-test-id": "calendar-header",
            "aria-label": t(P)?.weekDay?.(C)
          }, [
            ae(d.$slots, "calendar-header", {
              day: n,
              index: C
            }, () => [
              ut(Ne(n), 1)
            ])
          ], 8, kl))), 128))
        ]),
        a[2] || (a[2] = ye("div", { class: "dp__calendar_header_separator" }, null, -1)),
        Be(At, {
          name: L.value,
          css: !!t(v)
        }, {
          default: be(() => [
            V.value ? (W(), J("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: a[1] || (a[1] = (n) => F.value = !1)
            }, [
              (W(!0), J(Te, null, Re(X.value, (n, C) => (W(), J("div", {
                key: C,
                class: "dp__calendar_row",
                role: "row"
              }, [
                t(O) ? (W(), J("div", wl, [
                  ye("div", Dl, Ne(H(n.days)), 1)
                ])) : ee("", !0),
                (W(!0), J(Te, null, Re(n.days, (m, N) => (W(), J("div", {
                  id: t(E)(m.value),
                  ref_for: !0,
                  ref: (U) => Q(U, C, N),
                  key: N + C,
                  role: "gridcell",
                  class: "dp__calendar_item",
                  "aria-selected": (m.classData.dp__active_date || m.classData.dp__range_start || m.classData.dp__range_end) ?? void 0,
                  "aria-disabled": m.classData.dp__cell_disabled || void 0,
                  "aria-label": t(P)?.day?.(m),
                  tabindex: !m.current && t(u).hideOffsetDates ? void 0 : 0,
                  "data-test-id": t(E)(m.value),
                  "data-dp-element-active": m.classData.dp__active_date ? 0 : void 0,
                  "data-dp-action-element": "0",
                  onClick: _t((U) => fe(U, m), ["prevent"]),
                  onTouchend: (U) => fe(U, m, !1),
                  onKeydown: (U) => t(k)(U, () => d.$emit("select-date", m)),
                  onMouseenter: (U) => ve(m, C, N),
                  onMouseleave: (U) => Ae(m),
                  onMousedown: (U) => Ce(m),
                  onMouseup: a[0] || (a[0] = (U) => F.value = !1)
                }, [
                  ye("div", {
                    class: he(["dp__cell_inner", m.classData])
                  }, [
                    d.$slots.day && ce.value(m) ? ae(d.$slots, "day", {
                      key: 0,
                      day: +m.text,
                      date: m.value
                    }) : ee("", !0),
                    d.$slots.day ? ee("", !0) : (W(), J(Te, { key: 1 }, [
                      ut(Ne(m.text), 1)
                    ], 64)),
                    m.marker && ce.value(m) ? ae(d.$slots, "marker", {
                      key: 2,
                      marker: m.marker,
                      day: +m.text,
                      date: m.value
                    }, () => [
                      ye("div", {
                        class: he(Z.value(m.marker)),
                        style: ze(m.marker.color ? { backgroundColor: m.marker.color } : {})
                      }, null, 6)
                    ]) : ee("", !0),
                    de.value(m.value) ? (W(), J("div", {
                      key: 3,
                      ref_for: !0,
                      ref: "active-tooltip",
                      class: "dp__marker_tooltip",
                      style: ze(ne.value)
                    }, [
                      m.marker?.tooltip ? (W(), J("div", {
                        key: 0,
                        class: "dp__tooltip_content",
                        onClick: Pe
                      }, [
                        (W(!0), J(Te, null, Re(m.marker.tooltip, (U, pe) => (W(), J("div", {
                          key: pe,
                          class: "dp__tooltip_text"
                        }, [
                          ae(d.$slots, "marker-tooltip", {
                            tooltip: U,
                            day: m.value
                          }, () => [
                            ye("div", {
                              class: "dp__tooltip_mark",
                              style: ze(U.color ? { backgroundColor: U.color } : {})
                            }, null, 4),
                            ye("div", null, Ne(U.text), 1)
                          ])
                        ]))), 128)),
                        ye("div", {
                          class: "dp__arrow_bottom_tp",
                          style: ze(re.value)
                        }, null, 4)
                      ])) : ee("", !0)
                    ], 4)) : ee("", !0)
                  ], 2)
                ], 40, Ml))), 128))
              ]))), 128))
            ], 32)) : ee("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Al = (e, A, f, o) => {
  const c = ie([]), s = ie(/* @__PURE__ */ new Date()), r = ie(), {
    getDate: u,
    rootEmit: v,
    calendars: Y,
    month: P,
    year: B,
    time: O,
    modelValue: l,
    rootProps: w,
    today: h,
    state: _,
    defaults: { multiCalendars: b, startTime: E, range: k, config: g, safeDates: M, multiDates: R, timeConfig: $, flow: S }
  } = Me(), { validateMonthYearInRange: p, isDisabled: D, isDateRangeAllowed: V, checkMinMaxRange: F } = Ue(), { updateTimeValues: L, getSetDateTime: ne, assignTime: re, assignStartTime: X, validateTime: x, disabledTimesConfig: te } = Ha(o), { formatDay: q } = pt(), { resetDateTime: oe, setTime: K, isDateBefore: Z, isDateEqual: de, getDaysInBetween: G } = We(), { checkRangeAutoApply: ce, getRangeWithFixedDate: le, handleMultiDatesSelect: we, setPresetDate: ve } = na(), { getMapDate: Ae } = Ie();
  Ft(() => Ce(_.isTextInputDate));
  const Q = (T) => !g.value.keepViewOnOffsetClick || T ? !0 : !r.value, I = (T, z, ue, ke = !1) => {
    Q(ke) && (Y.value[T] ??= Y.value[T] = { month: 0, year: 0 }, Y.value[T].month = z ?? Y.value[T]?.month, Y.value[T].year = ue ?? Y.value[T]?.year);
  }, y = () => {
    w.autoApply && A("select-date");
  }, H = () => {
    E.value && X(E.value);
  };
  Ee(() => {
    l.value || (Tt(), H()), Ce(!0), w.focusStartDate && w.startDate && Tt();
  });
  const fe = j(() => S.value?.steps?.length && !S.value?.partial ? e.flowStep === S.value.steps.length : !0), Pe = () => {
    w.autoApply && fe.value && A("auto-apply", S.value?.partial ? e.flowStep !== S.value?.steps?.length : !1);
  }, Ce = (T = !1) => {
    if (l.value)
      return Array.isArray(l.value) ? (c.value = l.value, U(T)) : n(l.value, T);
    if (b.value.count && T && !w.startDate)
      return a(u(), T);
  }, i = () => Array.isArray(l.value) && k.value.enabled ? _e(l.value[0]) === _e(l.value[1] ?? l.value[0]) : !1, d = (T) => {
    const z = yt(T, 1);
    return { month: _e(z), year: me(z) };
  }, a = (T = u(), z = !1) => {
    if ((!b.value.count || !b.value.static || z) && I(0, _e(T), me(T)), b.value.count && (!l.value || i() || !b.value.solo) && (!b.value.solo || z))
      for (let ue = 1; ue < b.value.count; ue++) {
        const ke = De(u(), { month: P.value(ue - 1), year: B.value(ue - 1) }), Oe = Ra(ke, { months: 1 });
        Y.value[ue] = { month: _e(Oe), year: me(Oe) };
      }
  }, n = (T, z) => {
    a(T), re("hours", ot(T)), re("minutes", it(T)), re("seconds", ft(T)), b.value.count && z && Qe();
  }, C = (T) => {
    if (b.value.count) {
      if (b.value.solo) return 0;
      const z = _e(T[0]), ue = _e(T[1]);
      return Math.abs(ue - z) < b.value.count ? 0 : 1;
    }
    return 1;
  }, m = (T, z) => {
    T[1] && k.value.showLastInRange ? a(T[C(T)], z) : a(T[0], z);
    const ue = (ke, Oe) => [
      ke(T[0]),
      T?.[1] ? ke(T[1]) : O[Oe][1]
    ];
    re("hours", ue(ot, "hours")), re("minutes", ue(it, "minutes")), re("seconds", ue(ft, "seconds"));
  }, N = (T, z) => {
    if ((k.value.enabled || w.weekPicker) && !R.value.enabled)
      return m(T, z);
    if (R.value.enabled && z) {
      const ue = T[T.length - 1];
      return n(ue, z);
    }
  }, U = (T) => {
    const z = l.value;
    N(z, T), b.value.count && b.value.solo && Qe();
  }, pe = (T, z) => {
    const ue = De(u(), { month: P.value(z), year: B.value(z) }), ke = T < 0 ? yt(ue, 1) : It(ue, 1);
    p(_e(ke), me(ke), T < 0, w.preventMinMaxNavigation) && (I(z, _e(ke), me(ke)), v("update-month-year", { instance: z, month: _e(ke), year: me(ke) }), b.value.count && !b.value.solo && ge(z), f());
  }, ge = (T) => {
    for (let z = T - 1; z >= 0; z--) {
      const ue = It(De(u(), { month: P.value(z + 1), year: B.value(z + 1) }), 1);
      I(z, _e(ue), me(ue));
    }
    for (let z = T + 1; z <= b.value.count - 1; z++) {
      const ue = yt(De(u(), { month: P.value(z - 1), year: B.value(z - 1) }), 1);
      I(z, _e(ue), me(ue));
    }
  }, Qe = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const T = u(u(l.value[1] ?? yt(l.value[0], 1))), [z, ue] = [_e(l.value[0]), me(l.value[0])], [ke, Oe] = [_e(l.value[1]), me(l.value[1])];
      (z !== ke || z === ke && ue !== Oe) && b.value.solo && I(1, _e(T), me(T));
    } else l.value && !Array.isArray(l.value) && (I(0, _e(l.value), me(l.value)), a(u()));
  }, Tt = () => {
    w.startDate && (I(0, _e(u(w.startDate)), me(u(w.startDate))), b.value.count && ge(0));
  }, Wt = (T, z) => {
    if (g.value.monthChangeOnScroll) {
      const ue = Date.now() - s.value.getTime(), ke = Math.abs(T.deltaY);
      let Oe = 500;
      ke > 1 && (Oe = 100), ke > 100 && (Oe = 0), ue > Oe && (s.value = /* @__PURE__ */ new Date(), pe(
        g.value.monthChangeOnScroll === "inverse" ? T.deltaY : -T.deltaY,
        z
      ));
    }
  }, ra = (T, z, ue = !1) => {
    g.value.monthChangeOnArrows && w.vertical === ue && Lt(T, z);
  }, Lt = (T, z) => {
    pe(T === "right" ? -1 : 1, z);
  }, la = (T) => {
    if (M.value.markers)
      return Ae(T.value, M.value.markers);
  }, oa = (T, z) => {
    switch (w.sixWeeks === !0 ? "append" : w.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [T == 0, !0];
      case "fair":
        return [T == 0 || z > T, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, sa = (T, z, ue, ke) => {
    if (w.sixWeeks && T.length < 6) {
      const Oe = 6 - T.length, ct = (z.getDay() + 7 - ke) % 7, Kt = 6 - (ue.getDay() + 7 - ke) % 7, [Ct, da] = oa(ct, Kt);
      for (let gt = 1; gt <= Oe; gt++)
        if (da ? !!(gt % 2) == Ct : Ct) {
          const zt = T[0].days[0], va = $t(dt(zt.value, -7), _e(z));
          T.unshift({ days: va });
        } else {
          const zt = T[T.length - 1], va = zt.days[zt.days.length - 1], en = $t(dt(va.value, 1), _e(z));
          T.push({ days: en });
        }
    }
    return T;
  }, $t = (T, z) => {
    const ue = u(T), ke = [];
    for (let Oe = 0; Oe < 7; Oe++) {
      const ct = dt(ue, Oe), Rt = _e(ct) !== z;
      ke.push({
        text: w.hideOffsetDates && Rt ? "" : q(ct),
        value: ct,
        current: !Rt,
        classData: {}
      });
    }
    return ke;
  }, ua = (T, z) => {
    const ue = [], ke = u(new Date(z, T)), Oe = u(new Date(z, T + 1, 0)), ct = w.weekStart, Rt = Xt(ke, { weekStartsOn: ct }), Kt = (Ct) => {
      const da = $t(Ct, T);
      if (ue.push({ days: da }), !ue[ue.length - 1].days.some((gt) => de(u(gt.value), oe(Oe)))) {
        const gt = dt(Ct, 7);
        Kt(gt);
      }
    };
    return Kt(Rt), sa(ue, ke, Oe, ct);
  }, ia = (T) => {
    const z = K(
      { hours: O.hours, minutes: O.minutes, seconds: jt() },
      u(T.value)
    );
    v("date-click", z), R.value.enabled ? we(z, R.value.limit) : l.value = z, o(), je().then(() => {
      Pe();
    });
  }, Ht = (T) => k.value.noDisabledRange ? G(c.value[0], T).some((ue) => D(ue)) : !1, se = () => {
    c.value = l.value ? l.value.slice().filter((T) => !!T) : [], c.value.length === 2 && !(k.value.fixedStart || k.value.fixedEnd) && (c.value = []);
  }, Le = (T, z) => {
    const ue = [u(T.value), dt(u(T.value), +k.value.autoRange)];
    V(ue) ? (z && Je(T.value), c.value = ue) : v("invalid-date", T.value);
  }, Je = (T) => {
    const z = _e(u(T)), ue = me(u(T));
    if (I(0, z, ue), b.value.count > 0)
      for (let ke = 1; ke < b.value.count; ke++) {
        const Oe = d(
          De(u(T), { year: B.value(ke - 1), month: P.value(ke - 1) })
        );
        I(ke, Oe.month, Oe.year);
      }
  }, St = (T) => {
    if (Ht(T.value) || !F(T.value, l.value, k.value.fixedStart ? 0 : 1))
      return v("invalid-date", T.value);
    c.value = le(u(T.value));
  }, ht = (T, z) => {
    if (se(), k.value.autoRange) return Le(T, z);
    if (k.value.fixedStart || k.value.fixedEnd) return St(T);
    c.value[0] ? F(u(T.value), l.value) && !Ht(T.value) ? Z(u(T.value), u(c.value[0])) ? k.value.autoSwitchStartEnd ? (c.value.unshift(u(T.value)), v("range-end", c.value[0])) : (c.value[0] = u(T.value), v("range-start", c.value[0])) : (c.value[1] = u(T.value), v("range-end", c.value[1])) : v("invalid-date", T.value) : (c.value[0] = u(T.value), v("range-start", c.value[0]));
  }, jt = (T = !0) => $.value.enableSeconds ? Array.isArray(O.seconds) ? T ? O.seconds[0] : O.seconds[1] : O.seconds : 0, ca = (T) => {
    c.value[T] = K(
      {
        hours: O.hours[T],
        minutes: O.minutes[T],
        seconds: jt(T !== 1)
      },
      c.value[T]
    );
  }, ja = () => {
    c.value[0] && c.value[1] && +c.value?.[0] > +c.value?.[1] && (c.value.reverse(), v("range-start", c.value[0]), v("range-end", c.value[1]));
  }, Ka = () => {
    c.value.length && (c.value[0] && !c.value[1] ? ca(0) : (ca(0), ca(1), o()), ja(), l.value = c.value.slice(), ce(
      c.value,
      A,
      c.value.length < 2 || S.value?.steps.length ? e.flowStep !== S.value?.steps?.length : !1
    ));
  }, za = (T, z = !1) => {
    if (D(T.value) || !T.current && w.hideOffsetDates)
      return v("invalid-date", T.value);
    if (r.value = structuredClone(T), !k.value.enabled) return ia(T);
    Array.isArray(O.hours) && Array.isArray(O.minutes) && !R.value.enabled && (ht(T, z), Ka());
  }, qa = (T, z) => {
    I(T, z.month, z.year, !0), b.value.count && !b.value.solo && ge(T), v("update-month-year", { instance: T, month: z.month, year: z.year }), f(b.value.solo ? T : void 0);
    const ue = S.value?.steps?.length ? S.value.steps[e.flowStep] : void 0;
    !z.fromNav && (ue === He.month || ue === He.year) && o();
  }, Ua = (T) => {
    ve({
      value: T
    }), y(), w.multiCalendars && je().then(() => Ce(!0));
  }, Qa = () => {
    let T = u();
    return w.actionRow?.nowBtnRound && (T = Sn(T, {
      roundingMethod: w.actionRow.nowBtnRound.rounding ?? "ceil",
      nearestTo: w.actionRow.nowBtnRound.roundTo ?? 15
    })), T;
  }, Ja = () => {
    const T = Qa();
    !k.value.enabled && !R.value.enabled ? l.value = T : l.value && Array.isArray(l.value) && l.value[0] ? R.value.enabled ? l.value = [...l.value, T] : l.value = Z(T, l.value[0]) ? [T, l.value[0]] : [l.value[0], T] : l.value = [T], y();
  }, Ga = () => {
    if (Array.isArray(l.value))
      if (R.value.enabled) {
        const T = Xa();
        l.value[l.value.length - 1] = ne(T);
      } else
        l.value = l.value.map((T, z) => T && ne(T, z));
    else
      l.value = ne(l.value);
    A("time-update");
  }, Xa = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null, Za = (T) => {
    let z = "";
    if (k.value.enabled && Array.isArray(l.value))
      for (const ue of Object.keys(T)) {
        const ke = T[ue];
        Array.isArray(ke) && (O[ue][0] !== ke[0] && (z = "range-start"), O[ue][1] !== ke[1] && (z = "range-start"));
      }
    return z;
  };
  return {
    calendars: Y,
    modelValue: l,
    month: P,
    year: B,
    time: O,
    disabledTimesConfig: te,
    today: h,
    validateTime: x,
    getCalendarDays: ua,
    getMarker: la,
    handleScroll: Wt,
    handleSwipe: Lt,
    handleArrow: ra,
    selectDate: za,
    updateMonthYear: qa,
    presetDate: Ua,
    selectCurrentDate: Ja,
    updateTime: (T) => {
      const z = Za(T);
      L(T, Ga), z && v(z, l.value[z === "range-start" ? 0 : 1]);
    },
    assignMonthAndYear: a,
    setStartTime: H
  };
}, Pl = () => {
  const {
    isModelAuto: e,
    matchDate: A,
    isDateAfter: f,
    isDateBefore: o,
    isDateBetween: c,
    isDateEqual: s,
    getWeekFromDate: r,
    getBeforeAndAfterInRange: u
  } = We(), {
    getDate: v,
    today: Y,
    rootProps: P,
    defaults: { multiCalendars: B, multiDates: O, ui: l, highlight: w, safeDates: h, range: _ },
    modelValue: b
  } = Me(), { isDisabled: E } = Ue(), k = ie(null), g = (a) => {
    !a.current && P.hideOffsetDates || (k.value = a.value);
  }, M = () => {
    k.value = null;
  }, R = (a) => Array.isArray(b.value) && _.value.enabled && b.value[0] && k.value ? a ? f(k.value, b.value[0]) : o(k.value, b.value[0]) : !0, $ = (a, n) => {
    const C = () => b.value ? n ? b.value[0] || null : b.value[1] : null, m = b.value && Array.isArray(b.value) ? C() : null;
    return s(v(a.value), m);
  }, S = (a) => {
    const n = Array.isArray(b.value) ? b.value[0] : null;
    return a ? !o(k.value, n) : !0;
  }, p = (a, n = !0) => (_.value.enabled || P.weekPicker) && Array.isArray(b.value) && b.value.length === 2 ? P.hideOffsetDates && !a.current ? !1 : s(v(a.value), b.value[n ? 0 : 1]) : _.value.enabled ? $(a, n) && S(n) || s(a.value, Array.isArray(b.value) ? b.value[0] : null) && R(n) : !1, D = (a, n) => {
    if (Array.isArray(b.value) && b.value[0] && b.value.length === 1) {
      const C = s(a.value, k.value);
      return n ? f(b.value[0], a.value) && C : o(b.value[0], a.value) && C;
    }
    return !1;
  }, V = (a) => !b.value || P.hideOffsetDates && !a.current ? !1 : _.value.enabled ? P.modelAuto && Array.isArray(b.value) ? s(a.value, b.value[0] ?? Y) : !1 : O.value.enabled && Array.isArray(b.value) ? b.value.some((n) => s(n, a.value)) : s(a.value, b.value ? b.value : Y), F = (a) => {
    if (_.value.autoRange || P.weekPicker) {
      if (k.value) {
        if (P.hideOffsetDates && !a.current) return !1;
        const n = dt(k.value, +_.value.autoRange), C = r(v(k.value), P.weekStart);
        return P.weekPicker ? s(C[1], v(a.value)) : s(n, v(a.value));
      }
      return !1;
    }
    return !1;
  }, L = (a) => {
    if (_.value.autoRange || P.weekPicker) {
      if (k.value) {
        const n = dt(k.value, +_.value.autoRange);
        if (P.hideOffsetDates && !a.current) return !1;
        const C = r(v(k.value), P.weekStart);
        return P.weekPicker ? f(a.value, C[0]) && o(a.value, C[1]) : f(a.value, k.value) && o(a.value, n);
      }
      return !1;
    }
    return !1;
  }, ne = (a) => {
    if (_.value.autoRange || P.weekPicker) {
      if (k.value) {
        if (P.hideOffsetDates && !a.current) return !1;
        const n = r(v(k.value), P.weekStart);
        return P.weekPicker ? s(n[0], a.value) : s(k.value, a.value);
      }
      return !1;
    }
    return !1;
  }, re = (a) => c(b.value, k.value, a.value), X = () => P.modelAuto && Array.isArray(b.value) ? !!b.value[0] : !1, x = () => P.modelAuto ? e(b.value) : !0, te = (a) => {
    if (P.weekPicker) return !1;
    const n = _.value.enabled ? !p(a) && !p(a, !1) : !0;
    return !E(a.value) && !V(a) && !(!a.current && P.hideOffsetDates) && n;
  }, q = (a) => _.value.enabled ? P.modelAuto ? X() && V(a) : !1 : V(a), oe = (a) => w.value ? A(a.value, h.value.highlight) : !1, K = (a) => {
    const n = E(a.value);
    return n && (typeof w.value == "function" ? !w.value(a.value, n) : !w.value.options.highlightDisabled);
  }, Z = (a) => typeof w.value == "function" ? w.value(a.value) : w.value.weekdays?.includes(a.value.getDay()), de = (a) => (_.value.enabled || P.weekPicker) && (!(B.value.count > 0) || a.current) && x() && !(!a.current && P.hideOffsetDates) && !V(a) ? re(a) : !1, G = (a) => {
    if (Array.isArray(b.value) && b.value.length === 1) {
      const { before: n, after: C } = u(+_.value.maxRange, b.value[0]);
      return st(a.value, n) || rt(a.value, C);
    }
    return !1;
  }, ce = (a) => {
    if (Array.isArray(b.value) && b.value.length === 1) {
      const { before: n, after: C } = u(+_.value.minRange, b.value[0]);
      return c([n, C], b.value[0], a.value);
    }
    return !1;
  }, le = (a) => _.value.enabled && (_.value.maxRange || _.value.minRange) ? _.value.maxRange && _.value.minRange ? G(a) || ce(a) : _.value.maxRange ? G(a) : ce(a) : !1, we = (a) => {
    const { isRangeStart: n, isRangeEnd: C } = I(a), m = _.value.enabled ? n || C : !1;
    return {
      dp__cell_offset: !a.current,
      dp__pointer: !P.disabled && !(!a.current && P.hideOffsetDates) && !E(a.value) && !le(a),
      dp__cell_disabled: E(a.value) || le(a),
      dp__cell_highlight: !K(a) && (oe(a) || Z(a)) && !q(a) && !m && !ne(a) && !(de(a) && P.weekPicker) && !C,
      dp__cell_highlight_active: !K(a) && (oe(a) || Z(a)) && q(a),
      dp__today: !P.noToday && s(a.value, Y) && a.current,
      "dp--past": o(a.value, Y),
      "dp--future": f(a.value, Y)
    };
  }, ve = (a) => ({
    dp__active_date: q(a),
    dp__date_hover: te(a)
  }), Ae = (a) => {
    if (b.value && !Array.isArray(b.value)) {
      const n = r(b.value, P.weekStart);
      return {
        ...Ce(a),
        dp__range_start: s(n[0], a.value),
        dp__range_end: s(n[1], a.value),
        dp__range_between_week: f(a.value, n[0]) && o(a.value, n[1])
      };
    }
    return {
      ...Ce(a)
    };
  }, Q = (a) => {
    if (b.value && Array.isArray(b.value)) {
      const n = r(b.value[0], P.weekStart), C = b.value[1] ? r(b.value[1], P.weekStart) : [];
      return {
        ...Ce(a),
        dp__range_start: s(n[0], a.value) || s(C[0], a.value),
        dp__range_end: s(n[1], a.value) || s(C[1], a.value),
        dp__range_between_week: f(a.value, n[0]) && o(a.value, n[1]) || f(a.value, C[0]) && o(a.value, C[1]),
        dp__range_between: f(a.value, n[1]) && o(a.value, C[0])
      };
    }
    return {
      ...Ce(a)
    };
  }, I = (a) => {
    const n = B.value.count > 0 ? a.current && p(a) && x() : p(a) && x(), C = B.value.count > 0 ? a.current && p(a, !1) && x() : p(a, !1) && x();
    return { isRangeStart: n, isRangeEnd: C };
  }, y = (a) => _.value.enabled && (_.value.fixedStart || _.value.fixedEnd) && Array.isArray(b.value) && b.value.length === 2, H = (a, n, C, m) => !y(b.value) || !k.value ? !1 : n ? _.value.fixedEnd && s(a.value, k.value) && st(a.value, b.value[0]) && !C : _.value.fixedStart && s(a.value, k.value) && rt(a.value, b.value[1]) && !m, fe = (a, n) => !y(b.value) || !k.value ? !1 : n ? _.value.fixedEnd && rt(a.value, k.value) && st(a.value, b.value[0]) : _.value.fixedStart && st(a.value, k.value) && rt(a.value, b.value[1]), Pe = (a) => {
    const { isRangeStart: n, isRangeEnd: C } = I(a);
    return {
      dp__range_start: n,
      dp__range_end: C,
      dp__range_between: de(a),
      dp__date_hover: s(a.value, k.value) && !n && !C && !P.weekPicker,
      dp__date_hover_start: D(a, !0) || H(a, !0, n, C),
      dp__date_hover_end: D(a, !1) || H(a, !1, n, C),
      "dp--extended-fixed-start": fe(a, !0),
      "dp--extended-fixed-end": fe(a, !1)
    };
  }, Ce = (a) => ({
    ...Pe(a),
    dp__cell_auto_range: L(a),
    dp__cell_auto_range_start: ne(a),
    dp__cell_auto_range_end: F(a)
  }), i = (a) => _.value.enabled ? _.value.autoRange ? Ce(a) : P.modelAuto ? { ...ve(a), ...Pe(a) } : P.weekPicker ? Q(a) : Pe(a) : P.weekPicker ? Ae(a) : ve(a);
  return {
    setHoverDate: g,
    clearHoverDate: M,
    getDayClassData: (a) => P.hideOffsetDates && !a.current ? {} : {
      ...we(a),
      ...i(a),
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, {
      month: s,
      year: r,
      modelValue: u,
      time: v,
      disabledTimesConfig: Y,
      today: P,
      validateTime: B,
      getCalendarDays: O,
      getMarker: l,
      handleArrow: w,
      handleScroll: h,
      handleSwipe: _,
      selectDate: b,
      updateMonthYear: E,
      presetDate: k,
      selectCurrentDate: g,
      updateTime: M,
      assignMonthAndYear: R,
      setStartTime: $
    } = Al(c, o, ve, Ae), S = mt(), { setHoverDate: p, getDayClassData: D, clearHoverDate: V } = Pl(), {
      getDate: F,
      rootEmit: L,
      rootProps: ne,
      defaults: { multiCalendars: re, timeConfig: X }
    } = Me(), { getYears: x, getMonths: te } = ea(), { getCellId: q } = We(), oe = xe("calendar-header"), K = xe("calendar"), Z = xe("time-picker"), de = lt(S, at.Calendar), G = lt(S, at.DatePickerHeader), ce = lt(S, at.TimePicker), le = (d) => {
      o("mount", d);
    };
    tt(
      re,
      (d, a) => {
        d.count - a.count > 0 && R();
      },
      { deep: !0 }
    );
    const we = j(() => (d) => O(s.value(d), r.value(d)).map((a) => ({
      ...a,
      days: a.days.map((n) => (n.marker = l(n), n.classData = D(n), n))
    })));
    function ve(d) {
      d || d === 0 ? K.value?.[d]?.triggerTransition(s.value(d), r.value(d)) : K.value?.forEach((a, n) => a?.triggerTransition(s.value(n), r.value(n)));
    }
    function Ae() {
      o("update-flow-step");
    }
    const Q = (d, a, n = 0) => {
      oe.value?.[n]?.toggleMonthPicker(d, a);
    }, I = (d, a, n = 0) => {
      oe.value?.[n]?.toggleYearPicker(d, a);
    }, y = (d, a, n) => {
      Z.value?.toggleTimePicker(d, a, n);
    }, H = (d, a) => {
      if (!ne.range) {
        const n = u.value ? u.value : P, C = a ? F(a) : n, m = d ? Xt(C, { weekStartsOn: 1 }) : ga(C, { weekStartsOn: 1 });
        b({
          value: m,
          current: _e(C) === s.value(0),
          text: "",
          classData: {}
        }), document.getElementById(q(m))?.focus();
      }
    }, fe = (d) => {
      oe.value?.[0]?.handleMonthYearChange(d, !0);
    }, Pe = (d) => {
      E(0, { month: s.value(0), year: r.value(0) + (d ? 1 : -1), fromNav: !0 });
    }, Ce = (d) => {
      L("overlay-toggle", { open: !1, overlay: d }), o("focus-menu");
    };
    return A({
      clearHoverDate: V,
      presetDate: k,
      selectCurrentDate: g,
      handleArrow: w,
      updateMonthYear: E,
      setStartTime: $,
      toggleMonthPicker: Q,
      toggleYearPicker: I,
      toggleTimePicker: y,
      getSidebarProps: () => ({
        modelValue: u,
        month: s,
        year: r,
        time: v,
        updateTime: M,
        updateMonthYear: E,
        selectDate: b,
        presetDate: k
      }),
      changeMonth: fe,
      changeYear: Pe,
      selectWeekDate: H
    }), (d, a) => (W(), J(Te, null, [
      Be(aa, { collapse: e.collapse }, {
        default: be(({ instances: n, wrapClass: C }) => [
          (W(!0), J(Te, null, Re(n, (m) => (W(), J("div", {
            key: m,
            class: he(C)
          }, [
            t(ne).hideMonthYearSelect ? ee("", !0) : (W(), Se(gl, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: t(te)(),
              years: t(x)(),
              month: t(s)(m),
              year: t(r)(m),
              instance: m,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: a[0] || (a[0] = (N) => le(t(bt).header)),
              onResetFlow: a[1] || (a[1] = (N) => d.$emit("reset-flow")),
              onUpdateMonthYear: (N) => t(E)(m, N),
              onOverlayClosed: Ce
            }, Fe({ _: 2 }, [
              Re(t(G), (N, U) => ({
                name: N,
                fn: be((pe) => [
                  ae(d.$slots, N, nt({ ref_for: !0 }, pe))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            Be(_l, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": we.value(m),
              instance: m,
              month: t(s)(m),
              year: t(r)(m),
              onSelectDate: (N) => t(b)(N, m !== 1),
              onSetHoverDate: a[2] || (a[2] = (N) => t(p)(N)),
              onHandleScroll: (N) => t(h)(N, m),
              onHandleSwipe: (N) => t(_)(N, m),
              onMount: a[3] || (a[3] = (N) => le(t(bt).calendar))
            }, Fe({ _: 2 }, [
              Re(t(de), (N, U) => ({
                name: N,
                fn: be((pe) => [
                  ae(d.$slots, N, nt({ ref_for: !0 }, pe))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      t(X).enableTimePicker ? (W(), J("div", Tl, [
        ae(d.$slots, "time-picker", Ke(et({ time: t(v), updateTime: t(M) })), () => [
          Be(La, {
            ref: "time-picker",
            hours: t(v).hours,
            minutes: t(v).minutes,
            seconds: t(v).seconds,
            "disabled-times-config": t(Y),
            "validate-time": t(B),
            "no-overlay-focus": e.noOverlayFocus,
            onMount: a[4] || (a[4] = (n) => le(t(bt).timePicker)),
            "onUpdate:hours": a[5] || (a[5] = (n) => t(M)({ hours: n, minutes: t(v).minutes, seconds: t(v).seconds })),
            "onUpdate:minutes": a[6] || (a[6] = (n) => t(M)({ hours: t(v).hours, minutes: n, seconds: t(v).seconds })),
            "onUpdate:seconds": a[7] || (a[7] = (n) => t(M)({ hours: t(v).hours, minutes: t(v).minutes, seconds: n })),
            onResetFlow: a[8] || (a[8] = (n) => d.$emit("reset-flow"))
          }, Fe({ _: 2 }, [
            Re(t(ce), (n, C) => ({
              name: n,
              fn: be((m) => [
                ae(d.$slots, n, Ke(et(m)))
              ])
            }))
          ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"])
        ])
      ])) : ee("", !0)
    ], 64));
  }
}), Sl = (e, A) => {
  const {
    getDate: f,
    modelValue: o,
    year: c,
    calendars: s,
    defaults: { highlight: r, range: u, multiDates: v }
  } = Me(), { isDateBetween: Y, isDateEqual: P } = We(), { checkRangeAutoApply: B, handleMultiDatesSelect: O, setMonthOrYearRange: l } = na();
  Ft();
  const { isDisabled: w } = Ue(), { formatQuarterText: h } = pt(), {
    selectYear: _,
    groupedYears: b,
    showYearPicker: E,
    isDisabled: k,
    toggleYearPicker: g,
    handleYearSelect: M,
    handleYear: R,
    setStartDate: $
  } = Wa(A), S = ie();
  Ee(() => {
    $();
  });
  const p = j(() => (q) => o.value ? Array.isArray(o.value) ? o.value.some((oe) => ba(q, oe)) : ba(o.value, q) : !1), D = (q) => {
    if (u.value.enabled) {
      if (Array.isArray(o.value)) {
        const oe = P(q, o.value[0]) || P(q, o.value[1]);
        return Y(o.value, S.value, q) && !oe;
      }
      return !1;
    }
    return !1;
  }, V = (q, oe) => q.quarter === wa(oe) && q.year === me(oe), F = (q) => typeof r.value == "function" ? r.value({ quarter: wa(q), year: me(q) }) : r.value.quarters.some((oe) => V(oe, q)), L = j(() => (q) => {
    const oe = De(f(), { year: c.value(q) });
    return Rn({
      start: Yt(oe),
      end: Ta(oe)
    }).map((K) => {
      const Z = Cn(K), de = ka(K), G = w(K), ce = D(Z), le = F(Z);
      return {
        text: h(Z, de),
        value: Z,
        active: p.value(Z),
        highlighted: le,
        disabled: G,
        isBetween: ce
      };
    });
  }), ne = (q) => {
    O(q, v.value.limit), A("auto-apply", !0);
  }, re = (q) => {
    o.value = l(q), B(o.value, A, o.value.length < 2);
  }, X = (q) => {
    o.value = q, A("auto-apply");
  };
  return {
    groupedYears: b,
    year: c,
    isDisabled: k,
    quarters: L,
    showYearPicker: E,
    modelValue: o,
    selectYear: _,
    toggleYearPicker: g,
    handleYearSelect: M,
    handleYear: R,
    setHoverDate: (q) => {
      S.value = q;
    },
    selectQuarter: (q, oe, K) => {
      if (!K)
        return s.value[oe].month = _e(ka(q)), v.value.enabled ? ne(q) : u.value.enabled ? re(q) : X(q);
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e, {
      defaults: { config: s }
    } = Me(), r = mt(), { boolHtmlAttribute: u } = Pt(), v = lt(r, at.YearMode), {
      groupedYears: Y,
      year: P,
      isDisabled: B,
      quarters: O,
      modelValue: l,
      showYearPicker: w,
      setHoverDate: h,
      selectQuarter: _,
      toggleYearPicker: b,
      handleYearSelect: E,
      handleYear: k
    } = Sl(c, o);
    return A({ getSidebarProps: () => ({
      modelValue: l,
      year: P,
      selectQuarter: _,
      handleYearSelect: E,
      handleYear: k
    }) }), (M, R) => (W(), Se(aa, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: be(({ instances: $, wrapClass: S }) => [
        (W(!0), J(Te, null, Re($, (p) => (W(), J("div", {
          key: p,
          class: he(S)
        }, [
          ye("div", {
            class: "dp-quarter-picker-wrap",
            style: ze({ minHeight: `${t(s).modeHeight}px` })
          }, [
            M.$slots["top-extra"] ? ae(M.$slots, "top-extra", {
              key: 0,
              value: t(l)
            }) : ee("", !0),
            ye("div", null, [
              Be(Na, {
                items: t(Y)(p),
                instance: p,
                "show-year-picker": t(w)[p],
                year: t(P)(p),
                "is-disabled": (D) => t(B)(p, D),
                onHandleYear: (D) => t(k)(p, D),
                onYearSelect: (D) => t(E)(D, p),
                onToggleYearPicker: (D) => t(b)(p, D?.flow, D?.show)
              }, Fe({ _: 2 }, [
                Re(t(v), (D, V) => ({
                  name: D,
                  fn: be((F) => [
                    ae(M.$slots, D, nt({ ref_for: !0 }, F))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            ye("div", Rl, [
              (W(!0), J(Te, null, Re(t(O)(p), (D, V) => (W(), J("div", { key: V }, [
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
                  disabled: t(u)(D.disabled),
                  onClick: (F) => t(_)(D.value, p, D.disabled),
                  onMouseover: (F) => t(h)(D.value)
                }, [
                  ae(M.$slots, "quarter", {
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = mt(), {
      state: s,
      rootProps: r,
      defaults: { textInput: u, inline: v, config: Y, ui: P, ariaLabels: B },
      setState: O
    } = Me(), { isMobile: l } = Zt(), { handleEventPropagation: w, getElWithin: h, checkStopPropagation: _, checkKeyDown: b } = Ie();
    In();
    const E = xe("inner-menu"), k = xe("dp-menu"), g = xe("dyn-cmp"), M = ie(0), R = ie(!1), $ = ie(!1), { flowStep: S, updateFlowStep: p, childMount: D, resetFlow: V, handleFlow: F } = Vn(g), L = (i) => {
      $.value = !0, Y.value.allowPreventDefault && i.preventDefault(), _(i, Y.value, !0);
    };
    Ee(() => {
      R.value = !0, ne(), globalThis.addEventListener("resize", ne);
      const i = vt(k);
      i && !u.value.enabled && !v.value.enabled && O("menuFocused", !0), i && (i.addEventListener("pointerdown", L), i.addEventListener("mousedown", L)), document.addEventListener("mousedown", Pe);
    }), kt(() => {
      globalThis.removeEventListener("resize", ne), document.removeEventListener("mousedown", Pe);
      const i = vt(k);
      i && (i.removeEventListener("pointerdown", L), i.removeEventListener("mousedown", L));
    });
    const ne = () => {
      const i = vt(E);
      i && (M.value = i.getBoundingClientRect().width);
    }, re = j(() => r.monthPicker ? Ur : r.yearPicker ? Jr : r.timePicker ? cl : r.quarterPicker ? xl : $l), X = () => {
      const i = vt(k);
      i && i.focus({ preventScroll: !0 });
    }, x = j(() => g.value?.getSidebarProps() || {}), te = lt(c, at.ActionRow), q = lt(c, at.PassTrough), oe = j(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly,
      "dp-menu-loading": r.loading
    })), K = j(
      () => ({
        dp__menu: !0,
        dp__menu_index: !v.value.enabled,
        dp__relative: v.value.enabled,
        ...P.value.menu
      })
    ), Z = (i) => {
      _(i, Y.value, !0);
    }, de = (i) => {
      Y.value.escClose && (o("close-picker"), w(i, Y.value));
    }, G = (i) => {
      r.arrowNavigation || (i === Xe.left || i === Xe.up ? ve("handleArrow", Xe.left, 0, i === Xe.up) : ve("handleArrow", Xe.right, 0, i === Xe.down));
    }, ce = (i) => {
      O("shiftKeyInMenu", i.shiftKey), !r.hideMonthYearSelect && i.code === $e.tab && i.target.classList.contains("dp__menu") && s.shiftKeyInMenu && (i.preventDefault(), _(i, Y.value, !0), o("close-picker"));
    }, le = (i) => {
      g.value?.toggleTimePicker(!1, !1), g.value?.toggleMonthPicker(!1, !1, i), g.value?.toggleYearPicker(!1, !1, i);
    }, we = (i, d = 0) => i === "month" ? g.value?.toggleMonthPicker(!1, !0, d) : i === "year" ? g.value?.toggleYearPicker(!1, !0, d) : i === "time" ? g.value?.toggleTimePicker(!0, !1) : le(d), ve = (i, ...d) => {
      g.value?.[i] && g.value?.[i](...d);
    }, Ae = () => {
      ve("selectCurrentDate");
    }, Q = (i) => {
      ve("presetDate", on(i));
    }, I = () => {
      ve("clearHoverDate");
    }, y = (i, d) => {
      ve("updateMonthYear", i, d);
    }, H = (i, d) => {
      i.preventDefault(), G(d);
    }, fe = (i) => {
      if (ce(i), i.key === $e.home || i.key === $e.end)
        return ve(
          "selectWeekDate",
          i.key === $e.home,
          i.target.getAttribute("id")
        );
      switch ((i.key === $e.pageUp || i.key === $e.pageDown) && (i.shiftKey ? (ve("changeYear", i.key === $e.pageUp), h(k.value, "overlay-year")?.focus()) : (ve("changeMonth", i.key === $e.pageUp), h(k.value, i.key === $e.pageUp ? "action-prev" : "action-next")?.focus()), i.target.getAttribute("id") && k.value?.focus({ preventScroll: !0 })), i.key) {
        case $e.esc:
          return de(i);
        case $e.arrowLeft:
          return H(i, Xe.left);
        case $e.arrowRight:
          return H(i, Xe.right);
        case $e.arrowUp:
          return H(i, Xe.up);
        case $e.arrowDown:
          return H(i, Xe.down);
        default:
          return;
      }
    }, Pe = (i) => {
      v.value.enabled && !v.value.input && !k.value?.contains(i.target) && $.value && ($.value = !1, o("menu-blur"));
    };
    return A({
      updateMonthYear: y,
      switchView: we,
      onValueCleared: () => {
        g.value?.setStartTime?.();
      },
      handleFlow: F
    }), (i, d) => (W(), J("div", {
      id: t(r).menuId,
      ref: "dp-menu",
      tabindex: t(v).enabled ? void 0 : "0",
      role: t(v).enabled ? void 0 : "dialog",
      "aria-label": t(B)?.menu,
      class: he(K.value),
      onMouseleave: I,
      onClick: Z,
      onKeydown: fe
    }, [
      (t(r).disabled || t(r).readonly) && t(v).enabled || t(r).loading ? (W(), J("div", {
        key: 0,
        class: he(oe.value)
      }, [
        t(r).loading ? (W(), J("div", Yl, [...d[5] || (d[5] = [
          ye("span", { class: "dp--menu-loader" }, null, -1)
        ])])) : ee("", !0)
      ], 2)) : ee("", !0),
      i.$slots["menu-header"] ? (W(), J("div", Bl, [
        ae(i.$slots, "menu-header")
      ])) : ee("", !0),
      ae(i.$slots, "arrow"),
      ye("div", {
        ref: "inner-menu",
        class: he({
          dp__menu_content_wrapper: t(r).presetDates?.length || !!i.$slots["left-sidebar"] || !!i.$slots["right-sidebar"],
          "dp--menu-content-wrapper-collapsed": e.collapse && (t(r).presetDates?.length || !!i.$slots["left-sidebar"] || !!i.$slots["right-sidebar"])
        }),
        "data-dp-mobile": t(l),
        style: ze({ "--dp-menu-width": `${M.value}px` })
      }, [
        i.$slots["left-sidebar"] ? (W(), J("div", El, [
          ae(i.$slots, "left-sidebar", Ke(et(x.value)))
        ])) : ee("", !0),
        t(r).presetDates.length ? (W(), J("div", {
          key: 1,
          class: he({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
          "data-dp-mobile": t(l)
        }, [
          (W(!0), J(Te, null, Re(t(r).presetDates, (a, n) => (W(), J(Te, { key: n }, [
            a.slot ? ae(i.$slots, a.slot, {
              key: 0,
              presetDate: Q,
              label: a.label,
              value: a.value
            }) : (W(), J("button", {
              key: 1,
              type: "button",
              style: ze(a.style || {}),
              class: he(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
              "data-test-id": a.testId ?? void 0,
              "data-dp-mobile": t(l),
              onClick: _t((C) => Q(a.value), ["prevent"]),
              onKeydown: (C) => t(b)(C, () => Q(a.value), !0)
            }, Ne(a.label), 47, Fl))
          ], 64))), 128))
        ], 10, Vl)) : ee("", !0),
        ye("div", Nl, [
          (W(), Se(pa(re.value), {
            ref: "dyn-cmp",
            "flow-step": t(S),
            collapse: e.collapse,
            "no-overlay-focus": e.noOverlayFocus,
            "menu-wrap-ref": k.value,
            onMount: t(D),
            onUpdateFlowStep: t(p),
            onResetFlow: t(V),
            onFocusMenu: X,
            onSelectDate: d[0] || (d[0] = (a) => i.$emit("select-date")),
            onAutoApply: d[1] || (d[1] = (a) => i.$emit("auto-apply", a)),
            onTimeUpdate: d[2] || (d[2] = (a) => i.$emit("time-update"))
          }, Fe({ _: 2 }, [
            Re(t(q), (a, n) => ({
              name: a,
              fn: be((C) => [
                ae(i.$slots, a, Ke(et({ ...C })))
              ])
            }))
          ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
        ]),
        i.$slots["right-sidebar"] ? (W(), J("div", Wl, [
          ae(i.$slots, "right-sidebar", Ke(et(x.value)))
        ])) : ee("", !0)
      ], 14, Il),
      i.$slots["action-extra"] ? (W(), J("div", Ll, [
        i.$slots["action-extra"] ? ae(i.$slots, "action-extra", {
          key: 0,
          selectCurrentDate: Ae
        }) : ee("", !0)
      ])) : ee("", !0),
      !t(r).autoApply || t(Y).keepActionRow ? (W(), Se(Fr, {
        key: 3,
        "menu-mount": R.value,
        "calendar-width": M.value,
        onClosePicker: d[3] || (d[3] = (a) => i.$emit("close-picker")),
        onSelectDate: d[4] || (d[4] = (a) => i.$emit("select-date")),
        onSelectNow: Ae
      }, Fe({ _: 2 }, [
        Re(t(te), (a, n) => ({
          name: a,
          fn: be((C) => [
            ae(i.$slots, a, Ke(et(C)))
          ])
        }))
      ]), 1032, ["menu-mount", "calendar-width"])) : ee("", !0)
    ], 42, Ol));
  }
}), jl = ["data-dp-mobile"], Kl = /* @__PURE__ */ Ve({
  __name: "VueDatePicker",
  setup(e, { expose: A }) {
    const {
      rootEmit: f,
      setState: o,
      inputValue: c,
      modelValue: s,
      rootProps: r,
      defaults: { inline: u, config: v, textInput: Y, range: P, multiDates: B, teleport: O, floatingConfig: l }
    } = Me(), { validateDate: w, isValidTime: h } = Ue(), { menuTransition: _, showTransition: b } = Vt(), { isMobile: E } = Zt(), { findNextFocusableElement: k, getNumVal: g } = Ie(), M = mt(), R = ie(!1), $ = ie(u.value.enabled || r.centered), S = ya(r, "modelValue"), p = ya(r, "timezone"), D = xe("dp-menu-wrap"), V = xe("dp-menu"), F = xe("input-cmp"), L = xe("picker-wrapper"), ne = xe("menu-arrow"), re = ie(!1), X = ie(!1), x = ie(!1), te = ie(!0), q = (se) => (l.value.arrow && se.push(
      mn({ element: l.value.arrow === !0 ? ne : l.value.arrow })
    ), l.value.flip && se.push(pn(typeof l.value.flip == "object" ? l.value.flip : {})), l.value.shift && se.push(hn(typeof l.value.shift == "object" ? l.value.shift : {})), se), { floatingStyles: oe, middlewareData: K, placement: Z, y: de } = dn(
      F,
      D,
      {
        strategy: l.value.strategy,
        placement: l.value.placement,
        middleware: q([fn(l.value.offset)]),
        whileElementsMounted: vn
      }
    );
    Ee(() => {
      le(r.modelValue), je().then(() => {
        u.value.enabled || globalThis.addEventListener("resize", Pe);
      }), u.value.enabled && (R.value = !0), globalThis.addEventListener("keyup", Ce), globalThis.addEventListener("keydown", i);
    }), kt(() => {
      u.value.enabled || globalThis.removeEventListener("resize", Pe), globalThis.removeEventListener("keyup", Ce), globalThis.removeEventListener("keydown", i);
    });
    const G = Fa(M, r.presetDates), ce = lt(M, at.Input);
    tt(
      [S, p],
      () => {
        le(S.value);
      },
      { deep: !0 }
    ), tt([Z, de], () => {
      !u.value.enabled && !r.centered && te.value && ($.value = !1, je().then(() => {
        te.value = !1, $.value = !0;
      }));
    });
    const { parseExternalModelValue: le, emitModelValue: we, formatInputValue: ve, checkBeforeEmit: Ae } = En(), Q = j(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: u.value.enabled,
        "dp--flex-display-collapsed": x.value,
        dp__flex_display_with_input: u.value.input
      })
    ), I = j(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), y = j(() => u.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker)), H = () => F.value?.$el?.getBoundingClientRect() ?? { width: 0, left: 0, right: 0 }, fe = () => {
      R.value && v.value.closeOnScroll && ge();
    }, Pe = () => {
      const se = V.value?.$el.getBoundingClientRect().width ?? 0;
      x.value = document.body.offsetWidth <= se;
    }, Ce = (se) => {
      se.key === "Tab" && !u.value.enabled && !r.teleport && v.value.tabOutClosesMenu && (L.value.contains(document.activeElement) || ge()), X.value = se.shiftKey;
    }, i = (se) => {
      X.value = se.shiftKey;
    }, d = () => {
      !r.disabled && !r.readonly && (te.value = !0, R.value = !0, R.value && f("open"), R.value || pe(), le(r.modelValue));
    }, a = () => {
      c.value = "", pe(), V.value?.onValueCleared(), F.value?.setParsedDate(null), f("update:model-value", null), f("cleared"), v.value.closeOnClearValue && ge();
    }, n = () => {
      const se = s.value;
      return !se || !Array.isArray(se) && w(se) ? !0 : Array.isArray(se) ? B.value.enabled || se.length === 2 && w(se[0]) && w(se[1]) ? !0 : P.value.partialRange && !r.timePicker ? w(se[0]) : !1 : !1;
    }, C = () => {
      Ae() && n() ? (we(), ge()) : f("invalid-select");
    }, m = (se) => {
      N(), we(), v.value.closeOnAutoApply && !se && ge();
    }, N = () => {
      F.value && Y.value.enabled && F.value.setParsedDate(s.value);
    }, U = (se = !1) => {
      r.autoApply && h(s.value) && n() && (P.value.enabled && Array.isArray(s.value) ? (P.value.partialRange || s.value.length === 2) && m(se) : m(se));
    }, pe = () => {
      Y.value.enabled || (s.value = null);
    }, ge = (se = !1) => {
      te.value = !0, se && s.value && v.value.setDateOnMenuClose && C(), u.value.enabled || (R.value && (R.value = !1, o("menuFocused", !1), o("shiftKeyInMenu", !1), f("closed"), c.value && le(S.value)), pe(), f("blur"));
    }, Qe = (se, Le, Je = !1) => {
      if (!se) {
        s.value = null;
        return;
      }
      const St = Array.isArray(se) ? se.every((jt) => w(jt)) : w(se), ht = h(se);
      St && ht ? (o("isTextInputDate", !0), s.value = se, Le ? (re.value = Je, C(), f("text-submit")) : r.autoApply && U(!0), je().then(() => {
        o("isTextInputDate", !1);
      })) : f("invalid-date", se);
    }, Tt = () => {
      r.autoApply && h(s.value) && we(), N();
    }, Wt = () => R.value ? ge() : d(), ra = (se) => {
      s.value = se;
    }, Lt = () => {
      Y.value.enabled && (o("isInputFocused", !0), ve()), f("focus");
    }, la = () => {
      Y.value.enabled && (o("isInputFocused", !1), le(r.modelValue), re.value && k(L.value, X.value)?.focus()), f("blur");
    }, oa = (se, Le) => {
      V.value && V.value.updateMonthYear(Le ?? 0, {
        month: g(se.month),
        year: g(se.year)
      });
    }, sa = (se) => {
      le(se ?? r.modelValue);
    }, $t = (se, Le) => {
      V.value?.switchView(se, Le);
    }, ua = (se, Le) => {
      if (R.value)
        return v.value.onClickOutside ? v.value.onClickOutside(se, Le) : ge(!0);
    }, ia = (se = 0) => {
      V.value?.handleFlow(se);
    }, Ht = () => D;
    return cn(D, (se) => ua(n, se), {
      ignore: [F]
    }), A({
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
    }), (se, Le) => (W(), J("div", {
      ref: "picker-wrapper",
      class: he(Q.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": t(E)
    }, [
      Be(Yr, {
        ref: "input-cmp",
        "is-menu-open": R.value,
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
            ae(se.$slots, Je, Ke(et(ht)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      Be(sn, {
        to: t(O),
        disabled: !t(O)
      }, {
        default: be(() => [
          ye("div", {
            ref: "dp-menu-wrap",
            class: he({
              "dp--menu-wrapper": !t(u).enabled,
              dp__outer_menu_wrap: !0,
              "dp--centered": t(r).centered
            }),
            style: ze(!t(u).enabled && !t(r).centered ? t(oe) : void 0)
          }, [
            Be(At, {
              name: t(_)(t(Z).startsWith("top")),
              css: t(b) && !t(u).enabled && !t(r).centered && $.value
            }, {
              default: be(() => [
                R.value && $.value ? (W(), Se(Hl, {
                  key: 0,
                  ref: "dp-menu",
                  class: he({ [I.value]: !0 }),
                  "no-overlay-focus": y.value,
                  collapse: x.value,
                  "get-input-rect": H,
                  onClosePicker: ge,
                  onSelectDate: C,
                  onAutoApply: U,
                  onTimeUpdate: Tt,
                  onMenuBlur: Le[1] || (Le[1] = (Je) => t(f)("blur"))
                }, Fe({ _: 2 }, [
                  Re(t(G), (Je, St) => ({
                    name: Je,
                    fn: be((ht) => [
                      ae(se.$slots, Je, Ke(et({ ...ht })))
                    ])
                  })),
                  !t(u).enabled && !t(r).centered && t(l).arrow === !0 ? {
                    name: "arrow",
                    fn: be(() => [
                      ye("div", {
                        ref: "menu-arrow",
                        class: he({
                          dp__arrow_top: t(Z) === "bottom",
                          dp__arrow_bottom: t(Z) === "top"
                        }),
                        style: ze({
                          left: t(K).arrow?.x != null ? `${t(K).arrow.x}px` : "",
                          top: t(K).arrow?.y != null ? `${t(K).arrow.y}px` : ""
                        })
                      }, null, 6)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["class", "no-overlay-focus", "collapse"])) : ee("", !0)
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
  setup(e, { expose: A, emit: f }) {
    const o = f, c = e;
    Yn(c, o);
    const s = mt(), r = Fa(s, c.presetDates), u = xe("date-picker");
    return A($r(u)), (v, Y) => (W(), Se(Kl, { ref: "date-picker" }, Fe({ _: 2 }, [
      Re(t(r), (P, B) => ({
        name: P,
        fn: be((O) => [
          ae(v.$slots, P, Ke(et(O)))
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
