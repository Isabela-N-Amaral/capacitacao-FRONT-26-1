import { Card } from './components/Card.jsx'
import { Npcs } from './components/Npcs.jsx'
import './App.css'
import { cards_config } from './constants/cardsData'
import { npcs_config } from './constants/NpcsData'
import { GaleriaGatos } from './components/GaleriaGatos'


function App() {

  return (
    <>
    <header>
      <div className='nav'>
      <h1 className='home'>Home</h1>
      <h1 className='galeria'>Galeria</h1>
      </div>
      <img className='logo' src="/stardew.png" alt="Stardew Valley" />
      <div className='links'>
        <a href="https://www.instagram.com/bela_2804/" target='_blank' rel='external'>
        <picture>
          <source media="(min-width: 2150px)" srcset="/insta-64.png" />
          <source media="(min-width: 770px)" srcset="/insta-32.png" />
          <source media="(min-width: 480px )" srcSet="/insta-24.png" />
          <img src="/insta-16.png" alt="Logo instagram" /> 
        </picture>
        </a>
        <a href="https://github.com/Isabela-N-Amaral" target='_blank' rel='external'>
        <picture>
          <source media="(min-width: 2150px)" srcset="/git-64.png" />
          <source media="(min-width: 770px)" srcset="/git-32.png" />
          <source media="(min-width: 480px)" srcset="/git-24.png" />
         <img src="/git-16.png" alt="Logo github"/>
         </picture>
        </a>
      </div> 
    </header>
    <div className="sobre">
    <img className='profile' src="/profile.png" alt="Meu profile" />
    <img className='bio' src="/bio.jpeg" alt="Biografia" />
    <img className='bio-d' src="/bio-d.jpeg" alt="Biografia Detalhada" />
    </div>

    <div className="cards">
      {cards_config.map((card) => (
      <Card
      key = {card.id}
      imageUrl = {card.imageUrl}
      /> 
     ))} 
    </div>
  
  <div className="npcs">
      {npcs_config.map((npc) => (
      <Npcs
      key = {npc.id}
      imageUrl = {npc.imageUrl}
      /> 
     ))} 
  </div>

     <div>
      <h1 className='galeria-gatos'>Galeria de Gatinhos Usando API</h1>
      <GaleriaGatos />
    </div>
    <footer>
      <div className='pF'>
      <p>Site produzido por Isabela Nunes Amaral para a capacita de Front-end da Ecomp!</p>
      </div>
    </footer>
    </>
  );
}
export default App
