<template>
    <div class="flex  items-center justify-center transition-opacity duration-500 ">
        <Button class=" max-w-[10px] h-[10px]" tag="router-link" icon="youtube" to="youtube.com"/>
        <Button tag="router-link" icon="facebook" to="youtube.com"/>
        <Button tag="router-link" icon="twitter" to="youtube.com"/>
        <Button tag="router-link" icon="pintrest" to="youtube.com"/>
    </div>
</template>


<script setup>
    import Button from '@/components/base/Button.vue'
</script>