<template>
  <!-- <router-link :to="{name:'movie'}"> -->
  <Card v-if="movie" tag="li" class="card-list">
    <template #header>
      <Img :src="img" :alt="movie.title" class="img-cover" loading="lazy" />
    </template>
    <div class="body flex flex-col pt-[20px]">
      <h2 class="title">{{ movie.title }}</h2>
      <!-- <p class="director text-white-iamdb-1 font-roboto font-normal text-xsm mt-[10px]">director : joseph magiery</p> -->
      <p class="decsription">{{ movie.overview }}</p>
      <div class="box-detail">
        <span class="year text-white-iamdb-1">{{ movie.release_date }}</span>
        <!-- <div class="dot w-[7px] h-[7px] rounded-full bg-white-iamdb-1"></div> -->
        <!-- <span class="year text-white-iamdb-1">2h 6m</span> -->
      </div>
    </div>
  </Card>
  <!-- </router-link> -->
</template>

<script setup>
import Card from "@/components/base/Card.vue";
import Img from "@/components/base/Img.vue";

import { computed, defineProps } from "vue";
import { string, number, shape, object, array, bool } from "vue-types";

const props = defineProps({
  movie: shape({
    adult: bool(),
    backdrop_path: string(),
    genre_ids: array().isRequired,
    id: number().isRequired,
    original_language: string().isRequired,
    original_title: string().isRequired,
    popularity: number().isRequired,
    overview: string().isRequired,
    title: string().isRequired,
    poster_path: string(),
    release_date: string().isRequired,
    video: bool().isRequired,
    vote_average: number().isRequired,
    vote_count: number().isRequired,
  }),
});

const img = computed(() => {
  return `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`;
});
</script>

<style scoped>
.card-list {
  @apply flex gap-[10px] w-full;
}

.title {
  @apply font-roboto font-bold text-lg text-white-iamdb-1;
}

.decsription {
  @apply w-[700px] h-[140px] text-white-iamdb-1 font-roboto mt-[40px] overflow-x-hidden;
}

.box-detail {
  @apply mt-[20px] flex flex-nowrap items-center;
}

.img-cover {
  @apply w-[230px];
}
</style>
