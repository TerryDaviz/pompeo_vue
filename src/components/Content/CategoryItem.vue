<script setup lang="ts">
const props = defineProps({
    imgSrc: String,
    itemName: String,
    color: String,
})
</script>

<template>
    <div class="VMP_item" v-bind:style="{backgroundColor:color}">
        <img :src="imgSrc"/>
        <p>{{itemName}}</p>
    </div>
</template>