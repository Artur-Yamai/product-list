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
.my-input {
    padding: 0;
    margin: 0;
    border: 0;
    
    height: 36px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 11px 16px;
    width: 100%;
}
</style>