<template>
  <div class=" mt-[10vh] min-h-[90vh] lg:mt-0 lg:min-h-[90vh] p-5 flex flex-col items-center justify-center space-y-5">
      <h1 class=" font-bold text-5xl text-red-500" >Pizza Menu</h1>
      <div class=" flex flex-col items-center space-y-5 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-5" >
          <div class=" rounded border-2 border-red-500 bg-red-50/50 p-1 flex flex-col justify-center items-center lg:h-full space-y-2 shadow shadow-slate-500" >
              <img src="https://i.imgur.com/J5WcXYz.png" alt="Pizza Combinada">
              <h2 class=" text-4xl font-bold text-red-500 text-center" >Pizza Combinada</h2>
              <p class=" text-2xl text-center text-red-500" >Pepperonni y 4 Quesos.</p>
              <div class=" flex items-center justify-between px-2">
                  <select class="bg-red-500  text-xl text-white rounded-full p-1 h-10 w-16 flex justify-center items-center" name="" id="">
                    <option value="C">C</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                  </select>
                  <button class=" bg-orange-400 text-xl px-4 rounded-full text-white font-bold py-2" >
                      Ordenar Ahora
                  </button>
              </div>
          </div>
          <div class=" rounded border-2 border-red-500 bg-red-50/50 p-1 flex flex-col justify-center items-center lg:h-full space-y-2 shadow shadow-slate-500" >
              <img src="https://i.imgur.com/ErnZ4iP.png" alt="Pizza Combinada">
              <h2 class=" text-4xl font-bold text-red-500 text-center" >Pizza Hawaiana</h2>
              <p class=" text-2xl text-center text-red-500" >Jamon , piña y queso..</p>
              <div class=" flex items-center justify-between px-2">
                  <select class="bg-red-500  text-xl text-white rounded-full p-1 h-10 w-16 flex justify-center items-center" name="" id="">
                    <option value="C">C</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                  </select>
                  <button class=" bg-orange-400 text-xl px-4 rounded-full text-white font-bold py-2" >
                      Ordenar Ahora
                  </button>
              </div>
          </div>
          <div class=" rounded border-2 border-red-500 bg-red-50/50 p-1 flex flex-col justify-center items-center lg:h-full space-y-2 shadow shadow-slate-500" >
              <img src="https://i.imgur.com/0DtP5xK.png" alt="Pizza Combinada">
              <h2 class=" text-4xl font-bold text-red-500 text-center" >Pizza Pepperonni</h2>
              <p class=" text-2xl text-center text-red-500" >Pepperonni y queso..</p>
              <div class=" flex items-center justify-between px-2">
                  <select class="bg-red-500  text-xl text-white rounded-full p-1 h-10 w-16 flex justify-center items-center" name="" id="">
                    <option value="C">C</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                  </select>
                  <button class=" bg-orange-400 text-xl px-4 rounded-full text-white font-bold py-2" >
                      Ordenar Ahora
                  </button>
              </div>
          </div>
          <div class=" rounded border-2 border-red-500 bg-red-50/50 p-1 flex flex-col justify-center items-center lg:h-full space-y-2 shadow shadow-slate-500" >
              <img src="https://i.imgur.com/gpg37Ne.png" alt="Pizza Combinada">
              <h2 class=" text-4xl font-bold text-red-500 text-center" >Carnes Frias</h2>
              <p class=" text-2xl text-center text-red-500" >Pepperonni , jamon y salami.</p>
              <div class=" flex items-center justify-between px-2">
                  <select class="bg-red-500  text-xl text-white rounded-full p-1 h-10 w-16 flex justify-center items-center" name="" id="">
                    <option value="C">C</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                  </select>
                  <button class=" bg-orange-400 text-xl px-4 rounded-full text-white font-bold py-2" >
                      Ordenar Ahora
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'MenuView',
  components: {
    // HelloWorld
  }
}
</script>
