<script setup lang="ts">
import { id } from 'postcss-selector-parser';

interface Props {
    rawData: {
        id: number;
        from: string;
        sending_date: string;
        to: string;
        published: string;
        customer: string;
        price: number;
        info: string;
    };
}
defineProps<Props>();
</script>

<template>
    <div
        class="grid grid-cols-[100px_200px_180px_200px_100px_150px_200px] gap-1 px-2 py-2 border-b border-zinc-800 items-center last:border-none"
    >
        <p class="text-14 text-zinc-600" v-text="rawData.id" />
        <div class="">
            <p class="text-16" v-text="rawData.from" />
            <p class="text-14" v-text="rawData.sending_date" />
        </div>
        <p class="text-16" v-text="rawData.to" />
        <p class="text-14 text-zinc-600" v-text="rawData.info" />
        <p class="text-16 text-center" v-text="`${rawData.price} p.`" />
        <p class="text-14 text-zinc-600 text-center" v-text="rawData.published" />
        <p class="text-16" v-text="rawData.customer" />
    </div>
</template>

<style scoped></style>
