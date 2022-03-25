<template>
    <header class=" hidden lg:flex items-center justify-between px-10  h-[10vh] w-full bg-red-500">
        <img class=" w-32 h-14" src="https://i.imgur.com/WhXvNmR.png" alt="logo">

        <nav class="w-[70%] flex justify-between space-x-2 items-center">
            <router-link v-on:click="setShowMenuFalse" class=" text-xl font-bold text-orange-400 bg-white p-2 w-full text-center rounded" to="/" >Inicio</router-link>
            <router-link v-on:click="setShowMenuFalse" class=" text-xl font-bold text-orange-400 bg-white p-2 w-full text-center rounded" to="/menu" >Menu</router-link>
            <router-link v-on:click="setShowMenuFalse" class=" text-xl font-bold text-orange-400 bg-white p-2 w-full text-center rounded" to="/build-pizza" >Arma tu pizza</router-link>
            <router-link v-on:click="setShowMenuFalse" class=" text-xl font-bold text-orange-400 bg-white p-2 w-full text-center rounded" to="/owner-view" >Administrador</router-link>
        </nav>

    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>