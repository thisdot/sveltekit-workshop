Somtimes you need to do things on a server...

- communicate with your database
- accept form input
- secret and crypto stuff, like signing JWTs and requesting tokens from OAuth providers
- send emails
- do some other stuff that is not safe to do in the browser

Svelte let’s you your app and deployment, but your "server" may be:

- A nodejs server
- Cloudflare workers
- A deno server
- Netlify/Vercel functions
- …something else

The point is, having access to the server is a good thing and let's you do a lot of things easily you can't do in an SPA (in the browser)

So, lets go back to our earlier example and move stuff to the server...

## [live code]

Stackblitz link: ???

- starting with the Bobs burgers characters from Module 2 - loading data
- change `page.ts` to `page.server.ts`, explain it only runs on the server now _\*note the difference in the console logs\*_
- not the change to `PageServerLoad` and how it adds some new parameter properties: request, cookies,locals, platform
  - request is the native web request object
  - cookies - is a little cookie helper for reading and setting cookies
  - locals - is a little object used for passing data between hooks (we'll get to later) layouts and pages
  - platform and getClientAddress are provided by the adapter, so different deployment targets can give you different things
    - for example in the CLoudflare Worker adapter you can get access to Cloudflares KV stores from the platform object
- so when should you use Server Load function rather than the universal load functions?
  - when you need to access a database (directly or indirectly) (or the filesystem)
  - when you need to use private environment variables / secrets
- values return from server load functions need to be serializable BUT uses devalue so can handle things like Maps and Dates

- `layout.server.ts` - change the `characters/layout.ts` that loads the list of characters to `layout.server.ts` as well
- Since we are server-side now, we don't have to fake the Bobs Burgers API, we can use the real one
