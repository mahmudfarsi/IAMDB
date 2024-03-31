<template>
    <div class="box w-full  max-h-[671px]">
        <img :src="srcImage" :alt="lolo" class="w-full h-full bg-rose-700 object-cover"/>
    </div>
</template>


<script setup>
    import { computed, defineProps } from 'vue';
    import {array, shape, string} from 'vue-types';

    // import Img from '@/components/base/Img.vue'

        const props = defineProps({
            Backdrop:string()
        })

        console.log(props.Backdrop);

        const srcImage = computed(() => {
            return `https://image.tmdb.org/t/p/w500/${props.Backdrop}`
        })

        console.log(srcImage.value);
        // const back = computed(() => {
        //     const backGround = props.Backdrop.backdrops.file_path;
        //     const filtered =  backGround.filter(item => {return item[0]}).file_path;
        //     return filtered
        // })

        
</script>



<style scoped>
.box{
        position: relative;
        display: block;
        z-index: 0;
    }
    .box::before{
        content: '';
        position: absolute;
        left: 0;
        z-index: 99;
        bottom: -1px;
        right: 0;
        height: 100%;
        background: linear-gradient(to bottom,rgba(19, 19, 19, 0),rgba(21, 21, 21, 0.5),rgb(24, 24, 24,1)) repeat  top;
    }
   
</style>