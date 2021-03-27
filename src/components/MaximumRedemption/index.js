import React from 'react'
import CustomizedSlider from '../Slider'

import { connect } from 'react-redux'

import { SetMaximumRedemption } from '../../data/actions'

const MaximumRedemption = ({ redemption, dispatch }) => {


    const MaximumRedemptionDays = {
        0: "Até 0 dia útil",
        1: "Até 1 dia útil",
        2: "Até 2 dias úteis",
        3: "Até 3 dias úteis",
        4: "Até 4 dias úteis",
        5: "Até 5 dias úteis",
        6: "Até 6 dias úteis",
        7: "Até 7 dias úteis",
        8: "Até 8 dias úteis",
        9: "Até 9 dias úteis",
        10: "Até 10 dias úteis",
        11: "Até 12 dias úteis",
        12: "Até 13 dias úteis",
        13: "Até 14 dias úteis",
        14: "Até 15 dias úteis",
        15: "Até 17 dias úteis",
        16: "Até 18 dias úteis",
        17: "Até 19 dias úteis",
        18: "Até 20 dias úteis",
        19: "Até 21 dias úteis",
        20: "Até 22 dias úteis",
        21: "Até 27 dias úteis",
        22: "Até 28 dias úteis",
        23: "Até 29 dias úteis",
        24: "Até 30 dias úteis",
        25: "Até 31 dias úteis",
        26: "Até 33 dias úteis",
        27: "Até 35 dias úteis",
        28: "Até 37 dias úteis",
        29: "Até 42 dias úteis",
        30: "Até 44 dias úteis",
        31: "Até 45 dias úteis",
        32: "Até 50 dias úteis",
        33: "Até 57 dias úteis",
        34: "Até 58 dias úteis",
        35: "Até 59 dias úteis",
        36: "Até 60 dias úteis",
        37: "Até 65 dias úteis",
        38: "Até 70 dias úteis",
        39: "Até 89 dias úteis",
        40: "Até 90 dias úteis",
        41: "Até 91 dias úteis",
        42: "Até 119 dias úteis",
        43: "Até 120 dias úteis",
        44: "Até 179 dias úteis",
        45: "Até 180 dias úteis",
        46: "Até 270 dias úteis"
    }

    return (
        <div className="large-12 medium-12 small-12 columns">
            <div className="row collapse expanded card display">
                <div className="input-group text-center">
                    <label><strong>Prazo de resgate</strong></label>
                </div>
                
                <div>
                    <CustomizedSlider value={redemption.value} min={redemption.min} max={redemption.max} onChange={(e,v) => dispatch(SetMaximumRedemption(v))}/>
                </div>

                <div>
                    <p>{MaximumRedemptionDays[redemption.value]}</p>
                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({ redemption: state.filterRedemption }))(MaximumRedemption);