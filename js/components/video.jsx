import React from 'react';

export default class SpaceVideo extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: '../video/star_2.mp4'
        }
    }

    render () {
        return (
            <div id='video'>
                <video id="background-video" loop autoPlay>
                    <source src={this.state.videoURL} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
};
