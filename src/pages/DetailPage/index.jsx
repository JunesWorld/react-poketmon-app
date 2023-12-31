import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {

  const params = useParams();
  const pokemonId = params.id;
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

  useEffect(() => {
    fetchPokemonData();
  }, [])

  async function fetchPokemonData() {
    const url = `${baseUrl}${pokemonId}`
    try {
      const { data: pokemonData } = await axios.get(url);

      if(pokemonData) {
        const {name, id, types, weight, height, stats, abilities} = pokemonData;
        const nextAndPreviousPokemon = await getNextAndPreviousPokemon(id);
        // console.log(nextAndPreviousPokemon)
      }

    } catch (error) {
      console.error(error)
    }
  }

  async function getNextAndPreviousPokemon(id) {
    const urlPokemon = `${baseUrl}?limit=1&offset=${id - 1}`

    const { data: pokemonData } = await axios.get(urlPokemon)

    const nextResponse = pokemonData.next && (await axios.get(pokemonData.next))
    const previousResponse = pokemonData.previous && (await axios.get(pokemonData.previous))

    // console.log('previousResponse', previousResponse)

    return {
      next: nextResponse?.data?.results?.[0],
      previous: previousResponse?.data?.results?.[0]?.name
    }
  }

  return (
    <div>DetailPage</div>
  )
}

export default DetailPage