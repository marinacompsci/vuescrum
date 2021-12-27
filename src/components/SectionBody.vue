<template>
  <div class="custom-container">
    <div class="content">
      <SectionItem title="Refactor Backend" id="1255" priority="high"></SectionItem>
      <SectionItem title="Make Home Page Responsive" id="5441" priority="medium"></SectionItem>
      <SectionItem title="Update to VueJs 3" id="3055" priority="low"></SectionItem>
      <SectionItem title="Write Acceptance Tests" id="8263" priority="high"></SectionItem>
    </div>
  </div>
</template>

<script>
import SectionItem from "./SectionItem";
export default {
  name: "SectionBody",
  components: {
    SectionItem
  }
}
</script>

<style scoped>
.custom-container {
  background-color: rgb(51, 51, 51);
  border-radius: 15px;
  color: rgb(232, 232, 232);
  padding: 30px 10px;
  margin: 5px;
  border-style: dashed;
  border-width: thin;
}

.content {

}
</style>