<template>
    <div>
        <div class="header">
            <h1 class="title"></h1>
            <p class="directtor"></p>
            <div class="time">
                <span></span>
                <div class="dot"></div>
                <span></span>
                <div class="dot"></div>
                <span></span>
            </div>
            <div class="buttons">

            </div>
            <p class="description">

            </p>
        </div>

        <div class="body">
            <h2 class="details"></h2>
            <div>
                <div>
                    <h3></h3>
                    <p></p>
                </div>
                <div>
                    <h3></h3>
                    <p></p>
                </div>
                <div>
                    <h3></h3>
                    <p></p>
                </div>
                <div>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
    import { defineProps } from 'vue';
    import { string } from 'vue-types';

    import Button from '@/components/base/Button.vue'
</script>