import logo from './logo.jpg';
import { CardDeck, Card } from 'react-bootstrap'
import { StyledHomeHeader, StyledLogo, StyledJournalMedical, StyledHomeContent, StyledCard, StyledHomeFooter, StyledInfoCircle } from './styled.js';


function Home() {
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
            <Card.Body>
              <Card.Title>Toxicity Management</Card.Title>
            </Card.Body>
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
