import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import styled from 'styled-components'
import {Table} from 'react-super-responsive-table'
import './index.css'

const ContainerWhite = styled.div`
    background-color: ${props => props.theme.colors.white};
`

//Tabela de fundos
const TableFunds = () => {
    return (
        <ContainerWhite>
            <Table className="hover unstriped stack shadow">
                <TableHeader/>
                <TableBody/>
            </Table>
        </ContainerWhite>
    )
}

export default TableFunds
