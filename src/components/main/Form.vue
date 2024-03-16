<template>
    <form @submit.prevent="submit" class="w-full flex flex-row gap-[15px]">
        <input type="text" class="rounded-curve-100 flex-1 bg-transparent outline-none border-[1px] px-[20px] text-lg text-white border-white-iamdb-1">
        <Button tag="button" :is-icon-only="false" icon="search" type="submit" class="bg-red text-white font-roboto font-normal text-md ">
            Search
        </Button>
    </form>
</template>



<script setup>
    import Button from '@/components/base/Button.vue'
</script>