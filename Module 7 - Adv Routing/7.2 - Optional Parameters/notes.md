A route like `[lang]/home` contains a parameter named `lang` which is required.

But if you wanted to have both `home` and `en/home` point to the same page, you can wrap the parameter in another bracket pair:
`[[lang]]/home`

Note: optional route parameter cannot follow a rest parameter ([...rest]/[[optional]])
(the parameters are matched 'greedily' and the optional parameter would always be unused)

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-yav87l?file=README.md

---

- show how the route is matched even when there is no `lang` parameter
