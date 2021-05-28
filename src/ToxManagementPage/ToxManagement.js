import { CardDeck, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import {
  StyledHomeContent,
  StyledCard,
} from "./styled.js";
import { handleNextPageClick } from "../utils/utils.js";

function ToxicityManagement(props) {
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
      </StyledHomeContent>
    </>
  );
}

export default ToxicityManagement;
