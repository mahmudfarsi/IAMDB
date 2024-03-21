<template>
  <div class="w-full">
    <Section class="w-full cover-main--desktop">
      <Container class="mx-auto">
        <div
          class="w-full flex flex-col items-center md:items-end pt-[230px] md:pt-[270px] gap-[170px] md:gap-[180px]"
        >
          <h1
            class="main-tite font-roboto font-medium text-xlg md:text-2xlg text-white smm:leading-[56px] md:leading-[112.5px]"
          >
            IAMDB
          </h1>
          <form @submit.prevent="send(inputValue)" class="form">
            <input
              v-model="inputValue"
              type="text"
              placeholder="Type the name of your favorite movie ..."
              class="input"
            />
            <Button
              tag="button"
              :is-icon-only="false"
              icon="search"
              type="submit"
              class="submit"
            >
              Search
            </Button>
          </form>
        </div>
      </Container>
    </Section>

    <Section class="w-full mt-[40px]">
      <Container class="mx-auto">
        <Ul class="flex flex-col gap-[50px]">
            <router-link v-for="item in visibleData" :key="item.id" :to="{path:`/movie/${item.id}`}">
              <CardItem  :movie="item"  />
            </router-link>
        </Ul>
      </Container>
    </Section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";



import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
import Section from "@/components/base/Section.vue";
import Ul from "@/components/base/Ul.vue";
import CardItem from "@/components/main/CardItem.vue";
// import Input from "@/components/base/Input.vue";
// import { useFetchItem } from "@/composables/getDataItems.js";


const inputValue = ref('');

// const {isLoading,fetchData,datas} = useFetchItem({inputValue})





const datas = ref([]);



const send = (v) => {

  inputValue.value = '';
  getData(v);
}


const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
  },
};
const getData = async (name) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options);
  datas.value = await response.json();
};



const visibleData = computed(() => {
  if(datas.value){
    console.log(datas.value);
    return datas.value.results
  }
  return 'no data !'
});








</script>



















<style scoped>
@media screen and (min-width: 300px) and (max-width: 768px) {
  .cover-main--desktop {
    width: 100%;
    background-image: url("../../public/Group\ 43\ \(1\).png");
    background-size: cover;
    background-position-x: left;
    background-repeat: no-repeat;
  }
}
@media screen and (min-width: 768px) {
  .cover-main--desktop {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        350deg,
        rgba(27, 23, 23, 1),
        rgba(57, 57, 57, 0)
      ),
      url("../../public/Group\ 43.png");
    background-size: contain;
    background-position-x: left;
    background-repeat: no-repeat;
  }
}

.form {
  @apply w-full flex flex-col md:flex-row gap-[15px];
}

.input {
  @apply rounded-curve-100 flex-1 bg-transparent outline-none border-[1px] px-[32px] py-[12px] md:py-[32px] border-white-iamdb-1  text-xsm md:text-md text-white;
}

.input::placeholder {
  @apply text-white-iamdb-1;
}

.submit {
  @apply bg-red text-white font-roboto font-normal smm:text-xsm md:text-md inline-flex;
}
</style>
