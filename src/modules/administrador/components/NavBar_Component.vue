<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white pointer" @click="$router.push({name: 'home'})">
            <img    src="@/assets/logo.png" 
                    alt="Vue Logo" 
                    class="d-inline-block align-text-top mx-2"
                    height="24">
            Panel de Administración |
            {{ usuario.nombre }}
        </a>

        

        <div class="d-flex">                        

        

            <!-- <button class="btn btn-outline-info mx-2" @click="goToShopping">
                <i class="fas fa-shopping-cart"></i>
            </button> -->

            <template v-if="isLoading">
                <button class="btn btn-outline-info mx-2" @click="gotToSign">                
                    <i :class="iconSignIn"></i>                            
                </button>
            </template>

            <template v-else>                
                <button class="btn btn-outline-info mx-2" @click="gotToCloseSign">                
                    <i :class="iconSignOut"></i>                            
                </button>                
            </template>
        </div>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Swal from "sweetalert2";

export default {

    data(){
        return{
            iconSignIn: 'fas fa-sign-in-alt',
            iconSignOut: 'fas fa-sign-out-alt',            
        }
    },
    methods: {
        gotToSign(){
            this.$router.push({name: 'login'}) //? Igual de como esta en el router que se exporta del modules
        },
        // goToShopping(){
        //     this.$router.push({name: 'shopping'}) //? Igual de como esta en el router que se exporta del modules
        // },       
        gotToCloseSign(){

            Swal.fire({
                title: "¿Estas seguro que deseas cerrar la sesión?",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.closeSession()

                    Swal.fire('Se cerró la sesión con éxito', '', 'success')

                    this.$router.push({ name: "home" });
                }
            });
        },
        ...mapActions("authStore", [
            'setUserStorage',
            'closeSession'
        ]),
        
    },
    computed:{
        ...mapState( 'authStore', {
            usuario: 'usuario',
            isLoading: 'isLoading'
        }),
    },
    created(){
        this.setUserStorage()
    },
    watch: {
        isLoading(){ 
             //? Actualiza el view cuando el usuario pulsa otro producto
            this.setUserStorage()
        }
    }


}
</script>

<style scoped>

</style>