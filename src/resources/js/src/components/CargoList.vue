<script setup lang="ts">
import TableRow from '@/components/TableRow.vue';
import { ref } from 'vue';
import AppInput from '@/components/form/AppInput.vue';

const data = [
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982581,
        from: 'Город 89',
        sending_date: '19.12.2023',
        to: 'Город 7',
        published: '12.12.2023',
        customer: 'Иван С.',
        price: 9999,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 6982561,
        from: 'Город 11',
        sending_date: '19.12.2023',
        to: 'Город 28',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7981561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982581,
        from: 'Город 89',
        sending_date: '19.12.2023',
        to: 'Город 7',
        published: '12.12.2023',
        customer: 'Иван С.',
        price: 9999,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 6982561,
        from: 'Город 11',
        sending_date: '19.12.2023',
        to: 'Город 28',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7981561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982581,
        from: 'Город 89',
        sending_date: '19.12.2023',
        to: 'Город 7',
        published: '12.12.2023',
        customer: 'Иван С.',
        price: 9999,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 6982561,
        from: 'Город 11',
        sending_date: '19.12.2023',
        to: 'Город 28',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7981561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982581,
        from: 'Город 89',
        sending_date: '19.12.2023',
        to: 'Город 7',
        published: '12.12.2023',
        customer: 'Иван С.',
        price: 9999,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 6982561,
        from: 'Город 11',
        sending_date: '19.12.2023',
        to: 'Город 28',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7981561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982581,
        from: 'Город 89',
        sending_date: '19.12.2023',
        to: 'Город 7',
        published: '12.12.2023',
        customer: 'Иван С.',
        price: 9999,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 6982561,
        from: 'Город 11',
        sending_date: '19.12.2023',
        to: 'Город 28',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7981561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
    {
        id: 7982561,
        from: 'Город 1',
        sending_date: '19.12.2023',
        to: 'Город 2',
        published: '12.12.2023',
        customer: 'Иван',
        price: 888,
        info: '22т, 80м, отдельная машина',
    },
];

const filters = ref({
    fromCity: '',
    toCity: '',
});
</script>

<template>
    <div class="">
        <div class="mb-5 grid grid-cols-[180px_180px_120px_100px] gap-4">
            <AppInput
                name="fromCity"
                :model-value="filters.fromCity"
                label="Откуда"
                placeholder="Откуда"
                type="text"
            />
            <AppInput
                name="toCity"
                :model-value="filters.toCity"
                label="Куда"
                placeholder="Куда"
                type="text"
            />
            <button
                v-text="'Применить'"
                class="text-center text-14 block w-full rounded-md bg-emerald-300 mx-auto cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-400 active:bg-emerald-500 focus:bg-emerald-500 disabled:bg-zinc-400 disabled:cursor-not-allowed"
            />
            <button
                v-text="'Сбросить'"
                class="text-center text-14 block w-full rounded-md bg-white border border-emerald-300 mx-auto cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-100 active:bg-emerald-200 focus:bg-emerald-200 disabled:bg-zinc-400 disabled:cursor-not-allowed"
            />
        </div>
        <div
            class="max-h-[calc(100vh_-_245px)] max-w-[calc(100vw_-_280px)] w-full overflow-auto relative rounded-md border border-emerald-300"
        >
            <div class="grid gap-1">
                <div
                    class="grid grid-cols-[100px_200px_180px_200px_100px_150px_200px] gap-1 px-2 py-2 items-center bg-emerald-300 sticky top-0 w-full z-20 left-0"
                >
                    <p v-text="'ID'" />
                    <p v-text="'Отправка'" />
                    <p v-text="'Прибытие'" />
                    <p v-text="'Информация'" />
                    <p v-text="'Цена'" class="text-center" />
                    <p v-text="'Опубликовано'" class="text-center" />
                    <p v-text="'Пользователь'" />
                </div>
                <TableRow v-for="(item, idx) in data" :key="idx" :raw-data="item" />
            </div>
        </div>
        <div class="flex items-center w-full justify-between pt-4">
            <p class="" v-text="`Всего ${data.length}`" />
            <div class="flex items-center gap-2">
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 53 53"
                    fill="none"
                    class="group cursor-pointer select-none md:w-auto h-auto w-7 fill-white hover:fill-emerald-400"
                >
                    <rect
                        x="1.5"
                        y="1.7"
                        width="50"
                        height="50"
                        rx="25"
                        stroke-width="2.5"
                        class="stroke-white group-hover:stroke-emerald-400"
                    />
                    <path
                        d="M30.403 17.5L21.1993 26.7037L30.403 35.9074"
                        class="stroke-emerald-400 group-hover:stroke-white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span class="px-1 text-18 leading-none">1</span>
                <span class="px-1 hover:underline cursor-pointer text-18 leading-none"> 2 </span>
                <span class="text-18 leading-none">...</span>
                <span class="px-1 hover:underline cursor-pointer text-18 leading-none"> 10 </span>

                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 53 53"
                    fill="none"
                    class="group cursor-pointer select-none md:w-auto h-auto w-7 fill-white hover:fill-emerald-400"
                >
                    <rect
                        x="-1.31481"
                        y="1.31481"
                        width="50"
                        height="50"
                        rx="25"
                        transform="matrix(-1 0 0 1 50.2179 0.407471)"
                        class="stroke-white group-hover:stroke-emerald-400"
                        stroke-width="2.5"
                    />
                    <path
                        d="M22.6068 17.5L31.8105 26.7037L22.6068 35.9074"
                        class="stroke-emerald-400 group-hover:stroke-white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
