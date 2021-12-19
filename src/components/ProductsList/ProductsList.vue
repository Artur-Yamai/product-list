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
</style>