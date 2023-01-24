Sometimes, especially as your routing grows and grows, you just want to be able to group routes together, maybe it's a logical grouping, or maybe it's to group based on a certain layout.

Groups are a way to do this, and you add parentheses around the name of the `group`, and then add a +layout.svelte file inside the group. This layout will be used for all the routes inside the group.

`src/routes/(app)/dashboard/+page.svelte`

Perhaps you have some routes that are 'app' routes that should have one layout (e.g. /dashboard or /item), and others that are 'website' routes that should have a different layout (/blog or /testimonials). We can group these routes with a directory whose name is wrapped in parentheses — unlike normal directories, `(app)` and `(website)` do not affect the URL pathname of the routes inside them:

You can also put a +page directly inside a (group), for example if / should be an (app) or a (marketing) page.

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-8ugrka?file=README.md

---

- describe how the `(app)` route uses a different layout than the `(marketing)` route
- show how the url is still `/dashboard` and `/about`, the group is not included
- show how the root route `/` belongs to the `(marketing)` group, because there is a `+page.svelte` file inside it
  - if you were to add a `+page.svelte` file to the `(app)` group, then there would be an error
- in this example the `/admin` route will not use the `(app)` or `(marketing)` layout
