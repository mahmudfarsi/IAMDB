<template>
    <div>
        <img :src="src" :alt="alt" :height="height">
    </div>
</template>


<script setup>
    import { defineProps } from 'vue';
    import {toDisplayString,number,oneOfType} from 'vue-types'

    defineprops({
        src:string(),
        alt:string(),
        height:oneOfType([number().string().validate(v => !isNaN(+v))])
    })
</script>