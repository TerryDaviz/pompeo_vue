<script setup lang="ts">
import {ref} from 'vue'
import ContentButton from './ContentButton.vue'
import '../styles/new-collection.scss'
import '../styles/section-names.scss'
import '../styles/content__button.scss'
import '../styles/section.scss'
const newCollectionButtonText = ref("new collection")
</script>

<template>
    <div class="new-collection section">
        <div class="new-collection__content">
            <div class="section-heading">
                <p class="section-name2"> Pompeo pottery </p>
                <p class="section-name3"> Ready to start shopping? </p>
            </div>
            <p class="new-collection__content__text">Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>. Suspendisse varius enim in eros elementum.</p>
                <ContentButton :button-text = "newCollectionButtonText"/>
        </div>
    </div>
</template>