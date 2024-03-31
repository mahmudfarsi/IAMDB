<template>
    <div v-if="details" class="box-specs">
        <div class="header">
            <h1 class="box-specs-title">
                {{ details.Title }}
            </h1>
            <p class="director ">
                Directors: {{ details.Director }}
            </p>
            <div class="box-specs-time ">
                <span class="box-specs-time-subtitle ">
                    {{ details.Year }}
                </span>
                <div class=" box-specs-dot"></div>
                <span class=" box-specs-time-subtitle">
                    {{ details.Rated }}
                </span>
                <div class="box-specs-dot "></div>
                <span class="box-specs-time-subtitle ">
                    {{ convert }}
                </span>
            </div>
            <div class="box-btns">
                <Button tag="button" :is-icon-only="false" icon="play" class="btn-trailer">
                    Watch thrailer
                </Button>
                <Button :is-icon-only="true" :icon="isSocial ? 'close-social' : 'share' " class="btnn-specs" @click="toggleSocial()"/>

                <Social :class="['btn-social', isSocial ?   'unvisib': 'showw' ]"/>


                <Button :is-icon-only="true" :icon="isFav ? 'filled-heart' : 'empty-heart'" class="btnn-specs" @click="toggle(details?.Title)"/>
                <input type="checkbox"  class="hidden" :value="details?.Title"/>
            </div>
            <p class="specs-description">
                {{ details.Plot }}
            </p>
        </div>

        <div class="body">
            <h2 class="specs-details">
                Details
            </h2>
               
                <ul class="specs-list">
                    <li v-for="item in list" class="specs-list-item">
                        <h3 class="specs-list-label">
                            {{ item.label }}
                        </h3>
                        <p class="specs-list-value">
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