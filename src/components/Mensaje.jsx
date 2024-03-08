

const Mensaje = (props) => {
    const mensaje = props.mensaje;
    return (
        <div className='bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg'>
            {mensaje}
        </div>
    )
}



export default Mensaje
