import cafeteriaOrderApi from "@/api/apiOrderCafeteria"
import cafeteriaApi from "@/api/cafeteriaApi"
import { checkIntegrity } from "@/scripts/blokchain"


// export const myAction = async ({comit}) => {

// }

export const loadProducts = async ({ commit }) => {

    const { data } = await cafeteriaApi.get("/api/products/") //? Le hace un peticion get al api    

    const { body } = data

    const { product } = body

    if (!product) {
        commit('setProducts', []) 
    }

    const products = [] //? Se inicializa una lista para guaradar la data de la peticion

    for( let uID of Object.keys(product) ){ //? Se va guardando los datos en la lista
        products.push({
            uID, //? Se guardar el id
            ...product[uID] //? se guarda el resto de la data 
        })
    }

    

    commit('setProducts', products) //? Se llama la mutacion products para guardar la respuesta de la api desde la bd

}

export const updateProducts = async ({ commit }, product) => { // product debe de ser un parametro
    // Extraer solo lo que necesitamos // id
    const { uID, cantidad, price, category } = product   
    product.cantidad = parseInt(cantidad)
    product.price = parseInt(price)
    product.category = category.nombre

    delete product.img

    const config = {
        headers: {
            'awt_token': localStorage.getItem('token')
        }
    };

    // peticion http del await del journal.Api.put(PATH .json data-to-save)
    const {data} = await cafeteriaApi.put(`/api/products/${uID}`, product, config)

    const {body} = data

    //product.category = category

    // hacer el commit del una mutacion = updateproduct
    commit('updateProducts', body) //? Se separa para que no se pase por referencia
}

export const createProducts = async ({ commit }, product) => { // REcibir el entry
    
    // dataToSave
    const { cantidad, price, category } = product   
    product.cantidad = parseInt(cantidad)
    product.price = parseInt(price)
    product.category = category.nombre

    const config = {
        headers: {
            'awt_token': localStorage.getItem('token')
        }
    };

    // peticion http del await del journal.Api.post(PATH .json data-to-save)
    const resp = await cafeteriaApi.post(`/api/products`, product, config)

     // extraer Id
    const { data } = resp
    const { body } = data

    

    // commit => addEntry

    commit('addProducts', {...body})

    return body.uID

}

export const deleteProducts = async ({ commit }, uID) => {
    
    const config = {
        headers: {
            'awt_token': localStorage.getItem('token')
        }
    };

    try {
        
        

        // console.log({config});
        // console.log(uID);

        // await jpurnalApi.delete(path)
        const resp = await cafeteriaApi.delete(`/api/products/${uID}`, 'product',  config)

        // console.log(resp);
        
        // commit deleteentry
        commit('deleteProducts', uID)

        return resp
    } catch (error) {
        return error
    }
    
    

    
}

export const verifyIntegrytiPedidos = async ({commit}) => {
    const objTotalPedidos = await cafeteriaOrderApi.get("/order.json")

    checkIntegrity(objTotalPedidos.data)
}