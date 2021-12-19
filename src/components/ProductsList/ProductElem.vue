<template>
    <li class="product-elem">
        <div class="product-elem__img_wrapper"><img :src="img"></div>        
        <div class="product-elem__wrapper">            
            <p class="product-elem__title">{{title}}</p>
            <p class="product-elem__description">{{description}}</p>
            <p class="product-elem__price">{{stylizedPrice}} руб.</p>
            <button class="product-elem__remove-button" @click="remove">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.56294 4.76335V13.9953C1.56294 14.541 1.76303 15.0534 2.11256 15.4211C2.46048 15.7898 2.94467 15.9991 3.4514 16H10.541C11.0478 15.9991 11.532 15.7898 11.8798 15.4211C12.2293 15.0534 12.4294 14.541 12.4294 13.9953V4.76335C13.1242 4.57893 13.5745 3.90768 13.4815 3.19471C13.3884 2.48189 12.7811 1.94867 12.0622 1.94852H10.1437V1.48014C10.1459 1.08626 9.99017 0.708039 9.71134 0.42979C9.4325 0.151688 9.0537 -0.0031709 8.65982 4.92333e-05H5.33255C4.93867 -0.0031709 4.55986 0.151688 4.28103 0.42979C4.00219 0.708039 3.84646 1.08626 3.84865 1.48014V1.94852H1.93019C1.21122 1.94867 0.603931 2.48189 0.51084 3.19471C0.417896 3.90768 0.868128 4.57893 1.56294 4.76335ZM10.541 15.2506H3.4514C2.81075 15.2506 2.31236 14.7002 2.31236 13.9953V4.79629H11.68V13.9953C11.68 14.7002 11.1816 15.2506 10.541 15.2506ZM4.59806 1.48014C4.59558 1.28503 4.67227 1.09724 4.81074 0.959502C4.94906 0.821768 5.13729 0.746095 5.33255 0.749461H8.65982C8.85508 0.746095 9.04331 0.821768 9.18163 0.959502C9.32009 1.09709 9.39679 1.28503 9.3943 1.48014V1.94852H4.59806V1.48014ZM1.93019 2.69793H12.0622C12.4347 2.69793 12.7367 2.99989 12.7367 3.3724C12.7367 3.74491 12.4347 4.04688 12.0622 4.04688H1.93019C1.55768 4.04688 1.25571 3.74491 1.25571 3.3724C1.25571 2.99989 1.55768 2.69793 1.93019 2.69793Z" fill="white"/>
                </svg>
            </button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        id: {type: [Number, String]},
        img: {type: String, default: ''},
        title: {type: String, default: ''},
        description: {type: String, default: ''},
        price: {type: Number},
    },
    computed: {
        stylizedPrice() {
            return new Intl.NumberFormat('ru-RU').format(this.price)
        }
    },
    methods: {
        remove() {
            this.$emit('removeProduct', this.id);
        }
    }
}
</script>

<style lang="scss">
.product-elem {
    position: relative;
    min-height: 423px;
    min-width: 280px;
    width: calc(100% / 3 - 11px);
    background-color: #d3d3d3;
    margin: 0 8px 16px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    color: #3F3F3F;
    cursor: pointer;

    &:nth-of-type(3n+1) {
        margin-left: 0
    }
    &:nth-of-type(3n) {
        margin-right: 0
    }

    &:last-child {
        margin-right: auto;
    }
    
    &__img_wrapper {
        background-image: url('./nopict.jpg');
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: center;
        border-radius: 4px 4px 0 0;
        width: 100%;
        height: 223px;
    }
    img {
        border-radius: 4px 4px 0 0;
        width: 100%;
        height: 223px;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        min-height: 200px;
        justify-content: space-between;
        padding: 16px 16px 24px;
    }

    &__title {
        margin-bottom: 8px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
    }

    &__description {   
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
    }

    &__price {
        margin-top: auto;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
    }

    &__remove-button {
        display: none;
        position: absolute;
        top: -8px;
        right: -8px;
        padding: 0;
        border: none;
        font: inherit;
        color: #FFFFFF;
        width: 32px;
        height: 32px;
        background-color: transparent;
        cursor: pointer;
        z-index: 10;
        font-size: 18px;
        background: #FF8484;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    &:hover .product-elem__remove-button {
        display: block;
    }
}



@media (max-width: 1280px) { 
    .product-elem {
        width: calc(100% / 2 - 18px);
        margin: 0 0 16px;

        &:last-child {
            margin: 0 0 16px;
        }
    }
}

@media (max-width: 980px) { 
    .product-elem {
        width: calc(100% - 18px);
        margin: 0 0 16px;
    }
}

@media (max-width: 720px) { 
    .product-elem {  
        width: 100%;        
    }    
}
</style>
