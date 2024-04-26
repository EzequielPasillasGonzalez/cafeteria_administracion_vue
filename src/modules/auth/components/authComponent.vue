<template>
    <div class="parent">
        <div class="container px-4">
            <div class="row gx-5 row mt-5">
                <div class="col-sm-6">
                    <div class="p-3 border bg-light">
                        <h1>¡Bienvenido!</h1>

                        <div class="container">
                            <h2>Escribe tus datos</h2>
                            <hr>

                            <div class="contianer">
                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Correo eléctronico</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputPassword" v-model="correo"
                                            autocomplete="off" />
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword" v-model="password"
                                            autocomplete="off" />
                                    </div>
                                </div>
                            </div>

                            <div class="container signGoogle" >
                                <div class="col-sm-6">
                                    <h2>Google Sign-in</h2>
                                    <hr/>
                                    <GoogleLogin :callback="googleSign" />
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <button @click="gotToLogin" class="btn btn-primary">
                                Inicia Sesión
                            </button>
                           
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="p-3 border bg-light">
                        <img src="../../../assets/vueCoffe.png" class="img-thumbnail" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
    data() {
        return {
            correo: null,
            password: null,
            user: Object,
        };
    },
    methods: {
        ...mapActions("authStore", 
            ["getLogin", "handleCredentialResponse"]
        ),      
        async gotToLogin() {
            new Swal({
                //? Mostrar alertas
                title: "Espere por favor",
                allowOutsideClick: false,
            });

            Swal.showLoading();

            this.user.correo = this.correo;
            this.user.password = this.password;

            //console.log(this.user);

            const ok = await this.getLogin(this.user);

            if (ok === true) {
                Swal.fire("Loggin exitoso", "", "success");

                this.$router.push({ name: "panel" });
            } else {
                const { response } = ok;                
                
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${response}`,
                });
            }
        },
        async googleSign(response){   
            
            new Swal({ //? Mostrar alertas
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()


            const ok = await this.handleCredentialResponse(response)

            if (ok === true) {

                Swal.fire('Loggin exitoso', '', 'success')

                this.$router.push({ name: 'panel' })
            } else {
                        
                const { response } = ok
                const { data } = response 
                const { body } = data                            
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${body}`,
                });
            }
        }
    },
    // computed:{
    //     ...mapState( 'authStore', {
    //         usuario: 'usuario'
    //     }),

    // },
};
</script>

<style lang="scss" scoped>
.parent {
    margin-top: 5%;
}

button {
    margin: 3%;
}

.signGoogle{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
