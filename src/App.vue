<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <div id="mainbody">
      <RouterView />

      <nav>
        <img src="@/assets/decoratorlinev2.png" />
        <div>
          <div id="navleftside">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/">Glossary</RouterLink>
            <RouterLink to="/devproc">Development</RouterLink>
          </div>
          <div id="navicon">

          </div>
          <div id="navrightside">
            <RouterLink to="/analysispersona">Persona Analysis </RouterLink>
            <RouterLink to="/analysishonkai">Honkai Analysis </RouterLink>
            <RouterLink to="/suppinfo">Inspirations</RouterLink>
          </div>
        </div>
        
        <img src="@/assets/decoratorlinev2.png" />
      </nav>

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
  display: flex;
  flex-direction: column;
  position:absolute;
  width: 100vw;
  font-size: 1em;
  text-align: center;
  white-space: nowrap;
  margin-top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 50px;
  top: 0;
  gap: 5px;
}

nav img{
  height: 1.5vw;
  width: auto;
  object-fit: contain;
  filter: invert(100%);
  -webkit-filter: invert(100%);
  opacity: 0.6;
}

nav div{
  display: flex;
  justify-content: center;
}


#navleftside{
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1vw;
  margin-right: 1vw;
}

#navrightside{
  flex: 1;
  display: flex;
  justify-content: flex-start;
  gap: 1vw;
  margin-left: 1vw;
}

#navicon{
  width: 2vw;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-family: "Reddit Mono", monospace;
  font-weight: 500;
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
