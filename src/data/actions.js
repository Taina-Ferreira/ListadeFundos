const setFundName = (fundName) => {
    return {
        type: 'FOUND_NAME',
        fundName, 
    }
}

const setMinimumApplication = (value) => {    
    return {
        type: 'MINIMUM_APPLICATION',
        minimumAplication: {
            min: 0,
            max: 16,
            value: value,
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
    }
}

const setMaximumRedemption = (value) => {    
    return {
        type: 'MAXIMUM_REDEMPTION',
        redemption: {
            min: 0,
            max: 46,
            value: value
        }, 
    }
}

const setRiskProfile = (value) => {    
    return {
        type: 'RISK_PROFILE',
        riskProfile: {
            min: 1,
            max: 12,
            value: value
        }, 
    }
}

const setFunds = (value) => {    
    return {
        type: 'FOUNDS',
        funds: value, 
    }
}

const setBenchmark = (value) => {    
    return {
        type: 'BENCHMARK',
        benchmark: value, 
    }
}

const toggleFixedIncome = () => {
    return {
        type: 'FILTRO_RENDA_FIXA'
    }
}

const setSubGroupFixedIncome = (key) => {
    return {
        type: 'FILTRO_RENDA_FIXA_SUBGRUPOS',
        key,
    }
}
//Estrategias diferentes 
const toggleDifferentStrategies = () => {
    return {
        type: 'FILTRO_ESTRATEGIAS_DIFERENCIADAS'
    }
}

const setSubGroupDifferentStrategies = (key) => {
    return {
        type: 'FILTRO_ESTRATEGIAS_DIFERENCIADAS_SUBGRUPOS',
        key,
    }
}
 //Renda variavel 
 const togglevariableIncome = () => {
    return {
        type: 'FILTRO_RENDA_VARIAVEL'
    }
}

const setSubGroupvariableIncome = (key) => {
    return {
        type: 'FILTRO_RENDA_VARIAVEL_SUBGRUPOS',
        key,
    }
}


export {setFundName,setMinimumApplication,setMaximumRedemption,
        setRiskProfile,setFunds,setBenchmark,toggleFixedIncome,
        setSubGroupFixedIncome,toggleDifferentStrategies,setSubGroupDifferentStrategies,togglevariableIncome,setSubGroupvariableIncome}