<script setup lang="ts">
import {Ref, ref} from "vue"
import RawItem from "./RowItem.vue"
import footerStyle from '../styles/footer.module.css'
import section from '../styles/section.module.css'
type FooterRawItem = {
    imgSrc: string,
    title: string,
    info: string,
}
const rawItems: Ref<FooterRawItem[]> = ref([
    <FooterRawItem>{ imgSrc: 'https://assets.website-files.com/5ba96977bf120e1b45986c06/5bc61f43b6ba2a3332ee30f4_icons8-secured-letter-80%20(1).png',
        title: 'email', info: 'pompeopotery@gmail.com'},
    <FooterRawItem>{ imgSrc: 'https://assets.website-files.com/5ba96977bf120e1b45986c06/5bc61fa61d93fd9e7976d4af_icons8-marker-80%20(1).png',
        title: 'find', info: 'Central Park, Manhattan\nNew York, 1101'},
    <FooterRawItem>{ imgSrc: 'https://assets.website-files.com/5ba96977bf120e1b45986c06/5bc61f741d93fdca4176d416_icons8-ringer-volume-80.png',
        title: 'call', info: '+1 292 345 678'},
])
</script>

<template id="footer">
    <footer :class="[section.section, footerStyle.section]">
        <div :class="footerStyle.footer__content">
            <a :class="footerStyle.footer__content__name" href="#"> Pompeo </a>
            <p :class="footerStyle.footer__content__about"> I have always striven to fix beauty in wood, stone,
                <br/>glass or pottery, that has been my creed.
            </p>
            <div :class="footerStyle.footer__content__row">
                <RawItem v-for="(item, key) in rawItems" :key="key"
                    :img-src="item.imgSrc"
                    :title="item.title"
                    :info="item.info"/>
            </div>
        </div>
        <div :class="footerStyle.footer__subfooter">
            <p>Template design by <a href="#">Dorian Hoxha</a> - <a href="#">Image License Info</a> Powered by <a href="#">Webflow</a></p>
        </div>
    </footer>
</template>
