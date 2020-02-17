import React, { Component } from 'react';
import axios from 'axios';
export default class Apprecord extends React.Component{
    state = {
        product:[]
    }

    componentDidMount() {
        axios.get(`https://localhost:8080/api/allproduct`)
            .then(res => {
                const product = res.data;
                this.setState({ product });
            })
    }

    render(){
        return (
            <ul>
                {this.state.product.map(p => (<li key={p.iChemNo}>{p}</li>))}
        </ul>
        )
    }

}