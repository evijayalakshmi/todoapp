import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title !== "") {
            this.props.addTodo(this.state.title);
        }
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container responsive">
                    <div className="row">
                        <input className="form-control"
                            type="text"
                            name="title"
                            placeholder="Write your todo's here :D"
                            value={this.state.title}
                            onChange={this.onChange}
                            autoComplete="off"
                            onBlur={this.onSubmit}
                        />
                    </div>
                </div>
                <br />
            </form>
        );
    }
}


// PropTypes
AddTodo.PropTypes = {
    addTodo: PropTypes.func.isRequired
}
