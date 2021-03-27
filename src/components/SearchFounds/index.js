import React, { useState } from 'react';
import styled from 'styled-components';
import {Magnify} from '../Icons';

const Filter = styled.div`
    background: ${props => props.theme.colors.white};
    padding: 25px 15px 35px 25px;
    margin: 0px 0px 10px;
    display: block;
    margin-bottom: 10px;
`;

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

const SearchFounds = () => {

    const [searchName,setSearchName] = useState('');

    return (
        <Filter className="card-display">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                     <div className="small-12 medium-8 large-8 columns">
                        <div className="input-group">
                            
                            <Input  className="input-group-field" type="search" placeholder="Buscar fundo por nome" 
                                    value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
                            
                            <Magnify className="input-group float-right"/>
                        </div>
                     </div>
                </div>
            </div>
        </Filter>
    )
}

export default SearchFounds;