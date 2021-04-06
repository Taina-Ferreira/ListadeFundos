import React, { Suspense } from 'react'
import TableHeader from './TableHeader'
import styled from 'styled-components'
import {Table} from 'react-super-responsive-table'
import './index.css'

const TableBody = React.lazy(() => import('./TableBody'));

const ContainerWhite = styled.div`
    background-color: ${props => props.theme.colors.white};
`

//Tabela de fundos
const TableFunds = () => {
    return (
        <ContainerWhite>
            <Table className="hover unstriped stack shadow">
                <TableHeader/>
                <Suspense fallback={<tbody><tr><td>Loading...</td></tr></tbody>}>
                    <TableBody/>
                </Suspense>
            </Table>
        </ContainerWhite>
    )
}

export default TableFunds
