<template>
    <div v-if="details" class=" max-w-[504px]">
        <div class="header">
            <h1 class="title text-white-iamdb-1 font-bold text-3xmd md:text-xlg font-roboto leading-[40px] mb-[5px]">
                {{ j }}
            </h1>
            <p class="director text-white-iamdb-1 font-roboto text-xsm leading-[18px] md:text-2xsm md:leading-[21px] font-normal mb-[20px]">
                Directors: Jon Favreau
            </p>
            <div class="time flex flex-nowrap items-center gap-[15px]">
                <span class="years text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]"></span>
                <div class="dot w-[7px] h-[7px] rounded-full bg-white-iamdb-1"></div>
                <span class="pg text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]"></span>
                <div class="dot w-[7px] h-[7px] rounded-full bg-white-iamdb-1"></div>
                <span class="time-film text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]"></span>
            </div>
            <div class=" w-full  buttons flex flex-wrap smm:gap-[10px] md:gap-[20px] mt-[25px]">
                <Button tag="button" :is-icon-only="false" icon="play" class="bg-red text-white-iamdb-1 md:w-[227px]">
                    Watch thrailer
                </Button>
                <Button :is-icon-only="true" icon="share" class="border-[2px] border-white-iamdb-1"/>
                <Button :is-icon-only="true" icon="heart" class="border-[2px] border-white-iamdb-1"/>
            </div>
            <p class="description text-white-iamdb-0.6 font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px] mt-[35px]">
                
            </p>
        </div>

        <div class="body">
            <h2 class="details text-white-iamdb-1 font-roboto font-bold text-xmd md:text-2xmd leading-[28px] md:leading-[50px] mt-[30px]">
                Details
            </h2>
            <div class="mt-[15px]">
                <div class=" w-full flex flex-nowrap items-center justify-between border-b-[1px] border-white-iamdb-0.6 py-[7px]">
                    <h3 class="text-white-iamdb-1 font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">Writers</h3>
                    <p class="w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]"></p>
                </div>
                <div class=" w-full flex flex-nowrap items-center justify-between border-b-[1px] border-white-iamdb-0.6 py-[7px]">
                    <h3 class="text-white-iamdb-1 font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">Genres</h3>
                    <p class="w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]"></p>
                </div>
                <div class="w-full flex flex-nowrap items-center justify-between border-b-[1px] border-white-iamdb-0.6 py-[7px]">
                    <h3 class="text-white-iamdb-1 font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">Awards</h3>
                    <p class="w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]"></p>
                </div>
                <div class="w-full flex flex-nowrap items-center justify-between py-[7px]">
                    <h3 class="text-white-iamdb-1  font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">Country of Origin</h3>
                    <p class=" w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]"></p>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
    import { defineProps } from 'vue';
    import { array, bool, number, object, shape, string } from 'vue-types';

    import Button from '@/components/base/Button.vue'



    const props = defineProps({
        details:object({
            adult:bool(),
            backdrop_path:string(),
            budget:number(),
            genres:array({
                id:number(),
                name:string()
            }),
            homepage:string(),
            id:number(),
            imdb_id:string(),
            original_language:string(),
            original_title:string(),
            overview:string(),
            poster_path:string(),
            title:string()
        })
    })

</script>