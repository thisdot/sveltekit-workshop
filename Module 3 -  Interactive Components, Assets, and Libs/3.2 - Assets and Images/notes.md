So, now we should talk about images and assets...

First off, SvelteKit has some "special" directories...
You've already seen the `routes` directory...
The `static` directory is a place to put static files that should have stable URLs and undergo no processing such as favicon.ico or manifest.json
the `lib` directory is for your apps internal libraires... (import with `$lib/...`)
the `params` directory is for parameter matchers, which we'll get into in the Advance Routing section...
there is a special `$lib/server` directory which we'll get into in the next module...
and finally there is the `.svelte-kit` directory which you can ignore, and delete when you want because it is generated every time you run dev or build...

So you want to use an image in your app, you have a couple of options...
You can use the `static` directory, which will serve it from the root... but don't
You can use the `$lib` directory, import it and use it for src...

- this will add a hash to the file name when built
- if it is small enough it inlines it (as a base64 string in this case)
  You can even use the `$lib` directory in CSS because of `vitePreprocess`...

[live code]

---

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-mo2do7

- add an `img` tag to the `+page.svelte` component
- use the static import url first
- then make a `lib/images` directory and move the image there, and change the `src` to the `$lib` import (which fails)
- `import hero from '$lib/images/hero.png';` and use it in the `src` attribute
- talk about how the image is inlined in the CSS and the HTML
- add a `+layout.ts` file to `routes` with `export const prerender = true;` to SSG the site
- show the build and talk about how a hash is added so it can be cached
- put the smaller image from the `static` directory in the `lib/images` directory and show it is inlined
  - you'll need to build and run `npm run preview` to see the inlined image
  - talk about how this is a `vite` feature and can be configured with `build.assetsInlineLimit`
- show how you can use the `$lib` directory in CSS because of `vitePreprocess`...
