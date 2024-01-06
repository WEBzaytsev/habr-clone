<script setup lang="ts">
const data = [
    {
        idx: 123,
        type: 'Wing Van',
        img: 'Wing-Van.png',
        dimensions: '32 to 40 x 7.8 x 7.8 ft',
        weightLimits: '12000kg to 28000kg',
        price: '7500',
        activity: false,
    },
    {
        idx: 124,
        type: '6w Fwd Truck',
        img: 'FWD-truck-icon_1.png',
        dimensions: '18 x 6 x 7 ft',
        weightLimits: '7000kg',
        price: '4850',
        activity: false,
    },
    {
        idx: 154,
        type: '6w Fwd Truck',
        img: 'FWD-truck-icon_1.png',
        dimensions: '18 x 6 x 7 ft',
        weightLimits: '7000kg',
        price: '4850',
        activity: false,
    },
    {
        idx: 1223,
        type: 'Closed Van',
        img: 'Closed_Van.png',
        dimensions: '10 to 14 x 6 x 6 ft',
        weightLimits: '2000kg to 4000kg',
        price: '1800',
        activity: false,
    },
    {
        idx: 6698,
        type: '6w Fwd Truck',
        img: 'FWD-truck-icon_1.png',
        dimensions: '18 x 6 x 7 ft',
        weightLimits: '7000kg',
        price: '4850',
        activity: false,
    },
    {
        idx: 12223,
        type: 'Open Truck',
        img: 'PT.png',
        dimensions: '10 to 21 x 6 ft x open',
        weightLimits: '2000kg and 7000kg',
        price: '2300',
        activity: 'Заказ №_123122',
    },
];
</script>

<template>
    <div class="">
        <div
            class="w-full overflow-auto relative rounded-md border border-emerald-300 max-h-[calc(100vh_-_245px)] max-w-[calc(100vw_-_280px)]"
        >
            <div
                class="grid grid-cols-[50px_200px_200px_200px_250px_150px_100px_100px] border-b py-1 px-5 text-center"
            >
                <span class="text-left">№</span>
                <span>Тип</span>
                <span>Картинка</span>
                <span>Размеры</span>
                <span>Ограничения по весу</span>
                <span>Базовая цена</span>
                <span>Статус</span>
                <span></span>
            </div>
            <ul class="grid gap-2">
                <li
                    v-for="car in data"
                    :key="car.idx"
                    class="grid grid-cols-[50px_200px_200px_200px_250px_150px_100px_100px] items-center border-b py-2 px-5 text-center"
                >
                    <span class="text-left" v-text="car.idx" />
                    <span v-text="car.type" class="px-2" />

                    <figure class="px-2">
                        <img :src="`/img/${car.img}`" alt="img" loading="lazy" />
                    </figure>
                    <span v-text="car.dimensions" class="px-2" />
                    <span v-text="car.weightLimits" class="px-2" />
                    <span v-text="car.price" class="px-2" />
                    <span>
                        <span v-if="car.activity" v-text="car.activity" />
                        <span v-else v-text="'Свободен'" />
                    </span>
                    <span class="flex gap-2 items-center px-2 justify-center">
                        <RouterLink to="#" title="Редактировать">
                            <span
                                class="material-symbols-outlined text-emerald-600"
                                v-text="'settings_applications'"
                            />
                        </RouterLink>
                        <RouterLink to="#" title="Удалить">
                            <span
                                class="material-symbols-outlined text-red-500"
                                v-text="'disabled_by_default'"
                            />
                        </RouterLink>
                    </span>
                </li>
            </ul>
        </div>
        <div class="pt-4">
            <button
                v-text="'Добавить машину'"
                class="text-center text-18 mx-auto block rounded-md bg-emerald-300 cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-400 active:bg-emerald-500 focus:bg-emerald-500 disabled:bg-zinc-400 disabled:cursor-not-allowed"
            />
        </div>
    </div>
</template>

<style scoped></style>
