import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RigisterView.vue';
import MainListView from '@/views/MainListView.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
    },
    {
        path: '/',
        name: 'home',
        component: MainListView,
    },
];

export default routes;
