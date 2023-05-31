import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Races extends Component {

    state = {
        races :[],  
    };

    componentDidMount() {
        this.getRaces();
    }

    getRaces = () => {
        fetch("http://localhost:3000/races")
            .then((response) => response.json())
            .then((data) => this.setState({ races: data}));
    };

    render() {
        return (
            <ListGroup>
                {this.state.races.map((race) => (
                    <ListGroupItem onClick={() => this.props.changeRace(race)} key = {race.id}>{race.raceName}</ListGroupItem>
                ))}
                {/* <h2 class="card-footer">{this.props.currentRace}</h2> */}
                
            </ListGroup>
        );
    }
}