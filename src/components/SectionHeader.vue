<template>
  <div class="sectionHeader_container">
    {{ title }} {{ icon }}
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: String,
    icon: String
  }
}
</script>

<style scoped>
.sectionHeader_container {
  background-color: rgb(128, 128, 128);
  color: rgb(232, 232, 232);
  padding: 10px;
  font-weight: bold;
  border-radius: 15px;
  margin: 5px;
}
</style>