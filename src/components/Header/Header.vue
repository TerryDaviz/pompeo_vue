<script setup lang="ts">
import {ref, computed, reactive} from 'vue'
import Menu from './Menu.vue'

const menuContent = ref(['home', 'about', 'shop', 'contact'])

</script>
<template id="Header">
<header>
<div>

    <Menu :props = "menuContent"/>

</div>

</header>
</template>
