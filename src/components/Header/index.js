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
    font: 400 48px "Roboto Slab",serif;
    @media only screen and (max-width: 480px) {
        font: 400 35px "Roboto Slab",serif;
    }
`;

const P = styled.p`
    font: 300 22px "Roboto",sans-serif;
`;

const Header = () => {
    return (
        <Grid className="grid-x grid-margin-x align-center align-middle">
            <div className="grid-x grid-padding-x">
                <div className="cell small-12 medium-12 large-12 text-center">
                    <H1 className="text-center">FUNDOS DE INVESTIMENTO</H1>
                </div>
                <div className="cell small-12 medium-12 large-12 text-center">
                    <P className="h4 text-center">Conheça a nossa lista de fundos</P>
                </div>
            </div>
        </Grid>
    )
}

export default Header
