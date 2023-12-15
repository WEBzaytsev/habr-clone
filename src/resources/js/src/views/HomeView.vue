<script setup>
import AppSidebar from '@/components/AppSidebar.vue';
import AppHeader from '@/components/AppHeader.vue';
import CargoList from '@/components/CargoList.vue';
</script>

<template>
    <div class="grid grid-cols-[220px_auto] h-full">
        <AppSidebar />
        <div class="h-full">
            <AppHeader title="Заголовок" />
            <main class="p-7.5">
                <CargoList />
            </main>
        </div>
    </div>
</template>

<style scoped></style>
