<script setup lang="ts">
import AppLink from '@/components/AppLink.vue';

interface HeaderProps {
    title: string;
}

defineProps<HeaderProps>();
</script>

<template>
    <header class="w-full py-5 px-5 flex justify-between items-center border-b border-zinc-800">
        <div class="">
            <h1 v-if="title" class="text-30 leading-none">{{ title }}</h1>
        </div>

        <div class="flex gap-5">
            <AppLink to="/login" text="Вход" />
            <AppLink to="/register" text="Регистрация" />
        </div>
    </header>
</template>

<style scoped></style>
