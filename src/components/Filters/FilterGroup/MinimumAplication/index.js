import React from 'react'
import CustomizedSlider from '../../../Slider'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setMinimumApplication } from '../../../../data/actions'

const Title = styled.strong`
  font-size: 13px;
  color: ${props => props.theme.colors.black};
`;

const Legenda = styled.span`
  font-size: 14px;
`;

const MinimumAplication = ({ rangeAplication, dispatch }) => {


    const MinimumAplicationValue = {
        0: "Até R$0,00",
        1: "Até R$100,00",
        2: "Até R$200,00",
        3: "Até R$250,00",
        4: "Até R$500,00",
        5: "Até R$1.000,00",
        6: "Até R$2.500,00",
        7: "Até R$3.000,00",
        8: "Até R$5.000,00",
        9: "Até R$10.000,00",
        10: "Até R$15.000,00",
        11: "Até R$20.000,00",
        12: "Até R$25.000,00",
        13: "Até R$30.000,00",
        14: "Até R$50.000,00",
        15: "Até R$100.000,00",
        16: "Até R$500.000,00"
    }

    return (
        <div className="grid-container">
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <label className="text-center"><Title>Aplicação mínima</Title></label>
                </div>
            </div>
            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <CustomizedSlider value={rangeAplication.value} min={rangeAplication.min} max={rangeAplication.max} onChange={(e,v) => dispatch(setMinimumApplication(v))}/>
                </div>
            </div>

            <div className="grid-x grid-margin-x">
                <div className="cell auto">
                    <p className="text-center"><Legenda>{MinimumAplicationValue[rangeAplication.value]}</Legenda></p>
                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({ rangeAplication: state.filterMinimumAplication }))(MinimumAplication);