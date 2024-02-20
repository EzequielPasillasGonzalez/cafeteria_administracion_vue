<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Bienvenido al Panel de control de Cafeteria Vue</h1>
    
    <!-- <button @click="gotToDayBook" class="btn btn-secondary">Inicia Sesión</button> -->

    <div class="container">
            <button @click="gotToLogin" class="btn btn-primary">Inicia Sesión</button>            
      </div>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    // gotToDayBook(){
    //   this.$router.push({name: 'no-entry'}) //? Igual de como esta en el router que se exporta del modules
    // },
    gotToLogin(){
      this.$router.push({name: 'login'}) //? Igual de como esta en el router que se exporta del modules
    }
  }
}
</script>


