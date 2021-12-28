<template>
    <b-button pill
              v-b-modal.modal-1
              :variant="bClass"
              @click="emitClickEvent()"
    >{{ title }}
    </b-button>
</template>

<script>
export default {
  name: "RoundButton",
  props: {
    bClass: String,
    sourceType: String,
    type: String
  },
  methods: {
    emitClickEvent() {
      switch(this.type) {
        case "edit":
          this.$emit('edit-item', {title: 'Edit From' + ' ' + this.sourceType});
          break;
        case "add":
          this.$emit('add-item', {title: 'Add From' + ' ' + this.sourceType});
      }
    }
  },
  computed: {
    title() {
      switch(this.type) {
        case "edit":
          return "Edit";
        case "add":
          return "Add";
        default:
          return "";

      }
    }
  }
}
</script>

<style scoped>
  button {
    margin: 10px;
  }
</style>