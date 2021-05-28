import './App.css';
import { Container } from 'react-bootstrap'
import Home from './HomePage/Home';
import ToxicityManagement from './ToxManagementPage/ToxManagement';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ManagementType from './ManagementTypePage/ManagementType';
import TreatmentGuide from './TreatmentGuidePage/TreatmentGuide';

const data = require('./data.json');

function App() {

  return (
    <Router>
      <Container fluid className="App">
        <Switch>
        <Route path="/toxicitymanagement/:drugtype/:managementtype"           
          render={(props) => (
            <TreatmentGuide {...props} data={data} />
           )}/>
          <Route path="/toxicitymanagement/:drugtype"           
          render={(props) => (
            <ManagementType {...props} data={data} />
           )}/>
          <Route exact path="/toxicitymanagement"
           render={(props) => (
            <ToxicityManagement {...props} data={data} />
           )}/>
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>

  );
}

export default App;
