import React from "react";
import {Component} from "react";
import Races from "./Races";
import Characters from "./Characters";
import CustomNavbar from './Navbar';
import {Row, Container, Col} from "reactstrap";

export default class App extends Component {

  state = {
    characters :[],
    currentRace: "",
  };

  changeRace = (race) => {
    this.setState({currentRace : race.raceName});
    this.getCharacters(race.id);
  };

  getCharacters = (raceId) => {
    let url = "http://localhost:3000/characters";
    if (raceId) {
      url += "?raceId=" + raceId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({characters: data}));
    }

  componentDidMount() {
    this.getCharacters();
  }

  render () {
    return (
      <Container>
        <CustomNavbar/>
          <Row>
            <Col xs="3">
              <Races
              changeRace={this.changeRace}
              currentRace={this.state.currentRace}
              />
            </Col>
            <Col xs="9">
              <Characters
                characters={this.state.characters}
                currentRace={this.state.currentRace}

              />
            </Col>
          </Row>
        </Container>
    );
  }
}