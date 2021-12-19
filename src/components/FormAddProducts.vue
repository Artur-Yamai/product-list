<template>
    <form class="add-products-form" :class="fixedClass">
        <div class="add-products-form__wrapper">
            <p class="add-products-form__label add-products-form__label--require">Наименование товара</p>
            <MyInput
                placeholder="Введите наименование товара"
                v-model="product.title"
            />
            <p 
                v-if="!product.title && flags.title" 
                class="add-products-form__error"
            >Поле является обязательным</p>
        </div>

        <div class="add-products-form__wrapper">
            <p class="add-products-form__label">Описание товара</p>
            <MyTextArea
                placeholder="Введите описание товара"
                v-model="product.description"
            />
        </div>

        <div class="add-products-form__wrapper">
            <p class="add-products-form__label add-products-form__label--require">Ссылка на изображение товара</p>
            <MyInput
                placeholder="Введите ссылку"
                v-model="product.imgSrc"
            />
            <p 
                v-if="!product.imgSrc && flags.imgSrc" 
                class="add-products-form__error"
            >Поле является обязательным</p>
        </div>

        <div class="add-products-form__wrapper">
            <p class="add-products-form__label add-products-form__label--require">Цена товара</p>
            <input
                class="my-input"
                id="mask-input"
                placeholder="Введите цену"
                v-model="product.price"
            />
            <p 
                v-if="!product.price && flags.price" 
                class="add-products-form__error"
            >Поле является обязательным</p>
        </div>

        <MyButton 
            class="add-products-form__btn" 
            text="Добавить товар" 
            :Class="'green'"
            :disabled="formValid"
            @btn-click="addProduct"
        />
    </form>
</template>

<script>
import { MyInput, MyTextArea, MyButton } from './custom-elements';
import Inputmask from "inputmask";

export default {
    components: {
        MyInput,
        MyTextArea,
        MyButton
    },
    data() {
        return {
            product: {},
            flags: {},
            scrollWindow: 0,
            fixedClass: '',
        }
    },
    created() {
        this.load();
        window.addEventListener('scroll', this.handleScroll);
    },
    mounted () {
        this.setMask()
    },
    watch: {
        'product.imgSrc'(val) {
            if(val) {this.flags.imgSrc = true}
        },
        'product.title'(val) {
            if(val) {this.flags.title = true}
        },
        'product.price'(val) {
            if(val) {this.flags.price = true}
        },
    },
    computed: {
        formValid() {
            const p = this.product;
            return !(p.title && p.imgSrc && p.price)
        },
        formatPrice() {
            let arr = this.product.price.split('');
            arr.splice(arr.length - 3, 1, ' ');
            const newPrice = arr.join('');
            return newPrice;
        },
    },
    methods: {
        setMask() {
            // TODO
            // маска костыльная, свое решение накидать не хватило ума.
            // взял популярное из интернета, но оно не подходит под данный пункт задачи
            // оставил чтоб не забыть, потом переделаю, уже для себя, когда не будте пожимать время
            const im = new Inputmask("99 999");
            const selector = document.querySelector('#mask-input');
            im.mask(selector)
        },
        handleScroll () {
            this.fixedClass = window.scrollY > 66 ? 'fixed-form' : '';
        },
        updateValue(e) {
            this.product.price = e.target.value.replace(/ /g,'');
        },
        addProduct() {
            const newProduct = JSON.parse(JSON.stringify(this.product))
            console.log(newProduct);
            newProduct.id = Date.now();
            newProduct.price = +(newProduct.price.replace(/ /g,''));
            this.$store.dispatch('SET_PRODUCT', newProduct);
            this.load();
            
        },
        load() {
            this.product = {}
            this.flags = {}
            this.product = this.createProductBlank();
            this.flags = this.createFlagsList();
        },
        createProductBlank: () => ({title: '', description: '', imgSrc: '', price: ''}),
        createFlagsList: () => ({title: false, imgSrc: false, price: false})
    }
    
}
</script>

<style lang="scss">
.add-products-form {
    float:left;
    width: 24.127907%;
    margin-right: 8px;
    min-width: 332px;
    height: 440px;
    padding: 24px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    &__wrapper{
        position: relative;
        margin-bottom: 14px;
    }

    &__label {
        margin-bottom: 4px;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        color: #49485E;

        &--require{

            &::after {
                content: "*";
                color: #FF8484;
            }
        }        
    }

    &__error {
        position: absolute;
        bottom: -12px;
        font-style: normal;
        font-weight: normal;
        font-size: 8px;
        line-height: 10px;
        letter-spacing: -0.02em;
        color: #FF8484;
    }

    &__btn {
        margin-top: 12px;
    }

    &.fixed-form {
        position: fixed;
        top: 16px;
        width: 332px;
    }
}

@media (max-width: 980px) { 
    .add-products-form {
        margin: 0 auto 16px;
    }
}

@media (max-width: 720px) { 
    .add-products-form {
        width: 100%;

            &.fixed-form {
            position: static;
        }
    }

    
}
</style>