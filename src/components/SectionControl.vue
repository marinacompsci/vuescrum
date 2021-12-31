<template>
  <div class="custom-container">
      <RoundButton bClass="warning"
                   type="edit"
                   :sourceType="sourceType"
                   v-on:edit-item="addItem"
      />
      <RoundButton bClass="success"
                   type="add"
                   :sourceType="sourceType"
                   v-on:add-item="addItem"
      />
  </div>
</template>

<script>
import RoundButton from "./buttons/RoundButton";

export default {
  name: "SectionControl",
  components: {
    RoundButton
  },
  props: {
    sourceType: String
  },
  methods: {
    addItem(data) {
      if (this.sourceType === 'backlog') this.$store.commit('addBacklogItem', data);
      else if (this.sourceType === 'progress') this.$store.commit('addProgressItem', data);
      else if (this.sourceType === 'completed') this.$store.commit('addCompletedItem', data);
    },
    //editItemAction: addItem,
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