<template>
    <component :is="tag" :type="type" :class="['button',`button--${isIconOnly ? 'iconOnly' : 'default'}`]">
        <slot v-if="!isIconOnly"/>
        <Icon v-if="icon" :name="icon"/>
    </component>
</template>


<script setup>
    import { defineProps } from 'vue';
    import {string,oneOf,bool, oneOfType} from 'vue-types';

    // components
    import Icon from '@/components/base/Icon.vue';

    defineProps({
        tag:oneOf(['button','span','a','router-link']).def('button'),
        icon:string(),
        isIconOnly:bool().def(false),
        type:oneOf(['submit','button']).def('submit')
    })
</script>


<style scoped>
    .button {
        @apply cursor-pointer 
    }

    .button--iconOnly {
        @apply rounded-circle smm:p-[12px] md:p-[20px]
    }

    .button--default {
        @apply flex items-center rounded-curve-100 smm:px-[24px] 
        smm:py-[12px] md:px-[32px] md:py-[18px] gap-[12px] 
        smm:justify-center 
    }

</style>