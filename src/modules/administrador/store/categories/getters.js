// export const myGetter = (state) => {

// }

export const getCategoriesByTerm = (state) => ( term = '') => { //? Va a retornar otra funcion de flecha
    //? Que devuelva otra funcion, hace que getCategoriesByTerm se convierta en una funcion

    if(term.length === 0){ //? si no hay nada en el temrino regresa todas las entradas
        return state.categories
    }

    //? si encuentra algo, entonces las convierte en minusculas y los busca por el filtro, devuelve los resultados
    return state.Categories.filter( category => category.nombre.toLowerCase().includes( term.toLowerCase() ) )
}

export const getCategoriesById = (state) => ( id = '' ) => {

    const category = state.categories.find(category => category.uID === id)    

    if(!category){
        return
    }

    return { ...category } //Todo: Hacer pruebas
}

export const getCategories = (state) => () => {    

    if(!state.categories){
        return null
    }    

    return { ...state.categories } //Todo: Hacer pruebas
}