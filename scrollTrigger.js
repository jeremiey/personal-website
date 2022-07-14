/*!
 * ScrollTrigger 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  'use strict';
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function q() {
    return (
      we ||
      ('undefined' != typeof window &&
        (we = window.gsap) &&
        we.registerPlugin &&
        we)
    );
  }
  function y(e, t) {
    return ~He.indexOf(e) && He[He.indexOf(e) + 1][t];
  }
  function z(e) {
    return !!~t.indexOf(e);
  }
  function A(e, t, r, n, i) {
    return e.addEventListener(t, r, { passive: !n, capture: !!i });
  }
  function B(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function E() {
    return (ze && ze.isPressed) || P.cache++;
  }
  function F(r, n) {
    function Pc(e) {
      if (e || 0 === e) {
        i && (Me.history.scrollRestoration = 'manual');
        var t = ze && ze.isPressed;
        (e = Pc.v = Math.round(e) || (ze && ze.iOS ? 1 : 0)),
          r(e),
          (Pc.cacheID = P.cache),
          t && o('ss', e);
      } else (n || P.cache !== Pc.cacheID || o('ref')) && ((Pc.cacheID = P.cache), (Pc.v = r()));
      return Pc.v + Pc.offset;
    }
    return (Pc.offset = 0), r && Pc;
  }
  function I(e) {
    return (
      we.utils.toArray(e)[0] ||
      ('string' == typeof e && !1 !== we.config().nullTargetWarn
        ? console.warn('Element not found:', e)
        : null)
    );
  }
  function J(t, e) {
    var r = e.s,
      n = e.sc,
      i = P.indexOf(t),
      o = n === Je.sc ? 1 : 2;
    return (
      ~i || (i = P.push(t) - 1),
      P[i + o] ||
        (P[i + o] =
          F(y(t, r), !0) ||
          (z(t)
            ? n
            : F(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })))
    );
  }
  function K(e, t, i) {
    function jd(e, t) {
      var r = Fe();
      t || n < r - s
        ? ((a = o), (o = e), (l = s), (s = r))
        : i
        ? (o += e)
        : (o = a + ((e - a) / (r - l)) * (s - l));
    }
    var o = e,
      a = e,
      s = Fe(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: jd,
      reset: function reset() {
        (a = o = i ? 0 : o), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Fe();
        return (
          (!e && 0 !== e) || e === o || jd(e),
          s === l || c < n - l
            ? 0
            : ((o + (i ? r : -r)) / ((i ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function L(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function M(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function N() {
    (Be = we.core.globals().ScrollTrigger) &&
      Be.core &&
      (function _integrate() {
        var e = Be.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, P),
          n.push.apply(n, He),
          (P = t),
          (He = n),
          (o = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function O(e) {
    return (
      (we = e || q()) &&
        'undefined' != typeof document &&
        document.body &&
        ((Me = window),
        (Ae = (ke = document).documentElement),
        (Ce = ke.body),
        (t = [Me, ke, Ae, Ce]),
        we.utils.clamp,
        (Ie = 'onpointerenter' in Ce ? 'pointer' : 'mouse'),
        (Ee = k.isTouch =
          Me.matchMedia &&
          Me.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in Me ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (De = k.eventTypes =
          (
            'ontouchstart' in Ae
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in Ae
              ? 'pointerdown,pointermove,pointercancel,pointerup'
              : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (i = 0);
        }, 500),
        N(),
        (_e = 1)),
      _e
    );
  }
  var we,
    _e,
    Me,
    ke,
    Ae,
    Ce,
    Ee,
    Ie,
    Be,
    t,
    ze,
    De,
    i = 1,
    Re = [],
    P = [],
    He = [],
    Fe = Date.now,
    o = function _bridge(e, t) {
      return t;
    },
    r = 'scrollLeft',
    n = 'scrollTop',
    je = {
      s: r,
      p: 'left',
      p2: 'Left',
      os: 'right',
      os2: 'Right',
      d: 'width',
      d2: 'Width',
      a: 'x',
      sc: F(function (e) {
        return arguments.length
          ? Me.scrollTo(e, Je.sc())
          : Me.pageXOffset || ke[r] || Ae[r] || Ce[r] || 0;
      }),
    },
    Je = {
      s: n,
      p: 'top',
      p2: 'Top',
      os: 'bottom',
      os2: 'Bottom',
      d: 'height',
      d2: 'Height',
      a: 'y',
      op: je,
      sc: F(function (e) {
        return arguments.length
          ? Me.scrollTo(je.sc(), e)
          : Me.pageYOffset || ke[n] || Ae[n] || Ce[n] || 0;
      }),
    };
  (je.op = Je), (P.cache = 0);
  var k =
    ((Observer.prototype.init = function init(e) {
      _e || O(we) || console.warn('Please gsap.registerPlugin(Observer)'),
        Be || N();
      var i = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        n = e.target,
        r = e.lineHeight,
        o = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        b = e.onPress,
        v = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        S = e.onChangeX,
        _ = e.onChangeY,
        T = e.onChange,
        P = e.onToggleX,
        k = e.onToggleY,
        C = e.onHover,
        D = e.onHoverEnd,
        X = e.onMove,
        Y = e.ignoreCheck,
        R = e.isNormalizer,
        H = e.onGestureStart,
        F = e.onGestureEnd,
        W = e.onWheel,
        j = e.onEnable,
        V = e.onDisable,
        G = e.onClick,
        U = e.scrollSpeed,
        q = e.capture,
        $ = e.allowClicks,
        Z = e.lockAxis,
        Q = e.onLockAxis;
      function Ke() {
        return (ye = Fe());
      }
      function Le(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && 'touch' !== e.pointerType) ||
          (Y && Y(e, t))
        );
      }
      function Ne() {
        var e = (se.deltaX = M(ve)),
          t = (se.deltaY = M(me)),
          r = Math.abs(e) >= i,
          n = Math.abs(t) >= i;
        T && (r || n) && T(se, e, t, ve, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            S && S(se),
            P && se.deltaX < 0 != le < 0 && P(se),
            (le = se.deltaX),
            (ve[0] = ve[1] = ve[2] = 0)),
          n &&
            (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            _ && _(se),
            k && se.deltaY < 0 != ce < 0 && k(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) &&
            (X && X(se),
            Q && oe && Q(se),
            re && (h(se), (re = !1)),
            (ne = oe = !1)),
          ie && (W(se), (ie = !1)),
          (ee = 0);
      }
      function Oe(e, t, r) {
        (ve[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          o ? (ee = ee || requestAnimationFrame(Ne)) : Ne();
      }
      function Pe(e, t) {
        'y' !== ae && ((ve[2] += e), se._vx.update(e, !0)),
          'x' !== ae && ((me[2] += t), se._vy.update(t, !0)),
          Z &&
            !ae &&
            ((se.axis = ae = Math.abs(e) > Math.abs(t) ? 'x' : 'y'), (oe = !0)),
          o ? (ee = ee || requestAnimationFrame(Ne)) : Ne();
      }
      function Qe(e) {
        if (!Le(e, 1)) {
          var t = (e = L(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            i = r - se.y,
            o = se.isDragging;
          (se.x = t),
            (se.y = r),
            (o ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              o || (se.isDragging = !0),
              Pe(n, i),
              o || (p && p(se)));
        }
      }
      function Se(t) {
        if (!Le(t, 1)) {
          B(R ? n : be, De[1], Qe, !0);
          var e =
              se.isDragging &&
              (3 < Math.abs(se.x - se.startX) ||
                3 < Math.abs(se.y - se.startY)),
            r = L(t);
          e ||
            (se._vx.reset(),
            se._vy.reset(),
            s &&
              $ &&
              we.delayedCall(0.08, function () {
                if (300 < Fe() - ye && !t.defaultPrevented)
                  if (t.target.click) t.target.click();
                  else if (be.createEvent) {
                    var e = be.createEvent('MouseEvents');
                    e.initMouseEvent(
                      'click',
                      !0,
                      !0,
                      Me,
                      1,
                      r.screenX,
                      r.screenY,
                      r.clientX,
                      r.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      t.target.dispatchEvent(e);
                  }
              })),
            (se.isDragging = se.isGesturing = se.isPressed = !1),
            l && !R && te.restart(!0),
            g && e && g(se),
            v && v(se, e);
        }
      }
      function Te(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          H(e, se.isDragging)
        );
      }
      function Ue() {
        return (se.isGesturing = !1) || F(se);
      }
      function Ve(e) {
        if (!Le(e)) {
          var t = ue(),
            r = fe();
          Oe((t - de) * U, (r - pe) * U, 1),
            (de = t),
            (pe = r),
            l && te.restart(!0);
        }
      }
      function We(e) {
        if (!Le(e)) {
          (e = L(e, s)), W && (ie = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Me.innerHeight : 1) *
            f;
          Oe(e.deltaX * t, e.deltaY * t, 0), l && !R && te.restart(!0);
        }
      }
      function Xe(e) {
        if (!Le(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            i = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), (n || i) && Pe(n, i);
        }
      }
      function Ye(e) {
        (se.event = e), C(se);
      }
      function Ze(e) {
        (se.event = e), D(se);
      }
      function $e(e) {
        return Le(e) || (L(e, s) && G(se));
      }
      (this.target = n = I(n) || Ae),
        (this.vars = e),
        (u = u && we.utils.toArray(u)),
        (i = i || 0),
        (a = a || 0),
        (f = f || 1),
        (U = U || 1),
        (t = t || 'wheel,touch,pointer'),
        (o = !1 !== o),
        (r = r || parseFloat(Me.getComputedStyle(Ce).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        ie,
        oe,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = J(n, je),
        fe = J(n, Je),
        de = ue(),
        pe = fe(),
        ge =
          ~t.indexOf('touch') &&
          !~t.indexOf('pointer') &&
          'pointerdown' === De[0],
        he = z(n),
        be = n.ownerDocument || ke,
        ve = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          Le(e, 1) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = L(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            A(R ? n : be, De[1], Qe, s, !0),
            (se.deltaX = se.deltaY = 0),
            b && b(se));
        });
      (te = se._dc =
        we
          .delayedCall(c || 0.25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
          })
          .pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = K(0, 50, !0)),
        (se._vy = K(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (A(he ? be : n, 'scroll', E),
              0 <= t.indexOf('scroll') && A(he ? be : n, 'scroll', Ve, s, q),
              0 <= t.indexOf('wheel') && A(n, 'wheel', We, s, q),
              ((0 <= t.indexOf('touch') && Ee) || 0 <= t.indexOf('pointer')) &&
                (A(n, De[0], xe, s, q),
                A(be, De[2], Se),
                A(be, De[3], Se),
                $ && A(n, 'click', Ke, !1, !0),
                G && A(n, 'click', $e),
                H && A(be, 'gesturestart', Te),
                F && A(be, 'gestureend', Ue),
                C && A(n, Ie + 'enter', Ye),
                D && A(n, Ie + 'leave', Ze),
                X && A(n, Ie + 'move', Xe)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              j && j(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Re.filter(function (e) {
              return e !== se && z(e.target);
            }).length || B(he ? be : n, 'scroll', E),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), B(R ? n : be, De[1], Qe, !0)),
            B(he ? be : n, 'scroll', Ve, q),
            B(n, 'wheel', We, q),
            B(n, De[0], xe, q),
            B(be, De[2], Se),
            B(be, De[3], Se),
            B(n, 'click', Ke, !0),
            B(n, 'click', $e),
            B(be, 'gesturestart', Te),
            B(be, 'gestureend', Ue),
            B(n, Ie + 'enter', Ye),
            B(n, Ie + 'leave', Ze),
            B(n, Ie + 'move', Xe),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            V && V(se));
        }),
        (se.kill = function () {
          se.disable();
          var e = Re.indexOf(se);
          0 <= e && Re.splice(e, 1), ze === se && (ze = 0);
        }),
        Re.push(se),
        R && z(n) && (ze = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: 'velocityX',
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: 'velocityY',
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (k.version = '3.11.0'),
    (k.create = function (e) {
      return new k(e);
    }),
    (k.register = O),
    (k.getAll = function () {
      return Re.slice();
    }),
    (k.getById = function (t) {
      return Re.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    q() && we.registerPlugin(k);
  function wa() {
    return (st = 1);
  }
  function xa() {
    return (st = 0);
  }
  function ya(e) {
    return e;
  }
  function za(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Aa() {
    return 'undefined' != typeof window;
  }
  function Ba() {
    return Ge || (Aa() && (Ge = window.gsap) && Ge.registerPlugin && Ge);
  }
  function Ca(e) {
    return !!~s.indexOf(e);
  }
  function Da(e) {
    return (
      y(e, 'getBoundingClientRect') ||
      (Ca(e)
        ? function () {
            return (Xt.width = qe.innerWidth), (Xt.height = qe.innerHeight), Xt;
          }
        : function () {
            return Et(e);
          })
    );
  }
  function Ga(e, t) {
    var r = t.s,
      n = t.d2,
      i = t.d,
      o = t.a;
    return (r = 'scroll' + n) && (o = y(e, r))
      ? o() - Da(e)()[i]
      : Ca(e)
      ? (tt[r] || rt[r]) -
        (qe['inner' + n] || tt['client' + n] || rt['client' + n])
      : e[r] - e['offset' + n];
  }
  function Ha(e, t) {
    for (var r = 0; r < p.length; r += 3)
      (t && !~t.indexOf(p[r + 1])) || e(p[r], p[r + 1], p[r + 2]);
  }
  function Ia(e) {
    return 'string' == typeof e;
  }
  function Ja(e) {
    return 'function' == typeof e;
  }
  function Ka(e) {
    return 'number' == typeof e;
  }
  function La(e) {
    return 'object' == typeof e;
  }
  function Ma(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Na(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function cb(e) {
    return qe.getComputedStyle(e);
  }
  function eb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function gb(e, t) {
    var r = t.d2;
    return e['offset' + r] || e['client' + r] || 0;
  }
  function hb(e) {
    var t,
      r = [],
      n = e.labels,
      i = e.duration();
    for (t in n) r.push(n[t] / i);
    return r;
  }
  function jb(i) {
    var o = Ge.utils.snap(i),
      a =
        Array.isArray(i) &&
        i.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return o(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = o(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : o(t < 0 ? e - i : e + i);
        };
  }
  function lb(t, r, e, n) {
    return e.split(',').forEach(function (e) {
      return t(r, e, n);
    });
  }
  function mb(e, t, r, n, i) {
    return e.addEventListener(t, r, { passive: !n, capture: !!i });
  }
  function nb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function ob(e, t, r) {
    return r && r.wheelHandler && e(t, 'wheel', r);
  }
  function sb(e, t) {
    if (Ia(e)) {
      var r = e.indexOf('='),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf('%') > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in D
            ? D[e] * t
            : ~e.indexOf('%')
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function tb(e, t, r, n, i, o, a, s) {
    var l = i.startColor,
      c = i.endColor,
      u = i.fontSize,
      f = i.indent,
      d = i.fontWeight,
      p = et.createElement('div'),
      g = Ca(r) || 'fixed' === y(r, 'pinType'),
      h = -1 !== e.indexOf('scroller'),
      b = g ? rt : r,
      v = -1 !== e.indexOf('start'),
      m = v ? l : c,
      x =
        'border-color:' +
        m +
        ';font-size:' +
        u +
        ';color:' +
        m +
        ';font-weight:' +
        d +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (
      (x += 'position:' + ((h || s) && g ? 'fixed;' : 'absolute;')),
      (!h && !s && g) ||
        (x += (n === Je ? S : _) + ':' + (o + parseFloat(f)) + 'px;'),
      a &&
        (x +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (p._isStart = v),
      p.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')),
      (p.style.cssText = x),
      (p.innerText = t || 0 === t ? e + '-' + t : e),
      b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p),
      (p._offset = p['offset' + n.op.d2]),
      X(p, 0, n, v),
      p
    );
  }
  function yb() {
    return 34 < bt() - vt && U();
  }
  function zb() {
    (h && h.isPressed && !(h.startX > rt.clientWidth)) ||
      (P.cache++,
      (x = x || requestAnimationFrame(U)),
      vt || H('scrollStart'),
      (vt = bt()));
  }
  function Ab() {
    (m = qe.innerWidth), (v = qe.innerHeight);
  }
  function Bb() {
    P.cache++,
      at ||
        g ||
        et.fullscreenElement ||
        et.webkitFullscreenElement ||
        (b &&
          m === qe.innerWidth &&
          !(Math.abs(qe.innerHeight - v) > 0.25 * qe.innerHeight)) ||
        l.restart(!0);
  }
  function Eb() {
    return nb(te, 'scrollEnd', Eb) || V(!0);
  }
  function Hb(e) {
    for (var t = 0; t < W.length; t += 5)
      (e && W[t + 4] !== e) ||
        ((W[t].style.cssText = W[t + 1]),
        W[t].getBBox && W[t].setAttribute('transform', W[t + 2] || ''),
        (W[t + 3].uncache = 1));
  }
  function Ib(e, t) {
    var r;
    for (lt = 0; lt < Bt.length; lt++)
      !(r = Bt[lt]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    t && Hb(t), t || H('revert');
  }
  function Jb() {
    return (
      P.cache++ &&
      P.forEach(function (e) {
        return 'function' == typeof e && (e.rec = 0);
      })
    );
  }
  function Ub(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var i, o = $.length, a = t.style, s = e.style; o--; )
        a[(i = $[o])] = r[i];
      (a.position = 'absolute' === r.position ? 'absolute' : 'relative'),
        'inline' === r.display && (a.display = 'inline-block'),
        (s[_] = s[S] = a.flexBasis = 'auto'),
        (a.overflow = 'visible'),
        (a.boxSizing = 'border-box'),
        (a[xt] = gb(e, je) + Ct),
        (a[wt] = gb(e, Je) + Ct),
        (a[Mt] = s[kt] = s.top = s.left = '0'),
        Lt(n),
        (s[xt] = s.maxWidth = r[xt]),
        (s[wt] = s.maxHeight = r[wt]),
        (s[Mt] = r[Mt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function Xb(e) {
    for (var t = Z.length, r = e.style, n = [], i = 0; i < t; i++)
      n.push(Z[i], r[Z[i]]);
    return (n.t = e), n;
  }
  function $b(e, t, r, n, i, o, a, s, l, c, u, f, d) {
    Ja(e) && (e = e(s)),
      Ia(e) &&
        'max' === e.substr(0, 3) &&
        (e = f + ('=' === e.charAt(4) ? sb('0' + e.substr(3), r) : 0));
    var p,
      g,
      h,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), Ka(e))) a && X(a, r, n, !0);
    else {
      Ja(t) && (t = t(s));
      var v,
        m,
        y,
        x,
        w = e.split(' ');
      (h = I(t) || rt),
        ((v = Et(h) || {}) && (v.left || v.top)) ||
          'none' !== cb(h).display ||
          ((x = h.style.display),
          (h.style.display = 'block'),
          (v = Et(h)),
          x ? (h.style.display = x) : h.style.removeProperty('display')),
        (m = sb(w[0], v[n.d])),
        (y = sb(w[1] || '0', r)),
        (e = v[n.p] - l[n.p] - c + m + i - y),
        a && X(a, y, n, r - y < 20 || (a._isStart && 20 < y)),
        (r -= r - y);
    }
    if (o) {
      var S = e + r,
        _ = o._isStart;
      (p = 'scroll' + n.d2),
        X(
          o,
          S,
          n,
          (_ && 20 < S) ||
            (!_ && (u ? Math.max(rt[p], tt[p]) : o.parentNode[p]) <= S + 1)
        ),
        u &&
          ((l = Et(a)),
          u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + Ct));
    }
    return (
      d &&
        h &&
        ((p = Et(h)),
        d.seek(f),
        (g = Et(h)),
        (d._caScrollDist = p[n.p] - g[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function ac(e, t, r, n) {
    if (e.parentNode !== t) {
      var i,
        o,
        a = e.style;
      if (t === rt) {
        for (i in ((e._stOrig = a.cssText), (o = cb(e))))
          +i ||
            ee.test(i) ||
            !o[i] ||
            'string' != typeof a[i] ||
            '0' === i ||
            (a[i] = o[i]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Ge.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function bc(l, e) {
    function Bj(e, t, r, n, i) {
      var o = Bj.tween,
        a = t.onComplete,
        s = {};
      return (
        (r = r || f()),
        (i = (n && i) || 0),
        (n = n || e - r),
        o && o.kill(),
        (c = Math.round(r)),
        (t[d] = e),
        ((t.modifiers = s)[d] = function (e) {
          return (
            (e = Math.round(f())) !== c &&
            e !== u &&
            3 < Math.abs(e - c) &&
            3 < Math.abs(e - u)
              ? (o.kill(), (Bj.tween = 0))
              : (e = r + n * o.ratio + i * o.ratio * o.ratio),
            (u = c),
            (c = Math.round(e))
          );
        }),
        (t.onComplete = function () {
          (Bj.tween = 0), a && a.call(o);
        }),
        (o = Bj.tween = Ge.to(l, t))
      );
    }
    var c,
      u,
      f = J(l, e),
      d = '_scroll' + e.p2;
    return (
      ((l[d] = f).wheelHandler = function () {
        return Bj.tween && Bj.tween.kill() && (Bj.tween = 0);
      }),
      mb(l, 'wheel', f.wheelHandler),
      Bj
    );
  }
  var Ge,
    a,
    qe,
    et,
    tt,
    rt,
    s,
    l,
    nt,
    it,
    ot,
    c,
    at,
    st,
    u,
    lt,
    f,
    d,
    p,
    ct,
    ut,
    g,
    h,
    b,
    v,
    m,
    C,
    ft,
    dt,
    x,
    pt,
    gt,
    ht = 1,
    bt = Date.now,
    w = bt(),
    vt = 0,
    mt = 0,
    yt = Math.abs,
    S = 'right',
    _ = 'bottom',
    xt = 'width',
    wt = 'height',
    St = 'Right',
    _t = 'Left',
    Tt = 'Top',
    Pt = 'Bottom',
    Mt = 'padding',
    kt = 'margin',
    At = 'Width',
    T = 'Height',
    Ct = 'px',
    Et = function _getBounds(e, t) {
      var r =
          t &&
          'matrix(1, 0, 0, 1, 0, 0)' !== cb(e)[u] &&
          Ge.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    Ot = {
      startColor: 'transparent',
      endColor: 'transparent',
      indent: 0,
      fontSize: '0px',
    },
    It = { toggleActions: 'play', anticipatePin: 0 },
    D = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    X = function _positionMarker(e, t, r, n) {
      var i = { display: 'block' },
        o = r[n ? 'os2' : 'p2'],
        a = r[n ? 'p2' : 'os2'];
      (e._isFlipped = n),
        (i[r.a + 'Percent'] = n ? -100 : 0),
        (i[r.a] = n ? '1px' : 0),
        (i['border' + o + At] = 1),
        (i['border' + a + At] = 0),
        (i[r.p] = t + 'px'),
        Ge.set(e, i);
    },
    Bt = [],
    zt = {},
    Y = {},
    R = [],
    H = function _dispatch(e) {
      return (
        (Y[e] &&
          Y[e].map(function (e) {
            return e();
          })) ||
        R
      );
    },
    W = [],
    j = 0,
    V = function _refreshAll(e, t) {
      if (!vt || e) {
        pt = !0;
        var r = H('refreshInit');
        ct && te.sort(),
          t || Ib(),
          Bt.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          Bt.forEach(function (e) {
            return (
              'max' === e.vars.end &&
              e.setPositions(e.start, Ga(e.scroller, e._dir))
            );
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          Jb(),
          l.pause(),
          j++,
          (pt = !1),
          H('refresh');
      } else mb(te, 'scrollEnd', Eb);
    },
    G = 0,
    Dt = 1,
    U = function _updateAll() {
      if (!pt) {
        (te.isUpdating = !0), gt && gt.update(0);
        var e = Bt.length,
          t = bt(),
          r = 50 <= t - w,
          n = e && Bt[0].scroll();
        if (
          ((Dt = n < G ? -1 : 1),
          (G = n),
          r &&
            (vt && !st && 200 < t - vt && ((vt = 0), H('scrollEnd')),
            (ot = w),
            (w = t)),
          Dt < 0)
        ) {
          for (lt = e; 0 < lt--; ) Bt[lt] && Bt[lt].update(0, r);
          Dt = 1;
        } else for (lt = 0; lt < e; lt++) Bt[lt] && Bt[lt].update(0, r);
        te.isUpdating = !1;
      }
      x = 0;
    },
    $ = [
      'left',
      'top',
      _,
      S,
      kt + Pt,
      kt + St,
      kt + Tt,
      kt + _t,
      'display',
      'flexShrink',
      'float',
      'zIndex',
      'gridColumnStart',
      'gridColumnEnd',
      'gridRowStart',
      'gridRowEnd',
      'gridArea',
      'justifySelf',
      'alignSelf',
      'placeSelf',
      'order',
    ],
    Z = $.concat([
      xt,
      wt,
      'boxSizing',
      'max' + At,
      'max' + T,
      'position',
      kt,
      Mt,
      Mt + Tt,
      Mt + St,
      Mt + Pt,
      Mt + _t,
    ]),
    Q = /([A-Z])/g,
    Lt = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || Ge.core.getCache(e.t)).uncache = 1; o < i; o += 2)
          (r = e[o + 1]),
            (t = e[o]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(Q, '-$1').toLowerCase());
      }
    },
    Xt = { left: 0, top: 0 },
    ee = /(webkit|moz|length|cssText|inset)/i,
    te =
      ((ScrollTrigger.prototype.init = function init(_, T) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), mt)
        ) {
          var P,
            n,
            p,
            M,
            k,
            A,
            C,
            E,
            O,
            B,
            z,
            e,
            D,
            L,
            X,
            Y,
            R,
            t,
            N,
            v,
            H,
            F,
            m,
            W,
            x,
            w,
            r,
            S,
            j,
            V,
            i,
            g,
            G,
            K,
            U,
            q,
            $,
            o,
            Z = (_ = eb(Ia(_) || Ka(_) || _.nodeType ? { trigger: _ } : _, It))
              .onUpdate,
            Q = _.toggleClass,
            a = _.id,
            ee = _.onToggle,
            te = _.onRefresh,
            re = _.scrub,
            ne = _.trigger,
            ie = _.pin,
            oe = _.pinSpacing,
            ae = _.invalidateOnRefresh,
            se = _.anticipatePin,
            s = _.onScrubComplete,
            h = _.onSnapComplete,
            le = _.once,
            ce = _.snap,
            ue = _.pinReparent,
            l = _.pinSpacer,
            fe = _.containerAnimation,
            de = _.fastScrollEnd,
            pe = _.preventOverlaps,
            ge =
              _.horizontal || (_.containerAnimation && !1 !== _.horizontal)
                ? je
                : Je,
            he = !re && 0 !== re,
            be = I(_.scroller || qe),
            c = Ge.core.getCache(be),
            ve = Ca(be),
            me =
              'fixed' ===
              ('pinType' in _
                ? _.pinType
                : y(be, 'pinType') || (ve && 'fixed')),
            ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
            xe = he && _.toggleActions.split(' '),
            u = 'markers' in _ ? _.markers : It.markers,
            we = ve ? 0 : parseFloat(cb(be)['border' + ge.p2 + At]) || 0,
            Se = this,
            _e =
              _.onRefreshInit &&
              function () {
                return _.onRefreshInit(Se);
              },
            Te = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                i = r.d2,
                o = r.a;
              return (o = y(e, 'getBoundingClientRect'))
                ? function () {
                    return o()[n];
                  }
                : function () {
                    return (t ? qe['inner' + i] : e['client' + i]) || 0;
                  };
            })(be, ve, ge),
            Pe = (function _getOffsetsFunc(e, t) {
              return !t || ~He.indexOf(e)
                ? Da(e)
                : function () {
                    return Xt;
                  };
            })(be, ve),
            Me = 0,
            ke = 0,
            Ae = J(be, ge);
          if (
            (ft(Se),
            (Se._dir = ge),
            (se *= 45),
            (Se.scroller = be),
            (Se.scroll = fe ? fe.time.bind(fe) : Ae),
            (M = Ae()),
            (Se.vars = _),
            (T = T || _.animation),
            'refreshPriority' in _ &&
              ((ct = 1), -9999 === _.refreshPriority && (gt = Se)),
            (c.tweenScroll = c.tweenScroll || {
              top: bc(be, Je),
              left: bc(be, je),
            }),
            (Se.tweenTo = P = c.tweenScroll[ge.p]),
            (Se.scrubDuration = function (e) {
              (i = Ka(e) && e)
                ? V
                  ? V.duration(e)
                  : (V = Ge.to(T, {
                      ease: 'expo',
                      totalProgress: '+=0.001',
                      duration: i,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Se);
                      },
                    }))
                : (V && V.progress(1).kill(), (V = 0));
            }),
            T &&
              ((T.vars.lazy = !1),
              T._initted ||
                (!1 !== T.vars.immediateRender &&
                  !1 !== _.immediateRender &&
                  T.render(0, !0, !0)),
              (Se.animation = T.pause()),
              (T.scrollTrigger = Se).scrubDuration(re),
              (S = 0),
              (a = a || T.vars.id)),
            Bt.push(Se),
            ce &&
              ((La(ce) && !ce.push) || (ce = { snapTo: ce }),
              'scrollBehavior' in rt.style &&
                Ge.set(ve ? [rt, tt] : be, { scrollBehavior: 'auto' }),
              (p = Ja(ce.snapTo)
                ? ce.snapTo
                : 'labels' === ce.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return Ge.utils.snap(hb(t), e);
                    };
                  })(T)
                : 'labelsDirectional' === ce.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return jb(hb(r))(e, t.direction);
                    };
                  })(T)
                : !1 !== ce.directional
                ? function (e, t) {
                    return jb(ce.snapTo)(e, bt() - ke < 500 ? 0 : t.direction);
                  }
                : Ge.utils.snap(ce.snapTo)),
              (g = ce.duration || { min: 0.1, max: 2 }),
              (g = La(g) ? it(g.min, g.max) : it(g, g)),
              (G = Ge.delayedCall(ce.delay || i / 2 || 0.1, function () {
                var e = Ae(),
                  t = bt() - ke < 500,
                  r = P.tween;
                if (
                  !(t || Math.abs(Se.getVelocity()) < 10) ||
                  r ||
                  st ||
                  Me === e
                )
                  Se.isActive && Me !== e && G.restart(!0);
                else {
                  var n = (e - A) / D,
                    i = T && !he ? T.totalProgress() : n,
                    o = t ? 0 : ((i - j) / (bt() - ot)) * 1e3 || 0,
                    a = Ge.utils.clamp(-n, 1 - n, (yt(o / 2) * o) / 0.185),
                    s = n + (!1 === ce.inertia ? 0 : a),
                    l = it(0, 1, p(s, Se)),
                    c = Math.round(A + l * D),
                    u = ce.onStart,
                    f = ce.onInterrupt,
                    d = ce.onComplete;
                  if (e <= C && A <= e && c !== e) {
                    if (r && !r._initted && r.data <= yt(c - e)) return;
                    !1 === ce.inertia && (a = l - n),
                      P(
                        c,
                        {
                          duration: g(
                            yt(
                              (0.185 * Math.max(yt(s - i), yt(l - i))) /
                                o /
                                0.05 || 0
                            )
                          ),
                          ease: ce.ease || 'power3',
                          data: yt(c - e),
                          onInterrupt: function onInterrupt() {
                            return G.restart(!0) && f && f(Se);
                          },
                          onComplete: function onComplete() {
                            Se.update(),
                              (Me = Ae()),
                              (S = j =
                                T && !he ? T.totalProgress() : Se.progress),
                              h && h(Se),
                              d && d(Se);
                          },
                        },
                        e,
                        a * D,
                        c - e - a * D
                      ),
                      u && u(Se, P.tween);
                  }
                }
              }).pause())),
            a && (zt[a] = Se),
            (o =
              (o =
                (ne = Se.trigger = I(ne || ie)) &&
                ne._gsap &&
                ne._gsap.stRevert) && o(Se)),
            (ie = !0 === ie ? ne : I(ie)),
            Ia(Q) && (Q = { targets: ne, className: Q }),
            ie &&
              (!1 === oe ||
                oe === kt ||
                (oe = !(!oe && 'flex' === cb(ie.parentNode).display) && Mt),
              (Se.pin = ie),
              !1 !== _.force3D && Ge.set(ie, { force3D: !0 }),
              (n = Ge.core.getCache(ie)).spacer
                ? (L = n.pinState)
                : (l &&
                    ((l = I(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = Xb(l))),
                  (n.spacer = R = l || et.createElement('div')),
                  R.classList.add('pin-spacer'),
                  a && R.classList.add('pin-spacer-' + a),
                  (n.pinState = L = Xb(ie))),
              (Se.spacer = R = n.spacer),
              (r = cb(ie)),
              (m = r[oe + ge.os2]),
              (N = Ge.getProperty(ie)),
              (v = Ge.quickSetter(ie, ge.a, Ct)),
              Ub(ie, R, r),
              (Y = Xb(ie))),
            u)
          ) {
            (e = La(u) ? eb(u, Ot) : Ot),
              (B = tb('', a, be, ge, e, 0)),
              (z = tb('', a, be, ge, e, 0, B)),
              (t = B['offset' + ge.op.d2]);
            var f = I(y(be, 'content') || be);
            (E = this.markerStart = tb('start', a, f, ge, e, t, 0, fe)),
              (O = this.markerEnd = tb('end', a, f, ge, e, t, 0, fe)),
              fe && ($ = Ge.quickSetter([E, O], ge.a, Ct)),
              me ||
                (He.length && !0 === y(be, 'fixedMarkers')) ||
                ((function _makePositionable(e) {
                  var t = cb(e).position;
                  e.style.position =
                    'absolute' === t || 'fixed' === t ? t : 'relative';
                })(ve ? rt : be),
                Ge.set([B, z], { force3D: !0 }),
                (x = Ge.quickSetter(B, ge.a, Ct)),
                (w = Ge.quickSetter(z, ge.a, Ct)));
          }
          if (fe) {
            var d = fe.vars.onUpdate,
              b = fe.vars.onUpdateParams;
            fe.eventCallback('onUpdate', function () {
              Se.update(0, 0, 1), d && d.apply(b || []);
            });
          }
          (Se.previous = function () {
            return Bt[Bt.indexOf(Se) - 1];
          }),
            (Se.next = function () {
              return Bt[Bt.indexOf(Se) + 1];
            }),
            (Se.revert = function (e, t) {
              if (!t) return Se.kill(!0);
              var r = !1 !== e || !Se.enabled,
                n = at;
              r !== Se.isReverted &&
                (r &&
                  (!Se.scroll.rec && at && pt && (Se.scroll.rec = Ae()),
                  (U = Math.max(Ae(), Se.scroll.rec || 0)),
                  (K = Se.progress),
                  (q = T && T.progress())),
                E &&
                  [E, O, B, z].forEach(function (e) {
                    return (e.style.display = r ? 'none' : 'block');
                  }),
                r && (at = 1),
                Se.update(r),
                (at = n),
                ie &&
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Lt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Lt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var i = t.parentNode;
                          i && (i.insertBefore(e, t), i.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ie, R, L)
                    : (ue && Se.isActive) || Ub(ie, R, cb(ie), W)),
                (Se.isReverted = r));
            }),
            (Se.refresh = function (e, t) {
              if ((!at && Se.enabled) || t)
                if (ie && e && vt) mb(ScrollTrigger, 'scrollEnd', Eb);
                else {
                  !pt && _e && _e(Se),
                    (at = 1),
                    (ke = bt()),
                    P.tween && (P.tween.kill(), (P.tween = 0)),
                    V && V.pause(),
                    ae && T && T.revert().invalidate(),
                    Se.isReverted || Se.revert(!0, !0);
                  for (
                    var r,
                      n,
                      i,
                      o,
                      a,
                      s,
                      l,
                      c,
                      u,
                      f,
                      d = Te(),
                      p = Pe(),
                      g = fe ? fe.duration() : Ga(be, ge),
                      h = 0,
                      b = 0,
                      v = _.end,
                      m = _.endTrigger || ne,
                      y =
                        _.start ||
                        (0 !== _.start && ne ? (ie ? '0 0' : '0 100%') : 0),
                      x = (Se.pinnedContainer =
                        _.pinnedContainer && I(_.pinnedContainer)),
                      w = (ne && Math.max(0, Bt.indexOf(Se))) || 0,
                      S = w;
                    S--;

                  )
                    (s = Bt[S]).end || s.refresh(0, 1) || (at = 1),
                      !(l = s.pin) ||
                        (l !== ne && l !== ie) ||
                        s.isReverted ||
                        ((f = f || []).unshift(s), s.revert(!0, !0)),
                      s !== Bt[S] && (w--, S--);
                  for (
                    Ja(y) && (y = y(Se)),
                      A =
                        $b(y, ne, d, ge, Ae(), E, B, Se, p, we, me, g, fe) ||
                        (ie ? -0.001 : 0),
                      Ja(v) && (v = v(Se)),
                      Ia(v) &&
                        !v.indexOf('+=') &&
                        (~v.indexOf(' ')
                          ? (v = (Ia(y) ? y.split(' ')[0] : '') + v)
                          : ((h = sb(v.substr(2), d)),
                            (v = Ia(y) ? y : A + h),
                            (m = ne))),
                      C =
                        Math.max(
                          A,
                          $b(
                            v || (m ? '100% 0' : g),
                            m,
                            d,
                            ge,
                            Ae() + h,
                            O,
                            z,
                            Se,
                            p,
                            we,
                            me,
                            g,
                            fe
                          )
                        ) || -0.001,
                      D = C - A || ((A -= 0.01) && 0.001),
                      h = 0,
                      S = w;
                    S--;

                  )
                    (l = (s = Bt[S]).pin) &&
                      s.start - s._pinPush < A &&
                      !fe &&
                      0 < s.end &&
                      ((r = s.end - s.start),
                      (l !== ne && l !== x) ||
                        Ka(y) ||
                        (h += r * (1 - s.progress)),
                      l === ie && (b += r));
                  if (
                    ((A += h),
                    (C += h),
                    (Se._pinPush = b),
                    E &&
                      h &&
                      (((r = {})[ge.a] = '+=' + h),
                      x && (r[ge.p] = '-=' + Ae()),
                      Ge.set([E, O], r)),
                    ie)
                  )
                    (r = cb(ie)),
                      (o = ge === Je),
                      (i = Ae()),
                      (H = parseFloat(N(ge.a)) + b),
                      !g &&
                        1 < C &&
                        ((ve ? rt : be).style['overflow-' + ge.a] = 'scroll'),
                      Ub(ie, R, r),
                      (Y = Xb(ie)),
                      (n = Et(ie, !0)),
                      (c = me && J(be, o ? je : Je)()),
                      oe &&
                        (((W = [oe + ge.os2, D + b + Ct]).t = R),
                        (S = oe === Mt ? gb(ie, ge) + D + b : 0) &&
                          W.push(ge.d, S + Ct),
                        Lt(W),
                        me && Ae(U)),
                      me &&
                        (((a = {
                          top: n.top + (o ? i - A : c) + Ct,
                          left: n.left + (o ? c : i - A) + Ct,
                          boxSizing: 'border-box',
                          position: 'fixed',
                        })[xt] = a.maxWidth =
                          Math.ceil(n.width) + Ct),
                        (a[wt] = a.maxHeight = Math.ceil(n.height) + Ct),
                        (a[kt] =
                          a[kt + Tt] =
                          a[kt + St] =
                          a[kt + Pt] =
                          a[kt + _t] =
                            '0'),
                        (a[Mt] = r[Mt]),
                        (a[Mt + Tt] = r[Mt + Tt]),
                        (a[Mt + St] = r[Mt + St]),
                        (a[Mt + Pt] = r[Mt + Pt]),
                        (a[Mt + _t] = r[Mt + _t]),
                        (X = (function _copyState(e, t, r) {
                          for (
                            var n, i = [], o = e.length, a = r ? 8 : 0;
                            a < o;
                            a += 2
                          )
                            (n = e[a]), i.push(n, n in t ? t[n] : e[a + 1]);
                          return (i.t = e.t), i;
                        })(L, a, ue))),
                      T
                        ? ((u = T._initted),
                          ut(1),
                          T.render(T.duration(), !0, !0),
                          (F = N(ge.a) - H + D + b),
                          D !== F && me && X.splice(X.length - 2, 2),
                          T.render(0, !0, !0),
                          u || T.invalidate(),
                          ut(0))
                        : (F = D);
                  else if (ne && Ae() && !fe)
                    for (n = ne.parentNode; n && n !== rt; )
                      n._pinOffset &&
                        ((A -= n._pinOffset), (C -= n._pinOffset)),
                        (n = n.parentNode);
                  f &&
                    f.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (Se.start = A),
                    (Se.end = C),
                    (M = k = Ae()),
                    fe || (M < U && Ae(U), (Se.scroll.rec = 0)),
                    Se.revert(!1, !0),
                    G &&
                      ((Me = -1), Se.isActive && Ae(A + D * K), G.restart(!0)),
                    (at = 0),
                    T &&
                      he &&
                      (T._initted || q) &&
                      T.progress() !== q &&
                      T.progress(q, !0).render(T.time(), !0, !0),
                    (K === Se.progress && !fe) ||
                      (T && !he && T.totalProgress(K, !0),
                      (Se.progress = (M - A) / D === K ? 0 : K),
                      Se.update(0, 0, 1)),
                    ie && oe && (R._pinOffset = Math.round(Se.progress * F)),
                    te && te(Se);
                }
            }),
            (Se.getVelocity = function () {
              return ((Ae() - k) / (bt() - ot)) * 1e3 || 0;
            }),
            (Se.endAnimation = function () {
              Ma(Se.callbackAnimation),
                T &&
                  (V
                    ? V.progress(1)
                    : T.paused()
                    ? he || Ma(T, Se.direction < 0, 1)
                    : Ma(T, T.reversed()));
            }),
            (Se.labelToScroll = function (e) {
              return (
                (T &&
                  T.labels &&
                  (A || Se.refresh() || A) +
                    (T.labels[e] / T.duration()) * D) ||
                0
              );
            }),
            (Se.getTrailing = function (t) {
              var e = Bt.indexOf(Se),
                r =
                  0 < Se.direction ? Bt.slice(0, e).reverse() : Bt.slice(e + 1);
              return (
                Ia(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Se.direction ? e.end <= A : e.start >= C;
              });
            }),
            (Se.update = function (e, t, r) {
              if (!fe || r || e) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  l,
                  c,
                  u = Se.scroll(),
                  f = e ? 0 : (u - A) / D,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = Se.progress;
                if (
                  (t &&
                    ((k = M),
                    (M = fe ? Ae() : u),
                    ce && ((j = S), (S = T && !he ? T.totalProgress() : d))),
                  se &&
                    !d &&
                    ie &&
                    !at &&
                    !ht &&
                    vt &&
                    A < u + ((u - k) / (bt() - ot)) * se &&
                    (d = 1e-4),
                  d !== p && Se.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (Se.direction = p < d ? 1 : -1),
                    (Se.progress = d),
                    a &&
                      !at &&
                      ((i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      he &&
                        ((o =
                          (!s && 'none' !== xe[i + 1] && xe[i + 1]) || xe[i]),
                        (c =
                          T && ('complete' === o || 'reset' === o || o in T)))),
                    pe &&
                      (s || c) &&
                      (c || re || !T) &&
                      (Ja(pe)
                        ? pe(Se)
                        : Se.getTrailing(pe).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    he ||
                      (!V || at || ht
                        ? T && T.totalProgress(d, !!at)
                        : ((fe || (gt && gt !== Se)) &&
                            V.render(V._dp._time - V._start),
                          V.resetTo
                            ? V.resetTo('totalProgress', d, T._tTime / T._tDur)
                            : ((V.vars.totalProgress = d),
                              V.invalidate().restart()))),
                    ie)
                  )
                    if ((e && oe && (R.style[oe + ge.os2] = m), me)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < C + 1 && u + 1 >= Ga(be, ge)),
                          ue)
                        )
                          if (e || (!n && !l)) ac(ie, R);
                          else {
                            var g = Et(ie, !0),
                              h = u - A;
                            ac(
                              ie,
                              rt,
                              g.top + (ge === Je ? h : 0) + Ct,
                              g.left + (ge === Je ? 0 : h) + Ct
                            );
                          }
                        Lt(n || l ? X : Y),
                          (F !== D && d < 1 && n) ||
                            v(H + (1 !== d || l ? 0 : F));
                      }
                    } else v(za(H + F * d));
                  !ce || P.tween || at || ht || G.restart(!0),
                    Q &&
                      (s || (le && d && (d < 1 || !dt))) &&
                      nt(Q.targets).forEach(function (e) {
                        return e.classList[n || le ? 'add' : 'remove'](
                          Q.className
                        );
                      }),
                    !Z || he || e || Z(Se),
                    a && !at
                      ? (he &&
                          (c &&
                            ('complete' === o
                              ? T.pause().totalProgress(1)
                              : 'reset' === o
                              ? T.restart(!0).pause()
                              : 'restart' === o
                              ? T.restart(!0)
                              : T[o]()),
                          Z && Z(Se)),
                        (!s && dt) ||
                          (ee && s && Na(Se, ee),
                          ye[i] && Na(Se, ye[i]),
                          le && (1 === d ? Se.kill(!1, 1) : (ye[i] = 0)),
                          s || (ye[(i = 1 === d ? 1 : 3)] && Na(Se, ye[i]))),
                        de &&
                          !n &&
                          Math.abs(Se.getVelocity()) > (Ka(de) ? de : 2500) &&
                          (Ma(Se.callbackAnimation),
                          V ? V.progress(1) : Ma(T, !d, 1)))
                      : he && Z && !at && Z(Se);
                }
                if (w) {
                  var b = fe
                    ? (u / fe.duration()) * (fe._caScrollDist || 0)
                    : u;
                  x(b + (B._isFlipped ? 1 : 0)), w(b);
                }
                $ && $((-u / fe.duration()) * (fe._caScrollDist || 0));
              }
            }),
            (Se.enable = function (e, t) {
              Se.enabled ||
                ((Se.enabled = !0),
                mb(be, 'resize', Bb),
                mb(ve ? et : be, 'scroll', zb),
                _e && mb(ScrollTrigger, 'refreshInit', _e),
                !1 !== e && ((Se.progress = K = 0), (M = k = Me = Ae())),
                !1 !== t && Se.refresh());
            }),
            (Se.getTween = function (e) {
              return e && P ? P.tween : V;
            }),
            (Se.setPositions = function (e, t) {
              ie && ((H += e - A), (F += t - e - D)),
                (Se.start = A = e),
                (Se.end = C = t),
                (D = t - e),
                Se.update();
            }),
            (Se.disable = function (e, t) {
              if (
                Se.enabled &&
                (!1 !== e && Se.revert(!0, !0),
                (Se.enabled = Se.isActive = !1),
                t || (V && V.pause()),
                (U = 0),
                n && (n.uncache = 1),
                _e && nb(ScrollTrigger, 'refreshInit', _e),
                G && (G.pause(), P.tween && P.tween.kill() && (P.tween = 0)),
                !ve)
              ) {
                for (var r = Bt.length; r--; )
                  if (Bt[r].scroller === be && Bt[r] !== Se) return;
                nb(be, 'resize', Bb), nb(be, 'scroll', zb);
              }
            }),
            (Se.kill = function (e, t) {
              Se.disable(e, t), V && !t && V.kill(), a && delete zt[a];
              var r = Bt.indexOf(Se);
              0 <= r && Bt.splice(r, 1),
                r === lt && 0 < Dt && lt--,
                (r = 0),
                Bt.forEach(function (e) {
                  return e.scroller === Se.scroller && (r = 1);
                }),
                r || (Se.scroll.rec = 0),
                T &&
                  ((T.scrollTrigger = null), e && T.render(-1), t || T.kill()),
                E &&
                  [E, O, B, z].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                gt === Se && (gt = 0),
                ie &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Bt.forEach(function (e) {
                    return e.pin === ie && r++;
                  }),
                  r || (n.spacer = 0)),
                _.onKill && _.onKill(Se);
            }),
            Se.enable(!1, !1),
            o && o(Se),
            T && T.add && !D
              ? Ge.delayedCall(0.01, function () {
                  return A || C || Se.refresh();
                }) &&
                (D = 0.01) &&
                (A = C = 0)
              : Se.refresh();
        } else this.update = this.refresh = this.kill = ya;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          a ||
            ((Ge = e || Ba()),
            Aa() && window.document && ScrollTrigger.enable(),
            (a = mt)),
          a
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) It[t] = e[t];
        return It;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (mt = 0),
          Bt.forEach(function (e) {
            return e[r ? 'kill' : 'disable'](t);
          }),
          nb(qe, 'wheel', zb),
          nb(et, 'scroll', zb),
          clearInterval(c),
          nb(et, 'touchcancel', ya),
          nb(rt, 'touchstart', ya),
          lb(nb, et, 'pointerdown,touchstart,mousedown', wa),
          lb(nb, et, 'pointerup,touchend,mouseup', xa),
          l.kill(),
          Ha(nb);
        for (var e = 0; e < P.length; e += 3)
          ob(nb, P[e], P[e + 1]), ob(nb, P[e], P[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((qe = window),
          (et = document),
          (tt = et.documentElement),
          (rt = et.body),
          Ge &&
            ((nt = Ge.utils.toArray),
            (it = Ge.utils.clamp),
            (ft = Ge.core.context || ya),
            (ut = Ge.core.suppressOverwrites || ya),
            Ge.core.globals('ScrollTrigger', ScrollTrigger),
            rt))
        ) {
          (mt = 1),
            k.register(Ge),
            (ScrollTrigger.isTouch = k.isTouch),
            (C =
              k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            mb(qe, 'wheel', zb),
            (s = [qe, et, tt, rt]),
            (ScrollTrigger.matchMedia =
              Ge.matchMedia || console.warn('Requires GSAP 3.11.0 or later')),
            Ge.addEventListener('matchMediaInit', function () {
              return Ib();
            }),
            Ge.addEventListener('matchMediaRevert', function () {
              return Hb();
            }),
            Ge.addEventListener('matchMedia', function () {
              V(0, 1), H('matchMedia');
            }),
            Ge.matchMedia('(orientation: portrait)', function () {
              return Ab(), Ab;
            }),
            mb(et, 'scroll', zb);
          var e,
            t,
            r = rt.style,
            n = r.borderTopStyle,
            i = Ge.core.Animation.prototype;
          for (
            i.revert ||
              Object.defineProperty(i, 'revert', {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = 'solid',
              e = Et(rt),
              Je.m = Math.round(e.top + Je.sc()) || 0,
              je.m = Math.round(e.left + je.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty('border-top-style'),
              c = setInterval(yb, 250),
              Ge.delayedCall(0.5, function () {
                return (ht = 0);
              }),
              mb(et, 'touchcancel', ya),
              mb(rt, 'touchstart', ya),
              lb(mb, et, 'pointerdown,touchstart,mousedown', wa),
              lb(mb, et, 'pointerup,touchend,mouseup', xa),
              u = Ge.utils.checkPrefix('transform'),
              Z.push(u),
              a = bt(),
              l = Ge.delayedCall(0.2, V).pause(),
              p = [
                et,
                'visibilitychange',
                function () {
                  var e = qe.innerWidth,
                    t = qe.innerHeight;
                  et.hidden ? ((f = e), (d = t)) : (f === e && d === t) || Bb();
                },
                et,
                'DOMContentLoaded',
                V,
                qe,
                'load',
                V,
                qe,
                'resize',
                Bb,
              ],
              Ha(mb),
              Bt.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < P.length;
            t += 3
          )
            ob(nb, P[t], P[t + 1]), ob(nb, P[t], P[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        'limitCallbacks' in e && (dt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(c)) || ((c = t) && setInterval(yb, t)),
          'ignoreMobileResize' in e &&
            (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          'autoRefreshEvents' in e &&
            (Ha(nb) || Ha(mb, e.autoRefreshEvents || 'none'),
            (g = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = I(e),
          n = P.indexOf(r),
          i = Ca(r);
        ~n && P.splice(n, i ? 6 : 2),
          t && (i ? He.unshift(qe, t, rt, t, tt, t) : He.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Bt.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ia(e) ? I(e) : e).getBoundingClientRect(),
          i = n[r ? xt : wt] * t || 0;
        return r
          ? 0 < n.right - i && n.left + i < qe.innerWidth
          : 0 < n.bottom - i && n.top + i < qe.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ia(e) && (e = I(e));
        var n = e.getBoundingClientRect(),
          i = n[r ? xt : wt],
          o =
            null == t
              ? i / 2
              : t in D
              ? D[t] * i
              : ~t.indexOf('%')
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + o) / qe.innerWidth : (n.top + o) / qe.innerHeight;
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    a ||
      ScrollTrigger.register(Ge) ||
      console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
      this.init(e, t);
  }
  (te.version = '3.11.0'),
    (te.saveStyles = function (e) {
      return e
        ? nt(e).forEach(function (e) {
            if (e && e.style) {
              var t = W.indexOf(e);
              0 <= t && W.splice(t, 5),
                W.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute('transform'),
                  Ge.core.getCache(e),
                  _creatingMedia
                );
            }
          })
        : W;
    }),
    (te.revert = function (e, t) {
      return Ib(!e, t);
    }),
    (te.create = function (e, t) {
      return new te(e, t);
    }),
    (te.refresh = function (e) {
      return e ? Bb() : (a || te.register()) && V(!0);
    }),
    (te.update = U),
    (te.clearScrollMemory = Jb),
    (te.maxScroll = function (e, t) {
      return Ga(e, t ? je : Je);
    }),
    (te.getScrollFunc = function (e, t) {
      return J(I(e), t ? je : Je);
    }),
    (te.getById = function (e) {
      return zt[e];
    }),
    (te.getAll = function () {
      return Bt.filter(function (e) {
        return 'ScrollSmoother' !== e.vars.id;
      });
    }),
    (te.isScrolling = function () {
      return !!vt;
    }),
    (te.snapDirectional = jb),
    (te.addEventListener = function (e, t) {
      var r = Y[e] || (Y[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (te.removeEventListener = function (e, t) {
      var r = Y[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (te.batch = function (e, t) {
      function ao(e, t) {
        var r = [],
          n = [],
          i = Ge.delayedCall(o, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || i.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && i.progress(1);
        };
      }
      var r,
        n = [],
        i = {},
        o = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        i[r] =
          'on' === r.substr(0, 2) && Ja(t[r]) && 'onRefreshInit' !== r
            ? ao(0, t[r])
            : t[r];
      return (
        Ja(a) &&
          ((a = a()),
          mb(te, 'refresh', function () {
            return (a = t.batchMax());
          })),
        nt(e).forEach(function (e) {
          var t = {};
          for (r in i) t[r] = i[r];
          (t.trigger = e), n.push(te.create(t));
        }),
        n
      );
    });
  function dc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function ec(e, t) {
    !0 === t
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction =
          !0 === t
            ? 'auto'
            : t
            ? 'pan-' + t + (k.isTouch ? ' pinch-zoom' : '')
            : 'none'),
      e === tt && ec(rt, t);
  }
  function gc(e) {
    var t,
      r = e.event,
      n = e.target,
      i = e.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = o._gsap || Ge.core.getCache(o),
      s = bt();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; o && o.scrollHeight <= o.clientHeight; ) o = o.parentNode;
      (a._isScroll =
        o &&
        !Ca(o) &&
        o !== n &&
        (ne[(t = cb(o)).overflowY] || ne[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && 'x' !== i) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function hc(e, t, r, n) {
    return k.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && gc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && mb(et, k.eventTypes[0], oe, !1, !0);
      },
      onDisable: function onDisable() {
        return nb(et, k.eventTypes[0], oe, !0);
      },
    });
  }
  function lc(e) {
    function Zo() {
      return (i = !1);
    }
    function ap() {
      (o = Ga(d, Je)),
        (T = it(C ? 1 : 0, o)),
        f && (_ = it(0, Ga(d, je))),
        (l = j);
    }
    function bp() {
      (h._gsap.y = za(parseFloat(h._gsap.y) + b.offset) + 'px'),
        (h.style.transform =
          'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
          parseFloat(h._gsap.y) +
          ', 0, 1)'),
        (b.offset = b.cacheID = 0);
    }
    function hp() {
      ap(),
        a.isActive() &&
          a.vars.scrollY > o &&
          (b() > o ? a.progress(1) && b(o) : a.resetTo('scrollY', o));
    }
    La(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer');
    var n,
      o,
      l,
      i,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = I(e.target) || tt,
      p = Ge.core.globals().ScrollSmoother,
      g = p && p.get(),
      h =
        C &&
        ((e.content && I(e.content)) ||
          (g && !1 !== e.content && !g.smooth() && g.content())),
      b = J(d, Je),
      v = J(d, je),
      m = 1,
      y =
        (k.isTouch && qe.visualViewport
          ? qe.visualViewport.scale * qe.visualViewport.width
          : qe.outerWidth) / qe.innerWidth,
      x = 0,
      w = Ja(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      S = hc(d, e.type, !0, r),
      _ = ya,
      T = ya;
    return (
      h && Ge.set(h, { y: '+=0' }),
      (e.ignoreCheck = function (e) {
        return (
          (C &&
            'touchmove' === e.type &&
            (function ignoreDrag() {
              if (i) {
                requestAnimationFrame(Zo);
                var e = za(n.deltaY / 2),
                  t = T(b.v - e);
                if (h && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = za((parseFloat(h && h._gsap.y) || 0) - b.offset);
                  (h.style.transform =
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                    r +
                    ', 0, 1)'),
                    (h._gsap.y = r + 'px'),
                    (b.cacheID = P.cache),
                    U();
                }
                return !0;
              }
              b.offset && bp(), (i = !0);
            })()) ||
          (1.05 < m && 'touchstart' !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        var e = m;
        (m = za(((qe.visualViewport && qe.visualViewport.scale) || 1) / y)),
          a.pause(),
          e !== m && ec(d, 1.01 < m || (!f && 'x')),
          (c = v()),
          (u = b()),
          ap(),
          (l = j);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && bp(), t)) {
            P.cache++;
            var r,
              n,
              i = w();
            f &&
              ((n = (r = v()) + (0.05 * i * -e.velocityX) / 0.227),
              (i *= dc(v, r, n, Ga(d, je))),
              (a.vars.scrollX = _(n))),
              (n = (r = b()) + (0.05 * i * -e.velocityY) / 0.227),
              (i *= dc(b, r, n, Ga(d, Je))),
              (a.vars.scrollY = T(n)),
              a.invalidate().duration(i).play(0.01),
              ((C && a.vars.scrollY >= o) || o - 1 <= r) &&
                Ge.to({}, { onUpdate: hp, duration: i });
          } else s.restart(!0);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < bt() - x && ((l = 0), (x = bt()));
      }),
      (e.onChange = function (e, t, r, n, i) {
        if (
          (j !== l && ap(),
          t && f && v(_(n[2] === t ? c + (e.startX - e.x) : v() + t - n[1])),
          r)
        ) {
          b.offset && bp();
          var o = i[2] === r,
            a = o ? u + e.startY - e.y : b() + r - i[1],
            s = T(a);
          o && a !== s && (u += s - a), b(s);
        }
        (r || t) && U();
      }),
      (e.onEnable = function () {
        ec(d, !f && 'x'), mb(qe, 'resize', hp), S.enable();
      }),
      (e.onDisable = function () {
        ec(d, !0), nb(qe, 'resize', hp), S.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new k(e)).iOS = C) && !b() && b(1),
      C && Ge.ticker.add(ya),
      (s = n._dc),
      (a = Ge.to(n, {
        ease: 'power4',
        paused: !0,
        scrollX: f ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var re,
    ne = { auto: 1, scroll: 1 },
    ie = /(input|label|select|textarea)/i,
    oe = function _captureInputs(e) {
      var t = ie.test(e.target.tagName);
      (t || re) && ((e._gsapAllow = !0), (re = t));
    };
  (te.sort = function (e) {
    return Bt.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (te.observe = function (e) {
      return new k(e);
    }),
    (te.normalizeScroll = function (e) {
      if (void 0 === e) return h;
      if (!0 === e && h) return h.enable();
      if (!1 === e) return h && h.kill();
      var t = e instanceof k ? e : lc(e);
      return h && h.target === t.target && h.kill(), Ca(t.target) && (h = t), t;
    }),
    (te.core = {
      _getVelocityProp: K,
      _inputObserver: hc,
      _scrollers: P,
      _proxies: He,
      bridge: {
        ss: function ss() {
          vt || H('scrollStart'), (vt = bt());
        },
        ref: function ref() {
          return at;
        },
      },
    }),
    Ba() && Ge.registerPlugin(te),
    (e.ScrollTrigger = te),
    (e.default = te);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});
