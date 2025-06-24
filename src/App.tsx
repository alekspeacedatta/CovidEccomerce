import './App.css'
import Home from './components/pages/Home'
import ProductView from './components/pages/ProductView'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' />
      <Route path='/product' element={<ProductView/>} />
      <Route path='/shop' />
      <Route path='/contact' />
    </Routes>
  )
}

export default App
