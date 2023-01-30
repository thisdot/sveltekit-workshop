<script>
  import Character from './character.svelte'
  import { page } from '$app/stores';
</script>

<Character name={`${$page.status}: ${$page.error.message}`} />