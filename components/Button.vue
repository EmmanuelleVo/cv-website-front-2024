<template>
    <button :class="buttonClass" @click="onClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button'
      },
      buttonClass: {
        type: String,
        default: 'btn'
      }
    },
    methods: {
      onClick(event) {
        this.$emit('click', event)
      }
    }
  }
  </script>
  
  <style scoped>
  .btn {
    /* Add your button styles here */
  }
  </style>
  