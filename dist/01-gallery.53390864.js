// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8EXaa":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c2a4860653390864";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"6XVkV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _simplelightbox = require("simplelightbox");
var _simplelightboxDefault = parcelHelpers.interopDefault(_simplelightbox);
var _simpleLightboxMinCss = require("simplelightbox/dist/simple-lightbox.min.css");
// Add imports above this line
var _galleryItems = require("./gallery-items");
// Change code below this line
const imageGallery = document.querySelector(".gallery");
const cardsMarkup = createImageCardsMarkup((0, _galleryItems.galleryItems));
function createImageCardsMarkup(images) {
    return images.map(({ preview , original , description  })=>`<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`).join("");
}
imageGallery.insertAdjacentHTML("beforeend", cardsMarkup);
imageGallery.style.listStyle = "none";
const lightbox = new (0, _simplelightboxDefault.default)(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
});
console.log((0, _galleryItems.galleryItems));

},{"simplelightbox":"9ydBq","simplelightbox/dist/simple-lightbox.min.css":"kaxSc","./gallery-items":"9C7dK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ydBq":[function(require,module,exports) {
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.2
*/ "use strict";
var global = arguments[3];
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(obj1) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj1);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
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
            it = it.call(o);
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
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var SimpleLightbox = /*#__PURE__*/ function() {
    function SimpleLightbox1(elements, options) {
        var _this = this;
        _classCallCheck(this, SimpleLightbox1);
        _defineProperty(this, "defaultOptions", {
            sourceAttr: "href",
            overlay: true,
            overlayOpacity: 0.7,
            spinner: true,
            nav: true,
            navText: [
                "&lsaquo;",
                "&rsaquo;"
            ],
            captions: true,
            captionDelay: 0,
            captionSelector: "img",
            captionType: "attr",
            captionsData: "title",
            captionPosition: "bottom",
            captionClass: "",
            captionHTML: true,
            close: true,
            closeText: "&times;",
            swipeClose: true,
            showCounter: true,
            fileExt: "png|jpg|jpeg|gif|webp",
            animationSlide: true,
            animationSpeed: 250,
            preloading: true,
            enableKeyboard: true,
            loop: true,
            rel: false,
            docClose: true,
            swipeTolerance: 50,
            className: "simple-lightbox",
            widthRatio: 0.8,
            heightRatio: 0.9,
            scaleImageToRatio: false,
            disableRightClick: false,
            disableScroll: true,
            alertError: true,
            alertErrorMessage: "Image not found, next image will be loaded",
            additionalHtml: false,
            history: true,
            throttleInterval: 0,
            doubleTapZoom: 2,
            maxZoom: 10,
            htmlClass: "has-lightbox",
            rtl: false,
            fixedClass: "sl-fixed",
            fadeSpeed: 300,
            uniqueImages: true,
            focus: true,
            scrollZoom: true,
            scrollZoomFactor: 0.5,
            download: false
        });
        _defineProperty(this, "transitionPrefix", void 0);
        _defineProperty(this, "isPassiveEventsSupported", void 0);
        _defineProperty(this, "transitionCapable", false);
        _defineProperty(this, "isTouchDevice", "ontouchstart" in window);
        _defineProperty(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
        _defineProperty(this, "initialLocationHash", void 0);
        _defineProperty(this, "pushStateSupport", "pushState" in history);
        _defineProperty(this, "isOpen", false);
        _defineProperty(this, "isAnimating", false);
        _defineProperty(this, "isClosing", false);
        _defineProperty(this, "isFadeIn", false);
        _defineProperty(this, "urlChangedOnce", false);
        _defineProperty(this, "hashReseted", false);
        _defineProperty(this, "historyHasChanges", false);
        _defineProperty(this, "historyUpdateTimeout", null);
        _defineProperty(this, "currentImage", void 0);
        _defineProperty(this, "eventNamespace", "simplelightbox");
        _defineProperty(this, "domNodes", {});
        _defineProperty(this, "loadedImages", []);
        _defineProperty(this, "initialImageIndex", 0);
        _defineProperty(this, "currentImageIndex", 0);
        _defineProperty(this, "initialSelector", null);
        _defineProperty(this, "globalScrollbarWidth", 0);
        _defineProperty(this, "controlCoordinates", {
            swipeDiff: 0,
            swipeYDiff: 0,
            swipeStart: 0,
            swipeEnd: 0,
            swipeYStart: 0,
            swipeYEnd: 0,
            mousedown: false,
            imageLeft: 0,
            zoomed: false,
            containerHeight: 0,
            containerWidth: 0,
            containerOffsetX: 0,
            containerOffsetY: 0,
            imgHeight: 0,
            imgWidth: 0,
            capture: false,
            initialOffsetX: 0,
            initialOffsetY: 0,
            initialPointerOffsetX: 0,
            initialPointerOffsetY: 0,
            initialPointerOffsetX2: 0,
            initialPointerOffsetY2: 0,
            initialScale: 1,
            initialPinchDistance: 0,
            pointerOffsetX: 0,
            pointerOffsetY: 0,
            pointerOffsetX2: 0,
            pointerOffsetY2: 0,
            targetOffsetX: 0,
            targetOffsetY: 0,
            targetScale: 0,
            pinchOffsetX: 0,
            pinchOffsetY: 0,
            limitOffsetX: 0,
            limitOffsetY: 0,
            scaleDifference: 0,
            targetPinchDistance: 0,
            touchCount: 0,
            doubleTapped: false,
            touchmoveCount: 0
        });
        this.options = Object.assign(this.defaultOptions, options);
        this.isPassiveEventsSupported = this.checkPassiveEventsSupport();
        if (typeof elements === "string") {
            this.initialSelector = elements;
            this.elements = Array.from(document.querySelectorAll(elements));
        } else this.elements = typeof elements.length !== "undefined" && elements.length > 0 ? Array.from(elements) : [
            elements
        ];
        this.relatedElements = [];
        this.transitionPrefix = this.calculateTransitionPrefix();
        this.transitionCapable = this.transitionPrefix !== false;
        this.initialLocationHash = this.hash;
        // this should be handled by attribute selector IMHO! => 'a[rel=bla]'...
        if (this.options.rel) this.elements = this.getRelated(this.options.rel);
        if (this.options.uniqueImages) {
            var imgArr = [];
            this.elements = Array.from(this.elements).filter(function(element) {
                var src = element.getAttribute(_this.options.sourceAttr);
                if (imgArr.indexOf(src) === -1) {
                    imgArr.push(src);
                    return true;
                }
                return false;
            });
        }
        this.createDomNodes();
        if (this.options.close) this.domNodes.wrapper.appendChild(this.domNodes.closeButton);
        if (this.options.nav) this.domNodes.wrapper.appendChild(this.domNodes.navigation);
        if (this.options.spinner) this.domNodes.wrapper.appendChild(this.domNodes.spinner);
        this.addEventListener(this.elements, "click." + this.eventNamespace, function(event) {
            if (_this.isValidLink(event.currentTarget)) {
                event.preventDefault();
                if (_this.isAnimating) return false;
                _this.initialImageIndex = _this.elements.indexOf(event.currentTarget);
                _this.openImage(event.currentTarget);
            }
        });
        // close addEventListener click addEventListener doc
        if (this.options.docClose) this.addEventListener(this.domNodes.wrapper, [
            "click." + this.eventNamespace,
            "touchstart." + this.eventNamespace
        ], function(event) {
            if (_this.isOpen && event.target === event.currentTarget) _this.close();
        });
        // disable rightclick
        if (this.options.disableRightClick) this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(event) {
            if (event.target.parentElement.classList.contains("sl-image")) event.preventDefault();
        });
        // keyboard-control
        if (this.options.enableKeyboard) this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(event) {
            _this.controlCoordinates.swipeDiff = 0;
            // keyboard control only if lightbox is open
            if (_this.isAnimating && event.key === "Escape") {
                _this.currentImage.setAttribute("src", "");
                _this.isAnimating = false;
                _this.close();
                return;
            }
            if (_this.isOpen) {
                event.preventDefault();
                if (event.key === "Escape") _this.close();
                if (!_this.isAnimating && [
                    "ArrowLeft",
                    "ArrowRight"
                ].indexOf(event.key) > -1) _this.loadImage(event.key === "ArrowRight" ? 1 : -1);
            }
        }, this.options.throttleInterval));
        this.addEvents();
    }
    _createClass(SimpleLightbox1, [
        {
            key: "checkPassiveEventsSupport",
            value: function checkPassiveEventsSupport() {
                // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
                // Test via a getter in the options object to see if the passive property is accessed
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, "passive", {
                        get: function get() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener("testPassive", null, opts);
                    window.removeEventListener("testPassive", null, opts);
                } catch (e) {}
                return supportsPassive;
            }
        },
        {
            key: "getCaptionElement",
            value: function getCaptionElement(elem) {
                // look at sibling selector
                if (this.options.captionSelector.startsWith("+")) {
                    var selector = this.options.captionSelector.replace(/^\+/, "").trimStart();
                    var sibling = elem.nextElementSibling;
                    if (sibling && sibling.matches(selector)) return sibling;
                    return false;
                } else if (this.options.captionSelector.startsWith(">")) {
                    var _selector = this.options.captionSelector.replace(/^>/, "").trimStart();
                    return elem.querySelector(_selector);
                } else return elem.querySelector(this.options.captionSelector);
            }
        },
        {
            key: "generateQuerySelector",
            value: function generateQuerySelector(elem) {
                var tagName = elem.tagName, id = elem.id, className = elem.className, parentNode = elem.parentNode;
                if (tagName === "HTML") return "HTML";
                var str = tagName;
                str += id !== "" ? "#".concat(id) : "";
                if (className) {
                    var classes = className.trim().split(/\s/);
                    for(var i = 0; i < classes.length; i++)str += ".".concat(classes[i]);
                }
                var childIndex = 1;
                for(var e = elem; e.previousElementSibling; e = e.previousElementSibling)childIndex += 1;
                str += ":nth-child(".concat(childIndex, ")");
                return "".concat(this.generateQuerySelector(parentNode), " > ").concat(str);
            }
        },
        {
            key: "createDomNodes",
            value: function createDomNodes() {
                this.domNodes.overlay = document.createElement("div");
                this.domNodes.overlay.classList.add("sl-overlay");
                this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity;
                this.domNodes.closeButton = document.createElement("button");
                this.domNodes.closeButton.classList.add("sl-close");
                this.domNodes.closeButton.innerHTML = this.options.closeText;
                this.domNodes.spinner = document.createElement("div");
                this.domNodes.spinner.classList.add("sl-spinner");
                this.domNodes.spinner.innerHTML = "<div></div>";
                this.domNodes.navigation = document.createElement("div");
                this.domNodes.navigation.classList.add("sl-navigation");
                this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '</button><button class="sl-next">').concat(this.options.navText[1], "</button>");
                this.domNodes.counter = document.createElement("div");
                this.domNodes.counter.classList.add("sl-counter");
                this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>';
                this.domNodes.download = document.createElement("div");
                this.domNodes.download.classList.add("sl-download");
                this.domNodes.downloadLink = document.createElement("a");
                this.domNodes.downloadLink.setAttribute("download", "");
                this.domNodes.downloadLink.textContent = this.options.download;
                this.domNodes.download.appendChild(this.domNodes.downloadLink);
                this.domNodes.caption = document.createElement("div");
                this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition);
                if (this.options.captionClass) {
                    var _this$domNodes$captio;
                    var captionClasses = this.options.captionClass.split(/[\s,]+/);
                    (_this$domNodes$captio = this.domNodes.caption.classList).add.apply(_this$domNodes$captio, _toConsumableArray(captionClasses));
                }
                this.domNodes.image = document.createElement("div");
                this.domNodes.image.classList.add("sl-image");
                this.domNodes.wrapper = document.createElement("div");
                this.domNodes.wrapper.classList.add("sl-wrapper");
                this.domNodes.wrapper.setAttribute("tabindex", -1);
                this.domNodes.wrapper.setAttribute("role", "dialog");
                this.domNodes.wrapper.setAttribute("aria-hidden", false);
                if (this.options.className) this.domNodes.wrapper.classList.add(this.options.className);
                if (this.options.rtl) this.domNodes.wrapper.classList.add("sl-dir-rtl");
            }
        },
        {
            key: "throttle",
            value: function throttle(func, limit) {
                var inThrottle;
                return function() {
                    if (!inThrottle) {
                        func.apply(this, arguments);
                        inThrottle = true;
                        setTimeout(function() {
                            return inThrottle = false;
                        }, limit);
                    }
                };
            }
        },
        {
            key: "isValidLink",
            value: function isValidLink(element) {
                return !this.options.fileExt || element.getAttribute(this.options.sourceAttr) && new RegExp("(" + this.options.fileExt + ")($|\\?.*$)", "i").test(element.getAttribute(this.options.sourceAttr));
            }
        },
        {
            key: "calculateTransitionPrefix",
            value: function calculateTransitionPrefix() {
                var s = (document.body || document.documentElement).style;
                return "transition" in s ? "" : "WebkitTransition" in s ? "-webkit-" : "MozTransition" in s ? "-moz-" : "OTransition" in s ? "-o" : false;
            }
        },
        {
            key: "getScrollbarWidth",
            value: function getScrollbarWidth() {
                var scrollbarWidth = 0;
                var scrollDiv = document.createElement("div");
                scrollDiv.classList.add("sl-scrollbar-measure");
                document.body.appendChild(scrollDiv);
                scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            }
        },
        {
            key: "toggleScrollbar",
            value: function toggleScrollbar(type) {
                var scrollbarWidth = 0;
                var fixedElements = [].slice.call(document.querySelectorAll("." + this.options.fixedClass));
                if (type === "hide") {
                    var fullWindowWidth = window.innerWidth;
                    if (!fullWindowWidth) {
                        var documentElementRect = document.documentElement.getBoundingClientRect();
                        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
                    }
                    if (document.body.clientWidth < fullWindowWidth || this.isAppleDevice) {
                        var paddingRight = parseInt(window.getComputedStyle(document.body).paddingRight || 0, 10);
                        scrollbarWidth = this.getScrollbarWidth();
                        document.body.dataset.originalPaddingRight = paddingRight;
                        if (scrollbarWidth > 0 || scrollbarWidth == 0 && this.isAppleDevice) {
                            document.body.classList.add("hidden-scroll");
                            document.body.style.paddingRight = paddingRight + scrollbarWidth + "px";
                            fixedElements.forEach(function(element) {
                                var actualPadding = element.style.paddingRight;
                                var calculatedPadding = window.getComputedStyle(element)["padding-right"];
                                element.dataset.originalPaddingRight = actualPadding;
                                element.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
                            });
                        }
                    }
                } else {
                    document.body.classList.remove("hidden-scroll");
                    document.body.style.paddingRight = document.body.dataset.originalPaddingRight + "px";
                    fixedElements.forEach(function(element) {
                        var padding = element.dataset.originalPaddingRight;
                        if (typeof padding !== "undefined") element.style.paddingRight = padding;
                    });
                }
                return scrollbarWidth;
            }
        },
        {
            key: "close",
            value: function close() {
                var _this2 = this;
                if (!this.isOpen || this.isAnimating || this.isClosing) return false;
                this.isClosing = true;
                var element = this.relatedElements[this.currentImageIndex];
                element.dispatchEvent(new Event("close.simplelightbox"));
                if (this.options.history) {
                    this.historyHasChanges = false;
                    if (!this.hashReseted) this.resetHash();
                }
                this.removeEventListener(document, "focusin." + this.eventNamespace);
                this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed);
                this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
                    if (_this2.options.disableScroll) _this2.toggleScrollbar("show");
                    if (_this2.options.htmlClass && _this2.options.htmlClass !== "") document.querySelector("html").classList.remove(_this2.options.htmlClass);
                    document.body.removeChild(_this2.domNodes.wrapper);
                    if (_this2.options.overlay) document.body.removeChild(_this2.domNodes.overlay);
                    _this2.domNodes.additionalHtml = null;
                    _this2.domNodes.download = null;
                    element.dispatchEvent(new Event("closed.simplelightbox"));
                    _this2.isClosing = false;
                });
                this.currentImage = null;
                this.isOpen = false;
                this.isAnimating = false;
                // reset touchcontrol coordinates
                for(var key in this.controlCoordinates)this.controlCoordinates[key] = 0;
                this.controlCoordinates.mousedown = false;
                this.controlCoordinates.zoomed = false;
                this.controlCoordinates.capture = false;
                this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom);
                this.controlCoordinates.doubleTapped = false;
            }
        },
        {
            key: "hash",
            get: function get() {
                return window.location.hash.substring(1);
            }
        },
        {
            key: "preload",
            value: function preload() {
                var _this3 = this;
                var index = this.currentImageIndex, length = this.relatedElements.length, next = index + 1 < 0 ? length - 1 : index + 1 >= length - 1 ? 0 : index + 1, prev = index - 1 < 0 ? length - 1 : index - 1 >= length - 1 ? 0 : index - 1, nextImage = new Image(), prevImage = new Image();
                nextImage.addEventListener("load", function(event) {
                    var src = event.target.getAttribute("src");
                    if (_this3.loadedImages.indexOf(src) === -1) //is this condition even required... setting multiple times will not change usage...
                    _this3.loadedImages.push(src);
                    _this3.relatedElements[index].dispatchEvent(new Event("nextImageLoaded." + _this3.eventNamespace));
                });
                nextImage.setAttribute("src", this.relatedElements[next].getAttribute(this.options.sourceAttr));
                prevImage.addEventListener("load", function(event) {
                    var src = event.target.getAttribute("src");
                    if (_this3.loadedImages.indexOf(src) === -1) _this3.loadedImages.push(src);
                    _this3.relatedElements[index].dispatchEvent(new Event("prevImageLoaded." + _this3.eventNamespace));
                });
                prevImage.setAttribute("src", this.relatedElements[prev].getAttribute(this.options.sourceAttr));
            }
        },
        {
            key: "loadImage",
            value: function loadImage(direction) {
                var _this4 = this;
                var slideDirection = direction;
                if (this.options.rtl) direction = -direction;
                this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace));
                this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((direction === 1 ? "next" : "prev") + "." + this.eventNamespace));
                var newIndex = this.currentImageIndex + direction;
                if (this.isAnimating || (newIndex < 0 || newIndex >= this.relatedElements.length) && this.options.loop === false) return false;
                this.currentImageIndex = newIndex < 0 ? this.relatedElements.length - 1 : newIndex > this.relatedElements.length - 1 ? 0 : newIndex;
                this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1;
                if (this.options.animationSlide) this.slide(this.options.animationSpeed / 1000, -100 * slideDirection - this.controlCoordinates.swipeDiff + "px");
                this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                    _this4.isAnimating = true;
                    if (!_this4.isClosing) setTimeout(function() {
                        var element = _this4.relatedElements[_this4.currentImageIndex];
                        if (!_this4.currentImage) return;
                        _this4.currentImage.setAttribute("src", element.getAttribute(_this4.options.sourceAttr));
                        if (_this4.loadedImages.indexOf(element.getAttribute(_this4.options.sourceAttr)) === -1) _this4.show(_this4.domNodes.spinner);
                        if (_this4.domNodes.image.contains(_this4.domNodes.caption)) _this4.domNodes.image.removeChild(_this4.domNodes.caption);
                        _this4.adjustImage(slideDirection);
                        if (_this4.options.preloading) _this4.preload();
                    }, 100);
                    else _this4.isAnimating = false;
                });
            }
        },
        {
            key: "adjustImage",
            value: function adjustImage(direction) {
                var _this5 = this;
                if (!this.currentImage) return false;
                var tmpImage = new Image(), windowWidth = window.innerWidth * this.options.widthRatio, windowHeight = window.innerHeight * this.options.heightRatio;
                tmpImage.setAttribute("src", this.currentImage.getAttribute("src"));
                this.currentImage.dataset.scale = 1;
                this.currentImage.dataset.translateX = 0;
                this.currentImage.dataset.translateY = 0;
                this.zoomPanElement(0, 0, 1);
                tmpImage.addEventListener("error", function(event) {
                    _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event("error." + _this5.eventNamespace));
                    _this5.isAnimating = false;
                    _this5.isOpen = true;
                    _this5.domNodes.spinner.style.display = "none";
                    var dirIsDefined = direction === 1 || direction === -1;
                    if (_this5.initialImageIndex === _this5.currentImageIndex && dirIsDefined) return _this5.close();
                    if (_this5.options.alertError) alert(_this5.options.alertErrorMessage);
                    _this5.loadImage(dirIsDefined ? direction : 1);
                });
                tmpImage.addEventListener("load", function(event) {
                    if (typeof direction !== "undefined") {
                        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event("changed." + _this5.eventNamespace));
                        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event((direction === 1 ? "nextDone" : "prevDone") + "." + _this5.eventNamespace));
                    }
                    // history
                    if (_this5.options.history) _this5.updateURL();
                    if (_this5.loadedImages.indexOf(_this5.currentImage.getAttribute("src")) === -1) _this5.loadedImages.push(_this5.currentImage.getAttribute("src"));
                    var imageWidth = event.target.width, imageHeight = event.target.height;
                    if (_this5.options.scaleImageToRatio || imageWidth > windowWidth || imageHeight > windowHeight) {
                        var ratio = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;
                        imageWidth /= ratio;
                        imageHeight /= ratio;
                    }
                    _this5.domNodes.image.style.top = (window.innerHeight - imageHeight) / 2 + "px";
                    _this5.domNodes.image.style.left = (window.innerWidth - imageWidth - _this5.globalScrollbarWidth) / 2 + "px";
                    _this5.domNodes.image.style.width = imageWidth + "px";
                    _this5.domNodes.image.style.height = imageHeight + "px";
                    _this5.domNodes.spinner.style.display = "none";
                    if (_this5.options.focus) _this5.forceFocus();
                    _this5.fadeIn(_this5.currentImage, _this5.options.fadeSpeed, function() {
                        if (_this5.options.focus) _this5.domNodes.wrapper.focus();
                    });
                    _this5.isOpen = true;
                    var captionContainer, captionText;
                    if (typeof _this5.options.captionSelector === "string") captionContainer = _this5.options.captionSelector === "self" ? _this5.relatedElements[_this5.currentImageIndex] : _this5.getCaptionElement(_this5.relatedElements[_this5.currentImageIndex]);
                    else if (typeof _this5.options.captionSelector === "function") captionContainer = _this5.options.captionSelector(_this5.relatedElements[_this5.currentImageIndex]);
                    if (_this5.options.captions && captionContainer) {
                        if (_this5.options.captionType === "data") captionText = captionContainer.dataset[_this5.options.captionsData];
                        else if (_this5.options.captionType === "text") captionText = captionContainer.innerHTML;
                        else captionText = captionContainer.getAttribute(_this5.options.captionsData);
                    }
                    if (!_this5.options.loop) {
                        if (_this5.currentImageIndex === 0) _this5.hide(_this5.domNodes.navigation.querySelector(".sl-prev"));
                        if (_this5.currentImageIndex >= _this5.relatedElements.length - 1) _this5.hide(_this5.domNodes.navigation.querySelector(".sl-next"));
                        if (_this5.currentImageIndex > 0) _this5.show(_this5.domNodes.navigation.querySelector(".sl-prev"));
                        if (_this5.currentImageIndex < _this5.relatedElements.length - 1) _this5.show(_this5.domNodes.navigation.querySelector(".sl-next"));
                    } else if (_this5.relatedElements.length === 1) _this5.hide(_this5.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next"));
                    else _this5.show(_this5.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next"));
                    if (direction === 1 || direction === -1) {
                        if (_this5.options.animationSlide) {
                            _this5.slide(0, 100 * direction + "px");
                            setTimeout(function() {
                                _this5.slide(_this5.options.animationSpeed / 1000, "0px");
                            }, 50);
                        }
                        _this5.fadeIn(_this5.domNodes.image, _this5.options.fadeSpeed, function() {
                            _this5.isAnimating = false;
                            _this5.setCaption(captionText, imageWidth);
                        });
                    } else {
                        _this5.isAnimating = false;
                        _this5.setCaption(captionText, imageWidth);
                    }
                    if (_this5.options.additionalHtml && !_this5.domNodes.additionalHtml) {
                        _this5.domNodes.additionalHtml = document.createElement("div");
                        _this5.domNodes.additionalHtml.classList.add("sl-additional-html");
                        _this5.domNodes.additionalHtml.innerHTML = _this5.options.additionalHtml;
                        _this5.domNodes.image.appendChild(_this5.domNodes.additionalHtml);
                    }
                    if (_this5.options.download) _this5.domNodes.downloadLink.setAttribute("href", _this5.currentImage.getAttribute("src"));
                });
            }
        },
        {
            key: "zoomPanElement",
            value: function zoomPanElement(targetOffsetX, targetOffsetY, targetScale) {
                this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + targetOffsetX + "," + targetOffsetY + ") scale(" + targetScale + ")";
            }
        },
        {
            key: "minMax",
            value: function minMax(value, min, max) {
                return value < min ? min : value > max ? max : value;
            }
        },
        {
            key: "setZoomData",
            value: function setZoomData(initialScale, targetOffsetX, targetOffsetY) {
                this.currentImage.dataset.scale = initialScale;
                this.currentImage.dataset.translateX = targetOffsetX;
                this.currentImage.dataset.translateY = targetOffsetY;
            }
        },
        {
            key: "hashchangeHandler",
            value: function hashchangeHandler() {
                if (this.isOpen && this.hash === this.initialLocationHash) {
                    this.hashReseted = true;
                    this.close();
                }
            }
        },
        {
            key: "addEvents",
            value: function addEvents() {
                var _this6 = this;
                // resize/responsive
                this.addEventListener(window, "resize." + this.eventNamespace, function(event) {
                    //this.adjustImage.bind(this)
                    if (_this6.isOpen) _this6.adjustImage();
                });
                this.addEventListener(this.domNodes.closeButton, [
                    "click." + this.eventNamespace,
                    "touchstart." + this.eventNamespace
                ], this.close.bind(this));
                if (this.options.history) setTimeout(function() {
                    _this6.addEventListener(window, "hashchange." + _this6.eventNamespace, function(event) {
                        if (_this6.isOpen) _this6.hashchangeHandler();
                    });
                }, 40);
                this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(event) {
                    if (!event.currentTarget.tagName.match(/button/i)) return true;
                    event.preventDefault();
                    _this6.controlCoordinates.swipeDiff = 0;
                    _this6.loadImage(event.currentTarget.classList.contains("sl-next") ? 1 : -1);
                });
                if (this.options.scrollZoom) {
                    var scale = 1;
                    this.addEventListener(this.domNodes.image, [
                        "mousewheel",
                        "DOMMouseScroll"
                    ], function(event) {
                        if (_this6.controlCoordinates.mousedown || _this6.isAnimating || _this6.isClosing || !_this6.isOpen) return true;
                        if (_this6.controlCoordinates.containerHeight == 0) {
                            _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                            _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                            _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                            _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                            _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                            _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        }
                        // event.preventDefault();
                        var delta = event.delta || event.wheelDelta;
                        if (delta === undefined) //we are on firefox
                        delta = event.detail;
                        delta = Math.max(-1, Math.min(1, delta)); // cap the delta to [-1,1] for cross browser consistency
                        // apply zoom
                        scale += delta * _this6.options.scrollZoomFactor * scale;
                        scale = Math.max(1, Math.min(_this6.options.maxZoom, scale));
                        _this6.controlCoordinates.targetScale = scale;
                        var scrollTopPos = document.documentElement.scrollTop || document.body.scrollTop;
                        _this6.controlCoordinates.pinchOffsetX = event.pageX;
                        _this6.controlCoordinates.pinchOffsetY = event.pageY - scrollTopPos || 0; // need to substract the scroll position
                        _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                        _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                        _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                        _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                        _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                        if (_this6.controlCoordinates.targetScale > 1) {
                            _this6.controlCoordinates.zoomed = true;
                            if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== "none") _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                        } else {
                            if (_this6.controlCoordinates.initialScale === 1) {
                                _this6.controlCoordinates.zoomed = false;
                                if (_this6.domNodes.caption.style.display === "none") _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                            }
                            _this6.controlCoordinates.initialPinchDistance = null;
                            _this6.controlCoordinates.capture = false;
                        }
                        _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                        _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                        _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                        _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                        _this6.setZoomData(_this6.controlCoordinates.targetScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                    });
                }
                this.addEventListener(this.domNodes.image, [
                    "touchstart." + this.eventNamespace,
                    "mousedown." + this.eventNamespace
                ], function(event) {
                    if (event.target.tagName === "A" && event.type === "touchstart") return true;
                    if (event.type === "mousedown") {
                        event.preventDefault();
                        _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
                        _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
                        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                        _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                        _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        _this6.controlCoordinates.capture = true;
                    } else {
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
                        _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
                        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                        if (_this6.controlCoordinates.touchCount === 1) /* Single touch */ {
                            if (!_this6.controlCoordinates.doubleTapped) {
                                _this6.controlCoordinates.doubleTapped = true;
                                setTimeout(function() {
                                    _this6.controlCoordinates.doubleTapped = false;
                                }, 300);
                            } else {
                                _this6.currentImage.classList.add("sl-transition");
                                if (!_this6.controlCoordinates.zoomed) {
                                    _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;
                                    _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                                    _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                                    if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== "none") _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                                    _this6.controlCoordinates.zoomed = true;
                                } else {
                                    _this6.controlCoordinates.initialScale = 1;
                                    _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                                    _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                                    _this6.controlCoordinates.zoomed = false;
                                }
                                setTimeout(function() {
                                    if (_this6.currentImage) _this6.currentImage.classList.remove("sl-transition");
                                }, 200);
                                return false;
                            }
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        } else if (_this6.controlCoordinates.touchCount === 2) /* Pinch */ {
                            _this6.controlCoordinates.initialPointerOffsetX2 = event.touches[1].clientX;
                            _this6.controlCoordinates.initialPointerOffsetY2 = event.touches[1].clientY;
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                            _this6.controlCoordinates.pinchOffsetX = (_this6.controlCoordinates.initialPointerOffsetX + _this6.controlCoordinates.initialPointerOffsetX2) / 2;
                            _this6.controlCoordinates.pinchOffsetY = (_this6.controlCoordinates.initialPointerOffsetY + _this6.controlCoordinates.initialPointerOffsetY2) / 2;
                            _this6.controlCoordinates.initialPinchDistance = Math.sqrt((_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) * (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) + (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2) * (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2));
                        }
                        _this6.controlCoordinates.capture = true;
                    }
                    if (_this6.controlCoordinates.mousedown) return true;
                    if (_this6.transitionCapable) _this6.controlCoordinates.imageLeft = parseInt(_this6.domNodes.image.style.left, 10);
                    _this6.controlCoordinates.mousedown = true;
                    _this6.controlCoordinates.swipeDiff = 0;
                    _this6.controlCoordinates.swipeYDiff = 0;
                    _this6.controlCoordinates.swipeStart = event.pageX || event.touches[0].pageX;
                    _this6.controlCoordinates.swipeYStart = event.pageY || event.touches[0].pageY;
                    return false;
                });
                this.addEventListener(this.domNodes.image, [
                    "touchmove." + this.eventNamespace,
                    "mousemove." + this.eventNamespace,
                    "MSPointerMove"
                ], function(event) {
                    if (!_this6.controlCoordinates.mousedown) return true;
                    if (event.type === "touchmove") {
                        if (_this6.controlCoordinates.capture === false) return false;
                        _this6.controlCoordinates.pointerOffsetX = event.touches[0].clientX;
                        _this6.controlCoordinates.pointerOffsetY = event.touches[0].clientY;
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        _this6.controlCoordinates.touchmoveCount++;
                        if (_this6.controlCoordinates.touchCount > 1) /* Pinch */ {
                            _this6.controlCoordinates.pointerOffsetX2 = event.touches[1].clientX;
                            _this6.controlCoordinates.pointerOffsetY2 = event.touches[1].clientY;
                            _this6.controlCoordinates.targetPinchDistance = Math.sqrt((_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) * (_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) + (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2) * (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2));
                            if (_this6.controlCoordinates.initialPinchDistance === null) _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                            if (Math.abs(_this6.controlCoordinates.initialPinchDistance - _this6.controlCoordinates.targetPinchDistance) >= 1) {
                                /* Initialize helpers */ _this6.controlCoordinates.targetScale = _this6.minMax(_this6.controlCoordinates.targetPinchDistance / _this6.controlCoordinates.initialPinchDistance * _this6.controlCoordinates.initialScale, 1, _this6.options.maxZoom);
                                _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                                _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                                _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                                _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                                _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                                _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                                if (_this6.controlCoordinates.targetScale > 1) {
                                    _this6.controlCoordinates.zoomed = true;
                                    if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== "none") _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                                }
                                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                                _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                            }
                        } else {
                            _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
                            _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                            _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                            _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                            _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                            if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
                                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                                _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
                            }
                            if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
                                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                                _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
                            }
                            _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                            _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                        }
                    }
                    /* Mouse Move implementation */ if (event.type === "mousemove" && _this6.controlCoordinates.mousedown) {
                        if (event.type == "touchmove") return true;
                        event.preventDefault();
                        if (_this6.controlCoordinates.capture === false) return false;
                        _this6.controlCoordinates.pointerOffsetX = event.clientX;
                        _this6.controlCoordinates.pointerOffsetY = event.clientY;
                        _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
                        _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                        _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                        _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                        _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                        if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
                            _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                            _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
                        }
                        if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
                            _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                            _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
                        }
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                    }
                    if (!_this6.controlCoordinates.zoomed) {
                        _this6.controlCoordinates.swipeEnd = event.pageX || event.touches[0].pageX;
                        _this6.controlCoordinates.swipeYEnd = event.pageY || event.touches[0].pageY;
                        _this6.controlCoordinates.swipeDiff = _this6.controlCoordinates.swipeStart - _this6.controlCoordinates.swipeEnd;
                        _this6.controlCoordinates.swipeYDiff = _this6.controlCoordinates.swipeYStart - _this6.controlCoordinates.swipeYEnd;
                        if (_this6.options.animationSlide) _this6.slide(0, -_this6.controlCoordinates.swipeDiff + "px");
                    }
                });
                this.addEventListener(this.domNodes.image, [
                    "touchend." + this.eventNamespace,
                    "mouseup." + this.eventNamespace,
                    "touchcancel." + this.eventNamespace,
                    "mouseleave." + this.eventNamespace,
                    "pointerup",
                    "pointercancel",
                    "MSPointerUp",
                    "MSPointerCancel"
                ], function(event) {
                    if (_this6.isTouchDevice && event.type === "touchend") {
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        if (_this6.controlCoordinates.touchCount === 0) /* No touch */ {
                            /* Set attributes */ if (_this6.currentImage) _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                            if (_this6.controlCoordinates.initialScale === 1) {
                                _this6.controlCoordinates.zoomed = false;
                                if (_this6.domNodes.caption.style.display === "none") _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                            }
                            _this6.controlCoordinates.initialPinchDistance = null;
                            _this6.controlCoordinates.capture = false;
                        } else if (_this6.controlCoordinates.touchCount === 1) /* Single touch */ {
                            _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
                            _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
                        } else if (_this6.controlCoordinates.touchCount > 1) _this6.controlCoordinates.initialPinchDistance = null;
                    }
                    if (_this6.controlCoordinates.mousedown) {
                        _this6.controlCoordinates.mousedown = false;
                        var possibleDir = true;
                        if (!_this6.options.loop) {
                            if (_this6.currentImageIndex === 0 && _this6.controlCoordinates.swipeDiff < 0) possibleDir = false;
                            if (_this6.currentImageIndex >= _this6.relatedElements.length - 1 && _this6.controlCoordinates.swipeDiff > 0) possibleDir = false;
                        }
                        if (Math.abs(_this6.controlCoordinates.swipeDiff) > _this6.options.swipeTolerance && possibleDir) _this6.loadImage(_this6.controlCoordinates.swipeDiff > 0 ? 1 : -1);
                        else if (_this6.options.animationSlide) _this6.slide(_this6.options.animationSpeed / 1000, "0px");
                        if (_this6.options.swipeClose && Math.abs(_this6.controlCoordinates.swipeYDiff) > 50 && Math.abs(_this6.controlCoordinates.swipeDiff) < _this6.options.swipeTolerance) _this6.close();
                    }
                });
                this.addEventListener(this.domNodes.image, [
                    "dblclick"
                ], function(event) {
                    if (_this6.isTouchDevice) return;
                    _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
                    _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
                    _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                    _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                    _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                    _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                    _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                    _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                    _this6.currentImage.classList.add("sl-transition");
                    if (!_this6.controlCoordinates.zoomed) {
                        _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                        _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                        if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== "none") _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                        _this6.controlCoordinates.zoomed = true;
                    } else {
                        _this6.controlCoordinates.initialScale = 1;
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                        _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                        _this6.controlCoordinates.zoomed = false;
                        if (_this6.domNodes.caption.style.display === "none") _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                    }
                    setTimeout(function() {
                        if (_this6.currentImage) {
                            _this6.currentImage.classList.remove("sl-transition");
                            _this6.currentImage.style[_this6.transitionPrefix + "transform-origin"] = null;
                        }
                    }, 200);
                    _this6.controlCoordinates.capture = true;
                    return false;
                });
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions(element) {
                var styles = window.getComputedStyle(element), height = element.offsetHeight, width = element.offsetWidth, borderTopWidth = parseFloat(styles.borderTopWidth), borderBottomWidth = parseFloat(styles.borderBottomWidth), paddingTop = parseFloat(styles.paddingTop), paddingBottom = parseFloat(styles.paddingBottom), borderLeftWidth = parseFloat(styles.borderLeftWidth), borderRightWidth = parseFloat(styles.borderRightWidth), paddingLeft = parseFloat(styles.paddingLeft), paddingRight = parseFloat(styles.paddingRight);
                return {
                    height: height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom,
                    width: width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight
                };
            }
        },
        {
            key: "updateHash",
            value: function updateHash() {
                var newHash = "pid=" + (this.currentImageIndex + 1), newURL = window.location.href.split("#")[0] + "#" + newHash;
                this.hashReseted = false;
                if (this.pushStateSupport) window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, newURL);
                else // what is the browser target of this?
                if (this.historyHasChanges) window.location.replace(newURL);
                else window.location.hash = newHash;
                if (!this.historyHasChanges) this.urlChangedOnce = true;
                this.historyHasChanges = true;
            }
        },
        {
            key: "resetHash",
            value: function resetHash() {
                this.hashReseted = true;
                if (this.urlChangedOnce) history.back();
                else if (this.pushStateSupport) history.pushState("", document.title, window.location.pathname + window.location.search);
                else window.location.hash = "";
                //
                //in case an history operation is still pending
                clearTimeout(this.historyUpdateTimeout);
            }
        },
        {
            key: "updateURL",
            value: function updateURL() {
                clearTimeout(this.historyUpdateTimeout);
                if (!this.historyHasChanges) this.updateHash(); // first time
                else this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800);
            }
        },
        {
            key: "setCaption",
            value: function setCaption(captionText, imageWidth, allowHTML) {
                var _this7 = this;
                if (this.options.captions && captionText && captionText !== "" && typeof captionText !== "undefined") {
                    var _ref;
                    var property = ((_ref = allowHTML !== null && allowHTML !== void 0 ? allowHTML : this.options.captionHTML) !== null && _ref !== void 0 ? _ref : true) ? "innerHTML" : "innerText";
                    this.hide(this.domNodes.caption);
                    this.domNodes.caption.style.width = imageWidth + "px";
                    this.domNodes.caption[property] = captionText;
                    this.domNodes.image.appendChild(this.domNodes.caption);
                    setTimeout(function() {
                        _this7.fadeIn(_this7.domNodes.caption, _this7.options.fadeSpeed);
                    }, this.options.captionDelay);
                }
            }
        },
        {
            key: "slide",
            value: function slide(speed, pos) {
                if (!this.transitionCapable) return this.domNodes.image.style.left = pos;
                this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + pos + ")";
                this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + speed + "s linear";
            }
        },
        {
            key: "getRelated",
            value: function getRelated(rel) {
                var elems;
                if (rel && rel !== false && rel !== "nofollow") elems = Array.from(this.elements).filter(function(element) {
                    return element.getAttribute("rel") === rel;
                });
                else elems = this.elements;
                return elems;
            }
        },
        {
            key: "openImage",
            value: function openImage(element) {
                var _this8 = this;
                element.dispatchEvent(new Event("show." + this.eventNamespace));
                this.globalScrollbarWidth = this.getScrollbarWidth();
                if (this.options.disableScroll) {
                    this.toggleScrollbar("hide");
                    this.globalScrollbarWidth = 0;
                }
                if (this.options.htmlClass && this.options.htmlClass !== "") document.querySelector("html").classList.add(this.options.htmlClass);
                document.body.appendChild(this.domNodes.wrapper);
                this.domNodes.wrapper.appendChild(this.domNodes.image);
                if (this.options.overlay) document.body.appendChild(this.domNodes.overlay);
                this.relatedElements = this.getRelated(element.rel);
                if (this.options.showCounter) {
                    if (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter)) this.domNodes.wrapper.removeChild(this.domNodes.counter);
                    else if (this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter)) this.domNodes.wrapper.appendChild(this.domNodes.counter);
                }
                if (this.options.download && this.domNodes.download) this.domNodes.wrapper.appendChild(this.domNodes.download);
                this.isAnimating = true;
                this.currentImageIndex = this.relatedElements.indexOf(element);
                var targetURL = element.getAttribute(this.options.sourceAttr);
                this.currentImage = document.createElement("img");
                this.currentImage.style.display = "none";
                this.currentImage.setAttribute("src", targetURL);
                this.currentImage.dataset.scale = 1;
                this.currentImage.dataset.translateX = 0;
                this.currentImage.dataset.translateY = 0;
                if (this.loadedImages.indexOf(targetURL) === -1) this.loadedImages.push(targetURL);
                this.domNodes.image.innerHTML = "";
                this.domNodes.image.setAttribute("style", "");
                this.domNodes.image.appendChild(this.currentImage);
                this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed);
                this.fadeIn([
                    this.domNodes.counter,
                    this.domNodes.navigation,
                    this.domNodes.closeButton,
                    this.domNodes.download
                ], this.options.fadeSpeed);
                this.show(this.domNodes.spinner);
                this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1;
                this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length;
                this.adjustImage();
                if (this.options.preloading) this.preload();
                setTimeout(function() {
                    element.dispatchEvent(new Event("shown." + _this8.eventNamespace));
                }, this.options.animationSpeed);
            }
        },
        {
            key: "forceFocus",
            value: function forceFocus() {
                var _this9 = this;
                this.removeEventListener(document, "focusin." + this.eventNamespace);
                this.addEventListener(document, "focusin." + this.eventNamespace, function(event) {
                    if (document !== event.target && _this9.domNodes.wrapper !== event.target && !_this9.domNodes.wrapper.contains(event.target)) _this9.domNodes.wrapper.focus();
                });
            }
        },
        {
            key: "addEventListener",
            value: function addEventListener(elements, events, callback, opts) {
                elements = this.wrap(elements);
                events = this.wrap(events);
                var _iterator = _createForOfIteratorHelper(elements), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var element = _step.value;
                        if (!element.namespaces) element.namespaces = {};
                         // save the namespaces addEventListener the DOM element itself
                        var _iterator2 = _createForOfIteratorHelper(events), _step2;
                        try {
                            for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                                var event = _step2.value;
                                var options = opts || false;
                                var needsPassiveFix = [
                                    "touchstart",
                                    "touchmove",
                                    "mousewheel",
                                    "DOMMouseScroll"
                                ].indexOf(event.split(".")[0]) >= 0;
                                if (needsPassiveFix && this.isPassiveEventsSupported) {
                                    if (_typeof(options) === "object") options.passive = true;
                                    else options = {
                                        passive: true
                                    };
                                }
                                element.namespaces[event] = callback;
                                element.addEventListener(event.split(".")[0], callback, options);
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally{
                            _iterator2.f();
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
            }
        },
        {
            key: "removeEventListener",
            value: function removeEventListener(elements, events) {
                elements = this.wrap(elements);
                events = this.wrap(events);
                var _iterator3 = _createForOfIteratorHelper(elements), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var element = _step3.value;
                        var _iterator4 = _createForOfIteratorHelper(events), _step4;
                        try {
                            for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                                var event = _step4.value;
                                if (element.namespaces && element.namespaces[event]) {
                                    element.removeEventListener(event.split(".")[0], element.namespaces[event]);
                                    delete element.namespaces[event];
                                }
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally{
                            _iterator4.f();
                        }
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
            }
        },
        {
            key: "fadeOut",
            value: function fadeOut(elements, duration, callback) {
                var _this10 = this;
                elements = this.wrap(elements);
                var _iterator5 = _createForOfIteratorHelper(elements), _step5;
                try {
                    for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                        var element = _step5.value;
                        element.style.opacity = parseFloat(element) || window.getComputedStyle(element).getPropertyValue("opacity");
                    }
                } catch (err1) {
                    _iterator5.e(err1);
                } finally{
                    _iterator5.f();
                }
                this.isFadeIn = false;
                var step = 16.66666 / (duration || this.options.fadeSpeed), fade1 = function fade() {
                    var currentOpacity = parseFloat(elements[0].style.opacity);
                    if ((currentOpacity -= step) < 0) {
                        var _iterator6 = _createForOfIteratorHelper(elements), _step6;
                        try {
                            for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                                var element = _step6.value;
                                element.style.display = "none";
                                // element.style.opacity = '';
                                element.style.opacity = 1;
                            }
                        } catch (err) {
                            _iterator6.e(err);
                        } finally{
                            _iterator6.f();
                        }
                        callback && callback.call(_this10, elements);
                    } else {
                        var _iterator7 = _createForOfIteratorHelper(elements), _step7;
                        try {
                            for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                                var _element = _step7.value;
                                _element.style.opacity = currentOpacity;
                            }
                        } catch (err) {
                            _iterator7.e(err);
                        } finally{
                            _iterator7.f();
                        }
                        requestAnimationFrame(fade);
                    }
                };
                fade1();
            }
        },
        {
            key: "fadeIn",
            value: function fadeIn(elements, duration, callback, display) {
                var _this11 = this;
                elements = this.wrap(elements);
                var _iterator8 = _createForOfIteratorHelper(elements), _step8;
                try {
                    for(_iterator8.s(); !(_step8 = _iterator8.n()).done;){
                        var element = _step8.value;
                        if (element) {
                            element.style.opacity = 0;
                            element.style.display = display || "block";
                        }
                    }
                } catch (err2) {
                    _iterator8.e(err2);
                } finally{
                    _iterator8.f();
                }
                this.isFadeIn = true;
                var opacityTarget = parseFloat(elements[0].dataset.opacityTarget || 1), step = 16.66666 * opacityTarget / (duration || this.options.fadeSpeed), fade2 = function fade() {
                    var currentOpacity = parseFloat(elements[0].style.opacity);
                    if (!((currentOpacity += step) > opacityTarget)) {
                        var _iterator9 = _createForOfIteratorHelper(elements), _step9;
                        try {
                            for(_iterator9.s(); !(_step9 = _iterator9.n()).done;){
                                var element = _step9.value;
                                if (element) element.style.opacity = currentOpacity;
                            }
                        } catch (err) {
                            _iterator9.e(err);
                        } finally{
                            _iterator9.f();
                        }
                        if (!_this11.isFadeIn) return;
                        requestAnimationFrame(fade);
                    } else {
                        var _iterator10 = _createForOfIteratorHelper(elements), _step10;
                        try {
                            for(_iterator10.s(); !(_step10 = _iterator10.n()).done;){
                                var _element2 = _step10.value;
                                if (_element2) _element2.style.opacity = opacityTarget;
                            }
                        } catch (err) {
                            _iterator10.e(err);
                        } finally{
                            _iterator10.f();
                        }
                        callback && callback.call(_this11, elements);
                    }
                };
                fade2();
            }
        },
        {
            key: "hide",
            value: function hide(elements) {
                elements = this.wrap(elements);
                var _iterator11 = _createForOfIteratorHelper(elements), _step11;
                try {
                    for(_iterator11.s(); !(_step11 = _iterator11.n()).done;){
                        var element = _step11.value;
                        if (element.style.display != "none") element.dataset.initialDisplay = element.style.display;
                        element.style.display = "none";
                    }
                } catch (err) {
                    _iterator11.e(err);
                } finally{
                    _iterator11.f();
                }
            }
        },
        {
            key: "show",
            value: function show(elements, display) {
                elements = this.wrap(elements);
                var _iterator12 = _createForOfIteratorHelper(elements), _step12;
                try {
                    for(_iterator12.s(); !(_step12 = _iterator12.n()).done;){
                        var element = _step12.value;
                        element.style.display = element.dataset.initialDisplay || display || "block";
                    }
                } catch (err) {
                    _iterator12.e(err);
                } finally{
                    _iterator12.f();
                }
            }
        },
        {
            key: "wrap",
            value: function wrap(input) {
                return typeof input[Symbol.iterator] === "function" && typeof input !== "string" ? input : [
                    input
                ];
            }
        },
        {
            key: "on",
            value: function on(events, callback) {
                events = this.wrap(events);
                var _iterator13 = _createForOfIteratorHelper(this.elements), _step13;
                try {
                    for(_iterator13.s(); !(_step13 = _iterator13.n()).done;){
                        var element = _step13.value;
                        if (!element.fullyNamespacedEvents) element.fullyNamespacedEvents = {};
                        var _iterator14 = _createForOfIteratorHelper(events), _step14;
                        try {
                            for(_iterator14.s(); !(_step14 = _iterator14.n()).done;){
                                var event = _step14.value;
                                element.fullyNamespacedEvents[event] = callback;
                                element.addEventListener(event, callback);
                            }
                        } catch (err) {
                            _iterator14.e(err);
                        } finally{
                            _iterator14.f();
                        }
                    }
                } catch (err) {
                    _iterator13.e(err);
                } finally{
                    _iterator13.f();
                }
                return this;
            }
        },
        {
            key: "off",
            value: function off(events) {
                events = this.wrap(events);
                var _iterator15 = _createForOfIteratorHelper(this.elements), _step15;
                try {
                    for(_iterator15.s(); !(_step15 = _iterator15.n()).done;){
                        var element = _step15.value;
                        var _iterator16 = _createForOfIteratorHelper(events), _step16;
                        try {
                            for(_iterator16.s(); !(_step16 = _iterator16.n()).done;){
                                var event = _step16.value;
                                if (typeof element.fullyNamespacedEvents !== "undefined" && event in element.fullyNamespacedEvents) element.removeEventListener(event, element.fullyNamespacedEvents[event]);
                            }
                        } catch (err) {
                            _iterator16.e(err);
                        } finally{
                            _iterator16.f();
                        }
                    }
                } catch (err) {
                    _iterator15.e(err);
                } finally{
                    _iterator15.f();
                }
                return this;
            }
        },
        {
            key: "open",
            value: function open(elem) {
                var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                elem = elem || this.elements[0];
                if (typeof jQuery !== "undefined" && elem instanceof jQuery) elem = elem.get(0);
                if (position > 0) elem = this.elements[position];
                this.initialImageIndex = this.elements.indexOf(elem);
                if (this.initialImageIndex > -1) this.openImage(elem);
            }
        },
        {
            key: "openPosition",
            value: function openPosition(position) {
                var elem = this.elements[position];
                this.open(elem, position);
            }
        },
        {
            key: "next",
            value: function next() {
                this.loadImage(1);
            }
        },
        {
            key: "prev",
            value: function prev() {
                this.loadImage(-1);
            }
        },
        {
            key: "getLighboxData",
            value: function getLighboxData() {
                return {
                    currentImageIndex: this.currentImageIndex,
                    currentImage: this.currentImage,
                    globalScrollbarWidth: this.globalScrollbarWidth
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                //remove all custom event listeners from elements
                this.off([
                    "close." + this.eventNamespace,
                    "closed." + this.eventNamespace,
                    "nextImageLoaded." + this.eventNamespace,
                    "prevImageLoaded." + this.eventNamespace,
                    "change." + this.eventNamespace,
                    "nextDone." + this.eventNamespace,
                    "prevDone." + this.eventNamespace,
                    "error." + this.eventNamespace,
                    "changed." + this.eventNamespace,
                    "next." + this.eventNamespace,
                    "prev." + this.eventNamespace,
                    "show." + this.eventNamespace,
                    "shown." + this.eventNamespace
                ]);
                this.removeEventListener(this.elements, "click." + this.eventNamespace);
                this.removeEventListener(document, "focusin." + this.eventNamespace);
                this.removeEventListener(document.body, "contextmenu." + this.eventNamespace);
                this.removeEventListener(document.body, "keyup." + this.eventNamespace);
                this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace);
                this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace);
                this.removeEventListener(window, "resize." + this.eventNamespace);
                this.removeEventListener(window, "hashchange." + this.eventNamespace);
                this.close();
                if (this.isOpen) {
                    document.body.removeChild(this.domNodes.wrapper);
                    document.body.removeChild(this.domNodes.overlay);
                }
                this.elements = null;
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.initialSelector) throw "refreshing only works when you initialize using a selector!";
                var options = this.options, selector = this.initialSelector;
                this.destroy();
                this.constructor(selector, options);
                return this;
            }
        }
    ]);
    return SimpleLightbox1;
}();
var _default = SimpleLightbox;
exports["default"] = _default;
global.SimpleLightbox = SimpleLightbox;

},{}],"kaxSc":[function() {},{}],"9C7dK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "galleryItems", ()=>galleryItems);
const galleryItems = [
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape"
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea"
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8EXaa","6XVkV"], "6XVkV", "parcelRequire4c75")

//# sourceMappingURL=01-gallery.53390864.js.map
