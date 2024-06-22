<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <select
        :id="id"
        :value="value"
        @change="$emit('input', $event.target.value)"
        class="form-control"
      >
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      value: {
        type: [String, Number],
        default: ''
      },
      options: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  .form-control {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  </style>
  