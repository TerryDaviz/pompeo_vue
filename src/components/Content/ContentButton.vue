<script setup lang="ts">

const buttonText = defineProps({
    props: String
})
</script>

<template>
    <button class="content__button"> {{buttonText.props.toUpperCase()}} </button> 
</template>

