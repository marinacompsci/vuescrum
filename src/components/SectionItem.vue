<template>
  <div class="itemMinimal_container" :class="getPriorityColorClass">
    <div class="itemMinimal_container__infos">
      <div class="itemMinimal_title">{{ title }}</div>
      <div class="itemMinimal_container__infos">
        <div><b-badge variant="dark">{{ modifyId() }}</b-badge></div>
        <div><b-badge class="badge-custom" pill :variant="getPriorityColorClass">{{ priority.toUpperCase() }}</b-badge></div>
      </div>
    </div>
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
      if (this.priority === "high") return 'danger';
      else if (this.priority === "medium") return 'warning';
      else if (this.priority === "low") return 'light';
      else return null;
    }
  }

}
</script>

<style scoped>
.itemMinimal_container {
  background-color: rgba(80, 106, 122, 0.9);
  border-radius: 15px;
  color: rgb(232, 232, 232);
  padding: 10px;
  margin: 5px;
  text-align: left;
}
.itemMinimal_container__infos {
  display: flex;
  justify-content: space-between;
}
.badge-custom {
  margin: 0 5px;
}
.itemMinimal_title {
  margin-right: 10px;
}

</style>