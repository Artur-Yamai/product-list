<template>
    <div class="header">        
        <h1>Добавление товара</h1>
        <select class="select" v-model="selected">
            <option value="default" default>По умолчанию</option>
            <option value="priceToMax">по цене &#8593;</option>
            <option value="priceToMin">по цене &#8595;</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'default',
        }
    },
    watch: {
        selected(val) {
            this.$store.commit('toSortProductList', val)
        }
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    h1 {
        color: #3F3F3F;
        font-weight: bolder;
        font-size: 28px;
        line-height: 35px;
    }
}

select {
    border: none;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 6px 8px;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;

    &:focus {
        border: 1px solid gray;
    }

    
}

option {
    border: none;
    padding: 4px;

    &:focus {
        background-color: red;
    }
}

@media (max-width: 720px) { 
    select.select {
        padding: 0 2px;
    font-size: 10px;
    }
}
</style>