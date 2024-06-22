<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
          <NuxtLink v-if="!item.active" :to="item.href">{{ item.text }}</NuxtLink>
          <span v-else>{{ item.text }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .breadcrumb {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: ">";
  }
  </style>
  