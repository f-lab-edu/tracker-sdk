var tt = Object.defineProperty;
var nt = (e, t, n) => t in e ? tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => nt(e, typeof t != "symbol" ? t + "" : t, n);
function Le(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: rt } = Object.prototype, { getPrototypeOf: le } = Object, W = /* @__PURE__ */ ((e) => (t) => {
  const n = rt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => W(t) === e), X = (e) => (t) => typeof t === e, { isArray: D } = Array, q = X("undefined");
function st(e) {
  return e !== null && !q(e) && e.constructor !== null && !q(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ke = C("ArrayBuffer");
function ot(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ke(e.buffer), t;
}
const it = X("string"), x = X("function"), _e = X("number"), G = (e) => e !== null && typeof e == "object", at = (e) => e === !0 || e === !1, $ = (e) => {
  if (W(e) !== "object")
    return !1;
  const t = le(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ct = C("Date"), ut = C("File"), lt = C("Blob"), ft = C("FileList"), dt = (e) => G(e) && x(e.pipe), pt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = W(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, ht = C("URLSearchParams"), [mt, wt, yt, gt] = ["ReadableStream", "Request", "Response", "Headers"].map(C), bt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function H(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), D(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function Fe(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const _ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ue = (e) => !q(e) && e !== _;
function se() {
  const { caseless: e } = Ue(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Fe(t, s) || s;
    $(t[o]) && $(r) ? t[o] = se(t[o], r) : $(r) ? t[o] = se({}, r) : D(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && H(arguments[r], n);
  return t;
}
const Et = (e, t, n, { allOwnKeys: r } = {}) => (H(t, (s, o) => {
  n && x(s) ? e[o] = Le(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), St = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Rt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ot = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && le(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Tt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, At = (e) => {
  if (!e) return null;
  if (D(e)) return e;
  let t = e.length;
  if (!_e(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, xt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && le(Uint8Array)), Ct = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Pt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Nt = C("HTMLFormElement"), Lt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), me = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), kt = C("RegExp"), Be = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  H(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, _t = (e) => {
  Be(e, (t, n) => {
    if (x(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (x(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ft = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return D(e) ? r(e) : r(String(e).split(t)), n;
}, Ut = () => {
}, Bt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Dt(e) {
  return !!(e && x(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const jt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (G(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = D(r) ? [] : {};
        return H(r, (i, c) => {
          const f = n(i, s + 1);
          !q(f) && (o[c] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, It = C("AsyncFunction"), qt = (e) => e && (G(e) || x(e)) && x(e.then) && x(e.catch), De = ((e, t) => e ? setImmediate : t ? ((n, r) => (_.addEventListener("message", ({ source: s, data: o }) => {
  s === _ && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), _.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  x(_.postMessage)
), Ht = typeof queueMicrotask < "u" ? queueMicrotask.bind(_) : typeof process < "u" && process.nextTick || De, a = {
  isArray: D,
  isArrayBuffer: ke,
  isBuffer: st,
  isFormData: pt,
  isArrayBufferView: ot,
  isString: it,
  isNumber: _e,
  isBoolean: at,
  isObject: G,
  isPlainObject: $,
  isReadableStream: mt,
  isRequest: wt,
  isResponse: yt,
  isHeaders: gt,
  isUndefined: q,
  isDate: ct,
  isFile: ut,
  isBlob: lt,
  isRegExp: kt,
  isFunction: x,
  isStream: dt,
  isURLSearchParams: ht,
  isTypedArray: xt,
  isFileList: ft,
  forEach: H,
  merge: se,
  extend: Et,
  trim: bt,
  stripBOM: St,
  inherits: Rt,
  toFlatObject: Ot,
  kindOf: W,
  kindOfTest: C,
  endsWith: Tt,
  toArray: At,
  forEachEntry: Ct,
  matchAll: Pt,
  isHTMLForm: Nt,
  hasOwnProperty: me,
  hasOwnProp: me,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Be,
  freezeMethods: _t,
  toObjectSet: Ft,
  toCamelCase: Lt,
  noop: Ut,
  toFiniteNumber: Bt,
  findKey: Fe,
  global: _,
  isContextDefined: Ue,
  isSpecCompliantForm: Dt,
  toJSONObject: jt,
  isAsyncFn: It,
  isThenable: qt,
  setImmediate: De,
  asap: Ht
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const je = m.prototype, Ie = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ie[e] = { value: e };
});
Object.defineProperties(m, Ie);
Object.defineProperty(je, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(je);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Mt = null;
function oe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function qe(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function we(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = qe(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function vt(e) {
  return a.isArray(e) && !e.some(oe);
}
const $t = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Q(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, h) {
    return !a.isUndefined(h[w]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!f && a.isBlob(p))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, w, h) {
    let b = p;
    if (p && !h && typeof p == "object") {
      if (a.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && vt(p) || (a.isFileList(p) || a.endsWith(w, "[]")) && (b = a.toArray(p)))
        return w = qe(w), b.forEach(function(R, N) {
          !(a.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? we([w], N, o) : i === null ? w : w + "[]",
            u(R)
          );
        }), !1;
    }
    return oe(p) ? !0 : (t.append(we(h, w, o), u(p)), !1);
  }
  const d = [], y = Object.assign($t, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: oe
  });
  function E(p, w) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      d.push(p), a.forEach(p, function(b, S) {
        (!(a.isUndefined(b) || b === null) && s.call(
          t,
          b,
          a.isString(S) ? S.trim() : S,
          w,
          y
        )) === !0 && E(b, w ? w.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function ye(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function fe(e, t) {
  this._pairs = [], e && Q(e, this, t);
}
const He = fe.prototype;
He.append = function(t, n) {
  this._pairs.push([t, n]);
};
He.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ye);
  } : ye;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function zt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Me(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || zt;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new fe(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ge {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ve = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jt = typeof URLSearchParams < "u" ? URLSearchParams : fe, Kt = typeof FormData < "u" ? FormData : null, Vt = typeof Blob < "u" ? Blob : null, Wt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jt,
    FormData: Kt,
    Blob: Vt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, de = typeof window < "u" && typeof document < "u", ie = typeof navigator == "object" && navigator || void 0, Xt = de && (!ie || ["ReactNative", "NativeScript", "NS"].indexOf(ie.product) < 0), Gt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Qt = de && window.location.href || "http://localhost", Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: de,
  hasStandardBrowserEnv: Xt,
  hasStandardBrowserWebWorkerEnv: Gt,
  navigator: ie,
  origin: Qt
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Zt,
  ...Wt
};
function Yt(e, t) {
  return Q(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function en(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function tn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function $e(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = tn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(en(r), s, n, 0);
    }), n;
  }
  return null;
}
function nn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const M = {
  transitional: ve,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify($e(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Yt(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Q(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), nn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || M.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  M.headers[e] = {};
});
const rn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), sn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && rn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, be = Symbol("internals");
function I(e) {
  return e && String(e).trim().toLowerCase();
}
function z(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(z) : String(e);
}
function on(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const an = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ee(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function cn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function un(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let A = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, u) {
      const l = I(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, l);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || f] = z(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => o(u, l, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !an(t))
      i(sn(t), n);
    else if (a.isHeaders(t))
      for (const [c, f] of t.entries())
        o(f, c, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = I(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return on(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = I(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ee(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = I(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ee(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ee(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = z(s), delete n[o];
        return;
      }
      const c = t ? cn(o) : String(o).trim();
      c !== o && delete n[o], n[c] = z(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[be] = this[be] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = I(i);
      r[c] || (un(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(A);
function te(e, t) {
  const n = this || M, r = t || n, s = A.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function ze(e) {
  return !!(e && e.__CANCEL__);
}
function j(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(j, m, {
  __CANCEL__: !0
});
function Je(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ln(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function fn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let d = o, y = 0;
    for (; d !== s; )
      y += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const E = l && u - l;
    return E ? Math.round(y * 1e3 / E) : void 0;
  };
}
function dn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), e.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - n;
    d >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const K = (e, t, n = 3) => {
  let r = 0;
  const s = fn(50, 250);
  return dn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, u = s(f), l = i <= c;
    r = i;
    const d = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && c && l ? (c - i) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Ee = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Se = (e) => (...t) => a.asap(() => e(...t)), pn = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, hn = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function mn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ke(e, t, n) {
  let r = !mn(t);
  return e && r || n == !1 ? wn(e, t) : t;
}
const Re = (e) => e instanceof A ? { ...e } : e;
function U(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, d, y) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: y }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, d, y) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, d, y);
    } else return r(u, l, d, y);
  }
  function o(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, d) {
    if (d in t)
      return r(u, l);
    if (d in e)
      return r(void 0, u);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l, d) => s(Re(u), Re(l), d, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = f[l] || s, y = d(e[l], t[l], l);
    a.isUndefined(y) && d !== c || (n[l] = y);
  }), n;
}
const Ve = (e) => {
  const t = U({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = A.from(i), t.url = Me(Ke(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [u, ...l] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && pn(t.url))) {
    const u = s && o && hn.read(o);
    u && i.set(s, u);
  }
  return t;
}, yn = typeof XMLHttpRequest < "u", gn = yn && function(e) {
  return new Promise(function(n, r) {
    const s = Ve(e);
    let o = s.data;
    const i = A.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s, l, d, y, E, p;
    function w() {
      E && E(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function b() {
      if (!h)
        return;
      const R = A.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), T = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: R,
        config: e,
        request: h
      };
      Je(function(k) {
        n(k), w();
      }, function(k) {
        r(k), w();
      }, T), h = null;
    }
    "onloadend" in h ? h.onloadend = b : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, h.onabort = function() {
      h && (r(new m("Request aborted", m.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const T = s.transitional || ve;
      s.timeoutErrorMessage && (N = s.timeoutErrorMessage), r(new m(
        N,
        T.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(N, T) {
      h.setRequestHeader(T, N);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), u && ([y, p] = K(u, !0), h.addEventListener("progress", y)), f && h.upload && ([d, E] = K(f), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", E)), (s.cancelToken || s.signal) && (l = (R) => {
      h && (r(!R || R.type ? new j(null, e, h) : R), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const S = ln(s.url);
    if (S && O.protocols.indexOf(S) === -1) {
      r(new m("Unsupported protocol " + S + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, bn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof m ? l : new j(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
  }
}, En = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Sn = async function* (e, t) {
  for await (const n of Rn(e))
    yield* En(n, t);
}, Rn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Oe = (e, t, n, r) => {
  const s = Sn(e, t);
  let o = 0, i, c = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), f.close();
          return;
        }
        let d = l.byteLength;
        if (n) {
          let y = o += d;
          n(y);
        }
        f.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(f) {
      return c(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Z = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", We = Z && typeof ReadableStream == "function", On = Z && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Xe = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Tn = We && Xe(() => {
  let e = !1;
  const t = new Request(O.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Te = 64 * 1024, ae = We && Xe(() => a.isReadableStream(new Response("").body)), V = {
  stream: ae && ((e) => e.body)
};
Z && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !V[t] && (V[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const An = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(O.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await On(e)).byteLength;
}, xn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? An(t);
}, Cn = Z && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: u,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: y
  } = Ve(e);
  u = u ? (u + "").toLowerCase() : "text";
  let E = bn([s, o && o.toAbortSignal()], i), p;
  const w = E && E.unsubscribe && (() => {
    E.unsubscribe();
  });
  let h;
  try {
    if (f && Tn && n !== "get" && n !== "head" && (h = await xn(l, r)) !== 0) {
      let T = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), L;
      if (a.isFormData(r) && (L = T.headers.get("content-type")) && l.setContentType(L), T.body) {
        const [k, v] = Ee(
          h,
          K(Se(f))
        );
        r = Oe(T.body, Te, k, v);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    p = new Request(t, {
      ...y,
      signal: E,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: b ? d : void 0
    });
    let S = await fetch(p);
    const R = ae && (u === "stream" || u === "response");
    if (ae && (c || R && w)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((pe) => {
        T[pe] = S[pe];
      });
      const L = a.toFiniteNumber(S.headers.get("content-length")), [k, v] = c && Ee(
        L,
        K(Se(c), !0)
      ) || [];
      S = new Response(
        Oe(S.body, Te, k, () => {
          v && v(), w && w();
        }),
        T
      );
    }
    u = u || "text";
    let N = await V[a.findKey(V, u) || "text"](S, e);
    return !R && w && w(), await new Promise((T, L) => {
      Je(T, L, {
        data: N,
        headers: A.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: p
      });
    });
  } catch (b) {
    throw w && w(), b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, p),
      {
        cause: b.cause || b
      }
    ) : m.from(b, b && b.code, e, p);
  }
}), ce = {
  http: Mt,
  xhr: gn,
  fetch: Cn
};
a.forEach(ce, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ae = (e) => `- ${e}`, Pn = (e) => a.isFunction(e) || e === null || e === !1, Ge = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Pn(n) && (r = ce[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ae).join(`
`) : " " + Ae(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ce
};
function ne(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new j(null, e);
}
function xe(e) {
  return ne(e), e.headers = A.from(e.headers), e.data = te.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ge.getAdapter(e.adapter || M.adapter)(e).then(function(r) {
    return ne(e), r.data = te.call(
      e,
      e.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return ze(r) || (ne(e), r && r.response && (r.response.data = te.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const Qe = "1.8.3", Y = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Y[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ce = {};
Y.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Qe + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Ce[i] && (Ce[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
Y.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Nn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const J = {
  assertOptions: Nn,
  validators: Y
}, P = J.validators;
let F = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ge(),
      response: new ge()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = U(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && J.assertOptions(r, {
      silentJSONParsing: P.transitional(P.boolean),
      forcedJSONParsing: P.transitional(P.boolean),
      clarifyTimeoutError: P.transitional(P.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : J.assertOptions(s, {
      encode: P.function,
      serialize: P.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), J.assertOptions(n, {
      baseUrl: P.spelling("baseURL"),
      withXsrfToken: P.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = A.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (f = f && w.synchronous, c.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let l, d = 0, y;
    if (!f) {
      const p = [xe.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, u), y = p.length, l = Promise.resolve(n); d < y; )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    y = c.length;
    let E = n;
    for (d = 0; d < y; ) {
      const p = c[d++], w = c[d++];
      try {
        E = p(E);
      } catch (h) {
        w.call(this, h);
        break;
      }
    }
    try {
      l = xe.call(this, E);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, y = u.length; d < y; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = U(this.defaults, t);
    const n = Ke(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Me(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  F.prototype[t] = function(n, r) {
    return this.request(U(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(U(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  F.prototype[t] = n(), F.prototype[t + "Form"] = n(!0);
});
let Ln = class Ze {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new j(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ze(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function kn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function _n(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ue = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ue).forEach(([e, t]) => {
  ue[t] = e;
});
function Ye(e) {
  const t = new F(e), n = Le(F.prototype.request, t);
  return a.extend(n, F.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ye(U(e, s));
  }, n;
}
const g = Ye(M);
g.Axios = F;
g.CanceledError = j;
g.CancelToken = Ln;
g.isCancel = ze;
g.VERSION = Qe;
g.toFormData = Q;
g.AxiosError = m;
g.Cancel = g.CanceledError;
g.all = function(t) {
  return Promise.all(t);
};
g.spread = kn;
g.isAxiosError = _n;
g.mergeConfig = U;
g.AxiosHeaders = A;
g.formToJSON = (e) => $e(a.isHTMLForm(e) ? new FormData(e) : e);
g.getAdapter = Ge.getAdapter;
g.HttpStatusCode = ue;
g.default = g;
const {
  Axios: Yn,
  AxiosError: er,
  CanceledError: tr,
  isCancel: nr,
  CancelToken: rr,
  VERSION: sr,
  all: or,
  Cancel: ir,
  isAxiosError: ar,
  spread: cr,
  toFormData: ur,
  AxiosHeaders: lr,
  HttpStatusCode: fr,
  formToJSON: dr,
  getAdapter: pr,
  mergeConfig: hr
} = g, et = "https://tracker-server.site";
async function B(e, t) {
  try {
    const n = Xn.getApiKey();
    if (!n)
      throw new Error("API KEY가 설정되지 않았습니다");
    const r = `${et}${e}`, s = {
      Authorization: `Bearer ${n}`,
      "Content-Type": "application/json"
    };
    return (await g.post(r, t, {
      headers: s,
      withCredentials: !0
    })).data;
  } catch (n) {
    throw console.error("api 요청 실패", n), n;
  }
}
async function Fn() {
  try {
    const e = `${et}/trackerSdk/userCookieId`;
    await g.get(e, { withCredentials: !0 });
  } catch (e) {
    throw console.error("유저 쿠키 요청 실패 ", e), e;
  }
}
function Un() {
  const e = {
    referrer: document.referrer || "direct"
  };
  B("/trackerSdk/pageInfo/referrer", e);
}
function re() {
  const e = Bn(), t = {
    url: window.location.href,
    loadTime: e
  };
  B("/trackerSdk/pageInfo", t);
}
function Bn() {
  const [e] = performance.getEntriesByType(
    "navigation"
  );
  return e ? Math.floor(e.loadEventEnd - e.startTime) : null;
}
function Dn(e, t) {
  let n = null;
  return function(...r) {
    n && clearTimeout(n), n = setTimeout(() => {
      e(...r);
    }, t);
  };
}
const jn = Dn(() => {
  In();
}, 500);
function In() {
  const e = document.documentElement.scrollTop, t = window.innerHeight, n = document.documentElement.scrollHeight, r = Math.floor(
    (e + t) / n * 100
  );
  let s;
  r > 0 && r <= 25 ? s = 25 : r > 25 && r <= 50 ? s = 50 : r > 50 && r <= 75 ? s = 75 : r > 75 && r <= 100 && (s = 100);
  const o = {
    url: window.location.href,
    scrollDepth: s || 0
  };
  B("/trackerSdk/userAction/scrollDepth", o);
}
function qn() {
  const e = {
    url: window.location.href
  };
  B("/trackerSdk/userAction/bounceRate", e);
}
function Pe() {
  B("/trackerSdk/userConnection", {
    isOnline: !0
  });
}
function Ne() {
  const e = {
    isOnline: !1
  };
  navigator.sendBeacon("/trackerSdk/userConnection", JSON.stringify(e));
}
function Hn() {
  const e = {
    browser: zn(),
    isMobile: vn(),
    os: Mn(),
    resolution: $n()
  };
  B("/trackerSdk/userDevice", e);
}
function Mn() {
  const e = navigator.userAgent.toLowerCase();
  return e.indexOf("windows") === 0 ? "Windows" : e.indexOf("mac") === 0 ? "macOS" : e.indexOf("android") === 0 ? "Android" : e.indexOf("ipad") === 0 || e.indexOf("iphone") === 0 ? "iOS" : "Other";
}
function vn() {
  const e = navigator.userAgent.toLowerCase();
  return e.indexOf("android") === 0 || e.indexOf("ipad") === 0 || e.indexOf("iphone") === 0;
}
function $n() {
  return `${window.screen.width}x${window.screen.height}`;
}
function zn() {
  const e = navigator.userAgent.toLowerCase();
  return e.indexOf("chrome") === 0 ? "Chrome" : e.indexOf("safari") === 0 ? "Safari" : e.indexOf("firefox") === 0 ? "Firefox" : e.indexOf("whale") === 0 ? "NaverWhale" : e.indexOf("edge") === 0 ? "Edge" : e.indexOf("trident") !== -1 || e.indexOf("mise") !== -1 ? "InternetExplorer" : "Other";
}
async function Jn() {
  const t = {
    country: await Kn(),
    language: Vn()
  };
  B("/trackerSdk/userInfo", t);
}
async function Kn() {
  try {
    return (await g.get("https://ipapi.co/json/")).data.country_name || "unknownCountry";
  } catch (e) {
    return console.error("country 찾기 오류", e), "unknownCountry";
  }
}
function Vn() {
  return (window.navigator.language || "unknownLanguage").split("-")[1];
}
class Wn {
  constructor() {
    he(this, "apiKey", null);
  }
  async init(t) {
    if (t.trim() === "")
      throw new Error("api key가 없습니다");
    this.apiKey = t, await Fn(), window.addEventListener("load", async () => {
      sessionStorage.getItem("userinfoSent") || (await Jn(), sessionStorage.setItem("userInfoSent", "true"));
    }), window.addEventListener("load", async () => {
      sessionStorage.getItem("userDeviceSent") || (await Hn(), sessionStorage.setItem("userDeviceSent", "true"));
    }), window.addEventListener("load", re), window.addEventListener("popstate", re);
    const n = history.pushState;
    history.pushState = (...r) => {
      n(...r), re();
    }, window.addEventListener("load", async () => {
      sessionStorage.getItem("userPageReferrer") || (await Un(), sessionStorage.setItem("userPageReferrer", "true"));
    }), window.addEventListener("load", Pe), document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" ? Pe() : document.visibilityState === "hidden" && Ne();
    }), window.addEventListener("pagehide", Ne), window.addEventListener("beforeunload", qn), window.addEventListener("scroll", jn);
  }
  getApiKey() {
    return this.apiKey;
  }
}
const Xn = new Wn();
export {
  Xn as tracker
};
