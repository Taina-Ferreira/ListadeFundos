import React, { Fragment } from 'react'
import TableLine from '../TableLine'
import styled from 'styled-components'

const Span = styled.span`
    font-size: 13px;
    font-family: 'Roboto',sans-serif;
    color: ${props => props.theme.colors.black};
    font-weight: 900;
`

const GroupMacro = ({macro, selectFunds}) => {
    
    if (macro.isActive) {
        const mains = macro.subgroups.filter((main) => main.isActive)
        
        const macroFunds = selectFunds.filter((f) => f.specification.fund_macro_strategy.id === macro.id)

        if (macroFunds.length){
            const jsxMains = mains.map((main,mk) => {
                const fund = macroFunds.filter((f) => f.specification.fund_main_strategy.id === main.id)
                const funds = fund.map((f,key) => <TableLine fund={f} key={key}/>)
    
                if (!fund.length){
                    return (
                        <Fragment/>
                    )
                } else {
                    return (
                        <Fragment key={mk}>
                            <tr style={{backgroundColor: "#f2f2f2"}}>
                                <td colSpan="8" style={{marginBottom: "0",paddingLeft: "16px"}}><Span>{main.name}</Span></td>
                            </tr>
                            {funds}
                        </Fragment>
                    )
                }
            })

            return (
                <Fragment>
                    <tr style={{backgroundColor: "#eff0f2"}}>
                        <td colSpan="8" style={{marginBottom: "0",paddingLeft: "16px"}}>
                            <Span>{macro.name}</Span>
                        </td>
                    </tr>
                    {jsxMains}
                </Fragment>
            )
        }
    }
    
    return <Fragment/>
}

export default GroupMacro
