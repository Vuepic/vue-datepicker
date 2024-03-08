import { openBlock as w, createElementBlock as U, createElementVNode as ce, unref as u, reactive as Ht, computed as j, ref as ee, toRef as xt, watch as ft, h as Oa, render as Un, defineComponent as Ne, renderSlot as ue, createCommentVNode as q, normalizeClass as De, withKeys as ve, createBlock as we, withModifiers as $e, onMounted as We, onUnmounted as tn, normalizeProps as Oe, mergeProps as Ie, Fragment as be, normalizeStyle as qe, createTextVNode as st, toDisplayString as Ee, onBeforeUpdate as Ba, nextTick as vt, renderList as Se, withDirectives as Xt, vShow as Jt, withCtx as ge, createVNode as Ke, Transition as _t, createSlots as Ve, useSlots as $t, guardReactiveProps as Le, resolveDynamicComponent as nn, getCurrentScope as Ya, onScopeDispose as Ia, isRef as Kn, Teleport as Na } from "vue";
import { format as nt, isEqual as St, setHours as la, setMinutes as ra, setSeconds as Cn, setMilliseconds as _n, isAfter as Ft, getYear as ye, getMonth as he, setMonth as Ea, setYear as tt, addMonths as wt, subMonths as Lt, isValid as Zt, isBefore as Vt, set as Ae, eachDayOfInterval as oa, getHours as Xe, getMinutes as at, getSeconds as Rt, startOfWeek as sa, endOfWeek as Fa, parse as Sn, isDate as La, addYears as ua, subYears as ia, addDays as kt, getDay as Va, differenceInCalendarDays as Wa, add as da, sub as Ha, getWeek as za, getISOWeek as Ua, isSameQuarter as jn, eachQuarterOfInterval as Ka, startOfYear as ja, endOfYear as Ga, startOfQuarter as Qa, endOfQuarter as Gn, getQuarter as Qn } from "date-fns";
function Ot() {
  return w(), U(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ce("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ce("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ce("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Ot.compatConfig = {
  MODE: 3
};
function ca() {
  return w(), U(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ce("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
ca.compatConfig = {
  MODE: 3
};
function On() {
  return w(), U(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
On.compatConfig = {
  MODE: 3
};
function Bn() {
  return w(), U(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Bn.compatConfig = {
  MODE: 3
};
function Yn() {
  return w(), U(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ce("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Yn.compatConfig = {
  MODE: 3
};
function In() {
  return w(), U(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
In.compatConfig = {
  MODE: 3
};
function Nn() {
  return w(), U(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ce("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Nn.compatConfig = {
  MODE: 3
};
function qn(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function qa(e) {
  return (t) => nt(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Xa = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(qa(e));
    } catch {
      n = a.map(qn(t));
    }
  else
    n = a.map(qn(t));
  const c = n.slice(0, r), o = n.slice(r + 1, n.length);
  return [n[r]].concat(...o).concat(...c);
}, En = (e, t) => {
  const r = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    r.push({ value: +a, text: `${a}` });
  return t ? r.reverse() : r;
}, fa = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c) => {
    const o = c < 10 ? `0${c}` : c;
    return /* @__PURE__ */ new Date(`2017-${o}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const c = r === "long" ? "MMMM" : "MMM";
      return a.map((o, v) => {
        const b = nt(o, c, { locale: e });
        return {
          text: b.charAt(0).toUpperCase() + b.substring(1),
          value: v
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: r, timeZone: "UTC" });
  return a.map((c, o) => {
    const v = n.format(c);
    return {
      text: v.charAt(0).toUpperCase() + v.substring(1),
      value: o
    };
  });
}, Ja = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Be = (e) => {
  const t = u(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Za = (e) => ({ type: "dot", ...e ?? {} }), va = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Fn = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, _e = (e) => e, Xn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Jn = (e) => e === null, ma = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, xa = (e) => {
  const t = [], r = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(r(n));
  }
  return t;
}, Wt = (e, t, r) => {
  const a = r != null, n = t != null;
  if (!a && !n)
    return !1;
  const c = +r, o = +t;
  return a && n ? +e > c || +e < o : a ? +e > c : n ? +e < o : !1;
}, Pt = (e, t) => xa(e).map((r) => r.map((a) => {
  const { active: n, disabled: c, isBetween: o, highlighted: v } = t(a);
  return {
    ...a,
    active: n,
    disabled: c,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: c,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: c && n,
      dp__cell_in_between: o,
      "dp--highlighted": v
    }
  };
})), dt = (e, t, r = !1) => {
  e && t.allowStopPropagation && (r && e.stopImmediatePropagation(), e.stopPropagation());
}, el = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function tl(e, t) {
  let r = [...document.querySelectorAll(el())];
  r = r.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = r.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= r.length))
    return r[a + (t ? -1 : 1)];
}
const nl = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Ln = (e) => nt(e, "dd-MM-yyyy"), yn = (e) => Array.isArray(e), en = (e, t) => t.get(Ln(e)), al = (e, t) => e ? t ? t instanceof Map ? !!en(e, t) : t(N(e)) : !1 : !0, Zn = (e, t, r, a, n) => {
  const c = Sn(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return Zt(c) && La(c) ? a || n ? c : Ae(c, {
    hours: +r.hours,
    minutes: +(r == null ? void 0 : r.minutes),
    seconds: +(r == null ? void 0 : r.seconds),
    milliseconds: 0
  }) : null;
}, ll = (e, t, r, a, n) => {
  const c = Array.isArray(r) ? r[0] : r;
  if (typeof t == "string")
    return Zn(e, t, c, a, n);
  if (Array.isArray(t)) {
    let o = null;
    for (const v of t)
      if (o = Zn(e, v, c, a, n), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, N = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), rl = (e, t, r) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), c = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), v = e.getMinutes().toString().padStart(2, "0"), b = r ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${c}T${o}:${v}:${b}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, ze = (e) => {
  let t = N(JSON.parse(JSON.stringify(e)));
  return t = la(t, 0), t = ra(t, 0), t = Cn(t, 0), t = _n(t, 0), t;
}, ct = (e, t, r, a) => {
  let n = e ? N(e) : N();
  return (t || t === 0) && (n = la(n, +t)), (r || r === 0) && (n = ra(n, +r)), (a || a === 0) && (n = Cn(n, +a)), _n(n, 0);
}, Pe = (e, t) => !e || !t ? !1 : Vt(ze(e), ze(t)), ke = (e, t) => !e || !t ? !1 : St(ze(e), ze(t)), Ce = (e, t) => !e || !t ? !1 : Ft(ze(e), ze(t)), an = (e, t, r) => e != null && e[0] && (e != null && e[1]) ? Ce(r, e[0]) && Pe(r, e[1]) : e != null && e[0] && t ? Ce(r, e[0]) && Pe(r, t) || Pe(r, e[0]) && Ce(r, t) : !1, Qe = (e) => {
  const t = Ae(new Date(e), { date: 1 });
  return ze(t);
}, gn = (e, t, r) => t && (r || r === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, r] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Dt = (e) => ({
  hours: Xe(e),
  minutes: at(e),
  seconds: Rt(e)
}), pa = (e, t) => {
  if (t) {
    const r = ye(N(t));
    if (r > e)
      return 12;
    if (r === e)
      return he(N(t));
  }
}, ya = (e, t) => {
  if (t) {
    const r = ye(N(t));
    return r < e ? -1 : r === e ? he(N(t)) : void 0;
  }
}, Ct = (e) => {
  if (e)
    return ye(N(e));
}, ga = (e, t) => {
  const r = Ce(e, t) ? t : e, a = Ce(t, e) ? t : e;
  return oa({ start: r, end: a });
}, ol = (e) => {
  const t = wt(e, 1);
  return { month: he(t), year: ye(t) };
}, rt = (e, t) => {
  const r = sa(e, { weekStartsOn: +t }), a = Fa(e, { weekStartsOn: +t });
  return [r, a];
}, ha = (e, t) => {
  const r = {
    hours: Xe(N()),
    minutes: at(N()),
    seconds: t ? Rt(N()) : 0
  };
  return Object.assign(r, e);
}, it = (e, t, r) => [Ae(N(e), { date: 1 }), Ae(N(), { month: t, year: r, date: 1 })], ot = (e, t, r) => {
  let a = e ? N(e) : N();
  return (t || t === 0) && (a = Ea(a, t)), r && (a = tt(a, r)), a;
}, ba = (e, t, r, a, n) => {
  if (!a || n && !t || !n && !r)
    return !1;
  const c = n ? wt(e, 1) : Lt(e, 1), o = [he(c), ye(c)];
  return n ? !ul(...o, t) : !sl(...o, r);
}, sl = (e, t, r) => Pe(...it(r, e, t)) || ke(...it(r, e, t)), ul = (e, t, r) => Ce(...it(r, e, t)) || ke(...it(r, e, t)), ka = (e, t, r, a, n, c, o) => {
  if (typeof t == "function" && !o)
    return t(e);
  const v = r ? { locale: r } : void 0;
  return Array.isArray(e) ? `${nt(e[0], c, v)}${n && !e[1] ? "" : a}${e[1] ? nt(e[1], c, v) : ""}` : nt(e, c, v);
}, At = (e) => {
  if (e)
    return null;
  throw new Error(Fn.prop("partial-range"));
}, Qt = (e, t) => {
  if (t)
    return e();
  throw new Error(Fn.prop("range"));
}, Rn = (e) => Array.isArray(e) ? Zt(e[0]) && (e[1] ? Zt(e[1]) : !0) : e ? Zt(e) : !1, il = (e, t) => Ae(t ?? N(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), hn = (e, t, r, a) => {
  if (!e)
    return !0;
  if (a) {
    const n = r === "max" ? Vt(e, t) : Ft(e, t), c = { seconds: 0, milliseconds: 0 };
    return n || St(Ae(e, c), Ae(t, c));
  }
  return r === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, bn = (e, t, r) => e ? il(e, t) : N(r ?? t), xn = (e, t, r, a, n) => {
  if (Array.isArray(a)) {
    const o = bn(e, a[0], t), v = bn(e, a[1], t);
    return hn(a[0], o, r, !!t) && hn(a[1], v, r, !!t) && n;
  }
  const c = bn(e, a, t);
  return hn(a, c, r, !!t) && n;
}, kn = (e) => Ae(N(), Dt(e)), dl = (e, t) => e instanceof Map ? Array.from(e.values()).filter((r) => ye(N(r)) === t).map((r) => he(r)) : [], wa = (e, t, r) => typeof e == "function" ? e({ month: t, year: r }) : !!e.months.find((a) => a.month === t && a.year === r), Vn = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Nt = Ht({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Da = () => {
  const e = (a) => {
    Nt.menuFocused = a;
  }, t = (a) => {
    Nt.shiftKeyInMenu !== a && (Nt.shiftKeyInMenu = a);
  };
  return {
    control: j(() => ({ shiftKeyInMenu: Nt.shiftKeyInMenu, menuFocused: Nt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Te = Ht({
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
}), wn = ee(null), qt = ee(!1), Dn = ee(!1), Mn = ee(!1), $n = ee(!1), Fe = ee(0), Ye = ee(0), pt = () => {
  const e = j(() => qt.value ? [...Te.selectionGrid, Te.actionRow].filter((R) => R.length) : Dn.value ? [
    ...Te.timePicker[0],
    ...Te.timePicker[1],
    $n.value ? [] : [wn.value],
    Te.actionRow
  ].filter((R) => R.length) : Mn.value ? [...Te.monthPicker, Te.actionRow] : [Te.monthYear, ...Te.calendar, Te.time, Te.actionRow].filter((R) => R.length)), t = (R) => {
    Fe.value = R ? Fe.value + 1 : Fe.value - 1;
    let V = null;
    e.value[Ye.value] && (V = e.value[Ye.value][Fe.value]), V || (Fe.value = R ? Fe.value - 1 : Fe.value + 1);
  }, r = (R) => {
    if (Ye.value === 0 && !R || Ye.value === e.value.length && R)
      return;
    Ye.value = R ? Ye.value + 1 : Ye.value - 1, e.value[Ye.value] ? e.value[Ye.value] && !e.value[Ye.value][Fe.value] && Fe.value !== 0 && (Fe.value = e.value[Ye.value].length - 1) : Ye.value = R ? Ye.value - 1 : Ye.value + 1;
  }, a = (R) => {
    let V = null;
    e.value[Ye.value] && (V = e.value[Ye.value][Fe.value]), V ? V.focus({ preventScroll: !qt.value }) : Fe.value = R ? Fe.value - 1 : Fe.value + 1;
  }, n = () => {
    t(!0), a(!0);
  }, c = () => {
    t(!1), a(!1);
  }, o = () => {
    r(!1), a(!0);
  }, v = () => {
    r(!0), a(!0);
  }, b = (R, V) => {
    Te[V] = R;
  }, _ = (R, V) => {
    Te[V] = R;
  }, p = () => {
    Fe.value = 0, Ye.value = 0;
  };
  return {
    buildMatrix: b,
    buildMultiLevelMatrix: _,
    setTimePickerBackRef: (R) => {
      wn.value = R;
    },
    setSelectionGrid: (R) => {
      qt.value = R, p(), R || (Te.selectionGrid = []);
    },
    setTimePicker: (R, V = !1) => {
      Dn.value = R, $n.value = V, p(), R || (Te.timePicker[0] = [], Te.timePicker[1] = []);
    },
    setTimePickerElements: (R, V = 0) => {
      Te.timePicker[V] = R;
    },
    arrowRight: n,
    arrowLeft: c,
    arrowUp: o,
    arrowDown: v,
    clearArrowNav: () => {
      Te.monthYear = [], Te.calendar = [], Te.time = [], Te.actionRow = [], Te.selectionGrid = [], Te.timePicker[0] = [], Te.timePicker[1] = [], qt.value = !1, Dn.value = !1, $n.value = !1, Mn.value = !1, p(), wn.value = null;
    },
    setMonthPicker: (R) => {
      Mn.value = R, p();
    },
    refSets: Te
    // exposed for testing
  };
}, mt = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Ma = (e, t) => {
  const r = Pn(e, t);
  return r || N();
}, cl = (e, t) => t.dateInTz ? mt(new Date(e), t.dateInTz) : N(e), Pn = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return N(e);
  const r = N(e);
  return t.exactMatch ? cl(e, t) : mt(r, t.timezone);
}, ea = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), fl = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), ta = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, vl = (e) => {
  const t = typeof e == "object" && e, r = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...r, count: ta(!1) };
  const a = t ? e : {}, n = t ? a.count ?? !0 : e, c = ta(n);
  return Object.assign(r, a, { count: c });
}, ml = (e, t, r) => e || (typeof r == "string" ? r : t), pl = (e) => typeof e == "boolean" ? e ? ea({}) : !1 : ea(e), yl = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, gl = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), hl = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), bl = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, kl = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0
}, ...e ?? {} }), wl = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((r) => N(r)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Dl = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Ml = (e, t) => {
  const r = {
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
  };
  return typeof e == "object" ? { enabled: !0, ...r, ...e } : {
    enabled: e,
    noDisabledRange: t.noDisabledRange,
    showLastInRange: t.showLastInRange,
    minMaxRawRange: t.minMaxRawRange,
    partialRange: t.partialRange,
    disableTimeRangeValidation: t.disableTimeRangeValidation,
    maxRange: t.maxRange,
    minRange: t.minRange,
    autoRange: t.autoRange,
    fixedStart: t.fixedStart,
    fixedEnd: t.fixedEnd
  };
}, $l = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, An = (e, t) => new Map(
  e.map((r) => {
    const a = Ma(r, t);
    return [Ln(a), a];
  })
), Al = (e, t) => e.length ? new Map(
  e.map((r) => {
    const a = Ma(r.date, t);
    return [Ln(a), r];
  })
) : null, Tl = (e, t, r, a, n, c, o) => ({
  minDate: Pn(e, o),
  maxDate: Pn(t, o),
  disabledDates: yn(r) ? An(r, o) : r,
  allowedDates: yn(a) ? An(a, o) : null,
  highlight: typeof n == "object" && yn(n == null ? void 0 : n.dates) ? An(n.dates, o) : n,
  markers: Al(c, o)
}), Re = (e) => {
  const t = () => {
    const M = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${M}` : `hh:mm${M} aa`;
  }, r = () => {
    var M;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((M = X.value) == null ? void 0 : M.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (M) => ha(M, e.enableSeconds), n = () => O.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, c = j(() => vl(e.multiCalendars)), o = j(() => n()), v = j(() => fl(e.ariaLabels)), b = j(() => gl(e.filters)), _ = j(() => pl(e.transitions)), p = j(() => hl(e.actionRow)), $ = j(
    () => ml(e.previewFormat, e.format, r())
  ), B = j(() => yl(e.textInput)), C = j(() => bl(e.inline)), W = j(() => kl(e.config)), y = j(() => wl(e.highlight)), X = j(() => Dl(e.weekNumbers)), R = j(() => $l(e.timezone, e.emitTimezone)), V = j(
    () => Tl(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      y.value,
      e.markers,
      R.value
    )
  ), O = j(
    () => Ml(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  );
  return {
    defaultedTransitions: _,
    defaultedMultiCalendars: c,
    defaultedStartTime: o,
    defaultedAriaLabels: v,
    defaultedFilters: b,
    defaultedActionRow: p,
    defaultedPreviewFormat: $,
    defaultedTextInput: B,
    defaultedInline: C,
    defaultedConfig: W,
    defaultedHighlight: y,
    defaultedWeekNumbers: X,
    defaultedRange: O,
    propDates: V,
    defaultedTz: R,
    getDefaultPattern: r,
    getDefaultStartTime: n
  };
}, Sl = (e, t, r) => {
  const a = ee(), { defaultedTextInput: n, defaultedRange: c, defaultedTz: o, getDefaultPattern: v } = Re(t), b = ee(""), _ = xt(t, "format");
  ft(
    a,
    () => {
      e("internal-model-change", a.value);
    },
    { deep: !0 }
  ), ft(_, () => {
    P();
  });
  const p = (l, g, H = !1) => ka(
    l,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    g ?? v(),
    H
  ), $ = (l) => l ? t.modelType ? i(l) : {
    hours: Xe(l),
    minutes: at(l),
    seconds: t.enableSeconds ? Rt(l) : 0
  } : null, B = (l) => t.modelType ? i(l) : { month: he(l), year: ye(l) }, C = (l) => Array.isArray(l) ? t.multiDates ? l.map((g) => W(g, tt(N(), g))) : Qt(
    () => [
      tt(N(), l[0]),
      l[1] ? tt(N(), l[1]) : At(c.value.partialRange)
    ],
    c.value.enabled
  ) : tt(N(), +l), W = (l, g) => (typeof l == "string" || typeof l == "number") && t.modelType ? Y(l) : g, y = (l) => Array.isArray(l) ? [
    W(
      l[0],
      ct(null, +l[0].hours, +l[0].minutes, l[0].seconds)
    ),
    W(
      l[1],
      ct(null, +l[1].hours, +l[1].minutes, l[1].seconds)
    )
  ] : W(l, ct(null, l.hours, l.minutes, l.seconds)), X = (l) => {
    const g = Ae(N(), { date: 1 });
    return Array.isArray(l) ? t.multiDates ? l.map((H) => W(H, ot(g, +H.month, +H.year))) : Qt(
      () => [
        W(l[0], ot(g, +l[0].month, +l[0].year)),
        W(
          l[1],
          l[1] ? ot(g, +l[1].month, +l[1].year) : At(c.value.partialRange)
        )
      ],
      c.value.enabled
    ) : W(l, ot(g, +l.month, +l.year));
  }, R = (l) => {
    if (Array.isArray(l))
      return l.map((g) => Y(g));
    throw new Error(Fn.dateArr("multi-dates"));
  }, V = (l) => {
    if (Array.isArray(l) && c.value.enabled) {
      const g = l[0], H = l[1];
      return [
        N(Array.isArray(g) ? g[0] : null),
        N(Array.isArray(H) ? H[0] : null)
      ];
    }
    return N(l[0]);
  }, O = (l) => t.modelAuto ? Array.isArray(l) ? [Y(l[0]), Y(l[1])] : t.autoApply ? [Y(l)] : [Y(l), null] : Array.isArray(l) ? Qt(
    () => l[1] ? [
      Y(l[0]),
      l[1] ? Y(l[1]) : At(c.value.partialRange)
    ] : [Y(l[0])],
    c.value.enabled
  ) : Y(l), M = () => {
    Array.isArray(a.value) && c.value.enabled && a.value.length === 1 && a.value.push(At(c.value.partialRange));
  }, D = () => {
    const l = a.value;
    return [
      i(l[0]),
      l[1] ? i(l[1]) : At(c.value.partialRange)
    ];
  }, G = () => a.value[1] ? D() : i(_e(a.value[0])), te = () => (a.value || []).map((l) => i(l)), A = () => (M(), t.modelAuto ? G() : t.multiDates ? te() : Array.isArray(a.value) ? Qt(() => D(), c.value.enabled) : i(_e(a.value))), ae = (l) => !l || Array.isArray(l) && !l.length ? null : t.timePicker ? y(_e(l)) : t.monthPicker ? X(_e(l)) : t.yearPicker ? C(_e(l)) : t.multiDates ? R(_e(l)) : t.weekPicker ? V(_e(l)) : O(_e(l)), oe = (l) => {
    const g = ae(l);
    Rn(_e(g)) ? (a.value = _e(g), P()) : (a.value = null, b.value = "");
  }, k = () => {
    const l = (g) => nt(g, n.value.format);
    return `${l(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? l(a.value[1]) : ""}`;
  }, L = () => r.value && a.value ? Array.isArray(a.value) ? k() : nt(a.value, n.value.format) : p(a.value), x = () => a.value ? t.multiDates ? a.value.map((l) => p(l)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? L() : p(a.value) : "", P = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? b.value = x() : b.value = t.format(a.value);
  }, Y = (l) => {
    if (t.utc) {
      const g = new Date(l);
      return t.utc === "preserve" ? new Date(g.getTime() + g.getTimezoneOffset() * 6e4) : g;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(l) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Sn(l, v(), /* @__PURE__ */ new Date()) : Sn(l, t.modelType, /* @__PURE__ */ new Date()) : new Date(l);
  }, i = (l) => l ? t.utc ? rl(l, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +l : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? p(l) : p(l, t.modelType, !0) : l : "", d = (l, g = !1) => {
    if (e("update:model-value", l), o.value.emitTimezone && g) {
      const H = Array.isArray(l) ? l.map((s) => mt(_e(s), o.value.emitTimezone)) : mt(_e(l), o.value.emitTimezone);
      e("update:model-timezone-value", H);
    }
  }, Q = (l) => Array.isArray(a.value) ? t.multiDates ? a.value.map((g) => l(g)) : [
    l(a.value[0]),
    a.value[1] ? l(a.value[1]) : At(c.value.partialRange)
  ] : l(_e(a.value)), le = () => {
    if (Array.isArray(a.value)) {
      const l = rt(a.value[0], t.weekStart), g = a.value[1] ? rt(a.value[1], t.weekStart) : [];
      return [l.map((H) => N(H)), g.map((H) => N(H))];
    }
    return rt(a.value, t.weekStart).map((l) => N(l));
  }, E = (l) => d(_e(Q(l)));
  return {
    inputValue: b,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? c.value.enabled ? c.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: oe,
    formatInputValue: P,
    emitModelValue: () => (P(), t.monthPicker ? E(B) : t.timePicker ? E($) : t.yearPicker ? E(ye) : t.weekPicker ? e("update:model-value", le()) : d(A(), !0))
  };
}, Rl = (e, t) => {
  const { defaultedFilters: r, propDates: a } = Re(e), { validateMonthYearInRange: n } = yt(e), c = (p, $) => {
    let B = p;
    return r.value.months.includes(he(B)) ? (B = $ ? wt(p, 1) : Lt(p, 1), c(B, $)) : B;
  }, o = (p, $) => {
    let B = p;
    return r.value.years.includes(ye(B)) ? (B = $ ? ua(p, 1) : ia(p, 1), o(B, $)) : B;
  }, v = (p, $ = !1) => {
    const B = Ae(N(), { month: e.month, year: e.year });
    let C = p ? wt(B, 1) : Lt(B, 1);
    e.disableYearSelect && (C = tt(C, e.year));
    let W = he(C), y = ye(C);
    r.value.months.includes(W) && (C = c(C, p), W = he(C), y = ye(C)), r.value.years.includes(y) && (C = o(C, p), y = ye(C)), n(W, y, p, e.preventMinMaxNavigation) && b(W, y, $);
  }, b = (p, $, B) => {
    t("update-month-year", { month: p, year: $, fromNav: B });
  }, _ = j(() => (p) => ba(
    Ae(N(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    p
  ));
  return { handleMonthYearChange: v, isDisabled: _, updateMonthYear: b };
};
var Tt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Tt || {}), Ge = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ge || {}), bt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(bt || {}), Mt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Mt || {}), et = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(et || {});
const Pl = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: r,
  pickerWrapperRef: a,
  inline: n,
  emit: c,
  props: o,
  slots: v
}) => {
  const b = ee({}), _ = ee(!1), p = ee({
    top: "0",
    left: "0"
  }), $ = ee(!1), B = xt(o, "teleportCenter");
  ft(B, () => {
    p.value = JSON.parse(JSON.stringify({})), M();
  });
  const C = (i) => {
    if (o.teleport) {
      const d = i.getBoundingClientRect();
      return {
        left: d.left + window.scrollX,
        top: d.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, W = (i, d) => {
    p.value.left = `${i + d - b.value.width}px`;
  }, y = (i) => {
    p.value.left = `${i}px`;
  }, X = (i, d) => {
    o.position === Tt.left && y(i), o.position === Tt.right && W(i, d), o.position === Tt.center && (p.value.left = `${i + d / 2 - b.value.width / 2}px`);
  }, R = (i) => {
    const { width: d, height: Q } = i.getBoundingClientRect(), { top: le, left: E } = o.altPosition ? o.altPosition(i) : C(i);
    return { top: +le, left: +E, width: d, height: Q };
  }, V = () => {
    p.value.left = "50%", p.value.top = "50%", p.value.transform = "translate(-50%, -50%)", p.value.position = "fixed", delete p.value.opacity;
  }, O = () => {
    const i = Be(r), { top: d, left: Q, transform: le } = o.altPosition(i);
    p.value = { top: `${d}px`, left: `${Q}px`, transform: le ?? "" };
  }, M = (i = !0) => {
    var d;
    if (!n.value.enabled) {
      if (B.value)
        return V();
      if (o.altPosition !== null)
        return O();
      if (i) {
        const Q = o.teleport ? (d = t.value) == null ? void 0 : d.$el : e.value;
        Q && (b.value = Q.getBoundingClientRect()), c("recalculate-position");
      }
      return k();
    }
  }, D = ({ inputEl: i, left: d, width: Q }) => {
    window.screen.width > 768 && !_.value && X(d, Q), A(i);
  }, G = (i) => {
    const { top: d, left: Q, height: le, width: E } = R(i);
    p.value.top = `${le + d + +o.offset}px`, $.value = !1, _.value || (p.value.left = `${Q + E / 2 - b.value.width / 2}px`), D({ inputEl: i, left: Q, width: E });
  }, te = (i) => {
    const { top: d, left: Q, width: le } = R(i);
    p.value.top = `${d - +o.offset - b.value.height}px`, $.value = !0, D({ inputEl: i, left: Q, width: le });
  }, A = (i) => {
    if (o.autoPosition) {
      const { left: d, width: Q } = R(i), { left: le, right: E } = b.value;
      if (!_.value) {
        if (Math.abs(le) !== Math.abs(E)) {
          if (le <= 0)
            return _.value = !0, y(d);
          if (E >= document.documentElement.clientWidth)
            return _.value = !0, W(d, Q);
        }
        return X(d, Q);
      }
    }
  }, ae = () => {
    const i = Be(r);
    if (i) {
      const { height: d } = b.value, { top: Q, height: le } = i.getBoundingClientRect(), m = window.innerHeight - Q - le, F = Q;
      return d <= m ? bt.bottom : d > m && d <= F ? bt.top : m >= F ? bt.bottom : bt.top;
    }
    return bt.bottom;
  }, oe = (i) => ae() === bt.bottom ? G(i) : te(i), k = () => {
    const i = Be(r);
    if (i)
      return o.autoPosition ? oe(i) : G(i);
  }, L = function(i) {
    if (i) {
      const d = i.scrollHeight > i.clientHeight, le = window.getComputedStyle(i).overflowY.indexOf("hidden") !== -1;
      return d && !le;
    }
    return !0;
  }, x = function(i) {
    return !i || i === document.body || i.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : L(i) ? i : x(i.parentNode);
  }, P = (i) => {
    if (i)
      switch (o.position) {
        case Tt.left:
          return { left: 0, transform: "translateX(0)" };
        case Tt.right:
          return { left: `${i.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${i.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: $,
    menuStyle: p,
    xCorrect: _,
    setMenuPosition: M,
    getScrollableParent: x,
    shadowRender: (i, d) => {
      var l, g, H;
      const Q = document.createElement("div"), le = (l = Be(r)) == null ? void 0 : l.getBoundingClientRect();
      Q.setAttribute("id", "dp--temp-container");
      const E = (g = a.value) != null && g.clientWidth ? a.value : document.body;
      E.append(Q);
      const m = P(le), F = Oa(
        i,
        {
          ...d,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...m }
        },
        Object.fromEntries(
          Object.keys(v).filter((s) => ["right-sidebar", "left-sidebar"].includes(s)).map((s) => [s, v[s]])
        )
      );
      Un(F, Q), b.value = (H = F.el) == null ? void 0 : H.getBoundingClientRect(), Un(null, Q), E.removeChild(Q);
    }
  };
}, ut = [
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
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "calendar-bottom-marker-description-area", use: ["calendar", "shared"] },
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
  { name: "quarter", use: ["shared"] }
], Cl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], _l = {
  all: () => ut,
  monthYear: () => ut.filter((e) => e.use.includes("month-year")),
  input: () => Cl,
  timePicker: () => ut.filter((e) => e.use.includes("time")),
  action: () => ut.filter((e) => e.use.includes("action")),
  calendar: () => ut.filter((e) => e.use.includes("calendar")),
  menu: () => ut.filter((e) => e.use.includes("menu")),
  shared: () => ut.filter((e) => e.use.includes("shared")),
  yearMode: () => ut.filter((e) => e.use.includes("year-mode"))
}, He = (e, t, r) => {
  const a = [];
  return _l[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), r != null && r.length && r.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, zt = (e) => {
  const t = j(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), r = j(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: r };
}, Ut = (e, t) => {
  const { defaultedRange: r, defaultedTz: a } = Re(e), n = N(mt(N(), a.value.timezone)), c = ee([{ month: he(n), year: ye(n) }]), o = Ht({
    hours: r.value.enabled ? [Xe(n), Xe(n)] : Xe(n),
    minutes: r.value.enabled ? [at(n), at(n)] : at(n),
    seconds: r.value.enabled ? [0, 0] : 0
  }), v = j({
    get: () => e.internalModelValue,
    set: (p) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", p);
    }
  }), b = j(
    () => (p) => c.value[p] ? c.value[p].month : 0
  ), _ = j(
    () => (p) => c.value[p] ? c.value[p].year : 0
  );
  return {
    calendars: c,
    time: o,
    modelValue: v,
    month: b,
    year: _
  };
}, Ol = (e, t) => {
  const { defaultedMultiCalendars: r, defaultedHighlight: a, defaultedTz: n, propDates: c, defaultedRange: o } = Re(t), { isDisabled: v } = yt(t), b = ee(null), _ = ee(mt(/* @__PURE__ */ new Date(), n.value.timezone)), p = (l) => {
    !l.current && t.hideOffsetDates || (b.value = l.value);
  }, $ = () => {
    b.value = null;
  }, B = (l) => Array.isArray(e.value) && o.value.enabled && e.value[0] && b.value ? l ? Ce(b.value, e.value[0]) : Pe(b.value, e.value[0]) : !0, C = (l, g) => {
    const H = () => e.value ? g ? e.value[0] || null : e.value[1] : null, s = e.value && Array.isArray(e.value) ? H() : null;
    return ke(N(l.value), s);
  }, W = (l) => {
    const g = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !Pe(b.value ?? null, g) : !0;
  }, y = (l, g = !0) => (o.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !l.current ? !1 : ke(N(l.value), e.value[g ? 0 : 1]) : o.value.enabled ? C(l, g) && W(g) || ke(l.value, Array.isArray(e.value) ? e.value[0] : null) && B(g) : !1, X = (l, g, H) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? l ? !1 : H ? Ce(e.value[0], g.value) : Pe(e.value[0], g.value) : !1, R = (l) => !e.value || t.hideOffsetDates && !l.current ? !1 : o.value.enabled ? t.modelAuto && Array.isArray(e.value) ? ke(l.value, e.value[0] ? e.value[0] : _.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((g) => ke(g, l.value)) : ke(l.value, e.value ? e.value : _.value), V = (l) => {
    if (o.value.autoRange || t.weekPicker) {
      if (b.value) {
        if (t.hideOffsetDates && !l.current)
          return !1;
        const g = kt(b.value, +o.value.autoRange), H = rt(N(b.value), t.weekStart);
        return t.weekPicker ? ke(H[1], N(l.value)) : ke(g, N(l.value));
      }
      return !1;
    }
    return !1;
  }, O = (l) => {
    if (o.value.autoRange || t.weekPicker) {
      if (b.value) {
        const g = kt(b.value, +o.value.autoRange);
        if (t.hideOffsetDates && !l.current)
          return !1;
        const H = rt(N(b.value), t.weekStart);
        return t.weekPicker ? Ce(l.value, H[0]) && Pe(l.value, H[1]) : Ce(l.value, b.value) && Pe(l.value, g);
      }
      return !1;
    }
    return !1;
  }, M = (l) => {
    if (o.value.autoRange || t.weekPicker) {
      if (b.value) {
        if (t.hideOffsetDates && !l.current)
          return !1;
        const g = rt(N(b.value), t.weekStart);
        return t.weekPicker ? ke(g[0], l.value) : ke(b.value, l.value);
      }
      return !1;
    }
    return !1;
  }, D = (l) => an(e.value, b.value, l.value), G = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, te = () => t.modelAuto ? va(t.internalModelValue) : !0, A = (l) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const g = o.value.enabled ? !y(l) && !y(l, !1) : !0;
    return !v(l.value) && !R(l) && !(!l.current && t.hideOffsetDates) && g;
  }, ae = (l) => o.value.enabled ? t.modelAuto ? G() && R(l) : !1 : R(l), oe = (l) => a.value ? al(l.value, c.value.highlight) : !1, k = (l) => {
    const g = v(l.value);
    return g && (typeof a.value == "function" ? !a.value(l.value, g) : !a.value.options.highlightDisabled);
  }, L = (l) => {
    var g;
    return typeof a.value == "function" ? a.value(l.value) : (g = a.value.weekdays) == null ? void 0 : g.includes(l.value.getDay());
  }, x = (l) => (o.value.enabled || t.weekPicker) && (!(r.value.count > 0) || l.current) && te() && !(!l.current && t.hideOffsetDates) && !R(l) ? D(l) : !1, P = (l) => {
    const { isRangeStart: g, isRangeEnd: H } = Q(l), s = o.value.enabled ? g || H : !1;
    return {
      dp__cell_offset: !l.current,
      dp__pointer: !t.disabled && !(!l.current && t.hideOffsetDates) && !v(l.value),
      dp__cell_disabled: v(l.value),
      dp__cell_highlight: !k(l) && (oe(l) || L(l)) && !ae(l) && !s && !M(l) && !(x(l) && t.weekPicker) && !H,
      dp__cell_highlight_active: !k(l) && (oe(l) || L(l)) && ae(l),
      dp__today: !t.noToday && ke(l.value, _.value) && l.current,
      "dp--past": Pe(l.value, _.value),
      "dp--future": Ce(l.value, _.value)
    };
  }, Y = (l) => ({
    dp__active_date: ae(l),
    dp__date_hover: A(l)
  }), i = (l) => {
    if (e.value && !Array.isArray(e.value)) {
      const g = rt(e.value, t.weekStart);
      return {
        ...E(l),
        dp__range_start: ke(g[0], l.value),
        dp__range_end: ke(g[1], l.value),
        dp__range_between_week: Ce(l.value, g[0]) && Pe(l.value, g[1])
      };
    }
    return {
      ...E(l)
    };
  }, d = (l) => {
    if (e.value && Array.isArray(e.value)) {
      const g = rt(e.value[0], t.weekStart), H = e.value[1] ? rt(e.value[1], t.weekStart) : [];
      return {
        ...E(l),
        dp__range_start: ke(g[0], l.value) || ke(H[0], l.value),
        dp__range_end: ke(g[1], l.value) || ke(H[1], l.value),
        dp__range_between_week: Ce(l.value, g[0]) && Pe(l.value, g[1]) || Ce(l.value, H[0]) && Pe(l.value, H[1]),
        dp__range_between: Ce(l.value, g[1]) && Pe(l.value, H[0])
      };
    }
    return {
      ...E(l)
    };
  }, Q = (l) => {
    const g = r.value.count > 0 ? l.current && y(l) && te() : y(l) && te(), H = r.value.count > 0 ? l.current && y(l, !1) && te() : y(l, !1) && te();
    return { isRangeStart: g, isRangeEnd: H };
  }, le = (l) => {
    const { isRangeStart: g, isRangeEnd: H } = Q(l);
    return {
      dp__range_start: g,
      dp__range_end: H,
      dp__range_between: x(l),
      dp__date_hover_start: X(A(l), l, !0),
      dp__date_hover_end: X(A(l), l, !1)
    };
  }, E = (l) => ({
    ...le(l),
    dp__cell_auto_range: O(l),
    dp__cell_auto_range_start: M(l),
    dp__cell_auto_range_end: V(l)
  }), m = (l) => o.value.enabled ? o.value.autoRange ? E(l) : t.modelAuto ? { ...Y(l), ...le(l) } : t.weekPicker ? d(l) : le(l) : t.weekPicker ? i(l) : Y(l);
  return {
    setHoverDate: p,
    clearHoverDate: $,
    getDayClassData: (l) => t.hideOffsetDates && !l.current ? {} : {
      ...P(l),
      ...m(l),
      [t.dayClass ? t.dayClass(l.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, yt = (e) => {
  const { defaultedFilters: t, defaultedRange: r, propDates: a } = Re(e), n = (k) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(N(k)) : !!en(k, a.value.disabledDates) : !1, c = (k) => {
    const L = a.value.maxDate ? Ce(k, a.value.maxDate) : !1, x = a.value.minDate ? Pe(k, a.value.minDate) : !1, P = n(k), i = t.value.months.map((m) => +m).includes(he(k)), d = e.disabledWeekDays.length ? e.disabledWeekDays.some((m) => +m === Va(k)) : !1, Q = p(k), le = ye(k), E = le < +e.yearRange[0] || le > +e.yearRange[1];
    return !(L || x || P || i || E || d || Q);
  }, o = (k, L) => Pe(...it(a.value.minDate, k, L)) || ke(...it(a.value.minDate, k, L)), v = (k, L) => Ce(...it(a.value.maxDate, k, L)) || ke(...it(a.value.maxDate, k, L)), b = (k, L, x) => {
    let P = !1;
    return a.value.maxDate && x && v(k, L) && (P = !0), a.value.minDate && !x && o(k, L) && (P = !0), P;
  }, _ = (k, L, x, P) => {
    let Y = !1;
    return P ? a.value.minDate && a.value.maxDate ? Y = b(k, L, x) : (a.value.minDate && o(k, L) || a.value.maxDate && v(k, L)) && (Y = !0) : Y = !0, Y;
  }, p = (k) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !en(k, a.value.allowedDates) : !1, $ = (k) => !c(k), B = (k) => r.value.noDisabledRange ? !oa({ start: k[0], end: k[1] }).some((x) => $(x)) : !0, C = (k) => {
    if (k) {
      const L = ye(k);
      return L >= +e.yearRange[0] && L <= e.yearRange[1];
    }
    return !0;
  }, W = (k, L) => !!(Array.isArray(k) && k[L] && (r.value.maxRange || r.value.minRange) && C(k[L])), y = (k, L, x = 0) => {
    if (W(L, x) && C(k)) {
      const P = Wa(k, L[x]), Y = ga(L[x], k), i = Y.length === 1 ? 0 : Y.filter((Q) => $(Q)).length, d = Math.abs(P) - (r.value.minMaxRawRange ? 0 : i);
      if (r.value.minRange && r.value.maxRange)
        return d >= +r.value.minRange && d <= +r.value.maxRange;
      if (r.value.minRange)
        return d >= +r.value.minRange;
      if (r.value.maxRange)
        return d <= +r.value.maxRange;
    }
    return !0;
  }, X = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, R = (k) => Array.isArray(k) ? [k[0] ? kn(k[0]) : null, k[1] ? kn(k[1]) : null] : kn(k), V = (k, L, x) => k.find(
    (P) => +P.hours === Xe(L) && P.minutes === "*" ? !0 : +P.minutes === at(L) && +P.hours === Xe(L)
  ) && x, O = (k, L, x) => {
    const [P, Y] = k, [i, d] = L;
    return !V(P, i, x) && !V(Y, d, x) && x;
  }, M = (k, L) => {
    const x = Array.isArray(L) ? L : [L];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? O(e.disabledTimes, x, k) : !x.some((P) => V(e.disabledTimes, P, k)) : k;
  }, D = (k, L) => {
    const x = Array.isArray(L) ? [Dt(L[0]), L[1] ? Dt(L[1]) : void 0] : Dt(L), P = !e.disabledTimes(x);
    return k && P;
  }, G = (k, L) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? M(L, k) : D(L, k) : L, te = (k) => {
    let L = !0;
    if (!k || X())
      return !0;
    const x = !a.value.minDate && !a.value.maxDate ? R(k) : k;
    return (e.maxTime || a.value.maxDate) && (L = xn(
      e.maxTime,
      a.value.maxDate,
      "max",
      _e(x),
      L
    )), (e.minTime || a.value.minDate) && (L = xn(
      e.minTime,
      a.value.minDate,
      "min",
      _e(x),
      L
    )), G(k, L);
  }, A = (k) => {
    if (!e.monthPicker)
      return !0;
    let L = !0;
    const x = N(Qe(k));
    if (a.value.minDate && a.value.maxDate) {
      const P = N(Qe(a.value.minDate)), Y = N(Qe(a.value.maxDate));
      return Ce(x, P) && Pe(x, Y) || ke(x, P) || ke(x, Y);
    }
    if (a.value.minDate) {
      const P = N(Qe(a.value.minDate));
      L = Ce(x, P) || ke(x, P);
    }
    if (a.value.maxDate) {
      const P = N(Qe(a.value.maxDate));
      L = Pe(x, P) || ke(x, P);
    }
    return L;
  }, ae = j(() => (k) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : te(k)), oe = j(() => (k) => e.monthPicker ? Array.isArray(k) && (r.value.enabled || e.multiDates) ? !k.filter((x) => !A(x)).length : A(k) : !0);
  return {
    isDisabled: $,
    validateDate: c,
    validateMonthYearInRange: _,
    isDateRangeAllowed: B,
    checkMinMaxRange: y,
    isValidTime: te,
    isTimeValid: ae,
    isMonthValid: oe
  };
}, ln = () => {
  const e = j(() => (a, n) => a == null ? void 0 : a.includes(n)), t = j(() => (a, n) => a.count ? a.solo ? !0 : n === 0 : !0), r = j(() => (a, n) => a.count ? a.solo ? !0 : n === a.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: r };
}, Bl = (e, t, r) => {
  const a = ee(0), n = Ht({
    [Mt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Mt.calendar]: !1,
    [Mt.header]: !1
  }), c = j(() => e.monthPicker), o = ($) => {
    var B;
    if ((B = e.flow) != null && B.length) {
      if (!$ && c.value)
        return p();
      n[$] = !0, Object.keys(n).filter((C) => !n[C]).length || p();
    }
  }, v = () => {
    var $;
    ($ = e.flow) != null && $.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), p());
  }, b = () => {
    a.value = -1;
  }, _ = ($, B, ...C) => {
    var W, y;
    e.flow[a.value] === $ && r.value && ((y = (W = r.value)[B]) == null || y.call(W, ...C));
  }, p = () => {
    _(et.month, "toggleMonthPicker", !0), _(et.year, "toggleYearPicker", !0), _(et.calendar, "toggleTimePicker", !1, !0), _(et.time, "toggleTimePicker", !0, !0);
    const $ = e.flow[a.value];
    ($ === et.hours || $ === et.minutes || $ === et.seconds) && _($, "toggleTimePicker", !0, !0, $);
  };
  return { childMount: o, updateFlowStep: v, resetFlow: b, flowStep: a };
}, rn = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [String, Boolean, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 }
}, Je = {
  ...rn,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, Yl = {
  key: 1,
  class: "dp__input_wrap"
}, Il = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Nl = {
  key: 2,
  class: "dp__clear_icon"
}, El = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...rn
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTextInput: c,
      defaultedAriaLabels: o,
      defaultedInline: v,
      defaultedConfig: b,
      defaultedRange: _,
      getDefaultPattern: p,
      getDefaultStartTime: $
    } = Re(n), { checkMinMaxRange: B } = yt(n), C = ee(), W = ee(null), y = ee(!1), X = ee(!1), R = j(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !c.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !c.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: !!n.state,
        dp__input_invalid: n.state === !1,
        dp__input_focus: y.value || n.isMenuOpen,
        dp__input_reg: !c.value.enabled,
        [n.inputClassName]: !!n.inputClassName
      })
    ), V = () => {
      a("set-input-date", null), n.autoApply && (a("set-empty-date"), C.value = null);
    }, O = (d) => {
      const Q = $();
      return ll(
        d,
        c.value.format ?? p(),
        Q ?? ha({}, n.enableSeconds),
        n.inputValue,
        X.value
      );
    }, M = (d) => {
      const { rangeSeparator: Q } = c.value, [le, E] = d.split(`${Q}`);
      if (le) {
        const m = O(le.trim()), F = E ? O(E.trim()) : null, l = m && F ? [m, F] : [m];
        B(F, l, 0) && (C.value = m ? l : null);
      }
    }, D = () => {
      X.value = !0;
    }, G = (d) => {
      if (_.value.enabled)
        M(d);
      else if (n.multiDates) {
        const Q = d.split(";");
        C.value = Q.map((le) => O(le.trim())).filter((le) => le);
      } else
        C.value = O(d);
    }, te = (d) => {
      var le;
      const Q = typeof d == "string" ? d : (le = d.target) == null ? void 0 : le.value;
      Q !== "" ? (c.value.openMenu && !n.isMenuOpen && a("open"), G(Q), a("set-input-date", C.value)) : V(), X.value = !1, a("update:input-value", Q);
    }, A = (d) => {
      c.value.enabled ? (G(d.target.value), c.value.enterSubmit && Rn(C.value) && n.inputValue !== "" ? (a("set-input-date", C.value, !0), C.value = null) : c.value.enterSubmit && n.inputValue === "" && (C.value = null, a("clear"))) : k(d);
    }, ae = (d) => {
      c.value.enabled && c.value.tabSubmit && G(d.target.value), c.value.tabSubmit && Rn(C.value) && n.inputValue !== "" ? (a("set-input-date", C.value, !0, !0), C.value = null) : c.value.tabSubmit && n.inputValue === "" && (C.value = null, a("clear", !0));
    }, oe = () => {
      var d;
      y.value = !0, a("focus"), c.value.enabled && c.value.selectOnFocus && ((d = W.value) == null || d.select());
    }, k = (d) => {
      d.preventDefault(), dt(d, b.value, !0), c.value.enabled && c.value.openMenu && !v.value.input && !n.isMenuOpen ? a("open") : c.value.enabled || a("toggle");
    }, L = () => {
      a("real-blur"), y.value = !1, (!n.isMenuOpen || v.value.enabled && v.value.input) && a("blur"), n.autoApply && c.value.enabled && C.value && !n.isMenuOpen && (a("set-input-date", C.value), a("select-date"), C.value = null);
    }, x = (d) => {
      dt(d, b.value, !0), a("clear");
    }, P = (d) => {
      if (!c.value.enabled) {
        if (d.code === "Tab")
          return;
        d.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var d;
        (d = W.value) == null || d.focus({ preventScroll: !0 });
      },
      setParsedDate: (d) => {
        C.value = d;
      }
    }), (d, Q) => {
      var le;
      return w(), U("div", { onClick: k }, [
        d.$slots.trigger && !d.$slots["dp-input"] && !u(v).enabled ? ue(d.$slots, "trigger", { key: 0 }) : q("", !0),
        !d.$slots.trigger && (!u(v).enabled || u(v).input) ? (w(), U("div", Yl, [
          d.$slots["dp-input"] && !d.$slots.trigger && (!u(v).enabled || u(v).enabled && u(v).input) ? ue(d.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: te,
            onEnter: A,
            onTab: ae,
            onClear: x,
            onBlur: L,
            onKeypress: P,
            onPaste: D,
            openMenu: () => d.$emit("open"),
            closeMenu: () => d.$emit("close"),
            toggleMenu: () => d.$emit("toggle")
          }) : q("", !0),
          d.$slots["dp-input"] ? q("", !0) : (w(), U("input", {
            key: 1,
            id: d.uid ? `dp-input-${d.uid}` : void 0,
            ref_key: "inputRef",
            ref: W,
            name: d.name,
            class: De(R.value),
            inputmode: u(c).enabled ? "text" : "none",
            placeholder: d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            required: d.required,
            value: e.inputValue,
            autocomplete: d.autocomplete,
            "aria-label": (le = u(o)) == null ? void 0 : le.input,
            "aria-disabled": d.disabled || void 0,
            "aria-invalid": d.state === !1 ? !0 : void 0,
            onInput: te,
            onKeydown: [
              ve(A, ["enter"]),
              ve(ae, ["tab"]),
              P
            ],
            onBlur: L,
            onFocus: oe,
            onKeypress: P,
            onPaste: D
          }, null, 42, Il)),
          ce("div", {
            onClick: Q[2] || (Q[2] = (E) => a("toggle"))
          }, [
            d.$slots["input-icon"] && !d.hideInputIcon ? (w(), U("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: Q[0] || (Q[0] = (E) => a("toggle"))
            }, [
              ue(d.$slots, "input-icon")
            ])) : q("", !0),
            !d.$slots["input-icon"] && !d.hideInputIcon && !d.$slots["dp-input"] ? (w(), we(u(Ot), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: Q[1] || (Q[1] = (E) => a("toggle"))
            })) : q("", !0)
          ]),
          d.$slots["clear-icon"] && e.inputValue && d.clearable && !d.disabled && !d.readonly ? (w(), U("span", Nl, [
            ue(d.$slots, "clear-icon", { clear: x })
          ])) : q("", !0),
          d.clearable && !d.$slots["clear-icon"] && e.inputValue && !d.disabled && !d.readonly ? (w(), we(u(ca), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: Q[3] || (Q[3] = $e((E) => x(E), ["prevent"]))
          })) : q("", !0)
        ])) : q("", !0)
      ]);
    };
  }
}), Fl = ["title"], Ll = ["disabled"], Vl = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...Je
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const r = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: c,
      defaultedMultiCalendars: o,
      defaultedTextInput: v,
      defaultedInline: b,
      defaultedRange: _,
      getDefaultPattern: p
    } = Re(a), { isTimeValid: $, isMonthValid: B } = yt(a), { buildMatrix: C } = pt(), W = ee(null), y = ee(null), X = ee(!1), R = ee({}), V = ee(null), O = ee(null);
    We(() => {
      a.arrowNavigation && C([Be(W), Be(y)], "actionRow"), M(), window.addEventListener("resize", M);
    }), tn(() => {
      window.removeEventListener("resize", M);
    });
    const M = () => {
      X.value = !1, setTimeout(() => {
        var i, d;
        const P = (i = V.value) == null ? void 0 : i.getBoundingClientRect(), Y = (d = O.value) == null ? void 0 : d.getBoundingClientRect();
        P && Y && (R.value.maxWidth = `${Y.width - P.width - 20}px`), X.value = !0;
      }, 0);
    }, D = j(() => _.value.enabled && !_.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), G = j(
      () => !$.value(a.internalModelValue) || !B.value(a.internalModelValue) || !D.value
    ), te = () => {
      const P = c.value;
      return a.timePicker || a.monthPicker, P(_e(a.internalModelValue));
    }, A = () => {
      const P = a.internalModelValue;
      return o.value.count > 0 ? `${ae(P[0])} - ${ae(P[1])}` : [ae(P[0]), ae(P[1])];
    }, ae = (P) => ka(
      P,
      c.value,
      a.formatLocale,
      v.value.rangeSeparator,
      a.modelAuto,
      p()
    ), oe = j(() => !a.internalModelValue || !a.menuMount ? "" : typeof c.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? A() : a.multiDates ? a.internalModelValue.map((P) => `${ae(P)}`) : a.modelAuto ? `${ae(a.internalModelValue[0])}` : `${ae(a.internalModelValue[0])} -` : ae(a.internalModelValue) : te()), k = () => a.multiDates ? "; " : " - ", L = j(
      () => Array.isArray(oe.value) ? oe.value.join(k()) : oe.value
    ), x = () => {
      $.value(a.internalModelValue) && B.value(a.internalModelValue) && D.value ? r("select-date") : r("invalid-select");
    };
    return (P, Y) => (w(), U("div", {
      ref_key: "actionRowRef",
      ref: O,
      class: "dp__action_row"
    }, [
      P.$slots["action-row"] ? ue(P.$slots, "action-row", Oe(Ie({ key: 0 }, {
        internalModelValue: P.internalModelValue,
        disabled: G.value,
        selectDate: () => P.$emit("select-date"),
        closePicker: () => P.$emit("close-picker")
      }))) : (w(), U(be, { key: 1 }, [
        u(n).showPreview ? (w(), U("div", {
          key: 0,
          class: "dp__selection_preview",
          title: L.value,
          style: qe(R.value)
        }, [
          P.$slots["action-preview"] && X.value ? ue(P.$slots, "action-preview", {
            key: 0,
            value: P.internalModelValue
          }) : q("", !0),
          !P.$slots["action-preview"] && X.value ? (w(), U(be, { key: 1 }, [
            st(Ee(L.value), 1)
          ], 64)) : q("", !0)
        ], 12, Fl)) : q("", !0),
        ce("div", {
          ref_key: "actionBtnContainer",
          ref: V,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          P.$slots["action-buttons"] ? ue(P.$slots, "action-buttons", {
            key: 0,
            value: P.internalModelValue
          }) : q("", !0),
          P.$slots["action-buttons"] ? q("", !0) : (w(), U(be, { key: 1 }, [
            !u(b).enabled && u(n).showCancel ? (w(), U("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: W,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: Y[0] || (Y[0] = (i) => P.$emit("close-picker")),
              onKeydown: [
                Y[1] || (Y[1] = ve((i) => P.$emit("close-picker"), ["enter"])),
                Y[2] || (Y[2] = ve((i) => P.$emit("close-picker"), ["space"]))
              ]
            }, Ee(P.cancelText), 545)) : q("", !0),
            u(n).showNow ? (w(), U("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: Y[3] || (Y[3] = (i) => P.$emit("select-now")),
              onKeydown: [
                Y[4] || (Y[4] = ve((i) => P.$emit("select-now"), ["enter"])),
                Y[5] || (Y[5] = ve((i) => P.$emit("select-now"), ["space"]))
              ]
            }, Ee(P.nowButtonLabel), 33)) : q("", !0),
            u(n).showSelect ? (w(), U("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: y,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: G.value,
              onKeydown: [
                ve(x, ["enter"]),
                ve(x, ["space"])
              ],
              onClick: x
            }, Ee(P.selectText), 41, Ll)) : q("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), Wl = ["onKeydown"], Hl = { class: "dp__selection_grid_header" }, zl = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Ul = ["aria-label"], Kt = /* @__PURE__ */ Ne({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: r }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: c } = pt(), o = r, v = e, { defaultedAriaLabels: b, defaultedTextInput: _, defaultedConfig: p } = Re(
      v
    ), { hideNavigationButtons: $ } = ln(), B = ee(!1), C = ee(null), W = ee(null), y = ee([]), X = ee(), R = ee(null), V = ee(0), O = ee(null);
    Ba(() => {
      C.value = null;
    }), We(() => {
      vt().then(() => k()), v.noOverlayFocus || D(), M(!0);
    }), tn(() => M(!1));
    const M = (E) => {
      var m;
      v.arrowNavigation && ((m = v.headerRefs) != null && m.length ? c(E) : a(E));
    }, D = () => {
      var m;
      const E = Be(W);
      E && (_.value.enabled || (C.value ? (m = C.value) == null || m.focus({ preventScroll: !0 }) : E.focus({ preventScroll: !0 })), B.value = E.clientHeight < E.scrollHeight);
    }, G = j(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !v.useRelative,
        "dp--overlay-relative": v.useRelative
      })
    ), te = j(
      () => v.useRelative ? { height: `${v.height}px`, width: "260px" } : void 0
    ), A = j(() => ({
      dp__overlay_col: !0
    })), ae = j(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: B.value,
        dp__button_bottom: v.isLast
      })
    ), oe = j(() => {
      var E, m;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((E = v.items) == null ? void 0 : E.length) <= 6,
        dp__container_block: ((m = v.items) == null ? void 0 : m.length) > 6
      };
    });
    ft(
      () => v.items,
      () => k(!1),
      { deep: !0 }
    );
    const k = (E = !0) => {
      vt().then(() => {
        const m = Be(C), F = Be(W), l = Be(R), g = Be(O), H = l ? l.getBoundingClientRect().height : 0;
        F && (F.getBoundingClientRect().height ? V.value = F.getBoundingClientRect().height - H : V.value = p.value.modeHeight - H), m && g && E && (g.scrollTop = m.offsetTop - g.offsetTop - (V.value / 2 - m.getBoundingClientRect().height) - H);
      });
    }, L = (E) => {
      E.disabled || o("selected", E.value);
    }, x = () => {
      o("toggle"), o("reset-flow");
    }, P = () => {
      v.escClose && x();
    }, Y = (E, m, F, l) => {
      E && ((m.active || m.value === v.focusValue) && (C.value = E), v.arrowNavigation && (Array.isArray(y.value[F]) ? y.value[F][l] = E : y.value[F] = [E], i()));
    }, i = () => {
      var m, F;
      const E = (m = v.headerRefs) != null && m.length ? [v.headerRefs].concat(y.value) : y.value.concat([v.skipButtonRef ? [] : [R.value]]);
      n(_e(E), (F = v.headerRefs) != null && F.length ? "monthPicker" : "selectionGrid");
    }, d = (E) => {
      v.arrowNavigation || dt(E, p.value, !0);
    }, Q = (E) => {
      X.value = E, o("hover-value", E);
    }, le = () => {
      if (x(), !v.isLast) {
        const E = nl(v.menuWrapRef ?? null, "action-row");
        if (E) {
          const m = ma(E);
          m == null || m.focus();
        }
      }
    };
    return t({ focusGrid: D }), (E, m) => {
      var F;
      return w(), U("div", {
        ref_key: "gridWrapRef",
        ref: W,
        class: De(G.value),
        style: qe(te.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          ve($e(P, ["prevent"]), ["esc"]),
          m[0] || (m[0] = ve($e((l) => d(l), ["prevent"]), ["left"])),
          m[1] || (m[1] = ve($e((l) => d(l), ["prevent"]), ["up"])),
          m[2] || (m[2] = ve($e((l) => d(l), ["prevent"]), ["down"])),
          m[3] || (m[3] = ve($e((l) => d(l), ["prevent"]), ["right"]))
        ]
      }, [
        ce("div", {
          ref_key: "containerRef",
          ref: O,
          class: De(oe.value),
          role: "grid",
          style: qe({ height: `${V.value}px` })
        }, [
          ce("div", Hl, [
            ue(E.$slots, "header")
          ]),
          E.$slots.overlay ? ue(E.$slots, "overlay", { key: 0 }) : (w(!0), U(be, { key: 1 }, Se(E.items, (l, g) => (w(), U("div", {
            key: g,
            class: De(["dp__overlay_row", { dp__flex_row: E.items.length >= 3 }]),
            role: "row"
          }, [
            (w(!0), U(be, null, Se(l, (H, s) => (w(), U("div", {
              key: H.value,
              ref_for: !0,
              ref: (z) => Y(z, H, g, s),
              role: "gridcell",
              class: De(A.value),
              "aria-selected": H.active || void 0,
              "aria-disabled": H.disabled || void 0,
              tabindex: "0",
              onClick: (z) => L(H),
              onKeydown: [
                ve($e((z) => L(H), ["prevent"]), ["enter"]),
                ve($e((z) => L(H), ["prevent"]), ["space"])
              ],
              onMouseover: (z) => Q(H.value)
            }, [
              ce("div", {
                class: De(H.className)
              }, [
                E.$slots.item ? ue(E.$slots, "item", {
                  key: 0,
                  item: H
                }) : q("", !0),
                E.$slots.item ? q("", !0) : (w(), U(be, { key: 1 }, [
                  st(Ee(H.text), 1)
                ], 64))
              ], 2)
            ], 42, zl))), 128))
          ], 2))), 128))
        ], 6),
        E.$slots["button-icon"] ? Xt((w(), U("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: R,
          type: "button",
          "aria-label": (F = u(b)) == null ? void 0 : F.toggleOverlay,
          class: De(ae.value),
          tabindex: "0",
          onClick: x,
          onKeydown: [
            ve(x, ["enter"]),
            ve(le, ["tab"])
          ]
        }, [
          ue(E.$slots, "button-icon")
        ], 42, Ul)), [
          [Jt, !u($)(E.hideNavigation, E.type)]
        ]) : q("", !0)
      ], 46, Wl);
    };
  }
}), on = /* @__PURE__ */ Ne({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, r = j(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = j(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, c) => (w(), U("div", {
      class: De({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      })
    }, [
      (w(!0), U(be, null, Se(r.value, (o, v) => (w(), U("div", {
        key: o,
        class: De(a.value)
      }, [
        ue(n.$slots, "default", {
          instance: o,
          index: v
        })
      ], 2))), 128))
    ], 2));
  }
}), Kl = ["aria-label", "aria-disabled"], Et = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const r = t, a = ee(null);
    return We(() => r("set-ref", a)), (n, c) => (w(), U("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: c[0] || (c[0] = (o) => n.$emit("activate")),
      onKeydown: [
        c[1] || (c[1] = ve($e((o) => n.$emit("activate"), ["prevent"]), ["enter"])),
        c[2] || (c[2] = ve($e((o) => n.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      ce("span", {
        class: De(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        ue(n.$slots, "default")
      ], 2)
    ], 40, Kl));
  }
}), jl = { class: "dp--year-mode-picker" }, Gl = ["aria-label"], $a = /* @__PURE__ */ Ne({
  __name: "YearModePicker",
  props: {
    ...Je,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const r = t, a = e, { showRightIcon: n, showLeftIcon: c } = ln(), { defaultedConfig: o, defaultedMultiCalendars: v, defaultedAriaLabels: b, defaultedTransitions: _ } = Re(a), { showTransition: p, transitionName: $ } = zt(_), B = (y = !1, X) => {
      r("toggle-year-picker", { flow: y, show: X });
    }, C = (y) => {
      r("year-select", y);
    }, W = (y = !1) => {
      r("handle-year", y);
    };
    return (y, X) => {
      var R, V, O;
      return w(), U("div", jl, [
        u(c)(u(v), e.instance) ? (w(), we(Et, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (R = u(b)) == null ? void 0 : R.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: X[0] || (X[0] = (M) => W(!1))
        }, {
          default: ge(() => [
            y.$slots["arrow-left"] ? ue(y.$slots, "arrow-left", { key: 0 }) : q("", !0),
            y.$slots["arrow-left"] ? q("", !0) : (w(), we(u(On), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : q("", !0),
        ce("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (V = u(b)) == null ? void 0 : V.openYearsOverlay,
          onClick: X[1] || (X[1] = () => B(!1)),
          onKeydown: X[2] || (X[2] = ve(() => B(!1), ["enter"]))
        }, [
          y.$slots.year ? ue(y.$slots, "year", {
            key: 0,
            year: e.year
          }) : q("", !0),
          y.$slots.year ? q("", !0) : (w(), U(be, { key: 1 }, [
            st(Ee(e.year), 1)
          ], 64))
        ], 40, Gl),
        u(n)(u(v), e.instance) ? (w(), we(Et, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (O = u(b)) == null ? void 0 : O.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: X[3] || (X[3] = (M) => W(!0))
        }, {
          default: ge(() => [
            y.$slots["arrow-right"] ? ue(y.$slots, "arrow-right", { key: 0 }) : q("", !0),
            y.$slots["arrow-right"] ? q("", !0) : (w(), we(u(Bn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : q("", !0),
        Ke(_t, {
          name: u($)(e.showYearPicker),
          css: u(p)
        }, {
          default: ge(() => [
            e.showYearPicker ? (w(), we(Kt, {
              key: 0,
              items: e.items,
              "text-input": y.textInput,
              "esc-close": y.escClose,
              config: y.config,
              "is-last": y.autoApply && !u(o).keepActionRow,
              "hide-navigation": y.hideNavigation,
              "aria-labels": y.ariaLabels,
              type: "year",
              onToggle: B,
              onSelected: X[4] || (X[4] = (M) => C(M))
            }, Ve({
              "button-icon": ge(() => [
                y.$slots["calendar-icon"] ? ue(y.$slots, "calendar-icon", { key: 0 }) : q("", !0),
                y.$slots["calendar-icon"] ? q("", !0) : (w(), we(u(Ot), { key: 1 }))
              ]),
              _: 2
            }, [
              y.$slots["year-overlay-value"] ? {
                name: "item",
                fn: ge(({ item: M }) => [
                  ue(y.$slots, "year-overlay-value", {
                    text: M.text,
                    value: M.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : q("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Wn = (e, t, r) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => ke(e, a))) {
      const a = t.value.filter((n) => !ke(n, e));
      t.value = a.length ? a : null;
    } else
      (r && +r > t.value.length || !r) && t.value.push(e);
  else
    t.value = [e];
}, Hn = (e, t, r) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? Pe(t, a[0]) ? (a.unshift(t), r("range-start", a[0]), r("range-start", a[1])) : (a[1] = t, r("range-end", t)) : (a = [t], r("range-start", t)), a;
}, sn = (e, t, r, a) => {
  e && (e[0] && e[1] && r && t("auto-apply"), e[0] && !e[1] && a && r && t("auto-apply"));
}, Aa = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => mt(N(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = mt(N(e.value), e.timezone));
}, Ta = (e, t, r, a) => Array.isArray(t.value) && t.value.length === 2 ? a.value.fixedStart && (Ce(e, t.value[0]) || ke(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (Pe(e, t.value[1]) || ke(e, t.value[1])) ? [e, t.value[1]] : (r("invalid-fixed-range", e), t.value) : [], Sa = ({
  multiCalendars: e,
  highlight: t,
  propDates: r,
  calendars: a,
  modelValue: n,
  props: c,
  year: o,
  month: v,
  emit: b
}) => {
  const _ = j(() => En(c.yearRange, c.reverseYears)), p = ee([!1]), $ = j(() => (D, G) => {
    const te = Ae(Qe(/* @__PURE__ */ new Date()), {
      month: v.value(D),
      year: o.value(D)
    });
    return ba(
      te,
      r.value.maxDate,
      r.value.minDate,
      c.preventMinMaxNavigation,
      G
    );
  }), B = () => {
    for (let D = 0; D < e.value.count; D++)
      if (D === 0)
        a.value[D] = a.value[0];
      else {
        const G = Ae(N(), a.value[D - 1]);
        a.value[D] = { month: he(G), year: ye(ua(G, 1)) };
      }
  }, C = (D) => {
    if (!D)
      return B();
    const G = Ae(N(), a.value[D]);
    return a.value[0].year = ye(ia(G, e.value.count - 1)), B();
  }, W = (D) => c.focusStartDate ? D[0] : D[1] ? D[1] : D[0], y = () => {
    if (n.value) {
      const D = Array.isArray(n.value) ? W(n.value) : n.value;
      a.value[0] = { month: he(D), year: ye(D) };
    }
  };
  We(() => {
    y(), e.value.count && B();
  });
  const X = (D, G) => {
    a.value[G].year = D, e.value.count && !e.value.solo && C(G);
  }, R = j(() => (D) => Pt(_.value, (G) => {
    const te = o.value(D) === G.value, A = Wt(
      G.value,
      Ct(r.value.minDate),
      Ct(r.value.maxDate)
    ), ae = Vn(t.value, G.value);
    return { active: te, disabled: A, highlighted: ae };
  })), V = (D, G) => {
    X(D, G), M(G);
  }, O = (D, G = !1) => {
    if (!$.value(D, G)) {
      const te = G ? o.value(D) + 1 : o.value(D) - 1;
      X(te, D);
    }
  }, M = (D, G = !1, te) => {
    G || b("reset-flow"), te !== void 0 ? p.value[D] = te : p.value[D] = !p.value[D], p.value || b("overlay-closed");
  };
  return {
    isDisabled: $,
    groupedYears: R,
    showYearPicker: p,
    selectYear: X,
    toggleYearPicker: M,
    handleYearSelect: V,
    handleYear: O
  };
}, Ql = (e, t) => {
  const {
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: c,
    defaultedRange: o,
    defaultedHighlight: v,
    propDates: b,
    defaultedTz: _
  } = Re(e), { modelValue: p, year: $, month: B, calendars: C } = Ut(e, t), W = j(() => fa(e.formatLocale, e.locale, e.monthNameFormat)), y = ee(null), { checkMinMaxRange: X } = yt(e), {
    selectYear: R,
    groupedYears: V,
    showYearPicker: O,
    toggleYearPicker: M,
    handleYearSelect: D,
    handleYear: G,
    isDisabled: te
  } = Sa({
    modelValue: p,
    multiCalendars: r,
    highlight: v,
    calendars: C,
    year: $,
    propDates: b,
    month: B,
    props: e,
    emit: t
  });
  We(() => {
    e.startDate && (p.value && e.focusStartDate || !p.value) && R(ye(N(e.startDate)), 0);
  });
  const A = (l) => l ? { month: he(l), year: ye(l) } : { month: null, year: null }, ae = () => p.value ? Array.isArray(p.value) ? p.value.map((l) => A(l)) : A(p.value) : A(), oe = (l, g) => {
    const H = C.value[l], s = ae();
    return Array.isArray(s) ? s.some((z) => z.year === (H == null ? void 0 : H.year) && z.month === g) : (H == null ? void 0 : H.year) === s.year && g === s.month;
  }, k = (l, g, H) => {
    var z, ne;
    const s = ae();
    return Array.isArray(s) ? $.value(g) === ((z = s[H]) == null ? void 0 : z.year) && l === ((ne = s[H]) == null ? void 0 : ne.month) : !1;
  }, L = (l, g) => {
    if (o.value.enabled) {
      const H = ae();
      if (Array.isArray(p.value) && Array.isArray(H)) {
        const s = k(l, g, 0) || k(l, g, 1), z = ot(Qe(N()), l, $.value(g));
        return an(p.value, y.value, z) && !s;
      }
      return !1;
    }
    return !1;
  }, x = j(() => (l) => Pt(W.value, (g) => {
    const H = oe(l, g.value), s = Wt(
      g.value,
      pa($.value(l), b.value.minDate),
      ya($.value(l), b.value.maxDate)
    ) || dl(b.value.disabledDates, $.value(l)).includes(g.value), z = L(g.value, l), ne = wa(v.value, g.value, $.value(l));
    return { active: H, disabled: s, isBetween: z, highlighted: ne };
  })), P = (l, g) => ot(Qe(N()), l, $.value(g)), Y = (l, g) => {
    const H = p.value ? p.value : Qe(/* @__PURE__ */ new Date());
    p.value = ot(H, l, $.value(g)), t("auto-apply"), t("update-flow-step");
  }, i = (l, g) => {
    const H = P(l, g);
    o.value.fixedEnd || o.value.fixedStart ? p.value = Ta(H, p, t, o) : p.value ? X(H, p.value) && (p.value = Hn(p, P(l, g), t)) : p.value = [P(l, g)], sn(p.value, t, e.autoApply, e.modelAuto);
  }, d = (l, g) => {
    Wn(P(l, g), p, e.multiDatesLimit), t("auto-apply", !0);
  }, Q = (l, g) => (C.value[g].month = l, E(g, C.value[g].year, l), e.multiDates ? d(l, g) : o.value.enabled ? i(l, g) : Y(l, g)), le = (l, g) => {
    R(l, g), E(g, l, null);
  }, E = (l, g, H) => {
    let s = H;
    if (!s && s !== 0) {
      const z = ae();
      s = Array.isArray(z) ? z[l].month : z.month;
    }
    t("update-month-year", { instance: l, year: g, month: s });
  };
  return {
    groupedMonths: x,
    groupedYears: V,
    year: $,
    isDisabled: te,
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: c,
    showYearPicker: O,
    modelValue: p,
    presetDate: (l, g) => {
      Aa({
        value: l,
        modelValue: p,
        range: o.value.enabled,
        timezone: g ? void 0 : _.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (l, g) => {
      y.value = P(l, g);
    },
    selectMonth: Q,
    selectYear: le,
    toggleYearPicker: M,
    handleYearSelect: D,
    handleYear: G,
    getModelMonthYear: ae
  };
}, ql = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...Je
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = $t(), c = He(n, "yearMode"), o = e;
    We(() => {
      o.shadow || a("mount", null);
    });
    const {
      groupedMonths: v,
      groupedYears: b,
      year: _,
      isDisabled: p,
      defaultedMultiCalendars: $,
      defaultedConfig: B,
      showYearPicker: C,
      modelValue: W,
      presetDate: y,
      setHoverDate: X,
      selectMonth: R,
      selectYear: V,
      toggleYearPicker: O,
      handleYearSelect: M,
      handleYear: D,
      getModelMonthYear: G
    } = Ql(o, a);
    return t({ getSidebarProps: () => ({
      modelValue: W,
      year: _,
      getModelMonthYear: G,
      selectMonth: R,
      selectYear: V,
      handleYear: D
    }), presetDate: y, toggleYearPicker: (A) => O(0, A) }), (A, ae) => (w(), we(on, {
      "multi-calendars": u($).count,
      collapse: A.collapse,
      stretch: ""
    }, {
      default: ge(({ instance: oe }) => [
        A.$slots["month-year"] ? ue(A.$slots, "month-year", Oe(Ie({ key: 0 }, {
          year: u(_),
          months: u(v)(oe),
          years: u(b)(oe),
          selectMonth: u(R),
          selectYear: u(V),
          instance: oe
        }))) : (w(), we(Kt, {
          key: 1,
          items: u(v)(oe),
          "arrow-navigation": A.arrowNavigation,
          "is-last": A.autoApply && !u(B).keepActionRow,
          "esc-close": A.escClose,
          height: u(B).modeHeight,
          config: A.config,
          "no-overlay-focus": !!(A.noOverlayFocus || A.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (k) => u(R)(k, oe),
          onHoverValue: (k) => u(X)(k, oe)
        }, {
          header: ge(() => [
            Ke($a, Ie(A.$props, {
              items: u(b)(oe),
              instance: oe,
              "show-year-picker": u(C)[oe],
              year: u(_)(oe),
              "is-disabled": (k) => u(p)(oe, k),
              onHandleYear: (k) => u(D)(oe, k),
              onYearSelect: (k) => u(M)(k, oe),
              onToggleYearPicker: (k) => u(O)(oe, k == null ? void 0 : k.flow, k == null ? void 0 : k.show)
            }), Ve({ _: 2 }, [
              Se(u(c), (k, L) => ({
                name: k,
                fn: ge((x) => [
                  ue(A.$slots, k, Oe(Le(x)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Xl = (e, t) => {
  const { modelValue: r } = Ut(e, t), a = ee(null), { defaultedHighlight: n, defaultedFilters: c, defaultedRange: o, propDates: v } = Re(e), b = ee();
  We(() => {
    e.startDate && (r.value && e.focusStartDate || !r.value) && (b.value = ye(N(e.startDate)));
  });
  const _ = (y) => Array.isArray(r.value) ? r.value.some((X) => ye(X) === y) : r.value ? ye(r.value) === y : !1, p = (y) => o.value.enabled && Array.isArray(r.value) ? an(r.value, a.value, B(y)) : !1, $ = j(() => Pt(En(e.yearRange, e.reverseYears), (y) => {
    const X = _(y.value), R = Wt(
      y.value,
      Ct(v.value.minDate),
      Ct(v.value.maxDate)
    ) || c.value.years.includes(y.value), V = p(y.value) && !X, O = Vn(n.value, y.value);
    return { active: X, disabled: R, isBetween: V, highlighted: O };
  })), B = (y) => tt(Qe(/* @__PURE__ */ new Date()), y);
  return {
    groupedYears: $,
    modelValue: r,
    focusYear: b,
    setHoverValue: (y) => {
      a.value = tt(Qe(/* @__PURE__ */ new Date()), y);
    },
    selectYear: (y) => {
      var X;
      if (t("update-month-year", { instance: 0, year: y }), e.multiDates)
        return r.value ? Array.isArray(r.value) && (((X = r.value) == null ? void 0 : X.map((V) => ye(V))).includes(y) ? r.value = r.value.filter((V) => ye(V) !== y) : r.value.push(tt(ze(N()), y))) : r.value = [tt(ze(N()), y)], t("auto-apply", !0);
      if (o.value.enabled)
        return r.value = Hn(r, B(y), t), sn(r.value, t, e.autoApply, e.modelAuto);
      r.value = B(y), t("auto-apply");
    }
  };
}, Jl = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...Je
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { groupedYears: c, modelValue: o, focusYear: v, selectYear: b, setHoverValue: _ } = Xl(n, a), { defaultedConfig: p } = Re(n);
    return t({ getSidebarProps: () => ({
      modelValue: o,
      selectYear: b
    }) }), (B, C) => (w(), U("div", null, [
      B.$slots["month-year"] ? ue(B.$slots, "month-year", Oe(Ie({ key: 0 }, {
        years: u(c),
        selectYear: u(b)
      }))) : (w(), we(Kt, {
        key: 1,
        items: u(c),
        "is-last": B.autoApply && !u(p).keepActionRow,
        height: u(p).modeHeight,
        config: B.config,
        "no-overlay-focus": !!(B.noOverlayFocus || B.textInput),
        "focus-value": u(v),
        type: "year",
        "use-relative": "",
        onSelected: u(b),
        onHoverValue: u(_)
      }, Ve({ _: 2 }, [
        B.$slots["year-overlay-value"] ? {
          name: "item",
          fn: ge(({ item: W }) => [
            ue(B.$slots, "year-overlay-value", {
              text: W.text,
              value: W.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), Zl = {
  key: 0,
  class: "dp__time_input"
}, xl = ["aria-label", "onKeydown", "onClick"], er = /* @__PURE__ */ ce("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), tr = /* @__PURE__ */ ce("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), nr = ["aria-label", "disabled", "onKeydown", "onClick"], ar = ["aria-label", "onKeydown", "onClick"], lr = /* @__PURE__ */ ce("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), rr = /* @__PURE__ */ ce("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), or = { key: 0 }, sr = ["aria-label", "onKeydown"], ur = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...Je
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { setTimePickerElements: c, setTimePickerBackRef: o } = pt(), { defaultedAriaLabels: v, defaultedTransitions: b, defaultedFilters: _, defaultedConfig: p, defaultedRange: $ } = Re(n), { transitionName: B, showTransition: C } = zt(b), W = Ht({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = ee("AM"), X = ee(null), R = ee([]);
    We(() => {
      a("mounted");
    });
    const V = (f) => Ae(/* @__PURE__ */ new Date(), {
      hours: f.hours,
      minutes: f.minutes,
      seconds: n.enableSeconds ? f.seconds : 0,
      milliseconds: 0
    }), O = j(
      () => (f) => Y(f, n[f]) || D(f, n[f])
    ), M = j(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), D = (f, J) => $.value.enabled && !$.value.disableTimeRangeValidation ? !n.validateTime(f, J) : !1, G = (f, J) => {
      if ($.value.enabled && !$.value.disableTimeRangeValidation) {
        const pe = J ? +n[`${f}Increment`] : -+n[`${f}Increment`], I = n[f] + pe;
        return !n.validateTime(f, I);
      }
      return !1;
    }, te = j(() => (f) => !le(+n[f] + +n[`${f}Increment`], f) || G(f, !0)), A = j(() => (f) => !le(+n[f] - +n[`${f}Increment`], f) || G(f, !1)), ae = (f, J) => da(Ae(N(), f), J), oe = (f, J) => Ha(Ae(N(), f), J), k = j(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), L = j(() => {
      const f = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return n.enableSeconds ? f.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : f;
    }), x = j(() => L.value.filter((f) => !f.separator)), P = j(() => (f) => {
      if (f === "hours") {
        const J = g(+n.hours);
        return { text: J < 10 ? `0${J}` : `${J}`, value: J };
      }
      return { text: n[f] < 10 ? `0${n[f]}` : `${n[f]}`, value: n[f] };
    }), Y = (f, J) => {
      var I;
      if (!n.disabledTimesConfig)
        return !1;
      const pe = n.disabledTimesConfig(n.order, f === "hours" ? J : void 0);
      return pe[f] ? !!((I = pe[f]) != null && I.includes(J)) : !0;
    }, i = (f) => {
      const J = n.is24 ? 24 : 12, pe = f === "hours" ? J : 60, I = +n[`${f}GridIncrement`], T = f === "hours" && !n.is24 ? I : 0, K = [];
      for (let fe = T; fe < pe; fe += I)
        K.push({ value: fe, text: fe < 10 ? `0${fe}` : `${fe}` });
      return f === "hours" && !n.is24 && K.push({ value: 0, text: "12" }), Pt(K, (fe) => ({ active: !1, disabled: _.value.times[f].includes(fe.value) || !le(fe.value, f) || Y(f, fe.value) || D(f, fe.value) }));
    }, d = (f) => f >= 0 ? f : 59, Q = (f) => f >= 0 ? f : 23, le = (f, J) => {
      const pe = n.minTime ? V(gn(n.minTime)) : null, I = n.maxTime ? V(gn(n.maxTime)) : null, T = V(
        gn(
          M.value,
          J,
          J === "minutes" || J === "seconds" ? d(f) : Q(f)
        )
      );
      return pe && I ? (Vt(T, I) || St(T, I)) && (Ft(T, pe) || St(T, pe)) : pe ? Ft(T, pe) || St(T, pe) : I ? Vt(T, I) || St(T, I) : !0;
    }, E = (f) => n[`no${f[0].toUpperCase() + f.slice(1)}Overlay`], m = (f) => {
      E(f) || (W[f] = !W[f], W[f] || a("overlay-closed"));
    }, F = (f) => f === "hours" ? Xe : f === "minutes" ? at : Rt, l = (f, J = !0) => {
      const pe = J ? ae : oe, I = J ? +n[`${f}Increment`] : -+n[`${f}Increment`];
      le(+n[f] + I, f) && a(
        `update:${f}`,
        F(f)(pe({ [f]: +n[f] }, { [f]: +n[`${f}Increment`] }))
      );
    }, g = (f) => n.is24 ? f : (f >= 12 ? y.value = "PM" : y.value = "AM", Ja(f)), H = () => {
      y.value === "PM" ? (y.value = "AM", a("update:hours", n.hours - 12)) : (y.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", y.value);
    }, s = (f) => {
      W[f] = !0;
    }, z = (f, J, pe) => {
      if (f && n.arrowNavigation) {
        Array.isArray(R.value[J]) ? R.value[J][pe] = f : R.value[J] = [f];
        const I = R.value.reduce(
          (T, K) => K.map((fe, Me) => [...T[Me] || [], K[Me]]),
          []
        );
        o(n.closeTimePickerBtn), X.value && (I[1] = I[1].concat(X.value)), c(I, n.order);
      }
    }, ne = (f, J) => (m(f), f === "hours" && !n.is24 ? a(`update:${f}`, y.value === "PM" ? J + 12 : J) : a(`update:${f}`, J));
    return t({ openChildCmp: s }), (f, J) => {
      var pe;
      return f.disabled ? q("", !0) : (w(), U("div", Zl, [
        (w(!0), U(be, null, Se(L.value, (I, T) => {
          var K, fe, Me;
          return w(), U("div", {
            key: T,
            class: De(k.value)
          }, [
            I.separator ? (w(), U(be, { key: 0 }, [
              st(" : ")
            ], 64)) : (w(), U(be, { key: 1 }, [
              ce("button", {
                ref_for: !0,
                ref: (me) => z(me, T, 0),
                type: "button",
                class: De({
                  dp__btn: !0,
                  dp__inc_dec_button: !f.timePickerInline,
                  dp__inc_dec_button_inline: f.timePickerInline,
                  dp__tp_inline_btn_top: f.timePickerInline,
                  dp__inc_dec_button_disabled: te.value(I.type)
                }),
                "aria-label": (K = u(v)) == null ? void 0 : K.incrementValue(I.type),
                tabindex: "0",
                onKeydown: [
                  ve($e((me) => l(I.type), ["prevent"]), ["enter"]),
                  ve($e((me) => l(I.type), ["prevent"]), ["space"])
                ],
                onClick: (me) => l(I.type)
              }, [
                n.timePickerInline ? (w(), U(be, { key: 1 }, [
                  er,
                  tr
                ], 64)) : (w(), U(be, { key: 0 }, [
                  f.$slots["arrow-up"] ? ue(f.$slots, "arrow-up", { key: 0 }) : q("", !0),
                  f.$slots["arrow-up"] ? q("", !0) : (w(), we(u(In), { key: 1 }))
                ], 64))
              ], 42, xl),
              ce("button", {
                ref_for: !0,
                ref: (me) => z(me, T, 1),
                type: "button",
                "aria-label": (fe = u(v)) == null ? void 0 : fe.openTpOverlay(I.type),
                class: De({
                  dp__time_display: !0,
                  dp__time_display_block: !f.timePickerInline,
                  dp__time_display_inline: f.timePickerInline,
                  "dp--time-invalid": O.value(I.type),
                  "dp--time-overlay-btn": !O.value(I.type)
                }),
                disabled: E(I.type),
                tabindex: "0",
                onKeydown: [
                  ve($e((me) => m(I.type), ["prevent"]), ["enter"]),
                  ve($e((me) => m(I.type), ["prevent"]), ["space"])
                ],
                onClick: (me) => m(I.type)
              }, [
                f.$slots[I.type] ? ue(f.$slots, I.type, {
                  key: 0,
                  text: P.value(I.type).text,
                  value: P.value(I.type).value
                }) : q("", !0),
                f.$slots[I.type] ? q("", !0) : (w(), U(be, { key: 1 }, [
                  st(Ee(P.value(I.type).text), 1)
                ], 64))
              ], 42, nr),
              ce("button", {
                ref_for: !0,
                ref: (me) => z(me, T, 2),
                type: "button",
                class: De({
                  dp__btn: !0,
                  dp__inc_dec_button: !f.timePickerInline,
                  dp__inc_dec_button_inline: f.timePickerInline,
                  dp__tp_inline_btn_bottom: f.timePickerInline,
                  dp__inc_dec_button_disabled: A.value(I.type)
                }),
                "aria-label": (Me = u(v)) == null ? void 0 : Me.decrementValue(I.type),
                tabindex: "0",
                onKeydown: [
                  ve($e((me) => l(I.type, !1), ["prevent"]), ["enter"]),
                  ve($e((me) => l(I.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (me) => l(I.type, !1)
              }, [
                n.timePickerInline ? (w(), U(be, { key: 1 }, [
                  lr,
                  rr
                ], 64)) : (w(), U(be, { key: 0 }, [
                  f.$slots["arrow-down"] ? ue(f.$slots, "arrow-down", { key: 0 }) : q("", !0),
                  f.$slots["arrow-down"] ? q("", !0) : (w(), we(u(Nn), { key: 1 }))
                ], 64))
              ], 42, ar)
            ], 64))
          ], 2);
        }), 128)),
        f.is24 ? q("", !0) : (w(), U("div", or, [
          f.$slots["am-pm-button"] ? ue(f.$slots, "am-pm-button", {
            key: 0,
            toggle: H,
            value: y.value
          }) : q("", !0),
          f.$slots["am-pm-button"] ? q("", !0) : (w(), U("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: X,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (pe = u(v)) == null ? void 0 : pe.amPmButton,
            tabindex: "0",
            onClick: H,
            onKeydown: [
              ve($e(H, ["prevent"]), ["enter"]),
              ve($e(H, ["prevent"]), ["space"])
            ]
          }, Ee(y.value), 41, sr))
        ])),
        (w(!0), U(be, null, Se(x.value, (I, T) => (w(), we(_t, {
          key: T,
          name: u(B)(W[I.type]),
          css: u(C)
        }, {
          default: ge(() => [
            W[I.type] ? (w(), we(Kt, {
              key: 0,
              items: i(I.type),
              "is-last": f.autoApply && !u(p).keepActionRow,
              "esc-close": f.escClose,
              type: I.type,
              "text-input": f.textInput,
              config: f.config,
              "arrow-navigation": f.arrowNavigation,
              "aria-labels": f.ariaLabels,
              onSelected: (K) => ne(I.type, K),
              onToggle: (K) => m(I.type),
              onResetFlow: J[0] || (J[0] = (K) => f.$emit("reset-flow"))
            }, Ve({
              "button-icon": ge(() => [
                f.$slots["clock-icon"] ? ue(f.$slots, "clock-icon", { key: 0 }) : q("", !0),
                f.$slots["clock-icon"] ? q("", !0) : (w(), we(nn(f.timePickerInline ? u(Ot) : u(Yn)), { key: 1 }))
              ]),
              _: 2
            }, [
              f.$slots[`${I.type}-overlay-value`] ? {
                name: "item",
                fn: ge(({ item: K }) => [
                  ue(f.$slots, `${I.type}-overlay-value`, {
                    text: K.text,
                    value: K.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : q("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), ir = { class: "dp--tp-wrap" }, dr = ["aria-label", "tabindex"], cr = ["tabindex"], fr = ["aria-label"], Ra = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...Je
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMatrix: c, setTimePicker: o } = pt(), v = $t(), { defaultedTransitions: b, defaultedAriaLabels: _, defaultedTextInput: p, defaultedConfig: $, defaultedRange: B } = Re(n), { transitionName: C, showTransition: W } = zt(b), { hideNavigationButtons: y } = ln(), X = ee(null), R = ee(null), V = ee([]), O = ee(null);
    We(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? c([Be(X.value)], "time") : o(!0, n.timePicker);
    });
    const M = j(() => B.value.enabled && n.modelAuto ? va(n.internalModelValue) : !0), D = ee(!1), G = (i) => ({
      hours: Array.isArray(n.hours) ? n.hours[i] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[i] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[i] : n.seconds
    }), te = j(() => {
      const i = [];
      if (B.value.enabled)
        for (let d = 0; d < 2; d++)
          i.push(G(d));
      else
        i.push(G(0));
      return i;
    }), A = (i, d = !1, Q = "") => {
      d || a("reset-flow"), D.value = i, a(i ? "overlay-opened" : "overlay-closed"), n.arrowNavigation && o(i), vt(() => {
        Q !== "" && V.value[0] && V.value[0].openChildCmp(Q);
      });
    }, ae = j(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !$.value.keepActionRow
    })), oe = He(v, "timePicker"), k = (i, d, Q) => B.value.enabled ? d === 0 ? [i, te.value[1][Q]] : [te.value[0][Q], i] : i, L = (i) => {
      a("update:hours", i);
    }, x = (i) => {
      a("update:minutes", i);
    }, P = (i) => {
      a("update:seconds", i);
    }, Y = () => {
      if (O.value && !p.value.enabled && !n.noOverlayFocus) {
        const i = ma(O.value);
        i && i.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: A }), (i, d) => {
      var Q;
      return w(), U("div", ir, [
        !i.timePicker && !i.timePickerInline ? Xt((w(), U("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: X,
          type: "button",
          class: De(ae.value),
          "aria-label": (Q = u(_)) == null ? void 0 : Q.openTimePicker,
          tabindex: i.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            d[0] || (d[0] = ve((le) => A(!0), ["enter"])),
            d[1] || (d[1] = ve((le) => A(!0), ["space"]))
          ],
          onClick: d[2] || (d[2] = (le) => A(!0))
        }, [
          i.$slots["clock-icon"] ? ue(i.$slots, "clock-icon", { key: 0 }) : q("", !0),
          i.$slots["clock-icon"] ? q("", !0) : (w(), we(u(Yn), { key: 1 }))
        ], 42, dr)), [
          [Jt, !u(y)(i.hideNavigation, "time")]
        ]) : q("", !0),
        Ke(_t, {
          name: u(C)(D.value),
          css: u(W) && !i.timePickerInline
        }, {
          default: ge(() => {
            var le;
            return [
              D.value || i.timePicker || i.timePickerInline ? (w(), U("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: O,
                class: De({
                  dp__overlay: !i.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !i.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: qe(i.timePicker ? { height: `${u($).modeHeight}px` } : void 0),
                tabindex: i.timePickerInline ? void 0 : 0
              }, [
                ce("div", {
                  class: De(
                    i.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  i.$slots["time-picker-overlay"] ? ue(i.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: L,
                    setMinutes: x,
                    setSeconds: P
                  }) : q("", !0),
                  i.$slots["time-picker-overlay"] ? q("", !0) : (w(), U("div", {
                    key: 1,
                    class: De(i.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (w(!0), U(be, null, Se(te.value, (E, m) => Xt((w(), we(ur, Ie({ key: m }, {
                      ...i.$props,
                      order: m,
                      hours: E.hours,
                      minutes: E.minutes,
                      seconds: E.seconds,
                      closeTimePickerBtn: R.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: m === 0 ? i.fixedStart : i.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: V,
                      "validate-time": (F, l) => e.validateTime(F, k(l, m, F)),
                      "onUpdate:hours": (F) => L(k(F, m, "hours")),
                      "onUpdate:minutes": (F) => x(k(F, m, "minutes")),
                      "onUpdate:seconds": (F) => P(k(F, m, "seconds")),
                      onMounted: Y,
                      onOverlayClosed: Y,
                      onAmPmChange: d[3] || (d[3] = (F) => i.$emit("am-pm-change", F))
                    }), Ve({ _: 2 }, [
                      Se(u(oe), (F, l) => ({
                        name: F,
                        fn: ge((g) => [
                          ue(i.$slots, F, Oe(Le(g)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Jt, m === 0 ? !0 : M.value]
                    ])), 128))
                  ], 2)),
                  !i.timePicker && !i.timePickerInline ? Xt((w(), U("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: R,
                    type: "button",
                    class: De(ae.value),
                    "aria-label": (le = u(_)) == null ? void 0 : le.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      d[4] || (d[4] = ve((E) => A(!1), ["enter"])),
                      d[5] || (d[5] = ve((E) => A(!1), ["space"]))
                    ],
                    onClick: d[6] || (d[6] = (E) => A(!1))
                  }, [
                    i.$slots["calendar-icon"] ? ue(i.$slots, "calendar-icon", { key: 0 }) : q("", !0),
                    i.$slots["calendar-icon"] ? q("", !0) : (w(), we(u(Ot), { key: 1 }))
                  ], 42, fr)), [
                    [Jt, !u(y)(i.hideNavigation, "time")]
                  ]) : q("", !0)
                ], 2)
              ], 14, cr)) : q("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Pa = (e, t, r, a) => {
  const { defaultedRange: n } = Re(e), c = (O, M) => Array.isArray(t[O]) ? t[O][M] : t[O], o = (O) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[O] : t.seconds : 0, v = (O, M) => O ? M !== void 0 ? ct(O, c("hours", M), c("minutes", M), o(M)) : ct(O, t.hours, t.minutes, o()) : Cn(N(), o(M)), b = (O, M) => {
    t[O] = M;
  }, _ = j(() => e.modelAuto && n.value.enabled ? Array.isArray(r.value) ? r.value.length > 1 : !1 : n.value.enabled), p = (O, M) => {
    const D = Object.fromEntries(
      Object.keys(t).map((G) => G === O ? [G, M] : [G, t[G]].slice())
    );
    if (_.value && !n.value.disableTimeRangeValidation) {
      const G = (A) => r.value ? ct(
        r.value[A],
        D.hours[A],
        D.minutes[A],
        D.seconds[A]
      ) : null, te = (A) => _n(r.value[A], 0);
      return !(ke(G(0), G(1)) && (Ft(G(0), te(1)) || Vt(G(1), te(0))));
    }
    return !0;
  }, $ = (O, M) => {
    p(O, M) && (b(O, M), a && a());
  }, B = (O) => {
    $("hours", O);
  }, C = (O) => {
    $("minutes", O);
  }, W = (O) => {
    $("seconds", O);
  }, y = (O, M, D, G) => {
    M && B(O), !M && !D && C(O), D && W(O), r.value && G(r.value);
  }, X = (O) => {
    if (O) {
      const M = Array.isArray(O), D = M ? [+O[0].hours, +O[1].hours] : +O.hours, G = M ? [+O[0].minutes, +O[1].minutes] : +O.minutes, te = M ? [+O[0].seconds, +O[1].seconds] : +O.seconds;
      b("hours", D), b("minutes", G), e.enableSeconds && b("seconds", te);
    }
  }, R = (O, M) => {
    const D = {
      hours: Array.isArray(t.hours) ? t.hours[O] : t.hours,
      disabledArr: []
    };
    return (M || M === 0) && (D.hours = M), Array.isArray(e.disabledTimes) && (D.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[O]) ? e.disabledTimes[O] : e.disabledTimes), D;
  }, V = j(() => (O, M) => {
    var D;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: G, hours: te } = R(O, M), A = G.filter((ae) => +ae.hours === te);
      return ((D = A[0]) == null ? void 0 : D.minutes) === "*" ? { hours: [te], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (A == null ? void 0 : A.map((ae) => +ae.minutes)) ?? [],
        seconds: (A == null ? void 0 : A.map((ae) => ae.seconds ? +ae.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: b,
    updateHours: B,
    updateMinutes: C,
    updateSeconds: W,
    getSetDateTime: v,
    updateTimeValues: y,
    getSecondsValue: o,
    assignStartTime: X,
    validateTime: p,
    disabledTimesConfig: V
  };
}, vr = (e, t) => {
  const { modelValue: r, time: a } = Ut(e, t), { defaultedStartTime: n, defaultedRange: c } = Re(e), { updateTimeValues: o, getSetDateTime: v, setTime: b, assignStartTime: _, disabledTimesConfig: p, validateTime: $ } = Pa(e, a, r), B = (M) => {
    const { hours: D, minutes: G, seconds: te } = M;
    return { hours: +D, minutes: +G, seconds: te ? +te : 0 };
  }, C = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const D = B(e.startTime[0]), G = B(e.startTime[1]);
        return [Ae(N(), D), Ae(N(), G)];
      }
      const M = B(e.startTime);
      return Ae(N(), M);
    }
    return c.value.enabled ? [null, null] : null;
  }, W = () => {
    if (c.value.enabled) {
      const [M, D] = C();
      r.value = [v(M, 0), v(D, 1)];
    } else
      r.value = v(C());
  }, y = (M) => Array.isArray(M) ? [Dt(N(M[0])), Dt(N(M[1]))] : [Dt(M ?? N())], X = (M, D, G) => {
    b("hours", M), b("minutes", D), b("seconds", e.enableSeconds ? G : 0);
  }, R = () => {
    const [M, D] = y(r.value);
    return c.value.enabled ? X(
      [M.hours, D.hours],
      [M.minutes, D.minutes],
      [M.seconds, D.seconds]
    ) : X(M.hours, M.minutes, M.seconds);
  };
  We(() => {
    if (!e.shadow)
      return _(n.value), r.value ? R() : W();
  });
  const V = () => {
    Array.isArray(r.value) ? r.value = r.value.map((M, D) => M && v(M, D)) : r.value = v(r.value), t("time-update");
  };
  return {
    modelValue: r,
    time: a,
    disabledTimesConfig: p,
    updateTime: (M, D = !0, G = !1) => {
      o(M, D, G, V);
    },
    validateTime: $
  };
}, mr = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...Je
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, c = $t(), o = He(c, "timePicker"), { time: v, modelValue: b, disabledTimesConfig: _, updateTime: p, validateTime: $ } = vr(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: b,
      time: v,
      updateTime: p
    }) }), (C, W) => (w(), we(on, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: ge(() => [
        Ke(Ra, Ie(C.$props, {
          hours: u(v).hours,
          minutes: u(v).minutes,
          seconds: u(v).seconds,
          "internal-model-value": C.internalModelValue,
          "disabled-times-config": u(_),
          "validate-time": u($),
          "onUpdate:hours": W[0] || (W[0] = (y) => u(p)(y)),
          "onUpdate:minutes": W[1] || (W[1] = (y) => u(p)(y, !1)),
          "onUpdate:seconds": W[2] || (W[2] = (y) => u(p)(y, !1, !0)),
          onAmPmChange: W[3] || (W[3] = (y) => C.$emit("am-pm-change", y))
        }), Ve({ _: 2 }, [
          Se(u(o), (y, X) => ({
            name: y,
            fn: ge((R) => [
              ue(C.$slots, y, Oe(Le(R)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), pr = { class: "dp__month_year_row" }, yr = ["aria-label", "onClick", "onKeydown"], gr = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...Je
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTransitions: c,
      defaultedAriaLabels: o,
      defaultedMultiCalendars: v,
      defaultedFilters: b,
      defaultedConfig: _,
      defaultedHighlight: p,
      propDates: $
    } = Re(n), { transitionName: B, showTransition: C } = zt(c), { buildMatrix: W } = pt(), { handleMonthYearChange: y, isDisabled: X, updateMonthYear: R } = Rl(n, a), { showLeftIcon: V, showRightIcon: O } = ln(), M = ee(!1), D = ee(!1), G = ee([null, null, null, null]);
    We(() => {
      a("mount");
    });
    const te = (m) => ({
      get: () => n[m],
      set: (F) => {
        const l = m === Ge.month ? Ge.year : Ge.month;
        a("update-month-year", { [m]: F, [l]: n[l] }), m === Ge.month ? Y(!0) : i(!0);
      }
    }), A = j(te(Ge.month)), ae = j(te(Ge.year)), oe = j(() => (m) => ({
      month: n.month,
      year: n.year,
      items: m === Ge.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: R,
      toggle: m === Ge.month ? Y : i
    })), k = j(() => {
      const m = n.months.find((F) => F.value === n.month);
      return m || { text: "", value: 0 };
    }), L = j(() => Pt(n.months, (m) => {
      const F = n.month === m.value, l = Wt(
        m.value,
        pa(n.year, $.value.minDate),
        ya(n.year, $.value.maxDate)
      ) || b.value.months.includes(m.value), g = wa(p.value, m.value, n.year);
      return { active: F, disabled: l, highlighted: g };
    })), x = j(() => Pt(n.years, (m) => {
      const F = n.year === m.value, l = Wt(
        m.value,
        Ct($.value.minDate),
        Ct($.value.maxDate)
      ) || b.value.years.includes(m.value), g = Vn(p.value, m.value);
      return { active: F, disabled: l, highlighted: g };
    })), P = (m, F) => {
      F !== void 0 ? m.value = F : m.value = !m.value, m.value || a("overlay-closed");
    }, Y = (m = !1, F) => {
      d(m), P(M, F);
    }, i = (m = !1, F) => {
      d(m), P(D, F);
    }, d = (m) => {
      m || a("reset-flow");
    }, Q = (m, F) => {
      n.arrowNavigation && (G.value[F] = Be(m), W(G.value, "monthYear"));
    }, le = j(() => {
      var m, F;
      return [
        {
          type: Ge.month,
          index: 1,
          toggle: Y,
          modelValue: A.value,
          updateModelValue: (l) => A.value = l,
          text: k.value.text,
          showSelectionGrid: M.value,
          items: L.value,
          ariaLabel: (m = o.value) == null ? void 0 : m.openMonthsOverlay
        },
        {
          type: Ge.year,
          index: 2,
          toggle: i,
          modelValue: ae.value,
          updateModelValue: (l) => ae.value = l,
          text: n.year,
          showSelectionGrid: D.value,
          items: x.value,
          ariaLabel: (F = o.value) == null ? void 0 : F.openYearsOverlay
        }
      ];
    }), E = j(() => n.disableYearSelect ? [le.value[0]] : n.yearFirst ? [...le.value].reverse() : le.value);
    return t({
      toggleMonthPicker: Y,
      toggleYearPicker: i,
      handleMonthYearChange: y
    }), (m, F) => {
      var l, g, H;
      return w(), U("div", pr, [
        m.$slots["month-year"] ? ue(m.$slots, "month-year", Oe(Ie({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: u(R), handleMonthYearChange: u(y), instance: e.instance }))) : (w(), U(be, { key: 1 }, [
          u(V)(u(v), e.instance) && !m.vertical ? (w(), we(Et, {
            key: 0,
            "aria-label": (l = u(o)) == null ? void 0 : l.prevMonth,
            disabled: u(X)(!1),
            onActivate: F[0] || (F[0] = (s) => u(y)(!1, !0)),
            onSetRef: F[1] || (F[1] = (s) => Q(s, 0))
          }, {
            default: ge(() => [
              m.$slots["arrow-left"] ? ue(m.$slots, "arrow-left", { key: 0 }) : q("", !0),
              m.$slots["arrow-left"] ? q("", !0) : (w(), we(u(On), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : q("", !0),
          ce("div", {
            class: De(["dp__month_year_wrap", {
              dp__year_disable_select: m.disableYearSelect
            }])
          }, [
            (w(!0), U(be, null, Se(E.value, (s, z) => (w(), U(be, {
              key: s.type
            }, [
              ce("button", {
                ref_for: !0,
                ref: (ne) => Q(ne, z + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": s.ariaLabel,
                onClick: s.toggle,
                onKeydown: [
                  ve($e(s.toggle, ["prevent"]), ["enter"]),
                  ve($e(s.toggle, ["prevent"]), ["space"])
                ]
              }, [
                m.$slots[s.type] ? ue(m.$slots, s.type, {
                  key: 0,
                  text: s.text,
                  value: n[s.type]
                }) : q("", !0),
                m.$slots[s.type] ? q("", !0) : (w(), U(be, { key: 1 }, [
                  st(Ee(s.text), 1)
                ], 64))
              ], 40, yr),
              Ke(_t, {
                name: u(B)(s.showSelectionGrid),
                css: u(C)
              }, {
                default: ge(() => [
                  s.showSelectionGrid ? (w(), we(Kt, {
                    key: 0,
                    items: s.items,
                    "arrow-navigation": m.arrowNavigation,
                    "hide-navigation": m.hideNavigation,
                    "is-last": m.autoApply && !u(_).keepActionRow,
                    "skip-button-ref": !1,
                    config: m.config,
                    type: s.type,
                    "header-refs": [],
                    "esc-close": m.escClose,
                    "menu-wrap-ref": m.menuWrapRef,
                    "text-input": m.textInput,
                    "aria-labels": m.ariaLabels,
                    onSelected: s.updateModelValue,
                    onToggle: s.toggle
                  }, Ve({
                    "button-icon": ge(() => [
                      m.$slots["calendar-icon"] ? ue(m.$slots, "calendar-icon", { key: 0 }) : q("", !0),
                      m.$slots["calendar-icon"] ? q("", !0) : (w(), we(u(Ot), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    m.$slots[`${s.type}-overlay-value`] ? {
                      name: "item",
                      fn: ge(({ item: ne }) => [
                        ue(m.$slots, `${s.type}-overlay-value`, {
                          text: ne.text,
                          value: ne.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    m.$slots[`${s.type}-overlay`] ? {
                      name: "overlay",
                      fn: ge(() => [
                        ue(m.$slots, `${s.type}-overlay`, Oe(Le(oe.value(s.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    m.$slots[`${s.type}-overlay-header`] ? {
                      name: "header",
                      fn: ge(() => [
                        ue(m.$slots, `${s.type}-overlay-header`, {
                          toggle: s.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : q("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          u(V)(u(v), e.instance) && m.vertical ? (w(), we(Et, {
            key: 1,
            "aria-label": (g = u(o)) == null ? void 0 : g.prevMonth,
            disabled: u(X)(!1),
            onActivate: F[2] || (F[2] = (s) => u(y)(!1, !0))
          }, {
            default: ge(() => [
              m.$slots["arrow-up"] ? ue(m.$slots, "arrow-up", { key: 0 }) : q("", !0),
              m.$slots["arrow-up"] ? q("", !0) : (w(), we(u(In), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : q("", !0),
          u(O)(u(v), e.instance) ? (w(), we(Et, {
            key: 2,
            ref: "rightIcon",
            disabled: u(X)(!0),
            "aria-label": (H = u(o)) == null ? void 0 : H.nextMonth,
            onActivate: F[3] || (F[3] = (s) => u(y)(!0, !0)),
            onSetRef: F[4] || (F[4] = (s) => Q(s, m.disableYearSelect ? 2 : 3))
          }, {
            default: ge(() => [
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? ue(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : q("", !0),
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? q("", !0) : (w(), we(nn(m.vertical ? u(Nn) : u(Bn)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : q("", !0)
        ], 64))
      ]);
    };
  }
}), hr = ["aria-label"], br = {
  class: "dp__calendar_header",
  role: "row"
}, kr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, wr = ["aria-label"], Dr = /* @__PURE__ */ ce("div", { class: "dp__calendar_header_separator" }, null, -1), Mr = ["aria-label"], $r = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Ar = { class: "dp__cell_inner" }, Tr = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Sr = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Je
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMultiLevelMatrix: c } = pt(), {
      defaultedTransitions: o,
      defaultedConfig: v,
      defaultedAriaLabels: b,
      defaultedMultiCalendars: _,
      defaultedWeekNumbers: p
    } = Re(n), $ = ee(null), B = ee({
      bottom: "",
      left: "",
      transform: ""
    }), C = ee([]), W = ee(null), y = ee(!0), X = ee(""), R = ee({ startX: 0, endX: 0, startY: 0, endY: 0 }), V = ee([]), O = ee({ left: "50%" }), M = j(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), D = j(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : Xa(n.formatLocale, n.locale, +n.weekStart));
    We(() => {
      a("mount", { cmp: "calendar", refs: C }), v.value.noSwipe || W.value && (W.value.addEventListener("touchstart", i, { passive: !1 }), W.value.addEventListener("touchend", d, { passive: !1 }), W.value.addEventListener("touchmove", Q, { passive: !1 })), n.monthChangeOnScroll && W.value && W.value.addEventListener("wheel", m, { passive: !1 });
    });
    const G = (s) => s ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", te = (s, z) => {
      if (n.transitions) {
        const ne = ze(ot(N(), n.month, n.year));
        X.value = Ce(ze(ot(N(), s, z)), ne) ? o.value[G(!0)] : o.value[G(!1)], y.value = !1, vt(() => {
          y.value = !0;
        });
      }
    }, A = j(
      () => ({
        [n.calendarClassName]: !!n.calendarClassName
      })
    ), ae = j(() => (s) => {
      const z = Za(s);
      return {
        dp__marker_dot: z.type === "dot",
        dp__marker_line: z.type === "line"
      };
    }), oe = j(() => (s) => ke(s, $.value)), k = j(() => ({
      dp__calendar: !0,
      dp__calendar_next: _.value.count > 0 && n.instance !== 0
    })), L = j(() => (s) => n.hideOffsetDates ? s.current : !0), x = (s) => nt(s, "yyyy-MM-dd"), P = async (s, z, ne) => {
      var f, J;
      if (a("set-hover-date", s), (J = (f = s.marker) == null ? void 0 : f.tooltip) != null && J.length) {
        const pe = Be(C.value[z][ne]);
        if (pe) {
          const { width: I, height: T } = pe.getBoundingClientRect();
          $.value = s.value;
          let K = { left: `${I / 2}px` }, fe = -50;
          if (await vt(), V.value[0]) {
            const { left: Me, width: me } = V.value[0].getBoundingClientRect();
            Me < 0 && (K = { left: "0" }, fe = 0, O.value.left = `${I / 2}px`), window.innerWidth < Me + me && (K = { right: "0" }, fe = 0, O.value.left = `${me - I / 2}px`);
          }
          B.value = {
            bottom: `${T}px`,
            ...K,
            transform: `translateX(${fe}%)`
          }, a("tooltip-open", s.marker);
        }
      }
    }, Y = (s) => {
      $.value && ($.value = null, B.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", s.marker));
    }, i = (s) => {
      R.value.startX = s.changedTouches[0].screenX, R.value.startY = s.changedTouches[0].screenY;
    }, d = (s) => {
      R.value.endX = s.changedTouches[0].screenX, R.value.endY = s.changedTouches[0].screenY, le();
    }, Q = (s) => {
      n.vertical && !n.inline && s.preventDefault();
    }, le = () => {
      const s = n.vertical ? "Y" : "X";
      Math.abs(R.value[`start${s}`] - R.value[`end${s}`]) > 10 && a("handle-swipe", R.value[`start${s}`] > R.value[`end${s}`] ? "right" : "left");
    }, E = (s, z, ne) => {
      s && (Array.isArray(C.value[z]) ? C.value[z][ne] = s : C.value[z] = [s]), n.arrowNavigation && c(C.value, "calendar");
    }, m = (s) => {
      n.monthChangeOnScroll && (s.preventDefault(), a("handle-scroll", s));
    }, F = (s) => p.value.type === "local" ? za(s.value, { weekStartsOn: +n.weekStart }) : p.value.type === "iso" ? Ua(s.value) : typeof p.value.type == "function" ? p.value.type(s.value) : "", l = (s) => {
      const z = s[0];
      return p.value.hideOnOffsetDates ? s.some((ne) => ne.current) ? F(z) : "" : F(z);
    }, g = (s, z) => {
      dt(s, v.value), a("select-date", z);
    }, H = (s) => {
      dt(s, v.value);
    };
    return t({ triggerTransition: te }), (s, z) => {
      var ne;
      return w(), U("div", {
        class: De(k.value)
      }, [
        ce("div", {
          ref_key: "calendarWrapRef",
          ref: W,
          role: "grid",
          class: De(A.value),
          "aria-label": (ne = u(b)) == null ? void 0 : ne.calendarWrap
        }, [
          ce("div", br, [
            s.weekNumbers ? (w(), U("div", kr, Ee(s.weekNumName), 1)) : q("", !0),
            (w(!0), U(be, null, Se(D.value, (f, J) => {
              var pe, I;
              return w(), U("div", {
                key: J,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (I = (pe = u(b)) == null ? void 0 : pe.weekDay) == null ? void 0 : I.call(pe, J)
              }, [
                s.$slots["calendar-header"] ? ue(s.$slots, "calendar-header", {
                  key: 0,
                  day: f,
                  index: J
                }) : q("", !0),
                s.$slots["calendar-header"] ? q("", !0) : (w(), U(be, { key: 1 }, [
                  st(Ee(f), 1)
                ], 64))
              ], 8, wr);
            }), 128))
          ]),
          Dr,
          Ke(_t, {
            name: X.value,
            css: !!s.transitions
          }, {
            default: ge(() => {
              var f;
              return [
                y.value ? (w(), U("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((f = u(b)) == null ? void 0 : f.calendarDays) || void 0
                }, [
                  (w(!0), U(be, null, Se(M.value, (J, pe) => (w(), U("div", {
                    key: pe,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    s.weekNumbers ? (w(), U("div", $r, [
                      ce("div", Ar, Ee(l(J.days)), 1)
                    ])) : q("", !0),
                    (w(!0), U(be, null, Se(J.days, (I, T) => {
                      var K, fe, Me;
                      return w(), U("div", {
                        id: x(I.value),
                        ref_for: !0,
                        ref: (me) => E(me, pe, T),
                        key: T + pe,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (I.classData.dp__active_date || I.classData.dp__range_start || I.classData.dp__range_start) ?? void 0,
                        "aria-disabled": I.classData.dp__cell_disabled || void 0,
                        "aria-label": (fe = (K = u(b)) == null ? void 0 : K.day) == null ? void 0 : fe.call(K, I),
                        tabindex: "0",
                        onClick: $e((me) => g(me, I), ["prevent"]),
                        onKeydown: [
                          ve((me) => s.$emit("select-date", I), ["enter"]),
                          ve((me) => s.$emit("handle-space", I), ["space"])
                        ],
                        onMouseenter: (me) => P(I, pe, T),
                        onMouseleave: (me) => Y(I)
                      }, [
                        ce("div", {
                          class: De(["dp__cell_inner", I.classData])
                        }, [
                          s.$slots.day && L.value(I) ? ue(s.$slots, "day", {
                            key: 0,
                            day: +I.text,
                            date: I.value
                          }) : q("", !0),
                          s.$slots.day ? q("", !0) : (w(), U(be, { key: 1 }, [
                            st(Ee(I.text), 1)
                          ], 64)),
                          I.marker && L.value(I) ? (w(), U(be, { key: 2 }, [
                            s.$slots.marker ? ue(s.$slots, "marker", {
                              key: 0,
                              marker: I.marker,
                              day: +I.text,
                              date: I.value
                            }) : (w(), U("div", {
                              key: 1,
                              class: De(ae.value(I.marker)),
                              style: qe(I.marker.color ? { backgroundColor: I.marker.color } : {})
                            }, null, 6))
                          ], 64)) : q("", !0),
                          oe.value(I.value) ? (w(), U("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: V,
                            class: "dp__marker_tooltip",
                            style: qe(B.value)
                          }, [
                            (Me = I.marker) != null && Me.tooltip ? (w(), U("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: H
                            }, [
                              (w(!0), U(be, null, Se(I.marker.tooltip, (me, se) => (w(), U("div", {
                                key: se,
                                class: "dp__tooltip_text"
                              }, [
                                s.$slots["marker-tooltip"] ? ue(s.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: me,
                                  day: I.value
                                }) : q("", !0),
                                s.$slots["marker-tooltip"] ? q("", !0) : (w(), U(be, { key: 1 }, [
                                  ce("div", {
                                    class: "dp__tooltip_mark",
                                    style: qe(me.color ? { backgroundColor: me.color } : {})
                                  }, null, 4),
                                  ce("div", null, Ee(me.text), 1)
                                ], 64))
                              ]))), 128)),
                              ce("div", {
                                class: "dp__arrow_bottom_tp",
                                style: qe(O.value)
                              }, null, 4)
                            ])) : q("", !0)
                          ], 4)) : q("", !0)
                        ], 2)
                      ], 40, Tr);
                    }), 128))
                  ]))), 128)),
                  s.$slots["calendar-bottom-marker-description-area"] ? ue(s.$slots, "calendar-bottom-marker-description-area", {
                    key: 0,
                    weeks: M.value
                  }) : q("", !0)
                ], 8, Mr)) : q("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, hr)
      ], 2);
    };
  }
}), na = (e) => Array.isArray(e), Rr = (e, t, r, a) => {
  const n = ee([]), c = ee(/* @__PURE__ */ new Date()), { modelValue: o, calendars: v, time: b } = Ut(e, t), { defaultedMultiCalendars: _, defaultedStartTime: p, defaultedRange: $, defaultedTz: B, propDates: C } = Re(e), { validateMonthYearInRange: W, isDisabled: y, isDateRangeAllowed: X, checkMinMaxRange: R } = yt(e), { updateTimeValues: V, getSetDateTime: O, setTime: M, assignStartTime: D, validateTime: G, disabledTimesConfig: te } = Pa(e, b, o, a), A = j(
    () => (h) => v.value[h] ? v.value[h].month : 0
  ), ae = j(
    () => (h) => v.value[h] ? v.value[h].year : 0
  ), oe = (h, Z, ie) => {
    var S, re;
    v.value[h] || (v.value[h] = { month: 0, year: 0 }), v.value[h].month = Jn(Z) ? (S = v.value[h]) == null ? void 0 : S.month : Z, v.value[h].year = Jn(ie) ? (re = v.value[h]) == null ? void 0 : re.year : ie;
  }, k = () => {
    e.autoApply && t("select-date");
  };
  ft(
    o,
    (h, Z) => {
      JSON.stringify(h) !== JSON.stringify(Z) && P();
    },
    { deep: !0 }
  ), We(() => {
    e.shadow || (o.value || (H(), p.value && D(p.value)), P(!0), e.focusStartDate && e.startDate && H());
  });
  const L = j(() => {
    var h;
    return (h = e.flow) != null && h.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), x = () => {
    e.autoApply && L.value && t("auto-apply");
  }, P = (h = !1) => {
    if (o.value)
      return Array.isArray(o.value) ? (n.value = o.value, m(h)) : d(o.value, h);
    if (_.value.count && h && !e.startDate)
      return i(N(), h);
  }, Y = () => Array.isArray(o.value) && $.value.enabled ? he(o.value[0]) === he(o.value[1] ?? o.value[0]) : !1, i = (h, Z = !1) => {
    if ((!_.value.count || !_.value.static || Z) && oe(0, he(h), ye(h)), _.value.count && (!_.value.solo || !o.value || Y()))
      for (let ie = 1; ie < _.value.count; ie++) {
        const S = Ae(N(), { month: A.value(ie - 1), year: ae.value(ie - 1) }), re = da(S, { months: 1 });
        v.value[ie] = { month: he(re), year: ye(re) };
      }
  }, d = (h, Z) => {
    i(h), M("hours", Xe(h)), M("minutes", at(h)), M("seconds", Rt(h)), _.value.count && Z && g();
  }, Q = (h) => {
    if (_.value.count) {
      if (_.value.solo)
        return 0;
      const Z = he(h[0]), ie = he(h[1]);
      return Math.abs(ie - Z) < _.value.count ? 0 : 1;
    }
    return 1;
  }, le = (h, Z) => {
    h[1] && $.value.showLastInRange ? i(h[Q(h)], Z) : i(h[0], Z);
    const ie = (S, re) => [
      S(h[0]),
      h[1] ? S(h[1]) : b[re][1]
    ];
    M("hours", ie(Xe, "hours")), M("minutes", ie(at, "minutes")), M("seconds", ie(Rt, "seconds"));
  }, E = (h, Z) => {
    if (($.value.enabled || e.weekPicker) && !e.multiDates)
      return le(h, Z);
    if (e.multiDates && Z) {
      const ie = h[h.length - 1];
      return d(ie, Z);
    }
  }, m = (h) => {
    const Z = o.value;
    E(Z, h), _.value.count && _.value.solo && g();
  }, F = (h, Z) => {
    const ie = Ae(N(), { month: A.value(Z), year: ae.value(Z) }), S = h < 0 ? wt(ie, 1) : Lt(ie, 1);
    W(he(S), ye(S), h < 0, e.preventMinMaxNavigation) && (oe(Z, he(S), ye(S)), t("update-month-year", { instance: Z, month: he(S), year: ye(S) }), _.value.count && !_.value.solo && l(Z), r());
  }, l = (h) => {
    for (let Z = h - 1; Z >= 0; Z--) {
      const ie = Lt(Ae(N(), { month: A.value(Z + 1), year: ae.value(Z + 1) }), 1);
      oe(Z, he(ie), ye(ie));
    }
    for (let Z = h + 1; Z <= _.value.count - 1; Z++) {
      const ie = wt(Ae(N(), { month: A.value(Z - 1), year: ae.value(Z - 1) }), 1);
      oe(Z, he(ie), ye(ie));
    }
  }, g = () => {
    if (Array.isArray(o.value) && o.value.length === 2) {
      const h = N(
        N(o.value[1] ? o.value[1] : wt(o.value[0], 1))
      ), [Z, ie] = [he(o.value[0]), ye(o.value[0])], [S, re] = [he(o.value[1]), ye(o.value[1])];
      (Z !== S || Z === S && ie !== re) && _.value.solo && oe(1, he(h), ye(h));
    } else
      o.value && !Array.isArray(o.value) && (oe(0, he(o.value), ye(o.value)), i(N()));
  }, H = () => {
    e.startDate && (oe(0, he(N(e.startDate)), ye(N(e.startDate))), _.value.count && l(0));
  }, s = (h, Z) => {
    if (e.monthChangeOnScroll) {
      const ie = (/* @__PURE__ */ new Date()).getTime() - c.value.getTime(), S = Math.abs(h.deltaY);
      let re = 500;
      S > 1 && (re = 100), S > 100 && (re = 0), ie > re && (c.value = /* @__PURE__ */ new Date(), F(e.monthChangeOnScroll !== "inverse" ? -h.deltaY : h.deltaY, Z));
    }
  }, z = (h, Z, ie = !1) => {
    e.monthChangeOnArrows && e.vertical === ie && ne(h, Z);
  }, ne = (h, Z) => {
    F(h === "right" ? -1 : 1, Z);
  }, f = (h) => {
    if (C.value.markers)
      return en(h.value, C.value.markers);
  }, J = (h, Z) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [h == 0, !0];
      case "fair":
        return [h == 0 || Z > h, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, pe = (h, Z, ie, S) => {
    if (e.sixWeeks && h.length < 6) {
      const re = 6 - h.length, de = (Z.getDay() + 7 - S) % 7, xe = 6 - (ie.getDay() + 7 - S) % 7, [gt, mn] = J(de, xe);
      for (let ht = 1; ht <= re; ht++)
        if (mn ? !!(ht % 2) == gt : gt) {
          const Gt = h[0].days[0], pn = I(kt(Gt.value, -7), he(Z));
          h.unshift({ days: pn });
        } else {
          const Gt = h[h.length - 1], pn = Gt.days[Gt.days.length - 1], _a = I(kt(pn.value, 1), he(Z));
          h.push({ days: _a });
        }
    }
    return h;
  }, I = (h, Z) => {
    const ie = N(h), S = [];
    for (let re = 0; re < 7; re++) {
      const de = kt(ie, re), lt = he(de) !== Z;
      S.push({
        text: e.hideOffsetDates && lt ? "" : de.getDate(),
        value: de,
        current: !lt,
        classData: {}
      });
    }
    return S;
  }, T = (h, Z) => {
    const ie = [], S = new Date(Z, h), re = new Date(Z, h + 1, 0), de = e.weekStart, lt = sa(S, { weekStartsOn: de }), xe = (gt) => {
      const mn = I(gt, h);
      if (ie.push({ days: mn }), !ie[ie.length - 1].days.some(
        (ht) => ke(ze(ht.value), ze(re))
      )) {
        const ht = kt(gt, 7);
        xe(ht);
      }
    };
    return xe(lt), pe(ie, S, re, de);
  }, K = (h) => {
    const Z = ct(N(h.value), b.hours, b.minutes, Bt());
    t("date-update", Z), e.multiDates ? Wn(Z, o, e.multiDatesLimit) : o.value = Z, a(), vt().then(() => {
      x();
    });
  }, fe = (h) => $.value.noDisabledRange ? ga(n.value[0], h).some((ie) => y(ie)) : !1, Me = () => {
    n.value = o.value ? o.value.slice() : [], n.value.length === 2 && !($.value.fixedStart || $.value.fixedEnd) && (n.value = []);
  }, me = (h, Z) => {
    const ie = [
      N(h.value),
      kt(N(h.value), +$.value.autoRange)
    ];
    X(ie) ? (Z && se(h.value), n.value = ie) : t("invalid-date", h.value);
  }, se = (h) => {
    const Z = he(N(h)), ie = ye(N(h));
    if (oe(0, Z, ie), _.value.count > 0)
      for (let S = 1; S < _.value.count; S++) {
        const re = ol(
          Ae(N(h), { year: A.value(S - 1), month: ae.value(S - 1) })
        );
        oe(S, re.month, re.year);
      }
  }, Ze = (h) => {
    if (fe(h.value) || !R(h.value, o.value, $.value.fixedStart ? 0 : 1))
      return t("invalid-date", h.value);
    n.value = Ta(N(h.value), o, t, $);
  }, je = (h, Z) => {
    if (Me(), $.value.autoRange)
      return me(h, Z);
    if ($.value.fixedStart || $.value.fixedEnd)
      return Ze(h);
    n.value[0] ? R(N(h.value), o.value) && !fe(h.value) ? Pe(N(h.value), N(n.value[0])) ? (n.value.unshift(N(h.value)), t("range-end", n.value[0])) : (n.value[1] = N(h.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", h.value), t("invalid-date", h.value)) : (n.value[0] = N(h.value), t("range-start", n.value[0]));
  }, Bt = (h = !0) => e.enableSeconds ? Array.isArray(b.seconds) ? h ? b.seconds[0] : b.seconds[1] : b.seconds : 0, Yt = (h) => {
    n.value[h] = ct(
      n.value[h],
      b.hours[h],
      b.minutes[h],
      Bt(h !== 1)
    );
  }, It = () => {
    var h, Z;
    n.value[0] && n.value[1] && +((h = n.value) == null ? void 0 : h[0]) > +((Z = n.value) == null ? void 0 : Z[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, Ue = () => {
    n.value.length && (n.value[0] && !n.value[1] ? Yt(0) : (Yt(0), Yt(1), a()), It(), o.value = n.value.slice(), sn(n.value, t, e.autoApply, e.modelAuto));
  }, un = (h, Z = !1) => {
    if (y(h.value) || !h.current && e.hideOffsetDates)
      return t("invalid-date", h.value);
    if (!$.value.enabled)
      return K(h);
    na(b.hours) && na(b.minutes) && !e.multiDates && (je(h, Z), Ue());
  }, dn = (h, Z) => {
    var S;
    oe(h, Z.month, Z.year), _.value.count && !_.value.solo && l(h), t("update-month-year", { instance: h, month: Z.month, year: Z.year }), r(_.value.solo ? h : void 0);
    const ie = (S = e.flow) != null && S.length ? e.flow[e.flowStep] : void 0;
    !Z.fromNav && (ie === et.month || ie === et.year) && a();
  }, jt = (h, Z) => {
    Aa({
      value: h,
      modelValue: o,
      range: $.value.enabled,
      timezone: Z ? void 0 : B.value.timezone
    }), k(), e.multiCalendars && vt().then(() => P(!0));
  }, cn = () => {
    $.value.enabled ? o.value && Array.isArray(o.value) && o.value[0] ? o.value = Pe(N(), o.value[0]) ? [N(), o.value[0]] : [o.value[0], N()] : o.value = [N()] : o.value = N(), k();
  }, fn = () => {
    if (Array.isArray(o.value))
      if (e.multiDates) {
        const h = vn();
        o.value[o.value.length - 1] = O(h);
      } else
        o.value = o.value.map((h, Z) => h && O(h, Z));
    else
      o.value = O(o.value);
    t("time-update");
  }, vn = () => Array.isArray(o.value) && o.value.length ? o.value[o.value.length - 1] : null;
  return {
    calendars: v,
    modelValue: o,
    month: A,
    year: ae,
    time: b,
    disabledTimesConfig: te,
    validateTime: G,
    getCalendarDays: T,
    getMarker: f,
    handleScroll: s,
    handleSwipe: ne,
    handleArrow: z,
    selectDate: un,
    updateMonthYear: dn,
    presetDate: jt,
    selectCurrentDate: cn,
    updateTime: (h, Z = !0, ie = !1) => {
      V(h, Z, ie, fn);
    }
  };
}, Pr = { key: 0 }, Cr = /* @__PURE__ */ Ne({
  __name: "DatePicker",
  props: {
    ...Je
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      calendars: c,
      month: o,
      year: v,
      modelValue: b,
      time: _,
      disabledTimesConfig: p,
      validateTime: $,
      getCalendarDays: B,
      getMarker: C,
      handleArrow: W,
      handleScroll: y,
      handleSwipe: X,
      selectDate: R,
      updateMonthYear: V,
      presetDate: O,
      selectCurrentDate: M,
      updateTime: D
    } = Rr(n, a, le, E), G = $t(), { setHoverDate: te, getDayClassData: A, clearHoverDate: ae } = Ol(b, n), { defaultedMultiCalendars: oe } = Re(n), k = ee([]), L = ee([]), x = ee(null), P = He(G, "calendar"), Y = He(G, "monthYear"), i = He(G, "timePicker"), d = (s) => {
      n.shadow || a("mount", s);
    };
    ft(
      c,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Q = j(() => (s) => B(o.value(s), v.value(s)).map((z) => ({
      ...z,
      days: z.days.map((ne) => (ne.marker = C(ne), ne.classData = A(ne), ne))
    })));
    function le(s) {
      var z;
      s || s === 0 ? (z = L.value[s]) == null || z.triggerTransition(o.value(s), v.value(s)) : L.value.forEach((ne, f) => ne.triggerTransition(o.value(f), v.value(f)));
    }
    function E() {
      a("update-flow-step");
    }
    const m = (s, z = !1) => {
      R(s, z), n.spaceConfirm && a("select-date");
    };
    return t({
      clearHoverDate: ae,
      presetDate: O,
      selectCurrentDate: M,
      toggleMonthPicker: (s, z, ne = 0) => {
        var f;
        (f = k.value[ne]) == null || f.toggleMonthPicker(s, z);
      },
      toggleYearPicker: (s, z, ne = 0) => {
        var f;
        (f = k.value[ne]) == null || f.toggleYearPicker(s, z);
      },
      toggleTimePicker: (s, z, ne) => {
        var f;
        (f = x.value) == null || f.toggleTimePicker(s, z, ne);
      },
      handleArrow: W,
      updateMonthYear: V,
      getSidebarProps: () => ({
        modelValue: b,
        month: o,
        year: v,
        time: _,
        updateTime: D,
        updateMonthYear: V,
        selectDate: R,
        presetDate: O
      })
    }), (s, z) => (w(), U(be, null, [
      Ke(on, {
        "multi-calendars": u(oe).count,
        collapse: s.collapse
      }, {
        default: ge(({ instance: ne, index: f }) => [
          s.disableMonthYearSelect ? q("", !0) : (w(), we(gr, Ie({
            key: 0,
            ref: (J) => {
              J && (k.value[f] = J);
            },
            months: u(fa)(s.formatLocale, s.locale, s.monthNameFormat),
            years: u(En)(s.yearRange, s.reverseYears),
            month: u(o)(ne),
            year: u(v)(ne),
            instance: ne
          }, s.$props, {
            onMount: z[0] || (z[0] = (J) => d(u(Mt).header)),
            onResetFlow: z[1] || (z[1] = (J) => s.$emit("reset-flow")),
            onUpdateMonthYear: (J) => u(V)(ne, J),
            onOverlayClosed: z[2] || (z[2] = (J) => s.$emit("focus-menu"))
          }), Ve({ _: 2 }, [
            Se(u(Y), (J, pe) => ({
              name: J,
              fn: ge((I) => [
                ue(s.$slots, J, Oe(Le(I)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Ke(Sr, Ie({
            ref: (J) => {
              J && (L.value[f] = J);
            },
            "mapped-dates": Q.value(ne),
            month: u(o)(ne),
            year: u(v)(ne),
            instance: ne
          }, s.$props, {
            onSelectDate: (J) => u(R)(J, ne !== 1),
            onHandleSpace: (J) => m(J, ne !== 1),
            onSetHoverDate: z[3] || (z[3] = (J) => u(te)(J)),
            onHandleScroll: (J) => u(y)(J, ne),
            onHandleSwipe: (J) => u(X)(J, ne),
            onMount: z[4] || (z[4] = (J) => d(u(Mt).calendar)),
            onResetFlow: z[5] || (z[5] = (J) => s.$emit("reset-flow")),
            onTooltipOpen: z[6] || (z[6] = (J) => s.$emit("tooltip-open", J)),
            onTooltipClose: z[7] || (z[7] = (J) => s.$emit("tooltip-close", J))
          }), Ve({ _: 2 }, [
            Se(u(P), (J, pe) => ({
              name: J,
              fn: ge((I) => [
                ue(s.$slots, J, Oe(Le({ ...I })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      s.enableTimePicker ? (w(), U("div", Pr, [
        s.$slots["time-picker"] ? ue(s.$slots, "time-picker", Oe(Ie({ key: 0 }, { time: u(_), updateTime: u(D) }))) : (w(), we(Ra, Ie({
          key: 1,
          ref_key: "timePickerRef",
          ref: x
        }, s.$props, {
          hours: u(_).hours,
          minutes: u(_).minutes,
          seconds: u(_).seconds,
          "internal-model-value": s.internalModelValue,
          "disabled-times-config": u(p),
          "validate-time": u($),
          onMount: z[8] || (z[8] = (ne) => d(u(Mt).timePicker)),
          "onUpdate:hours": z[9] || (z[9] = (ne) => u(D)(ne)),
          "onUpdate:minutes": z[10] || (z[10] = (ne) => u(D)(ne, !1)),
          "onUpdate:seconds": z[11] || (z[11] = (ne) => u(D)(ne, !1, !0)),
          onResetFlow: z[12] || (z[12] = (ne) => s.$emit("reset-flow")),
          onOverlayClosed: z[13] || (z[13] = (ne) => s.$emit("time-picker-close")),
          onOverlayOpened: z[14] || (z[14] = (ne) => s.$emit("time-picker-open", ne)),
          onAmPmChange: z[15] || (z[15] = (ne) => s.$emit("am-pm-change", ne))
        }), Ve({ _: 2 }, [
          Se(u(i), (ne, f) => ({
            name: ne,
            fn: ge((J) => [
              ue(s.$slots, ne, Oe(Le(J)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : q("", !0)
    ], 64));
  }
}), _r = (e, t) => {
  const r = ee(), { defaultedMultiCalendars: a, defaultedConfig: n, defaultedHighlight: c, defaultedRange: o, propDates: v } = Re(e), { modelValue: b, year: _, month: p, calendars: $ } = Ut(e, t), { isDisabled: B } = yt(e), { selectYear: C, groupedYears: W, showYearPicker: y, isDisabled: X, toggleYearPicker: R, handleYearSelect: V, handleYear: O } = Sa({
    modelValue: b,
    multiCalendars: a,
    highlight: c,
    calendars: $,
    propDates: v,
    month: p,
    year: _,
    props: e,
    emit: t
  }), M = (Y, i) => [Y, i].map((d) => nt(d, "MMMM", { locale: e.formatLocale })).join("-"), D = j(() => (Y) => b.value ? Array.isArray(b.value) ? b.value.some((i) => jn(Y, i)) : jn(b.value, Y) : !1), G = (Y) => {
    if (o.value.enabled) {
      if (Array.isArray(b.value)) {
        const i = ke(Y, b.value[0]) || ke(Y, b.value[1]);
        return an(b.value, r.value, Y) && !i;
      }
      return !1;
    }
    return !1;
  }, te = (Y, i) => Y.quarter === Qn(i) && Y.year === ye(i), A = (Y) => typeof c.value == "function" ? c.value({ quarter: Qn(Y), year: ye(Y) }) : !!c.value.quarters.find((i) => te(i, Y)), ae = j(() => (Y) => {
    const i = Ae(/* @__PURE__ */ new Date(), { year: _.value(Y) });
    return Ka({
      start: ja(i),
      end: Ga(i)
    }).map((d) => {
      const Q = Qa(d), le = Gn(d), E = B(d), m = G(Q), F = A(Q);
      return {
        text: M(Q, le),
        value: Q,
        active: D.value(Q),
        highlighted: F,
        disabled: E,
        isBetween: m
      };
    });
  }), oe = (Y) => {
    Wn(Y, b, e.multiDatesLimit), t("auto-apply", !0);
  }, k = (Y) => {
    b.value = Hn(b, Y, t), sn(b.value, t, e.autoApply, e.modelAuto);
  }, L = (Y) => {
    b.value = Y, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: W,
    year: _,
    isDisabled: X,
    quarters: ae,
    showYearPicker: y,
    modelValue: b,
    setHoverDate: (Y) => {
      r.value = Y;
    },
    selectYear: C,
    selectQuarter: (Y, i, d) => {
      if (!d)
        return $.value[i].month = he(Gn(Y)), e.multiDates ? oe(Y) : o.value.enabled ? k(Y) : L(Y);
    },
    toggleYearPicker: R,
    handleYearSelect: V,
    handleYear: O
  };
}, Or = { class: "dp--quarter-items" }, Br = ["disabled", "onClick", "onMouseover"], Yr = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...Je
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, c = $t(), o = He(c, "yearMode"), {
      defaultedMultiCalendars: v,
      defaultedConfig: b,
      groupedYears: _,
      year: p,
      isDisabled: $,
      quarters: B,
      modelValue: C,
      showYearPicker: W,
      setHoverDate: y,
      selectQuarter: X,
      toggleYearPicker: R,
      handleYearSelect: V,
      handleYear: O
    } = _r(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: C,
      year: p,
      selectQuarter: X,
      handleYearSelect: V,
      handleYear: O
    }) }), (D, G) => (w(), we(on, {
      "multi-calendars": u(v).count,
      collapse: D.collapse,
      stretch: ""
    }, {
      default: ge(({ instance: te }) => [
        ce("div", {
          class: "dp-quarter-picker-wrap",
          style: qe({ minHeight: `${u(b).modeHeight}px` })
        }, [
          ce("div", null, [
            Ke($a, Ie(D.$props, {
              items: u(_)(te),
              instance: te,
              "show-year-picker": u(W)[te],
              year: u(p)(te),
              "is-disabled": (A) => u($)(te, A),
              onHandleYear: (A) => u(O)(te, A),
              onYearSelect: (A) => u(V)(A, te),
              onToggleYearPicker: (A) => u(R)(te, A == null ? void 0 : A.flow, A == null ? void 0 : A.show)
            }), Ve({ _: 2 }, [
              Se(u(o), (A, ae) => ({
                name: A,
                fn: ge((oe) => [
                  ue(D.$slots, A, Oe(Le(oe)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          ce("div", Or, [
            (w(!0), U(be, null, Se(u(B)(te), (A, ae) => (w(), U("div", { key: ae }, [
              ce("button", {
                type: "button",
                class: De(["dp--qr-btn", {
                  "dp--qr-btn-active": A.active,
                  "dp--qr-btn-between": A.isBetween,
                  "dp--qr-btn-disabled": A.disabled,
                  "dp--highlighted": A.highlighted
                }]),
                disabled: A.disabled,
                onClick: (oe) => u(X)(A.value, te, A.disabled),
                onMouseover: (oe) => u(y)(A.value)
              }, [
                D.$slots.quarter ? ue(D.$slots, "quarter", {
                  key: 0,
                  value: A.value,
                  text: A.text
                }) : (w(), U(be, { key: 1 }, [
                  st(Ee(A.text), 1)
                ], 64))
              ], 42, Br)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Ir = ["id", "aria-label"], Nr = {
  key: 0,
  class: "dp--menu-load-container"
}, Er = /* @__PURE__ */ ce("span", { class: "dp--menu-loader" }, null, -1), Fr = [
  Er
], Lr = {
  key: 0,
  class: "dp__sidebar_left"
}, Vr = ["onClick", "onKeydown"], Wr = {
  key: 2,
  class: "dp__sidebar_right"
}, Hr = {
  key: 3,
  class: "dp__action_extra"
}, aa = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...rn,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, c = ee(null), o = j(() => {
      const { openOnTop: T, ...K } = n;
      return {
        ...K,
        flowStep: A.value,
        collapse: n.collapse,
        noOverlayFocus: n.noOverlayFocus,
        menuWrapRef: c.value
      };
    }), { setMenuFocused: v, setShiftKey: b, control: _ } = Da(), p = $t(), { defaultedTextInput: $, defaultedInline: B, defaultedConfig: C } = Re(n), W = ee(null), y = ee(0), X = ee(null), R = ee(!1), V = ee(null);
    We(() => {
      if (!n.shadow) {
        R.value = !0, O(), window.addEventListener("resize", O);
        const T = Be(c);
        if (T && !$.value.enabled && !B.value.enabled && (v(!0), x()), T) {
          const K = (fe) => {
            C.value.allowPreventDefault && fe.preventDefault(), dt(fe, C.value, !0);
          };
          T.addEventListener("pointerdown", K), T.addEventListener("mousedown", K);
        }
      }
    }), tn(() => {
      window.removeEventListener("resize", O);
    });
    const O = () => {
      const T = Be(X);
      T && (y.value = T.getBoundingClientRect().width);
    }, { arrowRight: M, arrowLeft: D, arrowDown: G, arrowUp: te } = pt(), { flowStep: A, updateFlowStep: ae, childMount: oe, resetFlow: k } = Bl(n, a, V), L = j(() => n.monthPicker ? ql : n.yearPicker ? Jl : n.timePicker ? mr : n.quarterPicker ? Yr : Cr), x = () => {
      const T = Be(c);
      T && T.focus({ preventScroll: !0 });
    }, P = j(() => {
      var T;
      return ((T = V.value) == null ? void 0 : T.getSidebarProps()) || {};
    }), Y = () => {
      n.openOnTop && a("recalculate-position");
    }, i = He(p, "action"), d = j(() => n.monthPicker || n.yearPicker ? He(p, "monthYear") : n.timePicker ? He(p, "timePicker") : He(p, "shared")), Q = j(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), le = j(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), E = j(
      () => ({
        dp__menu: !0,
        dp__menu_index: !B.value.enabled,
        dp__relative: B.value.enabled,
        [n.menuClassName]: !!n.menuClassName
      })
    ), m = (T) => {
      dt(T, C.value, !0);
    }, F = () => {
      n.escClose && a("close-picker");
    }, l = (T) => {
      if (n.arrowNavigation) {
        if (T === "up")
          return te();
        if (T === "down")
          return G();
        if (T === "left")
          return D();
        if (T === "right")
          return M();
      } else
        T === "left" || T === "up" ? ne("handleArrow", "left", 0, T === "up") : ne("handleArrow", "right", 0, T === "down");
    }, g = (T) => {
      b(T.shiftKey), !n.disableMonthYearSelect && T.code === "Tab" && T.target.classList.contains("dp__menu") && _.value.shiftKeyInMenu && (T.preventDefault(), dt(T, C.value, !0), a("close-picker"));
    }, H = () => {
      x(), a("time-picker-close");
    }, s = (T) => {
      var K, fe, Me;
      (K = V.value) == null || K.toggleTimePicker(!1, !1), (fe = V.value) == null || fe.toggleMonthPicker(!1, !1, T), (Me = V.value) == null || Me.toggleYearPicker(!1, !1, T);
    }, z = (T, K = 0) => {
      var fe, Me, me;
      return T === "month" ? (fe = V.value) == null ? void 0 : fe.toggleMonthPicker(!1, !0, K) : T === "year" ? (Me = V.value) == null ? void 0 : Me.toggleYearPicker(!1, !0, K) : T === "time" ? (me = V.value) == null ? void 0 : me.toggleTimePicker(!0, !1) : s(K);
    }, ne = (T, ...K) => {
      var fe, Me;
      (fe = V.value) != null && fe[T] && ((Me = V.value) == null || Me[T](...K));
    }, f = () => {
      ne("selectCurrentDate");
    }, J = (T, K) => {
      ne("presetDate", T, K);
    }, pe = () => {
      ne("clearHoverDate");
    };
    return t({
      updateMonthYear: (T, K) => {
        ne("updateMonthYear", T, K);
      },
      switchView: z
    }), (T, K) => {
      var fe, Me, me;
      return w(), U("div", {
        id: T.uid ? `dp-menu-${T.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: c,
        tabindex: "0",
        role: "dialog",
        "aria-label": (fe = T.ariaLabels) == null ? void 0 : fe.menu,
        class: De(E.value),
        onMouseleave: pe,
        onClick: m,
        onKeydown: [
          ve(F, ["esc"]),
          K[18] || (K[18] = ve($e((se) => l("left"), ["prevent"]), ["left"])),
          K[19] || (K[19] = ve($e((se) => l("up"), ["prevent"]), ["up"])),
          K[20] || (K[20] = ve($e((se) => l("down"), ["prevent"]), ["down"])),
          K[21] || (K[21] = ve($e((se) => l("right"), ["prevent"]), ["right"])),
          g
        ]
      }, [
        (T.disabled || T.readonly) && u(B).enabled || T.loading ? (w(), U("div", {
          key: 0,
          class: De(le.value)
        }, [
          T.loading ? (w(), U("div", Nr, Fr)) : q("", !0)
        ], 2)) : q("", !0),
        !u(B).enabled && !T.teleportCenter ? (w(), U("div", {
          key: 1,
          class: De(Q.value)
        }, null, 2)) : q("", !0),
        ce("div", {
          ref_key: "innerMenuRef",
          ref: X,
          class: De({
            dp__menu_content_wrapper: ((Me = T.presetDates) == null ? void 0 : Me.length) || !!T.$slots["left-sidebar"] || !!T.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((me = T.presetDates) == null ? void 0 : me.length) || !!T.$slots["left-sidebar"] || !!T.$slots["right-sidebar"]
          }),
          style: qe({ "--dp-menu-width": `${y.value}px` })
        }, [
          T.$slots["left-sidebar"] ? (w(), U("div", Lr, [
            ue(T.$slots, "left-sidebar", Oe(Le(P.value)))
          ])) : q("", !0),
          T.presetDates.length ? (w(), U("div", {
            key: 1,
            class: De({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (w(!0), U(be, null, Se(T.presetDates, (se, Ze) => (w(), U(be, { key: Ze }, [
              se.slot ? ue(T.$slots, se.slot, {
                key: 0,
                presetDate: J,
                label: se.label,
                value: se.value
              }) : (w(), U("button", {
                key: 1,
                type: "button",
                style: qe(se.style || {}),
                class: De(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: $e((je) => J(se.value, se.noTz), ["prevent"]),
                onKeydown: [
                  ve($e((je) => J(se.value, se.noTz), ["prevent"]), ["enter"]),
                  ve($e((je) => J(se.value, se.noTz), ["prevent"]), ["space"])
                ]
              }, Ee(se.label), 47, Vr))
            ], 64))), 128))
          ], 2)) : q("", !0),
          ce("div", {
            ref_key: "calendarWrapperRef",
            ref: W,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (w(), we(nn(L.value), Ie({
              ref_key: "dynCmpRef",
              ref: V
            }, o.value, {
              "flow-step": u(A),
              onMount: u(oe),
              onUpdateFlowStep: u(ae),
              onResetFlow: u(k),
              onFocusMenu: x,
              onSelectDate: K[0] || (K[0] = (se) => T.$emit("select-date")),
              onDateUpdate: K[1] || (K[1] = (se) => T.$emit("date-update", se)),
              onTooltipOpen: K[2] || (K[2] = (se) => T.$emit("tooltip-open", se)),
              onTooltipClose: K[3] || (K[3] = (se) => T.$emit("tooltip-close", se)),
              onAutoApply: K[4] || (K[4] = (se) => T.$emit("auto-apply", se)),
              onRangeStart: K[5] || (K[5] = (se) => T.$emit("range-start", se)),
              onRangeEnd: K[6] || (K[6] = (se) => T.$emit("range-end", se)),
              onInvalidFixedRange: K[7] || (K[7] = (se) => T.$emit("invalid-fixed-range", se)),
              onTimeUpdate: K[8] || (K[8] = (se) => T.$emit("time-update")),
              onAmPmChange: K[9] || (K[9] = (se) => T.$emit("am-pm-change", se)),
              onTimePickerOpen: K[10] || (K[10] = (se) => T.$emit("time-picker-open", se)),
              onTimePickerClose: H,
              onRecalculatePosition: Y,
              onUpdateMonthYear: K[11] || (K[11] = (se) => T.$emit("update-month-year", se)),
              onAutoApplyInvalid: K[12] || (K[12] = (se) => T.$emit("auto-apply-invalid", se)),
              onInvalidDate: K[13] || (K[13] = (se) => T.$emit("invalid-date", se)),
              "onUpdate:internalModelValue": K[14] || (K[14] = (se) => T.$emit("update:internal-model-value", se))
            }), Ve({ _: 2 }, [
              Se(d.value, (se, Ze) => ({
                name: se,
                fn: ge((je) => [
                  ue(T.$slots, se, Oe(Le({ ...je })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          T.$slots["right-sidebar"] ? (w(), U("div", Wr, [
            ue(T.$slots, "right-sidebar", Oe(Le(P.value)))
          ])) : q("", !0),
          T.$slots["action-extra"] ? (w(), U("div", Hr, [
            T.$slots["action-extra"] ? ue(T.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: f
            }) : q("", !0)
          ])) : q("", !0)
        ], 6),
        !T.autoApply || u(C).keepActionRow ? (w(), we(Vl, Ie({
          key: 2,
          "menu-mount": R.value
        }, o.value, {
          "calendar-width": y.value,
          onClosePicker: K[15] || (K[15] = (se) => T.$emit("close-picker")),
          onSelectDate: K[16] || (K[16] = (se) => T.$emit("select-date")),
          onInvalidSelect: K[17] || (K[17] = (se) => T.$emit("invalid-select")),
          onSelectNow: f
        }), Ve({ _: 2 }, [
          Se(u(i), (se, Ze) => ({
            name: se,
            fn: ge((je) => [
              ue(T.$slots, se, Oe(Le({ ...je })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : q("", !0)
      ], 42, Ir);
    };
  }
}), zr = typeof window < "u" ? window : void 0, Tn = () => {
}, Ur = (e) => Ya() ? (Ia(e), !0) : !1, Kr = (e, t, r, a) => {
  if (!e)
    return Tn;
  let n = Tn;
  const c = ft(
    () => u(e),
    (v) => {
      n(), v && (v.addEventListener(t, r, a), n = () => {
        v.removeEventListener(t, r, a), n = Tn;
      });
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    c(), n();
  };
  return Ur(o), o;
}, jr = (e, t, r, a = {}) => {
  const { window: n = zr, event: c = "pointerdown" } = a;
  return n ? Kr(n, c, (v) => {
    const b = Be(e), _ = Be(t);
    !b || !_ || b === v.target || v.composedPath().includes(b) || v.composedPath().includes(_) || r(v);
  }, { passive: !0 }) : void 0;
}, Gr = /* @__PURE__ */ Ne({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...rn
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, c = $t(), o = ee(!1), v = xt(n, "modelValue"), b = xt(n, "timezone"), _ = ee(null), p = ee(null), $ = ee(null), B = ee(!1), C = ee(null), W = ee(!1), y = ee(!1), X = ee(!1), { setMenuFocused: R, setShiftKey: V } = Da(), { clearArrowNav: O } = pt(), { validateDate: M, isValidTime: D } = yt(n), { defaultedTransitions: G, defaultedTextInput: te, defaultedInline: A, defaultedConfig: ae, defaultedRange: oe } = Re(n), { menuTransition: k, showTransition: L } = zt(G);
    We(() => {
      l(n.modelValue), vt().then(() => {
        if (!A.value.enabled) {
          const S = le(C.value);
          S == null || S.addEventListener("scroll", I), window == null || window.addEventListener("resize", T);
        }
      }), A.value.enabled && (o.value = !0), window == null || window.addEventListener("keyup", K), window == null || window.addEventListener("keydown", fe);
    }), tn(() => {
      if (!A.value.enabled) {
        const S = le(C.value);
        S == null || S.removeEventListener("scroll", I), window == null || window.removeEventListener("resize", T);
      }
      window == null || window.removeEventListener("keyup", K), window == null || window.removeEventListener("keydown", fe);
    });
    const x = He(c, "all", n.presetDates), P = He(c, "input");
    ft(
      [v, b],
      () => {
        l(v.value);
      },
      { deep: !0 }
    );
    const { openOnTop: Y, menuStyle: i, xCorrect: d, setMenuPosition: Q, getScrollableParent: le, shadowRender: E } = Pl({
      menuRef: _,
      menuRefInner: p,
      inputRef: $,
      pickerWrapperRef: C,
      inline: A,
      emit: a,
      props: n,
      slots: c
    }), {
      inputValue: m,
      internalModelValue: F,
      parseExternalModelValue: l,
      emitModelValue: g,
      formatInputValue: H,
      checkBeforeEmit: s
    } = Sl(a, n, B), z = j(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: A.value.enabled,
        "dp--flex-display-collapsed": X.value,
        dp__flex_display_with_input: A.value.input
      })
    ), ne = j(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), f = j(() => ({
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || A.value.enabled
    })), J = j(() => ({ class: "dp__outer_menu_wrap" })), pe = j(() => A.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), I = () => {
      o.value && (ae.value.closeOnScroll ? Ue() : Q());
    }, T = () => {
      var re;
      o.value && Q();
      const S = (re = p.value) == null ? void 0 : re.$el.getBoundingClientRect().width;
      X.value = document.body.offsetWidth <= S;
    }, K = (S) => {
      S.key === "Tab" && !A.value.enabled && !n.teleport && ae.value.tabOutClosesMenu && (C.value.contains(document.activeElement) || Ue()), y.value = S.shiftKey;
    }, fe = (S) => {
      y.value = S.shiftKey;
    }, Me = () => {
      !n.disabled && !n.readonly && (E(aa, n), Q(!1), o.value = !0, o.value && a("open"), o.value || It(), l(n.modelValue));
    }, me = () => {
      var S;
      m.value = "", It(), (S = $.value) == null || S.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), ae.value.closeOnClearValue && Ue();
    }, se = () => {
      const S = F.value;
      return !S || !Array.isArray(S) && M(S) ? !0 : Array.isArray(S) ? n.multiDates || S.length === 2 && M(S[0]) && M(S[1]) ? !0 : oe.value.partialRange && !n.timePicker ? M(S[0]) : !1 : !1;
    }, Ze = () => {
      s() && se() ? (g(), Ue()) : a("invalid-select", F.value);
    }, je = (S) => {
      Bt(), g(), ae.value.closeOnAutoApply && !S && Ue();
    }, Bt = () => {
      $.value && te.value.enabled && $.value.setParsedDate(F.value);
    }, Yt = (S = !1) => {
      n.autoApply && D(F.value) && se() && (oe.value.enabled && Array.isArray(F.value) ? (oe.value.partialRange || F.value.length === 2) && je(S) : je(S));
    }, It = () => {
      te.value.enabled || (F.value = null);
    }, Ue = () => {
      A.value.enabled || (o.value && (o.value = !1, d.value = !1, R(!1), V(!1), O(), a("closed"), m.value && l(v.value)), It(), a("blur"));
    }, un = (S, re, de = !1) => {
      if (!S) {
        F.value = null;
        return;
      }
      const lt = Array.isArray(S) ? !S.some((gt) => !M(gt)) : M(S), xe = D(S);
      lt && xe && (F.value = S, re && (W.value = de, Ze(), a("text-submit")));
    }, dn = () => {
      n.autoApply && D(F.value) && g(), Bt();
    }, jt = () => o.value ? Ue() : Me(), cn = (S) => {
      F.value = S;
    }, fn = () => {
      te.value.enabled && (B.value = !0, H()), a("focus");
    }, vn = () => {
      if (te.value.enabled && (B.value = !1, l(n.modelValue), W.value)) {
        const S = tl(C.value, y.value);
        S == null || S.focus();
      }
      a("blur");
    }, zn = (S) => {
      p.value && p.value.updateMonthYear(0, {
        month: Xn(S.month),
        year: Xn(S.year)
      });
    }, h = (S) => {
      l(S ?? n.modelValue);
    }, Z = (S, re) => {
      var de;
      (de = p.value) == null || de.switchView(S, re);
    }, ie = (S) => ae.value.onClickOutside ? ae.value.onClickOutside(S) : Ue();
    return jr(_, $, () => ie(se)), t({
      closeMenu: Ue,
      selectDate: Ze,
      clearValue: me,
      openMenu: Me,
      onScroll: I,
      formatInputValue: H,
      // exposed for testing purposes
      updateInternalModelValue: cn,
      // modify internal modelValue
      setMonthYear: zn,
      parseModel: h,
      switchView: Z,
      toggleMenu: jt
    }), (S, re) => (w(), U("div", {
      ref_key: "pickerWrapperRef",
      ref: C,
      class: De(z.value),
      "data-datepicker-instance": ""
    }, [
      Ke(El, Ie({
        ref_key: "inputRef",
        ref: $,
        "input-value": u(m),
        "onUpdate:inputValue": re[0] || (re[0] = (de) => Kn(m) ? m.value = de : null),
        "is-menu-open": o.value
      }, S.$props, {
        onClear: me,
        onOpen: Me,
        onSetInputDate: un,
        onSetEmptyDate: u(g),
        onSelectDate: Ze,
        onToggle: jt,
        onClose: Ue,
        onFocus: fn,
        onBlur: vn,
        onRealBlur: re[1] || (re[1] = (de) => B.value = !1)
      }), Ve({ _: 2 }, [
        Se(u(P), (de, lt) => ({
          name: de,
          fn: ge((xe) => [
            ue(S.$slots, de, Oe(Le(xe)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (w(), we(nn(S.teleport ? Na : "div"), Oe(Le(f.value)), {
        default: ge(() => [
          Ke(_t, {
            name: u(k)(u(Y)),
            css: u(L) && !u(A).enabled
          }, {
            default: ge(() => [
              o.value ? (w(), U("div", Ie({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: _
              }, J.value, {
                class: { "dp--menu-wrapper": !u(A).enabled },
                style: u(A).enabled ? void 0 : u(i)
              }), [
                Ke(aa, Ie({
                  ref_key: "dpMenuRef",
                  ref: p
                }, S.$props, {
                  "internal-model-value": u(F),
                  "onUpdate:internalModelValue": re[2] || (re[2] = (de) => Kn(F) ? F.value = de : null),
                  class: { [ne.value]: !0, "dp--menu-wrapper": S.teleport },
                  "open-on-top": u(Y),
                  "no-overlay-focus": pe.value,
                  collapse: X.value,
                  onClosePicker: Ue,
                  onSelectDate: Ze,
                  onAutoApply: Yt,
                  onTimeUpdate: dn,
                  onFlowStep: re[3] || (re[3] = (de) => S.$emit("flow-step", de)),
                  onUpdateMonthYear: re[4] || (re[4] = (de) => S.$emit("update-month-year", de)),
                  onInvalidSelect: re[5] || (re[5] = (de) => S.$emit("invalid-select", u(F))),
                  onAutoApplyInvalid: re[6] || (re[6] = (de) => S.$emit("invalid-select", de)),
                  onInvalidFixedRange: re[7] || (re[7] = (de) => S.$emit("invalid-fixed-range", de)),
                  onRecalculatePosition: u(Q),
                  onTooltipOpen: re[8] || (re[8] = (de) => S.$emit("tooltip-open", de)),
                  onTooltipClose: re[9] || (re[9] = (de) => S.$emit("tooltip-close", de)),
                  onTimePickerOpen: re[10] || (re[10] = (de) => S.$emit("time-picker-open", de)),
                  onTimePickerClose: re[11] || (re[11] = (de) => S.$emit("time-picker-close", de)),
                  onAmPmChange: re[12] || (re[12] = (de) => S.$emit("am-pm-change", de)),
                  onRangeStart: re[13] || (re[13] = (de) => S.$emit("range-start", de)),
                  onRangeEnd: re[14] || (re[14] = (de) => S.$emit("range-end", de)),
                  onDateUpdate: re[15] || (re[15] = (de) => S.$emit("date-update", de)),
                  onInvalidDate: re[16] || (re[16] = (de) => S.$emit("invalid-date", de))
                }), Ve({ _: 2 }, [
                  Se(u(x), (de, lt) => ({
                    name: de,
                    fn: ge((xe) => [
                      ue(S.$slots, de, Oe(Le({ ...xe })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : q("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Ca = /* @__PURE__ */ (() => {
  const e = Gr;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Qr).forEach(([e, t]) => {
  e !== "default" && (Ca[e] = t);
});
export {
  Ca as default
};
