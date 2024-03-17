<template>
    <input :type="type" :id="id" :placeholder="placeholder">
</template>


<script setup>
    import { defineProps } from 'vue';
    import {string} from 'vue-types';


    defineProps({
        type:string(),
        id:string(),
        placeholder:string()
    })
</script>