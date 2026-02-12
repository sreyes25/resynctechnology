import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CZTop7a8.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BpcINP5g.mjs';
import { $ as $$NYCServiceCluster } from '../../chunks/NYCServiceCluster_B3gcafDl.mjs';
export { renderers } from '../../renderers.mjs';

const $$BusinessAutomationNyc = createComponent(($$result, $$props, $$slots) => {
  const title = "Business Automation NYC | Workflow, CRM, and API Integration";
  const description = "Business automation NYC services for workflow automation, CRM automation, and API integration that eliminate manual bottlenecks.";
  const keywords = [
    "business automation nyc",
    "workflow automation nyc",
    "crm automation nyc",
    "api integration nyc",
    "automation consulting nyc"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "structuredData": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Business Automation",
      areaServed: ["New York City", "Brooklyn"],
      provider: { "@type": "ProfessionalService", name: "Resync Technology LLC" },
      description
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does business automation cost in NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automation projects are scoped by workflow count, integration depth, and system complexity. Most teams begin with one high-impact automation and expand in phases."
          }
        },
        {
          "@type": "Question",
          name: "What processes can be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lead routing, CRM updates, quote generation, follow-up messaging, onboarding, reporting, and invoicing are common automation targets."
          }
        }
      ]
    }
  ] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative overflow-hidden bg-[#05060f] text-slate-100"> <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(34,197,94,0.2),transparent_36%),radial-gradient(circle_at_88%_6%,rgba(56,189,248,0.16),transparent_34%)]"></div> <div class="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24"> <p class="hero-eyebrow">Business automation NYC</p> <h1 class="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
Workflow Automation That Cuts Operational Friction
</h1> <p class="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200/90">
We design and implement workflow automation for NYC businesses that need speed, consistency, and measurable ROI. From CRM automation to API integration, every system is built to reduce repetitive work.
</p> <div class="mt-8 flex flex-wrap gap-3"> <a href="/start" class="rt-btn-primary">Automate My Business Workflows</a> <a href="/services/nyc-custom-software-development" class="cta-secondary">See NYC Custom Software Development</a> </div> </div> </section> <section class="bg-paper text-slateink"> <div class="mx-auto max-w-6xl px-6 py-16 md:py-20"> <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">Automation Systems We Build</h2> <div class="mt-8 grid gap-5 md:grid-cols-2"> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">CRM Automation for Sales and Service</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Capture leads, auto-assign follow-ups, sync deal stages, and keep pipeline health visible without manual copying.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">API Integration for Core Business Tools</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Connect forms, CRM, payments, invoicing, scheduling, and reporting so teams operate from one coherent workflow.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Legacy Workflow Modernization</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Replace spreadsheet-heavy and email-based operations with auditable systems built for scale.</p> </article> <article class="rounded-xl2 border border-black/10 bg-white p-6 shadow-soft"> <h3 class="text-xl font-semibold">Automation Retainers for Ongoing Improvement</h3> <p class="mt-3 text-sm leading-relaxed text-ink/70">Add new automations monthly and optimize existing flows as your business model evolves.</p> </article> </div> </div> </section> ${renderComponent($$result2, "NYCServiceCluster", $$NYCServiceCluster, {})} ` })}`;
}, "/Users/sergioreyes/Resync/resynctechnology/src/pages/services/business-automation-nyc.astro", void 0);

const $$file = "/Users/sergioreyes/Resync/resynctechnology/src/pages/services/business-automation-nyc.astro";
const $$url = "/services/business-automation-nyc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BusinessAutomationNyc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
