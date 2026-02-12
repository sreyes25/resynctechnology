import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dln1wbIO.mjs';
import { manifest } from './manifest_CIM72oCy.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/intake.astro.mjs');
const _page3 = () => import('./pages/invoiceamericano/paymentsuccess.astro.mjs');
const _page4 = () => import('./pages/invoiceamericano.astro.mjs');
const _page5 = () => import('./pages/robots.txt.astro.mjs');
const _page6 = () => import('./pages/services/brooklyn-software-developer.astro.mjs');
const _page7 = () => import('./pages/services/business-automation-nyc.astro.mjs');
const _page8 = () => import('./pages/services/digital-marketing.astro.mjs');
const _page9 = () => import('./pages/services/digital-marketing-nyc.astro.mjs');
const _page10 = () => import('./pages/services/nyc-custom-software-development.astro.mjs');
const _page11 = () => import('./pages/services/startup-mvp-development-nyc.astro.mjs');
const _page12 = () => import('./pages/services/websites.astro.mjs');
const _page13 = () => import('./pages/sitemap.xml.astro.mjs');
const _page14 = () => import('./pages/start.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/api/intake.ts", _page2],
    ["src/pages/invoiceamericano/paymentsuccess.astro", _page3],
    ["src/pages/invoiceamericano/index.astro", _page4],
    ["src/pages/robots.txt.ts", _page5],
    ["src/pages/services/brooklyn-software-developer.astro", _page6],
    ["src/pages/services/business-automation-nyc.astro", _page7],
    ["src/pages/services/digital-marketing.astro", _page8],
    ["src/pages/services/digital-marketing-nyc.astro", _page9],
    ["src/pages/services/nyc-custom-software-development.astro", _page10],
    ["src/pages/services/startup-mvp-development-nyc.astro", _page11],
    ["src/pages/services/websites.astro", _page12],
    ["src/pages/sitemap.xml.ts", _page13],
    ["src/pages/start/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8a241eb1-46c3-4448-a760-699718546efd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
