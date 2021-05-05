import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition  } from 'react-transition-group' // Componentes de animação
import PropTypes from 'prop-types';

const Mensagem = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoAvaliacao = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`

const TextoConcatenador = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Resultado = ({avaliacao}) => {
    return ( 
        (avaliacao === 0) 
            ? <Mensagem>Escolha a marca, ano e tipo de seguro </Mensagem> 
            : ( <ResultadoAvaliacao>
                <TransitionGroup
                    component='span'
                    className='resultado'
                >
                    <CSSTransition
                        classNames='resultado'
                        key={avaliacao}
                        timeout={{enter: 500, exit: 500}}
                    >
                        <TextoConcatenador>O total é:<br /> <span>R${avaliacao}</span></TextoConcatenador>
                    </CSSTransition>
                </TransitionGroup>
                </ResultadoAvaliacao>
            )
     );
}

Resultado.propTypes = {
    avaliacao: PropTypes.number.isRequired
}

export default Resultado;