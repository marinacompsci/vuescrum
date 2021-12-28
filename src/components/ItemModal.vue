<template>
  <b-modal v-model="modalShow"
           :title="title"
           ok-only
           ok-title="Save"
           ok-variant="success"
  ><h6>New Item</h6>
  </b-modal>
</template>

<script>
export default {
  name: "ItemModal",
  props: {
    sourceType: String,
    type: String,
    modalShow: Boolean
  },
  computed: {
    title() {
      if (this.type === 'add') return 'Add New Item'
      else if (this.type === 'edit') return 'Edit Item';
      else return ''
    }
  }
}
</script>

<style scoped>
</style>