import cafeteriaApi from "@/api/cafeteriaApi"

const uploadImage = async ( file, id ) => {
    
    if(!file){
        return
    }

    try {
        
        
        const formData = new FormData() //? Para mandar archivos

        
        const config = {
            headers: {
                'awt_token': localStorage.getItem('token')
            }
        };

        

        formData.append('archivo', file)

        const resp = await cafeteriaApi.put(`/api/uploads/productos/${id}`, formData, config)        
        

        return true

        

    } catch (error) {
        console.error('Error al cargar imagen, revisar logs');
        console.log(error);

        return null
    }
}

export default uploadImage;