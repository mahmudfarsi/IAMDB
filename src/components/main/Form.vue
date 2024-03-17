<template>
    <form @submit.prevent="submit" class="w-full flex flex-col md:flex-row gap-[15px]">
        <input type="text" class="input" placeholder="Type the name of your favorite movie ...">
        <Button tag="button" :is-icon-only="false" icon="search" type="submit" class="submit">
            Search
        </Button>
    </form>
</template>



<script setup>
    import Button from '@/components/base/Button.vue'
</script>


<style lang="postcss" scoped>
    .input{
        @apply  rounded-curve-100 flex-1 bg-transparent outline-none border-[1px] px-[32px] py-[12px] md:py-[18px] border-white-iamdb-1  text-xsm md:text-md text-white 
    }

    .input::placeholder{
        @apply text-white-iamdb-1
    }

    .submit {
        @apply bg-red text-white font-roboto font-normal smm:text-xsm md:text-md 
    }
</style>