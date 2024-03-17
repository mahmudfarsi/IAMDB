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
        @apply cursor-pointer flex items-center
    }

    .button--iconOnly {
        @apply rounded-circle p-[20px]
    }

    .button--default {
        @apply  rounded-curve-100 smm:px-[24px] smm:py-[12px] md:px-[32px] md:py-[18px] gap-[12px] smm:justify-center md:justify-between
    }

</style>