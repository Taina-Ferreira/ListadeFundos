import React from "react";
import { connect } from "react-redux";

import {setRiskProfile} from '../../../../data/actions'
import styled from 'styled-components'

function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i <= stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};


const BarRisk = styled.span`
  height: ${props => 15 + (2 * props.value)}px;
  margin-top: ${props => 39 - 15 - (2 * props.value)}px;
  display: block;
  width: 7px;
  margin-bottom: 0px;
  background-color: ${props => props.theme.colors.barRisk[props.value]};
  box-sizing: border-box;
  :hover{
    cursor: pointer;
  }
`;


const Legenda = styled.span`
  font-size: 13px;
  margin-top: ${39-13}px;
  padding-left: 5px;
  padding-right: 5px;
  align-content: center;
`;

const Title = styled.strong`
  font-size: 13px;
  color: ${props => props.theme.colors.black};
`;

const RiskProfile = ({ riskProfile, dispatch }) => {
    const rangeRisk = range(riskProfile.min,riskProfile.max);
    
    const Bar = rangeRisk.map((value,key) => {        
        return (
          <div style={{paddingLeft: "0px",padding: "0px", height: "40px", marginLeft: "2px",marginRight: "2px"}} key={key}>
            <BarRisk value={value} onClick={() => dispatch(setRiskProfile(value))}/>
          </div> 
        )
    })


  return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell auto">
            <p className="text-center">
              <Title>Perfil de risco de fundo</Title>{' '}
              <i className="box-info bx--right box-info--noline" data-tooltip title="Cada fundo é classificado considerando a política de investimento e os riscos inerentes aos ativos e mercados em que pode investir." data-position="bottom" data-alignment="right">
                  <i className="mdi mdi-help-circle" style={{fontSize: "13px"}}></i>            
              </i>
            </p>
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell auto" style={{display: "flex", alignContent: "center"}}>
            <Legenda>menor</Legenda>
            {Bar}
            <Legenda>maior</Legenda>
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell auto">
            <p className="text-center">
              <Legenda>Risco {riskProfile.value}</Legenda>
            </p>
          </div>
        </div>
      </div>
  );
};

export default connect((state) => ({ riskProfile: state.filterRisk }))(
  RiskProfile
);
