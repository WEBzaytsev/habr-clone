import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RigisterView.vue';
import MainListView from '@/views/MainListView.vue';
import MyCargos from '@/views/account/MyCargos.vue';

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
    {
        path: '/user',
        name: 'user',
        redirect: '/user/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: DashboardView,
            },
            {
                path: 'my-trucks',
                name: 'my-trucks',
                component: MyTrucks,
            },
            {
                path: 'my-cargos',
                name: 'my-cargos',
                component: MyCargos,
            },
        ],
    },
];

export default routes;
