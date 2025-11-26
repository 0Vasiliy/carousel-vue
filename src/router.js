import VueRouter from 'vue-router'
import vCarouselMain from '@/components/carousel/vCarousel-main.vue';

export default new VueRouter({
    routes:[   
        {
            path: '/',
            component: vCarouselMain,
        },              
    ],
    // mode: 'history',
    // base:"/",
    mode: 'hash', // hash mode для работы на GitHub Pages
    base: process.env.NODE_ENV === 'production' ? '/modal-get-online-vet-deploy/' : '/',
})
