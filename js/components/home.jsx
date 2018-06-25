import React from 'react';
// import Image from './image/home.jpg';

export default class HomePage extends React.Component {
    render() {
        return(
            <div style={{
                backgroundImage: `url('./image/home.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "1100px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
            }}>
                <div>
                    <h1>The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself</h1>
                </div>
            </div>
        )
    }
}