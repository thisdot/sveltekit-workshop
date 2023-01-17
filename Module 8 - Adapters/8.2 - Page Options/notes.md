### prerender

```ts
export prerender: boolean = true;
```

Routes can be prerendered, served as HTML files generated at build time.
You can mix and match this option, prerendering some routes and SSRing others.

There is also a third option

```ts
export const prerender = 'auto';
```

...which will prerender a route but also include it in the manifest used for dynamic SSR

If your entire app is suitable for prerendering, you can use adapter-static, which will output files suitable for use with any static webserver.

The prerenderer will start at the root of your app and generate files for any prerenderable pages or +server.js routes it finds. Each page is scanned for <a> elements that point to other pages that are candidates for prerendering — because of this, you generally don't need to specify which pages should be accessed.
If you do need to specify which pages should be accessed by the prerenderer, you can do so with the `entries` option in the `prerender` configuration.

Accessing `url.searchParams` during prerendering is forbidden. If you need to use it, ensure you are only doing so in the browser (for example in onMount).

Pages with actions cannot be prerendered, because a server must be able to handle the action POST requests.

### SSR

```ts
export const ssr = false;
```

If you set ssr to `false`, it renders an empty HTML 'shell' page to the client instead of rendering on the sever and hydrating.

`export const ssr = false` in your root `+layout.ts` to create an SPA.

### CSR

```ts
export const csr = false;
```

Some pages don't require JavaScript at all and you can disable it entirely with `csr = false`

_**Note:** If both ssr and csr are false, nothing will be rendered!_

### trailingSlash

```ts
export const trailingSlash = 'always'; // never, always or ignore
```

By default, SvelteKit will remove trailing slashes from URLs.
if you visit `/about/`, it will respond with a redirect to `/about`

This option allows you to change this behaviour, may be usedul with certain servers.

This option also affects prerendering. If `trailingSlash` is `'always'`, a route like `/about` will result in an `about/index.html` file, otherwise it will create `about.html`, mirroring static webserver conventions.

Stackblitz link: ???

---

- you can live code through each of these, showing the built result if there is time.
