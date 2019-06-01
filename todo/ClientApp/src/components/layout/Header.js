import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddTodo } from '../AddTodo';
import { TodoItem } from '../TodoItem';
import { Todos } from '../Todos';
import { Guid } from "guid-typescript";
import * as _ from 'lodash';
import './Header.css';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Guid.create(),
            todos: [],
        };
    }

    addTodo = (todoTitle) => {
        const todoItem = {
            id: Guid.create(),
            title: todoTitle,
            completed: false
        };
        console.log(todoItem);
        this.setState(prevState => ({
            todos: [...prevState.todos, todoItem]
        }))
    }

    markComplete = (id) => {
        debugger;
        const currentTodos = this.state.todos;
        const index = _.findIndex(currentTodos, todo => todo.id === id);
        if (!currentTodos[index].completed) {
            currentTodos[index].completed = true;
            this.setState({
                todos: currentTodos
            });
        }
        else {
            currentTodos[index].completed = false;
            this.setState({
                todos: currentTodos
            });
        }
    }
    editTodo = (e, id) => {
        debugger;
        const oldTodos = this.state.todos;
        const currentIndex = _.findIndex(oldTodos, todo => todo.id === id);
        oldTodos[currentIndex].title = e.target.value; // here edited text kavali Ela?
        this.setState(
            {
                todo: oldTodos
            });
    }

    delTodo = (id) => {
        debugger;
        const oldTodos = this.state.todos;
        _.remove(oldTodos, todo => todo.id === id);
        this.setState({ todos: oldTodos });
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#007BFF' }} class="p-4">
                    <b><em className="ml-3">Vijaya Lakshmi</em></b>
                    <a href="#" className="float-right mr-3 pt-3" style={{ color: 'black' }}>
                        <b><em>LogOut</em></b>
                    </a>
                </div>
                <hr color="black" style={{ borderBottom: 'solid' }} />
                <br />
                <br />
                <br />
                <h1 className="text-center">ToDo-List </h1>
                <br />
                <AddTodo addTodo={(title) => this.addTodo(title)} />
                <Todos todos={this.state.todos}
                    markComplete={(id) => this.markComplete(id)}
                    delTodo={(id) => this.delTodo(id)}
                    editTodo={(e, id) => this.editTodo(e, id)}
                />
            </div>
        );
    }
}