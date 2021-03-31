import React from 'react'
import {Thead, Tr, Th} from 'react-super-responsive-table'
import theme from '../../../Styles/globalstyles'

const TableHeader = () => {
    return (
        <Thead style={{fontSize: "13px", color: theme.colors.black}}>
            <Tr>
                <Th className="show-for-large text-left">Fundo</Th>
                <Th className="hide-for-large text-left"></Th>
                <Th className="text-right">Data da cota</Th>
                <Th className="show-for-large text-right">Mês (%)</Th>
                <Th className="show-for-large text-right">{1900 + new Date().getYear()} (%)</Th>
                <Th className="show-for-large text-right">12 M (%)</Th>
                <Th className="hide-for-large text-right">Rentabilidade 12 Meses</Th>
                <Th className="text-right">Aplicação mínima (R$)</Th>
                <Th className="text-right">Cotização do resgate</Th>
                <Th className="show-for-large text-right">Aplicar</Th>
            </Tr>
        </Thead>
    )
}
export default TableHeader