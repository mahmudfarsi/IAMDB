<template>
    <Card tag="li" class="bg-purple-700 flex gap-[20px] max-w-[600px]">
        <template #header>
            <Img src="../../../public/image 2.png" alt="ll"/>
        </template>
        <div class="body pt-[20px]">
            <h2 class="title font-roboto font-bold text-5xl text-white-iamdb-1">iron man</h2>
            <p class="director text-white-iamdb-1 font-roboto font-normal text-xsm mt-[10px]">director : joseph magiery</p>
            <p class="decsription w-[300px] text-white-iamdb-1 font-roboto mt-[40px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, voluptatibus!</p>
            <div class="box-detail mt-[20px] flex flex-nowrap items-center gap-[10px]">
                <span class="year text-white-iamdb-1">2018</span>
                <div class="dot w-[7px] h-[7px] rounded-full bg-white-iamdb-1"></div>
                <span class="year text-white-iamdb-1">2h 6m</span>
            </div>
        </div>
    </Card>
</template>





<script setup>
    import Card from '@/components/base/Card.vue'
    import Img from '@/components/base/Img.vue'
</script>