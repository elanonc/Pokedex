import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';

import Pokemon from "../Components/Pokemon";

const [pokemon, setPokemon] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    getPokemonList();
}, []);

async function getPokemonList() {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
        pokemonArray.push(await getPokemonData(i));
    }
    console.log(pokemonArray);
    setPokemon(pokemonArray);
    setLoading(false);
}

async function getPokemonData(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response;
}

function Inicio() {
  return (
    <>
        {
            loading ? (
                <h1>Carregando...</h1>
            ) : (
                <Row>
                    {
                        pokemon.map(p => (
                            <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Pokemon pokemon={p.data}/>
                            </Col>
                        ))
                    }
                </Row>
            )
        }        
    </>
  )
}

export default Inicio;