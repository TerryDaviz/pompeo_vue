<script setup lang="ts">
 defineProps({
        isPressed:Boolean,
        }) 
const hanleClick = ()
</script>

<template>
    <button class="subscribeModal__button" @click.prevent="isPressed = !isPressed">OK</button>
</template>
