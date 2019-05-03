import React, { Component } from 'react';
import './Form.css';


const INITIAL_STATE = {
    login: '',
    email: '',
    color: '',
    quantity: '',
    size: '',
};

export default class Form extends Component {

    state = { ...INITIAL_STATE };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {

        const { login, email, color, quantity, size } = this.state;

        return (
            <div className="wrapper-form">
                <form className="form">
                    <input
                        type="text"
                        name="login"
                        value={login}
                        onChange={this.hangleChange}
                        placeholder="login"
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.hangleChange}
                        placeholder="email"
                    />
                    <div>
                        <label>Choose a color</label>
                        <select
                            name="color"
                            value={color}
                            onChange={this.handleChange}
                        >
                            <option value="" disabled></option>
                            <option value="NAVY">NAVY</option>
                            <option value="KHAKI">KHAKI</option>
                            <option value="CAMO">CAMO</option>
                            <option value="GREY">GREY</option>
                        </select>
                    </div>
                    <div>
                        <label>Choose a quantity</label>
                        <select
                            name="quantity"
                            value={quantity}
                            onChange={this.handleChange}
                        >
                            <option value="" disabled></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <label>Choose a size</label>
                        <select
                            name="size"
                            value={size}
                            onChange={this.handleChange}
                        >
                            <option value="" disabled></option>
                            <option value="2T">2T</option>
                            <option value="3T">3T</option>
                            <option value="5T">5T</option>
                        </select>
                    </div>
                    <div>
                        <button className="button">SENT A ORDER</button>
                    </div>

                </form>

            </div>

        )
    }
}

