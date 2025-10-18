import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './assets/componentes/Header';
import Sobre from './assets/componentes/Sobre';
import Peças from './assets/componentes/Pecas';
import Servicos from './assets/componentes/Servicos';
import Estilo from './assets/componentes/Estilo';
import Durar from './assets/componentes/Durar';
import Rodape from './assets/componentes/Rodape';
import Avaliacoes from './assets/componentes/Avaliacoes';
import Contatos from './assetsHome/componentes/Contatos';

import Rodape2 from './assetsHome/componentes/Rodape';

function App() {
  return (
    <Router>
      <main className={'fundo'}>
        <Header /> 
        <Routes>
          <Route path="/" element={
            <>
              <Sobre />
              <Peças />
              <Servicos />
              <Estilo />
              <Durar />
              <Avaliacoes />
              <Rodape />
            </>
          } />
          <Route path="/home" element={
            <>
              <Sobre /> 
              <Peças />
              <Servicos /> 
              <Estilo />
              <Durar />
              <Avaliacoes />
              <Rodape />
            </>
          } />
          <Route path="/pedido" element={
            <>
            <Contatos />
            <Rodape2 />
            </>
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App