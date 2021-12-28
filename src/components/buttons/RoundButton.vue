<template>
  <span>
    <b-button pill
              :variant="bClass"
              @click="emitClickEvent"
    >{{ title }}</b-button>
    <ItemModal :modalShow="modalShow" :source-type="sourceType" :type="type" />
  </span>
</template>

<script>
import ItemModal from "../ItemModal";

export default {
  name: "RoundButton",
  props: {
    bClass: String,
    sourceType: String,
    type: String
  },
  components: {
    ItemModal
  },
  data() {
    return {
      modalShow: false
    }
  },
  methods: {
    emitClickEvent() {
      this.modalShow = !this.modalShow;
      switch(this.type) {
        case "edit":
          this.$emit('edit-item', {title: 'Edit From' + ' ' + this.sourceType});
          break;
        case "add":
          this.$emit('add-item', {title: 'Add From' + ' ' + this.sourceType});
          break;
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
    },
  },
}
</script>

<style scoped>
  button {
    margin: 10px;
  }
</style>