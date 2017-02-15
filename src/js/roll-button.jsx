import React from 'react';

class RollButton extends React.Component {
    constructor(props) {
        super(props);   
    }
    render() {
       
        return (
            <div className="row center">
                <a onClick={this.props.RollHandler} className="btn-large waves-effect waves-light orange">Roll</a>
            </div>
        );
    }
}

export default RollButton;