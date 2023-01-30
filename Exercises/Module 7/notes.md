# Exercise for Module 7 - Custom Styles

**challenge**: Enhance your blog, or use this demo blog, to have different categories for the blog posts.

When a blog post link is clicked the "category" should be the first segment of the URL.

> For example, if the URL is `/sveltekit/dec-2022` then the category is `sveltekit`.
> If the URL is `/personal/first-post` then the category is `personal`.

Have each "category" use a distinct `+layout.svelte` and import separate category-specifc styles.

As an added bonus, have it so if you remove the category segment from the URL you see the same blog post in the default style.

**Hint:** Either use groups or use a dynamic layout when loading the post

Stackblitz Link: https://stackblitz.com/edit/sveltejs-kit-template-default-1sbnt4?file=README.md

---

- show how the `$lib/posts/db.json` has a `category` property now
- in the root `+page.svelte` file give the `article` tag a class of `category ${post.category}`
- add this css, explain this isn't the best way to do this, but just one way for example
  ```css
  .category::before {
    display: inline-block;
    font-size: 0.5em;
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    margin-bottom: 0.5em;
  }
  .category.sveltekit::before {
    content: 'SvelteKit';
    color: white;
    background-color: red;
  }
  .category.personal::before {
    content: 'personal';
    color: white;
    background-color: rebeccapurple;
  }
  ```
- show how the main page has little `personal` and `sveltekit` tags over the post names
- now let's make a custom layout for each category
- create a `(sveltekit)` dir, and a `(personal)` dir with a `+layout.svelte` file each with just a `<slot />` in them
- add a dir to each of those to match the route itself, like `(personal)/personal` and `(sveltekit)/sveltekit`
- copy and paste the `[slug]` directory into each of these
- in the root `+page.svelte` file make the link `href` attribute be `/${post.category}/${post.slug}`
- now show everything working as before, but with the category segment in the url
- now in the `lib` directory create a `category-styles` lib and have `personal.css` and `sveltekit.css` in there
- in the `+layout.svelte` files in `(personal)` and `(sveltekit)` import the css files
- now you can change the css file for each category
  - start by changing the background color of the `personal` category to `background-color: blanchedalmond;`
  ```css
  body:has(.category_personal) {
    background-color: blanchedalmond;
  }
  ```
  - show them how this has a "weird" consequence of permanently changing the background color of the body, and even when preloaded
- to fix the problem, in each of the `+layout.svelte` files, wrap the `<slot />` in a `<div class="category_svelte">`
- then in the css
  ```css
  body:has(.category_personal) {
    background-color: blanchedalmond;
  }
  ```
- for fun change the `font-family` inside the `.category_personal` and `.category_sveltekit`

  - sveltkit: `font-family: 'Courier New', Courier, monospace;`
  - personal: `'Comic Sans MS', 'Comic Sans', cursive;`

- explore the changes and talk about how there are more ways to do this and the possibilities of what you could do
