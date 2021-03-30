import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { thunks } from '../../../data/thunks'
import styled from 'styled-components'

import {Block,Reply} from '../../Icons';

const Tbody = styled.tbody`
    background-color: ${props => props.theme.colors.white};
`;

const Td = styled.td`
    font-size: 13px;
    font-family: 'Roboto',sans-serif;
    color: ${props => props.theme.colors.black};
    padding: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 400;
`

const Tr = styled.tr`
    background-color: ${props => props.theme.colors.white};
    height: 70px;
`

const P = styled.p`
    padding: 0px;
    margin-bottom: 0px;
    font-size: 13px;
    color: ${props => props.theme.colors.black};
`

const ShowStrategy = styled.span`
    color: ${props => props.theme.colors.grey};
    font-size: 12px;
`

const BarRisk = styled.div`
  display: block;
  width: 7px;
  height: calc(100% + 2px);
  margin-bottom: 0px;
  background-color: ${props => props.theme.colors.barRisk[props.risk]};
  box-sizing: border-box;
  :hover{
    cursor: pointer;
  }
`;

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


    const formatDate = (date) => {
        const [y,m,d] = date.split('-')
        return `${d}/${m}/${y}`
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
        var x = null
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

    const formatPercent = (n) => {
        const n2 = (parseFloat(n)*100).toFixed(2)
        return isNaN (n2) ? '-': n2
    }

    const formatNumber = (n) => {
        const newN = parseFloat(n)
        return newN.toLocaleString('pt-BR',{ style: 'currency',currency: 'BRL' })
    }


    const applyIcon = (isClosed) => {
        if (isClosed)
            return (<Block/>)
        return (<Reply/>)
    }


    const Fundo = funds
                    .filter((fund) => filterByName(fund.simple_name))
                    .filter((fund) => filterByApplication(fund.operability.minimum_initial_application_amount))
                    .filter((fund) => filterByRisk(fund.specification.fund_risk_profile.score_range_order))
                    .filter((fund) => filterByRedemption(fund.operability.retrieval_quotation_days))
                    //.filter((fund) => fund.orama_standard)
                    .filter((fund) => filterByMacroStrategy(fund.specification.fund_macro_strategy.id))
                    .filter((fund) => filterByStrategy(fund.specification.fund_macro_strategy.id,fund.specification.fund_main_strategy.id))
                    .map((fund,key) => 
                        <Tr key={key}>
                            <Td>
                                <div className="grid-container full">
                                    <div className="grid-x">
                                        <div className="cell shrink">
                                            <BarRisk risk={fund.specification.fund_risk_profile.score_range_order}/>
                                        </div>
                                        <div className="cell auto large-offset-1">
                                            <P>{fund.simple_name}</P>
                                            <ShowStrategy>{fund.specification.fund_type} | {fund.specification.fund_class}</ShowStrategy>
                                        </div>
                                    </div>
                                </div>
                            </Td>
                            <Td>{formatDate(fund.quota_date)}</Td>
                            <Td className="text-right">{formatPercent(fund.profitabilities.month)}</Td>
                            <Td className="text-right">{formatPercent(fund.profitabilities.year)}</Td>
                            <Td className="text-right"><P>{formatPercent(fund.profitabilities.year)}</P><span>294%</span></Td>
                            <Td className="text-right">{formatNumber(fund.operability.minimum_initial_application_amount)}</Td>
                            <Td className="text-right">D+{fund.operability.retrieval_quotation_days}</Td>
                            <Td className="text-left">{applyIcon(fund.is_closed_to_capture)}</Td>
                        </Tr>
                    )

    return (
        <Tbody>
            {Fundo}
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