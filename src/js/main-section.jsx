import React from 'react';

export default class MainSection extends React.Component {
    render () {
        return(
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <br/><br/>
                    <h1 className="header center orange-text">Whoop Whoop!</h1>
                    <div className="row center">
                        random me some food..
                    </div>
                    <div className="row center">
                        <a id="download-button" className="btn-large waves-effect waves-light orange">Roll</a>
                    </div>
                    <br/><br/>
                </div>
            </div>
        )
    }
};