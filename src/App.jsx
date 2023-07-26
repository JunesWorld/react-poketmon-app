import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [pokemons, setPokemons] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1008&offset=21'

  useEffect(() => {
    fetchPokeData();
  }, [])

  const fetchPokeData = async() => {
    try {
      const response = await axios.get(url);
      console.log(response.data.results)
      setPokemons(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <article className='pt-6'>
      <header className='flex flex-col gap-2 w-full px-4 z-50'>
        Input Form
      </header>
    </article>
  )
}
export default App
