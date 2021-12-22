import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

const SET_SOLICITUD = gql`
        mutation crearSolicitud($proyectoId: String, $usuarioId: String , $fechaIngreso: String ,$fechaEgreso: String) {            
            crearSolicitud(usuario : {
                proyectoId: $proyectoId
                usuarioId: $usuarioId
                fechaIngreso: $fechaIngreso
                fechaEgreso: $fechaEgreso
                estado: $estado
            }) {
                usuarioId
                proyectoId
                fechaIngreso
                fechaEgreso
                estadoSolicitud
            }               
        }
    `;

const CrearSolicitud = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [crearSolicitud, { data, loading, error }] = useMutation(SET_SOLICITUD)
    console.log({ data })

    const handleCreate = (args) => {

        const { proyectoId, usuarioId, fecheIngreso, FechaEgreso } = args;
        crearSolicitud({ variables: { proyectoId, usuarioId, fecheIngreso, FechaEgreso } });
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
                    <h5>Solicitudes - Crear solicitud</h5>
                </div>

                <div class="divTabla">
                    <table id="tablaIngresoDatos">
                        <tr>
                            <td><h5>ID del proyecto</h5></td>
                            <td class="Izquierda"> <input type="text" size="70" placeholder="proyectoId" {...register("proyectoId", { maxLength: 80 })} /></td>
                        </tr>

                        <tr>
                            <td><h5>Fecha de Ingreso</h5></td>
                            <td class="Izquierda"><input type="date" step="1" min="2021-10-01" max="2022-12-31" placeholder="fechaIngreso" {...register("fechaIngreso", { maxLength: 80 })} /></td>
                        </tr>

                        <tr>
                            <td><h5>Fecha de Egreso</h5></td>
                            <td class="Izquierda"><input type="date" step="1" min="2021-10-01" max="2022-12-31" placeholder="fechaEgreso" {...register("fechaEgreso", { maxLength: 80 })} /></td>
                        </tr>

                    </table>

                    <div class="acciones" align="center">

                        <input type="submit" class="Guardar" />

                        <button class="Guardar"><span><Link to="/">Atrás</Link></span>
                        </button>

                    </div>


                </div>

            </div>
        

        </form >
    )
}

export default CrearSolicitud