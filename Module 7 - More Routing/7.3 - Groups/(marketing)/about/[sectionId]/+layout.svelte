<script lang="ts">
  import { page } from '$app/stores';
  import type { LayoutData } from './$types';

  export let data;
</script>

<p>Subsection</p>
<h1>{data?.sectionId}</h1>

<div>
  <div class="tabs">
    <a
      class:active={$page.url.pathname === `/about/${data?.sectionId}/account`}
      href={`/about/${data?.sectionId}/account`}>
      Account
    </a>
    <a
      class:active={$page.url.pathname === `/about/${data?.sectionId}/demo`}
      href={`/about/${data?.sectionId}/demo`}>
      Demo
    </a>
    <a
      class:active={$page.url.pathname === `/about/${data?.sectionId}/info`}
      href={`/about/${data?.sectionId}/info`}>
      Info
    </a>
  </div>
  <div class="panel">
    <slot />
  </div>
</div>

<style>
  .tabs {
    display: flex;
    justify-content: space-around;
  }
  .active {
    font-weight: bold;
  }
</style>