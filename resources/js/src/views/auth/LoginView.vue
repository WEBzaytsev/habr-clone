<script setup lang="ts">
import AppForm from '@/components/form/AppForm.vue';
import { inject, ref } from 'vue';
import AppInput from '@/components/form/AppInput.vue';
import AppLink from '@/components/AppLink.vue';

const formData = inject(
    'formData',
    ref({
        email: '',
        password: '',
    }),
);
</script>

<template>
    <AppForm :title="'Войти'" :button-text="'Войти'">
        <template #form-fields>
            <AppInput
                name="email"
                :model-value="formData.email"
                label="Email"
                placeholder="Email"
                type="text"
            />
            <AppInput
                name="password"
                :model-value="formData.password"
                label="Пароль"
                placeholder="Пароль"
                type="password"
            />
        </template>
        <template #footer>
            <div class="flex w-full items-center justify-between">
                <AppLink to="/register" class="text-14" text="Регистрация" />
                <AppLink to="#" :is-route="false" class="text-14" text="Забыли пароль?" />
            </div>
        </template>
    </AppForm>
</template>
