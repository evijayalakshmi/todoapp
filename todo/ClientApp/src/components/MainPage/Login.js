import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendingEmail: false
        };
    }
    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit}
                    ref={form => this.form = form}>
                    <div>
                        <input
                            type='email'
                            name='email'
                            ref={input => this.email = input}
                            required
                        />
                        <label htmlFor='email'>email</label>
                    </div>
                    <div>
                        <button type='submit' className='btn'>
                           Loading....
                        </button>
                    </div>
                </form>
            </div>
        );
    }
} 