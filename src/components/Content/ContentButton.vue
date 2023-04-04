<script setup lang="ts">

const props = defineProps({
    buttonText: String,
    href: String,
})

</script>

<template>
    <a :href="href"  class="content__button"> {{buttonText.toUpperCase()}} </a> 
</template>

