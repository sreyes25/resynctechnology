import { e as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, f as createAstro, k as renderComponent, n as renderSlot, o as renderHead, u as unescapeHTML, l as renderScript } from './astro/server_CZTop7a8.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/start" }
  ];
  const mobileLinks = navLinks.filter((l) => l.name !== "Services");
  const serviceLinks = [
    { name: "Custom software NYC", desc: "Modernization, API, SaaS", href: "/services/nyc-custom-software-development", icon: "/services/app.svg" },
    { name: "Web development NYC", desc: "Fast, SEO-ready websites", href: "/services/websites", icon: "/services/web.svg" },
    { name: "Business automation NYC", desc: "Workflow + CRM automation", href: "/services/business-automation-nyc", icon: "/services/automate.svg" },
    { name: "Startup MVP NYC", desc: "Launch and validate quickly", href: "/services/startup-mvp-development-nyc", icon: "/services/app.svg" },
    { name: "Digital marketing NYC", desc: "SEO, Paid, Lifecycle", href: "/services/digital-marketing-nyc", icon: "/services/consultation.svg" }
  ];
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/110126983/",
      icon: "/hero/linkedin-svgrepo-com.svg"
    },
    {
      name: "GitHub",
      href: "https://github.com/sreyes25",
      icon: "/hero/github-142-svgrepo-com.svg"
    }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<nav class="rt-nav" data-rt-root data-astro-cid-5blmo7yk> <div class="rt-shell" data-astro-cid-5blmo7yk> <!-- Brand --> <a href="/" class="rt-brand" aria-label="Resync" data-astro-cid-5blmo7yk> <img src="/logos/logo.png" alt="Resync" class="rt-logo" data-astro-cid-5blmo7yk> <span class="rt-brand-name" data-astro-cid-5blmo7yk>Resync Technology</span> </a> <!-- Desktop links --> <div class="rt-desktop" data-astro-cid-5blmo7yk> ', ' </div> <!-- Desktop CTA --> <div class="rt-desktop-actions" data-astro-cid-5blmo7yk> <div class="rt-socials" aria-label="Social links" data-astro-cid-5blmo7yk> ', ' </div> <a href="/start" class="rt-cta rt-desktop-cta" data-astro-cid-5blmo7yk>Get in touch</a> </div> <!-- Mobile open button --> <button class="rt-menu-btn" type="button" aria-controls="rt-mobile" aria-expanded="false" aria-label="Open menu" data-rt-open data-astro-cid-5blmo7yk> <span class="rt-burger" aria-hidden="true" data-astro-cid-5blmo7yk></span> </button> </div> <!-- Mobile overlay --> <div id="rt-mobile" class="rt-mobile" data-rt-overlay aria-hidden="true" inert data-astro-cid-5blmo7yk> <!-- Backdrop button (click anywhere outside to close) --> <button class="rt-backdrop" type="button" aria-label="Close menu" data-rt-close data-astro-cid-5blmo7yk></button> <!-- Panel --> <div class="rt-panel" role="dialog" aria-modal="true" aria-label="Site navigation" data-astro-cid-5blmo7yk> <!-- Top bar --> <div class="rt-mobile-top" data-astro-cid-5blmo7yk> <a href="/" class="rt-mobile-brand" data-rt-link data-astro-cid-5blmo7yk> <img src="/logos/logo.png" alt="Resync Technology" class="rt-logo" data-astro-cid-5blmo7yk> <span class="rt-mobile-brand-name" data-astro-cid-5blmo7yk>Resync</span> </a> <button class="rt-x" type="button" aria-label="Close menu" data-rt-close data-astro-cid-5blmo7yk> <span aria-hidden="true" data-astro-cid-5blmo7yk>\xD7</span> </button> </div> <!-- Body --> <div class="rt-mobile-body" data-astro-cid-5blmo7yk> <!-- Services accordion --> <details class="rt-acc" data-astro-cid-5blmo7yk> <summary class="rt-row" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>Services</span> <span class="rt-chevron" aria-hidden="true" data-astro-cid-5blmo7yk></span> </summary> <div class="rt-acc-inner" data-astro-cid-5blmo7yk> ', ' </div> </details> <!-- Main links --> <div class="rt-links" data-astro-cid-5blmo7yk> ', ' </div> <div class="rt-mobile-socials" aria-label="Social links" data-astro-cid-5blmo7yk> ', ' </div> <!-- Bottom CTA bar --> <div class="rt-mobile-bottom" data-astro-cid-5blmo7yk> <a class="rt-mobile-primary" href="/start" data-rt-link data-astro-cid-5blmo7yk>Resync Project</a> </div> </div> </div> </div> <script>\n    (() => {\n      const root = document.querySelector("[data-rt-root]");\n      if (!root) return;\n      const nav = document.querySelector(".rt-nav");\n\n      // Use the VisualViewport height (when available) so mobile browser toolbars don\'t cover the bottom\n      // of the menu content (notably Chrome iOS). We write a CSS var in px and size the overlay/panel to it.\n      const docEl = document.documentElement;\n\n      // Chrome on iOS (CriOS) has known repaint/compositing bugs with backdrop-filter + fixed body.\n      // We add a class to apply safer CSS on that browser only.\n      const isCriOS = /CriOS/i.test(navigator.userAgent) && /iP(ad|hone|od)/i.test(navigator.userAgent);\n      if (isCriOS) docEl.classList.add("rt-crios");\n      const setVvh = () => {\n        const vv = window.visualViewport;\n        if (!vv) {\n          docEl.style.removeProperty("--rt-vvh");\n          return;\n        }\n        docEl.style.setProperty("--rt-vvh", `${Math.round(vv.height)}px`);\n      };\n      const setNavHeight = () => {\n        if (!nav) return;\n        const h = Math.ceil(nav.getBoundingClientRect().height);\n        docEl.style.setProperty("--rt-nav-height", `${h}px`);\n      };\n\n      setVvh();\n      setNavHeight();\n      if (window.visualViewport) {\n        window.visualViewport.addEventListener("resize", onResize);\n        // window.visualViewport.addEventListener("scroll", setVvh);  // REMOVED for CriOS fix\n      }\n      window.addEventListener("resize", onResize);\n\n      const openBtn = root.querySelector("[data-rt-open]");\n      const overlay = root.querySelector("[data-rt-overlay]");\n      if (!openBtn || !overlay) return;\n\n      const closeBtns = overlay.querySelectorAll("[data-rt-close]");\n      const mobileBody = overlay.querySelector(".rt-mobile-body");\n      const detailsEls = overlay.querySelectorAll("details");\n\n      // Force a repaint on CriOS when expanding/collapsing <details> or after scrolling.\n      // This addresses a known Chrome iOS compositing bug where content becomes visually blank but remains clickable.\n      const forceRepaint = () => {\n        if (!isCriOS) return;\n        overlay.classList.add("rt-repaint");\n        // Force reflow\n        void overlay.offsetHeight;\n        requestAnimationFrame(() => {\n          overlay.classList.remove("rt-repaint");\n        });\n      };\n\n      detailsEls.forEach((d) => d.addEventListener("toggle", forceRepaint));\n      if (mobileBody) mobileBody.addEventListener("scroll", () => requestAnimationFrame(forceRepaint), { passive: true });\n      const linkBtns = overlay.querySelectorAll("[data-rt-link]");\n\n      const lockClass = "rt-nav-open";\n      let isOpen = false;\n\n      // close helper for listeners\n      const closeMenu = () => setOpen(false);\n\n      // Minimal scroll lock (avoids fixed-body compositing bugs on iOS Chrome)\n      const lockScroll = (lock) => {\n        document.documentElement.classList.toggle(lockClass, lock);\n        document.body.classList.toggle(lockClass, lock);\n      };\n\n      const setOpen = (open) => {\n        isOpen = !!open;\n\n        openBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");\n\n        if (isOpen) {\n          overlay.classList.add("is-open");\n          overlay.setAttribute("aria-hidden", "false");\n          overlay.removeAttribute("inert");\n\n          // CriOS: ensure initial paint is correct\n          requestAnimationFrame(forceRepaint);\n          lockScroll(true);\n\n          // move focus inside menu (close button preferred)\n          const focusTarget = overlay.querySelector(".rt-x") || overlay.querySelector("[data-rt-link]");\n          requestAnimationFrame(() => {\n            focusTarget?.focus();\n          });\n        } else {\n          overlay.classList.remove("is-open");\n          overlay.setAttribute("aria-hidden", "true");\n          overlay.setAttribute("inert", "");\n          detailsEls.forEach((d) => (d.open = false));\n\n          lockScroll(false);\n\n          // return focus to the menu button\n          requestAnimationFrame(() => {\n            openBtn.focus();\n          });\n        }\n      };\n\n      // Responsive handler (setVvh + close on desktop)\n      function onResize() {\n        setVvh();\n        setNavHeight();\n        if (window.innerWidth >= 768 && isOpen) setOpen(false);\n      }\n\n      // open\n      openBtn.addEventListener("click", () => {\n        setVvh();\n        setOpen(true);\n      });\n\n      // close buttons (X + backdrop)\n      closeBtns.forEach((b) => b.addEventListener("click", closeMenu));\n\n      // close on any navigation click\n      linkBtns.forEach((a) => a.addEventListener("click", closeMenu));\n\n      // close on ESC\n      window.addEventListener("keydown", (e) => {\n        if (e.key === "Escape") setOpen(false);\n      });\n\n      // close on resize to desktop\n      window.addEventListener("resize", onResize);\n\n      // Keep nav height in sync with responsive/zoom changes\n      if (nav && "ResizeObserver" in window) {\n        const ro = new ResizeObserver(() => setNavHeight());\n        ro.observe(nav);\n      }\n    })();\n  <\/script>  </nav>'], ["", '<nav class="rt-nav" data-rt-root data-astro-cid-5blmo7yk> <div class="rt-shell" data-astro-cid-5blmo7yk> <!-- Brand --> <a href="/" class="rt-brand" aria-label="Resync" data-astro-cid-5blmo7yk> <img src="/logos/logo.png" alt="Resync" class="rt-logo" data-astro-cid-5blmo7yk> <span class="rt-brand-name" data-astro-cid-5blmo7yk>Resync Technology</span> </a> <!-- Desktop links --> <div class="rt-desktop" data-astro-cid-5blmo7yk> ', ' </div> <!-- Desktop CTA --> <div class="rt-desktop-actions" data-astro-cid-5blmo7yk> <div class="rt-socials" aria-label="Social links" data-astro-cid-5blmo7yk> ', ' </div> <a href="/start" class="rt-cta rt-desktop-cta" data-astro-cid-5blmo7yk>Get in touch</a> </div> <!-- Mobile open button --> <button class="rt-menu-btn" type="button" aria-controls="rt-mobile" aria-expanded="false" aria-label="Open menu" data-rt-open data-astro-cid-5blmo7yk> <span class="rt-burger" aria-hidden="true" data-astro-cid-5blmo7yk></span> </button> </div> <!-- Mobile overlay --> <div id="rt-mobile" class="rt-mobile" data-rt-overlay aria-hidden="true" inert data-astro-cid-5blmo7yk> <!-- Backdrop button (click anywhere outside to close) --> <button class="rt-backdrop" type="button" aria-label="Close menu" data-rt-close data-astro-cid-5blmo7yk></button> <!-- Panel --> <div class="rt-panel" role="dialog" aria-modal="true" aria-label="Site navigation" data-astro-cid-5blmo7yk> <!-- Top bar --> <div class="rt-mobile-top" data-astro-cid-5blmo7yk> <a href="/" class="rt-mobile-brand" data-rt-link data-astro-cid-5blmo7yk> <img src="/logos/logo.png" alt="Resync Technology" class="rt-logo" data-astro-cid-5blmo7yk> <span class="rt-mobile-brand-name" data-astro-cid-5blmo7yk>Resync</span> </a> <button class="rt-x" type="button" aria-label="Close menu" data-rt-close data-astro-cid-5blmo7yk> <span aria-hidden="true" data-astro-cid-5blmo7yk>\xD7</span> </button> </div> <!-- Body --> <div class="rt-mobile-body" data-astro-cid-5blmo7yk> <!-- Services accordion --> <details class="rt-acc" data-astro-cid-5blmo7yk> <summary class="rt-row" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>Services</span> <span class="rt-chevron" aria-hidden="true" data-astro-cid-5blmo7yk></span> </summary> <div class="rt-acc-inner" data-astro-cid-5blmo7yk> ', ' </div> </details> <!-- Main links --> <div class="rt-links" data-astro-cid-5blmo7yk> ', ' </div> <div class="rt-mobile-socials" aria-label="Social links" data-astro-cid-5blmo7yk> ', ' </div> <!-- Bottom CTA bar --> <div class="rt-mobile-bottom" data-astro-cid-5blmo7yk> <a class="rt-mobile-primary" href="/start" data-rt-link data-astro-cid-5blmo7yk>Resync Project</a> </div> </div> </div> </div> <script>\n    (() => {\n      const root = document.querySelector("[data-rt-root]");\n      if (!root) return;\n      const nav = document.querySelector(".rt-nav");\n\n      // Use the VisualViewport height (when available) so mobile browser toolbars don\'t cover the bottom\n      // of the menu content (notably Chrome iOS). We write a CSS var in px and size the overlay/panel to it.\n      const docEl = document.documentElement;\n\n      // Chrome on iOS (CriOS) has known repaint/compositing bugs with backdrop-filter + fixed body.\n      // We add a class to apply safer CSS on that browser only.\n      const isCriOS = /CriOS/i.test(navigator.userAgent) && /iP(ad|hone|od)/i.test(navigator.userAgent);\n      if (isCriOS) docEl.classList.add("rt-crios");\n      const setVvh = () => {\n        const vv = window.visualViewport;\n        if (!vv) {\n          docEl.style.removeProperty("--rt-vvh");\n          return;\n        }\n        docEl.style.setProperty("--rt-vvh", \\`\\${Math.round(vv.height)}px\\`);\n      };\n      const setNavHeight = () => {\n        if (!nav) return;\n        const h = Math.ceil(nav.getBoundingClientRect().height);\n        docEl.style.setProperty("--rt-nav-height", \\`\\${h}px\\`);\n      };\n\n      setVvh();\n      setNavHeight();\n      if (window.visualViewport) {\n        window.visualViewport.addEventListener("resize", onResize);\n        // window.visualViewport.addEventListener("scroll", setVvh);  // REMOVED for CriOS fix\n      }\n      window.addEventListener("resize", onResize);\n\n      const openBtn = root.querySelector("[data-rt-open]");\n      const overlay = root.querySelector("[data-rt-overlay]");\n      if (!openBtn || !overlay) return;\n\n      const closeBtns = overlay.querySelectorAll("[data-rt-close]");\n      const mobileBody = overlay.querySelector(".rt-mobile-body");\n      const detailsEls = overlay.querySelectorAll("details");\n\n      // Force a repaint on CriOS when expanding/collapsing <details> or after scrolling.\n      // This addresses a known Chrome iOS compositing bug where content becomes visually blank but remains clickable.\n      const forceRepaint = () => {\n        if (!isCriOS) return;\n        overlay.classList.add("rt-repaint");\n        // Force reflow\n        void overlay.offsetHeight;\n        requestAnimationFrame(() => {\n          overlay.classList.remove("rt-repaint");\n        });\n      };\n\n      detailsEls.forEach((d) => d.addEventListener("toggle", forceRepaint));\n      if (mobileBody) mobileBody.addEventListener("scroll", () => requestAnimationFrame(forceRepaint), { passive: true });\n      const linkBtns = overlay.querySelectorAll("[data-rt-link]");\n\n      const lockClass = "rt-nav-open";\n      let isOpen = false;\n\n      // close helper for listeners\n      const closeMenu = () => setOpen(false);\n\n      // Minimal scroll lock (avoids fixed-body compositing bugs on iOS Chrome)\n      const lockScroll = (lock) => {\n        document.documentElement.classList.toggle(lockClass, lock);\n        document.body.classList.toggle(lockClass, lock);\n      };\n\n      const setOpen = (open) => {\n        isOpen = !!open;\n\n        openBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");\n\n        if (isOpen) {\n          overlay.classList.add("is-open");\n          overlay.setAttribute("aria-hidden", "false");\n          overlay.removeAttribute("inert");\n\n          // CriOS: ensure initial paint is correct\n          requestAnimationFrame(forceRepaint);\n          lockScroll(true);\n\n          // move focus inside menu (close button preferred)\n          const focusTarget = overlay.querySelector(".rt-x") || overlay.querySelector("[data-rt-link]");\n          requestAnimationFrame(() => {\n            focusTarget?.focus();\n          });\n        } else {\n          overlay.classList.remove("is-open");\n          overlay.setAttribute("aria-hidden", "true");\n          overlay.setAttribute("inert", "");\n          detailsEls.forEach((d) => (d.open = false));\n\n          lockScroll(false);\n\n          // return focus to the menu button\n          requestAnimationFrame(() => {\n            openBtn.focus();\n          });\n        }\n      };\n\n      // Responsive handler (setVvh + close on desktop)\n      function onResize() {\n        setVvh();\n        setNavHeight();\n        if (window.innerWidth >= 768 && isOpen) setOpen(false);\n      }\n\n      // open\n      openBtn.addEventListener("click", () => {\n        setVvh();\n        setOpen(true);\n      });\n\n      // close buttons (X + backdrop)\n      closeBtns.forEach((b) => b.addEventListener("click", closeMenu));\n\n      // close on any navigation click\n      linkBtns.forEach((a) => a.addEventListener("click", closeMenu));\n\n      // close on ESC\n      window.addEventListener("keydown", (e) => {\n        if (e.key === "Escape") setOpen(false);\n      });\n\n      // close on resize to desktop\n      window.addEventListener("resize", onResize);\n\n      // Keep nav height in sync with responsive/zoom changes\n      if (nav && "ResizeObserver" in window) {\n        const ro = new ResizeObserver(() => setNavHeight());\n        ro.observe(nav);\n      }\n    })();\n  <\/script>  </nav>'])), maybeRenderHead(), navLinks.map(
    (l) => l.name === "Services" ? renderTemplate`<div class="rt-desktop-item rt-has-menu" data-astro-cid-5blmo7yk> <a${addAttribute(l.href, "href")} class="rt-link rt-has-dropdown" aria-haspopup="true" aria-expanded="false" data-astro-cid-5blmo7yk> ${l.name} </a> <div class="rt-dropdown" role="menu" data-astro-cid-5blmo7yk> ${serviceLinks.map((s) => renderTemplate`<a class="rt-dropdown-item"${addAttribute(s.href, "href")} role="menuitem" data-astro-cid-5blmo7yk> <div class="rt-dropdown-item-inner" data-astro-cid-5blmo7yk> <div class="rt-dropdown-title-row" data-astro-cid-5blmo7yk> <img${addAttribute(s.icon, "src")} alt="" class="rt-service-icon" loading="lazy" data-astro-cid-5blmo7yk> <div class="rt-dropdown-title" data-astro-cid-5blmo7yk>${s.name}</div> </div> <div class="rt-dropdown-desc" data-astro-cid-5blmo7yk>${s.desc}</div> </div> </a>`)} </div> </div>` : renderTemplate`<div class="rt-desktop-item" data-astro-cid-5blmo7yk> <a${addAttribute(l.href, "href")} class="rt-link" data-astro-cid-5blmo7yk> ${l.name} </a> </div>`
  ), socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(social.name, "aria-label")}${addAttribute(social.name, "title")} data-astro-cid-5blmo7yk> <img${addAttribute(social.icon, "src")} alt="" class="rt-social-icon" loading="lazy" data-astro-cid-5blmo7yk> </a>`), serviceLinks.map((s) => renderTemplate`<a class="rt-service"${addAttribute(s.href, "href")} data-rt-link data-astro-cid-5blmo7yk> <div class="rt-service-inner" data-astro-cid-5blmo7yk> <div class="rt-service-title-row" data-astro-cid-5blmo7yk> <img${addAttribute(s.icon, "src")} alt="" class="rt-service-icon" loading="lazy" data-astro-cid-5blmo7yk> <div class="rt-service-title" data-astro-cid-5blmo7yk>${s.name}</div> </div> <div class="rt-service-desc" data-astro-cid-5blmo7yk>${s.desc}</div> </div> </a>`), mobileLinks.map((l) => renderTemplate`<a class="rt-row rt-row-link"${addAttribute(l.href, "href")} data-rt-link data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>${l.name}</span> </a>`), socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(social.name, "aria-label")}${addAttribute(social.name, "title")} data-astro-cid-5blmo7yk> <img${addAttribute(social.icon, "src")} alt="" class="rt-social-icon" loading="lazy" data-astro-cid-5blmo7yk> </a>`));
}, "/Users/sergioreyes/Resync/resynctechnology/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/110126983",
      icon: "/hero/linkedin-svgrepo-com.svg"
    },
    {
      name: "GitHub",
      href: "https://github.com/sreyes25",
      icon: "/hero/github-142-svgrepo-com.svg"
    }
  ];
  const footerLinks = [
    { name: "Software Development Company NYC", href: "/services/nyc-custom-software-development" },
    { name: "Web Development NYC", href: "/services/websites" },
    { name: "App Development NYC", href: "/services/startup-mvp-development-nyc" },
    { name: "Business Automation NYC", href: "/services/business-automation-nyc" },
    { name: "Digital Marketing NYC", href: "/services/digital-marketing-nyc" },
    { name: "Brooklyn Software Developer", href: "/services/brooklyn-software-developer" },
    { name: "Start a Project", href: "/start" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative overflow-hidden border-t border-white/10 bg-ink text-white"> <div class="absolute inset-0 -z-10"> <!-- dark ambient red wash --> <div class="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(159,18,57,0.18),transparent_60%),radial-gradient(80%_70%_at_80%_40%,rgba(136,19,55,0.14),transparent_65%)]"></div> <!-- subtle dotted texture --> <div class="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:10px_10px]"></div> <!-- top fade to blend section transition --> <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent"></div> </div> <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6"> <div class="mb-8 flex flex-wrap gap-3 text-xs text-white/70"> ${footerLinks.map((link) => renderTemplate`<a class="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:bg-white/10"${addAttribute(link.href, "href")}> ${link.name} </a>`)} </div> <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"> <div class="flex items-center gap-3"> <img src="/logos/logo.png" alt="Resync Technology" class="h-8 w-8 rounded-md"> <div> <div class="text-sm font-semibold">Resync Technology LLC</div> <div class="text-xs text-white/60">NYC + Brooklyn • Modernize • Automate • Ship</div> </div> </div> <div class="footer-socials flex items-center gap-2" aria-label="Social links"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(social.name, "aria-label")}${addAttribute(social.name, "title")}> <img${addAttribute(social.icon, "src")} alt="" loading="lazy" class="h-[25px] w-[25px] opacity-90 transition hover:-translate-y-0.5 hover:opacity-100 [filter:brightness(0)_saturate(100%)_invert(99%)_sepia(1%)_saturate(2571%)_hue-rotate(241deg)_brightness(115%)_contrast(86%)]"> </a>`)} </div> <div class="text-sm text-white/60">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Resync Technology
</div> </div> </div> </footer>`;
}, "/Users/sergioreyes/Resync/resynctechnology/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Resync Technology",
    description = "NYC software studio for custom software, websites, apps, and automation. Serving New York City and Brooklyn businesses with engineering-led delivery.",
    keywords = [
      "software development company nyc",
      "custom software development nyc",
      "custom software nyc",
      "web development nyc",
      "app development nyc",
      "business automation nyc",
      "digital marketing nyc",
      "legacy system modernization nyc",
      "workflow automation nyc",
      "startup mvp development nyc",
      "api integration nyc",
      "crm automation nyc",
      "saas development nyc"
    ],
    ogImage = "/og.png",
    ogImageAlt = "Resync Technology - NYC software studio",
    ogType = "website",
    structuredData = [],
    noIndex = false,
    canonical = Astro2.url?.toString?.() ?? ""
  } = Astro2.props;
  const fallbackUrl = Astro2.url?.toString?.() ?? "";
  const baseUrl = canonical || fallbackUrl;
  let canonicalUrl = baseUrl;
  try {
    const resolvedUrl = new URL(baseUrl);
    resolvedUrl.hash = "";
    resolvedUrl.search = "";
    canonicalUrl = resolvedUrl.toString();
  } catch {
    canonicalUrl = baseUrl;
  }
  const rootUrl = canonicalUrl ? new URL("/", canonicalUrl).toString() : "";
  const absoluteOgImage = canonicalUrl && ogImage ? new URL(ogImage, canonicalUrl).toString() : ogImage;
  const absoluteLogo = canonicalUrl ? new URL("/logos/whitelogo.png", canonicalUrl).toString() : "/logos/whitelogo.png";
  const keywordContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;
  const defaultStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${rootUrl || canonicalUrl || ""}#localbusiness`,
      name: "Resync Technology LLC",
      url: rootUrl || canonicalUrl || void 0,
      image: absoluteOgImage,
      logo: absoluteLogo,
      description,
      areaServed: ["New York City", "Brooklyn", "New York"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        addressCountry: "US"
      },
      sameAs: [
        "https://www.linkedin.com/company/110126983/",
        "https://github.com/sreyes25"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${rootUrl || canonicalUrl || ""}#professionalservice`,
      name: "Resync Technology LLC",
      url: rootUrl || canonicalUrl || void 0,
      image: absoluteOgImage,
      areaServed: ["New York City", "Brooklyn", "Manhattan", "Queens"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software and Growth Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareCompany",
      name: "Resync Technology LLC",
      url: rootUrl || canonicalUrl || void 0,
      image: absoluteOgImage,
      description,
      areaServed: ["New York City", "Brooklyn", "New York"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Resync Technology",
      url: rootUrl || canonicalUrl || void 0
    }
  ];
  const pageStructuredData = Array.isArray(structuredData) ? structuredData : [structuredData];
  const structuredDataItems = [...defaultStructuredData, ...pageStructuredData].filter(Boolean);
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="description"', '><meta name="keywords"', '><meta name="author" content="Resync Technology LLC"><meta name="geo.region" content="US-NY"><meta name="geo.placename" content="Brooklyn, New York City"><meta name="ICBM" content="40.6782, -73.9442"><!-- SEO -->', '<meta name="robots"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', ">", '<meta property="og:type"', '><meta property="og:locale" content="en_US"><meta property="og:site_name" content="Resync Technology">', '<meta property="og:image:alt"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', ">", '<meta name="twitter:image:alt"', "><title>", '</title><meta name="google-site-verification" content="GQ9Xekr-XnUXYETQ9_GqBBmXSaW5f5TNX2eYvqaEz4w"><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-5TS78Y9ZJW"><\/script>', '<link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><meta name="application-name" content="Resync Technology"><meta name="theme-color" content="#0f172a">', "", '</head> <body class="min-h-screen bg-gradient-to-b from-resync-50/60 via-paper to-paper text-ink antialiased"> ', ' <main id="main"> ', " </main> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(keywordContent, "content"), canonicalUrl && renderTemplate`<link rel="canonical"${addAttribute(canonicalUrl, "href")}>`, addAttribute(noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1", "content"), addAttribute(title, "content"), addAttribute(description, "content"), canonicalUrl && renderTemplate`<meta property="og:url"${addAttribute(canonicalUrl, "content")}>`, addAttribute(ogType, "content"), absoluteOgImage && renderTemplate`<meta property="og:image"${addAttribute(absoluteOgImage, "content")}>`, addAttribute(ogImageAlt, "content"), addAttribute(title, "content"), addAttribute(description, "content"), absoluteOgImage && renderTemplate`<meta name="twitter:image"${addAttribute(absoluteOgImage, "content")}>`, addAttribute(ogImageAlt, "content"), title, renderScript($$result, "/Users/sergioreyes/Resync/resynctechnology/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), structuredDataItems.map((item) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(item)))), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/sergioreyes/Resync/resynctechnology/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
