export default {
    name: 'panel',    
    component: () => import(/* webpackChunckName: "panel" */ '@/modules/administrador/layouts/PanelLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',    
            component: () => import(/* webpackChunckName: "product-no-entry" */ '@/modules/administrador/views/NoEntrySelectedView.vue'),
        },
        {
            path: ':id',
            name: 'entry',    
            component: () => import(/* webpackChunckName: "product-entry" */ '@/modules/administrador/views/EntryView.vue'),
            props: (route) =>{ //? Se manda el id por los props para el EntryView                
                return {
                    id: route.params.id
                }
            }
        },
    ]
}

