<template>
    <div class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: ({ id: product.uID })})">
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">{{ product.nombre }}</span>
                
            <p class="mx-2 fw-light" :class="{ 'text-success': product.avalible, 'text-danger': !product.avalible }">
                {{ product.avalible ? 'Disponible' : 'No disponible' }}
            </p>
        </div>

        <!-- Descripcion -->
        <div class="entry-description">
            <span class="mx-1 fs-5">Cateogria: {{ product.category.nombre }}</span>
        </div>  
        
        
        
    </div>
</template>

<script>
// const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
// const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
    props:{
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        // shortText(){ //? Se hace esta propiedad computada, para medir el texto, si es muy largo se corta y se le pone los ... 
        //     return (this.product.descripcion.length > 130)
        //         ? this.product.descripcion.substring(0, 130) + '...'
        //         : this.product.descripcion
            
        // },
        // day(){
        //     const date = new Date(this.entry.date)
        //     return date.getDate()
        // },
        // month(){
        //     const date = new Date(this.entry.date)
        //     return months[ date.getMonth() ]
        // },
        // yearDate(){
        //     const date = new Date(this.entry.date)
        //     return ` ${date.getFullYear()}, ${days[ date.getDay() ]} `
        // }
    }
}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e58;    
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}
</style>