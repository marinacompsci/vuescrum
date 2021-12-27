<template>
  <div id="app">
    <main>
      <b-container fluid>
        <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3" align-h="center">
          <b-col><Section title="Backlog" icon="📋"></Section></b-col>
          <b-col><Section title="In Progress" icon="🚧"></Section></b-col>
          <b-col><Section title="Done" icon="✅"></Section></b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import Section from "./components/Section";

export default {
  name: 'App',
  components: {
    Section
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #7b7f85 !important;
}
</style>
