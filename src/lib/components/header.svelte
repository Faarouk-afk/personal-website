<script>
    import '../../app.css';
</script>

<!-- navbar -->
<div class="navbar bg-base-100">
    <div class="navbar-start"> <!-- logo part -->
      <a class="btn btn-ghost text-xl" href="/">nelt</a>
    </div>
    <div class="navbar-center hidden lg:flex"> <!-- menu part -->
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Tools</summary>
            <ul class="p-2">
              <li><a href="/">AI helper</a></li>
              <li><a href="/">Coaching</a></li>
            </ul>
          </details>
        </li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
    <div class="navbar-end"> <!-- login part -->
      <a class="btn" href="/">Talk with us</a>
      <ul class="menu menu-horizontal px-1">
        <li><a href="/signin">Sign in</a></li>
      </ul>
      <label class="flex cursor-pointer gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
        <input type="checkbox" value="synthwave" class="toggle theme-controller"/>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </label>
    </div>
  </div>