<template>
    <div class=" max-w-[504px]">
        <div class="header">
            <h1 class="title text-white-iamdb-1 font-bold text-3xmd md:text-xlg font-roboto leading-[40px] mb-[5px]">
                Iron Man
            </h1>
            <p class="director text-white-iamdb-1 font-roboto text-xsm leading-[18px] md:text-2xsm md:leading-[21px] font-normal mb-[20px]">
                Directors: Jon Favreau
            </p>
            <div class="time flex flex-nowrap items-center gap-[15px]">
                <span class="text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]">2008 </span>
                <div class="dot w-[7px] h-[7px] rounded-full bg-white-iamdb-1"></div>
                <span class="text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]">PG-13</span>
                <div class="dot w-[7px] h-[7px] rounded-full bg-white-iamdb-1"></div>
                <span class="text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]">2h 6m</span>
            </div>
            <div class=" w-full  buttons flex flex-wrap smm:gap-[10px] md:gap-[20px] mt-[25px]">
                <Button tag="button" :is-icon-only="false" icon="play" class="bg-red text-white-iamdb-1 md:w-[227px]">
                    Watch thrailer
                </Button>
                <Button :is-icon-only="true" icon="share" class="border-[2px] border-white-iamdb-1"/>
                <Button :is-icon-only="true" icon="heart" class="border-[2px] border-white-iamdb-1"/>
            </div>
            <p class="description text-white-iamdb-0.6 font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px] mt-[35px]">
                After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.
            </p>
        </div>

        <div class="body">
            <h2 class="details text-white-iamdb-1 font-roboto font-bold text-xmd md:text-2xmd leading-[28px] md:leading-[50px] mt-[30px]">
                Details
            </h2>
            <div class="mt-[15px]">
                <div class=" w-full flex flex-nowrap items-center justify-between border-b-[1px] border-white-iamdb-0.6 py-[7px]">
                    <h3 class="text-white-iamdb-1 font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">Writers</h3>
                    <p class="w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]">Mark Fergus, Hawk Ostby, Art Marcum</p>
                </div>
                <div class=" w-full flex flex-nowrap items-center justify-between border-b-[1px] border-white-iamdb-0.6 py-[7px]">
                    <h3 class="text-white-iamdb-1 font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">Genres</h3>
                    <p class="w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]">Action, Adventure, Sci-Fi</p>
                </div>
                <div class="w-full flex flex-nowrap items-center justify-between border-b-[1px] border-white-iamdb-0.6 py-[7px]">
                    <h3 class="text-white-iamdb-1 font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">Awards</h3>
                    <p class="w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]">Nominated for 2 Oscars, 21 wins & 73 nominations total</p>
                </div>
                <div class="w-full flex flex-nowrap items-center justify-between py-[7px]">
                    <h3 class="text-white-iamdb-1  font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">Country of Origin</h3>
                    <p class=" w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]">USA, Canada</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
    import { defineProps } from 'vue';
    import { string } from 'vue-types';

    import Button from '@/components/base/Button.vue'
</script>