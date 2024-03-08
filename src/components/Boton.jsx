

const BotonEditar = ({value,setPaciente,paciente}) => {
return (
    <button
    onClick={()=>setPaciente(paciente)}
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg ">
        {value}
    </button>
    )
}

export default BotonEditar
