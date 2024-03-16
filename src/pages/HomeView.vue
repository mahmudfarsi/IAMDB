<template>
  <div class="wrapper cover-main">
      <Container>
        <div class="w-full flex flex-col items-end pt-[270px] gap-[140px]">
          <h1 class="main-tite font-roboto font-medium text-2xlg text-white leading-[112.5px]">
            IAMDB
          </h1>
          <Form/>
        </div>
      </Container>
  </div>
</template>


<script setup>
  import Container from '@/components/base/Container.vue';
  import Button from '@/components/base/Button.vue';
  import Form from '@/components/main/Form.vue'
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
