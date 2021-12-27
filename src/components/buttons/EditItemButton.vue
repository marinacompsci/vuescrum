<template>
  <RoundButton :bClass="bClass" :title="title"></RoundButton>
</template>

<script>
import RoundButton from "./RoundButton";
export default {
  name: "EditItemButton",
  components: {
    RoundButton
  },
  props: {
    bClass: String,
    title: String
  }
}
</script>

<style scoped>

</style>