<template>
  <div class="wrapper cover-main">
      <Container>
        <div class="w-full flex flex-col items-end bg-slate-200 ">
          <h1 class="main-tite font-roboto font-medium">
            IAMDB
          </h1>
        </div>
      </Container>
  </div>
</template>


<script setup>
  import Container from '@/components/base/Container.vue';
  import Button from '@/components/base/Button.vue';
</script>



<style scoped>
  .cover-main {
    width: 100%;
    background-image: url('../../public/Group\ 43.png');
    background-size: contain;
    background-position-x: left;
    background-repeat: no-repeat;
  }
</style>
