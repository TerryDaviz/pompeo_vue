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
        <div class="introduction__textContent_wrapper">
          <p class="introduction__pompeoPottery"> Pompeo Pottery </p>
          <h1 class = "introduction__textContent_bold">
          Unique Porcelain 
            <span class="introduction__logoText">&</span></h1>
       <h1 class = "introduction__textContent_bold" > &#13; Stone Collection</h1>
        </div>
        </TextContent>
        <div class=" introduction__pot_image"></div>
        <div class="content__button_wrapper">
            <ContentButton :props = "introductionButtonText"/>
        </div>
    </div>
</template>
