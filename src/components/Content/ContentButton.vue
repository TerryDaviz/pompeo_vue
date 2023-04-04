<script setup lang="ts">
import contentButton from '../styles/content__button.module.css'

const props = defineProps({
    buttonText: String,
    href: String,
})

</script>

<template>
    <a :href="href" :class=contentButton.content__button> {{buttonText.toUpperCase()}} </a> 
</template>
