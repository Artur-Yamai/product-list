<template>
    <button
        class="my-button"
        :class="Class"
        @click="click"
        :disabled="disabled"
    >
        {{text}}
    </button>
</template>

<script>
export default {
    props: {
        text: {type: String, default: 'button'},
        Class: {type: String, default: ''},
        disabled: {type: Boolean, default: false}
    },
    methods: {
        click(e) {
            e.preventDefault();
            this.$emit('btn-click')
        }
    }
}
</script>

<style lang="scss">

.my-button {
    width: 100%;
    padding: 10px;
    background: #EEEEEE;
    border: none;
    border-radius: 10px;
    font: inherit;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #B4B4B4;
    cursor: pointer;

    

    &.green {
        background-color: #7BAE73;
        color: #FFFFFF;
    }

    &:hover {
        box-shadow: 1px 1px 4px 0 gray;
    }

    &:active {        
        box-shadow: 0 0 16px 0 gray inset;
        transition: 0.2s;
    }

    &:disabled {
        cursor: default;
        background: #EEEEEE;

        &:hover {
            box-shadow: none;
        }
    }

}
</style>