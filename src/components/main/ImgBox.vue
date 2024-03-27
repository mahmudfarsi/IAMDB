<template>
  <component :is="tag" class="relative cursor-pointer" @click="showImg" >
      <Img :src="srcImg" alt="" class="img"/>
      <div class="overlay w-full h-full bg-black bg-opacity-71 absolute top-0 flex justify-center items-center z-[999] rounded-curve-12 opacity-0 hover:opacity-100">
        <Button :is-icon-only="true" icon="size" />
      </div>
  </component>
  <div
      v-show="visible"
      class="w-screen h-screen fixed top-0 flex left-0 justify-center items-center backdrop-blur-xl z-[99999]"
      @click.self="hide"
    >
      <Button
        :is-icon-only="true"
        class="static hidden md:absolute md:top-[155px] md:z-[9999] md:right-[315px] md:flex"
        icon="close"
        @click="hide"
      />
      <Img :src="srcImg" alt="" class="larg" />
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

<style scoped>
.img {
  @apply smm:w-[155px] md:w-[286px] rounded-curve-12;
}

.larg {
  @apply smm:w-[280px] md:w-[790px] rounded-curve-12 
        backdrop-blur-md;
}
</style>
