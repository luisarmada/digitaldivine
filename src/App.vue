<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <div id="mainbody">
      <RouterView />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/analysispersona">Analysis on Persona</RouterLink>
          <RouterLink to="/analysishonkai">Analysis on Honkai</RouterLink>
          <RouterLink to="/devproc">Development Process</RouterLink>
          <RouterLink to="/suppinfo">Supplementary Info</RouterLink>
        </nav>
      </div>
    </div>
    <br>
  </body>
  
</template>

<style scoped>
#mainbody {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1.5;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  position:absolute;
  width: auto;
  font-size: 1em;
  text-align: center;
  white-space: nowrap;
  margin-top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 50px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
    
  }
}
</style>
