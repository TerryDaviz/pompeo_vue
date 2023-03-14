<script setup lang="ts">
import {ref} from 'vue' 
import '../styles/menu.scss'
const menuContent = defineProps({
    props:Array 
        })
</script>

<template id="Header__Menu">
        <p class="header__logo">
            Pompeo
        </p>
    <nav class="header__menu">
        <ul>
            <li v-for = "(menuItem,index) in menuContent.props" :key = "index">
                {{menuItem}}
            </li>
        </ul>
        <span id="header__shopping-cart">
            <i class="fa fa-shopping-cart"> </i> 
            cart
        </span>
    </nav>
</template>

