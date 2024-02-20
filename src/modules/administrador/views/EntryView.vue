<template>
    <template v-if="product"> <!--? El template no modifica el html y sirve como un agrupador-->
        
        <div class="entry-title d-flex justify-content-between p-2">
            <div>                
                <span class="text-success fs-3 fw-bold">{{ product.nombre }}</span>                
            </div>

            <div>
                                                    
                                            <!--? Es para escuchar los cambios en el input -->
                    <input type="file" @change="onSelectdImage"
                        ref="imageSelector"
                        v-show="false"
                        accept="image/png, image/jpeg">
                        <!--? La referncia es para que un boton haga el mismo trabajo que este, puede que queramos un boton personalizado -->

                        
                    
                
                

                <button class="btn btn-danger mx-2"
                v-if="product.uID"
                    @click="onDeleteProduct">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button class="btn btn-primary"
                v-if="product.uID"
                    @click="onPressImage"> <!--? Esta funcion llama a la referencia del boton de arriba para seleccionar imagenes -->
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

    <hr>    

    
    <div class="d-flex flex-column px-3 h-75">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Nombre</span>
            <input type="text" class="form-control" placeholder="Nombre del producto" aria-label="ProductName" aria-describedby="basic-addon1"  v-model="product.nombre">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Precio</span>
            <span class="input-group-text">$</span>
            <input type="text" size="6" class="form-control" placeholder="Precio del producto" aria-label="ProductPrice" aria-describedby="basic-addon1" v-model="product.price">

            <span class="input-group-text" id="basic-addon1">Categoria</span>            
            <template v-if="product.category != null">
                <select class="form-select" aria-label="Default select example" v-model="product.category.nombre">                
                    <option  :value="product.category ? product.category.nombre : null">{{ product.category ? product.category.nombre : null }}</option>                


                    <template v-for="category in categories" :key="category.id">
                        <option v-if="product.category && category.nombre !== product.category.nombre" :value="category.nombre">
                            {{ category.nombre }}
                        </option>
                    </template>  
                
                </select>    
            </template>

            <template v-else>
                <select class="form-select" aria-label="Default select example" v-model="product.category">                
                    <option></option>                
                    
                    
                    <template v-for="category in categories" :key="category.id">
                        <option :value="category">
                            {{ category.nombre }}
                        </option>
                    </template>  
                
                </select>  
                    
                
            </template>
        
            
        </div>        

        <div class="input-group mb-3">
            

            <span class="input-group-text" id="basic-addon1">Cantidad</span>            
            <input type="text" size="6" class="form-control" placeholder="Precio del producto" aria-label="ProductPrice" aria-describedby="basic-addon1"  v-model="product.cantidad">            

        </div>

        <!-- <div class="input-group mb-3">
            
        </div> -->
        
        <div class="input-group">
            <span class="input-group-text">Descripción</span>
            <textarea class="form-control" aria-label="With textarea" v-model="product.descripcion">
            </textarea>
        </div>

        <div class="input-group">

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" v-model="product.state">
                <label class="form-check-label" for="flexSwitchCheckChecked">Estatus</label>
            </div>
        
        </div>

        <div class="input-group">

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" v-model="product.avalible">
                <label class="form-check-label" for="flexSwitchCheckChecked">Disponible</label>
            </div>

        </div>

    </div>

    <div>
        <span class="fs-2"> Fecha de creación: </span>
        <span class="mx-1 fs-4">{{ day }}</span>
        <span class="mx-1 fs-4">{{ month }}</span>
        <span class="mx-1 fs-4 fw-light">{{ year }}</span>
    </div>

    <Fab
        icon="fa-save"
        @on:click="saveProduct" 
    /> <!--? Asi se recibe un evento del FaBComponent -->
    

    <img v-if="product.img && !localImage "
        :src="product.img" 
        alt="Entry picture"
        class="img-thumbnail">
    
    <img
        v-if="localImage"
        :src="localImage" 
        alt="Entry picture"
        class="img-thumbnail">
    
    </template>    
    
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage'

export default {

    props:{
        id:{
            type: String,
            required: true
        }
    }, 
    data(){
        return{
            // icon: "fa-save",
            product: '',
            categories: '',
            localImage: null,
            file: null,
        }
    },
    computed:{
        ...mapGetters('products', [
            'getProductsById'
        ]),   
        ...mapGetters('categoria', [
            'getCategories'
        ]),                   
        day(){
            const { day } = getDayMonthYear(this.product.createDate)
            return day                
        },
        month(){
            const { month } = getDayMonthYear(this.product.createDate)
            return month                
        },
        year(){
            const { year } = getDayMonthYear(this.product.createDate)
            return year                
        },        
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/FaBComponent.vue'))
    },
    methods:{
        ...mapActions( 'products', [
                'updateProducts',
                'createProducts',
                'deleteProducts'
        ]),
        ...mapActions( 'categoria', [
                'updateCategory',
                'createCategory',
                'deleteCategory'
        ]),

        async loadCategories(){
            this.categories =  await this.getCategories()            
        },
        loadProduct(){


            let product;

            if(this.id == 'new'){
                product = {                    
                    date: new Date().getTime(),                    
                }
            } else {
                product = this.getProductsById(this.id)                  
                if(!product){
                    return this.$router.push({name:'no-entry'})
                }
                
            }


            this.product = product
        },
        async saveProduct(){

            new Swal({ //? Mostrar alertas
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()

            const picture = await uploadImage(this.file, this.product.uID) //? subir foto al back, base de datos
            

            if(picture === null){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Hubo un problema al guardar la imagen`,
                });
            }


            if(this.product.uID){
                
                // Disparar la accion del journal app
                await this.updateProducts(this.product)            
            } else {
                // Crear una nueva entrada
                // action createProduct
                const resp = await this.createProducts(this.product)
                                
                // redigirir al usuario de la url con el param de id
                // this.$router.push({ name: 'entry', params: { id: resp } })
            }        
            
            this.localImage = null //? Para que no se encimen las imagenes

            Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')

            
        },
        async onDeleteProduct(){            
            

            const { isConfirmed } = await Swal.fire({
                title: '¿Estás seguro?',
                text: 'Una vez borrado, no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si estoy seguro'
            })

            if (isConfirmed) {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                
                const { uID } = this.product
                
                const { ok } = await this.deleteProducts(uID)    
                
                if(!ok){
                    // redireccionar al usuario fuera
                    this.$router.push({name:'no-entry'})

                    Swal.fire('Eliminado', '', 'success')
                }
            }
        },

        onSelectdImage($event){
            const file = $event.target.files[0]
            
            if (!file){

                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()

            fr.onload = () => this.localImage = fr.result //? Establece la imagen en el local
            fr.readAsDataURL(file)            


        },

        onPressImage(){
            this.$refs.imageSelector.click() //? Se busca una referencia para lanzar la seleccion de archivos
        }
    },
    created(){
        //? Conectarse al getter del diario que esta en el store        
        this.loadProduct()  
        this.loadCategories()           
    },
    watch:{
        id(){ //? Actualiza el view cuando el usuario pulsa otro Product
            this.loadProduct()
        },
        localImage(){ //? Actualiza el view cuando el usuario pulsa otro Product
            this.loadProduct()
        }
    }
}
</script>

<style scoped lang="scss">
// textarea{
//     font-size: 20px;
//     border: none;
//     height: 100%;

//     &:focus{
//         outline: none;
//     }
// }

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>