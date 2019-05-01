import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddTodo } from '../AddTodo';
import { TodoItem } from '../TodoItem';
import { Todos } from '../Todos';
import { Guid } from "guid-typescript";
import * as _ from 'lodash';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    addTodo = (todoTitle) => {
        debugger;
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
        id: this.state.id
    }
    delTodo = (id) => {
        debugger;
        const oldTodos = { ...this.state.todos };
        _.remove(oldTodos, todo => todo.id.value === id.value);
        this.setState({ todos: oldTodos });
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#F4F4F4' }} className="text-center">
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
