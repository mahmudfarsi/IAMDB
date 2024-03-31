<template>
  <component :is="tag" class="img-box" @click="showImg" >
      <Img :src="srcImg" alt="" class="img" loading="lazy"/>
      <div class="overlay">
        <Button :is-icon-only="true" icon="size" />
      </div>
  </component>
  <div
      v-show="visible"
      class="img-box-large"
      @click.self="hide"
    >
      <Button
        :is-icon-only="true"
        class="btn-close"
        icon="close"
        @click="hide"
      />
      <Img :src="srcImg" alt="" class="img-larg" loading="lazy"/>
    </div>
</template>

<script setup>
import { computed, defineProps, defineEmits, ref } from "vue";
import { array, bool, number, object, shape, string } from "vue-types";

import Img from "@/components/base/Img.vue";
import Button from "../base/Button.vue";

const props = defineProps({
  tag: string().def("div"),
  images: array({
    aspect_ratio: number(),
    file_path: string(),
    height: number(),
    vote_average: number(),
    vote_count: number(),
    width: number(),
  }),
});

const srcImg = computed(() => {
  return `https://image.tmdb.org/t/p/w500${props.images?.file_path}`;
});

const visible = ref(false);

const showImg = () => {
  visible.value = !visible.value;
};

const hide = () => {
  visible.value = !visible.value;
};
</script>

