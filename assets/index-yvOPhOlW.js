(function () {
  const Ue = document.createElement("link").relList;
  if (Ue && Ue.supports && Ue.supports("modulepreload")) return;
  for (const le of document.querySelectorAll('link[rel="modulepreload"]'))
    Xe(le);
  new MutationObserver((le) => {
    for (const fe of le)
      if (fe.type === "childList")
        for (const ut of fe.addedNodes)
          ut.tagName === "LINK" && ut.rel === "modulepreload" && Xe(ut);
  }).observe(document, { childList: !0, subtree: !0 });
  function xn(le) {
    const fe = {};
    return (
      le.integrity && (fe.integrity = le.integrity),
      le.referrerPolicy && (fe.referrerPolicy = le.referrerPolicy),
      le.crossOrigin === "use-credentials"
        ? (fe.credentials = "include")
        : le.crossOrigin === "anonymous"
        ? (fe.credentials = "omit")
        : (fe.credentials = "same-origin"),
      fe
    );
  }
  function Xe(le) {
    if (le.ep) return;
    le.ep = !0;
    const fe = xn(le);
    fetch(le.href, fe);
  }
})();
var Oi = (wn, Ue) => () => (
    Ue || wn((Ue = { exports: {} }).exports, Ue), Ue.exports
  ),
  Si = Oi((wn, mn) => {
    (function () {
      const e = document.createElement("link").relList;
      if (e && e.supports && e.supports("modulepreload")) return;
      for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
      new MutationObserver((r) => {
        for (const a of r)
          if (a.type === "childList")
            for (const o of a.addedNodes)
              o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
      }).observe(document, { childList: !0, subtree: !0 });
      function t(r) {
        const a = {};
        return (
          r.integrity && (a.integrity = r.integrity),
          r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
          r.crossOrigin === "use-credentials"
            ? (a.credentials = "include")
            : r.crossOrigin === "anonymous"
            ? (a.credentials = "omit")
            : (a.credentials = "same-origin"),
          a
        );
      }
      function n(r) {
        if (r.ep) return;
        r.ep = !0;
        const a = t(r);
        fetch(r.href, a);
      }
    })();
    const xn = !1;
    var Xe = Array.isArray,
      le = Array.prototype.indexOf,
      fe = Array.from,
      ut = Object.defineProperty,
      Ye = Object.getOwnPropertyDescriptor,
      Kn = Object.getOwnPropertyDescriptors,
      la = Object.prototype,
      ua = Array.prototype,
      _n = Object.getPrototypeOf;
    function Mt(e) {
      return typeof e == "function";
    }
    const Ae = () => {};
    function sa(e) {
      return e();
    }
    function Yt(e) {
      for (var t = 0; t < e.length; t++) e[t]();
    }
    const ve = 2,
      Vn = 4,
      Et = 8,
      kn = 16,
      Ee = 32,
      st = 64,
      Ht = 128,
      et = 256,
      Kt = 512,
      ce = 1024,
      Ne = 2048,
      tt = 4096,
      Oe = 8192,
      ct = 16384,
      ca = 32768,
      Ot = 65536,
      qn = 1 << 17,
      fa = 1 << 19,
      Jn = 1 << 20,
      Se = Symbol("$state"),
      Zn = Symbol("legacy props"),
      da = Symbol("");
    function Gn(e) {
      return e === this.v;
    }
    function Qn(e, t) {
      return e != e
        ? t == t
        : e !== t ||
            (e !== null && typeof e == "object") ||
            typeof e == "function";
    }
    function Mn(e) {
      return !Qn(e, this.v);
    }
    function va(e) {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    }
    function ha() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    }
    function pa(e) {
      throw new Error("https://svelte.dev/e/effect_orphan");
    }
    function ga() {
      throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
    }
    function ma(e) {
      throw new Error("https://svelte.dev/e/lifecycle_legacy_only");
    }
    function ya(e) {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    }
    function ba() {
      throw new Error("https://svelte.dev/e/state_descriptors_fixed");
    }
    function wa() {
      throw new Error("https://svelte.dev/e/state_prototype_fixed");
    }
    function xa() {
      throw new Error("https://svelte.dev/e/state_unsafe_local_read");
    }
    function _a() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    }
    let ft = !1,
      ka = !1;
    function Ma() {
      ft = !0;
    }
    const En = 1,
      On = 2,
      er = 4,
      Ea = 8,
      Oa = 16,
      Sa = 1,
      Ca = 2,
      La = 4,
      ja = 8,
      Pa = 16,
      $a = 1,
      Ta = 2,
      he = Symbol();
    function xe(e, t) {
      var n = { f: 0, v: e, reactions: null, equals: Gn, rv: 0, wv: 0 };
      return n;
    }
    function Vt(e, t = !1) {
      var n;
      const r = xe(e);
      return (
        t || (r.equals = Mn),
        ft && Y !== null && Y.l !== null && ((n = Y.l).s ?? (n.s = [])).push(r),
        r
      );
    }
    function te(e, t = !1) {
      return Aa(Vt(e, t));
    }
    function Aa(e) {
      return (
        J !== null && !De && J.f & ve && (Le === null ? Ya([e]) : Le.push(e)), e
      );
    }
    function qt(e, t) {
      return (
        D(
          e,
          ie(() => d(e))
        ),
        t
      );
    }
    function D(e, t) {
      return (
        J !== null &&
          !De &&
          At() &&
          J.f & (ve | kn) &&
          (Le === null || !Le.includes(e)) &&
          _a(),
        St(e, t)
      );
    }
    function St(e, t) {
      return (
        e.equals(t) ||
          (e.v,
          (e.v = t),
          (e.wv = Mr()),
          tr(e, Ne),
          At() &&
            K !== null &&
            K.f & ce &&
            !(K.f & (Ee | st)) &&
            (Re === null ? Ha([e]) : Re.push(e))),
        t
      );
    }
    function tr(e, t) {
      var n = e.reactions;
      if (n !== null)
        for (var r = At(), a = n.length, o = 0; o < a; o++) {
          var l = n[o],
            c = l.f;
          c & Ne ||
            (!r && l === K) ||
            (_e(l, t), c & (ce | et) && (c & ve ? tr(l, tt) : sn(l)));
        }
    }
    let nr = !1;
    function dt(e, t = null, n) {
      if (typeof e != "object" || e === null || Se in e) return e;
      const r = _n(e);
      if (r !== la && r !== ua) return e;
      var a = new Map(),
        o = Xe(e),
        l = xe(0);
      o && a.set("length", xe(e.length));
      var c;
      return new Proxy(e, {
        defineProperty(f, s, v) {
          (!("value" in v) ||
            v.configurable === !1 ||
            v.enumerable === !1 ||
            v.writable === !1) &&
            ba();
          var g = a.get(s);
          return (
            g === void 0
              ? ((g = xe(v.value)), a.set(s, g))
              : D(g, dt(v.value, c)),
            !0
          );
        },
        deleteProperty(f, s) {
          var v = a.get(s);
          if (v === void 0) s in f && a.set(s, xe(he));
          else {
            if (o && typeof s == "string") {
              var g = a.get("length"),
                p = Number(s);
              Number.isInteger(p) && p < g.v && D(g, p);
            }
            D(v, he), rr(l);
          }
          return !0;
        },
        get(f, s, v) {
          var g;
          if (s === Se) return e;
          var p = a.get(s),
            h = s in f;
          if (
            (p === void 0 &&
              (!h || ((g = Ye(f, s)) != null && g.writable)) &&
              ((p = xe(dt(h ? f[s] : he, c))), a.set(s, p)),
            p !== void 0)
          ) {
            var E = d(p);
            return E === he ? void 0 : E;
          }
          return Reflect.get(f, s, v);
        },
        getOwnPropertyDescriptor(f, s) {
          var v = Reflect.getOwnPropertyDescriptor(f, s);
          if (v && "value" in v) {
            var g = a.get(s);
            g && (v.value = d(g));
          } else if (v === void 0) {
            var p = a.get(s),
              h = p == null ? void 0 : p.v;
            if (p !== void 0 && h !== he)
              return {
                enumerable: !0,
                configurable: !0,
                value: h,
                writable: !0,
              };
          }
          return v;
        },
        has(f, s) {
          var v;
          if (s === Se) return !0;
          var g = a.get(s),
            p = (g !== void 0 && g.v !== he) || Reflect.has(f, s);
          if (
            g !== void 0 ||
            (K !== null && (!p || ((v = Ye(f, s)) != null && v.writable)))
          ) {
            g === void 0 && ((g = xe(p ? dt(f[s], c) : he)), a.set(s, g));
            var h = d(g);
            if (h === he) return !1;
          }
          return p;
        },
        set(f, s, v, g) {
          var p,
            h = a.get(s),
            E = s in f;
          if (o && s === "length")
            for (var L = v; L < h.v; L += 1) {
              var S = a.get(L + "");
              S !== void 0
                ? D(S, he)
                : L in f && ((S = xe(he)), a.set(L + "", S));
            }
          h === void 0
            ? (!E || ((p = Ye(f, s)) != null && p.writable)) &&
              ((h = xe(void 0)), D(h, dt(v, c)), a.set(s, h))
            : ((E = h.v !== he), D(h, dt(v, c)));
          var j = Reflect.getOwnPropertyDescriptor(f, s);
          if ((j != null && j.set && j.set.call(g, v), !E)) {
            if (o && typeof s == "string") {
              var W = a.get("length"),
                T = Number(s);
              Number.isInteger(T) && T >= W.v && D(W, T + 1);
            }
            rr(l);
          }
          return !0;
        },
        ownKeys(f) {
          d(l);
          var s = Reflect.ownKeys(f).filter((p) => {
            var h = a.get(p);
            return h === void 0 || h.v !== he;
          });
          for (var [v, g] of a) g.v !== he && !(v in f) && s.push(v);
          return s;
        },
        setPrototypeOf() {
          wa();
        },
      });
    }
    function rr(e, t = 1) {
      D(e, e.v + t);
    }
    function ar(e) {
      return e !== null && typeof e == "object" && Se in e ? e[Se] : e;
    }
    function Na(e, t) {
      return Object.is(ar(e), ar(t));
    }
    var or, ir, lr;
    function Ia() {
      if (or === void 0) {
        or = window;
        var e = Element.prototype,
          t = Node.prototype;
        (ir = Ye(t, "firstChild").get),
          (lr = Ye(t, "nextSibling").get),
          (e.__click = void 0),
          (e.__className = ""),
          (e.__attributes = null),
          (e.__styles = null),
          (e.__e = void 0),
          (Text.prototype.__t = void 0);
      }
    }
    function Jt(e = "") {
      return document.createTextNode(e);
    }
    function Zt(e) {
      return ir.call(e);
    }
    function Gt(e) {
      return lr.call(e);
    }
    function F(e, t) {
      return Zt(e);
    }
    function pe(e, t) {
      {
        var n = Zt(e);
        return n instanceof Comment && n.data === "" ? Gt(n) : n;
      }
    }
    function B(e, t = 1, n = !1) {
      let r = e;
      for (; t--; ) r = Gt(r);
      return r;
    }
    function Da(e) {
      e.textContent = "";
    }
    function Ct(e) {
      var t = ve | Ne;
      K === null ? (t |= et) : (K.f |= Jn);
      var n = J !== null && J.f & ve ? J : null;
      const r = {
        children: null,
        ctx: Y,
        deps: null,
        equals: Gn,
        f: t,
        fn: e,
        reactions: null,
        rv: 0,
        v: null,
        wv: 0,
        parent: n ?? K,
      };
      return n !== null && (n.children ?? (n.children = [])).push(r), r;
    }
    function Lt(e) {
      const t = Ct(e);
      return (t.equals = Mn), t;
    }
    function ur(e) {
      var t = e.children;
      if (t !== null) {
        e.children = null;
        for (var n = 0; n < t.length; n += 1) {
          var r = t[n];
          r.f & ve ? Sn(r) : Ie(r);
        }
      }
    }
    function Ra(e) {
      for (var t = e.parent; t !== null; ) {
        if (!(t.f & ve)) return t;
        t = t.parent;
      }
      return null;
    }
    function sr(e) {
      var t,
        n = K;
      Ce(Ra(e));
      try {
        ur(e), (t = Or(e));
      } finally {
        Ce(n);
      }
      return t;
    }
    function cr(e) {
      var t = sr(e),
        n = (at || e.f & et) && e.deps !== null ? tt : ce;
      _e(e, n), e.equals(t) || ((e.v = t), (e.wv = Mr()));
    }
    function Sn(e) {
      ur(e),
        Nt(e, 0),
        _e(e, ct),
        (e.v = e.children = e.deps = e.ctx = e.reactions = null);
    }
    function fr(e) {
      K === null && J === null && pa(),
        J !== null && J.f & et && ha(),
        Tn && va();
    }
    function Ba(e, t) {
      var n = t.last;
      n === null
        ? (t.last = t.first = e)
        : ((n.next = e), (e.prev = n), (t.last = e));
    }
    function vt(e, t, n, r = !0) {
      var a = (e & st) !== 0,
        o = K,
        l = {
          ctx: Y,
          deps: null,
          deriveds: null,
          nodes_start: null,
          nodes_end: null,
          f: e | Ne,
          first: null,
          fn: t,
          last: null,
          next: null,
          parent: a ? null : o,
          prev: null,
          teardown: null,
          transitions: null,
          wv: 0,
        };
      if (n) {
        var c = gt;
        try {
          xr(!0), un(l), (l.f |= ca);
        } catch (v) {
          throw (Ie(l), v);
        } finally {
          xr(c);
        }
      } else t !== null && sn(l);
      var f =
        n &&
        l.deps === null &&
        l.first === null &&
        l.nodes_start === null &&
        l.teardown === null &&
        (l.f & (Jn | Ht)) === 0;
      if (!f && !a && r && (o !== null && Ba(l, o), J !== null && J.f & ve)) {
        var s = J;
        (s.children ?? (s.children = [])).push(l);
      }
      return l;
    }
    function dr(e) {
      const t = vt(Et, null, !1);
      return _e(t, ce), (t.teardown = e), t;
    }
    function Cn(e) {
      fr();
      var t = K !== null && (K.f & Ee) !== 0 && Y !== null && !Y.m;
      if (t) {
        var n = Y;
        (n.e ?? (n.e = [])).push({ fn: e, effect: K, reaction: J });
      } else {
        var r = ht(e);
        return r;
      }
    }
    function Fa(e) {
      return fr(), pt(e);
    }
    function za(e) {
      const t = vt(st, e, !0);
      return (n = {}) =>
        new Promise((r) => {
          n.outro
            ? Pt(t, () => {
                Ie(t), r(void 0);
              })
            : (Ie(t), r(void 0));
        });
    }
    function ht(e) {
      return vt(Vn, e, !1);
    }
    function Qt(e, t) {
      var n = Y,
        r = { effect: null, ran: !1 };
      n.l.r1.push(r),
        (r.effect = pt(() => {
          e(), !r.ran && ((r.ran = !0), D(n.l.r2, !0), ie(t));
        }));
    }
    function Ln() {
      var e = Y;
      pt(() => {
        if (d(e.l.r2)) {
          for (var t of e.l.r1) {
            var n = t.effect;
            n.f & ce && _e(n, tt), yt(n) && un(n), (t.ran = !1);
          }
          e.l.r2.v = !1;
        }
      });
    }
    function pt(e) {
      return vt(Et, e, !0);
    }
    function de(e, t = [], n = Ct) {
      const r = t.map(n);
      return jt(() => e(...r.map(d)));
    }
    function jt(e, t = 0) {
      return vt(Et | kn | t, e, !0);
    }
    function nt(e, t = !0) {
      return vt(Et | Ee, e, !0, t);
    }
    function vr(e) {
      var t = e.teardown;
      if (t !== null) {
        const n = Tn,
          r = J;
        _r(!0), He(null);
        try {
          t.call(null);
        } finally {
          _r(n), He(r);
        }
      }
    }
    function hr(e) {
      var t = e.deriveds;
      if (t !== null) {
        e.deriveds = null;
        for (var n = 0; n < t.length; n += 1) Sn(t[n]);
      }
    }
    function pr(e, t = !1) {
      var n = e.first;
      for (e.first = e.last = null; n !== null; ) {
        var r = n.next;
        Ie(n, t), (n = r);
      }
    }
    function Wa(e) {
      for (var t = e.first; t !== null; ) {
        var n = t.next;
        t.f & Ee || Ie(t), (t = n);
      }
    }
    function Ie(e, t = !0) {
      var n = !1;
      if ((t || e.f & fa) && e.nodes_start !== null) {
        for (var r = e.nodes_start, a = e.nodes_end; r !== null; ) {
          var o = r === a ? null : Gt(r);
          r.remove(), (r = o);
        }
        n = !0;
      }
      pr(e, t && !n), hr(e), Nt(e, 0), _e(e, ct);
      var l = e.transitions;
      if (l !== null) for (const f of l) f.stop();
      vr(e);
      var c = e.parent;
      c !== null && c.first !== null && gr(e),
        (e.next =
          e.prev =
          e.teardown =
          e.ctx =
          e.deps =
          e.fn =
          e.nodes_start =
          e.nodes_end =
            null);
    }
    function gr(e) {
      var t = e.parent,
        n = e.prev,
        r = e.next;
      n !== null && (n.next = r),
        r !== null && (r.prev = n),
        t !== null &&
          (t.first === e && (t.first = r), t.last === e && (t.last = n));
    }
    function Pt(e, t) {
      var n = [];
      jn(e, n, !0),
        mr(n, () => {
          Ie(e), t && t();
        });
    }
    function mr(e, t) {
      var n = e.length;
      if (n > 0) {
        var r = () => --n || t();
        for (var a of e) a.out(r);
      } else t();
    }
    function jn(e, t, n) {
      if (!(e.f & Oe)) {
        if (((e.f ^= Oe), e.transitions !== null))
          for (const l of e.transitions) (l.is_global || n) && t.push(l);
        for (var r = e.first; r !== null; ) {
          var a = r.next,
            o = (r.f & Ot) !== 0 || (r.f & Ee) !== 0;
          jn(r, t, o ? n : !1), (r = a);
        }
      }
    }
    function en(e) {
      yr(e, !0);
    }
    function yr(e, t) {
      if (e.f & Oe) {
        (e.f ^= Oe), e.f & ce || (e.f ^= ce), yt(e) && (_e(e, Ne), sn(e));
        for (var n = e.first; n !== null; ) {
          var r = n.next,
            a = (n.f & Ot) !== 0 || (n.f & Ee) !== 0;
          yr(n, a ? t : !1), (n = r);
        }
        if (e.transitions !== null)
          for (const o of e.transitions) (o.is_global || t) && o.in();
      }
    }
    let tn = !1,
      Pn = [];
    function br() {
      tn = !1;
      const e = Pn.slice();
      (Pn = []), Yt(e);
    }
    function $n(e) {
      tn || ((tn = !0), queueMicrotask(br)), Pn.push(e);
    }
    function Ua() {
      tn && br();
    }
    function nn(e) {
      throw new Error("https://svelte.dev/e/lifecycle_outside_component");
    }
    const wr = 0,
      Xa = 1;
    let rn = !1,
      an = wr,
      $t = !1,
      Tt = null,
      gt = !1,
      Tn = !1;
    function xr(e) {
      gt = e;
    }
    function _r(e) {
      Tn = e;
    }
    let rt = [],
      mt = 0,
      J = null,
      De = !1;
    function He(e) {
      J = e;
    }
    let K = null;
    function Ce(e) {
      K = e;
    }
    let Le = null;
    function Ya(e) {
      Le = e;
    }
    let ge = null,
      be = 0,
      Re = null;
    function Ha(e) {
      Re = e;
    }
    let kr = 1,
      on = 0,
      at = !1,
      Ke = null,
      Y = null;
    function Mr() {
      return ++kr;
    }
    function At() {
      return !ft || (Y !== null && Y.l === null);
    }
    function yt(e) {
      var t,
        n = e.f;
      if (n & Ne) return !0;
      if (n & tt) {
        var r = e.deps,
          a = (n & et) !== 0;
        if (r !== null) {
          var o,
            l,
            c = (n & Kt) !== 0,
            f = a && K !== null && !at,
            s = r.length;
          if (c || f) {
            for (o = 0; o < s; o++)
              (l = r[o]),
                (c ||
                  !(
                    (t = l == null ? void 0 : l.reactions) != null &&
                    t.includes(e)
                  )) &&
                  (l.reactions ?? (l.reactions = [])).push(e);
            c && (e.f ^= Kt);
          }
          for (o = 0; o < s; o++)
            if (((l = r[o]), yt(l) && cr(l), l.wv > e.wv)) return !0;
        }
        (!a || (K !== null && !at)) && _e(e, ce);
      }
      return !1;
    }
    function Ka(e, t) {
      for (var n = t; n !== null; ) {
        if (n.f & Ht)
          try {
            n.fn(e);
            return;
          } catch {
            n.f ^= Ht;
          }
        n = n.parent;
      }
      throw ((rn = !1), e);
    }
    function Va(e) {
      return (e.f & ct) === 0 && (e.parent === null || (e.parent.f & Ht) === 0);
    }
    function ln(e, t, n, r) {
      if (rn) {
        if ((n === null && (rn = !1), Va(t))) throw e;
        return;
      }
      n !== null && (rn = !0);
      {
        Ka(e, t);
        return;
      }
    }
    function Er(e, t, n = 0) {
      var r = e.reactions;
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var o = r[a];
          o.f & ve
            ? Er(o, t, n + 1)
            : t === o && (n === 0 ? _e(o, Ne) : o.f & ce && _e(o, tt), sn(o));
        }
    }
    function Or(e) {
      var t,
        n = ge,
        r = be,
        a = Re,
        o = J,
        l = at,
        c = Le,
        f = Y,
        s = De,
        v = e.f;
      (ge = null),
        (be = 0),
        (Re = null),
        (J = v & (Ee | st) ? null : e),
        (at = !gt && (v & et) !== 0),
        (Le = null),
        (Y = e.ctx),
        (De = !1),
        on++;
      try {
        var g = (0, e.fn)(),
          p = e.deps;
        if (ge !== null) {
          var h;
          if ((Nt(e, be), p !== null && be > 0))
            for (p.length = be + ge.length, h = 0; h < ge.length; h++)
              p[be + h] = ge[h];
          else e.deps = p = ge;
          if (!at)
            for (h = be; h < p.length; h++)
              ((t = p[h]).reactions ?? (t.reactions = [])).push(e);
        } else p !== null && be < p.length && (Nt(e, be), (p.length = be));
        if (At() && Re !== null && !(e.f & (ve | tt | Ne)))
          for (h = 0; h < Re.length; h++) Er(Re[h], e);
        return o !== null && on++, g;
      } finally {
        (ge = n),
          (be = r),
          (Re = a),
          (J = o),
          (at = l),
          (Le = c),
          (Y = f),
          (De = s);
      }
    }
    function qa(e, t) {
      let n = t.reactions;
      if (n !== null) {
        var r = le.call(n, e);
        if (r !== -1) {
          var a = n.length - 1;
          a === 0 ? (n = t.reactions = null) : ((n[r] = n[a]), n.pop());
        }
      }
      n === null &&
        t.f & ve &&
        (ge === null || !ge.includes(t)) &&
        (_e(t, tt), t.f & (et | Kt) || (t.f ^= Kt), Nt(t, 0));
    }
    function Nt(e, t) {
      var n = e.deps;
      if (n !== null) for (var r = t; r < n.length; r++) qa(e, n[r]);
    }
    function un(e) {
      var t = e.f;
      if (!(t & ct)) {
        _e(e, ce);
        var n = K,
          r = Y;
        K = e;
        try {
          t & kn ? Wa(e) : pr(e), hr(e), vr(e);
          var a = Or(e);
          (e.teardown = typeof a == "function" ? a : null), (e.wv = kr);
          var o = e.deps,
            l;
          xn && ka && e.f & Ne;
        } catch (c) {
          ln(c, e, n, r || e.ctx);
        } finally {
          K = n;
        }
      }
    }
    function Sr() {
      if (mt > 1e3) {
        mt = 0;
        try {
          ga();
        } catch (e) {
          if (Tt !== null) ln(e, Tt, null);
          else throw e;
        }
      }
      mt++;
    }
    function Cr(e) {
      var t = e.length;
      if (t !== 0) {
        Sr();
        var n = gt;
        gt = !0;
        try {
          for (var r = 0; r < t; r++) {
            var a = e[r];
            a.f & ce || (a.f ^= ce);
            var o = [];
            Lr(a, o), Ja(o);
          }
        } finally {
          gt = n;
        }
      }
    }
    function Ja(e) {
      var t = e.length;
      if (t !== 0)
        for (var n = 0; n < t; n++) {
          var r = e[n];
          if (!(r.f & (ct | Oe)))
            try {
              yt(r) &&
                (un(r),
                r.deps === null &&
                  r.first === null &&
                  r.nodes_start === null &&
                  (r.teardown === null ? gr(r) : (r.fn = null)));
            } catch (a) {
              ln(a, r, null, r.ctx);
            }
        }
    }
    function Za() {
      if ((($t = !1), mt > 1001)) return;
      const e = rt;
      (rt = []), Cr(e), $t || ((mt = 0), (Tt = null));
    }
    function sn(e) {
      an === wr && ($t || (($t = !0), queueMicrotask(Za))), (Tt = e);
      for (var t = e; t.parent !== null; ) {
        t = t.parent;
        var n = t.f;
        if (n & (st | Ee)) {
          if (!(n & ce)) return;
          t.f ^= ce;
        }
      }
      rt.push(t);
    }
    function Lr(e, t) {
      var n = e.first,
        r = [];
      e: for (; n !== null; ) {
        var a = n.f,
          o = (a & Ee) !== 0,
          l = o && (a & ce) !== 0,
          c = n.next;
        if (!l && !(a & Oe))
          if (a & Et) {
            if (o) n.f ^= ce;
            else
              try {
                yt(n) && un(n);
              } catch (g) {
                ln(g, n, null, n.ctx);
              }
            var f = n.first;
            if (f !== null) {
              n = f;
              continue;
            }
          } else a & Vn && r.push(n);
        if (c === null) {
          let g = n.parent;
          for (; g !== null; ) {
            if (e === g) break e;
            var s = g.next;
            if (s !== null) {
              n = s;
              continue e;
            }
            g = g.parent;
          }
        }
        n = c;
      }
      for (var v = 0; v < r.length; v++) (f = r[v]), t.push(f), Lr(f, t);
    }
    function jr(e) {
      var t = an,
        n = rt;
      try {
        Sr();
        const a = [];
        (an = Xa), (rt = a), ($t = !1), Cr(n);
        var r = e == null ? void 0 : e();
        return (
          Ua(),
          (rt.length > 0 || a.length > 0) && jr(),
          (mt = 0),
          (Tt = null),
          r
        );
      } finally {
        (an = t), (rt = n);
      }
    }
    async function Ga() {
      await Promise.resolve(), jr();
    }
    function d(e) {
      var t,
        n = e.f,
        r = (n & ve) !== 0;
      if (r && n & ct) {
        var a = sr(e);
        return Sn(e), a;
      }
      if ((Ke !== null && Ke.add(e), J !== null && !De)) {
        Le !== null && Le.includes(e) && xa();
        var o = J.deps;
        e.rv < on &&
          ((e.rv = on),
          ge === null && o !== null && o[be] === e
            ? be++
            : ge === null
            ? (ge = [e])
            : ge.push(e));
      } else if (r && e.deps === null)
        for (var l = e, c = l.parent, f = l; c !== null; )
          if (c.f & ve) {
            var s = c;
            (f = s), (c = s.parent);
          } else {
            var v = c;
            ((t = v.deriveds) != null && t.includes(f)) ||
              (v.deriveds ?? (v.deriveds = [])).push(f);
            break;
          }
      return r && ((l = e), yt(l) && cr(l)), e.v;
    }
    function Qa(e) {
      var t = Ke;
      Ke = new Set();
      var n = Ke,
        r;
      try {
        if ((ie(e), t !== null)) for (r of Ke) t.add(r);
      } finally {
        Ke = t;
      }
      return n;
    }
    function eo(e) {
      var t = Qa(() => ie(e));
      for (var n of t)
        if (n.f & qn) for (const r of n.deps || []) r.f & ve || St(r, r.v);
        else St(n, n.v);
    }
    function ie(e) {
      var t = De;
      try {
        return (De = !0), e();
      } finally {
        De = t;
      }
    }
    const to = -7169;
    function _e(e, t) {
      e.f = (e.f & to) | t;
    }
    function An(e, t = 1) {
      var n = d(e),
        r = t === 1 ? n++ : n--;
      return D(e, n), r;
    }
    function Be(e, t = !1, n) {
      (Y = { p: Y, c: null, e: null, m: !1, s: e, x: null, l: null }),
        ft && !t && (Y.l = { s: null, u: null, r1: [], r2: xe(!1) });
    }
    function Fe(e) {
      const t = Y;
      if (t !== null) {
        const l = t.e;
        if (l !== null) {
          var n = K,
            r = J;
          t.e = null;
          try {
            for (var a = 0; a < l.length; a++) {
              var o = l[a];
              Ce(o.effect), He(o.reaction), ht(o.fn);
            }
          } finally {
            Ce(n), He(r);
          }
        }
        (Y = t.p), (t.m = !0);
      }
      return {};
    }
    function Pr(e) {
      if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
        if (Se in e) Nn(e);
        else if (!Array.isArray(e))
          for (let t in e) {
            const n = e[t];
            typeof n == "object" && n && Se in n && Nn(n);
          }
      }
    }
    function Nn(e, t = new Set()) {
      if (
        typeof e == "object" &&
        e !== null &&
        !(e instanceof EventTarget) &&
        !t.has(e)
      ) {
        t.add(e), e instanceof Date && e.getTime();
        for (let r in e)
          try {
            Nn(e[r], t);
          } catch {}
        const n = _n(e);
        if (
          n !== Object.prototype &&
          n !== Array.prototype &&
          n !== Map.prototype &&
          n !== Set.prototype &&
          n !== Date.prototype
        ) {
          const r = Kn(n);
          for (let a in r) {
            const o = r[a].get;
            if (o)
              try {
                o.call(e);
              } catch {}
          }
        }
      }
    }
    const no = ["touchstart", "touchmove"];
    function ro(e) {
      return no.includes(e);
    }
    let $r = !1;
    function ao() {
      $r ||
        (($r = !0),
        document.addEventListener(
          "reset",
          (e) => {
            Promise.resolve().then(() => {
              var t;
              if (!e.defaultPrevented)
                for (const n of e.target.elements)
                  (t = n.__on_r) == null || t.call(n);
            });
          },
          { capture: !0 }
        ));
    }
    function Tr(e) {
      var t = J,
        n = K;
      He(null), Ce(null);
      try {
        return e();
      } finally {
        He(t), Ce(n);
      }
    }
    function In(e, t, n, r = n) {
      e.addEventListener(t, () => Tr(n));
      const a = e.__on_r;
      a
        ? (e.__on_r = () => {
            a(), r(!0);
          })
        : (e.__on_r = () => r(!0)),
        ao();
    }
    const Ar = new Set(),
      Dn = new Set();
    function oo(e, t, n, r = {}) {
      function a(o) {
        if ((r.capture || It.call(t, o), !o.cancelBubble))
          return Tr(() => (n == null ? void 0 : n.call(this, o)));
      }
      return (
        e.startsWith("pointer") || e.startsWith("touch") || e === "wheel"
          ? $n(() => {
              t.addEventListener(e, a, r);
            })
          : t.addEventListener(e, a, r),
        a
      );
    }
    function ue(e, t, n, r, a) {
      var o = { capture: r, passive: a },
        l = oo(e, t, n, o);
      (t === document.body || t === window || t === document) &&
        dr(() => {
          t.removeEventListener(e, l, o);
        });
    }
    function Nr(e) {
      for (var t = 0; t < e.length; t++) Ar.add(e[t]);
      for (var n of Dn) n(e);
    }
    function It(e) {
      var t,
        n = this,
        r = n.ownerDocument,
        a = e.type,
        o = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [],
        l = o[0] || e.target,
        c = 0,
        f = e.__root;
      if (f) {
        var s = o.indexOf(f);
        if (s !== -1 && (n === document || n === window)) {
          e.__root = n;
          return;
        }
        var v = o.indexOf(n);
        if (v === -1) return;
        s <= v && (c = s);
      }
      if (((l = o[c] || e.target), l !== n)) {
        ut(e, "currentTarget", {
          configurable: !0,
          get() {
            return l || r;
          },
        });
        var g = J,
          p = K;
        He(null), Ce(null);
        try {
          for (var h, E = []; l !== null; ) {
            var L = l.assignedSlot || l.parentNode || l.host || null;
            try {
              var S = l["__" + a];
              if (S !== void 0 && !l.disabled)
                if (Xe(S)) {
                  var [j, ...W] = S;
                  j.apply(l, [e, ...W]);
                } else S.call(l, e);
            } catch (T) {
              h ? E.push(T) : (h = T);
            }
            if (e.cancelBubble || L === n || L === null) break;
            l = L;
          }
          if (h) {
            for (let T of E)
              queueMicrotask(() => {
                throw T;
              });
            throw h;
          }
        } finally {
          (e.__root = n), delete e.currentTarget, He(g), Ce(p);
        }
      }
    }
    function io(e) {
      var t = document.createElement("template");
      return (t.innerHTML = e), t.content;
    }
    function cn(e, t) {
      var n = K;
      n.nodes_start === null && ((n.nodes_start = e), (n.nodes_end = t));
    }
    function ne(e, t) {
      var n = (t & $a) !== 0,
        r = (t & Ta) !== 0,
        a,
        o = !e.startsWith("<!>");
      return () => {
        a === void 0 && ((a = io(o ? e : "<!>" + e)), n || (a = Zt(a)));
        var l = r ? document.importNode(a, !0) : a.cloneNode(!0);
        if (n) {
          var c = Zt(l),
            f = l.lastChild;
          cn(c, f);
        } else cn(l, l);
        return l;
      };
    }
    function lo(e = "") {
      {
        var t = Jt(e + "");
        return cn(t, t), t;
      }
    }
    function fn() {
      var e = document.createDocumentFragment(),
        t = document.createComment(""),
        n = Jt();
      return e.append(t, n), cn(t, n), e;
    }
    function V(e, t) {
      e !== null && e.before(t);
    }
    function oe(e, t) {
      var n = t == null ? "" : typeof t == "object" ? t + "" : t;
      n !== (e.__t ?? (e.__t = e.nodeValue)) &&
        ((e.__t = n), (e.nodeValue = n == null ? "" : n + ""));
    }
    function uo(e, t) {
      return so(e, t);
    }
    const bt = new Map();
    function so(
      e,
      {
        target: t,
        anchor: n,
        props: r = {},
        events: a,
        context: o,
        intro: l = !0,
      }
    ) {
      Ia();
      var c = new Set(),
        f = (g) => {
          for (var p = 0; p < g.length; p++) {
            var h = g[p];
            if (!c.has(h)) {
              c.add(h);
              var E = ro(h);
              t.addEventListener(h, It, { passive: E });
              var L = bt.get(h);
              L === void 0
                ? (document.addEventListener(h, It, { passive: E }),
                  bt.set(h, 1))
                : bt.set(h, L + 1);
            }
          }
        };
      f(fe(Ar)), Dn.add(f);
      var s = void 0,
        v = za(() => {
          var g = n ?? t.appendChild(Jt());
          return (
            nt(() => {
              if (o) {
                Be({});
                var p = Y;
                p.c = o;
              }
              a && (r.$$events = a), (s = e(g, r) || {}), o && Fe();
            }),
            () => {
              var p;
              for (var h of c) {
                t.removeEventListener(h, It);
                var E = bt.get(h);
                --E === 0
                  ? (document.removeEventListener(h, It), bt.delete(h))
                  : bt.set(h, E);
              }
              Dn.delete(f),
                g !== n && ((p = g.parentNode) == null || p.removeChild(g));
            }
          );
        });
      return co.set(s, v), s;
    }
    let co = new WeakMap();
    function je(e, t, n = !1) {
      var r = e,
        a = null,
        o = null,
        l = he,
        c = n ? Ot : 0,
        f = !1;
      const s = (g, p = !0) => {
          (f = !0), v(p, g);
        },
        v = (g, p) => {
          l !== (l = g) &&
            (l
              ? (a ? en(a) : p && (a = nt(() => p(r))),
                o &&
                  Pt(o, () => {
                    o = null;
                  }))
              : (o ? en(o) : p && (o = nt(() => p(r))),
                a &&
                  Pt(a, () => {
                    a = null;
                  })));
        };
      jt(() => {
        (f = !1), t(s), f || v(null, null);
      }, c);
    }
    function dn(e, t) {
      return t;
    }
    function fo(e, t, n, r) {
      for (var a = [], o = t.length, l = 0; l < o; l++) jn(t[l].e, a, !0);
      var c = o > 0 && a.length === 0 && n !== null;
      if (c) {
        var f = n.parentNode;
        Da(f), f.append(n), r.clear(), Ve(e, t[0].prev, t[o - 1].next);
      }
      mr(a, () => {
        for (var s = 0; s < o; s++) {
          var v = t[s];
          c || (r.delete(v.k), Ve(e, v.prev, v.next)), Ie(v.e, !c);
        }
      });
    }
    function vn(e, t, n, r, a, o = null) {
      var l = e,
        c = { flags: t, items: new Map(), first: null },
        f = (t & er) !== 0;
      if (f) {
        var s = e;
        l = s.appendChild(Jt());
      }
      var v = null,
        g = !1,
        p = Lt(() => {
          var h = n();
          return Xe(h) ? h : h == null ? [] : fe(h);
        });
      jt(() => {
        var h = d(p),
          E = h.length;
        if (!(g && E === 0)) {
          g = E === 0;
          {
            var L = J;
            vo(h, c, l, a, t, (L.f & Oe) !== 0, r, n);
          }
          o !== null &&
            (E === 0
              ? v
                ? en(v)
                : (v = nt(() => o(l)))
              : v !== null &&
                Pt(v, () => {
                  v = null;
                })),
            d(p);
        }
      });
    }
    function vo(e, t, n, r, a, o, l, c) {
      var f,
        s,
        v,
        g,
        p = (a & Ea) !== 0,
        h = (a & (En | On)) !== 0,
        E = e.length,
        L = t.items,
        S = t.first,
        j = S,
        W,
        T = null,
        X,
        _ = [],
        x = [],
        M,
        P,
        k,
        A;
      if (p)
        for (A = 0; A < E; A += 1)
          (M = e[A]),
            (P = l(M, A)),
            (k = L.get(P)),
            k !== void 0 &&
              ((f = k.a) == null || f.measure(), (X ?? (X = new Set())).add(k));
      for (A = 0; A < E; A += 1) {
        if (((M = e[A]), (P = l(M, A)), (k = L.get(P)), k === void 0)) {
          var ke = j ? j.e.nodes_start : n;
          (T = po(ke, t, T, T === null ? t.first : T.next, M, P, A, r, a, c)),
            L.set(P, T),
            (_ = []),
            (x = []),
            (j = T.next);
          continue;
        }
        if (
          (h && ho(k, M, A, a),
          k.e.f & Oe &&
            (en(k.e),
            p &&
              ((s = k.a) == null || s.unfix(),
              (X ?? (X = new Set())).delete(k))),
          k !== j)
        ) {
          if (W !== void 0 && W.has(k)) {
            if (_.length < x.length) {
              var we = x[0],
                se;
              T = we.prev;
              var Me = _[0],
                me = _[_.length - 1];
              for (se = 0; se < _.length; se += 1) Ir(_[se], we, n);
              for (se = 0; se < x.length; se += 1) W.delete(x[se]);
              Ve(t, Me.prev, me.next),
                Ve(t, T, Me),
                Ve(t, me, we),
                (j = we),
                (T = me),
                (A -= 1),
                (_ = []),
                (x = []);
            } else
              W.delete(k),
                Ir(k, j, n),
                Ve(t, k.prev, k.next),
                Ve(t, k, T === null ? t.first : T.next),
                Ve(t, T, k),
                (T = k);
            continue;
          }
          for (_ = [], x = []; j !== null && j.k !== P; )
            (o || !(j.e.f & Oe)) && (W ?? (W = new Set())).add(j),
              x.push(j),
              (j = j.next);
          if (j === null) continue;
          k = j;
        }
        _.push(k), (T = k), (j = k.next);
      }
      if (j !== null || W !== void 0) {
        for (var ye = W === void 0 ? [] : fe(W); j !== null; )
          (o || !(j.e.f & Oe)) && ye.push(j), (j = j.next);
        var Pe = ye.length;
        if (Pe > 0) {
          var We = a & er && E === 0 ? n : null;
          if (p) {
            for (A = 0; A < Pe; A += 1) (v = ye[A].a) == null || v.measure();
            for (A = 0; A < Pe; A += 1) (g = ye[A].a) == null || g.fix();
          }
          fo(t, ye, We, L);
        }
      }
      p &&
        $n(() => {
          var $e;
          if (X !== void 0) for (k of X) ($e = k.a) == null || $e.apply();
        }),
        (K.first = t.first && t.first.e),
        (K.last = T && T.e);
    }
    function ho(e, t, n, r) {
      r & En && St(e.v, t), r & On ? St(e.i, n) : (e.i = n);
    }
    function po(e, t, n, r, a, o, l, c, f, s) {
      var v = (f & En) !== 0,
        g = (f & Oa) === 0,
        p = v ? (g ? Vt(a) : xe(a)) : a,
        h = f & On ? xe(l) : l,
        E = { i: h, v: p, k: o, a: null, e: null, prev: n, next: r };
      try {
        return (
          (E.e = nt(() => c(e, p, h, s), nr)),
          (E.e.prev = n && n.e),
          (E.e.next = r && r.e),
          n === null ? (t.first = E) : ((n.next = E), (n.e.next = E.e)),
          r !== null && ((r.prev = E), (r.e.prev = E.e)),
          E
        );
      } finally {
      }
    }
    function Ir(e, t, n) {
      for (
        var r = e.next ? e.next.e.nodes_start : n,
          a = t ? t.e.nodes_start : n,
          o = e.e.nodes_start;
        o !== r;

      ) {
        var l = Gt(o);
        a.before(o), (o = l);
      }
    }
    function Ve(e, t, n) {
      t === null ? (e.first = n) : ((t.next = n), (t.e.next = n && n.e)),
        n !== null && ((n.prev = t), (n.e.prev = t && t.e));
    }
    function go(e, t, ...n) {
      var r = e,
        a = Ae,
        o;
      jt(() => {
        a !== (a = t()) &&
          (o && (Ie(o), (o = null)), (o = nt(() => a(r, ...n))));
      }, Ot);
    }
    function Dr(e, t, n) {
      var r = e,
        a,
        o;
      jt(() => {
        a !== (a = t()) &&
          (o && (Pt(o), (o = null)), a && (o = nt(() => n(r, a))));
      }, Ot);
    }
    function Rr(e, t, n) {
      ht(() => {
        var r = ie(() => t(e, n == null ? void 0 : n()) || {});
        if (r != null && r.destroy) return () => r.destroy();
      });
    }
    function mo(e, t) {
      var n = e.__attributes ?? (e.__attributes = {});
      n.value === (n.value = t ?? void 0) ||
        (e.value === t && (t !== 0 || e.nodeName !== "PROGRESS")) ||
        (e.value = t ?? "");
    }
    function Br(e, t) {
      var n = e.__attributes ?? (e.__attributes = {});
      n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
    }
    function qe(e, t, n, r) {
      var a = e.__attributes ?? (e.__attributes = {});
      a[t] !== (a[t] = n) &&
        (t === "style" && "__styles" in e && (e.__styles = {}),
        t === "loading" && (e[da] = n),
        n == null
          ? e.removeAttribute(t)
          : typeof n != "string" && yo(e).includes(t)
          ? (e[t] = n)
          : e.setAttribute(t, n));
    }
    var Fr = new Map();
    function yo(e) {
      var t = Fr.get(e.nodeName);
      if (t) return t;
      Fr.set(e.nodeName, (t = []));
      for (var n, r = e, a = Element.prototype; a !== r; ) {
        n = Kn(r);
        for (var o in n) n[o].set && t.push(o);
        r = _n(r);
      }
      return t;
    }
    function zr(e, t, n) {
      var r = e.__className,
        a = bo(t);
      (r !== a || nr) &&
        (t == null ? e.removeAttribute("class") : (e.className = a),
        (e.__className = a));
    }
    function bo(e, t) {
      return (e ?? "") + "";
    }
    function Dt(e, t, n) {
      if (n) {
        if (e.classList.contains(t)) return;
        e.classList.add(t);
      } else {
        if (!e.classList.contains(t)) return;
        e.classList.remove(t);
      }
    }
    function wo(e, t, n = t) {
      var r = At();
      In(e, "input", (a) => {
        var o = a ? e.defaultValue : e.value;
        if (((o = Rn(e) ? Bn(o) : o), n(o), r && o !== (o = t()))) {
          var l = e.selectionStart,
            c = e.selectionEnd;
          (e.value = o ?? ""),
            c !== null &&
              ((e.selectionStart = l),
              (e.selectionEnd = Math.min(c, e.value.length)));
        }
      }),
        ie(t) == null && e.value && n(Rn(e) ? Bn(e.value) : e.value),
        pt(() => {
          var a = t();
          (Rn(e) && a === Bn(e.value)) ||
            (e.type === "date" && !a && !e.value) ||
            (a !== e.value && (e.value = a ?? ""));
        });
    }
    function xo(e, t, n = t) {
      In(e, "change", (r) => {
        var a = r ? e.defaultChecked : e.checked;
        n(a);
      }),
        ie(t) == null && n(e.checked),
        pt(() => {
          var r = t();
          e.checked = !!r;
        });
    }
    function Rn(e) {
      var t = e.type;
      return t === "number" || t === "range";
    }
    function Bn(e) {
      return e === "" ? null : +e;
    }
    function Wr(e, t, n) {
      if (e.multiple) return Mo(e, t);
      for (var r of e.options) {
        var a = Rt(r);
        if (Na(a, t)) {
          r.selected = !0;
          return;
        }
      }
      (!n || t !== void 0) && (e.selectedIndex = -1);
    }
    function _o(e, t) {
      ht(() => {
        var n = new MutationObserver(() => {
          var r = e.__value;
          Wr(e, r);
        });
        return (
          n.observe(e, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["value"],
          }),
          () => {
            n.disconnect();
          }
        );
      });
    }
    function ko(e, t, n = t) {
      var r = !0;
      In(e, "change", (a) => {
        var o = a ? "[selected]" : ":checked",
          l;
        if (e.multiple) l = [].map.call(e.querySelectorAll(o), Rt);
        else {
          var c =
            e.querySelector(o) ?? e.querySelector("option:not([disabled])");
          l = c && Rt(c);
        }
        n(l);
      }),
        ht(() => {
          var a = t();
          if ((Wr(e, a, r), r && a === void 0)) {
            var o = e.querySelector(":checked");
            o !== null && ((a = Rt(o)), n(a));
          }
          (e.__value = a), (r = !1);
        }),
        _o(e);
    }
    function Mo(e, t) {
      for (var n of e.options) n.selected = ~t.indexOf(Rt(n));
    }
    function Rt(e) {
      return "__value" in e ? e.__value : e.value;
    }
    function Ur(e, t) {
      return e === t || (e == null ? void 0 : e[Se]) === t;
    }
    function Je(e = {}, t, n, r) {
      return (
        ht(() => {
          var a, o;
          return (
            pt(() => {
              (a = o),
                (o = []),
                ie(() => {
                  e !== n(...o) &&
                    (t(e, ...o), a && Ur(n(...a), e) && t(null, ...a));
                });
            }),
            () => {
              $n(() => {
                o && Ur(n(...o), e) && t(null, ...o);
              });
            }
          );
        }),
        e
      );
    }
    function Bt(e) {
      return function (...t) {
        var n = t[0];
        return n.preventDefault(), e == null ? void 0 : e.apply(this, t);
      };
    }
    function ot(e = !1) {
      const t = Y,
        n = t.l.u;
      if (!n) return;
      let r = () => Pr(t.s);
      if (e) {
        let a = 0,
          o = {};
        const l = Ct(() => {
          let c = !1;
          const f = t.s;
          for (const s in f) f[s] !== o[s] && ((o[s] = f[s]), (c = !0));
          return c && a++, a;
        });
        r = () => d(l);
      }
      n.b.length &&
        Fa(() => {
          Xr(t, r), Yt(n.b);
        }),
        Cn(() => {
          const a = ie(() => n.m.map(sa));
          return () => {
            for (const o of a) typeof o == "function" && o();
          };
        }),
        n.a.length &&
          Cn(() => {
            Xr(t, r), Yt(n.a);
          });
    }
    function Xr(e, t) {
      if (e.l.s) for (const n of e.l.s) d(n);
      t();
    }
    function Yr(e, t) {
      var n,
        r = (n = e.$$events) == null ? void 0 : n[t.type],
        a = Xe(r) ? r.slice() : r == null ? [] : [r];
      for (var o of a) o.call(this, t);
    }
    function Fn(e, t, n) {
      if (e == null) return t(void 0), n && n(void 0), Ae;
      const r = ie(() => e.subscribe(t, n));
      return r.unsubscribe ? () => r.unsubscribe() : r;
    }
    const wt = [];
    function Hr(e, t) {
      return { subscribe: it(e, t).subscribe };
    }
    function it(e, t = Ae) {
      let n = null;
      const r = new Set();
      function a(c) {
        if (Qn(e, c) && ((e = c), n)) {
          const f = !wt.length;
          for (const s of r) s[1](), wt.push(s, e);
          if (f) {
            for (let s = 0; s < wt.length; s += 2) wt[s][0](wt[s + 1]);
            wt.length = 0;
          }
        }
      }
      function o(c) {
        a(c(e));
      }
      function l(c, f = Ae) {
        const s = [c, f];
        return (
          r.add(s),
          r.size === 1 && (n = t(a, o) || Ae),
          c(e),
          () => {
            r.delete(s), r.size === 0 && n && (n(), (n = null));
          }
        );
      }
      return { set: a, update: o, subscribe: l };
    }
    function Kr(e, t, n) {
      const r = !Array.isArray(e),
        a = r ? [e] : e;
      if (!a.every(Boolean))
        throw new Error("derived() expects stores as input, got a falsy value");
      const o = t.length < 2;
      return Hr(n, (l, c) => {
        let f = !1;
        const s = [];
        let v = 0,
          g = Ae;
        const p = () => {
            if (v) return;
            g();
            const E = t(r ? s[0] : s, l, c);
            o ? l(E) : (g = typeof E == "function" ? E : Ae);
          },
          h = a.map((E, L) =>
            Fn(
              E,
              (S) => {
                (s[L] = S), (v &= ~(1 << L)), f && p();
              },
              () => {
                v |= 1 << L;
              }
            )
          );
        return (
          (f = !0),
          p(),
          function () {
            Yt(h), g(), (f = !1);
          }
        );
      });
    }
    function Eo(e) {
      let t;
      return Fn(e, (n) => (t = n))(), t;
    }
    let hn = !1,
      zn = Symbol();
    function Q(e, t, n) {
      const r =
        n[t] ?? (n[t] = { store: null, source: Vt(void 0), unsubscribe: Ae });
      if (r.store !== e && !(zn in n))
        if ((r.unsubscribe(), (r.store = e ?? null), e == null))
          (r.source.v = void 0), (r.unsubscribe = Ae);
        else {
          var a = !0;
          (r.unsubscribe = Fn(e, (o) => {
            a ? (r.source.v = o) : D(r.source, o);
          })),
            (a = !1);
        }
      return e && zn in n ? Eo(e) : d(r.source);
    }
    function Vr(e, t) {
      return e.set(t), t;
    }
    function xt() {
      const e = {};
      function t() {
        dr(() => {
          for (var n in e) e[n].unsubscribe();
          ut(e, zn, { enumerable: !1, value: !0 });
        });
      }
      return [e, t];
    }
    function qr(e, t, n) {
      return e.set(n), t;
    }
    function Oo(e) {
      var t = hn;
      try {
        return (hn = !1), [e(), hn];
      } finally {
        hn = t;
      }
    }
    const So = {
      get(e, t) {
        let n = e.props.length;
        for (; n--; ) {
          let r = e.props[n];
          if (
            (Mt(r) && (r = r()), typeof r == "object" && r !== null && t in r)
          )
            return r[t];
        }
      },
      set(e, t, n) {
        let r = e.props.length;
        for (; r--; ) {
          let a = e.props[r];
          Mt(a) && (a = a());
          const o = Ye(a, t);
          if (o && o.set) return o.set(n), !0;
        }
        return !1;
      },
      getOwnPropertyDescriptor(e, t) {
        let n = e.props.length;
        for (; n--; ) {
          let r = e.props[n];
          if (
            (Mt(r) && (r = r()), typeof r == "object" && r !== null && t in r)
          ) {
            const a = Ye(r, t);
            return a && !a.configurable && (a.configurable = !0), a;
          }
        }
      },
      has(e, t) {
        if (t === Se || t === Zn) return !1;
        for (let n of e.props)
          if ((Mt(n) && (n = n()), n != null && t in n)) return !0;
        return !1;
      },
      ownKeys(e) {
        const t = [];
        for (let n of e.props) {
          Mt(n) && (n = n());
          for (const r in n) t.includes(r) || t.push(r);
        }
        return t;
      },
    };
    function Jr(...e) {
      return new Proxy({ props: e }, So);
    }
    function Zr(e) {
      for (var t = K, n = K; t !== null && !(t.f & (Ee | st)); ) t = t.parent;
      try {
        return Ce(t), e();
      } finally {
        Ce(n);
      }
    }
    function Ze(e, t, n, r) {
      var a,
        o = (n & Sa) !== 0,
        l = !ft || (n & Ca) !== 0,
        c = (n & ja) !== 0,
        f = (n & Pa) !== 0,
        s = !1,
        v;
      c ? ([v, s] = Oo(() => e[t])) : (v = e[t]);
      var g = Se in e || Zn in e,
        p =
          (c &&
            (((a = Ye(e, t)) == null ? void 0 : a.set) ??
              (g && t in e && ((P) => (e[t] = P))))) ||
          void 0,
        h = r,
        E = !0,
        L = !1,
        S = () => ((L = !0), E && ((E = !1), f ? (h = ie(r)) : (h = r)), h);
      v === void 0 && r !== void 0 && (p && l && ya(), (v = S()), p && p(v));
      var j;
      if (l)
        j = () => {
          var P = e[t];
          return P === void 0 ? S() : ((E = !0), (L = !1), P);
        };
      else {
        var W = Zr(() => (o ? Ct : Lt)(() => e[t]));
        (W.f |= qn),
          (j = () => {
            var P = d(W);
            return P !== void 0 && (h = void 0), P === void 0 ? h : P;
          });
      }
      if (!(n & La)) return j;
      if (p) {
        var T = e.$$legacy;
        return function (P, k) {
          return arguments.length > 0
            ? ((!l || !k || T || s) && p(k ? j() : P), P)
            : j();
        };
      }
      var X = !1,
        _ = !1,
        x = Vt(v),
        M = Zr(() =>
          Ct(() => {
            var P = j(),
              k = d(x);
            return X ? ((X = !1), (_ = !0), k) : ((_ = !1), (x.v = P));
          })
        );
      return (
        o || (M.equals = Mn),
        function (P, k) {
          if ((Ke !== null && ((X = _), j(), d(x)), arguments.length > 0)) {
            const A = k ? d(M) : l && c ? dt(P) : P;
            return (
              M.equals(A) ||
                ((X = !0),
                D(x, A),
                L && h !== void 0 && (h = A),
                ie(() => d(M))),
              P
            );
          }
          return d(M);
        }
      );
    }
    function Co(e) {
      Y === null && nn(),
        ft && Y.l !== null
          ? Gr(Y).m.push(e)
          : Cn(() => {
              const t = ie(e);
              if (typeof t == "function") return t;
            });
    }
    function Lo(e) {
      Y === null && nn(), Co(() => () => ie(e));
    }
    function jo(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
      return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
    }
    function Po() {
      const e = Y;
      return (
        e === null && nn(),
        (t, n, r) => {
          var a;
          const o = (a = e.s.$$events) == null ? void 0 : a[t];
          if (o) {
            const l = Xe(o) ? o.slice() : [o],
              c = jo(t, n, r);
            for (const f of l) f.call(e.x, c);
            return !c.defaultPrevented;
          }
          return !0;
        }
      );
    }
    function $o(e) {
      Y === null && nn(), Y.l === null && ma(), Gr(Y).a.push(e);
    }
    function Gr(e) {
      var t = e.l;
      return t.u ?? (t.u = { a: [], b: [], m: [] });
    }
    const To = "5";
    typeof window < "u" &&
      (window.__svelte || (window.__svelte = { v: new Set() })).v.add(To),
      Ma();
    function Ao(e, t) {
      if (e instanceof RegExp) return { keys: !1, pattern: e };
      var n,
        r,
        a,
        o,
        l = [],
        c = "",
        f = e.split("/");
      for (f[0] || f.shift(); (a = f.shift()); )
        (n = a[0]),
          n === "*"
            ? (l.push("wild"), (c += "/(.*)"))
            : n === ":"
            ? ((r = a.indexOf("?", 1)),
              (o = a.indexOf(".", 1)),
              l.push(a.substring(1, ~r ? r : ~o ? o : a.length)),
              (c += ~r && !~o ? "(?:/([^/]+?))?" : "/([^/]+?)"),
              ~o && (c += (~r ? "?" : "") + "\\" + a.substring(o)))
            : (c += "/" + a);
      return { keys: l, pattern: new RegExp("^" + c + "/?$", "i") };
    }
    function Qr() {
      const e = window.location.href.indexOf("#/");
      let t = e > -1 ? window.location.href.substr(e + 1) : "/";
      const n = t.indexOf("?");
      let r = "";
      return (
        n > -1 && ((r = t.substr(n + 1)), (t = t.substr(0, n))),
        { location: t, querystring: r }
      );
    }
    const Wn = Hr(null, function (e) {
        e(Qr());
        const t = () => {
          e(Qr());
        };
        return (
          window.addEventListener("hashchange", t, !1),
          function () {
            window.removeEventListener("hashchange", t, !1);
          }
        );
      }),
      No = Kr(Wn, (e) => e.location);
    Kr(Wn, (e) => e.querystring);
    const ea = it(void 0);
    function pn(e, t) {
      if (((t = na(t)), !e || !e.tagName || e.tagName.toLowerCase() != "a"))
        throw Error('Action "link" can only be used with <a> tags');
      return (
        ta(e, t),
        {
          update(n) {
            (n = na(n)), ta(e, n);
          },
        }
      );
    }
    function Io(e) {
      e
        ? window.scrollTo(
            e.__svelte_spa_router_scrollX,
            e.__svelte_spa_router_scrollY
          )
        : window.scrollTo(0, 0);
    }
    function ta(e, t) {
      let n = t.href || e.getAttribute("href");
      if (n && n.charAt(0) == "/") n = "#" + n;
      else if (!n || n.length < 2 || n.slice(0, 2) != "#/")
        throw Error('Invalid value for "href" attribute: ' + n);
      e.setAttribute("href", n),
        e.addEventListener("click", (r) => {
          r.preventDefault(),
            t.disabled || Do(r.currentTarget.getAttribute("href"));
        });
    }
    function na(e) {
      return e && typeof e == "string" ? { href: e } : e || {};
    }
    function Do(e) {
      history.replaceState(
        {
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY,
        },
        void 0
      ),
        (window.location.hash = e);
    }
    function Ro(e, t) {
      Be(t, !1);
      let n = Ze(t, "routes", 24, () => ({})),
        r = Ze(t, "prefix", 8, ""),
        a = Ze(t, "restoreScrollState", 8, !1);
      class o {
        constructor(x, M) {
          if (
            !M ||
            (typeof M != "function" &&
              (typeof M != "object" || M._sveltesparouter !== !0))
          )
            throw Error("Invalid component object");
          if (
            !x ||
            (typeof x == "string" &&
              (x.length < 1 || (x.charAt(0) != "/" && x.charAt(0) != "*"))) ||
            (typeof x == "object" && !(x instanceof RegExp))
          )
            throw Error(
              'Invalid value for "path" argument - strings must start with / or *'
            );
          const { pattern: P, keys: k } = Ao(x);
          (this.path = x),
            typeof M == "object" && M._sveltesparouter === !0
              ? ((this.component = M.component),
                (this.conditions = M.conditions || []),
                (this.userData = M.userData),
                (this.props = M.props || {}))
              : ((this.component = () => Promise.resolve(M)),
                (this.conditions = []),
                (this.props = {})),
            (this._pattern = P),
            (this._keys = k);
        }
        match(x) {
          if (r()) {
            if (typeof r() == "string")
              if (x.startsWith(r())) x = x.substr(r().length) || "/";
              else return null;
            else if (r() instanceof RegExp) {
              const A = x.match(r());
              if (A && A[0]) x = x.substr(A[0].length) || "/";
              else return null;
            }
          }
          const M = this._pattern.exec(x);
          if (M === null) return null;
          if (this._keys === !1) return M;
          const P = {};
          let k = 0;
          for (; k < this._keys.length; ) {
            try {
              P[this._keys[k]] = decodeURIComponent(M[k + 1] || "") || null;
            } catch {
              P[this._keys[k]] = null;
            }
            k++;
          }
          return P;
        }
        async checkConditions(x) {
          for (let M = 0; M < this.conditions.length; M++)
            if (!(await this.conditions[M](x))) return !1;
          return !0;
        }
      }
      const l = [];
      n() instanceof Map
        ? n().forEach((_, x) => {
            l.push(new o(x, _));
          })
        : Object.keys(n()).forEach((_) => {
            l.push(new o(_, n()[_]));
          });
      let c = te(null),
        f = te(null),
        s = te({});
      const v = Po();
      async function g(_, x) {
        await Ga(), v(_, x);
      }
      let p = null,
        h = null;
      a() &&
        ((h = (_) => {
          _.state &&
          (_.state.__svelte_spa_router_scrollY ||
            _.state.__svelte_spa_router_scrollX)
            ? (p = _.state)
            : (p = null);
        }),
        window.addEventListener("popstate", h),
        $o(() => {
          Io(p);
        }));
      let E = null,
        L = null;
      const S = Wn.subscribe(async (_) => {
        E = _;
        let x = 0;
        for (; x < l.length; ) {
          const M = l[x].match(_.location);
          if (!M) {
            x++;
            continue;
          }
          const P = {
            route: l[x].path,
            location: _.location,
            querystring: _.querystring,
            userData: l[x].userData,
            params:
              M && typeof M == "object" && Object.keys(M).length ? M : null,
          };
          if (!(await l[x].checkConditions(P))) {
            D(c, null), (L = null), g("conditionsFailed", P);
            return;
          }
          g("routeLoading", Object.assign({}, P));
          const k = l[x].component;
          if (L != k) {
            k.loading
              ? (D(c, k.loading),
                (L = k),
                D(f, k.loadingParams),
                D(s, {}),
                g(
                  "routeLoaded",
                  Object.assign({}, P, {
                    component: d(c),
                    name: d(c).name,
                    params: d(f),
                  })
                ))
              : (D(c, null), (L = null));
            const A = await k();
            if (_ != E) return;
            D(c, (A && A.default) || A), (L = k);
          }
          M && typeof M == "object" && Object.keys(M).length
            ? D(f, M)
            : D(f, null),
            D(s, l[x].props),
            g(
              "routeLoaded",
              Object.assign({}, P, {
                component: d(c),
                name: d(c).name,
                params: d(f),
              })
            ).then(() => {
              ea.set(d(f));
            });
          return;
        }
        D(c, null), (L = null), ea.set(void 0);
      });
      Lo(() => {
        S(), h && window.removeEventListener("popstate", h);
      }),
        Qt(
          () => Pr(a()),
          () => {
            history.scrollRestoration = a() ? "manual" : "auto";
          }
        ),
        Ln(),
        ot();
      var j = fn(),
        W = pe(j);
      {
        var T = (_) => {
            var x = fn(),
              M = pe(x);
            Dr(
              M,
              () => d(c),
              (P, k) => {
                k(
                  P,
                  Jr(
                    {
                      get params() {
                        return d(f);
                      },
                    },
                    () => d(s),
                    {
                      $$events: {
                        routeEvent(A) {
                          Yr.call(this, t, A);
                        },
                      },
                    }
                  )
                );
              }
            ),
              V(_, x);
          },
          X = (_) => {
            var x = fn(),
              M = pe(x);
            Dr(
              M,
              () => d(c),
              (P, k) => {
                k(
                  P,
                  Jr(() => d(s), {
                    $$events: {
                      routeEvent(A) {
                        Yr.call(this, t, A);
                      },
                    },
                  })
                );
              }
            ),
              V(_, x);
          };
        je(W, (_) => {
          d(f) ? _(T) : _(X, !1);
        });
      }
      V(e, j), Fe();
    }
    function ze(e, t) {
      const n = sessionStorage.getItem(e),
        r = n ? JSON.parse(n) : t,
        a = it(r);
      return (
        a.subscribe((o) => {
          sessionStorage.setItem(e, JSON.stringify(o));
        }),
        a
      );
    }
    const Ft = ze("attempts", 3),
      Un = ze("font", "mono"),
      Xn = ze("isHiragana", !1),
      Yn = ze("mute", !1),
      Hn = ze("displayScore", !1),
      ra = ze("askAgain", !1);
    ze("popupTime", 500);
    const gn = ze("characterFilter", {
        standard: !0,
        voiced: !1,
        compound: !1,
      }),
      Bo = window.matchMedia("(prefers-color-scheme: dark)"),
      zt = ze("isDarkMode", Bo.matches);
    var Fo = ne('<nav><a href="/">Home</a> <a href="/learn">Learn</a></nav>');
    function zo(e, t) {
      Be(t, !1);
      const [n, r] = xt(),
        a = () => Q(No, "$location", n),
        o = () => Q(zt, "$isDarkMode", n);
      function l(v) {
        return a() === v || a().startsWith(v + "/");
      }
      ot();
      var c = Fo(),
        f = F(c);
      Rr(f, (v) => (pn == null ? void 0 : pn(v)));
      var s = B(f, 2);
      Rr(s, (v) => (pn == null ? void 0 : pn(v))),
        de(
          (v, g) => {
            Dt(c, "dark-mode", o()), Dt(f, "current", v), Dt(s, "current", g);
          },
          [() => l("/"), () => l("/learn")],
          Lt
        ),
        V(e, c),
        Fe(),
        r();
    }
    const Wo = {
        ア: "a",
        イ: "i",
        ウ: "u",
        エ: "e",
        オ: "o",
        カ: "ka",
        キ: "ki",
        ク: "ku",
        ケ: "ke",
        コ: "ko",
        サ: "sa",
        シ: "shi",
        ス: "su",
        セ: "se",
        ソ: "so",
        タ: "ta",
        チ: "chi",
        ツ: "tsu",
        テ: "te",
        ト: "to",
        ナ: "na",
        ニ: "ni",
        ヌ: "nu",
        ネ: "ne",
        ノ: "no",
        ハ: "ha",
        ヒ: "hi",
        フ: "fu",
        ヘ: "he",
        ホ: "ho",
        マ: "ma",
        ミ: "mi",
        ム: "mu",
        メ: "me",
        モ: "mo",
        ヤ: "ya",
        ユ: "yu",
        ヨ: "yo",
        ラ: "ra",
        リ: "ri",
        ル: "ru",
        レ: "re",
        ロ: "ro",
        ワ: "wa",
        ヲ: "wo",
        ン: "n",
      },
      Uo = {
        ガ: "ga",
        ギ: "gi",
        グ: "gu",
        ゲ: "ge",
        ゴ: "go",
        ザ: "za",
        ジ: "ji",
        ズ: "zu",
        ゼ: "ze",
        ゾ: "zo",
        ダ: "da",
        ヂ: "ji",
        ヅ: "zu",
        デ: "de",
        ド: "do",
        バ: "ba",
        ビ: "bi",
        ブ: "bu",
        ベ: "be",
        ボ: "bo",
        パ: "pa",
        ピ: "pi",
        プ: "pu",
        ペ: "pe",
        ポ: "po",
      },
      Xo = {
        キャ: "kya",
        キュ: "kyu",
        キョ: "kyo",
        シャ: "sha",
        シュ: "shu",
        ショ: "sho",
        チャ: "cha",
        チュ: "chu",
        チョ: "cho",
        ニャ: "nya",
        ニュ: "nyu",
        ニョ: "nyo",
        ヒャ: "hya",
        ヒュ: "hyu",
        ヒョ: "hyo",
        ミャ: "mya",
        ミュ: "myu",
        ミョ: "myo",
        リャ: "rya",
        リュ: "ryu",
        リョ: "ryo",
        ギャ: "gya",
        ギュ: "gyu",
        ギョ: "gyo",
        ジャ: "ja",
        ジュ: "ju",
        ジョ: "jo",
        ビャ: "bya",
        ビュ: "byu",
        ビョ: "byo",
        ピャ: "pya",
        ピュ: "pyu",
        ピョ: "pyo",
      },
      aa = { standard: Wo, voiced: Uo, compound: Xo },
      Yo = {
        あ: "a",
        い: "i",
        う: "u",
        え: "e",
        お: "o",
        か: "ka",
        き: "ki",
        く: "ku",
        け: "ke",
        こ: "ko",
        さ: "sa",
        し: "shi",
        す: "su",
        せ: "se",
        そ: "so",
        た: "ta",
        ち: "chi",
        つ: "tsu",
        て: "te",
        と: "to",
        な: "na",
        に: "ni",
        ぬ: "nu",
        ね: "ne",
        の: "no",
        は: "ha",
        ひ: "hi",
        ふ: "fu",
        へ: "he",
        ほ: "ho",
        ま: "ma",
        み: "mi",
        む: "mu",
        め: "me",
        も: "mo",
        や: "ya",
        ゆ: "yu",
        よ: "yo",
        ら: "ra",
        り: "ri",
        る: "ru",
        れ: "re",
        ろ: "ro",
        わ: "wa",
        を: "wo",
        ん: "n",
      },
      Ho = {
        が: "ga",
        ぎ: "gi",
        ぐ: "gu",
        げ: "ge",
        ご: "go",
        ざ: "za",
        じ: "ji",
        ず: "zu",
        ぜ: "ze",
        ぞ: "zo",
        だ: "da",
        ぢ: "ji",
        づ: "zu",
        で: "de",
        ど: "do",
        ば: "ba",
        び: "bi",
        ぶ: "bu",
        べ: "be",
        ぼ: "bo",
        ぱ: "pa",
        ぴ: "pi",
        ぷ: "pu",
        ぺ: "pe",
        ぽ: "po",
      },
      Ko = {
        きゃ: "kya",
        きゅ: "kyu",
        きょ: "kyo",
        しゃ: "sha",
        しゅ: "shu",
        しょ: "sho",
        ちゃ: "cha",
        ちゅ: "chu",
        ちょ: "cho",
        にゃ: "nya",
        にゅ: "nyu",
        にょ: "nyo",
        ひゃ: "hya",
        ひゅ: "hyu",
        ひょ: "hyo",
        みゃ: "mya",
        みゅ: "myu",
        みょ: "myo",
        りゃ: "rya",
        りゅ: "ryu",
        りょ: "ryo",
        ぎゃ: "gya",
        ぎゅ: "gyu",
        ぎょ: "gyo",
        じゃ: "ja",
        じゅ: "ju",
        じょ: "jo",
        びゃ: "bya",
        びゅ: "byu",
        びょ: "byo",
        ぴゃ: "pya",
        ぴゅ: "pyu",
        ぴょ: "pyo",
      },
      oa = { standard: Yo, voiced: Ho, compound: Ko };
    var Vo = ne(
      '<div class="score-card"><h3>Scorecard</h3> <p> </p> <p> </p> <p> </p> <p> </p></div>'
    );
    function qo(e, t) {
      Be(t, !1);
      let n = Ze(t, "totalCharacters", 8),
        r = Ze(t, "currentCharacter", 8),
        a = Ze(t, "incorrectCount", 8);
      ot();
      var o = Vo(),
        l = B(F(o), 2),
        c = F(l),
        f = B(l, 2),
        s = F(f),
        v = B(f, 2),
        g = F(v),
        p = B(v, 2),
        h = F(p);
      de(() => {
        var E, L, S, j;
        oe(c, `total: ${((E = n()) == null ? void 0 : E.length) ?? ""}`),
          oe(s, `remain: ${((L = n()) == null ? void 0 : L.length) - r()}`),
          oe(g, `incorrect: ${((S = a()) == null ? void 0 : S.length) ?? ""}`),
          oe(h, `correct: ${r() - ((j = a()) == null ? void 0 : j.length)}`);
      }),
        V(e, o),
        Fe();
    }
    var mn = {};
    (function e(t, n, r, a) {
      var o = !!(
          t.Worker &&
          t.Blob &&
          t.Promise &&
          t.OffscreenCanvas &&
          t.OffscreenCanvasRenderingContext2D &&
          t.HTMLCanvasElement &&
          t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
          t.URL &&
          t.URL.createObjectURL
        ),
        l = typeof Path2D == "function" && typeof DOMMatrix == "function",
        c = (function () {
          if (!t.OffscreenCanvas) return !1;
          var u = new OffscreenCanvas(1, 1),
            i = u.getContext("2d");
          i.fillRect(0, 0, 1, 1);
          var C = u.transferToImageBitmap();
          try {
            i.createPattern(C, "no-repeat");
          } catch {
            return !1;
          }
          return !0;
        })();
      function f() {}
      function s(u) {
        var i = n.exports.Promise,
          C = i !== void 0 ? i : t.Promise;
        return typeof C == "function" ? new C(u) : (u(f, f), null);
      }
      var v = (function (u, i) {
          return {
            transform: function (C) {
              if (u) return C;
              if (i.has(C)) return i.get(C);
              var I = new OffscreenCanvas(C.width, C.height),
                b = I.getContext("2d");
              return b.drawImage(C, 0, 0), i.set(C, I), I;
            },
            clear: function () {
              i.clear();
            },
          };
        })(c, new Map()),
        g = (function () {
          var u = Math.floor(16.666666666666668),
            i,
            C,
            I = {},
            b = 0;
          return (
            typeof requestAnimationFrame == "function" &&
            typeof cancelAnimationFrame == "function"
              ? ((i = function (y) {
                  var w = Math.random();
                  return (
                    (I[w] = requestAnimationFrame(function O(R) {
                      b === R || b + u - 1 < R
                        ? ((b = R), delete I[w], y())
                        : (I[w] = requestAnimationFrame(O));
                    })),
                    w
                  );
                }),
                (C = function (y) {
                  I[y] && cancelAnimationFrame(I[y]);
                }))
              : ((i = function (y) {
                  return setTimeout(y, u);
                }),
                (C = function (y) {
                  return clearTimeout(y);
                })),
            { frame: i, cancel: C }
          );
        })(),
        p = (function () {
          var u,
            i,
            C = {};
          function I(b) {
            function y(w, O) {
              b.postMessage({ options: w || {}, callback: O });
            }
            (b.init = function (w) {
              var O = w.transferControlToOffscreen();
              b.postMessage({ canvas: O }, [O]);
            }),
              (b.fire = function (w, O, R) {
                if (i) return y(w, null), i;
                var m = Math.random().toString(36).slice(2);
                return (
                  (i = s(function ($) {
                    function N(U) {
                      U.data.callback === m &&
                        (delete C[m],
                        b.removeEventListener("message", N),
                        (i = null),
                        v.clear(),
                        R(),
                        $());
                    }
                    b.addEventListener("message", N),
                      y(w, m),
                      (C[m] = N.bind(null, { data: { callback: m } }));
                  })),
                  i
                );
              }),
              (b.reset = function () {
                b.postMessage({ reset: !0 });
                for (var w in C) C[w](), delete C[w];
              });
          }
          return function () {
            if (u) return u;
            if (!r && o) {
              var b = [
                "var CONFETTI, SIZE = {}, module = {};",
                "(" + e.toString() + ")(this, module, true, SIZE);",
                "onmessage = function(msg) {",
                "  if (msg.data.options) {",
                "    CONFETTI(msg.data.options).then(function () {",
                "      if (msg.data.callback) {",
                "        postMessage({ callback: msg.data.callback });",
                "      }",
                "    });",
                "  } else if (msg.data.reset) {",
                "    CONFETTI && CONFETTI.reset();",
                "  } else if (msg.data.resize) {",
                "    SIZE.width = msg.data.resize.width;",
                "    SIZE.height = msg.data.resize.height;",
                "  } else if (msg.data.canvas) {",
                "    SIZE.width = msg.data.canvas.width;",
                "    SIZE.height = msg.data.canvas.height;",
                "    CONFETTI = module.exports.create(msg.data.canvas);",
                "  }",
                "}",
              ].join(`
`);
              try {
                u = new Worker(URL.createObjectURL(new Blob([b])));
              } catch (y) {
                return (
                  typeof console !== void 0 &&
                    typeof console.warn == "function" &&
                    console.warn("🎊 Could not load worker", y),
                  null
                );
              }
              I(u);
            }
            return u;
          };
        })(),
        h = {
          particleCount: 50,
          angle: 90,
          spread: 45,
          startVelocity: 45,
          decay: 0.9,
          gravity: 1,
          drift: 0,
          ticks: 200,
          x: 0.5,
          y: 0.5,
          shapes: ["square", "circle"],
          zIndex: 100,
          colors: [
            "#26ccff",
            "#a25afd",
            "#ff5e7e",
            "#88ff5a",
            "#fcff42",
            "#ffa62d",
            "#ff36ff",
          ],
          disableForReducedMotion: !1,
          scalar: 1,
        };
      function E(u, i) {
        return i ? i(u) : u;
      }
      function L(u) {
        return u != null;
      }
      function S(u, i, C) {
        return E(u && L(u[i]) ? u[i] : h[i], C);
      }
      function j(u) {
        return u < 0 ? 0 : Math.floor(u);
      }
      function W(u, i) {
        return Math.floor(Math.random() * (i - u)) + u;
      }
      function T(u) {
        return parseInt(u, 16);
      }
      function X(u) {
        return u.map(_);
      }
      function _(u) {
        var i = String(u).replace(/[^0-9a-f]/gi, "");
        return (
          i.length < 6 && (i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]),
          {
            r: T(i.substring(0, 2)),
            g: T(i.substring(2, 4)),
            b: T(i.substring(4, 6)),
          }
        );
      }
      function x(u) {
        var i = S(u, "origin", Object);
        return (i.x = S(i, "x", Number)), (i.y = S(i, "y", Number)), i;
      }
      function M(u) {
        (u.width = document.documentElement.clientWidth),
          (u.height = document.documentElement.clientHeight);
      }
      function P(u) {
        var i = u.getBoundingClientRect();
        (u.width = i.width), (u.height = i.height);
      }
      function k(u) {
        var i = document.createElement("canvas");
        return (
          (i.style.position = "fixed"),
          (i.style.top = "0px"),
          (i.style.left = "0px"),
          (i.style.pointerEvents = "none"),
          (i.style.zIndex = u),
          i
        );
      }
      function A(u, i, C, I, b, y, w, O, R) {
        u.save(),
          u.translate(i, C),
          u.rotate(y),
          u.scale(I, b),
          u.arc(0, 0, 1, w, O, R),
          u.restore();
      }
      function ke(u) {
        var i = u.angle * (Math.PI / 180),
          C = u.spread * (Math.PI / 180);
        return {
          x: u.x,
          y: u.y,
          wobble: Math.random() * 10,
          wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
          velocity: u.startVelocity * 0.5 + Math.random() * u.startVelocity,
          angle2D: -i + (0.5 * C - Math.random() * C),
          tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
          color: u.color,
          shape: u.shape,
          tick: 0,
          totalTicks: u.ticks,
          decay: u.decay,
          drift: u.drift,
          random: Math.random() + 2,
          tiltSin: 0,
          tiltCos: 0,
          wobbleX: 0,
          wobbleY: 0,
          gravity: u.gravity * 3,
          ovalScalar: 0.6,
          scalar: u.scalar,
          flat: u.flat,
        };
      }
      function we(u, i) {
        (i.x += Math.cos(i.angle2D) * i.velocity + i.drift),
          (i.y += Math.sin(i.angle2D) * i.velocity + i.gravity),
          (i.velocity *= i.decay),
          i.flat
            ? ((i.wobble = 0),
              (i.wobbleX = i.x + 10 * i.scalar),
              (i.wobbleY = i.y + 10 * i.scalar),
              (i.tiltSin = 0),
              (i.tiltCos = 0),
              (i.random = 1))
            : ((i.wobble += i.wobbleSpeed),
              (i.wobbleX = i.x + 10 * i.scalar * Math.cos(i.wobble)),
              (i.wobbleY = i.y + 10 * i.scalar * Math.sin(i.wobble)),
              (i.tiltAngle += 0.1),
              (i.tiltSin = Math.sin(i.tiltAngle)),
              (i.tiltCos = Math.cos(i.tiltAngle)),
              (i.random = Math.random() + 2));
        var C = i.tick++ / i.totalTicks,
          I = i.x + i.random * i.tiltCos,
          b = i.y + i.random * i.tiltSin,
          y = i.wobbleX + i.random * i.tiltCos,
          w = i.wobbleY + i.random * i.tiltSin;
        if (
          ((u.fillStyle =
            "rgba(" +
            i.color.r +
            ", " +
            i.color.g +
            ", " +
            i.color.b +
            ", " +
            (1 - C) +
            ")"),
          u.beginPath(),
          l &&
            i.shape.type === "path" &&
            typeof i.shape.path == "string" &&
            Array.isArray(i.shape.matrix))
        )
          u.fill(
            Pe(
              i.shape.path,
              i.shape.matrix,
              i.x,
              i.y,
              Math.abs(y - I) * 0.1,
              Math.abs(w - b) * 0.1,
              (Math.PI / 10) * i.wobble
            )
          );
        else if (i.shape.type === "bitmap") {
          var O = (Math.PI / 10) * i.wobble,
            R = Math.abs(y - I) * 0.1,
            m = Math.abs(w - b) * 0.1,
            $ = i.shape.bitmap.width * i.scalar,
            N = i.shape.bitmap.height * i.scalar,
            U = new DOMMatrix([
              Math.cos(O) * R,
              Math.sin(O) * R,
              -Math.sin(O) * m,
              Math.cos(O) * m,
              i.x,
              i.y,
            ]);
          U.multiplySelf(new DOMMatrix(i.shape.matrix));
          var G = u.createPattern(v.transform(i.shape.bitmap), "no-repeat");
          G.setTransform(U),
            (u.globalAlpha = 1 - C),
            (u.fillStyle = G),
            u.fillRect(i.x - $ / 2, i.y - N / 2, $, N),
            (u.globalAlpha = 1);
        } else if (i.shape === "circle")
          u.ellipse
            ? u.ellipse(
                i.x,
                i.y,
                Math.abs(y - I) * i.ovalScalar,
                Math.abs(w - b) * i.ovalScalar,
                (Math.PI / 10) * i.wobble,
                0,
                2 * Math.PI
              )
            : A(
                u,
                i.x,
                i.y,
                Math.abs(y - I) * i.ovalScalar,
                Math.abs(w - b) * i.ovalScalar,
                (Math.PI / 10) * i.wobble,
                0,
                2 * Math.PI
              );
        else if (i.shape === "star")
          for (
            var z = (Math.PI / 2) * 3,
              q = 4 * i.scalar,
              H = 8 * i.scalar,
              Z = i.x,
              re = i.y,
              ae = 5,
              ee = Math.PI / ae;
            ae--;

          )
            (Z = i.x + Math.cos(z) * H),
              (re = i.y + Math.sin(z) * H),
              u.lineTo(Z, re),
              (z += ee),
              (Z = i.x + Math.cos(z) * q),
              (re = i.y + Math.sin(z) * q),
              u.lineTo(Z, re),
              (z += ee);
        else
          u.moveTo(Math.floor(i.x), Math.floor(i.y)),
            u.lineTo(Math.floor(i.wobbleX), Math.floor(b)),
            u.lineTo(Math.floor(y), Math.floor(w)),
            u.lineTo(Math.floor(I), Math.floor(i.wobbleY));
        return u.closePath(), u.fill(), i.tick < i.totalTicks;
      }
      function se(u, i, C, I, b) {
        var y = i.slice(),
          w = u.getContext("2d"),
          O,
          R,
          m = s(function ($) {
            function N() {
              (O = R = null),
                w.clearRect(0, 0, I.width, I.height),
                v.clear(),
                b(),
                $();
            }
            function U() {
              r &&
                !(I.width === a.width && I.height === a.height) &&
                ((I.width = u.width = a.width),
                (I.height = u.height = a.height)),
                !I.width &&
                  !I.height &&
                  (C(u), (I.width = u.width), (I.height = u.height)),
                w.clearRect(0, 0, I.width, I.height),
                (y = y.filter(function (G) {
                  return we(w, G);
                })),
                y.length ? (O = g.frame(U)) : N();
            }
            (O = g.frame(U)), (R = N);
          });
        return {
          addFettis: function ($) {
            return (y = y.concat($)), m;
          },
          canvas: u,
          promise: m,
          reset: function () {
            O && g.cancel(O), R && R();
          },
        };
      }
      function Me(u, i) {
        var C = !u,
          I = !!S(i || {}, "resize"),
          b = !1,
          y = S(i, "disableForReducedMotion", Boolean),
          w = o && !!S(i || {}, "useWorker"),
          O = w ? p() : null,
          R = C ? M : P,
          m = u && O ? !!u.__confetti_initialized : !1,
          $ =
            typeof matchMedia == "function" &&
            matchMedia("(prefers-reduced-motion)").matches,
          N;
        function U(z, q, H) {
          for (
            var Z = S(z, "particleCount", j),
              re = S(z, "angle", Number),
              ae = S(z, "spread", Number),
              ee = S(z, "startVelocity", Number),
              Ge = S(z, "decay", Number),
              _t = S(z, "gravity", Number),
              Wt = S(z, "drift", Number),
              Te = S(z, "colors", X),
              lt = S(z, "ticks", Number),
              Qe = S(z, "shapes"),
              yn = S(z, "scalar"),
              Ut = !!S(z, "flat"),
              bn = x(z),
              kt = Z,
              Xt = [],
              Mi = u.width * bn.x,
              Ei = u.height * bn.y;
            kt--;

          )
            Xt.push(
              ke({
                x: Mi,
                y: Ei,
                angle: re,
                spread: ae,
                startVelocity: ee,
                color: Te[kt % Te.length],
                shape: Qe[W(0, Qe.length)],
                ticks: lt,
                decay: Ge,
                gravity: _t,
                drift: Wt,
                scalar: yn,
                flat: Ut,
              })
            );
          return N ? N.addFettis(Xt) : ((N = se(u, Xt, R, q, H)), N.promise);
        }
        function G(z) {
          var q = y || S(z, "disableForReducedMotion", Boolean),
            H = S(z, "zIndex", Number);
          if (q && $)
            return s(function (ee) {
              ee();
            });
          C && N
            ? (u = N.canvas)
            : C && !u && ((u = k(H)), document.body.appendChild(u)),
            I && !m && R(u);
          var Z = { width: u.width, height: u.height };
          O && !m && O.init(u), (m = !0), O && (u.__confetti_initialized = !0);
          function re() {
            if (O) {
              var ee = {
                getBoundingClientRect: function () {
                  if (!C) return u.getBoundingClientRect();
                },
              };
              R(ee),
                O.postMessage({
                  resize: { width: ee.width, height: ee.height },
                });
              return;
            }
            Z.width = Z.height = null;
          }
          function ae() {
            (N = null),
              I && ((b = !1), t.removeEventListener("resize", re)),
              C &&
                u &&
                (document.body.contains(u) && document.body.removeChild(u),
                (u = null),
                (m = !1));
          }
          return (
            I && !b && ((b = !0), t.addEventListener("resize", re, !1)),
            O ? O.fire(z, Z, ae) : U(z, Z, ae)
          );
        }
        return (
          (G.reset = function () {
            O && O.reset(), N && N.reset();
          }),
          G
        );
      }
      var me;
      function ye() {
        return me || (me = Me(null, { useWorker: !0, resize: !0 })), me;
      }
      function Pe(u, i, C, I, b, y, w) {
        var O = new Path2D(u),
          R = new Path2D();
        R.addPath(O, new DOMMatrix(i));
        var m = new Path2D();
        return (
          m.addPath(
            R,
            new DOMMatrix([
              Math.cos(w) * b,
              Math.sin(w) * b,
              -Math.sin(w) * y,
              Math.cos(w) * y,
              C,
              I,
            ])
          ),
          m
        );
      }
      function We(u) {
        if (!l)
          throw new Error("path confetti are not supported in this browser");
        var i, C;
        typeof u == "string" ? (i = u) : ((i = u.path), (C = u.matrix));
        var I = new Path2D(i),
          b = document.createElement("canvas"),
          y = b.getContext("2d");
        if (!C) {
          for (
            var w = 1e3, O = w, R = w, m = 0, $ = 0, N, U, G = 0;
            G < w;
            G += 2
          )
            for (var z = 0; z < w; z += 2)
              y.isPointInPath(I, G, z, "nonzero") &&
                ((O = Math.min(O, G)),
                (R = Math.min(R, z)),
                (m = Math.max(m, G)),
                ($ = Math.max($, z)));
          (N = m - O), (U = $ - R);
          var q = 10,
            H = Math.min(q / N, q / U);
          C = [
            H,
            0,
            0,
            H,
            -Math.round(N / 2 + O) * H,
            -Math.round(U / 2 + R) * H,
          ];
        }
        return { type: "path", path: i, matrix: C };
      }
      function $e(u) {
        var i,
          C = 1,
          I = "#000000",
          b =
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        typeof u == "string"
          ? (i = u)
          : ((i = u.text),
            (C = "scalar" in u ? u.scalar : C),
            (b = "fontFamily" in u ? u.fontFamily : b),
            (I = "color" in u ? u.color : I));
        var y = 10 * C,
          w = "" + y + "px " + b,
          O = new OffscreenCanvas(y, y),
          R = O.getContext("2d");
        R.font = w;
        var m = R.measureText(i),
          $ = Math.ceil(m.actualBoundingBoxRight + m.actualBoundingBoxLeft),
          N = Math.ceil(m.actualBoundingBoxAscent + m.actualBoundingBoxDescent),
          U = 2,
          G = m.actualBoundingBoxLeft + U,
          z = m.actualBoundingBoxAscent + U;
        ($ += U + U),
          (N += U + U),
          (O = new OffscreenCanvas($, N)),
          (R = O.getContext("2d")),
          (R.font = w),
          (R.fillStyle = I),
          R.fillText(i, G, z);
        var q = 1 / C;
        return {
          type: "bitmap",
          bitmap: O.transferToImageBitmap(),
          matrix: [q, 0, 0, q, (-$ * q) / 2, (-N * q) / 2],
        };
      }
      (n.exports = function () {
        return ye().apply(this, arguments);
      }),
        (n.exports.reset = function () {
          ye().reset();
        }),
        (n.exports.create = Me),
        (n.exports.shapeFromPath = We),
        (n.exports.shapeFromText = $e);
    })(
      (function () {
        return typeof window < "u"
          ? window
          : typeof self < "u"
          ? self
          : this || {};
      })(),
      mn,
      !1
    );
    const Jo = mn.exports;
    mn.exports.create;
    var Zo = ne(
        "<p>Want to make it harder? Try with less attempts!:</p> <button>Play Again with less attempts</button>",
        1
      ),
      Go = ne(
        `<h1>Congratulations, you got everything right!</h1> <p>This is Wooper.<br> Wooper is proud of how far you have come and how
          much you have accomplished.</p> <img src="./gif/wooper.gif" alt="wooper" width="50"> <!>`,
        1
      ),
      Qo = ne(
        "<h1>incorrect guesses:</h1> <p> </p> <button>Play Again With Incorrect Kana</button>",
        1
      ),
      ei = ne(
        '<div class="ending-screen"><!> <button>Play Again with all Kana</button></div>'
      ),
      ti = ne(
        '<p class="dots"> </p> <form><input type="text" autocorrect="off"></form> <p> </p>',
        1
      ),
      ni = ne('<p class="fail">I was <strong> </strong>!</p>'),
      ri = ne("<h1> </h1> <!>", 1),
      ai = ne(
        '<audio></audio> <audio></audio> <audio></audio> <audio></audio> <div class="game"><!> <!></div>',
        1
      );
    function oi(e, t) {
      Be(t, !1);
      const [n, r] = xt(),
        a = () => Q(Xn, "$isHiragana", n),
        o = () => Q(gn, "$characterFilter", n),
        l = () => Q(Yn, "$mute", n),
        c = () => Q(Ft, "$attempts", n),
        f = () => Q(Un, "$font", n),
        s = () => Q(Hn, "$displayScore", n),
        v = "./";
      let g = te(),
        p = te(),
        h = te(),
        E = !1,
        L = te(),
        S = te(),
        j = te(),
        W = te(),
        T = te(),
        X = te(),
        _ = te(),
        x = te(),
        M = te(),
        P = te(),
        k = te(),
        A = te(),
        ke = te([]);
      function we() {
        (E = !0), Jo(), (E = !1), d(A).play();
      }
      function se(m = !0, $) {
        D(j, m ? "Correct!" : "Try Again!"),
          D(W, m),
          setTimeout(() => {
            D(j, "");
          }, 500);
      }
      function Me(m) {
        for (let $ = 0; $ < m.length; $++) {
          const N = $ + Math.floor(Math.random() * (m.length - $));
          let U = m[N];
          (m[N] = m[$]), (m[$] = U);
        }
        return m;
      }
      function me(m) {
        D(h, Me(m)), D(_, 0), D(x, []), ye();
      }
      function ye() {
        D(X, d(h)[d(_)]), D(L, ""), D(T, c());
      }
      function Pe() {
        var m;
        d(L).toLowerCase() == "nn" && D(L, "n"),
          d(L).toLowerCase() === d(g)[d(X)].toLowerCase()
            ? (d(M).play(), se(), An(_), ye())
            : (An(T, -1),
              d(T) == 0
                ? (d(k).play(),
                  d(x).push(d(X)),
                  setTimeout(ye, 800),
                  setTimeout(() => An(_), 500))
                : (d(P).play(), se(!1))),
          d(_) === ((m = d(h)) == null ? void 0 : m.length) &&
            d(x).length === 0 &&
            !E &&
            we(),
          D(L, ""),
          d(S).focus();
      }
      console.log("base:", `${v}/audio/correct.wav`),
        Qt(
          () => (a(), d(g), o(), d(S), d(M), l()),
          () => {
            const m = a() ? oa : aa;
            if (
              (D(
                g,
                Object.assign(
                  {},
                  ...Object.keys(m)
                    .filter(($) => o()[$])
                    .map(($) => m[$])
                )
              ),
              D(p, Object.keys(d(g))),
              d(S) && d(S).focus(),
              d(M))
            ) {
              const $ = l() ? 0 : 1;
              qt(M, (d(M).volume = $)),
                qt(P, (d(P).volume = $)),
                qt(k, (d(k).volume = $)),
                qt(A, (d(A).volume = l() ? 0 : 0.05));
            }
          }
        ),
        Qt(
          () => (d(p), d(ke)),
          () => {
            JSON.stringify(d(p)) !== JSON.stringify(d(ke)) &&
              (D(ke, [...d(p)]), me(d(p)));
          }
        ),
        Ln(),
        ot();
      var We = ai(),
        $e = pe(We);
      qe($e, "src", `${v}/audio/correct.wav`),
        Je(
          $e,
          (m) => D(M, m),
          () => d(M)
        );
      var u = B($e, 2);
      qe(u, "src", `${v}/audio/try-again.wav`),
        Je(
          u,
          (m) => D(P, m),
          () => d(P)
        );
      var i = B(u, 2);
      qe(i, "src", `${v}/audio/failed.wav`),
        Je(
          i,
          (m) => D(k, m),
          () => d(k)
        );
      var C = B(i, 2);
      qe(C, "src", `${v}/audio/yippee.mp3`),
        Je(
          C,
          (m) => D(A, m),
          () => d(A)
        );
      var I = B(C, 2),
        b = F(I);
      {
        var y = (m) => {
            var $ = ei(),
              N = F($);
            {
              var U = (q) => {
                  var H = Go(),
                    Z = B(pe(H), 6);
                  {
                    var re = (ae) => {
                      var ee = Zo(),
                        Ge = B(pe(ee), 2);
                      ue("click", Ge, () => {
                        Ft.set(1), me(d(p));
                      }),
                        V(ae, ee);
                    };
                    je(Z, (ae) => {
                      c() > 1 && ae(re);
                    });
                  }
                  V(q, H);
                },
                G = (q) => {
                  var H = Qo(),
                    Z = B(pe(H), 2),
                    re = F(Z),
                    ae = B(Z, 2);
                  de((ee) => oe(re, ee), [() => d(x).toString()], Lt),
                    ue("click", ae, () => me(d(x))),
                    V(q, H);
                };
              je(N, (q) => {
                d(x).length ? q(G, !1) : q(U);
              });
            }
            var z = B(N, 2);
            ue("click", z, () => me(d(p))), V(m, $);
          },
          w = (m) => {
            var $ = ri(),
              N = pe($),
              U = F(N),
              G = B(N, 2);
            {
              var z = (H) => {
                  var Z = ti(),
                    re = pe(Z),
                    ae = F(re),
                    ee = B(re, 2),
                    Ge = F(ee);
                  Je(
                    Ge,
                    (Te) => D(S, Te),
                    () => d(S)
                  );
                  var _t = B(ee, 2),
                    Wt = F(_t);
                  de(
                    (Te) => {
                      oe(ae, Te), zr(_t, `result ${d(W)}`), oe(Wt, d(j));
                    },
                    [
                      () =>
                        Array.from({ length: d(T) })
                          .map(() => "•")
                          .join(""),
                    ],
                    Lt
                  ),
                    wo(
                      Ge,
                      () => d(L),
                      (Te) => D(L, Te)
                    ),
                    ue("submit", ee, Bt(Pe)),
                    V(H, Z);
                },
                q = (H) => {
                  var Z = ni(),
                    re = B(F(Z)),
                    ae = F(re);
                  de(() => oe(ae, d(g)[d(X)])), V(H, Z);
                };
              je(G, (H) => {
                d(T) > 0 ? H(z) : H(q, !1);
              });
            }
            de(() => {
              zr(N, `${f() ?? ""}-font`), oe(U, d(X));
            }),
              V(m, $);
          };
        je(b, (m) => {
          d(_) === d(h).length ? m(y) : m(w, !1);
        });
      }
      var O = B(b, 2);
      {
        var R = (m) => {
          qo(m, {
            get totalCharacters() {
              return d(h);
            },
            get incorrectCount() {
              return d(x);
            },
            get currentCharacter() {
              return d(_);
            },
          });
        };
        je(O, (m) => {
          s() && m(R);
        });
      }
      V(e, We), Fe(), r();
    }
    var ii = ne(
      '<button aria-label="overlay" class="overlay"></button> <div class="confirmation"><p class="warning-message"><!></p> <div class="require-confirmation"><label for="require-confirmation">Do not ask this again:</label> <input id="require-confirmation" type="checkbox" class="toggle"></div> <div><button>Confirm</button> <button>Cancel</button></div></div>',
      1
    );
    function li(e, t) {
      Be(t, !0);
      const [n, r] = xt(),
        a = () => Q(t.display, "$display", n),
        o = () => Q(t.notShowAgain, "$notShowAgain", n);
      var l = fn(),
        c = pe(l);
      {
        var f = (s) => {
          var v = ii(),
            g = pe(v);
          g.__click = () => t.display.set(!1);
          var p = B(g, 2),
            h = F(p),
            E = F(h);
          go(E, () => t.children);
          var L = B(h, 2),
            S = B(F(L), 2),
            j = B(L, 2),
            W = F(j);
          W.__click = () => {
            t.result.set(!0), t.display.set(!1);
          };
          var T = B(W, 2);
          (T.__click = () => {
            t.result.set(!1), t.display.set(!1);
          }),
            xo(S, o, (X) => Vr(t.notShowAgain, X)),
            V(s, v);
        };
        je(c, (s) => {
          a() && s(f);
        });
      }
      V(e, l), Fe(), r();
    }
    Nr(["click"]);
    var ui = ne("<div><!></div>"),
      si = ne(
        '<div class="include-option"><label> </label> <input type="checkbox" class="toggle"></div>'
      ),
      ci = ne(
        '<div class="settings-popup"><div class="settings-buttons"><button><span class="material-symbols-rounded"> </span></button> <button><span class="material-symbols-rounded"> </span></button></div> <button id="score-button"> </button> <div class="setting-field"><label for="attempts">attempts:</label> <input name="attempts" id="attempts" type="number" inputmode="numeric" pattern="[0-9]*"></div> <div class="setting-field"><label for="font">font:</label> <select><option>mono</option><option>serif</option><option>handwriting</option></select></div> <h4>Script:</h4> <div class="hiragana-toggle"><input type="checkbox" id="is-hiragana-checkbox"> <label for="is-hiragana-checkbox" class="toggle-label"> </label></div> <div class="include-options"><h4>Include:</h4> <!></div></div>'
      ),
      fi = ne(
        '<!> <div class="settings-container"><button id="display-settings" name="display-settings"><span class="material-symbols-rounded">settings</span></button> <!></div>',
        1
      );
    function di(e, t) {
      Be(t, !1);
      const [n, r] = xt(),
        a = () => Q(L, "$displaySettings", n),
        o = () => Q(ra, "$doNotAskAgain", n),
        l = () => Q(_, "$result", n),
        c = () => Q(gn, "$characterFilter", n),
        f = () => Q(Xn, "$isHiragana", n),
        s = () => Q(T, "$confirmationMsg", n),
        v = () => Q(Yn, "$mute", n),
        g = () => Q(zt, "$isDarkMode", n),
        p = () => Q(Hn, "$displayScore", n),
        h = () => Q(Ft, "$attempts", n),
        E = () => Q(Un, "$font", n);
      let L = it(!1),
        S = te(),
        j = te(),
        W = te(),
        T = it(),
        X = it(!1),
        _ = it(null);
      const x = 5,
        M = 1;
      function P(b) {
        const y = b.target;
        d(S) &&
          !d(S).contains(y) &&
          d(j) &&
          !d(j).contains(y) &&
          (!d(W) || !d(W).contains(y)) &&
          L.set(!1);
      }
      function k() {
        Yn.update((b) => !b);
      }
      function A() {
        Hn.update((b) => !b);
      }
      function ke() {
        zt.update((b) => !b);
      }
      async function we(b, y) {
        const w = b.target,
          { checked: O } = w;
        o()
          ? _.set(!0)
          : (X.set(!0),
            _.set(null),
            T.set(`Are you sure you want to ${
              O ? "enable" : "disable"
            } ${y} characters?
        This will restart your game.`),
            await new Promise((R) => {
              const m = _.subscribe((U) => {
                  U !== null && (m(), R());
                }),
                $ = (U) => {
                  d(W) && !d(W).contains(U.target) && _.set(!1);
                },
                N = (U) => {
                  U.key === "Escape" && _.set(!1);
                };
              document.addEventListener("click", $),
                document.addEventListener("touchstart", $, { passive: !0 }),
                document.addEventListener("keydown", N, { once: !0 }),
                _.subscribe((U) => {
                  U !== null &&
                    (document.removeEventListener("click", $),
                    document.removeEventListener("touchstart", $),
                    document.removeEventListener("keydown", N));
                });
            })),
          l() === !0
            ? (qr(gn, (ie(c)[y] = O), ie(c)),
              Object.values(c()).every((R) => !R) &&
                (qr(gn, (ie(c)[y] = !0), ie(c)),
                (w.checked = !O),
                console.log("TODO: error the user!")))
            : (w.checked = !O),
          X.set(!1);
      }
      function se(b) {
        const y = b.target;
        let w = parseInt(y.value);
        isNaN(w) ||
          y.value === "" ||
          (w > x
            ? ((w = x),
              (y.value = w.toString()),
              console.log("TODO: error the user!"))
            : w < M &&
              ((w = M),
              (y.value = w.toString()),
              console.log("TODO: error the user!")),
          Ft.set(w));
      }
      function Me(b) {
        const y = b.target;
        let w = parseInt(y.value);
        (isNaN(w) || y.value === "") &&
          ((w = M),
          (y.value = w.toString()),
          Ft.set(w),
          console.log("TODO: error the user!"));
      }
      function me(b) {
        const y = b.target;
        y.setAttribute("inputmode", "numeric"),
          y.setAttribute("pattern", "[0-9]*");
      }
      async function ye(b) {
        const y = b.target,
          w = y.checked;
        o()
          ? _.set(!0)
          : (X.set(!0),
            _.set(null),
            T.set(`Are you sure you want to switch to ${
              w ? "hiragana" : "katakana"
            }?
      This will restart your game.`),
            await new Promise((O) => {
              const R = _.subscribe((N) => {
                  N !== null && (R(), O());
                }),
                m = (N) => {
                  d(W) && !d(W).contains(N.target) && _.set(!1);
                },
                $ = (N) => {
                  N.key === "Escape" && _.set(!1);
                };
              document.addEventListener("click", m),
                document.addEventListener("touchstart", m, { passive: !0 }),
                document.addEventListener("keydown", $, { once: !0 }),
                _.subscribe((N) => {
                  N !== null &&
                    (document.removeEventListener("click", m),
                    document.removeEventListener("touchstart", m),
                    document.removeEventListener("keydown", $));
                });
            })),
          l() === !0 ? Xn.set(w) : (y.checked = f()),
          X.set(!1);
      }
      Qt(
        () => a(),
        () => {
          a()
            ? (document.addEventListener("mousedown", P),
              document.addEventListener("touchstart", P, { passive: !0 }))
            : (document.removeEventListener("mousedown", P),
              document.removeEventListener("touchstart", P));
        }
      ),
        Ln(),
        ot();
      var Pe = fi(),
        We = pe(Pe);
      {
        var $e = (b) => {
          var y = ui(),
            w = F(y);
          li(w, {
            result: _,
            display: X,
            notShowAgain: ra,
            children: (O, R) => {
              var m = lo();
              de(() => oe(m, s())), V(O, m);
            },
            $$slots: { default: !0 },
          }),
            Je(
              y,
              (O) => D(W, O),
              () => d(W)
            ),
            V(b, y);
        };
        je(We, (b) => {
          b($e);
        });
      }
      var u = B(We, 2),
        i = F(u);
      Je(
        i,
        (b) => D(j, b),
        () => d(j)
      );
      var C = B(i, 2);
      {
        var I = (b) => {
          var y = ci(),
            w = F(y),
            O = F(w),
            R = F(O),
            m = F(R),
            $ = B(O, 2),
            N = F($),
            U = F(N),
            G = B(w, 2),
            z = F(G),
            q = B(G, 2),
            H = B(F(q), 2);
          qe(H, "min", M), qe(H, "max", x);
          var Z = B(q, 2),
            re = B(F(Z), 2);
          de(() => {
            E(), eo(() => {});
          });
          var ae = B(Z, 4),
            ee = F(ae),
            Ge = B(ee, 2),
            _t = F(Ge),
            Wt = B(ae, 2),
            Te = B(F(Wt), 2);
          vn(
            Te,
            1,
            () => Object.keys(c()),
            dn,
            (lt, Qe) => {
              var yn = si(),
                Ut = F(yn),
                bn = F(Ut),
                kt = B(Ut, 2);
              de(() => {
                qe(Ut, "for", `${d(Qe) ?? ""}-checkbox`),
                  oe(bn, `${d(Qe) ?? ""}:`),
                  qe(kt, "id", `${d(Qe) ?? ""}-checkbox`),
                  Br(kt, c()[d(Qe)]);
              }),
                ue("change", kt, (Xt) => we(Xt, d(Qe))),
                V(lt, yn);
            }
          ),
            Je(
              y,
              (lt) => D(S, lt),
              () => d(S)
            ),
            de(() => {
              oe(m, `volume_${(v() ? "off" : "up") ?? ""}`),
                oe(U, `${(g() ? "light" : "dark") ?? ""}_mode`),
                oe(z, `${(p() ? "hide" : "show") ?? ""} score`),
                mo(H, h()),
                Br(ee, f()),
                oe(_t, f() ? "hiragana" : "katakana");
            }),
            ue("click", O, k),
            ue("touchend", O, Bt(k)),
            ue("click", $, ke),
            ue("touchend", $, Bt(ke)),
            ue("click", G, A),
            ue("touchend", G, Bt(A)),
            ue("input", H, se),
            ue("blur", H, Me),
            ue("focus", H, me),
            ko(re, E, (lt) => Vr(Un, lt)),
            ue("change", ee, ye),
            V(b, y);
        };
        je(C, (b) => {
          a() && b(I);
        });
      }
      ue("click", i, () => L.set(!a())),
        ue(
          "touchend",
          i,
          Bt(() => L.set(!a()))
        ),
        V(e, Pe),
        Fe(),
        r();
    }
    var vi = ne("<main><!> <!></main>");
    function ia(e) {
      const [t, n] = xt(),
        r = () => Q(zt, "$isDarkMode", t);
      var a = vi(),
        o = F(a);
      di(o, {});
      var l = B(o, 2);
      oi(l, {}), de(() => Dt(a, "dark-mode", r())), V(e, a), n();
    }
    var hi = (e, t, n) => {
        t(n());
      },
      pi = ne('<button class="index-card"><p> </p> <p> </p></button>');
    function gi(e, t) {
      Be(t, !1);
      let n = Ze(t, "japaneseCharacter", 8),
        r = Ze(t, "englishCharacter", 8);
      const a = "./";
      function o(g) {
        new Audio(`${a}/audio/kanasounds/kanasound-${g}.mp3`)
          .play()
          .catch((p) => console.error("Audio playback failed", p));
      }
      ot();
      var l = pi();
      l.__click = [hi, o, r];
      var c = F(l),
        f = F(c),
        s = B(c, 2),
        v = F(s);
      de(() => {
        oe(f, n()), oe(v, r());
      }),
        V(e, l),
        Fe();
    }
    Nr(["click"]);
    var mi = ne(
        '<div><strong> </strong>: <div class="character-lists"></div></div>'
      ),
      yi = ne("<hr>"),
      bi = ne("<h2> </h2> <div></div> <!>", 1),
      wi = ne('<main><h1 class="learn-title">Learn Page</h1> <!></main>');
    function xi(e, t) {
      Be(t, !1);
      const [n, r] = xt(),
        a = () => Q(zt, "$isDarkMode", n),
        o = { Hiragana: oa, Katakana: aa };
      ot();
      var l = wi(),
        c = B(F(l), 2);
      vn(
        c,
        1,
        () => Object.entries(o),
        dn,
        (f, s, v) => {
          let g = () => d(s)[0],
            p = () => d(s)[1];
          var h = bi(),
            E = pe(h),
            L = F(E),
            S = B(E, 2);
          vn(
            S,
            5,
            () => Object.entries(p()),
            dn,
            (T, X) => {
              let _ = () => d(X)[0],
                x = () => d(X)[1];
              var M = mi(),
                P = F(M),
                k = F(P),
                A = B(P, 2);
              vn(
                A,
                5,
                () => Object.entries(x()),
                dn,
                (ke, we) => {
                  let se = () => d(we)[0],
                    Me = () => d(we)[1];
                  gi(ke, {
                    get japaneseCharacter() {
                      return se();
                    },
                    get englishCharacter() {
                      return Me();
                    },
                  });
                }
              ),
                de(() => oe(k, _())),
                V(T, M);
            }
          );
          var j = B(S, 2);
          {
            var W = (T) => {
              var X = yi();
              V(T, X);
            };
            je(j, (T) => {
              v < Object.keys(o).length - 1 && T(W);
            });
          }
          de(() => oe(L, g())), V(f, h);
        }
      ),
        de(() => Dt(l, "dark-mode", a())),
        V(e, l),
        Fe(),
        r();
    }
    var _i = ne("<!> <!>", 1);
    function ki(e) {
      const t = { "/": ia, "/learn": xi, "*": ia };
      var n = _i(),
        r = pe(n);
      zo(r, {});
      var a = B(r, 2);
      Ro(a, { routes: t, useHash: !1 }), V(e, n);
    }
    uo(ki, { target: document.getElementById("app") });
  });
Si();
