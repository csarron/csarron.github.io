! function () {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var h = (c.navigator || {}).userAgent,
        z = void 0 === h ? "" : h,
        v = c,
        m = l,
        s = (v.document, !!m.documentElement && !!m.head && "function" == typeof m.addEventListener && m.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        a = v || {};
    a[s] || (a[s] = {}), a[s].styles || (a[s].styles = {}), a[s].hooks || (a[s].hooks = {}), a[s].shims || (a[s].shims = []);
    var t = a[s];

    function M(c, z) {
        var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
            h = void 0 !== l && l,
            v = Object.keys(z).reduce(function (c, l) {
                var h = z[l];
                return h.icon ? c[h.iconName] = h.icon : c[l] = h, c
            }, {});
        "function" != typeof t.hooks.addPack || h ? t.styles[c] = function (v) {
            for (var c = 1; c < arguments.length; c++) {
                var m = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(m);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(m).filter(function (c) {
                    return Object.getOwnPropertyDescriptor(m, c).enumerable
                }))), l.forEach(function (c) {
                    var l, h, z;
                    l = v, z = m[h = c], h in l ? Object.defineProperty(l, h, {
                        value: z,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[h] = z
                })
            }
            return v
        }({}, t.styles[c] || {}, v) : t.hooks.addPack(c, v), "fas" === c && M("fa", z)
    }
    var f = {
        github: [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"],
        leanpub: [576, 512, [], "f212", "M386.539 111.485l15.096 248.955-10.979-.275c-36.232-.824-71.64 8.783-102.657 27.997-31.016-19.214-66.424-27.997-102.657-27.997-45.564 0-82.07 10.705-123.516 27.723L93.117 129.6c28.546-11.803 61.484-18.115 92.226-18.115 41.173 0 73.836 13.175 102.657 42.544 27.723-28.271 59.013-41.721 98.539-42.544zM569.07 448c-25.526 0-47.485-5.215-70.542-15.645-34.31-15.645-69.993-24.978-107.871-24.978-38.977 0-74.934 12.901-102.657 40.623-27.723-27.723-63.68-40.623-102.657-40.623-37.878 0-73.561 9.333-107.871 24.978C55.239 442.236 32.731 448 8.303 448H6.93L49.475 98.859C88.726 76.626 136.486 64 181.775 64 218.83 64 256.984 71.685 288 93.095 319.016 71.685 357.17 64 394.225 64c45.289 0 93.049 12.626 132.3 34.859L569.07 448zm-43.368-44.741l-34.036-280.246c-30.742-13.999-67.248-21.41-101.009-21.41-38.428 0-74.385 12.077-102.657 38.702-28.272-26.625-64.228-38.702-102.657-38.702-33.761 0-70.267 7.411-101.009 21.41L50.298 403.259c47.211-19.487 82.894-33.486 135.045-33.486 37.604 0 70.817 9.606 102.657 29.644 31.84-20.038 65.052-29.644 102.657-29.644 52.151 0 87.834 13.999 135.045 33.486z"],
        linkedin: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
    };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!e) throw c
        }
    }(function () {
        M("fab", f)
    })
}(),
function () {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var h = (c.navigator || {}).userAgent,
        z = void 0 === h ? "" : h,
        v = c,
        m = l,
        s = (v.document, !!m.documentElement && !!m.head && "function" == typeof m.addEventListener && m.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        a = v || {};
    a[s] || (a[s] = {}), a[s].styles || (a[s].styles = {}), a[s].hooks || (a[s].hooks = {}), a[s].shims || (a[s].shims = []);
    var t = a[s];

    function M(c, z) {
        var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
            h = void 0 !== l && l,
            v = Object.keys(z).reduce(function (c, l) {
                var h = z[l];
                return h.icon ? c[h.iconName] = h.icon : c[l] = h, c
            }, {});
        "function" != typeof t.hooks.addPack || h ? t.styles[c] = function (v) {
            for (var c = 1; c < arguments.length; c++) {
                var m = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(m);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(m).filter(function (c) {
                    return Object.getOwnPropertyDescriptor(m, c).enumerable
                }))), l.forEach(function (c) {
                    var l, h, z;
                    l = v, z = m[h = c], h in l ? Object.defineProperty(l, h, {
                        value: z,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[h] = z
                })
            }
            return v
        }({}, t.styles[c] || {}, v) : t.hooks.addPack(c, v), "fas" === c && M("fa", z)
    }
    var f = {
        building: [448, 512, [], "f1ad", "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"],
        circle: [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"],
        envelope: [512, 512, [], "f0e0", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"],
        heart: [512, 512, [], "f004", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"],
        user: [448, 512, [], "f007", "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"]
    };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!e) throw c
        }
    }(function () {
        M("far", f)
    })
}(),
function () {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var h = (c.navigator || {}).userAgent,
        z = void 0 === h ? "" : h,
        v = c,
        m = l,
        s = (v.document, !!m.documentElement && !!m.head && "function" == typeof m.addEventListener && m.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        a = v || {};
    a[s] || (a[s] = {}), a[s].styles || (a[s].styles = {}), a[s].hooks || (a[s].hooks = {}), a[s].shims || (a[s].shims = []);
    var t = a[s];

    function M(c, z) {
        var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
            h = void 0 !== l && l,
            v = Object.keys(z).reduce(function (c, l) {
                var h = z[l];
                return h.icon ? c[h.iconName] = h.icon : c[l] = h, c
            }, {});
        "function" != typeof t.hooks.addPack || h ? t.styles[c] = function (v) {
            for (var c = 1; c < arguments.length; c++) {
                var m = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(m);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(m).filter(function (c) {
                    return Object.getOwnPropertyDescriptor(m, c).enumerable
                }))), l.forEach(function (c) {
                    var l, h, z;
                    l = v, z = m[h = c], h in l ? Object.defineProperty(l, h, {
                        value: z,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[h] = z
                })
            }
            return v
        }({}, t.styles[c] || {}, v) : t.hooks.addPack(c, v), "fas" === c && M("fa", z)
    }
    var f = {
        bars: [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
        blog: [512, 512, [], "f781", "M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"],
        briefcase: [512, 512, [], "f0b1", "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"],
        building: [448, 512, [], "f1ad", "M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"],
        circle: [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"],
        code: [640, 512, [], "f121", "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"],
        envelope: [512, 512, [], "f0e0", "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"],
        "hand-paper": [448, 512, [], "f256", "M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z"],
        heart: [512, 512, [], "f004", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"],
        "location-arrow": [512, 512, [], "f124", "M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"],
        trophy: [576, 512, [], "f091", "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"],
        university: [512, 512, [], "f19c", "M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"],
        user: [448, 512, [], "f007", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]
    };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!e) throw c
        }
    }(function () {
        M("fas", f)
    })
}(),
function () {
    "use strict";

    function v(c) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (c) {
            return typeof c
        } : function (c) {
            return c && "function" == typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
        })(c)
    }

    function m(c, l) {
        for (var h = 0; h < l.length; h++) {
            var z = l[h];
            z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(c, z.key, z)
        }
    }

    function X(v) {
        for (var c = 1; c < arguments.length; c++) {
            var m = null != arguments[c] ? arguments[c] : {},
                l = Object.keys(m);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(m).filter(function (c) {
                return Object.getOwnPropertyDescriptor(m, c).enumerable
            }))), l.forEach(function (c) {
                var l, h, z;
                l = v, z = m[h = c], h in l ? Object.defineProperty(l, h, {
                    value: z,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : l[h] = z
            })
        }
        return v
    }

    function r(c, l) {
        return function (c) {
            if (Array.isArray(c)) return c
        }(c) || function (c, l) {
            var h = [],
                z = !0,
                v = !1,
                m = void 0;
            try {
                for (var s, e = c[Symbol.iterator](); !(z = (s = e.next()).done) && (h.push(s.value), !l || h.length !== l); z = !0);
            } catch (c) {
                v = !0, m = c
            } finally {
                try {
                    z || null == e.return || e.return()
                } finally {
                    if (v) throw m
                }
            }
            return h
        }(c, l) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function n(c) {
        return function (c) {
            if (Array.isArray(c)) {
                for (var l = 0, h = new Array(c.length); l < c.length; l++) h[l] = c[l];
                return h
            }
        }(c) || function (c) {
            if (Symbol.iterator in Object(c) || "[object Arguments]" === Object.prototype.toString.call(c)) return Array.from(c)
        }(c) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var c = function () {},
        l = {},
        h = {},
        z = null,
        s = {
            mark: c,
            measure: c
        };
    try {
        "undefined" != typeof window && (l = window), "undefined" != typeof document && (h = document), "undefined" != typeof MutationObserver && (z = MutationObserver), "undefined" != typeof performance && (s = performance)
    } catch (c) {}
    var e = (l.navigator || {}).userAgent,
        a = void 0 === e ? "" : e,
        H = l,
        i = h,
        t = z,
        M = s,
        f = !!H.document,
        o = !!i.documentElement && !!i.head && "function" == typeof i.addEventListener && "function" == typeof i.createElement,
        p = ~a.indexOf("MSIE") || ~a.indexOf("Trident/"),
        V = "___FONT_AWESOME___",
        b = 16,
        C = "fa",
        L = "svg-inline--fa",
        B = "data-fa-i2svg",
        u = "data-fa-pseudo-element",
        d = "data-fa-pseudo-element-pending",
        g = "data-prefix",
        S = "data-icon",
        y = "fontawesome-i2svg",
        w = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        k = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        A = {
            fas: "solid",
            far: "regular",
            fal: "light",
            fab: "brands",
            fa: "solid"
        },
        x = {
            solid: "fas",
            regular: "far",
            light: "fal",
            brands: "fab"
        },
        j = "fa-layers-text",
        q = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,
        O = {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal"
        },
        E = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        P = E.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        N = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        _ = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(E.map(function (c) {
            return "".concat(c, "x")
        })).concat(P.map(function (c) {
            return "w-".concat(c)
        })),
        T = H.FontAwesomeConfig || {};
    i && "function" == typeof i.querySelector && [
        ["data-family-prefix", "familyPrefix"],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-auto-a11y", "autoA11y"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-observe-mutations", "observeMutations"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
    ].forEach(function (c) {
        var l, h = r(c, 2),
            z = h[0],
            v = h[1],
            m = "" === (l = function (c) {
                var l = i.querySelector("script[" + c + "]");
                if (l) return l.getAttribute(c)
            }(z)) || "false" !== l && ("true" === l || l);
        null != m && (T[v] = m)
    });
    var R = X({}, {
        familyPrefix: C,
        replacementClass: L,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, T);
    R.autoReplaceSvg || (R.observeMutations = !1);
    var U = X({}, R);
    H.FontAwesomeConfig = U;
    var F = H || {};
    F[V] || (F[V] = {}), F[V].styles || (F[V].styles = {}), F[V].hooks || (F[V].hooks = {}), F[V].shims || (F[V].shims = []);
    var I = F[V],
        D = [],
        W = !1;

    function Y(c) {
        o && (W ? setTimeout(c, 0) : D.push(c))
    }
    o && ((W = (i.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState)) || i.addEventListener("DOMContentLoaded", function c() {
        i.removeEventListener("DOMContentLoaded", c), W = 1, D.map(function (c) {
            return c()
        })
    }));
    var K, G = "pending",
        J = "settled",
        Q = "fulfilled",
        Z = "rejected",
        $ = function () {},
        cc = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
        lc = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        hc = [];

    function zc() {
        for (var c = 0; c < hc.length; c++) hc[c][0](hc[c][1]);
        K = !(hc = [])
    }

    function vc(c, l) {
        hc.push([c, l]), K || (K = !0, lc(zc, 0))
    }

    function mc(c) {
        var l = c.owner,
            h = l._state,
            z = l._data,
            v = c[h],
            m = c.then;
        if ("function" == typeof v) {
            h = Q;
            try {
                z = v(z)
            } catch (c) {
                tc(m, c)
            }
        }
        sc(m, z) || (h === Q && ec(m, z), h === Z && tc(m, z))
    }

    function sc(l, h) {
        var z;
        try {
            if (l === h) throw new TypeError("A promises callback cannot return that same promise.");
            if (h && ("function" == typeof h || "object" === v(h))) {
                var c = h.then;
                if ("function" == typeof c) return c.call(h, function (c) {
                    z || (z = !0, h === c ? ac(l, c) : ec(l, c))
                }, function (c) {
                    z || (z = !0, tc(l, c))
                }), !0
            }
        } catch (c) {
            return z || tc(l, c), !0
        }
        return !1
    }

    function ec(c, l) {
        c !== l && sc(c, l) || ac(c, l)
    }

    function ac(c, l) {
        c._state === G && (c._state = J, c._data = l, vc(fc, c))
    }

    function tc(c, l) {
        c._state === G && (c._state = J, c._data = l, vc(rc, c))
    }

    function Mc(c) {
        c._then = c._then.forEach(mc)
    }

    function fc(c) {
        c._state = Q, Mc(c)
    }

    function rc(c) {
        c._state = Z, Mc(c), !c._handled && cc && global.process.emit("unhandledRejection", c._data, c)
    }

    function nc(c) {
        global.process.emit("rejectionHandled", c)
    }

    function Hc(c) {
        if ("function" != typeof c) throw new TypeError("Promise resolver " + c + " is not a function");
        if (this instanceof Hc == 0) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [],
            function (c, l) {
                function h(c) {
                    tc(l, c)
                }
                try {
                    c(function (c) {
                        ec(l, c)
                    }, h)
                } catch (c) {
                    h(c)
                }
            }(c, this)
    }
    Hc.prototype = {
        constructor: Hc,
        _state: G,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (c, l) {
            var h = {
                owner: this,
                then: new this.constructor($),
                fulfilled: c,
                rejected: l
            };
            return !l && !c || this._handled || (this._handled = !0, this._state === Z && cc && vc(nc, this)), this._state === Q || this._state === Z ? vc(mc, h) : this._then.push(h), h.then
        },
        catch: function (c) {
            return this.then(null, c)
        }
    }, Hc.all = function (e) {
        if (!Array.isArray(e)) throw new TypeError("You must pass an array to Promise.all().");
        return new Hc(function (h, c) {
            var z = [],
                v = 0;

            function l(l) {
                return v++,
                    function (c) {
                        z[l] = c, --v || h(z)
                    }
            }
            for (var m, s = 0; s < e.length; s++)(m = e[s]) && "function" == typeof m.then ? m.then(l(s), c) : z[s] = m;
            v || h(z)
        })
    }, Hc.race = function (v) {
        if (!Array.isArray(v)) throw new TypeError("You must pass an array to Promise.race().");
        return new Hc(function (c, l) {
            for (var h, z = 0; z < v.length; z++)(h = v[z]) && "function" == typeof h.then ? h.then(c, l) : c(h)
        })
    }, Hc.resolve = function (l) {
        return l && "object" === v(l) && l.constructor === Hc ? l : new Hc(function (c) {
            c(l)
        })
    }, Hc.reject = function (h) {
        return new Hc(function (c, l) {
            l(h)
        })
    };
    var ic = "function" == typeof Promise ? Promise : Hc,
        oc = b,
        Vc = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };

    function Cc(c) {
        if (c && o) {
            var l = i.createElement("style");
            l.setAttribute("type", "text/css"), l.innerHTML = c;
            for (var h = i.head.childNodes, z = null, v = h.length - 1; - 1 < v; v--) {
                var m = h[v],
                    s = (m.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(s) && (z = m)
            }
            return i.head.insertBefore(l, z), c
        }
    }
    var Lc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function uc() {
        for (var c = 12, l = ""; 0 < c--;) l += Lc[62 * Math.random() | 0];
        return l
    }

    function dc(c) {
        for (var l = [], h = (c || []).length >>> 0; h--;) l[h] = c[h];
        return l
    }

    function pc(c) {
        return c.classList ? dc(c.classList) : (c.getAttribute("class") || "").split(" ").filter(function (c) {
            return c
        })
    }

    function bc(c, l) {
        var h, z = l.split("-"),
            v = z[0],
            m = z.slice(1).join("-");
        return v !== c || "" === m || (h = m, ~_.indexOf(h)) ? null : m
    }

    function gc(c) {
        return "".concat(c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Sc(h) {
        return Object.keys(h || {}).reduce(function (c, l) {
            return c + "".concat(l, ": ").concat(h[l], ";")
        }, "")
    }

    function yc(c) {
        return c.size !== Vc.size || c.x !== Vc.x || c.y !== Vc.y || c.rotate !== Vc.rotate || c.flipX || c.flipY
    }

    function wc(c) {
        var l = c.transform,
            h = c.containerWidth,
            z = c.iconWidth,
            v = {
                transform: "translate(".concat(h / 2, " 256)")
            },
            m = "translate(".concat(32 * l.x, ", ").concat(32 * l.y, ") "),
            s = "scale(".concat(l.size / 16 * (l.flipX ? -1 : 1), ", ").concat(l.size / 16 * (l.flipY ? -1 : 1), ") "),
            e = "rotate(".concat(l.rotate, " 0 0)");
        return {
            outer: v,
            inner: {
                transform: "".concat(m, " ").concat(s, " ").concat(e)
            },
            path: {
                transform: "translate(".concat(z / 2 * -1, " -256)")
            }
        }
    }
    var kc = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };

    function Ac(c) {
        var l = c.icons,
            h = l.main,
            z = l.mask,
            v = c.prefix,
            m = c.iconName,
            s = c.transform,
            e = c.symbol,
            a = c.title,
            t = c.extra,
            M = c.watchable,
            f = void 0 !== M && M,
            r = z.found ? z : h,
            n = r.width,
            H = r.height,
            i = "fa-w-".concat(Math.ceil(n / H * 16)),
            o = [U.replacementClass, m ? "".concat(U.familyPrefix, "-").concat(m) : "", i].filter(function (c) {
                return -1 === t.classes.indexOf(c)
            }).concat(t.classes).join(" "),
            V = {
                children: [],
                attributes: X({}, t.attributes, {
                    "data-prefix": v,
                    "data-icon": m,
                    class: o,
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(n, " ").concat(H)
                })
            };
        f && (V.attributes[B] = ""), a && V.children.push({
            tag: "title",
            attributes: {
                id: V.attributes["aria-labelledby"] || "title-".concat(uc())
            },
            children: [a]
        });
        var C, L, u, d, p, b, g, S, y, w, k, A, x, j, q, O, E, P, N, _, T, R, F, I = X({}, V, {
                prefix: v,
                iconName: m,
                main: h,
                mask: z,
                transform: s,
                symbol: e,
                styles: t.styles
            }),
            D = z.found && h.found ? (L = (C = I).children, u = C.attributes, d = C.main, p = C.mask, b = C.transform, g = d.width, S = d.icon, y = p.width, w = p.icon, k = wc({
                transform: b,
                containerWidth: y,
                iconWidth: g
            }), A = {
                tag: "rect",
                attributes: X({}, kc, {
                    fill: "white"
                })
            }, x = {
                tag: "g",
                attributes: X({}, k.inner),
                children: [{
                    tag: "path",
                    attributes: X({}, S.attributes, k.path, {
                        fill: "black"
                    })
                }]
            }, j = {
                tag: "g",
                attributes: X({}, k.outer),
                children: [x]
            }, q = "mask-".concat(uc()), E = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: O = "clip-".concat(uc())
                    },
                    children: [w]
                }, {
                    tag: "mask",
                    attributes: X({}, kc, {
                        id: q,
                        maskUnits: "userSpaceOnUse",
                        maskContentUnits: "userSpaceOnUse"
                    }),
                    children: [A, j]
                }]
            }, L.push(E, {
                tag: "rect",
                attributes: X({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(O, ")"),
                    mask: "url(#".concat(q, ")")
                }, kc)
            }), {
                children: L,
                attributes: u
            }) : function (c) {
                var l = c.children,
                    h = c.attributes,
                    z = c.main,
                    v = c.transform,
                    m = Sc(c.styles);
                if (0 < m.length && (h.style = m), yc(v)) {
                    var s = wc({
                        transform: v,
                        containerWidth: z.width,
                        iconWidth: z.width
                    });
                    l.push({
                        tag: "g",
                        attributes: X({}, s.outer),
                        children: [{
                            tag: "g",
                            attributes: X({}, s.inner),
                            children: [{
                                tag: z.icon.tag,
                                children: z.icon.children,
                                attributes: X({}, z.icon.attributes, s.path)
                            }]
                        }]
                    })
                } else l.push(z.icon);
                return {
                    children: l,
                    attributes: h
                }
            }(I),
            W = D.children,
            Y = D.attributes;
        return I.children = W, I.attributes = Y, e ? (N = (P = I).prefix, _ = P.iconName, T = P.children, [{
            tag: "svg",
            attributes: {
                style: "display: none;"
            },
            children: [{
                tag: "symbol",
                attributes: X({}, R = P.attributes, {
                    id: !0 === (F = P.symbol) ? "".concat(N, "-").concat(U.familyPrefix, "-").concat(_) : F
                }),
                children: T
            }]
        }]) : function (c) {
            var l = c.children,
                h = c.main,
                z = c.mask,
                v = c.attributes,
                m = c.styles,
                s = c.transform;
            if (yc(s) && h.found && !z.found) {
                var e = h.width / h.height / 2,
                    a = .5;
                v.style = Sc(X({}, m, {
                    "transform-origin": "".concat(e + s.x / 16, "em ").concat(a + s.y / 16, "em")
                }))
            }
            return [{
                tag: "svg",
                attributes: v,
                children: l
            }]
        }(I)
    }

    function xc(c) {
        var l = c.content,
            h = c.width,
            z = c.height,
            v = c.transform,
            m = c.title,
            s = c.extra,
            e = c.watchable,
            a = void 0 !== e && e,
            t = X({}, s.attributes, m ? {
                title: m
            } : {}, {
                class: s.classes.join(" ")
            });
        a && (t[B] = "");
        var M, f, r, n, H, i, o, V, C, L = X({}, s.styles);
        yc(v) && (L.transform = (f = (M = {
            transform: v,
            startCentered: !0,
            width: h,
            height: z
        }).transform, n = void 0 === (r = M.width) ? b : r, i = void 0 === (H = M.height) ? b : H, C = "", C += (V = void 0 !== (o = M.startCentered) && o) && p ? "translate(".concat(f.x / oc - n / 2, "em, ").concat(f.y / oc - i / 2, "em) ") : V ? "translate(calc(-50% + ".concat(f.x / oc, "em), calc(-50% + ").concat(f.y / oc, "em)) ") : "translate(".concat(f.x / oc, "em, ").concat(f.y / oc, "em) "), C += "scale(".concat(f.size / oc * (f.flipX ? -1 : 1), ", ").concat(f.size / oc * (f.flipY ? -1 : 1), ") "), C += "rotate(".concat(f.rotate, "deg) ")), L["-webkit-transform"] = L.transform);
        var u = Sc(L);
        0 < u.length && (t.style = u);
        var d = [];
        return d.push({
            tag: "span",
            attributes: t,
            children: [l]
        }), m && d.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [m]
        }), d
    }
    var jc = function () {},
        qc = U.measurePerformance && M && M.mark && M.measure ? M : {
            mark: jc,
            measure: jc
        },
        Oc = 'FA "5.7.2"',
        Ec = function (c) {
            qc.mark("".concat(Oc, " ").concat(c, " ends")), qc.measure("".concat(Oc, " ").concat(c), "".concat(Oc, " ").concat(c, " begins"), "".concat(Oc, " ").concat(c, " ends"))
        },
        Pc = {
            begin: function (c) {
                return qc.mark("".concat(Oc, " ").concat(c, " begins")),
                    function () {
                        return Ec(c)
                    }
            },
            end: Ec
        },
        Nc = function (c, l, h, z) {
            var v, m, s, e, a, t = Object.keys(c),
                M = t.length,
                f = void 0 !== z ? (e = l, a = z, function (c, l, h, z) {
                    return e.call(a, c, l, h, z)
                }) : l;
            for (s = void 0 === h ? (v = 1, c[t[0]]) : (v = 0, h); v < M; v++) s = f(s, c[m = t[v]], m, c);
            return s
        },
        _c = I.styles,
        Tc = I.shims,
        Rc = {},
        Fc = {},
        Ic = {},
        Dc = function () {
            var c = function (z) {
                return Nc(_c, function (c, l, h) {
                    return c[h] = Nc(l, z, {}), c
                }, {})
            };
            Rc = c(function (c, l, h) {
                return l[3] && (c[l[3]] = h), c
            }), Fc = c(function (l, c, h) {
                var z = c[2];
                return l[h] = h, z.forEach(function (c) {
                    l[c] = h
                }), l
            });
            var m = "far" in _c;
            Ic = Nc(Tc, function (c, l) {
                var h = l[0],
                    z = l[1],
                    v = l[2];
                return "far" !== z || m || (z = "fas"), c[h] = {
                    prefix: z,
                    iconName: v
                }, c
            }, {})
        };

    function Wc(c, l) {
        return Rc[c][l]
    }
    Dc();
    var Yc = I.styles,
        Xc = function () {
            return {
                prefix: null,
                iconName: null,
                rest: []
            }
        };

    function Bc(c) {
        return c.reduce(function (c, l) {
            var h = bc(U.familyPrefix, l);
            if (Yc[l]) c.prefix = l;
            else if (U.autoFetchSvg && -1 < ["fas", "far", "fal", "fab", "fa"].indexOf(l)) c.prefix = l;
            else if (h) {
                var z = "fa" === c.prefix ? Ic[h] || {
                    prefix: null,
                    iconName: null
                } : {};
                c.iconName = z.iconName || h, c.prefix = z.prefix || c.prefix
            } else l !== U.replacementClass && 0 !== l.indexOf("fa-w-") && c.rest.push(l);
            return c
        }, Xc())
    }

    function Uc(c, l, h) {
        if (c && c[l] && c[l][h]) return {
            prefix: l,
            iconName: h,
            icon: c[l][h]
        }
    }

    function Kc(c) {
        var h, l = c.tag,
            z = c.attributes,
            v = void 0 === z ? {} : z,
            m = c.children,
            s = void 0 === m ? [] : m;
        return "string" == typeof c ? gc(c) : "<".concat(l, " ").concat((h = v, Object.keys(h || {}).reduce(function (c, l) {
            return c + "".concat(l, '="').concat(gc(h[l]), '" ')
        }, "").trim()), ">").concat(s.map(Kc).join(""), "</").concat(l, ">")
    }
    var Gc = function () {};

    function Jc(c) {
        return "string" == typeof (c.getAttribute ? c.getAttribute(B) : null)
    }
    var Qc = {
        replace: function (c) {
            var l = c[0],
                h = c[1].map(function (c) {
                    return Kc(c)
                }).join("\n");
            if (l.parentNode && l.outerHTML) l.outerHTML = h + (U.keepOriginalSource && "svg" !== l.tagName.toLowerCase() ? "\x3c!-- ".concat(l.outerHTML, " --\x3e") : "");
            else if (l.parentNode) {
                var z = document.createElement("span");
                l.parentNode.replaceChild(z, l), z.outerHTML = h
            }
        },
        nest: function (c) {
            var l = c[0],
                h = c[1];
            if (~pc(l).indexOf(U.replacementClass)) return Qc.replace(c);
            var z = new RegExp("".concat(U.familyPrefix, "-.*"));
            delete h[0].attributes.style;
            var v = h[0].attributes.class.split(" ").reduce(function (c, l) {
                return l === U.replacementClass || l.match(z) ? c.toSvg.push(l) : c.toNode.push(l), c
            }, {
                toNode: [],
                toSvg: []
            });
            h[0].attributes.class = v.toSvg.join(" ");
            var m = h.map(function (c) {
                return Kc(c)
            }).join("\n");
            l.setAttribute("class", v.toNode.join(" ")), l.setAttribute(B, ""), l.innerHTML = m
        }
    };

    function Zc(h, c) {
        var z = "function" == typeof c ? c : Gc;
        0 === h.length ? z() : (H.requestAnimationFrame || function (c) {
            return c()
        })(function () {
            var c = !0 === U.autoReplaceSvg ? Qc.replace : Qc[U.autoReplaceSvg] || Qc.replace,
                l = Pc.begin("mutate");
            h.map(c), l(), z()
        })
    }
    var $c = !1;

    function cl() {
        $c = !1
    }
    var ll = null;

    function hl(c) {
        if (t && U.observeMutations) {
            var v = c.treeCallback,
                m = c.nodeCallback,
                s = c.pseudoElementsCallback,
                l = c.observeMutationsRoot,
                h = void 0 === l ? i : l;
            ll = new t(function (c) {
                $c || dc(c).forEach(function (c) {
                    if ("childList" === c.type && 0 < c.addedNodes.length && !Jc(c.addedNodes[0]) && (U.searchPseudoElements && s(c.target), v(c.target)), "attributes" === c.type && c.target.parentNode && U.searchPseudoElements && s(c.target.parentNode), "attributes" === c.type && Jc(c.target) && ~N.indexOf(c.attributeName))
                        if ("class" === c.attributeName) {
                            var l = Bc(pc(c.target)),
                                h = l.prefix,
                                z = l.iconName;
                            h && c.target.setAttribute("data-prefix", h), z && c.target.setAttribute("data-icon", z)
                        } else m(c.target)
                })
            }), o && ll.observe(h, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            })
        }
    }

    function zl(c) {
        for (var l = "", h = 0; h < c.length; h++) l += ("000" + c.charCodeAt(h).toString(16)).slice(-4);
        return l
    }

    function vl(c) {
        var l, h, z = c.getAttribute("data-prefix"),
            v = c.getAttribute("data-icon"),
            m = void 0 !== c.innerText ? c.innerText.trim() : "",
            s = Bc(pc(c));
        return z && v && (s.prefix = z, s.iconName = v), s.prefix && 1 < m.length ? s.iconName = (l = s.prefix, h = c.innerText, Fc[l][h]) : s.prefix && 1 === m.length && (s.iconName = Wc(s.prefix, zl(c.innerText))), s
    }
    var ml = function (c) {
        var l = {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        };
        return c ? c.toLowerCase().split(" ").reduce(function (c, l) {
            var h = l.toLowerCase().split("-"),
                z = h[0],
                v = h.slice(1).join("-");
            if (z && "h" === v) return c.flipX = !0, c;
            if (z && "v" === v) return c.flipY = !0, c;
            if (v = parseFloat(v), isNaN(v)) return c;
            switch (z) {
                case "grow":
                    c.size = c.size + v;
                    break;
                case "shrink":
                    c.size = c.size - v;
                    break;
                case "left":
                    c.x = c.x - v;
                    break;
                case "right":
                    c.x = c.x + v;
                    break;
                case "up":
                    c.y = c.y - v;
                    break;
                case "down":
                    c.y = c.y + v;
                    break;
                case "rotate":
                    c.rotate = c.rotate + v
            }
            return c
        }, l) : l
    };

    function sl(c) {
        var l, h, z, v, m, s, e, a = vl(c),
            t = a.iconName,
            M = a.prefix,
            f = a.rest,
            r = (h = [], (l = c.getAttribute("style")) && (h = l.split(";").reduce(function (c, l) {
                var h = l.split(":"),
                    z = h[0],
                    v = h.slice(1);
                return z && 0 < v.length && (c[z] = v.join(":").trim()), c
            }, {})), h),
            n = ml(c.getAttribute("data-fa-transform")),
            H = null !== (z = c.getAttribute("data-fa-symbol")) && ("" === z || z),
            i = (m = dc((v = c).attributes).reduce(function (c, l) {
                return "class" !== c.name && "style" !== c.name && (c[l.name] = l.value), c
            }, {}), s = v.getAttribute("title"), U.autoA11y && (s ? m["aria-labelledby"] = "".concat(U.replacementClass, "-title-").concat(uc()) : (m["aria-hidden"] = "true", m.focusable = "false")), m),
            o = (e = c.getAttribute("data-fa-mask")) ? Bc(e.split(" ").map(function (c) {
                return c.trim()
            })) : Xc();
        return {
            iconName: t,
            title: c.getAttribute("title"),
            prefix: M,
            transform: n,
            symbol: H,
            mask: o,
            extra: {
                classes: f,
                styles: r,
                attributes: i
            }
        }
    }

    function el(c) {
        this.name = "MissingIcon", this.message = c || "Icon unavailable", this.stack = (new Error).stack
    }(el.prototype = Object.create(Error.prototype)).constructor = el;
    var al = {
            fill: "currentColor"
        },
        tl = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
        },
        Ml = {
            tag: "path",
            attributes: X({}, al, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
        },
        fl = X({}, tl, {
            attributeName: "opacity"
        }),
        rl = {
            tag: "g",
            children: [Ml, {
                tag: "circle",
                attributes: X({}, al, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: [{
                    tag: "animate",
                    attributes: X({}, tl, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: X({}, fl, {
                        values: "1;0;1;1;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: X({}, al, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: [{
                    tag: "animate",
                    attributes: X({}, fl, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: X({}, al, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: X({}, fl, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }]
        },
        nl = I.styles;

    function Hl(v, m) {
        return new ic(function (c, l) {
            var h = {
                found: !1,
                width: 512,
                height: 512,
                icon: rl
            };
            if (v && m && nl[m] && nl[m][v]) {
                var z = nl[m][v];
                return c(h = {
                    found: !0,
                    width: z[0],
                    height: z[1],
                    icon: {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: z.slice(4)[0]
                        }
                    }
                })
            }
            v && m && !U.showMissingIcons ? l(new el("Icon is missing for prefix ".concat(m, " with icon name ").concat(v))) : c(h)
        })
    }
    var il = I.styles;

    function ol(c) {
        var m, l, s, e, a, t, M, h, f, z = sl(c);
        return ~z.extra.classes.indexOf(j) ? function (c, l) {
            var h = l.title,
                z = l.transform,
                v = l.extra,
                m = null,
                s = null;
            if (p) {
                var e = parseInt(getComputedStyle(c).fontSize, 10),
                    a = c.getBoundingClientRect();
                m = a.width / e, s = a.height / e
            }
            return U.autoA11y && !h && (v.attributes["aria-hidden"] = "true"), ic.resolve([c, xc({
                content: c.innerHTML,
                width: m,
                height: s,
                transform: z,
                title: h,
                extra: v,
                watchable: !0
            })])
        }(c, z) : (m = c, s = (l = z).iconName, e = l.title, a = l.prefix, t = l.transform, M = l.symbol, h = l.mask, f = l.extra, new ic(function (v, c) {
            ic.all([Hl(s, a), Hl(h.iconName, h.prefix)]).then(function (c) {
                var l = r(c, 2),
                    h = l[0],
                    z = l[1];
                v([m, Ac({
                    icons: {
                        main: h,
                        mask: z
                    },
                    prefix: a,
                    iconName: s,
                    transform: t,
                    symbol: M,
                    mask: z,
                    title: e,
                    extra: f,
                    watchable: !0
                })])
            })
        }))
    }

    function Vl(c) {
        var h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (o) {
            var l = i.documentElement.classList,
                z = function (c) {
                    return l.add("".concat(y, "-").concat(c))
                },
                v = function (c) {
                    return l.remove("".concat(y, "-").concat(c))
                },
                m = U.autoFetchSvg ? Object.keys(A) : Object.keys(il),
                s = [".".concat(j, ":not([").concat(B, "])")].concat(m.map(function (c) {
                    return ".".concat(c, ":not([").concat(B, "])")
                })).join(", ");
            if (0 !== s.length) {
                var e = dc(c.querySelectorAll(s));
                if (0 < e.length) {
                    z("pending"), v("complete");
                    var a = Pc.begin("onTree"),
                        t = e.reduce(function (c, l) {
                            try {
                                var h = ol(l);
                                h && c.push(h)
                            } catch (c) {
                                k || c instanceof el && console.error(c)
                            }
                            return c
                        }, []);
                    return new ic(function (l, c) {
                        ic.all(t).then(function (c) {
                            Zc(c, function () {
                                z("active"), z("complete"), v("pending"), "function" == typeof h && h(), a(), l()
                            })
                        }).catch(function () {
                            a(), c()
                        })
                    })
                }
            }
        }
    }

    function Cl(c) {
        var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        ol(c).then(function (c) {
            c && Zc([c], l)
        })
    }

    function Ll(f, r) {
        var n = "".concat(d).concat(r.replace(":", "-"));
        return new ic(function (z, c) {
            if (null !== f.getAttribute(n)) return z();
            var l = dc(f.children).filter(function (c) {
                    return c.getAttribute(u) === r
                })[0],
                h = H.getComputedStyle(f, r),
                v = h.getPropertyValue("font-family").match(q),
                m = h.getPropertyValue("font-weight");
            if (l && !v) return f.removeChild(l), z();
            if (v) {
                var s = h.getPropertyValue("content"),
                    e = ~["Light", "Regular", "Solid", "Brands"].indexOf(v[1]) ? x[v[1].toLowerCase()] : O[m],
                    a = Wc(e, zl(3 === s.length ? s.substr(1, 1) : s));
                if (l && l.getAttribute(g) === e && l.getAttribute(S) === a) z();
                else {
                    f.setAttribute(n, a), l && f.removeChild(l);
                    var t = {
                            iconName: null,
                            title: null,
                            prefix: null,
                            transform: Vc,
                            symbol: !1,
                            mask: null,
                            extra: {
                                classes: [],
                                styles: {},
                                attributes: {}
                            }
                        },
                        M = t.extra;
                    M.attributes[u] = r, Hl(a, e).then(function (c) {
                        var l = Ac(X({}, t, {
                                icons: {
                                    main: c,
                                    mask: Xc()
                                },
                                prefix: e,
                                iconName: a,
                                extra: M,
                                watchable: !0
                            })),
                            h = i.createElement("svg");
                        ":before" === r ? f.insertBefore(h, f.firstChild) : f.appendChild(h), h.outerHTML = l.map(function (c) {
                            return Kc(c)
                        }).join("\n"), f.removeAttribute(n), z()
                    }).catch(c)
                }
            } else z()
        })
    }

    function ul(c) {
        return ic.all([Ll(c, ":before"), Ll(c, ":after")])
    }

    function dl(c) {
        return !(c.parentNode === document.head || ~w.indexOf(c.tagName.toUpperCase()) || c.getAttribute(u) || c.parentNode && "svg" === c.parentNode.tagName)
    }

    function pl(v) {
        if (o) return new ic(function (c, l) {
            var h = dc(v.querySelectorAll("*")).filter(dl).map(ul),
                z = Pc.begin("searchPseudoElements");
            $c = !0, ic.all(h).then(function () {
                z(), cl(), c()
            }).catch(function () {
                z(), cl(), l()
            })
        })
    }
    var bl = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";

    function gl() {
        var c = C,
            l = L,
            h = U.familyPrefix,
            z = U.replacementClass,
            v = bl;
        if (h !== c || z !== l) {
            var m = new RegExp("\\.".concat(c, "\\-"), "g"),
                s = new RegExp("\\.".concat(l), "g");
            v = v.replace(m, ".".concat(h, "-")).replace(s, ".".concat(z))
        }
        return v
    }

    function Sl(c) {
        return {
            found: !0,
            width: c[0],
            height: c[1],
            icon: {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: c.slice(4)[0]
                }
            }
        }
    }

    function yl() {
        U.autoAddCss && !jl && (Cc(gl()), jl = !0)
    }

    function wl(l, c) {
        return Object.defineProperty(l, "abstract", {
            get: c
        }), Object.defineProperty(l, "html", {
            get: function () {
                return l.abstract.map(function (c) {
                    return Kc(c)
                })
            }
        }), Object.defineProperty(l, "node", {
            get: function () {
                if (o) {
                    var c = i.createElement("div");
                    return c.innerHTML = l.html, c.children
                }
            }
        }), l
    }

    function kl(c) {
        var l = c.prefix,
            h = void 0 === l ? "fa" : l,
            z = c.iconName;
        if (z) return Uc(xl.definitions, h, z) || Uc(I.styles, h, z)
    }
    var Al, xl = new(function () {
            function c() {
                ! function (c, l) {
                    if (!(c instanceof l)) throw new TypeError("Cannot call a class as a function")
                }(this, c), this.definitions = {}
            }
            var l, h, z;
            return l = c, (h = [{
                key: "add",
                value: function () {
                    for (var l = this, c = arguments.length, h = new Array(c), z = 0; z < c; z++) h[z] = arguments[z];
                    var v = h.reduce(this._pullDefinitions, {});
                    Object.keys(v).forEach(function (c) {
                        l.definitions[c] = X({}, l.definitions[c] || {}, v[c]),
                            function c(l, z) {
                                var h = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                                    v = void 0 !== h && h,
                                    m = Object.keys(z).reduce(function (c, l) {
                                        var h = z[l];
                                        return h.icon ? c[h.iconName] = h.icon : c[l] = h, c
                                    }, {});
                                "function" != typeof I.hooks.addPack || v ? I.styles[l] = X({}, I.styles[l] || {}, m) : I.hooks.addPack(l, m), "fas" === l && c("fa", z)
                            }(c, v[c]), Dc()
                    })
                }
            }, {
                key: "reset",
                value: function () {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function (m, c) {
                    var s = c.prefix && c.iconName && c.icon ? {
                        0: c
                    } : c;
                    return Object.keys(s).map(function (c) {
                        var l = s[c],
                            h = l.prefix,
                            z = l.iconName,
                            v = l.icon;
                        m[h] || (m[h] = {}), m[h][z] = v
                    }), m
                }
            }]) && m(l.prototype, h), c
        }()),
        jl = !1,
        ql = {
            i2svg: function () {
                var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (o) {
                    yl();
                    var l = c.node,
                        h = void 0 === l ? i : l,
                        z = c.callback,
                        v = void 0 === z ? function () {} : z;
                    return U.searchPseudoElements && pl(h), Vl(h, v)
                }
                return ic.reject("Operation requires a DOM of some kind.")
            },
            css: gl,
            insertCss: function () {
                jl || (Cc(gl()), jl = !0)
            },
            watch: function () {
                var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    l = c.autoReplaceSvgRoot,
                    h = c.observeMutationsRoot;
                !1 === U.autoReplaceSvg && (U.autoReplaceSvg = !0), U.observeMutations = !0, Y(function () {
                    Pl({
                        autoReplaceSvgRoot: l
                    }), hl({
                        treeCallback: Vl,
                        nodeCallback: Cl,
                        pseudoElementsCallback: pl,
                        observeMutationsRoot: h
                    })
                })
            }
        },
        Ol = (Al = function (c) {
            var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                h = l.transform,
                z = void 0 === h ? Vc : h,
                v = l.symbol,
                m = void 0 !== v && v,
                s = l.mask,
                e = void 0 === s ? null : s,
                a = l.title,
                t = void 0 === a ? null : a,
                M = l.classes,
                f = void 0 === M ? [] : M,
                r = l.attributes,
                n = void 0 === r ? {} : r,
                H = l.styles,
                i = void 0 === H ? {} : H;
            if (c) {
                var o = c.prefix,
                    V = c.iconName,
                    C = c.icon;
                return wl(X({
                    type: "icon"
                }, c), function () {
                    return yl(), U.autoA11y && (t ? n["aria-labelledby"] = "".concat(U.replacementClass, "-title-").concat(uc()) : (n["aria-hidden"] = "true", n.focusable = "false")), Ac({
                        icons: {
                            main: Sl(C),
                            mask: e ? Sl(e.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: o,
                        iconName: V,
                        transform: X({}, Vc, z),
                        symbol: m,
                        title: t,
                        extra: {
                            attributes: n,
                            styles: i,
                            classes: f
                        }
                    })
                })
            }
        }, function (c) {
            var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                h = (c || {}).icon ? c : kl(c || {}),
                z = l.mask;
            return z && (z = (z || {}).icon ? z : kl(z || {})), Al(h, X({}, l, {
                mask: z
            }))
        }),
        El = {
            noAuto: function () {
                U.autoReplaceSvg = !1, U.observeMutations = !1, ll && ll.disconnect()
            },
            config: U,
            dom: ql,
            library: xl,
            parse: {
                transform: function (c) {
                    return ml(c)
                }
            },
            findIconDefinition: kl,
            icon: Ol,
            text: function (c) {
                var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    h = l.transform,
                    z = void 0 === h ? Vc : h,
                    v = l.title,
                    m = void 0 === v ? null : v,
                    s = l.classes,
                    e = void 0 === s ? [] : s,
                    a = l.attributes,
                    t = void 0 === a ? {} : a,
                    M = l.styles,
                    f = void 0 === M ? {} : M;
                return wl({
                    type: "text",
                    content: c
                }, function () {
                    return yl(), xc({
                        content: c,
                        transform: X({}, Vc, z),
                        title: m,
                        extra: {
                            attributes: t,
                            styles: f,
                            classes: ["".concat(U.familyPrefix, "-layers-text")].concat(n(e))
                        }
                    })
                })
            },
            counter: function (c) {
                var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    h = l.title,
                    z = void 0 === h ? null : h,
                    v = l.classes,
                    m = void 0 === v ? [] : v,
                    s = l.attributes,
                    e = void 0 === s ? {} : s,
                    a = l.styles,
                    t = void 0 === a ? {} : a;
                return wl({
                    type: "counter",
                    content: c
                }, function () {
                    return yl(),
                        function (c) {
                            var l = c.content,
                                h = c.title,
                                z = c.extra,
                                v = X({}, z.attributes, h ? {
                                    title: h
                                } : {}, {
                                    class: z.classes.join(" ")
                                }),
                                m = Sc(z.styles);
                            0 < m.length && (v.style = m);
                            var s = [];
                            return s.push({
                                tag: "span",
                                attributes: v,
                                children: [l]
                            }), h && s.push({
                                tag: "span",
                                attributes: {
                                    class: "sr-only"
                                },
                                children: [h]
                            }), s
                        }({
                            content: c.toString(),
                            title: z,
                            extra: {
                                attributes: e,
                                styles: t,
                                classes: ["".concat(U.familyPrefix, "-layers-counter")].concat(n(m))
                            }
                        })
                })
            },
            layer: function (c) {
                return wl({
                    type: "layer"
                }, function () {
                    yl();
                    var l = [];
                    return c(function (c) {
                        Array.isArray(c) ? c.map(function (c) {
                            l = l.concat(c.abstract)
                        }) : l = l.concat(c.abstract)
                    }), [{
                        tag: "span",
                        attributes: {
                            class: "".concat(U.familyPrefix, "-layers")
                        },
                        children: l
                    }]
                })
            },
            toHtml: Kc
        },
        Pl = function () {
            var c = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                l = void 0 === c ? i : c;
            (0 < Object.keys(I.styles).length || U.autoFetchSvg) && o && U.autoReplaceSvg && El.dom.i2svg({
                node: l
            })
        };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!k) throw c
        }
    }(function () {
        f && (H.FontAwesome || (H.FontAwesome = El), Y(function () {
            Pl(), hl({
                treeCallback: Vl,
                nodeCallback: Cl,
                pseudoElementsCallback: pl
            })
        })), I.hooks = X({}, I.hooks, {
            addPack: function (c, l) {
                I.styles[c] = X({}, I.styles[c] || {}, l), Dc(), Pl()
            },
            addShims: function (c) {
                var l;
                (l = I.shims).push.apply(l, n(c)), Dc(), Pl()
            }
        })
    })
}();