<template>
    <div class=" mt-[10vh] m-h-[90vh] lg:min-h-[90vh] lg:mt-0 p-5 flex flex-col items-center justify-center space-y-5">
        <h1 class=" font-bold text-5xl text-center text-red-500 " >Hola Bienvenido Administrador</h1>
        <div class=" grid grid-cols-2 gap-5">
            <div>
            <p class=" text-red-500 font-bold text-xl">Harina</p>
            <progress class="" max="100" value="40"></progress>
            </div>
            <div>
                <p class=" text-red-500 font-bold text-xl">Jamon</p>
                <progress class="" max="100" value="70"></progress>
            </div>
            <div>
                <p class=" text-red-500 font-bold text-xl">Piña</p>
                <progress class="" max="100" value="80"></progress>
            </div>
            <div>
                <p class=" text-red-500 font-bold text-xl">Queso</p>
                <progress class="" max="100" value="20"></progress>
            </div>
            <div>
                <p class=" text-red-500 font-bold text-xl">Salami</p>
                <progress class="" max="100" value="40"></progress>
            </div>
            <div>
                <p class=" text-red-500 font-bold text-xl">Peperonni</p>
                <progress class="" max="100" value="10"></progress>
            </div>
            <div>
                <p class=" text-red-500 font-bold text-xl">Salsa</p>
                <progress class="" max="100" value="20"></progress>
            </div>
            <div>
                <p class=" text-red-500 font-bold text-xl">Frijoles</p>
                <progress class="" max="100" value="40"></progress>
            </div>
        </div>
        <div>
            <h2 class=" text-red-500 font-bold text-2xl" >Pedidos</h2>
            <div class="bg-red-500/20 border-2 p-2 rounded border-red-500 flex flex-col items-center justify-center">
                <h3 class=" font-bold text-red-700" >Pedido de: Jesus Uriel Robles</h3>
                <p class=" font-bold text-red-700" >Telefono: 5525623226</p>
                <p class=" font-bold text-red-700" >Correo: jesus@gmail.com</p>
                <p class=" font-bold text-red-700" >Colonia: Del Valle</p>
                <p class=" font-bold text-red-700" >Calle: Patria</p>   
                <p class=" font-bold text-red-700" >Referencias: No</p>                
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'OwnerView'
}

</script>