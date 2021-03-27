import React from 'react'
import styled from 'styled-components';
import hero from '../../assets/hero.jpg';

const Grid = styled.header`
    background-image: url(${hero});
    background-size:cover;
    background-position: center;
    color: #fff;
    height: 315px;
    padding: 2em;

`;

const H1 = styled.h1`
    font-size: 52px;
    font: 400 52px "Roboto Slab",serif;
`;

const P = styled.p`
    font: 300 22px/1.5 "Roboto",sans-serif;
`;

const Header = () => {
    return (
        <Grid className="grid-x grid-padding-x align-center align-middle fluid">
            <div className="row">
                <div className="grid-padding-x">
                    <div className="cell small-12 align-self-bottom">
                    
                    <H1 className="text-center">FUNDOS DE INVESTIMENTO</H1>
                    <P className="h4 text-center">Conheça a nossa lista de fundos</P>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default Header
