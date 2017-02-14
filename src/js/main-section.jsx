import React from 'react';
import RollButton from './roll-button.jsx';
import PlacesList from './places-list.jsx';

export default class MainSection extends React.Component {
    render () {
        return(
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <br/><br/>
                    <h1 className="header center orange-text">Whoop Whoop!</h1>
                    <PlacesList places={['Chinese','Wok','Pizza','Burger','Hot Dog']}></PlacesList>
                    <RollButton></RollButton>
                    <br/><br/>
                </div>
            </div>
        )
    }
};