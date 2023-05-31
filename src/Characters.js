import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardGroup, Button } from 'reactstrap';
import { Col } from 'reactstrap';
export default class Characters extends Component {

    state = {
        characters :[],
    };

    render() {
        const {characters} = this.props;
        return (
            <div>
                <h2>{this.props.currentRace}</h2>
                <CardGroup>
                    {characters.map((character) => (
                        <Col xs="3">
                            <Card
                            style={{marginLeft: "10px", marginRight: "10px"}} key={character.id}>
                                <CardImg
                                    top
                                    width="100%"
                                    src={character.image}
                                    alt={character.characterName}
                                />
                                <CardBody>
                                    <CardTitle>{character.characterName}</CardTitle>
                                    <CardText>{character.desc}</CardText>
                                    <Button>Detail</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </CardGroup>
            </div>   
        );
    }
}