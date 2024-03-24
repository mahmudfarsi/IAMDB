<template>
    <div class="box w-full  h-[671px]">
        <img :src="srcImage" :alt="lolo" class="w-full h-full bg-rose-700 object-cover"/>
    </div>
</template>


<script setup>
    import { computed, defineProps } from 'vue';
    import {array, shape, string} from 'vue-types';

    // import Img from '@/components/base/Img.vue'

        const props = defineProps({
            Backdrop:string()
        })

        console.log(props.Backdrop);

        const srcImage = computed(() => {
            return `https://image.tmdb.org/t/p/w500/${props.Backdrop}`
        })

        // const back = computed(() => {
        //     const backGround = props.Backdrop.backdrops.file_path;
        //     const filtered =  backGround.filter(item => {return item[0]}).file_path;
        //     return filtered
        // })

        
</script>



<style scoped>
.box {
    position:relative;
  display:inline-block; z-index: -1;
}

.box:after{
    content:'';
  position:absolute;
  left:0; top:0;
  width:100%; height:100%;
  display:inline-block;
  background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0.65)), color-stop(100%,rgba(0,0,0,0))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
}
    img {
        display: block;
    }

   
</style>