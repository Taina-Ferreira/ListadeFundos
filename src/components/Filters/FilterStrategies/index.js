import React,{ useState } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux"
import { Minus } from '../../Icons'
import { 
    toggleFixedIncome, setSubGroupFixedIncome,
    toggleDifferentStrategies, setSubGroupDifferentStrategies,
    togglevariableIncome,setSubGroupvariableIncome
    } from '../../../data/actions'


const DivRotation = styled.div`
    -ms-transform: rotate(${props => props.rotation ? 180 : 0}deg);
    transform: rotate(${props => props.rotation ? 180 : 0}deg);
    padding: 0px;
    margin-left: 1px;
`

const Label = styled.label`
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    line-height: 19px;
    font-stretch: 100%;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
`

const Spacing = styled.div`
    padding-bottom: 13px;
`

const Input = styled.input`
    background-color: ${props => props.theme.colors.green};
    
`

const FilterGroup = ({data, toggleGroup, toggleSubGroup}) => {

    const [isOpen,setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen) 
    }
    
    const isChecked = (active) => {
        return active ? "checked" : ""
    }
    const listSubGroups = data.subgroups.map((d, key) => {
        return (
            <div className={isOpen ? "show jus  ": "hide"} key={key} style={{backgroundColor: "#fff"}}>
                <div style={{paddingLeft: '20px'}}>
                    <Input type="checkbox" id={`main-${d.id}`} checked={isChecked(d.isActive)} onChange={(e) => toggleSubGroup(key)} />
                    <Label htmlFor={`main-${d.id}`} style={{marginLeft: "3px"}}>{d.name}</Label>
                </div>
            </div>
        )
    })
    
    return (
        <div className="shadow">
            <div className="grid-container full" style={{paddingLeft: '10px', alignContent: "center"}}>
                <div className="grid-x grid-margin-x">
                    <div className="cell auto">
                        <Input type="checkbox" id={`macro-${data.id}`} checked={isChecked(data.isActive)} onChange={(e) => toggleGroup()}/>
                        <Label htmlFor={`macro-${data.id}`}>{data.name}</Label>
                    </div>
                    <DivRotation className="cell shrink" onClick={() => toggleOpen()} rotation={isOpen} style={{marginLeft: "1px"}}>
                        <Minus />
                    </DivRotation>
                </div>
            </div>
            {listSubGroups}
        </div>
    )
}

const FilterStrategies = ({
        fixedIncome,toggleFixedIncome,toggleSubGroupFixedIncome,
        differentStrategies,toggleDiffStrat,toggleSubGroupDiffStrat,
        variableIncome,togglevariableIncome,toggleSubGroupvariableIncome
    }) => {
    return (
        <div>
            <p>Filtrar por estratégias:</p>
            <Spacing>
                <FilterGroup data={fixedIncome} toggleGroup={toggleFixedIncome} toggleSubGroup={toggleSubGroupFixedIncome}/>
            </Spacing>
            <Spacing>
                <FilterGroup data={differentStrategies} toggleGroup={toggleDiffStrat} toggleSubGroup={toggleSubGroupDiffStrat}/>
            </Spacing>
            <Spacing>
                <FilterGroup data={variableIncome} toggleGroup={togglevariableIncome} toggleSubGroup={toggleSubGroupvariableIncome}/>
            </Spacing>
        </div>
    )
}


const mapStateToProps = (state) => ({
    fixedIncome: state.filterStrategies.fixedIncome,
    differentStrategies: state.filterStrategies.differentStrategies,
    variableIncome: state.filterStrategies.variableIncome
})

const mapDispatchToProps = (dispatch) => ({
    toggleFixedIncome: () => dispatch(toggleFixedIncome()),
    toggleSubGroupFixedIncome: (key) => dispatch(setSubGroupFixedIncome(key)),
    
    toggleDiffStrat: () => dispatch(toggleDifferentStrategies()),
    toggleSubGroupDiffStrat: (key) => dispatch(setSubGroupDifferentStrategies(key)),

    togglevariableIncome: () => dispatch(togglevariableIncome()),
    toggleSubGroupvariableIncome: (key) => dispatch(setSubGroupvariableIncome(key))
})

export default connect(mapStateToProps,mapDispatchToProps) (FilterStrategies)
