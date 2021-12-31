<template>
  <b-modal v-model="modalShow"
           :modalTitle="modalTitle"
           ok-only
           ok-title="Save"
           ok-variant="success"
           @ok="sendFormData"
  >
    <!-- Title Input Field -->
    <div role="group">
      <label for="input-live">Title:</label>
      <b-form-input
          id="input-live"
          v-model="title"
          :state="titleState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Item's title"
          trim
      />
      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="input-live-feedback">
        Title field cannot be empty
      </b-form-invalid-feedback>
    </div>

    <!-- Priority Select -->
    <div role="group">
      <label for="priority-input">Priority:</label>
      <b-form-select
          id="priority-input"
          v-model="priority"
          :options="priorityOptions"
          />
    </div>

    <!-- Workload Select -->
    <div role="group">
      <label for="workload-input">Workload:</label>
      <b-form-select
          id="workload-input"
          v-model="workload"
          :options="workloadOptions"
      />
    </div>

    <!-- Tag Select -->
    <div role="group">
      <label for="tag-input">Tag:</label>
      <b-form-select
          id="tag-input"
          v-model="tag"
          :options="tagOptions"
      />
    </div>
    <!-- Description Textarea -->
    <div>
      <label for="textarea-default">Description:</label>
      <b-form-textarea
            :state="descriptionState"
            v-model="description"
            id="textarea-default"
            placeholder="Item's Description"
      ></b-form-textarea>
      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="textarea">
        Description must have at least 20 characters
      </b-form-invalid-feedback>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ItemModal",
  props: {
    sourceType: String,
    type: String,
    modalShow: Boolean,
    modalTitle: String
  },
  data() {
    return {
      title: '',
      description: '',
      priority: null,
      workload: null,
      tag: null,
      priorityOptions: [
        { value: null, text: 'Please select an item' },
        { value: 'low', text: 'Low' },
        { value: 'medium', text: 'Medium' },
        { value: 'high', text: 'High' },
      ],
      workloadOptions: [
        { value: null, text: 'Please select an item' },
        { value: '1', text: '1 Workday' },
        { value: '2', text: '2 Workdays' },
        { value: '3', text: '3 Workdays' },
        { value: '4', text: '4 Workdays' },
        { value: '5', text: '5 Workdays' },
        { value: 'more', text: '5+ Workdays' },
      ],
      tagOptions: [
        { value: null, text: 'Please select an item' },
        { value: 'frontend', text: 'Frontend' },
        { value: 'backend', text: 'Backend' },
        { value: 'app', text: 'App' },
      ]

    }
  },
  methods: {
    sendFormData() {
      this.$emit(this.type + '-item-modal', {
            title: this.title,
            priority: this.priority,
            workload: this.workload,
            tag: this.tag,
            description: this.description
      });
    }
  },
  computed: {
    titleState() {
      return this.title.length > 0
    },
    descriptionState() {
      return this.description.length >= 20
    }
  }
}
</script>

<style scoped>
</style>