<script>
  import Box from './Box.svelte';
</script>

<Box>
  <h2>Hello!</h2>
  <p>This is a box. It can contain anything.</p>
  <p slot="footer"><span>I end up in the footer</span></p>
</Box>

<Box />
