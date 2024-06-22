<template>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="link in links" :key="link.href">
          <NuxtLink :to="link.href" class="nav-link">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      links: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    /* Add your navbar styles here */
  }
  .navbar-nav {
    list-style: none;
    display: flex;
    padding: 0;
  }
  .nav-item {
    margin-right: 1rem;
  }
  .nav-link {
    text-decoration: none;
    color: inherit;
  }
  </style>
  