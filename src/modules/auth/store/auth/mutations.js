// export const myMutations = (state) => {

// }

export const setUsuario = (state, user) => {
    
        state.usuario = {
          nombre: user.nombre,
          uID: user.uID,
          correo: user.correo,
          token: user.token,
          order: user.order,
          role: user.role
        };

        
        state.isLoading = user.isLoading
}

export const setUsuarioOrder = (state, order) => {
  
  state.isLoading = true
  
  state.usuario.order.push(order)

  
  state.isLoading = false
}
