<template>
    <footer className='w-full h-auto bg-red-500 space-y-5 lg:flex lg:justify-between lg:pb-10 lg:px-10'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>Horario</h3>
                <p className='text-lg font-normal text-white'>Dias de servicio: <span>Lunes y Domingo</span></p>
                <p className='text-lg font-normal text-white'>Horario: <span>11:00 am a 10:00 pm</span></p>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>Siguenos en nuestras redes:</h3>
                <a className='text-lg font-normal text-white underline'>Facebook</a>
                <a className='text-lg font-normal text-white underline'>Twitter</a>
                <a className='text-lg font-normal text-white underline'>Instagram</a>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>Direccion</h3>
                <p  className='text-lg text-center font-normal text-white'> Av. Álvaro Obregón 92, La Guadalupe, Tlalpan, La Magdalena Contreras, 10820 Ciudad de México, CDMX</p>
            </div>
        </footer>
</template>

<script>

export default {
    name: 'Footer',   
}
</script>
