<script setup lang="ts">
import {ref} from 'vue'
import ModalButton from './ModalButton.vue'
import '../styles/modal-window.scss'

defineProps(['modelValue','isSubmitted'])
defineEmits(['clickEvent','update:modelValue'])
const isPressed = ref(false)

</script>
<template>
    <div class="subscribeModal_wrapper" >
        <div class="subscribeModal__overlay">
            <div class="subscribeModal__window">
        <div class="subsribeModal__button_wrapper">
           <button class="subscribeModal__cancelButton" @click="$emit('clickEvent')"> <img  src="../styles/icons8-cancel.svg" alt="xd"></button>
        </div>
                <p class="subscribeModal__text">
                    we have sent you a verification email, please check it to complete the subscription process
                </p>
                <button class="subscribeModal__button" @click="$emit('clickEvent')">OK</button>
             </div>
        </div>
    </div>
</template>

