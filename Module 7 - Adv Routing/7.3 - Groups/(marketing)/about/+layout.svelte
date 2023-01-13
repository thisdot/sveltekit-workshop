
<section>
  <aside>
    <nav>
      <ul>
        <li>
          <a href="/about/subsection">A subsection</a>
        </li>
        <li>
          <a href="/about/another-subsection">Another subsection</a>
        </li>
        <li>
          <a href="/about/descriptive">A descriptive page</a>
        </li>
      </ul>
    </nav>
  </aside>

  <div class="main">
    <slot />
  <div>
</section>


<style>
  section {
    display: flex;
    gap: 2rem;
  }

  .main {
    width: 100%;
  }
</style>