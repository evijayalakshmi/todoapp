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
            textDecor: null,
        };
    }
    addTodo = (todoTitle) => {
        const todoItem = {
            id: this.state.id,
            title: todoTitle,
            completed: false
        };
        console.log(todoItem);
        this.setState(prevState => ({
            todos: [...prevState.todos, todoItem]
        }))
    }
    markComplete = (id) => {
        id: this.state.id;
        const currentTodos = { ...this.state.todos };
        if (!currentTodos[id].completed) {
            currentTodos[id].completed = true;
            this.setState({
                todos: currentTodos
            });
        }
        else {
            currentTodos[id].completed = false;
            currentTodos[id].textDecor = null
            this.setState({
                todos: currentTodos
            });
        }
    }
    
    delTodo = (id) => {
        debugger;
        const oldTodos = { ...this.state.todos };
        const index = _.findIndex(oldTodos, todo => todo.id === id);
        this.state.todos.splice(id, 1);
        this.setState({ todos: this.state.todos });
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#F4F4F4' }}>
                    <b class="ml-3"><em>Vijaya Lakshmi</em></b>
                    <a href="#" class="float-right mr-3" style={{ color: '#0069D9' }}>
                        <b><em>LogOut</em></b>
                    </a>
                    <hr color="#FFFFFF" />
                </div>
                <h1 className="text-center">ToDo-List </h1>
                <br />
                <AddTodo addTodo={(title) => this.addTodo(title)} />
                <Todos todos={this.state.todos}
                    markComplete={(id) => this.markComplete(id)}
                    delTodo={(id) => this.delTodo(id)}
                />
            </div>
        );
    }
}

