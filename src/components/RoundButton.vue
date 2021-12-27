<template>
    <b-button pill :variant="buttonTypeClass()">
      {{ buttonTitle() }}
    </b-button>
</template>

<script>
export default {
  name: "RoundButton",
  props: {
    title: String,
    type: String
  },
  methods: {
    buttonTypeClass() {
      let btnClass;
      if (this.type === 'edit') btnClass = "outline-danger";
      else if (this.type === 'add') btnClass = "outline-success";
      return btnClass;
    },
    buttonTitle() {
      let btnClass;
      if (this.type === 'edit') btnClass = "Edit";
      else if (this.type === 'add') btnClass = "Add";
      return btnClass;
    }
  }

}
</script>

<style scoped>
  button {
    margin: 10px;
  }
</style>