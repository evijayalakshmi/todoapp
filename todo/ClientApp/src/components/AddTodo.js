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
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                    <div className="container responsive">
                        <div className="row">
                            <div className="col-md-9 col-xs-auto">
                                <input className="form-control"
                                    type="text"
                                    name="title"
                                    placeholder="Write your todo's here..."
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col-md-3 col-xs-auto">
                                <input
                                    type="submit"
                                    value="Add to list"
                                    className="btn btn-primary"
                                />
                            </div>
                        </div>
                </div>
                <br/>
            </form>
        );
    }
}


// PropTypes
AddTodo.PropTypes = {
    addTodo: PropTypes.func.isRequired
}
