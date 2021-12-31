<template>
  <div class="custom-container">
    <div class="content">
      <SectionItem v-for="(item, idx) in items"
                   :title="item.title"
                   :id="Math.random() * 1000"
                   :priority="item.priority"
                   :key="idx"/>
    </div>
  </div>
</template>

<script>
import SectionItem from "./SectionItem";
export default {
  name: "SectionBody",
  components: {
    SectionItem
  },
  props: {
    sourceType: String
  },
  computed: {
    items() {
      console.log('sourceType: ' + this.sourceType);
      if (this.sourceType === 'backlog') return this.$store.state.backlog;
      else if (this.sourceType === 'progress') return this.$store.state.progress;
      else if (this.sourceType === 'completed') return this.$store.state.completed;
      else return [{title: 'Empty'}];
    }
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