import { CardDeck, Card, Accordion, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import {
  StyledHomeContent,
  StyledCard,
} from "./styled.js";
import { handleNextPageClick } from "../utils/utils.js";

function TreatmentGuide(props) {
  const history = useHistory();

  return (
    <>
      <StyledHomeContent>
        <CardDeck>
          <StyledCard>
            <Card.Body>
              <Card.Title>Drug #1</Card.Title>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <div onClick={() => handleNextPageClick(history, "yescarta")}>
              <Card.Body>
                <Card.Title>Yescarta</Card.Title>
              </Card.Body>
            </div>
          </StyledCard>
        </CardDeck>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Level 1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Level 1 Info</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Level 2
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Level 2 Info</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </StyledHomeContent>
    </>
  );
}

export default TreatmentGuide;
