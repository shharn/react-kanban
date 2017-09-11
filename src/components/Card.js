import React, { Component } from 'react'
import '../css/Card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.card.id} className="card">
                {this.props.card.title}            
            </div>
        )
    }
}
