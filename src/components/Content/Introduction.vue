<script setup lang="ts">
import {ref} from 'vue'
import ContentButton from './ContentButton.vue'
import '../styles/introduction.scss'
import '../styles/content__button.scss'
import TextContent from './TextContent.vue'
const introductionButtonText = ref("shop collection")
</script>

<template>
    <div class="introduction">
        <TextContent>
          <p class="introduction__pompeoPottery"> Pompeo Pottery </p>
          <h1 class = "introduction__textContent-bold"> Unique Porcelain </h1>
        </TextContent>
        <div class=" introduction__pot-image"></div>
        <ContentButton :props = "introductionButtonText"/>
    </div>
</template>