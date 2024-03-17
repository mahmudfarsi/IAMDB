<template>
    <component :is="tag">
        <div class="header" v-if="$slots.header">
            <slot name="header"/>
        </div>
        <slot/>
        <div v-if="$slots.footer">
            <slot name="footer"/>
        </div>
    </component>
</template>


<script setup>
    import { defineProps } from 'vue';
    import {string} from 'vue-types';

    defineProps({
        tag:string().def('div')
    })
</script>