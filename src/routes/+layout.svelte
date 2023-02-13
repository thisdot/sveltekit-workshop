<script lang="ts">
  import { invalidateAll, invalidate } from '$app/navigation';
  import type { LayoutData } from './$types';
  import '../styles.css'

  export let data: LayoutData;
  $: user = data.user;


  const loginLogout = async () => {
    await fetch('/api/login', {
      method: 'post'
    });
    await invalidateAll();
  }
</script>


<header>
  <a href="/">Home</a>
  <button on:click={loginLogout}>
    {user ? 'Logout' : 'Login' }
    {#if user}
    <span class='userid'>{user?.id.slice(user.id.lastIndexOf('-')+1)}</span>
    {/if}
  </button>
</header>
<main>
  <slot />
</main>

<style>
  main {
    padding: 1rem;
    max-width: 800px;
    margin: auto;
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  .userid {
    display: inline-block;
    position: absolute;
    font-size: 0.5em;
    color: black;
    bottom: -1rem;
  }
</style>

