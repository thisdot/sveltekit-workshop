<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  let selectedHex = data.colors.find((c) => c.id === data?.config.theme)?.hex;
  $: selectedColor = data.colors.find((c) => c.hex === selectedHex);
</script>

<svelte:head>
  <title>Theme Picker</title>
</svelte:head>

<h1>Theme Picker</h1>

<label>
  <input type="color" list="theme-colors" bind:value={selectedHex} />
  <datalist id="theme-colors">
    {#each data.colors as color}
      <option value={color.hex}>{color.id}</option>
    {/each}
  </datalist>

  <b>{selectedColor ? selectedColor.id : selectedHex}</b>
</label>
