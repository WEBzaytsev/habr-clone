<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Props {
    to: string;
    text: string;
    isRoute?: boolean;
}

withDefaults(defineProps<Props>(), {
    isRoute: true,
});
</script>

<template>
    <component
        :is="isRoute ? RouterLink : 'a'"
        :to="isRoute ? to : null"
        :href="isRoute ? null : to"
        v-bind="$attrs"
        class="relative cursor-pointer app-link"
    >
        {{ text }}
    </component>
</template>

<style lang="scss" scoped>
.app-link {
    width: fit-content;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #000;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        top: auto;
        bottom: 0;
        transition: all ease 0.3s;
        max-width: 0;
    }

    &:hover:before {
        max-width: 100%;
    }
}
</style>
