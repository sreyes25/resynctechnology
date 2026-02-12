import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CZTop7a8.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BpcINP5g.mjs';
import { $ as $$NYCServiceCluster } from '../../chunks/NYCServiceCluster_B3gcafDl.mjs';
export { renderers } from '../../renderers.mjs';

const $$StartupMvpDevelopmentNyc = createComponent(($$result, $$props, $$slots) => {
  const title = "Startup MVP Development NYC | Launch Fast, Scale Clean";
  const description = "Startup MVP development NYC founders use to validate faster, ship production-grade software, and scale into SaaS with confidence.";
  const keywords = [
    "startup mvp development nyc",
    "mvp development company nyc",
    "saas development nyc",
    "app development nyc startup",
    "custom software nyc startup"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "structuredData": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Startup MVP Development",
    areaServed: ["New York City", "Brooklyn"],
    provider: { "@type": "ProfessionalService", name: "Resync Technology LLC" },
    description
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative overflow-hidden bg-[#05060f] text-slate-100"> <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_12%,rgba(168,85,247,0.16),transparent_35%),radial-gradient(circle_at_85%_18%,rgba(56,189,248,0.2),transparent_36%)]"></div> <div class="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24"> <p class="hero-eyebrow">Startup MVP development NYC</p> <h1 class="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
Build an MVP Fast Without Building a Fragile Product
</h1> <p class="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200/90">
We help NYC founders launch startup MVPs with clear scope, tight release cycles, and architecture that can evolve into a real SaaS product.
</p> <div class="mt-8 flex flex-wrap gap-3"> <a href="/start" class="rt-btn-primary">Start MVP Development</a> <a href="/services/nyc-custom-software-development" class="cta-secondary">See Custom Software in NYC</a> </div> </div> </section> <section class="bg-paper text-slateink"> <div class="mx-auto max-w-6xl px-6 py-16 md:py-20"> <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">MVP to SaaS Development Workflow</h2> <div class="mt-8 grid gap-5 md:grid-cols-3"> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Phase 1: Launchable MVP</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Build only the core jobs-to-be-done with production-quality authentication, data modeling, and analytics.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Phase 2: User-Driven Iteration</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Prioritize feature delivery from usage patterns, customer interviews, and conversion metrics.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Phase 3: Scale and Automate</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Add workflow automation, API integrations, and operational controls to support growth.</p> </article> </div> <div class="mt-10 rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">How much does startup MVP development cost in NYC?</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
Pricing is based on product scope, complexity, and release speed. Most startup teams begin with a focused MVP milestone and then expand into retained product development.
</p> </div> </div> </section> ${renderComponent($$result2, "NYCServiceCluster", $$NYCServiceCluster, {})} ` })}`;
}, "/Users/sergioreyes/Resync/resynctechnology/src/pages/services/startup-mvp-development-nyc.astro", void 0);

const $$file = "/Users/sergioreyes/Resync/resynctechnology/src/pages/services/startup-mvp-development-nyc.astro";
const $$url = "/services/startup-mvp-development-nyc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StartupMvpDevelopmentNyc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
