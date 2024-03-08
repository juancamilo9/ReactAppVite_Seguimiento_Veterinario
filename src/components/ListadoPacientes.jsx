/* eslint-disable react/prop-types */
import DetalleMascota from "./DetalleMascota";


// eslint-disable-next-line react/prop-types
const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {

    return (
        
        <>
            <div className="md:w-1/2 md:h-screen lg:w-3/5 hoverflow-scroll">

                {pacientes.length > 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de consultas</h2>
                    <p className="text-indigo-700 font-bold text-lg mt-3 text-center mb-10">Getión de consultas</p>
                    
                    {pacientes.map((paciente)=>(
                    
                        <DetalleMascota
                            paciente={paciente}
                            key = {paciente.id}
                            setPaciente ={setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                        />
                    
                    ))}
                
                </>):(

                    <>
                        <h2 className="font-black text-3xl text-center">Listado de consultas</h2>
                        <p className="text-indigo-700 font-bold text-lg mt-3 text-center mb-10">Sin consultas para gestionar</p>
                    </>
                )}

            </div>
        </>
        
    )
}


export default ListadoPacientes
