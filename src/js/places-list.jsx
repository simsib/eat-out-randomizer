import React, { Component } from 'react';

class PlacesList extends Component {
    constructor(props) {
        super(props);
    }
    renderPlaces() {
        return this.props.places.map(
            place =>
                <a href="#!" className="collection-item">{place}</a>
        );
    }
    render() {
        return (
            <div className="row center">
                <div className="collection">
                    {this.renderPlaces()}
                </div>
            </div>
        );
    }
}

export default PlacesList;