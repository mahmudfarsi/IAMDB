<template>
    <Card tag="li" class="flex items-center flex-nowrap gap-[10px]">
        <template #header>
            <Img :src="srcImg" alt="" class="w-[75px] h-[75px] rounded-full object-cover"/>
        </template>
        <div class="body">
            <h3 class="name font-roboto font-bold text-xsm leading-[18px] text-white-iamdb-1">
                {{ crew.name }}
            </h3>
            <p class="role text-white-iamdb-0.6 font-roboto font-normal text-sm leading-[16px] mt-[5px]">
                as 
                {{ crew.character }}
            </p>
        </div>
    </Card>
</template>


<script setup>

    import { computed, defineProps } from 'vue';
    import { array, shape, string } from 'vue-types';

    const props = defineProps({
        crew:array({
            character:string(),
            name:string(),
            profile_path:string()
        })
    })


    import Card from '@/components/base/Card.vue'
    import Img from '@/components/base/Img.vue'



    const srcImg = computed(() => {
        return `https://image.tmdb.org/t/p/w500${props.crew?.profile_path}`
    })
</script>