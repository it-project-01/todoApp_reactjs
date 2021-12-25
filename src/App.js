import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const element = <FontAwesomeIcon icon={faCoffee} />;

function App() {
  return (
    <div className="App">
      <div className="container-fluid py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <div className="bg-dark shadow pb-4 text-center">
              <h1 className="text-success">''</h1>
              <p className="text-secondary mx-4 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                explicabo aliquam tempora vitae a doloremque quod, nemo at
                ullam, quasi voluptate ratione porro eum odit suscipit quibusdam
                dolorum, nisi corrupti?
              </p>
              <img
                src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
                alt=""
              />
              <h5 className="mx-4 text-success">JOHN DOE</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-dark shadow pb-4 text-center">
              <h1 className="text-success">''</h1>
              <p className="text-secondary mx-4 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                explicabo aliquam tempora vitae a doloremque quod, nemo at
                ullam, quasi voluptate ratione porro eum odit suscipit quibusdam
                dolorum, nisi corrupti?
              </p>
              <img
                src="https://api.time.com/wp-content/uploads/2019/12/time-person-of-the-year-joe-biden-portrait.jpg?quality=85&crop=0px%2C42px%2C2057px%2C1373px&resize=407%2C271&strip"
                alt=""
              />
              <h5 className="mx-4 text-success">JOHN DOE</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-dark shadow pb-4 text-center">
              <h1 className="text-success">''</h1>
              <p className="text-secondary mx-4 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                explicabo aliquam tempora vitae a doloremque quod, nemo at
                ullam, quasi voluptate ratione porro eum odit suscipit quibusdam
                dolorum, nisi corrupti?
              </p>
              <img
                src="https://www.al.com/resizer/GT06i1VRWpqtgAHmxaLJc5sh2gw=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/WEDAUZS6UZGFDLZHWBUNPYYM4Q.jpg"
                alt=""
              />
              <h5 className="mx-4 text-success">JOHN DOE</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
