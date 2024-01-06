<script setup lang="ts">
interface FormProps {
    title: string;
    buttonText: string;
}

defineProps<FormProps>();

function submitHandler(e: FormDataEvent) {
    e.preventDefault();
}
</script>

<template>
    <form
        class="max-w-md w-full px-8 py-5 bg-white rounded-xl grid gap-4"
        @submit.prevent="submitHandler"
    >
        <p class="text-24 leading-1.2 text-center">{{ title }}</p>
        <slot name="form-fields" />
        <button
            type="submit"
            v-text="buttonText"
            class="text-center text-18 block w-full rounded-md bg-emerald-300 mx-auto cursor-pointer select-none px-5 py-2 transition-all duration-300 hover:bg-emerald-400 active:bg-emerald-500 focus:bg-emerald-500 disabled:bg-zinc-400 disabled:cursor-not-allowed"
        />
        <slot name="footer" />
    </form>
</template>

<style scoped></style>
