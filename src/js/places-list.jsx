import React, { Component } from 'react';

class PlacesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: Math.floor(Math.random() * props.places.length)
        }
        console.log(this.state.active);
    }
    renderPlaces() {
        return this.props.places.map(
            (place, i) => {
                let isActive = this.state.active === i ? 'active' : '';
                return <a href="#!" key={i} className={"collection-item " + isActive}>{place}</a>
            }
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