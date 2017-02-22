import React, { Component } from 'react';

class PlacesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.activeItem
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ active: nextProps.activeItem })
    }

    componentDidUpdate() {
        document.querySelector('.active').focus();
    }
    render() {
        return (
            <div className="row center">
                <div className="collection-overflow">
                    <div className="collection places-list" >
                        {this.renderPlaces()}
                    </div>
                </div>
            </div>
        );
    }
    renderPlaces() {
        return this.props.places.map(
            (place, i) => {
                let isActive = this.state.active === i ? 'active' : '';
                return <a href="#!" key={i} className={"collection-item " + isActive}>{place}</a>
            }
        );
    }
}

export default PlacesList;