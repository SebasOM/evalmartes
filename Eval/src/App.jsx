import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navb from './components/Navb'
import Ima from './components/rota'
import Botones from './components/botones'
import logo from './assets/logo.png'

function App() {
  return (
    <>
    <div className='logo'>
      <img src={logo}
      alt="logo"
      style={{width:80}} />
      </div>
      <Navb></Navb>
      <div className="texto">
        Computer and Laptop
      </div>
      <div className="texto3">
        Accesories
      </div>
      <div className="texto2">
        There are so many of Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque maxime aspernatur quisquam maiores cupiditate, adipisci doloremque at distinctio nobis fugit, quam fuga possimus laudantium placeat quaerat tempora nostrum? Perferendis, voluptates.
      </div>
      <Ima></Ima>
      <Botones></Botones>
    </>
  )
}

export default App
