<template>
    <Card>
        <template #header>
            <Img src="" alt=""/>
        </template>
        <template #footer>
            <div class="flex flex-nowrap">
                <p class="title">
                    iron man 3
                </p>
                <span>
                    <Icon name="star"/>
                </span>
                <span>
                    6.9
                </span>
            </div>
        </template>
    </Card>
</template>



<script setup>
    import { defineProps } from 'vue';
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
</script>