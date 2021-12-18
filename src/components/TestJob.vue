<template>
    <div class="test-job">
        <Header/>
        <div class="test-job__wrapper">
            <FormAddProducts/>
            <ProductsList/>
        </div>
    </div>
</template>

<script>
import Header from './Header';
import FormAddProducts from './FormAddProducts';
import {ProductsList} from './ProductsList';

export default {
    components: {
        Header,
        FormAddProducts,
        ProductsList
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