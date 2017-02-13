import React from 'react';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: props.color
        };
    }
    componentDidMount() {
        $('.button-collapse').sideNav();
    }
    handleClick(){ }
    render (){
        return (
        <nav className={this.state.color+" lighten-1"} role="navigation">
            <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">{this.props.name}</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#" onClick={this.handleClick.bind(this)}>About</a></li>
                </ul>
                <ul id="nav-mobile" className="side-nav">
                    <li><a href="#" onClick={this.handleClick.bind(this)} >About</a></li>
                </ul>
                <a href="#"data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        </nav>
        );
    }
};
