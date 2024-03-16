<template>
    <component :is="tag" :class="['button',`button--${isIconOnly ? 'iconOnly' : 'default'}`]">
        <slot v-if="!isIconOnly"/>
        <Icon v-if="icon" :name="icon"/>
    </component>
</template>


<script setup>
    import { defineProps } from 'vue';
    import {string,oneOf,bool} from 'vue-types';

    // components
    import Icon from '@/components/base/Icon.vue';

    defineProps({
        tag:oneOf(['button','span','a','router-link']).def('button'),
        icon:string(),
        isIconOnly:bool().def(false)
    })
</script>


<style scoped>
    .button {
        @apply cursor-pointer flex justify-between items-center
    }

    .button--iconOnly {
        @apply rounded-circle p-[20px]
    }

    .button--default {
        @apply  rounded-curve-100
    }

</style>