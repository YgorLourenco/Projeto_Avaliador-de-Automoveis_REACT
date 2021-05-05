import React, {useState} from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import {obterDiferencaYear, calcularMarca, obterPlano} from '../helper'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px; 
    /*
    Flex: flex-grow flex-shrink flex-basis;
    Primeiro Valor: 0 como o item vai crescer em relação a outros
    Segundo Valor: 0 como o item vai ser reduzido em relação a outros
    Terceiro Valor: 100px e o tamanho do item
    */
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none; // Para o Mozila e o Edge suportarem
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Botao = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    // & e uma notação do SCSS que representa o mesma tag anterior que no caso e o <button>
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({guardarResumo, guardarCarregando}) => {

    const [dados, guardarDados] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    // Esse useState e para o preventDefault()
    const [error, guardarError] = useState(false)

    // Extrair os valores do State
    const { marca, year, plan} = dados // Isso aqui e um destructuring, ele e usado para usar uma variavel especifica dentro de um objeto ou array

    // Ler os dados do formulário e coloca-los no useState
    const obterInformacao = e => {
        guardarDados({
            ...dados,
            [e.target.name] : e.target.value
        })
    }

    // Quando o usuário pressiona submit 
    const AvaliarSeguro = e => {
        e.preventDefault() // Fazer um evento ser cancelavel

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)

        // Uma base de 2000 
        let resultado = 2000;

        // Obter a diferença de anos
        const diferenca = obterDiferencaYear(year) 

        // Por cada ano que resta é 3%
        resultado = resultado - ((diferenca * 3) * resultado) / 100; 

        // Americano - 15%
        // Asiatico - 5%
        // Europeu - 30%
        resultado = calcularMarca(marca) * resultado;
        
        // Basico Aumenta 20%
        // Completo Aumenta 50%
        const incrementoPlan = obterPlano(plan)
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2) // parseFloat transforma em decimal / toFixed limita as casas decimais
        
        guardarCarregando(true)

        setTimeout(() => {
            // Elimina o Spinner
            guardarCarregando(false)

            // Passa a informação ao componente principal
            guardarResumo({
                avaliacao: Number(resultado),
                dados
            })
        }, 3000)

    }

    return ( 
        <form
            onSubmit={AvaliarSeguro}
        >
            {error
            ? <Error>Todos os campos são obrigatórios</Error>
            : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={obterInformacao} // Em caso de mudança no valor, armazenar valor em função 'obterInformacao' e em guardarDados()
                >
                    <option value=''> --Selecione-- </option>
                    <option value='americano'> Americano </option>
                    <option value='europeu'> Europeu </option>
                    <option value='asiatico'> Asiatico </option>
                </Select>
            </Campo>
            <Campo>
                <Label>Ano</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={obterInformacao}
                >
                    <option value=""> --Selecione-- </option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plano</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basico'
                    checked={plan === 'basico'} // Quando marcar variavel plan do useState vai ser igual o valor basico
                    onChange={obterInformacao}
                /> Básico

                <InputRadio
                    type='radio'
                    name='plan'
                    value='completo'
                    checked={plan === 'completo'} // Quando marcar variavel plan do useState vai ser igual o valor completo
                    onChange={obterInformacao}
                /> Completo 
            </Campo>

            <Botao type='submit'>Avaliar</Botao>
        </form>
     );
}

Formulario.propTypes = {
    guardarResumo: PropTypes.func.isRequired,
    guardarCarregando: PropTypes.func.isRequired
}
 
export default Formulario;