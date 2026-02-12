import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CZTop7a8.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BpcINP5g.mjs';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Paymentsuccess = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paymentsuccess;
  const sp = Astro2.url.searchParams;
  const invoiceId = sp.get("invoice") ?? sp.get("invoice_id") ?? null;
  const amount = sp.get("amount");
  const currency = (sp.get("currency") ?? "USD").toUpperCase();
  const returnUrl = sp.get("return");
  returnUrl && (returnUrl.startsWith("https://") || returnUrl.startsWith("http://")) ? returnUrl : null;
  const formatMoney = (a, c) => {
    if (!a) return null;
    const n = Number(a);
    if (!Number.isFinite(n)) return null;
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: c
      }).format(n);
    } catch {
      return `$${n.toFixed(2)}`;
    }
  };
  const paidLine = formatMoney(amount, currency);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Payment received \u2014 Invoice Americano", "description": "Payment received confirmation for Invoice Americano.", "noIndex": true, "data-astro-cid-ilicaz7d": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative min-h-screen overflow-hidden bg-[#05060f] text-slate-100" data-astro-cid-ilicaz7d> <!-- Background system (same family as the site, but calmer / app-like) --> <div class="pointer-events-none absolute inset-0 -z-10" data-astro-cid-ilicaz7d> <div class="absolute -left-24 -top-10 h-80 w-80 rounded-full bg-resync-600/20 blur-3xl" data-astro-cid-ilicaz7d></div> <div class="absolute -right-10 top-0 h-96 w-96 rounded-full bg-[#0d172a] blur-[140px]" data-astro-cid-ilicaz7d></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(225,29,72,0.10),transparent_30%),radial-gradient(circle_at_55%_75%,rgba(255,255,255,0.05),transparent_42%)]" data-astro-cid-ilicaz7d></div> <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.25),rgba(0,0,0,0.70))]" data-astro-cid-ilicaz7d></div> <div class="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-size-[10px_10px]" data-astro-cid-ilicaz7d></div> <div class="absolute inset-0 bg-[radial-gradient(140%_120%_at_50%_10%,transparent_20%,rgba(0,0,0,0.85)_85%)]" data-astro-cid-ilicaz7d></div> </div> <div class="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-14" data-astro-cid-ilicaz7d> <!-- App-style confirmation sheet --> <div class="w-full max-w-lg rounded-[22px] border border-white/10 bg-white/5 p-8 shadow-[0_28px_110px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-10" data-astro-cid-ilicaz7d> <div class="flex items-center gap-3" data-astro-cid-ilicaz7d> <div class="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/6 shadow-[0_12px_45px_rgba(0,0,0,0.35)]" data-astro-cid-ilicaz7d> <!-- simple “success” dot (keep it subtle, app-like) --> <span class="h-2.5 w-2.5 rounded-full bg-emerald-400" data-astro-cid-ilicaz7d></span> </div> <p class="text-xs font-semibold uppercase tracking-wider text-slate-100/70" data-astro-cid-ilicaz7d>
Payment Received
</p> </div> <h1 class="mt-6 text-4xl font-black tracking-tight text-white" data-astro-cid-ilicaz7d>
Thanks!
</h1> <p class="mt-3 text-base leading-relaxed text-slate-200/85" data-astro-cid-ilicaz7d>
Your payment was successful. You can close this window.
</p> ${(paidLine || invoiceId) && renderTemplate`<div class="mt-6 grid gap-3" data-astro-cid-ilicaz7d> ${paidLine && renderTemplate`<div class="rounded-xl2 border border-white/10 bg-white/4 p-5" data-astro-cid-ilicaz7d> <p class="text-[11px] font-semibold uppercase tracking-wider text-slate-100/60" data-astro-cid-ilicaz7d>
Amount paid
</p> <p class="mt-1 text-lg font-bold text-white" data-astro-cid-ilicaz7d>${paidLine}</p> </div>`} ${invoiceId && renderTemplate`<div class="rounded-xl2 border border-white/10 bg-white/4 p-5" data-astro-cid-ilicaz7d> <p class="text-[11px] font-semibold uppercase tracking-wider text-slate-100/60" data-astro-cid-ilicaz7d>
Invoice
</p> <p class="mt-1 font-mono text-sm text-slate-200/90" data-astro-cid-ilicaz7d> ${invoiceId} </p> </div>`} </div>`} <p class="mt-6 text-xs leading-relaxed text-slate-200/55" data-astro-cid-ilicaz7d>
If you reached this page by mistake, you can safely close it.
</p> </div> </div>  </section> ` })}`;
}, "/Users/sergioreyes/Resync/resynctechnology/src/pages/invoiceamericano/paymentsuccess.astro", void 0);

const $$file = "/Users/sergioreyes/Resync/resynctechnology/src/pages/invoiceamericano/paymentsuccess.astro";
const $$url = "/invoiceamericano/paymentsuccess";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Paymentsuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
