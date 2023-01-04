<script lang="ts">
  import { onMount } from 'svelte';
  import Calendar from '@event-calendar/core';
  import DayGrid from '@event-calendar/day-grid';
  import Interaction from '@event-calendar/interaction';
  import { browser } from '$app/environment';
  import type { PageData } from './$types';

  let subjects = 'Trainees';

  export let data: PageData;

  let options = {
    height: '600px',
    date: '2023-01-06',
    events: data.events,
    // eventSources: [{
    //   url: '/events.json'
    // }]
  };

  let print;

  onMount(async () => {
    const { default: printable } = await import('print-js');
    print = () =>
      printJS({
        printable: data.events,
        properties: ['start', 'end', 'resourceId'],
        type: 'json',
      });
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1 id="printable">
  Hello SvelteKit {subjects}!
</h1>

<button type="button" on:click={print} disabled={!print}>Print Events </button>

{#if browser}
  <Calendar plugins={[DayGrid, Interaction]} {options} />
{/if}

<style>
  h1 {
    color: rebeccapurple;
    flex: 0 1 0;
  }
</style>
