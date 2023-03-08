<script setup lang="ts">
const props = defineProps({
    imgSrc: String,
    title: String,
    info: String,
})
</script>

<template>
    <figure class="footer__content__row__item">
        <img :src="imgSrc"/>
        <figcaption>
            <p class="footer__content__row__item_title">{{title}}</p>
            <p class="footer__content__row__item_info">{{info}}</p>
        </figcaption>
    </figure>
</template>

