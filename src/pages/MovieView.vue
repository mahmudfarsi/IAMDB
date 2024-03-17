<template>
  <div class=" flex flex-col items-center">
    <!--  image background  -->
    <div class="w-full ">
      <Img src="../../public/image 1.png" alt="cover"/>
    </div>


    <!--  section-1  -->
    <Container class="md:px-[40px] mt-[-100px] md:mt-[-210px]">
        <Section>
            <Row tag="div" is-row="true" class=" gap-[45px]">
                <div class="box-left smm:hidden md:flex md:flex-col">
                    <Img src="../../public/image 2.png"/>
                    <div class="indicator-box flex items-center gap-[30px] mt-[20px] px-[15px]">
                        <div class="radial-progress text-red" style="--value:80;" role="progressbar">7.9</div>
                        <div class="flex flex-col">
                            <span class="text-white-iamdb-1 font-bold text-2xsm">
                                1,046,592 
                            </span>
                            <small class=" font-roboto font-normal text-xsm text-white-iamdb-1">
                                ratings on IMDB
                            </small>
                        </div>
                    </div>
                </div>
                <div class="box-middle pt-[55px]">
                    <SpecsMovie/>
                </div>
                <div class="box-right md:pt-[55px]">
                    <h2 class="font-roboto font-bold text-xmd md:text-2xmd leading-[50px] text-white-iamdb-1">
                        Cast & Crew
                    </h2>
                    <div class="flex flex-col gap-[10px] mt-[15px]">
                        <CardCast/>
                        <CardCast/>
                        <CardCast/>
                        <CardCast/>
                        <CardCast/>
                    </div>
                    <Button tag="button" :is-icon-only="false" icon="right-flesh" class="text-red mt-[20px] ml-[100px] md:ml-[-20px]">
                        show all
                    </Button>
                </div>
            </Row>
        </Section>
    </Container>

  </div>
</template>

<script setup>
    import Img from "@/components/base/Img.vue";
    import Section from "@/components/base/Section.vue";
    import Container from "@/components/base/Container.vue";
    import Row from '@/components/base/Row.vue';
    import SpecsMovie from '@/components/main/SpecsMovie.vue'
    import CardCast from '@/components/main/CardCast.vue'
    import Button from '@/components/base/Button.vue'
</script>
