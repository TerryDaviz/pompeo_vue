<script setup lang="ts">
const props = defineProps({
    imgSrc: String,
    itemName: String,
    price: Number,
})
</script>

<template>
    <figure class="collection__content__items__item">
        <div class="collection__content__items__item_img-block">
            <img :src="imgSrc"/>
        </div>
        <figcaption>
            <p class="collection__content__items__item_name">{{itemName}}</p>
            <p class="collection__content__items__item_price">$ {{price?.toFixed(2)}} USD</p>
        </figcaption>
    </figure>
</template>