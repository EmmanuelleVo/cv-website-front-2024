<template>
    <div class="toggle-switch">
      <input
        type="checkbox"
        :id="id"
        :checked="value"
        @change="$emit('input', $event.target.checked)"
      />
      <label :for="id">{{ label }}</label>
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
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  .toggle-switch {
    display: flex;
    align-items: center;
  }
  .toggle-switch input {
    margin-right: 0.5rem;
  }
  </style>
  