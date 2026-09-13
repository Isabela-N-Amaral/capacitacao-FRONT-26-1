import { useState } from 'react'

export function Npcs(props) {
  const [mostrar, setMostrar] = useState(false)
  const [likes, setLikes] = useState(0)

  return (
    <div className="npcs-item">

      <div className="img-wrap">
        {/* renderização condicional */}
        {mostrar ? (
          <img className="img-npcs" src={props.imageUrl} alt={props.title} />
        ) : (
            <div className='placeh'>
          <p>Clique em <br></br>mostrar <br></br>para ver!</p>
          </div>
        )}
      </div>

      {/* botão mostrar/esconder */ }
      <div className='botao1'>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Esconder ' : 'Mostrar '}
      </button>
     </div>
      {/* contador de likes */}
      <div className='botao2'>
      <button onClick={() => setLikes(likes + 1)}>
        <img src="/Love.png" alt="Love bubble" width={25} height={20} /> {likes}
      </button>
        </div>
    </div>
  )
}