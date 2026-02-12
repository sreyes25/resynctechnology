import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CZTop7a8.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cl9c8GtC.mjs';
import { $ as $$NYCServiceCluster } from '../../chunks/NYCServiceCluster_B3gcafDl.mjs';
export { renderers } from '../../renderers.mjs';

const $$BrooklynSoftwareDeveloper = createComponent(($$result, $$props, $$slots) => {
  const title = "Brooklyn Software Developer | Custom Web, App, and Automation";
  const description = "Brooklyn software developer services for custom software, web development, app development, and workflow automation across NYC.";
  const keywords = [
    "brooklyn software developer",
    "brooklyn software company",
    "web development nyc",
    "app development nyc",
    "custom software brooklyn"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "structuredData": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    areaServed: ["Brooklyn", "New York City"],
    provider: { "@type": "ProfessionalService", name: "Resync Technology LLC" },
    description
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative overflow-hidden bg-[#05060f] text-slate-100"> <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(225,29,72,0.16),transparent_35%)]"></div> <div class="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24"> <p class="hero-eyebrow">Brooklyn software developer</p> <h1 class="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
Product Engineering for Brooklyn and NYC Businesses
</h1> <p class="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200/90">
We build premium digital products for companies that need execution speed without sacrificing code quality: custom web platforms, mobile apps, and automation systems that support growth.
</p> <div class="mt-8 flex flex-wrap gap-3"> <a href="/start" class="rt-btn-primary">Hire a Brooklyn Software Developer</a> <a href="/services/startup-mvp-development-nyc" class="cta-secondary">See Startup MVP Development NYC</a> </div> </div> </section> <section class="bg-paper text-slateink"> <div class="mx-auto max-w-6xl px-6 py-16 md:py-20"> <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">What We Build</h2> <div class="mt-8 grid gap-5 md:grid-cols-3"> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Web Development NYC Teams Need</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Fast business websites, content platforms, and conversion-focused web apps with SEO-ready architecture.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">App Development NYC Founders Use</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">iOS and web app builds for scheduling, operations, quoting, and service delivery workflows.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Workflow and CRM Automation</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">API integration and automation systems that cut manual tasks and improve response speed across your team.</p> </article> </div> </div> </section> ${renderComponent($$result2, "NYCServiceCluster", $$NYCServiceCluster, {})} ` })}`;
}, "/Users/sergioreyes/Resync/resynctechnology/src/pages/services/brooklyn-software-developer.astro", void 0);

const $$file = "/Users/sergioreyes/Resync/resynctechnology/src/pages/services/brooklyn-software-developer.astro";
const $$url = "/services/brooklyn-software-developer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BrooklynSoftwareDeveloper,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
