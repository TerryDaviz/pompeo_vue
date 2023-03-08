<script setup lang="ts">
import {ref} from 'vue'
//import ContentButton from './ContentButton.vue'
import '../styles/latest-news.scss'
//import '../styles/section-names.scss'
//import '../styles/content__button.scss'
import '../styles/section.scss'
const newCollectionButtonText = ref("new collection")
</script>

<template>
    <div class="latest-news section">
        <div class="latest-news__content">
            <div class="latest-news__content__image"></div>
            <div class="section-heading">
                <p class="section-name2"> Latest news </p>
                <p class="section-name3"> Latest News <span>&</span> New Updates </p>
            </div>

            <form class="latest-news__content__form">
                <input type="text" maxlength="256" placeholder="Enter your email" required/>
                <input type="submit" value="SUBSCRIBE"/>
                <label>
                    <input type="checkbox" name="cbx-sign-up">
                    <p for="cbx-sign-up">Sign up for our newsletter</p>
                </label>
            </form>
        </div>
        <p class="section-name1"> Let's get in touch </p>
    </div>
</template>