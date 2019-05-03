import React, { Component } from 'react';

const INITIAL_STATE = {
    login: '',
    password: '',
    email: '',
    age: '',
    agreedToTerm: false
};

export default class Form extends Component {

    state= {...INITIAL_STATE};

    hangleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(`${this.state.login},  ${this.state.password}`)
        this.reset();
    }

    handleAgree = ({ target: {checked} }) => {
        this.setState({
            agreedToTerm: checked
        })
    }

    reset = () => {
        this.setState({...INITIAL_STATE})
    }

    render() {
        const { login, password, email, age, agreedToTerm } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name='login'
                    value={login}
                    onChange={this.hangleChange}
                    placeholder='login'
                />
                <input
                    type="password"
                    name='password'
                    value={password}
                    onChange={this.hangleChange}
                    placeholder='password'
                />
                <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={this.hangleChange}
                    placeholder='email'
                />
                <div>
                    <h2>Choose your gender</h2>
                    <label>
                        Male
                        <input 
                            type="radio"
                            name='gender'
                            value='male'
                            onChange={this.hangleChange}
                        />
                    </label>
                    <label>
                        Female
                        <input 
                            type="radio"
                            name='gender'
                            value='female'
                            onChange={this.hangleChange}
                        />
                    </label>
                </div>
                <label>
                    Choose your age
                    <select 
                        name='age'
                        value={age}
                        onChange={this.hangleChange}
                    >
                    <option value='' disabled >...</option>
                    <option value='18-25'>18-25</option>
                    <option value='26-35'>26-35</option>
                    <option value='36+'>36+</option>
                    </select>
                </label>
                <label>
                    Agree to term
                    <input
                        type="checkbox"
                        checked={agreedToTerm}
                        onChange={this.handleAgree}
                    />
                </label>
                <p><button disabled={!agreedToTerm}> Singup as {login}</button></p>
                
            </form>
        )
       
    }
}