// export const myMutations = (state) => {

// }

export const setProducts = (state, products) => {

    state.products = [ //? Para crear un nuevo arreglo con juntando los valores anteiorres y los nuevos valores
        ...state.products, //? se desestructura el state
        ...products //? Y tambien el products  
    ]

    state.isLoading = false //? Se marca que ya se termino de cargar la informacion

}

export const updateProducts = (state, product) => { // Recibir la entrada actualizada

    console.log(product);

    // state.products => es un arreglo, buscar la entrada con el mismo ID
    const idx = state.products.map( e => e.uID).indexOf(product.uID) //? Se crea un unevo arreglo con todos los ID del state

    console.log(idx);
    
    // state.products => ...entry
    state.products[idx] = product //? se asigna el valor nuevo

    console.log(state.products[idx]);
    

}

export const addProducts = (state, entry) => {

    // state ==> products => la nueva entrada debe de ser la primera,
    state.products = [entry, ...state.products] //? Se agrega la nueva entrada al principio
    

}

export const deleteProducts = (state, uID) => {

    // remover del state.products => el que coincida con el uID
    const indice = state.products.findIndex( obj => obj.uID === uID)

    console.log(indice);

    if (indice !== -1) {
        state.products.splice(indice, 1)
    }
    

}