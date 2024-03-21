<template>
  <div class="flex flex-col items-center">
    <!--  image background  -->
    <div class="w-full">
      <Img src="" alt="cover" />
    </div>

    <!--  section-1  -->
    <Container class="md:px-[40px] mt-[-100px] md:mt-[-210px]">
      <Section>
        <Row tag="div" is-row="true" class="gap-[45px]">
          <div class="box-left smm:hidden md:flex md:flex-col">
            <Img src="../../public/image 2.png" />
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
            <SpecsMovie :details="datas" />
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
 

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
  },
};
const route = useRoute();
const details =  ref([]);




//       help ---------------------------------------------
const getDetails = new Promise(async (res) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?append_to_response=details&language=en-US`, options);
  details.value = await response.json()
  return res(details.value)
})

let d = null;
getDetails.
  then((r) => d = r).
  then((r) => console.log(r))
  console.log(d);





// let val = null;
// getDetailes().then((ret) => val = ret)
// console.log(val);








// console.log(details.value);
// console.log(details.value.title);



// const datas = computed(() => {
//     if(details.value){
//         return details.value
//     }
//     return 'No Data!'
// })

</script>
