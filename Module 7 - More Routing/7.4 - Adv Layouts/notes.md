So generally, the a `layout.svelte` is in effect for all child routes defined "below" it (in the directory hierarchy).
But you can break out of that.

`+page@` can be used to break out of the current layout.

`(marketing)/about/[sectionId]/info/+page@about` - escapes the tabs added in `[sectionId]/+layout.svelte`  
`(marketing)/about/[sectionId]/info/+page@(marketing)` - escapes the sidebar added in `about/+layout.svelte`  
`(marketing)/about/[sectionId]/info/+page@` - escapes the info page from all layouts up to the root route

You can do the same with `+layout@(whatever).svelte` too!

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-dhza57?file=README.md

---

- show how the routing is setup, app has no layout, everything under marketing has nested layouts
- change the `(marketing)/about/[sectionId]/info/+page` filename to `+page@about` and see how the tabs dissapear
- change it to `+page@(marketing)` and see how the sidebar dissapears
- change it to `+page@` and see how the header dissapears
- do a similar thing with `(marketing)/about/[sectionId]/+layout.svelte`

- explain "Of course, trying to do everything with groups and these layout escapes can get messy, so it's good to remember you can always rewind your layout to the root and just import a reusable layout component and load function."
