import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../chunks/astro/server_CZTop7a8.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cl9c8GtC.mjs';
import { b as budgetRanges, p as projectTypes, t as timelineOptions } from '../chunks/intake_Dsa-aFUw.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Start a Project | Resync Technology";
  const description = "Start your NYC software, website, app, or automation project with Resync Technology. Share your goals and get a clear build plan.";
  const keywords = [
    "hire developer nyc",
    "software development company nyc",
    "custom software nyc",
    "web development nyc",
    "app development nyc",
    "business automation nyc",
    "digital marketing nyc",
    "software consultation nyc",
    "NYC custom software",
    "website developer brooklyn"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "structuredData": {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    description
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative overflow-hidden pt-30 pb-16 sm:pb-20 rt-hero-top"> <div class="absolute inset-0 -z-10"> <div class="absolute inset-0 bg-[radial-gradient(120%_85%_at_15%_15%,rgba(244,63,94,0.10),transparent_60%),radial-gradient(120%_85%_at_85%_20%,rgba(14,165,233,0.12),transparent_55%)]"></div> <div class="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-size-[10px_10px]"></div> </div> <div class="mx-auto max-w-4xl px-4 sm:px-6"> <div class="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur sm:p-12"> <div class="max-w-2xl"> <p class="text-xs font-semibold uppercase tracking-[0.3em] text-resync-600">Start a project</p> <h1 class="mt-3 text-3xl font-semibold text-slateink sm:text-4xl">Tell us what you’re building.</h1> <p class="mt-3 text-sm text-slate-600">
Share your goals, timelines, and constraints. We’ll review and send a clear path forward.
</p> </div> <form class="mt-10 grid gap-6" action="/api/intake" method="post" data-intake-form> <div class="grid gap-6 sm:grid-cols-2"> <div> <label for="name" class="text-sm font-semibold text-slateink">Full name *</label> <input id="name" name="name" type="text" autocomplete="name" required class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slateink shadow-sm focus:border-resync-500 focus:outline-none focus:ring-2 focus:ring-resync-200"> </div> <div> <label for="email" class="text-sm font-semibold text-slateink">Email *</label> <input id="email" name="email" type="email" autocomplete="email" required class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slateink shadow-sm focus:border-resync-500 focus:outline-none focus:ring-2 focus:ring-resync-200"> </div> </div> <div class="grid gap-6 sm:grid-cols-2"> <div> <label for="company" class="text-sm font-semibold text-slateink">Company</label> <input id="company" name="company" type="text" autocomplete="organization" class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slateink shadow-sm focus:border-resync-500 focus:outline-none focus:ring-2 focus:ring-resync-200"> </div> <div> <label for="budget" class="text-sm font-semibold text-slateink">Budget range</label> <select id="budget" name="budget" class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slateink shadow-sm focus:border-resync-500 focus:outline-none focus:ring-2 focus:ring-resync-200"> <option value="">Select a range</option> ${budgetRanges.map((range) => renderTemplate`<option${addAttribute(range, "value")}>${range}</option>`)} </select> </div> </div> <div class="grid gap-6 sm:grid-cols-2"> <div> <label for="projectType" class="text-sm font-semibold text-slateink">Project type *</label> <select id="projectType" name="projectType" required class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slateink shadow-sm focus:border-resync-500 focus:outline-none focus:ring-2 focus:ring-resync-200"> <option value="">Choose one</option> ${projectTypes.map((type) => renderTemplate`<option${addAttribute(type, "value")}>${type}</option>`)} </select> </div> <div> <label for="timeline" class="text-sm font-semibold text-slateink">Timeline</label> <select id="timeline" name="timeline" class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slateink shadow-sm focus:border-resync-500 focus:outline-none focus:ring-2 focus:ring-resync-200"> <option value="">Select a timeline</option> ${timelineOptions.map((option) => renderTemplate`<option${addAttribute(option, "value")}>${option}</option>`)} </select> </div> </div> <div> <label for="message" class="text-sm font-semibold text-slateink">Message / project details *</label> <textarea id="message" name="message" required minlength="20"${addAttribute(6, "rows")} class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slateink shadow-sm focus:border-resync-500 focus:outline-none focus:ring-2 focus:ring-resync-200" placeholder="Goals, constraints, timelines, or any links we should see."></textarea> <p class="mt-2 text-xs text-slate-500">Minimum 20 characters.</p> </div> <div class="hidden" aria-hidden="true"> <label for="website">Website</label> <input id="website" name="website" type="text" tabindex="-1" autocomplete="off"> </div> <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"> <button type="submit" class="rt-btn-primary" data-submit> <span class="cta-glow"></span>
Send details
</button> <p class="text-xs text-slate-500">We typically respond within 1–2 business days.</p> </div> <div class="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700" role="status" aria-live="polite" data-form-status hidden></div> </form> </div> </div> </section> ${renderScript($$result2, "/Users/sergioreyes/Resync/resynctechnology/src/pages/start/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/sergioreyes/Resync/resynctechnology/src/pages/start/index.astro", void 0);

const $$file = "/Users/sergioreyes/Resync/resynctechnology/src/pages/start/index.astro";
const $$url = "/start";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
