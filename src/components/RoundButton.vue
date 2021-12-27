<template>
    <b-button pill :variant="bClass">
      {{ title }}
    </b-button>
</template>

<script>
export default {
  name: "RoundButton",
  props: {
    title: String,
    bClass: String
  }
}
</script>

<style scoped>
  button {
    margin: 10px;
  }
</style>