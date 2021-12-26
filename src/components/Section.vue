<template>
  <div class="section_flex">
    <SectionHeader :title="title" :icon="icon"></SectionHeader>
    <SectionBody></SectionBody>
    <SectionControl></SectionControl>
  </div>
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
.section_flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>