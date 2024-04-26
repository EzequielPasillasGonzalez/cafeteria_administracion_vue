<template>
    <div class="container entry-scrollarea">
        <div class="container">
            <h1 >Integridad de los bloques</h1>
        </div>        

  

            <div class="container">
        <table class="table table-striped table-hover">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Detalles</th>
                    <th scope="col">Resultado</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="block in blockchainData" :key="block.id">                    
                    <tr>
                        <th scope="row" class="align-middle">{{ block.blockNumber +1 }}</th>

                            <td class="align-middle">
                                <template v-for="infoDetails in block.blockInfo" :key="infoDetails.id">
                                    <template v-if="infoDetails.name">
                                        <p>{{ infoDetails.name }} - ${{ infoDetails.precio }}</p>                                        
                                    </template>
                                    <template v-else>
                                        <template v-for="infoDetailsList in infoDetails" :key="infoDetailsList.id">                                            
                                                <template v-if="infoDetailsList.precio">
                                                    <p> {{ infoDetailsList.name }} - ${{ infoDetailsList.precio }} </p>    
                                                </template>
                                                
                                        </template>
                                    </template>                                    
                                </template>   
                            </td>
                            <template v-if="block.result === true">
                                <td class="align-middle text-success">Verificado</td>
                            </template>
                            <template v-else-if="block.result === false">
                                <td class="align-middle text-danger">Integridad comprometida</td>
                            </template>
                            <template v-else>
                                <td class="align-middle text-secondary" >{{ block.result }}</td>
                            </template>                                                
                            
                    </tr>
                </template>
            </tbody>
        </table>
    </div>

    </div>    
</template>

<script>
import { mapState } from 'vuex';

export default {        
    computed: {
        ...mapState('products', {
            blockchainData: 'blockchain'
        })
    }
}
</script>

<style lang="scss" scoped>  
.entry-scrollarea{
        height: calc(100vh - 110px);
        overflow-y: scroll;        
    }  
</style>