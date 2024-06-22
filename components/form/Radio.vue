<template>
    <div class="form-group">
      <label>{{ label }}</label>
      <div v-for="option in options" :key="option.value">
        <input
          type="radio"
          :id="option.value"
          :value="option.value"
          :name="name"
          v-model="modelValue"
          @change="$emit('input', $event.target.value)"
        />
        <label :for="option.value">{{ option.text }}</label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      modelValue: {
        type: [String, Number],
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  </style>
  