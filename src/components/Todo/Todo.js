import React, { Component } from "react";
import { FaCheck, FaPencilAlt, FaPlus, FaSun, FaTrash } from "react-icons/fa";
import {
  Button,
  Container,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks,
      typing: "",
    };
  }

  typing = (event) => {
    this.setState((state) => {
      return { typing: event.target.value };
    });
  };

  add = () => {
    this.setState((state) => {
      let tasks = [...state.tasks];
      if (state.typing != "") {
        tasks.push({
          text: state.typing,
          completed: false,
        });
      }
      return {
        tasks: tasks,
        typing: "",
      };
    });
  };
  complete = (index) => {
    if (this.state.tasks[index].completed) {
      this.setState((state) => {
        let newTasks = [...state.tasks];
        newTasks[index].completed = false;
        return { tasks: newTasks };
      });
    } else if (this.state.tasks[index].completed === false) {
      this.setState((state) => {
        let newTasks = [...state.tasks];
        newTasks[index].completed = true;
        return { tasks: newTasks };
      });
    }
  };
  delete = (index) => {
    this.setState((state) => {
      let tasks = [...state.tasks];
      tasks.splice(index, 1);
      return {
        tasks: tasks,
      };
    });
  };

  onKeySubmit = (event) => {
    if (event.charCode === 13 || event.key === "Enter") {
      return this.add();
    }
  };
  mode = () => {
    let body = document.getElementsByTagName("body")[0];
    return body.classList.toggle("dark-mode");
  };
  render() {
    const { typing } = this.state;
    return (
      <Container>
        <div className="col-10 col-lg-6">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="text-white">Todo</h1>
            <Button
              className="bg-transparent border-white d-flex align-items=center"
              id="mode"
              onClick={this.mode}
            >
              <FaSun className="fs-5" />
            </Button>
          </div>
          <div className="d-flex mt-3 bigInput">
            <Button className="circleButton bg-transparent me-2">
              <FaPlus className="fs-5 text-white" onClick={this.add} />
            </Button>
            <Input
              className="input bg-transparent border-none text-white"
              value={this.state.typing}
              onChange={this.typing}
              onKeyPress={this.onKeySubmit}
              placeholder="task..."
            />
          </div>
          <div className="mt-4">
            <ListGroup>
              {this.state.tasks.map((value, index) => {
                return (
                  <ListGroupItem
                    className={`d-flex align-items-center justify-content-between
                    ${(value.completed && "completed") || ""}`}
                    key={index}
                  >
                    <Label className="d-flex align-items-center justify-content-center">
                      <Button
                        className="circleButton bg-transparent me-2"
                        onClick={() => this.complete(index)}
                      >
                        <FaCheck className="fs-5 d-none checked" />
                      </Button>
                      <p className="mt-2 text">{value.text}</p>
                    </Label>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button className="circleButton bg-transparent me-2 justify-content-end">
                        <FaTrash
                          className="fs-5 text-white"
                          onClick={() => this.delete(index)}
                        />
                      </Button>
                      <Button className="circleButton bg-transparent me-2 justify-content-end">
                        <FaPencilAlt className="fs-5 text-white" />
                      </Button>
                    </div>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </div>
        </div>
      </Container>
    );
  }
}
