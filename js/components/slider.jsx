import React from "react";
import Slider from 'react-slick';


export default class Fade extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            centerPadding: '100px'
        };
        return (
            <div>
                <h2>Moon Gallery</h2>
                <Slider {...settings}>
                    {this.props.images.map(image=>(
                        <div key={image} >
                            <div style={{
                                backgroundImage: `url('${image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                width: '1000px',
                                height: '500px',
                                margin: '0 auto'
                            }}>
                            </div>
                        </div>
                    ))}


                </Slider>
            </div>
        );
    }
}