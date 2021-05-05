import React, {useState} from 'react'
import Header from './components/Header'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resumo from './components/Resumo'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Concatenador = styled.div`
  max-width: 600px;
  margin:0 auto;
`;
const ConcatenadorFormulario = styled.div`
  background-color:#FFF;
  padding: 3rem;
`

function App() {

  const [resumo, guardarResumo] = useState({
    avaliacao: 0,
    dados: {
      marca: '',
      year: '',
      plan: ''
    }
  }) // useState({}) e um objeto vazio

  // Manipulando o Spinner de carregamento
  const [carregando, guardarCarregando] = useState(false)

  // Extrair Dados
  const {avaliacao, dados} = resumo

  return (
    <Concatenador>
      <Header 
      titulo='Avaliador de Seguros'
      />
    <ConcatenadorFormulario>
      <Formulario 
        guardarResumo={guardarResumo}
        guardarCarregando={guardarCarregando}
      />

      {carregando ? <Spinner /> : null}

      <Resumo 
        dados = {dados}
      />

      {!carregando
      ? <Resultado 
        avaliacao={avaliacao}
        />
      : null}

      
    </ConcatenadorFormulario>
    </Concatenador>
  );
}

export default App;
