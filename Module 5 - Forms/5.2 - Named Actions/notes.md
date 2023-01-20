### 5.2 Named Actions

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-acyjpb?file=README.md

---

- add a column to the table for a delete button
- `<button type="submit" name="movieToDelete" value={movie.id}>Delete</button>`
- talk about named actions
- add a `deleteMovie` action to the `+page.server.ts` file
- see the error, explain you can't have default and delete actions (explain why)
- change the `default` to `logMovie`
- how do we make the button work? (there are a couple different way actually)
- wrap it in a form and make the form action `/?deleteMovie`
