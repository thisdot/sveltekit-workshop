import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch }) => {
  return {
    events: fetch('/events.json').then((res) => res.json()),
  };
};
