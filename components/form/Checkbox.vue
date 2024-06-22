<template>
    <div class="form-group">
      <label>
        <input
          type="checkbox"
          :checked="value"
          @change="$emit('input', $event.target.checked)"
        />
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
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
  .form-group {
    margin-bottom: 1rem;
  }
  </style>
  