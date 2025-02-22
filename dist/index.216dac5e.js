// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1bcN2":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "df962b3d216dac5e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["1bcN2"], null, "parcelRequire3a1a")
// & [Experience Section] REMOVE CLASSES after 1250px (normal => sliders cards)
// & sections: skills & experience
const swiper1 = document.querySelector(".swiper1");
const swiper2 = document.querySelector(".swiper2");
const swiper3 = document.querySelector(".swiper3");
const swiper4 = document.querySelector(".swiper4");
let swiper = null;
const flipCard = document.querySelectorAll(".card-container");
let slideIndex = 2;
let dots = document.querySelectorAll(".slide-circle");
function showDivs(n) {
    let mySlides = document.querySelectorAll(".mySlides");
    if (n > mySlides.length) slideIndex = 1;
    if (n < 1) slideIndex = mySlides.length;
    for(let i = 0; i < mySlides.length; i++)mySlides[i].style.display = "none";
    for(let i1 = 0; i1 < dots.length; i1++)dots[i1].className = dots[i1].className.replace(" transparent", "");
    mySlides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " transparent";
}
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function currentDiv(n) {
    showDivs(slideIndex = n);
}
window.onload = function() {
    if (window.screen.width >= 1250 && window.innerWidth >= 1250) {
        for(let j = 0; j < flipCard.length; j++)flipCard[j].classList.remove("mySlides");
        for(let z = 0; z < flipCard.length; z++)flipCard[z].style.display = "block";
        swiper1.classList.remove("job-swiper-frame");
        swiper2.classList.remove("swiper");
        swiper2.classList.remove("mySwiper");
        swiper3.classList.remove("swiper-wrapper");
        swiper4.classList.remove("swiper-slide");
        swiper = null;
    } else {
        for(let j = 0; j < flipCard.length; j++)flipCard[j].classList.add("mySlides");
        swiper1.classList.add("job-swiper-frame");
        swiper2.classList.add("swiper");
        swiper2.classList.add("mySwiper");
        swiper3.classList.add("swiper-wrapper");
        swiper4.classList.add("swiper-slide");
        swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 100,
                depth: 800,
                modifier: 1,
                slideShadows: false
            }
        });
        showDivs(slideIndex);
    }
};
window.addEventListener("resize", onResizeFunction);
function onResizeFunction() {
    if (window.screen.width >= 1250 && window.innerWidth >= 1250) {
        flipCard[0].classList.remove("mySlides");
        flipCard[1].classList.remove("mySlides");
        flipCard[2].classList.remove("mySlides");
        flipCard[3].classList.remove("mySlides");
        for(let z = 0; z < flipCard.length; z++)flipCard[z].style.display = "block";
        swiper1.classList.remove("job-swiper-frame");
        swiper2.classList.remove("swiper");
        swiper2.classList.remove("mySwiper");
        swiper3.classList.remove("swiper-wrapper");
        swiper4.classList.remove("swiper-slide");
        swiper = null;
    } else {
        flipCard[0].classList.add("mySlides");
        flipCard[1].classList.add("mySlides");
        flipCard[2].classList.add("mySlides");
        flipCard[3].classList.add("mySlides");
        swiper1.classList.add("job-swiper-frame");
        swiper2.classList.add("swiper");
        swiper2.classList.add("mySwiper");
        swiper3.classList.add("swiper-wrapper");
        swiper4.classList.add("swiper-slide");
        swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 100,
                depth: 800,
                modifier: 1,
                slideShadows: false
            }
        });
        showDivs(slideIndex);
    }
}
// & TOGGLE btwn Theme dark/light
const stwch_Theme = document.querySelector("#handlerTheme");
const stwch_ThemeHidden = document.querySelector("#handlerThemeHidden");
const checkboxes = document.querySelectorAll(".themeCheck");
const body = document.getElementsByClassName("dark-theme");
const iconBulb = document.querySelector(".fa-lightbulb");
const elementsHlgt = document.getElementsByClassName("hlgt");
const logo = document.getElementById("logo");
const logoMobile = document.getElementById("logoHidden");
const burguer = document.querySelector(".burger__btn");
let lastScrollY = window.scrollY;
let colorTheme = true;
stwch_Theme.addEventListener("click", themeEventDesktop);
stwch_ThemeHidden.addEventListener("click", themeEventMobile);
function themeEventDesktop() {
    if (stwch_Theme.checked) stwch_ThemeHidden.checked = true;
    else stwch_ThemeHidden.checked = false;
}
function themeEventMobile() {
    if (stwch_ThemeHidden.checked) stwch_Theme.checked = true;
    else stwch_Theme.checked = false;
}
checkboxes.forEach((element)=>element.addEventListener("click", toggleTheme)
);
const navDesk = document.querySelector(".nav__desktop");
function toggleTheme() {
    if (colorTheme === true) {
        document.body.className = document.body.className.replace("dark-theme", "light-theme");
        colorTheme = false;
        if (lastScrollY >= 150) {
            navDesk.classList.add("lightShadow");
            navDesk.classList.remove("darkShadow");
        }
        toggleBulbs();
        toggleHlgt();
        toggleLogo();
    } else {
        document.body.className = document.body.className.replace("light-theme", "dark-theme");
        if (lastScrollY >= 150) {
            navDesk.classList.add("darkShadow");
            navDesk.classList.remove("lightShadow");
        }
        colorTheme = true;
        toggleBulbs();
        toggleHlgt();
        toggleLogo();
    }
}
function toggleBulbs() {
    if (colorTheme) {
        iconBulb.classList.remove("fas");
        iconBulb.classList.add("far");
    } else {
        iconBulb.classList.remove("far");
        iconBulb.classList.add("fas");
    }
}
function toggleHlgt() {
    if (colorTheme) for(let i = 0; i < elementsHlgt.length; i++)elementsHlgt[i].classList.remove("hlgt-light");
    if (!colorTheme) for(let i1 = 0; i1 < elementsHlgt.length; i1++)elementsHlgt[i1].classList.add("hlgt-light");
}
function toggleLogo() {
    if (colorTheme) {
        logo.src = "logo-acc.e023b825.svg";
        logoMobile.src = "logo-acc.e023b825.svg";
    }
    if (!colorTheme) {
        logo.src = "logo.29e49919.svg";
        logoMobile.src = "logo.29e49919.svg";
    }
} //& flipping flip-card after clicking (for mobiles)
 /*
let flipFront = document.querySelectorAll(".flip-card-front");
let flipBack = document.querySelectorAll(".flip-card-back");
let flipInner = document.querySelectorAll(".flip-card-inner");

for (let h = 0; h < flipCard.length; h++) {
  flipBack[h].addEventListener("click", clickable);
  function clickable() {
    flipBack[h].style.transform = "rotateY(0)";
    flipInner[h].style.transform = "rotateY(180deg)";
    flipFront[h].style.transform = "rotateY(180deg)";
  }
}
for (let h = 0; h < flipCard.length; h++) {
  flipFront[h].addEventListener("click", clickable2);
  function clickable2() {
    flipBack[h].style.transform = "rotateY(180g)";
    flipFront[h].style.transform = "rotateY(180deg)";
    flipInner[h].style.transform = "rotateY(0deg)";
  }
}*/ 

//# sourceMappingURL=index.216dac5e.js.map
