### 4.4 API Pages

As well as pages, you can API Endpoint routes with a `+server.ts` file
Your `+server.ts` file (or `+server.js`) can export named functions corresponding to HTTP verbs:
`GET`, `POST`, `PATCH`, `PUT` and `DELETE`

The `RequestHandler` functions receive a `RequestEvent`argument, similar to `load()`, and should return a `Response` object

Because `Response` is just a standard class, you can read abouit it on MDN, and when you construct the response, though you can pass it as string, you could also pass a ReadableStream, which lets you stream large amounts of data or create server-sent events.

Be aware, some platforms buffer responses, like AWS Lambda, which wouldn't let you stream your responses.

## [live code]

Stackblitz link: ???

---

- sveltekit also lets us define API endpoints with `+server.ts` files
- you can put them anywhere but let's just go with `/api` for familiarty
- create a new route file `api/characters/server.ts`
- you're not really doing a load here, your responding to HTTP Requests
- you export `GET`, `POST`, `PATCH`, `PUT` and `DELETE` functions that take a `RequestEvent` and return a `Response`
- let's just recreate our Bob's Burger API from earlier but you could conntect to a DB here or whatever
- `import type { RequestHandler } from './$types';`
- export a `GET` function, fetch from the static json files and return a `Response`
  - `import { json } from '@sveltejs/kit';`
  - switch to using text
- import `fs` and `path` from `node:` and read from file to response (you'll need `env.PWD` for the root)

```ts
import fs from 'node:fs/promises';
import path from 'node:path';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
  const fileContents = await fs.readFile(
    path.resolve(env.PWD, 'static', 'bobs-burgers', 'characters.json'),
    'utf-8'
  );
  return new Response(fileContents);
};
```

- with that working, come full circle and use our API endpoint in the fetch call for the list of characters
  - change the` BOBS_BURGERS_API` env to `BOBS_BURGERS_API=/api/characters`
