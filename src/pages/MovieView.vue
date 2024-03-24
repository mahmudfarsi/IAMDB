<template>
  <div v-if="details" class="w-full flex flex-col items-center">
    <!--  image background  -->
    <Backdrop :Backdrop="detailTmdb.backdrop_path "/>
    

    <!--  section-1  -->
    <Container class="md:px-[40px] mt-[-100px] md:mt-[-210px]">
      <Section>
        <Row tag="div" is-row="true" class="gap-[45px]">
          <div class="box-left smm:hidden md:flex md:flex-col">
            <Img :src="details.Poster" />
            <div
              class="indicator-box flex items-center gap-[30px] mt-[20px] px-[15px]"
            >
              <div
                class="radial-progress text-red"
                style="--value: 80"
                role="progressbar"
              >
                7.9
              </div>
              <div class="flex flex-col">
                <span class="text-white-iamdb-1 font-bold text-2xsm">
                  1,046,592
                </span>
                <small
                  class="font-roboto font-normal text-xsm text-white-iamdb-1"
                >
                  ratings on IMDB
                </small>
              </div>
            </div>
          </div>
          <div class="box-middle pt-[55px]">
            <SpecsMovie :details="details" />
          </div>
          <div class="box-right md:pt-[55px]">
            <h2
              class="font-roboto font-bold text-xmd md:text-2xmd leading-[50px] text-white-iamdb-1"
            >
              Cast & Crew
            </h2>
            <div class="flex flex-col gap-[10px] mt-[15px]">
              <CardCast />
              <CardCast />
              <CardCast />
              <CardCast />
              <CardCast />
            </div>
            <Button
              tag="button"
              :is-icon-only="false"
              icon="right-flesh"
              class="text-red mt-[20px] ml-[100px] md:ml-[-20px]"
            >
              show all
            </Button>
          </div>
        </Row>
      </Section>
    </Container>

    <Container class="mt-[100px]">
      <Section class="md:pl-[45px]">
        <h2
          class="title-photo text-white-iamdb-1 font-roboto font-bold text-xmd md:text-2xmd leading-[50px]"
        >
          Photos
        </h2>
        <div class="mt-[20px]">
          <BoxImgs />
        </div>
      </Section>
    </Container>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import Img from "@/components/base/Img.vue";
import Section from "@/components/base/Section.vue";
import Container from "@/components/base/Container.vue";
import Row from "@/components/base/Row.vue";
import SpecsMovie from "@/components/main/SpecsMovie.vue";
import CardCast from "@/components/main/CardCast.vue";
import Button from "@/components/base/Button.vue";
import BoxImgs from "@/components/main/BoxImgs.vue";
import Backdrop from '@/components/main/Backdrop.vue'

const route = useRoute();

// const dataFunc = (data) => {

//   const overview = data.overview;
//   const poster = data.poster_path;

//   return {
//     title,
//     overview,
//     poster,
//   };
// };

// //       help ---------------------------------------------
// const getDatas = (movie_id) => {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
//     },
//   };
//   const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

//   const get = new Promise(async (res) => {
//     const response = await fetch(url,options);
//     details.value = await response.json();
//     res(details.value)
//   });

//   get.then((res) => getData(res))
//      .catch((error) => { throw new Error(error.message) } )
// };

// const getData = (data) => {
//   details.value = data
// }
// getDatas(route.params.id);


const ids = ref(null);
const details = ref(null);
const videos = ref(null);
const similarList = ref([]);
const imagesList = ref([]);
const listCrew = ref([]);
const detailTmdb = ref(null);

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


const fetchMovies = new Promise(async (res) => {
  /*         id         */
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId.value}/external_ids`,
    options
  );
  ids.value = await response.json();
  const imdb_id = ids.value.imdb_id;
  console.log(imdb_id);
  console.log('imdb_id:',ids.value);

  if (ids.value) {

    /*       details      */
    const fetchDetails = async (imdb) => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdb}&apikey=bc6f598a`
      );
      details.value = await response.json();
      console.log('details:',details.value);
    };
    fetchDetails(imdb_id);

    /*       videos       */
    const fetchVideos = async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      const result = await response.json();
      console.log("videos:",result.results);
      return videos.value = result.results;
    };
    fetchVideos(movieId.value);


    /*        similar        */
    const fetchSimilar = async (id) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options);
      const result = await response.json();
      console.log('similar:',result.results);
      return similarList.value = result.results;
    }

    fetchSimilar(movieId.value);



    /*       images        */
    const fetchImages = async (id) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options);
      const result = await response.json();
      console.log('images:',result);
      return imagesList.value = await result
      
    }

    console.log(imagesList.value);

    fetchImages(movieId.value)


    /*          crew          */
    const fetchCrew = async (id) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
      const result = await response.json();
      console.log('crew',result.crew);
      return listCrew.value = result.cast;

    }


    /*          details-tmdb           */
    const fetchDetailTmdb = async (id) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=details&language=en-US`, options);
      const result = await response.json();
      detailTmdb.value = await result
      console.log("detailTmdb:",detailTmdb.value);
    }

    fetchDetailTmdb(movieId.value)

    fetchCrew(movieId.value)
  } else {
    return 'No Data!'
  }
});



// const fetchDatas = () => {

//   const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
//   },
// }

//   const fetchData = async () => {
//     try{
//       const response = await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?language=en-US`,options);
//       details.value = await response.json();
//       console.log(details.value);
//       const title = details.value.title;
//       return title
//     }
//     catch(err){
//       console.log(err.message);
//     }
//   }

//   return {
//     fetchData
//   }

// }

// const {fetchData} = fetchDatas();
// const {title} = fetchData();
// console.log(title);

// fetchDatas()

// getDatas(route.params.id);
// console.log(getData(route.params.id))

// const datas = computed(() => {
//     if(dataFetched.value){
//         return dataFetched.value
//     }
//     return 'No Data!'
// })

// console.log(datas.value);

// let val = null;
// getDetailes().then((ret) => val = ret)
// console.log(val);

// console.log(details.value);
// console.log(details.value.title);
</script>
