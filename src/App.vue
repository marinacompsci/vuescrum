<template>
  <div id="app">
    <main>
      <div class="main_content">
        <Section title="Backlog" icon="📋"></Section>
        <Section title="In Progress" icon="🚧"></Section>
        <Section title="Done" icon="✅"></Section>
      </div>
    </main>
  </div>
</template>

<script>
import Section from "./components/Section";

export default {
  name: 'App',
  components: {
    Section
  }
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
.main_content {
  display: flex;
  justify-content: center;
}
body {
  background-color: #7b7f85 !important;
}
</style>
