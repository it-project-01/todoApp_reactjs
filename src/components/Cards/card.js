import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";

function Card(props) {
  const state = props;
  return (
    <div className="bg-dark shadow pb-4 text-center">
      <h1 className="text-success">''</h1>
      <FontAwesomeIcon icon={state.icon} className="text-secondary fs-1 my-2" />
      <p className="text-secondary mx-4 text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo
        aliquam tempora vitae a doloremque quod, nemo at ullam, quasi voluptate
        ratione porro eum odit suscipit quibusdam dolorum, nisi corrupti?
      </p>
      <img src={state.image} alt="" className="photo" />
      <h5 className="mx-4 text-success my-4">{state.title}</h5>
    </div>
  );
}

export default Card;
