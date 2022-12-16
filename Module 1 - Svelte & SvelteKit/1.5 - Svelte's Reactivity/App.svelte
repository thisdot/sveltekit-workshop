<script lang="ts">
  let count = 1;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Count: {count}
</button>
