export { renderers } from '../renderers.mjs';

const GET = ({ url }) => {
  const origin = url.origin;
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /invoiceamericano/paymentsuccess",
    "",
    `Sitemap: ${origin}/sitemap.xml`
  ].join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
