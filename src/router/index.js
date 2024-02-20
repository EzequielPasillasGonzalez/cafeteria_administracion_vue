import { createRouter, createWebHashHistory } from 'vue-router'
import Swal from "sweetalert2";

import HomeView from '../views/HomeView.vue'
import adminRouter from '../modules/administrador/routers';
import authRouter from '../modules/auth/router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/panel',    
    ...adminRouter //? Se importo del router de modules y se esparce con ...
  },
  {
    path: '/auth', 
    name: 'auth',
    ...authRouter //? Se importo del router de modules y se esparce con ...
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})




//! Importante aplicar
const excludedRoutes = ['home', 'auth', 'login'];

const canAccess = () => { // Protecciones para que no puedan pasar - Login probable uso
  return new Promise( (resolve, reject) => {
      const role = localStorage.getItem('role')
      
      if( role == 'Admin_role'){          
          resolve(true)
      }else{
         Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `No eres autorizado`,
      });
          reject()
      }
  })
}

router.beforeEach( async (to, from, next) =>{
 // Verificar si la ruta a la que se está navegando no es la página de inicio
 if (!excludedRoutes.includes(to.name)) {
  try {
      const authorized = await canAccess()
      next()
  } catch (error) {
      next({ name: 'login' })
  }
} else {
  // Si la ruta es la página de inicio, simplemente continuar
  next()
}
})

export default router
