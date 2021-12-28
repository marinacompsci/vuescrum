<template>
  <b-row cols="1"
         cols-sm="1"
         class="custom-section"
  ><b-col><SectionHeader :title="title" :icon="icon"/></b-col>
    <b-col><SectionBody/></b-col>
    <b-col>
      <b-row align-h="center">
        <b-col cols="content" sm="content"><SectionControl :sourceType="sourceType"/></b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import SectionControl from "./SectionControl";

export default {
  name: "Section",
  props: {
    title: String,
    icon: String,
    sourceType: String
  },
  components: {
    SectionHeader,
    SectionBody,
    SectionControl
  }
}
</script>

<style scoped>
.custom-section {
  min-width: 300px;
}
</style>