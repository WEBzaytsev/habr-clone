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
        passwordRepeat: '',
    }),
);
</script>

<template>
    <div class="bg-black/50 flex justify-center items-center h-full">
        <AppForm :title="'Регистрация'" :button-text="'Регистрация'">
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
                <AppInput
                    name="password-repeat"
                    :model-value="formData.passwordRepeat"
                    label="Повторите пароль"
                    placeholder="Повторите пароль"
                    type="password"
                />
            </template>
            <template #footer>
                <div class="flex w-full items-center justify-between">
                    <AppLink to="/login" class="text-14" text="Войти" />
                    <AppLink to="#" :is-route="false" class="text-14" text="Забыли пароль?" />
                </div>
            </template>
        </AppForm>
    </div>
</template>
