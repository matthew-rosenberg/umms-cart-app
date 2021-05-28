import styled from 'styled-components'
import { Row, Card } from 'react-bootstrap'
import { JournalMedical, InfoCircle } from 'react-bootstrap-icons';


export const StyledLogo = styled.img`
    width: 90%;
    height: 100%;
    // margin-top: 5%;
`;


export const StyledHomeHeader = styled(Row)`
    padding-bottom: 4%;
    padding-top: 4%;
    box-shadow: rgb(101 119 134 / 25%) 0px 0px 15px, rgb(101 119 134 / 11%) 0px 0px 3px 1px;
    justify-content: center;
`;


export const StyledHomeFooter = styled(Row)`
    padding-bottom: 4%;
    padding-top: 4%;
    box-shadow: rgb(101 119 134 / 25%) 0px 0px 15px, rgb(101 119 134 / 11%) 0px 0px 3px 1px;
    justify-content: center;
    align-items: center;
    position:fixed;
    left:0;
    bottom:0;
    right:0;
`;


export const StyledJournalMedical = styled(JournalMedical)`
    font-size: 300%;
`;


export const StyledCard = styled(Card)`
    // display: flex;
    flex-direction: row;
    // background-color: red;
    align-items: center;
    // border: 2px solid rgba(0,0,0,.125);
    box-shadow: rgb(101 119 134 / 25%) 0px 0px 15px, rgb(101 119 134 / 11%) 0px 0px 3px 1px;
`;


export const StyledInfoCircle = styled(InfoCircle)`
    margin-right: 1%;
`;


export const StyledHomeContent = styled(Row)`
    justify-content: center;
    margin-top: 9%;
`;


// export { 
//     StyledLogo, 
//     StyledHomeHeader,
//     StyledHomeContent,
//     StyledHomeFooter,
//     StyledJournalMedical,
//     StyledCard, 
//     StyledInfoCircle
// } ;