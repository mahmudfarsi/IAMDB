<template>
  <div class="box-left smm:hidden md:flex md:flex-col">
    <Img :src="details.Poster" :alt="details.Title" class="rounded-curve-12" loading="lazy"/>
    <div class="indicator-box flex items-center gap-[30px] mt-[20px] px-[15px]">
    <div
      class="radial-progress text-red"
      :style="[`--value:${numRate}`]"
      role="progressbar"
    >
      {{ details.imdbRating }}
    </div>
    <div class="flex flex-col">
      <span class="text-white-iamdb-1 font-bold text-2xsm"> {{ details.imdbVotes }} </span>
      <small class="font-roboto font-normal text-xsm text-white-iamdb-1">
        ratings on IMDB
      </small>
    </div>
  </div>
  </div>
  
</template>

<script setup>
import { computed, defineProps } from "vue";
import { shape, string } from "vue-types";

import Img from "@/components/base/Img.vue";

const props = defineProps({
  details: shape({
    Poster: string(),
    imdbRating: string(),
    imdbVotes: string(),
    Title:string()
  }),
});

const numRate = computed(() => {
  return Number(props.details?.imdbRating) * 10
})


</script>
