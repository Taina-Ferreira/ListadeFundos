import React from 'react'
import styled from 'styled-components'
import {Block,Reply} from '../../Icons';

import {Tr,Td} from 'react-super-responsive-table'

/*
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
`
*/

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

const BtnDeteils = styled.button`
    border: 1px solid #25B7BA;
    height: 38px;
    width: 139px;
    font-size: 14px;
    font-weight: 500;
    font-family: "Roboto";
    color: #25B7BA !important;
    background-color: #fff !important;
`

const BtnApply = styled.button`
    height: 38px;
    width: 139px;
    font-size: 14px;
    font-weight: 500;
    font-family: "Roboto";
    color: #fff !important;
    background-color: ${props => props.isClosed ? "#cacaca" : "#25B7BA"} !important;
`

const TableLine = ({fund}) => {

    const formatDate = (date) => {
        if (date){
            const [y,m,d] = date.split('-')
            return `${d}/${m}/${y}`
        }else {
            return '-'
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

    return (
        <Tr>
            <Td className="hide-for-small-only">
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
            <Td className="show-for-small-only">
                <div className="grid-container full">
                    <div className="grid-x">
                        <div className="cell shrink">
                            <BarRisk risk={fund.specification.fund_risk_profile.score_range_order}/>
                        </div>
                        <div className="cell auto large-offset-1" style={{paddingLeft: "10px"}}>
                            <P>{fund.simple_name}</P>
                            <ShowStrategy>{fund.specification.fund_type} | {fund.specification.fund_class}</ShowStrategy>
                        </div>
                    </div>
                </div>
            </Td>
            <Td className="text-right"><P>{formatDate(fund.quota_date)}</P></Td>
            <Td className="hide-for-small-only text-right"><P>{formatPercent(fund.profitabilities.month)}</P></Td>
            <Td className="hide-for-small-only text-right"><P>{formatPercent(fund.profitabilities.year)}</P></Td>
            <Td className="hide-for-small-only text-right" data-title="12 M (%):"><P>{formatPercent(fund.profitabilities.m12)}</P></Td>
            <Td className="show-for-small-only text-right"><P>{formatPercent(fund.profitabilities.m12)}</P></Td>
            <Td className="text-right"><P>{formatNumber(fund.operability.minimum_initial_application_amount)}</P></Td>
            <Td className="text-right"><P>D+{fund.operability.retrieval_quotation_days}</P></Td>
            <Td className="hide-for-small-only text-left"><P>{applyIcon(fund.is_closed_to_capture)}</P></Td>
            <Td className="show-for-small-only">
                <div className="grid-x fluid">
                    <div className="cell auto text-center">
                        <BtnDeteils className="button" >MAIS DETALHES</BtnDeteils>
                    </div>
                    <div className="cell auto text-center">
                        <BtnApply className="button shadow" isClosed={fund.is_closed_to_capture}>APLICAR</BtnApply>
                    </div>
                </div>
            </Td>
        </Tr>
    )
}

export default TableLine