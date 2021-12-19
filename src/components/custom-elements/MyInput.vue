<template>
    <input
        class="my-input"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>

export default {
    props: {
        type: {type: String, default: 'text'},
        placeholder: {type: String, default: 'Заполните поле'},
        width: {type: Number, default: null},
        modelValue: {type: [String, Number]}
    },
}
</script>

<style lang="scss">
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.my-input {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
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

    &::placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
    }
}
</style>