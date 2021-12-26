<template>
  <div class="container" :class="getPriorityColorClass">
    <h6>{{ title }}  <b-badge variant="dark">{{ modifyId() }}</b-badge></h6>
  </div>
</template>

<script>

export default {
  name: "ItemMinimal",
  props: {
    title: String,
    id: String,
    priority: String,
  },
  methods: {
    modifyId() {
      return '#' + this.id;
    }
  },
  computed: {
    getPriorityColorClass() {
      if (this.priority === "high") return 'highPriority';
      else if (this.priority === "medium") return 'mediumPriority';
      else if (this.priority === "low") return 'lowPriority';
      else return null;
    }
  }

}
</script>

<style scoped>
h6 {
  margin-bottom: 0;
}
.container {
  color: rgb(232, 232, 232);
  padding: 10px;
  border-radius: 15px;
  margin: 5px;
}
.highPriority {
  background-color: #c42042;
}
.mediumPriority {
  background-color: #c76210;
}
.lowPriority {
  background-color: #c5a328;
}

</style>