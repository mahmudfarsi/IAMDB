<template>
    <Card class="w-[230px] md:w-[276px]">
        <template #header>
            <div class="w-[230px] md:w-[276px] h-[342px] md:h-[409px]">
                <Img :src="srcImg" :alt="slide.title" class="w-full h-full object-cover rounded-curve-12 "/>
            </div>
        </template>
        <template #footer>
            <div class="flex flex-nowrap items-center justify-between mt-[12px]">
                <p class="title max-w-[198px] font-roboto font-bold text-white-iamdb-1 leading-[18px] md:leading-[21px] text-xsm md:text-2xsm whitespace-nowrap text-ellipsis overflow-hidden">
                    {{ slide.title }}
                </p>
                <div class="flex flex-nowrap items-center gap-[6px]">
                    <span>
                    <Icon name="star"/>
                </span>
                <span class="font-roboto font-normal leading-[18px] md:leading-[21px] text-white-iamdb-0.4 text-xsm md:text-2xsm">
                    6.9
                </span>
                </div>
            </div>
        </template>
    </Card>
</template>



<script setup>
    import { computed, defineProps } from 'vue';
    import {string,shape,number,object,bool,array} from 'vue-types';


    import Card from '@/components/base/Card.vue';
    import Img from '@/components/base/Img.vue';
    import Icon from '@/components/base/Icon.vue';
    import Button from '@/components/base/Button.vue';


     const props =  defineProps({
        tag:string().def('div'),
        slide:object({
            adult:bool(),
            backdrop_path:string(),
            genre_ids:array(),
            id:number(),
            original_language:string(),
            original_title:string(),
            overview:string(),
            popularity:string(),
            poster_path:string(),
            release_date:string(),
            title:string(),
            video:bool(),
            vote_average:number(),
            vote_count:number()
        })
    })

    const srcImg = computed(() => {
        return `https://image.tmdb.org/t/p/w500/${props.slide?.poster_path}`
    })
</script>