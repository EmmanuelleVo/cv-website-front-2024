<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
      <LayoutAppHeader />
      <NuxtPage />
      <LayoutAppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const title = ref('CV - Emmanuelle')
  const description = ref('This is Emmanuelle Vo’CV website.')  

  useSeoMeta({
    title,
    description: () => `description: ${description.value}`,
    keywords: 'Emmanuelle, Vo, CV, Web, Design, Development, Website',
  })
</script>

<!-- transition between pages -->
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1px);
}
</style>