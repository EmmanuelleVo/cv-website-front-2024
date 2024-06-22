<script setup lang="ts">
const props = defineProps(['foobar'])

console.log(props.foobar)
</script>

<template>
    <div>
        <p>Access me /parent/child</p>
    </div>
</template>