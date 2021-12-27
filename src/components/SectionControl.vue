<template>
  <div class="custom-container">
      <EditItemButton bClass="warning" title="Edit"></EditItemButton>
      <AddItemButton bClass="success" title="Add"></AddItemButton>
  </div>
</template>

<script>
import AddItemButton from "./buttons/AddItemButton";
import EditItemButton from "./buttons/EditItemButton";

export default {
  name: "SectionControl",
  components: {
    AddItemButton,
    EditItemButton
  },
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