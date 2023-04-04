<script setup lang="ts">
import {ref, computed, reactive} from 'vue'
import Menu from './Menu.vue'
import header from '../styles/menu.module.css'

const menuContent = ref(['home', 'about', 'shop', 'contact'])

</script>
<template id="Header">
    <header>
        <div :class="header.header_wrapper">
            <Menu :props = "menuContent"/>
        </div>
    </header>
</template>
