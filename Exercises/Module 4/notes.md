**challenge**: Let's move our Blog Data out to a CMS!

So, you can either signup for contentful and create your own BlogPost data, OR you can use these tokens created specifically to access the
blogpost data I have already added to contentful.

(create a workshop specific .env file and share it to the participants)
(for video, walk through how to create their own contentful account and add the data)

```
CONTENTFUL_SPACE_ID=(from contentful)
CONTENTFUL_PREVIEW_TOKEN=(from contentful)
CONTENTFUL_DELIVERY_TOKEN=(from contentful)
```

- sign up for [contentful](https://contentful.com)
- install `contentful`, `@contentful/rich-text-types`, and `@contentful/rich-text-html-renderer`

Now, let's see if you can use what you learned about `+page.server.ts` and environment variables to get your blog data from contentful.

**Setup stackblitz**: ???

**Answer stackblitz**: https://stackblitz.com/edit/sveltejs-kit-template-default-9agrra?file=README.md

---

### Setup Contentful

- sign up for a contentful account
- create a new space and a new content model called `blogPost`
- create a new content model called `blogPost` with the following fields:
  - `title` (text)
  - `description` (text)
  - `date` (date)
  - `author` (text)
  - `content` (rich text)
  - `theme` (text limit to A | B | C | D))
- add a few of blog posts

### Back to our blog

- add an .env file with the following:
  ```
  CONTENTFUL_SPACE_ID=(from contentful)
  CONTENTFUL_PREVIEW_TOKEN=(from contentful)
  CONTENTFUL_DELIVERY_TOKEN=(from contentful)
  ```
- change `+page.ts` and `[slug]/+page.ts` to `+page.server.ts` and `[slug]/+page.server.ts` (and types to `PageServerLoad`)
- add a `lib/server` directory and move `posts` in there (update import paths)
- in the `lib/server/posts` directory add a `contentful-client.ts` file

  - in it import `contenful` and the environment variables with the contentful secrets, and `dev` variable
  - export a `client` instance created from `contentful.createClient`

  ```ts
  import contentful from 'contentful';
  import {
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_PREVIEW_TOKEN,
    CONTENTFUL_DELIVERY_TOKEN,
  } from '$env/static/private';
  import { dev } from '$app/environment';

  export const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: dev ? CONTENTFUL_PREVIEW_TOKEN : CONTENTFUL_DELIVERY_TOKEN,
    host: dev ? 'preview.contentful.com' : 'cdn.contentful.com',
  });
  ```

- go into the posts library and delete all the code that fetches the posts from a json file and just keep the function names
- create a `BlogPost` type, and when you get to content import `import type { Document } from '@contentful/rich-text-types';`
- import the `client` from the `contentful-client.ts` file
- in the `getPostSummaries` function get what you need from the contentful sdk

```ts
export async function getPostSummaries() {
  const entries = await client.getEntries<BlogPost>({
    content_type: 'blogPost',
    select: ['fields.title', 'fields.slug', 'fields.description'],
    order: '-fields.date',
  });

  return entries.items.map((item) => item.fields);
}
```

- in get by posts use this clever trick to get the post from the slug
- don't forget to import `documentToHtmlString` from `@contentful/rich-text-html-renderer` and convert the `content` field to html

```ts
export async function getPostBySlug(slug: string) {
  const entries = await client.getEntries<BlogPost>({
    content_type: 'blogPost',
    'fields.slug[in]': slug,
  });
  const post = entries.items[0].fields;
  return { ...post, content: documentToHtmlString(post.content) };
}
```

- now in the `[slug]/+page.svelte` add the `{@html content}` directive to the content
- show how you "could" style the `content` HTML in this component, but mention there are other ways too
- delete now useless `posts.json` file
- (maybe build a static build if theres time?)
