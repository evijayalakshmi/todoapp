import React, { Component } from "react";
import '../MainPage/SignUp.css';
import { Redirect } from 'react-router';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isConfirmationCodeSent: false,
            confirmationCode: "",
            isUserRegistered: false
        };
    }
    handleChange = event => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async event => {
        debugger;
        event.preventDefault();
        fetch('api/User/SendOTP?to=' + this.state.email)
            .then((response) => {
                this.setState({ isConfirmationCodeSent: response.ok })
            })

    }

    handleConfirmationSubmit = async event => {
        debugger;
        var securityData = {
            email: this.state.email,
            code: this.state.confirmationCode
        };
        fetch('api/User/ValidateSecurityCode', {
            method: 'POST',
            headers: {
                'Accept': 'appication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(securityData)
        });
        alert(this.state.email + " registered successfully!");
        this.setState({ isUserRegistered: true, email: '', password: '' });
    }


    renderConfirmationForm() {
        const helpText = `Please check your given email ${this.state.email} for the code`;
        if (this.state.isUserRegistered) {
            return (
                <Redirect to={{ pathname: '/Todos' }} />
            );
        }
        return (
            <div>
                <form onSubmit={this.handleConfirmationSubmit}>
                    <div className="container responsive">
                        <div className="row">
                            <div class="input-group">
                                <input type="tel"
                                    name="confirmationCode"
                                    onChange={this.handleChange}
                                    value={this.state.confirmationCode}
                                    class="form-control"
                                    placeholder="Enter the code"
                                    autoFocus />
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                            <small id="help" className="form-text text-muted">{helpText}</small>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    renderForm() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="vertical-center">
                        <div className="container responsive">
                            <div className="row">
                                <div className="col-md-12">
                                    <div class="input-group">
                                        <input type="text"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            class="form-control"
                                            placeholder="User Email"
                                        />
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon2">@example.com</span>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <span class="fa fa-key"></span>
                                            </span>
                                        </div>
                                        <input type="text"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            class="form-control"
                                            placeholder="Password" />
                                    </div>
                                    <br />
                                    <button
                                        className="btn btn-primary"
                                        type="submit"

                                    >
                                        Submit
                </button>
                                </div>
                            </div>
                        </div>
                    </div >
                </form>
            </div>
        );
    }

    render() {
        return (
            <div>
                {!this.state.isConfirmationCodeSent ? this.renderForm() : this.renderConfirmationForm()}
            </div>
        );
    }
}