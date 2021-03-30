import React from 'react'
import styled from 'styled-components'


import SearchFounds from './SearchFunds'
import MinimumAplication from './MinimumAplication'
import RiskProfile from './RiskProfile'
import MaximumRedemption from './MaximumRedemption'

const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 25px 15px 35px;
`;

const ContainerGrey = styled.div`
    background-color: #f8f9fa;
    padding: 25px 15px 35px;
`;



const Row = styled.div`
    align-items: center;
`;

const FilterGroup = () => {
    return (
        <Container className="grid-container fluid">
            <Container className="grid-x grid-padding-x">
                <Row className="medium-8 large-6 cell">
                    <SearchFounds/>
                </Row>
            </Container>
            <ContainerGrey className="grid-container hide-for-small-only">
                <div className="grid-x grid-margin-x">
                    <Row className="cell medium-3 large-4">
                        <MinimumAplication/>
                    </Row>
                    <Row className="cell medium-3 large-4">
                        <RiskProfile/>
                    </Row>
                    <Row className="cell medium-3 large-4">
                        <MaximumRedemption/>
                    </Row>
                </div>
            </ContainerGrey>
        </Container>
    )
}

export default FilterGroup
