<script setup lang="ts">
import {ref} from 'vue' 
/* import '../styles/menu.scss' */
import styles from '../styles/menu.module.css' 
const menuContent = defineProps({
    props:Array 
        })
</script>

<template :id="Header__Menu">
        <p :class="styles.header__logo">
            Pompeo
        </p>
    <nav :class="styles.header__menu">
        <ul>
            <li v-for = "(menuItem,index) in menuContent.props" :key = "index">
                {{menuItem}}
            </li>
        </ul>
        <span :id="header__shopping-cart">
            <i class="fa fa-shopping-cart"> </i> 
            cart
        </span>
    </nav>
</template>

