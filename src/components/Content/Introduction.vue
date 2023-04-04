<script setup lang="ts">
import {ref} from 'vue'
import ContentButton from './ContentButton.vue'
import introduction from '../styles/introduction.module.css'
import '../styles/content__button.scss'
import TextContent from './TextContent.vue'
const introductionButtonText = ref("shop collection")
</script>

<template>
    <div :class="introduction.introduction">
        <TextContent>
        <div :class="introduction.introduction__textContent_wrapper">
          <p :class="introduction.introduction__pompeoPottery"> Pompeo Pottery </p>
          <h1 :class = "introduction.introduction__textContent_bold">
          Unique Porcelain 
            <span :class="introduction.introduction__logoText">&</span></h1>
       <h1 :class = "introduction.introduction__textContent_bold" > &#13; Stone Collection</h1>
        </div>
        </TextContent>
        <div :class=" introduction.introduction__pot_image"></div>
        <div :class="introduction.content__button_wrapper">
            <ContentButton :button-text="introductionButtonText" :href="'#collection-section-anchor'"/>
        </div>
    </div>
</template>
