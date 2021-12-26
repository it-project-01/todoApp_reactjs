import { faGlide } from "@fortawesome/free-brands-svg-icons";
import { faGlasses, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "../Cards/card";
import Header from "../Header/Header";
import PeopleNumber from "../PeopleNumber/PeopleNumber";

function App() {
  return (
    <div className="App">
      <header className="d-flex justify-content-between shadow bg-dark">
        <Header />
        <PeopleNumber value={3} />
      </header>
      <div className="container-fluid py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <Card
              icon={faGlobe}
              image="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
              title="DWAYNE JOHNSON"
            />
          </div>
          <div className="col-md-3">
            <Card
              icon={faGlasses}
              image="https://api.time.com/wp-content/uploads/2019/12/time-person-of-the-year-joe-biden-portrait.jpg?quality=85&crop=0px%2C42px%2C2057px%2C1373px&resize=407%2C271&strip"
              title="JOE BIDEN"
            />
          </div>
          <div className="col-md-3">
            <Card
              icon={faGlide}
              image="https://www.al.com/resizer/GT06i1VRWpqtgAHmxaLJc5sh2gw=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/WEDAUZS6UZGFDLZHWBUNPYYM4Q.jpg"
              title="JOHN DOE"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
