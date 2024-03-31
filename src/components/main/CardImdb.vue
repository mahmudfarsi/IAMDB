<template>
  <component :is="tag" class="card-imdb-main">
    <Img
      :src="details.Poster"
      :alt="details.Title"
      class="rounded-curve-12"
      loading="lazy"
    />
    <div class="indicator-box">
      <div
        class="radial-progress text-red"
        :style="[`--value:${numRate}`]"
        role="progressbar"
      >
        <p class="imdb-rates">
          {{ details.imdbRating }}
        </p>
      </div>
      <div class="flex flex-col">
        <span class="imdb-votes">
          {{ details.imdbVotes }}
        </span>
        <small class="text-rating">
          ratings on IMDB
        </small>
      </div>
    </div>
  </component>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { shape, string } from "vue-types";

import Img from "@/components/base/Img.vue";

const props = defineProps({
  tag:string().def('div'),
  details: shape({
    Poster: string(),
    imdbRating: string(),
    imdbVotes: string(),
    Title: string(),
  }),
});

const numRate = computed(() => {
  return Number(props.details?.imdbRating) * 10;
});
</script>
