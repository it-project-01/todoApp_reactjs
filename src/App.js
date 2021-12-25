import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const element = <FontAwesomeIcon icon={faCoffee} />;

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="bg-white shadow pb-4 text-center">
              <img
                src="https://i1.wp.com/grrip.eu/wp-content/uploads/2021/04/ocean.jpeg?fit=889%2C667&ssl=1"
                className="w-100 mb-3"
                alt=""
              />
              <h1 className="mx-4">
                Blue Ocean <br /> Waves Crush
              </h1>
              <p className="text-secondary mx-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                explicabo aliquam tempora vitae a doloremque quod, nemo at
                ullam, quasi voluptate ratione porro eum odit suscipit quibusdam
                dolorum, nisi corrupti?
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white shadow pb-4 text-center">
              <img
                src="https://cdn.britannica.com/65/161665-050-C4B1FA75/Waves-North-Shore-Oahu-Hawaiian-Islands.jpg"
                className="w-100 mb-3"
                alt=""
              />
              <h1 className="mx-4">
                Blue Ocean <br /> Waves Crush
              </h1>
              <p className="text-secondary mx-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                explicabo aliquam tempora vitae a doloremque quod, nemo at
                ullam, quasi voluptate ratione porro eum odit suscipit quibusdam
                dolorum, nisi corrupti?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
