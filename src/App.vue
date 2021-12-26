<template>
  <div id="app">
    <SectionHeader title="Backlog" icon="📋"></SectionHeader>
    <SectionHeader title="In Progress" icon="🚧"></SectionHeader>
    <SectionHeader title="Done" icon="✅"></SectionHeader>
  </div>
</template>

<script>
import SectionHeader from "./components/SectionHeader";

export default {
  name: 'App',
  components: {
    SectionHeader
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
</style>
