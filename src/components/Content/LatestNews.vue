<script setup lang="ts">
import {ref} from 'vue'
import latestNews from '../styles/latest-news.module.css'
import sectionNames from '../styles/section-names.module.css'
import section from '../styles/section.module.css'
import SubscribeModal from './SubscribeModal.vue'

const isSubmitted = ref(false)

const handleSubmit = () => {
    isSubmitted.value = !isSubmitted.value;
}

</script>

<template>
    <div :class="[latestNews['latest-news'], section.section]">
        <div :class="latestNews['latest-news__content']">
            <div :class="latestNews['latest-news__content__image']"></div>
            <div>
                <p :class="[sectionNames['section-name2'],latestNews['section-name2']]"> Latest news </p>
                <p :class="[sectionNames['section-name3'],latestNews['section-name3']]"> Latest News <span>&</span> New Updates </p>
            </div>

            <form :class="latestNews['latest-news__content__form']">
                <input type="text" maxlength="256" placeholder="Enter your email" required/>
                <input type="submit" value="SUBSCRIBE" @click.prevent="handleSubmit"/>
                <SubscribeModal v-if="isSubmitted" v-model="isSubmitted" @click-event="handleSubmit"/>
                <label>
                    <input type="checkbox" name="cbx-sign-up" checked>
                    <p for="cbx-sign-up">Sign up for our newsletter</p>
                </label>
            </form>
        </div>
        <p :class="[sectionNames['section-name1'],latestNews['section-name1']]"> Let's get in touch </p>
    </div>
</template>
