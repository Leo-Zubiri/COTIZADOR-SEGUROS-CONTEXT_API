import { createContext, useContext } from "react";

const CotizadorContext = createContext();

import { useState } from "react";

import { obtenerDiferenciaYear,calcularMarca,
calcularPlan,formatearDinero } from "../helpers";

// Provider - la fuente de los datos
const CotizadorProvider = ({children}) => { 

    const [datos,setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    });

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState('');
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = e => {
        setDatos({...datos, [e.target.name]: e.target.value  });
    }

    const cotizarSeguro = () => { 
        setCargando(true);
        // Una base
        let resultado = 2000;

        // Obtener diferencia de años
        const dif = obtenerDiferenciaYear(datos.year);

        // Restar 3% cada año
        resultado -= ((dif*3)*resultado)/100

        // Americano 15%
        // Europeo 30%
        resultado *= calcularMarca(datos.marca);
    
        // Basico 20%
        // Premium 50%
        resultado *= calcularPlan(datos.plan);
       
        resultado = formatearDinero(resultado);
        console.log(resultado)

        

        setTimeout(() => { setResultado(resultado); setCargando(false) },3000);
        setResultado(resultado);

    }

    return (
        <CotizadorContext.Provider value={{
          datos,handleChangeDatos,error,setError,cotizarSeguro,resultado,cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext;