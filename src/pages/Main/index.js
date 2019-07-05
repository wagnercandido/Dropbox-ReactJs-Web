import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo-dropbox.png';
import './styles.css';


export default class Main extends Component {
    state = {
        newBox: '',
    };

    handleSubmit = async event => {
        event.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        })

        // Navegar para a página box
        this.props.history.push(`/box/${response.data._id}`);
        
    };

    handleInputChange = (event) => {
        this.setState({ newBox: event.target.value });
    };

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="" width="240px" />
                    <input placeholder="Criar um box"
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
