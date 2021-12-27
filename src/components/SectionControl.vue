<template>
  <div class="custom-container">
      <RoundButton bClass="danger" title="Edit"></RoundButton>
      <RoundButton bClass="success" title="Add"></RoundButton>
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
  margin: 5px;
  border-radius: 15px;
  width: fit-content;
}
</style>