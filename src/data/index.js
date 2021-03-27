import { Switch } from '@material-ui/core'
import { createStore } from 'redux'

const INITIAL_STATE = {
    filterFoundName: '',
    filterMinimumAplication: {
        min: 0,
        max: 16,
        value:16
    },
    filterRedemption: {
        min: 0,
        max: 46,
        value: 46
    },
    filterRisk: 11,
    filterStrategies: {
        fixedIncome: true,
        differentStrategies: true,
        variableIncome: true,
        managers: [],
        filterOtherFilters: {
            onlyEgs: false,
            onlyIQ: false
        }
    },
    founds: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FOUND_NAME':
            return { ...state, filterFoundName: action.foundName }
        case 'MINIMUM_APPLICATION':
            return { ...state, filterMinimumAplication: action.minimumAplication }
        case 'MAXIMUM_REDEMPTION':
            return { ...state, filterRedemption: action.redemption }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;