<script setup lang="ts">
const data = [
    {
        idx: 123,
        category: 'Мебель',
        status: 'Заказ №_123122',
        from: 'Город 1',
        to: 'Город 2',
        date: '25.04.2023',
        body_type: 'Малотоннажное ТС (от 3,5 до 12 тонн)', // габариты
        loading_type: 'с полной растентовкой',
        weight: '20кг',
        length: '50см',
        width: '100см',
        height: '75см',
        price: '2000',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit hic, illum incidunt ipsam nam officia placeat repellendus ullam vitae voluptatum!',
    },
    {
        idx: 123,
        category: 'Мебель',
        status: 'Заказ №_123122',
        from: 'Город 1',
        to: 'Город 2',
        date: '25.04.2023',
        body_type: 'Малотоннажное ТС (от 3,5 до 12 тонн)', // габариты
        loading_type: 'с полной растентовкой',
        weight: '20кг',
        length: '50см',
        width: '100см',
        height: '75см',
        price: '2000',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad error et, in iusto natus nostrum quidem sed! Corporis debitis et hic illum incidunt ipsa iste laborum molestiae, natus neque nisi repudiandae ut vel voluptas?',
    },
];
</script>

<template>
    <div class="">
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
                            <p class="text-20 mb-1" v-text="item.category" />
                            <p class="text-24" v-text="`${item.price} &#8381;`" />
                            <p
                                class="text-14 max-w-[85%] text-gray-500"
                                v-text="item.description"
                            />
                        </div>
                        <button
                            v-text="'Посмотреть заказ'"
                            class="text-center block rounded-md bg-emerald-300 cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-400 active:bg-emerald-500 focus:bg-emerald-500 disabled:bg-zinc-400 disabled:cursor-not-allowed"
                        />
                    </div>
                    <div class="text-14 grid gap-2 content-start">
                        <span class="flex items-center gap-1.5">
                            <span
                                class="material-symbols-outlined text-20"
                                v-text="'location_on'"
                            />
                            <span class="" v-text="`Откуда: ${item.from}`" />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span
                                class="material-symbols-outlined text-20"
                                v-text="'location_on'"
                            />
                            <span class="" v-text="`Куда: ${item.to}`" />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-20" v-text="'scale'" />
                            <span class="" v-text="`Масса: ${item.weight}`" />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-20" v-text="'width'" />
                            <span
                                class=""
                                v-text="`Размер: ${item.length} x ${item.width} x ${item.height}`"
                            />
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span
                                class="material-symbols-outlined text-20"
                                v-text="'aspect_ratio'"
                            />
                            <span
                                class=""
                                v-text="
                                    `Объем: ${(
                                        (parseInt(item.length) *
                                            parseInt(item.width) *
                                            parseInt(item.height)) /
                                        1000000
                                    ).toFixed(3)} м&#179;`
                                "
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
