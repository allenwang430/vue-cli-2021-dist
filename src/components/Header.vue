<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">Design</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carousel">Carousel</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/randomuser">Randomuser</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >tab</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/tab01">單純:is</router-link>
              <router-link class="dropdown-item" to="/tab02">非同步載入元件</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >Vue.js</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/vue01">介紹</router-link>
              <router-link class="dropdown-item" to="/vue02">實例</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
</script>

<style scoped lang="scss">
</style>
