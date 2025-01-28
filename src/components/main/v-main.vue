<template >
    <div class="v-main">
        <div class="portfolio" id="portfolio_id2">
        <div class="container">
            <h2 class="title title_fz16 title__section-title">Портфолио</h2>
            <div class="title title_fz36 title__section-subtitle">Мои <span>VUE</span> работы</div>
            <div class="divider"></div>
            <div class="portfolio__wrapper">
                <router-link to="/vModal" class="portfolio__item">
                    <img src="@/assets/img/works/vue2_form.jpg" alt="Онлайн форма"> 
                    <h4>Desctop и Mobile</h4>                                
                </router-link>  
                <router-link to="/vCarouselMain" class="portfolio__item">
                    <img src="@/assets/img/works/vue-carusel.jpg" alt="Карусель">  
                    <h4>Desctop и Mobile</h4>                 
                </router-link>  
                <a v-bind:href="link" class="portfolio__item">
                    <img src="@/assets/img/works/liss.jpg" alt="Ветклиника">
                    <h4>Desctop и Mobile</h4>                   
                </a>  
                <a v-bind:href="link2" class="portfolio__item">
                    <img src="@/assets/img/works/online.jpg" alt="Онлайн запись"> 
                    <h4>Desctop и Mobile</h4>                  
                </a>  
                <a v-bind:href="link3" class="portfolio__item">
                    <img src="@/assets/img/works/cargo.jpg" alt="Онлайн запись"> 
                    <h4>Desctop и Mobile</h4>                  
                </a> 
                <a v-bind:href="link4" class="portfolio__item">
                    <img src="@/assets/img/works/canban.jpg" alt="Канбан доска"> 
                    <h4>Desctop</h4>                  
                </a>      
            </div>           
        </div>
    </div>
    </div>
</template>
<script>

export default {
    name: 'vMain',
    data(){
        return{
            link: 'https://www.vetlis.ru/',
            link2: 'http://m911026o.beget.tech/',
            link3: 'https://0vasiliy.github.io/cargo/',
            link4: 'https://0vasiliy.github.io/canban-task/'
        }
    }

}
</script>
<style scoped lang="scss">
    .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 60px;
    &_fz16 {
        font-size: 16px;
        line-height: 24px;
    }
    &_fz36 {
        font-size: 36px;
    }
    &__section-title {
        position: relative;
        text-align: center;
        &:before {
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    &__section-subtitle {
        text-align: center;    
        span{
            color: teal;
        }
        }
}
.portfolio {
    padding-top: 50px;
    &__wrapper {
        margin-top: 20px;
        display: grid;
        grid-template: repeat(1, 280px) / repeat(4, 280px);
        grid-auto-rows: 280px;
        gap: 25px 5px;
        .vertical {
            grid-row: 1 / 3;
            grid-column:  4/ 5;
        }
        .horizonal {
            grid-row: 2 / 3;
            grid-column: 2 / 4;
        }
    }
    &__item {
        transition: all 0.6s;
        border: 3px solid teal;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        h4{
            display: inline-block;
            margin-top: 3px;
            font-size: 16px;
            text-decoration: none !important;
        }
        &:hover{
            transform: scale(1.07);
        }
    }
}
.v-main{
    padding-bottom: 50px;
}
@media(max-width:1320px){
    .portfolio__wrapper{
    margin-top: 20px;
    display: flex;
    // grid-template: repeat(1, 280px) / repeat(4, 280px);
    // grid-auto-rows: 280px;
    gap: 25px 5px;
    width: 480px;
    height: 480px;
    flex-direction: column;
    align-content: center;
    flex-wrap: nowrap;
    margin-left: auto;
    margin-right: auto;
}
}
@media(max-width:550px){
    .portfolio__wrapper{ 
    width: 280px;
    height: 280px;
    }
    .title_fz16 {
        font-size: 14px;
        line-height: 20px;
    }
    .title_fz36 {
        font-size: 28px;
    }
}
</style>