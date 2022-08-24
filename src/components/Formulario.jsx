import React from 'react'

import { MARCAS,YEARS,PLANES } from '../constants'

import { Fragment } from 'react'

import useCotizador from '../hooks/useCotizador'

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
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
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

                    {YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>


            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Elige un plan
                </label>
                
                <div className='flex gap-3 items-center'>
                    {
                        PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>

                                <input 
                                    type='radio'
                                    name='plan'
                                    value={plan.id}
                                />
                            </Fragment>
                        ))
                    }
                </div>
            </div>

            <input 
                type='submit'
                className='w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white cursor-pointer
                p-3 uppercase font-bold'
                value='Cotizar'
            />
        </form>
    </>
  )
}

export default Formulario