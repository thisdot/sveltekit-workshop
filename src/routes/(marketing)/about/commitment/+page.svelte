<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Our Commitment</h1>

<p>This is about our commitment</p>

<pre>{JSON.stringify(data, null, 2)}</pre>
