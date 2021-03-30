import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import styled from 'styled-components'

const ContainerWhite = styled.div`
    background-color: ${props => props.theme.colors.white};
`

const Table = styled.table`
    :hover{
        cursor: pointer;
    }
`

const TableFunds = () => {
    return (
        <ContainerWhite>
            <Table className="hover unstriped stack">
                <TableHeader/>
                <TableBody/>
            </Table>
        </ContainerWhite>
    )
}

export default TableFunds
