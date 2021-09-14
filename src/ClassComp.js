import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';

export default class ClassComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        this.setState({ name: `Component App (Class Component)` });
    }

    onSetName = (e) => {
        const { value } = e.target
        this.setState({ name: value });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="flex flex-col items-center justify-center w-full h-screen">
                    <h1>Halo {this.state.name}</h1>
                    <input type="text" name="name" onChange={this.onSetName} className="px-4 py-2 my-5 text-white bg-black rounded-xl" />
                </div>
            </div>
        )
    }
}
