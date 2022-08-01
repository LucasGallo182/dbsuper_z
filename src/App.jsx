import CharacterList from './components/CharacterList'

import './index.css'
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CharacterDetailList from './components/CharacterDetailList'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={ <CharacterList /> } />
          <Route path='/categorias/:categoryId' element={ <CharacterList /> } />
          <Route path='/character/:id' element={ <CharacterDetailList /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App