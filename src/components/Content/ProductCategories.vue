<script setup lang="ts">
    import {ref} from 'vue';
    import '../styles/categories.scss'
    import categories from '../styles/categories.module.css'

</script>

<template id="">
    <div :class="categories.categories">
        <div :class="categories.categories__image_wrapper">
            <img :class="categories.categories__image" src="https://assets.website-files.com/5ba96977bf120e1b45986c06/5bb9668024337c19082edcaf_orientovase.png" >
        </div>
        <TextContent>
            <div :class="categories.categories__textContent_wrapper">
               <h1 :class="categories.categories__textContent_bold">
                    Gold & Black Pottery
               </h1> 
               <p :class="categories.categories__textContent"> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
                    incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco
                    laboris nisi ut aliquip ex ea commodo consequatuisaute.
                    <span :class="categories.categories__viewDetails">View Details</span>
               </p>
            </div>
        </TextContent>
     </div> 
     <div :class="categories.categories">
        <TextContent>
            <div :class="categories.categories__textContent_wrapper">
               <h1 :class="categories.categories__textContent_bold">
                    Orange Ceramic
               </h1> 
               <p :class="categories.categories__textContent"> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
                    incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco
                    laboris nisi ut aliquip ex ea commodo consequatuisaute.
                    <span :class="categories.categories__viewDetails">View Details</span>
               </p>
            </div>
        </TextContent>
        <div :class="categories.categories__image_wrapper">
            <img :class="categories.categories__image2" src="https://assets.website-files.com/5ba96977bf120e1b45986c06/5bb381e8f20c2e1db6f8800c_blouse.png">
        </div>
     </div>
</template>
