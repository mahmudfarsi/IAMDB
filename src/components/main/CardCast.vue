<template>
    <Card tag="li" class="flex items-center flex-nowrap gap-[10px]">
        <template #header>
            <Img src="../../../public/Frame 41.png" alt="" class="w-[75px] h-[75px] rounded-full"/>
        </template>
        <div class="body">
            <h3 class="name font-roboto font-bold text-xsm leading-[18px] text-white-iamdb-1">
                Robert Downey Jr.
            </h3>
            <p class="role text-white-iamdb-1 font-roboto font-normal text-sm leading-[16px]">
                as Tony Stark
            </p>
        </div>
    </Card>
</template>


<script setup>
    import Card from '@/components/base/Card.vue'
    import Img from '@/components/base/Img.vue'
</script>