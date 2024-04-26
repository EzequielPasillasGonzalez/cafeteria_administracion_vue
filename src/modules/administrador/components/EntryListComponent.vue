<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar producto" v-model="term" />
        </div>

        <div class="mt-2 d-flex flex-column">
            <button class="btn btn-primary mx-3" @click="$router.push({ name: 'entry', params: { id: 'new' } })">
                <i class="fa fa-plus-circle"></i>
                Nuevo producto
            </button>
        </div>

        <div class="mt-2 d-flex flex-column">
            <button class="btn btn-primary mx-3" @click="verficaPedidos">
                <i class="fas fa-check-circle"></i>
                Verificar Pedidos
            </button>
        </div>

        <div class="entry-scrollarea">

            <Entry v-for="product in getProductsByTermFunction" :key="product.uID" :product="product" />

        </div>


    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'


export default {
    components: {
        Entry: defineAsyncComponent(() => import('./EntryComponent.vue'))
    },
    computed: {
        ...mapGetters( 'products', [
            'getProductsByTerm'            
        ]),
        getProductsByTermFunction(){
            return this.getProductsByTerm(this.term)
        }
    },
    methods: {
        ...mapActions('products', [
            'verifyIntegrytiPedidos'
        ]),

        verficaPedidos(){
            this.verifyIntegrytiPedidos()
        }
    },
    data(){
        return {
            term: ''
        }
    }
}
</script>

<style lang="scss" scoped>
input{
    height: 25px;
}

    .entry-list-container{
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);
    }

    .entry-scrollarea{
        height: calc(100vh - 110px);
        overflow-y: scroll;
        
    }
</style>