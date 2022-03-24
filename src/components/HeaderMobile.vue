<template>
    <header class=" fixed top-0 left-0 w-full lg:hidden bg-red-500 h-[10vh] flex justify-between items-center px-5 shadow-md shadow-gray-700">
        <button v-on:click ="setShowMenu"  class="flex justify-center items-center  p-2 rounded bg-white text-orange-400">
          <font-awesome-icon icon="bars" size="lg" />
        </button>
        <img class=" w-20" src="https://i.imgur.com/WhXvNmR.png" alt="logo">
    </header>
    <div  v-bind:class="!showMenu? 'hidden' : 'flex' " class=" lg:hidden fixed w-[70%] flex-col p-5 items-center   h-[100vh] bg-red-500"  >
      <h1 class="text-white font-bold text-center text-xl" >Bienvenido</h1> 
      <nav class="w-full p-5 flex flex-col space-y-5 items-center">
        <router-link v-on:click="setShowMenuFalse" class=" text-xl font-bold text-orange-400 bg-white p-2 w-full text-center rounded" to="/" >Inicio</router-link>
        <router-link v-on:click="setShowMenuFalse" class=" text-xl font-bold text-orange-400 bg-white p-2 w-full text-center rounded" to="/menu" >Menu</router-link>
        <router-link v-on:click="setShowMenuFalse" class=" text-xl font-bold text-orange-400 bg-white p-2 w-full text-center rounded" to="/build-pizza" >Arma tu pizza</router-link>
        <router-link v-on:click="setShowMenuFalse" class=" text-xl font-bold text-orange-400 bg-white p-2 w-full text-center rounded" to="/build-pizza" >Arma tu pizza</router-link>
      </nav>
    </div>
</template>

<script>

export default {
  name: 'HeaderMobile',
  data(){
    return{
      showMenu: false,
    }
  },methods: {
    setShowMenu(){
      this.showMenu = !this.showMenu;
    },
    setShowMenuFalse(){
      this.showMenu = false;
    }
  },
  
  
  }
</script>
