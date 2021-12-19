<template>
    <ul class="product-list">
        <ProductElem
            v-for="product in $store.getters['getProductList']"
            :key="product.id"
            :id="product.id"
            :img="product.imgSrc"
            :title="product.title"
            :description="product.description"
            :price="product.price"
            @removeProduct="removeProduct"
        />
    </ul>
</template>

<script>
import ProductElem from './ProductElem';

export default {
    components: {
        ProductElem
    },
    methods: {
        removeProduct(id) {
            this.$store.commit('removeProduct', id)
        }
    }
}
</script>

<style lang="scss">
.product-list {
    float: right;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 74.7093023%;
    margin-left: 8px;
}

@media (max-width: 1439px) { 
    .product-list {
        width: calc(100% - 332px - 16px);
        margin: 0 auto;
    }
}

@media (max-width: 720px) { 
    .product-list {  
        width: 100%;
        margin: 0;
    }
}
</style>