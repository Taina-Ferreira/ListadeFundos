import styled from 'styled-components';
import '@mdi/font/css/materialdesignicons.min.css';

import theme from '../../Styles/globalstyles';


const Icon = styled.i`
    font-size: 20px;
    :hover{
        color: ${props => props.theme.colors.black};
    }
`;

const Iconreply = styled.i`
    background: ${props => props.theme.colors.bluechill};
    border: solid 2px transparent;
    color: ${props => props.theme.colors.white};
    display: block;
    font-size: 10px;
    line-height: 20px;
    text-align: right;
    height: 20px;
    position: relative;
    text-align: center;
    width: 20px;
    border-radius: 50% 50%;
    box-sizing: border-box;
    float: left;
    transform: scaleX(1) rotate(
        90deg
    );
    font-size: 15px;
`;


const Stars = () => (<Icon className="mdi mdi-star-circle" style={{color: theme.colors.green}} />)

const Information = () => (<Icon className="mdi mdi-information-outline" style={{color: theme.colors.grey}} />)

const Block = () => (<Icon className="mdi mdi-block-helper" style={{color: theme.colors.grey}} />)


const Reply = () => (<Iconreply className="mdi mdi-reply"/>)

const Eearth = () => (<Icon className="mdi mdi-earth-plus" style={{color: theme.colors.green}}/>)

const IconMagnify = styled.i`
    font-size: 25px;
    color: ${props => props.theme.colors.grey};
    transform: scaleX(-1);
`;

const Magnify = () => (<IconMagnify className="mdi mdi-magnify"/>)

export {Stars,Information,Block,Reply,Eearth,Magnify}