<template>
        <img :src="src" :alt="alt" :height="height">
</template>


<script setup>
    import { defineProps } from 'vue';
    import {string,number, oneOfType} from 'vue-types';

    defineProps({
        src:string(),
        alt:string(),
        height:oneOfType([number(),string().validate(v => !isNaN(+v))])
    })
</script>