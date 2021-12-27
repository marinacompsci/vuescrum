<template>
    <b-button pill :variant="bClass" @click="action({title: 'Foo Title'})">
      {{ title }}
    </b-button>
</template>

<script>
import addItem from "../../actions/addItem";

export default {
  name: "RoundButton",
  props: {
    title: String,
    bClass: String,
  },
  methods: {
    action: addItem
  }
}
</script>

<style scoped>
  button {
    margin: 10px;
  }
</style>