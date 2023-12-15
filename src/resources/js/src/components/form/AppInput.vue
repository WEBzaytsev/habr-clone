<script setup lang="ts">
interface InputProps {
    label: string;
    name: string;
    type: string;
    modelValue: string | number;
    placeholder: string;
}

defineProps<InputProps>();

const emit = defineEmits(['update:modelValue']);

function handleInput(e: InputEvent): void {
    emit('update:modelValue', e.target.value);
}
</script>

<template>
    <label class="relative">
        <input
            :type="type"
            :name="name"
            :value="modelValue"
            :id="name"
            :placeholder="placeholder"
            @input="handleInput"
            class="block max-w-full rounded-md border border-zinc-400 px-5 py-2 mx-auto w-full outline-0 focus:border-emerald-500"
        />
    </label>
</template>

<style scoped></style>
