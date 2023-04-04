<script setup lang="ts">
import {ref} from 'vue'
import ContentButton from './ContentButton.vue'
import newCollection from '../styles/new-collection.module.css'
import sectionNames from '../styles/section-names.module.css'
import section from '../styles/section.module.css'
const newCollectionButtonText = ref("new collection")
</script>

<template>
    <div :class="[newCollection['new-collection'], section.section]">
        <div :class="newCollection['new-collection__content']">
            <div>
                <p :class="[sectionNames['section-name2'],newCollection['section-name2']]"> Pompeo pottery </p>
                <p :class="[sectionNames['section-name3'],newCollection['section-name3']]"> Ready to start shopping? </p>
            </div>
            <p :class="newCollection['new-collection__content__text']">Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>. Suspendisse varius enim in eros elementum.</p>
            <ContentButton :button-text = "newCollectionButtonText"
                :class="newCollection.content__button"/>
        </div>
    </div>
</template>
