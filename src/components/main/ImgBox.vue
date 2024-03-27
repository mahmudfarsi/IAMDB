<template>
    <component :is="tag">
        <Img :src="srcImg" alt="" class="img" @click="showImg"/>
        <div v-show="visible" class="w-screen h-screen fixed top-0  flex left-0 justify-center items-center backdrop-blur-xl" @click="hide">
            <Button :is-icon-only="true" icon="close" class="absolute top-[155px] z-[9999] right-[315px]" />
            <Img :src="srcImg" alt="" class="larg"/>
        </div>
    </component>
</template>



<script setup>
    import { computed, defineProps,defineEmits, ref } from 'vue';
    import { array, bool, number, object, shape, string } from 'vue-types';


    import Img from '@/components/base/Img.vue';
    import Button from '../base/Button.vue';

   
    const props = defineProps({
        tag:string().def('div'),
        images:array({
            aspect_ratio:number(),
            file_path:string(),
            height:number(),
            vote_average:number(),
            vote_count:number(),
            width:number()
        }),
    })


    const srcImg = computed(() => {
        return `https://image.tmdb.org/t/p/w500${props.images?.file_path}`
    })

    const visible = ref(false)

    const showImg = () => {
        visible.value = !visible.value
    }

    const hide = () => {
        visible.value = !visible.value
    }
   

</script>



<style scoped>
    .img {
        @apply  smm:w-[155px] md:w-[286px] rounded-curve-12
    }

    .larg {
        @apply smm:w-[180px] md:w-[790px] rounded-curve-12 
        backdrop-blur-md
    }
</style>