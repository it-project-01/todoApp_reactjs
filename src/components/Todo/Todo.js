import "./Todo.css";
import React, { Component } from "react";
import {
  InputGroup,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todo,
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
      let todos = [...state.todos];
      todos.push({ title: state.typing });
      return {
        todos: todos,
        typing: "",
      };
    });
  };
  render() {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="todoContainer rounded bg-white p-3">
              <div>
                <InputGroup>
                  <Input
                    className="bg-secondary text-light border-secondary shadow"
                    value={this.state.typing}
                    onChange={this.typing}
                  />
                  <Button
                    className="d-flex align-items-center bg-dark border-dark shadow"
                    onClick={this.add}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="mx-2"
                    ></FontAwesomeIcon>
                    Add
                  </Button>
                </InputGroup>
              </div>
              <div className="my-2 shadow">
                <ListGroup>
                  {this.state.todos.map((value, id) => {
                    return (
                      <ListGroupItem
                        className="bg-secondary text-white"
                        action
                        href="#"
                        tag="a"
                        key={id}
                      >
                        {value.title}
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
