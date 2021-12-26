<template>
  <div class="itemMinimal_container">
    <h5>{{ title }}  <b-badge variant="dark">{{ modifyId }}</b-badge></h5>
  </div>
</template>

<script>
export default {
  name: "ItemMinimal",
  props: {
    title: String,
    id: Number
  },
  computed: {
    modifyId() {
      return '#' + this.id.toString();
    }
  }
}
</script>

<style scoped>
.itemMinimal_container {
  background-color: rgb(128, 128, 128);
  color: rgb(232, 232, 232);
  padding: 10px;
  border-radius: 15px;
  margin: 5px;
}
</style>