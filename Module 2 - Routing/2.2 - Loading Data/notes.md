So now we're going to load some data...
Anyone know the TV Show Bob's Burgers?

---

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-asrcpy?file=src/routes/+page.svelte

- add a `<a href="/characters">Characters</a>` link to the `+layout.svelte` component
- create a `routes/characters/+page.svelte` component with `<title>` and `<h1>` tags `Characters`
- create a `+page.ts` file in the `characters` directory
- import { PageLoad } from `'./$types'` (talk about this special generated lib)
- return an array of chararcters from the `load` function with a property `name`
- in the `+page.svelte` component, use the `data` prop to access the array of characters and make a list

- talk about the static directory and how there is a list of 100 characters in there and how you can fetch them with
  `fetch('/bobs-burgers/characters.json');` because its a static file
- implement the `load()` function with real list data from `/bobs-burgers/characters.json` explain this could be any API endpoint
- add to the `+page.svelte` template to show the list of characters

this css may help

```css
li {
  display: flex;
  gap: 2rem;
}

a {
  text-decoration: none;
}

.picture {
  display: flex;
  height: 100px;
  width: 100px;
}

.picture > img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.occupation {
  color: grey;
}
```

- use the `console.log` to show it is run on both the **server** and **client** and explain the mental modal of SSR and Hydration

- talk about how `+layout.ts` can load data as well, create a `+layout.ts` copy and paste from `+page.ts` and change type `LayoutLoad`
- remove the `+page.ts` and it still works, talk about how each layout can pass data down, and it's like a spread operator, last one wins

- show how for each character there is a `.json` file with more detailed data
- explain how you want to click on a characters name or image in the list and go to a detailed character page
  - you could do it with a lot of JS and get the id from the URL and fetch the data, but we can do it with a param easily
- create a `characters/[id]` directory, and explain the `[id]` in a box is a param
- create a `characters/[id]/+page.svelte` component with `<title>` and `<h1>` tags `{data.character.name}`
- create a `characters/[id].ts` file and import `PageLoad` from `./$types`
- use the `fetch` and the `params.id` to get the detailed character data
- show it working...
- this is a good time to talk about the `+` sign... (signifies special file to SvelteKit)
- copy and paste the `character.svelte` component, right in the `[id]` directory, and talk about colocation vs `lib` directory
- spread the `character` data onto the `character.svelte` component and demonstrate
- add a back button, but rather than adding a back button to the page, add it to a nested layout

- (OPTIONAL: add a `+layout.server.ts` file with `export const prerender = true;` in the `src/routes` directory, and show a static export)
