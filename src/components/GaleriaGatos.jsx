import { useState, useEffect } from 'react'
import './GaleriaGatos.css'
export function GaleriaGatos() {
  const [gatos, setGatos] = useState([])

  useEffect(() => {
    async function loadCats() {
      const url = 'https://api.thecatapi.com/v1/images/search?limit=2&has_breeds=1&api_key=live_Pk3Q9o0Opr3QZp2hLt2BnIA8HTzxmwEUSOWjJ3oi8iil5ObTV7YWQm1A7zHMJ1Kn'
      const response = await fetch(url)
      const items = await response.json()
      setGatos(items)
    }

    loadCats()
  } , []) 
  return (
    <div className="cardsGatos">
      {gatos.map((gato) => (
        <div key={gato.id} className="card-cat">

          <div className="img-box">
            <img src={gato.url} alt={gato.breeds[0]?.name} className="img-cat" />
          </div>

          <div className='textoGatos'>
            <h3>{gato.breeds[0]?.name}</h3>
            <p className='pG'>{gato.breeds[0]?.description}</p>
          </div>

        </div>
      ))}
    </div>
  )
}