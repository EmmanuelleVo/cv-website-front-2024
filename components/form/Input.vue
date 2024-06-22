<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        class="form-control"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text'
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
  