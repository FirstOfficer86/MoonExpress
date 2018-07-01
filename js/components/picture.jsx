import React from 'react';

export default class Picture extends React.Component {
    render() {
        return(
            <div style={{
                backgroundImage: `url('./image/picture.jpg')`,
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