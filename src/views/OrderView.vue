<template>
    <div class=" mt-[10vh] min-[90vh] p-5 flex flex-col items-center justify-center space-y-5">
        <h1 class=" font-bold text-5xl text-center text-red-500" >Arma tu pizza</h1>
        <form className=' space-y-5 flex flex-col items-center' action="#">
                <div className='flex flex-col'>
                    <label className='text-xl font-bold text-red-500 text-primary' htmlFor="nombre">Nombre</label>
                    <input className='text-xl font-normal border-2 rounded focus:border-green-600 py-1 px-2' type="text" id='nombre' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl font-bold text-red-500 text-primary' htmlFor="telefono">Telefono</label>
                    <input className='text-xl font-normal border-2 rounded focus:border-green-600 py-1 px-2' type="number" id='telefono' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl font-bold text-red-500 text-primary' htmlFor="email">Correo Electronico</label>
                    <input className='text-xl font-normal border-2 rounded focus:border-green-600 py-1 px-2' type="text" id='email' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl font-bold text-red-500 text-primary' htmlFor="colonia">Colonia</label>
                    <input className='text-xl font-normal border-2 rounded focus:border-green-600 py-1 px-2' type="text" id='colonia' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl font-bold text-red-500 text-primary' htmlFor="calle">Calle</label>
                    <input className='text-xl font-normal border-2 rounded focus:border-green-600 py-1 px-2' type="text" id='calle' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl font-bold text-red-500 text-primary' htmlFor="referencias">Referencias</label>
                    <input className='text-xl font-normal border-2 rounded focus:border-green-600 py-1 px-2' type="text" id='referencias' />
                </div>
                <router-link to="/" class=" w-[80%] flex justify-center items-center text-xl bg-orange-400 py-2 px-4 rounded-full text-white font-bold" >Ordenar</router-link>    
        </form>
    </div>
</template>

<script>

export default {
    name: 'OrderView'
}

</script>
