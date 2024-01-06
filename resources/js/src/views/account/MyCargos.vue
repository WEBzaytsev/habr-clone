<script setup lang="ts">
const data = [
    {
        idx: 123,
        category: 'Бытовая химия',
        subcategories: ['хрупкий груз', 'подкатегория 2'],
        status: {
            text: 'Переозчик не назначен',
            order: null,
        },
        from: 'Город 1',
        to: 'Город 2',
        upload_date: '25.04.2023',
        unload_date: '25.04.2023',
        truck_type: 'Малотоннажное ТС (от 3,5 до 12 тонн)',
        loading_type: 'с полной растентовкой',
        weight: '20кг',
        length: '50см',
        width: '100см',
        height: '75см',
        price: '10 500',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit hic, illum incidunt ipsam nam officia placeat repellendus ullam vitae voluptatum!',
        uploading: false,
        unloading: true,
    },
    {
        idx: 123,
        category: 'Мебель',
        subcategories: [],
        status: {
            order: '123122',
        },
        from: 'Город 1',
        to: 'Город 2',
        upload_date: '25.04.2023',
        unload_date: '25.04.2023',
        truck_type: 'Рефрежиратор',
        loading_type: 'с полной растентовкой',
        weight: '20кг',
        length: '50см',
        width: '100см',
        height: '75см',
        price: '2000',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad error et, in iusto natus nostrum quidem sed! Corporis debitis et hic illum incidunt ipsa iste laborum molestiae, natus neque nisi repudiandae ut vel voluptas?',
        uploading: true,
        unloading: false,
    },
];
</script>

<template>
    <div>
        <div class="w-full overflow-auto relative max-h-[calc(100vh_-_245px)]">
            <ul class="grid gap-4 p-5">
                <li
                    v-for="item in data"
                    :key="item.idx"
                    class="shadow-md border bg-white rounded-md py-5 px-10 text-center grid grid-cols-[2fr_1fr]"
                >
                    <div class="flex flex-col justify-between items-start gap-7">
                        <div class="text-left">
                            <span class="text-14 opacity-60" v-text="`№ ${item.idx}`" />

                            <p class="text-22 font-medium">
                                {{ item.category }}
                                <span
                                    v-if="!item.status.order"
                                    class="text-14 font-normal text-gray-700"
                                    v-html="`(${item.status.text})`"
                                />
                                <RouterLink
                                    v-else
                                    to="#"
                                    class="text-14 font-normal text-gray-700 hover:underline"
                                >
                                    (Заказ № {{ item.status.order }})
                                </RouterLink>
                            </p>
                            <p
                                class="text-14 text-gray-500"
                                v-if="item.subcategories.length"
                                v-text="item.subcategories.join(', ')"
                            />
                            <span class="flex items-center gap-1.5 my-3">
                                <span
                                    class="material-symbols-outlined text-20"
                                    v-text="'location_on'"
                                />
                                <span class="text-16" v-html="`${item.from}`" />
                                <span
                                    class="material-symbols-outlined text-20"
                                    v-text="'trending_flat'"
                                />
                                <span class="text-16" v-html="`${item.to}`" />
                            </span>

                            <p class="text-24 font-medium" v-text="`${item.price} &#8381;`" />
                            <p
                                class="text-14 max-w-[85%] text-gray-500"
                                v-text="item.description"
                            />
                            <div class="flex items-center gap-5 mt-5">
                                <button
                                    v-if="item.status.order"
                                    v-text="'Посмотреть заказ'"
                                    class="text-center block rounded-md bg-emerald-300 cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-400 active:bg-emerald-500 focus:bg-emerald-500 disabled:bg-zinc-400"
                                />
                                <div class="flex items-center gap-3" v-else>
                                    <RouterLink
                                        to="/"
                                        class="text-center block rounded-md bg-emerald-300 cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-400 active:bg-emerald-500 focus:bg-emerald-500 disabled:bg-zinc-400"
                                    >
                                        Найти перевозчика
                                    </RouterLink>
                                    <button
                                        v-text="'Редактировать'"
                                        class="text-center block rounded-md border border-emerald-300 cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-50 active:bg-emerald-100 focus:bg-emerald-100 disabled:bg-zinc-400"
                                    />
                                </div>
                                <span class="flex items-center gap-1.5 text-14">
                                    <span
                                        class="material-symbols-outlined text-20"
                                        v-text="'event_upcoming'"
                                    />
                                    <span
                                        v-html="
                                            `Дата отправки: <span class='font-semibold'>${item.upload_date}</span>`
                                        "
                                    />
                                </span>
                                <span class="flex items-center gap-1.5 text-14">
                                    <span
                                        class="material-symbols-outlined text-20"
                                        v-text="'free_cancellation'"
                                    />
                                    <span
                                        v-html="
                                            `Дата прибытия: <span class='font-semibold'>${item.unload_date}</span>`
                                        "
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="text-14 grid gap-2 content-start">
                        <span class="flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-20" v-text="'scale'" />
                            <span
                                v-html="`Масса: <span class='font-semibold'>${item.weight}</span>`"
                            />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-20" v-text="'width'" />
                            <span
                                v-html="
                                    `Размер:  <span class='font-semibold'>${item.length} x ${item.width} x ${item.height}</span>`
                                "
                            />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span
                                class="material-symbols-outlined text-20"
                                v-text="'aspect_ratio'"
                            />
                            <span
                                v-html="
                                    `Объем: <span class='font-semibold'>${(
                                        (parseInt(item.length) *
                                            parseInt(item.width) *
                                            parseInt(item.height)) /
                                        1000000
                                    ).toFixed(3)} м&#179;</span>`
                                "
                            />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span
                                class="material-symbols-outlined text-20"
                                v-text="'vertical_align_bottom'"
                            />
                            <span
                                v-html="
                                    `Тип погрузки: <span class='font-semibold'>${item.loading_type}</span>`
                                "
                            />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span
                                class="material-symbols-outlined text-20"
                                v-text="'airport_shuttle'"
                            />
                            <span
                                v-html="
                                    `Тип машины: <span class='font-semibold'>${item.truck_type}</span>`
                                "
                            />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-20" v-text="'forklift'" />
                            <span v-text="`Загрузка при отправке.`" />
                            <span
                                v-if="item.uploading"
                                class="material-symbols-outlined text-20 text-green-500"
                                v-text="'done'"
                            />
                            <span
                                v-else
                                class="material-symbols-outlined text-20 text-red-500"
                                v-text="'close'"
                            />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-20" v-text="'forklift'" />
                            <span v-text="`Разгрузка при получении.`" />
                            <span
                                v-if="item.unloading"
                                class="material-symbols-outlined text-20 text-green-500"
                                v-text="'done'"
                            />
                            <span
                                v-else
                                class="material-symbols-outlined text-20 text-red-500"
                                v-text="'close'"
                            />
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="pt-4">
            <button
                v-text="'Добавить груз'"
                class="text-center text-18 mx-auto block rounded-md bg-emerald-300 cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-400 active:bg-emerald-500 focus:bg-emerald-500 disabled:bg-zinc-400 disabled:cursor-not-allowed"
            />
        </div>
    </div>
</template>

<style scoped></style>
