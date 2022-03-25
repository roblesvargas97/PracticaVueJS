<template>
    <div class=" mt-[10vh] h-[90vh] lg:min-h-[90vh] lg:mt-0 p-5 flex flex-col items-center justify-center space-y-5">
        <h1 class=" font-bold text-5xl text-center text-red-500" >Arma tu pizza</h1>
        <div class=" w-full lg:flex" >
            <form class=" lg:w-[50%]  flex flex-col lg:justify-center items-center space-y-5">
                <select class=" w-full lg:w-[50%] rounded bg-red-500 text-white py-2 px-4 text-xl" name="" id="">
                    <option value="">Tamaño</option>
                    <option value="chica">Chica</option>
                    <option value="mediana">Grande</option>
                    <option value="grande">mediana</option>
                </select>
                <select class=" w-full lg:w-[50%] rounded bg-red-500 text-white py-2 px-4 text-xl" name="" id="">
                    <option value="">Tipo de salsa</option>
                    <option value="jitomate">Salsa de jitomate</option>
                    <option value="frijoles">Frijoles</option>
                </select>
                <div className='w-full space-y-10 flex flex-col items-center'>
                    <h2 className='text-center text-3xl text-red-500 font-black'>Ingredientes</h2>
                    <div className='w-[90%] space-x-3 flex justify-between flex-wrap'>
                        <div>
                            <input type="checkbox" id="Piña" value="Piña"/> 
                            <label className='ml-3 text-xl text-red-500' htmlFor="Piña">Piña</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Jamon" value="Jamon"/> 
                            <label className='ml-3 text-xl text-red-500' htmlFor="Jamon">Jamon</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Peperonni" value="Peperonni"/> 
                            <label className='ml-3 text-xl text-red-500' htmlFor="Peperonni">Peperonni</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Salami" value="Salami"/> 
                            <label className='ml-3 text-xl text-red-500' htmlFor="Salami">Salami</label>
                        </div>
                        <div>
                            <input type="checkbox" id="4 quesos" value="4 quesos"/> 
                            <label className='ml-3 text-xl text-red-500' htmlFor="4 quesos">4 quesos</label>
                        </div>
                    </div>
                </div>
                <router-link to="/order-view" class=" w-[80%] lg:w-[50%] flex justify-center items-center bg-orange-400 py-2 px-4 rounded-full text-white font-bold" >Ordenar</router-link>
            </form>
            <div class=" hidden lg:flex lg:" >
                <img class="w-[80%]" src="https://i.imgur.com/f2rhzVx.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BuildYourPizzaView'
}

</script>
