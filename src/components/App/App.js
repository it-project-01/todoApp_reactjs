import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "../Todo";

let tasks = [
  {
    text: "Cras justo odio",
    completed: false,
    id: 1,
  },
  {
    text: "Dapibus ac facilisis in",
    completed: false,
    id: 2,
  },
  {
    text: "Morbi leo risus",
    completed: false,
    id: 3,
  },
  {
    text: "Porta ac consectetur ac",
    completed: false,
    id: 4,
  },
  {
    text: "Vestibulum at eros",
    completed: false,
    id: 5,
  },
];

function App() {
  return (
    <div className="App">
      <Todo tasks={tasks} />
    </div>
  );
}

export default App;
