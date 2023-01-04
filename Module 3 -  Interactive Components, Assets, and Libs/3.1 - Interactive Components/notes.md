So, a lot of people get the idea that SSR means poor UX...  
SvetleKit's "best-of-both-worlds" approach is using Hydration...
SvelteKit is great if you want to do SPAs, SSG or SSR
So when your thinking of SSG (Static Site Generation) though, SvelteKit is great.
But when you're building static sites for clients, the first thing there are going to ask for is
an Event Calendar of some sort. And they'll want you to pull in the data from some 3rd party thing they are using.
We can do that...
So we seek and find Event Calendar on the https://sveltesociety.dev/
https://github.com/vkurko/calendar

[live code]

But sometimes when you want to use a cool library or component, you get this error...

---

Stackblitz link: https://stackblitz.com/edit/sveltejs-kit-template-default-mo2do7

- follow directions and install all Event Calendar dependencies

  - @event-calendar/core\*
  - @event-calendar/day-grid\*
  - @event-calendar/interaction\*
  - @event-calendar/list (?)
  - @event-calendar/resource-time-grid (?)
  - @event-calendar/time-grid (?)

- add the Event Calendar to the `+page.svelte` component
  - `<Calendar plugins={[DayGrid, Interaction]} options={{ height: '600px' }} />`
  - talk about the error and why it's happening
- `import { browser } from '$app/environment'` and wrap it in `{#if browser}{/if}`
- So for SPAs and SSG, you want your components to still fetch data
  - Event calendar has an option `eventSources`
  - (to fake an external API I've got some JSON in the `static` directory which we can access at `/events.json`)
  - `options={{ height: 600px, date: '2023-01-06', eventSources: [{ url: '/events.json' }] }}`
    - the `date` property is just to set the calendar to where the events are
- And that works, now it fetches the data client side, but you can also make this work server side
  - for SSG this will be every build, which is good if you trigger a build when the events change
  - for SSR this will be every server request, which is good if you have a lot of traffic, and you can cache the data
- add a `page.ts` with an async load function, which calls `fetch('/events.json').then((res) => res.json())`
- use console log to show this is running on both server and client

- sometime you want to use a library that errors as soon as you import it
- let's print the events as a table with `print-js`

  - `npm i print-js` & `import print from 'print-js'`

  ```ts
  let print = () =>
    printJS({
      printable: data.events,
      properties: ['start', 'end', 'resourceId'],
      type: 'json',
    });
  ```

  - add a button to the `+page.svelte` component and call print
  - note how everything blows up, some libs just don't work with SSR

- import Svelte lifcycle method `onMount` and pass it `async` function
- `onMount` only runs on the client
- use dynamic import `import('print-js')` inside on
- just replace a `let print` with a callback when ready, you can disable the button until it's ready too
- talk about how you need to understand the diff of server side and client side rendering
