!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("Truck")) : "function" == typeof define && define.amd ? define("truck/emptyContainer@1.0.2", ["Truck"], t) : "object" == typeof exports ? exports["truck/emptyContainer@1.0.2"] = t(require("Truck")) : e["truck/emptyContainer@1.0.2"] = t(e.Truck)
}(this, function(e) {
    return function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.i = function(e) {
            return e
        }
        ,
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "https://panxingxiang.github.io/test/",
        t(t.s = 10)
    }([function(e, t, n) {
        n(6);
        var r = n(4)(n(1), n(5), "data-v-4d8b85ad", null);
        e.exports = r.exports
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(9);
        t.default = {
            mixins: [r.Maliang.mixin],
            name: "emptyContainer",
            label: "空容器节点",
            style: {
                left: "0px",
                top: "0px",
                width: "100%",
                height: "100%"
            },
            props: {
                click: {
                    type: Array,
                    default: function() {
                        return []
                    },
                    editer: {
                        label: "点击事件",
                        type: "function"
                    }
                }
            },
            computed: {},
            methods: {
                handleClick: function(e) {
                    this.oncallExecute(this.click, [e])
                }
            }
        }
    }
    , function(e, t, n) {
        t = e.exports = n(3)(),
        t.push([e.i, ".ytc-emptyContainer[data-v-4d8b85ad]{width:100%;height:100%;overflow:auto;position:absolute}", "", {
            version: 3,
            sources: ["/./src/index.vue"],
            names: [],
            mappings: "AACA,qCACE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,iBAAmB,CACpB",
            file: "index.vue",
            sourcesContent: ["\n.ytc-emptyContainer[data-v-4d8b85ad] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: absolute;\n}"],
            sourceRoot: "webpack://"
        }])
    }
    , function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }
            ,
            e.i = function(t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var a = t[o];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                    e.push(a))
                }
            }
            ,
            e
        }
    }
    , function(e, t) {
        e.exports = function(e, t, n, r) {
            var o, i = e = e || {}, a = typeof e.default;
            "object" !== a && "function" !== a || (o = e,
            i = e.default);
            var s = "function" == typeof i ? i.options : i;
            if (t && (s.render = t.render,
            s.staticRenderFns = t.staticRenderFns),
            n && (s._scopeId = n),
            r) {
                var u = Object.create(s.computed || null);
                Object.keys(r).forEach(function(e) {
                    var t = r[e];
                    u[e] = function() {
                        return t
                    }
                }),
                s.computed = u
            }
            return {
                esModule: o,
                exports: i,
                options: s
            }
        }
    }
    , function(e, t) {
        e.exports = {
            render: function() {
                var e = this
                  , t = e.$createElement;
                return (e._self._c || t)("div", {
                    staticClass: "ytc-emptyContainer",
                    on: {
                        click: e.handleClick
                    }
                }, [e._t("default")], 2)
            },
            staticRenderFns: []
        }
    }
    , function(e, t, n) {
        var r = n(2);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        n(7)("2443e3e0", r, !0)
    }
    , function(e, t, n) {
        function r(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t]
                  , r = f[n.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++)
                        r.parts[o](n.parts[o]);
                    for (; o < n.parts.length; o++)
                        r.parts.push(i(n.parts[o]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    for (var a = [], o = 0; o < n.parts.length; o++)
                        a.push(i(n.parts[o]));
                    f[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function o() {
            var e = document.createElement("style");
            return e.type = "text/css",
            p.appendChild(e),
            e
        }
        function i(e) {
            var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
            if (r) {
                if (h)
                    return v;
                r.parentNode.removeChild(r)
            }
            if (m) {
                var i = l++;
                r = d || (d = o()),
                t = a.bind(null, r, i, !1),
                n = a.bind(null, r, i, !0)
            } else
                r = o(),
                t = s.bind(null, r),
                n = function() {
                    r.parentNode.removeChild(r)
                }
                ;
            return t(e),
            function(r) {
                if (r) {
                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap)
                        return;
                    t(e = r)
                } else
                    n()
            }
        }
        function a(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = y(t, o);
            else {
                var i = document.createTextNode(o)
                  , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }
        function s(e, t) {
            var n = t.css
              , r = t.media
              , o = t.sourceMap;
            if (r && e.setAttribute("media", r),
            o && (n += "\n/*# sourceURL=" + o.sources[0] + " */",
            n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
            e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        var u = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !u)
            throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var c = n(8)
          , f = {}
          , p = u && (document.head || document.getElementsByTagName("head")[0])
          , d = null
          , l = 0
          , h = !1
          , v = function() {}
          , m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        e.exports = function(e, t, n) {
            h = n;
            var o = c(e, t);
            return r(o),
            function(t) {
                for (var n = [], i = 0; i < o.length; i++) {
                    var a = o[i]
                      , s = f[a.id];
                    s.refs--,
                    n.push(s)
                }
                t ? (o = c(e, t),
                r(o)) : o = [];
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    if (0 === s.refs) {
                        for (var u = 0; u < s.parts.length; u++)
                            s.parts[u]();
                        delete f[s.id]
                    }
                }
            }
        }
        ;
        var y = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n,
                e.filter(Boolean).join("\n")
            }
        }()
    }
    , function(e, t) {
        e.exports = function(e, t) {
            for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o]
                  , a = i[0]
                  , s = i[1]
                  , u = i[2]
                  , c = i[3]
                  , f = {
                    id: e + ":" + o,
                    css: s,
                    media: u,
                    sourceMap: c
                };
                r[a] ? r[a].parts.push(f) : n.push(r[a] = {
                    id: a,
                    parts: [f]
                })
            }
            return n
        }
    }
    , function(e, t) {
        e.exports = Truck
    }
    , function(e, t, n) {
        e.exports = n(0)
    }
    ])
});
//# sourceMappingURL=index.js.map
