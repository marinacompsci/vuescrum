<template>
  <div class="custom-container">
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
.custom-container {
  background-color: rgb(51, 51, 51);
  color: rgb(232, 232, 232);
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 15px;
  margin: 5px;
}
</style>