Adapters are small plugins that take the built app as input and generate output for deployment.

This decoupling of authouring your application and deploying your application follows the svelte philosophy.

It's this kind of decoupling that allows for great DX without sacrificing UX.

SvelteKit offers a number of officially supported adapters.

Cloudflare Pages via `adapter-cloudflare`
Netlify via `adapter-netlify`
Vercel via `adapter-vercel`
a simple nodejs server via `@sveltejs/adapter-node`
prerendered pages and SPAs via `@sveltejs/adapter-static`

### Community adapters

Additional community-provided adapters exist for other platforms, including deno, bun, firebase, and more.

Stackblitz link: ???

---

- build and preview the app
- switch the adapter to adapter-netlify and build again
- check out the build folder
