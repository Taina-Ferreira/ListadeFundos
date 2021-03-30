import React from 'react'

import styled from 'styled-components'

const Thead = styled.thead`
    background-color: ${props => props.theme.colors.white};
`
const Th = styled.th`
    font-size: 13px;
`

const TableHeader = () => {
    return (
        <Thead className="table-fixedHeader">
            <tr>
                <Th className="text-left">Fundo</Th>
                <Th className="text-right">Data da cota</Th>
                <Th className="text-right">Mês (%)</Th>
                <Th className="text-right">{1900 + new Date().getYear()} (%)</Th>
                <Th className="text-right">12 M (%)</Th>
                <Th className="text-right">Aplicação mínima (R$)</Th>
                <Th className="text-right">Cotização do resgate</Th>
                <Th className="text-right">Aplicar</Th>
            </tr>
        </Thead>
    )



}
export default TableHeader