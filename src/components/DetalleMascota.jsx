import BotonEditar from "./Boton"
import BotonEliminar from "./BotonEliminar"

const DetalleMascota = ({paciente,setPaciente,eliminarPaciente}) => {

    const {id,nombre,propietario,email,fechaAlta,sintoma} = paciente

    return (
        <div>
            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 uppercase text-gray-700">Nombre:{''} <span className="font-normal normal-case ">{nombre}</span></p>
                <p className="font-bold mb-3 uppercase text-gray-700">Propietario:{''} <span className="font-normal normal-case ">{propietario}</span></p>
                <p className="font-bold mb-3 uppercase text-gray-700">Email:{''} <span className="font-normal normal-case ">{email}</span></p>
                <p className="font-bold mb-3 uppercase text-gray-700">Fecha de alta:{''} <span className="font-normal normal-case ">{fechaAlta}</span></p>
                <p className="font-bold mb-3 uppercase text-gray-700">sintomas:{''} <span className="font-normal normal-case ">{sintoma}</span></p>

                <div className="flex justify-between mt-10">
                    <BotonEditar value='editar'
                        setPaciente = {setPaciente}
                        paciente={paciente}/>
                    <BotonEliminar
                        value='Eliminar'
                        eliminarPaciente = {eliminarPaciente}
                        id={id}
                    />

                

                </div>
            </div>
        </div>
    )
}


export default DetalleMascota
