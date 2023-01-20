<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Super Secret Page</h1>

<p>The Secret: {data.secret}</p>

