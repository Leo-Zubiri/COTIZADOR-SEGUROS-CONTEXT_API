import React from 'react'
import useCotizador from '../hooks/useCotizador'

import { MARCAS, PLANES } from '../constants';

const Resultado = () => {

    
    const {resultado,datos} = useCotizador();
    if(resultado == '') return;
    const {marca,plan,year} = datos;

    const [nombreMarca] = MARCAS.filter(m => m.id === Number(marca) )
    const [nombrePlan] = PLANES.filter(p => p.id === Number(plan) )

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>
            Resumen
        </h2>

        <p className='my-2'>
            <span>Marca: </span> {nombreMarca.nombre} 
        </p>

        <p className='my-2'>
            <span>Plan: </span> {nombrePlan.nombre} 
        </p>

        <p className='my-2'>
            <span>Año: </span> {year} 
        </p>

        <p className='my-2 text-2xl'>
            <span className='font-bold'>Total Cotización: </span> {resultado} 
        </p>
    </div>
  )
}

export default Resultado