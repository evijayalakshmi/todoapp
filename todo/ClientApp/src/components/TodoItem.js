import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);

    }

    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            border: '1px #0069D9 dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div className="row">
                <p className="container">
                    <div className="col-md-12" style={this.getStyle()}>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed ? 'checked' : ''} />{' '}
                        {title}
                        <button onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right' }}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.PropTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
