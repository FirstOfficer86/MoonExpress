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

    scrollTo = (e) => {
        e.preventDefault();
        const section = document.getElementById(e.target.hash.replace('#', ''));
        const top = window.scrollY + section.getBoundingClientRect().top - 100;
        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }



// dodaje klase active tylko w momencie gdzie jest true !
    render() {
        return(
            <nav className={`${this.state.active ? 'active' : ''}`}>
                <h1>MoonExpress</h1>
                <button onClick={this.handleClick} className={`hamburger ${this.state.active ? 'active' : ''}`}></button>
                <ul className={`menu ${this.state.active ? 'active' : ''}`}>
                    <li><a href="#home-div" onClick={(e) => this.scrollTo(e)}>Main </a></li>
                    <li><a href="#main-div-moons" onClick={(e) => this.scrollTo(e)}>Moons </a></li>
                    <li><a href="#slider" onClick={(e) => this.scrollTo(e)}>Gallery </a></li>
                    <li><a href="#footer" onClick={(e) => this.scrollTo(e)}>Contact</a></li>
                </ul>
            </nav>

        )
    }
}