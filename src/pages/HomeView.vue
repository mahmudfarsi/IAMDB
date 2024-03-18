<template>
  <div class="wrapper">
    <Section class="w-full cover-main--desktop">
      <Container class=" mx-auto">
        <div
          class="w-full flex flex-col items-center md:items-end pt-[230px] md:pt-[270px] gap-[170px] md:gap-[180px]"
        >
          <h1
            class="main-tite font-roboto font-medium text-xlg md:text-2xlg text-white smm:leading-[56px] md:leading-[112.5px]"
          >
            IAMDB
          </h1>
          <Form />
        </div>
      </Container>
    </Section>
  </div>
</template>

<script setup>
import Container from "@/components/base/Container.vue";
import Button from "@/components/base/Button.vue";
import Form from "@/components/main/Form.vue";
import Section from "@/components/base/Section.vue";
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
    background:linear-gradient( 350deg,rgba(27, 23, 23, 1),rgba(57, 57, 57, 0)),url('../../public/Group\ 43.png') ;
    background-size: contain;
    background-position-x: left;
    background-repeat: no-repeat;
  }
}
</style>
