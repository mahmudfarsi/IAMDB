<template>
  <Card class="card-slider">
    <template #header>
      <div class="box-img-slider">
        <Img :src="srcImg" :alt="slide.title" class="img" loading="lazy" />
      </div>
    </template>
    <template #footer>
      <div class="box-footer">
        <p class="title">
          {{ slide.title }}
        </p>
        <div class="box-flex-footer">
          <span>
            <Icon name="star" />
          </span>
          <span
            class="box-average"
          >
            {{ fixAverage }}
          </span>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { string, shape, number, object, bool, array } from "vue-types";

import Card from "@/components/base/Card.vue";
import Img from "@/components/base/Img.vue";
import Icon from "@/components/base/Icon.vue";
import Button from "@/components/base/Button.vue";

const props = defineProps({
  tag: string().def("div"),
  slide: object({
    adult: bool(),
    backdrop_path: string(),
    genre_ids: array(),
    id: number(),
    original_language: string(),
    original_title: string(),
    overview: string(),
    popularity: string(),
    poster_path: string(),
    release_date: string(),
    title: string(),
    video: bool(),
    vote_average: number(),
    vote_count: number(),
  }),
});

const srcImg = computed(() => {
  return `https://image.tmdb.org/t/p/w500/${props.slide?.poster_path}`;
});

const fixAverage = computed(() => {
  return props.slide.vote_average.toFixed(1);
});
</script>
