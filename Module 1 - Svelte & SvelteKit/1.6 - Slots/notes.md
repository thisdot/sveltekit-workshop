Svelte Slots are very similar to browsers regular `<slot>` tags, except that they work with Svelte components

They let you compose components by projecting content into other components, and allowing you to wrap elements or other components with styles and behaviours.

If you give your `<slot />` elements children that is treated as default content for the slot.

If you give your `<slot />` a name attribute, it will only take content with a matching name attribute, and all other content will be projected into the default unnamed slot if there is one.

---

Stackblitz project:
https://stackblitz.com/edit/sveltejs-kit-template-default-as89o6?file=src/lib/components/App.svelte

- 1. Create a `Box.svelte` compoenent and give it s `<slot />` tag wrapped in a `<div class="box">`
  - give it a style tag and give it a border and padding
  ```css
  .box {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin: 0 0 1em 0;
  }
  ```
- 2. Import the `Box` component into `App.svelte`
- 3. Add the `Box` component to the template and give some content
- 4. Add some default content to the `Box` component's `<slot />` tag
  - `<em>no content was provided</em>`
- 5. Add a second `<Box />` component to the template without any content
- 6. Add a second `<slot />` tag to the `Box` component
  - give it a name attribute of `footer`
- 7. Add `display: flex;` and `flex-direction` to the `Box` component's style tag
- 8. css for footer
  ```css
  footer {
    background-color: lightgray;
    padding: 0 1em;
  }
  ```
- 8. Add a `<slot name="footer" />` tag in a `<footer></footer>` element to the `Box` component
- 9. Add a `<p slot="footer">` tag to the `App.svelte` template, add a `span` to show it can be anything not just text
