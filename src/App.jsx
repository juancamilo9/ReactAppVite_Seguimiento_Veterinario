import Header from "./components/Header"
import Formulario from "./components/Formulario.jsx"
import ListadoPacientes from "./components/ListadoPacientes.jsx"
import { useState, useEffect } from "react"


// La function App, representa nuestro componente
function App() {

  const [pacientes,setPacientes]=useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  // hook para editar pacientes
  const [paciente, setPaciente]= useState({});


  // Este código solo esta esperando cambios en pacientes para enviarlo al local storage, pero no lo hace persistente
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])
  
  const eliminarPaciente = (id)=>{
    // Utilizamos el filtar para traer solo los paceintes diferentes al que queremos eliminar
    const pacientesActualizados = pacientes.filter(pacienteEliminado => pacienteEliminado.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    // Esta es la etiqueta padre o la contenedora de todas las demas etiquetas
    <div className="container mx-auto mt-10">
      <Header
        numeros = {1}
      />
      <div className="mt-9 md:flex">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
          
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
