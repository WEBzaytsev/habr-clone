<script setup lang="ts">
const menu = [
    {
        icon: 'dashboard',
        text: 'Панель управления',
        route: '/user/dashboard',
    },
    {
        icon: 'local_shipping',
        text: 'Мои машины',
        route: '/user/my-trucks',
    },
    {
        icon: 'package_2',
        text: 'Мои грузы',
        route: '/user/my-cargos',
    },
    {
        icon: 'browse_activity',
        text: 'Активные',
        route: '#',
    },
    {
        icon: 'chat',
        text: 'Сообщения',
        route: '#',
    },
    {
        icon: 'history',
        text: 'История',
        route: '#',
    },
    {
        icon: 'settings',
        text: 'Настройки',
        route: '#',
    },
];
</script>

<template>
    <aside class="h-full bg-emerald-400">
        <RouterLink
            to="/"
            class="text-30 px-3 py-5 text-white border-b border-zinc-100 block w-full leading-none text-center"
        >
            Logo
        </RouterLink>
        <div class="flex flex-col justify-between h-[calc(100vh_-_71px)]">
            <ul class="p-3 grid gap-2">
                <li v-for="item in menu" :key="item.text">
                    <RouterLink :to="item.route" class="flex items-center gap-2 text-white">
                        <span class="material-symbols-outlined" v-text="item.icon" />
                        <span v-text="item.text" />
                    </RouterLink>
                </li>
            </ul>
            <div class="p-3">
                <RouterLink to="#" class="flex items-center gap-2 text-white">
                    <span class="material-symbols-outlined" v-text="'logout'" />
                    <span v-text="'Выйти'" />
                </RouterLink>
            </div>
        </div>
    </aside>
</template>

<style scoped></style>
