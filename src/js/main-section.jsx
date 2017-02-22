import React from 'react';
import RollButton from './roll-button.jsx';
import PlacesList from './places-list.jsx';
import Loader from './loader.jsx';
import FetchApi from '../helpers/fetch';

export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
        let places = [];
        this.state = {
            places: places,
            active: -1 // because nothing was received yet
        }
    }
    updatePlaces(data) {
        this.setState({ places: data, active: this.randomNumber(data) })
    }
    componentWillMount() {
        (new FetchApi())
            .getData()
            .then((data) => {
                this.updatePlaces(data);
            })
            .catch((e) => console.log(e));
    }

    render() {
            return (
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center orange-text">{this.props.header}</h1>
                        {this.renderContent()}
                    </div>
                </div>
            )
    }
    renderControls() {
        return (
            <div>
                <PlacesList places={this.state.places} activeItem={this.state.active}></PlacesList>
                <RollButton RollHandler={this.RollHandler.bind(this)}></RollButton>
                <br /> <br />
            </div>)
    }
    renderContent(){
        return this.state.places.length > 0 ?
            this.renderControls():
            <Loader></Loader>     
    }
    RollHandler() {
        this.setState({ active: this.randomNumber(this.state.places) });
    }
    randomNumber(items) {
        return Math.floor(Math.random() * items.length);
    }
};