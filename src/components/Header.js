import React from 'react'
import styled from '@emotion/styled' // Biblioteca que permite utilizar estilos CSS em JavaScript
import PropTypes from 'prop-types'

// Estilizando a tag "<header>" com CSS
const ConcatenadorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif ;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ConcatenadorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ConcatenadorHeader>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;