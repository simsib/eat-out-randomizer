import React from 'react';
import RollButton from './roll-button.jsx';
import PlacesList from './places-list.jsx';

export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
        let places = ['Chinese', 'Wok', 'Pizza', 'Burger', 'Hot Dog'];
        this.state = {
            places: places,
            active: this.randomNumber(places)
        }
    }
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <br /><br />
                    <h1 className="header center orange-text">Whoop Whoop!</h1>
                    <PlacesList places={this.state.places} activeItem={this.state.active}></PlacesList>
                    <RollButton RollHandler={this.RollHandler.bind(this)}></RollButton>
                    <br /><br />
                </div>
            </div>
        )
    }
    RollHandler(){
        this.setState({active:this.randomNumber(this.state.places)});
    }
    randomNumber(items){
        return Math.floor(Math.random() * items.length);
    }
};