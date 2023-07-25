!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.WebRTCMetrics = e() : t.WebRTCMetrics = e();
}(self, function () {
  return (() => {
    var t = {
        43: function (t, e, s) {
          var a, i;
          !function (o, r) {
            "use strict";

            a = function () {
              var t = function () {},
                e = "undefined",
                s = typeof window !== e && typeof window.navigator !== e && /Trident\/|MSIE /.test(window.navigator.userAgent),
                a = ["trace", "debug", "info", "warn", "error"];
              function i(t, e) {
                var s = t[e];
                if ("function" == typeof s.bind) return s.bind(t);
                try {
                  return Function.prototype.bind.call(s, t);
                } catch (e) {
                  return function () {
                    return Function.prototype.apply.apply(s, [t, arguments]);
                  };
                }
              }
              function o() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
              }
              function r(a) {
                return "debug" === a && (a = "log"), typeof console !== e && ("trace" === a && s ? o : void 0 !== console[a] ? i(console, a) : void 0 !== console.log ? i(console, "log") : t);
              }
              function n(e, s) {
                for (var i = 0; i < a.length; i++) {
                  var o = a[i];
                  this[o] = i < e ? t : this.methodFactory(o, e, s);
                }
                this.log = this.debug;
              }
              function l(t, s, a) {
                return function () {
                  typeof console !== e && (n.call(this, s, a), this[t].apply(this, arguments));
                };
              }
              function _(t, e, s) {
                return r(t) || l.apply(this, arguments);
              }
              function c(t, s, i) {
                var o,
                  r = this,
                  l = "loglevel";
                function c() {
                  var t;
                  if (typeof window !== e && l) {
                    try {
                      t = window.localStorage[l];
                    } catch (t) {}
                    if (typeof t === e) try {
                      var s = window.document.cookie,
                        a = s.indexOf(encodeURIComponent(l) + "=");
                      -1 !== a && (t = /^([^;]+)/.exec(s.slice(a))[1]);
                    } catch (t) {}
                    return void 0 === r.levels[t] && (t = void 0), t;
                  }
                }
                "string" == typeof t ? l += ":" + t : "symbol" == typeof t && (l = void 0), r.name = t, r.levels = {
                  TRACE: 0,
                  DEBUG: 1,
                  INFO: 2,
                  WARN: 3,
                  ERROR: 4,
                  SILENT: 5
                }, r.methodFactory = i || _, r.getLevel = function () {
                  return o;
                }, r.setLevel = function (s, i) {
                  if ("string" == typeof s && void 0 !== r.levels[s.toUpperCase()] && (s = r.levels[s.toUpperCase()]), !("number" == typeof s && s >= 0 && s <= r.levels.SILENT)) throw "log.setLevel() called with invalid level: " + s;
                  if (o = s, !1 !== i && function (t) {
                    var s = (a[t] || "silent").toUpperCase();
                    if (typeof window !== e && l) {
                      try {
                        return void (window.localStorage[l] = s);
                      } catch (t) {}
                      try {
                        window.document.cookie = encodeURIComponent(l) + "=" + s + ";";
                      } catch (t) {}
                    }
                  }(s), n.call(r, s, t), typeof console === e && s < r.levels.SILENT) return "No console available for logging";
                }, r.setDefaultLevel = function (t) {
                  c() || r.setLevel(t, !1);
                }, r.enableAll = function (t) {
                  r.setLevel(r.levels.TRACE, t);
                }, r.disableAll = function (t) {
                  r.setLevel(r.levels.SILENT, t);
                };
                var u = c();
                null == u && (u = null == s ? "WARN" : s), r.setLevel(u, !1);
              }
              var u = new c(),
                d = {};
              u.getLogger = function (t) {
                if ("symbol" != typeof t && "string" != typeof t || "" === t) throw new TypeError("You must supply a name when creating a logger.");
                var e = d[t];
                return e || (e = d[t] = new c(t, u.getLevel(), u.methodFactory)), e;
              };
              var p = typeof window !== e ? window.log : void 0;
              return u.noConflict = function () {
                return typeof window !== e && window.log === u && (window.log = p), u;
              }, u.getLoggers = function () {
                return d;
              }, u.default = u, u;
            }, void 0 === (i = a.call(e, s, e, t)) || (t.exports = i);
          }();
        },
        666: t => {
          var e = function (t) {
            "use strict";

            var e,
              s = Object.prototype,
              a = s.hasOwnProperty,
              i = "function" == typeof Symbol ? Symbol : {},
              o = i.iterator || "@@iterator",
              r = i.asyncIterator || "@@asyncIterator",
              n = i.toStringTag || "@@toStringTag";
            function l(t, e, s) {
              return Object.defineProperty(t, e, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), t[e];
            }
            try {
              l({}, "");
            } catch (t) {
              l = function (t, e, s) {
                return t[e] = s;
              };
            }
            function _(t, e, s, a) {
              var i = e && e.prototype instanceof y ? e : y,
                o = Object.create(i.prototype),
                r = new B(a || []);
              return o._invoke = function (t, e, s) {
                var a = u;
                return function (i, o) {
                  if (a === p) throw new Error("Generator is already running");
                  if (a === h) {
                    if ("throw" === i) throw o;
                    return L();
                  }
                  for (s.method = i, s.arg = o;;) {
                    var r = s.delegate;
                    if (r) {
                      var n = S(r, s);
                      if (n) {
                        if (n === m) continue;
                        return n;
                      }
                    }
                    if ("next" === s.method) s.sent = s._sent = s.arg;else if ("throw" === s.method) {
                      if (a === u) throw a = h, s.arg;
                      s.dispatchException(s.arg);
                    } else "return" === s.method && s.abrupt("return", s.arg);
                    a = p;
                    var l = c(t, e, s);
                    if ("normal" === l.type) {
                      if (a = s.done ? h : d, l.arg === m) continue;
                      return {
                        value: l.arg,
                        done: s.done
                      };
                    }
                    "throw" === l.type && (a = h, s.method = "throw", s.arg = l.arg);
                  }
                };
              }(t, s, r), o;
            }
            function c(t, e, s) {
              try {
                return {
                  type: "normal",
                  arg: t.call(e, s)
                };
              } catch (t) {
                return {
                  type: "throw",
                  arg: t
                };
              }
            }
            t.wrap = _;
            var u = "suspendedStart",
              d = "suspendedYield",
              p = "executing",
              h = "completed",
              m = {};
            function y() {}
            function v() {}
            function f() {}
            var g = {};
            g[o] = function () {
              return this;
            };
            var b = Object.getPrototypeOf,
              k = b && b(b(T([])));
            k && k !== s && a.call(k, o) && (g = k);
            var w = f.prototype = y.prototype = Object.create(g);
            function C(t) {
              ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                  return this._invoke(e, t);
                });
              });
            }
            function x(t, e) {
              function s(i, o, r, n) {
                var l = c(t[i], t, o);
                if ("throw" !== l.type) {
                  var _ = l.arg,
                    u = _.value;
                  return u && "object" == typeof u && a.call(u, "__await") ? e.resolve(u.__await).then(function (t) {
                    s("next", t, r, n);
                  }, function (t) {
                    s("throw", t, r, n);
                  }) : e.resolve(u).then(function (t) {
                    _.value = t, r(_);
                  }, function (t) {
                    return s("throw", t, r, n);
                  });
                }
                n(l.arg);
              }
              var i;
              this._invoke = function (t, a) {
                function o() {
                  return new e(function (e, i) {
                    s(t, a, e, i);
                  });
                }
                return i = i ? i.then(o, o) : o();
              };
            }
            function S(t, s) {
              var a = t.iterator[s.method];
              if (a === e) {
                if (s.delegate = null, "throw" === s.method) {
                  if (t.iterator.return && (s.method = "return", s.arg = e, S(t, s), "throw" === s.method)) return m;
                  s.method = "throw", s.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return m;
              }
              var i = c(a, t.iterator, s.arg);
              if ("throw" === i.type) return s.method = "throw", s.arg = i.arg, s.delegate = null, m;
              var o = i.arg;
              return o ? o.done ? (s[t.resultName] = o.value, s.next = t.nextLoc, "return" !== s.method && (s.method = "next", s.arg = e), s.delegate = null, m) : o : (s.method = "throw", s.arg = new TypeError("iterator result is not an object"), s.delegate = null, m);
            }
            function R(t) {
              var e = {
                tryLoc: t[0]
              };
              1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
            }
            function j(t) {
              var e = t.completion || {};
              e.type = "normal", delete e.arg, t.completion = e;
            }
            function B(t) {
              this.tryEntries = [{
                tryLoc: "root"
              }], t.forEach(R, this), this.reset(!0);
            }
            function T(t) {
              if (t) {
                var s = t[o];
                if (s) return s.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var i = -1,
                    r = function s() {
                      for (; ++i < t.length;) if (a.call(t, i)) return s.value = t[i], s.done = !1, s;
                      return s.value = e, s.done = !0, s;
                    };
                  return r.next = r;
                }
              }
              return {
                next: L
              };
            }
            function L() {
              return {
                value: e,
                done: !0
              };
            }
            return v.prototype = w.constructor = f, f.constructor = v, v.displayName = l(f, n, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function (t) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, l(t, n, "GeneratorFunction")), t.prototype = Object.create(w), t;
            }, t.awrap = function (t) {
              return {
                __await: t
              };
            }, C(x.prototype), x.prototype[r] = function () {
              return this;
            }, t.AsyncIterator = x, t.async = function (e, s, a, i, o) {
              void 0 === o && (o = Promise);
              var r = new x(_(e, s, a, i), o);
              return t.isGeneratorFunction(s) ? r : r.next().then(function (t) {
                return t.done ? t.value : r.next();
              });
            }, C(w), l(w, n, "Generator"), w[o] = function () {
              return this;
            }, w.toString = function () {
              return "[object Generator]";
            }, t.keys = function (t) {
              var e = [];
              for (var s in t) e.push(s);
              return e.reverse(), function s() {
                for (; e.length;) {
                  var a = e.pop();
                  if (a in t) return s.value = a, s.done = !1, s;
                }
                return s.done = !0, s;
              };
            }, t.values = T, B.prototype = {
              constructor: B,
              reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(j), !t) for (var s in this) "t" === s.charAt(0) && a.call(this, s) && !isNaN(+s.slice(1)) && (this[s] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var s = this;
                function i(a, i) {
                  return n.type = "throw", n.arg = t, s.next = a, i && (s.method = "next", s.arg = e), !!i;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var r = this.tryEntries[o],
                    n = r.completion;
                  if ("root" === r.tryLoc) return i("end");
                  if (r.tryLoc <= this.prev) {
                    var l = a.call(r, "catchLoc"),
                      _ = a.call(r, "finallyLoc");
                    if (l && _) {
                      if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                      if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                    } else if (l) {
                      if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                    } else {
                      if (!_) throw new Error("try statement without catch or finally");
                      if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                  var i = this.tryEntries[s];
                  if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                    var o = i;
                    break;
                  }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var r = o ? o.completion : {};
                return r.type = t, r.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(r);
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m;
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var s = this.tryEntries[e];
                  if (s.finallyLoc === t) return this.complete(s.completion, s.afterLoc), j(s), m;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var s = this.tryEntries[e];
                  if (s.tryLoc === t) {
                    var a = s.completion;
                    if ("throw" === a.type) {
                      var i = a.arg;
                      j(s);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, s, a) {
                return this.delegate = {
                  iterator: T(t),
                  resultName: s,
                  nextLoc: a
                }, "next" === this.method && (this.arg = e), m;
              }
            }, t;
          }(t.exports);
          try {
            regeneratorRuntime = e;
          } catch (t) {
            Function("r", "regeneratorRuntime = r")(e);
          }
        },
        913: t => {
          var e = (() => {
            var t = Object.defineProperty,
              e = Object.getOwnPropertySymbols,
              s = Object.prototype.hasOwnProperty,
              a = Object.prototype.propertyIsEnumerable,
              i = (e, s, a) => s in e ? t(e, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
              }) : e[s] = a,
              o = (t, o) => {
                for (var r in o || (o = {})) s.call(o, r) && i(t, r, o[r]);
                if (e) for (var r of e(o)) a.call(o, r) && i(t, r, o[r]);
                return t;
              },
              r = {};
            ((e, s) => {
              for (var a in (e => {
                t(e, "__esModule", {
                  value: !0
                });
              })(e), s) t(e, a, {
                get: s[a],
                enumerable: !0
              });
            })(r, {
              DEFAULT_UUID_LENGTH: () => n,
              default: () => c
            });
            var n = 6,
              l = {
                dictionary: "alphanum",
                shuffle: !0,
                debug: !1,
                length: n
              },
              _ = class extends Function {
                constructor(t = {}) {
                  super(), this.dictIndex = 0, this.dictRange = [], this.lowerBound = 0, this.upperBound = 0, this.dictLength = 0, this._digit_first_ascii = 48, this._digit_last_ascii = 58, this._alpha_lower_first_ascii = 97, this._alpha_lower_last_ascii = 123, this._hex_last_ascii = 103, this._alpha_upper_first_ascii = 65, this._alpha_upper_last_ascii = 91, this._number_dict_ranges = {
                    digits: [this._digit_first_ascii, this._digit_last_ascii]
                  }, this._alpha_dict_ranges = {
                    lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
                    upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
                  }, this._alpha_lower_dict_ranges = {
                    lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
                  }, this._alpha_upper_dict_ranges = {
                    upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
                  }, this._alphanum_dict_ranges = {
                    digits: [this._digit_first_ascii, this._digit_last_ascii],
                    lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
                    upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
                  }, this._alphanum_lower_dict_ranges = {
                    digits: [this._digit_first_ascii, this._digit_last_ascii],
                    lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
                  }, this._alphanum_upper_dict_ranges = {
                    digits: [this._digit_first_ascii, this._digit_last_ascii],
                    upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
                  }, this._hex_dict_ranges = {
                    decDigits: [this._digit_first_ascii, this._digit_last_ascii],
                    alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
                  }, this.log = (...t) => {
                    const e = [...t];
                    if (e[0] = `[short-unique-id] ${t[0]}`, !0 === this.debug && "undefined" != typeof console && null !== console) return console.log(...e);
                  }, this.setDictionary = (t, e) => {
                    let s;
                    if (t && Array.isArray(t) && t.length > 1) s = t;else {
                      let e;
                      s = [], this.dictIndex = e = 0;
                      const a = this[`_${t}_dict_ranges`];
                      Object.keys(a).forEach(t => {
                        const i = t;
                        for (this.dictRange = a[i], this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1], this.dictIndex = e = this.lowerBound; this.lowerBound <= this.upperBound ? e < this.upperBound : e > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? e += 1 : e -= 1) s.push(String.fromCharCode(this.dictIndex));
                      });
                    }
                    if (e) {
                      const t = .5;
                      s = s.sort(() => Math.random() - t);
                    }
                    this.dict = s, this.dictLength = this.dict.length, this.counter = 0;
                  }, this.seq = () => this.sequentialUUID(), this.sequentialUUID = () => {
                    let t,
                      e,
                      s = "";
                    t = this.counter;
                    do {
                      e = t % this.dictLength, t = Math.trunc(t / this.dictLength), s += this.dict[e];
                    } while (0 !== t);
                    return this.counter += 1, s;
                  }, this.randomUUID = (t = this.uuidLength || n) => {
                    let e, s, a;
                    if (null == t || t < 1) throw new Error("Invalid UUID Length Provided");
                    for (e = "", a = 0; a < t; a += 1) s = parseInt((Math.random() * this.dictLength).toFixed(0), 10) % this.dictLength, e += this.dict[s];
                    return e;
                  }, this.availableUUIDs = (t = this.uuidLength) => parseFloat(Math.pow([...new Set(this.dict)].length, t).toFixed(0)), this.approxMaxBeforeCollision = (t = this.availableUUIDs(this.uuidLength)) => parseFloat(Math.sqrt(Math.PI / 2 * t).toFixed(20)), this.collisionProbability = (t = this.availableUUIDs(this.uuidLength), e = this.uuidLength) => parseFloat((this.approxMaxBeforeCollision(t) / this.availableUUIDs(e)).toFixed(20)), this.uniqueness = (t = this.availableUUIDs(this.uuidLength)) => {
                    const e = parseFloat((1 - this.approxMaxBeforeCollision(t) / t).toFixed(20));
                    return e > 1 ? 1 : e < 0 ? 0 : e;
                  }, this.getVersion = () => this.version, this.stamp = t => {
                    if ("number" != typeof t || t < 10) throw new Error("Param finalLength must be number greater than 10");
                    const e = Math.floor(+new Date() / 1e3).toString(16),
                      s = t - 9,
                      a = Math.round(Math.random() * (s > 15 ? 15 : s)),
                      i = this.randomUUID(s);
                    return `${i.substr(0, a)}${e}${i.substr(a)}${a.toString(16)}`;
                  }, this.parseStamp = t => {
                    if (t.length < 10) throw new Error("Stamp length invalid");
                    const e = parseInt(t.substr(t.length - 1, 1), 16);
                    return new Date(1e3 * parseInt(t.substr(e, 8), 16));
                  };
                  const e = o(o({}, l), t);
                  this.counter = 0, this.debug = !1, this.dict = [], this.version = "4.4.4";
                  const {
                    dictionary: s,
                    shuffle: a,
                    length: i
                  } = e;
                  return this.uuidLength = i, this.setDictionary(s, a), this.debug = e.debug, this.log(this.dict), this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`), new Proxy(this, {
                    apply: (t, e, s) => this.randomUUID(...s)
                  });
                }
              },
              c = _;
            return c.default = _, r;
          })();
          t.exports = e.default, "undefined" != typeof window && (e = e.default);
        }
      },
      e = {};
    function s(a) {
      var i = e[a];
      if (void 0 !== i) return i.exports;
      var o = e[a] = {
        exports: {}
      };
      return t[a].call(o.exports, o, o.exports, s), o.exports;
    }
    s.n = t => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return s.d(e, {
        a: e
      }), e;
    }, s.d = (t, e) => {
      for (var a in e) s.o(e, a) && !s.o(t, a) && Object.defineProperty(t, a, {
        enumerable: !0,
        get: e[a]
      });
    }, s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var a = {};
    return (() => {
      "use strict";

      s.d(a, {
        default: () => Ft
      }), s(666);
      var t = s(43);
      const e = () => `${new Date().toISOString()} | metrics`,
        i = (t, e, s) => `${t} | ${e} | ${s}`;
      t.setDefaultLevel(t.levels.TRACE);
      const o = (s, a, o) => {
          o ? t.debug(i(e(), s, a), o) : t.debug(i(e(), s, a));
        },
        r = (s, a) => {
          t.info(i(e(), s, a));
        },
        n = (s, a) => {
          t.info(i(e(), s, a));
        },
        l = (s, a) => {
          t.warn(i(e(), s, a));
        },
        _ = (s, a) => {
          t.error(i(e(), s, a));
        };
      var c = s(913),
        u = s.n(c);
      const d = new (u())(),
        p = "inbound",
        h = "outbound",
        m = "idle",
        y = "running",
        v = {
          level_in: 0,
          codec_id_in: "",
          codec_in: {
            mime_type: null,
            clock_rate: null,
            sdp_fmtp_line: null
          },
          track_in: "",
          ssrc: "",
          direction: p,
          delta_jitter_ms_in: 0,
          delta_rtt_ms_in: null,
          delta_packets_in: 0,
          delta_packets_lost_in: 0,
          delta_KBytes_in: 0,
          delta_kbs_in: 0,
          delta_synthetized_ms_in: 0,
          delta_playout_delay_ms_in: 0,
          delta_jitter_buffer_delay_ms_in: 0,
          total_rtt_ms_in: 0,
          total_rtt_measure_in: 0,
          total_packets_in: 0,
          total_packets_lost_in: 0,
          total_KBytes_in: 0,
          total_percent_synthetized_in: 0,
          total_synthetized_ms_in: 0,
          total_playout_ms_in: 0,
          total_time_jitter_buffer_delay_in: 0,
          total_jitter_emitted_in: 0,
          percent_synthetized_in: 0,
          timestamp_in: null,
          mos_in: 1,
          mos_emodel_in: 1,
          mos_fullband_in: 1,
          percent_packets_lost_in: 0
        },
        f = {
          active_out: null,
          level_out: 0,
          codec_id_out: "",
          codec_out: {
            mime_type: null,
            clock_rate: null,
            sdp_fmtp_line: null
          },
          track_out: "",
          device_out: "",
          ssrc: "",
          direction: h,
          delta_jitter_ms_out: 0,
          delta_rtt_ms_out: null,
          delta_packet_delay_ms_out: 0,
          delta_packets_lost_out: 0,
          delta_packets_out: 0,
          delta_KBytes_out: 0,
          delta_kbs_out: 0,
          percent_packets_lost_out: 0,
          total_rtt_ms_out: 0,
          total_rtt_measure_out: 0,
          total_time_packets_delay_out: 0,
          total_packets_lost_out: 0,
          total_packets_out: 0,
          total_KBytes_out: 0,
          timestamp_out: null,
          mos_out: 1,
          mos_emodel_out: 1,
          mos_fullband_out: 1
        },
        g = {
          codec_id_in: "",
          codec_in: {
            mime_type: null,
            clock_rate: null
          },
          direction: p,
          decoder_in: null,
          track_in: "",
          ssrc: "",
          size_in: {
            width: 0,
            height: 0,
            framerate: 0
          },
          delta_jitter_ms_in: 0,
          delta_packets_in: 0,
          delta_packets_lost_in: 0,
          delta_KBytes_in: 0,
          delta_kbs_in: 0,
          delta_glitch_in: {
            freeze: 0,
            pause: 0
          },
          delta_decode_frame_ms_in: 0,
          delta_processing_delay_ms_in: 0,
          delta_assembly_delay_ms_in: 0,
          delta_nack_sent_in: 0,
          delta_pli_sent_in: 0,
          delta_jitter_buffer_delay_ms_in: 0,
          percent_packets_lost_in: 0,
          total_packets_in: 0,
          total_packets_lost_in: 0,
          total_KBytes_in: 0,
          total_glitch_in: {
            freeze: 0,
            pause: 0
          },
          total_frames_decoded_in: 0,
          total_time_decoded_in: 0,
          total_time_processing_delay_in: 0,
          total_time_assembly_delay_in: 0,
          total_time_jitter_buffer_delay_in: 0,
          total_jitter_emitted_in: 0,
          total_nack_sent_in: 0,
          total_pli_sent_in: 0
        },
        b = {
          active_out: null,
          codec_id_out: "",
          codec_out: {
            mime_type: null,
            clock_rate: null
          },
          track_out: "",
          device_out: "",
          ssrc: "",
          direction: h,
          encoder_out: null,
          size_out: {
            width: 0,
            height: 0,
            framerate: 0
          },
          size_pref_out: {
            width: 0,
            height: 0,
            framerate: 0
          },
          delta_jitter_ms_out: 0,
          delta_rtt_ms_out: null,
          delta_packet_delay_ms_out: 0,
          delta_packets_lost_out: 0,
          delta_packets_out: 0,
          delta_KBytes_out: 0,
          delta_kbs_out: 0,
          delta_encode_frame_ms_out: 0,
          delta_nack_received_out: 0,
          delta_pli_received_out: 0,
          total_rtt_ms_out: 0,
          total_rtt_measure_out: 0,
          total_time_packets_delay_out: 0,
          total_packets_lost_out: 0,
          total_packets_out: 0,
          total_KBytes_out: 0,
          total_time_encoded_out: 0,
          total_frames_encoded_out: 0,
          total_nack_received_out: 0,
          total_pli_received_out: 0,
          percent_packets_lost_out: 0,
          limitation_out: {
            reason: null,
            durations: null,
            resolutionChanges: 0
          },
          timestamp_out: null
        },
        k = {
          refreshEvery: 2e3,
          startAfter: 0,
          stopAfter: -1,
          verbose: !1,
          pname: `p-${d()}`,
          cid: `c-${d()}`,
          uid: `u-${d()}`,
          record: !1,
          ticket: !0,
          passthrough: {}
        },
        w = "inbound-rtp",
        C = "bytesReceived",
        x = "currentRoundTripTime",
        S = "fractionLost",
        R = "frameHeight",
        j = "frameWidth",
        B = "framesDecoded",
        T = "framesEncoded",
        L = "freezeCount",
        O = "qualityLimitationReason",
        N = "qualityLimitationDurations",
        E = "qualityLimitationResolutionChanges",
        K = "jitter",
        P = "nackCount",
        I = "networkType",
        $ = "packetsLost",
        D = "packetsReceived",
        z = "pauseCount",
        M = "pliCount",
        A = "responsesReceived",
        F = "roundTripTime",
        U = "selected",
        J = "totalDecodeTime",
        q = "totalEncodeTime",
        G = "totalRoundTripTime",
        W = "roundTripTimeMeasurements",
        H = "audio",
        Y = "video",
        V = "data",
        Q = "audio",
        X = "video",
        Z = "network",
        tt = "data",
        et = "config      ",
        st = new (u())(),
        at = (t, e, s, a = !1, i, o = !1) => {
          let r = t.map(t => {
            if (!s) return o ? {
              timestamp: new Date(t.timestamp).toJSON(),
              value: t[e]
            } : t[e];
            if (!i) return o ? {
              timestamp: new Date(t.timestamp).toJSON(),
              value: t[e][s]
            } : t[e][s];
            const a = t[e][i];
            return a ? o ? {
              timestamp: new Date(t.timestamp).toJSON(),
              value: a[s]
            } : a[s] : null;
          });
          return r = r.filter(t => o ? a ? t && Number.isFinite(t.value) && t.value > 0 : t && Number.isFinite(t.value) : a ? Number.isFinite(t) && t > 0 : Number.isFinite(t)), 0 === r.length ? [] : r;
        },
        it = (t, e) => {
          const s = t.filter(t => null !== t);
          return s.length > 0 ? s.reduce((t, e) => t + e, 0) / t.length : e;
        },
        ot = t => new Promise(e => setTimeout(e, t)),
        rt = (t, e, s) => {
          e ? t.call(e, s) : t(s);
        },
        nt = (t, e, s, a) => {
          const i = at(t, e, s, !0, a);
          if (0 === i.length) return null;
          const o = i.reduce((t, e) => t + e, 0) / i.length;
          return 0 === o ? null : i.map(t => Math.abs(o - t)).reduce((t, e) => t + e, 0) / i.length * 100 / o;
        },
        lt = (t, e, s, a = !1, i) => {
          const o = at(t, e, s, a, i);
          return 0 === o.length ? null : o.reduce((t, e) => t + e, 0) / o.length;
        },
        _t = (t, e, s) => at(t, e, s).reduce((t, e) => t + e, 0),
        ct = (t, e, s, a) => {
          const i = at(t, e, s, !0, a);
          return 0 === i.length ? null : Math.min(...i);
        },
        ut = (t, e, s, a) => {
          const i = at(t, e, s, !1, a);
          return 0 === i.length ? null : Math.max(...i);
        },
        dt = (t, e, s, a) => at(t, e, s, !1, a, !0),
        pt = (t, e, s, a) => {
          const i = t.slice().pop();
          if (!i) return null;
          if (!s) return i[e];
          if (!a) return i[e][s];
          const o = i[e][a];
          return o ? o[s] : null;
        },
        ht = (t, e, s) => {
          if (!e) return null;
          const a = {};
          let i = e.audio[t];
          i || (i = s === p ? {
            ...v
          } : {
            ...f
          }), a.audio = i;
          let o = e.video[t];
          return o || (o = s === p ? {
            ...g
          } : {
            ...b
          }), a.video = o, a;
        },
        mt = (t, e) => {
          const s = e.getSenders().find(e => e.track && e.track.kind === t);
          return s ? s.track : null;
        },
        yt = t => Math.round(100 * t) / 100,
        vt = "exporter    ",
        ft = (t, e, s, a = !1) => {
          if (!t || 0 === t.length) return 0;
          const i = t[t.length - 1];
          if (!i) return 0;
          const o = i[e][s];
          if (o) {
            const i = a ? o.total_rtt_ms_in : o.total_rtt_ms_out,
              r = a ? o.total_rtt_measure_in : o.total_rtt_measure_out;
            return r && i ? Number(i / r) : lt(t, e, a ? "delta_rtt_ms_in" : "delta_rtt_ms_out", !1, s);
          }
          return null;
        },
        gt = (t, e) => {
          if (!t || 0 === t.length) return 0;
          const s = t[t.length - 1];
          if (!s) return 0;
          const a = s[e].total_rtt_connectivity_ms,
            i = s[e].total_rtt_connectivity_measure;
          return i && a ? Number(a / i) : lt(t, e, "delta_rtt_connectivity_ms");
        },
        bt = t => {
          const e = pt(t, "network", "remote_candidate_type"),
            s = pt(t, "network", "remote_candidate_protocol");
          return "relay" !== e ? `direct/${s}` : `turn/${s}`;
        };
      class kt {
        constructor(t) {
          this._start = null, this._end = null, this._cfg = t, this._referenceReport = null, this._reports = [], this._events = [];
        }
        start() {
          r(vt, "start() - start exporter...");
          const t = new Date();
          return this._start = t.toJSON(), t;
        }
        stop() {
          r(vt, "stop() - stop exporter...");
          const t = new Date();
          return this._end = t.toJSON(), t;
        }
        saveReferenceReport(t) {
          this._referenceReport = t;
        }
        getReferenceReport() {
          return this._referenceReport;
        }
        addReport(t) {
          this._cfg.ticket && (o(vt, `addReport() - add report to exporter at ${t.timestamp}`), this._reports.push(t));
        }
        addCustomEvent(t) {
          this._events.push(t);
        }
        reset() {
          r(vt, "resetReports() - reset reports"), this._reports = [], this._referenceReport = null, this._start = null, this._end = null;
        }
        generateTicket() {
          o(vt, "ticket() - generate ticket");
          const t = pt(this._reports, "audio", "total_packets_lost_in"),
            e = pt(this._reports, "audio", "total_packets_in"),
            s = pt(this._reports, "video", "total_packets_lost_in"),
            a = pt(this._reports, "video", "total_packets_in"),
            i = {},
            r = this._reports.slice().pop();
          return r && (Object.keys(r.audio).forEach(t => {
            const e = r.audio[t];
            if (i[e.ssrc] = {
              type: H,
              direction: e.direction
            }, e.direction === p) {
              const e = {
                  avg: lt(this._reports, H, "delta_jitter_ms_in", !1, t),
                  min: ct(this._reports, H, "delta_jitter_ms_in", t),
                  max: ut(this._reports, H, "delta_jitter_ms_in", t),
                  volatility: nt(this._reports, H, "delta_jitter_ms_in", t),
                  values: dt(this._reports, H, "delta_jitter_ms_in", t),
                  _unit: {
                    avg: "ms",
                    min: "ms",
                    max: "ms",
                    volatility: "percent"
                  }
                },
                s = {
                  avg: lt(this._reports, H, "delta_kbs_in", !1, t),
                  min: ct(this._reports, H, "delta_kbs_in", t),
                  max: ut(this._reports, H, "delta_kbs_in", t),
                  volatility: nt(this._reports, H, "delta_kbs_in", t),
                  values: dt(this._reports, H, "delta_kbs_in", t),
                  _unit: {
                    avg: "kbs",
                    min: "kbs",
                    max: "kbs",
                    volatility: "percent"
                  }
                },
                a = {
                  avg: lt(this._reports, H, "delta_KBytes_in", !1, t),
                  min: ct(this._reports, H, "delta_KBytes_in", t),
                  max: ut(this._reports, H, "delta_KBytes_in", t),
                  volatility: nt(this._reports, H, "delta_KBytes_in", t),
                  values: dt(this._reports, H, "delta_KBytes_in", t),
                  _unit: {
                    avg: "KB",
                    min: "KB",
                    max: "KB",
                    volatility: "percent"
                  }
                },
                o = {
                  emodel: {
                    avg: lt(this._reports, H, "mos_fullband_in", !1, t),
                    min: ct(this._reports, H, "mos_fullband_in", t),
                    max: ut(this._reports, H, "mos_fullband_in", t),
                    volatility: nt(this._reports, H, "mos_fullband_in", t),
                    values: dt(this._reports, H, "mos_fullband_in", t)
                  },
                  effective: {
                    avg: lt(this._reports, H, "mos_in", !1, t),
                    min: ct(this._reports, H, "mos_in", t),
                    max: ut(this._reports, H, "mos_in", t),
                    volatility: nt(this._reports, H, "mos_in", t),
                    values: dt(this._reports, H, "mos_in", t)
                  },
                  _unit: {
                    avg: "number (1-5)",
                    min: "number (1-5)",
                    max: "number (1-5)",
                    volatility: "percent"
                  }
                },
                r = pt(this._reports, H, "total_packets_lost_in", t),
                n = pt(this._reports, H, "total_packets_in", t),
                l = {
                  lost: r,
                  avg: Math.round(100 * (r / (r + n) * 100 || 0)) / 100,
                  values: dt(this._reports, H, "delta_packets_lost_in", t),
                  _unit: {
                    avg: "percent",
                    lost: "number"
                  }
                },
                _ = {
                  avg: ft(this._reports, H, t, !0),
                  min: ct(this._reports, H, "delta_rtt_ms_in", t),
                  max: ut(this._reports, H, "delta_rtt_ms_in", t),
                  volatility: nt(this._reports, H, "delta_rtt_ms_in", t),
                  values: dt(this._reports, H, "delta_rtt_ms_in", t),
                  _unit: {
                    avg: "ms",
                    min: "ms",
                    max: "ms",
                    volatility: "percent"
                  }
                };
              i[t].jitter = e, i[t].rtt = _, i[t].mos = o, i[t].traffic = a, i[t].bitrate = s, i[t].loss = l;
            } else {
              const e = {
                  avg: lt(this._reports, H, "delta_jitter_ms_out", !1, t),
                  min: ct(this._reports, H, "delta_jitter_ms_out", t),
                  max: ut(this._reports, H, "delta_jitter_ms_out", t),
                  volatility: nt(this._reports, H, "delta_jitter_ms_out", t),
                  values: dt(this._reports, H, "delta_jitter_ms_out", t),
                  _unit: {
                    avg: "ms",
                    min: "ms",
                    max: "ms",
                    volatility: "percent"
                  }
                },
                s = {
                  avg: lt(this._reports, H, "delta_kbs_out", !1, t),
                  min: ct(this._reports, H, "delta_kbs_out", t),
                  max: ut(this._reports, H, "delta_kbs_out", t),
                  volatility: nt(this._reports, H, "delta_kbs_out", t),
                  values: dt(this._reports, H, "delta_kbs_out", t),
                  _unit: {
                    avg: "kbs",
                    min: "kbs",
                    max: "kbs",
                    volatility: "percent"
                  }
                },
                a = {
                  avg: lt(this._reports, H, "delta_KBytes_out", !1, t),
                  min: ct(this._reports, H, "delta_KBytes_out", t),
                  max: ut(this._reports, H, "delta_KBytes_out", t),
                  volatility: nt(this._reports, H, "delta_KBytes_out", t),
                  values: dt(this._reports, H, "delta_KBytes_out", t),
                  _unit: {
                    avg: "KB",
                    min: "KB",
                    max: "KB",
                    bitrate: "kbs",
                    volatility: "percent"
                  }
                },
                o = {
                  avg: ft(this._reports, H, t),
                  min: ct(this._reports, H, "delta_rtt_ms_out", t),
                  max: ut(this._reports, H, "delta_rtt_ms_out", t),
                  volatility: nt(this._reports, H, "delta_rtt_ms_out", t),
                  values: dt(this._reports, H, "delta_rtt_ms_out", t),
                  _unit: {
                    avg: "ms",
                    min: "ms",
                    max: "ms",
                    volatility: "percent"
                  }
                },
                r = pt(this._reports, H, "total_packets_lost_out", t),
                n = pt(this._reports, H, "total_packets_out", t),
                l = {
                  lost: r,
                  avg: Math.round(100 * (r / (r + n) * 100 || 0)) / 100,
                  values: dt(this._reports, H, "delta_packets_lost_out", t),
                  _unit: {
                    avg: "percent",
                    lost: "number"
                  }
                },
                _ = {
                  emodel: {
                    avg: lt(this._reports, H, "mos_fullband_out", !1, t),
                    min: ct(this._reports, H, "mos_fullband_out", t),
                    max: ut(this._reports, H, "mos_fullband_out", t),
                    volatility: nt(this._reports, H, "mos_fullband_out", t),
                    values: dt(this._reports, H, "mos_fullband_out", t)
                  },
                  effective: {
                    avg: lt(this._reports, H, "mos_out", !1, t),
                    min: ct(this._reports, H, "mos_out", t),
                    max: ut(this._reports, H, "mos_out", t),
                    volatility: nt(this._reports, H, "mos_out", t),
                    values: dt(this._reports, H, "mos_out", t)
                  },
                  _unit: {
                    avg: "number (1-5)",
                    min: "number (1-5)",
                    max: "number (1-5)",
                    volatility: "percent"
                  }
                };
              i[t].jitter = e, i[t].rtt = o, i[t].traffic = a, i[t].bitrate = s, i[t].loss = l, i[t].mos = _;
            }
          }), Object.keys(r.video).forEach(t => {
            const e = r.video[t];
            if (i[t] = {
              type: Y,
              direction: e.direction
            }, e.direction === p) {
              const e = {
                  avg: lt(this._reports, Y, "delta_jitter_ms_in", !1, t),
                  min: ct(this._reports, Y, "delta_jitter_ms_in", t),
                  max: ut(this._reports, Y, "delta_jitter_ms_in", t),
                  volatility: nt(this._reports, Y, "delta_jitter_ms_in", t),
                  values: dt(this._reports, Y, "delta_jitter_ms_in", t),
                  _unit: {
                    avg: "ms",
                    min: "ms",
                    max: "ms",
                    volatility: "percent"
                  }
                },
                s = {
                  avg: lt(this._reports, Y, "delta_kbs_in", !1, t),
                  min: ct(this._reports, Y, "delta_kbs_in", t),
                  max: ut(this._reports, Y, "delta_kbs_in", t),
                  volatility: nt(this._reports, Y, "delta_kbs_in", t),
                  values: dt(this._reports, Y, "delta_kbs_in", t),
                  _unit: {
                    avg: "kbs",
                    min: "kbs",
                    max: "kbs",
                    volatility: "percent"
                  }
                },
                a = {
                  avg: lt(this._reports, Y, "delta_KBytes_in", !1, t),
                  min: ct(this._reports, Y, "delta_KBytes_in", t),
                  max: ut(this._reports, Y, "delta_KBytes_in", t),
                  volatility: nt(this._reports, Y, "delta_KBytes_in", t),
                  values: dt(this._reports, Y, "delta_KBytes_in", t),
                  _unit: {
                    avg: "KB",
                    min: "KB",
                    max: "KB",
                    volatility: "percent"
                  }
                },
                o = pt(this._reports, Y, "total_packets_lost_in", t),
                r = pt(this._reports, Y, "total_packets_in", t),
                n = {
                  lost: o,
                  avg: Math.round(100 * (o / (o + r) * 100 || 0)) / 100,
                  values: dt(this._reports, Y, "delta_packets_lost_in", t),
                  _unit: {
                    avg: "percent",
                    lost: "number"
                  }
                };
              i[t].jitter = e, i[t].traffic = a, i[t].bitrate = s, i[t].loss = n;
            } else {
              const e = {
                  avg: lt(this._reports, Y, "delta_jitter_ms_out", !1, t),
                  min: ct(this._reports, Y, "delta_jitter_ms_out", t),
                  max: ut(this._reports, Y, "delta_jitter_ms_out", t),
                  volatility: nt(this._reports, Y, "delta_jitter_ms_out", t),
                  values: dt(this._reports, Y, "delta_jitter_ms_out", t),
                  _unit: {
                    avg: "ms",
                    min: "ms",
                    max: "ms",
                    volatility: "percent"
                  }
                },
                s = {
                  avg: lt(this._reports, Y, "delta_kbs_out", !1, t),
                  min: ct(this._reports, Y, "delta_kbs_out", t),
                  max: ut(this._reports, Y, "delta_kbs_out", t),
                  volatility: nt(this._reports, Y, "delta_kbs_out", t),
                  values: dt(this._reports, Y, "delta_kbs_out", t),
                  _unit: {
                    avg: "kbs",
                    min: "kbs",
                    max: "kbs",
                    volatility: "percent"
                  }
                },
                a = {
                  avg: lt(this._reports, Y, "delta_KBytes_out", !1, t),
                  min: ct(this._reports, Y, "delta_KBytes_out", t),
                  max: ut(this._reports, Y, "delta_KBytes_out", t),
                  volatility: nt(this._reports, Y, "delta_KBytes_out", t),
                  values: dt(this._reports, Y, "delta_KBytes_out", t),
                  _unit: {
                    avg: "KB",
                    min: "KB",
                    max: "KB",
                    volatility: "percent"
                  }
                },
                o = {
                  avg: ft(this._reports, Y, t),
                  min: ct(this._reports, Y, "delta_rtt_ms_out", t),
                  max: ut(this._reports, Y, "delta_rtt_ms_out", t),
                  volatility: nt(this._reports, Y, "delta_rtt_ms_out", t),
                  values: dt(this._reports, Y, "delta_rtt_ms_out", t),
                  _unit: {
                    avg: "ms",
                    min: "ms",
                    max: "ms",
                    volatility: "percent"
                  }
                },
                r = pt(this._reports, Y, "total_packets_lost_out", t),
                n = pt(this._reports, Y, "total_packets_out", t),
                l = {
                  lost: r,
                  avg: Math.round(100 * (r / (r + n) * 100 || 0)) / 100,
                  values: dt(this._reports, Y, "delta_packets_lost_out", t),
                  _unit: {
                    avg: "percent",
                    lost: "number"
                  }
                };
              i[t].jitter = e, i[t].rtt = o, i[t].traffic = a, i[t].bitrate = s, i[t].loss = l, i[t].limitations = ((t, e, s) => {
                const a = {
                  other: 0,
                  cpu: 0,
                  bandwidth: 0,
                  none: 100
                };
                if (!t || 0 === t.length) return a;
                const i = t[t.length - 1].video[s];
                if (!i) return a;
                if (!("limitation_out" in i) || !("durations" in i.limitation_out)) return a;
                if (!i.limitation_out.durations) return a;
                const {
                    other: o,
                    bandwidth: r,
                    cpu: n,
                    none: l
                  } = i.limitation_out.durations,
                  _ = Number(o) + Number(r) + Number(n) + Number(l);
                return {
                  other: +(o / _ * 100).toFixed(2),
                  cpu: +(n / _ * 100).toFixed(2),
                  bandwidth: +(r / _ * 100).toFixed(2),
                  none: +(l / _ * 100).toFixed(2)
                };
              })(this._reports, 0, t);
            }
          })), {
            version: "2.0",
            configuration: {
              frequency: this._cfg.refreshEvery
            },
            started: this._start,
            ended: this._end,
            ua: {
              agent: navigator.userAgent,
              pname: this._cfg.pname,
              user_id: this._cfg.uid
            },
            call: {
              call_id: this._cfg.cid,
              events: this._events
            },
            details: {
              count: this._reports.length,
              reports: this._cfg.record ? this._reports : [],
              reference: this._referenceReport || null
            },
            ssrc: i,
            data: {
              rtt: {
                avg: gt(this._reports, "data"),
                min: ct(this._reports, V, "delta_rtt_connectivity_ms"),
                max: ut(this._reports, V, "delta_rtt_connectivity_ms"),
                volatility: nt(this._reports, V, "delta_rtt_connectivity_ms"),
                values: dt(this._reports, V, "delta_rtt_connectivity_ms"),
                _unit: {
                  avg: "ms",
                  min: "ms",
                  max: "ms",
                  volatility: "percent"
                }
              },
              packetsLost: {
                audio: {
                  in: {
                    avg: Math.round(100 * (t / (t + e) * 100 || 0)) / 100
                  }
                },
                video: {
                  in: {
                    avg: Math.round(100 * (s / (s + a) * 100 || 0)) / 100
                  }
                },
                unit: {
                  avg: "percent"
                }
              },
              bitrate: {
                in: {
                  avg: lt(this._reports, "data", "delta_kbs_in"),
                  min: ct(this._reports, "data", "delta_kbs_in"),
                  max: ut(this._reports, "data", "delta_kbs_in"),
                  volatility: nt(this._reports, "data", "delta_kbs_in"),
                  values: dt(this._reports, V, "delta_kbs_in")
                },
                out: {
                  avg: lt(this._reports, "data", "delta_kbs_out"),
                  min: ct(this._reports, "data", "delta_kbs_out"),
                  max: ut(this._reports, "data", "delta_kbs_out"),
                  volatility: nt(this._reports, "data", "delta_kbs_out"),
                  values: dt(this._reports, V, "delta_kbs_out")
                },
                unit: {
                  avg: "kbs",
                  min: "kbs",
                  max: "kbs",
                  volatility: "percent"
                }
              },
              traffic: {
                in: {
                  avg: lt(this._reports, "data", "delta_KBytes_in"),
                  min: ct(this._reports, "data", "delta_KBytes_in"),
                  max: ut(this._reports, "data", "delta_KBytes_in"),
                  volatility: nt(this._reports, "data", "delta_KBytes_in"),
                  values: dt(this._reports, V, "delta_KBytes_in")
                },
                out: {
                  avg: lt(this._reports, "data", "delta_KBytes_out"),
                  min: ct(this._reports, "data", "delta_KBytes_out"),
                  max: ut(this._reports, "data", "delta_KBytes_out"),
                  volatility: nt(this._reports, "data", "delta_KBytes_out"),
                  values: dt(this._reports, V, "delta_KBytes_out")
                },
                unit: {
                  avg: "KBytes",
                  min: "KBytes",
                  max: "KBytes",
                  volatility: "percent"
                }
              },
              network: {
                localConnection: (n = this._reports, "relay" !== pt(n, "network", "local_candidate_type") ? `direct/${pt(n, "network", "local_candidate_protocol")}` : `turn/${pt(n, "network", "local_candidate_relay_protocol")}`),
                remoteConnection: bt(this._reports)
              }
            }
          };
          var n;
        }
        updateConfig(t) {
          this._cfg = t;
        }
        getLastReport() {
          return this._reports.slice().pop() || null;
        }
        getBeforeLastReport() {
          const t = this._reports.slice();
          return t.pop(), t.pop() || null;
        }
        getReportsNumber() {
          return this._reports.length;
        }
      }
      const wt = (t, e, s, a) => {
          let i = !1;
          const o = a[e].total_rtt_ms_out,
            r = a[e].total_rtt_measure_out,
            n = s ? s[e].total_rtt_ms_out : 0,
            l = s ? s[e].total_rtt_measure_out : 0,
            _ = {
              rtt: null,
              totalRTT: o,
              totalRTTMeasurements: r
            };
          if (t.timestamp === a[e].timestamp_out) return _;
          if (!Object.prototype.hasOwnProperty.call(t, F)) return _;
          if (Object.prototype.hasOwnProperty.call(t, W) && (i = !0, 0 === Number(t.roundTripTimeMeasurements) || Number(t.roundTripTimeMeasurements) - l === r)) return _;
          const c = Number(1e3) * Number(t.roundTripTime);
          let u = o + c,
            d = r + 1;
          return i && (u = Number(1e3) * Number(t.totalRoundTripTime) - n, d = Number(t.roundTripTimeMeasurements) - l), {
            rtt: c,
            totalRTT: u,
            totalRTTMeasurements: d
          };
        },
        Ct = (t, e, s) => t.timestamp === s[e].timestamp_out ? null : Object.prototype.hasOwnProperty.call(t, K) ? Number(1e3) * (Number(t.jitter) || 0) : null,
        xt = (t, e, s) => {
          const a = 1e3 * t.jitterBufferDelay || 0,
            i = t.jitterBufferEmittedCount || 0,
            o = a - s[e].total_time_jitter_buffer_delay_in,
            r = i - s[e].total_jitter_emitted_in;
          return {
            delta_ms_jitter_buffer_delay: r ? o / r : 0,
            total_time_jitter_buffer_delay: a,
            total_time_jitter_emitted: i
          };
        },
        St = (t, e, s, a) => {
          const i = Number(t.packetsSent) || 0 - (a ? a[e].total_packets_out : 0),
            o = i - s[e].total_packets_out,
            r = 1e3 * Number(t.totalPacketSendDelay) || 0 - (a ? a[e].total_time_packets_delay_out : 0),
            n = r - s[e].total_time_packets_delay_out,
            l = o ? n / o : 0,
            _ = Number(t.bytesSent) / 1024 - (a ? a[e].total_KBytes_out : 0),
            c = _ - s[e].total_KBytes_out,
            u = t.timestamp || Date.now(),
            d = a ? a.timestamp : null;
          let p = s.timestamp;
          !p && d && (p = d);
          const h = p ? u - p : 0;
          return {
            packetsSent: i,
            deltaPacketsSent: o,
            KBytesSent: _,
            deltaKBytesSent: c,
            kbsSent: h > 0 ? .008 * c * 1024 / h * 1e3 : 0,
            deltaAvgPacketSendDelay: l,
            totalPacketSendDelay: r
          };
        },
        Rt = (t, e, s, a) => {
          let i = s[e].total_packets_lost_out,
            o = 0,
            r = 0;
          return Object.prototype.hasOwnProperty.call(t, $) && (i = Number(t.packetsLost) || 0 - (a ? a[e].total_packets_lost_out : 0), o = i - s[e].total_packets_lost_out), Object.prototype.hasOwnProperty.call(t, S) && (r = Number(100 * t.fractionLost)), {
            packetsLost: i,
            deltaPacketsLost: o,
            fractionLost: r
          };
        },
        jt = (t, e, s, a) => {
          if (!Object.prototype.hasOwnProperty.call(t, D) || !Object.prototype.hasOwnProperty.call(t, $) || !Object.prototype.hasOwnProperty.call(t, C)) return {
            percent_packets_lost: s[e].percent_packets_lost_in,
            packetsReceived: s[e].total_packets_in,
            packetsLost: s[e].total_packets_lost_in,
            bytesReceived: s[e].total_KBytes_in
          };
          const i = Number(t.packetsReceived) || 0 - (a ? a[e].total_packets_in : 0),
            o = Number(t.packetsLost) || 0 - (a ? a[e].total_packets_lost_in : 0),
            r = o - s[e].total_packets_lost_in,
            n = i - s[e].total_packets_in,
            l = i !== s[e].total_packets_in ? 100 * r / (r + n) : 0,
            _ = Number(t.bytesReceived) / 1024 - (a ? a[e].total_KBytes_in : 0),
            c = _ - s[e].total_KBytes_in,
            u = t.timestamp || Date.now(),
            d = a ? a.timestamp : null;
          let p = s.timestamp;
          !p && d && (p = d);
          const h = p ? u - p : 0;
          return {
            percentPacketsLost: l,
            packetsReceived: i,
            deltaPacketsReceived: n,
            packetsLost: o,
            deltaPacketsLost: r,
            KBytesReceived: _,
            deltaKBytesReceived: c,
            kbsReceived: h > 0 ? .008 * c * 1024 / h * 1e3 : 0
          };
        },
        Bt = t => "relay" !== t.candidateType ? "" : t.relayProtocol || "",
        Tt = t => {
          if (!Object.prototype.hasOwnProperty.call(t, I)) return 3;
          switch (t.networkType) {
            case "ethernet":
              return 0;
            case "cellular":
              return 5;
            case "wifi":
              return 3;
            default:
              return 10;
          }
        },
        Lt = (t, e, s) => {
          if (!Object.prototype.hasOwnProperty.call(t, R) || !Object.prototype.hasOwnProperty.call(t, j)) return {
            width: 0,
            height: 0,
            framerate: 0
          };
          const a = t.frameWidth || 0,
            i = t.frameHeight || 0;
          let o = yt(t.framesPerSecond || 0);
          const r = s === p ? t.framesDecoded : t.framesEncoded;
          if (e) {
            const a = s === p ? e.framesDecoded : e.framesEncoded,
              i = (t.timestamp - e.timestamp) / 1e3,
              n = r - a;
            if (0 !== i) {
              let e = 1;
              if (s === h && t.scalabilityMode) {
                const s = t.scalabilityMode;
                s.startsWith("L2") || s.startsWith("S2") ? e = 2 : (s.startsWith("L3") || s.startsWith("S3")) && (e = 3);
              }
              o = yt(n / i / e);
            }
          }
          return {
            width: a,
            height: i,
            framerate: o
          };
        },
        Ot = (t, e) => e || t < 0 ? 1 : t > 100 ? 4.5 : 1 + .035 * t + 7e-6 * t * (t - 60) * (100 - t),
        Nt = (t, e, s, a, i) => ({
          currentSSRCReport: ht(t, e, i),
          previousSSRCReport: ht(t, s, i),
          beforeLastSSRCReport: ht(t, a, i)
        }),
        Et = (t, e, s, a, i, o) => {
          const r = [],
            n = i === p ? t[a].delta_jitter_ms_in : t[a].delta_jitter_ms_out;
          if (r.push(n, n, n, n), o > 1) {
            const t = i === p ? e && e[a].delta_jitter_ms_in || null : e && e[a].delta_jitter_ms_out || null;
            r.push(t, t);
          }
          return o > 2 && r.push(i === p ? s && s[a].delta_jitter_ms_in || null : s && s[a].delta_jitter_ms_out || null), it(r, 10);
        },
        Kt = (t, e, s, a, i, o, r, n, l) => {
          const _ = [],
            c = n === p ? e[r].delta_rtt_ms_in || t.data.delta_rtt_connectivity_ms : e[r].delta_rtt_ms_out || t.data.delta_rtt_connectivity_ms;
          if (_.push(c, c, c, c), l > 1) {
            const t = a && (a[r].delta_rtt_ms_in || s.data.delta_rtt_connectivity_ms) || null;
            _.push(t, t);
          }
          return l > 2 && _.push(n === p ? o && (o[r].delta_rtt_ms_in || i.data.delta_rtt_connectivity_ms) || null : o && (o[r].delta_jitter_ms_out || i.data.delta_rtt_connectivity_ms) || null), it(_, 100);
        },
        Pt = (t, e, s, a, i, o) => {
          const r = [],
            n = i === p ? t[a].percent_packets_lost_in : t[a].percent_packets_lost_out;
          if (r.push(n, n, n, n), o > 1) {
            const t = i === p ? e && e[a].percent_packets_lost_in || null : e && e[a].percent_packets_lost_out || null;
            r.push(t, t);
          }
          return o > 2 && r.push(i === p ? s && s[a].percent_packets_lost_in || null : s && s[a].percent_packets_lost_out || null), it(r, 0);
        },
        It = (t, e, s, a = !1) => s ? a ? t.type in s && e in s[t.type] ? s[t.type][e] : null : t.type in s && t.ssrc in s[t.type] && e in s[t.type][t.ssrc] ? s[t.type][t.ssrc][e] : null : null,
        $t = (t, e) => e.find(e => t in e.value ? e.value[t] : null);
      class Dt {
        constructor(t, e) {
          this._callbacks = {
            onreport: null,
            onticket: null
          }, this._id = `coltr-${st()}`, this._moduleName = this._id, this._probeId = e, this._config = t, this._exporter = new kt(t), this._state = m, this.deviceChanged = () => this._onDeviceChange(), this.connectionStateChange = () => this._onConnectionStateChange(), this.iceConnectionStateChange = () => this._onIceConnectionStateChange(), this.iceGatheringStateChange = () => this._onIceGatheringStateChange(), this.track = t => this._onTrack(t), this.negotiationNeeded = () => this._onNegotiationNeeded(), n(this._moduleName, `new collector created for probe ${this._probeId}`);
        }
        analyze(t, e, s, a, i, r) {
          const n = (t => {
            const e = {
              pname: "",
              call_id: "",
              user_id: "",
              timestamp: null,
              count: 0,
              audio: {},
              video: {},
              network: {
                infrastructure: 3,
                selected_candidate_pair_id: "",
                local_candidate_id: "",
                local_candidate_type: "",
                local_candidate_protocol: "",
                local_candidate_relay_protocol: "",
                remote_candidate_id: "",
                remote_candidate_type: "",
                remote_candidate_protocol: ""
              },
              data: {
                total_KBytes_in: 0,
                total_KBytes_out: 0,
                delta_KBytes_in: 0,
                delta_KBytes_out: 0,
                delta_kbs_in: 0,
                delta_kbs_out: 0,
                delta_kbs_bandwidth_in: 0,
                delta_kbs_bandwidth_out: 0,
                delta_rtt_connectivity_ms: null,
                total_rtt_connectivity_ms: 0,
                total_rtt_connectivity_measure: 0
              },
              experimental: {
                time_to_measure_ms: 0
              },
              passthrough: {}
            };
            if (t) {
              const e = {
                ...t,
                audio: {},
                video: {},
                data: {
                  ...t.data
                },
                network: {
                  ...t.network
                },
                experimental: {
                  ...t.experimental
                },
                passthrough: {}
              };
              return Object.keys(t.audio).forEach(s => {
                e.audio[s] = {
                  ...t.audio[s]
                };
              }), Object.keys(t.video).forEach(s => {
                e.video[s] = {
                  ...t.video[s]
                };
              }), e;
            }
            return {
              ...e,
              audio: {},
              video: {},
              data: {
                ...e.data
              },
              network: {
                ...e.network
              },
              experimental: {
                ...e.experimental
              }
            };
          })(s);
          let l = null;
          return t.forEach(a => {
            !l && a.timestamp && (l = a.timestamp);
            const _ = ((t, e, s, a, i, r, n) => {
              if (!t) return [];
              switch (o("extractor   ", `analyze() - got stats ${t.type} for ${s}`, t), t.type) {
                case "candidate-pair":
                  let s = !1,
                    o = !1;
                  if (i.has(t.transportId) && i.get(t.transportId).selectedCandidatePairId === t.id && (o = !0), U in t && t.selected && (s = !0), o || s) {
                    const i = t.localCandidateId,
                      o = t.remoteCandidateId,
                      r = t.id,
                      n = ((t, e, s) => {
                        const a = (t.bytesReceived || 0) / 1024 - (s ? s.data.total_KBytes_in : 0),
                          i = (t.bytesSent || 0) / 1024 - (s ? s.data.total_KBytes_out : 0),
                          o = t.timestamp || Date.now(),
                          r = a - e.data.total_KBytes_in,
                          n = i - e.data.total_KBytes_out,
                          l = s ? s.timestamp : null;
                        let _ = e.timestamp;
                        !_ && l && (_ = l);
                        const c = _ ? o - _ : 0;
                        return {
                          total_KBytes_received: a,
                          total_KBytes_sent: i,
                          delta_KBytes_received: r,
                          delta_KBytes_sent: n,
                          kbs_speed_received: c > 0 ? .008 * r * 1024 / c * 1e3 : 0,
                          kbs_speed_sent: c > 0 ? .008 * n * 1024 / c * 1e3 : 0
                        };
                      })(t, e, a),
                      l = (t => ({
                        kbs_incoming_bandwidth: t.availableIncomingBitrate / 1024 || 0,
                        kbs_outgoing_bandwidth: t.availableOutgoingBitrate / 1024 || 0
                      }))(t),
                      _ = ((t, e, s, a) => {
                        if (!Object.prototype.hasOwnProperty.call(t, x)) return {
                          rtt: null,
                          totalRTT: a.data.total_rtt_connectivity_ms,
                          totalRTTMeasurements: a.data.total_rtt_connectivity_measure
                        };
                        const i = Number(1e3) * Number(t.currentRoundTripTime);
                        let o = a.data.total_rtt_connectivity_ms + i,
                          r = a.data.total_rtt_connectivity_measure + 1;
                        return Object.prototype.hasOwnProperty.call(t, G) && (o = Number(1e3) * Number(t.totalRoundTripTime) - (s ? s.data.total_rtt_connectivity_ms : 0)), Object.prototype.hasOwnProperty.call(t, A) && (r = Number(t.responsesReceived) - (s ? s.data.total_rtt_connectivity_measure : 0)), {
                          rtt: i,
                          totalRTT: o,
                          totalRTTMeasurements: r
                        };
                      })(t, 0, a, e),
                      c = [{
                        type: Z,
                        value: {
                          local_candidate_id: i
                        }
                      }, {
                        type: Z,
                        value: {
                          remote_candidate_id: o
                        }
                      }, {
                        type: tt,
                        value: {
                          total_KBytes_in: n.total_KBytes_received
                        }
                      }, {
                        type: tt,
                        value: {
                          total_KBytes_out: n.total_KBytes_sent
                        }
                      }, {
                        type: tt,
                        value: {
                          delta_KBytes_in: n.delta_KBytes_received
                        }
                      }, {
                        type: tt,
                        value: {
                          delta_KBytes_out: n.delta_KBytes_sent
                        }
                      }, {
                        type: tt,
                        value: {
                          delta_kbs_in: n.kbs_speed_received
                        }
                      }, {
                        type: tt,
                        value: {
                          delta_kbs_out: n.kbs_speed_sent
                        }
                      }, {
                        type: tt,
                        value: {
                          delta_kbs_bandwidth_in: l.kbs_incoming_bandwidth
                        }
                      }, {
                        type: tt,
                        value: {
                          delta_kbs_bandwidth_out: l.kbs_outgoing_bandwidth
                        }
                      }, {
                        type: tt,
                        value: {
                          delta_rtt_connectivity_ms: _.rtt
                        }
                      }, {
                        type: tt,
                        value: {
                          total_rtt_connectivity_ms: _.totalRTT
                        }
                      }, {
                        type: tt,
                        value: {
                          total_rtt_connectivity_measure: _.totalRTTMeasurements
                        }
                      }];
                    return s && c.push({
                      type: Z,
                      internal: "selectedPairChanged",
                      value: {
                        selected_candidate_pair_id: r
                      }
                    }), c;
                  }
                  break;
                case "local-candidate":
                  if (t.id === e.network.local_candidate_id) return [{
                    type: Z,
                    value: {
                      infrastructure: Tt(t)
                    }
                  }, {
                    type: Z,
                    value: {
                      local_candidate_type: t.candidateType || ""
                    }
                  }, {
                    type: Z,
                    value: {
                      local_candidate_protocol: t.protocol || ""
                    }
                  }, {
                    type: Z,
                    value: {
                      local_candidate_relay_protocol: Bt(t)
                    }
                  }];
                  break;
                case "remote-candidate":
                  if (t.id === e.network.remote_candidate_id) return [{
                    type: Z,
                    value: {
                      remote_candidate_type: t.candidateType || ""
                    }
                  }, {
                    type: Z,
                    value: {
                      remote_candidate_protocol: t.protocol || ""
                    }
                  }];
                  break;
                case w:
                  {
                    const s = t.ssrc,
                      o = ht(s, e, p);
                    o && (o.timestamp = e.timestamp);
                    const n = ht(s, a, p);
                    if (n && (n.timestamp = a.timestamp), t.mediaType === H) {
                      const e = jt(t, H, o, n),
                        a = Ct(t, H, o),
                        l = t.codecId || "",
                        _ = t.audioLevel || 0;
                      let c = null;
                      i.has(t.playoutId) && (c = ((t, e) => {
                        const s = e && 1e3 * e.synthesizedSamplesDuration || 0,
                          a = t && 1e3 * t.synthesizedSamplesDuration || 0,
                          i = t && 1e3 * t.totalSamplesDuration || 0,
                          o = a - s,
                          r = i - (e && 1e3 * e.totalSamplesDuration || 0),
                          n = t && t.totalPlayoutDelay || 0,
                          l = t && t.totalSamplesCount || 0;
                        return {
                          total_synthetized_ms_in: a,
                          delta_synthetized_ms_in: o,
                          percent_synthetized_in: r ? o / r * 100 : 0,
                          total_percent_synthetized_in: i ? a / i * 100 : 0,
                          total_playout_ms_in: n,
                          delta_playout_delay_ms_in: l ? n / l : 0
                        };
                      })(i.get(t.playoutId), r ? r.get(t.playoutId) : null));
                      const u = xt(t, H, o);
                      return [{
                        ssrc: s,
                        type: Q,
                        value: {
                          codec_id_in: l
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_packets_in: e.packetsReceived
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_packets_in: e.deltaPacketsReceived
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_packets_lost_in: e.packetsLost
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_packets_lost_in: e.deltaPacketsLost
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          percent_packets_lost_in: e.percentPacketsLost
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_KBytes_in: e.KBytesReceived
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        internal: "bytesReceivedChanged",
                        value: {
                          delta_KBytes_in: e.deltaKBytesReceived
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_kbs_in: e.kbsReceived
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_jitter_ms_in: a
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_jitter_buffer_delay_ms_in: u.delta_ms_jitter_buffer_delay
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_time_jitter_buffer_delay_in: u.total_time_jitter_buffer_delay
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_jitter_emitted_in: u.total_time_jitter_emitted
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          track_in: t.trackIdentifier
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        internal: "ssrcIdentifierIn",
                        value: {
                          ssrc_in: t.ssrc
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          level_in: _
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_synthetized_ms_in: c ? c.delta_synthetized_ms_in : 0
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_synthetized_ms_in: c ? c.total_synthetized_ms_in : 0
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_playout_delay_ms_in: c ? c.delta_playout_delay_ms_in : 0
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_playout_ms_in: c ? c.total_playout_ms_in : 0
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          percent_synthetized_in: c ? c.percent_synthetized_in : 0
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_percent_synthetized_in: c ? c.total_percent_synthetized_in : 0
                        }
                      }];
                    }
                    if (t.mediaType === Y) {
                      const e = ((t, e) => {
                          if (!Object.prototype.hasOwnProperty.call(t, B) || !Object.prototype.hasOwnProperty.call(t, J)) return {
                            delta_ms_decode_frame: e.video.delta_decode_frame_ms_in,
                            frames_decoded: e.video.total_frames_decoded_in,
                            total_decode_time: e.video.total_time_decoded_in
                          };
                          const s = t.framesDecoded,
                            a = 1e3 * t.totalDecodeTime,
                            i = 1e3 * t.totalProcessingDelay || 0,
                            o = 1e3 * t.totalAssemblyTime || 0,
                            r = i - e.video.total_time_processing_delay_in,
                            n = a - e.video.total_time_decoded_in,
                            l = s - e.video.total_frames_decoded_in,
                            _ = o - e.video.total_time_assembly_delay_in;
                          return {
                            frames_decoded: s,
                            delta_ms_decode_frame: l > 0 ? n / l : 0,
                            delta_ms_processing_delay: l > 0 ? r / l : 0,
                            delta_ms_assembly_delay: l > 0 ? _ / l : 0,
                            total_time_processing_delay: i,
                            total_decode_time: a,
                            total_assembly_time: o
                          };
                        })(t, o),
                        a = jt(t, Y, o, n),
                        i = Ct(t, Y, o),
                        l = t.decoderImplementation || null,
                        _ = t.codecId || null,
                        c = r ? r.get(t.id) : null,
                        u = Lt(t, c, p),
                        d = ((t, e, s) => {
                          if (!Object.prototype.hasOwnProperty.call(t, M) || !Object.prototype.hasOwnProperty.call(t, P)) return {
                            pliCount: e.total_pli_sent_in,
                            nackCount: e.total_nack_sent_in,
                            deltaPliCount: 0,
                            deltaNackCount: 0
                          };
                          const a = (t.pliCount || 0) - (s ? s.video.total_pli_sent_in : 0),
                            i = (t.nackCount || 0) - (s ? s.video.total_nack_sent_in : 0);
                          return {
                            pliCount: a,
                            nackCount: i,
                            deltaPliCount: a - e.video.total_pli_sent_in,
                            deltaNackCount: i - e.video.total_nack_sent_in
                          };
                        })(t, o, n),
                        h = ((t, e, s, a) => {
                          if (!Object.prototype.hasOwnProperty.call(t, L) || !Object.prototype.hasOwnProperty.call(t, z)) return {
                            freezeCount: s.video.total_glitch_in.freeze,
                            pauseCount: s.video.total_glitch_in.pause,
                            deltaFreezeCount: 0,
                            deltaPauseCount: 0
                          };
                          const i = (t.freezeCount || 0) - (a ? a.video.total_glitch_in.freeze : 0),
                            o = (t.pauseCount || 0) - (a ? a.video.total_glitch_in.pause : 0);
                          return {
                            freezeCount: i,
                            pauseCount: o,
                            deltaFreezeCount: i - s.video.total_glitch_in.freeze,
                            deltaPauseCount: o - s.video.total_glitch_in.pause
                          };
                        })(t, 0, o, n),
                        m = xt(t, H, o);
                      return [{
                        ssrc: s,
                        type: X,
                        value: {
                          codec_id_in: _
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_packets_in: a.packetsReceived
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_packets_in: a.deltaPacketsReceived
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_packets_lost_in: a.packetsLost
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_packets_lost_in: a.deltaPacketsLost
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          percent_packets_lost_in: a.percentPacketsLost
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_KBytes_in: a.KBytesReceived
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        internal: "bytesReceivedChanged",
                        value: {
                          delta_KBytes_in: a.deltaKBytesReceived
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_kbs_in: a.kbsReceived
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_jitter_ms_in: i
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_jitter_buffer_delay_ms_in: m.delta_ms_jitter_buffer_delay
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_time_jitter_buffer_delay_in: m.total_time_jitter_buffer_delay
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_jitter_emitted_in: m.total_time_jitter_emitted
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          decoder_in: l
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_decode_frame_ms_in: e.delta_ms_decode_frame
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_frames_decoded_in: e.frames_decoded
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_processing_delay_ms_in: e.delta_ms_processing_delay
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_time_processing_delay_in: e.total_time_processing_delay
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_assembly_delay_ms_in: e.delta_ms_assembly_delay
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_time_assembly_delay_in: e.total_assembly_time
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_time_decoded_in: e.total_decode_time
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_nack_sent_in: d.nackCount
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_nack_sent_in: d.deltaNackCount
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_pli_sent_in: d.pliCount
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_pli_sent_in: d.deltaPliCount
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          size_in: u
                        },
                        internal: "inputSizeChanged"
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          track_in: t.trackIdentifier
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        internal: "ssrcIdentifierIn",
                        value: {
                          ssrc_in: t.ssrc
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_glitch_in: {
                            freeze: h.freezeCount,
                            pause: h.pauseCount
                          },
                          delta_glitch_in: {
                            freeze: h.deltaFreezeCount,
                            pause: h.deltaPauseCount
                          }
                        },
                        internal: "glitchChanged"
                      }];
                    }
                    break;
                  }
                case "outbound-rtp":
                  {
                    const s = !!t.mediaSourceId,
                      o = t.ssrc,
                      l = ht(o, e, h);
                    l && (l.timestamp = e.timestamp);
                    const _ = ht(o, a, h);
                    _ && (_.timestamp = a.timestamp);
                    let c = "",
                      u = 0,
                      d = {
                        width: 0,
                        height: 0,
                        framerate: 0
                      };
                    if (s && i.has(t.mediaSourceId)) {
                      const e = i.get(t.mediaSourceId);
                      c = e.trackIdentifier, t.kind === H ? u = e.audioLevel : d = {
                        width: e.width || null,
                        height: e.height || null,
                        framerate: e.framesPerSecond || null
                      };
                    }
                    let p = "";
                    if (c) {
                      const t = ((t, e) => {
                        const s = e.getSenders().find(e => e.track && e.track.id === t);
                        if (s) return s.track;
                        const a = e.getReceivers().find(e => e.track && e.track.id === t);
                        return a ? a.track : null;
                      })(c, n);
                      t && (p = t.label);
                    }
                    if (t.mediaType === H) {
                      const e = t.codecId || null;
                      if (!c) {
                        const t = mt("audio", n);
                        t && (c = t.id, p = t.label);
                      }
                      const a = St(t, H, l, _);
                      return [{
                        ssrc: o,
                        type: Q,
                        internal: "mediaSourceUpdated",
                        value: {
                          active_out: s
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          device_out: p
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          codec_id_out: e
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          total_packets_out: a.packetsSent
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          delta_packets_out: a.deltaPacketsSent
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          delta_packet_delay_ms_out: a.deltaAvgPacketSendDelay
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          total_time_packets_delay_out: a.totalPacketSendDelay
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          total_KBytes_out: a.KBytesSent
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        internal: "bytesSentChanged",
                        value: {
                          delta_KBytes_out: a.deltaKBytesSent
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          delta_kbs_out: a.kbsSent
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        internal: "deviceChanged",
                        value: {
                          track_out: c
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        value: {
                          level_out: u
                        }
                      }, {
                        ssrc: o,
                        type: Q,
                        internal: "ssrcIdentifierOut",
                        value: {
                          ssrc_out: t.ssrc
                        }
                      }];
                    }
                    if (t.mediaType === Y) {
                      const e = t.encoderImplementation || null,
                        a = t.codecId || null;
                      if (!c) {
                        const t = mt("video", n);
                        t && (c = t.id, p = t.label);
                      }
                      const i = ((t, e) => {
                          if (!Object.prototype.hasOwnProperty.call(t, T) || !Object.prototype.hasOwnProperty.call(t, q)) return {
                            delta_ms_encode_frame: e.video.delta_encode_frame_ms_out,
                            frames_encoded: e.video.total_frames_encoded_out,
                            total_encode_time: e.video.total_time_encoded_out
                          };
                          const s = t.framesEncoded,
                            a = t.totalEncodeTime,
                            i = a - e.video.total_time_encoded_out,
                            o = s - e.video.total_frames_encoded_out;
                          return {
                            delta_ms_encode_frame: o > 0 && i ? 1e3 * i / o : 0,
                            frames_encoded: s,
                            total_encode_time: a
                          };
                        })(t, l),
                        u = r ? r.get(t.id) : null,
                        m = Lt(t, u, h),
                        y = (t => {
                          const e = Object.prototype.hasOwnProperty.call(t, O) ? t.qualityLimitationReason : null,
                            s = Object.prototype.hasOwnProperty.call(t, E) ? t.qualityLimitationResolutionChanges : null,
                            a = Object.prototype.hasOwnProperty.call(t, N) ? t.qualityLimitationDurations : null;
                          return a && Object.keys(a).forEach(t => {
                            a[t] > 1e3 && (a[t] = Number(a[t] / 1e3));
                          }), {
                            reason: e,
                            durations: a,
                            resolutionChanges: s
                          };
                        })(t),
                        v = ((t, e, s) => {
                          if (!Object.prototype.hasOwnProperty.call(t, M) || !Object.prototype.hasOwnProperty.call(t, P)) return {
                            pliCount: e.total_pli_received_out,
                            nackCount: e.total_nack_received_out,
                            deltaPliCount: 0,
                            deltaNackCount: 0
                          };
                          const a = (t.pliCount || 0) - (s ? s.video.total_pli_received_out : 0),
                            i = (t.nackCount || 0) - (s ? s.video.total_nack_received_out : 0);
                          return {
                            pliCount: a,
                            nackCount: i,
                            deltaPliCount: a - e.video.total_pli_received_out,
                            deltaNackCount: i - e.video.total_nack_received_out
                          };
                        })(t, l, _),
                        f = St(t, Y, l, _);
                      return [{
                        ssrc: o,
                        type: X,
                        internal: "mediaSourceUpdated",
                        value: {
                          active_out: s
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          device_out: p
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          codec_id_out: a
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          total_packets_out: f.packetsSent
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          delta_packets_out: f.deltaPacketsSent
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          delta_packet_delay_ms_out: f.deltaAvgPacketSendDelay
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          total_time_packets_delay_out: f.totalPacketSendDelay
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          total_KBytes_out: f.KBytesSent
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        internal: "bytesSentChanged",
                        value: {
                          delta_KBytes_out: f.deltaKBytesSent
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          delta_kbs_out: f.kbsSent
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          encoder_out: e
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          delta_encode_frame_ms_out: i.delta_ms_encode_frame
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          total_frames_encoded_out: i.frames_encoded
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          total_time_encoded_out: i.total_encode_time
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          total_nack_received_out: v.nackCount
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          delta_nack_received_out: v.deltaNackCount
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          total_pli_received_out: v.pliCount
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          delta_pli_received_out: v.deltaPliCount
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          size_out: m
                        },
                        internal: "outputSizeChanged"
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          limitation_out: y
                        },
                        internal: "videoLimitationChanged"
                      }, {
                        ssrc: o,
                        type: X,
                        internal: "deviceChanged",
                        value: {
                          track_out: c
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        value: {
                          size_pref_out: d
                        }
                      }, {
                        ssrc: o,
                        type: X,
                        internal: "ssrcIdentifierOut",
                        value: {
                          ssrc_out: t.ssrc
                        }
                      }];
                    }
                    break;
                  }
                default:
                  break;
                case "codec":
                  const l = [];
                  return Object.keys(e.audio).forEach(s => {
                    const a = e.audio[s];
                    if (a.codec_id_in === t.id || a.codec_id_out === t.id) {
                      const e = (t => ({
                        channels: t.channels || null,
                        clock_rate: t.clockRate || null,
                        mime_type: t.mimeType || null,
                        sdp_fmtp_line: t.sdpFmtpLine || null
                      }))(t);
                      t.id === a.codec_id_in ? l.push({
                        ssrc: a.ssrc,
                        type: Q,
                        value: {
                          codec_in: e
                        }
                      }) : l.push({
                        ssrc: a.ssrc,
                        type: Q,
                        value: {
                          codec_out: e
                        }
                      });
                    }
                  }), Object.keys(e.video).forEach(s => {
                    const a = e.video[s];
                    if (a.codec_id_in === t.id || a.codec_id_out === t.id) {
                      const e = (t => ({
                        clock_rate: t.clockRate || null,
                        mime_type: t.mimeType || null
                      }))(t);
                      t.id === a.codec_id_in ? l.push({
                        ssrc: a.ssrc,
                        type: X,
                        value: {
                          codec_in: e
                        }
                      }) : l.push({
                        ssrc: a.ssrc,
                        type: X,
                        value: {
                          codec_out: e
                        }
                      });
                    }
                  }), l;
                case "remote-inbound-rtp":
                  {
                    const s = t.ssrc,
                      i = ht(s, e, h),
                      o = ht(s, a, h);
                    if (t.kind === H) {
                      const e = wt(t, H, o, i),
                        a = Ct(t, H, i),
                        r = Rt(t, H, i, o);
                      return [{
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_rtt_ms_out: e.rtt
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_rtt_ms_out: e.totalRTT
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_rtt_measure_out: e.totalRTTMeasurements
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_jitter_ms_out: a
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          timestamp_out: t.timestamp
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_packets_lost_out: r.packetsLost
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_packets_lost_out: r.deltaPacketsLost
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          percent_packets_lost_out: r.fractionLost
                        }
                      }];
                    }
                    if (t.kind === Y) {
                      const e = wt(t, Y, o, i),
                        a = Ct(t, Y, i),
                        r = Rt(t, Y, i, o);
                      return [{
                        ssrc: s,
                        type: X,
                        value: {
                          delta_rtt_ms_out: e.rtt
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_rtt_ms_out: e.totalRTT
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_rtt_measure_out: e.totalRTTMeasurements
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_jitter_ms_out: a
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          timestamp_out: t.timestamp
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          total_packets_lost_out: r.packetsLost
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          delta_packets_lost_out: r.deltaPacketsLost
                        }
                      }, {
                        ssrc: s,
                        type: X,
                        value: {
                          percent_packets_lost_out: r.fractionLost
                        }
                      }];
                    }
                    break;
                  }
                case "remote-outbound-rtp":
                  {
                    const s = t.ssrc,
                      i = ht(s, e, h),
                      o = ht(s, a, h);
                    if (t.kind === H) {
                      const e = wt(t, H, o, i);
                      return [{
                        ssrc: s,
                        type: Q,
                        value: {
                          delta_rtt_ms_in: e.rtt
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_rtt_ms_in: e.totalRTT
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          total_rtt_measure_in: e.totalRTTMeasurements
                        }
                      }, {
                        ssrc: s,
                        type: Q,
                        value: {
                          timestamp_in: t.timestamp
                        }
                      }];
                    }
                    break;
                  }
                case "transport":
                  {
                    const e = t.selectedCandidatePairId;
                    return [{
                      type: Z,
                      internal: "selectedPairChanged",
                      value: {
                        selected_candidate_pair_id: e
                      }
                    }];
                  }
              }
              return [];
            })(a, n, n.pname, i, t, e, r);
            _.forEach(t => {
              if ("internal" in t && ((t, e, s) => {
                const a = [],
                  i = (t, e, s, i, o) => {
                    a.push({
                      at: t,
                      ended: null,
                      category: e,
                      name: s,
                      ssrc: i,
                      details: o
                    });
                  },
                  o = a => {
                    const o = t.value[a],
                      r = It(t, a, e);
                    var n, l;
                    (!a.includes("out") || $t("active_out", s)) && ((r === null || r === void 0 ? void 0 : r.width) !== o.width && i(new Date().toJSON(), "quality", !r || r.width < o.width ? "size-up" : "size-down", t.ssrc, {
                      message: `The resolution of the ${a.includes("out") ? "outbound" : "inbound"} ${t.type} stream has ${!r || r.width < o.width ? "increased" : "decreased"} to ${o.width}x${o.height}`,
                      direction: a.includes("out") ? "outbound" : "inbound",
                      kind: t.type,
                      value: `${o.width}x${o.height}`,
                      value_old: `${r ? r.width : 0}x${r ? r.height : 0}`
                    }), n = r === null || r === void 0 ? void 0 : r.framerate, l = o === null || o === void 0 ? void 0 : o.framerate, n && Math.abs(n - l) > 2 && i(new Date().toJSON(), "quality", !r || r.framerate < o.framerate ? "fps-up" : "fps-down", t.ssrc, {
                      message: `The framerate of the ${a.includes("out") ? "outbound" : "inbound"} ${t.type} stream has ${!r || r.framerate < o.framerate ? "increased" : "decreased"} to ${o.framerate}`,
                      direction: a.includes("out") ? "outbound" : "inbound",
                      kind: t.type,
                      value: o.framerate,
                      value_old: r ? r.framerate : 0
                    }));
                  },
                  r = a => {
                    const o = t.value[a],
                      r = It(t, a, e);
                    var n, l;
                    (!a.includes("out") || $t("active_out", s)) && (n = r, (l = o) && Math.abs(n - l) / (100 * l) > 50 && i(new Date().toJSON(), "quality", o > r ? "peak-up" : "peak-down", t.ssrc, {
                      message: `A peak has been detected for the ${a.includes("out") ? "outbound" : "inbound"} ${t.type} steam.`,
                      direction: a.includes("out") ? "outbound" : "inbound",
                      kind: t.type,
                      value: o,
                      value_old: r
                    }));
                  },
                  n = s => {
                    const a = t.value[s],
                      o = It(t, s, e);
                    a && !o && i(new Date().toJSON(), "call", "track-added", a, {
                      message: `New track added to the call ${a}`,
                      direction: s.includes("in") ? "inbound" : "outbound",
                      kind: t.type,
                      value: a,
                      value_old: null
                    });
                  };
                switch (t.internal) {
                  case "deviceChanged":
                    e && (a => {
                      const o = t.value.track_out,
                        r = It(t, a, e),
                        n = $t("device_out", s),
                        l = It(t, "device_out", e);
                      let _ = "track-stop";
                      if (r !== o) {
                        let e = `The existing outbound ${t.type} stream from ${l || "unknown"} has been stopped or muted`;
                        o && r ? (e = `The existing outbound ${t.type} device has been changed to ${n ? n.value.device_out : "unknown"}`, _ = "track-change") : r || (e = `A new outbound ${t.type} stream from ${n ? n.value.device_out : "unknown"} has been started or unmuted`, _ = "track-start"), i(new Date().toJSON(), "call", _, t.ssrc, {
                          message: e,
                          direction: "outbound",
                          kind: t.type,
                          value: o,
                          value_old: r
                        });
                      }
                    })("track_out");
                    break;
                  case "inputSizeChanged":
                    o("size_in");
                    break;
                  case "outputSizeChanged":
                    o("size_out");
                    break;
                  case "bytesSentChanged":
                    r("delta_KBytes_out");
                    break;
                  case "bytesReceivedChanged":
                    e && r("delta_KBytes_in");
                    break;
                  case "mediaSourceUpdated":
                    e && (s => {
                      const a = t.value[s],
                        o = It(t, s, e);
                      a !== o && i(new Date().toJSON(), "call", a ? "track-active" : "track-inactive", t.ssrc, {
                        message: `The ${s.includes("out") ? "outbound" : "inbound"} ${t.type} stream switched to ${a ? "active" : "inactive"}`,
                        direction: s.includes("out") ? "outbound" : "inbound",
                        kind: t.type,
                        value: a,
                        value_old: o
                      });
                    })("active_out");
                    break;
                  case "videoLimitationChanged":
                    (s => {
                      const a = t.value[s],
                        o = It(t, s, e);
                      o && a.reason === o.reason || i(new Date().toJSON(), "quality", "limitation", t.ssrc, {
                        message: "The outbound video stream resolution is " + ("none" === a.reason ? "no more limited" : `limited due to ${a.reason} reason`),
                        direction: s.includes("out") ? "outbound" : "inbound",
                        kind: t.type,
                        value: a.reason,
                        value_old: o
                      });
                    })("limitation_out");
                    break;
                  case "selectedPairChanged":
                    (s => {
                      const a = t.value[s],
                        o = It(t, s, e, !0);
                      a !== o && i(new Date().toJSON(), "signal", "route-change", null, {
                        message: `The selected candidates pair changed to ${a}`,
                        direction: null,
                        kind: null,
                        value: a,
                        value_old: o
                      });
                    })("selected_candidate_pair_id");
                    break;
                  case "ssrcIdentifierIn":
                    n("ssrc_in");
                    break;
                  case "ssrcIdentifierOut":
                    n("ssrc_out");
                }
                return a;
              })(t, s, _).forEach(t => this.addCustomEvent(t)), t.value && t.type) if (t.ssrc) {
                let s = n[t.type][t.ssrc];
                s || (e = t.type, i = a.type, s = e === H ? i === w ? {
                  ...v
                } : {
                  ...f
                } : i === w ? {
                  ...g
                } : {
                  ...b
                }, s.ssrc = t.ssrc, n[t.type][t.ssrc] = s), Object.keys(t.value).forEach(e => {
                  s[e] = t.value[e];
                });
              } else Object.keys(t.value).forEach(e => {
                n[t.type][e] = t.value[e];
              });
              var e, i;
            });
            const c = e ? ((t, e) => {
                let s = null;
                return e.forEach(e => {
                  e.id === t.id && (s = e);
                }), s;
              })(a, e) : null,
              u = ((t, e, s) => {
                const a = {
                  kbits: t => 8 * t / 1e3,
                  ms: t => 1e3 * t,
                  asis: t => t
                };
                if (!t) return {};
                if (e && (e.timestamp === t.timestamp || e.remoteTimestamp && e.remoteTimestamp === t.remoteTimestamp)) return {};
                const i = s && s[t.type] || [],
                  o = {};
                if (i.length > 0) {
                  const s = t.ssrc || t.id,
                    r = t.kind || "",
                    n = `${t.type}${r ? `_${r}` : "_*"}=${s}`;
                  i.forEach(s => {
                    let i = [s],
                      r = "";
                    if (s.startsWith("[") && s.endsWith("]")) {
                      const t = s.substring(1, s.length - 1);
                      t.includes("/") ? r = "/" : t.includes("+") ? r = "+" : t.includes("*") ? r = "*" : t.includes("-") && (r = "-"), i = t.split(r);
                    }
                    const l = [];
                    if (i.forEach(i => {
                      const o = i.split(":").length > 1,
                        r = i.split(".").length > 1,
                        n = o ? i.split(":")[0] : "total",
                        _ = r ? i.split(".")[1] : "asis",
                        c = o ? i.split(":")[1].split(".")[0] : i.split(".")[0];
                      if (c in t) {
                        let i = a[_](t[c]);
                        const o = t.remoteTimestamp || t.timestamp;
                        "ps" === n && e && (i = (i - a[_](e[c])) / (o - (e.remoteTimestamp || e.timestamp)) * 1e3), l.push({
                          fields: s,
                          property: c,
                          value: i
                        });
                      }
                    }), 1 === l.length) {
                      const t = l[0];
                      t.property in o || (o[t.property] = {}), o[t.property][n] = t.value;
                    } else if (l.length > 1) {
                      const t = l.shift(),
                        e = l.reduce((t, e) => {
                          switch (r) {
                            default:
                              return t + e.value;
                            case "/":
                              return 0 !== e.value ? t / e.value : t;
                            case "*":
                              return t * e.value;
                            case "-":
                              return t - e.value;
                          }
                        }, t.value);
                      l[0].fields in o || (o[l[0].fields] = {}), o[l[0].fields][n] = e;
                    }
                  });
                }
                return o;
              })(a, c, this._config.passthrough);
            Object.keys(u).forEach(t => {
              n.passthrough[t] || (n.passthrough[t] = {}), n.passthrough[t] = {
                ...n.passthrough[t],
                ...u[t]
              };
            });
          }), n.pname = this._config.pname, n.call_id = this._config.cid, n.user_id = this._config.uid, n.count = s ? s.count + 1 : 1, n.timestamp = l, Object.keys(n.audio).forEach(t => {
            const e = n.audio[t];
            e[e.direction === p ? "mos_emodel_in" : "mos_model_out"] = ((t, e = "audio", s, a, i, o = "inbound", r = 3) => {
              const {
                  currentSSRCReport: n,
                  previousSSRCReport: l,
                  beforeLastSSRCReport: _
                } = Nt(i, t, s, a, o),
                c = Pt(n, l, _, e, o, r),
                u = Kt(t, n, s, l, a, _, e, o, r),
                d = Et(n, l, _, e, o, r),
                p = Math.max(0, 93.2 - c),
                h = (u + d) / 2;
              return Ot(.18 * p * p - 27.9 * p + 1126.62 - (.024 * h + .11 * (h - 177.3) * (h - 177.3 < 0 ? 0 : 1)), c > 30);
            })(n, H, s, a, e.ssrc, e.direction, 3), e[e.direction === p ? "mos_in" : "mos_out"] = ((t, e = "audio", s, a, i, o = "inbound", r = 3) => {
              const {
                  currentSSRCReport: n,
                  previousSSRCReport: l,
                  beforeLastSSRCReport: _
                } = Nt(i, t, s, a, o),
                c = Pt(n, l, _, e, o, r),
                u = (Kt(t, n, s, l, a, _, e, o, r) + Et(n, l, _, e, o, r)) / 2 + 30,
                d = .024 * u + .11 * (u - 177.3) * (u - 177.3 < 0 ? 0 : 1),
                p = 0 + 19.8 * Math.log(1 + 29.7 * c);
              return Ot(93.2 - (p + d));
            })(n, H, s, a, e.ssrc, e.direction, 3), e[e.direction === p ? "mos_fullband_in" : "mos_fullband_out"] = ((t, e = "audio", s, a, i, o = "inbound", r = 3) => {
              let n = 0;
              const {
                  currentSSRCReport: l,
                  previousSSRCReport: _,
                  beforeLastSSRCReport: c
                } = Nt(i, t, s, a, o),
                u = Pt(l, _, c, e, o, r),
                d = (Kt(t, l, s, _, a, c, e, o, r) + Et(l, _, c, e, o, r)) / 2,
                p = 10.2 + u / (u + 4.3) * 121.8;
              if (d > 100) {
                const t = (Math.log(d) - Math.log(100)) / Math.log(2);
                n = 37 * ((1 + t ** 6) ** (1 / 6) - 3 * (1 + (t / 3) ** 6) ** (1 / 6) + 2);
              }
              return Ot((148 - n - p + 0) / 1.48);
            })(n, H, s, a, e.ssrc, e.direction, 3);
          }), n;
        }
        async takeReferenceStats() {
          return new Promise((t, e) => {
            const s = Date.now();
            setTimeout(async () => {
              try {
                const e = Date.now() - s,
                  a = Date.now(),
                  i = await this._config.pc.getStats(),
                  r = this.analyze(i, null, null, null, null, this._config.pc),
                  n = Date.now();
                r.experimental.time_to_measure_ms = n - a, r.experimental.time_to_wait_ms = e, this._exporter.saveReferenceReport(r), o(this._moduleName, `got reference report for probe ${this._probeId}`), t();
              } catch (t) {
                e(t);
              }
            }, this._config.startAfter);
          });
        }
        async collectStats() {
          try {
            if (this._state !== y || !this._config.pc) return o(this._moduleName, `report discarded (too late) for probe ${this._probeId}`), null;
            const t = Date.now(),
              e = await this._config.pc.getStats(),
              s = this.analyze(e, this._oldReports, this._exporter.getLastReport(), this._exporter.getBeforeLastReport(), this._exporter.getReferenceReport(), this._config.pc);
            this._oldReports = e;
            const a = Date.now();
            return s.experimental.time_to_measure_ms = a - t, this._exporter.addReport(s), o(this._moduleName, `got report for probe ${this._probeId}#${this._exporter.getReportsNumber() + 1}`), this.fireOnReport(s), s;
          } catch (t) {
            return _(this._moduleName, `got error ${t}`), null;
          }
        }
        async start() {
          o(this._moduleName, "starting"), this._oldReports = null, this._exporter.reset(), await this.registerToPCEvents(), this.state = y, this._exporter.start(), o(this._moduleName, "started");
        }
        async mute() {
          this.state = "muted", o(this._moduleName, "muted");
        }
        async unmute() {
          this.state = y, o(this._moduleName, "unmuted");
        }
        async stop(t) {
          if (o(this._moduleName, `stopping${t ? " by watchdog" : ""}...`), this._exporter.stop(), this.unregisterToPCEvents(), this.state = m, this._config.ticket) {
            const t = this._exporter.generateTicket();
            this.fireOnTicket(t);
          }
          o(this._moduleName, "stopped");
        }
        registerCallback(t, e, s) {
          t in this._callbacks ? (this._callbacks[t] = {
            callback: e,
            context: s
          }, o(this._moduleName, `registered callback '${t}'`)) : _(this._moduleName, `can't register callback for '${t}' - not found`);
        }
        unregisterCallback(t) {
          t in this._callbacks ? (this._callbacks[t] = null, delete this._callbacks[t], o(this._moduleName, `unregistered callback '${t}'`)) : _(this._moduleName, `can't unregister callback for '${t}' - not found`);
        }
        fireOnReport(t) {
          this._callbacks.onreport && rt(this._callbacks.onreport.callback, this._callbacks.onreport.context, t);
        }
        fireOnTicket(t) {
          this._callbacks.onticket && rt(this._callbacks.onticket.callback, this._callbacks.onticket.context, t);
        }
        updateConfig(t) {
          this._config = t, this._exporter.updateConfig(t);
        }
        get state() {
          return this._state;
        }
        set state(t) {
          this._state = t, o(this._moduleName, `state changed to ${t}`);
        }
        addCustomEvent(t) {
          this._exporter.addCustomEvent(t);
        }
        async _onDeviceChange() {
          try {
            const t = await navigator.mediaDevices.enumerateDevices();
            this.addCustomEvent({
              at: new Date().toJSON(),
              ended: null,
              category: "device",
              name: "device-change",
              ssrc: null,
              details: {
                message: "One device (at least) has been plugged or unplugged",
                direction: null,
                kind: null,
                value: t.length,
                value_old: null
              }
            });
          } catch (t) {
            _(this._moduleName, "can't get devices");
          }
        }
        _onIceConnectionStateChange() {
          const {
              pc: t
            } = this._config,
            e = t.iceConnectionState;
          this.addCustomEvent({
            at: new Date().toJSON(),
            ended: null,
            category: "signal",
            name: "ice-change",
            ssrc: null,
            details: {
              message: `The ICE connection state has changed to ${e}`,
              direction: null,
              kind: null,
              value: e,
              value_old: null
            }
          });
        }
        _onConnectionStateChange() {
          const {
              pc: t
            } = this._config,
            e = t.connectionState;
          this.addCustomEvent({
            at: new Date().toJSON(),
            ended: null,
            category: "signal",
            name: "connection-change",
            ssrc: null,
            details: {
              message: `The connection state has changed to ${e}`,
              direction: null,
              kind: null,
              value: e,
              value_old: null
            }
          });
        }
        _onIceGatheringStateChange() {
          const {
              pc: t
            } = this._config,
            e = t.iceGatheringState;
          this.addCustomEvent({
            at: new Date().toJSON(),
            ended: null,
            category: "signal",
            name: "gathering-change",
            ssrc: null,
            details: {
              message: `The ICE gathering state has changed to ${e}`,
              direction: null,
              kind: null,
              value: e,
              value_old: null
            }
          });
        }
        _onTrack(t) {
          this.addCustomEvent({
            at: new Date().toJSON(),
            ended: null,
            category: "signal",
            name: "track-received",
            ssrc: null,
            details: {
              message: `A new inbound ${t.track.id} stream has been started`,
              direction: "inbound",
              kind: t.track.kind,
              value: t.track.label,
              value_old: null
            }
          });
        }
        _onNegotiationNeeded() {
          this.addCustomEvent({
            at: new Date().toJSON(),
            ended: null,
            category: "signal",
            name: "ice-negotiation",
            ssrc: null,
            details: {
              message: "A negotiation is required",
              direction: null,
              kind: null,
              value: "negotiation-needed",
              value_old: null
            }
          });
        }
        async registerToPCEvents() {
          const {
            pc: t
          } = this._config;
          navigator.mediaDevices.addEventListener("devicechange", this.deviceChanged), t && (t.addEventListener("iceconnectionstatechange", this.iceConnectionStateChange), t.addEventListener("connectionstatechange", this.connectionStateChange), t.addEventListener("icegatheringstatechange", this.iceGatheringStateChange), t.addEventListener("track", this.track), t.addEventListener("negotiationneeded", this.negotiationNeeded));
        }
        unregisterToPCEvents() {
          const {
            pc: t
          } = this._config;
          navigator.mediaDevices.removeEventListener("devicechange", this.deviceChanged), t && (t.removeEventListener("iceconnectionstatechange", this.iceConnectionStateChange), t.removeEventListener("connectionstatechange", this.connectionStateChange), t.removeEventListener("icegatheringstatechange", this.iceGatheringStateChange), t.removeEventListener("track", this.track), t.removeEventListener("negotiationneeded", this.negotiationNeeded));
        }
        getTicket() {
          return this._exporter && this._exporter.generateTicket();
        }
      }
      class zt {
        constructor(t) {
          this._id = t.pname && t.pname.substr(0, 12).padEnd(12, " ") || `probe-${st()}`, this._moduleName = this._id, n(this._moduleName, "probe created"), this._config = t, this._collector = new Dt(this._config, this._id);
        }
        set onreport(t) {
          t ? this._collector.registerCallback("onreport", t) : this._collector.unregisterCallback("onreport");
        }
        set onticket(t) {
          t ? this._collector.registerCallback("onticket", t) : this._collector.unregisterCallback("onticket");
        }
        get id() {
          return this._id;
        }
        get pname() {
          return this._config.pname;
        }
        get cid() {
          return this._config.cid;
        }
        get uid() {
          return this._config.uid;
        }
        get state() {
          return this._collector.state;
        }
        set state(t) {
          this._collector.state = t;
        }
        addCustomEvent(t, e, s, a = new Date(), i = null, o = null, r = null) {
          let n = null;
          r && (n = "object" == typeof r ? r.toJSON() : r), this._collector.addCustomEvent({
            at: "object" == typeof a ? a.toJSON() : a,
            ended: n,
            category: e,
            name: t,
            ssrc: i,
            details: {
              message: s,
              kind: null,
              direction: null,
              value: o,
              value_old: null
            }
          });
        }
        get isRunning() {
          return this._collector.state === y;
        }
        get isIdle() {
          return this._collector.state === m;
        }
        updateUserId(t) {
          this._config.uid = t, this._collector.updateConfig(this._config);
        }
        updateCallId(t) {
          this._config.cid = t, this._collector.updateConfig(this._config);
        }
        start() {
          this.isIdle ? this._collector.start() : l(this._moduleName, "probe is already running");
        }
        stop(t = !1) {
          this.isRunning && this._collector.stop(t);
        }
        async takeReferenceStats() {
          return this._collector.takeReferenceStats();
        }
        async collectStats() {
          return this._collector.collectStats();
        }
        getTicket() {
          return this._collector && this._collector.getTicket();
        }
      }
      const Mt = "engine      ";
      class At {
        constructor(t) {
          this._config = t, this._probes = [], this._startedTime = null, this._callbacks = {
            onresult: null
          }, n(Mt, `configured for probing every ${this._config.refreshEvery}ms`), n(Mt, `configured for starting after ${this._config.startAfter}ms`), n(Mt, this._config.stopAfter && -1 === this._config.stopAfter ? "configured for never stopped" : `configured for stopped after ${this._config.stopAfter}ms`), o(Mt, "engine initialized");
        }
        get probes() {
          return this._probes;
        }
        get isRunning() {
          return this._probes.some(t => t.isRunning);
        }
        get isIdle() {
          return this._probes.every(t => t.isIdle);
        }
        addNewProbe(t, e) {
          if (!t) throw new Error("undefined peer connection");
          const s = ((t, e = {}, s) => {
              const a = {
                ...s,
                ...e
              };
              return e.pname || l(et, `Argument [String] 'cfg.pname' for the peerConnection name or id is missing - use generated '${s.pname}'`), e.cid || l(et, `Argument [String] 'cfg.cid' for the call name or id is missing - use generated '${s.cid}'`), e.uid || l(et, `Argument [String] 'cfg.uid' for the user name or id is missing - use generated '${s.uid}'`), a.pc = t, a;
            })(t, e, this._config),
            a = new zt(s);
          return this._probes.push(a), o(Mt, `${this._probes.length} probes registered`), a;
        }
        removeExistingProbe(t) {
          if (!t) throw new Error("undefined probe");
          t.state === y && t.stop(), this._probes = this._probes.filter(e => t.id !== e.id);
        }
        async start() {
          const t = () => !this.isIdle && (!this._config.stopAfter || this._config.stopAfter < 0 || Date.now() < this._startedTime + this._config.stopAfter),
            e = async () => {
              const t = {
                  delta_time_to_measure_probes_ms: 0,
                  delta_time_consumed_to_measure_ms: 0,
                  delta_KBytes_in: 0,
                  delta_KBytes_out: 0,
                  delta_kbs_in: 0,
                  delta_kbs_out: 0,
                  total_time_decoded_in: 0,
                  total_time_encoded_out: 0,
                  probes: []
                },
                e = this._probes.filter(t => t.isRunning);
              for (const s of e) {
                const e = await s.collectStats();
                e && t.probes.push(e), o(Mt, `got probe ${s.id}`), await ot(0);
              }
              return t.delta_time_to_measure_probes_ms = _t(t.probes, "experimental", "time_to_measure_ms"), t.delta_KBytes_in = _t(t.probes, "data", "delta_KBytes_in"), t.delta_KBytes_out = _t(t.probes, "data", "delta_KBytes_out"), t.delta_kbs_in = _t(t.probes, "data", "delta_kbs_in"), t.delta_kbs_out = _t(t.probes, "data", "delta_kbs_out"), t.total_time_decoded_in = _t(t.probes, "video", "total_time_decoded_in"), t.total_time_encoded_out = _t(t.probes, "video", "total_time_encoded_out"), t;
            };
          for (o(Mt, "starting to collect"), (() => {
            this._probes.forEach(t => t.start());
          })(), o(Mt, "generating reference reports..."), await (async () => Promise.all(this._probes.map(t => t.takeReferenceStats())))(), o(Mt, "reference reports generated"), this._startedTime = Date.now(), o(Mt, `wait ${this._config.refreshEvery}ms before collecting`), await ot(this._config.refreshEvery); t();) {
            o(Mt, "collecting...");
            const t = Date.now(),
              s = await e(),
              a = Date.now();
            s.delta_time_consumed_to_measure_ms = a - t, this.fireOnReports(s), o(Mt, "collected"), o(Mt, `wait ${this._config.refreshEvery}ms before collecting`), await ot(this._config.refreshEvery);
          }
          o(Mt, "reaching end of the collecting period..."), this.isRunning && setTimeout(() => {
            this.stop();
          }, 0);
        }
        stop(t) {
          n(Mt, "stop collecting"), (t => {
            this._probes.forEach(e => {
              e.stop(t);
            });
          })(t);
        }
        registerCallback(t, e, s) {
          t in this._callbacks ? (this._callbacks[t] = {
            callback: e,
            context: s
          }, o(Mt, `registered callback '${t}'`)) : _(Mt, `can't register callback for '${t}' - not found`);
        }
        unregisterCallback(t) {
          t in this._callbacks ? (this._callbacks[t] = null, delete this._callbacks[t], o(this._moduleName, `unregistered callback '${t}'`)) : _(this._moduleName, `can't unregister callback for '${t}' - not found`);
        }
        fireOnReports(t) {
          this._callbacks.onresult && t.probes.length > 0 && rt(this._callbacks.onresult.callback, this._callbacks.onresult.context, t);
        }
      }
      class Ft {
        constructor(s) {
          var a;
          this._config = ((t = {}) => {
            const e = {
              ...k,
              ...t
            };
            return e.name = "WebRTCMetrics", e.version = "5.4.0", e;
          })(s), n("interface   ", `welcome to ${this._config.name} version ${this._config.version}`), a = this._config.verbose || !1, t.info(i(e(), "log         ", "set log level to " + (a ? "verbose" : "info"))), t.setLevel(a ? t.levels.TRACE : t.levels.INFO), this._engine = new At(this._config);
        }
        setupLogLevel(s) {
          (s => {
            const a = [...Object.keys(t.levels)];
            a.includes(s) ? (t.info(i(e(), "log         ", `update log level to ${s.toLowerCase()}`)), t.setLevel(s)) : t.warn(i(e(), "log         ", "Incorrect log level please choose one of "), a);
          })(s);
        }
        get version() {
          return this._config.version;
        }
        get name() {
          return this._config.name;
        }
        get probes() {
          return this._engine.probes;
        }
        createProbe(t, e) {
          return this._engine.addNewProbe(t, e);
        }
        startAllProbes() {
          this._engine.start();
        }
        stopAllProbes() {
          this._engine.stop();
        }
        get running() {
          return this._engine.isRunning;
        }
        get idle() {
          return this._engine.isIdle;
        }
        removeProbe(t) {
          this._engine.removeExistingProbe(t);
        }
        set onresult(t) {
          t ? this._engine.registerCallback("onresult", t) : this._engine.unregisterCallback("onresult");
        }
        getTicket(t) {
          return t.getTicket();
        }
      }
    })(), a.default;
  })();
});
