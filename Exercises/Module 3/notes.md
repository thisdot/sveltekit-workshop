**challenge**: Add a logo and some themed images to your blog site.

You can either use the blog from earlier or start with this demo blog.

This demo has been update with some styles and each post now has a `theme` property which is one of `'A' | 'B' | 'C' | 'D'` or no defined.

If you are using your previous exercise again, add a `theme` or `tag` property to the posts to decide what image to show on the post page.

For each post page, show an image of your choice for each theme.

Also, replace the link that says `Logo` with an image of your choice.

**Setup stackblitz**: https://stackblitz.com/edit/sveltejs-kit-template-default-5qhzqr?file=README.md

**Answer stackblitz**: https://stackblitz.com/edit/sveltejs-kit-template-default-gdqwvv?file=README.md

---

- let's start with the logo
- add an `src/lib/images` directory and put the `svelte-kit.svg` file in there
- in the `+layout.svelte` component, replace the link with an `<img>` tag
- `import logo from '$lib/images/svelte-kit.svg'` and pass `logo` to the `src` attribute
- add alt text
- you'll need to add a `height` with css to see the image now

- onto the post images
- show how the `theme` property has been added to each blog post
- take the 4 "theme" images from the demo and put them in the `src/lib/images` directory
- in the `[slug]/+page.svelte` file, add `theme` to the props we are destructuring from `data`
- make a little theme map to some categories:

```js
$: ({ title, content, theme } = data);

const themes = {
  A: 'svelte',
  B: 'programming',
  C: 'code',
  D: 'javascript',
};
```

- wrap the `<h1>` tag in a `<header>` and add some styles to it:
  - point out the text shadow as a way to higlight the white text

```css
h1 {
  color: white;
  text-shadow: 1px 1px 3px black, 3px 3px 3px black;
  margin-bottom: 3rem;
  max-width: min(800px, 90%);
  margin: 1rem auto 2rem;
}

header {
  background-color: rebeccapurple;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem 3rem;
  margin: 2rem -2rem;
}
```

- for each of the themes from the map, add a class and give it a background image using the `url` function and `$lib/images`:

```css
.svelte {
  background-image: url('$lib/images/themeA.jpg');
}

.programming {
  // ...
}

.code {
  // ...
}

.javascript {
  // ...
}
```

- add a linear gradiant with same values to have a tranparent overlay over the images

```css
.svelte {
  background-image: linear-gradient(
      rgba(102, 51, 153, 0.2),
      rgba(102, 51, 153, 0.2)
    ), url('$lib/images/themeA.jpg');
}
```

- change colors for each theme
