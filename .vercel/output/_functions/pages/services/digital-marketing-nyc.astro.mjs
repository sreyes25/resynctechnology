import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CZTop7a8.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BpcINP5g.mjs';
import { $ as $$NYCServiceCluster } from '../../chunks/NYCServiceCluster_B3gcafDl.mjs';
export { renderers } from '../../renderers.mjs';

const $$DigitalMarketingNyc = createComponent(($$result, $$props, $$slots) => {
  const title = "Digital Marketing NYC | SEO, Paid Search, and Growth Systems";
  const description = "Digital marketing NYC services for technical SEO, paid search, landing page optimization, and lifecycle automation that drives qualified demand.";
  const keywords = [
    "digital marketing nyc",
    "seo nyc",
    "technical seo nyc",
    "paid search agency nyc software",
    "growth marketing nyc"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "structuredData": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing",
    areaServed: ["New York City", "Brooklyn"],
    provider: { "@type": "ProfessionalService", name: "Resync Technology LLC" },
    description
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative overflow-hidden bg-[#05060f] text-slate-100"> <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(225,29,72,0.2),transparent_35%),radial-gradient(circle_at_80%_16%,rgba(59,130,246,0.2),transparent_34%)]"></div> <div class="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24"> <p class="hero-eyebrow">Digital marketing NYC</p> <h1 class="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
Technical Digital Marketing Built for Revenue
</h1> <p class="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200/90">
We run digital marketing for NYC software and service businesses with technical SEO, paid acquisition, and conversion-focused landing experiences.
</p> <div class="mt-8 flex flex-wrap gap-3"> <a href="/start" class="rt-btn-primary">Start Digital Marketing in NYC</a> <a href="/services/digital-marketing" class="cta-secondary">View Full Marketing Services</a> </div> </div> </section> <section class="bg-paper text-slateink"> <div class="mx-auto max-w-6xl px-6 py-16 md:py-20"> <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">SEO + Paid Growth System</h2> <div class="mt-8 grid gap-5 md:grid-cols-2"> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Technical SEO for Competitive NYC Queries</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Improve crawlability, site structure, internal linking, and content depth for software and automation intent keywords.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Landing Pages for Commercial Search Intent</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Build pages aligned to buying-stage searches like software development company NYC, custom software NYC, and business automation NYC.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Lifecycle and CRM Automation</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Connect forms, CRM, email, and reporting to improve lead handling speed and close rates.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Performance Reporting That Ties to Revenue</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Track rankings, qualified pipeline, and cost per acquisition in one operating dashboard.</p> </article> </div> </div> </section> ${renderComponent($$result2, "NYCServiceCluster", $$NYCServiceCluster, {})} ` })}`;
}, "/Users/sergioreyes/Resync/resynctechnology/src/pages/services/digital-marketing-nyc.astro", void 0);

const $$file = "/Users/sergioreyes/Resync/resynctechnology/src/pages/services/digital-marketing-nyc.astro";
const $$url = "/services/digital-marketing-nyc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DigitalMarketingNyc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
