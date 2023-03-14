<script setup lang="ts">

const buttonText = defineProps({
    props: String
})
function showMessage(innerText){
    console.log(innerText);        
}
</script>

<template>
    <button @click="showMessage(buttonText.props)" class="content__button"> {{buttonText.props.toUpperCase()}} </button> 
</template>

