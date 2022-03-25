<template>
  <div class=" mt-[10vh] h-[90vh] lg:mt-0 p-5 lg:p-0 flex flex-col lg:flex-row lg:h-[90vh] items-center justify-center space-y-5">
    <div class=" lg:w-[50%] lg:h-full lg:flex lg:flex-col lg:justify-center lg:bg-red-500" >
      <h1 class=" font-bold text-red-500 lg:text-white text-5xl lg:text-7xl text-center" >!La felicidad en forma de pizza¡</h1>

    </div>
    <img class=" lg:w-[50%]" src="https://i.imgur.com/yOQJCss.png" alt="">
    <router-link to="/menu" class=" w-[50%] lg:absolute lg:bottom-5 text-xl lg:text-3xl flex justify-center  bg-orange-400 px-4 py-2 rounded-full text-white font-bold shadow shadow-stone-500" >Ir al menu</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
