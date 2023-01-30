<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Profile</h1>

<h3>{data.loggedInUser}</h3>

<form method="post">
  <button type="submit" name="logout">Logout</button>
</form>

<style>
h3, form {
  text-align: center;
}
</style>