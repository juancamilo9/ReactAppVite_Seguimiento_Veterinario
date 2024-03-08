

const BotonEliminar = ({value,id,eliminarPaciente}) => {
    
    const handleEliminar = () =>{
        const respuesta = confirm('Deseas Eliminar al paciente')
        if (respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <button
            onClick={handleEliminar}
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg">
            {value}
        </button>
    )
}

export default BotonEliminar
