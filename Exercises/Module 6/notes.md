# Exercise for Module 6 - Add Authorized posts

**challenge**: Add Authorized posts
Mark certain blog posts as "drafts" and only present then to the user when they are "logged in" and "have permissions"

Using the simple “login / Logout” system from Module 5 only present “draft” posts to the user when they are "logged in" and "have permissions", which may imply there is more than one user

**Hint:** use hooks and cookies to handle the “logged-in” part centrally in one place

---

- show the participants the `$lib/posts` `getPostSummaries()` method now takes ab `includeDrafts` parameter and the `Post` type has a `published` property
- add a `hooks.server.ts` file in `src` and move the code from `routes/layout.ts` to it

  ```ts
  import type { Handle } from '@sveltejs/kit';

  export const handle = (async ({ event, resolve }) => {
    const { cookies } = event;
    event.locals.user = cookies.get('loggedInUser') ?? null;

    return await resolve(event);
  }) satisfies Handle;
  ```

- to make this work we need to add the `user` type to `Locals` in `app.d.ts` (just make a string for now)
- change `+layout.ts` to `+layout.server.ts` and add get the `user` off of `event.locals`
- change `+page.ts` to `+page.server.ts` and add the `includeDrafts: !!locals.user` param to `getPostSummaries()` (get user off `event.locals`)
- add a little "(draft)" indicator span after the title on the list in `+page.svelte`
  ```css
  .draft {
    color: red;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
  ```
- in `[slug]/+page.svelte` add a big draft indicator to the top of the page

  ```svelte
  {#if !published}
  <div class="draft">
    <span>DRAFT</span>
    <p>This page has not been published yet</p>
  </div>
  {/if}
  ```

  ```css
  .draft {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: red;
    padding: 1rem;
    text-align: center;
    pointer-events: none;
  }

  .draft > span {
    font-size: 2rem;
    font-weight: bold;
  }
  .draft > p {
    margin: 0;
  }
  ```

- SHOW that a user can STILL see it if they are not logged in by going to the url directly
- change `[slug]/+page.ts` to `[slug]/+page.server.ts` and only show the page if it is published or the user is logged in

```ts
const post = await getPostBySlug(params.slug);
if (!post) throw error(404, 'Post not found');

if (!post.published && !locals.user) throw error(404, 'Post not found');
```

- talk about why `404` instead of `403` (because we don't want to give away that the post exists)

- add an error page to `[slug]/error.svelte`

  ```svelte
  <script>
  	import { page } from '$app/stores';
  </script>

  <h1>{$page?.error?.message}</h1>
  ```
