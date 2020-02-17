import React, { Component } from 'react';
import axios from 'axios';
export default class Getbyichem extends React.Component{
    state = {
        ichem:'',
    }



    handleChange = event => {
        this.setState({ ichem: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`https://localhost:8080/api/findbychem/${this.state.ichem}`)
            .then(res => {
                console.log(res.data);
            })
    }

        render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ichem NO:
                        <input type="number" name="ichem" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Find</button>
                </form>
            </div>
        )
    }

}