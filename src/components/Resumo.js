import React from 'react'
import styled from '@emotion/styled'
import { primeiraMaiscula} from '../helper'
import PropTypes from 'prop-types';

const ConcatenadorResumo = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const Resumo = ({dados}) => {

    // Extrair Dados
    const {marca, year, plan} = dados

    if(marca === '' || year === '' || plan === '') return null;

    return ( 
        <ConcatenadorResumo> 
        <h2>Resumo da Avaliação</h2>
        <ul>
            <li>Marca: {primeiraMaiscula(marca)}</li>
            <li>Plano: {primeiraMaiscula(plan)} </li>
            <li>Ano do Automovel: {year}</li>
        </ul>
        </ConcatenadorResumo>
     );
}

Resumo.propTypes = {
    dados: PropTypes.object.isRequired
}
 
export default Resumo;