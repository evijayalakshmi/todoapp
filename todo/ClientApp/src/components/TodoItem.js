import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditableLabel from 'react-inline-editing';
import '../components/layout/Header.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div class="container responsive">
                <div class="row" >
                    <div className="col-md-10 col-xs-auto style" style={this.getStyle()}>
                        <div class="form-check mt-1">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={this.props.markComplete.bind(this, id)} checked={completed ? 'checked' : ''} />{' '}
                            <EditableLabel class="form-check-label" for="gridCheck1"
                                text={title}
                                labelClassName='myLabelClass'
                                inputClassName='myInputClass'
                                labelFontWeight='bold'
                                inputWidth='50%'
                                inputHeight='50%'
                            />
                        </div>
                    </div> <div className="clearfix">&nbsp;&nbsp;&nbsp;</div>
                    <button type="button" class="btn btn-primary" onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right' }}>
                        <i class="fa fa-trash" aria-hidden="true"> Clear </i>
                    </button>
                </div>
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
