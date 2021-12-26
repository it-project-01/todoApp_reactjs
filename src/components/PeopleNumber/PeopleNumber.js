import "./peopleNumber.css";

function PeopleNumber(props) {
  let value = props.value;
  function AddValue() {
    return value++;
  }

  return (
    <div className="d-flex align-items-center mx-5 ">
      <h4 className="text-white">There are {value} popular people on screen</h4>
      <button
        onClick={AddValue}
        className="ms-3 rounded bg-success text-light p-2"
      >
        Add person
      </button>
    </div>
  );
}
export default PeopleNumber;
