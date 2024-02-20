import cafeteriaApi from "@/api/cafeteriaApi"

// export const myAction = async ({comit}) => {

// }

export const loadCategory = async ({ commit }) => {

    const { data } = await cafeteriaApi.get("/api/category/") //? Le hace un peticion get al api

    const { body } = data

    const { categories } = body    

    if (!categories) {
        commit('setCategory', []) 
    }

    const category = [] //? Se inicializa una lista para guaradar la data de la peticion

    for( let uID of Object.keys(categories) ){ //? Se va guardando los datos en la lista
        category.push({
            uID, //? Se guardar el id
            ...categories[uID] //? se guarda el resto de la data 
        })
    }

    

    commit('setCategory', category) //? Se llama la mutacion category para guardar la respuesta de la api desde la bd

}

// export const updateCategory = async ({ commit }, entry) => { // entry debde de ser un parametro
//     // Extraer solo lo que necesitamos // id
//     const { id, date, text, picture   } = entry   
//     const dataToSave = { date, text, picture } 

//     // peticion http del await del journal.Api.put(PATH .json data-to-save)
//     const resp = await cafeteriaApi.put(`/api/category/${id}`, dataToSave)

//     // hacer el commit del una mutacion = updateEntry
//     commit('updatecategory', {...entry}) //? Se separa para que no se pase por referencia
// }

// export const createCategory = async ({ commit }, entry) => { // REcibir el entry
    
//     // dataToSave
//     const { id, date, text, picture } = entry
//     let dataToSave = { date, text, picture }

//     // peticion http del await del journal.Api.post(PATH .json data-to-save)
//     const resp = await cafeteriaApi.post(`/api/category`, dataToSave)

//     // extraer Id
//     const { data } = resp
//     const idEntry = data.name

//     dataToSave.id = idEntry

    

//     // commit => addEntry

//     commit('addcategory', {...dataToSave})

//     return idEntry

// }

// export const deleteCategory = async ({ commit }, id) => {
    

//     try {
//         // await jpurnalApi.delete(path)
//         const resp = await cafeteriaApi.delete(`/api/category/${id}`)
        
//         // commit deleteentry
//         commit('deletecategory', id)

//         return resp
//     } catch (error) {
//         return error
//     }
    
    

    
// }