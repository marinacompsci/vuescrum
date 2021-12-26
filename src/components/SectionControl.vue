<template>
  <div class="custom-container">
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
.custom-container {
  background-color: rgba(244, 244, 244, 0.8);
  display: flex;
  margin: 5px;
  border-radius: 15px;
  width: fit-content;
}
</style>