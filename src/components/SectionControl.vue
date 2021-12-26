<template>
  <div class="container">
    <RoundButton type="add"></RoundButton>
    <RoundButton type="edit"></RoundButton>
  </div>
</template>

<script>
import RoundButton from "./RoundButton";
export default {
  name: "SectionControl",
  components: {
    RoundButton
  }
}
</script>

<style scoped>
.container {
  background-color: rgba(128, 128, 128, 0.2);
  display: flex;
  justify-content: center;
}
</style>