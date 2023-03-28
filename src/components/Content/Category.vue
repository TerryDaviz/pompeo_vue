<script setup lang="ts">
import {Ref, ref} from 'vue'
import '../styles/collection.scss'
import '../styles/section-names.scss'
import '../styles/content__button.scss'
import '../styles/section.scss'
import '../styles/vmp.scss'
import '../styles/categories.scss'
import CategoryItem from './CategoryItem.vue'
import TextContent from './TextContent.vue'
type Catalog={
    imgSrc:string,
    itemName:string,
    color:string
}
const itemsInfo:Ref<Catalog[]>=ref(
    [
    <Catalog>{ imgSrc: 'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bb7874064724534dc9870d0_icons8-pottery-64.png',
        itemName: 'Vases', color:'#E4B366'},
    <Catalog>{ imgSrc:'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bb7876aedf07b21c27e7b66_icons8-salad-bowl-64.png',
        itemName: 'Mugs', color:'#F05B10'},
    <Catalog>{ imgSrc:'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bb78d5e9e1f337308de45cf_ICON-22.png',
        itemName: 'Plates', color:'#A21010'},
    ]
)
</script>
<template>
    <div class="collection section">
        <p class="section-name1">Hand Craft Pottery</p>
        <div class="collection">
            <div class="section-heading">
                <p class="section-name2"> Product categories</p>
                <p class="section-name3"> Porcelain<span>&</span>Pottery </p>
            </div>
            <div class="category">
                <div class="VMP">
                    <CategoryItem
                    v-for="(cat) in itemsInfo"
                    :img-src="cat.imgSrc"
                    :item-name="cat.itemName"
                    :style="{backgroundColor:cat.color}"/>
                </div>
                <div class="blockA">
                    <TextContent>
                        <div class="categories__textContent_wrapper">
                        <h1 class="categories__textContent_bold">
                            Hand Grafted Pottery since 1990
                        </h1> 
                        <p class="categories__textContent"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
                        </p>
                        </div>
                    </TextContent>
                </div>
                <div class="blockB">
                    <TextContent>
                        <div class="categories__textContent_wrapper">
                        <h1 class="categories__textContent_bold">
                            We Provide Premium Pottery Produts
                        </h1> 
                        <p class="categories__textContent"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
                        </p>
                        </div>
                    </TextContent>
                </div>
            </div>
        </div>
    </div>
</template>