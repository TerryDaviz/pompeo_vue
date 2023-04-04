<script setup lang="ts">
import {ref} from 'vue'
import '../styles/latest-news.scss'
import '../styles/section-names.scss'
import '../styles/section.scss'
import SubscribeModal from './SubscribeModal.vue'

const isSubmitted = ref(false)

const handleSubmit = () => {
    isSubmitted.value = !isSubmitted.value;
}

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
                <input type="submit" value="SUBSCRIBE" @click.prevent="handleSubmit"/>
                <SubscribeModal v-if="isSubmitted" v-model="isSubmitted" @click-event="handleSubmit"/>
                <label>
                    <input type="checkbox" name="cbx-sign-up" checked>
                    <p for="cbx-sign-up">Sign up for our newsletter</p>
                </label>
            </form>
        </div>
        <p class="section-name1"> Let's get in touch </p>
    </div>
</template>
