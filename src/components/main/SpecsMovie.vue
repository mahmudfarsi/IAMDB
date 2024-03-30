<template>
    <div v-if="details" class=" max-w-[504px] relative">
        <div class="header">
            <h1 class="title text-white-iamdb-1 font-bold text-3xmd md:text-xlg font-roboto leading-[40px] mb-[15px]">
                {{ details.Title }}
            </h1>
            <p class="director text-white-iamdb-1 font-roboto text-xsm leading-[18px] md:text-2xsm md:leading-[21px] font-normal mb-[20px]">
                Directors: {{ details.Director }}
            </p>
            <div class="time flex flex-nowrap items-center gap-[15px]">
                <span class="years text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]">
                    {{ details.Year }}
                </span>
                <div class="dot w-[7px] h-[7px] rounded-full bg-white-iamdb-1"></div>
                <span class="pg text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]">
                    {{ details.Rated }}
                </span>
                <div class="dot w-[7px] h-[7px] rounded-full bg-white-iamdb-1"></div>
                <span class="time-film text-white-iamdb-1 font-roboto font-normal text-sm md:text-2xsm leading-[16px] md:leading-[21px]">
                    {{ convert }}
                </span>
            </div>
            <div class=" w-full  buttons flex flex-wrap smm:gap-[10px] md:gap-[20px] mt-[25px]">
                <Button tag="button" :is-icon-only="false" icon="play" class="bg-red text-white-iamdb-1 md:w-[227px]">
                    Watch thrailer
                </Button>
                <Button :is-icon-only="true" :icon="isSocial ? 'close-social' : 'share' " class="border-[2px] border-white-iamdb-1 transition-colors duration-500 hover:bg-hover-opacity-0.1" @click="toggleSocial()"/>

                <Social :class="['absolute top-[178px] right-[45px] md:top-[195px] md:right-[50px]', isSocial ?   'unvisib': 'showw' ]"/>


                <Button :is-icon-only="true" :icon="isFav ? 'filled-heart' : 'empty-heart'" class="border-[2px] border-white-iamdb-1 transition-colors duration-500 hover:bg-hover-opacity-0.1" @click="toggle(details?.Title)"/>
                <input type="checkbox"  class="hidden" :value="details?.Title"/>
            </div>
            <p class="description text-white-iamdb-0.6 font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px] mt-[35px]">
                {{ details.Plot }}
            </p>
        </div>

        <div class="body">
            <h2 class="details text-white-iamdb-1 font-roboto font-bold text-xmd md:text-2xmd leading-[28px] md:leading-[50px] mt-[30px]">
                Details
            </h2>
               
                <ul class="mt-[15px]">
                    <li v-for="item in list" class=" w-full flex flex-nowrap items-center justify-between border-b-[1px] border-white-iamdb-0.6 py-[7px]">
                        <h3 class="capitalize text-white-iamdb-1 font-roboto font-bold text-xsm md:text-2xsm leading-[18px] md:leading-[21px]">
                            {{ item.label }}
                        </h3>
                        <p class="w-[153px] md:w-[323px] text-white-iamdb-0.6  font-roboto font-normal text-sm md:text-xsm leading-[16px] md:leading-[18px]">
                            {{ item.value }}
                        </p>
                    </li>
                </ul>
                
        </div>
    </div>
</template>



<script setup>
    import { computed, defineProps, ref } from 'vue';
    import { array, bool, number, object, shape, string } from 'vue-types';



    import Button from '@/components/base/Button.vue'
    import Social from '@/components/base/Social.vue'
    import {useFav} from '@/stores/favMovie.js'

    const {toggle,isInFav} = useFav();

  



    const props = defineProps({
        details:shape({
            Actors:string(),
            Awards:string(),
            BoxOffice:number(),
            Country:string(),
            DVD:string(),
            Language:string(),
            Genre:string(),
            Director:string(),
            Metascore:string(),
            Plot:string(),
            Poster:string(),
            Production:string(),
            Rated:string(),
            Ratings:shape({
                Source:string(),
                Value:string()
            }),
            Released:string(),
            Response:bool(),
            Runtime:string(),
            Title:string(),
            Type:string(),
            Website:string(),
            Writer:string(),
            Year:string(),
            imdbID:string(),
            imdbRating:string(),
            imdbVotes:string(),
        })



       
    })

    const timeConvert = (time) => {
        let num = time;
        let hourses = (num / 60);
        let rhours = Math.floor(hourses);
        let minutes = (hourses - rhours) * 60;
        let rmintues = Math.round(minutes);
        return `${rhours}h ${rmintues}m `
    }

    const charString = computed(() => {
        const charA = props.details.Runtime.split('').splice(0,3).join('');
        return charA
    })

    const convert = computed(() => {
        return timeConvert(+charString.value)
    })

    const list = computed(() => {
        const writers = props.details.Writer;
        const genres = props.details.Genre;
        const award = props.details.Awards;
        const country = props.details.Country;

        return [
            {
                label:'writers',
                value:writers
            },
            {
                label:'genres',
                value:genres
            },
            {
                label:'awards',
                value:award
            },
            {
                label:'Country of origin',
                value:country
            }
        ]
    }) 

    // const favList = computed(() => useFav().favList);
    const isFav = computed(() => isInFav(props.details?.Title));

    const isSocial = ref(false);
    const toggleSocial = () => {
        isSocial.value = !isSocial.value
    }
</script>



<style scoped>
    .unvisib {
        @apply opacity-100
    }

    .showw {
        @apply opacity-0
    }
</style>