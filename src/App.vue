<script setup lang="ts">
import {ref} from 'vue'
import Header from './components/Header/Header.vue'
import Content from  './components/Content/Content.vue'
import Footer from  './components/Footer/Footer.vue'
import './components/styles/app.scss'
</script>
<template id="app">
    <Header/>
    <Content/>
    <Footer/>
</template>

