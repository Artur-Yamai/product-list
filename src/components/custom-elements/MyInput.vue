<template>
    <input
        class="my-input"
        :type="type"
        :placeholder="placeholder"
    >
</template>

<script>

export default {
    props: {
        type: {type: String, default: 'text'},
        placeholder: {type: String, default: 'Заполните поле'},
        width: {type: Number, default: null},
    }
}
</script>

<style lang="scss" scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.my-input {
    margin: 0;
    border: 0;
    padding: 11px 16px;
    
    height: 36px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
}
</style>