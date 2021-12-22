import React from 'react'
import {
    Link
} from "react-router-dom";
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const SET_PROYECTO = gql`
        mutation agregarProyecto($nombreProyecto: String, $objetivosGenerales: String , $objetivosEspecificos: String ,$presupuesto: String) {            
            agregarProyecto(proyecto:{
                nombreProyecto: $proyectoId
                objetivosGenerales: $usuarioId
                objetivosEspecificos: $fechaIngreso
                presupuesto: $fechaEgreso

            }) 
            {
                nombreProyecto
                objetivosGenerales
                objetivosEspecificos
                presupuesto
                estadoAprobacion
                estadoActual
                fase
                lider  
            }               
        }
    `;

export const CrearProyecto = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [agregarProyecto, { data, loading, error }] = useMutation(SET_PROYECTO)
    console.log({ data })

    const handleCreate = (args) => {

        const { nombreProyecto, objetivosGenerales, objetivosEspecificos, presupuesto } = args;
        agregarProyecto({ variables: { nombreProyecto, objetivosGenerales, objetivosEspecificos, presupuesto } });
        console.log({ args })
    }


    useEffect(() => {
        if (data) {
            console.log('data', data);

            navigate('/PantallaInicio', {
                replace: true
            })
        }
    }, [data])

    return (

        <form onSubmit={handleSubmit(handleCreate)}>
            <div className='login2'>
                <div class="encabezado">
                    <h5>Proyecto - Nuevo proyecto</h5>
                </div>

                <div class="divTabla">
                    <table id="tablaIngresoDatos">
                        <tr>
                            <td><h5>Nombre del proyecto</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" placeholder="nombreProyecto" {...register("nombreProyecto", { maxLength: 80 })} /></td>
                        </tr>

                        <tr>
                            <td><h5>Presupuesto</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" placeholder="presupuesto" {...register("presupuesto", { maxLength: 80 })} /></td>
                        </tr>



                        <tr>
                            <td><h5>Objetivos generales</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" placeholder="objetivosGenerales" {...register("objetivosGenerales", { maxLength: 80 })} /></td>
                        </tr>

                        <tr>
                            <td><h5>Objetivos Especificos</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" placeholder="objetivosEspecificos" {...register("objetivosEspecificos", { maxLength: 80 })} /></td>
                        </tr>

                    </table>

                    <div class="acciones" align="center">

                        <input type="submit" class="Guardar" />

                        <button class="Guardar"><span><Link to="/Listarproyectos">Atrás</Link></span>
                        </button>

                    </div>

                </div>
            </div>
        </form>
    )
}
export default CrearProyecto