<template>
    <div class="test-job">
        <Header/>
        <div class="test-job__wrapper">
            <FormAddProducts/>
            <ProductList/>
        </div>
    </div>
</template>

<script>
import Header from './Header';
import FormAddProducts from './FormAddProducts';
import ProductList from './ProductList';

export default {
    components: {
        Header,
        FormAddProducts,
        ProductList
    }    
}
</script>

<style lang="scss">
.test-job {    
  padding: 32px;

  &__wrapper {
      display: flex;
      justify-content: space-between;
  }
}
</style>