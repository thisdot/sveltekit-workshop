Because it is a compiler, Svelte has a very JS like syntax, but reactivity can come just from reassigning a variable in the component
The Reactive update will cause the component to “re-render”
The label $: syntax, while valid JS, means something special in Svlete and allows for deriving reactive values and whole reactive effects

---

Stackblitz project:
https://stackblitz.com/edit/sveltejs-kit-template-default-et9gsk?file=src%2Flib%2Fcomponents%2FApp.svelte

- 1. start with a count variable and a buttom than increments count with a handle click
- 2. add a derived `$: doubled` variable that is the count \* 2
  - display in a `<p>` tag the doubled value `<p>{count} * 2 = {doubled}</p>`
- 3. mention you can derive from derived values too
  - add a `$: quadrupled` variable that is the doubled \* 2
  - display in a `<p>` tag the quadrupled value `<p>{doubled} * 2 = {quadrupled}</p>`
- 4. mention this only works in components
