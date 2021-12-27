<template>
  <b-row cols="1" cols-sm="1">
    <b-col>
      <SectionHeader :title="title" :icon="icon"></SectionHeader>
    </b-col>
    <b-col>
      <SectionBody></SectionBody>
    </b-col>
    <b-col>
      <b-row align-h="center">
        <b-col cols="content" sm="content">
          <SectionControl></SectionControl>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import SectionControl from "./SectionControl";

export default {
  name: "BacklogSection",
  props: {
    title: String,
    icon: String
  },
  components: {
    SectionHeader,
    SectionBody,
    SectionControl
  }
}
</script>

<style scoped>

</style>