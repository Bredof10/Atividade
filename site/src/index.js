import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import Abastecimento from './Pages/Abastecimento'
import Acai from './Pages/Acai'
import Alunos from './Pages/Alunos'
import Cafe from './Pages/Cafe'
import Compra from './Pages/Compra'
import Conta from './Pages/Conta'
import Febre from './Pages/Febre'
import Juros from './Pages/Juros'
import Linha from './Pages/Linha'
import Orcamento from './Pages/Orcamento'
import Retagunlo from './Pages/Retagulo'
import Salario from './Pages/Salario'
import Signo from './Pages/Signo'
import Sorveteria from './Pages/Sorveteria'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Abastecimento' element={<Abastecimento />} />
      <Route path='/Acai' element={<Acai />} />
      <Route path='/Alunos' element={<Alunos />} />
      <Route path='/Cafe' element={<Cafe />} />
      <Route path='/Compra' element={<Compra />} />
      <Route path='/Conta' element={<Conta />} />
      <Route path='/Febre' element={<Febre />} />
      <Route path='/Juros' element={<Juros />} />
      <Route path='/Linha' element={<Linha />} />
      <Route path='/Orcamento' element={<Orcamento />} />
      <Route path='/Retangulo' element={<Retagunlo />} />
      <Route path='/Salario' element={<Salario />} />
      <Route path='/Signo' element={<Signo />} />
      <Route path='/Sorveteria' element={<Sorveteria />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
