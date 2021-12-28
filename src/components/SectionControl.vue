<template>
  <div class="custom-container">
      <RoundButton bClass="warning" type="edit"
                   :sourceType="sourceType"
                   v-on:edit-item="editItemAction"/>
      <RoundButton bClass="success" type="add"
                   :sourceType="sourceType"
                   v-on:add-item="addItemAction"/>
  </div>
</template>

<script>
import RoundButton from "./buttons/RoundButton";
import addItem from "../actions/addItem";

export default {
  name: "SectionControl",
  components: {
    RoundButton
  },
  props: {
    sourceType: String
  },
  methods: {
    addItemAction: addItem,
    editItemAction: addItem,
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