<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <textarea
        :id="id"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        class="form-control"
      ></textarea>
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
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
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
  