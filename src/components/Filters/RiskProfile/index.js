import React from "react";
import "./index.css";
import { connect } from "react-redux";

import {SetRiskProfile} from '../../../data/actions'

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


const RiskProfile = ({ riskProfile, dispatch }) => {
    
    const rangeRisk = range(riskProfile.min,riskProfile.max);
    
    const Bar = rangeRisk.map((value,key) => {        
        return (      
            <div className={`risk__level risk--l${value}`} key={key}>
                <div onClick={() => dispatch(SetRiskProfile(value))}>
                    <span className="risk__bar"></span>
                    <span className="risk__line"></span>
                </div>
            </div>
        )
    })


  return (
    <div className="row collapse expanded card display card--extraPadding">
      <div className="large-12 medium-12 small-12 columns hide-for-small-only">
        <div className="input-group text-center">
          <label htmlFor="">
            <strong>Perfil de risco de fundo</strong>{' '}
            <i className="box-info bx--right box-info--noline" data-tooltip title="Cada fundo é classificado considerando a política de investimento e os riscos inerentes aos ativos e mercados em que pode investir." data-position="bottom" data-alignment="right">
              <i className="mdi mdi-help-circle"></i>            
            </i>
          </label>
        </div>
        <div className="risk-group card--noMarginBottom">
          <span className="risk__subtitle float-left">menor</span>
          <div className="risk__levels float-left">
            {Bar}
          </div>
          <span className="risk__subtitle float-left">maior</span>
        </div>
      </div>
      <br/><br/><br/>
    </div>
  );
};

export default connect((state) => ({ riskProfile: state.filterRisk }))(
  RiskProfile
);
