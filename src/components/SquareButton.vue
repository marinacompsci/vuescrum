<template>
  <b-button :variant="type" @click="action">{{ title }}</b-button>
</template>

<script>
export default {
  name: "SquareButton",
  props: {
    type: String,
    action: Function
  }
}
</script>

<style scoped>

</style>