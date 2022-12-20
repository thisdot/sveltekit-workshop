In every SvelteKit app, if you generate it with the CLI, will have this routes directory, and it will already have some routes in it, but for demonstration this one is empty.

Adding a `+page.svelte` component to the root will be the root route
...(live code)

If we add a new directory called `about` and add a `+page.svelte` component to that, that will be the `/about` route
...(live code)

What if we wanted a navigation black, that is shared on all the pages...
...(live code)

---

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-tfsrmw?file=README.md

- create a `+page.svelte` component in the root

  - add and `<h1>` tag with some text "Welcome SvelteKit Learners"
  - show it is a regular svelte component by adding a `script[lang=ts]` tag and replace the text with a variable
  - add a `style` tag and add some styles to the `h1` tag
    - ```css
      h1 {
        color: rebbecapurple;
      }
      ```
  - add a `<svelte:head>` tag and add a title to the page
    - ```html
      <svelte:head>
        <title>Home</title>
      </svelte:head>
      ```
  - note that so far this is just a svelte component

- create a new directory called `about` and add a `+page.svelte` component to that
  - add and `<h1>` tag with some text "Welcome to the about page"
  - add a `<svelte:head>` tag and add a title to the page
    - ```html
      <svelte:head>
        <title>About</title>
      </svelte:head>
      ```
  - add an `<a>` tag with a `href` attribute to the home page
    - ```html
      <a href="/">Home</a>
      ```
  - back on the home `+page.svete` component, add an `<a>` tag with a `href` attribute to the about page
    - ```html
      <a href="/about">About</a>
      ```
- demonstrate navigation between the two pages, use the back button too
- add a `layout.svelte` file to the root

  - add a `<slot>` tag
  - demonstrate the pages work again
  - add a `<nav>` tag with two `<a>` tags
    - ```html
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      ```
  - remove the links from the `+page.svelte` components

- demonstrsate the layout is working, refresh on both pages
- turn off javascript and show how it still works because of SSR
