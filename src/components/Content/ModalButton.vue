<script setup lang="ts">
 defineProps({
        isPressed:Boolean,
        }) 
const hanleClick = () => {
    console.log(isPressed);
}
</script>

<template>
    <button class="subscribeModal__button" @click="isPressed = !isPressed">OK</button>
</template>
