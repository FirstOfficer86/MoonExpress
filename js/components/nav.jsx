import React from "react";

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }


// dodaje klase active tylko w momencie gdzie jest true !
    render() {
        return(
            <nav className={`${this.state.active ? 'active' : ''}`}>
                <h1>MoonExpress</h1>
                <button onClick={this.handleClick} className={`hamburger ${this.state.active ? 'active' : ''}`}></button>
                <ul className={`menu ${this.state.active ? 'active' : ''}`}>
                    <li><a href="#main-div">Main </a></li>
                    <li><a href="#main-div-moons">Moons </a></li>
                    <li><a href="#slider">Gallery </a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>

        )
    }
}