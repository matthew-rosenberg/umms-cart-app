import { CardDeck, Card } from "react-bootstrap";
import {
  StyledHomeContent,
  StyledCard,
} from "../ToxManagementPage/styled.js";
import {
  useHistory,
} from "react-router-dom";
import { useParams } from "react-router";
import { queryData, handleNextPageClick } from "../utils/utils.js";

function ManagementType(props) {
  const data = props.data;
  const { drugtype } = useParams();
  console.log(queryData(data, [drugtype]));

  const history = useHistory();

  return (
    <>
      <StyledHomeContent>
        <CardDeck>
          <StyledCard>
            <Card.Body>
              <Card.Title>CRS</Card.Title>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <div onClick={() => handleNextPageClick(history, "Neurotoxicity")}>
              <Card.Body>
                <Card.Title>Neurotoxicity</Card.Title>
              </Card.Body>
            </div>
          </StyledCard>
        </CardDeck>
      </StyledHomeContent>
    </>
  );
}

export default ManagementType;
