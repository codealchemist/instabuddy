// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"hVlA1":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 34611;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d9c72df3cd512f39";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"eAF5h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sweetalert2 = require("sweetalert2");
var _sweetalert2Default = parcelHelpers.interopDefault(_sweetalert2);
var _reconnectingWebsocket = require("reconnecting-websocket");
var _reconnectingWebsocketDefault = parcelHelpers.interopDefault(_reconnectingWebsocket);
var _el = require("./el");
var _elDefault = parcelHelpers.interopDefault(_el);
var _events = require("./events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _styleCss = require("../css/style.css");
var _animationsCss = require("../css/animations.css");
var _buttonCss = require("../css/button.css");
var _colorsCss = require("../css/colors.css");
const API_URL_MAP = {
    localhost: 'http://localhost:3000',
    'instabuddy.herokuapp.com': 'instabuddy.herokuapp.com',
    default: 'instabuddy.herokuapp.com'
};
const API_URL = API_URL_MAP[window.location.hostname] || API_URL_MAP.default;
log({
    API_URL
});
const WS_URL_MAP = {
    localhost: 'ws://localhost:3000',
    'instabuddy.herokuapp.com': 'wss://instabuddy.herokuapp.com',
    default: 'wss://instabuddy.herokuapp.com'
};
const WS_URL = WS_URL_MAP[window.location.hostname] || WS_URL_MAP.default;
log({
    WS_URL
});
class App {
    constructor(mode1){
        this.$buttons = new (0, _elDefault.default)('#buttons');
        this.$audio = document.querySelector('audio');
        this.$addButton = new (0, _elDefault.default)('#add');
        this.$error = new (0, _elDefault.default)('#error');
        this.$drop = new (0, _elDefault.default)('#drop');
        this.dragTimeout;
        this.audioCollection = {};
        this.recorder = null;
        this.recordingTime = 3000 // ms
        ;
        this.dropAudioDurationLimit = this.recordingTime / 1000;
        this.channel = this.getChannelName();
        this.url = location.href;
        this.colors = [
            'color1',
            'color2',
            'color3',
            'color4',
            'color5',
            'color6',
            'color7',
            'color8'
        ];
        this.downloadLink = document.querySelector('#download');
        this.messages = {
            noAudioRecording: 'Your browser does not support audio recording, sorry.',
            noWebSocketSupport: 'InstaBuddy is not fully supported on your browser. Please, try with latest Chrome or Firefox :)',
            notSupported: 'InstaBuddy is not fully supported on your browser. Please, try with latest Chrome or Firefox :)',
            noAudioPlayback: 'Audio playback is not supported on your browser. Please, try with latest Chrome or Firefox :)'
        };
        this.alerts = {
            playbackError: ()=>(0, _sweetalert2Default.default).fire('Error', 'Oops, playback failed.', 'error'),
            playbackNotFoundError: ()=>(0, _sweetalert2Default.default).fire('Error', 'Audio source not found.', 'error'),
            playbackErrorRepeated: ()=>(0, _sweetalert2Default.default).fire('Error', 'Playback failed several times. Maybe your browser does not support webm audio.', 'error'),
            clipboardCopyOk: ()=>(0, _sweetalert2Default.default).fire('Done', 'Copied to clipboard!', 'success'),
            noAudioPlayback: ()=>(0, _sweetalert2Default.default).fire('Error', 'Audio playback is not supported on your browser.', 'error'),
            notAudioFile: ()=>(0, _sweetalert2Default.default).fire('Error', 'Not an audio file.', 'error'),
            audioTooLarge: ()=>(0, _sweetalert2Default.default).fire('Error', 'Exceeds 3s limit.', 'error')
        };
        this.playing = false;
        this.recording = false;
        this.connected = false;
        this.mode = window.mode;
        this.init();
    }
    init() {
        log('INIT');
        if (this.mode === 'normal') {
            this.initRecording();
            this.initClipboard();
        }
        // Connect to socket server, set event handlers and get current channel.
        this.connect(()=>{
            log('init/connect');
            this.events = new (0, _eventsDefault.default)(this);
            if (this.mode !== 'standalone') this.getChannel();
        });
        // Check for playback support.
        if (!this.supportsWebm()) // this.handleError('noAudioPlayback')
        this.alerts.noAudioPlayback();
        this.setDrop();
    }
    supportsWebm() {
        return !!this.$audio.canPlayType('audio/webm');
    }
    initClipboard() {
        // No clipboard support.
        if (!Clipboard.isSupported()) return;
        // Clipboard supported!
        const clipboard = new Clipboard('i.share');
        clipboard.on('success', (e)=>{
            this.alerts.clipboardCopyOk();
        });
    }
    initRecording() {
        try {
            navigator.mediaDevices.getUserMedia({
                audio: true
            }).then((stream)=>{
                try {
                    this.recorder = new MediaRecorder(stream);
                } catch (e) {
                    this.handleError('noAudioRecording', e);
                }
            }).catch((e)=>{
                this.handleError('noAudioRecording', e);
            });
        } catch (e) {
            this.handleError('noAudioRecording', e);
        }
    }
    getChannelName() {
        if (!location.pathname.match('play')) return location.pathname.replace('/channel/', '');
        return location.pathname.match(/channel\/(.*?)\//)[1];
    }
    handleError(type, e) {
        const handlers = {
            noAudioRecording: ()=>{
                log(e);
                if (this.mode === 'normal') this.$addButton.hide();
                alert(this.messages.noAudioRecording);
            },
            noWebSocketSupport: ()=>{
                log(e);
                alert(this.messages.noWebSocketSupport);
            },
            noAudioPlayback: ()=>{
                log(e);
                alert(this.messages.noAudioPlayback);
                this.$buttons.hide();
                this.showError(this.messages.noAudioPlayback);
            }
        };
        const defaultHandler = ()=>{
            alert(this.messages.notSupported);
        };
        const handlerMethod = handlers[type] || defaultHandler;
        handlerMethod();
    }
    showError(message) {
        this.$error.html(message).show();
    }
    connect(callback) {
        log('connect');
        // Check for websockets support.
        if (false in window) {
            alert(this.messages.noWebSocketSupport);
            return;
        }
        this.ws = new (0, _reconnectingWebsocketDefault.default)(WS_URL);
        this.ws.binaryType = 'arraybuffer';
        this.ws.onopen = ()=>{
            if (this.connected) {
                log('WebSocket reconnected.');
                return;
            }
            log('WebSocket connected.');
            this.connected = true;
            if (typeof callback === 'function') callback();
        };
        this.ws.onmessage = (event)=>{
            const { type, data, error } = JSON.parse(event.data);
            log(`Got message '${type}'`, data, error);
            if (typeof this.events[type] === 'function') this.events[type]({
                type,
                data,
                error
            });
        };
        this.ws.onerror = (event)=>{
            log('ERROR:', event);
        };
    }
    send(message) {
        const data = JSON.stringify(message);
        this.ws.send(data);
    }
    getChannel() {
        log('Get channel...', {
            channel: this.channel
        });
        this.send({
            type: 'getChannel',
            name: this.channel
        });
    }
    onButtonClick(event) {
        // Share button.
        if (event.target.className === 'share' && !Clipboard.isSupported()) {
            this.openButtonUrl(event.target) // No clipboard support.
            ;
            return;
        }
        // Check if we have an Instant button id.
        const id = event.target.dataset.id;
        if (!id) return;
        // Instant button.
        if (this.audioCollection[id].src) return this.play(id);
        this.record(id, event);
    }
    openButtonUrl(el) {
        const buttonUrl = el.dataset['clipboard-text'];
        if (!buttonUrl) return;
        window.open(buttonUrl);
    }
    record(id, event) {
        if (this.recording) return;
        this.recording = true;
        log('recording started', id);
        const $el = new (0, _elDefault.default)(event.target);
        $el.addClass('recording');
        const audioChunks = [];
        this.recorder.start();
        this.recorder.ondataavailable = (e)=>{
            audioChunks.push(e.data);
            if (this.recorder.state !== 'inactive') return;
            // Recording stopped.
            const blob = new Blob(audioChunks, {
                type: 'audio/webm'
            });
            this.audioCollection[id].src = URL.createObjectURL(blob);
            this.saveButton(this.audioCollection[id]);
        };
        setTimeout(()=>{
            this.recorder.stop();
            log('recording stopped', id);
            $el.removeClass('recording');
            $el.removeClass('empty');
            this.recording = false;
        }, this.recordingTime);
    }
    sendBinary(buffer, { id, name, channel }) {
        log('sendBinary', {
            id,
            name,
            channel
        });
        const xhr = new XMLHttpRequest();
        const url = `${API_URL}/binary/${channel}/${id}/${name}`;
        xhr.open('POST', url, true);
        xhr.send(buffer);
    }
    saveButton(button) {
        fetch(button.src).then((response)=>{
            response.arrayBuffer().then((buffer)=>{
                const meta = {
                    id: button.id,
                    name: button.name,
                    channel: this.channel
                };
                this.sendBinary(buffer, meta);
            });
        });
    }
    play(id) {
        if (this.playing || this.recording) return;
        log('play', id);
        this.playing = true;
        const $el = new (0, _elDefault.default)(`#btn-${id}`);
        $el.addClass('playing');
        let src = this.audioCollection[id].src;
        this.$audio.src = src;
        const timeoutId = setTimeout(()=>{
            log('playing stopped');
            $el.removeClass('playing');
            this.playing = false;
        }, this.recordingTime);
        // Start playback.
        this.sendPlay(id, src);
        try {
            this.$audio.play().then(()=>{}).catch((e)=>{
                log('Playback ERROR:', e);
                // Safari throws this error but plays OK.
                if (e.message === 'The operation is not supported.') return;
                if (e.message === 'Failed to load because no supported source was found.') {
                    this.handlePlaybackError('playbackNotFoundError', $el, timeoutId);
                    return;
                }
                this.handlePlaybackError('playbackError', $el, timeoutId);
            });
        } catch (e) {
            log(`ERROR PLAYING '${id}': ${src}`, e);
            this.handlePlaybackError('playbackError', $el, timeoutId);
        }
    }
    handlePlaybackError(alerId, $el, timeoutId) {
        this.alerts[alerId]();
        clearTimeout(timeoutId);
        $el.removeClass('playing');
        this.playing = false;
    }
    sendPlay(id, src) {
        this.send({
            type: 'play',
            data: {
                channel: this.channel,
                id,
                src
            }
        });
    }
    download(event, id) {
        event.stopPropagation();
        event.preventDefault();
        this.downloadLink.href = this.audioCollection[id].src;
        this.downloadLink.download = this.audioCollection[id].name.replace(' ', '-') + '.webm';
        this.downloadLink.click();
    }
    onKey(code) {}
    onDrag(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.dragging) return;
        clearTimeout(this.dragTimeout);
        this.$drop.show('flex');
        this.dragging = true;
        setTimeout(()=>this.dragging = false, 70);
        return false;
    }
    onDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    onDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        clearTimeout(this.dragTimeout);
        this.dragTimeout = setTimeout(()=>this.$drop.hide(), 100);
        return false;
    }
    onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        this.$drop.hide();
        if (e.dataTransfer.items) {
            const files = Array.from(e.dataTransfer.files);
            if (files.length === 0) {
                log('No files available.');
                return;
            }
            e.dataTransfer.dropEffect = 'copy';
            files.map((file)=>this.addDroppedAudio(file));
        }
        return false;
    }
    addDroppedAudio(file) {
        // Check if it's audio.
        if (!file.type.match(/audio/)) {
            this.alerts.notAudioFile();
            return;
        }
        // Read audio data.
        const blob = window.URL.createObjectURL(file);
        const audio = new Audio();
        audio.addEventListener('loadedmetadata', (metadata)=>{
            // window.URL.revokeObjectURL(blob)
            // Time limit.
            if (audio.duration > this.dropAudioDurationLimit) {
                console.error(`Audio duration is more than ${this.dropAudioDurationLimit} seconds.`);
                this.alerts.audioTooLarge();
                return;
            }
            // Add button.
            const id = new Date().getTime();
            this.addButton(null, {
                id,
                name: file.name
            });
            this.audioCollection[id].src = blob;
            this.saveButton(this.audioCollection[id]);
        });
        audio.src = blob;
    }
    setDrop() {
        document.body.addEventListener('dragenter', (e)=>this.onDragEnter(e), false);
        document.body.addEventListener('dragover', (e)=>this.onDrag(e), false);
        document.body.addEventListener('dragleave', (e)=>this.onDragLeave(e), false);
        document.body.addEventListener('drop', (e)=>this.onDrop(e), false);
    }
    getRandomColor() {
        const total = this.colors.length;
        const index = Math.round(Math.random() * total);
        return this.colors[index];
    }
    removeButton(event, id) {
        event.stopPropagation();
        if (!confirm('Delete this InstantButton?')) return;
        const $button = new (0, _elDefault.default)(`#btn-${id}`);
        $button.remove();
        this.send({
            type: 'removeButton',
            channel: this.channel,
            id
        });
    }
    addButton(event, button = {}) {
        let { id, name } = button;
        if (event) event.stopPropagation();
        name = name || prompt('Button name?');
        if (!name || !name.trim()) return;
        const empty = id ? '' : ' empty';
        id = id || new Date().getTime();
        const elId = `btn-${id}`;
        const color = this.getRandomColor();
        this.$buttons.prependHtml(`
      <div id="${elId}" data-id="${id}" class="btn${empty} ${color}">
        <p class="ellipsis">${name}</p>
        <div class="button-actions">
          <i title="Download" class="download" onclick="app.download(event, ${id})">\u{1F4BE}</i>
          <i
            title="Share" class="share"
            data-clipboard-text="${this.url}/play/${id}"
          >\u{1F517}</i>
          <i title="Delete" class="remove" onclick="app.removeButton(event, ${id})">\u{232B}</i>
        </div>
      </div>
    `);
        this.addAudio(id, {
            id,
            name,
            color
        });
        return id;
    }
    getButtonLink(event, id) {
        event.stopPropagation();
        event.preventDefault();
        const buttonUrl = `${this.url}/play/${id}`;
    }
    addAudio(id, button) {
        this.audioCollection[id] = button;
    }
}
function log() {
    console.log('[ APP ]-->', ...arguments);
}
// Register service worker.
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../sw.js').then(function () {
//     console.log('Service Worker Registered')
//   })
// }
window.app = new App(mode);
exports.default = app;

},{"sweetalert2":"aLJx9","reconnecting-websocket":"iaP0g","./el":"7j6yA","./events":"c3VR3","../css/style.css":"3Hcnq","../css/animations.css":"3VoyK","../css/button.css":"8zFG3","../css/colors.css":"fDupZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aLJx9":[function(require,module,exports,__globalThis) {
/*!
* sweetalert2 v10.16.11
* Released under the MIT License.
*/ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
            return typeof obj;
        };
        else _typeof = function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj);
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
        return Constructor;
    }
    function _extends() {
        _extends = Object.assign || function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) _construct = Reflect.construct;
        else _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
        return _construct.apply(null, arguments);
    }
    function _assertThisInitialized(self) {
        if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    }
    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) return call;
        return _assertThisInitialized(self);
    }
    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result);
        };
    }
    function _superPropBase(object, property) {
        while(!Object.prototype.hasOwnProperty.call(object, property)){
            object = _getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    }
    function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
        else _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) return desc.get.call(receiver);
            return desc.value;
        };
        return _get(target, property, receiver || target);
    }
    var consolePrefix = 'SweetAlert2:';
    /**
   * Filter the unique values into a new array
   * @param arr
   */ var uniqueArray = function uniqueArray(arr) {
        var result = [];
        for(var i = 0; i < arr.length; i++)if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
        return result;
    };
    /**
   * Capitalize the first letter of a string
   * @param str
   */ var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */ var objectValues = function objectValues(obj) {
        return Object.keys(obj).map(function(key) {
            return obj[key];
        });
    };
    /**
   * Convert NodeList to Array
   * @param nodeList
   */ var toArray = function toArray(nodeList) {
        return Array.prototype.slice.call(nodeList);
    };
    /**
   * Standardise console warnings
   * @param message
   */ var warn = function warn(message) {
        console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
    };
    /**
   * Standardise console errors
   * @param message
   */ var error = function error(message) {
        console.error("".concat(consolePrefix, " ").concat(message));
    };
    /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */ var previousWarnOnceMessages = [];
    /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */ var warnOnce = function warnOnce(message) {
        if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
            previousWarnOnceMessages.push(message);
            warn(message);
        }
    };
    /**
   * Show a one-time console warning about deprecated params/methods
   */ var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
        warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
    };
    /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */ var callIfFunction = function callIfFunction(arg) {
        return typeof arg === 'function' ? arg() : arg;
    };
    var hasToPromiseFn = function hasToPromiseFn(arg) {
        return arg && typeof arg.toPromise === 'function';
    };
    var asPromise = function asPromise(arg) {
        return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
    };
    var isPromise = function isPromise(arg) {
        return arg && Promise.resolve(arg) === arg;
    };
    var DismissReason = Object.freeze({
        cancel: 'cancel',
        backdrop: 'backdrop',
        close: 'close',
        esc: 'esc',
        timer: 'timer'
    });
    var isJqueryElement = function isJqueryElement(elem) {
        return _typeof(elem) === 'object' && elem.jquery;
    };
    var isElement = function isElement(elem) {
        return elem instanceof Element || isJqueryElement(elem);
    };
    var argsToParams = function argsToParams(args) {
        var params = {};
        if (_typeof(args[0]) === 'object' && !isElement(args[0])) _extends(params, args[0]);
        else [
            'title',
            'html',
            'icon'
        ].forEach(function(name, index) {
            var arg = args[index];
            if (typeof arg === 'string' || isElement(arg)) params[name] = arg;
            else if (arg !== undefined) error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        });
        return params;
    };
    var swalPrefix = 'swal2-';
    var prefix = function prefix(items) {
        var result = {};
        for(var i in items)result[items[i]] = swalPrefix + items[i];
        return result;
    };
    var swalClasses = prefix([
        'container',
        'shown',
        'height-auto',
        'iosfix',
        'popup',
        'modal',
        'no-backdrop',
        'no-transition',
        'toast',
        'toast-shown',
        'show',
        'hide',
        'close',
        'title',
        'header',
        'content',
        'html-container',
        'actions',
        'confirm',
        'deny',
        'cancel',
        'footer',
        'icon',
        'icon-content',
        'image',
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'label',
        'textarea',
        'inputerror',
        'input-label',
        'validation-message',
        'progress-steps',
        'active-progress-step',
        'progress-step',
        'progress-step-line',
        'loader',
        'loading',
        'styled',
        'top',
        'top-start',
        'top-end',
        'top-left',
        'top-right',
        'center',
        'center-start',
        'center-end',
        'center-left',
        'center-right',
        'bottom',
        'bottom-start',
        'bottom-end',
        'bottom-left',
        'bottom-right',
        'grow-row',
        'grow-column',
        'grow-fullscreen',
        'rtl',
        'timer-progress-bar',
        'timer-progress-bar-container',
        'scrollbar-measure',
        'icon-success',
        'icon-warning',
        'icon-info',
        'icon-question',
        'icon-error'
    ]);
    var iconTypes = prefix([
        'success',
        'warning',
        'info',
        'question',
        'error'
    ]);
    var getContainer = function getContainer() {
        return document.body.querySelector(".".concat(swalClasses.container));
    };
    var elementBySelector = function elementBySelector(selectorString) {
        var container = getContainer();
        return container ? container.querySelector(selectorString) : null;
    };
    var elementByClass = function elementByClass(className) {
        return elementBySelector(".".concat(className));
    };
    var getPopup = function getPopup() {
        return elementByClass(swalClasses.popup);
    };
    var getIcon = function getIcon() {
        return elementByClass(swalClasses.icon);
    };
    var getTitle = function getTitle() {
        return elementByClass(swalClasses.title);
    };
    var getContent = function getContent() {
        return elementByClass(swalClasses.content);
    };
    var getHtmlContainer = function getHtmlContainer() {
        return elementByClass(swalClasses['html-container']);
    };
    var getImage = function getImage() {
        return elementByClass(swalClasses.image);
    };
    var getProgressSteps = function getProgressSteps() {
        return elementByClass(swalClasses['progress-steps']);
    };
    var getValidationMessage = function getValidationMessage() {
        return elementByClass(swalClasses['validation-message']);
    };
    var getConfirmButton = function getConfirmButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
    };
    var getDenyButton = function getDenyButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
    };
    var getInputLabel = function getInputLabel() {
        return elementByClass(swalClasses['input-label']);
    };
    var getLoader = function getLoader() {
        return elementBySelector(".".concat(swalClasses.loader));
    };
    var getCancelButton = function getCancelButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
    };
    var getActions = function getActions() {
        return elementByClass(swalClasses.actions);
    };
    var getHeader = function getHeader() {
        return elementByClass(swalClasses.header);
    };
    var getFooter = function getFooter() {
        return elementByClass(swalClasses.footer);
    };
    var getTimerProgressBar = function getTimerProgressBar() {
        return elementByClass(swalClasses['timer-progress-bar']);
    };
    var getCloseButton = function getCloseButton() {
        return elementByClass(swalClasses.close);
    }; // https://github.com/jkup/focusable/blob/master/index.js
    var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
    var getFocusableElements = function getFocusableElements() {
        var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
        .sort(function(a, b) {
            a = parseInt(a.getAttribute('tabindex'));
            b = parseInt(b.getAttribute('tabindex'));
            if (a > b) return 1;
            else if (a < b) return -1;
            return 0;
        });
        var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function(el) {
            return el.getAttribute('tabindex') !== '-1';
        });
        return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function(el) {
            return isVisible(el);
        });
    };
    var isModal = function isModal() {
        return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
    };
    var isToast = function isToast() {
        return document.body.classList.contains(swalClasses['toast-shown']);
    };
    var isLoading = function isLoading() {
        return getPopup().hasAttribute('data-loading');
    };
    var states = {
        previousBodyPadding: null
    };
    var setInnerHtml = function setInnerHtml(elem, html) {
        // #1926
        elem.textContent = '';
        if (html) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(html, "text/html");
            toArray(parsed.querySelector('head').childNodes).forEach(function(child) {
                elem.appendChild(child);
            });
            toArray(parsed.querySelector('body').childNodes).forEach(function(child) {
                elem.appendChild(child);
            });
        }
    };
    var hasClass = function hasClass(elem, className) {
        if (!className) return false;
        var classList = className.split(/\s+/);
        for(var i = 0; i < classList.length; i++){
            if (!elem.classList.contains(classList[i])) return false;
        }
        return true;
    };
    var removeCustomClasses = function removeCustomClasses(elem, params) {
        toArray(elem.classList).forEach(function(className) {
            if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) elem.classList.remove(className);
        });
    };
    var applyCustomClass = function applyCustomClass(elem, params, className) {
        removeCustomClasses(elem, params);
        if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
            addClass(elem, params.customClass[className]);
        }
    };
    function getInput(content, inputType) {
        if (!inputType) return null;
        switch(inputType){
            case 'select':
            case 'textarea':
            case 'file':
                return getChildByClass(content, swalClasses[inputType]);
            case 'checkbox':
                return content.querySelector(".".concat(swalClasses.checkbox, " input"));
            case 'radio':
                return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));
            case 'range':
                return content.querySelector(".".concat(swalClasses.range, " input"));
            default:
                return getChildByClass(content, swalClasses.input);
        }
    }
    var focusInput = function focusInput(input) {
        input.focus(); // place cursor at end of text in text input
        if (input.type !== 'file') {
            // http://stackoverflow.com/a/2345915
            var val = input.value;
            input.value = '';
            input.value = val;
        }
    };
    var toggleClass = function toggleClass(target, classList, condition) {
        if (!target || !classList) return;
        if (typeof classList === 'string') classList = classList.split(/\s+/).filter(Boolean);
        classList.forEach(function(className) {
            if (target.forEach) target.forEach(function(elem) {
                condition ? elem.classList.add(className) : elem.classList.remove(className);
            });
            else condition ? target.classList.add(className) : target.classList.remove(className);
        });
    };
    var addClass = function addClass(target, classList) {
        toggleClass(target, classList, true);
    };
    var removeClass = function removeClass(target, classList) {
        toggleClass(target, classList, false);
    };
    var getChildByClass = function getChildByClass(elem, className) {
        for(var i = 0; i < elem.childNodes.length; i++){
            if (hasClass(elem.childNodes[i], className)) return elem.childNodes[i];
        }
    };
    var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
        if (value === "".concat(parseInt(value))) value = parseInt(value);
        if (value || parseInt(value) === 0) elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
        else elem.style.removeProperty(property);
    };
    var show = function show(elem) {
        var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
        elem.style.display = display;
    };
    var hide = function hide(elem) {
        elem.style.display = 'none';
    };
    var setStyle = function setStyle(parent, selector, property, value) {
        var el = parent.querySelector(selector);
        if (el) el.style[property] = value;
    };
    var toggle = function toggle(elem, condition, display) {
        condition ? show(elem, display) : hide(elem);
    }; // borrowed from jquery $(elem).is(':visible') implementation
    var isVisible = function isVisible(elem) {
        return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
    };
    var allButtonsAreHidden = function allButtonsAreHidden() {
        return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
    };
    var isScrollable = function isScrollable(elem) {
        return !!(elem.scrollHeight > elem.clientHeight);
    }; // borrowed from https://stackoverflow.com/a/46352119
    var hasCssAnimation = function hasCssAnimation(elem) {
        var style = window.getComputedStyle(elem);
        var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
        var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
        return animDuration > 0 || transDuration > 0;
    };
    var contains = function contains(haystack, needle) {
        if (typeof haystack.contains === 'function') return haystack.contains(needle);
    };
    var animateTimerProgressBar = function animateTimerProgressBar(timer) {
        var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var timerProgressBar = getTimerProgressBar();
        if (isVisible(timerProgressBar)) {
            if (reset) {
                timerProgressBar.style.transition = 'none';
                timerProgressBar.style.width = '100%';
            }
            setTimeout(function() {
                timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
                timerProgressBar.style.width = '0%';
            }, 10);
        }
    };
    var stopTimerProgressBar = function stopTimerProgressBar() {
        var timerProgressBar = getTimerProgressBar();
        var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = '100%';
        var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
    };
    // Detect Node env
    var isNodeEnv = function isNodeEnv() {
        return typeof window === 'undefined' || typeof document === 'undefined';
    };
    var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
    var resetOldContainer = function resetOldContainer() {
        var oldContainer = getContainer();
        if (!oldContainer) return false;
        oldContainer.parentNode.removeChild(oldContainer);
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses['no-backdrop'],
            swalClasses['toast-shown'],
            swalClasses['has-column']
        ]);
        return true;
    };
    var oldInputVal; // IE11 workaround, see #1109 for details
    var resetValidationMessage = function resetValidationMessage(e) {
        if (Swal.isVisible() && oldInputVal !== e.target.value) Swal.resetValidationMessage();
        oldInputVal = e.target.value;
    };
    var addInputChangeListeners = function addInputChangeListeners() {
        var content = getContent();
        var input = getChildByClass(content, swalClasses.input);
        var file = getChildByClass(content, swalClasses.file);
        var range = content.querySelector(".".concat(swalClasses.range, " input"));
        var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
        var select = getChildByClass(content, swalClasses.select);
        var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
        var textarea = getChildByClass(content, swalClasses.textarea);
        input.oninput = resetValidationMessage;
        file.onchange = resetValidationMessage;
        select.onchange = resetValidationMessage;
        checkbox.onchange = resetValidationMessage;
        textarea.oninput = resetValidationMessage;
        range.oninput = function(e) {
            resetValidationMessage(e);
            rangeOutput.value = range.value;
        };
        range.onchange = function(e) {
            resetValidationMessage(e);
            range.nextSibling.value = range.value;
        };
    };
    var getTarget = function getTarget(target) {
        return typeof target === 'string' ? document.querySelector(target) : target;
    };
    var setupAccessibility = function setupAccessibility(params) {
        var popup = getPopup();
        popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
        popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
        if (!params.toast) popup.setAttribute('aria-modal', 'true');
    };
    var setupRTL = function setupRTL(targetElement) {
        if (window.getComputedStyle(targetElement).direction === 'rtl') addClass(getContainer(), swalClasses.rtl);
    };
    /*
   * Add modal + backdrop to DOM
   */ var init = function init(params) {
        // Clean up the old popup container if it exists
        var oldContainerExisted = resetOldContainer();
        /* istanbul ignore if */ if (isNodeEnv()) {
            error('SweetAlert2 requires document to initialize');
            return;
        }
        var container = document.createElement('div');
        container.className = swalClasses.container;
        if (oldContainerExisted) addClass(container, swalClasses['no-transition']);
        setInnerHtml(container, sweetHTML);
        var targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
    };
    var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
        // DOM element
        if (param instanceof HTMLElement) target.appendChild(param); // Object
        else if (_typeof(param) === 'object') handleObject(param, target); // Plain string
        else if (param) setInnerHtml(target, param);
    };
    var handleObject = function handleObject(param, target) {
        // JQuery element(s)
        if (param.jquery) handleJqueryElem(target, param); // For other objects use their string representation
        else setInnerHtml(target, param.toString());
    };
    var handleJqueryElem = function handleJqueryElem(target, elem) {
        target.textContent = '';
        if (0 in elem) for(var i = 0; i in elem; i++)target.appendChild(elem[i].cloneNode(true));
        else target.appendChild(elem.cloneNode(true));
    };
    var animationEndEvent = function() {
        // Prevent run in Node env
        /* istanbul ignore if */ if (isNodeEnv()) return false;
        var testEl = document.createElement('div');
        var transEndEventNames = {
            WebkitAnimation: 'webkitAnimationEnd',
            OAnimation: 'oAnimationEnd oanimationend',
            animation: 'animationend'
        };
        for(var i in transEndEventNames){
            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') return transEndEventNames[i];
        }
        return false;
    }();
    // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
    var measureScrollbar = function measureScrollbar() {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = swalClasses['scrollbar-measure'];
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    var renderActions = function renderActions(instance, params) {
        var actions = getActions();
        var loader = getLoader();
        var confirmButton = getConfirmButton();
        var denyButton = getDenyButton();
        var cancelButton = getCancelButton(); // Actions (buttons) wrapper
        if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) hide(actions);
         // Custom class
        applyCustomClass(actions, params, 'actions'); // Render buttons
        renderButton(confirmButton, 'confirm', params);
        renderButton(denyButton, 'deny', params);
        renderButton(cancelButton, 'cancel', params);
        handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
        if (params.reverseButtons) {
            actions.insertBefore(cancelButton, loader);
            actions.insertBefore(denyButton, loader);
            actions.insertBefore(confirmButton, loader);
        } // Loader
        setInnerHtml(loader, params.loaderHtml);
        applyCustomClass(loader, params, 'loader');
    };
    function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
        if (!params.buttonsStyling) return removeClass([
            confirmButton,
            denyButton,
            cancelButton
        ], swalClasses.styled);
        addClass([
            confirmButton,
            denyButton,
            cancelButton
        ], swalClasses.styled); // Buttons background colors
        if (params.confirmButtonColor) confirmButton.style.backgroundColor = params.confirmButtonColor;
        if (params.denyButtonColor) denyButton.style.backgroundColor = params.denyButtonColor;
        if (params.cancelButtonColor) cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
    function renderButton(button, buttonType, params) {
        toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
        setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text
        button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
        // Add buttons custom classes
        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, "".concat(buttonType, "Button"));
        addClass(button, params["".concat(buttonType, "ButtonClass")]);
    }
    function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === 'string') container.style.background = backdrop;
        else if (!backdrop) addClass([
            document.documentElement,
            document.body
        ], swalClasses['no-backdrop']);
    }
    function handlePositionParam(container, position) {
        if (position in swalClasses) addClass(container, swalClasses[position]);
        else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
        }
    }
    function handleGrowParam(container, grow) {
        if (grow && typeof grow === 'string') {
            var growClass = "grow-".concat(grow);
            if (growClass in swalClasses) addClass(container, swalClasses[growClass]);
        }
    }
    var renderContainer = function renderContainer(instance, params) {
        var container = getContainer();
        if (!container) return;
        handleBackdropParam(container, params.backdrop);
        if (!params.backdrop && params.allowOutsideClick) warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow); // Custom class
        applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method
        var queueStep = document.body.getAttribute('data-swal2-queue-step');
        if (queueStep) {
            container.setAttribute('data-queue-step', queueStep);
            document.body.removeAttribute('data-swal2-queue-step');
        }
    };
    /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateProps = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
    };
    var inputTypes = [
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'textarea'
    ];
    var renderInput = function renderInput(instance, params) {
        var content = getContent();
        var innerParams = privateProps.innerParams.get(instance);
        var rerender = !innerParams || params.input !== innerParams.input;
        inputTypes.forEach(function(inputType) {
            var inputClass = swalClasses[inputType];
            var inputContainer = getChildByClass(content, inputClass); // set attributes
            setAttributes(inputType, params.inputAttributes); // set class
            inputContainer.className = inputClass;
            if (rerender) hide(inputContainer);
        });
        if (params.input) {
            if (rerender) showInput(params);
             // set custom class
            setCustomClass(params);
        }
    };
    var showInput = function showInput(params) {
        if (!renderInputType[params.input]) return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
        var inputContainer = getInputContainer(params.input);
        var input = renderInputType[params.input](inputContainer, params);
        show(input); // input autofocus
        setTimeout(function() {
            focusInput(input);
        });
    };
    var removeAttributes = function removeAttributes(input) {
        for(var i = 0; i < input.attributes.length; i++){
            var attrName = input.attributes[i].name;
            if (!([
                'type',
                'value',
                'style'
            ].indexOf(attrName) !== -1)) input.removeAttribute(attrName);
        }
    };
    var setAttributes = function setAttributes(inputType, inputAttributes) {
        var input = getInput(getContent(), inputType);
        if (!input) return;
        removeAttributes(input);
        for(var attr in inputAttributes){
            // Do not set a placeholder for <input type="range">
            // it'll crash Edge, #1298
            if (inputType === 'range' && attr === 'placeholder') continue;
            input.setAttribute(attr, inputAttributes[attr]);
        }
    };
    var setCustomClass = function setCustomClass(params) {
        var inputContainer = getInputContainer(params.input);
        if (params.customClass) addClass(inputContainer, params.customClass.input);
    };
    var setInputPlaceholder = function setInputPlaceholder(input, params) {
        if (!input.placeholder || params.inputPlaceholder) input.placeholder = params.inputPlaceholder;
    };
    var setInputLabel = function setInputLabel(input, prependTo, params) {
        if (params.inputLabel) {
            input.id = swalClasses.input;
            var label = document.createElement('label');
            var labelClass = swalClasses['input-label'];
            label.setAttribute('for', input.id);
            label.className = labelClass;
            addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement('beforebegin', label);
        }
    };
    var getInputContainer = function getInputContainer(inputType) {
        var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
        return getChildByClass(getContent(), inputClass);
    };
    var renderInputType = {};
    renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function(input, params) {
        if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') input.value = params.inputValue;
        else if (!isPromise(params.inputValue)) warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
    };
    renderInputType.file = function(input, params) {
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        return input;
    };
    renderInputType.range = function(range, params) {
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        setInputLabel(rangeInput, range, params);
        return range;
    };
    renderInputType.select = function(select, params) {
        select.textContent = '';
        if (params.inputPlaceholder) {
            var placeholder = document.createElement('option');
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
        }
        setInputLabel(select, select, params);
        return select;
    };
    renderInputType.radio = function(radio) {
        radio.textContent = '';
        return radio;
    };
    renderInputType.checkbox = function(checkboxContainer, params) {
        var checkbox = getInput(getContent(), 'checkbox');
        checkbox.value = 1;
        checkbox.id = swalClasses.checkbox;
        checkbox.checked = Boolean(params.inputValue);
        var label = checkboxContainer.querySelector('span');
        setInnerHtml(label, params.inputPlaceholder);
        return checkboxContainer;
    };
    renderInputType.textarea = function(textarea, params) {
        textarea.value = params.inputValue;
        setInputPlaceholder(textarea, params);
        setInputLabel(textarea, textarea, params);
        var getPadding = function getPadding(el) {
            return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
        };
        if ('MutationObserver' in window) {
            // #1699
            var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
            var outputsize = function outputsize() {
                var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());
                if (contentWidth > initialPopupWidth) getPopup().style.width = "".concat(contentWidth, "px");
                else getPopup().style.width = null;
            };
            new MutationObserver(outputsize).observe(textarea, {
                attributes: true,
                attributeFilter: [
                    'style'
                ]
            });
        }
        return textarea;
    };
    var renderContent = function renderContent(instance, params) {
        var htmlContainer = getHtmlContainer();
        applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML
        if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, 'block'); // Content as plain text
        } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, 'block'); // No content
        } else hide(htmlContainer);
        renderInput(instance, params); // Custom class
        applyCustomClass(getContent(), params, 'content');
    };
    var renderFooter = function renderFooter(instance, params) {
        var footer = getFooter();
        toggle(footer, params.footer);
        if (params.footer) parseHtmlToContainer(params.footer, footer);
         // Custom class
        applyCustomClass(footer, params, 'footer');
    };
    var renderCloseButton = function renderCloseButton(instance, params) {
        var closeButton = getCloseButton();
        setInnerHtml(closeButton, params.closeButtonHtml); // Custom class
        applyCustomClass(closeButton, params, 'closeButton');
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    };
    var renderIcon = function renderIcon(instance, params) {
        var innerParams = privateProps.innerParams.get(instance);
        var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon
        if (innerParams && params.icon === innerParams.icon) {
            // Custom or default content
            setContent(icon, params);
            applyStyles(icon, params);
            return;
        }
        if (!params.icon && !params.iconHtml) return hide(icon);
        if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
            return hide(icon);
        }
        show(icon); // Custom or default content
        setContent(icon, params);
        applyStyles(icon, params); // Animate icon
        addClass(icon, params.showClass.icon);
    };
    var applyStyles = function applyStyles(icon, params) {
        for(var iconType in iconTypes)if (params.icon !== iconType) removeClass(icon, iconTypes[iconType]);
        addClass(icon, iconTypes[params.icon]); // Icon color
        setColor(icon, params); // Success icon background color
        adjustSuccessIconBackgoundColor(); // Custom class
        applyCustomClass(icon, params, 'icon');
    }; // Adjust success icon background color to match the popup background color
    var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
        var popup = getPopup();
        var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
        var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
        for(var i = 0; i < successIconParts.length; i++)successIconParts[i].style.backgroundColor = popupBackgroundColor;
    };
    var setContent = function setContent(icon, params) {
        icon.textContent = '';
        if (params.iconHtml) setInnerHtml(icon, iconContent(params.iconHtml));
        else if (params.icon === 'success') setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
        else if (params.icon === 'error') setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
        else {
            var defaultIconHtml = {
                question: '?',
                warning: '!',
                info: 'i'
            };
            setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
        }
    };
    var setColor = function setColor(icon, params) {
        if (!params.iconColor) return;
        icon.style.color = params.iconColor;
        icon.style.borderColor = params.iconColor;
        for(var _i = 0, _arr = [
            '.swal2-success-line-tip',
            '.swal2-success-line-long',
            '.swal2-x-mark-line-left',
            '.swal2-x-mark-line-right'
        ]; _i < _arr.length; _i++){
            var sel = _arr[_i];
            setStyle(icon, sel, 'backgroundColor', params.iconColor);
        }
        setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
    };
    var iconContent = function iconContent(content) {
        return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
    };
    var renderImage = function renderImage(instance, params) {
        var image = getImage();
        if (!params.imageUrl) return hide(image);
        show(image, ''); // Src, alt
        image.setAttribute('src', params.imageUrl);
        image.setAttribute('alt', params.imageAlt); // Width, height
        applyNumericalStyle(image, 'width', params.imageWidth);
        applyNumericalStyle(image, 'height', params.imageHeight); // Class
        image.className = swalClasses.image;
        applyCustomClass(image, params, 'image');
    };
    var currentSteps = [];
    /*
   * Global function for chaining sweetAlert popups
   */ var queue = function queue(steps) {
        warnAboutDeprecation('Swal.queue()', "async/await");
        var Swal = this;
        currentSteps = steps;
        var resetAndResolve = function resetAndResolve(resolve, value) {
            currentSteps = [];
            resolve(value);
        };
        var queueResult = [];
        return new Promise(function(resolve) {
            (function step(i, callback) {
                if (i < currentSteps.length) {
                    document.body.setAttribute('data-swal2-queue-step', i);
                    Swal.fire(currentSteps[i]).then(function(result) {
                        if (typeof result.value !== 'undefined') {
                            queueResult.push(result.value);
                            step(i + 1, callback);
                        } else resetAndResolve(resolve, {
                            dismiss: result.dismiss
                        });
                    });
                } else resetAndResolve(resolve, {
                    value: queueResult
                });
            })(0);
        });
    };
    /*
   * Global function for getting the index of current popup in queue
   */ var getQueueStep = function getQueueStep() {
        return getContainer() && getContainer().getAttribute('data-queue-step');
    };
    /*
   * Global function for inserting a popup to the queue
   */ var insertQueueStep = function insertQueueStep(step, index) {
        if (index && index < currentSteps.length) return currentSteps.splice(index, 0, step);
        return currentSteps.push(step);
    };
    /*
   * Global function for deleting a popup from the queue
   */ var deleteQueueStep = function deleteQueueStep(index) {
        if (typeof currentSteps[index] !== 'undefined') currentSteps.splice(index, 1);
    };
    var createStepElement = function createStepElement(step) {
        var stepEl = document.createElement('li');
        addClass(stepEl, swalClasses['progress-step']);
        setInnerHtml(stepEl, step);
        return stepEl;
    };
    var createLineElement = function createLineElement(params) {
        var lineEl = document.createElement('li');
        addClass(lineEl, swalClasses['progress-step-line']);
        if (params.progressStepsDistance) lineEl.style.width = params.progressStepsDistance;
        return lineEl;
    };
    var renderProgressSteps = function renderProgressSteps(instance, params) {
        var progressStepsContainer = getProgressSteps();
        if (!params.progressSteps || params.progressSteps.length === 0) return hide(progressStepsContainer);
        show(progressStepsContainer);
        progressStepsContainer.textContent = '';
        var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);
        if (currentProgressStep >= params.progressSteps.length) warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
        params.progressSteps.forEach(function(step, index) {
            var stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);
            if (index === currentProgressStep) addClass(stepEl, swalClasses['active-progress-step']);
            if (index !== params.progressSteps.length - 1) {
                var lineEl = createLineElement(params);
                progressStepsContainer.appendChild(lineEl);
            }
        });
    };
    var renderTitle = function renderTitle(instance, params) {
        var title = getTitle();
        toggle(title, params.title || params.titleText, 'block');
        if (params.title) parseHtmlToContainer(params.title, title);
        if (params.titleText) title.innerText = params.titleText;
         // Custom class
        applyCustomClass(title, params, 'title');
    };
    var renderHeader = function renderHeader(instance, params) {
        var header = getHeader(); // Custom class
        applyCustomClass(header, params, 'header'); // Progress steps
        renderProgressSteps(instance, params); // Icon
        renderIcon(instance, params); // Image
        renderImage(instance, params); // Title
        renderTitle(instance, params); // Close button
        renderCloseButton(instance, params);
    };
    var renderPopup = function renderPopup(instance, params) {
        var container = getContainer();
        var popup = getPopup(); // Width
        if (params.toast) {
            // #2170
            applyNumericalStyle(container, 'width', params.width);
            popup.style.width = '100%';
        } else applyNumericalStyle(popup, 'width', params.width);
         // Padding
        applyNumericalStyle(popup, 'padding', params.padding); // Background
        if (params.background) popup.style.background = params.background;
        hide(getValidationMessage()); // Classes
        addClasses(popup, params);
    };
    var addClasses = function addClasses(popup, params) {
        // Default Class + showClass when updating Swal.update({})
        popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');
        if (params.toast) {
            addClass([
                document.documentElement,
                document.body
            ], swalClasses['toast-shown']);
            addClass(popup, swalClasses.toast);
        } else addClass(popup, swalClasses.modal);
         // Custom class
        applyCustomClass(popup, params, 'popup');
        if (typeof params.customClass === 'string') addClass(popup, params.customClass);
         // Icon class (#1842)
        if (params.icon) addClass(popup, swalClasses["icon-".concat(params.icon)]);
    };
    var render = function render(instance, params) {
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderHeader(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);
        if (typeof params.didRender === 'function') params.didRender(getPopup());
        else if (typeof params.onRender === 'function') params.onRender(getPopup()); // @deprecated
    };
    /*
   * Global function to determine if SweetAlert2 popup is shown
   */ var isVisible$1 = function isVisible$$1() {
        return isVisible(getPopup());
    };
    /*
   * Global function to click 'Confirm' button
   */ var clickConfirm = function clickConfirm() {
        return getConfirmButton() && getConfirmButton().click();
    };
    /*
   * Global function to click 'Deny' button
   */ var clickDeny = function clickDeny() {
        return getDenyButton() && getDenyButton().click();
    };
    /*
   * Global function to click 'Cancel' button
   */ var clickCancel = function clickCancel() {
        return getCancelButton() && getCancelButton().click();
    };
    function fire() {
        var Swal = this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return _construct(Swal, args);
    }
    /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */ function mixin(mixinParams) {
        var MixinSwal = /*#__PURE__*/ function(_this) {
            _inherits(MixinSwal, _this);
            var _super = _createSuper(MixinSwal);
            function MixinSwal() {
                _classCallCheck(this, MixinSwal);
                return _super.apply(this, arguments);
            }
            _createClass(MixinSwal, [
                {
                    key: "_main",
                    value: function _main(params, priorityMixinParams) {
                        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, mixinParams, priorityMixinParams));
                    }
                }
            ]);
            return MixinSwal;
        }(this);
        return MixinSwal;
    }
    /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */ var showLoading = function showLoading(buttonToReplace) {
        var popup = getPopup();
        if (!popup) Swal.fire();
        popup = getPopup();
        var actions = getActions();
        var loader = getLoader();
        if (!buttonToReplace && isVisible(getConfirmButton())) buttonToReplace = getConfirmButton();
        show(actions);
        if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute('data-button-to-replace', buttonToReplace.className);
        }
        loader.parentNode.insertBefore(loader, buttonToReplace);
        addClass([
            popup,
            actions
        ], swalClasses.loading);
        show(loader);
        popup.setAttribute('data-loading', true);
        popup.setAttribute('aria-busy', true);
        popup.focus();
    };
    var RESTORE_FOCUS_TIMEOUT = 100;
    var globalState = {};
    var focusPreviousActiveElement = function focusPreviousActiveElement() {
        if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
        } else if (document.body) document.body.focus();
    }; // Restore previous active (focused) element
    var restoreActiveElement = function restoreActiveElement(returnFocus) {
        return new Promise(function(resolve) {
            if (!returnFocus) return resolve();
            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function() {
                focusPreviousActiveElement();
                resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900
            if (typeof x !== 'undefined' && typeof y !== 'undefined') // IE doesn't have scrollX/scrollY support
            window.scrollTo(x, y);
        });
    };
    /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */ var getTimerLeft = function getTimerLeft() {
        return globalState.timeout && globalState.timeout.getTimerLeft();
    };
    /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */ var stopTimer = function stopTimer() {
        if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */ var resumeTimer = function resumeTimer() {
        if (globalState.timeout) {
            var remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */ var toggleTimer = function toggleTimer() {
        var timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
    };
    /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */ var increaseTimer = function increaseTimer(n) {
        if (globalState.timeout) {
            var remaining = globalState.timeout.increase(n);
            animateTimerProgressBar(remaining, true);
            return remaining;
        }
    };
    /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */ var isTimerRunning = function isTimerRunning() {
        return globalState.timeout && globalState.timeout.isRunning();
    };
    var bodyClickListenerAdded = false;
    var clickHandlers = {};
    function bindClickHandler() {
        var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
        clickHandlers[attr] = this;
        if (!bodyClickListenerAdded) {
            document.body.addEventListener('click', bodyClickListener);
            bodyClickListenerAdded = true;
        }
    }
    var bodyClickListener = function bodyClickListener(event) {
        // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
        // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
        for(var el = event.target; el && el !== document; el = el.parentNode)for(var attr in clickHandlers){
            var template = el.getAttribute(attr);
            if (template) {
                clickHandlers[attr].fire({
                    template: template
                });
                return;
            }
        }
    };
    var defaultParams = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        icon: undefined,
        iconColor: undefined,
        iconHtml: undefined,
        template: undefined,
        toast: false,
        animation: true,
        showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
        },
        hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide'
        },
        customClass: {},
        target: 'body',
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: false,
        preConfirm: undefined,
        preDeny: undefined,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: undefined,
        denyButtonText: 'No',
        denyButtonAriaLabel: '',
        denyButtonColor: undefined,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: undefined,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusDeny: false,
        focusCancel: false,
        returnFocus: true,
        showCloseButton: false,
        closeButtonHtml: '&times;',
        closeButtonAriaLabel: 'Close this dialog',
        loaderHtml: '',
        showLoaderOnConfirm: false,
        showLoaderOnDeny: false,
        imageUrl: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
        imageAlt: '',
        timer: undefined,
        timerProgressBar: false,
        width: undefined,
        padding: undefined,
        background: undefined,
        input: undefined,
        inputPlaceholder: '',
        inputLabel: '',
        inputValue: '',
        inputOptions: {},
        inputAutoTrim: true,
        inputAttributes: {},
        inputValidator: undefined,
        returnInputValueOnDeny: false,
        validationMessage: undefined,
        grow: false,
        position: 'center',
        progressSteps: [],
        currentProgressStep: undefined,
        progressStepsDistance: undefined,
        onBeforeOpen: undefined,
        onOpen: undefined,
        willOpen: undefined,
        didOpen: undefined,
        onRender: undefined,
        didRender: undefined,
        onClose: undefined,
        onAfterClose: undefined,
        willClose: undefined,
        didClose: undefined,
        onDestroy: undefined,
        didDestroy: undefined,
        scrollbarPadding: true
    };
    var updatableParams = [
        'allowEscapeKey',
        'allowOutsideClick',
        'background',
        'buttonsStyling',
        'cancelButtonAriaLabel',
        'cancelButtonColor',
        'cancelButtonText',
        'closeButtonAriaLabel',
        'closeButtonHtml',
        'confirmButtonAriaLabel',
        'confirmButtonColor',
        'confirmButtonText',
        'currentProgressStep',
        'customClass',
        'denyButtonAriaLabel',
        'denyButtonColor',
        'denyButtonText',
        'didClose',
        'didDestroy',
        'footer',
        'hideClass',
        'html',
        'icon',
        'iconColor',
        'iconHtml',
        'imageAlt',
        'imageHeight',
        'imageUrl',
        'imageWidth',
        'onAfterClose',
        'onClose',
        'onDestroy',
        'progressSteps',
        'returnFocus',
        'reverseButtons',
        'showCancelButton',
        'showCloseButton',
        'showConfirmButton',
        'showDenyButton',
        'text',
        'title',
        'titleText',
        'willClose'
    ];
    var deprecatedParams = {
        animation: 'showClass" and "hideClass',
        onBeforeOpen: 'willOpen',
        onOpen: 'didOpen',
        onRender: 'didRender',
        onClose: 'willClose',
        onAfterClose: 'didClose',
        onDestroy: 'didDestroy'
    };
    var toastIncompatibleParams = [
        'allowOutsideClick',
        'allowEnterKey',
        'backdrop',
        'focusConfirm',
        'focusDeny',
        'focusCancel',
        'returnFocus',
        'heightAuto',
        'keydownListenerCapture'
    ];
    /**
   * Is valid parameter
   * @param {String} paramName
   */ var isValidParameter = function isValidParameter(paramName) {
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
    };
    /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */ var isUpdatableParameter = function isUpdatableParameter(paramName) {
        return updatableParams.indexOf(paramName) !== -1;
    };
    /**
   * Is deprecated parameter
   * @param {String} paramName
   */ var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
        return deprecatedParams[paramName];
    };
    var checkIfParamIsValid = function checkIfParamIsValid(param) {
        if (!isValidParameter(param)) warn("Unknown parameter \"".concat(param, "\""));
    };
    var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
        if (toastIncompatibleParams.indexOf(param) !== -1) warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    };
    var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
        if (isDeprecatedParameter(param)) warnAboutDeprecation(param, isDeprecatedParameter(param));
    };
    /**
   * Show relevant warnings for given params
   *
   * @param params
   */ var showWarningsForParams = function showWarningsForParams(params) {
        for(var param in params){
            checkIfParamIsValid(param);
            if (params.toast) checkIfToastParamIsValid(param);
            checkIfParamIsDeprecated(param);
        }
    };
    var staticMethods = /*#__PURE__*/ Object.freeze({
        isValidParameter: isValidParameter,
        isUpdatableParameter: isUpdatableParameter,
        isDeprecatedParameter: isDeprecatedParameter,
        argsToParams: argsToParams,
        isVisible: isVisible$1,
        clickConfirm: clickConfirm,
        clickDeny: clickDeny,
        clickCancel: clickCancel,
        getContainer: getContainer,
        getPopup: getPopup,
        getTitle: getTitle,
        getContent: getContent,
        getHtmlContainer: getHtmlContainer,
        getImage: getImage,
        getIcon: getIcon,
        getInputLabel: getInputLabel,
        getCloseButton: getCloseButton,
        getActions: getActions,
        getConfirmButton: getConfirmButton,
        getDenyButton: getDenyButton,
        getCancelButton: getCancelButton,
        getLoader: getLoader,
        getHeader: getHeader,
        getFooter: getFooter,
        getTimerProgressBar: getTimerProgressBar,
        getFocusableElements: getFocusableElements,
        getValidationMessage: getValidationMessage,
        isLoading: isLoading,
        fire: fire,
        mixin: mixin,
        queue: queue,
        getQueueStep: getQueueStep,
        insertQueueStep: insertQueueStep,
        deleteQueueStep: deleteQueueStep,
        showLoading: showLoading,
        enableLoading: showLoading,
        getTimerLeft: getTimerLeft,
        stopTimer: stopTimer,
        resumeTimer: resumeTimer,
        toggleTimer: toggleTimer,
        increaseTimer: increaseTimer,
        isTimerRunning: isTimerRunning,
        bindClickHandler: bindClickHandler
    });
    /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */ function hideLoading() {
        // do nothing if popup is closed
        var innerParams = privateProps.innerParams.get(this);
        if (!innerParams) return;
        var domCache = privateProps.domCache.get(this);
        hide(domCache.loader);
        var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
        if (buttonToReplace.length) show(buttonToReplace[0], 'inline-block');
        else if (allButtonsAreHidden()) hide(domCache.actions);
        removeClass([
            domCache.popup,
            domCache.actions
        ], swalClasses.loading);
        domCache.popup.removeAttribute('aria-busy');
        domCache.popup.removeAttribute('data-loading');
        domCache.confirmButton.disabled = false;
        domCache.denyButton.disabled = false;
        domCache.cancelButton.disabled = false;
    }
    function getInput$1(instance) {
        var innerParams = privateProps.innerParams.get(instance || this);
        var domCache = privateProps.domCache.get(instance || this);
        if (!domCache) return null;
        return getInput(domCache.content, innerParams.input);
    }
    var fixScrollbar = function fixScrollbar() {
        // for queues, do not do this more than once
        if (states.previousBodyPadding !== null) return;
         // if the body has overflow
        if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
            document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
        }
    };
    var undoScrollbar = function undoScrollbar() {
        if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
            states.previousBodyPadding = null;
        }
    };
    /* istanbul ignore file */ var iOSfix = function iOSfix() {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = "".concat(offset * -1, "px");
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
            addBottomPaddingForTallPopups(); // #1948
        }
    };
    var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
        var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);
        if (safari) {
            var bottomPanelHeight = 44;
            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
        }
    };
    var lockBodyScroll = function lockBodyScroll() {
        // #1246
        var container = getContainer();
        var preventTouchMove;
        container.ontouchstart = function(e) {
            preventTouchMove = shouldPreventTouchMove(e);
        };
        container.ontouchmove = function(e) {
            if (preventTouchMove) {
                e.preventDefault();
                e.stopPropagation();
            }
        };
    };
    var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
        var target = event.target;
        var container = getContainer();
        if (isStylys(event) || isZoom(event)) return false;
        if (target === container) return true;
        if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
        !(isScrollable(getContent()) && // #1944
        getContent().contains(target))) return true;
        return false;
    };
    var isStylys = function isStylys(event) {
        // #1786
        return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
    };
    var isZoom = function isZoom(event) {
        // #1891
        return event.touches && event.touches.length > 1;
    };
    var undoIOSfix = function undoIOSfix() {
        if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
        }
    };
    /* istanbul ignore file */ var isIE11 = function isIE11() {
        return !!window.MSInputMethodContext && !!document.documentMode;
    }; // Fix IE11 centering sweetalert2/issues/933
    var fixVerticalPositionIE = function fixVerticalPositionIE() {
        var container = getContainer();
        var popup = getPopup();
        container.style.removeProperty('align-items');
        if (popup.offsetTop < 0) container.style.alignItems = 'flex-start';
    };
    var IEfix = function IEfix() {
        if (typeof window !== 'undefined' && isIE11()) {
            fixVerticalPositionIE();
            window.addEventListener('resize', fixVerticalPositionIE);
        }
    };
    var undoIEfix = function undoIEfix() {
        if (typeof window !== 'undefined' && isIE11()) window.removeEventListener('resize', fixVerticalPositionIE);
    };
    // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
    // elements not within the active modal dialog will not be surfaced if a user opens a screen
    // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
    var setAriaHidden = function setAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function(el) {
            if (el === getContainer() || contains(el, getContainer())) return;
            if (el.hasAttribute('aria-hidden')) el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
            el.setAttribute('aria-hidden', 'true');
        });
    };
    var unsetAriaHidden = function unsetAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function(el) {
            if (el.hasAttribute('data-previous-aria-hidden')) {
                el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
                el.removeAttribute('data-previous-aria-hidden');
            } else el.removeAttribute('aria-hidden');
        });
    };
    /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateMethods = {
        swalPromiseResolve: new WeakMap()
    };
    /*
   * Instance method to close sweetAlert
   */ function removePopupAndResetState(instance, container, returnFocus, didClose) {
        if (isToast()) triggerDidCloseAndDispose(instance, didClose);
        else {
            restoreActiveElement(returnFocus).then(function() {
                return triggerDidCloseAndDispose(instance, didClose);
            });
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
        }
        if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) container.parentNode.removeChild(container);
        if (isModal()) {
            undoScrollbar();
            undoIOSfix();
            undoIEfix();
            unsetAriaHidden();
        }
        removeBodyClasses();
    }
    function removeBodyClasses() {
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses.shown,
            swalClasses['height-auto'],
            swalClasses['no-backdrop'],
            swalClasses['toast-shown']
        ]);
    }
    function close(resolveValue) {
        var popup = getPopup();
        if (!popup) return;
        resolveValue = prepareResolveValue(resolveValue);
        var innerParams = privateProps.innerParams.get(this);
        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) return;
        var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        var backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise
        swalPromiseResolve(resolveValue);
    }
    var prepareResolveValue = function prepareResolveValue(resolveValue) {
        // When user calls Swal.close()
        if (typeof resolveValue === 'undefined') return {
            isConfirmed: false,
            isDenied: false,
            isDismissed: true
        };
        return _extends({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
        }, resolveValue);
    };
    var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
        var container = getContainer(); // If animation is supported, animate
        var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
        var onClose = innerParams.onClose, onAfterClose = innerParams.onAfterClose, willClose = innerParams.willClose, didClose = innerParams.didClose;
        runDidClose(popup, willClose, onClose);
        if (animationIsSupported) animatePopup(instance, popup, container, innerParams.returnFocus, didClose || onAfterClose);
        else // Otherwise, remove immediately
        removePopupAndResetState(instance, container, innerParams.returnFocus, didClose || onAfterClose);
    };
    var runDidClose = function runDidClose(popup, willClose, onClose) {
        if (willClose !== null && typeof willClose === 'function') willClose(popup);
        else if (onClose !== null && typeof onClose === 'function') onClose(popup); // @deprecated
    };
    var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
        popup.addEventListener(animationEndEvent, function(e) {
            if (e.target === popup) {
                globalState.swalCloseEventFinishedCallback();
                delete globalState.swalCloseEventFinishedCallback;
            }
        });
    };
    var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
        setTimeout(function() {
            if (typeof didClose === 'function') didClose();
            instance._destroy();
        });
    };
    function setButtonsDisabled(instance, buttons, disabled) {
        var domCache = privateProps.domCache.get(instance);
        buttons.forEach(function(button) {
            domCache[button].disabled = disabled;
        });
    }
    function setInputDisabled(input, disabled) {
        if (!input) return false;
        if (input.type === 'radio') {
            var radiosContainer = input.parentNode.parentNode;
            var radios = radiosContainer.querySelectorAll('input');
            for(var i = 0; i < radios.length; i++)radios[i].disabled = disabled;
        } else input.disabled = disabled;
    }
    function enableButtons() {
        setButtonsDisabled(this, [
            'confirmButton',
            'denyButton',
            'cancelButton'
        ], false);
    }
    function disableButtons() {
        setButtonsDisabled(this, [
            'confirmButton',
            'denyButton',
            'cancelButton'
        ], true);
    }
    function enableInput() {
        return setInputDisabled(this.getInput(), false);
    }
    function disableInput() {
        return setInputDisabled(this.getInput(), true);
    }
    function showValidationMessage(error) {
        var domCache = privateProps.domCache.get(this);
        var params = privateProps.innerParams.get(this);
        setInnerHtml(domCache.validationMessage, error);
        domCache.validationMessage.className = swalClasses['validation-message'];
        if (params.customClass && params.customClass.validationMessage) addClass(domCache.validationMessage, params.customClass.validationMessage);
        show(domCache.validationMessage);
        var input = this.getInput();
        if (input) {
            input.setAttribute('aria-invalid', true);
            input.setAttribute('aria-describedBy', swalClasses['validation-message']);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
        }
    } // Hide block with validation message
    function resetValidationMessage$1() {
        var domCache = privateProps.domCache.get(this);
        if (domCache.validationMessage) hide(domCache.validationMessage);
        var input = this.getInput();
        if (input) {
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedBy');
            removeClass(input, swalClasses.inputerror);
        }
    }
    function getProgressSteps$1() {
        var domCache = privateProps.domCache.get(this);
        return domCache.progressSteps;
    }
    var Timer = /*#__PURE__*/ function() {
        function Timer(callback, delay) {
            _classCallCheck(this, Timer);
            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
        }
        _createClass(Timer, [
            {
                key: "start",
                value: function start() {
                    if (!this.running) {
                        this.running = true;
                        this.started = new Date();
                        this.id = setTimeout(this.callback, this.remaining);
                    }
                    return this.remaining;
                }
            },
            {
                key: "stop",
                value: function stop() {
                    if (this.running) {
                        this.running = false;
                        clearTimeout(this.id);
                        this.remaining -= new Date() - this.started;
                    }
                    return this.remaining;
                }
            },
            {
                key: "increase",
                value: function increase(n) {
                    var running = this.running;
                    if (running) this.stop();
                    this.remaining += n;
                    if (running) this.start();
                    return this.remaining;
                }
            },
            {
                key: "getTimerLeft",
                value: function getTimerLeft() {
                    if (this.running) {
                        this.stop();
                        this.start();
                    }
                    return this.remaining;
                }
            },
            {
                key: "isRunning",
                value: function isRunning() {
                    return this.running;
                }
            }
        ]);
        return Timer;
    }();
    var defaultInputValidators = {
        email: function email(string, validationMessage) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
        },
        url: function url(string, validationMessage) {
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
        }
    };
    function setDefaultInputValidators(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (!params.inputValidator) Object.keys(defaultInputValidators).forEach(function(key) {
            if (params.input === key) params.inputValidator = defaultInputValidators[key];
        });
    }
    function validateCustomTargetElement(params) {
        // Determine if the custom target element is valid
        if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = 'body';
        }
    }
    /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */ function setParameters(params) {
        setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm
        if (params.showLoaderOnConfirm && !params.preConfirm) warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
         // params.animation will be actually used in renderPopup.js
        // but in case when params.animation is a function, we need to call that function
        // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
        // inside the params.animation function
        params.animation = callIfFunction(params.animation);
        validateCustomTargetElement(params); // Replace newlines with <br> in title
        if (typeof params.title === 'string') params.title = params.title.split('\n').join('<br />');
        init(params);
    }
    var swalStringParams = [
        'swal-title',
        'swal-html',
        'swal-footer'
    ];
    var getTemplateParams = function getTemplateParams(params) {
        var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
        if (!template) return {};
        var templateContent = template.content || template; // IE11
        showWarningsForElements(templateContent);
        var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
        return result;
    };
    var getSwalParams = function getSwalParams(templateContent) {
        var result = {};
        toArray(templateContent.querySelectorAll('swal-param')).forEach(function(param) {
            showWarningsForAttributes(param, [
                'name',
                'value'
            ]);
            var paramName = param.getAttribute('name');
            var value = param.getAttribute('value');
            if (typeof defaultParams[paramName] === 'boolean' && value === 'false') value = false;
            if (_typeof(defaultParams[paramName]) === 'object') value = JSON.parse(value);
            result[paramName] = value;
        });
        return result;
    };
    var getSwalButtons = function getSwalButtons(templateContent) {
        var result = {};
        toArray(templateContent.querySelectorAll('swal-button')).forEach(function(button) {
            showWarningsForAttributes(button, [
                'type',
                'color',
                'aria-label'
            ]);
            var type = button.getAttribute('type');
            result["".concat(type, "ButtonText")] = button.innerHTML;
            result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
            if (button.hasAttribute('color')) result["".concat(type, "ButtonColor")] = button.getAttribute('color');
            if (button.hasAttribute('aria-label')) result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
        });
        return result;
    };
    var getSwalImage = function getSwalImage(templateContent) {
        var result = {};
        var image = templateContent.querySelector('swal-image');
        if (image) {
            showWarningsForAttributes(image, [
                'src',
                'width',
                'height',
                'alt'
            ]);
            if (image.hasAttribute('src')) result.imageUrl = image.getAttribute('src');
            if (image.hasAttribute('width')) result.imageWidth = image.getAttribute('width');
            if (image.hasAttribute('height')) result.imageHeight = image.getAttribute('height');
            if (image.hasAttribute('alt')) result.imageAlt = image.getAttribute('alt');
        }
        return result;
    };
    var getSwalIcon = function getSwalIcon(templateContent) {
        var result = {};
        var icon = templateContent.querySelector('swal-icon');
        if (icon) {
            showWarningsForAttributes(icon, [
                'type',
                'color'
            ]);
            if (icon.hasAttribute('type')) result.icon = icon.getAttribute('type');
            if (icon.hasAttribute('color')) result.iconColor = icon.getAttribute('color');
            result.iconHtml = icon.innerHTML;
        }
        return result;
    };
    var getSwalInput = function getSwalInput(templateContent) {
        var result = {};
        var input = templateContent.querySelector('swal-input');
        if (input) {
            showWarningsForAttributes(input, [
                'type',
                'label',
                'placeholder',
                'value'
            ]);
            result.input = input.getAttribute('type') || 'text';
            if (input.hasAttribute('label')) result.inputLabel = input.getAttribute('label');
            if (input.hasAttribute('placeholder')) result.inputPlaceholder = input.getAttribute('placeholder');
            if (input.hasAttribute('value')) result.inputValue = input.getAttribute('value');
        }
        var inputOptions = templateContent.querySelectorAll('swal-input-option');
        if (inputOptions.length) {
            result.inputOptions = {};
            toArray(inputOptions).forEach(function(option) {
                showWarningsForAttributes(option, [
                    'value'
                ]);
                var optionValue = option.getAttribute('value');
                var optionName = option.innerHTML;
                result.inputOptions[optionValue] = optionName;
            });
        }
        return result;
    };
    var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
        var result = {};
        for(var i in paramNames){
            var paramName = paramNames[i];
            var tag = templateContent.querySelector(paramName);
            if (tag) {
                showWarningsForAttributes(tag, []);
                result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
            }
        }
        return result;
    };
    var showWarningsForElements = function showWarningsForElements(template) {
        var allowedElements = swalStringParams.concat([
            'swal-param',
            'swal-button',
            'swal-image',
            'swal-icon',
            'swal-input',
            'swal-input-option'
        ]);
        toArray(template.querySelectorAll('*')).forEach(function(el) {
            if (el.parentNode !== template) // can't use template.children because of IE11
            return;
            var tagName = el.tagName.toLowerCase();
            if (allowedElements.indexOf(tagName) === -1) warn("Unrecognized element <".concat(tagName, ">"));
        });
    };
    var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
        toArray(el.attributes).forEach(function(attribute) {
            if (allowedAttributes.indexOf(attribute.name) === -1) warn([
                "Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."),
                "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')
            ]);
        });
    };
    var SHOW_CLASS_TIMEOUT = 10;
    /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */ var openPopup = function openPopup(params) {
        var container = getContainer();
        var popup = getPopup();
        if (typeof params.willOpen === 'function') params.willOpen(popup);
        else if (typeof params.onBeforeOpen === 'function') params.onBeforeOpen(popup); // @deprecated
        var bodyStyles = window.getComputedStyle(document.body);
        var initialBodyOverflow = bodyStyles.overflowY;
        addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'
        setTimeout(function() {
            setScrollingVisibility(container, popup);
        }, SHOW_CLASS_TIMEOUT);
        if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
        }
        if (!isToast() && !globalState.previousActiveElement) globalState.previousActiveElement = document.activeElement;
        runDidOpen(popup, params);
        removeClass(container, swalClasses['no-transition']);
    };
    var runDidOpen = function runDidOpen(popup, params) {
        if (typeof params.didOpen === 'function') setTimeout(function() {
            return params.didOpen(popup);
        });
        else if (typeof params.onOpen === 'function') setTimeout(function() {
            return params.onOpen(popup);
        }); // @deprecated
    };
    var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
        var popup = getPopup();
        if (event.target !== popup) return;
        var container = getContainer();
        popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
        container.style.overflowY = 'auto';
    };
    var setScrollingVisibility = function setScrollingVisibility(container, popup) {
        if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = 'hidden';
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
        } else container.style.overflowY = 'auto';
    };
    var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
        iOSfix();
        IEfix();
        if (scrollbarPadding && initialBodyOverflow !== 'hidden') fixScrollbar();
         // sweetalert2/issues/1247
        setTimeout(function() {
            container.scrollTop = 0;
        });
    };
    var addClasses$1 = function addClasses(container, popup, params) {
        addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059
        popup.style.setProperty('opacity', '0', 'important');
        show(popup);
        setTimeout(function() {
            // Animate popup right after showing it
            addClass(popup, params.showClass.popup); // and remove the opacity workaround
            popup.style.removeProperty('opacity');
        }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
        addClass([
            document.documentElement,
            document.body
        ], swalClasses.shown);
        if (params.heightAuto && params.backdrop && !params.toast) addClass([
            document.documentElement,
            document.body
        ], swalClasses['height-auto']);
    };
    var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
        if (params.input === 'select' || params.input === 'radio') handleInputOptions(instance, params);
        else if ([
            'text',
            'email',
            'number',
            'tel',
            'textarea'
        ].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) handleInputValue(instance, params);
    };
    var getInputValue = function getInputValue(instance, innerParams) {
        var input = instance.getInput();
        if (!input) return null;
        switch(innerParams.input){
            case 'checkbox':
                return getCheckboxValue(input);
            case 'radio':
                return getRadioValue(input);
            case 'file':
                return getFileValue(input);
            default:
                return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
    };
    var getCheckboxValue = function getCheckboxValue(input) {
        return input.checked ? 1 : 0;
    };
    var getRadioValue = function getRadioValue(input) {
        return input.checked ? input.value : null;
    };
    var getFileValue = function getFileValue(input) {
        return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
    };
    var handleInputOptions = function handleInputOptions(instance, params) {
        var content = getContent();
        var processInputOptions = function processInputOptions(inputOptions) {
            return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
        };
        if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then(function(inputOptions) {
                instance.hideLoading();
                processInputOptions(inputOptions);
            });
        } else if (_typeof(params.inputOptions) === 'object') processInputOptions(params.inputOptions);
        else error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    };
    var handleInputValue = function handleInputValue(instance, params) {
        var input = instance.getInput();
        hide(input);
        asPromise(params.inputValue).then(function(inputValue) {
            input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
            show(input);
            input.focus();
            instance.hideLoading();
        })["catch"](function(err) {
            error("Error in inputValue promise: ".concat(err));
            input.value = '';
            show(input);
            input.focus();
            instance.hideLoading();
        });
    };
    var populateInputOptions = {
        select: function select(content, inputOptions, params) {
            var select = getChildByClass(content, swalClasses.select);
            var renderOption = function renderOption(parent, optionLabel, optionValue) {
                var option = document.createElement('option');
                option.value = optionValue;
                setInnerHtml(option, optionLabel);
                option.selected = isSelected(optionValue, params.inputValue);
                parent.appendChild(option);
            };
            inputOptions.forEach(function(inputOption) {
                var optionValue = inputOption[0];
                var optionLabel = inputOption[1]; // <optgroup> spec:
                // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
                // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
                // check whether this is a <optgroup>
                if (Array.isArray(optionLabel)) {
                    // if it is an array, then it is an <optgroup>
                    var optgroup = document.createElement('optgroup');
                    optgroup.label = optionValue;
                    optgroup.disabled = false; // not configurable for now
                    select.appendChild(optgroup);
                    optionLabel.forEach(function(o) {
                        return renderOption(optgroup, o[1], o[0]);
                    });
                } else // case of <option>
                renderOption(select, optionLabel, optionValue);
            });
            select.focus();
        },
        radio: function radio(content, inputOptions, params) {
            var radio = getChildByClass(content, swalClasses.radio);
            inputOptions.forEach(function(inputOption) {
                var radioValue = inputOption[0];
                var radioLabel = inputOption[1];
                var radioInput = document.createElement('input');
                var radioLabelElement = document.createElement('label');
                radioInput.type = 'radio';
                radioInput.name = swalClasses.radio;
                radioInput.value = radioValue;
                if (isSelected(radioValue, params.inputValue)) radioInput.checked = true;
                var label = document.createElement('span');
                setInnerHtml(label, radioLabel);
                label.className = swalClasses.label;
                radioLabelElement.appendChild(radioInput);
                radioLabelElement.appendChild(label);
                radio.appendChild(radioLabelElement);
            });
            var radios = radio.querySelectorAll('input');
            if (radios.length) radios[0].focus();
        }
    };
    /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */ var formatInputOptions = function formatInputOptions(inputOptions) {
        var result = [];
        if (typeof Map !== 'undefined' && inputOptions instanceof Map) inputOptions.forEach(function(value, key) {
            var valueFormatted = value;
            if (_typeof(valueFormatted) === 'object') // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        else Object.keys(inputOptions).forEach(function(key) {
            var valueFormatted = inputOptions[key];
            if (_typeof(valueFormatted) === 'object') // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        return result;
    };
    var isSelected = function isSelected(optionValue, inputValue) {
        return inputValue && inputValue.toString() === optionValue.toString();
    };
    var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
        instance.disableButtons();
        if (innerParams.input) handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
        else confirm(instance, innerParams, true);
    };
    var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
        instance.disableButtons();
        if (innerParams.returnInputValueOnDeny) handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
        else deny(instance, innerParams, false);
    };
    var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
    };
    var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type) {
        var inputValue = getInputValue(instance, innerParams);
        if (innerParams.inputValidator) handleInputValidator(instance, innerParams, inputValue);
        else if (!instance.getInput().checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage);
        } else if (type === 'deny') deny(instance, innerParams, inputValue);
        else confirm(instance, innerParams, inputValue);
    };
    var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
        instance.disableInput();
        var validationPromise = Promise.resolve().then(function() {
            return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
        });
        validationPromise.then(function(validationMessage) {
            instance.enableButtons();
            instance.enableInput();
            if (validationMessage) instance.showValidationMessage(validationMessage);
            else confirm(instance, innerParams, inputValue);
        });
    };
    var deny = function deny(instance, innerParams, value) {
        if (innerParams.showLoaderOnDeny) showLoading(getDenyButton());
        if (innerParams.preDeny) {
            var preDenyPromise = Promise.resolve().then(function() {
                return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
            });
            preDenyPromise.then(function(preDenyValue) {
                if (preDenyValue === false) instance.hideLoading();
                else instance.closePopup({
                    isDenied: true,
                    value: typeof preDenyValue === 'undefined' ? value : preDenyValue
                });
            });
        } else instance.closePopup({
            isDenied: true,
            value: value
        });
    };
    var succeedWith = function succeedWith(instance, value) {
        instance.closePopup({
            isConfirmed: true,
            value: value
        });
    };
    var confirm = function confirm(instance, innerParams, value) {
        if (innerParams.showLoaderOnConfirm) showLoading(); // TODO: make showLoading an *instance* method
        if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            var preConfirmPromise = Promise.resolve().then(function() {
                return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
            });
            preConfirmPromise.then(function(preConfirmValue) {
                if (isVisible(getValidationMessage()) || preConfirmValue === false) instance.hideLoading();
                else succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
            });
        } else succeedWith(instance, value);
    };
    var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
        if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
        }
        if (!innerParams.toast) {
            globalState.keydownHandler = function(e) {
                return keydownHandler(instance, e, dismissWith);
            };
            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
        }
    }; // Focus handling
    var setFocus = function setFocus(innerParams, index, increment) {
        var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match
        if (focusableElements.length) {
            index = index + increment; // rollover to first item
            if (index === focusableElements.length) index = 0; // go to last item
            else if (index === -1) index = focusableElements.length - 1;
            return focusableElements[index].focus();
        } // no visible focusable elements, focus the popup
        getPopup().focus();
    };
    var arrowKeysNextButton = [
        'ArrowRight',
        'ArrowDown',
        'Right',
        'Down' // IE11
    ];
    var arrowKeysPreviousButton = [
        'ArrowLeft',
        'ArrowUp',
        'Left',
        'Up' // IE11
    ];
    var escKeys = [
        'Escape',
        'Esc' // IE11
    ];
    var keydownHandler = function keydownHandler(instance, e, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);
        if (!innerParams) return; // This instance has already been destroyed
        if (innerParams.stopKeydownPropagation) e.stopPropagation();
         // ENTER
        if (e.key === 'Enter') handleEnter(instance, e, innerParams); // TAB
        else if (e.key === 'Tab') handleTab(e, innerParams); // ARROWS - switch focus between buttons
        else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) handleArrows(e.key); // ESC
        else if (escKeys.indexOf(e.key) !== -1) handleEsc(e, innerParams, dismissWith);
    };
    var handleEnter = function handleEnter(instance, e, innerParams) {
        // #720 #721
        if (e.isComposing) return;
        if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
            if ([
                'textarea',
                'file'
            ].indexOf(innerParams.input) !== -1) return; // do not submit
            clickConfirm();
            e.preventDefault();
        }
    };
    var handleTab = function handleTab(e, innerParams) {
        var targetElement = e.target;
        var focusableElements = getFocusableElements();
        var btnIndex = -1;
        for(var i = 0; i < focusableElements.length; i++)if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
        }
        if (!e.shiftKey) // Cycle to the next button
        setFocus(innerParams, btnIndex, 1);
        else // Cycle to the prev button
        setFocus(innerParams, btnIndex, -1);
        e.stopPropagation();
        e.preventDefault();
    };
    var handleArrows = function handleArrows(key) {
        var confirmButton = getConfirmButton();
        var denyButton = getDenyButton();
        var cancelButton = getCancelButton();
        if (!([
            confirmButton,
            denyButton,
            cancelButton
        ].indexOf(document.activeElement) !== -1)) return;
        var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
        var buttonToFocus = document.activeElement[sibling];
        if (buttonToFocus) buttonToFocus.focus();
    };
    var handleEsc = function handleEsc(e, innerParams, dismissWith) {
        if (callIfFunction(innerParams.allowEscapeKey)) {
            e.preventDefault();
            dismissWith(DismissReason.esc);
        }
    };
    var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);
        if (innerParams.toast) handleToastClick(instance, domCache, dismissWith);
        else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup
            handleContainerMousedown(domCache);
            handleModalClick(instance, domCache, dismissWith);
        }
    };
    var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
        // Closing toast by internal click
        domCache.popup.onclick = function() {
            var innerParams = privateProps.innerParams.get(instance);
            if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) return;
            dismissWith(DismissReason.close);
        };
    };
    var ignoreOutsideClick = false;
    var handleModalMousedown = function handleModalMousedown(domCache) {
        domCache.popup.onmousedown = function() {
            domCache.container.onmouseup = function(e) {
                domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
                // have any other direct children aside of the popup
                if (e.target === domCache.container) ignoreOutsideClick = true;
            };
        };
    };
    var handleContainerMousedown = function handleContainerMousedown(domCache) {
        domCache.container.onmousedown = function() {
            domCache.popup.onmouseup = function(e) {
                domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup
                if (e.target === domCache.popup || domCache.popup.contains(e.target)) ignoreOutsideClick = true;
            };
        };
    };
    var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
        domCache.container.onclick = function(e) {
            var innerParams = privateProps.innerParams.get(instance);
            if (ignoreOutsideClick) {
                ignoreOutsideClick = false;
                return;
            }
            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) dismissWith(DismissReason.backdrop);
        };
    };
    function _main(userParams) {
        var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        showWarningsForParams(_extends({}, mixinParams, userParams));
        if (globalState.currentInstance) globalState.currentInstance._destroy();
        globalState.currentInstance = this;
        var innerParams = prepareParams(userParams, mixinParams);
        setParameters(innerParams);
        Object.freeze(innerParams); // clear the previous timer
        if (globalState.timeout) {
            globalState.timeout.stop();
            delete globalState.timeout;
        } // clear the restore focus timeout
        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = populateDomCache(this);
        render(this, innerParams);
        privateProps.innerParams.set(this, innerParams);
        return swalPromise(this, domCache, innerParams);
    }
    var prepareParams = function prepareParams(userParams, mixinParams) {
        var templateParams = getTemplateParams(userParams);
        var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
        params.showClass = _extends({}, defaultParams.showClass, params.showClass);
        params.hideClass = _extends({}, defaultParams.hideClass, params.hideClass); // @deprecated
        if (userParams.animation === false) {
            params.showClass = {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation'
            };
            params.hideClass = {};
        }
        return params;
    };
    var swalPromise = function swalPromise(instance, domCache, innerParams) {
        return new Promise(function(resolve) {
            // functions to handle all closings/dismissals
            var dismissWith = function dismissWith(dismiss) {
                instance.closePopup({
                    isDismissed: true,
                    dismiss: dismiss
                });
            };
            privateMethods.swalPromiseResolve.set(instance, resolve);
            domCache.confirmButton.onclick = function() {
                return handleConfirmButtonClick(instance, innerParams);
            };
            domCache.denyButton.onclick = function() {
                return handleDenyButtonClick(instance, innerParams);
            };
            domCache.cancelButton.onclick = function() {
                return handleCancelButtonClick(instance, dismissWith);
            };
            domCache.closeButton.onclick = function() {
                return dismissWith(DismissReason.close);
            };
            handlePopupClick(instance, domCache, dismissWith);
            addKeydownHandler(instance, globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)
            setTimeout(function() {
                domCache.container.scrollTop = 0;
            });
        });
    };
    var populateDomCache = function populateDomCache(instance) {
        var domCache = {
            popup: getPopup(),
            container: getContainer(),
            content: getContent(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
    };
    var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
        var timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);
        if (innerParams.timer) {
            globalState$$1.timeout = new Timer(function() {
                dismissWith('timer');
                delete globalState$$1.timeout;
            }, innerParams.timer);
            if (innerParams.timerProgressBar) {
                show(timerProgressBar);
                setTimeout(function() {
                    if (globalState$$1.timeout && globalState$$1.timeout.running) // timer can be already stopped or unset at this point
                    animateTimerProgressBar(innerParams.timer);
                });
            }
        }
    };
    var initFocus = function initFocus(domCache, innerParams) {
        if (innerParams.toast) return;
        if (!callIfFunction(innerParams.allowEnterKey)) return blurActiveElement();
        if (!focusButton(domCache, innerParams)) setFocus(innerParams, -1, 1);
    };
    var focusButton = function focusButton(domCache, innerParams) {
        if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
        }
        if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
        }
        if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
        }
        return false;
    };
    var blurActiveElement = function blurActiveElement() {
        if (document.activeElement && typeof document.activeElement.blur === 'function') document.activeElement.blur();
    };
    /**
   * Updates popup parameters.
   */ function update(params) {
        var popup = getPopup();
        var innerParams = privateProps.innerParams.get(this);
        if (!popup || hasClass(popup, innerParams.hideClass.popup)) return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        var validUpdatableParams = {}; // assign valid params from `params` to `defaults`
        Object.keys(params).forEach(function(param) {
            if (Swal.isUpdatableParameter(param)) validUpdatableParams[param] = params[param];
            else warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
        });
        var updatedParams = _extends({}, innerParams, validUpdatableParams);
        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
            params: {
                value: _extends({}, this.params, params),
                writable: false,
                enumerable: true
            }
        });
    }
    function _destroy() {
        var domCache = privateProps.domCache.get(this);
        var innerParams = privateProps.innerParams.get(this);
        if (!innerParams) return; // This instance has already been destroyed
         // Check if there is another Swal closing
        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
        } // Check if there is a swal disposal defer timer
        if (globalState.deferDisposalTimer) {
            clearTimeout(globalState.deferDisposalTimer);
            delete globalState.deferDisposalTimer;
        }
        runDidDestroy(innerParams);
        disposeSwal(this);
    }
    var runDidDestroy = function runDidDestroy(innerParams) {
        if (typeof innerParams.didDestroy === 'function') innerParams.didDestroy();
        else if (typeof innerParams.onDestroy === 'function') innerParams.onDestroy(); // @deprecated
    };
    var disposeSwal = function disposeSwal(instance) {
        // Unset this.params so GC will dispose it (#1569)
        delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)
        delete globalState.keydownHandler;
        delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)
        unsetWeakMaps(privateProps);
        unsetWeakMaps(privateMethods);
    };
    var unsetWeakMaps = function unsetWeakMaps(obj) {
        for(var i in obj)obj[i] = new WeakMap();
    };
    var instanceMethods = /*#__PURE__*/ Object.freeze({
        hideLoading: hideLoading,
        disableLoading: hideLoading,
        getInput: getInput$1,
        close: close,
        closePopup: close,
        closeModal: close,
        closeToast: close,
        enableButtons: enableButtons,
        disableButtons: disableButtons,
        enableInput: enableInput,
        disableInput: disableInput,
        showValidationMessage: showValidationMessage,
        resetValidationMessage: resetValidationMessage$1,
        getProgressSteps: getProgressSteps$1,
        _main: _main,
        update: update,
        _destroy: _destroy
    });
    var currentInstance;
    var SweetAlert = /*#__PURE__*/ function() {
        function SweetAlert() {
            _classCallCheck(this, SweetAlert);
            // Prevent run in Node env
            if (typeof window === 'undefined') return;
             // Check for the existence of Promise
            if (typeof Promise === 'undefined') error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
            currentInstance = this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            var outerParams = Object.freeze(this.constructor.argsToParams(args));
            Object.defineProperties(this, {
                params: {
                    value: outerParams,
                    writable: false,
                    enumerable: true,
                    configurable: true
                }
            });
            var promise = this._main(this.params);
            privateProps.promise.set(this, promise);
        } // `catch` cannot be the name of a module export, so we define our thenable methods here instead
        _createClass(SweetAlert, [
            {
                key: "then",
                value: function then(onFulfilled) {
                    var promise = privateProps.promise.get(this);
                    return promise.then(onFulfilled);
                }
            },
            {
                key: "finally",
                value: function _finally(onFinally) {
                    var promise = privateProps.promise.get(this);
                    return promise["finally"](onFinally);
                }
            }
        ]);
        return SweetAlert;
    }(); // Dear russian users visiting russian sites. Let's have fun.
    if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
        var now = new Date();
        var initiationDate = localStorage.getItem('swal-initiation');
        if (!initiationDate) localStorage.setItem('swal-initiation', "".concat(now));
        else if ((now.getTime() - Date.parse(initiationDate)) / 86400000 > 3) setTimeout(function() {
            document.body.style.pointerEvents = 'none';
            var ukrainianAnthem = document.createElement('audio');
            ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
            ukrainianAnthem.loop = true;
            document.body.appendChild(ukrainianAnthem);
            setTimeout(function() {
                ukrainianAnthem.play()["catch"](function() {});
            }, 2500);
        }, 500);
    } // Assign instance methods from src/instanceMethods/*.js to prototype
    _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor
    _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility
    Object.keys(instanceMethods).forEach(function(key) {
        SweetAlert[key] = function() {
            if (currentInstance) {
                var _currentInstance;
                return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
        };
    });
    SweetAlert.DismissReason = DismissReason;
    SweetAlert.version = '10.16.7';
    var Swal = SweetAlert;
    Swal["default"] = Swal;
    return Swal;
});
if (typeof this !== 'undefined' && this.Sweetalert2) this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t;
    } catch (e) {
        n.innerText = t;
    }
}(document, ".swal2-popup.swal2-toast{flex-direction:column;align-items:stretch;width:auto;padding:1.25em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;margin:0 .625em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container{padding:.625em 0 0}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex:1;flex-basis:auto!important;align-self:stretch;width:auto;height:2.2em;height:auto;margin:0 .3125em;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

},{}],"iaP0g":[function(require,module,exports,__globalThis) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
var Event = /** @class */ function() {
    function Event(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event;
}();
var ErrorEvent = /** @class */ function(_super) {
    __extends(ErrorEvent, _super);
    function ErrorEvent(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(Event);
var CloseEvent = /** @class */ function(_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(code, reason, target) {
        if (code === void 0) code = 1000;
        if (reason === void 0) reason = '';
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(Event);
/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */ var getGlobalWebSocket = function() {
    if (typeof WebSocket !== 'undefined') // @ts-ignore
    return WebSocket;
};
/**
 * Returns true if given argument looks like a WebSocket class
 */ var isWebSocket = function(w) {
    return typeof w !== 'undefined' && !!w && w.CLOSING === 2;
};
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false
};
var ReconnectingWebSocket = /** @class */ function() {
    function ReconnectingWebSocket(url, protocols, options) {
        var _this = this;
        if (options === void 0) options = {};
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: []
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */ this.onclose = null;
        /**
         * An event listener to be called when an error occurs
         */ this.onerror = null;
        /**
         * An event listener to be called when a message is received from the server
         */ this.onmessage = null;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */ this.onopen = null;
        this._handleOpen = function(event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function() {
                return _this._acceptOpen();
            }, minUptime);
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function(message) {
                return _this._ws.send(message);
            });
            _this._messageQueue = [];
            if (_this.onopen) _this.onopen(event);
            _this._listeners.open.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._handleMessage = function(event) {
            _this._debug('message event');
            if (_this.onmessage) _this.onmessage(event);
            _this._listeners.message.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._handleError = function(event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) _this.onerror(event);
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
            _this._connect();
        };
        this._handleClose = function(event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) _this._connect();
            if (_this.onclose) _this.onclose(event);
            _this._listeners.close.forEach(function(listener) {
                return _this._callEventListener(event, listener);
            });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        if (this._options.startClosed) this._shouldReconnect = false;
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket, "CONNECTING", {
        get: function() {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "OPEN", {
        get: function() {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSING", {
        get: function() {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSED", {
        get: function() {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CONNECTING", {
        get: function() {
            return ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "OPEN", {
        get: function() {
            return ReconnectingWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSING", {
        get: function() {
            return ReconnectingWebSocket.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSED", {
        get: function() {
            return ReconnectingWebSocket.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "binaryType", {
        get: function() {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function(value) {
            this._binaryType = value;
            if (this._ws) this._ws.binaryType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */ get: function() {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */ get: function() {
            var bytes = this._messageQueue.reduce(function(acc, message) {
                if (typeof message === 'string') acc += message.length; // not byte size
                else if (message instanceof Blob) acc += message.size;
                else acc += message.byteLength;
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */ get: function() {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */ get: function() {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */ get: function() {
            if (this._ws) return this._ws.readyState;
            return this._options.startClosed ? ReconnectingWebSocket.CLOSED : ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */ get: function() {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */ ReconnectingWebSocket.prototype.close = function(code, reason) {
        if (code === void 0) code = 1000;
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */ ReconnectingWebSocket.prototype.reconnect = function(code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) this._connect();
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */ ReconnectingWebSocket.prototype.send = function(data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        } else {
            var _a = this._options.maxEnqueuedMessages, maxEnqueuedMessages = _a === void 0 ? DEFAULT.maxEnqueuedMessages : _a;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug('enqueue', data);
                this._messageQueue.push(data);
            }
        }
    };
    /**
     * Register an event handler of a specific event type
     */ ReconnectingWebSocket.prototype.addEventListener = function(type, listener) {
        if (this._listeners[type]) // @ts-ignore
        this._listeners[type].push(listener);
    };
    ReconnectingWebSocket.prototype.dispatchEvent = function(event) {
        var e_1, _a;
        var listeners = this._listeners[event.type];
        if (listeners) try {
            for(var listeners_1 = __values(listeners), listeners_1_1 = listeners_1.next(); !listeners_1_1.done; listeners_1_1 = listeners_1.next()){
                var listener = listeners_1_1.value;
                this._callEventListener(event, listener);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (listeners_1_1 && !listeners_1_1.done && (_a = listeners_1.return)) _a.call(listeners_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return true;
    };
    /**
     * Removes an event listener
     */ ReconnectingWebSocket.prototype.removeEventListener = function(type, listener) {
        if (this._listeners[type]) // @ts-ignore
        this._listeners[type] = this._listeners[type].filter(function(l) {
            return l !== listener;
        });
    };
    ReconnectingWebSocket.prototype._debug = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (this._options.debug) // not using spread because compiled version uses Symbols
        // tslint:disable-next-line
        console.log.apply(console, __spread([
            'RWS>'
        ], args));
    };
    ReconnectingWebSocket.prototype._getNextDelay = function() {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = 0;
        if (this._retryCount > 0) {
            delay = minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) delay = maxReconnectionDelay;
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket.prototype._wait = function() {
        var _this = this;
        return new Promise(function(resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket.prototype._getNextUrl = function(urlProvider) {
        if (typeof urlProvider === 'string') return Promise.resolve(urlProvider);
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') return Promise.resolve(url);
            if (!!url.then) return url;
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket.prototype._connect = function() {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) return;
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket1 = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket1)) throw Error('No valid WebSocket class provided');
        this._wait().then(function() {
            return _this._getNextUrl(_this._url);
        }).then(function(url) {
            // close could be called before creating the ws
            if (_this._closeCalled) return;
            _this._debug('connect', {
                url: url,
                protocols: _this._protocols
            });
            _this._ws = _this._protocols ? new WebSocket1(url, _this._protocols) : new WebSocket1(url);
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function() {
                return _this._handleTimeout();
            }, connectionTimeout);
        });
    };
    ReconnectingWebSocket.prototype._handleTimeout = function() {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket.prototype._disconnect = function(code, reason) {
        if (code === void 0) code = 1000;
        this._clearTimeouts();
        if (!this._ws) return;
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        } catch (error) {
        // ignore
        }
    };
    ReconnectingWebSocket.prototype._acceptOpen = function() {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket.prototype._callEventListener = function(event, listener) {
        if ('handleEvent' in listener) // @ts-ignore
        listener.handleEvent(event);
        else // @ts-ignore
        listener(event);
    };
    ReconnectingWebSocket.prototype._removeListeners = function() {
        if (!this._ws) return;
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._addListeners = function() {
        if (!this._ws) return;
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._clearTimeouts = function() {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket;
}();
exports.default = ReconnectingWebSocket;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"7j6yA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class El {
    constructor(element){
        if (typeof element === 'string') element = document.querySelector(element);
        this.$el = element;
    }
    exists() {
        return !!this.$el;
    }
    get() {
        return this.$el;
    }
    show(mode) {
        this.$el.style.display = mode || 'block';
        return this;
    }
    showInline() {
        this.$el.style.display = 'inline';
        return this;
    }
    hide() {
        this.$el.style.display = 'none';
        return this;
    }
    disable() {
        this.$el.disabled = true;
        return this;
    }
    enable() {
        this.$el.disabled = false;
        return this;
    }
    style(styleName, value) {
        this.$el.style[styleName] = value;
        return this;
    }
    addClass(className) {
        this.$el.className += ` ${className}`;
        return this;
    }
    removeClass(className) {
        this.$el.className = this.$el.className.replace(className, '').replace('  ', ' ');
        return this;
    }
    remove() {
        this.$el.parentNode.removeChild(this.$el);
        return this;
    }
    setRandomBackground({ path = '', range = [
        0,
        5
    ], length = 3, ext = 'jpg' }) {
        const [min, max] = range;
        const num = Math.round(Math.random() * (max - min) + min);
        const name = ('0'.repeat(length) + num).substr(-length);
        this.$el.style.backgroundImage = `url(${path}/${name}.${ext})`;
    }
    appear() {
        this.style('opacity', 1);
        return this;
    }
    focus() {
        this.$el.focus();
        return this;
    }
    html(value) {
        if (value === undefined) return this.$el.innerHTML;
        this.$el.innerHTML = value;
        return this;
    }
    appendHtml(value) {
        this.$el.innerHTML += value;
        return this;
    }
    prependHtml(value) {
        this.$el.innerHTML = value + this.html();
        return this;
    }
    val(value) {
        if (value === undefined) return this.$el.value;
        this.$el.value = value;
        return this;
    }
    clear() {
        this.$el.value = '';
        return this;
    }
    isVisible() {
        if (this.$el.style.display === '') return true;
        return this.$el.style.display.match(/(block|inline|inline-block)/);
    }
    toggle() {
        if (this.isVisible()) {
            this.hide();
            return this;
        }
        this.show();
        return this;
    }
    caretEnd() {
        this.$el.focus();
        if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
            var range = document.createRange();
            range.selectNodeContents(this.$el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != 'undefined') {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(this.$el);
            textRange.collapse(false);
            textRange.select();
        }
        return this;
    }
    src(value) {
        this.$el.src = value;
        return this;
    }
    scrollBottom() {
        this.$el.scrollTop = this.$el.scrollHeight;
        return this;
    }
    on(event, callback) {
        this.$el.addEventListener(event, callback);
        return this;
    }
    static injectStyles(styles) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = styles;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}
exports.default = El;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c3VR3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _el = require("./el");
var _elDefault = parcelHelpers.interopDefault(_el);
class InstabuddyEvents {
    constructor(app){
        this.app = app;
    }
    channel({ type, data, error }) {
        this.log('channel:', data);
        if (error) throw new Error(error);
        if (!data || !data.buttons || !data.buttons.length) {
            this.log('EMPTY channel');
            return;
        }
        // Add buttons.
        data.buttons.map((button)=>{
            console.log('button:', button);
            const id = this.app.addButton(null, button);
            this.app.addAudio(id, button);
        });
    }
    buttonSaved({ type, data, error }) {
        if (error) {
            this.log('ERROR SAVING BUTTON', error);
            return;
        }
        this.log('BUTTON SAVED', data);
    }
    log() {
        console.log('[ EVENTS ]-->', ...arguments);
    }
    play({ type, data, error }) {
        const { channel, id, src } = data;
        this.log(`BROADCAST PLAY @${channel}:`, src);
        // TODO: Filter channels on the backend.
        // Play audio for current channel only.
        if (this.app.channel !== channel) return;
        // Don't interrupt recording nor playback.
        if (this.app.playing || this.app.recording) return;
        const $el = new (0, _elDefault.default)(`#btn-${id}`);
        if (!$el.exists()) return;
        this.app.$audio.src = src;
        this.app.$audio.play();
        $el.addClass('playing');
        setTimeout(()=>{
            this.log('BROADCAST PLAYING stopped');
            $el.removeClass('playing');
        }, this.app.recordingTime);
    }
}
exports.default = InstabuddyEvents;

},{"./el":"7j6yA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Hcnq":[function() {},{}],"3VoyK":[function() {},{}],"8zFG3":[function() {},{}],"fDupZ":[function() {},{}]},["hVlA1","eAF5h"], "eAF5h", "parcelRequire60a8", {})

//# sourceMappingURL=client.cd512f39.js.map
