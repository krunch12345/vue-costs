<template>
  <div id="app">
    <header class="header">
      <div>My personal costs</div>

      <nav class="nav-bar">
        <router-link class="nav-bar-item" to="dashboard">Dashboard</router-link>
        <router-link class="nav-bar-item" to="about">About</router-link>
      </nav>
    </header>

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    page: 'dashboard',
  }),
}
</script>

<style lang="sass">
@import "style/reset"

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin: 0 auto
  display: flex
  flex-direction: column
  max-width: 1140px

.header
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  padding: 2rem 0
  font-size: 32px
  width: 100%
  margin: 0 auto

.nav-bar-item
  padding: 0 1rem
  font-size: 20px
  text-decoration: none

</style>
