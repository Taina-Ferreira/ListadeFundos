import React from 'react';
import styled from 'styled-components';
import {Magnify} from '../../../Icons';

import {setFundName} from '../../../../data/actions'

import { connect } from "react-redux";

const Input = styled.input`
    outline: 0;
    border-width: 0px 0px 2px 0px;
    box-shadow: unset;
    :focus {
        border-color: ${props => props.theme.colors.green};
        border-width: 0 0 2px;
        box-shadow: unset;
    }
`;

const SearchFunds = ({ name, dispatch }) => {

    return (
        <div className="input-group">                    
            <Input  className="input-group-field" type="search" placeholder="Buscar fundo por nome" 
                    value={name} onChange={(e) => {
                        dispatch(setFundName(e.target.value))
                    }}/>
                            
            <Magnify className="input-group float-right"/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    name: state.filterFundName
})

export default connect(mapStateToProps)( SearchFunds );