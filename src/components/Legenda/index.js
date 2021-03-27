import React from 'react'
import styled from 'styled-components';
import {Stars,Information,Block,Reply,Eearth} from '../Icons';


const Container = styled.div`
    padding: 20px;
`;

const Title = styled.strong`
   font-size: 12px;
   color: #505152;
`;

const Li = styled.li`
    font-size: 13px;
    color: #505152;
`;


const Legenda = () => {
    return (
        <div className="row">
            <div className="grid-container">
                <div className="large-9 medium-9 small-12 columns">
                    <Container>
                        <p><Title>LEGENDA</Title></p>
                        <ul className="row no-bullet">
                            <Li className="large-3 medium-3 text-left small-12 columns">
                                <Stars/>{'   '}Fundo para investidor qualificado
                            </Li>
                            <Li className="large-3 medium-3 text-left small-12 columns">
                                <Information/>{'   '}Entenda o resgate deste fundo
                            </Li>
                            <Li className="large-3 medium-3 text-left small-12 columns">
                                <Block/>{'   '}Fundo fechado para aplicação
                            </Li>
                            <Li className="large-3 medium-3 text-left small-12 columns">
                                <Reply/>{'   '}Aplicar neste fundo
                            </Li>
                        </ul>
                        <ul className="row no-bullet">
                            <Li className="large-3 medium-3 text-left small-12 columns">
                                <Eearth/>{'   '}Investimento ESG (Environmental, Social and Governance)
                            </Li>
                        </ul>
                    </Container>

                </div>
            </div>
        </div>
    )
}

export default Legenda
