// export const myMutations = (state) => {

// }

export const setCategory = (state, categories) => {

    state.categories = [ //? Para crear un nuevo arreglo con juntando los valores anteiorres y los nuevos valores
        ...state.categories, //? se desestructura el state
        ...categories //? Y tambien el categories  
    ]

    state.isLoading = false //? Se marca que ya se termino de cargar la informacion

}

export const updateCategory = (state, entry) => { // Recibir la entrada actualizada


    // state.categories => es un arreglo, buscar la entrada con el mismo ID
    const idx = state.categories.map( e => e.id).indexOf(entry.id) //? Se crea un unevo arreglo con todos los ID del state
    
    // state.categories => ...entry
    state.categories[idx] = entry //? se asigna el valor nuevo
    

}

export const addCategories = (state, entry) => {

    // state ==> categories => la nueva entrada debe de ser la primera,
    state.categories = [entry, ...state.categories] //? Se agrega la nueva entrada al principio
    

}

export const deleteCategories = (state, id) => {

    // remover del state.categories => el que coincida con el id
    const indice = state.categories.findIndex( obj => obj.id === id)

    if (indice !== -1) {
        state.categories.splice(indice, 1)
    }
    

}