<script setup lang="ts">
import footer from '../styles/footer.module.css'

const props = defineProps({
    imgSrc: String,
    title: String,
    info: String,
})
</script>

<template>
    <figure :class="footer.footer__content__row__item">
        <img :src="imgSrc"/>
        <figcaption>
            <p :class="footer.footer__content__row__item_title">{{title}}</p>
            <p :class="footer.footer__content__row__item_info">{{info}}</p>
        </figcaption>
    </figure>
</template>

