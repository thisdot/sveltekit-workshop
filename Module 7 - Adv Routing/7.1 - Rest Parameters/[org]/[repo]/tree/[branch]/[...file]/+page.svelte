<script lang="ts">
  import type { PageData } from './$types';

  export let data;
</script>

<code>
 {JSON.stringify(data?.params, null, 2)}
</code>

<style>
  code {
    white-space: pre-wrap;
  }
</style>