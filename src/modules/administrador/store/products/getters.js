// export const myGetter = (state) => {

// }

export const getProductsByTerm = (state) => ( term = '') => { //? Va a retornar otra funcion de flecha
    //? Que devuelva otra funcion, hace que getProductsByTerm se convierta en una funcion

    if(term.length === 0){ //? si no hay nada en el temrino regresa todas las entradas
        return state.products
    }

    //? si encuentra algo, entonces las convierte en minusculas y los busca por el filtro, devuelve los resultados
    return state.products.filter( product => product.nombre.toLowerCase().includes( term.toLowerCase() ) )
}

export const getProductsById = (state) => ( id = '' ) => {

    const product = state.products.find(product => product.uID === id)    

    if(!product){
        return
    }

    return { ...product } //Todo: Hacer pruebas
}