<template>
    <textarea
        class="my-text-area"        
        :placeholder="placeholder"
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    props: {        
        placeholder: {type: String, default: 'Заполните поле'},
        width: {type: Number, default: null},
        value: {type: String, default: ''},        
        modelValue: {type: String}
    },
    data() {
        return {
            comment: this.value,
        }
    }
    
}
</script>

<style lang="scss">
.my-text-area {
    font-family: 'Source Sans Pro', sans-serif;
    resize: none;
    padding: 10px 16px;
    margin: 0;
    border: 0;
    width: 100%;
    height: 108px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
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