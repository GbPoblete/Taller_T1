import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'


function  SearchCharacter() {

    const {search} = useParams()

    const url = `https://tarea-1-breaking-bad.herokuapp.com/api/characters`
    const [info, setInfo] = useState([])
    
    useEffect(()=> {
      fetchApi()
    }, [])

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setInfo(responseJson)
      }

    var aux_11 = []

    for (var i = 0; i< info.length; i++) {
        if (info[i].name.includes(search)){
            aux_11.push(info[i])
        }
        else{
        }
    }

    console.log(info)
    console.log(aux_11)

    return (
      <div className="SearchInfo">
        <h1>Resultados de la búsqueda: {search} - Página x</h1>
        { !aux_11? 'Cargando...' :
                aux_11.map((i,id) => {
                    return (
                         <section>
                            <li key={id}> 
                                <div className="btn-group">
                                    <Link to={`busqueda/${search}/info`} className="btn btn-info"> 
                                        {i.name}
                                    </Link>
                                </div>
                            </li>
                        </section>      
                    )
                })
        }
      </div>
    );
  }
  
export default SearchCharacter