## Redirects

---

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-acyjpb?file=README.md

### Respond with a redirect

- sometimes you want to redirect after a form submission, maybe after creating something you want to go to the detail page
- to do that in a SvelteKit action is the same as in a load function, just throw a `redirect` object
  - `import { redirect } from '@sveltejs/kit';`
  - `throw redirect(303, 'super-secret-url');` (303 is pretty common code for post responses)
- you can get the redirect target from anywhere, the query param, formData, even the user whatever
