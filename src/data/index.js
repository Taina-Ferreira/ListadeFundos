import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const INITIAL_STATE = {
    filterFundName: '',
    filterMinimumAplication: {
        min: 0,
        max: 16,
        value:16,
        range: {
            0: 0,
            1: 100,
            2: 200,
            3: 250,
            4: 500,
            5: 1000,
            6: 2500,
            7: 3000,
            8: 5000,
            9: 10000,
            10: 15000,
            11: 20000,
            12: 25000,
            13: 30000,
            14: 50000,
            15: 100000,
            16: 500000
        }
    },
    filterRedemption: {
        min: 0,
        max: 46,
        value: 46
    },
    filterRisk: {
        min: 1,
        max: 12,
        value: 12
    },
    filterStrategies: {
        fixedIncome: {
            id: 1,
            name: "RENDA FIXA",
            isActive: true,
            subgroups: [
                {id: 21, name: "Renda Fixa Global", isActive: true},
                {id: 20, name: "Debêntures Isentas", isActive: true},
                {id: 32	, name: "Cotas de FIDCs Próprios", isActive: true},
                {id: 5, name: "Crédito Privado", isActive: true},
                {id: 1, name: "Tesouro Inflação + Juros", isActive: true},
                {id: 29, name: "Cotas de FIDCs Multigestor", isActive: true},
                {id: 25, name: "Direitos Creditórios", isActive: true},
                {id: 4, name: "Crédito Privado High Grade", isActive: true},
                {id: 3, name: "Renda Fixa", isActive: true},
                {id: 2, name: "Tesouro Selic", isActive: true},
                {id: 33, name: "Renda Fixa Prefixado", isActive: true},
            ]
        },
        differentStrategies: {
            id: 2,
            name: "ESTRATÉGIAS DIFERENCIADAS",
            isActive: true,
            subgroups: [
                {id: 36, name: "Criptoativos", isActive: true},
                {id: 8, name: "Macro Valorização", isActive: true},
                {id: 28, name: "Estratégia Específica - Investimento no Exterior", isActive: true},
                {id: 26	, name: "Estratégia Específica", isActive: true},
                {id: 7, name: "Macro Equilíbrio", isActive: true},
                {id: 35, name: "Cambial", isActive: true},
                {id: 9	,name: "Long & Short Direcional", isActive: true},
                {id: 6, name: "Macro Consistência", isActive: true},
                {id: 10	, name: "Multigestor", isActive: true},
                {id: 11, name: "Quantitativo", isActive: true},
                {id: 22	, name: "Juros e Moedas", isActive: true},
                {id: 34, name: "Estratégia Dinâmica", isActive: true},
                {id: 18, name: "Long & Short Neutro", isActive: true},
                {id: 31, name: "Impacto Social", isActive: true},
            ]
        },
        variableIncome: {
            id: 3,
            name: "RENDA VARIÁVEL",
            isActive: true,
            subgroups: [
                {id: 14, name: "Renda Variável Global", isActive: true},
                {id: 30, name: "Valor Plus", isActive: true},
                {id: 13, name: "Equity Hedge/Long Biased", isActive: true},
                {id: 16, name: "Valor Long Only", isActive: true},
                {id: 38, name: "Quantitativo", isActive: true},
                {id: 12, name: "Dividendos", isActive: true},
                {id: 19, name: "Small Caps", isActive: true},
                {id: 23, name: "Multigestor", isActive: true},
                {id: 15, name: "Indexado", isActive: true},
            ]
        },
    },
    funds: [],
    benchmark: {},

}

const reducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case 'FOUND_NAME':
            return { ...state, filterFundName: action.fundName }
        case 'MINIMUM_APPLICATION':
            return { ...state, filterMinimumAplication: action.minimumAplication }
        case 'MAXIMUM_REDEMPTION':
            return { ...state, filterRedemption: action.redemption }
        case 'RISK_PROFILE':
            return {...state, filterRisk: action.riskProfile}
        case 'FOUNDS':
            return {...state, funds: action.funds}
        case 'BENCHMARK':
            return {...state, benchmark: action.benchmark}
          
        //Renda Fixa     
        case 'FILTRO_RENDA_FIXA_SUBGRUPOS':
            let subGroupsFixedIncome = state.filterStrategies.fixedIncome.subgroups
            let x = !subGroupsFixedIncome[action.key].isActive
            subGroupsFixedIncome[action.key].isActive = x

            return {
                ...state, 
                filterStrategies: {
                    ...state.filterStrategies, 
                    fixedIncome: {
                        ...state.filterStrategies.fixedIncome,
                        isActive: state.filterStrategies.fixedIncome.isActive || x,
                        subgroups: subGroupsFixedIncome
                    } 
                }
            }

        case 'FILTRO_RENDA_FIXA':
            let newFixedIncome = !state.filterStrategies.fixedIncome.isActive
            let fixedIncomesubgroups = state.filterStrategies.fixedIncome.subgroups

            fixedIncomesubgroups = fixedIncomesubgroups.map((el) => {
                                        el.isActive = newFixedIncome
                                        return el
                                    })

            return {
                ...state, 
                filterStrategies: {
                    ...state.filterStrategies,
                    fixedIncome:{
                        ...state.filterStrategies.fixedIncome,
                        isActive: newFixedIncome,
                        subgroups: fixedIncomesubgroups,
                    }                        
                }
            }
        
        //Estrategias diferenciadas
        case 'FILTRO_ESTRATEGIAS_DIFERENCIADAS_SUBGRUPOS':
            let subGroupsdiffStrategies = state.filterStrategies.differentStrategies.subgroups
            let y = !subGroupsdiffStrategies[action.key].isActive
            subGroupsdiffStrategies[action.key].isActive = y

            return {
                ...state, 
                filterStrategies: {
                    ...state.filterStrategies, 
                    differentStrategies: {
                        ...state.filterStrategies.differentStrategies,
                        isActive: state.filterStrategies.differentStrategies.isActive || y,
                        subgroups: subGroupsdiffStrategies
                    } 
                }
            }

        case 'FILTRO_ESTRATEGIAS_DIFERENCIADAS':
            let newdiffStrategies = !state.filterStrategies.differentStrategies.isActive
            let diffStrategiessubgroups = state.filterStrategies.differentStrategies.subgroups

            diffStrategiessubgroups = diffStrategiessubgroups.map((el) => {
                                        el.isActive = newdiffStrategies
                                        return el
                                    })

            return {
                ...state, 
                filterStrategies: {
                    ...state.filterStrategies,
                    differentStrategies:{
                        ...state.filterStrategies.differentStrategies,
                        isActive: newdiffStrategies,
                        subgroups: diffStrategiessubgroups,
                    }                        
                }
            }

        //Renda variavel
        case 'FILTRO_RENDA_VARIAVEL_SUBGRUPOS':
            let subGroupsVariableIncome = state.filterStrategies.variableIncome.subgroups
            let z = !subGroupsVariableIncome[action.key].isActive
            subGroupsVariableIncome[action.key].isActive = z

            return {
                ...state, 
                filterStrategies: {
                    ...state.filterStrategies, 
                    variableIncome: {
                        ...state.filterStrategies.variableIncome,
                        isActive: state.filterStrategies.variableIncome.isActive || z,
                        subgroups: subGroupsVariableIncome
                    } 
                }
            }

        case 'FILTRO_RENDA_VARIAVEL':
            let newRv = !state.filterStrategies.variableIncome.isActive
            let rvSubgroups = state.filterStrategies.variableIncome.subgroups

            rvSubgroups = rvSubgroups.map((el) => {
                                el.isActive = newRv
                                return el
                            })

            return {
                ...state, 
                filterStrategies: {
                    ...state.filterStrategies,
                    variableIncome:{
                        ...state.filterStrategies.variableIncome,
                        isActive: newRv,
                        subgroups: rvSubgroups,
                    }                        
                }
            }

        //Default        
        default:
            return state
    }
}

const store = createStore(reducer,applyMiddleware(thunk))

export default store;