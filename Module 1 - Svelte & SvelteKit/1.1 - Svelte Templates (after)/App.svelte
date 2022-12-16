<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button>Clicked {count} {count === 1 ? 'time' : 'times'}</button>

<style>
  button {
    color: purple;
    font-family: 'Comic sans MS', cursive;
    font-size: 2em;
  }
</style>
