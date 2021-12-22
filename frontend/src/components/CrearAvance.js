import React from 'react'
import Guardar from '../assets/img/Guardar.png';
import { Link } from "react-router-dom";
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const SET_AVANCE = gql`
        mutation crearAvance($proyectoId: String, $descripcion: String ) {            
            crearAvance(usuario : {
                proyectoId: $proyectoId
                descripcion: $usuarioId
            }) {

            }               
        }
    `;

const CrearAvance = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [crearAvance, { data, loading, error }] = useMutation(SET_AVANCE)
    console.log({ data })

    const handleCreate = (args) => {

        const { proyectoId, descripcion} = args;
        crearAvance({ variables: { proyectoId, descripcion } });
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
                    <h5>Proyecto - Nuevo avance</h5>
                </div>

                <div class="divTabla">
                    <table id="tablaIngresoDatos">
                        <tr>
                            <td><h5>ID del proyecto</h5></td>
                            <td class="Izquierda"><input type="text" size="70" placeholder="proyectoId" {...register("proyectoId", { maxLength: 80 })} /></td>
                        </tr>

                        <tr>
                            <td><h5>Descripción del avance</h5></td>
                            <td class="Izquierda">
                                <input type="text" size="70" placeholder="cescripcion" {...register("descripcion", { maxLength: 300 })} /></td>
                        </tr>

                    </table>



                </div>
                <div class="acciones" align="center">

                    <input type="submit" class="Guardar" />

                    <button class="Guardar"><span><Link to="/">Atrás</Link></span>
                    </button>

                </div>
            </div>
        </form>
    )
}

export default CrearAvance
