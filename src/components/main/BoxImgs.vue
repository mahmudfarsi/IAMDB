<template>
    <Row tag="ul" is-row="true" class="gap-[14px]">
        <li>
            <Img src="../../../public/Rectangle 5 (1).png" alt="" class="img"/>
        </li>
        <li>
            <Img src="../../../public/Rectangle 5.png" alt="" class="img"/>
        </li>
        <li>
            <Img src="../../../public/Rectangle 6 (1).png" alt="" class="img"/>
        </li>
        <li>
            <Img src="../../../public/Rectangle 6.png" alt="" class="img"/>
        </li>
        <li>
            <Img src="../../../public/Rectangle 7.png" alt="" class="img"/>
        </li>
        <li>
            <Img src="../../../public/Rectangle 8.png" alt="" class="img"/>
        </li>
        <li>
            <Img src="../../../public/Rectangle 9.png" alt="" class="img"/>
        </li>
    </Row>
</template>




<script setup>
    import Img from '@/components/base/Img.vue';
    import Row from '@/components/base/Row.vue'
</script>


<style scoped>
    .img {
        @apply smm:w-[158px] md:w-[216px]
    }
</style>