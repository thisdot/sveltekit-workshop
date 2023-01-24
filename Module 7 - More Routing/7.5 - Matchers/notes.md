When you have a paramaterized route like `post/[id]` it could match anything, `post/3` but also `post/whatdoesthisdo`?
You may want to validate your route paramaters to limit what will actually **match** your route.

**Matchers** are predicate functions, functions that return will return `true` if you want your route to match.

SvelteKit looks in a "special" directory `src/params` for matchers.

`src/params/integer.ts`

The filename names the matcher and each file exports 1 named module called `match`

then enhance the param route like this: `src/routes/archive/[page=integer]`

If the pathname doesn't match, SvelteKit will try to match other routes (using the sort order specified below), before eventually returning a 404.

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-xcnn5s?file=README.md

---

- show setup with list of characters and a detail page
- show how erroring without a matcher sends it to the erro page, because it matched the route, but then threw an error
- but if you didn't want to match at all
- show how you can add an `integer` matcher to the `params` directory
  - pull in `ParamMatcher` type from `@svelteks/kit` and use `/^\d+$/.test(param)` to test the string is an integer
