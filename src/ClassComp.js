import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class ClassComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        this.setState({ name: "Kedua" });
    }

    onSetName = (e) => {
        const { value } = e.target
        this.setState({ name: value });
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">App</Link>
                        </li>
                        <li>
                            <Link to="/classcomp">Class Components</Link>
                        </li>
                    </ul>
                </nav>
                <h1>Halo {this.state.name}</h1>
                <input type="text" name="name" value={this.state.name} onChange={this.onSetName} />
            </div>
        )
    }
}
