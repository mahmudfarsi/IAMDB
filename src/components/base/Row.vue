<template>
    <component :is="tag" :class="['row',`row--${isRow ? 'wrap' : 'nowrap'}`]">
        <slot/>
    </component>
</template>



<script setup>
    import { defineProps } from 'vue';
    import { string,bool } from 'vue-types';

    defineProps({
        tag:string().def('div'),
        isRow:bool().def(false)
    })
</script>


<style scoped>
    .row {
        @apply w-full flex flex-row 
    }

    .row--wrap {
        @apply flex-wrap
    }

    .row--nowrap {
        @apply flex-nowrap
    }
</style>