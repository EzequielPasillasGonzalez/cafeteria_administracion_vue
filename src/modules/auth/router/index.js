export default {
    name: 'auth',
    component: () => import(/* webpackChunckName: "Auth" */ '../layouts/authLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',    
            component: () => import(/* webpackChunckName: "login" */ '../views/loginView.vue'),
        },
        // {
        //     path: '/sigin',
        //     name: 'sigin',    
        //     component: () => import(/* webpackChunckName: "sigIn" */ '../views/siginView.vue'),
        //     props: (route) =>{ //? Se manda el id por los props para el Product-view
        //         return {
        //             id: route.params.id
        //         }
        //     }
        // },
    ]
}

