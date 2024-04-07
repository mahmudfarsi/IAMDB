<template>
  <component :is="tag" class="card-imdb-main">
    <Img
      :src="details?.Poster"
      :alt="details?.Title"
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
          {{ details?.imdbRating }}
        </p>
      </div>
      <div class="flex flex-col">
        <span class="imdb-votes">
          {{ details?.imdbVotes }}
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
import { object, shape, string } from "vue-types";

import Img from "@/components/base/Img.vue";

const props = defineProps({
  tag:string().def('div'),
  details: object({
    Poster: string().isRequired,
    imdbRating: string().isRequired,
    imdbVotes: string().isRequired,
    Title: string().isRequired,
  }),
});

const numRate = computed(() => {
  return Number(props.details?.imdbRating) * 10;
});
</script>
