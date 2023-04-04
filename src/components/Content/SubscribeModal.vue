<script setup lang="ts">
import {ref} from 'vue'
import ModalButton from './ModalButton.vue'
import modalWindow from '../styles/modal-window.module.css'

defineProps(['modelValue','isSubmitted'])
defineEmits(['clickEvent','update:modelValue'])
const isPressed = ref(false)

</script>
<template>
    <div :class="modalWindow.subscribeModal_wrapper" >
        <div :class="modalWindow.subscribeModal__overlay">
            <div :class="modalWindow.subscribeModal__window">
        <div :class="modalWindow.subsribeModal__button_wrapper">
           <button :class="modalWindow.subscribeModal__cancelButton" @click="$emit('clickEvent')"> <img  src="../styles/icons8-cancel.svg" alt="xd"></button>
            </div>
                <p :class="modalWindow.subscribeModal__text">
                    we have sent you a verification email, please check it to complete the subscription process
                </p>
                <button :class="modalWindow.subscribeModal__button" @click="$emit('clickEvent')">OK</button>
             </div>
        </div>
    </div>
</template>

