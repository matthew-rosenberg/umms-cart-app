import logo from './logo.jpg';
import { CardDeck, Card } from 'react-bootstrap'
import { StyledHomeHeader, StyledLogo, StyledJournalMedical, StyledHomeContent, StyledCard, StyledHomeFooter, StyledInfoCircle } from './styled.js';
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import { handleNextPageClick } from '../utils/utils';

function Home() {
  const history = useHistory();

  return (
    <>
      <StyledHomeHeader>
        <StyledLogo src={logo} alt={'logo'}></StyledLogo>
      </StyledHomeHeader>
      <StyledHomeContent>
        <CardDeck>
          <StyledCard>
            <StyledJournalMedical></StyledJournalMedical>
            <Card.Body>
              <Card.Title>Toxicity Grading</Card.Title>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <StyledJournalMedical></StyledJournalMedical>
            <div onClick={() => handleNextPageClick(history, "toxicitymanagement")}>
              <Card.Body>
                <Card.Title>Toxicity Management</Card.Title>
              </Card.Body>
            </div>
          </StyledCard>
        </CardDeck>
      </StyledHomeContent>
      <StyledHomeFooter>
        <StyledInfoCircle />
        <span>About Us</span>
      </StyledHomeFooter>
    </>
  );
}

export default Home;
