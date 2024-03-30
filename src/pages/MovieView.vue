<template>
  <div v-if="details" class="w-full flex flex-col items-center">
    <!--  image background  -->
    <Backdrop :Backdrop="detailTmdb.backdrop_path" />

    <!--  section-1  -->
    <Container class="md:px-[40px] mt-[-100px] md:mt-[-210px] relative z-[888]">
      <Section>
        <Row tag="div" is-row="true" class="gap-[45px]">
          <CardImdb :details="details" class="smm:hidden md:flex" />
          <div class="box-middle pt-[55px]">
            <SpecsMovie :details="details" />
          </div>
          <div class="box-right md:pt-[55px]">
            <h2
              class="font-roboto font-bold text-xmd md:text-2xmd leading-[50px] text-white-iamdb-1"
            >
              Cast & Crew
            </h2>
            <div class="flex flex-col md:max-w-[276px] gap-[15px] mt-[15px]">
              <CardCast v-for="item in sliceCrew" :crew="item" />
            </div>
            <Button
              tag="button"
              :is-icon-only="false"
              icon="right-flesh"
              class="text-red mt-[20px] ml-[100px] md:ml-[-20px]"
              @click="showMore"
            >
              {{ titleMore }}
            </Button>
          </div>
        </Row>
      </Section>
    </Container>
    <!--  section-2  -->
    <Container class="mt-[100px]">
      <Section class="md:pl-[45px]">
        <h2
          class="title-photo text-white-iamdb-1 font-roboto font-bold text-xmd md:text-2xmd leading-[50px]"
        >
          Photos
        </h2>
        <Row
          class="mt-[20px] gap-[20px] justify-between"
          tag="ul"
          :is-row="true"
        >
          <ImgBox
            tag="li"
            v-for="item in sliceData"
            :images="item"
            class="list-none"
          />
        </Row>
      </Section>
    </Container>
    <!--  section-3  -->
    <Section class="flex flex-col justify-center items-center mt-[50px]">
      <Container class="w-full pl-[45px]">
        <h2
          class="title-similar text-white-iamdb-1 font-roboto font-bold text-xmd md:text-2xmd leading-[50px]"
        >
          More like this
        </h2>
      </Container>
      <div class="w-screen px-[2px]">
        <Row
          :is-row="false"
          class="flex flex-nowrap items-center overflow-x-scroll gap-[30px] mt-[50px]"
        >
          <RouterLink
            v-for="item in similarList"
            :title="item.title"
            :to="{ path: `/movie/${item.id}` }"
          >
            <CardSlider :slide="item" />
          </RouterLink>
        </Row>
      </div>
    </Section>
    <!--  section-4  -->
    <Container class="mt-[50px]">
      <Section class="md:pl-[45px]">
        <h2
          class="text-white-iamdb-1 font-roboto leading-[50px] text-xmd md:text-2xmd font-bold"
        >
          FAQs
        </h2>
        
        <div>
          <Accordion />
        </div>
      </Section>
    </Container>
  </div>

  <div v-else class="h-screen w-full flex flex-col items-center">
    <span
      class="loading loading-bars loading-lg text-white-iamdb-1 mt-[400px]"
    ></span>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { slice } from "lodash";


// import Img from "@/components/base/Img.vue";
import Section from "@/components/base/Section.vue";
import Container from "@/components/base/Container.vue";
import Row from "@/components/base/Row.vue";
import SpecsMovie from "@/components/main/SpecsMovie.vue";
import CardCast from "@/components/main/CardCast.vue";
import Button from "@/components/base/Button.vue";
import ImgBox from "@/components/main/ImgBox.vue";
import Backdrop from "@/components/main/Backdrop.vue";
import CardSlider from "@/components/main/CardSlider.vue";
import Accordion from '@/components/main/Accordion.vue'
import CardImdb from '@/components/main/CardImdb.vue';

const route = useRoute();
const ids = ref(null);
const details = ref(null);
const videos = ref(null);
const similarList = ref([]);
const imagesList = ref([]);
const listCrew = ref([]);
const detailTmdb = ref(null);
const sliceData = ref([]);
const sliceCrew = ref([]);
const toggleMore = ref(false);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
  },
};

const movieId = computed(() => {
  return route.params.id;
});

//                      fetch ----------------------
const fetchMovies = new Promise(async (res) => {
  /*         id         */
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId.value}/external_ids`,
    options
  );
  ids.value = await response.json();
  const imdb_id = ids.value.imdb_id;
  console.log(imdb_id);
  console.log("imdb_id:", ids.value);

  if (ids.value) {
    /*       details      */
    const fetchDetails = async (imdb) => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdb}&apikey=bc6f598a`
      );
      details.value = await response.json();
      console.log("details:", details.value);
    };
    fetchDetails(imdb_id);

    /*       videos       */
    const fetchVideos = async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      const result = await response.json();
      console.log("videos:", result.results);
      return (videos.value = result.results);
    };
    fetchVideos(movieId.value);

    /*        similar        */
    const fetchSimilar = async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        options
      );
      const result = await response.json();
      console.log("similar:", result.results);
      return (similarList.value = await result.results);
    };

    fetchSimilar(movieId.value);

    /*       images        */
    const fetchImages = async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images`,
        options
      );
      const result = await response.json();
      console.log("images:", result.backdrops);
      imagesList.value = await result.backdrops;
      sliceData.value = await slice(imagesList.value, 0, 8);
      console.log("slice data:", sliceData.value);
      return sliceData.value.value;
    };

    fetchImages(movieId.value);

    /*          crew          */
    const fetchCrew = async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        options
      );
      const result = await response.json();
      console.log("crew", result.cast);
      listCrew.value = result.cast;
      sliceCrew.value = slice(listCrew.value, 0, 5);
    };

    /*          details-tmdb           */
    const fetchDetailTmdb = async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=details&language=en-US`,
        options
      );
      const result = await response.json();
      detailTmdb.value = await result;
      console.log("detailTmdb:", detailTmdb.value);
    };

    fetchDetailTmdb(movieId.value);

    fetchCrew(movieId.value);
  } else {
    return "No Data!";
  }
});

const titleMore = computed(() => {
  if (toggleMore.value) {
    return "show less";
  } else if (!toggleMore.value) {
    return "show more";
  }
});

const showMore = () => {
  toggleMore.value = !toggleMore.value;
  if (!toggleMore.value) {
    return (sliceCrew.value = slice(listCrew.value, 0, 5));
  }

  return (sliceCrew.value = slice(listCrew.value, 0, 10));
};

onMounted(async () => {
  watch(movieId, () => {
    console.log("change id");
  });
});
</script>
