<script setup lang="ts"></script>

<template>
    <div class="grid grid-cols-4 gap-4">
        <RouterLink
            to="/user/my-trucks"
            class="shadow-md hover:shadow-lg transition-all duration-300 border bg-white rounded-md py-5 px-10"
        >
            <span
                class="material-symbols-outlined text-50 text-emerald-400 text-center block mb-2"
                v-text="'local_shipping'"
            />
            <span class="text-24 block text-center" v-text="'Мои машины'" />
            <div class="grid mt-3 text-14">
                <span class="" v-text="`Всего: 5`" />
                <span class="" v-text="`В пути: 1`" />
            </div>
        </RouterLink>
        <RouterLink
            to="/user/my-cargos"
            class="shadow-md hover:shadow-lg transition-all duration-300 border bg-white rounded-md py-5 px-10"
        >
            <span
                class="material-symbols-outlined text-50 text-emerald-400 text-center block mb-2"
                v-text="'package_2'"
            />
            <span class="text-24 block text-center" v-text="'Мои грузы'" />
            <div class="grid mt-3 text-14">
                <span class="" v-text="`Всего: 10`" />
                <span class="" v-text="`В пути: 1`" />
                <span class="" v-text="`Ожидают получения: 1`" />
            </div>
        </RouterLink>
    </div>
</template>

<style scoped></style>
