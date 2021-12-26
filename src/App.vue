<template>
  <div id="app">
    <SectionHeader title="Backlog" icon="📋"></SectionHeader>
    <SectionHeader title="In Progress" icon="🚧"></SectionHeader>
    <SectionHeader title="Done" icon="✅"></SectionHeader>
    <SectionBody></SectionBody>
  </div>
</template>

<script>
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";

export default {
  name: 'App',
  components: {
    SectionHeader,
    SectionBody
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
