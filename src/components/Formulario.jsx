import React from 'react'

import { MARCAS } from '../constants'

const Formulario = () => {
  return (
    <>

        <form>
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select
                    name='marca'
                    className='w-full p-3 bg-white border border-gray-400'
                >

                    <option value=''> -- Selecciona marca -- </option>

                    {MARCAS.map(marca => (
                        <option kay={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>


            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Año
                </label>
                <select
                    name='marca'
                    className='w-full p-3 bg-white border border-gray-400'
                >

                    <option value=''> -- Selecciona Año -- </option>

                    {MARCAS.map(marca => (
                        <option kay={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
        </form>
    </>
  )
}

export default Formulario