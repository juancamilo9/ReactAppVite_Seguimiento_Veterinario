/* eslint-disable react/prop-types */
import { useState,useEffect } from 'react';
import Mensaje from './Mensaje';


const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
    
    //Declaración de nuestro hook
    const [nombre,setNombre] = useState('');
    const [propietario,setPropietario] = useState('');
    const [email,setEmail] = useState('');
    const [fechaAlta,setFechaAlta] = useState('');
    const [sintoma,setSintoma] = useState('');


    // state para alerta de mensaje
    const [mensaje, setMensaje] = useState(false);

    //
    useEffect(()=>{
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFechaAlta(paciente.fechaAlta)
            setSintoma(paciente.sintoma)
        }
    },[paciente])

    const generarId = () =>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        const id = random + fecha
        return id
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // Validación del fromulario
        const paciente_validar  = [nombre, propietario, email, fechaAlta, sintoma]
        if (paciente_validar.includes('')){
            setMensaje(true)
            return;
        }
        setMensaje(false);

        // Objeto de paciente
        const objetoPaciente ={
            nombre,
            propietario,
            email,
            fechaAlta,
            sintoma,
            
        }
        if(paciente.id){
            // Editando registro
            objetoPaciente.id=paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            // Creando nuevo registro
            objetoPaciente.id= generarId()
            setPacientes([...pacientes,objetoPaciente]);
        }
        

        // Reiniciar formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFechaAlta('')
        setSintoma('')
    }
    

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Registro de consultas</h2>
            <p className="text-indigo-700 font-bold text-lg mt-3 text-center mb-10">Administrar consulas</p>
            <form className="bg-white shadow-xl rounded-md py-8 px-4 mb-7" action="" onSubmit={handleSubmit}>
                { mensaje && (<Mensaje mensaje='Todos los campos son obligatorios'/>)}
                
                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombreMascota">Nombre mascota: </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="text"
                        id="nombreMascota"
                        placeholder="Nombre mascota"
                        value={nombre}
                        onChange={e=>setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombrePropietario">Nombre propietairo: </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="text"
                        id="nombrePropietario"
                        placeholder="Nombre propietario"
                        value={propietario}
                        onChange={(e)=>setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">email: </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="email"
                        id="email"
                        placeholder="Correo electronico propietario"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="fechaAlta">Alta: </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="date"
                        id="fechaAlta"
                        value={fechaAlta}
                        onChange={e=>setFechaAlta(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">sintomas: </label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        type="text"
                        id="sintomas"
                        placeholder="Descripción de los sintomas"
                        value={sintoma}
                        onChange={e=>setSintoma(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="w-full bg-indigo-600 uppercase font-bold text-white p-3 rounded-md hover:bg-indigo-800 cursor-pointer transition-all"
                    value={paciente.id ? 'Guardar cambios':'Agregar registro'}
                />
            </form>
        </div>
    )
}

export default Formulario

