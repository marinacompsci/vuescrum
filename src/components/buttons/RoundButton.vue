<template>
  <span>
    <b-button pill
        :variant="bClass"
        @click="showModal"
    >{{ buttonTitle }}</b-button>
    <ItemModal
        :source-type="sourceType"
        :type="type"
        :modalShow="modalIsShown"
        :modalTitle="modalTitle"
        v-on:add-item-modal="addItem"
        v-on:edit-item-modal="editItem"
    />
  </span>
</template>

<script>
import ItemModal from "../ItemModal";

export default {
  name: "RoundButton",
  props: {
    bClass: String,
    sourceType: String,
    type: String,
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
    addItem(data) {
      this.$emit('add-item', data);
    },
    editItem(data) {
      this.$emit('edit-item', data);
    },
    showModal() {
      this.modalShow = !this.modalShow;
    },
  },
  computed: {
    buttonTitle() {
      switch(this.type) {
        case "edit":
          return "Edit";
        case "add":
          return "Add";
        default:
          return "";
      }
    },
    modalTitle() {
      return this.buttonTitle + ' ' + 'Item';
    },
    modalIsShown() {
      return this.modalShow
    }
  },
}
</script>

<style scoped>
  button {
    margin: 10px;
  }
</style>