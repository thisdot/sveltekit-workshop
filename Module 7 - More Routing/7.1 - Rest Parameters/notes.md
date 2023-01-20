If you don't know statically how many route segments you'll need, you can use rest syntax

/[org]/[repo]/tree/[branch]/[...file]

...in this case hitting `/sveltejs/kit/tree/master/documentation/docs/04-advanced-routing.md` would result in `params`

```js
{
  org: 'sveltejs',
  repo: 'kit',
  branch: 'master',
  file: 'documentation/docs/04-advanced-routing.md'
}
```

The `rest` param comes as a string, not an object, so you have to parse it yourself

You can make sure the rest parameter is valid using a `matcher` which we will cover later.

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-d5bbuk?file=README.md

---

- show the routes in the directory structure, explain
- click the long link and show what loads as `params` for the page
