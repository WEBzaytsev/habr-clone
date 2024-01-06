<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppHeader from '@/components/AppHeader.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isAuth = ref(false);

watchEffect(setIsAuth);

function setIsAuth(): void {
    isAuth.value = route.name === 'login' || route.name === 'register';
}
</script>

<template>
    <div class="max-h-screen h-screen">
        <div class="bg-black/50 flex justify-center items-center h-full" v-if="isAuth">
            <RouterView />
        </div>
        <div class="grid grid-cols-[220px_auto] h-full" v-else>
            <AppSidebar />
            <div class="h-full">
                <AppHeader title="Заголовок" />
                <main class="p-7.5">
                    <RouterView />
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
