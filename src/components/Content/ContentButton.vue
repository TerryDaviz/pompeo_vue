<script setup lang="ts">
const props = defineProps({
    buttonText: String,
    href: String,
})
function showMessage(innerText: any){
    console.log(innerText);        
}
</script>

<template>
    <a :href="href" @click="showMessage(buttonText)" class="content__button"> {{buttonText?.toUpperCase()}} </a> 
</template>

