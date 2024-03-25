<template>
    <component :is="tag"  >
        <Img :src="srcImg" alt="" class="img"/>
    </component>
</template>



<script setup>
    import { computed, defineProps } from 'vue';
    import { array, bool, number, object, shape, string } from 'vue-types';


    import Img from '@/components/base/Img.vue';

   
    const props = defineProps({
        tag:string().def('div'),
        images:array({
            aspect_ratio:number(),
            file_path:string(),
            height:number(),
            vote_average:number(),
            vote_count:number(),
            width:number()
        })
    })


    const srcImg = computed(() => {
        return `https://image.tmdb.org/t/p/w500${props.images?.file_path}`
    })

    
 
    console.log(props.images);

</script>



<style scoped>
    .img {
        @apply  smm:w-[158px] md:w-[286px] rounded-curve-12
    }
</style>