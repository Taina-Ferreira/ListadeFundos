import React, { useEffect, Suspense } from 'react'
import { connect } from "react-redux"
import { thunks } from '../../../data/thunks'
//import styled from 'styled-components'
import {Tbody} from 'react-super-responsive-table'

const GroupMacro = React.lazy(() => import('../GroupMacro'))



/*
const Tbody = styled.tbody`
    background-color: ${props => props.theme.colors.white};
`;
*/

const TableBody = ({ funds, fundName, minAplication, getAll, redemption, risk, strategies }) => {

    useEffect(() => {
        getAll()
    })
    
    const filterByName = (name) => {

        if (fundName === '')
            return true
        else
            return name.toLowerCase().includes(fundName.toLowerCase())
    }

    const filterByApplication = (value) => {
        const newValue = parseFloat(value)

        const valueApplication = minAplication.range[minAplication.value]

        return newValue <= valueApplication
    }

    const filterByRedemption = (value) => {
        return value <= redemption.value
    } 

    const filterByRisk = (value) => {
        return value <= risk.value
    }

    const filterByMacroStrategy = (value) => {
        switch(value){
            case 1:
                return strategies.fixedIncome.isActive
            case 2:
                return strategies.differentStrategies.isActive
            case 3:
                return strategies.variableIncome.isActive
            default:
                return true
        }
    }

    const filterByStrategy = (macro,main) => {
        var x
        switch(macro){
            case 1:
                x =  strategies.fixedIncome.subgroups.filter((sub) => sub.id === main)[0]
                return x.isActive
            case 2:
                x =  strategies.differentStrategies.subgroups.filter((sub) => sub.id === main)[0]
                return x.isActive
            case 3:
                x =  strategies.variableIncome.subgroups.filter((sub) => sub.id === main)[0]
                return x.isActive
            default:
                return true
        }
    }


    const selectFunds = funds
                        .filter((fund) => filterByName(fund.simple_name))
                        .filter((fund) => filterByApplication(fund.operability.minimum_initial_application_amount))
                        .filter((fund) => filterByRisk(fund.specification.fund_risk_profile.score_range_order))
                        .filter((fund) => filterByRedemption(fund.operability.retrieval_quotation_days))
                        //.filter((fund) => fund.orama_standard)
                        .filter((fund) => filterByMacroStrategy(fund.specification.fund_macro_strategy.id))
                        .filter((fund) => filterByStrategy(fund.specification.fund_macro_strategy.id,fund.specification.fund_main_strategy.id))

    return (
        <Tbody>
            <Suspense fallback={<th><td Td colSpan="8">Loading...</td></th>}>
                <GroupMacro macro={strategies.fixedIncome} selectFunds={selectFunds}/>
            </Suspense>
            <GroupMacro macro={strategies.differentStrategies} selectFunds={selectFunds}/>
            <GroupMacro macro={strategies.variableIncome} selectFunds={selectFunds}/>
        </Tbody>
    )
}


const mapStateToProps = (state) => ({
    funds: state.funds, 
    minAplication: state.filterMinimumAplication,
    redemption: state.filterRedemption,
    risk: state.filterRisk,
    fundName: state.filterFundName,
    strategies: state.filterStrategies
})

const mapDispatchToProps = (dispatch) => ({
    getAll: () => dispatch(thunks.getAllFunds())
})


export default connect(mapStateToProps, mapDispatchToProps)( TableBody )