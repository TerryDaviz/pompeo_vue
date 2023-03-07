<script setup lang="ts">
import {Ref, ref} from 'vue'
import ContentButton from './ContentButton.vue'
import PotteryCollectionItem from './PotteryCollectionItem.vue'
import '../styles/collection.scss'
import '../styles/section-names.scss'
import '../styles/content__button.scss'
const collectionButtonText = ref("view all products")
type Item = {
    imgSrc: string,
    itemName: string,
    price: number,
}
const itemsInfo: Ref<Item[]> = ref([
    <Item>{ imgSrc: 'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd7e1e364e913f38fed48_5bb3def89ab3aa39fda26d59_plate-1.png',
        itemName: 'Decor Plate', price: 65},
    <Item>{ imgSrc:'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd7f0e364e976af8fed4d_5bb3df47aa273fe65085a78f_oriento-663905-unsplash-p-1600.png',
        itemName: 'Mint Pottery', price: 75},
    <Item>{ imgSrc:'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd7f879491efbeb9d8269_5bb3d671edf33b1f76f5aa0d_modern-essentials-792823-unsplash.png',
        itemName: 'Set Of Potteries', price: 125},
    <Item>{ imgSrc:'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd804f8cd66eab8cc490c_5bb3febae6340f5ff015e85b_blouse.png',
        itemName: 'Orange Ceramic', price: 55},
    <Item>{ imgSrc:'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd80e7ddaf62b3e2460bb_5bb3cedbb3465c5181324caa_212-unsplash-(1).png',
        itemName: 'Dark Bowl', price: 115},
    <Item>{ imgSrc:'https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd819e364e903ba8fee0c_5bb3c9f370f1175d66fc5d5a_oriento-663881-unsplash.png',
        itemName: 'Square Pottery', price: 75},
])
</script>

<template>
    <div class="collection">
        <p class="section-name1"> Product Collections </p>
        <div class="collection__content">
            <div class="section-heading">
                <p class="section-name2"> Our online store </p>
                <p class="section-name3"> Pottery collection </p>
            </div>
            <div class="collection__content__items">
                <PotteryCollectionItem v-for="(item) in itemsInfo"
                    :img-src="item.imgSrc"
                    :item-name="item.itemName"
                    :price="item.price"/>
            </div>
            <ContentButton :props = "collectionButtonText"/>
        </div>
    </div>
</template>